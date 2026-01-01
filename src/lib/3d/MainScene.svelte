<script>
  import { T, useTask } from '@threlte/core';
  import { interactivity } from '@threlte/extras';
  import { createEventDispatcher, onMount } from 'svelte';
  import * as THREE from 'three';
  import Igloo from './Igloo.svelte';
  import Mountains from './Mountains.svelte';
  import CaveEnvironment from './CaveEnvironment.svelte';
  import BackgroundParticles from './BackgroundParticles.svelte';

  // Enable interactivity - must be called inside a Canvas child component
  interactivity({
    filter: (hits) => {
      // Return all hits to ensure click detection works
      return hits;
    }
  });

  export let scrollProgress = 0;
  export let currentSection = 0;
  export let mousePosition = { x: 0.5, y: 0.5 };
  export let stones = [];
  export let modalOpen = false;

  const dispatch = createEventDispatcher();

  let time = 0;
  let cameraRef;

  // =====================
  // TRANSITION ZONE - Overlap for smooth igloo-to-stone transition
  // Transition happens during scroll 8% to 30% for clear visibility
  // =====================
  const TRANSITION_START = 0.08;  // When transition begins
  const TRANSITION_END = 0.30;    // When transition completes

  // Scene visibility - overlap during transition
  $: iglooVisible = scrollProgress < TRANSITION_END + 0.05;
  $: platformVisible = scrollProgress >= TRANSITION_START;

  // Calculate transition progress (0 at start, 1 at end)
  $: iglooTransitionProgress = Math.min(1, Math.max(0, (scrollProgress - TRANSITION_START) / (TRANSITION_END - TRANSITION_START)));

  // Igloo fades during transition
  $: iglooOpacity = Math.max(0, 1 - iglooTransitionProgress * 1.5);

  // Platform fades in during transition (starts after 30% of transition)
  $: platformOpacity = Math.min(1, Math.max(0, (iglooTransitionProgress - 0.3) / 0.7));

  // =====================
  // FIXED CAMERA - Stationary, facing forward
  // =====================
  const fixedCamPos = { x: 0, y: 2, z: 8 };

  // Slight mouse parallax for polish
  $: cameraX = fixedCamPos.x + (mousePosition.x - 0.5) * 0.5;
  $: cameraY = fixedCamPos.y + (mousePosition.y - 0.5) * 0.3;
  $: cameraZ = fixedCamPos.z;

  useTask(() => {
    if (cameraRef) {
      cameraRef.lookAt(0, 1.5, 0);
    }
  });

  useTask((delta) => {
    time += delta;
  });

  // =====================
  // BACKGROUND COLOR - Transparent to show CSS gradient
  // =====================
  const bgColor = null;

  function handleStoneClick(event) {
    dispatch('stoneClick', event.detail);
  }

  function handleZoomComplete(event) {
    dispatch('zoomComplete', event.detail);
  }
</script>

<!-- CAMERA - Fixed position, facing forward -->
<T.PerspectiveCamera
  bind:ref={cameraRef}
  makeDefault
  position={[cameraX, cameraY, cameraZ]}
  fov={50}
  near={0.1}
  far={100}
/>

<!-- BACKGROUND - Transparent to show CSS gradient behind -->

<!-- ===================== -->
<!-- MAIN SCENE LIGHTING  -->
<!-- ===================== -->
<T.AmbientLight intensity={0.6} color={0xb0b0b0} />
<T.DirectionalLight position={[5, 10, 5]} intensity={1.5} color={0xffffff} castShadow />
<T.DirectionalLight position={[-5, 8, -5]} intensity={0.8} color={0xe8e8e8} />
<T.PointLight position={[0, 5, 3]} intensity={1.2} color={0xffffff} distance={20} decay={2} />

<!-- ===================== -->
<!-- IGLOO SCENE (hero view) -->
<!-- ===================== -->
{#if iglooVisible}
  <T.Group position={[0, 0, 0]} scale={[1, 1, 1]}>
    <Mountains opacity={iglooOpacity} />
    <Igloo {scrollProgress} visible={true} opacity={iglooOpacity} transitionProgress={iglooTransitionProgress} />
  </T.Group>
{/if}

<!-- ===================== -->
<!-- STONES SCENE - Normal vertical scroll -->
<!-- ===================== -->
{#if platformVisible}
  <!-- Background particles -->
  <BackgroundParticles opacity={platformOpacity} particleCount={300} areaSize={40} />

  <CaveEnvironment
    opacity={platformOpacity}
    {scrollProgress}
    {currentSection}
    transitionProgress={iglooTransitionProgress}
    caveDepthProgress={0}
    {stones}
    {modalOpen}
    on:stoneClick={handleStoneClick}
    on:zoomComplete={handleZoomComplete}
  />
{/if}