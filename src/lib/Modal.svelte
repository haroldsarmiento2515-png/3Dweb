<script>
  import { createEventDispatcher, onMount, onDestroy } from 'svelte';
  import { fly, scale, fade } from 'svelte/transition';
  import { cubicOut, backOut } from 'svelte/easing';

  export let stone;
  export let stoneIndex = 0;

  const dispatch = createEventDispatcher();

  let contentRef;
  let isVisible = false;

  function handleClose() {
    isVisible = false;
    setTimeout(() => {
      dispatch('close');
    }, 300);
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

  onMount(() => {
    // Trigger entrance animation
    setTimeout(() => {
      isVisible = true;
    }, 50);
    contentRef?.focus();
    window.addEventListener('keydown', handleKeydown);
  });

  onDestroy(() => {
    window.removeEventListener('keydown', handleKeydown);
  });

  $: specimenNumber = String(stoneIndex + 1).padStart(2, '0');
</script>

<div
  class="modal-backdrop"
  class:visible={isVisible}
  on:click={handleBackdropClick}
  on:keydown={handleKeydown}
  role="button"
  tabindex="-1"
  aria-label="Close modal"
>
  <!-- Zoom overlay effect -->
  <div class="zoom-overlay" class:active={isVisible}></div>

  {#if isVisible}
    <div
      bind:this={contentRef}
      class="modal-content"
      tabindex="-1"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      in:fly={{ y: 40, duration: 500, delay: 200, easing: cubicOut }}
      out:fly={{ y: 20, duration: 250, easing: cubicOut }}
    >
      <!-- Close button with bracket decoration -->
      <button
        class="close-btn"
        on:click={handleClose}
        aria-label="Close"
        in:fade={{ duration: 300, delay: 400 }}
      >
        <span class="bracket-corner top-left"></span>
        <span class="bracket-corner top-right"></span>
        <span class="close-text">Close</span>
        <span class="bracket-corner bottom-left"></span>
        <span class="bracket-corner bottom-right"></span>
      </button>

      <!-- Section: Summary -->
      <section class="content-section" in:fly={{ y: 20, duration: 400, delay: 300 }}>
        <h2 class="section-header">////// Summary</h2>

        <p class="description">
          {stone.name}, a creative venture founded in 2021, quickly
          gained attention for its unique IP and engaging community.
          In 2022, the company was acquired by Igloo Inc., a strategic
          move aimed at expanding its reach and capabilities. The
          acquisition by Igloo Inc. was part of a broader vision to
          transform and reposition {stone.name} as a next-generation
          entertainment company and the face of Web3 worldwide.
        </p>

        <p class="description">
          We believe in a future where intellectual property, digital
          collectibles, and communities are born and thrive on the
          blockchain. Since our acquisition, {stone.name} has
          leveraged its onchain origins to create a new model for
          consumer brands, shifting from a brand-and-consumer approach
          to a brand-and-participant model. Our business strategy
          focuses on expanding a vast range of content mediums,
          products, and experiences, driving people onchain into the
          new era of the internet. By harnessing the power of our
          vibrant community and the rich and whimsical universe of
          {stone.name}, we're revolutionizing the way IP is created
          and experienced.
        </p>
      </section>

      <!-- Section: Discover -->
      <section class="content-section" in:fly={{ y: 20, duration: 400, delay: 400 }}>
        <h3 class="section-header">/// Discover</h3>

        <div class="links-row">
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" class="link-btn">
            [X] ↗
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="link-btn">
            [IG] ↗
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="link-btn">
            [LI] ↗
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" class="link-btn">
            [TK] ↗
          </a>
        </div>
      </section>

      <!-- Section: Visit -->
      <section class="content-section" in:fly={{ y: 20, duration: 400, delay: 500 }}>
        <h3 class="section-header">/// Visit</h3>

        <a href="#" target="_blank" rel="noopener noreferrer" class="link-btn">
          [website] ↗
        </a>
      </section>
    </div>
  {/if}
</div>

<style>
  .modal-backdrop {
    position: fixed;
    inset: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    background: rgba(10, 12, 16, 0);
    transition: background 0.5s ease;
    overflow-y: auto;
  }

  .modal-backdrop.visible {
    background: rgba(10, 12, 16, 0.85);
  }

  /* Zoom overlay effect */
  .zoom-overlay {
    position: fixed;
    inset: 0;
    background: radial-gradient(circle at 60% 50%, transparent 0%, rgba(10, 12, 16, 0.95) 70%);
    opacity: 0;
    transition: opacity 0.6s ease;
    pointer-events: none;
  }

  .zoom-overlay.active {
    opacity: 1;
  }

  .modal-content {
    position: relative;
    max-width: 580px;
    width: 100%;
    padding: 2rem;
    text-align: center;
    max-height: 85vh;
    overflow-y: auto;
  }

  .close-btn {
    position: fixed;
    top: 3rem;
    right: 4rem;
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
    margin-bottom: 2.5rem;
    text-align: left;
  }

  .section-header {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.8rem;
    font-weight: 400;
    letter-spacing: 0.05em;
    color: rgba(168, 173, 184, 0.6);
    margin-bottom: 1.25rem;
  }

  .description {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.88rem;
    line-height: 1.85;
    color: rgba(216, 218, 223, 0.85);
    letter-spacing: 0.02em;
    margin-bottom: 1.5rem;
  }

  .description:last-child {
    margin-bottom: 0;
  }

  .description :global(strong) {
    color: rgba(245, 245, 247, 1);
    font-weight: 600;
  }

  .links-row {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
  }

  .link-btn {
    background: transparent;
    border: none;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.85rem;
    color: rgba(216, 218, 223, 0.75);
    cursor: pointer;
    padding: 0;
    letter-spacing: 0.02em;
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .link-btn:hover {
    color: rgba(245, 245, 247, 1);
  }

  @media (max-width: 1024px) {
    .modal-backdrop {
      padding: 2rem;
    }

    .modal-content {
      max-width: 100%;
    }

    .close-btn {
      top: 2rem;
      right: 2rem;
    }
  }

  @media (max-width: 768px) {
    .modal-backdrop {
      padding: 1.5rem;
    }

    .modal-content {
      padding: 1.5rem;
      padding-top: 4rem;
    }

    .close-btn {
      top: 1.5rem;
      right: 1.5rem;
    }

    .description {
      font-size: 0.82rem;
      line-height: 1.75;
    }
  }
</style>
