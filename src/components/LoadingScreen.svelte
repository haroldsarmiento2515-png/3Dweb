<script>
  import { onMount } from 'svelte';
  
  export let visible = true;
  
  let progress = 0;
  
  onMount(() => {
    const interval = setInterval(() => {
      progress += Math.random() * 15;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
      }
    }, 100);
    
    return () => clearInterval(interval);
  });
</script>

<div class="loading-screen" class:hidden={!visible}>
  <div class="loading-text">Initializing Particle System</div>
  <div class="loading-bar">
    <div class="loading-progress" style="width: {progress}%"></div>
  </div>
  <div class="loading-text">{Math.floor(progress)}%</div>
</div>

<style>
  .loading-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #0a0a0a;
    z-index: 10000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    transition: opacity 0.8s ease, visibility 0.8s ease;
  }

  .loading-screen.hidden {
    opacity: 0;
    visibility: hidden;
  }

  .loading-text {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    letter-spacing: 6px;
    color: rgba(255, 255, 255, 0.4);
    text-transform: uppercase;
  }

  .loading-bar {
    width: 200px;
    height: 1px;
    background: rgba(255, 255, 255, 0.1);
    overflow: hidden;
  }

  .loading-progress {
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
    transition: width 0.3s ease;
  }
</style>
