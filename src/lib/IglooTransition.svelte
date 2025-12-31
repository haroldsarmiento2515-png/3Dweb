<script>
  import { onMount } from 'svelte';

  export let scrollProgress = 0;

  // Transition timing - triggers when entering the igloo (going to 1st stone)
  const TRANSITION_START = 0.05;
  const TRANSITION_PEAK = 0.10;
  const TRANSITION_END = 0.16;

  // Calculate transition phases
  $: enterPhase = scrollProgress >= TRANSITION_START && scrollProgress < TRANSITION_PEAK;
  $: peakPhase = scrollProgress >= TRANSITION_PEAK && scrollProgress < TRANSITION_END;
  $: isActive = scrollProgress >= TRANSITION_START && scrollProgress <= TRANSITION_END;

  // Progress through the transition (0-1)
  $: transitionProgress = Math.min(1, Math.max(0,
    (scrollProgress - TRANSITION_START) / (TRANSITION_END - TRANSITION_START)
  ));

  // Ice tunnel zoom effect - starts slow, accelerates through middle
  $: tunnelScale = enterPhase
    ? 1 + (scrollProgress - TRANSITION_START) / (TRANSITION_PEAK - TRANSITION_START) * 2
    : peakPhase
      ? 3 + (scrollProgress - TRANSITION_PEAK) / (TRANSITION_END - TRANSITION_PEAK) * 10
      : 1;

  // Door glow intensity - bright at start, overwhelming at peak
  $: glowIntensity = isActive ? Math.sin(transitionProgress * Math.PI) : 0;

  // White flash at transition peak
  $: flashOpacity = peakPhase
    ? Math.pow((scrollProgress - TRANSITION_PEAK) / (TRANSITION_END - TRANSITION_PEAK), 0.5) * 0.9
    : 0;

  // Vignette closes in as we enter
  $: vignetteSize = enterPhase
    ? 50 - (scrollProgress - TRANSITION_START) / (TRANSITION_PEAK - TRANSITION_START) * 35
    : peakPhase
      ? 15 + (scrollProgress - TRANSITION_PEAK) / (TRANSITION_END - TRANSITION_PEAK) * 85
      : 100;

  // Ice particles floating effect
  let particles = [];
  let time = 0;
  let animationFrame;

  function generateParticles() {
    const newParticles = [];
    for (let i = 0; i < 40; i++) {
      newParticles.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        speed: Math.random() * 2 + 1,
        drift: (Math.random() - 0.5) * 2,
        opacity: Math.random() * 0.6 + 0.3,
        delay: Math.random() * Math.PI * 2
      });
    }
    return newParticles;
  }

  function animate() {
    time += 0.02;
    animationFrame = requestAnimationFrame(animate);
  }

  onMount(() => {
    particles = generateParticles();
    animate();
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  });

  // Ice ring positions for tunnel effect
  const tunnelRings = Array.from({ length: 8 }, (_, i) => ({
    delay: i * 0.1,
    scale: 1 + i * 0.15,
    opacity: 1 - i * 0.1
  }));
</script>

