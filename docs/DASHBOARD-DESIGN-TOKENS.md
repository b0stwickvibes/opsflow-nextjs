# Dashboard Design Tokens Documentation

## Overview
This document outlines the new dashboard design tokens created to achieve clean, modern Figma-style dashboard components. These tokens provide a consistent, reusable styling system for dashboard interfaces.

## Design Token Categories

### 1. Card System
Clean white cards with subtle shadows and proper hover states:

```css
.dashboard-card-white
.dashboard-card-white:hover
```

**Usage:**
- Main container cards
- Content panels
- Metric displays

### 2. Background System
Subtle background colors for sections and performance areas:

```css
.dashboard-section-bg
.dashboard-performance-bg
```

**Usage:**
- Section backgrounds
- Performance dashboard containers

### 3. Metric Color System
Colored metric cards matching Figma design:

```css
.dashboard-metric-cyan    /* Primary metrics - Uses site primary color */
.dashboard-metric-green   /* Success/completion metrics */
.dashboard-metric-blue    /* Status/information metrics - Light teal color */
.dashboard-metric-purple  /* System/integration metrics */
```

**Color Palette:**
- **Cyan**: Uses `oklch(from var(--primary) l c h / 0.1)` background (site primary color)
- **Green**: #f0fdf4 → #dcfce7
- **Blue**: #ecfeff → #cffafe (Light teal/cyan color matching Figma)
- **Purple**: #faf5ff → #f3e8ff

### 4. Activity Indicators
Colored dots for status indicators:

```css
.dashboard-activity-green   /* Active/completed */
.dashboard-activity-blue    /* In progress */
.dashboard-activity-orange  /* Pending/warning */
```

### 5. Typography System
Consistent text styling for dashboard content:

```css
.dashboard-text-primary     /* Headings, important text */
.dashboard-text-secondary   /* Body text, labels */
.dashboard-text-muted       /* Supporting text, timestamps */
```

### 6. Badge System
Status badges with appropriate colors:

```css
.dashboard-badge-live       /* Live status (green) */
.dashboard-badge-beta       /* Beta features (purple) */
.dashboard-badge-active     /* Active status (cyan/teal) */
.dashboard-badge-franchise  /* Franchise locations (purple) */
.dashboard-badge-corporate  /* Corporate locations (blue) */
```

### 7. Layout Utilities
Grid and layout helpers:

```css
.dashboard-container        /* Main container */
.dashboard-grid-2          /* 2-column grid */
.dashboard-grid-3          /* 3-column grid */
```

### 8. Icon Containers
Premium icon containers for different use cases:

```css
.enterprise-icon-primary    /* Standard enterprise icons with enhanced borders */
.enterprise-icon-secondary  /* Secondary brand icons */
.enterprise-icon-accent     /* Accent icon containers */
.icon-container-roi         /* Premium ROI-style container with ambient background */
```

### 9. Layout Utilities
Grid and container classes for dashboard layouts:

```css
.dashboard-container        /* Main container */
.dashboard-grid-2          /* 2-column grid */
.dashboard-grid-3          /* 3-column grid */
```

### 10. Interaction States
Hover and interaction effects:

```css
.dashboard-hover-lift       /* Subtle lift on hover */
```

## Implementation Example

### Before (Enterprise tokens):
```jsx
<div className="enterprise-card p-8 tile-hover">
  <div className="enterprise-metric-card p-4">
    <Badge className="bg-surface-subtle-primary text-primary">
      Status
    </Badge>
  </div>
</div>
```

### After (Dashboard tokens):
```jsx
<div className="dashboard-card-white p-8 dashboard-hover-lift">
  <div className="dashboard-metric-cyan p-4">
    <Badge className="dashboard-badge-live">
      Live
    </Badge>
  </div>
</div>
```

## Benefits

1. **Clean Aesthetics**: White cards with subtle shadows match modern design trends
2. **Better Color System**: Specific colors for different metric types
3. **Consistent Branding**: Cohesive look across dashboard components
4. **Reusability**: Easy to apply to other dashboard components
5. **Figma Alignment**: Matches the provided Figma design specifications

## Usage Guidelines

### When to Use Dashboard Tokens:
- Dashboard interfaces
- Performance metrics
- Data visualization components
- Analytics panels

### When to Use Enterprise Tokens:
- Marketing pages
- Hero sections
- Feature showcases
- Landing pages

## Token Naming Convention

Format: `dashboard-{category}-{variant}`

Examples:
- `dashboard-card-white`
- `dashboard-metric-cyan`
- `dashboard-badge-live`
- `dashboard-text-primary`

This ensures clear categorization and easy identification of dashboard-specific styling.
