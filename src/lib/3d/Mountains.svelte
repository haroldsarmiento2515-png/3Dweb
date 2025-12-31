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
  <!-- Ground platform - flat area for igloo to sit on -->
  <T.Group
    position={[0, 5.5, 5]}
    scale={[50, 30, 50]}
    rotation={[0, 0, 0]}
  >
    <T is={mountainScene} />
  </T.Group>

  <!-- Main mountain - center back backdrop -->
  <T.Group
    position={[0, -5, -50]}
    scale={[200, 200, 200]}
    rotation={[0, 0, 0]}
  >
    <T is={mountainScene.clone()} />
  </T.Group>

  <!-- Second mountain - right side backdrop -->
  <T.Group
    position={[45, -8, -60]}
    scale={[180, 180, 180]}
    rotation={[0, 0.3, 0]}
  >
    <T is={mountainScene.clone()} />
  </T.Group>

  <!-- Third mountain - left side backdrop -->
  <T.Group
    position={[-45, -7, -55]}
    scale={[170, 170, 170]}
    rotation={[0, -0.3, 0]}
  >
    <T is={mountainScene.clone()} />
  </T.Group>
{/if}
