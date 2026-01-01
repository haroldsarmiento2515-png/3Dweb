<script>
  import { createEventDispatcher, onMount, onDestroy, tick } from 'svelte';
  import { fly, fade } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';

  export let stone;
  export let stoneIndex = 0;
  export let showContent = false;
  export let hideBlur = false;

  const dispatch = createEventDispatcher();

  let contentRef;

  // Traveling glow state
  let animationFrameId;
  let glowWaves = []; // Array of active glow waves { elementId, startIndex, progress, direction }
  let wrappedElements = new Map(); // Map of element id -> array of char spans

  const GLOW_SPEED = 2; // Characters per frame
  const GLOW_WIDTH = 15; // How many characters the glow spans
  let lastHoverTime = 0;
  const HOVER_THROTTLE = 100; // Minimum ms between triggering new waves

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

  // Find which character was hovered
  function handleTextHover(event) {
    const now = Date.now();
    if (now - lastHoverTime < HOVER_THROTTLE) return;
    lastHoverTime = now;

    const target = event.target;
    if (!target.classList.contains('glow-char')) return;

    const parent = target.parentElement;
    const elementId = parent.dataset.elementId;
    if (!elementId) return;

    const chars = wrappedElements.get(elementId);
    if (!chars) return;

    const charIndex = Array.from(chars).indexOf(target);
    if (charIndex === -1) return;

    // Start glow waves traveling in both directions from hover point
    glowWaves.push({
      elementId,
      position: charIndex,
      direction: 1, // Forward
      life: 1
    });
    glowWaves.push({
      elementId,
      position: charIndex,
      direction: -1, // Backward
      life: 1
    });
  }

  function updateGlowWaves() {
    // Update each wave position
    glowWaves = glowWaves.map(wave => ({
      ...wave,
      position: wave.position + (wave.direction * GLOW_SPEED),
      life: wave.life - 0.008 // Gradually fade
    })).filter(wave => wave.life > 0);

    // Reset all characters first
    wrappedElements.forEach((chars) => {
      chars.forEach(char => {
        char.style.color = '';
        char.style.textShadow = '';
      });
    });

    // Apply glow from all active waves
    glowWaves.forEach(wave => {
      const chars = wrappedElements.get(wave.elementId);
      if (!chars) return;

      chars.forEach((char, index) => {
        const distance = Math.abs(index - wave.position);

        if (distance < GLOW_WIDTH) {
          // Calculate intensity based on distance from wave center and wave life
          const proximity = 1 - (distance / GLOW_WIDTH);
          const intensity = proximity * proximity * wave.life;

          if (intensity > 0.05) {
            // Get current glow or 0
            const currentGlow = parseFloat(char.dataset.glow || '0');
            const newGlow = Math.max(currentGlow, intensity);
            char.dataset.glow = newGlow;

            // Apply the glow effect
            char.style.color = `rgba(255, 255, 255, ${0.6 + newGlow * 0.4})`;
            char.style.textShadow = `0 0 ${newGlow * 10}px rgba(255, 255, 255, ${newGlow * 0.9}), 0 0 ${newGlow * 20}px rgba(200, 220, 240, ${newGlow * 0.6})`;
          }
        }
      });
    });

    // Clear glow data for next frame
    wrappedElements.forEach((chars) => {
      chars.forEach(char => {
        char.dataset.glow = '0';
      });
    });

    animationFrameId = requestAnimationFrame(updateGlowWaves);
  }

  // Wrap text in spans for individual character control
  function wrapTextInSpans(element) {
    if (!element) return;

    const textElements = element.querySelectorAll('.description, .section-header');
    let elementCounter = 0;

    textElements.forEach(el => {
      if (el.dataset.wrapped) return; // Skip already wrapped

      const elementId = `glow-el-${elementCounter++}`;
      el.dataset.elementId = elementId;

      const text = el.textContent;
      el.innerHTML = '';

      const charSpans = [];

      for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.className = 'glow-char';
        span.textContent = text[i] === ' ' ? '\u00A0' : text[i]; // Use non-breaking space
        el.appendChild(span);
        charSpans.push(span);
      }

      wrappedElements.set(elementId, charSpans);
      el.dataset.wrapped = 'true';

      // Add hover listener to the parent element
      el.addEventListener('mousemove', handleTextHover);
    });
  }

  onMount(() => {
    contentRef?.focus();
    window.addEventListener('keydown', handleKeydown);
    animationFrameId = requestAnimationFrame(updateGlowWaves);
  });

  onDestroy(() => {
    window.removeEventListener('keydown', handleKeydown);
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }
    // Clean up hover listeners
    wrappedElements.forEach((chars, elementId) => {
      const el = document.querySelector(`[data-element-id="${elementId}"]`);
      if (el) {
        el.removeEventListener('mousemove', handleTextHover);
      }
    });
    wrappedElements.clear();
  });

  // Wrap text when content becomes visible
  $: if (showContent && contentRef) {
    tick().then(() => wrapTextInSpans(contentRef));
  }
</script>

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
  /* Text glow character styles */
  :global(.glow-char) {
    display: inline;
    transition: color 0.1s ease, text-shadow 0.1s ease;
    will-change: color, text-shadow;
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
