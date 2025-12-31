# The 3D Glacial Experience

An immersive, scroll-driven 3D experience built with Svelte, Threlte (Three.js), and GSAP. Journey from an arctic landscape through a blueprint igloo into an intimate gallery of ancient stones.

![Glacial Experience Preview](https://via.placeholder.com/1200x600/0b4a6f/7cd4fd?text=Glacial+Experience)

## ✨ Features

### 1. Hero Scene: The Blueprint Igloo
- **Gradient fog environment** with icy blue to deep gray transitions
- **Custom snow particle system** using `Points` material with sine-wave wobble for organic movement
- **Wireframe igloo** with custom ShaderMaterial featuring animated "running lights" that trace the geometry edges
- **Reveal animation**: Wireframe transitions to low-poly mesh with frosted glass / subsurface scattering material
- **Lerped mouse follow**: Subtle camera parallax based on cursor position

### 2. Interior Transition: The Macro-Dive
- **Scroll orchestration** using Lenis smooth scroll + GSAP ScrollTrigger
- **Dolly zoom** into the igloo entrance as user scrolls
- **Interior environment** with soft-lit gray void replacing exterior mountains
- **Floating stone** with displacement mapping, sine-wave Y animation, and constant rotation

### 3. Stone Interaction: "Inside the Core"
- **Click-triggered camera zoom** into stone texture
- **Glassmorphic modal** overlay with detailed stone properties
- **Reverse animation** on modal close

### 4. Gallery of Stones
- **Scroll-based navigation** through multiple unique stones
- **Distinct geometric personalities**: Dodecahedron (granite), Icosahedron (obsidian), Octahedron (quartz), Tetrahedron (amber)
- **Consistent lighting** across all sections for visual unity

## 🏗️ Architecture

```
src/
├── main.js                     # Entry point
├── app.css                     # Global styles + Tailwind
├── App.svelte                  # Main orchestrator
└── lib/
    ├── Scene.svelte            # Threlte Canvas wrapper
    ├── Modal.svelte            # Glassmorphic stone modal
    ├── ScrollIndicator.svelte  # Scroll prompt UI
    ├── StaticFallback.svelte   # Accessibility fallback
    └── 3d/
        ├── MainScene.svelte    # Scene orchestration
        ├── Igloo.svelte        # Wireframe/shader logic
        ├── Snow.svelte         # Particle system
        ├── Stone.svelte        # Reusable 3D stones
        └── Environment.svelte  # Lighting & atmosphere
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd glacial-experience

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
npm run preview
```

## 🎨 Technical Highlights

### Custom Shaders

**Running Lights Shader** (Igloo wireframe):
- Animates glow that traces mesh edges
- Uses dash-offset technique for traveling light effect
- Additive blending for ethereal appearance

**Frosted Glass Shader** (Solid igloo):
- Fresnel-based transparency
- Subsurface scattering approximation
- Animated noise for frost texture
- Subtle iridescence effect

**Stone Shader**:
- Simplex noise for vertex displacement
- PBR-inspired lighting model
- Hover-reactive rim lighting

### Particle System Optimization
- **InterleavedBufferAttributes** for memory efficiency
- Custom vertex shader handles sine-wave wobble
- Automatic particle recycling when below ground plane
- Additive blending for soft snow effect

### Scroll Orchestration
- **Lenis** provides butter-smooth scrolling
- **GSAP ScrollTrigger** drives all camera movements and section animations
- Phase-based state management for scene transitions

## ♿ Accessibility

- **Static 2D fallback** for `prefers-reduced-motion` users
- **WebGL detection** with graceful degradation
- **Keyboard navigation** support
- **ARIA labels** for interactive elements
- **Focus management** in modal

## 🎯 Performance Tips

1. **Texture compression**: Use WebP/Basis for any additional textures
2. **Level of Detail**: Reduce geometry complexity based on distance
3. **Particle count**: Adjust based on device capability
4. **Shader complexity**: Simplify for mobile devices

## 📦 Dependencies

| Package | Purpose |
|---------|---------|
| `svelte` | Reactive UI framework |
| `@threlte/core` | Three.js + Svelte integration |
| `@threlte/extras` | Additional Threlte utilities |
| `three` | 3D rendering engine |
| `gsap` | Animation library |
| `lenis` | Smooth scroll |
| `tailwindcss` | Utility-first CSS |

## 🎨 Design Tokens

### Colors
```css
--glacial-deep: #072f4a
--glacial-mid: #0b4a6f
--glacial-light: #7cd4fd
--glacial-ice: #e0f2fe
--stone-obsidian: #0a0a0f
--stone-granite: #4a4a52
--stone-amber: #d4a574
```

### Typography
- **Display**: Instrument Serif
- **Body**: DM Sans
- **Mono**: JetBrains Mono

## 📄 License

MIT License - feel free to use this for your own projects!

---

Built with 🧊 by leveraging the power of Svelte, Three.js, and GSAP
