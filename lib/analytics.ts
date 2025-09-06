/**
 * Enterprise Analytics Infrastructure
 * Multi-provider analytics with conversion tracking, funnel analysis, and business metrics
 */

// Analytics event types
export interface AnalyticsEvent {
  name: string;
  properties?: Record<string, any>;
  userId?: string;
  organizationId?: string;
  timestamp?: Date;
  sessionId?: string;
  pageUrl?: string;
  referrer?: string;
}

// Business conversion events
export interface ConversionEvent {
  funnel: 'signup' | 'trial' | 'upgrade' | 'onboarding';
  step: string;
  value?: number; // Revenue value
  currency?: string;
  metadata?: Record<string, any>;
}

// Page view tracking
export interface PageViewEvent {
  path: string;
  title?: string;
  duration?: number; // Time on page in seconds
  exitPage?: boolean;
  bounced?: boolean;
}

// User behavior events
export interface UserEvent {
  action: 'click' | 'scroll' | 'form_submit' | 'feature_use' | 'error';
  element?: string;
  section?: string;
  value?: string | number;
  metadata?: Record<string, any>;
}

// Analytics providers configuration
export interface AnalyticsProvider {
  name: string;
  enabled: boolean;
  config: Record<string, any>;
  track: (event: AnalyticsEvent) => Promise<void> | void;
  identify: (userId: string, traits: Record<string, any>) => Promise<void> | void;
  page: (event: PageViewEvent) => Promise<void> | void;
}

// Session management
class SessionManager {
  private sessionId: string;
  private sessionStart: Date;
  private pageViews: number = 0;

  constructor() {
    this.sessionId = this.generateSessionId();
    this.sessionStart = new Date();
  }

  private generateSessionId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  getSessionId(): string {
    return this.sessionId;
  }

  getSessionDuration(): number {
    return Date.now() - this.sessionStart.getTime();
  }

  incrementPageView(): number {
    return ++this.pageViews;
  }

  getPageViews(): number {
    return this.pageViews;
  }
}

// Analytics Manager class
export class AnalyticsManager {
  private providers: AnalyticsProvider[] = [];
  private sessionManager: SessionManager;
  private userId?: string;
  private organizationId?: string;
  private userTraits: Record<string, any> = {};
  private isInitialized = false;

  constructor() {
    this.sessionManager = new SessionManager();
    this.initializeProviders();
  }

  private initializeProviders() {
    // Console provider (always enabled for debugging)
    this.providers.push({
      name: 'console',
      enabled: process.env.NODE_ENV === 'development',
      config: {},
      track: (event) => console.debug('[Analytics]', event),
      identify: (userId, traits) => console.debug('[Analytics] Identify:', userId, traits),
      page: (event) => console.debug('[Analytics] Page:', event),
    });

    // Mixpanel provider (example - would need actual implementation)
    if (process.env.NEXT_PUBLIC_MIXPANEL_TOKEN) {
      this.providers.push({
        name: 'mixpanel',
        enabled: true,
        config: { token: process.env.NEXT_PUBLIC_MIXPANEL_TOKEN },
        track: async (event) => {
          // Mixpanel implementation would go here
          // mixpanel.track(event.name, event.properties);
        },
        identify: async (userId, traits) => {
          // mixpanel.identify(userId);
          // mixpanel.people.set(traits);
        },
        page: async (event) => {
          // mixpanel.track('Page View', event);
        },
      });
    }

    // Google Analytics provider (example)
    if (process.env.NEXT_PUBLIC_GA_ID) {
      this.providers.push({
        name: 'google_analytics',
        enabled: true,
        config: { measurementId: process.env.NEXT_PUBLIC_GA_ID },
        track: async (event) => {
          // gtag('event', event.name, event.properties);
        },
        identify: async (userId, traits) => {
          // gtag('config', GA_ID, { user_id: userId });
        },
        page: async (event) => {
          // gtag('config', GA_ID, { page_path: event.path });
        },
      });
    }

    this.isInitialized = true;
  }

  /**
   * Identify user for analytics tracking
   */
  identify(userId: string, traits: Record<string, any> = {}, organizationId?: string): void {
    this.userId = userId;
    this.organizationId = organizationId;
    this.userTraits = { ...this.userTraits, ...traits };

    this.providers
      .filter(p => p.enabled)
      .forEach(provider => {
        try {
          provider.identify(userId, {
            ...traits,
            organizationId,
            sessionId: this.sessionManager.getSessionId(),
          });
        } catch (error) {
          console.error(`Analytics provider ${provider.name} failed to identify:`, error);
        }
      });
  }

