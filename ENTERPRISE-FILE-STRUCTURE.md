# OpsFlow AI — Enterprise File Structure Protocol (v2.0)
See also (Day‑1 Standard): /Users/devin/XYZcode/Project X Files/SAAS-FILE-STRUCTURE-STANDARD.md
**Purpose:** Establish enterprise-ready file organization for scaling from MVP to $10M ARR with clear domain separation, maintainable imports, and zero technical debt.

---

## 1) Enterprise File Structure

### Component Organization (Authoritative)
```
/components
├── ui/                      # Design system primitives (shadcn/ui)
├── shared/                  # Cross-domain reusable components
│   ├── layout/              # Navbar, Footer, Hero wrappers, CTAs
│   ├── forms/               # Generic form components  
│   ├── data-display/        # Tables, cards, testimonials, FAQs
│   └── feedback/            # Toasts, alerts, skeletons, errors
├── domain/                  # Business-domain components
│   ├── product/             # Product areas (features, integrations, compliance)
│   ├── marketing/           # Marketing sections & visuals
│   ├── company/             # Company/about pages (hero, team, careers)
│   ├── contact/             # Contact & support components
│   ├── demo/                # Demo booking/promo components
│   ├── security/            # Security-related components
│   ├── roles/               # Role-focused components (or personas)
│   ├── industries/          # Industry solutions (restaurants, bars, coffee, hotels)
│   ├── personas/            # Personas (owners, managers, kitchen, foh)
│   └── templates/           # Domain template promos
├── pages/                   # Page-specific compositions
└── icons/                   # Centralized, reusable icons
```

### Transitional/Legacy (to migrate)
- `components/pricing/` → move to `components/domain/pricing/`
- `components/marketing/` → move to `components/domain/marketing/` (or `shared/enhanced/` if generic visual)
- `components/blocks/` and `components/sections/` → decompose into `shared/*` or `domain/*` (e.g., Heroes → `shared/layout`)
- `components/layout/` (top-level) → consolidate into `shared/layout/`
- `components/site/` → deprecated; replace with `shared/*` or `domain/*`
- `components/enhanced/` and `components/magicui/` → unify under `shared/enhanced/` (visual effects)
- `components/resources/` → migrate to `shared/data-display/` or `pages/*` as appropriate

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
- **PascalCase.tsx** for component files.
- **Exceptions (by convention):** files under `components/ui/*` and `components/icons/*` use lowercase filenames (exporting PascalCase symbols).
- **Purpose-driven names:** `ContactFAQ.tsx` not `FAQ.tsx`.

### Domain Prefixing
- **Required** for files under `shared/*` and any transitional folders (`pricing/`, `marketing/`, `blocks/`, `layout/`, `resources/`, etc.).
  - Examples: `MarketingCTA.tsx`, `PricingHero.tsx`, `ProductFeatureBoard.tsx`.
- **Recommended** inside `domain/*` when the name is generic or reused across domains.
  - Prefer `ProductFeatureStats.tsx` over `FeatureStats.tsx` if ambiguity exists.
 - **Vendor names:** avoid unless truly vendor-specific; prefer domain-first (`MarketingRollingBlocks.tsx` over `StripeRollingBlocks.tsx`) unless tied to Stripe APIs/design.

### Navigation-Driven Folders (recommended)
- Product: `components/domain/product/{features,integrations,haccp,audit,reporting}`
  - Examples: `FeaturesHeroGrid.tsx`, `IntegrationsGrid.tsx`, `HACCPOverview.tsx`, `AuditToolsSection.tsx`, `ReportingDashboard.tsx`
- Industries: `components/domain/industries/{restaurants,bars,coffee,hotels}`
  - Examples: `RestaurantsHero.tsx`, `BarsUseCases.tsx`
- Personas: `components/domain/personas/{owners,managers,kitchen,foh}`
  - Examples: `OwnersBenefits.tsx`, `KitchenWorkflow.tsx`
- Company: `components/domain/company/{about,careers,team}` (as needed)

