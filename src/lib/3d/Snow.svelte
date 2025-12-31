<script>
  import { T, useTask } from '@threlte/core';
  import * as THREE from 'three';

  export let count = 150;
  export let opacity = 1;
  export let area = 50;
  export let height = 30;

  let time = 0;
  
  // Generate initial particle data
  let particles = [];
  for (let i = 0; i < count; i++) {
    particles.push({
      x: (Math.random() - 0.5) * area,
      y: Math.random() * height,
      z: (Math.random() - 0.5) * area,
      speed: 0.5 + Math.random() * 1.5,
      wobblePhase: Math.random() * Math.PI * 2,
      wobbleSpeed: 0.5 + Math.random() * 1,
      size: 0.03 + Math.random() * 0.05
    });
  }

  // Create geometry with positions
  const positions = new Float32Array(count * 3);
  const sizes = new Float32Array(count);
  
  particles.forEach((p, i) => {
    positions[i * 3] = p.x;
    positions[i * 3 + 1] = p.y;
    positions[i * 3 + 2] = p.z;
    sizes[i] = p.size;
  });

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  useTask((delta) => {
    time += delta;
    
    // Update particle positions
    const posAttr = geometry.attributes.position;
    
    for (let i = 0; i < count; i++) {
      const p = particles[i];
      
      // Move down
      let y = posAttr.getY(i) - p.speed * delta;
      
      // Reset to top when below ground
      if (y < -5) {
        y = height;
        posAttr.setX(i, (Math.random() - 0.5) * area);
        posAttr.setZ(i, (Math.random() - 0.5) * area);
      }
      
      // Wobble horizontally
      const wobbleX = Math.sin(time * p.wobbleSpeed + p.wobblePhase) * 0.02;
      const wobbleZ = Math.cos(time * p.wobbleSpeed * 0.7 + p.wobblePhase) * 0.02;
      
      posAttr.setX(i, posAttr.getX(i) + wobbleX);
      posAttr.setY(i, y);
      posAttr.setZ(i, posAttr.getZ(i) + wobbleZ);
    }
    
    posAttr.needsUpdate = true;
  });
</script>

<!-- Main snow particles -->
<T.Points {geometry}>
  <T.PointsMaterial
    color={0xffffff}
    size={0.08}
    transparent
    opacity={0.7 * opacity}
    sizeAttenuation={true}
    depthWrite={false}
  />
</T.Points>

<!-- Additional smaller particles for depth -->
<T.Points>
  <T.BufferGeometry>
    <T.BufferAttribute
      attach="attributes-position"
      args={[new Float32Array(Array(count * 0.5).fill(0).flatMap(() => [
        (Math.random() - 0.5) * area * 1.5,
        Math.random() * height * 1.2,
        (Math.random() - 0.5) * area * 1.5
      ])), 3]}
    />
  </T.BufferGeometry>
  <T.PointsMaterial
    color={0xe8eef5}
    size={0.04}
    transparent
    opacity={0.4 * opacity}
    sizeAttenuation={true}
    depthWrite={false}
  />
</T.Points>

<!-- Distant background snow (static, for atmosphere) -->
<T.Points>
  <T.BufferGeometry>
    <T.BufferAttribute
      attach="attributes-position"
      args={[new Float32Array(Array(80).fill(0).flatMap(() => [
        (Math.random() - 0.5) * area * 2,
        Math.random() * height * 1.5,
        -30 - Math.random() * 50
      ])), 3]}
    />
  </T.BufferGeometry>
  <T.PointsMaterial
    color={0xd0d8e0}
    size={0.15}
    transparent
    opacity={0.3 * opacity}
    sizeAttenuation={true}
    depthWrite={false}
  />
</T.Points>