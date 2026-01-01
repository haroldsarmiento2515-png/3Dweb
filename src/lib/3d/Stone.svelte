<script>
  import { T, useTask } from '@threlte/core';
  import { HTML } from '@threlte/extras';
  import { createEventDispatcher, onMount, onDestroy } from 'svelte';
  import * as THREE from 'three';

  export let id = 'stone';
  export let name = 'Stone';
  export let description = '';
  export let color = '#6a7080';
  export let roughness = 0.5;
  export let metalness = 0.2;
  export let displacement = 0.1;
  export let geometry = 'dodecahedron';
  export let index = 0;
  export let opacity = 1;
  export let isActive = false;
  export let time = 0;

  const dispatch = createEventDispatcher();

  let hovered = false;
  let stoneGeometry;

  // =====================
  // TRAVELING GLOW ANIMATION
  // =====================
  let glowAnimationFrameId;
  let glowWaves = [];
  let wrappedElements = new Map();

  const GLOW_SPEED = 2;
  const GLOW_WIDTH = 10;
  let lastHoverTime = 0;
  const HOVER_THROTTLE = 100;

  function handleLabelTextHover(event) {
    const now = Date.now();
    if (now - lastHoverTime < HOVER_THROTTLE) return;
    lastHoverTime = now;

    const target = event.target;
    if (!target.classList.contains('stone-glow-char')) return;

    const parent = target.closest('[data-stone-glow-id]');
    const elementId = parent?.dataset.stoneGlowId;
    if (!elementId) return;

    const chars = wrappedElements.get(elementId);
    if (!chars) return;

    const charIndex = Array.from(chars).indexOf(target);
    if (charIndex === -1) return;

    glowWaves.push({
      elementId,
      position: charIndex,
      direction: 1,
      life: 1
    });
    glowWaves.push({
      elementId,
      position: charIndex,
      direction: -1,
      life: 1
    });
  }

  function updateStoneGlowWaves() {
    glowWaves = glowWaves.map(wave => ({
      ...wave,
      position: wave.position + (wave.direction * GLOW_SPEED),
      life: wave.life - 0.012
    })).filter(wave => wave.life > 0);

    wrappedElements.forEach((chars) => {
      chars.forEach(char => {
        char.style.color = '';
        char.style.textShadow = '';
      });
    });

    glowWaves.forEach(wave => {
      const chars = wrappedElements.get(wave.elementId);
      if (!chars) return;

      chars.forEach((char, idx) => {
        const distance = Math.abs(idx - wave.position);

        if (distance < GLOW_WIDTH) {
          const proximity = 1 - (distance / GLOW_WIDTH);
          const intensity = proximity * proximity * wave.life;

          if (intensity > 0.05) {
            const currentGlow = parseFloat(char.dataset.glow || '0');
            const newGlow = Math.max(currentGlow, intensity);
            char.dataset.glow = newGlow;

            char.style.color = `rgba(255, 255, 255, ${0.7 + newGlow * 0.3})`;
            char.style.textShadow = `0 0 ${newGlow * 8}px rgba(255, 255, 255, ${newGlow * 0.9}), 0 0 ${newGlow * 15}px rgba(200, 220, 240, ${newGlow * 0.6})`;
          }
        }
      });
    });

    wrappedElements.forEach((chars) => {
      chars.forEach(char => {
        char.dataset.glow = '0';
      });
    });

    glowAnimationFrameId = requestAnimationFrame(updateStoneGlowWaves);
  }

  function wrapStoneLabelText(container) {
    if (!container) return;

    const textElements = container.querySelectorAll('.label-index, .label-name, .click-prompt span');
    let elementCounter = wrappedElements.size;

    textElements.forEach(el => {
      if (el.dataset.wrapped) return;

      const elementId = `stone-glow-el-${index}-${elementCounter++}`;
      el.dataset.stoneGlowId = elementId;

      const text = el.textContent;
      el.innerHTML = '';

      const charSpans = [];

      for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.className = 'stone-glow-char';
        span.textContent = text[i] === ' ' ? '\u00A0' : text[i];
        el.appendChild(span);
        charSpans.push(span);
      }

      wrappedElements.set(elementId, charSpans);
      el.dataset.wrapped = 'true';
      el.addEventListener('mousemove', handleLabelTextHover);
    });
  }

  function initStoneLabelGlow() {
    setTimeout(() => {
      const stoneLabels = document.querySelectorAll('.stone-label, .click-prompt');
      stoneLabels.forEach(container => {
        wrapStoneLabelText(container);
      });
    }, 300);

    glowAnimationFrameId = requestAnimationFrame(updateStoneGlowWaves);
  }

  function cleanupStoneLabelGlow() {
    if (glowAnimationFrameId) {
      cancelAnimationFrame(glowAnimationFrameId);
    }
    wrappedElements.forEach((chars, elementId) => {
      const el = document.querySelector(`[data-stone-glow-id="${elementId}"]`);
      if (el) {
        el.removeEventListener('mousemove', handleLabelTextHover);
      }
    });
    wrappedElements.clear();
  }

  // Create stone geometry with organic displacement
  function createStoneGeometry(type, size = 1.8) {
    let geo;
    
    switch(type) {
      case 'dodecahedron':
        geo = new THREE.DodecahedronGeometry(size, 2);
        break;
      case 'icosahedron':
        geo = new THREE.IcosahedronGeometry(size, 2);
        break;
      case 'octahedron':
        geo = new THREE.OctahedronGeometry(size * 1.1, 2);
        break;
      case 'tetrahedron':
        geo = new THREE.TetrahedronGeometry(size * 1.2, 2);
        break;
      default:
        geo = new THREE.DodecahedronGeometry(size, 2);
    }
    
    // Apply organic displacement
    const positions = geo.attributes.position;
    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const y = positions.getY(i);
      const z = positions.getZ(i);
      
      // Multi-frequency noise
      const noise1 = Math.sin(x * 2.5) * Math.cos(y * 2.5) * Math.sin(z * 2.5) * displacement;
      const noise2 = Math.sin(x * 5 + y * 4) * Math.cos(z * 3) * (displacement * 0.5);
      const noise3 = Math.sin(x * 8) * Math.sin(y * 8) * Math.sin(z * 8) * (displacement * 0.25);
      
      const factor = 1 + noise1 + noise2 + noise3;
      
      positions.setX(i, x * factor);
      positions.setY(i, y * factor);
      positions.setZ(i, z * factor);
    }
    
    positions.needsUpdate = true;
    geo.computeVertexNormals();
    
    return geo;
  }

  onMount(() => {
    stoneGeometry = createStoneGeometry(geometry);
    initStoneLabelGlow();
  });

  onDestroy(() => {
    cleanupStoneLabelGlow();
  });

  // Animation values
  $: floatY = Math.sin(time * 0.4 + index * 1.5) * 0.08;
  $: rotationY = time * 0.1 + index * Math.PI * 0.5;
  $: rotationX = Math.sin(time * 0.15 + index) * 0.05;
  $: scale = isActive ? (hovered ? 1.15 : 1.1) : (hovered ? 1.05 : 1);
  $: glowIntensity = isActive ? 0.8 : (hovered ? 0.5 : 0.2);

  function handleClick() {
    dispatch('click', { id, name, description, color });
  }

  function handlePointerEnter() {
    hovered = true;
    document.body.style.cursor = 'pointer';
  }

  function handlePointerLeave() {
    hovered = false;
    document.body.style.cursor = 'auto';
  }
