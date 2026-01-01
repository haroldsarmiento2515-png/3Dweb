<script>
  import { createEventDispatcher, onMount, onDestroy } from 'svelte';
  import { fly, fade } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';

  export let stone;
  export let stoneIndex = 0;
  export let showContent = false;
  export let hideBlur = false;

  const dispatch = createEventDispatcher();

  let contentRef;

  // Mouse trail state
  const TRAIL_LENGTH = 12;
  let trailPositions = [];
  let isOverText = false;
  let animationFrameId;
  let trailContainer;

  function handleClose() {
    dispatch('close');
  }

  function handleKeydown(event) {
    if (event.key === 'Escape') {
      handleClose();
    }
  }

  function handleBackdropClick(event) {
    if (event.target.classList.contains('modal-backdrop')) {
      handleClose();
    }
  }

  // Check if element is a text element
  function isTextElement(element) {
    if (!element) return false;
    const textClasses = ['description', 'section-header', 'link-btn', 'close-text'];
    const textTags = ['P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'A', 'SPAN'];

    // Check if element or its parent has text class
    let current = element;
    while (current && current !== contentRef) {
      if (textClasses.some(cls => current.classList?.contains(cls))) {
        return true;
      }
      if (textTags.includes(current.tagName)) {
        return true;
      }
      current = current.parentElement;
    }
    return false;
  }

  function handleMouseMove(event) {
    // Check if mouse is over text
    const elementUnderMouse = document.elementFromPoint(event.clientX, event.clientY);
    isOverText = isTextElement(elementUnderMouse);

    if (isOverText) {
      // Add new position to the beginning
      trailPositions = [
        { x: event.clientX, y: event.clientY, opacity: 1 },
        ...trailPositions.slice(0, TRAIL_LENGTH - 1)
      ];
    } else {
      // Fade out existing trail
      if (trailPositions.length > 0) {
        trailPositions = trailPositions
          .map(p => ({ ...p, opacity: p.opacity * 0.85 }))
          .filter(p => p.opacity > 0.01);
      }
    }
  }

  function animateTrail() {
    // Gradually fade trail positions
    if (trailPositions.length > 0) {
      trailPositions = trailPositions.map((pos, i) => ({
        ...pos,
        opacity: isOverText ? Math.max(0.1, 1 - (i / TRAIL_LENGTH) * 0.9) : pos.opacity * 0.92
      })).filter(p => p.opacity > 0.01);
    }
    animationFrameId = requestAnimationFrame(animateTrail);
  }

  onMount(() => {
    contentRef?.focus();
    window.addEventListener('keydown', handleKeydown);
    window.addEventListener('mousemove', handleMouseMove);
    animationFrameId = requestAnimationFrame(animateTrail);
  });

  onDestroy(() => {
    window.removeEventListener('keydown', handleKeydown);
    window.removeEventListener('mousemove', handleMouseMove);
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }
  });
</script>

