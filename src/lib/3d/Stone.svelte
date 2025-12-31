<script>
  import { T, useTask } from '@threlte/core';
  import { HTML } from '@threlte/extras';
  import { createEventDispatcher, onMount } from 'svelte';
  import * as THREE from 'three';

  export let id = 'stone';
  export let name = 'Stone';
  export let description = '';
  export let color = '#6a7080';
  export let roughness = 0.5;
  export let metalness = 0.2;
  export let displacement = 0.1;
  export let geometry = 'dodecahedron';
  export let index = 0;
  export let opacity = 1;
  export let isActive = false;
  export let time = 0;

  const dispatch = createEventDispatcher();

  let hovered = false;
  let stoneGeometry;

  // Create stone geometry with organic displacement
  function createStoneGeometry(type, size = 1.8) {
    let geo;
    
    switch(type) {
      case 'dodecahedron':
        geo = new THREE.DodecahedronGeometry(size, 2);
        break;
      case 'icosahedron':
        geo = new THREE.IcosahedronGeometry(size, 2);
        break;
      case 'octahedron':
        geo = new THREE.OctahedronGeometry(size * 1.1, 2);
        break;
      case 'tetrahedron':
        geo = new THREE.TetrahedronGeometry(size * 1.2, 2);
        break;
      default:
        geo = new THREE.DodecahedronGeometry(size, 2);
    }
    
    // Apply organic displacement
    const positions = geo.attributes.position;
    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const y = positions.getY(i);
      const z = positions.getZ(i);
      
      // Multi-frequency noise
      const noise1 = Math.sin(x * 2.5) * Math.cos(y * 2.5) * Math.sin(z * 2.5) * displacement;
      const noise2 = Math.sin(x * 5 + y * 4) * Math.cos(z * 3) * (displacement * 0.5);
      const noise3 = Math.sin(x * 8) * Math.sin(y * 8) * Math.sin(z * 8) * (displacement * 0.25);
      
      const factor = 1 + noise1 + noise2 + noise3;
      
      positions.setX(i, x * factor);
      positions.setY(i, y * factor);
      positions.setZ(i, z * factor);
    }
    
    positions.needsUpdate = true;
    geo.computeVertexNormals();
    
    return geo;
  }

  onMount(() => {
    stoneGeometry = createStoneGeometry(geometry);
  });

  // Animation values
  $: floatY = Math.sin(time * 0.4 + index * 1.5) * 0.08;
  $: rotationY = time * 0.1 + index * Math.PI * 0.5;
  $: rotationX = Math.sin(time * 0.15 + index) * 0.05;
  $: scale = isActive ? (hovered ? 1.15 : 1.1) : (hovered ? 1.05 : 1);
  $: glowIntensity = isActive ? 0.8 : (hovered ? 0.5 : 0.2);

  function handleClick() {
    dispatch('click', { id, name, description, color });
  }

  function handlePointerEnter() {
    hovered = true;
    document.body.style.cursor = 'pointer';
  }

  function handlePointerLeave() {
    hovered = false;
    document.body.style.cursor = 'auto';
  }
</script>

