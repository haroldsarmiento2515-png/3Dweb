<script>
  import { onMount } from 'svelte';
  
  let scrollY = 0;
  let innerHeight = 0;
  let sections = [];
  
  // Calculate which section is active and the transition progress
  $: currentSection = Math.floor(scrollY / innerHeight);
  $: sectionProgress = (scrollY % innerHeight) / innerHeight;
  
  // Background configurations for each section - all glacial vibes
  const sectionConfigs = [
    {
      id: 'hero',
      bgGradient: 'linear-gradient(180deg, #0a1628 0%, #1a3a5c 50%, #2d5a7b 100%)',
      overlayColor: 'rgba(100, 180, 255, 0.05)',
      title: 'The Frozen Realm',
      subtitle: 'Discover the beauty of glacial landscapes'
    },
    {
      id: 'aurora',
      bgGradient: 'linear-gradient(180deg, #0d1f3c 0%, #1a4a6e 30%, #2d7a8c 70%, #1a3a5c 100%)',
      overlayColor: 'rgba(50, 255, 200, 0.08)',
      title: 'Northern Lights',
      subtitle: 'Where sky meets ice in ethereal dance'
    },
    {
      id: 'depths',
      bgGradient: 'linear-gradient(180deg, #061422 0%, #0c2840 40%, #183a5a 100%)',
      overlayColor: 'rgba(80, 150, 255, 0.06)',
      title: 'Glacial Depths',
      subtitle: 'Ancient ice holds secrets untold'
    },
    {
      id: 'peaks',
      bgGradient: 'linear-gradient(180deg, #1a3a5c 0%, #4a7a9c 50%, #8ab4cc 100%)',
      overlayColor: 'rgba(255, 255, 255, 0.1)',
      title: 'Mountain Peaks',
      subtitle: 'Where snow crowns the earth'
    },
    {
      id: 'twilight',
      bgGradient: 'linear-gradient(180deg, #2a1a4c 0%, #3a4a7c 40%, #5a7a9c 100%)',
      overlayColor: 'rgba(150, 100, 255, 0.07)',
      title: 'Arctic Twilight',
      subtitle: 'The endless dance of day and night'
    }
  ];
  
  // Interpolate between two colors based on progress
  function interpolateGradient(progress, currentIdx) {
    const nextIdx = Math.min(currentIdx + 1, sectionConfigs.length - 1);
    return {
      current: sectionConfigs[currentIdx],
      next: sectionConfigs[nextIdx],
      progress: progress
    };
  }
  
  $: gradientData = interpolateGradient(sectionProgress, currentSection);
  
  onMount(() => {
    innerHeight = window.innerHeight;
    
    const handleResize = () => {
      innerHeight = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });
</script>

<svelte:window bind:scrollY />

<div class="scroll-container">
  <!-- Dynamic background that transitions smoothly -->
  <div 
    class="background-layer current"
    style="
      background: {gradientData.current.bgGradient};
      opacity: {1 - gradientData.progress * 0.5};
    "
  ></div>
  <div 
    class="background-layer next"
    style="
      background: {gradientData.next.bgGradient};
      opacity: {gradientData.progress};
    "
  ></div>
  
  <!-- Animated overlay effects -->
  <div class="overlay-effects">
    <!-- Floating particles -->
    <div class="particles">
      {#each Array(30) as _, i}
        <div 
          class="particle"
          style="
            --delay: {i * 0.5}s;
            --duration: {8 + Math.random() * 12}s;
            --x-start: {Math.random() * 100}%;
            --size: {2 + Math.random() * 4}px;
            opacity: {0.3 + Math.random() * 0.4};
          "
        ></div>
      {/each}
    </div>
    
    <!-- Aurora effect -->
    <div 
      class="aurora"
      style="opacity: {currentSection === 1 ? 0.6 : 0.2}"
    ></div>
  </div>
  
  <!-- Content sections -->
  {#each sectionConfigs as section, i}
    <section 
      class="content-section"
      class:active={currentSection === i}
      style="--section-index: {i};"
    >
      <div 
        class="section-content"
        style="
          transform: translateY({currentSection === i ? (1 - sectionProgress) * 20 : currentSection > i ? -50 : 50}px);
          opacity: {currentSection === i ? 1 - Math.abs(sectionProgress - 0.5) * 0.5 : 0.3};
        "
      >
        <h2 class="section-title">{section.title}</h2>
        <p class="section-subtitle">{section.subtitle}</p>
        
        <div class="decorative-line"></div>
        
        <!-- Placeholder for your 3D scene or content -->
        <div class="content-placeholder">
          <slot name="section-{i}">
            <div class="default-content">
              <div class="ice-crystal"></div>
              <p>Section {i + 1} Content</p>
            </div>
          </slot>
        </div>
      </div>
    </section>
  {/each}
  
  <!-- Scroll indicator -->
  <div 
    class="scroll-indicator"
    style="opacity: {scrollY < 100 ? 1 : 0}"
  >
    <span>Scroll to explore</span>
    <div class="scroll-arrow"></div>
  </div>
  
  <!-- Progress indicator -->
  <div class="progress-bar">
    <div 
      class="progress-fill"
      style="height: {(scrollY / (innerHeight * (sectionConfigs.length - 1))) * 100}%"
    ></div>
    {#each sectionConfigs as section, i}
      <div 
        class="progress-dot"
        class:active={currentSection >= i}
        style="top: {(i / (sectionConfigs.length - 1)) * 100}%"
      ></div>
    {/each}
  </div>
</div>

<style>
  .scroll-container {
    position: relative;
    min-height: 500vh;
  }
  
  .background-layer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
    transition: opacity 0.3s ease-out;
  }
  
  .overlay-effects {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    pointer-events: none;
    overflow: hidden;
  }
  
  /* Floating snow/ice particles */
  .particles {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  
  .particle {
    position: absolute;
    width: var(--size);
    height: var(--size);
    background: radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(200,230,255,0.4) 100%);
    border-radius: 50%;
    left: var(--x-start);
    animation: float var(--duration) ease-in-out infinite;
    animation-delay: var(--delay);
  }
  
  @keyframes float {
    0%, 100% {
      transform: translateY(100vh) rotate(0deg);
      opacity: 0;
    }
    10% {
      opacity: var(--opacity, 0.5);
    }
    90% {
      opacity: var(--opacity, 0.5);
    }
    100% {
      transform: translateY(-10vh) rotate(360deg);
      opacity: 0;
    }
  }
  
  /* Aurora borealis effect */
  .aurora {
    position: absolute;
    top: 0;
    left: -50%;
    width: 200%;
    height: 60%;
    background: linear-gradient(
      180deg,
      transparent 0%,
      rgba(100, 255, 200, 0.1) 20%,
      rgba(50, 200, 255, 0.15) 40%,
      rgba(100, 150, 255, 0.1) 60%,
      transparent 100%
    );
    filter: blur(40px);
    animation: aurora-wave 15s ease-in-out infinite;
    transition: opacity 1s ease;
  }
  
  @keyframes aurora-wave {
    0%, 100% {
      transform: translateX(-10%) skewX(-5deg);
    }
    50% {
      transform: translateX(10%) skewX(5deg);
    }
  }
  
  /* Content sections */
  .content-section {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  
  .section-content {
    text-align: center;
    color: white;
    padding: 2rem;
    max-width: 800px;
    transition: transform 0.1s ease-out, opacity 0.1s ease-out;
  }
  
  .section-title {
    font-size: clamp(2rem, 6vw, 4rem);
    font-weight: 200;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    margin-bottom: 1rem;
    text-shadow: 0 0 40px rgba(100, 200, 255, 0.5);
    background: linear-gradient(180deg, #ffffff 0%, #a0d4ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .section-subtitle {
    font-size: clamp(1rem, 2vw, 1.5rem);
    font-weight: 300;
    letter-spacing: 0.1em;
    opacity: 0.8;
    color: #b0d4f1;
  }
  
  .decorative-line {
    width: 100px;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent);
    margin: 2rem auto;
  }
  
  .content-placeholder {
    margin-top: 2rem;
  }
  
  .default-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  
  .ice-crystal {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(100,200,255,0.2) 100%);
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    animation: crystal-pulse 3s ease-in-out infinite;
  }
  
  @keyframes crystal-pulse {
    0%, 100% {
      transform: scale(1) rotate(0deg);
      opacity: 0.8;
    }
    50% {
      transform: scale(1.1) rotate(45deg);
      opacity: 1;
    }
  }
  
  /* Scroll indicator */
  .scroll-indicator {
    position: fixed;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    color: rgba(255,255,255,0.7);
    font-size: 0.8rem;
    letter-spacing: 0.2em;
    transition: opacity 0.5s ease;
  }
  
  .scroll-arrow {
    width: 20px;
    height: 20px;
    border-right: 2px solid rgba(255,255,255,0.5);
    border-bottom: 2px solid rgba(255,255,255,0.5);
    transform: rotate(45deg);
    margin-top: 0.5rem;
    animation: bounce 2s ease-in-out infinite;
  }
  
  @keyframes bounce {
    0%, 100% { transform: rotate(45deg) translate(0, 0); }
    50% { transform: rotate(45deg) translate(5px, 5px); }
  }
  
  /* Progress bar */
  .progress-bar {
    position: fixed;
    right: 2rem;
    top: 50%;
    transform: translateY(-50%);
    width: 2px;
    height: 200px;
    background: rgba(255,255,255,0.1);
    border-radius: 1px;
  }
  
  .progress-fill {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: linear-gradient(180deg, #64c8ff, #a0f0ff);
    border-radius: 1px;
    transition: height 0.1s ease-out;
  }
  
  .progress-dot {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(255,255,255,0.3);
    transition: all 0.3s ease;
  }
  
  .progress-dot.active {
    background: #64c8ff;
    box-shadow: 0 0 10px rgba(100, 200, 255, 0.8);
  }
</style>