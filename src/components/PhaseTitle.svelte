<script>
  export let title = '';
  export let subtitle = '';
  export let visible = false;
</script>

<div class="phase-title" class:visible>
  <h2>{title}</h2>
  <div class="subtitle">{subtitle}</div>
</div>

<style>
  .phase-title {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 50;
    text-align: center;
    opacity: 0;
    transition: opacity 0.8s ease;
    pointer-events: none;
  }

  .phase-title.visible {
    opacity: 1;
  }

  .phase-title h2 {
    font-family: 'Instrument Sans', sans-serif;
    font-size: clamp(40px, 8vw, 100px);
    font-weight: 600;
    color: rgba(255, 255, 255, 0.08);
    letter-spacing: -2px;
    text-transform: uppercase;
    white-space: nowrap;
  }

  .subtitle {
    font-family: 'Space Mono', monospace;
    font-size: 11px;
    letter-spacing: 6px;
    color: rgba(255, 255, 255, 0.4);
    text-transform: uppercase;
    margin-top: 20px;
  }
</style>
