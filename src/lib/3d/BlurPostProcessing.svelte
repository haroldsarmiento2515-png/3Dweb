<script>
  import { useThrelte, useTask } from '@threlte/core';
  import { onMount, onDestroy } from 'svelte';
  import * as THREE from 'three';
  import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
  import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
  import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
  import { BokehPass } from 'three/examples/jsm/postprocessing/BokehPass.js';

  export let enabled = true;
  export let focusDistance = 8; // Distance to keep in focus (where the rock is)
  export let aperture = 0.002; // Blur amount
  export let maxblur = 0.01; // Maximum blur

  const { scene, camera, renderer, size } = useThrelte();

  let composer;
  let bokehPass;

  onMount(() => {
    if (!$renderer || !$scene || !$camera) return;

    // Create effect composer
    composer = new EffectComposer($renderer);

    // Add render pass
    const renderPass = new RenderPass($scene, $camera);
    composer.addPass(renderPass);

    // Add bokeh (depth of field) pass for blur effect
    bokehPass = new BokehPass($scene, $camera, {
      focus: focusDistance,
      aperture: aperture,
      maxblur: maxblur
    });
    composer.addPass(bokehPass);

    // Set initial size
    composer.setSize($size.width, $size.height);
  });

  // Update size when window resizes
  $: if (composer && $size) {
    composer.setSize($size.width, $size.height);
  }

  // Update bokeh parameters
  $: if (bokehPass) {
    bokehPass.uniforms['focus'].value = focusDistance;
    bokehPass.uniforms['aperture'].value = aperture;
    bokehPass.uniforms['maxblur'].value = maxblur;
  }

  // Render with post-processing
  useTask(() => {
    if (!composer || !enabled) return;
    composer.render();
  }, { stage: 'render', autoInvalidate: false });

  onDestroy(() => {
    if (composer) {
      composer.dispose();
    }
  });
</script>
