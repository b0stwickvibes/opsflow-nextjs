# ARCHITECTURE REFERENCE — OpsFlow Enterprise Foundation

**Enterprise patterns and standards. Don't touch unless scaling/refactoring.**

> **Purpose:** Technical foundation for 0→$10M ARR scaling  
> **Scope:** Domain structure, import patterns, performance standards  
> **Use Case:** Reference during major refactoring or team scaling

---

## Domain-Driven Architecture

### **Component Organization (Established)**
```bash
/components
├── ui/                        # Shadcn/UI primitives
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

### **Barrel Export Strategy**
```typescript
// Each domain folder has index.ts for clean imports
// components/domain/industries/restaurants/index.ts
export { RestaurantSolutionsHero } from './RestaurantSolutionsHero';
export { RestaurantFeatures } from './RestaurantFeatures';
export { RestaurantMetrics } from './RestaurantMetrics';
export { RestaurantTestimonials } from './RestaurantTestimonials';

// Usage in pages
import { 
  RestaurantSolutionsHero, 
  RestaurantFeatures 
} from '@/components/domain/industries/restaurants';
```

### **Cross-Domain Dependencies (Prohibited)**
```typescript
// ❌ WRONG - Direct cross-domain imports
import { BarFeatures } from '@/components/domain/industries/bars/BarFeatures';

// ✅ CORRECT - Use shared components
import { IndustryFeatures } from '@/components/shared/data-display';
```

---

## Path Aliases & Import Resolution

### **TypeScript Configuration**
```json
// tsconfig.json paths
{
  "@/*": ["./*"],
  "@/components/*": ["components/*"],
  "@/domain/*": ["components/domain/*"],
  "@/shared/*": ["components/shared/*"],
  "@/lib/*": ["lib/*"]
}
```

### **Import Priority Order**
```typescript
// 1. React/Next.js core
import { useState } from 'react';
import type { Metadata } from 'next';

// 2. External libraries
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

// 3. UI primitives (shadcn)
import { Button } from '@/components/ui/button';

// 4. Shared components
import { MarketingCTA } from '@/components/shared/layout';

// 5. Domain components (use barrels)
import { RestaurantHero } from '@/components/domain/industries/restaurants';

// 6. Utils and types
import { type ComponentProps } from '@/types';
```

---

## Performance Architecture

### **Code Splitting Strategy**
```typescript
// Route-based splitting (automatic)
// /app structure automatically splits by route

// Component-based splitting (manual)
const HeavyComponent = lazy(() => import('@/components/heavy/Component'));

// Third-party library splitting
const ChartComponent = lazy(() => 
  import('@/components/charts').then(module => ({ 
    default: module.ChartComponent 
  }))
);
```

### **Bundle Optimization**
```javascript
// next.config.js optimizations
const nextConfig = {
  // Package import optimization
  transpilePackages: ['lucide-react', '@radix-ui/react-icons'],
  
  // Webpack bundle splitting
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
          },
        },
      };
    }
    return config;
  },
};
```

### **Performance Budgets**
```bash
# Performance targets for restaurant operations platform
TTI (Time to Interactive): < 2s on modern laptop
LCP (Largest Contentful Paint): < 2.5s on 3G Fast
CLS (Cumulative Layout Shift): < 0.1
Bundle size (initial): < 500KB gzipped
```

---

## State Management Architecture

### **Global State Structure**
```typescript
// lib/context/GlobalProvider.tsx
interface GlobalState {
  user: User | null;
  organization: Organization | null;
  theme: 'light' | 'dark';
  features: FeatureFlags;
  restaurant: RestaurantContext;
}

// Restaurant-specific context
interface RestaurantContext {
  currentLocation: Location | null;
  operationalSettings: OperationalSettings;
  complianceStatus: ComplianceStatus;
  temperatureMonitoring: TemperatureData[];
}
```

### **State Management Patterns**
```typescript
// Use React Context for global state
// Use React Hook Form for form state
// Use React Query/SWR for server state
// Avoid Redux unless absolutely necessary

