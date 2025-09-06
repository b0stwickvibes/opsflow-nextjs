# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Common Development Commands

### Development
```bash
npm run dev                    # Start development server
npm run build                  # Production build (lint skipped for speed)
npm start                      # Start production server
npm run analyze                # Bundle analysis (ANALYZE=true npm run build)
```

### Code Quality & Enforcement
```bash
npm run lint                   # ESLint checking
npm run enforce:all            # Run all enforcement checks (deps + filenames)
npm run deps:cruise            # Generate dependency health report
npm run enforce:filenames      # Check filename policy (no digits in component names)
npx tsc -p tsconfig.json --noEmit  # TypeScript type checking (no build)
```

### Development Utilities
```bash
npm run capture:features       # Capture features script
node scripts/repo-cartographer.mjs  # Repository analysis
```

## Architecture & File Structure

### Enterprise Domain-Driven Architecture
This codebase uses a strict domain-driven component architecture to scale from MVP to $10M ARR:

#### Component Organization
```
/components
├── ui/                        # Design system primitives (shadcn/ui)
├── shared/                    # Cross-domain reusable components
│   ├── layout/                # Navbar, Footer, Hero wrappers, CTAs
│   ├── forms/                 # Generic form components  
│   ├── data-display/          # Tables, cards, testimonials, FAQs
│   └── feedback/              # Toasts, alerts, skeletons, errors
├── domain/                    # Business-domain components
│   ├── product/               # Product areas (features, integrations, compliance)
│   ├── marketing/             # Marketing sections & visuals
│   ├── company/               # Company/about pages (hero, team, careers)
│   ├── contact/               # Contact & support components
│   ├── demo/                  # Demo booking/promo components
│   ├── security/              # Security-related components
│   ├── pricing/               # Pricing-specific components
│   ├── industries/            # Industry solutions (restaurants, bars, coffee, hotels)
│   └── personas/              # Role-focused components (owners, managers, kitchen, foh)
├── pages/                     # Page-specific compositions
└── icons/                     # Centralized, reusable icons
```

#### Lib Directory Structure
```
/lib
├── api/                      # API clients & types
├── hooks/                    # Shared React hooks
├── utils/                    # Pure utility functions
├── validations/              # Zod schemas
├── config/                   # App configuration
├── analytics/                # Analytics utilities
├── context/                  # React contexts
├── errors/                   # Error handling utilities
└── pricing/                  # Pricing logic and configuration
```

### Import Strategy
- Use domain-specific imports: `@/components/domain/<domain>`
- Use shared components: `@/components/shared/<area>`
- All domain folders have barrel exports (`index.ts`)
- Avoid cross-domain component imports - use shared components instead

### Path Aliases (tsconfig.json)
```json
{
  "@/*": ["./*"],
  "@/components/*": ["components/*"],
  "@/domain/*": ["components/domain/*"],
  "@/shared/*": ["components/shared/*"],
  "@/lib/*": ["lib/*"]
}
```

## Key Development Rules

### Naming Conventions
- **Component files**: PascalCase.tsx (e.g., `ContactHero.tsx`)
- **NO numeric tokens** in component filenames or symbols (exceptions: OAuth2, Web3, 2FA)
- **Domain prefixing required** for shared components (e.g., `MarketingCTA.tsx`)
- **Route-specific naming**: `HomeHero`, `PricingHero`, `ContactHero`
- **Descriptive variants**: Use `HomeHeroCompact` not `HomeHero2`

### File Structure Rules
- Keep pages (`app/*`) thin - put logic in domains or `lib/*`
- Use domain barrels for imports
- No cross-domain component dependencies
- Domain separation for scalability and team ownership

### Pre-commit Requirements
Before any PR or deployment:
1. `npm run enforce:all` (dependency health + filename policy)
2. `npx tsc -p tsconfig.json --noEmit` (type checking)

## Technology Stack

### Core Framework
- **Next.js 15** with App Router
- **React 19** with TypeScript
- **Tailwind CSS** with OKLCH color system
- **Clerk** for authentication

### Key Libraries
- **UI**: shadcn/ui components with Radix UI primitives
- **Forms**: React Hook Form with Zod validation
- **Animation**: Framer Motion
- **Database**: Prisma with PostgreSQL
- **Real-time**: Socket.io
- **State**: React Context (GlobalProvider)
- **Styling**: Tailwind with custom design tokens

### Authentication & Authorization

#### Route Protection (middleware.ts)
- **Public routes**: Marketing pages, pricing, demo, resources
- **Protected routes**: `/dashboard(.*)`, `/admin(.*)`, `/locations(.*)`, `/sensors(.*)`, `/compliance(.*)`, `/reports(.*)`, `/settings(.*)`
- **Auth routes**: `/sign-in`, `/sign-up`, `/sso-callback`, `/oauth` (bypass middleware)
- **Admin routes**: Require `org:admin` or `org:super_admin` role

