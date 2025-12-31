<script>
  import { T, useTask } from '@threlte/core';
  import { HTML, useGltf } from '@threlte/extras';
  import { createEventDispatcher, onMount } from 'svelte';
  import * as THREE from 'three';

  // Load the rock GLTF model
  const rockGltf = useGltf('/models/rock/scene.gltf');

  export let opacity = 1;
  export let scrollProgress = 0;
  export let currentSection = 0;
  export let transitionProgress = 0;
  export let caveDepthProgress = 0;
  export let stones = [];
  export let modalOpen = false;

  const dispatch = createEventDispatcher();

  let time = 0;

  // =====================
  // NORMAL SCROLL - Show one stone at a time, centered
  // =====================

  // Calculate which stone is currently active based on scroll
  // Matches App.svelte sections: 0.20-0.40=Stone1, 0.40-0.60=Stone2, 0.60-0.80=Stone3, 0.80+=Stone4
  $: activeStoneIndex = (() => {
    if (scrollProgress < 0.40) return 0;
    if (scrollProgress < 0.60) return 1;
    if (scrollProgress < 0.80) return 2;
    return 3;
  })();

  // All stones at same center position (only one visible at a time)
  const stonePosition = { x: 0, y: 1.5, z: 0 };

  // Stone hover states
  let hoveredStone = -1;

  // Create detailed stone geometry
  function createStoneGeometry(type, size = 2.0) {
    let geometry;

    switch(type) {
      case 'dodecahedron':
        geometry = new THREE.DodecahedronGeometry(size, 2);
        break;
      case 'icosahedron':
        geometry = new THREE.IcosahedronGeometry(size, 2);
        break;
      case 'octahedron':
        geometry = new THREE.OctahedronGeometry(size * 1.1, 2);
        break;
      case 'tetrahedron':
        geometry = new THREE.TetrahedronGeometry(size * 1.2, 2);
        break;
      default:
        geometry = new THREE.DodecahedronGeometry(size, 2);
    }

    // Apply organic displacement
    const positions = geometry.attributes.position;
    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const y = positions.getY(i);
      const z = positions.getZ(i);

      const noise1 = Math.sin(x * 2.5) * Math.cos(y * 2.5) * Math.sin(z * 2.5) * 0.12;
      const noise2 = Math.sin(x * 5 + y * 4) * Math.cos(z * 3) * 0.06;
      const noise3 = Math.sin(x * 8) * Math.sin(y * 8) * Math.sin(z * 8) * 0.03;

      const factor = 1 + noise1 + noise2 + noise3;

      positions.setX(i, x * factor);
      positions.setY(i, y * factor);
      positions.setZ(i, z * factor);
    }

    positions.needsUpdate = true;
    geometry.computeVertexNormals();

    return geometry;
  }

  // Pre-create geometries immediately
  let stoneGeometries = {};
  let geometriesReady = false;

  onMount(() => {
    stones.forEach((stone, i) => {
      stoneGeometries[i] = createStoneGeometry(stone.geometry);
    });
    geometriesReady = true;
  });

  // Also try to create geometries reactively if stones array changes
  $: if (stones.length > 0 && Object.keys(stoneGeometries).length === 0) {
    stones.forEach((stone, i) => {
      stoneGeometries[i] = createStoneGeometry(stone.geometry);
    });
    geometriesReady = true;
  }

  useTask((delta) => {
    time += delta;
  });

  function handleStoneClick(stone, index) {
    if (!modalOpen) {
      dispatch('stoneClick', stone);
    }
  }

  function handleStoneEnter(index) {
    hoveredStone = index;
    document.body.style.cursor = 'pointer';
  }

  function handleStoneLeave() {
    hoveredStone = -1;
    document.body.style.cursor = 'default';
  }

  // Format date
  function formatDate() {
    const now = new Date();
    return `${String(now.getMonth() + 1).padStart(2, '0')}.${String(now.getDate()).padStart(2, '0')}.${now.getFullYear()}`;
  }