// Example: Restaurant context
const RestaurantProvider = ({ children }: Props) => {
  const [restaurant, setRestaurant] = useState<RestaurantContext>();
  
  return (
    <RestaurantContext.Provider value={{ restaurant, setRestaurant }}>
      {children}
    </RestaurantContext.Provider>
  );
};
```

---

## API Architecture Patterns

### **Client Structure**
```typescript
// lib/api/client.ts
export class APIClient {
  constructor(private baseURL: string) {}
  
  async paginated<T>(
    endpoint: string, 
    params: PaginationParams
  ): Promise<PaginatedResponse<T>> {
    // Implementation with error handling, retries, caching
  }
  
  async mutate<T>(
    endpoint: string, 
    data: T
  ): Promise<APIResponse<T>> {
    // Implementation with optimistic updates
  }
}

// Usage in hooks
const useRestaurantData = () => {
  return useQuery(['restaurant'], () => 
    apiClient.get('/restaurant/current')
  );
};
```

### **Data Validation Layer**
```typescript
// lib/validations/restaurant.ts
import { z } from 'zod';

export const RestaurantSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1).max(100),
  type: z.enum(['restaurant', 'bar', 'coffee', 'hotel']),
  settings: z.object({
    temperatureMonitoring: z.boolean(),
    haccpCompliance: z.boolean(),
    staffManagement: z.boolean(),
  }),
});

export type RestaurantInput = z.infer<typeof RestaurantSchema>;
```

---

## Security Architecture

### **Authentication & Authorization**
```typescript
// Clerk integration patterns
// middleware.ts handles route protection
export default withClerkMiddleware((req) => {
  return NextResponse.next();
});

// Route protection rules
const protectedRoutes = [
  '/dashboard(.*)',
  '/admin(.*)', 
  '/locations(.*)',
  '/sensors(.*)',
  '/compliance(.*)',
  '/reports(.*)',
  '/settings(.*)'
];

// Role-based access control
const hasPermission = (user: User, permission: Permission): boolean => {
  return user.roles.some(role => 
    role.permissions.includes(permission)
  );
};
```

### **Data Protection Patterns**
```typescript
// Input sanitization
const sanitizeInput = (input: string): string => {
  return DOMPurify.sanitize(input.trim());
};

// Server-side validation
const validateRequest = (schema: ZodSchema, data: unknown) => {
  const result = schema.safeParse(data);
  if (!result.success) {
    throw new ValidationError(result.error.issues);
  }
  return result.data;
};
```

---

## Error Handling Architecture

### **Error Boundary System**
```typescript
// components/shared/feedback/ErrorBoundary.tsx
class RestaurantErrorBoundary extends ErrorBoundary {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log to monitoring service with restaurant context
    logError(error, {
      ...errorInfo,
      restaurantId: this.props.restaurantId,
      feature: this.props.feature,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <RestaurantErrorFallback 
          error={this.state.error}
          resetError={() => this.setState({ hasError: false })}
        />
      );
    }

    return this.props.children;
  }
}
```

### **API Error Handling**
```typescript
// lib/errors/ApiError.ts
export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public code: string
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

