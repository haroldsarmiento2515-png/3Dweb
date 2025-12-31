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
  
  // Stone sections mapping:
  // Section 3: Stone 1, Section 5: Stone 2, Section 7: Stone 3, Section 9: Stone 4
  // Travel sections: 4 (1→2), 6 (2→3), 8 (3→4)
  
  // Calculate which stone is currently active
  $: activeStoneIndex = (() => {
    if (currentSection === 3) return 0;
    if (currentSection === 4) return 0; // Transitioning away from stone 1
    if (currentSection === 5) return 1;
    if (currentSection === 6) return 1; // Transitioning away from stone 2
    if (currentSection === 7) return 2;
    if (currentSection === 8) return 2; // Transitioning away from stone 3
    if (currentSection === 9) return 3;
    return 0;
  })();

  // Stone positions - each stone centered for its section
  // Camera travels from z=4 to z=-24 (28 units) over caveDepthProgress 0→1
  // Section 3 (Stone 1): ~0-15% of cave depth → camera at z≈4 to z=0
  // Section 5 (Stone 2): ~30-45% of cave depth → camera at z≈-4 to z=-8  
  // Section 7 (Stone 3): ~55-70% of cave depth → camera at z≈-11 to z=-15
  // Section 9 (Stone 4): ~80-95% of cave depth → camera at z≈-18 to z=-22
  const stonePositions = [
    { x: 0, y: 1.5, z: 0 },      // Stone 1: at cave entrance
    { x: 0, y: 1.5, z: -7 },     // Stone 2
    { x: 0, y: 1.5, z: -14 },    // Stone 3
    { x: 0, y: 1.5, z: -21 }     // Stone 4: at cave end
  ];

  // Stones visible whenever cave is rendering
  $: stonesVisible = true;

  // Crystal cluster positions (decorative) - on the sides of the cave
  const crystalClusters = [
    { x: -6, z: 3, count: 4, scale: 0.7 },
    { x: 6, z: 1, count: 3, scale: 0.6 },
    { x: -5, z: -3, count: 5, scale: 0.8 },
    { x: 7, z: -7, count: 3, scale: 0.5 },
    { x: -7, z: -11, count: 4, scale: 0.7 },
    { x: 5, z: -14, count: 3, scale: 0.8 },
    { x: -6, z: -18, count: 5, scale: 0.6 },
    { x: 6, z: -21, count: 4, scale: 0.7 },
  ];

  function generateCrystals(cluster) {
    const crystals = [];
    for (let i = 0; i < cluster.count; i++) {
      const angle = (i / cluster.count) * Math.PI * 2 + Math.random() * 0.5;
      const radius = 0.3 + Math.random() * 0.5;
      crystals.push({
        x: cluster.x + Math.cos(angle) * radius,
        z: cluster.z + Math.sin(angle) * radius,
        height: 0.5 + Math.random() * 1.0 * cluster.scale,
        rotation: Math.random() * 0.3 - 0.15,
        scale: 0.1 + Math.random() * 0.12
      });
    }
    return crystals;
  }

  const allCrystals = crystalClusters.flatMap(generateCrystals);

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
      
      // Multi-frequency noise for organic look
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

  // Check if stone should be visible based on camera position and transition state
  // Camera travels from z=4 to z=-24 during cave depth progress (28 units)
  function getStoneVisibility(index) {
    // Don't show stones if we're not in the cave
    if (!stonesVisible) return false;
    
    // Always show all stones for now (simpler, and they'll be behind/ahead of camera)
    return true;
  }
  
  // Check if stone is "centered" (camera is close to it)
  function isStoneCentered(index) {
    const stoneZ = stonePositions[index].z;
    const cameraZ = 4 - caveDepthProgress * 28;
    const distance = Math.abs(stoneZ - cameraZ);
    return distance < 4; // Centered within 4 units
  }
</script>

<!-- Cave floor -->
<T.Mesh rotation.x={-Math.PI / 2} position.y={0} position.z={-10} receiveShadow>
  <T.PlaneGeometry args={[50, 100]} />
  <T.MeshStandardMaterial 
    color={0x12141a}
    roughness={0.95}
    metalness={0.05}
    transparent
    opacity={opacity}
  />
</T.Mesh>

<!-- Cave ceiling -->
<T.Mesh rotation.x={Math.PI / 2} position.y={14} position.z={-10}>
  <T.PlaneGeometry args={[50, 100]} />
  <T.MeshStandardMaterial 
    color={0x08090c}
    roughness={1}
    transparent
    opacity={opacity * 0.9}
  />
</T.Mesh>

