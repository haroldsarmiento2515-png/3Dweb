<script>
  import { onMount } from 'svelte';
  import Scene from './lib/Scene.svelte';
  import Modal from './lib/Modal.svelte';
  import WireframeOverlay from './lib/WireframeOverlay.svelte';
  import TransitionEffects from './lib/TransitionEffects.svelte';
  import StaticFallback from './lib/StaticFallback.svelte';

  // State
  let scrollProgress = 0;
  let currentSection = 0;
  let modalOpen = false;
  let selectedStone = null;
  let selectedStoneIndex = 0;
  let webglSupported = true;
  let prefersReducedMotion = false;
  let mounted = false;
  let soundEnabled = false;
  let showUI = true;

  // Section names for UI display
  const sectionNames = [
    'Surface',
    'Descending',
    'Portal',
    'Specimen 01',
    'Traveling',
    'Specimen 02',
    'Traveling',
    'Specimen 03',
    'Traveling',
    'Specimen 04'
  ];

  // Stone data for the gallery
  const stones = [
    {
      id: 'ancient-granite',
      name: 'Ancient Granite',
      description: 'Formed over 3 billion years ago in the primordial fires of Earth\'s crust. Each crystal tells a story of pressure, heat, and transformation.',
      color: '#6a7080',
      roughness: 0.8,
      metalness: 0.1,
      displacement: 0.15,
      geometry: 'dodecahedron'
    },
    {
      id: 'obsidian-core',
      name: 'Obsidian Core',
      description: 'Volcanic glass born from rapid cooling. Its edges hold memories of eruptions past, smooth as time itself.',
      color: '#2a2c32',
      roughness: 0.1,
      metalness: 0.9,
      displacement: 0.05,
      geometry: 'icosahedron'
    },
    {
      id: 'frost-quartz',
      name: 'Frost Quartz',
      description: 'Crystallized from ancient glacial waters. Its pale surface captures and refracts the cold light of forgotten winters.',
      color: '#d8dadf',
      roughness: 0.4,
      metalness: 0.2,
      displacement: 0.08,
      geometry: 'octahedron'
    },
    {
      id: 'shadow-stone',
      name: 'Shadow Stone',
      description: 'Found in the deepest caves beneath the permafrost. It absorbs light and whispers secrets of the underground.',
      color: '#3a3f4a',
      roughness: 0.6,
      metalness: 0.4,
      displacement: 0.12,
      geometry: 'tetrahedron'
    }
  ];

  // Check WebGL support
  function checkWebGLSupport() {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      return !!gl;
    } catch (e) {
      return false;
    }
  }

  // Toggle sound
  function toggleSound() {
    soundEnabled = !soundEnabled;
  }

  // Handle stone click
  function handleStoneClick(stone) {
    selectedStone = stone;
    selectedStoneIndex = stones.findIndex(s => s.id === stone.id);
    modalOpen = true;
  }

  // Handle modal close
  function handleModalClose() {
    modalOpen = false;
    selectedStone = null;
    selectedStoneIndex = 0;
  }

  // Get which stone is active (0-3) based on section
  $: currentStoneIndex = (() => {
    if (currentSection === 3) return 0;
    if (currentSection === 5) return 1;
    if (currentSection === 7) return 2;
    if (currentSection === 9) return 3;
    if (currentSection === 4) return 1;
    if (currentSection === 6) return 2;
    if (currentSection === 8) return 3;
    return 0;
  })();
  
  $: currentStone = stones[currentStoneIndex];
  $: isInCave = scrollProgress > 0.06;
  $: isViewingStone = [3, 5, 7, 9].includes(currentSection);

  // Handle scroll
  function handleScroll() {
    const scrollContainer = document.querySelector('.scroll-container');
    if (!scrollContainer) return;

    const scrollTop = window.scrollY;
    const scrollHeight = scrollContainer.scrollHeight - window.innerHeight;
    scrollProgress = scrollTop / scrollHeight;

    if (scrollProgress < 0.02) currentSection = 0;
    else if (scrollProgress < 0.05) currentSection = 1;
    else if (scrollProgress < 0.09) currentSection = 2;
    else if (scrollProgress < 0.20) currentSection = 3;
    else if (scrollProgress < 0.30) currentSection = 4;
    else if (scrollProgress < 0.45) currentSection = 5;
    else if (scrollProgress < 0.55) currentSection = 6;
    else if (scrollProgress < 0.70) currentSection = 7;
    else if (scrollProgress < 0.80) currentSection = 8;
    else currentSection = 9;
  }

  onMount(() => {
    mounted = true;
    prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    webglSupported = checkWebGLSupport();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<main>
  <!-- Static fallback for no WebGL / reduced motion -->
  {#if !webglSupported || prefersReducedMotion}
    <StaticFallback />
  {/if}

  <!-- 3D Canvas -->
  {#if mounted && webglSupported && !prefersReducedMotion}
    <div class="canvas-container webgl-canvas">
      <Scene 
        {scrollProgress} 
        {currentSection}
        {stones}
        {modalOpen}
        on:stoneClick={(e) => handleStoneClick(e.detail)}
      />
    </div>
  {/if}

  <!-- Wireframe Overlay Effect -->
  <WireframeOverlay {scrollProgress} />

  <!-- Transition Effects disabled for clean scrolling -->
  <!-- <TransitionEffects {scrollProgress} /> -->

  <!-- UI Overlay -->
  {#if showUI}
    <div class="ui-overlay">
      <!-- Top Row -->
      <div class="flex justify-between items-start">
        <!-- Left: Logo & Info -->
        <div class="ui-element">
          <h1 class="logo mb-3">IGLOO</h1>
          <p class="text-label mb-1">// Copyright © 2024</p>
          <p class="text-label">
            Igloo, Inc.<br/>
            All Rights Reserved.
          </p>
        </div>

        <!-- Right: Manifesto -->
        <div class="ui-element text-right max-w-xs">
          <p class="text-label mb-3">////// Manifesto</p>
          <p class="text-body">
            Our mission is to create the largest onchain community, driving the consumer crypto revolution.
          </p>
        </div>
      </div>

      <!-- Bottom Row -->
      <div class="flex justify-between items-end">
        <!-- Left: Scroll prompt & Sound -->
        <div class="ui-element">
          <p class="scroll-prompt mb-4">
            Scroll down to<br/>discover.
          </p>
          <button 
            class="sound-toggle"
            on:click={toggleSound}
            aria-label={soundEnabled ? 'Mute sound' : 'Enable sound'}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              {#if soundEnabled}
                <path d="M11 5L6 9H2v6h4l5 4V5z"/>
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
              {:else}
                <path d="M11 5L6 9H2v6h4l5 4V5z"/>
                <line x1="23" y1="9" x2="17" y2="15"/>
                <line x1="17" y1="9" x2="23" y2="15"/>
              {/if}
            </svg>
            <span>Sound: {soundEnabled ? 'On' : 'Off'}</span>
          </button>
        </div>

        <!-- Center: Section indicator -->
        <div class="ui-element section-indicator">
          <span class="text-label">
            // {sectionNames[currentSection] || 'Surface'}
          </span>
        </div>

        <!-- Right: Progress indicator (10 dots) -->
        <div class="ui-element flex gap-1.5">
          {#each Array(10) as _, i}
            <div
              class="progress-dot"
              class:active={currentSection >= i}
              class:stone-dot={[3, 5, 7, 9].includes(i)}
            ></div>
          {/each}
        </div>
      </div>
    </div>

    <!-- Click hint when viewing stones -->
    {#if isViewingStone && !modalOpen}
      <div class="click-hint visible">
        <p class="text-label">Click stone to explore</p>
      </div>
    {/if}
  {/if}

  <!-- Scroll Container -->
  <div class="scroll-container relative" style="z-index: 0; pointer-events: none;">
    <section class="section" id="hero">
      <div style="height: 50vh;"></div>
    </section>

    <section class="section" id="entrance">
      <div style="height: 75vh;"></div>
    </section>

    <section class="section" id="portal">
      <div style="height: 100vh;"></div>
    </section>

    <section class="section" id="stone-1">
      <div style="height: 225vh;"></div>
    </section>

    <section class="section" id="travel-1">
      <div style="height: 150vh;"></div>
    </section>

    <section class="section" id="stone-2">
      <div style="height: 225vh;"></div>
    </section>

    <section class="section" id="travel-2">
      <div style="height: 150vh;"></div>
    </section>

    <section class="section" id="stone-3">
      <div style="height: 225vh;"></div>
    </section>

    <section class="section" id="travel-3">
      <div style="height: 150vh;"></div>
    </section>

    <section class="section" id="stone-4">
      <div style="height: 500vh;"></div>
    </section>
  </div>

  <!-- Modal -->
  {#if modalOpen && selectedStone}
    <Modal 
      stone={selectedStone}
      stoneIndex={selectedStoneIndex}
      on:close={handleModalClose}
    />
  {/if}
</main>

<style>
  .scroll-container {
    position: relative;
  }
  
  .section {
    position: relative;
  }
  
  .section-indicator {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
  }
  
  .progress-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--ice-dark);
  }
  
  .progress-dot.active {
    background: var(--ice-light);
  }

  .progress-dot.stone-dot {
    width: 8px;
    height: 8px;
  }

  .click-hint {
    position: fixed;
    bottom: 8rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 15;
    pointer-events: none;
  }

  .click-hint.visible {
    opacity: 1;
  }
</style>