<script>
  import { T, useTask, useThrelte } from '@threlte/core';
  import { onMount } from 'svelte';
  import * as THREE from 'three';

  export let opacity = 1;
  export let particleCount = 200;
  export let areaSize = 30;

  let time = 0;
  let particleGeometry;
  let particleMaterial;
  let positions = [];
  let velocities = [];
  let sizes = [];
  let alphas = [];

  // Initialize particles
  onMount(() => {
    positions = new Float32Array(particleCount * 3);
    velocities = [];
    sizes = new Float32Array(particleCount);
    alphas = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      // Random positions in a wide area
      positions[i * 3] = (Math.random() - 0.5) * areaSize;
      positions[i * 3 + 1] = Math.random() * 15 - 2; // Y: -2 to 13
      positions[i * 3 + 2] = (Math.random() - 0.5) * areaSize;

      // Random velocities for floating motion
      velocities.push({
        x: (Math.random() - 0.5) * 0.3,
        y: (Math.random() - 0.5) * 0.2 + 0.1, // Slight upward bias
        z: (Math.random() - 0.5) * 0.3
      });

      // Random sizes
      sizes[i] = Math.random() * 3 + 1;

      // Random alpha
      alphas[i] = Math.random() * 0.5 + 0.3;
    }

    if (particleGeometry) {
      particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      particleGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
      particleGeometry.setAttribute('alpha', new THREE.BufferAttribute(alphas, 1));
    }
  });

  // Animate particles
  useTask((delta) => {
    time += delta;

    if (!particleGeometry || !positions.length) return;

    const posAttr = particleGeometry.getAttribute('position');
    if (!posAttr) return;

    for (let i = 0; i < particleCount; i++) {
      // Get current position
      let x = posAttr.getX(i);
      let y = posAttr.getY(i);
      let z = posAttr.getZ(i);

      // Add velocity with some wave motion
      const wave = Math.sin(time * 0.5 + i * 0.1) * 0.02;
      x += velocities[i].x * delta + wave;
      y += velocities[i].y * delta;
      z += velocities[i].z * delta + Math.cos(time * 0.3 + i * 0.1) * 0.01;

      // Wrap around boundaries
      const halfSize = areaSize / 2;
      if (x > halfSize) x = -halfSize;
      if (x < -halfSize) x = halfSize;
      if (y > 15) y = -2;
      if (y < -2) y = 15;
      if (z > halfSize) z = -halfSize;
      if (z < -halfSize) z = halfSize;

      posAttr.setXYZ(i, x, y, z);
    }

    posAttr.needsUpdate = true;
  });

  // Custom shader material for soft, glowing particles
  const vertexShader = `
    attribute float size;
    attribute float alpha;
    varying float vAlpha;
    varying float vDistance;

    void main() {
      vAlpha = alpha;
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      vDistance = -mvPosition.z;
      gl_PointSize = size * (150.0 / -mvPosition.z);
      gl_Position = projectionMatrix * mvPosition;
    }
  `;

  const fragmentShader = `
    uniform float uOpacity;
    uniform float uTime;
    varying float vAlpha;
    varying float vDistance;

    void main() {
      // Create soft circular particle
      vec2 center = gl_PointCoord - vec2(0.5);
      float dist = length(center);

      // Soft edge falloff
      float strength = 1.0 - smoothstep(0.0, 0.5, dist);
      strength *= strength; // Make it softer

      // Fade based on distance for depth effect
      float distanceFade = smoothstep(30.0, 5.0, vDistance);

      // Pulsing effect
      float pulse = sin(uTime * 2.0 + vDistance * 0.5) * 0.15 + 0.85;

      // Final color - soft white/gray particles
      vec3 color = vec3(0.9, 0.92, 0.95);
      float finalAlpha = strength * vAlpha * uOpacity * distanceFade * pulse * 0.6;

      gl_FragColor = vec4(color, finalAlpha);
    }
  `;

  let shaderUniforms = {
    uOpacity: { value: opacity },
    uTime: { value: 0 }
  };

  // Update uniforms
  useTask((delta) => {
    if (shaderUniforms) {
      shaderUniforms.uTime.value += delta;
      shaderUniforms.uOpacity.value = opacity;
    }
  });
</script>

<!-- Particle system -->
<T.Points>
  <T.BufferGeometry bind:ref={particleGeometry} />
  <T.ShaderMaterial
    bind:ref={particleMaterial}
    vertexShader={vertexShader}
    fragmentShader={fragmentShader}
    uniforms={shaderUniforms}
    transparent={true}
    depthWrite={false}
    blending={THREE.AdditiveBlending}
  />
</T.Points>