</script>

<!-- Flat platform floor -->
<T.Mesh rotation.x={-Math.PI / 2} position.y={-0.5} position.z={0} receiveShadow>
  <T.PlaneGeometry args={[40, 40]} />
  <T.MeshStandardMaterial
    color={0x8a8a8a}
    roughness={0.85}
    metalness={0.05}
    transparent
    opacity={opacity}
  />
</T.Mesh>

<!-- Main clickable stones - ONE AT A TIME, centered -->
{#each stones as stone, index}
  {@const isHovered = hoveredStone === index}
  {@const floatY = Math.sin(time * 0.4 + index * 1.5) * 0.06}
  {@const rotY = time * 0.12 + index * Math.PI * 0.5}
  {@const rotX = Math.sin(time * 0.15 + index) * 0.08}

  <!-- Only show the active stone -->
  {@const stoneVisible = index === activeStoneIndex}

  {#if stoneVisible}
    <T.Group position={[stonePosition.x, stonePosition.y + floatY, stonePosition.z]}>

    <!-- Main rock mesh - loaded GLTF model -->
    {#if $rockGltf}
      <T.Group
        rotation.y={rotY}
        rotation.x={rotX}
        rotation.z={index * 0.3}
        scale={isHovered ? 2.8 : 2.6}
        on:click={() => handleStoneClick(stone, index)}
        on:pointerenter={() => handleStoneEnter(index)}
        on:pointerleave={handleStoneLeave}
      >
        {#each Object.values($rockGltf.nodes) as node}
          {#if node.isMesh}
            <T.Mesh
              geometry={node.geometry}
              castShadow
              receiveShadow
            >
              <T.MeshStandardMaterial
                map={node.material.map}
                roughnessMap={node.material.roughnessMap}
                metalnessMap={node.material.metalnessMap}
                aoMap={node.material.aoMap}
                roughness={0.65}
                metalness={0.15}
                envMapIntensity={0.6}
              />
            </T.Mesh>
          {/if}
        {/each}
      </T.Group>

      <!-- Dedicated spotlight for this rock -->
      <T.SpotLight
        position={[0, 4, 2]}
        target-position={[0, 0, 0]}
        angle={0.5}
        penumbra={0.5}
        intensity={isHovered ? 4 : 2}
        color={0xe8f0ff}
        castShadow
        distance={12}
      />
    {:else}
      <!-- Fallback while loading -->
      <T.Mesh
        rotation.y={rotY}
        rotation.x={rotX}
        scale={isHovered ? 2.1 : 2.0}
        on:click={() => handleStoneClick(stone, index)}
        on:pointerenter={() => handleStoneEnter(index)}
        on:pointerleave={handleStoneLeave}
        castShadow
        receiveShadow
      >
        <T.IcosahedronGeometry args={[1, 2]} />
        <T.MeshStandardMaterial
          color={stone.color}
          roughness={0.3}
          metalness={0.7}
          transparent
          opacity={0.95}
        />
      </T.Mesh>
    {/if}

      <!-- Subtle inner glow -->
      <T.Mesh scale={0.6} rotation.y={rotY} rotation.x={rotX}>
        <T.SphereGeometry args={[2.0, 16, 16]} />
        <T.MeshBasicMaterial
          color={0x5a6a7a}
          transparent
          opacity={0.08 * opacity}
        />
      </T.Mesh>

      <!-- Outer atmosphere glow -->
      <T.Mesh scale={isHovered ? 1.3 : 1.2}>
        <T.SphereGeometry args={[2.4, 32, 32]} />
        <T.MeshBasicMaterial
          color={isHovered ? 0x9aaaaa : 0x6a7a8a}
          transparent
          opacity={(isHovered ? 0.08 : 0.03) * opacity}
          side={THREE.BackSide}
        />
      </T.Mesh>

      <!-- Stone lighting -->
      <T.PointLight
        color={0xf0f0f0}
        intensity={isHovered ? 2.5 : 1}
        distance={10}
        decay={2}
      />

      <!-- HTML Labels - Left Side Info Panel (faces screen directly) -->
      <HTML
        position={[-4.5, 0, 0]}
        center
        occlude={false}
        style="pointer-events: none;"
      >
        <div class="info-panel left-panel" class:hovered={isHovered}>
          <div class="info-header">
            <span class="info-id">PORTFOLIO_CO_{String(index + 1).padStart(2, '0')}</span>
          </div>
          <div class="info-name">{stone.name.toUpperCase().replace(' ', '_')}</div>
          <div class="info-divider"></div>
          <div class="info-date">D {formatDate()}</div>
        </div>
      </HTML>

      <!-- HTML Labels - Right Side Info Panel (faces screen directly) -->
      <HTML
        position={[4.5, 0, 0]}
        center
        occlude={false}
        style="pointer-events: none;"
      >
        <div class="info-panel right-panel" class:hovered={isHovered}>
          <div class="info-row">
            <span class="info-label">TEMP</span>
            <span class="info-value">{(25 + Math.sin(index * 2) * 8).toFixed(2)}</span>
          </div>
          <div class="info-row">
            <span class="info-label"></span>
            <span class="info-value secondary">+{(-3 + Math.cos(index * 2) * 4).toFixed(2)}</span>
          </div>
          <div class="info-divider"></div>
          <div class="info-action">CLICK TO EXPLORE</div>
        </div>
      </HTML>

    </T.Group>
  {/if}
{/each}

<style>
  /* Info Panel - Clean flat layout facing screen */
  :global(.info-panel) {
    font-family: 'JetBrains Mono', 'SF Mono', 'Fira Code', monospace;
    color: rgba(255, 255, 255, 0.8);
    padding: 12px 16px;
    background: rgba(0, 0, 0, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(4px);
    min-width: 140px;
  }

  :global(.info-panel.hovered) {
    color: rgba(255, 255, 255, 1);
    background: rgba(0, 0, 0, 0.25);
    border-color: rgba(255, 255, 255, 0.3);
  }

  :global(.info-panel.left-panel) {
    text-align: left;
  }

  :global(.info-panel.right-panel) {
    text-align: right;
  }

  :global(.info-header) {
    margin-bottom: 4px;
  }

  :global(.info-id) {
    font-size: 9px;
    letter-spacing: 0.12em;
    color: rgba(255, 255, 255, 0.5);
  }

  :global(.info-panel.hovered .info-id) {
    color: rgba(255, 255, 255, 0.7);
  }

  :global(.info-name) {
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.08em;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 8px;
  }

  :global(.info-panel.hovered .info-name) {
    color: rgba(255, 255, 255, 1);
  }

  :global(.info-divider) {
    height: 1px;
    background: rgba(255, 255, 255, 0.2);
    margin: 8px 0;
  }

  :global(.info-panel.hovered .info-divider) {
    background: rgba(255, 255, 255, 0.35);
  }

  :global(.info-date) {
    font-size: 10px;
    letter-spacing: 0.1em;
    color: rgba(255, 255, 255, 0.5);
  }

  :global(.info-row) {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 16px;
    margin-bottom: 2px;
  }

  :global(.info-label) {
    font-size: 9px;
    letter-spacing: 0.15em;
    color: rgba(255, 255, 255, 0.5);
  }

  :global(.info-value) {
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.05em;
    color: rgba(255, 255, 255, 0.85);
  }

  :global(.info-value.secondary) {
    font-size: 11px;
    color: rgba(255, 255, 255, 0.55);
  }

  :global(.info-panel.hovered .info-value) {
    color: rgba(255, 255, 255, 1);
  }

  :global(.info-action) {
    font-size: 10px;
    letter-spacing: 0.15em;
    color: rgba(255, 255, 255, 0.6);
    margin-top: 4px;
  }

  :global(.info-panel.hovered .info-action) {
    color: rgba(255, 255, 255, 0.95);
  }
</style>