</script>

{#if stoneGeometry}
  <T.Group position.y={floatY}>
    <!-- Main stone mesh -->
    <T.Mesh
      geometry={stoneGeometry}
      scale={[scale, scale, scale]}
      rotation.y={rotationY}
      rotation.x={rotationX}
      castShadow
      receiveShadow
      on:click={handleClick}
      on:pointerenter={handlePointerEnter}
      on:pointerleave={handlePointerLeave}
    >
      <T.MeshStandardMaterial
        color={new THREE.Color(color)}
        {roughness}
        {metalness}
        transparent
        {opacity}
        flatShading
      />
    </T.Mesh>

    <!-- Inner glow sphere (disabled - opacity set to 0) -->
    <T.Mesh scale={0.6} rotation.y={rotationY}>
      <T.SphereGeometry args={[1.8, 16, 16]} />
      <T.MeshBasicMaterial
        color={new THREE.Color(color).multiplyScalar(1.2)}
        transparent
        opacity={0}
      />
    </T.Mesh>

    <!-- Outer atmosphere (disabled - opacity set to 0) -->
    <T.Mesh scale={isActive ? 1.4 : 1.25}>
      <T.SphereGeometry args={[2, 32, 32]} />
      <T.MeshBasicMaterial
        color={hovered ? 0x8090a0 : 0x5a6570}
        transparent
        opacity={0}
        side={THREE.BackSide}
      />
    </T.Mesh>

    <!-- Point light for stone -->
    <T.PointLight
      color={new THREE.Color(color)}
      intensity={glowIntensity * opacity}
      distance={8}
      decay={2}
    />

    <!-- Ground shadow -->
    <T.Mesh position.y={-2.2} rotation.x={-Math.PI / 2}>
      <T.CircleGeometry args={[1.5, 24]} />
      <T.MeshBasicMaterial
        color={0x0a0c10}
        transparent
        opacity={0.4 * opacity}
      />
    </T.Mesh>

    <!-- HTML Label - Stone Name -->
    {#if isActive || hovered}
      <HTML
        position={[-3.5, 1.5, 0]}
        transform
        occlude={false}
        style="pointer-events: auto;"
      >
        <div class="stone-label" class:active={isActive} class:hovered={hovered}>
          <span class="label-index">SPECIMEN_{String(index + 1).padStart(2, '0')}</span>
          <span class="label-name">{name.toUpperCase()}</span>
        </div>
      </HTML>

      <!-- Click prompt -->
      <HTML
        position={[3, -1.5, 0]}
        transform
        occlude={false}
        style="pointer-events: auto;"
      >
        <div class="click-prompt" class:active={isActive}>
          <span>CLICK TO EXPLORE</span>
        </div>
      </HTML>
    {/if}

    <!-- Corner brackets when active -->
    {#if isActive}
      <!-- Top-left bracket -->
      <HTML position={[-2.5, 2, 0]} transform occlude={false} style="pointer-events: none;">
        <svg width="24" height="24" viewBox="0 0 24 24" class="bracket">
          <path d="M0 8 L0 0 L8 0" fill="none" stroke="currentColor" stroke-width="1.5"/>
        </svg>
      </HTML>
      
      <!-- Top-right bracket -->
      <HTML position={[2.5, 2, 0]} transform occlude={false} style="pointer-events: none;">
        <svg width="24" height="24" viewBox="0 0 24 24" class="bracket">
          <path d="M16 0 L24 0 L24 8" fill="none" stroke="currentColor" stroke-width="1.5"/>
        </svg>
      </HTML>
      
      <!-- Bottom-left bracket -->
      <HTML position={[-2.5, -2, 0]} transform occlude={false} style="pointer-events: none;">
        <svg width="24" height="24" viewBox="0 0 24 24" class="bracket">
          <path d="M0 16 L0 24 L8 24" fill="none" stroke="currentColor" stroke-width="1.5"/>
        </svg>
      </HTML>
      
      <!-- Bottom-right bracket -->
      <HTML position={[2.5, -2, 0]} transform occlude={false} style="pointer-events: none;">
        <svg width="24" height="24" viewBox="0 0 24 24" class="bracket">
          <path d="M16 24 L24 24 L24 16" fill="none" stroke="currentColor" stroke-width="1.5"/>
        </svg>
      </HTML>
    {/if}

    <!-- Orbiting particles for active stone -->
    {#if isActive}
      {#each Array(6) as _, i}
        {@const angle = (i / 6) * Math.PI * 2 + time * 0.3}
        {@const radius = 3}
        <T.Mesh position={[
          Math.cos(angle) * radius,
          Math.sin(angle * 0.5) * 0.5,
          Math.sin(angle) * radius
        ]}>
          <T.SphereGeometry args={[0.05, 6, 6]} />
          <T.MeshBasicMaterial
            color={new THREE.Color(color)}
            transparent
            opacity={0.6 * opacity}
          />
        </T.Mesh>
      {/each}
    {/if}
  </T.Group>
{/if}

<style>
  /* Stone glow character styles */
  :global(.stone-glow-char) {
    display: inline;
    transition: color 0.1s ease, text-shadow 0.1s ease;
    will-change: color, text-shadow;
    cursor: default;
  }

  :global(.stone-label) {
    font-family: 'JetBrains Mono', monospace;
    color: rgba(255, 255, 255, 0.6);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  :global(.stone-label.active),
  :global(.stone-label.hovered) {
    color: rgba(255, 255, 255, 0.9);
  }

  :global(.label-index) {
    font-size: 9px;
    letter-spacing: 0.15em;
    opacity: 0.6;
  }

  :global(.label-name) {
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.1em;
  }

  :global(.click-prompt) {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.15em;
    color: rgba(255, 255, 255, 0.5);
    text-align: right;
    transition: all 0.3s ease;
  }

  :global(.click-prompt.active) {
    color: rgba(255, 255, 255, 0.8);
  }

  :global(.bracket) {
    color: rgba(255, 255, 255, 0.4);
  }

  :global(.bracket.active) {
    color: rgba(255, 255, 255, 0.6);
  }
</style>