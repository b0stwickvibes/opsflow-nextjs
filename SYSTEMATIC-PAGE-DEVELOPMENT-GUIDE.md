# Systematic Page Development Guide — OpsFlow NextJS Navigation Completion

**Implementation Date:** September 4, 2025  
**Protocol Compliance:** PROJECT-STANDARDS.md, ENTERPRISE-FILE-STRUCTURE.md, SAAS-FILE-STRUCTURE-STANDARD.md  
**Design System:** OKLCH color system, Stripe.com inspired styling, shadcn/ui primitives  

---

## Prerequisites

**⚠️ CRITICAL:** Complete `ENTERPRISE-SCALABILITY-AUDIT.md` cleanup first. This guide assumes clean architectural foundations.

**Required Standards Compliance:**
- ✅ Domain-driven structure (`components/domain/*`, `components/shared/*`)
- ✅ PascalCase component files and symbols  
- ✅ No numeric naming (`Hero1`, `Stats9`, `PageV3`)
- ✅ Barrel exports for domain imports
- ✅ OKLCH color system integration
- ✅ Stripe.com design language patterns

---

## Page Development Framework

### **Page Gap Analysis (14 Critical Pages Missing)**

#### **High-Impact Revenue Pages (7 pages)**
```bash
Priority 1 - Solutions by Industry:
/solutions/restaurants → components/domain/industries/restaurants/ (READY - 6 components)
/solutions/bars → components/domain/industries/bars/ (needs creation)
/solutions/coffee → components/domain/industries/coffee/ (needs creation)  
/solutions/hotels → components/domain/industries/hotels/ (needs creation)

Priority 2 - Solutions by Role:
/solutions/owners → components/domain/personas/owners/ (needs creation)
/solutions/managers → components/domain/personas/managers/ (needs creation)
/solutions/staff → components/domain/personas/kitchen/ + foh/ (needs creation)
```

#### **Product Education Pages (3 pages)**
```bash
Priority 3 - Core Product Features:
/product/haccp → components/domain/product/haccp/ (needs creation)
/product/audit → components/domain/product/audit/ (needs creation)
/product/reporting → components/domain/product/reporting/ (needs creation)
```

#### **Support & Growth Pages (4 pages)**
```bash
Priority 4 - Customer Success:
/resources/help → components/shared/data-display/ (help center)
/company/careers → components/domain/company/ (careers page)
/analytics → components/domain/analytics/ (internal dashboard)
/resources/docs → components/shared/data-display/ (public docs)
```

---

## Component Architecture Standards

### **Component Naming Protocol**

#### Required Naming Patterns
```typescript
// ✅ CORRECT: Purpose-first, domain-specific
RestaurantSolutionsHero.tsx     // Industry + purpose + component
ProductHACCPHero.tsx            // Domain + feature + component  
OwnersBenefitsGrid.tsx          // Persona + purpose + component
CompanyCareersListings.tsx      // Domain + purpose + component

// ❌ FORBIDDEN: Numeric, generic, ambiguous
Hero186.tsx                     // Numeric suffix
Hero.tsx                        // Too generic
RestaurantHero.tsx              // Ambiguous purpose
```

#### Domain Component Structure
```bash
# Standard component set per domain:
[Domain][Purpose]Hero.tsx           # Primary hero section
[Domain][Purpose]Features.tsx       # Feature grid/list
[Domain][Purpose]UseCases.tsx       # Use case scenarios
[Domain][Purpose]Benefits.tsx       # Value proposition
[Domain][Purpose]Testimonials.tsx   # Social proof
[Domain][Purpose]CTA.tsx            # Call to action
```

### **File Structure Template**

