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

  // Mouse glow state
  let mouseX = 0;
  let mouseY = 0;
  const GLOW_RADIUS = 150; // How far the glow extends from cursor
  let textSpans = [];
  let animationFrameId;

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

  function handleMouseMove(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
  }

  function updateGlow() {
    if (!contentRef) {
      animationFrameId = requestAnimationFrame(updateGlow);
      return;
    }

    // Get all glow-char spans
    const chars = contentRef.querySelectorAll('.glow-char');

    chars.forEach(char => {
      const rect = char.getBoundingClientRect();
      const charX = rect.left + rect.width / 2;
      const charY = rect.top + rect.height / 2;

      // Calculate distance from mouse
      const dx = mouseX - charX;
      const dy = mouseY - charY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Calculate glow intensity (1 at cursor, 0 at GLOW_RADIUS)
      const intensity = Math.max(0, 1 - distance / GLOW_RADIUS);

      // Apply glow effect
      if (intensity > 0) {
        const glowStrength = intensity * intensity; // Quadratic falloff for smoother effect
        char.style.color = `rgba(255, 255, 255, ${0.6 + glowStrength * 0.4})`;
        char.style.textShadow = `0 0 ${glowStrength * 8}px rgba(255, 255, 255, ${glowStrength * 0.8}), 0 0 ${glowStrength * 15}px rgba(200, 220, 240, ${glowStrength * 0.5})`;
      } else {
        char.style.color = '';
        char.style.textShadow = '';
      }
    });

    animationFrameId = requestAnimationFrame(updateGlow);
  }

  // Wrap text in spans for individual character control
  function wrapTextInSpans(element) {
    if (!element) return;

    const textElements = element.querySelectorAll('.description, .section-header');

    textElements.forEach(el => {
      if (el.dataset.wrapped) return; // Skip already wrapped

      const text = el.textContent;
      el.innerHTML = '';

      for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.className = 'glow-char';
        span.textContent = text[i] === ' ' ? '\u00A0' : text[i]; // Use non-breaking space
        el.appendChild(span);
      }

      el.dataset.wrapped = 'true';
    });
  }

  onMount(() => {
    contentRef?.focus();
    window.addEventListener('keydown', handleKeydown);
    window.addEventListener('mousemove', handleMouseMove);
    animationFrameId = requestAnimationFrame(updateGlow);
  });

  onDestroy(() => {
    window.removeEventListener('keydown', handleKeydown);
    window.removeEventListener('mousemove', handleMouseMove);
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }
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
