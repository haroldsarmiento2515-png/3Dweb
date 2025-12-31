<script>
  import { Canvas } from '@threlte/core';
  import { createEventDispatcher, onMount } from 'svelte';
  import MainScene from './3d/MainScene.svelte';

  export let scrollProgress = 0;
  export let currentSection = 0;
  export let stones = [];
  export let modalOpen = false;

  const dispatch = createEventDispatcher();

  let mousePosition = { x: 0.5, y: 0.5 };
  let targetMousePosition = { x: 0.5, y: 0.5 };
  let mounted = false;

  // Lerp for smooth interpolation
  function lerp(start, end, factor) {
    return start + (end - start) * factor;
  }

  // Handle mouse movement
  function handleMouseMove(event) {
    targetMousePosition = {
      x: event.clientX / window.innerWidth,
      y: event.clientY / window.innerHeight
    };
  }

  // Smooth animation loop
  function animate() {
    mousePosition.x = lerp(mousePosition.x, targetMousePosition.x, 0.03);
    mousePosition.y = lerp(mousePosition.y, targetMousePosition.y, 0.03);
    requestAnimationFrame(animate);
  }

  function handleStoneClick(event) {
    dispatch('stoneClick', event.detail);
  }

  onMount(() => {
    mounted = true;
    animate();
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  });
</script>

<div class="scene-container">
  {#if mounted}
    <Canvas>
      <MainScene 
        {scrollProgress}
        {currentSection}
        {mousePosition}
        {stones}
        {modalOpen}
        on:stoneClick={handleStoneClick}
      />
    </Canvas>
  {/if}
</div>

<style>
  .scene-container {
    position: absolute;
    inset: 0;
    background: #0a0c10;
  }
</style>