#### Industry Solutions Pattern
```typescript
// components/domain/industries/restaurants/RestaurantSolutionsHero.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface RestaurantSolutionsHeroProps {
  variant?: 'default' | 'compact' | 'expanded';
  showROI?: boolean;
}

/**
 * Restaurant industry solutions hero component
 * Used in: /solutions/restaurants page
 * Domain: Restaurant operations and management
 * Design: Stripe.com inspired layout with OKLCH colors
 */
export function RestaurantSolutionsHero({ 
  variant = 'default',
  showROI = true 
}: RestaurantSolutionsHeroProps) {
  return (
    <section className="section-padding bg-gradient-to-br from-background to-background/80">
      <div className="container">
        {/* Hero content following Stripe.com patterns */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge variant="outline" className="text-primary">
              Restaurant Operations
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
              Streamline Your{" "}
              <span className="text-gradient">Restaurant Operations</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Reduce food waste by 30%, improve compliance scores by 95%, 
              and boost profit margins with intelligent restaurant management.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-12">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg" className="h-12">
                Watch Demo
              </Button>
            </div>
          </div>
          
          {/* Visual element - dashboard preview, metrics, etc. */}
          <div className="relative">
            {/* Dashboard mockup or metrics visualization */}
          </div>
        </div>
      </div>
    </section>
  );
}
```

#### Product Feature Pattern
```typescript
// components/domain/product/haccp/ProductHACCPHero.tsx
"use client";

interface ProductHACCPHeroProps {
  showCompliance?: boolean;
  industryFocus?: 'restaurants' | 'hotels' | 'all';
}

/**
 * HACCP compliance product hero component  
 * Used in: /product/haccp page
 * Domain: Food safety and compliance
 * Features: Compliance tracking, audit trails, certification
 */
export function ProductHACCPHero({ 
  showCompliance = true,
  industryFocus = 'all' 
}: ProductHACCPHeroProps) {
  // Implementation following same pattern as above
  // Focus on compliance benefits, regulatory requirements
  // Include industry-specific messaging when industryFocus specified
}
```

---

## Design System Integration

### **OKLCH Color Usage**

#### Brand Color Implementation
```css
/* Following globals.css OKLCH system */
.text-gradient {
  background: linear-gradient(
    135deg,
    oklch(var(--primary)) 0%,
    oklch(var(--secondary)) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

.section-padding {
  @apply py-15 md:py-20 lg:py-24;
}

/* Hero backgrounds using OKLCH */
.hero-bg-light {
  background: linear-gradient(
    135deg,
    oklch(var(--background)) 0%,
    oklch(var(--background) / 0.8) 100%
  );
}

.hero-bg-dark {
  background: linear-gradient(
    135deg, 
    oklch(var(--background)) 0%,
    oklch(var(--muted) / 0.3) 100%
  );
}
```

#### Component Color Patterns
```typescript
// Standard color application following Stripe.com
const colorVariants = {
  primary: "text-primary bg-primary/10 border-primary/20",
  secondary: "text-secondary bg-secondary/10 border-secondary/20", 
  success: "text-green-600 bg-green-50 border-green-200",
  warning: "text-amber-600 bg-amber-50 border-amber-200",
} as const;

// Usage in components
<Badge className={colorVariants.primary}>
  New Feature
</Badge>
```

### **Stripe.com Design Language**

#### Typography Hierarchy
```typescript
// Following Stripe.com typography patterns
const typography = {
  h1: "text-4xl lg:text-6xl font-bold tracking-tight",
  h2: "text-3xl lg:text-4xl font-semibold tracking-tight",
  h3: "text-2xl lg:text-3xl font-medium",
  body: "text-base lg:text-lg text-muted-foreground leading-relaxed",
  caption: "text-sm text-muted-foreground",
} as const;
```

#### Layout Patterns
```typescript
// Standard Stripe.com inspired layouts
const layouts = {
  hero: "section-padding bg-gradient-to-br from-background to-background/80",
  features: "section-padding",
  testimonials: "section-padding bg-muted/30",
  cta: "section-padding bg-primary/5",
} as const;
```

#### Interactive Elements
```typescript
// Button patterns following Stripe design
<Button 
  size="lg" 
  className="h-12 px-8 text-base font-medium"
>
  Primary Action
</Button>

<Button 
  variant="outline" 
  size="lg" 
  className="h-12 px-8 text-base font-medium border-2"
>
  Secondary Action
</Button>
```