### Numeric Naming Policy
- **No numbers in component filenames or symbols.** Avoid suffixes like `Hero186`, `Stats9`, `HomePageV3`.
- **Page-context first:** Name by page/route + role, e.g., `HomeHero`, `PricingHero`, `ContactHero`, `DemoHero`, `ProductHero`.
- **Domain + page when relevant:** `RestaurantHomeHero`, `SecurityLandingHero`, `ProductFeaturesHero`.
- **Variants:** Prefer descriptive variants over numbers: `HomeHeroCompact`, `HomeHeroExpanded`, `HomeHeroPro`, or `HomeHeroAlt`. For A/B tests, use `HomeHeroA`/`HomeHeroB` (temporary) and remove after experiment.
- **Allowed numeric tokens:** Only when part of accepted terms (e.g., `OAuth2`, `Web3`, `2FA`).
- **Sections:** Use `...Section` or purpose words instead of numbers, e.g., `StatsSection`, `FeatureStatsSection`, `TestimonialsSection`.

### Hero Naming Rules
- **Home page:** `HomeHero` or `HomeLandingHero`.
- **Route-specific:** `PricingHero`, `ContactHero`, `DocsHero`, `SupportHero`.
- **Domain-specific home:** `RestaurantHomeHero` if the home page is tailored to restaurants.
- **Deprecated patterns:** `Hero1`, `Hero2`, `Hero186` → replace with the patterns above.

### Directory Structure
- **Flat where possible:** avoid deep nesting unless necessary.
- **Domain separation:** group by business domain under `components/domain/*`.
- **Barrel exports:** every `domain/*` and `shared/*` subfolder should expose an `index.ts` with named exports.

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

### Additional Import Examples
```typescript
// Pricing components
import { PricingHero } from "@/components/domain/pricing";

// Marketing visuals
import { MarketingRollingBlocks } from "@/components/domain/marketing";
```

### Barrel Export Strategy
Each domain directory contains an `index.ts` file exporting all components:
```typescript
// components/domain/restaurant/index.ts
export { RestaurantPricingTable } from './RestaurantPricingTable';
export { RestaurantFeatureGrid } from './RestaurantFeatureGrid';
export { RestaurantSuccessMetrics } from './RestaurantSuccessMetrics';
```
Also ensure `index.ts` exists for: `domain/product`, `domain/security`, `domain/roles`, `domain/templates`.

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

### Phase 1: Domain Organization (In Progress)
- Move `components/pricing/*` → `components/domain/pricing/*` (keep `Pricing*` names).
- Move `components/marketing/*` → `components/domain/marketing/*` or `components/shared/enhanced/*` if purely visual.
- Decompose `components/blocks/*` and `sections/*` into `shared/layout` (heroes, CTAs) and `shared/data-display` (cards, stats).
- Consolidate top-level `components/layout/*` into `shared/layout/*` (rename lowercase files to PascalCase).
- Add missing barrel files: `domain/product`, `domain/security`, `domain/roles`, `domain/templates`.
- Normalize generic names in `domain/product/*` (e.g., prefer `ProductFeatureStats.tsx`).

### Phase 2: Import Updates (Pending)
- Update all imports to use `@/components/domain/*` or `@/components/shared/*`.
- Remove deprecated `@/components/site/*` imports.
- Codemod optional: path + symbol renames for consistency.

