'use client';

import { useEffect, useCallback } from 'react';
import { useUser, useOrganization } from '@/lib/context/GlobalContext';

// Types for restaurant operations analytics
interface AnalyticsEvent {
  event: string;
  category?: string;
  action?: string;
  label?: string;
  value?: number;
  userId?: string;
  organizationId?: string;
  properties?: Record<string, any>;
  timestamp?: number;
}

interface RestaurantMetrics {
  pageView: string;
  featureUsage: string;
  conversionFunnel: 'pricing_view' | 'demo_request' | 'trial_start' | 'subscription_created';
  userBehavior: 'roi_calculator_use' | 'faq_expand' | 'feature_click' | 'testimonial_view';
  businessMetrics: 'monthly_revenue' | 'churn_rate' | 'customer_lifetime_value';
}

class RestaurantAnalytics {
  private static instance: RestaurantAnalytics;
  private isInitialized = false;
  private userId?: string;
  private organizationId?: string;
  private sessionId: string;
  private eventQueue: AnalyticsEvent[] = [];

  constructor() {
    this.sessionId = this.generateSessionId();
    
    // Initialize on client side only
    if (typeof window !== 'undefined') {
      this.initialize();
    }
  }

  static getInstance(): RestaurantAnalytics {
    if (!RestaurantAnalytics.instance) {
      RestaurantAnalytics.instance = new RestaurantAnalytics();
    }
    return RestaurantAnalytics.instance;
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private initialize() {
    if (this.isInitialized) return;

    // Google Analytics 4 setup
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('config', process.env.NEXT_PUBLIC_GA_ID || 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href,
        custom_map: {
          custom_parameter_1: 'restaurant_type',
          custom_parameter_2: 'subscription_plan'
        }
      });
    }

    // Process queued events
    this.eventQueue.forEach(event => this.sendEvent(event));
    this.eventQueue = [];
    
    this.isInitialized = true;
  }

  setUser(userId: string, organizationId?: string, properties?: Record<string, any>) {
    this.userId = userId;
    this.organizationId = organizationId;

    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('config', process.env.NEXT_PUBLIC_GA_ID || 'GA_MEASUREMENT_ID', {
        user_id: userId,
        custom_map: {
          organization_id: organizationId,
          ...properties
        }
      });
    }
  }

  // Core tracking methods for restaurant operations
  track(event: string, properties?: Record<string, any>) {
    const analyticsEvent: AnalyticsEvent = {
      event,
      userId: this.userId,
      organizationId: this.organizationId,
      properties: {
        session_id: this.sessionId,
        timestamp: Date.now(),
        url: typeof window !== 'undefined' ? window.location.href : undefined,
        referrer: typeof document !== 'undefined' ? document.referrer : undefined,
        ...properties
      },
      timestamp: Date.now()
    };

    if (this.isInitialized) {
      this.sendEvent(analyticsEvent);
    } else {
      this.eventQueue.push(analyticsEvent);
    }
  }

  // Restaurant-specific tracking methods
  trackPricingInteraction(action: 'view' | 'tier_click' | 'cta_click' | 'faq_expand', data?: Record<string, any>) {
    this.track('pricing_interaction', {
      category: 'pricing',
      action,
      ...data
    });
  }

  trackROICalculatorUsage(field: string, value: number, restaurantData?: Record<string, any>) {
    this.track('roi_calculator_use', {
      category: 'conversion_tool',
      action: 'field_update',
      field,
      value,
      restaurant_type: restaurantData?.type,
      location_count: restaurantData?.locations
    });
  }

  trackFeatureEngagement(feature: string, action: 'view' | 'click' | 'expand', duration?: number) {
    this.track('feature_engagement', {
      category: 'product',
      action,
      feature,
      engagement_duration: duration
    });
  }

  trackConversionFunnel(stage: RestaurantMetrics['conversionFunnel'], metadata?: Record<string, any>) {
    this.track('conversion_funnel', {
      category: 'conversion',
      action: stage,
      funnel_step: this.getFunnelStep(stage),
      ...metadata
    });
  }

  trackPageView(page: string, title?: string) {
    this.track('page_view', {
      category: 'navigation',
      page,
      title: title || (typeof document !== 'undefined' ? document.title : '')
    });

    // Google Analytics pageview
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'page_view', {
        page_title: title || document.title,
        page_location: window.location.href
      });
    }
  }

  trackError(error: Error, context?: Record<string, any>) {
    this.track('error', {
      category: 'error',
      action: 'javascript_error',
      error_message: error.message,
      error_stack: error.stack,
      ...context
    });
  }

  private getFunnelStep(stage: RestaurantMetrics['conversionFunnel']): number {
    const steps = {
      'pricing_view': 1,
      'demo_request': 2,
      'trial_start': 3,
      'subscription_created': 4
    };
    return steps[stage] || 0;
  }

  private sendEvent(event: AnalyticsEvent) {
    // Google Analytics
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', event.event, {
        event_category: event.properties?.category,
        event_label: event.properties?.action,
        value: event.value,
        custom_parameter_1: event.properties?.restaurant_type,
        custom_parameter_2: event.properties?.subscription_plan,
        user_id: event.userId,
        session_id: this.sessionId
      });
    }

    // Send to backend analytics endpoint
    if (process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT) {
      fetch(process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(event)
      }).catch(err => {
        console.warn('Analytics endpoint failed:', err);
      });
    }

    // Console log in development
    if (process.env.NODE_ENV === 'development') {
      console.log('📊 Analytics Event:', event);
    }
  }
}

// Hooks for React components
export function useAnalytics() {
  const user = useUser();
  const organization = useOrganization();
  const analytics = RestaurantAnalytics.getInstance();

  useEffect(() => {
    if (user && organization) {
      analytics.setUser(user.id, organization.id, {
        restaurant_type: organization.industry,
        subscription_plan: user.subscription?.plan,
        location_count: organization.locations
      });
    }
  }, [user, organization, analytics]);

  return {
    track: analytics.track.bind(analytics),
    trackPricing: analytics.trackPricingInteraction.bind(analytics),
    trackROICalculator: analytics.trackROICalculatorUsage.bind(analytics),
    trackFeature: analytics.trackFeatureEngagement.bind(analytics),
    trackConversion: analytics.trackConversionFunnel.bind(analytics),
    trackPageView: analytics.trackPageView.bind(analytics),
    trackError: analytics.trackError.bind(analytics)
  };
}

export function usePageTracking(pageName: string, title?: string) {
  const { trackPageView } = useAnalytics();

  useEffect(() => {
    trackPageView(pageName, title);
  }, [pageName, title, trackPageView]);
}

export function useFeatureTracking(featureName: string) {
  const { trackFeature } = useAnalytics();
  
  const trackView = useCallback(() => {
    trackFeature(featureName, 'view');
  }, [featureName, trackFeature]);

  const trackClick = useCallback(() => {
    trackFeature(featureName, 'click');
  }, [featureName, trackFeature]);

  const trackEngagement = useCallback((duration: number) => {
    trackFeature(featureName, 'expand', duration);
  }, [featureName, trackFeature]);

  return { trackView, trackClick, trackEngagement };
}

// Export singleton instance
export const analytics = RestaurantAnalytics.getInstance();
