<script>
  import { onMount, onDestroy, createEventDispatcher } from 'svelte';
  import * as THREE from 'three';
  import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
  import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
  import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

  export let scrollProgress = 0;
  export let scrollVelocity = 0;

  const dispatch = createEventDispatcher();

  // Configuration
  const CONFIG = {
    particleCount: 50000,
    cameraDistance: 5,
    bloomStrength: 1.5,
    bloomRadius: 0.4,
    bloomThreshold: 0.2,
    fogDensity: 0.15,
    particleSize: 2.5
  };

  let container;
  let scene, camera, renderer, composer;
  let particleSystem, particleMaterial;
  let positions;
  let animationFrameId;

  // Shape generators
  const shapes = {
    sphere: (i, total) => {
      const phi = Math.acos(-1 + (2 * i) / total);
      const theta = Math.sqrt(total * Math.PI) * phi;
      const radius = 1.5;
      return {
        x: radius * Math.cos(theta) * Math.sin(phi),
        y: radius * Math.sin(theta) * Math.sin(phi),
        z: radius * Math.cos(phi)
      };
    },

    torus: (i, total) => {
      const u = (i / total) * Math.PI * 2 * 32;
      const v = (i % 100) / 100 * Math.PI * 2;
      const R = 1.2;
      const r = 0.4;
      return {
        x: (R + r * Math.cos(v)) * Math.cos(u),
        y: (R + r * Math.cos(v)) * Math.sin(u),
        z: r * Math.sin(v)
      };
    },

    cube: (i, total) => {
      const side = Math.cbrt(total);
      const size = 2;
      const x = ((i % side) / side - 0.5) * size;
      const y = ((Math.floor(i / side) % side) / side - 0.5) * size;
      const z = ((Math.floor(i / (side * side))) / side - 0.5) * size;
      const noise = 0.1;
      return {
        x: x + (Math.random() - 0.5) * noise,
        y: y + (Math.random() - 0.5) * noise,
        z: z + (Math.random() - 0.5) * noise
      };
    },

    human: (i, total) => {
      const t = i / total;
      let x, y, z;
      
      if (t < 0.15) {
        const angle = (t / 0.15) * Math.PI * 2;
        const radius = 0.3;
        x = Math.cos(angle) * radius * 0.8;
        y = 1.5 + Math.sin(angle) * radius;
        z = (Math.random() - 0.5) * 0.3;
      } else if (t < 0.45) {
        const progress = (t - 0.15) / 0.3;
        x = (Math.random() - 0.5) * (0.8 - progress * 0.3);
        y = 1.2 - progress * 1.5;
        z = (Math.random() - 0.5) * 0.4;
      } else if (t < 0.65) {
        const progress = (t - 0.45) / 0.2;
        x = -0.4 - progress * 0.8;
        y = 0.8 - progress * 0.3;
        z = (Math.random() - 0.5) * 0.2;
      } else if (t < 0.85) {
        const progress = (t - 0.65) / 0.2;
        x = 0.4 + progress * 0.8;
        y = 0.8 - progress * 0.3;
        z = (Math.random() - 0.5) * 0.2;
      } else {
        const progress = (t - 0.85) / 0.15;
        const legSide = Math.random() > 0.5 ? 1 : -1;
        x = legSide * 0.25 + (Math.random() - 0.5) * 0.1;
        y = -0.3 - progress * 1.2;
        z = (Math.random() - 0.5) * 0.2;
      }
      
      return { x, y, z };
    },

    disperse: (i, total) => {
      const phi = Math.random() * Math.PI * 2;
      const theta = Math.random() * Math.PI;
      const radius = 2 + Math.random() * 4;
      return {
        x: radius * Math.sin(theta) * Math.cos(phi),
        y: radius * Math.sin(theta) * Math.sin(phi),
        z: radius * Math.cos(theta)
      };
    }
  };

  // Precomputed shape positions
  let shapePositions = {};

  function precomputeShapes() {
    const shapeNames = ['sphere', 'torus', 'cube', 'human', 'disperse'];
    shapeNames.forEach(name => {
      shapePositions[name] = new Float32Array(CONFIG.particleCount * 3);
      for (let i = 0; i < CONFIG.particleCount; i++) {
        const pos = shapes[name](i, CONFIG.particleCount);
        shapePositions[name][i * 3] = pos.x;
        shapePositions[name][i * 3 + 1] = pos.y;
        shapePositions[name][i * 3 + 2] = pos.z;
      }
    });
  }

  function lerp(a, b, t) {
    return a + (b - a) * t;
  }

  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function morphParticles(progress) {
    const stages = ['sphere', 'torus', 'cube', 'human', 'disperse'];
    const stageProgress = progress * (stages.length - 1);
    const fromStage = Math.floor(stageProgress);
    const toStage = Math.min(fromStage + 1, stages.length - 1);
    const t = stageProgress - fromStage;

    const fromPositions = shapePositions[stages[fromStage]];
    const toPositions = shapePositions[stages[toStage]];
    const eased = easeInOutCubic(t);
    const noiseScale = Math.abs(scrollVelocity) * 0.5;

    for (let i = 0; i < CONFIG.particleCount; i++) {
      const i3 = i * 3;
      const noise = {
        x: (Math.random() - 0.5) * noiseScale,
        y: (Math.random() - 0.5) * noiseScale,
        z: (Math.random() - 0.5) * noiseScale
      };

      positions[i3] = lerp(fromPositions[i3], toPositions[i3], eased) + noise.x;
      positions[i3 + 1] = lerp(fromPositions[i3 + 1], toPositions[i3 + 1], eased) + noise.y;
      positions[i3 + 2] = lerp(fromPositions[i3 + 2], toPositions[i3 + 2], eased) + noise.z;
    }

    particleSystem.geometry.attributes.position.needsUpdate = true;
  }

  function init() {
    // Scene
    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0a0a, CONFIG.fogDensity);

    // Camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = CONFIG.cameraDistance;

    // Renderer
    renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x0a0a0a);
    container.appendChild(renderer.domElement);

    // Post-processing
    composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      CONFIG.bloomStrength,
      CONFIG.bloomRadius,
      CONFIG.bloomThreshold
    );
    composer.addPass(bloomPass);

    // Particles
    precomputeShapes();
    createParticles();

    // Events
    window.addEventListener('resize', onResize);

    // Start animation
    animate();
    dispatch('loaded');
  }

  function createParticles() {
    const geometry = new THREE.BufferGeometry();
    positions = new Float32Array(CONFIG.particleCount * 3);
    const colors = new Float32Array(CONFIG.particleCount * 3);
    const sizes = new Float32Array(CONFIG.particleCount);

    for (let i = 0; i < CONFIG.particleCount; i++) {
      const pos = shapes.sphere(i, CONFIG.particleCount);
      positions[i * 3] = pos.x;
      positions[i * 3 + 1] = pos.y;
      positions[i * 3 + 2] = pos.z;

      const brightness = 0.7 + Math.random() * 0.3;
      colors[i * 3] = brightness;
      colors[i * 3 + 1] = brightness;
      colors[i * 3 + 2] = brightness;

      sizes[i] = CONFIG.particleSize * (0.5 + Math.random() * 0.5);
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    particleMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        pixelRatio: { value: renderer.getPixelRatio() }
      },
      vertexShader: `
        attribute float size;
        attribute vec3 color;
        varying vec3 vColor;
        varying float vAlpha;
        uniform float time;
        uniform float pixelRatio;

        void main() {
          vColor = color;
          
          vec3 pos = position;
          float noise = sin(pos.x * 2.0 + time) * cos(pos.y * 2.0 + time) * 0.02;
          pos += noise;
          
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = size * pixelRatio * (300.0 / -mvPosition.z);
          
          float dist = length(mvPosition.xyz);
          vAlpha = smoothstep(10.0, 2.0, dist);
          
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vAlpha;

        void main() {
          vec2 center = gl_PointCoord - vec2(0.5);
          float dist = length(center);
          
          if (dist > 0.5) discard;
          
          float alpha = smoothstep(0.5, 0.1, dist) * vAlpha;
          vec3 glow = vColor * (1.0 + smoothstep(0.3, 0.0, dist) * 0.5);
          
          gl_FragColor = vec4(glow, alpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    particleSystem = new THREE.Points(geometry, particleMaterial);
    scene.add(particleSystem);
  }

  function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    composer.setSize(window.innerWidth, window.innerHeight);
  }

  function animate() {
    animationFrameId = requestAnimationFrame(animate);

    const time = performance.now() * 0.001;
    particleMaterial.uniforms.time.value = time;

    morphParticles(scrollProgress);

    particleSystem.rotation.y += scrollVelocity * 0.1 + 0.001;
    particleSystem.rotation.x = Math.sin(time * 0.1) * 0.1;

    camera.position.x = Math.sin(time * 0.2) * 0.2;
    camera.position.y = Math.cos(time * 0.3) * 0.1;

    composer.render();
  }

  onMount(() => {
    init();
  });

  onDestroy(() => {
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
    window.removeEventListener('resize', onResize);
    if (renderer) {
      renderer.dispose();
      container?.removeChild(renderer.domElement);
    }
  });
</script>

<div class="canvas-container" bind:this={container}></div>

<style>
  .canvas-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 1;
  }

  .canvas-container :global(canvas) {
    display: block;
  }
</style>
