<script>
  import { createEventDispatcher, onMount, onDestroy } from 'svelte';
  import { fly, fade } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';

  export let stone;
  export let stoneIndex = 0;
  export let showContent = false;

  const dispatch = createEventDispatcher();

  let contentRef;

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

  onMount(() => {
    contentRef?.focus();
    window.addEventListener('keydown', handleKeydown);
  });

  onDestroy(() => {
    window.removeEventListener('keydown', handleKeydown);
  });
</script>

<div
  class="modal-backdrop"
  class:visible={showContent}
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

    <!-- Content panel on the right side -->
    <div
      bind:this={contentRef}
      class="modal-content"
      tabindex="-1"
      role="dialog"
      aria-modal="true"
      in:fly={{ x: 30, duration: 400, delay: 100, easing: cubicOut }}
      out:fly={{ x: 20, duration: 200, easing: cubicOut }}
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
  .modal-backdrop {
    position: fixed;
    inset: 0;
    z-index: 100;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0;
    background: transparent;
    transition: background 0.4s ease;
  }

  .modal-backdrop.visible {
    background: linear-gradient(
      to right,
      rgba(10, 15, 25, 0.85) 0%,
      rgba(10, 15, 25, 0.6) 40%,
      rgba(10, 15, 25, 0.2) 70%,
      transparent 100%
    );
  }

  .modal-content {
    position: absolute;
    right: 50%;
    top: 50%;
    transform: translateY(-50%);
    max-width: 520px;
    width: 100%;
    padding: 2rem 3rem;
    text-align: left;
    max-height: 80vh;
    overflow-y: auto;
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
  }

  .section-header {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.75rem;
    font-weight: 400;
    letter-spacing: 0.08em;
    color: rgba(168, 173, 184, 0.5);
    margin-bottom: 1rem;
  }

  .description {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.85rem;
    line-height: 1.8;
    color: rgba(216, 218, 223, 0.85);
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
  }

  .link-btn {
    background: transparent;
    border: none;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.85rem;
    color: rgba(216, 218, 223, 0.7);
    cursor: pointer;
    padding: 0;
    letter-spacing: 0.02em;
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .link-btn:hover {
    color: rgba(245, 245, 247, 1);
  }

  @media (max-width: 1200px) {
    .modal-content {
      right: 45%;
      max-width: 480px;
    }
  }

  @media (max-width: 1024px) {
    .modal-content {
      right: 40%;
      max-width: 450px;
      padding: 2rem;
    }

    .close-btn {
      top: 2rem;
      right: 2rem;
    }
  }

  @media (max-width: 768px) {
    .modal-backdrop.visible {
      background: linear-gradient(
        to bottom,
        rgba(10, 15, 25, 0.9) 0%,
        rgba(10, 15, 25, 0.7) 50%,
        rgba(10, 15, 25, 0.4) 100%
      );
    }

    .modal-content {
      right: auto;
      left: 0;
      top: auto;
      bottom: 0;
      transform: none;
      max-width: 100%;
      width: 100%;
      max-height: 60vh;
      padding: 2rem 1.5rem;
      padding-bottom: 3rem;
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