<!-- Mouse trail -->
{#if trailPositions.length > 0}
  <div class="mouse-trail-container" bind:this={trailContainer}>
    {#each trailPositions as pos, i (i)}
      <div
        class="trail-dot"
        style="
          left: {pos.x}px;
          top: {pos.y}px;
          opacity: {pos.opacity * 0.8};
          transform: translate(-50%, -50%) scale({1 - (i / TRAIL_LENGTH) * 0.6});
        "
      ></div>
    {/each}
  </div>
{/if}

<div
  class="modal-backdrop"
  class:no-blur={hideBlur}
  on:click={handleBackdropClick}
  on:keydown={handleKeydown}
  role="button"
  tabindex="-1"
  aria-label="Close modal"
>
  {#if showContent}
    <!-- Close button -->
    <button
      class="close-btn"
      on:click={handleClose}
      aria-label="Close"
      in:fade={{ duration: 300, delay: 300 }}
    >
      <span class="bracket-corner top-left"></span>
      <span class="bracket-corner top-right"></span>
      <span class="close-text">Close</span>
      <span class="bracket-corner bottom-left"></span>
      <span class="bracket-corner bottom-right"></span>
    </button>

    <!-- Centered content without box -->
    <div
      bind:this={contentRef}
      class="modal-content"
      tabindex="-1"
      role="dialog"
      aria-modal="true"
      in:fly={{ y: 30, duration: 400, delay: 100, easing: cubicOut }}
      out:fly={{ y: 20, duration: 200, easing: cubicOut }}
    >
      <!-- Section: Summary -->
      <section class="content-section">
        <h2 class="section-header">////// Summary</h2>

        <p class="description">
          Introducing Abstract, the blockchain for consumer crypto, pioneering culture, community, and creativity onchain. We believe that consumer crypto is the breakthrough opportunity to bring billions of people onchain and the final frontier for consumer crypto adoption. The dominant consumer crypto chain will be the single greatest distribution channel-bringing users, liquidity, partnerships, and community to crypto-native builders and global brands.
        </p>

        <p class="description">
          Through a combination of culture & community building, a brand-new economic mechanism, cutting-edge cryptography, and dedicated builder & brand support, Abstract allows those building for the masses to scale and flourish.
        </p>
      </section>

      <!-- Section: Discover -->
      <section class="content-section">
        <h3 class="section-header">/// Discover</h3>

        <div class="links-row">
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" class="link-btn">
            [X] ↗
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="link-btn">
            [LI] ↗
          </a>
        </div>
      </section>

      <!-- Section: Visit -->
      <section class="content-section">
        <h3 class="section-header">/// Visit</h3>

        <a href="#" target="_blank" rel="noopener noreferrer" class="link-btn">
          [website] ↗
        </a>
      </section>
    </div>
  {/if}
</div>

<style>
  /* Mouse trail styles */
  .mouse-trail-container {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 200;
    overflow: hidden;
  }

  .trail-dot {
    position: absolute;
    width: 8px;
    height: 8px;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.9) 0%,
      rgba(200, 220, 240, 0.6) 40%,
      rgba(180, 200, 220, 0.2) 70%,
      transparent 100%
    );
    border-radius: 50%;
    pointer-events: none;
    mix-blend-mode: screen;
    filter: blur(0.5px);
    box-shadow:
      0 0 4px rgba(255, 255, 255, 0.5),
      0 0 8px rgba(200, 220, 240, 0.3);
  }

  .modal-backdrop {
    position: fixed;
    inset: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: backdrop-filter 0.3s ease, -webkit-backdrop-filter 0.3s ease, background 0.3s ease;
  }

  .modal-backdrop.no-blur {
    backdrop-filter: blur(0px);
    -webkit-backdrop-filter: blur(0px);
    background: rgba(0, 0, 0, 0);
  }

  .modal-content {
    position: relative;
    max-width: 580px;
    width: 100%;
    padding: 0;
    text-align: left;
    max-height: 85vh;
    overflow-y: auto;
    background: none;
    border: none;
    box-shadow: none;
  }

  /* Hide scrollbar but keep functionality */
  .modal-content::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }

  .close-btn {
    position: fixed;
    top: 2.5rem;
    right: 3rem;
    background: transparent;
    border: none;
    color: rgba(216, 218, 223, 0.9);
    cursor: pointer;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.85rem;
    letter-spacing: 0.05em;
    padding: 0;
    display: grid;
    grid-template-columns: 12px auto 12px;
    grid-template-rows: 12px auto 12px;
    gap: 0;
    align-items: center;
    justify-items: center;
    transition: color 0.2s ease;
    z-index: 110;
  }

  .close-btn:hover {
    color: rgba(245, 245, 247, 1);
  }

  .close-btn:hover .bracket-corner {
    border-color: rgba(245, 245, 247, 0.8);
  }

  .bracket-corner {
    width: 10px;
    height: 10px;
    border-color: rgba(168, 173, 184, 0.5);
    border-style: solid;
    transition: border-color 0.2s ease;
  }

  .bracket-corner.top-left {
    grid-column: 1;
    grid-row: 1;
    border-width: 1px 0 0 1px;
  }

  .bracket-corner.top-right {
    grid-column: 3;
    grid-row: 1;
    border-width: 1px 1px 0 0;
  }

  .bracket-corner.bottom-left {
    grid-column: 1;
    grid-row: 3;
    border-width: 0 0 1px 1px;
  }

  .bracket-corner.bottom-right {
    grid-column: 3;
    grid-row: 3;
    border-width: 0 1px 1px 0;
  }

  .close-text {
    grid-column: 2;
    grid-row: 2;
    padding: 0.4rem 0.6rem;
    white-space: nowrap;
  }

  .content-section {
    margin-bottom: 2rem;
    text-align: left;
  }

  .section-header {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.75rem;
    font-weight: 400;
    letter-spacing: 0.08em;
    color: rgba(180, 185, 195, 0.7);
    margin-bottom: 1rem;
  }

  .description {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.85rem;
    line-height: 1.8;
    color: rgba(255, 255, 255, 0.95);
    letter-spacing: 0.01em;
    margin-bottom: 1.25rem;
  }

  .description:last-child {
    margin-bottom: 0;
  }

  .links-row {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  .link-btn {
    background: transparent;
    border: none;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.85);
    cursor: pointer;
    padding: 0;
    letter-spacing: 0.02em;
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .link-btn:hover {
    color: rgba(245, 245, 247, 1);
  }

  @media (max-width: 768px) {
    .modal-content {
      padding: 1.5rem;
      max-width: 100%;
    }

    .close-btn {
      top: 1.5rem;
      right: 1.5rem;
    }

    .description {
      font-size: 0.8rem;
      line-height: 1.7;
    }
  }
</style>
