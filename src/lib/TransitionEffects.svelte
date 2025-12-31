<script>
  import { onMount } from 'svelte';

  export let scrollProgress = 0;

  // =====================
  // TRANSITION 1: Igloo to Stone 1 (0.08 - 0.30)
  // =====================
  const TRANSITION_START = 0.08;
  const TRANSITION_END = 0.30;

  // Calculate effect intensity based on scroll progress
  $: transitionProgress = Math.min(1, Math.max(0,
    (scrollProgress - TRANSITION_START) / (TRANSITION_END - TRANSITION_START)
  ));

  // Peak intensity around middle, then fade out smoothly
  $: effectIntensity1 = Math.sin(transitionProgress * Math.PI);

  // Is the first transition active?
  $: isActive1 = scrollProgress >= TRANSITION_START && scrollProgress <= TRANSITION_END;

  // =====================
  // TRANSITION 2: Stone 1 to Stone 2 (0.45 - 0.55)
  // =====================
  const STONE2_TRANSITION_START = 0.45;
  const STONE2_TRANSITION_END = 0.55;

  $: stone2TransitionProgress = Math.min(1, Math.max(0,
    (scrollProgress - STONE2_TRANSITION_START) / (STONE2_TRANSITION_END - STONE2_TRANSITION_START)
  ));

  // Peak intensity around middle for stone 2 transition
  $: effectIntensity2 = Math.sin(stone2TransitionProgress * Math.PI);

  // Is the second transition active?
  $: isActive2 = scrollProgress >= STONE2_TRANSITION_START && scrollProgress <= STONE2_TRANSITION_END;

  // =====================
  // COMBINED EFFECT VALUES
  // =====================
  $: isActive = isActive1 || isActive2;
  $: effectIntensity = Math.max(effectIntensity1, effectIntensity2);

  // Chromatic aberration offset (pixels) - dramatic distortion
  $: aberrationOffset = effectIntensity * 25;

  // Noise opacity - visible frost texture
  $: noiseOpacity = effectIntensity * 0.5;

  // Glitch bar count - more displacement lines
  $: glitchBarCount = Math.floor(effectIntensity * 10);

  // Frost/fog intensity - strong icy mist effect
  $: fogOpacity = effectIntensity * 0.85;

  // Generate random glitch bars
  let glitchBars = [];
  let animationFrame;
  let time = 0;

  function generateGlitchBars(count) {
    const bars = [];
    for (let i = 0; i < count; i++) {
      bars.push({
        top: Math.random() * 100,
        height: Math.random() * 3 + 0.5,
        offset: (Math.random() - 0.5) * 30,
        opacity: Math.random() * 0.7 + 0.3
      });
    }
    return bars;
  }

  function animate() {
    time += 0.1;

    // Regenerate glitch bars periodically for animated effect
    if (isActive && Math.random() > 0.7) {
      glitchBars = generateGlitchBars(glitchBarCount);
    }

    animationFrame = requestAnimationFrame(animate);
  }

  onMount(() => {
    animate();
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  });

  // Update glitch bars when intensity changes
  $: if (isActive) {
    glitchBars = generateGlitchBars(glitchBarCount);
  }
</script>

