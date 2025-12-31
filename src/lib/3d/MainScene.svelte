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
  // SCENE TRANSITION CONFIG (simplified - direct transition)
  // Hero(0-9%), then Platform with stones (9-100%)
  // =====================
  const TRANSITION_START = 0.05;
  const TRANSITION_END = 0.12;
  const PLATFORM_START = 0.12;

  // Simple transition progress (0 = igloo, 1 = platform)
  $: transitionProgress = Math.min(1, Math.max(0,
    (scrollProgress - TRANSITION_START) / (TRANSITION_END - TRANSITION_START)
  ));

  // How deep into the platform (0-1 while viewing stones)
  $: platformDepthProgress = scrollProgress > PLATFORM_START
    ? Math.min(1, (scrollProgress - PLATFORM_START) / (0.63 - PLATFORM_START))
    : 0;

  // Scene visibility - simple crossfade
  $: iglooOpacity = 1 - transitionProgress;
  $: iglooVisible = transitionProgress < 0.99;

  $: platformOpacity = transitionProgress;
  $: platformVisible = transitionProgress > 0.01;

  // =====================
  // CAMERA POSITIONS
  // =====================
  const iglooCamPos = { x: 9, y: 5, z: 9 };
  const platformCamPos = { x: 0, y: 2, z: 4 };
  const platformDeepPos = { x: 0, y: 1.5, z: -24 };

  function lerp(a, b, t) {
    return a + (b - a) * t;
  }

  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  $: smoothTransition = easeInOutCubic(transitionProgress);

  // Camera position based on scroll phase
  let cameraX = iglooCamPos.x;
  let cameraY = iglooCamPos.y;
  let cameraZ = iglooCamPos.z;

  $: {
    if (scrollProgress < TRANSITION_START) {
      // Outside igloo (Hero)
      cameraX = iglooCamPos.x + (mousePosition.x - 0.5) * 2;
      cameraY = iglooCamPos.y + (mousePosition.y - 0.5) * 1;
      cameraZ = iglooCamPos.z;
    } else if (scrollProgress < TRANSITION_END) {
      // Transitioning to platform
      const t = smoothTransition;
      cameraX = lerp(iglooCamPos.x, platformCamPos.x, t) + (mousePosition.x - 0.5) * (2 - t * 1.5);
      cameraY = lerp(iglooCamPos.y, platformCamPos.y, t) + (mousePosition.y - 0.5) * (1 - t * 0.5);
      cameraZ = lerp(iglooCamPos.z, platformCamPos.z, t);
    } else {
      // On platform - traveling through stones
      const t = platformDepthProgress;
      cameraX = lerp(platformCamPos.x, platformDeepPos.x, t) + (mousePosition.x - 0.5) * 0.5;
      cameraY = lerp(platformCamPos.y, platformDeepPos.y, t) + (mousePosition.y - 0.5) * 0.3;
      cameraZ = lerp(platformCamPos.z, platformDeepPos.z, t);
    }
  }

  // Camera look target
  $: lookAtY = lerp(1, 1.5, smoothTransition);
  $: lookAtZ = lerp(0, -5 * platformDepthProgress, transitionProgress);

  useTask(() => {
    if (cameraRef) {
      cameraRef.lookAt(0, lookAtY, lookAtZ);
    }
  });

  useTask((delta) => {
    time += delta;
  });

  // =====================
  // BACKGROUND & FOG COLORS (ash gray theme)
  // =====================
  const iglooSkyColor = { r: 180, g: 195, b: 215 };
  const platformSkyColor = { r: 180, g: 180, b: 180 };  // Ash gray
  const iglooFogColor = { r: 180, g: 195, b: 215 };
  const platformFogColor = { r: 180, g: 180, b: 180 };  // Ash gray fog

  function lerpColor(c1, c2, t) {
    return {
      r: Math.round(c1.r + (c2.r - c1.r) * t),
      g: Math.round(c1.g + (c2.g - c1.g) * t),
      b: Math.round(c1.b + (c2.b - c1.b) * t)
    };
  }

  $: bgColorObj = lerpColor(iglooSkyColor, platformSkyColor, smoothTransition);
  $: bgColor = `rgb(${bgColorObj.r}, ${bgColorObj.g}, ${bgColorObj.b})`;

  $: fogColorObj = lerpColor(iglooFogColor, platformFogColor, smoothTransition);
  $: fogColor = `rgb(${fogColorObj.r}, ${fogColorObj.g}, ${fogColorObj.b})`;

  // Fog pushed much further back to not obscure the scene
  $: fogNear = lerp(80, 60, smoothTransition);
  $: fogFar = lerp(200, 150, smoothTransition);

  function handleStoneClick(event) {
    dispatch('stoneClick', event.detail);
  }
</script>

<!-- CAMERA -->
<T.PerspectiveCamera
  bind:ref={cameraRef}
  makeDefault
  position={[cameraX, cameraY, cameraZ]}
  fov={lerp(45, 55, smoothTransition)}
  near={0.1}
  far={250}
/>

<!-- BACKGROUND & FOG -->
<T.Color attach="background" args={[bgColor]} />
<T.Fog attach="fog" args={[fogColor, fogNear, fogFar]} />

<!-- ===================== -->
<!-- IGLOO SCENE LIGHTING -->
<!-- ===================== -->
{#if iglooVisible}
  <T.DirectionalLight position={[5, 8, 5]} intensity={2 * iglooOpacity} color={0xffffff} castShadow />
  <T.DirectionalLight position={[-5, 10, -5]} intensity={1.5 * iglooOpacity} color={0xf8f8fa} />
  <T.DirectionalLight position={[6, 5, -4]} intensity={0.4 * iglooOpacity} color={0xd8e0f0} />
  <T.AmbientLight intensity={0.35 * iglooOpacity} color={0xa8b0c0} />
{/if}

<!-- ===================== -->
<!-- PLATFORM SCENE LIGHTING  -->
<!-- ===================== -->
{#if platformVisible}
  <T.AmbientLight intensity={0.6 * platformOpacity} color={0xb0b0b0} />

  <!-- Main directional light -->
  <T.DirectionalLight position={[5, 10, 5]} intensity={1.5 * platformOpacity} color={0xffffff} castShadow />
  <T.DirectionalLight position={[-5, 8, -5]} intensity={0.8 * platformOpacity} color={0xe8e8e8} />

  <!-- Soft fill lights along the path -->
  <T.PointLight position={[0, 5, 0]} intensity={1.2 * platformOpacity} color={0xffffff} distance={20} decay={2} />
  <T.PointLight position={[0, 5, -10]} intensity={1.0 * platformOpacity} color={0xf0f0f0} distance={20} decay={2} />
  <T.PointLight position={[0, 5, -20]} intensity={1.0 * platformOpacity} color={0xf0f0f0} distance={20} decay={2} />
{/if}


<!-- ===================== -->
<!-- IGLOO SCENE          -->
<!-- ===================== -->
{#if iglooVisible}
  <T.Group>
    <Mountains opacity={iglooOpacity} />
    <Igloo {scrollProgress} visible={true} opacity={iglooOpacity} />
  </T.Group>
{/if}

<!-- ===================== -->
<!-- PLATFORM SCENE       -->
<!-- ===================== -->
{#if platformVisible}
  <CaveEnvironment
    opacity={platformOpacity}
    {scrollProgress}
    {currentSection}
    transitionProgress={transitionProgress}
    caveDepthProgress={platformDepthProgress}
    {stones}
    {modalOpen}
    on:stoneClick={handleStoneClick}
  />
{/if}