---

## Page Implementation Workflow

### **Phase 1: Quick Win - Restaurant Solutions (Week 1)**

#### Step 1: Route Creation
```bash
# Create route structure
mkdir -p app/solutions/restaurants
touch app/solutions/restaurants/page.tsx
touch app/solutions/restaurants/error.tsx
touch app/solutions/restaurants/loading.tsx
```

#### Step 2: Page Composition
```typescript
// app/solutions/restaurants/page.tsx
import { 
  RestaurantSolutionsHero,
  RestaurantFeatureGrid,
  RestaurantSuccessMetrics,
  FlowingFeatures,
  SecondaryFeatures,
  RestaurantPlatformExplorer
} from '@/components/domain/industries/restaurants';

import { MarketingCTA } from '@/components/shared/layout';
import { FAQSection } from '@/components/shared/data-display';

export default function RestaurantSolutionsPage() {
  return (
    <>
      <RestaurantSolutionsHero variant="expanded" showROI={true} />
      <RestaurantFeatureGrid />
      <RestaurantSuccessMetrics />
      <FlowingFeatures />
      <RestaurantPlatformExplorer />
      <SecondaryFeatures />
      <FAQSection 
        title="Restaurant Operations FAQ"
        category="restaurant"
      />
      <MarketingCTA 
        title="Ready to Transform Your Restaurant?"
        subtitle="Join 500+ restaurants reducing waste and increasing profits"
        primaryAction="Start Free Trial"
        secondaryAction="Schedule Demo"
      />
    </>
  );
}
```

#### Step 3: Metadata & SEO
```typescript
// app/solutions/restaurants/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Restaurant Operations Management | OpsFlow',
  description: 'Reduce food waste by 30%, improve compliance by 95%. Complete restaurant management platform for modern restaurant operations.',
  keywords: 'restaurant management, food waste reduction, HACCP compliance, restaurant operations',
  openGraph: {
    title: 'Restaurant Operations Management | OpsFlow',
    description: 'Reduce food waste by 30%, improve compliance by 95%',
    images: '/images/og/restaurant-solutions.png',
  },
};
```

### **Phase 2: Industry Expansion (Week 2)**

#### Template-Based Approach
```bash
# Create industry variants using restaurant template
npm run create:industry-page bars
npm run create:industry-page coffee  
npm run create:industry-page hotels

# This would generate:
# app/solutions/bars/page.tsx
# components/domain/industries/bars/[Bar]*.tsx
# Following exact naming and structure patterns
```

#### Industry-Specific Customization
```typescript
// components/domain/industries/bars/BarSolutionsHero.tsx
export function BarSolutionsHero() {
  return (
    <section className="section-padding hero-bg-light">
      <div className="container">
        <div className="text-center space-y-6">
          <Badge variant="outline" className="text-primary">
            Bar & Nightlife Operations
          </Badge>
          
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
            Optimize Your{" "}
            <span className="text-gradient">Bar Operations</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Increase pour accuracy by 40%, reduce inventory shrinkage by 60%, 
            and streamline compliance for bars and nightlife venues.
          </p>
          
          {/* Bar-specific metrics, use cases, visuals */}
        </div>
      </div>
    </section>
  );
}
```

### **Phase 3: Product Features (Week 3)**

#### HACCP Compliance Page
```typescript
// app/product/haccp/page.tsx
import {
  ProductHACCPHero,
  HACCPComplianceGrid, 
  HACCPAuditTrail,
  HACCPCertifications,
  HACCPIndustrySupport
} from '@/components/domain/product/haccp';

export default function ProductHACCPPage() {
  return (
    <>
      <ProductHACCPHero showCompliance={true} />
      <HACCPComplianceGrid />
      <HACCPAuditTrail />
      <HACCPCertifications />
      <HACCPIndustrySupport />
      {/* Standard CTA and FAQ sections */}
    </>
  );
}
```

