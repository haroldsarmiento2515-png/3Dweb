<script>
  import { onMount } from 'svelte';
  
  let scrollContainer;
  let currentSection = 0;
  
  // Section configurations with glacial color palette
  const sections = [
    {
      id: 'intro',
      colors: {
        primary: '#0a1628',
        secondary: '#1a3a5c',
        accent: '#64c8ff'
      },
      title: 'Welcome to the Frost',
      description: 'An immersive journey through frozen landscapes'
    },
    {
      id: 'aurora',
      colors: {
        primary: '#0d1f3c',
        secondary: '#2d7a8c',
        accent: '#50ffc8'
      },
      title: 'Aurora Dreams',
      description: 'Where celestial lights paint the sky'
    },
    {
      id: 'glacier',
      colors: {
        primary: '#061422',
        secondary: '#183a5a',
        accent: '#80d4ff'
      },
      title: 'Ancient Ice',
      description: 'Millennia of frozen history'
    },
    {
      id: 'summit',
      colors: {
        primary: '#1a3a5c',
        secondary: '#6a9abc',
        accent: '#ffffff'
      },
      title: 'Summit View',
      description: 'Above the clouds, beyond the horizon'
    },
    {
      id: 'dusk',
      colors: {
        primary: '#2a1a4c',
        secondary: '#5a7a9c',
        accent: '#c896ff'
      },
      title: 'Polar Dusk',
      description: 'The endless twilight realm'
    }
  ];
  
  $: activeSection = sections[currentSection] || sections[0];
  
  function handleScroll(e) {
    if (!scrollContainer) return;
    
    const scrollTop = scrollContainer.scrollTop;
    const sectionHeight = scrollContainer.clientHeight;
    const newSection = Math.round(scrollTop / sectionHeight);
    
    if (newSection !== currentSection) {
      currentSection = Math.max(0, Math.min(newSection, sections.length - 1));
    }
  }
  
  function scrollToSection(index) {
    if (!scrollContainer) return;
    
    const targetScroll = index * scrollContainer.clientHeight;
    scrollContainer.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });
    currentSection = index;
  }
  
  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const index = parseInt(entry.target.dataset.index);
            if (!isNaN(index)) {
              currentSection = index;
            }
          }
        });
      },
      {
        root: scrollContainer,
        threshold: 0.5
      }
    );
    
    document.querySelectorAll('.section').forEach((section) => {
      observer.observe(section);
    });
    
    return () => observer.disconnect();
  });
</script>

<div 
  class="scroll-wrapper"
  bind:this={scrollContainer}
  on:scroll={handleScroll}
