<script>
  import { T, useTask } from '@threlte/core';
  import { useGltf } from '@threlte/extras';
  import * as THREE from 'three';

  export let scrollProgress = 0;
  export let visible = true;
  export let opacity = 1;
  export let transitionProgress = 0;  // 0 = no transition, 1 = fully transitioned

  // Ease-out for smoother deceleration
  $: easeOutProgress = 1 - Math.pow(1 - transitionProgress, 3);

  // Calculate shrink effect - igloo shrinks dramatically as we "walk away"
  // Scale goes from 1.0 to 0.05 with ease-out curve
  $: shrinkScale = Math.max(0.05, 1 - (easeOutProgress * 0.95));

  // Position offset - igloo moves back significantly and sinks as we walk away
  $: positionOffsetZ = -easeOutProgress * 25;  // Move far back into distance
  $: positionOffsetY = -easeOutProgress * 5;   // Sink down more noticeably

  // Rotation as it moves away
  $: rotationOffset = easeOutProgress * 0.3;

  let time = 0;
  
  // Load the igloo GLTF model
  const iglooGltf = useGltf('/models/igloo/igloo.gltf');

  // Ice glow material for door effect
  const iceGlowMaterial = new THREE.MeshBasicMaterial({
    color: new THREE.Color(0.4, 0.9, 1.0),
    transparent: true,
    opacity: 0.7,
    side: THREE.DoubleSide
  });

  // Door geometry for glowing entrance effect
  const doorGeometry = new THREE.CircleGeometry(0.6, 32);

  // Update materials when the model is loaded or opacity changes
  $: if ($iglooGltf) {
    console.log('Igloo loaded:', $iglooGltf);
    $iglooGltf.scene.traverse((child) => {
      if (child.isMesh && child.material) {
        const materials = Array.isArray(child.material) ? child.material : [child.material];
        materials.forEach((mat) => {
          mat.transparent = true;
          mat.opacity = opacity;
          // Make the igloo white/icy
          mat.color = new THREE.Color(0.92, 0.95, 1.0);
          mat.emissive = new THREE.Color(0.1, 0.12, 0.18);
          mat.emissiveIntensity = 0.3;
          mat.roughness = 0.6;
          mat.metalness = 0.1;
          mat.side = THREE.DoubleSide;
          mat.needsUpdate = true;
        });
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }

  // Animation loop for pulsing glow
  useTask((delta) => {
    time += delta;
    
    if (iceGlowMaterial) {
      const pulse = Math.sin(time * 1.5) * 0.2 + 0.7;
      iceGlowMaterial.opacity = opacity * pulse;
    }
  });
</script>

{#if visible && $iglooGltf}
  <!-- Outer group for transition animation (shrink + move back + rotate) -->
  <T.Group
    position={[0, positionOffsetY, positionOffsetZ]}
    scale={[shrinkScale, shrinkScale, shrinkScale]}
    rotation.x={rotationOffset * 0.5}
    rotation.y={rotationOffset}
  >
    <!-- Inner group - CENTERED igloo for visible transition -->
    <T.Group
      position={[0, 0.5, 0]}
      scale={[0.4, 0.4, 0.4]}
      rotation={[0, Math.PI * 0.25, 0]}
    >
      <T is={$iglooGltf.scene} />
    </T.Group>
  </T.Group>
  
  <!-- Extra lighting for igloo -->
  <T.DirectionalLight
    position={[5, 10, 5]}
    intensity={2}
    color={0xffffff}
  />
  
  <T.PointLight
    position={[0, 5, 3]}
    color={0xffffff}
    intensity={1.5}
    distance={15}
    decay={1}
  />
  
  <!-- Spotlight on igloo -->
  <T.SpotLight
    position={[0, 8, 5]}
    target-position={[0, 1, 0]}
    angle={0.6}
    penumbra={0.5}
    intensity={2}
    color={0xffffff}
    castShadow
  />
  
  <!-- Door glow effect - positioned relative to centered igloo -->
  <T.Mesh
    geometry={doorGeometry}
    material={iceGlowMaterial}
    position={[0.5, 1.0, 0.5]}
    rotation={[0, Math.PI * 0.25, 0]}
  />

  <!-- Door glow light source -->
  <T.PointLight
    position={[0.6, 1.0, 0.6]}
    color={0x66e5ff}
    intensity={2 * opacity}
    distance={5}
    decay={2}
  />

  <!-- Interior glow -->
  <T.PointLight
    position={[0, 1.2, 0]}
    color={0x4dc8e8}
    intensity={1 * opacity}
    distance={4}
    decay={2}
  />
{/if}