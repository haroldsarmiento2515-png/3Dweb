<script>
  import { T, useTask } from '@threlte/core';
  import { interactivity } from '@threlte/extras';
  import { createEventDispatcher, onMount } from 'svelte';
  import * as THREE from 'three';
  import Igloo from './Igloo.svelte';
  import Mountains from './Mountains.svelte';
  import CaveEnvironment from './CaveEnvironment.svelte';
  import PortalTransition from './PortalTransition.svelte';

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
  // SCENE TRANSITION CONFIG (simplified - no exit transition)
  // Hero(0-2%), Entrance(2-5%), Portal(5-9%),
  // Stone1(9-18%), Travel(18-24%), Stone2(24-33%), Travel(33-39%),
  // Stone3(39-48%), Travel(48-54%), Stone4(54-63%), Cave continues(63-100%)
  // =====================
  const ENTRANCE_START = 0.02;
  const ENTRANCE_END = 0.05;
  const PORTAL_START = 0.05;
  const PORTAL_END = 0.09;
  const CAVE_START = 0.09;   // When we enter the cave proper
  const CAVE_END = 1.0;      // Cave continues to the end

  // Calculate entrance transition (descending)
  $: entranceProgress = Math.min(1, Math.max(0,
    (scrollProgress - ENTRANCE_START) / (ENTRANCE_END - ENTRANCE_START)
  ));

  // Calculate portal transition
  $: portalProgress = Math.min(1, Math.max(0,
    (scrollProgress - PORTAL_START) / (PORTAL_END - PORTAL_START)
  ));

  // Combined entry progress (entrance + portal = 0→1)
  $: entryProgress = scrollProgress < PORTAL_START
    ? entranceProgress * 0.5
    : 0.5 + portalProgress * 0.5;

  // Combined transition: 0 = igloo/outside, 1 = cave/inside (no exit transition)
  $: transitionProgress = entryProgress;

  // How deep into the cave (0-1 while inside cave section)
  // This drives camera Z position through the cave
  $: caveDepthProgress = scrollProgress > CAVE_START
    ? Math.min(1, (scrollProgress - CAVE_START) / (0.63 - CAVE_START))
    : 0;
  
  // Scene visibility
  $: iglooOpacity = 1 - transitionProgress;
  $: iglooVisible = transitionProgress < 0.99;
  
  $: caveOpacity = transitionProgress;
  $: caveVisible = transitionProgress > 0.01;
  
  // Portal active states
  $: portalActive = scrollProgress > PORTAL_START && scrollProgress < PORTAL_END;
  
  // =====================
  // CAMERA POSITIONS
  // Camera travels from z=4 (cave entrance) to z=-24 (deepest point)
  // Total travel: 28 units
  // =====================
  const iglooCamPos = { x: 9, y: 5, z: 9 };
  const caveCamPos = { x: 0, y: 2, z: 4 };
  const caveDeepPos = { x: 0, y: 1.5, z: -24 };
  
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
    if (scrollProgress < ENTRANCE_START) {
      // Outside igloo (Hero)
      cameraX = iglooCamPos.x + (mousePosition.x - 0.5) * 2;
      cameraY = iglooCamPos.y + (mousePosition.y - 0.5) * 1;
      cameraZ = iglooCamPos.z;
    } else if (scrollProgress < PORTAL_END) {
      // Entering cave (Entrance + Portal)
      const t = easeInOutCubic(entryProgress);
      cameraX = lerp(iglooCamPos.x, caveCamPos.x, t) + (mousePosition.x - 0.5) * (2 - t * 1.5);
      cameraY = lerp(iglooCamPos.y, caveCamPos.y, t) + (mousePosition.y - 0.5) * (1 - t * 0.5);
      cameraZ = lerp(iglooCamPos.z, caveCamPos.z, t);
    } else {
      // Inside cave - traveling deeper through stones (stays in cave)
      const t = caveDepthProgress;
      cameraX = lerp(caveCamPos.x, caveDeepPos.x, t) + (mousePosition.x - 0.5) * 0.5;
      cameraY = lerp(caveCamPos.y, caveDeepPos.y, t) + (mousePosition.y - 0.5) * 0.3;
      cameraZ = lerp(caveCamPos.z, caveDeepPos.z, t);
    }
  }
  
  // Camera look target
  $: lookAtY = lerp(1, 1.5, smoothTransition);
  $: lookAtZ = lerp(0, -5 * caveDepthProgress, transitionProgress);

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
  const iglooFogColor = { r: 160, g: 175, b: 195 };
  const platformFogColor = { r: 170, g: 170, b: 170 };  // Ash gray fog
  
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

  $: fogNear = lerp(35, 25, smoothTransition);
  $: fogFar = lerp(150, 100, smoothTransition);

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
  far={150}
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
{#if caveVisible}
  <T.AmbientLight intensity={0.6 * caveOpacity} color={0xb0b0b0} />

  <!-- Main directional light -->
  <T.DirectionalLight position={[5, 10, 5]} intensity={1.5 * caveOpacity} color={0xffffff} castShadow />
  <T.DirectionalLight position={[-5, 8, -5]} intensity={0.8 * caveOpacity} color={0xe8e8e8} />

  <!-- Soft fill lights along the path -->
  <T.PointLight position={[0, 5, 0]} intensity={1.2 * caveOpacity} color={0xffffff} distance={20} decay={2} />
  <T.PointLight position={[0, 5, -10]} intensity={1.0 * caveOpacity} color={0xf0f0f0} distance={20} decay={2} />
  <T.PointLight position={[0, 5, -20]} intensity={1.0 * caveOpacity} color={0xf0f0f0} distance={20} decay={2} />
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
<!-- CAVE SCENE           -->
<!-- ===================== -->
{#if caveVisible}
  <CaveEnvironment 
    opacity={caveOpacity} 
    {scrollProgress}
    {currentSection}
    {transitionProgress}
    {caveDepthProgress}
    {stones}
    {modalOpen}
    on:stoneClick={handleStoneClick}
  />
  
  <!-- Portal Transition Effect (only during portal section) -->
  {#if portalActive}
    <PortalTransition 
      progress={portalProgress}
      active={true}
      isExiting={false}
    />
  {/if}
{/if}


<!-- ===================== -->
<!-- TRANSITION PARTICLES -->
<!-- ===================== -->
{#if entryProgress > 0 && entryProgress < 1}
  <T.Points>
    <T.BufferGeometry>
      <T.BufferAttribute
        attach="attributes-position"
        args={[new Float32Array(Array(450).fill(0).flatMap(() => [
          (Math.random() - 0.5) * 25,
          Math.random() * 12,
          (Math.random() - 0.5) * 30
        ])), 3]}
      />
    </T.BufferGeometry>
    <T.PointsMaterial
      color={0xffffff}
      size={0.06}
      transparent
      opacity={0.4 * Math.sin(entryProgress * Math.PI)}
      blending={THREE.AdditiveBlending}
    />
  </T.Points>
{/if}