#### Component Implementation
```typescript
// components/domain/product/haccp/ProductHACCPHero.tsx
export function ProductHACCPHero() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <Badge variant="outline" className="text-primary">
              HACCP Compliance
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
              Automated{" "}
              <span className="text-gradient">HACCP Compliance</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Maintain perfect food safety records with automated temperature monitoring, 
              compliance reporting, and audit trail management.
            </p>
          </div>
          
          {/* Compliance metrics visualization */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-green-600">95%</div>
              <div className="text-sm text-muted-foreground">Compliance Score</div>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-blue-600">24/7</div>
              <div className="text-sm text-muted-foreground">Monitoring</div>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-purple-600">Zero</div>
              <div className="text-sm text-muted-foreground">Manual Logs</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

## Content Strategy Framework

### **Industry-Specific Messaging**

#### Restaurant Solutions Messaging
```typescript
const restaurantMessaging = {
  hero: {
    headline: "Streamline Your Restaurant Operations",
    subheadline: "Reduce food waste by 30%, improve compliance scores by 95%",
    benefits: ["Food waste reduction", "HACCP compliance", "Inventory optimization"]
  },
  
  painPoints: [
    "High food costs eating into margins",
    "Complex compliance requirements", 
    "Inventory tracking chaos",
    "Staff training inconsistencies"
  ],
  
  solutions: [
    "Automated temperature monitoring",
    "Real-time inventory tracking", 
    "Compliance audit trails",
    "Staff performance analytics"
  ]
};
```

#### Bar Solutions Messaging
```typescript
const barMessaging = {
  hero: {
    headline: "Optimize Your Bar Operations", 
    subheadline: "Increase pour accuracy by 40%, reduce shrinkage by 60%",
    benefits: ["Pour control", "Inventory management", "Staff accountability"]
  },
  
  painPoints: [
    "Liquor inventory shrinkage",
    "Inconsistent pour sizes",
    "Complex liquor licensing",
    "Peak hour staff management"
  ]
};
```

### **Product Feature Messaging**

#### HACCP Compliance
```typescript
const haccpMessaging = {
  hero: "Automated HACCP Compliance",
  value: "Maintain perfect food safety records effortlessly",
  
  features: {
    monitoring: "24/7 temperature monitoring with alerts",
    reporting: "Automated compliance reports and audit trails", 
    certification: "Support for FDA, USDA, and local health departments",
    integration: "Works with existing kitchen equipment"
  }
};
```

---

## SEO & Performance Optimization

### **Metadata Templates**

#### Industry Page Metadata
```typescript
// SEO metadata following best practices
export function generateIndustryMetadata(industry: string): Metadata {
  const industryData = {
    restaurants: {
      title: 'Restaurant Operations Management | OpsFlow',
      description: 'Reduce food waste by 30%, improve compliance by 95%. Complete restaurant management platform.',
      keywords: 'restaurant management, food waste, HACCP compliance, restaurant operations'
    },
    bars: {
      title: 'Bar Operations Management | OpsFlow', 
      description: 'Increase pour accuracy by 40%, reduce shrinkage by 60%. Complete bar management platform.',
      keywords: 'bar management, liquor inventory, pour control, bar operations'
    }
    // ... other industries
  };
  
  return {
    title: industryData[industry].title,
    description: industryData[industry].description,
    keywords: industryData[industry].keywords,
    openGraph: {
      title: industryData[industry].title,
      description: industryData[industry].description,
      images: `/images/og/${industry}-solutions.png`,
      type: 'website'
    }
  };
}
```

### **Performance Optimization**

#### Image Optimization
```typescript
// Standard image component following Next.js best practices
import Image from 'next/image';

export function OptimizedHeroImage({ 
  src, 
  alt, 
  industry 
}: OptimizedHeroImageProps) {
  return (
    <div className="relative aspect-video rounded-lg overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority={true}  // Hero images should load first
        sizes="(max-width: 768px) 100vw, 50vw"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ..."
      />
    </div>
  );
}
```

#### Bundle Optimization
```typescript
// Dynamic imports for non-critical components
import { lazy } from 'react';

