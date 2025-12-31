<script>
  import { T, useTask } from '@threlte/core';
  import { interactivity } from '@threlte/extras';
  import { createEventDispatcher, onMount } from 'svelte';
  import * as THREE from 'three';
  import Igloo from './Igloo.svelte';
  import Ground from './Ground.svelte';
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
  // SCENE TRANSITION CONFIG (new flow with travel transitions)
  // Hero(0-2%), Entrance(2-5%), Portal(5-9%), 
  // Stone1(9-18%), Travel(18-24%), Stone2(24-33%), Travel(33-39%), 
  // Stone3(39-48%), Travel(48-54%), Stone4(54-63%), 
  // Exit(63-70%), Finale(70-100%)
  // =====================
  const ENTRANCE_START = 0.02;
  const ENTRANCE_END = 0.05;
  const PORTAL_START = 0.05;
  const PORTAL_END = 0.09;
  const CAVE_START = 0.09;   // When we enter the cave proper
  const CAVE_END = 0.63;     // When we start exiting
  const EXIT_START = 0.63;
  const EXIT_END = 0.70;
  
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
  
  // Calculate exit transition (0 = still in cave, 1 = back outside)
  $: exitProgress = Math.min(1, Math.max(0, 
    (scrollProgress - EXIT_START) / (EXIT_END - EXIT_START)
  ));
  
  // Combined transition: 0 = igloo/outside, 1 = cave/inside
  $: transitionProgress = scrollProgress < EXIT_START 
    ? entryProgress 
    : entryProgress * (1 - exitProgress);
  
  // How deep into the cave (0-1 while inside cave section)
  // This drives camera Z position through the cave
  $: caveDepthProgress = scrollProgress > CAVE_START && scrollProgress < CAVE_END
    ? (scrollProgress - CAVE_START) / (CAVE_END - CAVE_START)
    : scrollProgress >= CAVE_END ? 1 : 0;
  
  // Scene visibility
  $: iglooOpacity = 1 - transitionProgress;
  $: iglooVisible = transitionProgress < 0.99;
  
  $: caveOpacity = transitionProgress;
  $: caveVisible = transitionProgress > 0.01;
  
  // Portal active states
  $: portalActive = scrollProgress > PORTAL_START && scrollProgress < PORTAL_END;
  
  // Exit state
  $: isExiting = scrollProgress >= EXIT_START && scrollProgress <= EXIT_END;
  $: exitIntensity = isExiting ? Math.sin(exitProgress * Math.PI) : 0;
  
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
    } else if (scrollProgress < EXIT_START) {
      // Inside cave - traveling deeper through stones
      const t = caveDepthProgress;
      cameraX = lerp(caveCamPos.x, caveDeepPos.x, t) + (mousePosition.x - 0.5) * 0.5;
      cameraY = lerp(caveCamPos.y, caveDeepPos.y, t) + (mousePosition.y - 0.5) * 0.3;
      cameraZ = lerp(caveCamPos.z, caveDeepPos.z, t);
    } else if (scrollProgress < EXIT_END) {
      // Exiting cave - reverse journey back out
      const t = easeInOutCubic(exitProgress);
      cameraX = lerp(caveDeepPos.x, iglooCamPos.x, t) + (mousePosition.x - 0.5) * (0.5 + t * 1.5);
      cameraY = lerp(caveDeepPos.y, iglooCamPos.y, t) + (mousePosition.y - 0.5) * (0.3 + t * 0.7);
      cameraZ = lerp(caveDeepPos.z, iglooCamPos.z, t);
    } else {
      // Back at igloo (Finale)
      cameraX = iglooCamPos.x + (mousePosition.x - 0.5) * 2;
      cameraY = iglooCamPos.y + (mousePosition.y - 0.5) * 1;
      cameraZ = iglooCamPos.z;
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
  // BACKGROUND & FOG COLORS
  // =====================
  const iglooSkyColor = { r: 180, g: 195, b: 215 };
  const caveSkyColor = { r: 15, g: 18, b: 25 };
  const iglooFogColor = { r: 160, g: 175, b: 195 };
  const caveFogColor = { r: 20, g: 25, b: 35 };
  
  function lerpColor(c1, c2, t) {
    return {
      r: Math.round(c1.r + (c2.r - c1.r) * t),
      g: Math.round(c1.g + (c2.g - c1.g) * t),
      b: Math.round(c1.b + (c2.b - c1.b) * t)
    };
  }
  
  $: bgColorObj = lerpColor(iglooSkyColor, caveSkyColor, smoothTransition);
  $: bgColor = `rgb(${bgColorObj.r}, ${bgColorObj.g}, ${bgColorObj.b})`;
  
  $: fogColorObj = lerpColor(iglooFogColor, caveFogColor, smoothTransition);
  $: fogColor = `rgb(${fogColorObj.r}, ${fogColorObj.g}, ${fogColorObj.b})`;
  
  $: fogNear = lerp(35, 5, smoothTransition);
  $: fogFar = lerp(150, 40, smoothTransition);

  function handleStoneClick(event) {
    dispatch('stoneClick', event.detail);
  }
</script>

<!-- CAMERA -->
<T.PerspectiveCamera
  bind:ref={cameraRef}
  makeDefault
  position={[cameraX, cameraY, cameraZ]}
  fov={lerp(45, 55 - exitProgress * 10, smoothTransition)}
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
<!-- CAVE SCENE LIGHTING  -->
<!-- ===================== -->
{#if caveVisible}
  <T.AmbientLight intensity={0.15 * caveOpacity} color={0x2a3a4a} />
  
  <!-- Cyan crystal lights along cave path -->
  <T.PointLight position={[-3, 3, -5 - caveDepthProgress * 10]} intensity={2 * caveOpacity} color={0x4de8ff} distance={15} decay={2} />
  <T.PointLight position={[4, 2, -8 - caveDepthProgress * 8]} intensity={1.5 * caveOpacity} color={0x66e5ff} distance={12} decay={2} />
  <T.PointLight position={[-2, 4, -15 - caveDepthProgress * 5]} intensity={1.2 * caveOpacity} color={0x4de8ff} distance={15} decay={2} />
  
  <!-- Deep purple glow -->
  <T.PointLight position={[0, 5, -20 - caveDepthProgress * 5]} intensity={1.5 * caveOpacity} color={0x8866ff} distance={20} decay={2} />
  
  <!-- Subtle rim light -->
  <T.DirectionalLight position={[0, 4, -15]} intensity={0.3 * caveOpacity} color={0x4488aa} />
{/if}

<!-- ===================== -->
<!-- EXIT LIGHTING        -->
<!-- ===================== -->
{#if isExiting}
  <!-- Bright light from exit -->
  <T.PointLight position={[0, 3, 8]} intensity={exitIntensity * 5} color={0xffffff} distance={25} decay={1} />
  <T.DirectionalLight position={[0, 8, 15]} intensity={exitIntensity * 3} color={0xffffff} />
  
  <!-- Warm sunlight coming from outside -->
  <T.DirectionalLight position={[3, 10, 20]} intensity={exitIntensity * 2} color={0xfff4e8} />
{/if}

<!-- ===================== -->
<!-- IGLOO SCENE          -->
<!-- ===================== -->
{#if iglooVisible}
  <T.Group>
    <Mountains opacity={iglooOpacity} />
    <Ground currentPhase={currentSection} {scrollProgress} opacity={iglooOpacity} />
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
<!-- EXIT PORTAL          -->
<!-- ===================== -->
{#if isExiting}
  <PortalTransition 
    progress={exitProgress}
    active={true}
    isExiting={true}
  />
{/if}

<!-- ===================== -->
<!-- EXIT LIGHT RAYS      -->
<!-- ===================== -->
{#if isExiting}
  <!-- Radial light rays from exit -->
  <T.Group position={[0, 2, 10]}>
    {#each Array(10) as _, i}
      <T.Mesh 
        position={[Math.cos(i / 10 * Math.PI * 2) * 4, Math.sin(i / 10 * Math.PI * 2) * 4, 0]}
        rotation={[0, 0, i / 10 * Math.PI * 2]}
      >
        <T.PlaneGeometry args={[0.6, 20]} />
        <T.MeshBasicMaterial
          color={0xffffff}
          transparent
          opacity={exitIntensity * 0.15}
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
        />
      </T.Mesh>
    {/each}
  </T.Group>
  
  <!-- Exit portal glow -->
  <T.Mesh position={[0, 2, 12]}>
    <T.CircleGeometry args={[6, 32]} />
    <T.MeshBasicMaterial
      color={0xd9e0eb}
      transparent
      opacity={exitIntensity * 0.6}
      side={THREE.DoubleSide}
    />
  </T.Mesh>
{/if}

<!-- ===================== -->
<!-- TRANSITION PARTICLES -->
<!-- ===================== -->
{#if (entryProgress > 0 && entryProgress < 1) || isExiting}
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
      color={isExiting ? 0xffffff : 0x4de8ff}
      size={isExiting ? 0.1 : 0.06}
      transparent
      opacity={0.6 * Math.sin((isExiting ? exitProgress : entryProgress) * Math.PI)}
      blending={THREE.AdditiveBlending}
    />
  </T.Points>
{/if}