<script>
  import { onMount } from 'svelte';

  export let scrollProgress = 0;
  export let scrollVelocity = 0;
  export let currentStage = 0;
  export let stages = ['sphere', 'torus', 'cube', 'human', 'disperse'];

  let fps = 60;
  let frameCount = 0;
  let lastTime = performance.now();
  let fpsInterval;

  $: cameraCoords = {
    x: (Math.sin(performance.now() * 0.0002) * 0.2).toFixed(3),
    y: (Math.cos(performance.now() * 0.0003) * 0.1).toFixed(3),
    z: '5.000'
  };

  onMount(() => {
    fpsInterval = setInterval(() => {
      const now = performance.now();
      fps = Math.round(frameCount * 1000 / (now - lastTime));
      frameCount = 0;
      lastTime = now;
    }, 1000);

    const countFrames = () => {
      frameCount++;
      requestAnimationFrame(countFrames);
    };
    countFrames();

    return () => clearInterval(fpsInterval);
  });
</script>

<div class="hud-layer">
  <!-- Corner Brackets -->
  <div class="corner-bracket tl"></div>
  <div class="corner-bracket tr"></div>
  <div class="corner-bracket bl"></div>
  <div class="corner-bracket br"></div>

  <!-- Header -->
  <div class="hud-header">
    <h1>Glacial Experience</h1>
  </div>

  <!-- Left Panel - Data -->
  <div class="hud-left">
    <div class="data-block">
      <span class="data-label">Particles</span>
      <span class="data-value">50,000</span>
      <div class="data-bar">
        <div class="data-bar-fill" style="width: 100%"></div>
      </div>
    </div>
    <div class="data-block">
      <span class="data-label">Morph Progress</span>
      <span class="data-value">{scrollProgress.toFixed(2)}</span>
      <div class="data-bar">
        <div class="data-bar-fill" style="width: {scrollProgress * 100}%"></div>
      </div>
    </div>
    <div class="data-block">
      <span class="data-label">Velocity</span>
      <span class="data-value">{Math.abs(scrollVelocity).toFixed(2)}</span>
    </div>
  </div>

  <!-- Right Panel - Morph Stages -->
  <div class="hud-right">
    <div class="morph-stage">
      {#each stages as stage, i}
        <div class="stage-item" class:active={i === currentStage}>
          <span class="stage-name">{stage}</span>
          <div class="stage-indicator"></div>
        </div>
      {/each}
    </div>
  </div>

  <!-- Bottom - Scroll Indicator -->
  <div class="hud-bottom">
    <div class="scroll-indicator">
      <div class="scroll-line">
        <div class="scroll-dot"></div>
      </div>
      <span class="scroll-text">Scroll to Morph</span>
    </div>
  </div>

  <!-- Coordinates -->
  <div class="coordinates">
    <div class="coord-row">
      <span>X: {cameraCoords.x}</span>
      <span>Y: {cameraCoords.y}</span>
      <span>Z: {cameraCoords.z}</span>
    </div>
  </div>

  <!-- Frame Counter -->
  <div class="frame-counter">
    <div>FPS: {fps}</div>
  </div>
</div>

<style>
  .hud-layer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    pointer-events: none;
    z-index: 100;
  }

  /* Corner Brackets */
  .corner-bracket {
    position: absolute;
    width: 40px;
    height: 40px;
    border: 1px solid rgba(255, 255, 255, 0.4);
  }

  .corner-bracket.tl {
    top: 30px;
    left: 30px;
    border-right: none;
    border-bottom: none;
  }

  .corner-bracket.tr {
    top: 30px;
    right: 30px;
    border-left: none;
    border-bottom: none;
  }

  .corner-bracket.bl {
    bottom: 30px;
    left: 30px;
    border-right: none;
    border-top: none;
  }

  .corner-bracket.br {
    bottom: 30px;
    right: 30px;
    border-left: none;
    border-top: none;
  }

  /* Header */
  .hud-header {
    position: absolute;
    top: 40px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
  }

  .hud-header h1 {
    font-family: 'Space Mono', monospace;
    font-size: 11px;
    letter-spacing: 8px;
    color: rgba(255, 255, 255, 0.4);
    text-transform: uppercase;
  }

  /* Left Panel */
  .hud-left {
    position: absolute;
    left: 50px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .data-block {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .data-label {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    letter-spacing: 3px;
    color: rgba(255, 255, 255, 0.4);
    text-transform: uppercase;
  }

  .data-value {
    font-family: 'Space Mono', monospace;
    font-size: 24px;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.8);
  }

  .data-bar {
    width: 100px;
    height: 2px;
    background: rgba(255, 255, 255, 0.1);
    margin-top: 8px;
    overflow: hidden;
  }

  .data-bar-fill {
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
    transition: width 0.3s ease;
  }

  /* Right Panel */
  .hud-right {
    position: absolute;
    right: 50px;
    top: 50%;
    transform: translateY(-50%);
    text-align: right;
  }

  .morph-stage {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .stage-item {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 12px;
    opacity: 0.3;
    transition: opacity 0.5s ease, transform 0.5s ease;
  }

  .stage-item.active {
    opacity: 1;
    transform: translateX(-10px);
  }

  .stage-name {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .stage-indicator {
    width: 8px;
    height: 8px;
    border: 1px solid rgba(255, 255, 255, 0.4);
    transition: background 0.3s ease, border-color 0.3s ease;
  }

  .stage-item.active .stage-indicator {
    background: rgba(255, 255, 255, 0.8);
    border-color: rgba(255, 255, 255, 0.8);
  }

  /* Bottom HUD */
  .hud-bottom {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }

  .scroll-indicator {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  .scroll-line {
    width: 1px;
    height: 60px;
    background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.4), transparent);
    position: relative;
    overflow: hidden;
  }

  .scroll-dot {
    position: absolute;
    width: 3px;
    height: 3px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    left: -1px;
    animation: scrollPulse 2s ease-in-out infinite;
  }

  @keyframes scrollPulse {
    0%, 100% { top: 0; opacity: 0; }
    50% { opacity: 1; }
    100% { top: 100%; opacity: 0; }
  }

  .scroll-text {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    letter-spacing: 4px;
    color: rgba(255, 255, 255, 0.4);
    text-transform: uppercase;
  }

  /* Coordinates */
  .coordinates {
    position: absolute;
    bottom: 80px;
    left: 50px;
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    color: rgba(255, 255, 255, 0.4);
    letter-spacing: 1px;
  }

  .coord-row {
    display: flex;
    gap: 20px;
  }

  /* Frame counter */
  .frame-counter {
    position: absolute;
    top: 80px;
    right: 50px;
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    color: rgba(255, 255, 255, 0.4);
    text-align: right;
  }
</style>