const HeavyChart = lazy(() => 
  import('@/components/shared/data-display/HeavyChart')
);

const TestimonialsCarousel = lazy(() =>
  import('@/components/shared/data-display/TestimonialsCarousel')
);
```

---

## Quality Assurance Protocol

### **Pre-Deployment Checklist**

#### Component Quality Gates
```bash
✅ Component Creation Checklist:
- [ ] PascalCase filename and symbol name
- [ ] No numeric suffixes in names
- [ ] JSDoc comment with purpose and usage
- [ ] Props interface defined with TypeScript
- [ ] Responsive design implementation
- [ ] OKLCH color system usage
- [ ] Accessibility attributes (alt text, ARIA labels)
- [ ] Loading states for async content
- [ ] Error boundaries where appropriate
- [ ] SEO-friendly semantic HTML structure
```

#### Page Quality Gates
```bash
✅ Page Implementation Checklist:
- [ ] Route created in correct app/ directory
- [ ] Metadata export with title, description, OG tags
- [ ] Error and loading pages created
- [ ] Component imports use domain barrels only
- [ ] Mobile-responsive layout verified
- [ ] Lighthouse score >90 (Performance, SEO, Accessibility)
- [ ] Cross-browser testing (Chrome, Firefox, Safari)
- [ ] Page load time <2 seconds on 3G
```

#### Code Quality Validation
```bash
# Required validation before deployment
npm run enforce:all                    # Filename and dependency validation
npx tsc -p tsconfig.json --noEmit     # TypeScript compilation
npm run build                         # Next.js build validation
npm run lighthouse                    # Performance audit
npm run test:components               # Component testing
```

### **Testing Strategy**

#### Component Testing
```typescript
// Example component test
import { render, screen } from '@testing-library/react';
import { RestaurantSolutionsHero } from '../RestaurantSolutionsHero';

describe('RestaurantSolutionsHero', () => {
  it('renders hero content correctly', () => {
    render(<RestaurantSolutionsHero />);
    
    expect(screen.getByText('Streamline Your Restaurant Operations')).toBeInTheDocument();
    expect(screen.getByText('Start Free Trial')).toBeInTheDocument();
    expect(screen.getByText('Watch Demo')).toBeInTheDocument();
  });
  
  it('shows ROI calculator when showROI is true', () => {
    render(<RestaurantSolutionsHero showROI={true} />);
    
    expect(screen.getByTestId('roi-calculator')).toBeInTheDocument();
  });
});
```

#### Integration Testing
```typescript
// Page-level integration test
import { render } from '@testing-library/react';
import RestaurantSolutionsPage from '../page';

describe('Restaurant Solutions Page', () => {
  it('renders all sections', () => {
    render(<RestaurantSolutionsPage />);
    
    // Verify all major sections are present
    expect(screen.getByRole('banner')).toBeInTheDocument(); // Hero
    expect(screen.getByTestId('features-grid')).toBeInTheDocument();
    expect(screen.getByTestId('success-metrics')).toBeInTheDocument();
    expect(screen.getByTestId('faq-section')).toBeInTheDocument();
    expect(screen.getByTestId('cta-section')).toBeInTheDocument();
  });
});
```

---

## Implementation Timeline

### **Week 1: Foundation & Quick Win**
```bash
Day 1-2: Restaurant Solutions Page (using existing components)
- ✅ app/solutions/restaurants/page.tsx
- ✅ Metadata and SEO optimization
- ✅ Component integration testing

Day 3-5: Component Enhancement & Testing
- ✅ RestaurantSolutionsHero enhancement
- ✅ Mobile responsive optimization  
- ✅ Performance testing and optimization
- ✅ Accessibility audit and fixes
```

### **Week 2: Industry Expansion**
```bash
Day 1-2: Bar Solutions Implementation
- ✅ components/domain/industries/bars/ component creation
- ✅ app/solutions/bars/page.tsx
- ✅ Bar-specific messaging and use cases