{#if stoneGeometry}
  <T.Group position.y={floatY}>
    <!-- Main stone mesh -->
    <T.Mesh
      geometry={stoneGeometry}
      scale={[scale, scale, scale]}
      rotation.y={rotationY}
      rotation.x={rotationX}
      castShadow
      receiveShadow
      on:click={handleClick}
      on:pointerenter={handlePointerEnter}
      on:pointerleave={handlePointerLeave}
    >
      <T.MeshStandardMaterial
        color={new THREE.Color(color)}
        {roughness}
        {metalness}
        transparent
        {opacity}
        flatShading
      />
    </T.Mesh>

    <!-- Inner glow sphere -->
    <T.Mesh scale={0.6} rotation.y={rotationY}>
      <T.SphereGeometry args={[1.8, 16, 16]} />
      <T.MeshBasicMaterial
        color={new THREE.Color(color).multiplyScalar(1.2)}
        transparent
        opacity={0.08 * opacity}
      />
    </T.Mesh>

    <!-- Outer atmosphere -->
    <T.Mesh scale={isActive ? 1.4 : 1.25}>
      <T.SphereGeometry args={[2, 32, 32]} />
      <T.MeshBasicMaterial
        color={hovered ? 0x8090a0 : 0x5a6570}
        transparent
        opacity={(isActive ? 0.1 : 0.04) * opacity}
        side={THREE.BackSide}
      />
    </T.Mesh>

    <!-- Point light for stone -->
    <T.PointLight
      color={new THREE.Color(color)}
      intensity={glowIntensity * opacity}
      distance={8}
      decay={2}
    />

    <!-- Ground shadow -->
    <T.Mesh position.y={-2.2} rotation.x={-Math.PI / 2}>
      <T.CircleGeometry args={[1.5, 24]} />
      <T.MeshBasicMaterial
        color={0x0a0c10}
        transparent
        opacity={0.4 * opacity}
      />
    </T.Mesh>

    <!-- HTML Label - Stone Name -->
    {#if isActive || hovered}
      <HTML
        position={[-3.5, 1.5, 0]}
        transform
        occlude={false}
        style="pointer-events: none;"
      >
        <div class="stone-label" class:active={isActive} class:hovered={hovered}>
          <span class="label-index">SPECIMEN_{String(index + 1).padStart(2, '0')}</span>
          <span class="label-name">{name.toUpperCase()}</span>
        </div>
      </HTML>

      <!-- Click prompt -->
      <HTML
        position={[3, -1.5, 0]}
        transform
        occlude={false}
        style="pointer-events: none;"
      >
        <div class="click-prompt" class:active={isActive}>
          <span>CLICK TO EXPLORE</span>
        </div>
      </HTML>
    {/if}

    <!-- Corner brackets when active -->
    {#if isActive}
      <!-- Top-left bracket -->
      <HTML position={[-2.5, 2, 0]} transform occlude={false} style="pointer-events: none;">
        <svg width="24" height="24" viewBox="0 0 24 24" class="bracket">
          <path d="M0 8 L0 0 L8 0" fill="none" stroke="currentColor" stroke-width="1.5"/>
        </svg>
      </HTML>
      
      <!-- Top-right bracket -->
      <HTML position={[2.5, 2, 0]} transform occlude={false} style="pointer-events: none;">
        <svg width="24" height="24" viewBox="0 0 24 24" class="bracket">
          <path d="M16 0 L24 0 L24 8" fill="none" stroke="currentColor" stroke-width="1.5"/>
        </svg>
      </HTML>
      
      <!-- Bottom-left bracket -->
      <HTML position={[-2.5, -2, 0]} transform occlude={false} style="pointer-events: none;">
        <svg width="24" height="24" viewBox="0 0 24 24" class="bracket">
          <path d="M0 16 L0 24 L8 24" fill="none" stroke="currentColor" stroke-width="1.5"/>
        </svg>
      </HTML>
      
      <!-- Bottom-right bracket -->
      <HTML position={[2.5, -2, 0]} transform occlude={false} style="pointer-events: none;">
        <svg width="24" height="24" viewBox="0 0 24 24" class="bracket">
          <path d="M16 24 L24 24 L24 16" fill="none" stroke="currentColor" stroke-width="1.5"/>
        </svg>
      </HTML>
    {/if}

    <!-- Orbiting particles for active stone -->
    {#if isActive}
      {#each Array(6) as _, i}
        {@const angle = (i / 6) * Math.PI * 2 + time * 0.3}
        {@const radius = 3}
        <T.Mesh position={[
          Math.cos(angle) * radius,
          Math.sin(angle * 0.5) * 0.5,
          Math.sin(angle) * radius
        ]}>
          <T.SphereGeometry args={[0.05, 6, 6]} />
          <T.MeshBasicMaterial
            color={new THREE.Color(color)}
            transparent
            opacity={0.6 * opacity}
          />
        </T.Mesh>
      {/each}
    {/if}
  </T.Group>
{/if}

<style>
  :global(.stone-label) {
    font-family: 'JetBrains Mono', monospace;
    color: rgba(255, 255, 255, 0.6);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  :global(.stone-label.active),
  :global(.stone-label.hovered) {
    color: rgba(255, 255, 255, 0.9);
  }

  :global(.label-index) {
    font-size: 9px;
    letter-spacing: 0.15em;
    opacity: 0.6;
  }

  :global(.label-name) {
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.1em;
  }

  :global(.click-prompt) {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.15em;
    color: rgba(255, 255, 255, 0.5);
    text-align: right;
    transition: all 0.3s ease;
  }

  :global(.click-prompt.active) {
    color: rgba(255, 255, 255, 0.8);
  }

  :global(.bracket) {
    color: rgba(255, 255, 255, 0.4);
  }

  :global(.bracket.active) {
    color: rgba(255, 255, 255, 0.6);
  }
</style>