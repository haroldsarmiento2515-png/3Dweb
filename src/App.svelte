<script>
  import { onMount } from 'svelte';
  import Lenis from 'lenis';
  import Scene from './lib/Scene.svelte';
  import Modal from './lib/Modal.svelte';
  import WireframeOverlay from './lib/WireframeOverlay.svelte';
  import TransitionEffects from './lib/TransitionEffects.svelte';
  import StaticFallback from './lib/StaticFallback.svelte';

  // State
  let scrollProgress = 0;
  let currentSection = 0;
  let modalOpen = false;
  let showModalContent = false; // Separate state for modal content visibility
  let isClosing = false; // Track if we're in closing animation
  let hideBlur = false; // Track when to hide blur effect during close animation
  let selectedStone = null;
  let selectedStoneIndex = 0;
  let webglSupported = true;
  let prefersReducedMotion = false;
  let mounted = false;
  let soundEnabled = false;
  let showUI = true;

  // Smooth scroll & drag state
  let lenis = null;
  let isDragging = false;
  let dragStartY = 0;
  let scrollStartY = 0;

  // Section names for UI display - Simple: Igloo + 4 Stones
  const sectionNames = [
    'Surface',
    'Specimen 01',
    'Specimen 02',
    'Specimen 03',
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

  // Handle stone click - start zoom in, content shows after zoom completes
  function handleStoneClick(stone) {
    if (isClosing) return; // Don't open while closing
    selectedStone = stone;
    selectedStoneIndex = stones.findIndex(s => s.id === stone.id);
    modalOpen = true; // This triggers zoom in
    hideBlur = false; // Reset blur visibility when opening
    // Content will show when zoomComplete event fires with direction 'in'
  }

  // Handle zoom complete event from 3D scene
  function handleZoomComplete(event) {
    const { direction } = event.detail;
    if (direction === 'in') {
      // Zoom in complete, now show modal content
      showModalContent = true;
    } else if (direction === 'out') {
      // Zoom out complete, fully close modal
      selectedStone = null;
      selectedStoneIndex = 0;
      isClosing = false;
      hideBlur = false; // Reset for next open
    }
  }

  // Handle zoom threshold event - blur should hide at 70% of zoom out
  function handleZoomThreshold(event) {
    const { direction } = event.detail;
    if (direction === 'out') {
      hideBlur = true; // Hide blur effect early
    }
  }

  // Handle modal close - hide content first, then zoom out
  function handleModalClose() {
    isClosing = true;
    showModalContent = false; // Hide content first
    // Wait for content to fade out, then trigger zoom out
    setTimeout(() => {
      modalOpen = false; // This triggers zoom out
    }, 300); // Match the modal content exit animation duration
  }

  // Lock/unlock scroll when modal opens/closes
  $: if (typeof document !== 'undefined') {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
      if (lenis) lenis.stop();
    } else if (!isClosing) {
      document.body.style.overflow = '';
      if (lenis) lenis.start();
    }
  }

  // Get which stone is active (0-3) based on section
  $: currentStoneIndex = Math.max(0, currentSection - 1);

  $: currentStone = stones[currentStoneIndex];
  $: isInCave = currentSection > 0;
  $: isViewingStone = currentSection >= 1;

  // Handle scroll - 8 sections with gaps between all stones
  function handleScroll() {
    const scrollContainer = document.querySelector('.scroll-container');
    if (!scrollContainer) return;

    const scrollTop = window.scrollY;
    const scrollHeight = scrollContainer.scrollHeight - window.innerHeight;
    scrollProgress = scrollTop / scrollHeight;

    // 8 sections: Hero(150vh) + Stone1(100vh) + Blank(100vh) + Stone2(100vh) + Blank(100vh) + Stone3(100vh) + Blank(100vh) + Stone4(100vh) = 850vh
    // Hero: 0-18%, Stone1+Blank: 18-41%, Stone2+Blank: 41-65%, Stone3+Blank: 65-88%, Stone4: 88-100%
    if (scrollProgress < 0.18) currentSection = 0;      // Hero/Igloo
    else if (scrollProgress < 0.41) currentSection = 1; // Stone 1 area
    else if (scrollProgress < 0.65) currentSection = 2; // Stone 2 area
    else if (scrollProgress < 0.88) currentSection = 3; // Stone 3 area
    else currentSection = 4;                            // Stone 4
  }

  // Mouse drag scroll handlers
  function handleMouseDown(e) {
    // Only activate on left mouse button and not on interactive elements
    if (e.button !== 0 || modalOpen) return;
    if (e.target.closest('button, a, input, .modal')) return;

    isDragging = true;
    dragStartY = e.clientY;
    scrollStartY = window.scrollY;
    document.body.classList.add('dragging');
    e.preventDefault();
  }

  function handleMouseMove(e) {
    if (!isDragging) return;

    const deltaY = dragStartY - e.clientY;
    const newScrollY = scrollStartY + deltaY * 1.5; // Multiplier for sensitivity

    if (lenis) {
      lenis.scrollTo(newScrollY, { immediate: true });
    } else {
      window.scrollTo(0, newScrollY);
    }
  }

  function handleMouseUp() {
    if (isDragging) {
      isDragging = false;
      document.body.classList.remove('dragging');
    }
  }

  onMount(() => {
    mounted = true;
    prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    webglSupported = checkWebGLSupport();

    // Initialize Lenis smooth scroll
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // Animation loop for Lenis
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Listen for Lenis scroll events
    lenis.on('scroll', handleScroll);

    // Mouse drag event listeners
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseleave', handleMouseUp);

    return () => {
      lenis.destroy();
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseleave', handleMouseUp);
    };
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
        on:zoomComplete={handleZoomComplete}
        on:zoomThreshold={handleZoomThreshold}
      />
    </div>
  {/if}

  <!-- Wireframe Overlay Effect -->
  <WireframeOverlay {scrollProgress} />

  <!-- Transition Effects - Frost/chromatic aberration during igloo-to-stone transition -->
  <TransitionEffects {scrollProgress} />

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

        <!-- Right: Progress indicator (5 dots) -->
        <div class="ui-element flex gap-1.5">
          {#each Array(5) as _, i}
            <div
              class="progress-dot"
              class:active={currentSection >= i}
              class:stone-dot={i >= 1}
            ></div>
          {/each}
        </div>
      </div>
    </div>

    <!-- Clickable stone overlay - positioned over the 3D stone -->
    {#if isViewingStone && !modalOpen}
      <button
        class="stone-click-area"
        on:click={() => handleStoneClick(currentStone)}
        aria-label="Click to explore {currentStone?.name}"
      >
      </button>
    {/if}
  {/if}

  <!-- Scroll Container - Tall sections for smooth scrolling with gaps between stones -->
  <div class="scroll-container">
    <section class="section" id="hero" style="height: 150vh;"></section>
    <section class="section" id="stone-1" style="height: 100vh;"></section>
    <section class="section" id="blank-1-2" style="height: 100vh;"></section>
    <section class="section" id="stone-2" style="height: 100vh;"></section>
    <section class="section" id="blank-2-3" style="height: 100vh;"></section>
    <section class="section" id="stone-3" style="height: 100vh;"></section>
    <section class="section" id="blank-3-4" style="height: 100vh;"></section>
    <section class="section" id="stone-4" style="height: 100vh;"></section>
  </div>

  <!-- Modal -->
  {#if (modalOpen || isClosing) && selectedStone}
    <Modal
      stone={selectedStone}
      stoneIndex={selectedStoneIndex}
      showContent={showModalContent}
      {hideBlur}
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

  .stone-click-area {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 350px;
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 50;
    border-radius: 50%;
  }

  .stone-click-area:focus {
    outline: none;
  }
</style>