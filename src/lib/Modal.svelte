<script>
  import { createEventDispatcher, onMount, onDestroy } from 'svelte';

  export let stone;
  export let stoneIndex = 0;

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

  $: specimenNumber = String(stoneIndex + 1).padStart(2, '0');
</script>

<div 
  class="modal-backdrop"
  on:click={handleBackdropClick}
  on:keydown={handleKeydown}
  role="button"
  tabindex="-1"
  aria-label="Close modal"
>
  <div 
    bind:this={contentRef}
    class="modal-content"
    tabindex="-1"
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-title"
  >
    <!-- Close button with bracket decoration -->
    <button 
      class="close-btn"
      on:click={handleClose}
      aria-label="Close"
    >
      <span class="bracket-top-left">┌</span>
      <span class="bracket-top-right">┐</span>
      <span class="close-text">Close</span>
      <span class="bracket-bottom-left">└</span>
      <span class="bracket-bottom-right">┘</span>
    </button>

    <!-- Section: Summary -->
    <section class="content-section">
      <h2 class="section-header">////// Summary</h2>
      
      <p class="description">
        {stone.description}
      </p>
    </section>

    <!-- Section: Properties -->
    <section class="content-section">
      <h3 class="section-header">/// Composition</h3>
      
      <p class="description">
        Through a <strong>combination</strong> of <strong>crystalline</strong> 
        structure, a <strong>brand-new</strong> geological 
        formation, <strong>cutting-edge</strong> mineral analysis, and <strong>dedicated</strong>
        research & scientific support, {stone.name} allows
        those exploring <strong>for the masses</strong> to scale and
        flourish.
      </p>
    </section>

    <!-- Section: Discover -->
    <section class="content-section">
      <h3 class="section-header">/// Discover</h3>
      
      <div class="links-row">
        <button class="link-btn" on:click={handleClose}>
          [X]↗
        </button>
        <button class="link-btn" on:click={handleClose}>
          [LI]↗
        </button>
      </div>
    </section>

    <!-- Section: Visit -->
    <section class="content-section">
      <h3 class="section-header">/// Visit</h3>
      
      <button class="link-btn" on:click={handleClose}>
        [website]↗
      </button>
    </section>
  </div>
</div>

<style>
  .modal-backdrop {
    position: fixed;
    inset: 0;
    z-index: 100;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 5rem 4rem;
    background: rgba(10, 12, 16, 0.75);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
  }

  .modal-content {
    position: relative;
    max-width: 520px;
    width: 100%;
    padding-top: 1rem;
  }

  .close-btn {
    position: absolute;
    top: 0;
    right: -80px;
    background: transparent;
    border: none;
    color: rgba(216, 218, 223, 0.9);
    cursor: pointer;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.85rem;
    letter-spacing: 0.05em;
    padding: 0;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto auto;
    gap: 0;
    align-items: center;
    width: 70px;
  }

  .close-btn:hover {
    color: rgba(245, 245, 247, 1);
  }

  .bracket-top-left {
    grid-column: 1;
    grid-row: 1;
    color: rgba(168, 173, 184, 0.5);
    font-size: 0.9rem;
    line-height: 1;
  }

  .bracket-top-right {
    grid-column: 3;
    grid-row: 1;
    color: rgba(168, 173, 184, 0.5);
    font-size: 0.9rem;
    line-height: 1;
    text-align: right;
  }

  .close-text {
    grid-column: 2;
    grid-row: 2;
    padding: 0.35rem 0.5rem;
    white-space: nowrap;
  }

  .bracket-bottom-left {
    grid-column: 1;
    grid-row: 3;
    color: rgba(168, 173, 184, 0.5);
    font-size: 0.9rem;
    line-height: 1;
  }

  .bracket-bottom-right {
    grid-column: 3;
    grid-row: 3;
    color: rgba(168, 173, 184, 0.5);
    font-size: 0.9rem;
    line-height: 1;
    text-align: right;
  }

  .content-section {
    margin-bottom: 2rem;
  }

  .section-header {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.8rem;
    font-weight: 400;
    letter-spacing: 0.05em;
    color: rgba(168, 173, 184, 0.6);
    margin-bottom: 1rem;
  }

  .description {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.9rem;
    line-height: 1.8;
    color: rgba(216, 218, 223, 0.85);
    letter-spacing: 0.02em;
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
    color: rgba(216, 218, 223, 0.85);
    cursor: pointer;
    padding: 0;
    letter-spacing: 0.02em;
  }

  .link-btn:hover {
    color: rgba(245, 245, 247, 1);
  }

  @media (max-width: 768px) {
    .modal-backdrop {
      padding: 3rem 2rem;
      align-items: flex-start;
    }

    .modal-content {
      padding-top: 60px;
    }

    .close-btn {
      top: 0;
      right: 0;
    }
  }
</style>