<script>
  // Static fallback for users with prefers-reduced-motion or no WebGL
</script>

<div class="static-fallback" role="img" aria-label="IGLOO - An artistic representation of ice and stone">
  <div class="fallback-content">
    <!-- Background -->
    <div class="bg-gradient"></div>
    
    <!-- UI Elements -->
    <div class="ui-overlay">
      <div class="flex justify-between items-start w-full">
        <div>
          <h1 class="logo">IGLOO</h1>
          <p class="label mt-2">// Copyright © 2024</p>
          <p class="label">Igloo, Inc.</p>
        </div>
        <div class="text-right max-w-xs">
          <p class="label">////// Manifesto</p>
          <p class="body mt-2">
            Our mission is to create the largest onchain community, driving the consumer crypto revolution.
          </p>
        </div>
      </div>
    </div>

    <!-- Center content -->
    <div class="center-content">
      <div class="igloo-silhouette">
        <svg viewBox="0 0 200 150" aria-hidden="true">
          <!-- Simplified igloo shape -->
          <ellipse cx="100" cy="100" rx="60" ry="40" fill="none" stroke="rgba(168, 173, 184, 0.3)" stroke-width="1"/>
          <path d="M 40 100 Q 40 50, 100 50 Q 160 50, 160 100" fill="none" stroke="rgba(168, 173, 184, 0.4)" stroke-width="1.5"/>
          <rect x="85" y="75" width="30" height="25" rx="15" ry="12" fill="rgba(10, 12, 16, 0.8)" stroke="rgba(168, 173, 184, 0.2)" stroke-width="1"/>
        </svg>
      </div>
      
      <div class="notice">
        <p class="label">[ WebGL Unavailable ]</p>
        <p class="body mt-2">Enable WebGL or disable reduced motion for the full experience.</p>
      </div>
    </div>

    <!-- Bottom UI -->
    <div class="bottom-ui">
      <p class="label">// Static View</p>
    </div>
  </div>
</div>

<style>
  .static-fallback {
    position: fixed;
    inset: 0;
    z-index: 0;
    background: #0a0c10;
  }

  .fallback-content {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 2rem 2.5rem;
  }

  .bg-gradient {
    position: absolute;
    inset: 0;
    background: 
      radial-gradient(ellipse at 50% 40%, rgba(168, 173, 184, 0.03) 0%, transparent 50%),
      linear-gradient(180deg, #1a1c22 0%, #0a0c10 100%);
    pointer-events: none;
  }

  .ui-overlay {
    position: relative;
    z-index: 1;
  }

  .logo {
    font-family: 'Inter', sans-serif;
    font-weight: 900;
    font-size: 2rem;
    letter-spacing: 0.1em;
    color: #f5f5f7;
  }

  .label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.65rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: rgba(168, 173, 184, 0.6);
  }

  .body {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.75rem;
    line-height: 1.6;
    color: rgba(168, 173, 184, 0.8);
  }

  .center-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
  }

  .igloo-silhouette {
    width: 200px;
    height: 150px;
    margin-bottom: 2rem;
  }

  .notice {
    text-align: center;
  }

  .bottom-ui {
    position: relative;
    z-index: 1;
  }

  @media (prefers-reduced-motion: reduce) {
    .static-fallback {
      display: block !important;
    }
  }
</style>