// Error mapping for restaurant operations
export const mapApiError = (error: ApiError): UserFriendlyError => {
  const errorMap: Record<string, string> = {
    'TEMPERATURE_SENSOR_OFFLINE': 'Temperature sensor is offline. Please check the connection.',
    'HACCP_COMPLIANCE_EXPIRED': 'HACCP certification needs renewal.',
    'STAFF_SCHEDULE_CONFLICT': 'Schedule conflict detected. Please resolve.',
  };

  return {
    title: 'Restaurant Operations Error',
    message: errorMap[error.code] || 'An unexpected error occurred.',
    actions: getErrorActions(error.code),
  };
};
```

---

## Database Architecture (Prisma)

### **Schema Patterns**
```prisma
// prisma/schema.prisma - Restaurant-focused models
model Restaurant {
  id        String   @id @default(cuid())
  name      String
  type      RestaurantType
  settings  Json     @default("{}")
  
  locations Location[]
  sensors   Sensor[]
  staff     Staff[]
  
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model TemperatureLog {
  id           String   @id @default(cuid())
  sensorId     String
  temperature  Float
  location     String
  timestamp    DateTime
  isCompliant  Boolean
  
  sensor       Sensor   @relation(fields: [sensorId], references: [id])
}

enum RestaurantType {
  RESTAURANT
  BAR
  COFFEE
  HOTEL
}
```

### **Query Patterns**
```typescript
// lib/database/queries/restaurant.ts
export const getRestaurantWithSensors = async (id: string) => {
  return await prisma.restaurant.findUnique({
    where: { id },
    include: {
      sensors: {
        include: {
          temperatureLogs: {
            orderBy: { timestamp: 'desc' },
            take: 10,
          },
        },
      },
      locations: true,
      staff: true,
    },
  });
};
```

---

## Testing Architecture

### **Testing Strategy**
```typescript
// Component testing with restaurant context
describe('RestaurantDashboard', () => {
  const mockRestaurant = {
    id: 'rest_123',
    name: 'Test Restaurant',
    type: 'RESTAURANT',
    settings: { temperatureMonitoring: true },
  };

  beforeEach(() => {
    renderWithProviders(
      <RestaurantDashboard restaurant={mockRestaurant} />,
      {
        preloadedState: { restaurant: mockRestaurant },
      }
    );
  });

  it('displays temperature monitoring dashboard', () => {
    expect(screen.getByText('Temperature Monitoring')).toBeInTheDocument();
  });
});
```

### **E2E Testing Patterns**
```typescript
// tests/e2e/restaurant-operations.spec.ts
test('restaurant owner can view compliance dashboard', async ({ page }) => {
  await page.goto('/dashboard');
  
  // Wait for restaurant data to load
  await page.waitForSelector('[data-testid="compliance-score"]');
  
  // Verify HACCP compliance section
  const complianceScore = await page.textContent('[data-testid="compliance-score"]');
  expect(complianceScore).toMatch(/\d+%/);
});
```

---

## Monitoring & Observability

### **Logging Architecture**
```typescript
// lib/monitoring/logger.ts
interface RestaurantLogContext {
  restaurantId?: string;
  locationId?: string;
  userId?: string;
  feature?: string;
  action?: string;
}

export const logger = {
  info: (message: string, context?: RestaurantLogContext) => {
    console.info(JSON.stringify({
      level: 'info',
      message,
      timestamp: new Date().toISOString(),
      ...context,
    }));
  },
  
  error: (message: string, error: Error, context?: RestaurantLogContext) => {
    console.error(JSON.stringify({
      level: 'error',
      message,
      error: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
      ...context,
    }));
  },
};
```

### **Analytics Integration**
```typescript
// lib/analytics/tracker.ts
export const trackRestaurantEvent = (
  eventName: string,
  properties: RestaurantEventProperties
) => {
  // Restaurant-specific event tracking
  analytics.track(eventName, {
    ...properties,
    category: 'restaurant_operations',
    timestamp: new Date().toISOString(),
  });
};

// Usage in components
const handleComplianceCheck = () => {
  trackRestaurantEvent('compliance_check_completed', {
    restaurantId: restaurant.id,
    complianceType: 'HACCP',
    score: complianceScore,
    location: currentLocation.name,
  });
};
```

---

## Deployment Architecture

### **Environment Configuration**
```bash
# Environment variables (production)
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://opsflow.com
DATABASE_URL=postgresql://...
CLERK_SECRET_KEY=...
ANALYTICS_API_KEY=...
MONITORING_DSN=...
```

### **Infrastructure Patterns**
```yaml
# docker-compose.yml for local development
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=development
      - DATABASE_URL=postgresql://postgres:password@db:5432/opsflow
    depends_on:
      - db
      - redis

  db:
    image: postgres:15
    environment:
      POSTGRES_DB: opsflow
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: password
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

  redis:
    image: redis:7
    ports:
      - "6379:6379"

volumes:
  postgres_data:
```

---

## Migration & Scaling Patterns

### **Database Migrations**
```typescript
// prisma/migrations/add_temperature_monitoring.sql
-- Migration for temperature monitoring feature
ALTER TABLE "Restaurant" ADD COLUMN "temperatureSettings" JSONB DEFAULT '{}';

CREATE TABLE "TemperatureSensor" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "restaurantId" TEXT NOT NULL,
  "location" TEXT NOT NULL,
  "type" TEXT NOT NULL,
  "isActive" BOOLEAN DEFAULT true,
  FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE CASCADE
);
```

### **Feature Flag Patterns**
```typescript
// lib/features/flags.ts
export const featureFlags = {
  temperatureMonitoring: true,
  advancedAnalytics: false,
  multiLocationSupport: true,
  inventoryTracking: false,
} as const;

