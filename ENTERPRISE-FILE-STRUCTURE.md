# OpsFlow AI — Enterprise File Structure Protocol (v2.0)
**Purpose:** Establish enterprise-ready file organization for scaling from MVP to $10M ARR with clear domain separation, maintainable imports, and zero technical debt.

---

## 1) Enterprise File Structure

### Component Organization (Domain-Driven)
```
/components
├── ui/                    # Design system primitives (Shadcn)
├── shared/               # Cross-domain reusable components
│   ├── layout/           # Navbar, Footer, Heroes, CTAs
│   ├── forms/            # Generic form components  
│   ├── data-display/     # Tables, cards, testimonials, FAQs
│   └── feedback/         # Toasts, alerts, skeletons, errors
├── domain/               # Business domain components
│   ├── restaurant/       # Restaurant-specific components
│   ├── pricing/          # Pricing & billing components
│   ├── contact/          # Contact & support components
│   └── auth/             # Authentication components (future)
├── pages/                # Page-specific compositions (future)
└── sections/             # Legacy hero components (will migrate)
    └── heroes/           # ProductHero, MarketingHero, etc.
```

### Lib Directory Structure
```
/lib
├── api/                  # API clients & types
├── hooks/                # Shared React hooks
├── utils/                # Pure utility functions
├── validations/          # Zod schemas
└── config/               # App configuration
```

---

## 2) Naming Conventions

### Component Files
- **PascalCase.tsx** for all components
- **Domain-prefixed names** for clarity: `RestaurantPricingTable.tsx`, `MarketingCTA.tsx`
- **Purpose-driven naming**: `ContactFAQ.tsx` not `FAQ.tsx`

### Directory Structure
- **Flat where possible**: Avoid deep nesting unless necessary
- **Domain separation**: Components grouped by business domain
- **Barrel exports**: Each domain has an `index.ts` for clean imports

---

## 3) Import Strategy

### Clean Import Patterns
```typescript
// ✅ Domain-specific imports
import { RestaurantPricingTable } from "@/components/domain/restaurant";
import { ContactFAQ } from "@/components/domain/contact";

// ✅ Shared component imports
import { MarketingCTA } from "@/components/shared/layout";
import { FAQSection } from "@/components/shared/data-display";

// ❌ Avoid ambiguous imports
import { Hero } from "@/components/site/Hero"; // Which hero?
import { CTA } from "@/components/site/CTA"; // What type of CTA?
```

### Barrel Export Strategy
Each domain directory contains an `index.ts` file exporting all components:
```typescript
// components/domain/restaurant/index.ts
export { RestaurantPricingTable } from './RestaurantPricingTable';
export { RestaurantFeatureGrid } from './RestaurantFeatureGrid';
export { RestaurantSuccessMetrics } from './RestaurantSuccessMetrics';
```

---

## 4) Component Standards

### File Structure Template
```typescript
// components/domain/restaurant/RestaurantPricingTable.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface RestaurantPricingTableProps {
  // Props interface
}

/**
 * Restaurant-specific pricing table component
 * Used in: /pricing page
 * Domain: Restaurant operations
 */
export function RestaurantPricingTable(props: RestaurantPricingTableProps) {
  // Component implementation
}
```

### Documentation Standards
- **JSDoc comments** for purpose and usage
- **Domain context** clearly stated
- **Used in** references for traceability

---

## 5) Migration Guidelines

### Phase 1: Domain Organization (Complete)
- ✅ Components moved to domain-specific directories
- ✅ Barrel exports created for clean imports
- ✅ Naming conventions standardized

### Phase 2: Import Updates (In Progress)
- Update all page imports to use new paths
- Replace generic names with domain-specific ones
- Test all pages for broken imports

### Phase 3: Lib Structure Population (Future)
- Move utility functions to `/lib/utils`
- Create API clients in `/lib/api`
- Add validation schemas in `/lib/validations`

---

## 6) Scalability Benefits

### Team Scaling
- **Clear ownership**: Each domain has defined boundaries
- **Faster onboarding**: New devs can navigate structure in <30s
- **Parallel development**: Teams can work on separate domains without conflicts

### Code Quality
- **No more naming collisions**: Domain prefixes prevent `Hero.tsx` vs `ProductHero.tsx` issues
- **Import clarity**: Purpose evident from import path
- **Easier refactoring**: Domain isolation makes changes safer

### Business Readiness
- **Feature flags**: Domain separation supports A/B testing
- **Multi-tenant**: Structure ready for client-specific overrides
- **Compliance**: Sensitive domains (auth, payments) isolated for audits

---

## 7) Quick Reference

### Current Active Structure
```
✅ /components/domain/restaurant/    # Restaurant-specific components
✅ /components/domain/contact/       # Contact & support components  
✅ /components/domain/pricing/       # Pricing & billing components
✅ /components/shared/layout/        # Headers, footers, heroes, CTAs
✅ /components/shared/forms/         # Form components
✅ /components/shared/data-display/  # Tables, cards, testimonials
✅ /components/shared/feedback/      # Alerts, skeletons, errors
```

### Import Patterns
```typescript
// Restaurant components
import { RestaurantPricingTable, RestaurantFeatureGrid } from "@/components/domain/restaurant";

// Contact components  
import { ContactFAQ, ContactMethods } from "@/components/domain/contact";

// Shared layout
import { MarketingCTA, MarketingHero } from "@/components/shared/layout";
```

---

*Version: 2.0 | Enterprise-Ready | Scales to $10M ARR | Zero Technical Debt*