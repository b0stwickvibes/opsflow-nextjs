// Utility functions for feature management and scalability
// Business logic separation for maintainability

import { 
  FeatureCategory, 
  AdvancedFeature, 
  RoleDemo, 
  RestaurantTemplate, 
  Integration,
  ANALYTICS_EVENTS,
  FEATURE_FLAGS 
} from './features';

// Feature Flag Management (for A/B testing and gradual rollouts)
export function isFeatureEnabled(flag: keyof typeof FEATURE_FLAGS, userPlan?: string): boolean {
  // In production, this would check against a feature flag service
  // For now, return true for all features
  return true;
}

// Plan-based feature filtering (monetization foundation)
export function filterByPlan<T extends { planRequirement?: string }>(
  items: T[], 
  userPlan: 'starter' | 'professional' | 'enterprise' = 'starter'
): T[] {
  const planHierarchy = {
    'starter': 1,
    'professional': 2, 
    'enterprise': 3
  };

  return items.filter(item => {
    if (!item.planRequirement) return true;
    return planHierarchy[userPlan] >= planHierarchy[item.planRequirement as keyof typeof planHierarchy];
  });
}

// Analytics event tracking (for user behavior insights)
export function trackEvent(event: keyof typeof ANALYTICS_EVENTS, properties?: Record<string, any>): void {
  // In production, this would integrate with analytics service (Mixpanel, Amplitude, etc.)
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', ANALYTICS_EVENTS[event], properties);
  }
  
  // Console log for development
  console.log(`Analytics: ${ANALYTICS_EVENTS[event]}`, properties);
}

// Performance optimization - lazy load icons
const iconCache = new Map<string, any>();

export async function loadIcon(iconName: string) {
  if (iconCache.has(iconName)) {
    return iconCache.get(iconName);
  }

  try {
    const iconModule = await import('lucide-react');
    const IconComponent = iconModule[iconName as keyof typeof iconModule];
    iconCache.set(iconName, IconComponent);
    return IconComponent;
  } catch (error) {
    console.warn(`Failed to load icon: ${iconName}`);
    // Return a default icon
    const { HelpCircle } = await import('lucide-react');
    return HelpCircle;
  }
}

// Data fetching abstraction (future API integration)
export async function fetchFeatureData(category?: string): Promise<{
  categories: FeatureCategory[];
  advanced: AdvancedFeature[];
  demos: RoleDemo[];
  templates: RestaurantTemplate[];
  integrations: Integration[];
}> {
  // In production, this would make API calls
  // For now, return static data with simulated async behavior
  await new Promise(resolve => setTimeout(resolve, 100));

  const { 
    FEATURE_CATEGORIES, 
    ADVANCED_FEATURES, 
    ROLE_DEMOS, 
    RESTAURANT_TEMPLATES, 
    INTEGRATION_PARTNERS 
  } = await import('./features');

  return {
    categories: FEATURE_CATEGORIES,
    advanced: ADVANCED_FEATURES,
    demos: ROLE_DEMOS,
    templates: RESTAURANT_TEMPLATES,
    integrations: INTEGRATION_PARTNERS
  };
}

// Error boundary helper
export class FeatureError extends Error {
  constructor(message: string, public code: string) {
    super(message);
    this.name = 'FeatureError';
  }
}

// Pagination utility (for scaling templates/features)
export function paginate<T>(items: T[], page: number, limit: number): {
  items: T[];
  totalPages: number;
  currentPage: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
} {
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedItems = items.slice(startIndex, endIndex);
  const totalPages = Math.ceil(items.length / limit);

  return {
    items: paginatedItems,
    totalPages,
    currentPage: page,
    hasNextPage: page < totalPages,
    hasPrevPage: page > 1
  };
}

// Search functionality (for future search features)
export function searchFeatures(
  items: (FeatureCategory | AdvancedFeature | RestaurantTemplate)[],
  query: string
): typeof items {
  if (!query.trim()) return items;

  const searchTerm = query.toLowerCase();
  return items.filter(item => 
    item.title.toLowerCase().includes(searchTerm) ||
    item.description.toLowerCase().includes(searchTerm) ||
    ('features' in item && item.features.some(feature => 
      feature.toLowerCase().includes(searchTerm)
    ))
  );
}

// Usage tracking for monetization
export function trackFeatureUsage(featureId: string, userId?: string): void {
  // Track feature usage for billing/analytics
  trackEvent('FEATURE_VIEW', { 
    feature_id: featureId, 
    user_id: userId,
    timestamp: new Date().toISOString() 
  });
}

// Rate limiting helper (for API protection)
export function createRateLimiter(maxRequests: number, windowMs: number) {
  const requests = new Map<string, number[]>();

  return function rateLimiter(identifier: string): boolean {
    const now = Date.now();
    const windowStart = now - windowMs;
    
    if (!requests.has(identifier)) {
      requests.set(identifier, []);
    }
    
    const userRequests = requests.get(identifier)!;
    
    // Remove old requests outside the window
    const validRequests = userRequests.filter(timestamp => timestamp > windowStart);
    
    if (validRequests.length >= maxRequests) {
      return false; // Rate limit exceeded
    }
    
    validRequests.push(now);
    requests.set(identifier, validRequests);
    
    return true; // Request allowed
  };
}

// Global declarations for TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}