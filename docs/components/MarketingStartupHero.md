# MarketingStartupHero Component

## Overview
A SOP-compliant marketing hero component designed for restaurant startup acceleration. Converts the original Hero68 design into restaurant operations-focused content while following all project standards.

## Features
✅ **SOP Compliance**: Single ambient element rule, OKLCH tokens, enterprise styling  
✅ **Industry Variants**: Restaurant, bar, and café content variations  
✅ **Marketing Playbook**: Clerk-inspired styling with brand gradients  
✅ **Responsive Design**: Mobile-first with progressive enhancement  

## Usage

### Basic Implementation
```tsx
import { MarketingStartupHero } from '@/components/shared/heroes';

export default function LandingPage() {
  return (
    <MarketingStartupHero 
      industry="restaurant"
      variant="bordered"
      showFeatures={true}
    />
  );
}
```

### Props Interface
```tsx
interface MarketingStartupHeroProps {
  industry?: 'restaurant' | 'bar' | 'cafe';     // Content variant
  variant?: 'default' | 'compact' | 'bordered'; // Layout style
  showFeatures?: boolean;                        // Show bottom features
  className?: string;                            // Additional classes
}
```

### Industry Variants

#### Restaurant (Default)
- Focus: Complete operations setup
- Timeline: 2-4 week implementation
- CTA: "Start your free trial"

#### Bar
- Focus: Bar management systems
- Timeline: 1-3 week implementation  
- CTA: "Start bar trial"

#### Café
- Focus: Streamlined café operations
- Timeline: 1-2 week implementation
- CTA: "Start café trial"

## SOP Compliance Features

### Single Ambient Element
- Only decorative sparkles when `variant="bordered"`
- Opacity reduced to 60% for subtlety
- No additional glows or effects

### Enterprise Styling Classes
- `clerk-cta-primary` for primary CTA
- `enterprise-icon-primary` for feature icons
- `text-brand-gradient` for hero title
- `surface-subtle-primary` for version badge

### Restaurant Operations Content
- Startup-focused messaging
- Implementation timelines
- Risk-free guarantees
- Operations consultant avatar

## Design Patterns

### Layout Structure
1. **Version Badge**: New feature announcement with hover effect
2. **Hero Title**: Brand gradient with restaurant focus
3. **Subtitle**: Value proposition for restaurant startups
4. **Dual CTAs**: Primary trial + secondary demo
5. **Features Grid**: Implementation details with icons

### Responsive Behavior
- Mobile: Stacked layout, full-width CTAs
- Tablet: Maintains spacing, optimized icons
- Desktop: Full layout with enhanced padding

## Integration Notes

### File Locations
- **Component**: `/components/shared/heroes/MarketingStartupHero.tsx`
- **Template**: `/templates/shadcn-components/processed/heroes/MarketingStartupHero.tsx`
- **Export**: Available in `/components/shared/heroes/index.ts`

### Dependencies
- Lucide React icons (Sparkles, Zap, DollarSign, Medal)
- shadcn/ui components (Button, Badge, Avatar)
- OKLCH token system
- Enterprise styling classes

## Conversion Notes

### Original Hero68 → MarketingStartupHero
- ✅ Maintained core layout structure
- ✅ Converted to restaurant operations focus
- ✅ Applied SOP styling classes
- ✅ Added industry content variants
- ✅ Enhanced with enterprise hover effects
- ✅ Preserved responsive behavior

### SOP Standards Applied
- **Naming**: MarketingStartupHero (purpose-first)
- **Content**: Restaurant operations focus
- **Styling**: OKLCH tokens + enterprise classes
- **Ambient**: Single sparkle decoration only
- **Typography**: Brand gradient for main heading