### Phase 3: Lib Structure (Ongoing)
- Place pure utilities in `/lib/utils/*`; keep modules domain-agnostic.
- Create/maintain clients in `/lib/api/*` and schemas in `/lib/validations/*`.
- Current extras observed: `/lib/analytics`, `/lib/errors`, `/lib/context`, `/lib/style-system`, `/lib/pricing` — keep organized and documented.

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
✅ /components/domain/restaurant/     # Restaurant-specific components (re-exported)
✅ /components/domain/industries/     # Industry solutions (restaurants, bars, coffee, hotels)
✅ /components/domain/contact/        # Contact & support components
✅ /components/domain/product/        # Product marketing components
✅ /components/domain/company/        # Company/about page components
✅ /components/domain/marketing/      # Marketing sections/visuals (non-vendor)
✅ /components/domain/demo/           # Demo booking/promo components
✅ /components/domain/security/       # Security-related components
✅ /components/domain/roles/          # Role-focused components
✅ /components/domain/templates/      # Domain template promos
✅ /components/shared/layout/         # Headers, footers, hero wrappers, CTAs
✅ /components/shared/forms/          # Form components
✅ /components/shared/data-display/   # Tables, cards, testimonials
✅ /components/shared/feedback/       # Alerts, skeletons, errors
```

### Transitional Structure Present
- `components/pricing/` (→ `domain/pricing/`)
- `components/marketing/` (→ `domain/marketing/` or `shared/enhanced/`)
- `components/blocks/` and `components/sections/` (→ `shared/*` or `domain/*`)
- `components/layout/` top-level (→ `shared/layout/`)
- `components/site/` (deprecated)

### Import Patterns
```typescript
// Domain components
import { RestaurantPricingTable, RestaurantFeatureGrid } from "@/components/domain/restaurant";
import { ContactFAQ, ContactMethods } from "@/components/domain/contact";

// Shared layout
import { MarketingCTA } from "@/components/shared/layout";

// Transitional (allowed until migrated)
import { PricingHero } from "@/components/pricing";
```

---

*Version: 2.1 | Enterprise-Ready | Scales to $10M ARR | Zero Technical Debt | OKLCH Color System*

---

## 9) Color System Updates (v2.1)

### **Plasma Template Integration**
Successfully integrated Plasma template's modern color system while preserving all existing structure and components.

#### **OKLCH Color Space Benefits:**
- **Perceptual uniformity**: Colors appear more consistent to human vision
- **Better accessibility**: Improved contrast ratios and readability
- **Enhanced dark mode**: Smoother transitions and better visual hierarchy
- **Future-proof**: Modern color space supported by all browsers

#### **Updated Color Tokens:**
```css
/* Light Mode */
--background: oklch(0.87 0.02 320);
--foreground: oklch(0.05 0.02 290);
--primary: oklch(0.05 0.02 290);
--secondary: oklch(0.62 0.18 280);

/* Dark Mode */
--background: oklch(0.05 0.02 290);
--foreground: oklch(1 0 0);
--primary: oklch(1 0 0);
--secondary: oklch(0.52 0.16 280);

/* Chart Colors (from Plasma) */
--chart-1: oklch(0.58 0.2 285);
--chart-2: oklch(0.65 0.25 320);
--chart-3: oklch(0.72 0.15 25);
--chart-4: oklch(0.5 0.15 240);
--chart-5: oklch(0.6 0.2 200);
```

#### **Enhanced Theme System:**
- **Smooth transitions**: View Transitions API for theme switching
- **Enhanced radius**: Updated from 0.5rem to 0.625rem (10px)
- **Typography improvements**: Better letter-spacing and modern font weights
- **Accessibility**: Reduced motion preferences supported globally

#### **New Utilities:**
```css
.section-padding { @apply py-15 md:py-20 lg:py-24; }
.text-gradient { /* Plasma-style gradient text */ }
```

#### **Files Updated:**
- `app/globals.css` - Complete OKLCH color system integration
- `tailwind.config.js` - Updated color references and enhanced utilities
- `components/theme-provider.tsx` - Added smooth transition utilities
- `components/ui/theme-toggle.tsx` - Enhanced theme toggle with animations (new)

#### **Backward Compatibility:**
- ✅ All existing components work unchanged
- ✅ Color tokens maintain same naming convention
- ✅ No breaking changes to component APIs
- ✅ Preserved all existing utilities and patterns

---

## 8) Dependency Health (dep-cruiser)

### How to regenerate
```bash
npx depcruise -c .dependency-cruiser.cjs components lib app hooks types \
  --output-type json > depcruise.json
```

### What to check
- **Orphans:** Files not imported anywhere (cleanup or move to backups).
- **Transitional imports:** Any imports from `components/blocks`, `sections`, `site`, top-level `layout`, `marketing`, `pricing` → plan migration to `shared/*` or `domain/*`.
- **Numeric names:** Any `*\d+` filenames or symbols → rename per Numeric Naming Policy.

### Detected follow-ups (current repo)
- `components/domain/restaurant/RestaurantHero186.tsx` → rename to `RestaurantHomeHero.tsx`; update imports and fix barrel to named export (no default).
- `components/pages/HomePageV3.tsx` → rename to `HomePage.tsx` or `HomePageVariantA.tsx`.
- `components/blocks/stats/Stats9.tsx` → rename and relocate to `components/shared/data-display/StatsSection.tsx` or remove if unused (empty file).
- `components/marketing/StripeRollingBlocks.tsx` → rename to `MarketingRollingBlocks.tsx`; relocate to `domain/marketing` or `shared/enhanced` depending on usage.
