<script>
  import { T, useTask } from '@threlte/core';
  import { interactivity } from '@threlte/extras';
  import { createEventDispatcher, onMount } from 'svelte';
  import * as THREE from 'three';
  import Igloo from './Igloo.svelte';
  import Mountains from './Mountains.svelte';
  import CaveEnvironment from './CaveEnvironment.svelte';

  // Enable interactivity - must be called inside a Canvas child component
  interactivity();

  export let scrollProgress = 0;
  export let currentSection = 0;
  export let mousePosition = { x: 0.5, y: 0.5 };
  export let stones = [];
  export let modalOpen = false;

  const dispatch = createEventDispatcher();

  let time = 0;
  let cameraRef;

  // =====================
  // SIMPLE SCROLL - Normal website style
  // Hero (0-10%), then stones (10-100%)
  // =====================
  const HERO_END = 0.10;

  // Simple transition from hero to stones view
  $: transitionProgress = Math.min(1, Math.max(0, scrollProgress / HERO_END));

  // Scene visibility
  $: iglooOpacity = scrollProgress < HERO_END ? 1 - (scrollProgress / HERO_END) : 0;
  $: iglooVisible = scrollProgress < HERO_END + 0.02;

  $: platformOpacity = scrollProgress > HERO_END * 0.5 ? 1 : scrollProgress / (HERO_END * 0.5);
  $: platformVisible = scrollProgress > HERO_END * 0.3;

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
  // BACKGROUND COLOR - Clean gray
  // =====================
  const bgColor = 'rgb(180, 185, 195)';
  const fogColor = 'rgb(180, 185, 195)';
  const fogNear = 15;
  const fogFar = 50;

  function handleStoneClick(event) {
    dispatch('stoneClick', event.detail);
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

<!-- BACKGROUND & FOG -->
<T.Color attach="background" args={[bgColor]} />
<T.Fog attach="fog" args={[fogColor, fogNear, fogFar]} />

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
    <Igloo {scrollProgress} visible={true} opacity={iglooOpacity} />
  </T.Group>
{/if}

<!-- ===================== -->
<!-- STONES SCENE - Normal vertical scroll -->
<!-- ===================== -->
{#if platformVisible}
  <CaveEnvironment
    opacity={platformOpacity}
    {scrollProgress}
    {currentSection}
    transitionProgress={transitionProgress}
    caveDepthProgress={0}
    {stones}
    {modalOpen}
    on:stoneClick={handleStoneClick}
  />
{/if}