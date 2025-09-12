# OpsFlow Brand Imaging Guide

## Core Brand Visual Identity

### Color Palette
- **Primary Blues**: Professional, trustworthy, tech-forward
  - Deep Blue: `#1e40af` (brand primary)
  - Steel Blue: `#475569` (secondary)
  - Light Blue: `#e0f2fe` (backgrounds)
- **Neutrals**: Clean, professional environments
  - Stainless Steel: `#94a3b8` (kitchen equipment)
  - Pure White: `#ffffff` (cleanliness, safety)
  - Warm Gray: `#64748b` (text, shadows)
- **Accent Colors**: 
  - Success Green: `#16a34a` (compliance, completed tasks)
  - Warning Amber: `#d97706` (alerts, attention)
  - Error Red: `#dc2626` (violations, critical issues)

### Photography Style Tokens

#### Lighting
- **Type**: Soft, diffused commercial lighting
- **Direction**: 45-degree key light with fill
- **Shadows**: Minimal harsh shadows, maintain detail in dark areas
- **Temperature**: Cool white (5500K-6500K) for commercial authenticity

#### Composition Rules
- **Hero Images (16:9)**: Left or right third negative space for text overlay
- **Feature Cards (1:1)**: Centered subject, 10-12% safe margins
- **Device Close-ups (4:3)**: 5-8% bezel visible around screens
- **Environmental Shots**: Wide establishing, mid interaction, tight detail

#### Lens & Aperture Settings
- **Environmental**: 24-35mm, f/5.6 (sharp throughout)
- **Portraits**: 50-85mm, f/2.0-2.8 (shallow depth of field)
- **Product/Device**: 50mm macro, f/4 (crisp details)
- **Wide Establishing**: 16-24mm, f/8 (maximum sharpness)

### Subject Guidelines

#### Staff Representation
- **Diversity**: Gender, age, ethnicity across image sets
- **Wardrobe**: Clean chef coats, aprons, hairnets where appropriate
- **Posture**: Professional, confident, focused on tasks
- **Interactions**: Genuine teamwork, not staged poses

#### Environment Standards
- **Cleanliness**: Spotless commercial kitchens, organized workspaces
- **Equipment**: Modern stainless steel, professional-grade only
- **Technology**: Unbranded tablets/monitors with neutral interfaces
- **Organization**: Everything in place, systematic workflows visible

#### Device Integration
- **Screen Content**: Generic dashboards, charts, checklists (no branded UI)
- **Positioning**: Natural tablet/device placement in workflow
- **Interaction**: Realistic hand positions, authentic usage scenarios
- **Integration**: Technology as workflow enabler, not dominant focus

## AI Generation Specifications

### Global Prompt Structure
```
[Scene Description] + [Technical Specs] + [Brand Tokens] + [Negative Prompts]
```

### Brand Tokens (Reuse in Every Prompt)
```
professional commercial kitchen, stainless steel equipment, clean organized environment, soft diffused lighting, modern restaurant operations, diverse staff in uniforms, premium SaaS aesthetic
```

### Technical Specs by Format
- **Hero (16:9)**: `--ar 16:9 24-35mm lens f/5.6 negative space left third`
- **Card (1:1)**: `--ar 1:1 50mm lens f/4 centered composition safe margins`
- **Feature (4:3)**: `--ar 4:3 50-85mm lens f/2.8 focused subject`

### Universal Negative Prompts
```
no logos, no brand marks, no watermarks, no text artifacts, no deformed hands, no extra fingers, no duplicated faces, no motion blur on faces, no home kitchen props, no messy environments, no cluttered spaces, no branded equipment, no third-party vendor logos
```

### Device Screen Rules
```
clean neutral UI, generic operational interfaces, legible but non-specific elements, no copyrighted software, no recognizable third-party applications
```

## Midjourney Implementation

### Style Reference Setup
Use consistent style references across all generations:
1. **Primary Style Ref**: Clean commercial kitchen with proper lighting
2. **Secondary Style Ref**: Professional staff interaction with technology
3. **Tertiary Style Ref**: Modern restaurant operational environment

### Seed Strategy
- **Image Sets**: Use same seed for related images (hero + cards)
- **Collections**: Change seed between different page/section needs
- **Variations**: Increment seed by 1 for slight variations

### Sample Prompts

#### Hero Image
```
modern commercial kitchen diverse chef team using mounted tablets showing operational dashboards, organized stainless steel workstations, professional lighting, 24-35mm lens f/5.6, negative space left third, professional commercial kitchen, soft diffused lighting --sref [style_ref] --seed 12345 --ar 16:9 --v 6.1 no logos, no brand marks, no watermarks, no deformed hands, no home kitchen props
```