<div class="transition-effects" class:active={isActive}>
  <!-- Chromatic Aberration Layer -->
  {#if isActive}
    <div
      class="chromatic-layer red"
      style="transform: translate({aberrationOffset}px, {aberrationOffset * 0.5}px); opacity: {effectIntensity * 0.5};"
    ></div>
    <div
      class="chromatic-layer cyan"
      style="transform: translate({-aberrationOffset}px, {-aberrationOffset * 0.5}px); opacity: {effectIntensity * 0.5};"
    ></div>
  {/if}

  <!-- Noise Overlay -->
  {#if isActive}
    <div class="noise-overlay" style="opacity: {noiseOpacity};"></div>
  {/if}

  <!-- Horizontal Glitch Bars -->
  {#if isActive}
    <div class="glitch-bars">
      {#each glitchBars as bar}
        <div
          class="glitch-bar"
          style="
            top: {bar.top}%;
            height: {bar.height}%;
            transform: translateX({bar.offset}px);
            opacity: {bar.opacity * effectIntensity};
          "
        ></div>
      {/each}
    </div>
  {/if}

  <!-- Scan Lines -->
  {#if isActive}
    <div class="scanlines" style="opacity: {effectIntensity * 0.3};"></div>
  {/if}

  <!-- Heavy Fog/Mist Effect -->
  {#if isActive}
    <div class="dig-fog" style="opacity: {fogOpacity};">
      <div class="fog-layer fog-1"></div>
      <div class="fog-layer fog-2"></div>
      <div class="fog-layer fog-3"></div>
    </div>
  {/if}

  <!-- Vignette Intensifier -->
  {#if isActive}
    <div class="vignette-intense" style="opacity: {effectIntensity * 0.6};"></div>
  {/if}
</div>

<style>
  .transition-effects {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 50;
    overflow: hidden;
  }

  .transition-effects:not(.active) {
    display: none;
  }

  /* Chromatic Aberration Layers */
  .chromatic-layer {
    position: absolute;
    inset: -10%;
    mix-blend-mode: screen;
  }

  .chromatic-layer.red {
    background: radial-gradient(ellipse at center,
      rgba(255, 50, 50, 0.3) 0%,
      rgba(255, 0, 0, 0.1) 40%,
      transparent 70%
    );
  }

  .chromatic-layer.cyan {
    background: radial-gradient(ellipse at center,
      rgba(50, 200, 255, 0.3) 0%,
      rgba(0, 255, 255, 0.1) 40%,
      transparent 70%
    );
  }

  /* Noise Overlay */
  .noise-overlay {
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
    background-size: 150px;
    mix-blend-mode: overlay;
    animation: noise-shift 0.1s steps(5) infinite;
  }

  @keyframes noise-shift {
    0% { transform: translate(0, 0); }
    20% { transform: translate(-5px, 5px); }
    40% { transform: translate(5px, -5px); }
    60% { transform: translate(-5px, -5px); }
    80% { transform: translate(5px, 5px); }
    100% { transform: translate(0, 0); }
  }

  /* Glitch Bars */
  .glitch-bars {
    position: absolute;
    inset: 0;
    overflow: hidden;
  }

  .glitch-bar {
    position: absolute;
    left: 0;
    right: 0;
    background: linear-gradient(90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.1) 20%,
      rgba(100, 200, 255, 0.2) 40%,
      rgba(255, 100, 100, 0.15) 60%,
      rgba(255, 255, 255, 0.1) 80%,
      transparent 100%
    );
    backdrop-filter: blur(2px);
  }

  /* Scan Lines */
  .scanlines {
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0, 0, 0, 0.1) 2px,
      rgba(0, 0, 0, 0.1) 4px
    );
  }

  /* Frost/Ice Fog Layers */
  .dig-fog {
    position: absolute;
    inset: 0;
  }

  .fog-layer {
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at center,
      rgba(180, 220, 240, 0.3) 0%,
      rgba(150, 200, 230, 0.4) 30%,
      rgba(120, 180, 220, 0.5) 60%,
      rgba(100, 160, 200, 0.6) 100%
    );
  }

  .fog-1 {
    animation: fog-drift-1 3s ease-in-out infinite;
    transform-origin: center center;
  }

  .fog-2 {
    animation: fog-drift-2 4s ease-in-out infinite;
    opacity: 0.9;
  }

  .fog-3 {
    animation: fog-drift-3 5s ease-in-out infinite;
    opacity: 0.8;
  }

  @keyframes fog-drift-1 {
    0%, 100% { transform: scale(1) translateY(0); }
    50% { transform: scale(1.1) translateY(-5%); }
  }

  @keyframes fog-drift-2 {
    0%, 100% { transform: scale(1.1) translateX(0); }
    50% { transform: scale(1) translateX(5%); }
  }

  @keyframes fog-drift-3 {
    0%, 100% { transform: scale(0.9) translate(0, 0); }
    50% { transform: scale(1.05) translate(-3%, 3%); }
  }

  /* Vignette Intensifier */
  .vignette-intense {
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at center,
      transparent 30%,
      rgba(20, 30, 40, 0.2) 50%,
      rgba(10, 15, 25, 0.4) 75%,
      rgba(5, 10, 15, 0.6) 100%
    );
  }
</style>