// Usage in components
const TemperatureSection = () => {
  const { temperatureMonitoring } = useFeatureFlags();
  
  if (!temperatureMonitoring) return null;
  
  return <TemperatureMonitoringDashboard />;
};
```

---

## Team Scaling Architecture

### **Code Ownership**
```bash
# .github/CODEOWNERS - Team ownership boundaries
/components/domain/product/     @product-team
/components/domain/marketing/   @marketing-team  
/components/domain/industries/  @solutions-team
/components/shared/             @platform-team
/lib/api/                      @backend-team
/docs/                         @documentation-team
```

### **Development Workflow**
```bash
# Branch naming
feature/product-haccp-dashboard
feature/marketing-testimonials  
fix/temperature-sensor-display
hotfix/critical-compliance-bug

# PR requirements
- [ ] Code review by domain owner
- [ ] Design review for UI changes
- [ ] QA testing for restaurant operations
- [ ] Performance impact assessment
- [ ] Documentation updates
```

---

## Maintenance Patterns

### **Dependency Management**
```json
// package.json - Keep dependencies updated
{
  "scripts": {
    "deps:check": "npm audit && npm outdated",
    "deps:update": "npm update",
    "deps:security": "npm audit fix"
  }
}
```

### **Code Health Monitoring**
```bash
# Regular maintenance commands
npm run deps:cruise              # Dependency health
npm run enforce:filenames        # Naming convention compliance
npm run bundle:analyze          # Bundle size monitoring  
npm run test:coverage           # Code coverage tracking
```

---

## Enterprise Readiness Checklist

### **Security Compliance**
- [ ] RBAC implementation (Role-Based Access Control)
- [ ] Audit logging for all sensitive operations
- [ ] Data encryption at rest and in transit
- [ ] GDPR compliance patterns
- [ ] SOC2 compliance preparation

### **Scalability Preparation**
- [ ] Database query optimization
- [ ] Caching strategy implementation
- [ ] CDN integration for static assets
- [ ] Load balancing configuration
- [ ] Auto-scaling infrastructure

### **Business Continuity**
- [ ] Backup and recovery procedures
- [ ] Disaster recovery planning
- [ ] Health check endpoints
- [ ] Monitoring and alerting
- [ ] SLA definition and tracking

---

**Bottom Line:** This architecture supports scaling from prototype to $10M ARR. Follow these patterns for consistency, maintainability, and team scalability. Reference this document only during major refactoring or architectural decisions.

**Update Protocol:** Update this document only when making fundamental architectural changes. Keep implementation details in DEVELOPMENT-SOP.md.
