<script>
  import { onMount } from 'svelte';

  export let scrollProgress = 0;

  let canvas;
  let ctx;

  const gridSize = 50;
  const lineWidth = 0.5;

  function draw() {
    if (!ctx || !canvas) return;

    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    // Base opacity decreases as we scroll into interior
    const baseOpacity = Math.max(0, 0.08 - scrollProgress * 0.15);
    
    if (baseOpacity <= 0) return;

    ctx.strokeStyle = `rgba(168, 173, 184, ${baseOpacity})`;
    ctx.lineWidth = lineWidth;

    // Draw static diagonal grid
    ctx.beginPath();
    for (let x = -height; x < width + height; x += gridSize) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x + height, height);
    }
    ctx.stroke();

    ctx.beginPath();
    for (let x = 0; x < width + height; x += gridSize) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x - height, height);
    }
    ctx.stroke();

    // Add static connection points
    ctx.fillStyle = `rgba(168, 173, 184, ${baseOpacity * 1.5})`;
    for (let i = 0; i < 20; i++) {
      const px = ((Math.sin(i * 0.7) + 1) / 2) * width;
      const py = ((Math.cos(i * 0.9) + 1) / 2) * height;
      
      ctx.beginPath();
      ctx.arc(px, py, 2, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function resize() {
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    draw();
  }

  onMount(() => {
    ctx = canvas.getContext('2d');
    resize();

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    };
  });

  // Redraw when scrollProgress changes
  $: if (ctx) draw();
</script>

<canvas 
  bind:this={canvas}
  class="wireframe-overlay"
  aria-hidden="true"
></canvas>

<style>
  .wireframe-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 5;
    mask-image: radial-gradient(ellipse 80% 70% at 50% 50%, black 0%, transparent 100%);
    -webkit-mask-image: radial-gradient(ellipse 80% 70% at 50% 50%, black 0%, transparent 100%);
  }
</style>