<div class="igloo-transition" class:active={isActive}>
  <!-- Ice Tunnel Rings - creates depth illusion -->
  {#if isActive}
    <div class="tunnel-container" style="transform: scale({tunnelScale});">
      {#each tunnelRings as ring, i}
        <div
          class="tunnel-ring"
          style="
            transform: scale({ring.scale});
            opacity: {ring.opacity * glowIntensity};
            animation-delay: {ring.delay}s;
          "
        ></div>
      {/each}
    </div>
  {/if}

  <!-- Central Portal Glow -->
  {#if isActive}
    <div class="portal-glow" style="opacity: {glowIntensity};">
      <div class="glow-core"></div>
      <div class="glow-outer"></div>
      <div class="glow-pulse"></div>
    </div>
  {/if}

  <!-- Floating Ice Particles -->
  {#if isActive}
    <div class="ice-particles">
      {#each particles as particle}
        <div
          class="ice-particle"
          style="
            left: {particle.x + Math.sin(time * particle.speed + particle.delay) * particle.drift}%;
            top: {particle.y + Math.cos(time * particle.speed * 0.7 + particle.delay) * particle.drift}%;
            width: {particle.size}px;
            height: {particle.size}px;
            opacity: {particle.opacity * glowIntensity};
            transform: translateZ({tunnelScale * 10}px);
          "
        ></div>
      {/each}
    </div>
  {/if}

  <!-- Ice Crystal Rays -->
  {#if isActive}
    <div class="crystal-rays" style="opacity: {glowIntensity * 0.7};">
      {#each Array(12) as _, i}
        <div
          class="ray"
          style="transform: rotate({i * 30}deg);"
        ></div>
      {/each}
    </div>
  {/if}

  <!-- Frost Edge Vignette -->
  {#if isActive}
    <div
      class="frost-vignette"
      style="
        background: radial-gradient(ellipse at center,
          transparent {vignetteSize}%,
          rgba(180, 220, 240, 0.3) {vignetteSize + 10}%,
          rgba(100, 180, 220, 0.5) {vignetteSize + 20}%,
          rgba(50, 120, 160, 0.8) {vignetteSize + 30}%,
          rgba(20, 60, 100, 0.95) 100%
        );
      "
    ></div>
  {/if}

  <!-- White Flash at Peak -->
  {#if peakPhase}
    <div class="white-flash" style="opacity: {flashOpacity};"></div>
  {/if}

  <!-- Speed Lines Effect -->
  {#if isActive && transitionProgress > 0.3}
    <div class="speed-lines" style="opacity: {(transitionProgress - 0.3) * 1.4};">
      {#each Array(20) as _, i}
        <div
          class="speed-line"
          style="
            transform: rotate({i * 18}deg);
            animation-delay: {i * 0.05}s;
          "
        ></div>
      {/each}
    </div>
  {/if}

  <!-- Chromatic Aberration during intense transition -->
  {#if peakPhase}
    <div class="chromatic-red" style="opacity: {glowIntensity * 0.3};"></div>
    <div class="chromatic-cyan" style="opacity: {glowIntensity * 0.3};"></div>
  {/if}
</div>

<style>
  .igloo-transition {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 45;
    overflow: hidden;
    perspective: 1000px;
  }

  .igloo-transition:not(.active) {
    display: none;
  }

  /* Ice Tunnel Rings */
  .tunnel-container {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.1s ease-out;
  }

  .tunnel-ring {
    position: absolute;
    width: 60vmin;
    height: 60vmin;
    border-radius: 50%;
    border: 2px solid rgba(150, 220, 255, 0.4);
    box-shadow:
      0 0 20px rgba(100, 200, 255, 0.3),
      inset 0 0 30px rgba(150, 220, 255, 0.2);
    animation: ring-pulse 2s ease-in-out infinite;
  }

  @keyframes ring-pulse {
    0%, 100% { transform: scale(1); opacity: 0.5; }
    50% { transform: scale(1.05); opacity: 0.8; }
  }

  /* Portal Glow */
  .portal-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40vmin;
    height: 40vmin;
  }

  .glow-core {
    position: absolute;
    inset: 20%;
    border-radius: 50%;
    background: radial-gradient(circle,
      rgba(255, 255, 255, 0.9) 0%,
      rgba(180, 230, 255, 0.7) 40%,
      rgba(100, 200, 255, 0.4) 70%,
      transparent 100%
    );
    filter: blur(10px);
    animation: core-glow 1.5s ease-in-out infinite;
  }

  .glow-outer {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: radial-gradient(circle,
      rgba(100, 200, 255, 0.4) 0%,
      rgba(80, 180, 240, 0.2) 50%,
      transparent 70%
    );
    filter: blur(20px);
    animation: outer-glow 2s ease-in-out infinite reverse;
  }

  .glow-pulse {
    position: absolute;
    inset: -20%;
    border-radius: 50%;
    background: radial-gradient(circle,
      rgba(150, 220, 255, 0.3) 0%,
      transparent 60%
    );
    animation: pulse-expand 1s ease-out infinite;
  }

  @keyframes core-glow {
    0%, 100% { transform: scale(1); opacity: 0.9; }
    50% { transform: scale(1.1); opacity: 1; }
  }

  @keyframes outer-glow {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.15); }
  }

  @keyframes pulse-expand {
    0% { transform: scale(0.8); opacity: 0.6; }
    100% { transform: scale(1.5); opacity: 0; }
  }

  /* Ice Particles */
  .ice-particles {
    position: absolute;
    inset: 0;
  }

  .ice-particle {
    position: absolute;
    background: radial-gradient(circle,
      rgba(255, 255, 255, 0.9) 0%,
      rgba(180, 220, 255, 0.6) 50%,
      transparent 100%
    );
    border-radius: 50%;
    filter: blur(1px);
    animation: particle-shimmer 2s ease-in-out infinite;
  }

  @keyframes particle-shimmer {
    0%, 100% { opacity: 0.3; transform: scale(1); }
    50% { opacity: 0.8; transform: scale(1.2); }
  }

  /* Crystal Rays */
  .crystal-rays {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100vmax;
    height: 100vmax;
  }

  .ray {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50%;
    height: 2px;
    background: linear-gradient(90deg,
      rgba(255, 255, 255, 0.8) 0%,
      rgba(150, 220, 255, 0.5) 30%,
      transparent 100%
    );
    transform-origin: left center;
    animation: ray-pulse 1.5s ease-in-out infinite;
  }

  @keyframes ray-pulse {
    0%, 100% { opacity: 0.3; width: 40%; }
    50% { opacity: 0.7; width: 50%; }
  }

  /* Frost Vignette */
  .frost-vignette {
    position: absolute;
    inset: 0;
    transition: background 0.1s ease-out;
  }

  /* White Flash */
  .white-flash {
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at center,
      rgba(255, 255, 255, 1) 0%,
      rgba(220, 240, 255, 0.9) 30%,
      rgba(180, 220, 255, 0.7) 60%,
      rgba(100, 180, 240, 0.5) 100%
    );
    transition: opacity 0.15s ease-out;
  }

  /* Speed Lines */
  .speed-lines {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200vmax;
    height: 200vmax;
  }

  .speed-line {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50%;
    height: 1px;
    background: linear-gradient(90deg,
      transparent 0%,
      rgba(200, 230, 255, 0.1) 60%,
      rgba(255, 255, 255, 0.6) 90%,
      rgba(255, 255, 255, 0.8) 100%
    );
    transform-origin: left center;
    animation: speed-zoom 0.5s ease-in infinite;
  }

  @keyframes speed-zoom {
    0% { opacity: 0; transform: scaleX(0.5); }
    50% { opacity: 1; }
    100% { opacity: 0; transform: scaleX(1.5); }
  }

  /* Chromatic Aberration */
  .chromatic-red {
    position: absolute;
    inset: -5%;
    background: radial-gradient(ellipse at center,
      rgba(255, 100, 100, 0.2) 0%,
      transparent 50%
    );
    transform: translate(5px, 3px);
    mix-blend-mode: screen;
  }

  .chromatic-cyan {
    position: absolute;
    inset: -5%;
    background: radial-gradient(ellipse at center,
      rgba(100, 200, 255, 0.2) 0%,
      transparent 50%
    );
    transform: translate(-5px, -3px);
    mix-blend-mode: screen;
  }
</style>
