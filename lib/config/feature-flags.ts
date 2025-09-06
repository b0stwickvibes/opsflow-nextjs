/**
 * Enterprise Feature Flag System
 * Enables A/B testing, gradual rollouts, and feature toggles for 0→$10M ARR scaling
 */

// Feature flag configuration types
export interface FeatureFlagConfig {
  enabled: boolean;
  rolloutPercentage?: number; // 0-100, for gradual rollouts
  allowedRoles?: string[]; // User roles that can access
  allowedOrganizations?: string[]; // Specific organization access
  environment?: 'development' | 'staging' | 'production' | 'all';
  startDate?: Date; // When feature becomes available
  endDate?: Date; // When feature gets disabled
  variant?: string; // For A/B testing variants
  metadata?: Record<string, any>; // Additional configuration
}

// Core feature flags for the application
export const featureFlags = {
  // UI/UX Features
  newHomeHero: {
    enabled: true,
    rolloutPercentage: 100,
    environment: 'all',
    variant: 'default', // 'default', 'compact', 'expanded'
    metadata: { version: '2.0', testGroup: 'homepage_redesign' },
  } as FeatureFlagConfig,

  newPricingPage: {
    enabled: false,
    rolloutPercentage: 0,
    allowedRoles: ['owner', 'manager'],
    environment: 'staging',
    metadata: { version: '1.5', testGroup: 'pricing_optimization' },
  } as FeatureFlagConfig,

  compactNavigation: {
    enabled: true,
    rolloutPercentage: 50,
    environment: 'all',
    metadata: { testGroup: 'navigation_ab_test' },
  } as FeatureFlagConfig,

  // Product Features
  restaurantDashboard: {
    enabled: true,
    rolloutPercentage: 100,
    environment: 'all',
  } as FeatureFlagConfig,

  barSolutions: {
    enabled: false,
    rolloutPercentage: 0,
    environment: 'development',
    metadata: { releaseDate: '2025-01-15' },
  } as FeatureFlagConfig,

  coffeeSolutions: {
    enabled: false,
    rolloutPercentage: 0,
    environment: 'development',
    metadata: { releaseDate: '2025-02-01' },
  } as FeatureFlagConfig,

  hotelSolutions: {
    enabled: false,
    rolloutPercentage: 0,
    environment: 'development',
    metadata: { releaseDate: '2025-03-01' },
  } as FeatureFlagConfig,

  // HACCP & Compliance Features
  advancedHACCP: {
    enabled: true,
    rolloutPercentage: 100,
    allowedRoles: ['owner', 'manager'],
    environment: 'all',
  } as FeatureFlagConfig,

  automatedReporting: {
    enabled: true,
    rolloutPercentage: 75,
    allowedRoles: ['owner', 'manager'],
    environment: 'all',
  } as FeatureFlagConfig,

  realTimeAlerts: {
    enabled: true,
    rolloutPercentage: 100,
    environment: 'all',
  } as FeatureFlagConfig,

  // Analytics & Reporting
  advancedAnalytics: {
    enabled: true,
    rolloutPercentage: 100,
    allowedRoles: ['owner', 'manager'],
    environment: 'all',
  } as FeatureFlagConfig,

  customReports: {
    enabled: false,
    rolloutPercentage: 25,
    allowedRoles: ['owner'],
    environment: 'production',
    metadata: { testGroup: 'premium_features' },
  } as FeatureFlagConfig,

  exportFunctionality: {
    enabled: true,
    rolloutPercentage: 100,
    allowedRoles: ['owner', 'manager'],
    environment: 'all',
  } as FeatureFlagConfig,

  // Integration Features
  toastPOSIntegration: {
    enabled: true,
    rolloutPercentage: 100,
    environment: 'all',
  } as FeatureFlagConfig,

  marginEdgeIntegration: {
    enabled: true,
    rolloutPercentage: 80,
    environment: 'all',
  } as FeatureFlagConfig,

  squareIntegration: {
    enabled: false,
    rolloutPercentage: 0,
    environment: 'development',
    metadata: { priority: 'high', eta: '2025-01-30' },
  } as FeatureFlagConfig,

  // Enterprise Features
  multiLocation: {
    enabled: true,
    rolloutPercentage: 100,
    allowedRoles: ['owner', 'manager'],
    environment: 'all',
  } as FeatureFlagConfig,

  userRoleManagement: {
    enabled: true,
    rolloutPercentage: 100,
    allowedRoles: ['owner'],
    environment: 'all',
  } as FeatureFlagConfig,

  auditLogging: {
    enabled: false,
    rolloutPercentage: 0,
    allowedRoles: ['owner'],
    environment: 'production',
    metadata: { compliance: true, priority: 'critical' },
  } as FeatureFlagConfig,

  // Performance Features
  advancedCaching: {
    enabled: true,
    rolloutPercentage: 100,
    environment: 'production',
  } as FeatureFlagConfig,

  offlineMode: {
    enabled: false,
    rolloutPercentage: 0,
    environment: 'development',
    metadata: { complexity: 'high', priority: 'medium' },
  } as FeatureFlagConfig,

  // Marketing Features
  referralProgram: {
    enabled: false,
    rolloutPercentage: 0,
    environment: 'staging',
    metadata: { testGroup: 'growth_experiment' },
  } as FeatureFlagConfig,

  inAppNotifications: {
    enabled: true,
    rolloutPercentage: 100,
    environment: 'all',
  } as FeatureFlagConfig,

  // Debug & Development
  debugMode: {
    enabled: true,
    rolloutPercentage: 100,
    environment: 'development',
    allowedRoles: ['owner'],
  } as FeatureFlagConfig,

  performanceMonitoring: {
    enabled: true,
    rolloutPercentage: 100,
    environment: 'all',
  } as FeatureFlagConfig,
} as const;

