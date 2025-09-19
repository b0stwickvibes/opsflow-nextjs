# DEVELOPMENT SOP — OpsFlow Restaurant Operations Platform

**The only file you need for daily development decisions.**

> **Core Principle:** Restaurant-first design with Stripe-level polish using our OKLCH token system and marketing playbook guidelines.

---

## Quick Decision Tree

**Creating something new?**
- Page → [Page Creation Protocol](#page-creation-protocol)
- Component → [Component Creation Protocol](#component-creation-protocol)
- Styling issue → [Brand Consistency Rules](#brand-consistency-rules)
- Import problem → [Import Standards](#import-standards)

---

## Brand Consistency Rules (OKLCH Token System)

### **Color System (Your Global CSS Tokens)**
```css
/* OKLCH SEMANTIC TOKENS - Use these exclusively */
--primary: var(--primary-700);           /* Restaurant blue for CTAs, links */
--secondary: var(--secondary-800);       /* Operations purple for secondary */
--muted: var(--base-50);                /* Subtle backgrounds */
--muted-foreground: var(--base-600);    /* Secondary text */
--border: var(--base-200);              /* Card borders, dividers */

/* RESTAURANT OPERATION COLORS (from your system) */
--surface-subtle-primary: color-mix(in oklch, var(--primary) 12%, var(--background) 88%);
--surface-subtle-secondary: color-mix(in oklch, var(--secondary) 12%, var(--background) 88%);
--surface-subtle-destructive: color-mix(in oklch, var(--destructive) 12%, var(--background) 88%);

/* BRAND GRADIENTS (from your globals) */
--brand-start: var(--primary-700);      /* Gradient start point */
--brand-end: var(--secondary-700);      /* Gradient end point */
```

### **Marketing Playbook Guidelines**
**CRITICAL - Follow these rules:**
- **1 ambient/glow element max per section** (hero icon or primary KPI)
- **2 ambient glows max per viewport** (never exceed this)
- **Monochrome-first:** Logos/illustrations mono by default, color on hover
- **Contrast pacing:** 1-2 hero elements with glow, everything else calm (outline/ghost)

### **Your Enterprise Card Classes**
```tsx
// ✅ USE YOUR BUILT CLASSES - Never create custom styles
<Card className="enterprise-card">              // Standard professional card
<Card className="enterprise-metric-card">       // Metrics with subtle glow  
<Card className="clerk-inspired-card">          // Interactive sections
<Card className="feature-tile">                 // Feature grids with hover
<Card className="marketing-card">               // Marketing/promotional content
<Card className="marketing-card-enhanced">      // Highlighted marketing features

// Surface variants (your glassmorphism system)
<div className="surface-subtle-primary">        // Primary theme surface
<div className="surface-subtle-secondary">      // Secondary theme surface  
<div className="surface-subtle-muted">          // Neutral surface
```

### **Your CTA System (Marketing Playbook)**
```tsx
// ✅ PRIMARY CTA - Your clerk-cta-primary class
<Button className="clerk-cta-primary cta-equal" size="lg">
  Start Free Trial
</Button>

// ✅ SECONDARY CTA - Outline style
<Button variant="outline" className="cta-equal" size="lg">
  Schedule Demo
</Button>

// Badge system (from your globals)
<Badge className="clerk-inspired-badge">New Feature</Badge>
<div className="icon-badge-ambient">          // For ambient hero icons only
<div className="roi-icon-brand">              // ROI icons with brand styling
```

### **Your Icon System (No Dynamic Classes)**
```tsx
// ✅ USE YOUR PREDEFINED CLASSES
<div className="enterprise-icon-primary">      // Primary theme icon wrapper
<div className="enterprise-icon-secondary">    // Secondary theme icon wrapper
<div className="enterprise-icon-accent">       // Accent theme icon wrapper
<div className="enterprise-icon-muted">        // Muted theme icon wrapper
<div className="marketing-icon-primary">       // Marketing content icon wrapper
<div className="marketing-icon-enhanced">      // Enhanced marketing feature icons

// ❌ NEVER do dynamic classes
<div className={`bg-${color}-500`}>  // Will break - your system uses CSS variables
```

---

## Component Creation Protocol

### **When to Create New vs. Edit Existing**

**Create New Component If:**
- Different business purpose (ProductHero vs. MarketingHero)
- Different layout family (Marketing vs. Product vs. Company)  
- Different data structure/props interface
- Different responsive behavior

**Edit Existing Component If:**
- Same purpose, just content changes
- Adding variant/prop to existing component
- Fixing bugs or improving performance
- Styling consistency updates

### **Naming Convention (Enforced)**
```typescript
// ✅ CORRECT - Purpose-first naming
RestaurantSolutionsHero.tsx     // Industry + purpose + component
ProductHACCPFeatures.tsx        // Domain + feature + component  
CompanyCareersListings.tsx      // Domain + purpose + component
MarketingTestimonials.tsx       // Layout family + component

// ❌ FORBIDDEN
Hero1.tsx, Hero2.tsx            // Numeric suffixes
GenericHero.tsx                 // Too vague
RestaurantHero.tsx              // Ambiguous purpose
```

### **Component Template (Your Styling System)**
```typescript
// components/domain/[domain]/ComponentName.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ComponentNameProps {
  variant?: 'default' | 'compact' | 'expanded';
  showMetrics?: boolean;
  energy?: 'subtle' | 'balanced' | 'bold';  // From your marketing playbook
}

/**
 * [Component purpose] - Restaurant operations focused
 * Used in: [specific pages]  
 * Domain: [business area]
 * Design: Uses enterprise styling system + marketing playbook
 */
export function ComponentName({ 
  variant = 'default',
  showMetrics = true,
  energy = 'balanced'
}: ComponentNameProps) {
  return (
    <section className={cn(
      "section-padding-large",
      energy === 'subtle' && "energy-subtle",
      energy === 'balanced' && "energy-balanced", 
      energy === 'bold' && "energy-bold"
    )}>
      <div className="container">
        <div className="text-center space-y-6">
          {/* Hero badge - only 1 ambient per section */}
          <Badge className="clerk-inspired-badge">
            Restaurant Operations
          </Badge>
          
          {/* Heading with your text gradient */}
          <h1 className="enterprise-headline">
            <span className="text-brand-gradient">Restaurant Operations</span>
          </h1>
          
          {/* Body text with your tokens */}
          <p className="enterprise-body max-w-3xl mx-auto">
            Reduce food waste by 30%, improve compliance scores by 95%
          </p>
          
          {/* CTA using your marketing system */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="clerk-cta-primary cta-equal" size="lg">
              Start Free Trial
            </Button>
            <Button variant="outline" className="cta-equal" size="lg">
              Schedule Demo  
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

## Page Creation Protocol

### **Page Structure Using Your System**
```typescript
// app/[section]/[page]/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Restaurant [Purpose] | OpsFlow',
  description: 'Restaurant operations [specific value prop]',
  keywords: 'restaurant management, [specific keywords]'
};

export default function PageName() {
  return (
    <>
      {/* Hero Section - 1 ambient element max */}
      <IndustryHero energy="balanced" showAmbientIcon={true} />
      
      {/* Features Section - No ambient, use feature-tile class */}
      <IndustryFeatures />
      
      {/* Metrics Section - 1 ambient KPI max per marketing playbook */}
      <MetricsShowcase highlightedMetric="compliance" />
      
      {/* Social Proof - No ambient, calm styling */}
      <RestaurantTestimonials />
      
      {/* FAQ - Clean, professional */}
      <OperationsFAQ industry="restaurant" />
      
      {/* CTA - Primary CTA gets clerk-cta-primary */}
      <MarketingCTA variant="trial" />
    </>
  );
}
```

### **Layout Family System (Your Architecture)**
```typescript
// Choose layout family from your established patterns:
Marketing: Homepage, Pricing → MarketingHero, hero-ambient backgrounds
Product: Features, Demo → ProductHero, enterprise-card layouts
Solution: Industries, Roles → SolutionHero, feature-tile grids  
Company: About, Contact → CompanyHero, clean professional styling
```

### **Section Component System (Full-Width Layouts)**
**CRITICAL: Always use Section components instead of container-based layouts**

```tsx
// ✅ CORRECT - Full-width Section system
import { Section, SectionContent } from "@/components/shared/layout";

export default function Page() {
  return (
    <div>
      {/* Hero Section */}
      <Section background="gradient" padding="xl">
        <SectionContent maxWidth="4xl" align="center">
          <h1>Your Content</h1>
        </SectionContent>
      </Section>
      
      {/* Content Section */}
      <Section background="muted" padding="lg">
        <SectionContent maxWidth="6xl">
          <div className="grid gap-6 md:grid-cols-3">
            {/* Your content */}
          </div>
        </SectionContent>
      </Section>
    </div>
  );
}

// ❌ WRONG - Container-based boxed layouts
<div className="container mx-auto px-4 py-16">  // Creates boxed appearance
  <YourContent />
</div>

// ❌ WRONG - Manual section styling  
<section className="bg-muted/30 py-16">        // Inconsistent with system
  <div className="container mx-auto px-4">
    <YourContent />
  </div>
</section>
```

**Section Background Options:**
- `background="default"` - Clean white/dark background
- `background="muted"` - Subtle gray background
- `background="gradient"` - Brand gradient background
- `background="radial"` - Radial gradient (corner-based)
- `background="none"` - Transparent background

**Section Padding Options:**
- `padding="none"` - No padding (for headers, footers)
- `padding="sm"` - Small padding (py-8)
- `padding="lg"` - Standard padding (py-16 lg:py-20)
- `padding="xl"` - Large padding (py-20 lg:py-32)

**Why Section Components:**
- **Full-width backgrounds** extend to screen edges
- **Consistent spacing** across all pages
- **Professional appearance** vs boxed container look
- **Responsive by default** with proper breakpoint handling
- **Theme-aware** backgrounds work with dark/light modes

**Component Integration Pattern:**
```tsx
// ✅ CORRECT - Wrap content components in SectionContent
<Section background="muted" padding="lg">
  <SectionContent maxWidth="4xl">
    <FAQSection />
    <ContactForm />
    <ProductGrid />
  </SectionContent>
</Section>

// ❌ WRONG - Components managing their own containers
<Section>
  <ComponentWithInternalContainer />  // Creates nested containers
</Section>
```

### **Template Component Conversion Standards**

**Converting Template Components to Section-Compatible:**

```tsx
// ❌ OLD TEMPLATE PATTERN - Has internal section/container
export function MyComponent() {
  return (
    <section className="section-marketing">
      <div className="container">
        <h2>My Content</h2>
        <div className="grid gap-6">
          {/* content */}
        </div>
      </div>
    </section>
  );
}

// ✅ NEW SECTION-COMPATIBLE PATTERN
export function MyComponent({ className }: { className?: string }) {
  return (
    <div className={className}>
      <h2>My Content</h2>
      <div className="grid gap-6">
        {/* content */}
      </div>
    </div>
  );
}

// Usage in pages:
<Section background="muted" padding="lg">
  <SectionContent maxWidth="6xl">
    <MyComponent />
  </SectionContent>
</Section>
```

**Template Component Checklist:**
- ❌ Remove `<section>` wrapper tags
- ❌ Remove `container` classes
- ❌ Remove `section-marketing` classes  
- ✅ Accept `className` prop for additional styling
- ✅ Return content directly wrapped in `<div className={className}>`
- ✅ Keep all internal content structure intact
- ✅ Maintain responsive grid classes and spacing

### **Marketing Playbook Compliance**
- **Hero blocks:** Heading gradient + 1 ambient badge max + primary CTA shimmer
- **Feature grids:** 3-4 up layouts, ambient only for 1 highlighted tile
- **Metrics:** 1 lead metric ambient, rest outline/ghost styling
- **Integrations:** Monochrome logos, hover reveals color, 1 featured partner ambient

---

## Shadcn Component Usage + Your Enhancements

### **Available UI Primitives**
```typescript
// Use shadcn directly, then apply your enterprise classes
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"  
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

// Apply your styling system to shadcn components
<Card className="enterprise-card">
  <CardHeader>
    <CardTitle className="text-brand-gradient">HACCP Compliance</CardTitle>
  </CardHeader>
  <CardContent className="space-y-4">
    <Badge className="clerk-inspired-badge">Automated</Badge>
  </CardContent>
</Card>
```

### **Your Motion System (From Globals)**
```tsx
// Use your built-in animation classes
<div className="motion-fade-in-up-320">        // 320ms springy fade-up
<div className="animate-fade-in-up">           // Entrance animation
<div className="hover-scale-103">              // Hover scale effect
<div className="tile-hover">                   // Card hover with lift + glow

// Marketing playbook motion specs (180-220ms hover)
<Card className="feature-tile tile-hover">     // Your feature tile system
```

### **Your Background System**
```tsx
// Use your gradient/ambient system from globals
<section className="hero-ambient energy-balanced">  // Hero with ambient glow
<section className="section-marketing">             // Marketing section wrapper
<div className="bg-brand-gradient">                 // Brand gradient background  
<div className="bg-grid-pattern">                   // Subtle grid pattern
```

---

## Import Standards

### **Import Order (Your Architecture)**
```typescript
// 1. React/Next.js
import { useState } from 'react';
import type { Metadata } from 'next';

// 2. External libraries  
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

// 3. UI components (shadcn)
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// 4. Domain components (use your barrel exports)
import { RestaurantHero } from "@/components/domain/industries/restaurants";
import { MarketingCTA } from "@/components/shared/layout";

// 5. Utils and types
import { type RestaurantSolutionsProps } from '@/types/restaurant';
```

### **Component Enhancement Strategy**
1. **Start with shadcn component**
2. **Apply your enterprise styling classes**  
3. **Add restaurant context/content**
4. **Follow marketing playbook guidelines**
5. **Wrap only if reused 3+ times**

---

## Restaurant Content Requirements

### **Terminology Standards**
- **Operations:** Kitchen operations, front-of-house, back-of-house
- **Compliance:** HACCP, food safety, health inspections, audit trails
- **Efficiency:** Temperature monitoring, waste reduction, inventory tracking
- **Management:** Staff scheduling, training compliance, performance analytics

### **Metrics Focus**
- **Temperature:** Cold storage, hot holding, cooking temperatures
- **Compliance:** HACCP scores, inspection readiness, violation tracking
- **Efficiency:** Food waste reduction %, labor cost optimization
- **Quality:** Customer satisfaction, order accuracy, service speed

### **Use Cases (Real Restaurant Scenarios)**
- Morning prep checklists and temperature logs
- Peak hour staff coordination and task management
- End-of-day inventory and waste tracking
- Health inspection preparation and documentation

---

## Quality Gates

### **Pre-Commit Checklist**
```bash
✅ Component Standards:
- [ ] Uses OKLCH token system (no custom colors)
- [ ] Follows marketing playbook (1 ambient per section max)
- [ ] Enterprise styling classes applied correctly
- [ ] Restaurant operations terminology throughout
- [ ] Mobile-responsive with your responsive classes
- [ ] Motion specs follow your system (180-220ms hover)

✅ Code Quality:
- [ ] PascalCase filename matches export name
- [ ] JSDoc comment with purpose and usage
- [ ] TypeScript interfaces properly defined
- [ ] No console.log or TODO comments
- [ ] Imports use your barrel export system
```

### **Marketing Playbook Validation**
```bash
✅ Visual Hierarchy:
- [ ] Only 1 ambient/glow element per section
- [ ] Maximum 2 ambient elements visible per viewport
- [ ] Primary CTA uses clerk-cta-primary class
- [ ] Secondary CTAs use outline variant
- [ ] Monochrome logos with hover color reveal

✅ Your Styling System:
- [ ] enterprise-card or feature-tile classes used
- [ ] surface-subtle-* variants for themed backgrounds
- [ ] text-brand-gradient for headings
- [ ] energy variants (subtle/balanced/bold) applied correctly
```

### **Build Validation**
```bash
# Run your project's quality checks
npm run enforce:all                    # Your filename + dependency validation
npx tsc -p tsconfig.json --noEmit     # TypeScript compilation
npm run build                         # Next.js build validation
```

---

## Restaurant Context Deep Dive

### **Industry-Specific Language**
```typescript
// ✅ Restaurant operations terminology
"Reduce food waste by 30% through intelligent temperature monitoring"
"Streamline HACCP compliance with automated audit trails"  
"Optimize kitchen workflows during peak dinner rush"
"Track critical control points for health inspections"

// ❌ Generic business language
"Improve operational efficiency"
"Streamline business processes"
"Optimize workflows"
```

### **Visual Context**
- **Colors:** Use your temp monitoring colors (temp-cold: #3b82f6, temp-hot: #ef4444)
- **Icons:** Kitchen equipment, thermometers, clipboards, chef hats
- **Imagery:** Restaurant kitchens, staff in action, food preparation
- **Metrics:** Temperature readings, compliance percentages, time savings

---

## Success Criteria

### **Visual Quality**
- Matches Stripe.com design standards using your styling system
- Consistent use of OKLCH tokens throughout
- Marketing playbook guidelines followed (ambient restrictions)
- Professional restaurant context maintained

### **Technical Quality**  
- Uses your established component architecture
- Follows your import/export patterns
- Builds successfully with no TypeScript errors
- Performance optimized with your motion system

### **Business Impact**
- Clear restaurant operations value proposition
- Industry-specific terminology and use cases
- Compelling calls-to-action using your CTA system
- Professional credibility for restaurant industry

---

**Bottom Line:** Use your built styling system, follow the marketing playbook, maintain restaurant focus. When in doubt, check this SOP first.

**File Updates:** When adding new protocols, update this file only. No new .md files.

### **Template vs. Shared Component Usage**

**CRITICAL: Template Components for Visual Work**
```typescript
// ✅ USE TEMPLATE COMPONENTS for visually editable work
import { EarningHero } from "@/templates/shadcn-components/processed/heroes";
import { FeatureBento } from "@/templates/shadcn-components/processed/features";

// These components are:
// - Visually accessible in UI sink templates page
// - Directly editable and testable
// - The source of truth for styling updates
// - Used when you need to see immediate visual changes
```

**Shared Components for Production**
```typescript
// ✅ USE SHARED COMPONENTS for final production pages (when stable)
import { EarningHero } from "@/components/shared/heroes";
import { FeatureBento } from "@/components/shared/features";

// These components are:
// - Stable, production-ready versions
// - Used in final page implementations
// - Copied from templates after visual refinement
```

**Development Workflow:**
1. **Visual Design**: Use `/templates/` components for UI work and styling
2. **Testing**: Preview changes in `/ui-sink/templates` page
3. **Production**: Import template components directly in pages for immediate use
4. **Optional**: Copy to `/components/shared/` when component is stable
