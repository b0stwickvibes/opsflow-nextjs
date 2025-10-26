# OpsFlow Design System - V0 Reference Guide

> **Purpose**: This document contains all global CSS tokens, utility classes, and design standards for creating components in the OpsFlow design system. Use this as your complete reference when building new components in V0.

---

## Table of Contents

1. [Color System (OKLCH)](#color-system-oklch)
2. [Semantic Tokens](#semantic-tokens)
3. [Industry Color Themes](#industry-color-themes)
4. [Typography System](#typography-system)
5. [Button & CTA Styles](#button--cta-styles)
6. [Card & Surface Styles](#card--surface-styles)
7. [Badge System](#badge-system)
8. [Layout & Spacing](#layout--spacing)
9. [Animations](#animations)
10. [Component Standards](#component-standards)

---

## Color System (OKLCH)

### Base Scale (Neutrals)
```css
--base-50: oklch(0.9883 0.0019 258.27);
--base-100: oklch(0.9717 0.0038 259.34);
--base-200: oklch(0.9321 0.0076 259.94);
--base-300: oklch(0.8715 0.0114 261.25);
--base-400: oklch(0.7056 0.0171 264.11);
--base-500: oklch(0.5548 0.0227 264.75);
--base-600: oklch(0.4465 0.0218 264.54);
--base-700: oklch(0.3722 0.0199 264.57);
--base-800: oklch(0.2561 0.018 266.26);
--base-900: oklch(0.2081 0.0156 268.02);
--base-950: oklch(0.1291 0.0142 268.92);
```

### Primary Scale (Cyan/Blue)
```css
--primary-50: oklch(0.9812 0.0208 204.96);
--primary-100: oklch(0.9536 0.0508 205.46);
--primary-200: oklch(0.9148 0.0906 206.08);
--primary-300: oklch(0.8632 0.1432 207.1);
--primary-400: oklch(0.7876 0.173 211.42);
--primary-500: oklch(0.714 0.1606 214.04);
--primary-600: oklch(0.6085 0.1413 217.49);
--primary-700: oklch(0.5512 0.1177 218.91);  /* Default primary */
--primary-800: oklch(0.4493 0.0952 220.09);
--primary-900: oklch(0.3973 0.0784 222.13);
--primary-950: oklch(0.3007 0.0625 223.5);
```

### Secondary Scale (Purple/Magenta)
```css
--secondary-50: oklch(0.9714 0.0104 300.67);
--secondary-100: oklch(0.9432 0.0215 300.57);
--secondary-200: oklch(0.8968 0.0417 299.66);
--secondary-300: oklch(0.8178 0.0799 299.66);
--secondary-400: oklch(0.7072 0.1341 299.23);
--secondary-500: oklch(0.6157 0.179 298.03);
--secondary-600: oklch(0.5489 0.198 297.43);
--secondary-700: oklch(0.4933 0.1864 297.02);
--secondary-800: oklch(0.4469 0.1569 297.97);  /* Default secondary */
--secondary-900: oklch(0.3804 0.1273 299.09);
--secondary-950: oklch(0.2867 0.1008 296.62);
```

---

## Semantic Tokens

### Light Mode (Default)
```css
--background: var(--color-white, oklch(1 0 0));
--foreground: var(--base-800);
--card: var(--color-white, oklch(1 0 0));
--card-foreground: var(--base-800);
--popover: var(--color-white, oklch(1 0 0));
--popover-foreground: var(--base-800);
--primary: var(--primary-700);
--primary-foreground: var(--color-white);
--secondary: var(--secondary-800);
--secondary-foreground: var(--color-white);
--muted: var(--base-50);
--muted-foreground: var(--base-600);
--accent: var(--base-50);
--accent-foreground: var(--base-800);
--destructive: oklch(0.577 0.245 27.325);
--destructive-foreground: var(--color-white);
--border: var(--base-200);
--input: var(--base-300);
--ring: var(--primary-700);
--radius: 0.5rem;
```

### Dark Mode
```css
.dark {
  --background: var(--base-950);
  --foreground: var(--base-200);
  --card: var(--base-950);
  --card-foreground: var(--base-200);
  --popover: var(--base-950);
  --popover-foreground: var(--base-200);
  --primary: var(--primary-700);
  --primary-foreground: var(--color-white);
  --secondary: var(--secondary-800);
  --secondary-foreground: var(--color-white);
  --muted: var(--base-900);
  --muted-foreground: var(--base-400);
  --accent: var(--base-900);
  --accent-foreground: var(--base-200);
  --destructive: oklch(0.704 0.191 22.216);
  --destructive-foreground: var(--color-white);
  --border: var(--base-800);
  --input: var(--base-700);
  --ring: var(--primary-700);
}
```

---

## Industry Color Themes

Apply these classes to override the default color scheme for specific industries:

### Restaurant (Blue) - `.accent-blue`
```css
--primary: oklch(0.58 0.14 260);
--brand-start: oklch(0.58 0.14 260);
--brand-end: oklch(0.48 0.12 270);
--accent-lighter: oklch(0.75 0.08 265);
--accent-subtle: oklch(0.95 0.02 265);
--accent-border: oklch(0.85 0.04 265);
```

### Bar/Nightlife (Purple) - `.accent-purple`
```css
--primary: oklch(0.58 0.28 285);
--brand-start: oklch(0.58 0.28 285);  /* Deep electric violet */
--brand-end: oklch(0.48 0.26 310);    /* Rich magenta-purple */
--accent-lighter: oklch(0.72 0.22 295);
--accent-subtle: oklch(0.94 0.08 295);
--accent-border: oklch(0.82 0.15 295);
--galaxy-glow: oklch(0.65 0.30 290);
--cosmic-shimmer: oklch(0.75 0.25 280);
```

### Coffee Shop (Orange) - `.accent-orange`
```css
--primary: oklch(0.68 0.18 45);
--brand-start: oklch(0.68 0.18 45);
--brand-end: oklch(0.58 0.16 35);
--accent-lighter: oklch(0.82 0.12 40);
--accent-subtle: oklch(0.97 0.04 40);
--accent-border: oklch(0.90 0.06 40);
```

### Hotel (Red) - `.accent-red`
```css
--primary: oklch(0.64 0.22 15);
--brand-start: oklch(0.64 0.22 15);
--brand-end: oklch(0.54 0.18 10);
--accent-lighter: oklch(0.80 0.15 12);
--accent-subtle: oklch(0.97 0.04 12);
--accent-border: oklch(0.92 0.08 12);
```

---

## Typography System

### Display Text (Large Headlines)
```css
.text-display-2xl {
  font-size: clamp(2.5rem, 5vw, 4rem);
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.text-display-lg {
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.2;
  letter-spacing: -0.01em;
}

.text-display-md {
  font-size: clamp(1.5rem, 3vw, 2rem);
  line-height: 1.3;
}

.text-display-sm {
  font-size: clamp(1.25rem, 2.5vw, 1.5rem);
  line-height: 1.4;
}
```

### Enterprise Typography
```css
.enterprise-headline {
  @apply text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight;
}

.enterprise-body {
  @apply text-muted-foreground text-lg leading-relaxed;
}

.metric-display-medium {
  font-size: clamp(1.75rem, 3.2vw, 2.5rem);
  line-height: 1.1;
  font-weight: 800;
  letter-spacing: -0.02em;
}
```

### Text Gradients
```css
.text-gradient {
  background: linear-gradient(135deg, var(--brand-start), var(--brand-end));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.heading-brand-gradient {
  @apply font-bold;
  background: linear-gradient(135deg, var(--brand-start), var(--brand-end));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
```

---

## Button & CTA Styles

### Primary CTA (Clerk-Inspired)
```css
.clerk-cta-primary {
  position: relative;
  border: 1px solid color-mix(in oklch, var(--primary) 20%, transparent) !important;
  background: var(--primary) !important;
  color: white !important;
  box-shadow:
    0 1px 2px 0 rgba(0, 0, 0, 0.05),
    0 0 0 1px color-mix(in oklch, var(--primary) 10%, transparent);
  transition: all 200ms ease;
  font-weight: 500;
  border-radius: 6px;
  font-size: 14px;
}

.clerk-cta-primary:hover {
  background: color-mix(in oklch, var(--primary) 90%, black) !important;
  border-color: color-mix(in oklch, var(--primary) 30%, transparent) !important;
  box-shadow:
    0 2px 4px 0 rgba(0, 0, 0, 0.1),
    0 0 0 1px color-mix(in oklch, var(--primary) 20%, transparent);
}

.clerk-cta-primary:active {
  transform: scale(0.99);
}
```

### Secondary CTA
```css
.clerk-cta-secondary {
  position: relative;
  border: 1px solid rgba(148, 163, 184, 0.3) !important;
  background: white !important;
  color: rgb(51, 65, 85) !important;
  box-shadow:
    0 1px 2px 0 rgba(0, 0, 0, 0.05),
    0 0 0 1px rgba(148, 163, 184, 0.1);
  transition: all 200ms ease;
  font-weight: 500;
  border-radius: 6px;
  font-size: 14px;
}

.clerk-cta-secondary:hover {
  background: rgb(248, 250, 252) !important;
  border-color: rgba(148, 163, 184, 0.5) !important;
}
```

### Ghost CTA
```css
.clerk-cta-ghost {
  position: relative;
  border: 1px solid rgba(148, 163, 184, 0.2) !important;
  background: transparent !important;
  color: rgb(71, 85, 105) !important;
  box-shadow: 0 0 0 1px rgba(148, 163, 184, 0.05);
  transition: all 200ms ease;
  font-weight: 500;
  border-radius: 6px;
  font-size: 14px;
}

.clerk-cta-ghost:hover {
  background: rgba(148, 163, 184, 0.05) !important;
  border-color: rgba(148, 163, 184, 0.3) !important;
}
```

### Gradient CTA
```css
.clerk-cta-light-gradient {
  position: relative;
  background: linear-gradient(135deg, #0891b2 0%, #a78bfa 100%) !important;
  border: 1px solid transparent !important;
  color: white !important;
  box-shadow:
    0 2px 4px 0 rgba(8, 145, 178, 0.2),
    0 8px 24px -4px rgba(167, 139, 250, 0.3);
  transition: all 200ms ease;
  font-weight: 500;
  border-radius: 6px;
  font-size: 14px;
  overflow: hidden;
}

.clerk-cta-light-gradient:hover {
  transform: translateY(-1px);
  box-shadow:
    0 4px 12px 0 rgba(8, 145, 178, 0.25),
    0 12px 32px -4px rgba(167, 139, 250, 0.4);
}
```

---

## Card & Surface Styles

### Clerk Glass Card (Ultra Clean)
```css
.clerk-glass-card {
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0.95)) padding-box,
    linear-gradient(135deg, rgba(148, 163, 184, 0.1), rgba(203, 213, 225, 0.1)) border-box;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 0.875rem;
  box-shadow:
    0 4px 16px -8px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  transition: all 250ms ease;
}

.clerk-glass-card:hover {
  transform: translateY(-1px);
  border-color: rgba(8, 145, 178, 0.15);
  box-shadow:
    0 8px 24px -8px rgba(0, 0, 0, 0.15),
    0 0 0 1px rgba(8, 145, 178, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
}
```

### Stripe Glass Card (Premium)
```css
.stripe-glass-card {
  background:
    linear-gradient(135deg, oklch(from var(--background) l c h / .95), oklch(from var(--background) l c h / .9)) padding-box,
    linear-gradient(135deg, oklch(from var(--primary) l c h / .2), oklch(from var(--secondary) l c h / .2)) border-box;
  backdrop-filter: blur(12px);
  border: 1px solid transparent;
  border-radius: 0.875rem;
  box-shadow:
    0 8px 32px -12px oklch(from var(--primary) l c h / .3),
    inset 0 1px 0 oklch(from var(--background) l c h / .8);
  transition: all 300ms ease;
}

.stripe-glass-card:hover {
  transform: translateY(-2px);
  box-shadow:
    0 20px 40px -12px oklch(from var(--primary) l c h / .4),
    inset 0 1px 0 oklch(from var(--background) l c h / .9);
}
```

### Enterprise Card
```css
.enterprise-card {
  border: 1px solid transparent;
  background:
    linear-gradient(0deg, oklch(from var(--background) l c h / .9), oklch(from var(--background) l c h / .9)) padding-box,
    linear-gradient(135deg, oklch(from var(--brand-start) l c h / .3), oklch(from var(--brand-end) l c h / .3)) border-box;
  backdrop-filter: var(--glass-blur);
  border-radius: 0.875rem;
}

.enterprise-card-hover {
  box-shadow: 0 10px 30px -18px oklch(from var(--brand-start) l c h / .4);
  border-color: oklch(from var(--brand-start) l c h / .6);
}
```

### Feature Tile
```css
.feature-tile {
  @apply rounded-xl;
  border: 1px solid oklch(from var(--border) l c h / .8);
  background: oklch(from var(--background) l c h / .96);
  backdrop-filter: var(--glass-blur);
  transition: transform 200ms ease, box-shadow 250ms ease, border-color 200ms ease;
}

.feature-tile:not(.feature-tile--static):hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 36px -18px oklch(from var(--brand-end) l c h / .45);
  border-color: oklch(from var(--brand-start) l c h / .6);
}
```

### Dashboard Cards
```css
.dashboard-card-white {
  background: white;
  border: 1px solid hsl(var(--border));
  border-radius: 12px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  transition: all 200ms ease;
}

.dashboard-card-white:hover {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border-color: hsl(var(--border) / 0.8);
}
```

---

## Badge System

### Subtle Glass Badges
```css
.badge-subtle-active {
  background: rgba(6, 182, 212, 0.1) !important;
  border: 1px solid rgba(6, 182, 212, 0.2) !important;
  color: rgb(14, 165, 233) !important;
  backdrop-filter: blur(12px);
  font-size: 12px;
  font-weight: 500;
  padding: 4px 12px;
  border-radius: 6px;
  box-shadow:
    0 1px 2px 0 rgba(6, 182, 212, 0.1),
    inset 0 1px 0 0 rgba(255, 255, 255, 0.1);
  transition: all 200ms ease;
}

.badge-subtle-gradient {
  background: linear-gradient(135deg,
    rgba(6, 182, 212, 0.1) 0%,
    rgba(168, 85, 247, 0.1) 100%) !important;
  border: 1px solid transparent !important;
  color: rgb(99, 102, 241) !important;
  backdrop-filter: blur(12px);
  font-size: 12px;
  font-weight: 500;
  padding: 4px 12px;
  border-radius: 6px;
  box-shadow:
    0 1px 2px 0 rgba(99, 102, 241, 0.1),
    inset 0 1px 0 0 rgba(255, 255, 255, 0.1);
  transition: all 200ms ease;
}
```

### Clerk-Inspired Badge
```css
.clerk-inspired-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid oklch(from var(--border) l c h / .7);
  background: oklch(from var(--background) l c h / .95);
  color: oklch(from var(--foreground) l c h / .75);
  backdrop-filter: blur(4px);
  transition: all 200ms ease;
}

.clerk-inspired-badge:hover {
  border-color: oklch(from var(--primary) l c h / .3);
  background: oklch(from var(--background) l c h / .98);
  transform: translateY(-1px);
}
```

### Status Badges
```css
.badge-success {
  background: #dcfce7;
  color: #166534;
  border: 1px solid #bbf7d0;
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 9999px;
  font-weight: 500;
}

.badge-warning {
  background: #fef3c7;
  color: #92400e;
  border: 1px solid #fde68a;
}

.badge-error {
  background: #fee2e2;
  color: #dc2626;
  border: 1px solid #fecaca;
}
```

---

## Layout & Spacing

### Section Spacing
```css
.section-padding-sm { @apply py-12 md:py-16; }
.section-padding-md { @apply py-16 md:py-20; }
.section-padding-lg { @apply py-20 md:py-24; }
.section-padding-xl { @apply py-24 md:py-32; }
```

### Content Containers
```css
.content-container { @apply container mx-auto px-4 sm:px-6 lg:px-8; }
.content-max-sm { @apply max-w-2xl; }
.content-max-md { @apply max-w-4xl; }
.content-max-lg { @apply max-w-6xl; }
.content-max-xl { @apply max-w-7xl; }
.content-max-2xl { @apply max-w-screen-2xl; }
```

### Section Backgrounds
```css
.section-bg-default { @apply bg-background; }
.section-bg-muted { @apply bg-muted/30; }
.section-bg-accent { @apply bg-accent/20; }
.section-bg-gradient { @apply bg-gradient-to-br from-background via-muted/20 to-background; }
```

### Hero Ambient Background
```css
.hero-ambient {
  background:
    radial-gradient(800px 400px at 10% -10%, oklch(from var(--brand-start) l c h / .18) 0%, transparent 70%),
    radial-gradient(900px 450px at 90% -10%, oklch(from var(--brand-end) l c h / .16) 0%, transparent 70%),
    var(--gradient-surface);
  background-size: 200% 200%;
}
```

---

## Animations

### Fade & Slide Animations
```css
@keyframes motion-fade-up-12 {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}

.motion-fade-in-up-320 {
  animation: motion-fade-up-12 320ms cubic-bezier(.2,.9,.3,1) both;
}

@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in-up {
  animation: fade-in-up .5s ease-out both;
}

@keyframes scale-in {
  from { opacity: 0; transform: scale(.96); }
  to { opacity: 1; transform: scale(1); }
}

.animate-scale-in {
  animation: scale-in .4s ease-out both;
}
```

### Hover Effects
```css
.hover-scale-103 {
  transition: transform 180ms cubic-bezier(.2,.9,.3,1);
}

.hover-scale-103:hover {
  transform: scale(1.03);
}

.hover-lift {
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.hover-lift:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 20px 40px -12px oklch(from var(--primary) l c h / .3);
}

.dashboard-hover-lift {
  transition: transform 200ms ease, box-shadow 250ms ease;
}

.dashboard-hover-lift:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
```

### CTA Shimmer Effect
```css
@keyframes cta-shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.cta-shimmer {
  position: relative;
  overflow: hidden;
}

.cta-shimmer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
  animation: cta-shimmer 2.5s infinite;
  transform: translateX(-100%);
  z-index: 1;
}

.cta-shimmer:hover::before {
  animation-duration: 1s;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent);
}
```

### Animation Delays
```css
.animation-delay-100 { animation-delay: 0.1s; }
.animation-delay-200 { animation-delay: 0.2s; }
.animation-delay-300 { animation-delay: 0.3s; }
.animation-delay-400 { animation-delay: 0.4s; }
.animation-delay-500 { animation-delay: 0.5s; }
.animation-delay-600 { animation-delay: 0.6s; }
```

---

## Component Standards

### Design Principles

1. **OKLCH Color System**
   - Always use OKLCH color tokens for consistency across light/dark modes
   - Never use hardcoded hex colors except for specific status indicators
   - Use `oklch(from var(--token) l c h / opacity)` for transparency

2. **Glassmorphism**
   - Use `backdrop-filter: blur(8px)` for glass effects
   - Apply subtle transparency: 92-98% opacity for backgrounds
   - Add inset highlights: `inset 0 1px 0 rgba(255, 255, 255, 0.1)`

3. **Framer Motion**
   - Use for scroll-based reveals with `useInView`
   - Standard timing: 320ms with `cubic-bezier(.2,.9,.3,1)`
   - Stagger delays by 100ms for sequential animations

4. **Responsive Design**
   - Use `clamp()` for fluid typography
   - Mobile-first breakpoints: sm:640px, md:768px, lg:1024px, xl:1280px
   - Grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`

5. **Accessibility**
   - Always include ARIA labels for interactive elements
   - Focus visible states: `outline: 2px solid var(--ring)`
   - Keyboard navigation support (Tab, Esc, Arrow keys)
   - Color contrast ratio: minimum 4.5:1 for text

6. **Hover States**
   - Standard timing: `transition: all 200ms ease`
   - Lift effect: `transform: translateY(-2px)`
   - Shadow enhancement: increase shadow opacity/spread on hover
   - Scale: 1.02-1.03 for subtle growth

7. **Icon Containers**
   - Size: `w-10 h-10` (40px) for standard icons
   - Size: `w-14 h-14` (56px) for feature icons
   - Border radius: `rounded-lg` (0.5rem) or `rounded-xl` (0.75rem)
   - Background: Use feature-specific color with 10% opacity

### Common Component Patterns

#### Hero Section
```jsx
<Section background="gradient" padding="xl" className="hero-ambient">
  <SectionContent maxWidth="full">
    <div className="text-center space-y-6">
      <Badge variant="secondary" className="badge-subtle-gradient">
        Industry Solution
      </Badge>
      <h1 className="enterprise-headline">
        Your Main Headline
        <span className="block heading-brand-gradient mt-2">
          With Gradient Accent
        </span>
      </h1>
      <p className="enterprise-body max-w-2xl mx-auto">
        Supporting description text that provides context.
      </p>
      <div className="flex gap-4 justify-center">
        <Button className="clerk-cta-primary" size="lg">
          Primary Action
        </Button>
        <Button className="clerk-cta-ghost" size="lg">
          Secondary Action
        </Button>
      </div>
    </div>
  </SectionContent>
</Section>
```

#### Feature Card
```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
  className="clerk-glass-card p-6 hover:shadow-xl transition-all"
>
  <div className={`w-14 h-14 rounded-xl ${featureColor.iconBg} flex items-center justify-center mb-4`}>
    <Icon className={`w-7 h-7 ${featureColor.iconColor}`} />
  </div>
  <h3 className="text-xl font-bold text-foreground mb-2">
    Feature Title
  </h3>
  <p className="text-muted-foreground">
    Feature description text
  </p>
</motion.div>
```

#### Metric Card
```jsx
<div className="clerk-glass-card p-6">
  <div className="flex items-center justify-between mb-4">
    <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
      Metric Label
    </span>
    <Badge className="badge-subtle-active">
      Live
    </Badge>
  </div>
  <div className="text-4xl font-bold text-primary mb-2">
    $42,500
  </div>
  <div className="flex items-center gap-2 text-sm text-secondary">
    <ArrowUp className="w-4 h-4" />
    <span>+12.5% from last month</span>
  </div>
</div>
```

---

## Quick Reference: Most Common Classes

### Text
- Headlines: `enterprise-headline` or `text-display-2xl`
- Body: `enterprise-body` or `text-lg text-muted-foreground`
- Gradient: `heading-brand-gradient`

### Buttons
- Primary: `clerk-cta-primary`
- Secondary: `clerk-cta-secondary`
- Ghost: `clerk-cta-ghost`
- Gradient: `clerk-cta-light-gradient`

### Cards
- Glass: `clerk-glass-card`
- Premium: `stripe-glass-card`
- Dashboard: `dashboard-card-white`
- Feature: `feature-tile`

### Badges
- Gradient: `badge-subtle-gradient`
- Active: `badge-subtle-active`
- Standard: `clerk-inspired-badge`
- Success: `badge-success`

### Animations
- Fade up: `motion-fade-in-up-320`
- Scale in: `animate-scale-in`
- Hover lift: `hover-lift`
- Shimmer: `cta-shimmer`

### Spacing
- Small: `section-padding-sm` (py-12 md:py-16)
- Medium: `section-padding-md` (py-16 md:py-20)
- Large: `section-padding-lg` (py-20 md:py-24)
- XL: `section-padding-xl` (py-24 md:py-32)

---

## Usage Guidelines for V0

1. **Always specify industry theme** at the root:
   ```jsx
   <div className="accent-purple"> {/* for bars/nightlife */}
   ```

2. **Use semantic tokens** instead of direct color values:
   ```jsx
   // Good ✅
   <div className="bg-primary text-primary-foreground">

   // Bad ❌
   <div className="bg-[#0891b2] text-white">
   ```

3. **Apply consistent spacing**:
   ```jsx
   <Section background="muted" padding="lg">
     <SectionContent maxWidth="6xl">
       {/* Content */}
     </SectionContent>
   </Section>
   ```

4. **Use standard hover patterns**:
   ```jsx
   className="clerk-glass-card hover-lift transition-all duration-300"
   ```

5. **Include Framer Motion** for scroll reveals:
   ```jsx
   import { motion, useInView } from "framer-motion";

   <motion.div
     initial={{ opacity: 0, y: 20 }}
     animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
     transition={{ duration: 0.6 }}
   >
   ```

---

## Best Practices

✅ **DO:**
- Use OKLCH tokens exclusively
- Apply glassmorphism with backdrop-filter
- Use Framer Motion for animations
- Follow responsive grid patterns
- Include accessibility features
- Use semantic HTML and ARIA labels

❌ **DON'T:**
- Use hardcoded hex colors
- Skip hover states
- Forget mobile breakpoints
- Ignore dark mode support
- Use non-standard spacing
- Create custom colors without tokens

---

## Support & Resources

- **OKLCH Color Picker**: https://oklch.com
- **Framer Motion Docs**: https://www.framer.com/motion/
- **Tailwind CSS**: https://tailwindcss.com/docs
- **shadcn/ui**: https://ui.shadcn.com

---

**Last Updated**: 2025-10-24
**Version**: 2.0
**Maintained by**: OpsFlow Design Team
