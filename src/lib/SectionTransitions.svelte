<script>
  export let scrollProgress = 0;
  export let currentSection = 0;
  
  const ENTRY_START = 0.15;
  const ENTRY_END = 0.25;
  const EXIT_START = 0.80;
  const EXIT_END = 0.95;
  
  $: entryProgress = Math.min(1, Math.max(0, (scrollProgress - ENTRY_START) / (ENTRY_END - ENTRY_START)));
  $: exitProgress = Math.min(1, Math.max(0, (scrollProgress - EXIT_START) / (EXIT_END - EXIT_START)));
  $: transitionProgress = scrollProgress < EXIT_START ? entryProgress : entryProgress * (1 - exitProgress);
  
  $: isInCave = transitionProgress > 0.5;
  
  // Static colors based on state
  $: vignetteColor = isInCave ? 'rgba(8, 15, 25, 0.85)' : 'rgba(180, 190, 200, 0.4)';
  $: fogColor = isInCave ? 'rgba(10, 20, 35, 0.9)' : 'rgba(200, 210, 220, 0.5)';
</script>

<div class="section-transitions">
  <div class="vignette" style="background: radial-gradient(ellipse at center, transparent 20%, {vignetteColor} 100%);"></div>
  <div class="fog" style="background: linear-gradient(to top, {fogColor} 0%, transparent 100%);"></div>
</div>

<style>
  .section-transitions {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 2;
  }
  
  .vignette {
    position: absolute;
    inset: 0;
  }
  
  .fog {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 45vh;
  }
</style>