#### Clerk Integration
- Middleware handles route protection automatically
- Org-based role system for admin access
- SSO callback support

## Build & Performance Optimizations

### Next.js Configuration
- Bundle analyzer integration (`ANALYZE=true`)
- Package import optimization (lucide-react, @radix-ui/react-icons)
- Production webpack splitting (vendor/common chunks)
- Security headers configured
- ESLint disabled during builds for speed

### Performance Features
- Image optimization (WebP, AVIF formats)
- Dynamic imports for product pages
- External templates excluded from TS/lint
- Optimized font loading with preconnect

## Development Environment

### Environment Setup
- Copy `.env.example` to `.env.local` for local development
- Prisma for database schema management
- Socket.io for real-time features

### Testing & Quality
- Playwright for E2E testing
- Dependency cruiser for architecture validation
- Custom filename enforcement script
- Madge for additional dependency analysis

## Color System & Theming

### OKLCH Color Space
- Modern perceptual color system for better accessibility
- Smooth dark/light mode transitions
- Enhanced contrast ratios
- View Transitions API for theme switching

### Theme System
- Multi-palette support (default, plasma, figma, styleglide-nebula)
- Theme persistence in localStorage
- Reduced motion support
- CSS custom properties for all color tokens

## Claude 4 Sonnet + Warp Workflow Commands

### Page Development Workflow (Following SYSTEMATIC-PAGE-DEVELOPMENT-GUIDE.md)
```bash
# Quick page scaffolding
npm run create:industry-page [industry]    # Scaffold new industry solution page
npm run create:product-page [feature]      # Scaffold new product feature page
npm run create:persona-page [role]         # Scaffold new role-based solution page

# Component development
npm run create:component [domain] [name]   # Create domain component with proper naming
npm run check:component [path]             # Validate component follows standards
npm run test:component [name]              # Run component-specific tests
```

### Architecture Validation (Following ENTERPRISE-SCALABILITY-AUDIT.md)
```bash
# Full architecture health check
npm run arch:health                        # Complete architecture validation
npm run arch:migration-check              # Verify legacy folder cleanup status
npm run arch:naming-audit                 # Check for numeric naming violations
npm run arch:import-audit                 # Validate import patterns use barrels

# Performance & scalability
npm run perf:bundle-analysis               # Detailed bundle size analysis
npm run perf:lighthouse                    # Automated Lighthouse audit
npm run perf:load-test                     # Basic load testing
```

### Claude 4 Sonnet Context Commands
```bash
# Generate context for AI assistance
npm run ai:context                         # Generate complete project context
npm run ai:component-context [component]   # Generate component-specific context
npm run ai:page-context [page]            # Generate page implementation context
npm run ai:standards-context              # Generate standards compliance context

# Code review preparation
npm run review:prepare                     # Prepare full codebase for review
npm run review:component [name]           # Prepare component for AI review
npm run review:page [route]               # Prepare page implementation for review
```

### Rapid Development Commands
```bash
# Component library operations
npm run comp:audit                        # Audit all components for standards compliance
npm run comp:dedupe                       # Find and merge duplicate components
npm run comp:dependencies                 # Map component dependency graph
npm run comp:unused                       # Find unused components for cleanup

# Design system operations  
npm run design:tokens                     # Validate design token consistency
npm run design:oklch-audit               # Audit OKLCH color system usage
npm run design:responsive-test           # Test responsive design across breakpoints
```

## Special Considerations

### Claude 4 Sonnet Integration
- WARP.md provides comprehensive context for AI assistance
- All commands follow enterprise architecture standards
- Context generation commands help with large codebase navigation
- Architecture validation ensures AI suggestions maintain quality

### Browser Compatibility
- BrowserCompatibilityProvider handles browser-specific features
- Progressive enhancement patterns
- Polyfill strategy for older browsers

### Security
- Content Security Policy configured
- Security headers in next.config.js
- Protected route validation
- Safe external resource loading

### Scalability
- Domain-driven architecture prevents naming collisions
- Clear team ownership boundaries
- Parallel development support
- Feature flag ready structure

## Warp Terminal Optimizations

### AI Assistant Integration
When working with Claude 4 Sonnet through Warp, reference these key files for maximum context efficiency:
1. **ENTERPRISE-SCALABILITY-AUDIT.md** - Architecture review and cleanup
2. **SYSTEMATIC-PAGE-DEVELOPMENT-GUIDE.md** - Implementation patterns  
3. **PROJECT-STANDARDS.md** - Entry point to all standards
4. **ENTERPRISE-FILE-STRUCTURE.md** - Domain organization rules

### Quick Reference Commands
```bash
# Standards compliance check (run before AI assistance)
npm run enforce:all && npx tsc -p tsconfig.json --noEmit

# Page development readiness check  
npm run arch:health && npm run comp:audit

# Full context generation for Claude 4 Sonnet
npm run ai:context > claude-context.md
```
