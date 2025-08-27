/**
 * Centralized analytics tracking utility for OpsFlow
 * This abstraction allows for easy switching between analytics providers
 * and ensures consistent event naming and properties across the application.
 */

// Analytics providers (would be actual implementations in production)
const providers = {
  // Example: PostHog integration
  posthog: {
    track: (eventName: string, properties?: Record<string, any>) => {
      if (typeof window !== 'undefined' && (window as any).posthog) {
        console.log(`[PostHog] ${eventName}`, properties);
        // (window as any).posthog.capture(eventName, properties);
      }
    }
  },
  
  // Example: Google Analytics integration
  ga: {
    track: (eventName: string, properties?: Record<string, any>) => {
      if (typeof window !== 'undefined' && (window as any).gtag) {
        console.log(`[GA] ${eventName}`, properties);
        // (window as any).gtag('event', eventName, properties);
      }
    }
  },
  
  // Development logger (always active)
  console: {
    track: (eventName: string, properties?: Record<string, any>) => {
      console.log(`[Analytics] ${eventName}`, properties);
    }
  }
};

// Feature flag to enable/disable specific providers
const enabledProviders = ['console'];
// In production: const enabledProviders = ['posthog', 'ga', 'console'];

/**
 * Track an analytics event across all enabled providers
 * @param eventName Name of the event to track
 * @param properties Optional properties/data to include with the event
 */
export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  // Add common properties to all events
  const enrichedProperties = {
    ...properties,
    timestamp: new Date().toISOString(),
    url: typeof window !== 'undefined' ? window.location.href : '',
    // Add any other global properties here
  };
  
  // Track across all enabled providers
  enabledProviders.forEach(providerName => {
    const provider = providers[providerName as keyof typeof providers];
    if (provider) {
      provider.track(eventName, enrichedProperties);
    }
  });
};

/**
 * Track page view events
 * @param pageName Name of the page being viewed
 * @param additionalProperties Additional properties to track with the page view
 */
export const trackPageView = (pageName: string, additionalProperties?: Record<string, any>) => {
  trackEvent('page_view', {
    page_name: pageName,
    ...additionalProperties
  });
};

/**
 * Track form submission events
 * @param formName Name of the form being submitted
 * @param additionalProperties Additional properties to track with the form submission
 */
export const trackFormSubmission = (formName: string, additionalProperties?: Record<string, any>) => {
  trackEvent('form_submit', {
    form_name: formName,
    ...additionalProperties
  });
};

/**
 * Track user interaction events
 * @param componentName Name of the component being interacted with
 * @param action Type of interaction (click, hover, etc.)
 * @param additionalProperties Additional properties to track with the interaction
 */
export const trackInteraction = (componentName: string, action: string, additionalProperties?: Record<string, any>) => {
  trackEvent('user_interaction', {
    component: componentName,
    action: action,
    ...additionalProperties
  });
};

/**
 * Initialize analytics providers
 * Call this function once at the application startup
 */
export const initializeAnalytics = () => {
  console.log('[Analytics] Initializing analytics providers:', enabledProviders);
  // Here you would initialize your actual analytics providers
  // Example: posthog.init('your-project-api-key', { api_host: 'https://app.posthog.com' })
};

export default {
  trackEvent,
  trackPageView,
  trackFormSubmission,
  trackInteraction,
  initializeAnalytics
};