<!-- Stalactites -->
{#each Array(50) as _, i}
  {@const x = (Math.random() - 0.5) * 24}
  {@const z = 8 - Math.random() * 38}
  {@const height = 1.2 + Math.random() * 2.5}
  <T.Mesh position={[x, 12, z]}>
    <T.ConeGeometry args={[0.15 + Math.random() * 0.25, height, 5]} />
    <T.MeshStandardMaterial 
      color={0x1a1c22}
      roughness={0.85}
      transparent
      opacity={opacity * 0.8}
    />
  </T.Mesh>
{/each}

<!-- Crystal formations (decorative) -->
{#each allCrystals as crystal, i}
  <T.Group position={[crystal.x, 0, crystal.z]}>
    <T.Mesh 
      position.y={crystal.height / 2}
      rotation.x={crystal.rotation}
      rotation.z={crystal.rotation * 0.5}
    >
      <T.ConeGeometry args={[crystal.scale, crystal.height, 4]} />
      <T.MeshStandardMaterial 
        color={0x4de8ff}
        roughness={0.12}
        metalness={0.92}
        transparent
        opacity={opacity * 0.7}
        emissive={0x4de8ff}
        emissiveIntensity={0.25}
      />
    </T.Mesh>
  </T.Group>
{/each}

<!-- DEBUG: Remove these test spheres after fixing -->
<!-- 
<T.Mesh position={[0, 3, 0]}>
  <T.SphereGeometry args={[1.5, 16, 16]} />
  <T.MeshStandardMaterial color={0xff0000} />
</T.Mesh>
-->

<!-- Main clickable stones with labels -->
{#each stones as stone, index}
  {@const pos = stonePositions[index] || { x: 0, y: 1.5, z: 0 }}
  {@const isHovered = hoveredStone === index}
  {@const floatY = Math.sin(time * 0.4 + index * 1.5) * 0.06}
  {@const rotY = time * 0.12 + index * Math.PI * 0.5}
  {@const rotX = Math.sin(time * 0.15 + index) * 0.08}
  
  <!-- Only show stone when we're in its section or adjacent travel sections -->
  <!-- Stone 0: sections 3,4 | Stone 1: sections 4,5,6 | Stone 2: sections 6,7,8 | Stone 3: sections 8,9,10 -->
  {@const stoneVisible = (
    (index === 0 && currentSection >= 3 && currentSection <= 4) ||
    (index === 1 && currentSection >= 4 && currentSection <= 6) ||
    (index === 2 && currentSection >= 6 && currentSection <= 8) ||
    (index === 3 && currentSection >= 8 && currentSection <= 10)
  )}
  
  {#if stoneVisible}
    <T.Group position={[pos.x, pos.y + floatY, pos.z]}>
    
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
          color={0x3a4a5a}
          transparent
          opacity={0.08 * opacity}
        />
      </T.Mesh>
      
      <!-- Outer atmosphere glow -->
      <T.Mesh scale={isHovered ? 1.3 : 1.2}>
        <T.SphereGeometry args={[2.4, 32, 32]} />
        <T.MeshBasicMaterial 
          color={isHovered ? 0x7a8a9a : 0x4a5a6a}
          transparent
          opacity={(isHovered ? 0.08 : 0.03) * opacity}
          side={THREE.BackSide}
        />
      </T.Mesh>

      <!-- Stone lighting -->
      <T.PointLight
        color={0xd0d8e8}
        intensity={isHovered ? 2.5 : 1}
        distance={10}
        decay={2}
      />

      <!-- HTML Labels - Top Left -->
      <HTML
        position={[-3, 2.2, 0]}
        transform
        occlude={false}
        style="pointer-events: none;"
      >
        <div class="stone-label-container top-left" class:hovered={isHovered}>
          <svg class="connector-line" width="60" height="40" viewBox="0 0 60 40">
            <line x1="0" y1="40" x2="50" y2="10" stroke="currentColor" stroke-width="1" opacity="0.4"/>
            <circle cx="50" cy="10" r="2" fill="currentColor" opacity="0.6"/>
          </svg>
          <div class="label-text">
            <span class="label-id">PORTFOLIO_CO_{String(index + 1).padStart(2, '0')}</span>
            <span class="label-name">{stone.name.toUpperCase().replace(' ', '_')}</span>
          </div>
        </div>
      </HTML>

      <!-- HTML Labels - Right Side (TEMP data) -->
      <HTML
        position={[3.5, 0.8, 0]}
        transform
        occlude={false}
        style="pointer-events: none;"
      >
        <div class="stone-label-container right-data" class:hovered={isHovered}>
          <div class="data-block">
            <span class="data-label">TEMP</span>
            <span class="data-value">{(25 + Math.sin(index * 2) * 8).toFixed(2)}</span>
            <span class="data-value secondary">{(-3 + Math.cos(index * 2) * 4).toFixed(2)}</span>
          </div>
        </div>
      </HTML>

      <!-- HTML Labels - Bottom Right -->
      <HTML
        position={[2.5, -1.8, 0]}
        transform
        occlude={false}
        style="pointer-events: none;"
      >
        <div class="stone-label-container bottom-right" class:hovered={isHovered}>
          <svg class="connector-line bottom" width="50" height="35" viewBox="0 0 50 35">
            <line x1="50" y1="0" x2="10" y2="25" stroke="currentColor" stroke-width="1" opacity="0.4"/>
            <circle cx="10" cy="25" r="2" fill="currentColor" opacity="0.6"/>
          </svg>
          <div class="label-text bottom">
            <span class="label-date">D {formatDate()}</span>
            <span class="label-action">CLICK TO EXPLORE</span>
          </div>
        </div>
      </HTML>

      <!-- Corner bracket - Top Right -->
      <HTML
        position={[2.8, 2, 0]}
        transform
        occlude={false}
        style="pointer-events: none;"
      >
        <div class="corner-bracket tr" class:hovered={isHovered}>
          <svg width="30" height="30" viewBox="0 0 30 30">
            <path d="M0 8 L0 0 L8 0" fill="none" stroke="currentColor" stroke-width="1" opacity="0.35"/>
            <path d="M22 0 L30 0 L30 8" fill="none" stroke="currentColor" stroke-width="1" opacity="0.35"/>
          </svg>
        </div>
      </HTML>

      <!-- Corner bracket - Bottom Left -->
      <HTML
        position={[-2.8, -1.5, 0]}
        transform
        occlude={false}
        style="pointer-events: none;"
      >
        <div class="corner-bracket bl" class:hovered={isHovered}>
          <svg width="30" height="30" viewBox="0 0 30 30">
            <path d="M0 22 L0 30 L8 30" fill="none" stroke="currentColor" stroke-width="1" opacity="0.35"/>
            <path d="M22 30 L30 30 L30 22" fill="none" stroke="currentColor" stroke-width="1" opacity="0.35"/>
          </svg>
        </div>
      </HTML>

    </T.Group>
  {/if}
{/each}

<!-- Ground rocks -->
{#each Array(25) as _, i}
  {@const x = (Math.random() - 0.5) * 16}
  {@const z = 6 - Math.random() * 34}
  {@const scale = 0.2 + Math.random() * 0.35}
  <T.Mesh position={[x, scale * 0.2, z]} rotation.y={Math.random() * Math.PI}>
    <T.DodecahedronGeometry args={[scale, 0]} />
    <T.MeshStandardMaterial 
      color={0x252830}
      roughness={0.9}
      transparent
      opacity={opacity * 0.8}
    />
  </T.Mesh>
{/each}

<!-- Ambient particles -->
<T.Points>
  <T.BufferGeometry>
    <T.BufferAttribute
      attach="attributes-position"
      args={[new Float32Array(Array(350).fill(0).flatMap(() => [
        (Math.random() - 0.5) * 28,
        Math.random() * 12,
        8 - Math.random() * 40
      ])), 3]}
    />
  </T.BufferGeometry>
  <T.PointsMaterial
    color={0x4de8ff}
    size={0.035}
    transparent
    opacity={0.45 * opacity}
    blending={THREE.AdditiveBlending}
  />
</T.Points>

<style>
  :global(.stone-label-container) {
    font-family: 'JetBrains Mono', 'SF Mono', 'Fira Code', monospace;
    color: rgba(255, 255, 255, 0.75);
    transition: all 0.3s ease;
  }

  :global(.stone-label-container.hovered) {
    color: rgba(255, 255, 255, 0.95);
  }

  :global(.stone-label-container.top-left) {
    position: relative;
  }

  :global(.stone-label-container.top-left .connector-line) {
    position: absolute;
    top: 100%;
    left: 0;
    color: rgba(255, 255, 255, 0.5);
  }

  :global(.stone-label-container.hovered .connector-line) {
    color: rgba(255, 255, 255, 0.8);
  }

  :global(.stone-label-container.bottom-right) {
    position: relative;
  }

  :global(.stone-label-container.bottom-right .connector-line.bottom) {
    position: absolute;
    bottom: 100%;
    right: 0;
    color: rgba(255, 255, 255, 0.5);
  }

  :global(.label-text) {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  :global(.label-text.bottom) {
    align-items: flex-end;
    text-align: right;
  }

  :global(.label-id) {
    font-size: 9px;
    letter-spacing: 0.12em;
    color: rgba(255, 255, 255, 0.5);
  }

  :global(.label-name) {
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.08em;
    color: rgba(255, 255, 255, 0.85);
  }

  :global(.stone-label-container.hovered .label-name) {
    color: rgba(255, 255, 255, 1);
  }

  :global(.data-block) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1px;
  }

  :global(.data-label) {
    font-size: 9px;
    letter-spacing: 0.15em;
    color: rgba(255, 255, 255, 0.45);
  }

  :global(.data-value) {
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.05em;
    color: rgba(255, 255, 255, 0.8);
  }

  :global(.data-value.secondary) {
    font-size: 11px;
    color: rgba(255, 255, 255, 0.55);
  }

  :global(.label-date) {
    font-size: 9px;
    letter-spacing: 0.1em;
    color: rgba(255, 255, 255, 0.5);
  }

  :global(.label-action) {
    font-size: 10px;
    letter-spacing: 0.15em;
    color: rgba(255, 255, 255, 0.7);
  }

  :global(.stone-label-container.hovered .label-action) {
    color: rgba(255, 255, 255, 0.95);
  }

  :global(.corner-bracket) {
    color: rgba(255, 255, 255, 0.4);
    transition: color 0.3s ease;
  }

  :global(.corner-bracket.hovered) {
    color: rgba(255, 255, 255, 0.7);
  }

  :global(.right-data) {
    text-align: right;
  }
</style>