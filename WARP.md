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

## Dashboard Development Strategy

### Interactive Demo System (Superior to Demo.Arcade)

When building the actual OpsFlow dashboard, use this strategy for creating marketing assets and interactive demos that showcase real functionality.

#### Core Approach
**Build real dashboard components first, then create demo versions for marketing**

```typescript
// 1. Functional dashboard component
export function TemperatureDashboard({ locationId, isDemo = false }: Props) {
  const data = isDemo ? mockTemperatureData : useTemperatureData(locationId);
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <TemperatureGrid data={data} interactive={!isDemo} />
      <ComplianceStatus alerts={data.alerts} />
    </motion.div>
  );
}

// 2. Demo wrapper for marketing pages
export function TemperatureDashboardDemo() {
  return (
    <div className="pointer-events-none border rounded-lg overflow-hidden">
      <TemperatureDashboard isDemo={true} />
    </div>
  );
}
```

#### Advanced Animation Techniques

**1. Progressive Feature Reveal**
```typescript
const useFeatureReveal = (step: number) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { staggerChildren: 0.1 }
    }
  };
  
  return { variants, step };
};

// Usage in marketing component
<AnimatePresence mode="wait">
  {step >= 1 && <TemperatureModule />}
  {step >= 2 && <TaskManagement />} 
  {step >= 3 && <ComplianceReports />}
  {step >= 4 && <AnalyticsDashboard />}
</AnimatePresence>
```

**2. Real-Time Data Simulation**
```typescript
const useMockRealTimeData = () => {
  const [metrics, setMetrics] = useState({
    temperature: 38.2,
    tasksCompleted: 45,
    complianceScore: 94
  });
  
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        temperature: prev.temperature + (Math.random() - 0.5) * 0.3,
        tasksCompleted: Math.min(prev.tasksCompleted + Math.floor(Math.random() * 3), 50),
        complianceScore: Math.min(prev.complianceScore + Math.floor(Math.random() * 2), 100)
      }));
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  return metrics;
};
```

**3. Component-Level Interactions**
```typescript
const DashboardShowcase = () => {
  const [hoveredFeature, setHoveredFeature] = useState(null);
  
  return (
    <div className="dashboard-showcase">
      {features.map((feature) => (
        <motion.div
          key={feature.id}
          onHoverStart={() => setHoveredFeature(feature.id)}
          onHoverEnd={() => setHoveredFeature(null)}
          animate={{
            scale: hoveredFeature === feature.id ? 1.02 : 1,
            boxShadow: hoveredFeature === feature.id 
              ? "0 20px 40px rgba(0,0,0,0.1)" 
              : "0 4px 12px rgba(0,0,0,0.05)"
          }}
        >
          <feature.component isDemo={true} />
        </motion.div>
      ))}
    </div>
  );
};
```

#### Automated Screenshot Generation

**Development Workflow Commands**
```bash
# Dashboard development workflow
npm run dashboard:dev                     # Start dashboard development server
npm run dashboard:screenshot             # Generate marketing screenshots
npm run dashboard:demo-components        # Build demo versions of components
npm run dashboard:interactive-export     # Export interactive demo components
```

**Playwright Screenshot Automation**
```typescript
// scripts/dashboard-screenshots.ts
import { chromium } from 'playwright';

const generateDashboardScreenshots = async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1200, height: 800 }
  });
  
  const components = [
    'temperature-dashboard',
    'task-management',
    'compliance-audit',
    'staff-scheduling',
    'inventory-tracking'
  ];
  
  for (const component of components) {
    await page.goto(`http://localhost:3000/demo/${component}`);
    await page.waitForTimeout(2000); // Let animations complete
    
    await page.screenshot({
      path: `public/images/dashboard/${component}.png`,
      type: 'png',
      clip: { x: 0, y: 0, width: 1200, height: 800 }
    });
  }
  
  await browser.close();
};
```

#### Marketing Integration Strategy

**1. Live Component Embeds**
```typescript
// In marketing pages - embed actual dashboard components
<section className="dashboard-preview">
  <div className="container mx-auto px-6">
    <h2>See OpsFlow in Action</h2>
    
    {/* Live dashboard component with demo data */}
    <div className="relative rounded-lg overflow-hidden border bg-background">
      <RestaurantDashboardDemo />
    </div>
    
    {/* Interactive feature callouts */}
    <FeatureCallouts onFeatureHover={highlightInDashboard} />
  </div>
</section>
```

**2. Screenshot Fallbacks with Animations**
```typescript
const DashboardPreview = ({ interactive = false }) => {
  if (interactive) {
    return <RestaurantDashboardDemo />;
  }
  
  // Fallback to optimized images with hover effects
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="dashboard-screenshot"
    >
      <Image
        src="/images/dashboard/hero-dashboard.webp"
        alt="OpsFlow Restaurant Dashboard"
        width={1200}
        height={800}
        className="rounded-lg shadow-xl"
      />
    </motion.div>
  );
};
```

#### Competitive Advantages Over Xenia.teams

**Your Approach Wins Because:**
- **Live components** vs static Arcade recordings
- **Real-time data simulation** vs pre-recorded clicks
- **Responsive interactions** vs fixed viewport demos
- **Component reusability** vs one-off recordings
- **Performance optimization** vs video loading delays

**Implementation Priority:**
1. **Build functional dashboard components**
2. **Create demo versions with mock data**
3. **Add Framer Motion animations**
4. **Generate automated screenshots**
5. **Embed interactive demos in marketing**

#### Restaurant-Specific Mock Data

```typescript
// lib/mock-data/restaurant.ts
export const mockRestaurantData = {
  temperature: {
    walkInFreezer: { temp: 2.1, status: 'normal', lastCheck: '10:30 AM' },
    walkInCooler: { temp: 4.8, status: 'normal', lastCheck: '10:28 AM' },
    hotHoldingUnit: { temp: 63.2, status: 'normal', lastCheck: '10:25 AM' },
    fryer: { temp: 175.5, status: 'warning', lastCheck: '10:20 AM' }
  },
  tasks: {
    opening: { completed: 8, total: 10, completionRate: 80 },
    hourly: { completed: 15, total: 18, completionRate: 83 },
    closing: { completed: 0, total: 12, completionRate: 0 }
  },
  compliance: {
    haccpScore: 94,
    lastAudit: '2024-01-15',
    criticalControlPoints: { passed: 8, total: 8 },
    upcomingDeadlines: 2
  },
  staff: {
    onDuty: 12,
    scheduled: 14,
    callouts: 1,
    overtime: 2
  }
};
```

This strategy creates a superior demo experience while building your actual product functionality simultaneously.
