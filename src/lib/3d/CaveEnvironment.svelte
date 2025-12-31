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

  // Animated zoom for modal open/close
  let animatedZoom = 1;
  let targetZoom = 1;
  let startZoom = 1;
  const zoomSpeed = 2.5; // Smooth animation for deep zoom
  let zoomComplete = true;
  let zoomThresholdReached = false; // Track if 70% threshold reached
  let lastZoomDirection = null; // 'in' or 'out'

  // =====================
  // NORMAL SCROLL - Show one stone at a time, centered
  // =====================

  // Calculate which stone is currently active based on scroll
  // Matches App.svelte sections: 0.10-0.35=Stone1, 0.35-0.60=Stone2, 0.60-0.85=Stone3, 0.85+=Stone4
  $: activeStoneIndex = (() => {
    if (scrollProgress < 0.35) return 0;
    if (scrollProgress < 0.60) return 1;
    if (scrollProgress < 0.85) return 2;
    return 3;
  })();

  // Stone position - stays centered when modal is open
  $: stonePosition = { x: 0, y: 1.5, z: 0 };  // Always centered

  // First stone lift animation - rises from below during transition
  // Stone starts at y=-4 (below view) and rises to y=0 as transitionProgress goes 0 to 1
  $: firstStoneLiftOffset = (() => {
    if (transitionProgress < 1) {
      // Ease-out curve for smooth deceleration as stone arrives
      const easeOut = 1 - Math.pow(1 - transitionProgress, 3);
      return -4 * (1 - easeOut);  // Starts at -4, ends at 0
    }
    return 0;
  })();

  // First stone scale animation - grows slightly as it rises
  $: firstStoneScaleBoost = (() => {
    if (transitionProgress < 1) {
      const easeOut = 1 - Math.pow(1 - transitionProgress, 2);
      return 0.7 + (0.3 * easeOut);  // Starts at 0.7, ends at 1.0
    }
    return 1;
  })();

  // Target zoom based on modal state (zoom in deep for "inside rock" illusion)
  $: {
    const newTarget = modalOpen ? 3.5 : 1;
    if (newTarget !== targetZoom) {
      startZoom = animatedZoom;
      targetZoom = newTarget;
      zoomComplete = false;
      zoomThresholdReached = false;
      lastZoomDirection = modalOpen ? 'in' : 'out';
    }
  }

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

    // Smooth zoom animation (lerp toward target)
    const diff = targetZoom - animatedZoom;
    if (Math.abs(diff) > 0.001) {
      animatedZoom += diff * Math.min(delta * zoomSpeed, 1);

      // For zoom IN: show text at 70% progress
      if (lastZoomDirection === 'in' && !zoomThresholdReached) {
        const totalDistance = targetZoom - startZoom;
        const currentProgress = animatedZoom - startZoom;
        const progressPercent = currentProgress / totalDistance;
        if (progressPercent >= 0.7) {
          zoomThresholdReached = true;
          dispatch('zoomComplete', { direction: 'in' });
        }
      }
    } else {
      animatedZoom = targetZoom;
      // For zoom OUT: dispatch when fully complete
      if (!zoomComplete && lastZoomDirection === 'out') {
        zoomComplete = true;
        dispatch('zoomComplete', { direction: 'out' });
      }
      zoomComplete = true;
    }
  });

  function handleStoneClick(stone, index) {
    console.log('Stone clicked!', stone.name, index);
    if (!modalOpen) {
      dispatch('stoneClick', stone);
    }
  }

  function handleStoneEnter(index) {
    console.log('Stone hover enter', index);
    hoveredStone = index;
    document.body.style.cursor = 'pointer';
  }

  function handleStoneLeave() {
    console.log('Stone hover leave');
    hoveredStone = -1;
    document.body.style.cursor = 'default';
  }

  // Format date
  function formatDate() {
    const now = new Date();
    return `${String(now.getMonth() + 1).padStart(2, '0')}.${String(now.getDate()).padStart(2, '0')}.${now.getFullYear()}`;
  }
</script>