// Type for feature flag keys
export type FeatureFlagKey = keyof typeof featureFlags;

// Get current environment
function getCurrentEnvironment(): 'development' | 'staging' | 'production' {
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    if (hostname.includes('staging') || hostname.includes('preview')) return 'staging';
    if (hostname.includes('localhost') || hostname.includes('127.0.0.1')) return 'development';
    return 'production';
  }
  
  const nodeEnv = process.env.NODE_ENV;
  if (nodeEnv === 'development') return 'development';
  if (nodeEnv === 'production') return 'production';
  return 'staging';
}

// Feature flag checker class
export class FeatureFlagManager {
  private environment: string;
  private userRole?: string;
  private organizationId?: string;
  private userId?: string;

  constructor(options: {
    userRole?: string;
    organizationId?: string;
    userId?: string;
  } = {}) {
    this.environment = getCurrentEnvironment();
    this.userRole = options.userRole;
    this.organizationId = options.organizationId;
    this.userId = options.userId;
  }

  /**
   * Check if a feature is enabled for the current user/context
   */
  isEnabled(flagKey: FeatureFlagKey): boolean {
    const flag = featureFlags[flagKey];
    
    // Basic enabled check
    if (!flag.enabled) return false;

    // Environment check
    if (flag.environment && flag.environment !== 'all' && flag.environment !== this.environment) {
      return false;
    }

    // Role-based access
    if (flag.allowedRoles && this.userRole) {
      if (!flag.allowedRoles.includes(this.userRole)) return false;
    }

    // Organization-based access
    if (flag.allowedOrganizations && this.organizationId) {
      if (!flag.allowedOrganizations.includes(this.organizationId)) return false;
    }

    // Date-based availability
    const now = new Date();
    if (flag.startDate && now < flag.startDate) return false;
    if (flag.endDate && now > flag.endDate) return false;

    // Rollout percentage (simple hash-based distribution)
    if (flag.rolloutPercentage !== undefined && flag.rolloutPercentage < 100) {
      const hash = this.getUserHash(flagKey);
      if (hash > flag.rolloutPercentage) return false;
    }

    return true;
  }

  /**
   * Get feature variant for A/B testing
   */
  getVariant(flagKey: FeatureFlagKey): string | undefined {
    if (!this.isEnabled(flagKey)) return undefined;
    return featureFlags[flagKey].variant;
  }

  /**
   * Get feature metadata
   */
  getMetadata(flagKey: FeatureFlagKey): Record<string, any> | undefined {
    if (!this.isEnabled(flagKey)) return undefined;
    return featureFlags[flagKey].metadata;
  }

  /**
   * Get all enabled features for current context
   */
  getEnabledFeatures(): FeatureFlagKey[] {
    return (Object.keys(featureFlags) as FeatureFlagKey[]).filter(key => 
      this.isEnabled(key)
    );
  }

  /**
   * Simple hash function for consistent user distribution
   */
  private getUserHash(flagKey: string): number {
    const identifier = this.userId || this.organizationId || 'anonymous';
    const combined = `${identifier}-${flagKey}`;
    
    let hash = 0;
    for (let i = 0; i < combined.length; i++) {
      const char = combined.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    
    return Math.abs(hash) % 100;
  }

  /**
   * Update user context (useful for dynamic role changes)
   */
  updateContext(options: {
    userRole?: string;
    organizationId?: string;
    userId?: string;
  }): void {
    if (options.userRole !== undefined) this.userRole = options.userRole;
    if (options.organizationId !== undefined) this.organizationId = options.organizationId;
    if (options.userId !== undefined) this.userId = options.userId;
  }
}

// Export singleton for common usage
export const featureFlagManager = new FeatureFlagManager();

// Hook for React components
export function useFeatureFlag(flagKey: FeatureFlagKey): boolean {
  return featureFlagManager.isEnabled(flagKey);
}

// Hook for getting feature variant
export function useFeatureVariant(flagKey: FeatureFlagKey): string | undefined {
  return featureFlagManager.getVariant(flagKey);
}

// Hook for getting feature metadata
export function useFeatureMetadata(flagKey: FeatureFlagKey): Record<string, any> | undefined {
  return featureFlagManager.getMetadata(flagKey);
}

// Utility function for conditional rendering
export function withFeatureFlag<T>(
  flagKey: FeatureFlagKey,
  component: T,
  fallback?: T
): T | undefined {
  return featureFlagManager.isEnabled(flagKey) ? component : fallback;
}

// Types are already exported above
