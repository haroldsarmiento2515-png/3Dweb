<script>
  import { onMount } from 'svelte';
  
  let x = 0;
  let y = 0;
  
  function handleMouseMove(e) {
    x = e.clientX - 10;
    y = e.clientY - 10;
  }
  
  onMount(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  });
</script>

<div class="crosshair" style="left: {x}px; top: {y}px;"></div>

<style>
  .crosshair {
    position: fixed;
    width: 20px;
    height: 20px;
    pointer-events: none;
    z-index: 1000;
    mix-blend-mode: difference;
  }

  .crosshair::before,
  .crosshair::after {
    content: '';
    position: absolute;
    background: white;
  }

  .crosshair::before {
    width: 1px;
    height: 100%;
    left: 50%;
    transform: translateX(-50%);
  }

  .crosshair::after {
    width: 100%;
    height: 1px;
    top: 50%;
    transform: translateY(-50%);
  }
</style>