#### Feature Card
```
close-up hands using tablet in commercial kitchen showing temperature monitoring interface, stainless steel background, 50mm macro f/4, centered composition, professional commercial kitchen aesthetic --sref [style_ref] --seed 12346 --ar 1:1 --v 6.1 no vendor logos, no text artifacts, no branded interfaces
```

#### Staff Portrait
```
professional restaurant manager in clean uniform reviewing operational reports, confident pose, 85mm lens f/2.8, soft portrait lighting, modern commercial environment background --sref [style_ref] --seed 12347 --ar 4:3 --v 6.1 no logos, no watermarks, no cluttered background
```

## Post-Processing Workflow

### Color Grading (Apply to All Images)
- **Shadows**: Lift +15 (maintain detail)
- **Highlights**: -10 (prevent blown whites)
- **Saturation**: -5 (modern, slightly desaturated look)
- **Blues**: +10 saturation (brand color emphasis)
- **Temperature**: Cool bias (+200K for commercial feel)

### Sharpening Standards
- **Amount**: 50-70 (crisp but natural)
- **Radius**: 1.0-1.2 
- **Detail**: 25 (preserve textures)
- **Masking**: 80 (protect smooth areas)

### Export Specifications
- **Master**: TIFF 16-bit, sRGB, 300 DPI
- **Web Delivery**: WebP, 72 DPI, quality 85
- **Backup**: AVIF for Next.js optimization

## File Organization

### Naming Convention (kebab-case)
- **Heroes**: `restaurant-ops-hero-01.webp`
- **Cards**: `tablet-checklist-card-01.webp`
- **Features**: `haccp-compliance-feature-01.webp`
- **Portraits**: `restaurant-manager-portrait-01.webp`

### Folder Structure
```
public/images/
├── marketing/
│   ├── heroes/           # 16:9 homepage/landing heroes
│   ├── cards/            # 1:1 feature/benefit cards
│   ├── carousels/        # Various aspect ratios for sliders
│   └── backgrounds/      # Subtle background textures
├── industries/
│   ├── restaurants/      # Restaurant-specific imagery
│   ├── coffee/           # Coffee shop focus
│   ├── bars/             # Bar/nightlife content
│   └── hotels/           # Hotel/hospitality images
├── features/
│   ├── dashboard/        # Dashboard screenshots (later)
│   ├── mobile/           # Mobile app screenshots
│   └── integrations/     # POS/system integration visuals
├── team/
│   └── avatars/          # Team member photos
└── ui/
    ├── icons/            # Custom icon photography
    └── devices/          # Device mockups for overlays
```

## Device Screen Mockup Process

### Figma Template Structure
1. **Base Device**: Neutral tablet/monitor frame
2. **Screen Layer**: Rectangle with subtle glare gradient
3. **UI Overlay**: Smart object for easy content swapping
4. **Reflection Layer**: Realistic screen reflection effect

### Photoshop Composite Workflow
1. **Import**: AI-generated image with neutral device screen
2. **Create UI**: Export OpsFlow interface from Figma as PNG
3. **Transform**: Perspective transform to match device angle
4. **Blend**: Screen or Linear Dodge mode for realistic integration
5. **Enhance**: Add subtle glare gradient over screen surface
6. **Finalize**: Apply brand color grading preset

### Screen Content Guidelines
- **Temperature Dashboards**: Blue/red color coding for hot/cold
- **Task Checklists**: Green checkmarks, clear typography
- **Compliance Reports**: Professional charts, minimal data density
- **Staff Schedules**: Clean grid layouts, easy readability

## Brand Consistency Checklist

### Before Generation
- [ ] Style reference URLs loaded
- [ ] Seed number selected for consistency
- [ ] Brand tokens included in prompt
- [ ] Negative prompts applied
- [ ] Technical specifications set

### After Generation
- [ ] Colors align with brand palette
- [ ] Lighting feels professional and commercial
- [ ] No unintended logos or branded elements
- [ ] Composition supports text overlay needs
- [ ] Image tells restaurant operations story

### Before Deployment
- [ ] Color grading preset applied
- [ ] WebP/AVIF formats generated
- [ ] Alt text written with context
- [ ] File naming convention followed
- [ ] Assets added to marketing manifest

## Usage in Components

### Import from Manifest (Not Direct Paths)
```typescript
import { marketingAssets } from '@/lib/assets/marketing';

// Use structured imports
<Image
  src={marketingAssets.heroes.restaurantOps.src}
  alt={marketingAssets.heroes.restaurantOps.alt}
  width={1920}
  height={1080}
/>
```

### Responsive Image Strategy
- **Hero**: Use Next.js `fill` with `object-cover`
- **Cards**: Fixed aspect ratio with responsive container
- **Features**: Responsive width with maintained aspect ratio

This guide ensures every generated image reinforces OpsFlow's professional restaurant operations positioning while maintaining visual consistency across all marketing materials.
