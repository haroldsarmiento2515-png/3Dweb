<script>
  import { T, useTask } from '@threlte/core';
  import * as THREE from 'three';
  import { onMount } from 'svelte';

  export let currentPhase = 0;
  export let scrollProgress = 0;
  export let opacity = 1;

  let time = 0;
  let materialsReady = false;

  // =====================
  // GROUND GEOMETRY
  // =====================
  
  function noise2D(x, y) {
    return Math.sin(x * 1.2) * Math.cos(y * 1.2) * 0.5 +
           Math.sin(x * 2.4 + 1.3) * Math.cos(y * 2.1 + 0.7) * 0.25 +
           Math.sin(x * 4.8 + 2.1) * Math.cos(y * 4.3 + 1.2) * 0.125;
  }
  
  function createGroundGeometry() {
    const geometry = new THREE.PlaneGeometry(40, 40, 80, 80);
    const positions = geometry.attributes.position;
    
    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const y = positions.getY(i);
      
      let z = noise2D(x * 0.15, y * 0.15) * 0.4;
      z += noise2D(x * 0.3 + 10, y * 0.3 + 10) * 0.2;
      z += noise2D(x * 0.6 + 20, y * 0.6 + 20) * 0.1;
      
      const distFromCenter = Math.sqrt(x * x + y * y);
      if (distFromCenter < 8) {
        z += (8 - distFromCenter) * 0.08;
      }
      
      if (y > 0 && y < 8 && Math.abs(x) < 2) {
        z -= 0.1 * Math.max(0, 1 - Math.abs(x) / 2);
      }
      
      positions.setZ(i, z);
    }
    
    positions.needsUpdate = true;
    geometry.computeVertexNormals();
    
    return geometry;
  }

  const groundGeometry = createGroundGeometry();

  // =====================
  // SNOW MATERIAL
  // =====================
  
  const snowVertexShader = `
    varying vec3 vNormal;
    varying vec3 vPosition;
    varying vec3 vWorldPosition;
    varying vec2 vUv;
    
    void main() {
      vNormal = normalize(normalMatrix * normal);
      vPosition = position;
      vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const snowFragmentShader = `
    uniform float uTime;
    uniform float uOpacity;
    uniform vec3 uColor;
    uniform vec3 uShadowColor;
    
    varying vec3 vNormal;
    varying vec3 vPosition;
    varying vec3 vWorldPosition;
    varying vec2 vUv;
    
    float noise(vec2 st) {
      return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
    }
    
    void main() {
      vec3 normal = normalize(vNormal);
      
      vec3 lightDir = normalize(vec3(-0.5, 0.8, 0.6));
      float diff = max(dot(normal, lightDir), 0.0);
      
      vec3 fillDir = normalize(vec3(0.5, 0.3, -0.5));
      float fill = max(dot(normal, fillDir), 0.0) * 0.3;
      
      float ao = pow(max(normal.z, 0.0), 0.5) * 0.4 + 0.6;
      
      float sparkle = noise(vUv * 300.0 + uTime * 0.05);
      sparkle = pow(sparkle, 12.0) * 0.15;
      
      float sss = pow(max(0.0, dot(normal, vec3(0.0, 0.0, 1.0))), 2.0) * 0.04;
      
      vec3 color = mix(uShadowColor, uColor, (diff + fill) * ao);
      color += sparkle * vec3(1.0);
      color += sss * vec3(0.85, 0.88, 0.95);
      
      float dist = length(vWorldPosition.xz);
      float fogFactor = smoothstep(25.0, 60.0, dist);
      vec3 fogColor = vec3(0.65, 0.70, 0.78);
      color = mix(color, fogColor, fogFactor * 0.5);
      
      gl_FragColor = vec4(color, uOpacity);
    }
  `;

  let snowMaterial;

  onMount(() => {
    snowMaterial = new THREE.ShaderMaterial({
      vertexShader: snowVertexShader,
      fragmentShader: snowFragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uOpacity: { value: opacity },
        uColor: { value: new THREE.Color(0.85, 0.88, 0.92) },
        uShadowColor: { value: new THREE.Color(0.55, 0.60, 0.70) }
      },
      transparent: true
    });
    materialsReady = true;
  });

  useTask((delta) => {
    time += delta;
    if (snowMaterial) {
      snowMaterial.uniforms.uTime.value = time;
      snowMaterial.uniforms.uOpacity.value = opacity;
    }
  });
</script>

<!-- Main snowy ground -->
{#if materialsReady && snowMaterial}
  <T.Mesh 
    geometry={groundGeometry}
    material={snowMaterial}
    rotation={[-Math.PI / 2, 0, 0]}
    position={[0, -0.5, 0]}
    receiveShadow
  />
{:else}
  <T.Mesh 
    geometry={groundGeometry}
    rotation={[-Math.PI / 2, 0, 0]}
    position={[0, -0.5, 0]}
    receiveShadow
  >
    <T.MeshStandardMaterial 
      color={0xd5dde8}
      roughness={0.95}
      metalness={0.02}
      transparent
      opacity={opacity}
    />
  </T.Mesh>
{/if}
