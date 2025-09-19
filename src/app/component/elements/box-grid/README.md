# Box Grid Components

A collection of React components that create animated grid layouts with pulsing intersection points, designed to replace SVG-based grids with code-based solutions.

## Components

### 1. `SVGReplicaGrid`
Exact replica of the original boxgrid.svg with precise positioning and animations.

```tsx
import { SVGReplicaGrid } from './box-grid';

<SVGReplicaGrid 
  className="absolute inset-0"
  showPulses={true}
  pulseColor="white"
  borderColor="#2C465D"
  animationSpeed="normal"
/>
```

**Props:**
- `className?: string` - Additional CSS classes
- `pulseColor?: string` - Color of the pulse animations (default: "white")
- `borderColor?: string` - Color of the grid borders (default: "#2C465D")
- `showPulses?: boolean` - Whether to show pulse animations (default: true)
- `animationSpeed?: 'slow' | 'normal' | 'fast'` - Speed of pulse animations

### 2. `SimpleBoxGrid`
Flexible grid component with customizable dimensions.

```tsx
import { SimpleBoxGrid } from './box-grid';

<SimpleBoxGrid 
  className="absolute inset-0"
  rows={2}
  cols={2}
  showCornerPulses={true}
/>
```

**Props:**
- `className?: string` - Additional CSS classes
- `rows?: number` - Number of grid rows (default: 2)
- `cols?: number` - Number of grid columns (default: 2)
- `showCornerPulses?: boolean` - Show pulse animations at corners (default: true)

### 3. `BackgroundGrid`
Versatile background grid with multiple variants and customization options.

```tsx
import { BackgroundGrid } from './box-grid';

<BackgroundGrid
  className="absolute inset-0 z-0"
  opacity={0.3}
  showPulses={true}
  pulseIntensity="normal"
  gridSize="medium"
  variant="corner-only"
/>
```

**Props:**
- `className?: string` - Additional CSS classes
- `opacity?: number` - Grid opacity (default: 0.3)
- `showPulses?: boolean` - Whether to show pulse animations (default: true)
- `pulseIntensity?: 'subtle' | 'normal' | 'strong'` - Intensity of pulse effects
- `gridSize?: 'small' | 'medium' | 'large'` - Size of the grid
- `variant?: 'minimal' | 'detailed' | 'corner-only'` - Grid style variant

### 4. Pre-configured Components

#### `HeroBackgroundGrid`
Optimized for hero sections with prominent pulse effects.

```tsx
import { HeroBackgroundGrid } from './box-grid';

<HeroBackgroundGrid />
```

#### `SectionBackgroundGrid`
Subtle grid for content sections with minimal distraction.

```tsx
import { SectionBackgroundGrid } from './box-grid';

<SectionBackgroundGrid />
```

## Usage Examples

### Replace SVG Background
```tsx
// Before (using SVG)
<div className="bg-[url(/assets/boxgrid.svg)] bg-contain bg-center bg-no-repeat">
  {/* content */}
</div>

// After (using component)
<div className="relative">
  <SVGReplicaGrid className="absolute inset-0" />
  {/* content */}
</div>
```

### Hero Section with Grid
```tsx
function HeroSection() {
  return (
    <div className="relative h-screen bg-black">
      <HeroBackgroundGrid />
      <div className="relative z-10">
        {/* Hero content */}
      </div>
    </div>
  );
}
```

### Custom Grid Layout
```tsx
function CustomSection() {
  return (
    <div className="relative p-8">
      <BackgroundGrid
        variant="detailed"
        gridSize="large"
        pulseIntensity="subtle"
        opacity={0.2}
      />
      <div className="relative z-10">
        {/* Section content */}
      </div>
    </div>
  );
}
```

## Features

- ✅ **SVG-free**: Pure CSS and React implementation
- ✅ **Responsive**: Works across all screen sizes
- ✅ **Customizable**: Multiple variants and configuration options
- ✅ **Animated**: Smooth pulse animations at intersections
- ✅ **Performance**: Optimized with CSS animations
- ✅ **Accessible**: No accessibility concerns
- ✅ **TypeScript**: Full TypeScript support

## Animation Details

The pulse animations use CSS `animate-pulse` with staggered delays to create a dynamic, breathing effect at grid intersections. Each pulse consists of:

- Horizontal line with glow effect
- Vertical line with glow effect
- Staggered animation timing for visual interest
- Customizable colors and intensities

## Browser Support

These components work in all modern browsers that support:
- CSS Grid
- CSS Animations
- CSS Custom Properties (CSS Variables)

## Performance Considerations

- Uses CSS animations instead of JavaScript for better performance
- Minimal DOM nodes for pulse effects
- Optimized for 60fps animations
- No external dependencies