<!-- Main clickable stones - ONE AT A TIME, centered -->
{#each stones as stone, index}
  {@const isHovered = hoveredStone === index}
  {@const floatY = Math.sin(time * 0.4 + index * 1.5) * 0.06}
  {@const rotY = time * 0.12 + index * Math.PI * 0.5}
  {@const rotX = Math.sin(time * 0.15 + index) * 0.08}

  <!-- Only show the active stone -->
  {@const stoneVisible = index === activeStoneIndex}

  {#if stoneVisible}
    <!-- Apply lift animation only to first stone (index 0) during transition -->
    {@const liftOffset = index === 0 ? firstStoneLiftOffset : 0}
    {@const scaleMultiplier = index === 0 ? firstStoneScaleBoost : 1}
    <T.Group position={[stonePosition.x, stonePosition.y + floatY + liftOffset, stonePosition.z]}>

    <!-- Main rock mesh - loaded GLTF model -->
    {#if $rockGltf}
      {@const baseScale = isHovered ? 2.8 : 2.6}
      {@const finalScale = baseScale * animatedZoom * scaleMultiplier}
      <T.Group
        rotation.y={modalOpen ? rotY * 0.3 : rotY}
        rotation.x={modalOpen ? rotX * 0.3 : rotX}
        rotation.z={index * 0.3}
        scale={finalScale}
      >
        {#each Object.values($rockGltf.nodes) as node}
          {#if node.isMesh}
            <T.Mesh
              geometry={node.geometry}
              castShadow
              receiveShadow
              on:click={() => handleStoneClick(stone, index)}
              on:pointerenter={() => handleStoneEnter(index)}
              on:pointerleave={handleStoneLeave}
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

      <!-- HTML Labels - Only show when modal is closed -->
      {#if !modalOpen}
        <!-- HTML Labels - Top Left with connecting line -->
        <HTML
          position={[-3.8, 2.2, 0]}
          center
          occlude={false}
          style="pointer-events: none;"
        >
          <div class="stone-info top-left" class:hovered={isHovered}>
            <div class="info-id">PORTFOLIO_CO_{String(index + 1).padStart(2, '0')}</div>
            <div class="info-name">{stone.name.toUpperCase().replace(' ', '_')}</div>
            <!-- Connecting line -->
            <svg class="connector-line top-left-line" width="120" height="60" viewBox="0 0 120 60">
              <line x1="0" y1="0" x2="100" y2="50" stroke="rgba(255,255,255,0.5)" stroke-width="1"/>
              <circle cx="100" cy="50" r="3" fill="rgba(255,255,255,0.6)"/>
            </svg>
          </div>
        </HTML>

        <!-- HTML Labels - Right Side Temperature -->
        <HTML
          position={[4.2, 0.8, 0]}
          center
          occlude={false}
          style="pointer-events: none;"
        >
          <div class="stone-info right-side" class:hovered={isHovered}>
            <div class="temp-row">
              <span class="temp-label">TEMP</span>
              <span class="temp-value">{(25 + Math.sin(index * 2) * 8).toFixed(2)}°</span>
            </div>
            <div class="temp-secondary">+{(Math.abs(-3 + Math.cos(index * 2) * 4)).toFixed(2)}</div>
          </div>
        </HTML>

        <!-- HTML Labels - Bottom with date and CTA -->
        <HTML
          position={[1.5, -2.0, 0]}
          center
          occlude={false}
          style="pointer-events: none;"
        >
          <div class="stone-info bottom-info" class:hovered={isHovered}>
            <!-- Connecting line from stone -->
            <svg class="connector-line bottom-line" width="80" height="50" viewBox="0 0 80 50">
              <line x1="0" y1="50" x2="60" y2="10" stroke="rgba(255,255,255,0.5)" stroke-width="1"/>
              <circle cx="0" cy="50" r="3" fill="rgba(255,255,255,0.6)"/>
            </svg>
            <div class="date-text">D {formatDate()}</div>
            <div class="cta-text">CLICK TO EXPLORE</div>
          </div>
        </HTML>
      {/if}

    </T.Group>
  {/if}
{/each}

<style>
  /* Stone Info - Clean floating labels with connecting lines */
  :global(.stone-info) {
    font-family: 'JetBrains Mono', 'SF Mono', 'Fira Code', monospace;
    color: rgba(255, 255, 255, 0.85);
    transition: all 0.3s ease;
  }

  :global(.stone-info.hovered) {
    color: rgba(255, 255, 255, 1);
  }

  /* Top Left - Portfolio ID and Name */
  :global(.stone-info.top-left) {
    text-align: left;
    position: relative;
  }

  :global(.info-id) {
    font-size: 10px;
    letter-spacing: 0.15em;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 2px;
  }

  :global(.stone-info.hovered .info-id) {
    color: rgba(255, 255, 255, 0.9);
  }

  :global(.info-name) {
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.1em;
    color: rgba(255, 255, 255, 0.95);
  }

  :global(.stone-info.hovered .info-name) {
    color: rgba(255, 255, 255, 1);
  }

  /* Connecting lines */
  :global(.connector-line) {
    position: absolute;
    overflow: visible;
  }

  :global(.connector-line.top-left-line) {
    top: 100%;
    left: 0;
    margin-top: 4px;
  }

  :global(.connector-line.bottom-line) {
    position: absolute;
    top: -45px;
    left: -60px;
  }

  /* Right Side - Temperature */
  :global(.stone-info.right-side) {
    text-align: right;
  }

  :global(.temp-row) {
    display: flex;
    align-items: baseline;
    gap: 16px;
    justify-content: flex-end;
  }

  :global(.temp-label) {
    font-size: 10px;
    letter-spacing: 0.15em;
    color: rgba(255, 255, 255, 0.6);
  }

  :global(.temp-value) {
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.05em;
    color: rgba(255, 255, 255, 0.95);
  }

  :global(.stone-info.hovered .temp-value) {
    color: rgba(255, 255, 255, 1);
  }

  :global(.temp-secondary) {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.6);
    text-align: right;
    margin-top: 2px;
  }

  /* Bottom - Date and CTA */
  :global(.stone-info.bottom-info) {
    text-align: left;
    position: relative;
  }

  :global(.date-text) {
    font-size: 11px;
    letter-spacing: 0.12em;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 4px;
  }

  :global(.cta-text) {
    font-size: 11px;
    letter-spacing: 0.15em;
    color: rgba(255, 255, 255, 0.65);
  }

  :global(.stone-info.hovered .cta-text) {
    color: rgba(255, 255, 255, 0.95);
  }
</style>