Day 3-4: Coffee & Hotel Solutions  
- ✅ Coffee shop solution components and page
- ✅ Hotel solution components and page
- ✅ Cross-industry component reuse optimization

Day 5: Quality Assurance & Testing
- ✅ Cross-browser testing all industry pages
- ✅ Performance optimization
- ✅ SEO validation
```

### **Week 3: Product Features**
```bash
Day 1-2: HACCP Compliance Page
- ✅ components/domain/product/haccp/ creation
- ✅ app/product/haccp/page.tsx
- ✅ Compliance-focused messaging and visuals

Day 3-4: Audit & Reporting Pages
- ✅ Product audit page implementation  
- ✅ Reporting dashboard page implementation
- ✅ Feature cross-linking and navigation

Day 5: Integration & Polish
- ✅ Cross-product feature integration
- ✅ Navigation menu updates
- ✅ Internal linking optimization
```

### **Week 4: Persona & Support Pages**
```bash
Day 1-3: Role-Based Solutions
- ✅ Owner solutions page (/solutions/owners)
- ✅ Manager solutions page (/solutions/managers)  
- ✅ Staff solutions page (/solutions/staff)

Day 4-5: Support & Growth Pages
- ✅ Help center page (/resources/help)
- ✅ Careers page (/company/careers)
- ✅ Analytics dashboard (/analytics) [if needed]
```

---

## Success Metrics & Validation

### **Technical Success Criteria**
```bash
✅ Code Quality Metrics:
- Zero TypeScript compilation errors
- Zero dependency warnings
- All guardrails passing (npm run enforce:all)
- 100% component test coverage
- Lighthouse scores >90 across all pages

✅ Performance Targets:
- Page load time <2 seconds on 3G
- First Contentful Paint <1.5 seconds  
- Bundle size increase <10% per new page
- Zero accessibility violations (WCAG 2.1 AA)
```

### **Business Success Criteria**
```bash
✅ SEO & Discovery:
- Each page indexed by Google within 48 hours
- Target keywords ranking within top 50
- Organic traffic increase measurable within 30 days
- Social sharing functionality implemented

✅ User Experience:
- Mobile-responsive design across all devices
- Cross-browser compatibility (Chrome, Firefox, Safari, Edge)
- Page interaction rate >60% (scroll depth, time on page)
- Conversion funnel tracking implemented
```

### **Completion Validation**
```bash
✅ Final Checklist (All 14 Pages):
- [ ] All routes accessible and error-free
- [ ] Consistent design language across pages
- [ ] SEO metadata complete for all pages
- [ ] Mobile responsive design verified
- [ ] Cross-page navigation working
- [ ] Analytics tracking implemented  
- [ ] Performance benchmarks met
- [ ] Accessibility standards met
- [ ] Content strategy implemented consistently
- [ ] Component reuse maximized (no duplicate code)
```

---

## Next Steps After Completion

### **Optimization Phase**
1. **A/B Testing Infrastructure** - Test different hero variants, CTAs, messaging
2. **Conversion Tracking** - Implement funnel analytics for each page type  
3. **Content Personalization** - Dynamic content based on industry/role
4. **Advanced SEO** - Schema markup, structured data, internal linking optimization

### **Scale Preparation**
1. **Multi-language Support** - i18n infrastructure for international expansion
2. **Dynamic Content** - CMS integration for non-technical content updates
3. **Component Library Documentation** - Storybook or similar for design system
4. **Performance Monitoring** - Real-time performance tracking and alerting

---

**Bottom Line:** This systematic approach transforms page creation from custom development into repeatable pattern implementation. Each page follows established conventions, maintains quality standards, and contributes to a cohesive user experience.

**Expected Outcome:** 14 high-quality pages implemented in 4 weeks, with 2-3x faster development velocity due to systematic patterns and reusable components.

---

*Implementation Guide completed: September 4, 2025*  
*Review after Week 1 completion for adjustment and optimization*