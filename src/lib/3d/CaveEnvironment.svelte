<script>
  import { T, useTask } from '@threlte/core';
  import { HTML, useGltf } from '@threlte/extras';
  import { createEventDispatcher, onMount, onDestroy, tick } from 'svelte';
  import * as THREE from 'three';

  // =====================
  // TRAVELING GLOW ANIMATION
  // =====================
  let glowAnimationFrameId;
  let glowWaves = [];
  let wrappedElements = new Map();

  const GLOW_SPEED = 2;
  const GLOW_WIDTH = 12;
  let lastHoverTime = 0;
  const HOVER_THROTTLE = 100;

  function handleTextHover(event) {
    const now = Date.now();
    if (now - lastHoverTime < HOVER_THROTTLE) return;
    lastHoverTime = now;

    const target = event.target;
    if (!target.classList.contains('rock-glow-char')) return;

    const parent = target.closest('[data-glow-element-id]');
    const elementId = parent?.dataset.glowElementId;
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

  function updateRockGlowWaves() {
    glowWaves = glowWaves.map(wave => ({
      ...wave,
      position: wave.position + (wave.direction * GLOW_SPEED),
      life: wave.life - 0.01
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

      chars.forEach((char, index) => {
        const distance = Math.abs(index - wave.position);

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

    glowAnimationFrameId = requestAnimationFrame(updateRockGlowWaves);
  }

  function wrapRockTextInSpans(container) {
    if (!container) return;

    const textElements = container.querySelectorAll('.info-id, .info-name, .temp-label, .temp-value, .temp-secondary, .date-text, .cta-text');
    let elementCounter = wrappedElements.size;

    textElements.forEach(el => {
      if (el.dataset.wrapped) return;

      const elementId = `rock-glow-el-${elementCounter++}`;
      el.dataset.glowElementId = elementId;

      const text = el.textContent;
      el.innerHTML = '';

      const charSpans = [];

      for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.className = 'rock-glow-char';
        span.textContent = text[i] === ' ' ? '\u00A0' : text[i];
        el.appendChild(span);
        charSpans.push(span);
      }

      wrappedElements.set(elementId, charSpans);
      el.dataset.wrapped = 'true';
      el.addEventListener('mousemove', handleTextHover);
    });
  }

  let glowObserver = null;

  function wrapAllStoneInfoElements() {
    const stoneInfoElements = document.querySelectorAll('.stone-info');
    stoneInfoElements.forEach(container => {
      wrapRockTextInSpans(container);
    });
  }

  function initRockGlowAnimation() {
    // Initial wrap
    wrapAllStoneInfoElements();

    // Use MutationObserver to watch for dynamically added stone-info elements
    glowObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) { // Element node
            if (node.classList?.contains('stone-info')) {
              wrapRockTextInSpans(node);
            }
            // Also check children
            const stoneInfos = node.querySelectorAll?.('.stone-info');
            stoneInfos?.forEach(container => {
              wrapRockTextInSpans(container);
            });
          }
        });
      });
    });

    glowObserver.observe(document.body, {
      childList: true,
      subtree: true
    });

    glowAnimationFrameId = requestAnimationFrame(updateRockGlowWaves);
  }

  function cleanupRockGlowAnimation() {
    if (glowAnimationFrameId) {
      cancelAnimationFrame(glowAnimationFrameId);
    }
    if (glowObserver) {
      glowObserver.disconnect();
      glowObserver = null;
    }
    wrappedElements.forEach((chars, elementId) => {
      const el = document.querySelector(`[data-glow-element-id="${elementId}"]`);
      if (el) {
        el.removeEventListener('mousemove', handleTextHover);
      }
    });
    wrappedElements.clear();
  }

  // Load the rock GLTF model
  const rockGltf = useGltf('/models/rock/scene.gltf');

  export let opacity = 1;
  export let scrollProgress = 0;
  export let currentSection = 0;
  export let transitionProgress = 0;
  export let caveDepthProgress = 0;
  export let stones = [];
  export let modalOpen = false;

  const dispatch = createEventDispatcher();

  let time = 0;

  // Scroll-based rotation
  let prevScrollProgress = 0;
  let scrollVelocity = 0;
  let smoothScrollRotation = 0;

  // Animated zoom for modal open/close
  let animatedZoom = 1;
  let targetZoom = 1;
  let startZoom = 1;
  const zoomSpeed = 2.5; // Smooth animation for deep zoom
  let zoomComplete = true;
  let zoomThresholdReached = false; // Track if 70% threshold reached
  let lastZoomDirection = null; // 'in' or 'out'

  // =====================
  // NORMAL SCROLL - Show one stone at a time, centered
  // =====================

  // Calculate which stone is currently active based on scroll
  // Matches App.svelte sections with blank sections between all stones:
  // Hero: 0-18%, Stone1+Blank: 18-41%, Stone2+Blank: 41-65%, Stone3+Blank: 65-88%, Stone4: 88-100%
  $: activeStoneIndex = (() => {
    if (scrollProgress < 0.41) return 0;  // Stone 1 area
    if (scrollProgress < 0.65) return 1;  // Stone 2 area
    if (scrollProgress < 0.88) return 2;  // Stone 3 area
    return 3;                             // Stone 4
  })();

  // Stone position - stays centered when modal is open
  $: stonePosition = { x: 0, y: 1.5, z: 0 };  // Always centered

  // First stone lift animation - rises dramatically from below during transition
  // Stone starts at y=-12 (far below view) and rises to y=0 as transitionProgress goes 0 to 1
  $: firstStoneLiftOffset = (() => {
    if (transitionProgress < 1) {
      // Ease-out cubic curve for smooth deceleration as stone arrives
      const easeOut = 1 - Math.pow(1 - transitionProgress, 3);
      return -12 * (1 - easeOut);  // Starts at -12, ends at 0
    }
    return 0;
  })();

  // First stone scale animation - grows dramatically as it rises
  $: firstStoneScaleBoost = (() => {
    if (transitionProgress < 1) {
      const easeOut = 1 - Math.pow(1 - transitionProgress, 2);
      return 0.2 + (0.8 * easeOut);  // Starts at 0.2 (small), ends at 1.0
    }
    return 1;
  })();

  // First stone rotation animation - dramatic rotation as it rises
  $: firstStoneRotationBoost = (() => {
    if (transitionProgress < 1) {
      return (1 - transitionProgress) * Math.PI;  // Full 180 degree rotation
    }
    return 0;
  })();

  // =====================
  // ALL STONE TRANSITIONS (with visible gaps)
  // =====================
  // Each transition: Current stone exits UP -> GAP -> Next stone enters from below
  // Total: 850vh - Hero(150) + Stone1(100) + Blank(100) + Stone2(100) + Blank(100) + Stone3(100) + Blank(100) + Stone4(100)

  // STONE 1 -> STONE 2 TRANSITION (around 29-41% scroll)
  const STONE1_EXIT_START = 0.26;
  const STONE1_EXIT_END = 0.32;
  const STONE2_ENTER_START = 0.36;
  const STONE2_ENTER_END = 0.42;

  // STONE 2 -> STONE 3 TRANSITION (around 53-65% scroll)
  const STONE2_EXIT_START = 0.50;
  const STONE2_EXIT_END = 0.56;
  const STONE3_ENTER_START = 0.60;
  const STONE3_ENTER_END = 0.66;

  // STONE 3 -> STONE 4 TRANSITION (around 76-88% scroll)
  const STONE3_EXIT_START = 0.74;
  const STONE3_EXIT_END = 0.80;
  const STONE4_ENTER_START = 0.84;
  const STONE4_ENTER_END = 0.90;

  // Helper function to calculate progress
  function calcProgress(scroll, start, end) {
    if (scroll < start) return 0;
    if (scroll > end) return 1;
    return (scroll - start) / (end - start);
  }

  // Exit progress for each stone (0 to 1 as it leaves going UP)
  $: stone1ExitProgress = calcProgress(scrollProgress, STONE1_EXIT_START, STONE1_EXIT_END);
  $: stone2ExitProgress = calcProgress(scrollProgress, STONE2_EXIT_START, STONE2_EXIT_END);
  $: stone3ExitProgress = calcProgress(scrollProgress, STONE3_EXIT_START, STONE3_EXIT_END);

  // Enter progress for each stone (0 to 1 as it arrives from below)
  $: stone2EnterProgress = calcProgress(scrollProgress, STONE2_ENTER_START, STONE2_ENTER_END);
  $: stone3EnterProgress = calcProgress(scrollProgress, STONE3_ENTER_START, STONE3_ENTER_END);
  $: stone4EnterProgress = calcProgress(scrollProgress, STONE4_ENTER_START, STONE4_ENTER_END);

  // Calculate lift offset for entering stones (from below to center)
  function calcEnterLift(progress) {
    const easeOut = 1 - Math.pow(1 - progress, 3);
    return -15 * (1 - easeOut);
  }

  // Calculate scale for entering stones
  function calcEnterScale(progress) {
    const easeOut = 1 - Math.pow(1 - progress, 2);
    return 0.3 + (0.7 * easeOut);
  }

  // Calculate rotation for entering stones
  function calcEnterRotation(progress) {
    return (1 - progress) * Math.PI;
  }

  // Calculate lift offset for exiting stones (center to above)
  function calcExitLift(progress) {
    const easeIn = Math.pow(progress, 2);
    return 15 * easeIn;
  }

  // Calculate scale for exiting stones
  function calcExitScale(progress) {
    return 1 - (0.7 * progress);
  }

  // Calculate rotation for exiting stones
  function calcExitRotation(progress) {
    return progress * Math.PI * 0.5;
  }

  // Stone visibility (visible until exit complete, or when enter starts)
  $: isStone1Visible = stone1ExitProgress < 1;
  $: isStone2Visible = stone2EnterProgress > 0 && stone2ExitProgress < 1;
  $: isStone3Visible = stone3EnterProgress > 0 && stone3ExitProgress < 1;
  $: isStone4Visible = stone4EnterProgress > 0;

  // Combined animations for each stone
  $: stoneAnimations = [
    // Stone 1: entry from igloo + exit to stone 2
    {
      liftOffset: firstStoneLiftOffset + calcExitLift(stone1ExitProgress),
      scale: firstStoneScaleBoost * calcExitScale(stone1ExitProgress),
      rotation: firstStoneRotationBoost + calcExitRotation(stone1ExitProgress)
    },
    // Stone 2: enter from stone 1 + exit to stone 3
    {
      liftOffset: calcEnterLift(stone2EnterProgress) + calcExitLift(stone2ExitProgress),
      scale: calcEnterScale(stone2EnterProgress) * calcExitScale(stone2ExitProgress),
      rotation: calcEnterRotation(stone2EnterProgress) + calcExitRotation(stone2ExitProgress)
    },
    // Stone 3: enter from stone 2 + exit to stone 4
    {
      liftOffset: calcEnterLift(stone3EnterProgress) + calcExitLift(stone3ExitProgress),
      scale: calcEnterScale(stone3EnterProgress) * calcExitScale(stone3ExitProgress),
      rotation: calcEnterRotation(stone3EnterProgress) + calcExitRotation(stone3ExitProgress)
    },
    // Stone 4: enter from stone 3 (no exit)
    {
      liftOffset: calcEnterLift(stone4EnterProgress),
      scale: calcEnterScale(stone4EnterProgress),
      rotation: calcEnterRotation(stone4EnterProgress)
    }
  ];

  // Array of visibility flags
  $: stoneVisibility = [isStone1Visible, isStone2Visible, isStone3Visible, isStone4Visible];

  // Target zoom based on modal state (zoom in deep for "inside rock" illusion)
  $: {
    const newTarget = modalOpen ? 3.5 : 1;
    if (newTarget !== targetZoom) {
      startZoom = animatedZoom;
      targetZoom = newTarget;
      zoomComplete = false;
      zoomThresholdReached = false;
      lastZoomDirection = modalOpen ? 'in' : 'out';
    }
  }

  // Stone hover states
  let hoveredStone = -1;

  // Create detailed stone geometry
  function createStoneGeometry(type, size = 2.0) {
    let geometry;

    switch(type) {
      case 'dodecahedron':
        geometry = new THREE.DodecahedronGeometry(size, 2);
        break;
      case 'icosahedron':
        geometry = new THREE.IcosahedronGeometry(size, 2);
        break;
      case 'octahedron':
        geometry = new THREE.OctahedronGeometry(size * 1.1, 2);
        break;
      case 'tetrahedron':
        geometry = new THREE.TetrahedronGeometry(size * 1.2, 2);
        break;
      default:
        geometry = new THREE.DodecahedronGeometry(size, 2);
    }

    // Apply organic displacement
    const positions = geometry.attributes.position;
    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const y = positions.getY(i);
      const z = positions.getZ(i);

      const noise1 = Math.sin(x * 2.5) * Math.cos(y * 2.5) * Math.sin(z * 2.5) * 0.12;
      const noise2 = Math.sin(x * 5 + y * 4) * Math.cos(z * 3) * 0.06;
      const noise3 = Math.sin(x * 8) * Math.sin(y * 8) * Math.sin(z * 8) * 0.03;

      const factor = 1 + noise1 + noise2 + noise3;

      positions.setX(i, x * factor);
      positions.setY(i, y * factor);
      positions.setZ(i, z * factor);
    }

    positions.needsUpdate = true;
    geometry.computeVertexNormals();

    return geometry;
  }

  // Pre-create geometries immediately
  let stoneGeometries = {};
  let geometriesReady = false;

  onMount(() => {
    stones.forEach((stone, i) => {
      stoneGeometries[i] = createStoneGeometry(stone.geometry);
    });
    geometriesReady = true;
    initRockGlowAnimation();
  });

  onDestroy(() => {
    cleanupRockGlowAnimation();
  });

  // Also try to create geometries reactively if stones array changes
  $: if (stones.length > 0 && Object.keys(stoneGeometries).length === 0) {
    stones.forEach((stone, i) => {
      stoneGeometries[i] = createStoneGeometry(stone.geometry);
    });
    geometriesReady = true;
  }

  useTask((delta) => {
    time += delta;

    // Calculate scroll velocity for rock rotation
    const scrollDelta = scrollProgress - prevScrollProgress;
    scrollVelocity = scrollDelta * 50; // Amplify for visible effect
    prevScrollProgress = scrollProgress;

    // Smooth the scroll rotation (lerp toward target)
    const targetScrollRotation = scrollVelocity * 0.5;
    smoothScrollRotation += (targetScrollRotation - smoothScrollRotation) * Math.min(delta * 8, 1);
    // Decay rotation when not scrolling
    if (Math.abs(scrollDelta) < 0.0001) {
      smoothScrollRotation *= 0.95;
    }

    // Smooth zoom animation (lerp toward target)
    const diff = targetZoom - animatedZoom;
    if (Math.abs(diff) > 0.001) {
      animatedZoom += diff * Math.min(delta * zoomSpeed, 1);

      // For zoom IN: show text at 70% progress
      if (lastZoomDirection === 'in' && !zoomThresholdReached) {
        const totalDistance = targetZoom - startZoom;
        const currentProgress = animatedZoom - startZoom;
        const progressPercent = currentProgress / totalDistance;
        if (progressPercent >= 0.7) {
          zoomThresholdReached = true;
          dispatch('zoomComplete', { direction: 'in' });
        }
      }

      // For zoom OUT: dispatch blur removal at 70% progress (30% remaining to target)
      if (lastZoomDirection === 'out' && !zoomThresholdReached) {
        const totalDistance = startZoom - targetZoom;
        const currentProgress = startZoom - animatedZoom;
        const progressPercent = currentProgress / totalDistance;
        if (progressPercent >= 0.7) {
          zoomThresholdReached = true;
          dispatch('zoomThreshold', { direction: 'out' });
        }
      }
    } else {
      animatedZoom = targetZoom;
      // For zoom OUT: dispatch when fully complete
      if (!zoomComplete && lastZoomDirection === 'out') {
        zoomComplete = true;
        dispatch('zoomComplete', { direction: 'out' });
      }
      zoomComplete = true;
    }
  });

  function handleStoneClick(stone, index) {
    console.log('Stone clicked!', stone.name, index);
    if (!modalOpen) {
      dispatch('stoneClick', stone);
    }
  }

  function handleStoneEnter(index) {
    console.log('Stone hover enter', index);
    hoveredStone = index;
    document.body.style.cursor = 'pointer';
  }

  function handleStoneLeave() {
    console.log('Stone hover leave');
    hoveredStone = -1;
    document.body.style.cursor = 'default';
  }

  // Format date
  function formatDate() {
    const now = new Date();
    return `${String(now.getMonth() + 1).padStart(2, '0')}.${String(now.getDate()).padStart(2, '0')}.${now.getFullYear()}`;
  }
