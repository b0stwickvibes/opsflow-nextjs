# Template Component Quick Reference

## 🚨 CRITICAL RULE: Never Duplicate Page Structures

**❌ WRONG**: Copy restaurant page for every industry  
**✅ CORRECT**: Use diverse template combinations per industry

## Available Template Library

### Heroes (`/templates/shadcn-components/processed/heroes/`)
- `ImpactHero` - Bold impact statements, metrics focus
- `WorkflowHero` - Process/workflow visualization  
- `SplitScreenHero` - Dual focus (guest vs operations)
- `CarouselHero` - Multiple messages/features carousel
- `ProductivityHero` - Efficiency/performance focus
- `BillingHero` - ROI/profit/financial focus
- `FormHero` - Lead capture/demo request focus
- `EliteAccessHero` - Exclusivity/premium positioning
- `EarningHero` - Revenue/growth focus

### Features (`/templates/shadcn-components/processed/features/`)
- `FeatureGrid` - Traditional grid layout
- `FeatureBento` - Compact bento box layout
- `FeatureMatrix` - Comparison matrix format
- `FeatureSplit` - Side-by-side comparison
- `FeatureTimeline` - Process timeline view
- `FeatureAccordion` - Expandable sections
- `FeatureComparison` - Direct feature comparison
- `FeatureCards` - Card-based layout
- `FeatureCarousel` - Scrollable feature showcase
- `FeatureHighlight` - Prominent feature focus
- `FeatureList` - Simple list format
- `FeatureShowcase` - Interactive showcase
- `FeatureTabs` - Tabbed organization

### Stats (`/templates/shadcn-components/processed/stats/`)
- `KPIShowcase` - Key performance indicators
- `MetricsDashboard` - Complex enterprise metrics
- `StatsDisplay` - Simple statistics presentation

### CTAs (`/templates/shadcn-components/processed/ctas/`)
- `CallToAction` - Standard CTA section
- `DemoRequest` - Demo-focused CTA
- `TrialSignup` - Trial/signup focused

## Industry-Template Mapping

### Coffee Shops (Speed/Efficiency Focus)
```typescript
import { WorkflowHero } from '@/templates/shadcn-components/processed/heroes';
import { FeatureBento, FeatureTimeline } from '@/templates/shadcn-components/processed/features';  
import { KPIShowcase } from '@/templates/shadcn-components/processed/stats';
```

### Hotels (Enterprise/Multi-venue Focus)
```typescript
import { SplitScreenHero } from '@/templates/shadcn-components/processed/heroes';
import { FeatureComparison, FeatureTabs } from '@/templates/shadcn-components/processed/features';
import { MetricsDashboard } from '@/templates/shadcn-components/processed/stats';
```

### Bars (Compliance/Inventory Focus)
```typescript
import { ImpactHero } from '@/templates/shadcn-components/processed/heroes';
import { FeatureMatrix, FeatureAccordion } from '@/templates/shadcn-components/processed/features';
import { StatsDisplay } from '@/templates/shadcn-components/processed/stats';
```

### Restaurant Owners (ROI Focus)
```typescript
import { BillingHero } from '@/templates/shadcn-components/processed/heroes';
import { FeatureSplit, FeatureHighlight } from '@/templates/shadcn-components/processed/features';
import { KPIShowcase } from '@/templates/shadcn-components/processed/stats';
```

## Selection Decision Tree

### 1. Primary Industry Focus?
- **Speed/Efficiency** → WorkflowHero + FeatureTimeline + KPIShowcase
- **ROI/Profit** → BillingHero + FeatureSplit + KPIShowcase  
- **Compliance/Safety** → SplitScreenHero + FeatureAccordion + StatsDisplay
- **Technology/Integration** → CarouselHero + FeatureMatrix + IntegrationGrid
- **Enterprise/Scale** → ImpactHero + FeatureComparison + MetricsDashboard

### 2. Message Complexity?
- **Simple/Clear** → 3-4 sections with FeatureCards, CallToAction
- **Moderate** → 4-5 sections with FeatureTabs, TestimonialCarousel  
- **Complex** → 5-6 sections with FeatureAccordion, FeatureComparison, MetricsDashboard

### 3. Decision-Making Process?
- **Quick Decision** → ImpactHero + FeatureCards + CallToAction
- **Comparison Shopping** → SplitScreenHero + FeatureComparison + PricingTable
- **Complex Evaluation** → CarouselHero + FeatureTabs + MetricsDashboard + TestimonialGrid

## Quality Checklist

Before completing any industry page:
- [ ] Different hero type than other pages
- [ ] Different feature layout combination  
- [ ] Different stats/metrics presentation
- [ ] Layout reflects industry workflow
- [ ] Content authentically industry-specific
- [ ] All template imports resolve correctly

## Common Import Pattern

```typescript
import type { Metadata } from 'next';

// Use diverse templates - never duplicate structures
import { [HeroType] } from '@/templates/shadcn-components/processed/heroes';
import { [FeatureType1], [FeatureType2] } from '@/templates/shadcn-components/processed/features';
import { [StatsType] } from '@/templates/shadcn-components/processed/stats';
import { [CTAType] } from '@/templates/shadcn-components/processed/ctas';

// Shared components for consistency
import { FAQSection } from '@/components/shared/data-display';

export default function IndustryPage() {
  return (
    <>
      <HeroType 
        industry="specific-industry"
        // Industry-specific props
      />
      <FeatureType1 
        // Industry-adapted content
      />
      <FeatureType2 
        // Different layout approach
      />
      <StatsType 
        // Industry-relevant metrics
      />
      <FAQSection industry="specific" role="general" />
      <CTAType 
        // Industry-appropriate CTA
      />
    </>
  );
}
```

---

**Remember**: Template diversity is not optional - it's critical for creating authentic industry experiences that convert users rather than confuse them with identical layouts.