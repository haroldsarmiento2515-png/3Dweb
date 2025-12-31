<script>
  import { T, useTask } from '@threlte/core';
  import * as THREE from 'three';
  import { onMount } from 'svelte';
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

  export let opacity = 1;

  let mountainScene = null;
  let isLoaded = false;
  let time = 0;

  onMount(() => {
    const loader = new GLTFLoader();
    
    loader.load(
      '/models/mountain/scene.gltf',
      (gltf) => {
        console.log('Mountain GLTF loaded successfully:', gltf);
        mountainScene = gltf.scene;
        
        // Setup materials
        mountainScene.traverse((child) => {
          if (child.isMesh && child.material) {
            const materials = Array.isArray(child.material) ? child.material : [child.material];
            materials.forEach((mat) => {
              mat.transparent = true;
              mat.opacity = opacity;
            });
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });
        
        isLoaded = true;
      },
      (progress) => {
        console.log('Loading mountain:', (progress.loaded / progress.total * 100).toFixed(1) + '%');
      },
      (error) => {
        console.error('Error loading mountain GLTF:', error);
      }
    );
  });

  // Update materials when opacity changes
  $: if (mountainScene && isLoaded) {
    mountainScene.traverse((child) => {
      if (child.isMesh && child.material) {
        const materials = Array.isArray(child.material) ? child.material : [child.material];
        materials.forEach((mat) => {
          mat.opacity = opacity;
          mat.needsUpdate = true;
        });
      }
    });
  }

  useTask((delta) => {
    time += delta;
  });
</script>

{#if isLoaded && mountainScene}
  <!-- Main mountain - center back, large and dominant -->
  <T.Group
    position={[0, -3, -18]}
    scale={[120, 120, 120]}
    rotation={[0, 0, 0]}
  >
    <T is={mountainScene} />
  </T.Group>

  <!-- Second mountain - right side -->
  <T.Group
    position={[25, -4, -22]}
    scale={[100, 100, 100]}
    rotation={[0, 0.5, 0]}
  >
    <T is={mountainScene.clone()} />
  </T.Group>

  <!-- Third mountain - left side -->
  <T.Group
    position={[-25, -4, -20]}
    scale={[95, 95, 95]}
    rotation={[0, -0.5, 0]}
  >
    <T is={mountainScene.clone()} />
  </T.Group>
{/if}