</script>

<!-- Main clickable stones -->
{#each stones as stone, index}
  {@const isHovered = hoveredStone === index}
  {@const floatY = Math.sin(time * 0.4 + index * 1.5) * 0.06}
  {@const rotY = time * 0.12 + index * Math.PI * 0.5}
  {@const rotX = Math.sin(time * 0.15 + index) * 0.08}
  {@const scrollRotX = smoothScrollRotation * 0.3}
  {@const scrollRotZ = smoothScrollRotation * 0.15}

  <!-- Show stone based on visibility flags - allows gap between stones -->
  {@const stoneVisible = stoneVisibility[index] ?? false}

  {#if stoneVisible}
    <!-- Apply transition animations from stoneAnimations array -->
    {@const animations = stoneAnimations[index] || { liftOffset: 0, scale: 1, rotation: 0 }}
    {@const liftOffset = animations.liftOffset}
    {@const scaleMultiplier = animations.scale}
    {@const rotationBoost = animations.rotation}
    <T.Group position={[stonePosition.x, stonePosition.y + floatY + liftOffset, stonePosition.z]}>

    <!-- TECHNO-MINIMAL BACKGROUND - Unique patterns per stone -->
    {@const stonePatterns = [
      // Stone 0 - Vertical elongated pattern (tall rock shape)
      {
        dots: [[-1.8, 2.2], [-1.5, 1.0], [-2.0, -0.3], [-1.4, -1.5], [1.6, 2.0], [1.9, 0.8], [1.5, -0.5], [1.8, -1.8], [0, 2.5], [0.3, -2.2]],
        lines: [[[-1.8, 2.2], [-1.5, 1.0]], [[-1.5, 1.0], [-2.0, -0.3]], [[-2.0, -0.3], [-1.4, -1.5]], [[1.6, 2.0], [1.9, 0.8]], [[1.9, 0.8], [1.5, -0.5]], [[1.5, -0.5], [1.8, -1.8]], [[-1.8, 2.2], [0, 2.5]], [[0, 2.5], [1.6, 2.0]], [[0.3, -2.2], [-1.4, -1.5]], [[0.3, -2.2], [1.8, -1.8]]]
      },
      // Stone 1 - Wide horizontal pattern (broad rock shape)
      {
        dots: [[-2.5, 1.2], [-1.2, 1.5], [0, 1.0], [1.3, 1.4], [2.4, 1.0], [-2.3, -0.8], [-0.8, -1.2], [0.6, -1.0], [2.2, -0.6], [0, 0]],
        lines: [[[-2.5, 1.2], [-1.2, 1.5]], [[-1.2, 1.5], [0, 1.0]], [[0, 1.0], [1.3, 1.4]], [[1.3, 1.4], [2.4, 1.0]], [[-2.3, -0.8], [-0.8, -1.2]], [[-0.8, -1.2], [0.6, -1.0]], [[0.6, -1.0], [2.2, -0.6]], [[-2.5, 1.2], [-2.3, -0.8]], [[2.4, 1.0], [2.2, -0.6]], [[0, 1.0], [0, 0]], [[0, 0], [0.6, -1.0]]]
      },
      // Stone 2 - Diamond/angular pattern (sharp rock shape)
      {
        dots: [[0, 2.3], [-2.2, 0.5], [-1.5, -0.8], [0, -2.0], [1.6, -0.6], [2.3, 0.3], [-0.8, 1.2], [0.9, 1.0], [-1.0, -1.5], [1.2, -1.4]],
        lines: [[[0, 2.3], [-0.8, 1.2]], [[-0.8, 1.2], [-2.2, 0.5]], [[-2.2, 0.5], [-1.5, -0.8]], [[-1.5, -0.8], [-1.0, -1.5]], [[-1.0, -1.5], [0, -2.0]], [[0, -2.0], [1.2, -1.4]], [[1.2, -1.4], [1.6, -0.6]], [[1.6, -0.6], [2.3, 0.3]], [[2.3, 0.3], [0.9, 1.0]], [[0.9, 1.0], [0, 2.3]]]
      },
      // Stone 3 - Irregular scattered pattern (rough rock shape)
      {
        dots: [[-1.9, 1.8], [-2.4, 0.2], [-1.0, 0.8], [-0.5, -1.6], [0.8, 2.0], [2.1, 1.2], [1.5, -0.4], [0.3, -2.1], [2.5, -1.0], [-1.6, -1.2]],
        lines: [[[-1.9, 1.8], [-1.0, 0.8]], [[-1.0, 0.8], [-2.4, 0.2]], [[-2.4, 0.2], [-1.6, -1.2]], [[-1.6, -1.2], [-0.5, -1.6]], [[0.8, 2.0], [2.1, 1.2]], [[2.1, 1.2], [1.5, -0.4]], [[1.5, -0.4], [2.5, -1.0]], [[0.3, -2.1], [-0.5, -1.6]], [[0.3, -2.1], [2.5, -1.0]], [[-1.9, 1.8], [0.8, 2.0]]]
      }
    ]}
    {@const currentPattern = stonePatterns[index % stonePatterns.length]}
    <T.Group position={[0, 0, -0.8]} scale={scaleMultiplier} rotation.z={index * 0.15}>

      <!-- Constellation dots for this stone -->
      {#each currentPattern.dots as [px, py], i}
        {@const pulse = Math.sin(time * 0.8 + i * 0.7 + index * 2) * 0.15}
        <T.Mesh position={[px, py, 0]}>
          <T.CircleGeometry args={[0.03 + pulse * 0.008, 6]} />
          <T.MeshBasicMaterial
            color={0xd1d5db}
            transparent
            opacity={0.45 + pulse}
          />
        </T.Mesh>
      {/each}

      <!-- Connecting lines for this stone -->
      {#each currentPattern.lines as [[x1, y1], [x2, y2]]}
        {@const len = Math.sqrt((x2-x1)**2 + (y2-y1)**2)}
        {@const angle = Math.atan2(y2-y1, x2-x1)}
        <T.Mesh position={[(x1+x2)/2, (y1+y2)/2, 0]} rotation.z={angle}>
          <T.PlaneGeometry args={[len, 0.003]} />
          <T.MeshBasicMaterial color={0x9ca3af} transparent opacity={0.3} />
        </T.Mesh>
      {/each}

      <!-- Floating particles unique to each stone -->
      {#each Array(4) as _, i}
        {@const t = (time * 0.2 + i * 0.5 + index * 0.3) % 1}
        {@const dotCount = currentPattern.dots.length}
        {@const idx1 = Math.floor(t * (dotCount - 1))}
        {@const idx2 = Math.min(idx1 + 1, dotCount - 1)}
        {@const segT = (t * (dotCount - 1)) % 1}
        {@const p1 = currentPattern.dots[idx1]}
        {@const p2 = currentPattern.dots[idx2]}
        <T.Mesh position={[p1[0] + (p2[0] - p1[0]) * segT, p1[1] + (p2[1] - p1[1]) * segT, 0]}>
          <T.CircleGeometry args={[0.02, 6]} />
          <T.MeshBasicMaterial color={0xffffff} transparent opacity={0.7} />
        </T.Mesh>
      {/each}

      <!-- Key pulsing dots at corners -->
      {#each [0, 2, 4, 7].map(i => currentPattern.dots[i % currentPattern.dots.length]) as [px, py], i}
        {@const pulse = Math.sin(time * 0.5 + i * 1.2 + index)}
        <T.Mesh position={[px, py, 0]}>
          <T.CircleGeometry args={[0.05 + pulse * 0.012, 6]} />
          <T.MeshBasicMaterial
            color={0xffffff}
            transparent
            opacity={0.18 + pulse * 0.1}
          />
        </T.Mesh>
      {/each}

    </T.Group>
    <!-- END TECHNO-MINIMAL BACKGROUND -->

    <!-- Main rock mesh - loaded GLTF model -->
    {#if $rockGltf}
      {@const baseScale = isHovered ? 2.8 : 2.6}
      {@const finalScale = baseScale * animatedZoom * scaleMultiplier}
      <T.Group
        rotation.y={(modalOpen ? rotY * 0.3 : rotY) + rotationBoost}
        rotation.x={(modalOpen ? rotX * 0.3 : rotX) + scrollRotX}
        rotation.z={index * 0.3 + scrollRotZ}
        scale={finalScale}
      >
        {#each Object.values($rockGltf.nodes) as node}
          {#if node.isMesh}
            <T.Mesh
              geometry={node.geometry}
              castShadow
              receiveShadow
              on:click={() => handleStoneClick(stone, index)}
              on:pointerenter={() => handleStoneEnter(index)}
              on:pointerleave={handleStoneLeave}
            >
              <T.MeshStandardMaterial
                map={node.material.map}
                roughnessMap={node.material.roughnessMap}
                metalnessMap={node.material.metalnessMap}
                aoMap={node.material.aoMap}
                roughness={0.65}
                metalness={0.15}
                envMapIntensity={0.6}
              />
            </T.Mesh>
          {/if}
        {/each}
      </T.Group>

      <!-- Dedicated spotlight for this rock -->
      <T.SpotLight
        position={[0, 4, 2]}
        target-position={[0, 0, 0]}
        angle={0.5}
        penumbra={0.5}
        intensity={isHovered ? 4 : 2}
        color={0xe8f0ff}
        castShadow
        distance={12}
      />
    {:else}
      <!-- Fallback while loading -->
      <T.Mesh
        rotation.y={rotY}
        rotation.x={rotX}
        scale={isHovered ? 2.1 : 2.0}
        on:click={() => handleStoneClick(stone, index)}
        on:pointerenter={() => handleStoneEnter(index)}
        on:pointerleave={handleStoneLeave}
        castShadow
        receiveShadow
      >
        <T.IcosahedronGeometry args={[1, 2]} />
        <T.MeshStandardMaterial
          color={stone.color}
          roughness={0.3}
          metalness={0.7}
          transparent
          opacity={0.95}
        />
      </T.Mesh>
    {/if}

      <!-- Subtle inner glow (disabled - opacity set to 0) -->
      <T.Mesh scale={0.6} rotation.y={rotY} rotation.x={rotX}>
        <T.SphereGeometry args={[2.0, 16, 16]} />
        <T.MeshBasicMaterial
          color={0x5a6a7a}
          transparent
          opacity={0}
        />
      </T.Mesh>

      <!-- Outer atmosphere glow (disabled - opacity set to 0) -->
      <T.Mesh scale={isHovered ? 1.3 : 1.2}>
        <T.SphereGeometry args={[2.4, 32, 32]} />
        <T.MeshBasicMaterial
          color={isHovered ? 0x9aaaaa : 0x6a7a8a}
          transparent
          opacity={0}
          side={THREE.BackSide}
        />
      </T.Mesh>

      <!-- Stone lighting -->
      <T.PointLight
        color={0xf0f0f0}
        intensity={isHovered ? 2.5 : 1}
        distance={10}
        decay={2}
      />

      <!-- HTML Labels - Only show when modal is closed -->
      {#if !modalOpen}
        <!-- HTML Labels - Top Left with connecting line (closer to rock) -->
        <HTML
          position={[-2.2, 1.6, 0]}
          center
          occlude={false}
          style="pointer-events: auto;"
        >
          <div class="stone-info top-left" class:hovered={isHovered}>
            <div class="info-id">PORTFOLIO_CO_{String(index + 1).padStart(2, '0')}</div>
            <div class="info-name">{stone.name.toUpperCase().replace(' ', '_')}</div>
            <!-- Connecting line -->
            <svg class="connector-line top-left-line" width="80" height="40" viewBox="0 0 80 40">
              <line x1="0" y1="0" x2="70" y2="35" stroke="rgba(255,255,255,0.5)" stroke-width="1"/>
              <circle cx="70" cy="35" r="2.5" fill="rgba(255,255,255,0.6)"/>
            </svg>
          </div>
        </HTML>

        <!-- HTML Labels - Right Side Temperature (closer to rock) -->
        <HTML
          position={[2.8, 0.4, 0]}
          center
          occlude={false}
          style="pointer-events: auto;"
        >
          <div class="stone-info right-side" class:hovered={isHovered}>
            <div class="temp-row">
              <span class="temp-label">TEMP</span>
              <span class="temp-value">{(25 + Math.sin(index * 2) * 8).toFixed(2)}°</span>
            </div>
            <div class="temp-secondary">+{(Math.abs(-3 + Math.cos(index * 2) * 4)).toFixed(2)}</div>
          </div>
        </HTML>

        <!-- HTML Labels - Bottom with date and CTA (closer to rock) -->
        <HTML
          position={[1.8, -1.4, 0]}
          center
          occlude={false}
          style="pointer-events: auto;"
        >
          <div class="stone-info bottom-info" class:hovered={isHovered}>
            <!-- Connecting line from stone -->
            <svg class="connector-line bottom-line" width="60" height="40" viewBox="0 0 60 40">
              <line x1="0" y1="40" x2="50" y2="8" stroke="rgba(255,255,255,0.5)" stroke-width="1"/>
              <circle cx="0" cy="40" r="2.5" fill="rgba(255,255,255,0.6)"/>
            </svg>
            <div class="date-text">D {formatDate()}</div>
            <div class="cta-text">CLICK TO EXPLORE</div>
          </div>
        </HTML>
      {/if}

    </T.Group>
  {/if}
{/each}

<style>
  /* Rock glow character styles */
  :global(.rock-glow-char) {
    display: inline;
    transition: color 0.1s ease, text-shadow 0.1s ease;
    will-change: color, text-shadow;
    cursor: default;
  }

  /* Stone Info - Clean floating labels with connecting lines */
  :global(.stone-info) {
    font-family: 'JetBrains Mono', 'SF Mono', 'Fira Code', monospace;
    color: rgba(255, 255, 255, 0.85);
    transition: all 0.3s ease;
  }

  :global(.stone-info.hovered) {
    color: rgba(255, 255, 255, 1);
  }

  /* Top Left - Portfolio ID and Name */
  :global(.stone-info.top-left) {
    text-align: left;
    position: relative;
  }

  :global(.info-id) {
    font-size: 10px;
    letter-spacing: 0.15em;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 2px;
  }

  :global(.stone-info.hovered .info-id) {
    color: rgba(255, 255, 255, 0.9);
  }

  :global(.info-name) {
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.1em;
    color: rgba(255, 255, 255, 0.95);
  }

  :global(.stone-info.hovered .info-name) {
    color: rgba(255, 255, 255, 1);
  }

  /* Connecting lines */
  :global(.connector-line) {
    position: absolute;
    overflow: visible;
  }

  :global(.connector-line.top-left-line) {
    top: 100%;
    left: 0;
    margin-top: 4px;
  }

  :global(.connector-line.bottom-line) {
    position: absolute;
    top: -35px;
    left: -50px;
  }

  /* Right Side - Temperature */
  :global(.stone-info.right-side) {
    text-align: right;
  }

  :global(.temp-row) {
    display: flex;
    align-items: baseline;
    gap: 16px;
    justify-content: flex-end;
  }

  :global(.temp-label) {
    font-size: 10px;
    letter-spacing: 0.15em;
    color: rgba(255, 255, 255, 0.6);
  }

  :global(.temp-value) {
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.05em;
    color: rgba(255, 255, 255, 0.95);
  }

  :global(.stone-info.hovered .temp-value) {
    color: rgba(255, 255, 255, 1);
  }

  :global(.temp-secondary) {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.6);
    text-align: right;
    margin-top: 2px;
  }

  /* Bottom - Date and CTA */
  :global(.stone-info.bottom-info) {
    text-align: left;
    position: relative;
  }

  :global(.date-text) {
    font-size: 11px;
    letter-spacing: 0.12em;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 4px;
  }

  :global(.cta-text) {
    font-size: 11px;
    letter-spacing: 0.15em;
    color: rgba(255, 255, 255, 0.65);
  }

  :global(.stone-info.hovered .cta-text) {
    color: rgba(255, 255, 255, 0.95);
  }
</style>