>
  <!-- Dynamic background -->
  <div class="bg-container">
    {#each sections as section, i}
      <div 
        class="bg-layer"
        class:active={currentSection === i}
        style="
          --primary: {section.colors.primary};
          --secondary: {section.colors.secondary};
          --accent: {section.colors.accent};
        "
      >
        <div class="gradient-bg"></div>
        <div class="glow-orb orb-1"></div>
        <div class="glow-orb orb-2"></div>
        <div class="mist"></div>
      </div>
    {/each}
  </div>
  
  <!-- Content sections -->
  {#each sections as section, i}
    <section 
      class="section"
      data-index={i}
      class:active={currentSection === i}
    >
      <div class="section-inner">
        <div class="content-wrapper">
          <span class="section-number">{String(i + 1).padStart(2, '0')}</span>
          
          <h1 class="title">{section.title}</h1>
          
          <div class="divider">
            <span class="divider-line"></span>
            <span class="divider-dot"></span>
            <span class="divider-line"></span>
          </div>
          
          <p class="description">{section.description}</p>
          
          <div class="section-content">
            <slot name="section-{section.id}">
              <div class="placeholder-content">
                <div class="crystal-icon" style="--accent: {section.colors.accent}">
                  <svg viewBox="0 0 100 100" fill="none">
                    <path 
                      d="M50 5 L90 30 L90 70 L50 95 L10 70 L10 30 Z" 
                      stroke="currentColor" 
                      stroke-width="2" 
                      fill="none"
                      opacity="0.6"
                    />
                    <path 
                      d="M50 5 L50 95 M10 30 L90 70 M90 30 L10 70" 
                      stroke="currentColor" 
                      stroke-width="1" 
                      opacity="0.3"
                    />
                  </svg>
                </div>
              </div>
            </slot>
          </div>
        </div>
      </div>
    </section>
  {/each}
  
  <!-- Navigation dots -->
  <nav class="section-nav">
    {#each sections as section, i}
      <button 
        class="nav-dot"
        class:active={currentSection === i}
        on:click={() => scrollToSection(i)}
        aria-label="Go to {section.title}"
      >
        <span class="dot-inner"></span>
        <span class="dot-label">{section.title}</span>
      </button>
    {/each}
  </nav>
  
  <!-- Scroll hint -->
  <div class="scroll-hint" class:hidden={currentSection > 0}>
    <span class="hint-text">Scroll</span>
    <div class="hint-arrow">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 5v14M19 12l-7 7-7-7"/>
      </svg>
    </div>
  </div>
</div>

<style>
  .scroll-wrapper {
    height: 100vh;
    overflow-y: auto;
    scroll-snap-type: y mandatory;
  }
  
  .bg-container {
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
  
  .gradient-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      var(--primary) 0%,
      color-mix(in srgb, var(--primary) 60%, var(--secondary)) 40%,
      var(--secondary) 100%
    );
  }
  
  .glow-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.4;
  }
  
  .orb-1 {
    width: 40vw;
    height: 40vw;
    background: var(--accent);
    top: -10%;
    right: -10%;
  }
  
  .orb-2 {
    width: 30vw;
    height: 30vw;
    background: var(--secondary);
    bottom: -5%;
    left: -5%;
  }
  
  .mist {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40%;
    background: linear-gradient(
      0deg,
      color-mix(in srgb, var(--secondary) 30%, transparent) 0%,
      transparent 100%
    );
    opacity: 0.6;
  }
  
  .section {
    height: 100vh;
    scroll-snap-align: start;
    scroll-snap-stop: always;
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .section-inner {
    width: 100%;
    max-width: 1200px;
    padding: 2rem;
  }
  
  .content-wrapper {
    text-align: center;
    opacity: 0.3;
  }
  
  .section.active .content-wrapper {
    opacity: 1;
  }
  
  .section-number {
    display: block;
    font-size: 0.75rem;
    letter-spacing: 0.5em;
    color: rgba(255, 255, 255, 0.4);
    margin-bottom: 1rem;
  }
  
  .title {
    font-size: clamp(2.5rem, 8vw, 5rem);
    font-weight: 100;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: white;
    margin: 0;
    text-shadow: 0 0 60px rgba(100, 200, 255, 0.3);
  }
  
  .divider {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin: 2rem 0;
  }
  
  .divider-line {
    width: 60px;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
  }
  
  .divider-dot {
    width: 6px;
    height: 6px;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 50%;
  }
  
  .description {
    font-size: clamp(1rem, 2vw, 1.25rem);
    font-weight: 300;
    color: rgba(255, 255, 255, 0.7);
    letter-spacing: 0.1em;
    margin: 0;
  }
  
  .section-content {
    margin-top: 3rem;
  }
  
  .placeholder-content {
    display: flex;
    justify-content: center;
  }
  
  .crystal-icon {
    width: 80px;
    height: 80px;
    color: var(--accent);
  }
  
  .section-nav {
    position: fixed;
    right: 2rem;
    top: 50%;
    transform: translateY(-50%);
    z-index: 100;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .nav-dot {
    position: relative;
    width: 12px;
    height: 12px;
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
  }
  
  .dot-inner {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
  }
  
  .nav-dot.active .dot-inner {
    background: white;
    box-shadow: 0 0 20px rgba(100, 200, 255, 0.8);
  }
  
  .dot-label {
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    padding-right: 1rem;
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.7);
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
  }
  
  .nav-dot:hover .dot-label {
    opacity: 1;
  }
  
  .scroll-hint {
    position: fixed;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    color: rgba(255, 255, 255, 0.6);
  }
  
  .scroll-hint.hidden {
    opacity: 0;
    pointer-events: none;
  }
  
  .hint-text {
    font-size: 0.7rem;
    letter-spacing: 0.3em;
    text-transform: uppercase;
  }
  
  .hint-arrow {
    width: 24px;
    height: 24px;
  }
  
  @media (max-width: 768px) {
    .section-nav {
      right: 1rem;
    }
    
    .dot-label {
      display: none;
    }
    
    .section-inner {
      padding: 1rem;
    }
  }
</style>