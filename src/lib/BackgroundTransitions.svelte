<script>
  export let scrollProgress = 0;
  export let currentSection = 0;
  
  // Section backgrounds - matching your glacial desaturated palette
  const sectionBackgrounds = [
    {
      id: 'hero',
      gradient: 'radial-gradient(ellipse at 50% 30%, #1a1c22 0%, #12141a 40%, #0a0c10 100%)',
      orbColor: 'rgba(180, 200, 220, 0.08)'
    },
    {
      id: 'transition',
      gradient: 'radial-gradient(ellipse at 30% 50%, #1e2028 0%, #14161c 50%, #0a0c10 100%)',
      orbColor: 'rgba(160, 180, 200, 0.1)'
    },
    {
      id: 'stone-1',
      gradient: 'radial-gradient(ellipse at 70% 40%, #1a1c22 0%, #101218 60%, #08090d 100%)',
      orbColor: 'rgba(106, 112, 128, 0.12)'
    },
    {
      id: 'stone-2',
      gradient: 'radial-gradient(ellipse at 40% 60%, #16181e 0%, #0e1014 50%, #060708 100%)',
      orbColor: 'rgba(42, 44, 50, 0.15)'
    },
    {
      id: 'stone-3',
      gradient: 'radial-gradient(ellipse at 60% 30%, #22242a 0%, #181a20 50%, #0c0e12 100%)',
      orbColor: 'rgba(216, 218, 223, 0.1)'
    },
    {
      id: 'stone-4',
      gradient: 'radial-gradient(ellipse at 50% 70%, #1c1e24 0%, #12141a 55%, #08090d 100%)',
      orbColor: 'rgba(58, 63, 74, 0.12)'
    },
    {
      id: 'finale',
      gradient: 'radial-gradient(ellipse at 50% 50%, #1a1c22 0%, #10121a 40%, #0a0c10 100%)',
      orbColor: 'rgba(200, 220, 240, 0.08)'
    }
  ];
  
  $: activeBackground = sectionBackgrounds[Math.min(currentSection, sectionBackgrounds.length - 1)];
</script>

<div class="background-system">
  <!-- Background gradient layers -->
  {#each sectionBackgrounds as bg, i}
    <div 
      class="bg-layer"
      class:active={currentSection === i}
      style="background: {bg.gradient};"
    ></div>
  {/each}
  
  <!-- Static ambient orbs -->
  <div class="orbs-container">
    <div 
      class="ambient-orb orb-1"
      style="background: {activeBackground.orbColor};"
    ></div>
    <div 
      class="ambient-orb orb-2"
      style="background: {activeBackground.orbColor};"
    ></div>
    <div 
      class="ambient-orb orb-3"
      style="background: {activeBackground.orbColor};"
    ></div>
  </div>
  
  <!-- Noise texture overlay -->
  <div class="noise-overlay"></div>
</div>

<style>
  .background-system {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    overflow: hidden;
  }
  
  .bg-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
  
  .bg-layer.active {
    opacity: 1;
  }
  
  .orbs-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
  
  .ambient-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(100px);
    opacity: 0.4;
  }
  
  .orb-1 {
    width: 50vw;
    height: 50vw;
    top: -15%;
    right: -15%;
  }
  
  .orb-2 {
    width: 40vw;
    height: 40vw;
    bottom: -10%;
    left: -10%;
  }
  
  .orb-3 {
    width: 30vw;
    height: 30vw;
    top: 40%;
    left: 30%;
  }
  
  .noise-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.03;
    pointer-events: none;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  }
</style>