  /**
   * Track custom events
   */
  track(eventName: string, properties: Record<string, any> = {}): void {
    const event: AnalyticsEvent = {
      name: eventName,
      properties,
      userId: this.userId,
      organizationId: this.organizationId,
      timestamp: new Date(),
      sessionId: this.sessionManager.getSessionId(),
      pageUrl: typeof window !== 'undefined' ? window.location.href : undefined,
      referrer: typeof window !== 'undefined' ? document.referrer : undefined,
    };

    this.providers
      .filter(p => p.enabled)
      .forEach(provider => {
        try {
          provider.track(event);
        } catch (error) {
          console.error(`Analytics provider ${provider.name} failed to track:`, error);
        }
      });
  }

  /**
   * Track page views
   */
  page(path: string, title?: string): void {
    const pageViewCount = this.sessionManager.incrementPageView();
    
    const event: PageViewEvent = {
      path,
      title,
      duration: pageViewCount > 1 ? this.getTimeOnPage() : 0,
    };

    this.providers
      .filter(p => p.enabled)
      .forEach(provider => {
        try {
          provider.page(event);
        } catch (error) {
          console.error(`Analytics provider ${provider.name} failed to track page:`, error);
        }
      });
  }

  /**
   * Track conversion events for business metrics
   */
  trackConversion(conversion: ConversionEvent): void {
    this.track('conversion', {
      funnel: conversion.funnel,
      step: conversion.step,
      value: conversion.value,
      currency: conversion.currency || 'USD',
      ...conversion.metadata,
    });
  }

  /**
   * Track user interactions
   */
  trackInteraction(action: string, properties: Record<string, any> = {}): void {
    this.track('user_interaction', {
      action,
      ...properties,
    });
  }

  /**
   * Track feature usage for product analytics
   */
  trackFeatureUsage(featureName: string, metadata: Record<string, any> = {}): void {
    this.track('feature_used', {
      feature: featureName,
      ...metadata,
    });
  }

  /**
   * Track errors for debugging and quality monitoring
   */
  trackError(error: Error, context: Record<string, any> = {}): void {
    this.track('error', {
      message: error.message,
      stack: error.stack,
      name: error.name,
      ...context,
    });
  }

  /**
   * Track business metrics (revenue, usage, etc.)
   */
  trackBusinessMetric(metric: string, value: number, unit: string = '', metadata: Record<string, any> = {}): void {
    this.track('business_metric', {
      metric,
      value,
      unit,
      ...metadata,
    });
  }

  private getTimeOnPage(): number {
    // Simple implementation - could be enhanced with more sophisticated timing
    return Math.floor(this.sessionManager.getSessionDuration() / 1000);
  }

  /**
   * Get session information for debugging
   */
  getSessionInfo() {
    return {
      sessionId: this.sessionManager.getSessionId(),
      duration: this.sessionManager.getSessionDuration(),
      pageViews: this.sessionManager.getPageViews(),
      userId: this.userId,
      organizationId: this.organizationId,
    };
  }

  /**
   * Enable or disable specific providers
   */
  configureProvider(name: string, enabled: boolean, config?: Record<string, any>) {
    const provider = this.providers.find(p => p.name === name);
    if (provider) {
      provider.enabled = enabled;
      if (config) {
        provider.config = { ...provider.config, ...config };
      }
    }
  }
}

// Export singleton instance
export const analytics = new AnalyticsManager();

// Convenience functions
export const trackInteraction = (action: string, properties: Record<string, any> = {}) => {
  analytics.trackInteraction(action, properties);
};

export const trackPageView = (path: string, title?: string) => {
  analytics.page(path, title);
};

export const trackConversion = (conversion: ConversionEvent) => {
  analytics.trackConversion(conversion);
};

export const trackFeatureUsage = (featureName: string, metadata: Record<string, any> = {}) => {
  analytics.trackFeatureUsage(featureName, metadata);
};

export const trackError = (error: Error, context: Record<string, any> = {}) => {
  analytics.trackError(error, context);
};

export const identifyUser = (userId: string, traits: Record<string, any> = {}, organizationId?: string) => {
  analytics.identify(userId, traits, organizationId);
};

// Types are already exported above
