<script>
  import { T, useTask } from '@threlte/core';
  import * as THREE from 'three';

  export let progress = 0;
  export let active = false;
  export let isExiting = false;

  let time = 0;

  useTask((delta) => {
    time += delta;
  });

  // Ring count and properties
  const ringCount = 8;
  
  // Calculate ring properties based on progress
  $: rings = Array(ringCount).fill(0).map((_, i) => {
    const baseRadius = 1.5 + i * 0.8;
    const progressOffset = (progress * 2 + i * 0.1) % 1;
    const scale = 1 + progressOffset * 0.5;
    const opacity = Math.sin(progressOffset * Math.PI) * 0.4;
    const zOffset = isExiting ? -i * 0.5 - progress * 5 : i * 0.5 + progress * 5;
    
    return {
      radius: baseRadius * scale,
      opacity: opacity * (active ? 1 : 0),
      z: zOffset,
      rotation: time * 0.2 + i * 0.3
    };
  });

  // Particle system properties
  $: particleIntensity = active ? Math.sin(progress * Math.PI) : 0;
  
  // Colors (neutral white for ash gray theme)
  $: portalColor = 0xffffff;
  $: glowColor = 0xf8f8f8;
</script>

{#if active}
  <T.Group position={[0, 2, isExiting ? 6 : -2]}>
    <!-- Central glow -->
    <T.Mesh>
      <T.SphereGeometry args={[0.8, 32, 32]} />
      <T.MeshBasicMaterial
        color={glowColor}
        transparent
        opacity={0.3 * particleIntensity}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </T.Mesh>

    <!-- Portal rings -->
    {#each rings as ring, i}
      <T.Mesh 
        position={[0, 0, ring.z]} 
        rotation={[0, 0, ring.rotation]}
      >
        <T.RingGeometry args={[ring.radius - 0.05, ring.radius + 0.05, 64]} />
        <T.MeshBasicMaterial
          color={portalColor}
          transparent
          opacity={ring.opacity}
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </T.Mesh>
    {/each}

    <!-- Radial light beams -->
    {#each Array(12) as _, i}
      {@const angle = (i / 12) * Math.PI * 2 + time * 0.1}
      {@const beamLength = 3 + Math.sin(time * 2 + i) * 0.5}
      <T.Mesh
        position={[Math.cos(angle) * 0.5, Math.sin(angle) * 0.5, progress * (isExiting ? -3 : 3)]}
        rotation={[0, 0, angle + Math.PI / 2]}
      >
        <T.PlaneGeometry args={[0.03, beamLength]} />
        <T.MeshBasicMaterial
          color={portalColor}
          transparent
          opacity={0.2 * particleIntensity}
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </T.Mesh>
    {/each}

    <!-- Outer glow sphere -->
    <T.Mesh position={[0, 0, progress * (isExiting ? -2 : 2)]}>
      <T.SphereGeometry args={[3, 32, 32]} />
      <T.MeshBasicMaterial
        color={glowColor}
        transparent
        opacity={0.08 * particleIntensity}
        side={THREE.BackSide}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </T.Mesh>

    <!-- Point light for scene illumination -->
    <T.PointLight
      color={portalColor}
      intensity={particleIntensity * 3}
      distance={15}
      decay={2}
    />
  </T.Group>

  <!-- Floating particles -->
  <T.Points>
    <T.BufferGeometry>
      <T.BufferAttribute
        attach="attributes-position"
        args={[new Float32Array(Array(200).fill(0).flatMap(() => [
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 8 + 2,
          (Math.random() - 0.5) * 10 + (isExiting ? 4 : -2)
        ])), 3]}
      />
    </T.BufferGeometry>
    <T.PointsMaterial
      color={portalColor}
      size={0.05}
      transparent
      opacity={0.6 * particleIntensity}
      blending={THREE.AdditiveBlending}
      depthWrite={false}
    />
  </T.Points>
{/if}