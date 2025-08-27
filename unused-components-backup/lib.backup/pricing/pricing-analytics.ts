/**
 * Analytics Utility for Pricing Page
 * Tracks user interactions for business intelligence
 */

import { AnalyticsEvent } from './pricing-logic';

// Mock analytics interface - replace with your actual analytics provider
interface AnalyticsProvider {
  track: (event: string, properties: Record<string, any>) => void;
  identify: (userId: string, traits: Record<string, any>) => void;
}

// Analytics wrapper with fallback for development
class PricingAnalytics {
  private provider: AnalyticsProvider | null = null;

  constructor() {
    // Initialize your analytics provider here
    // this.provider = window.analytics || window.gtag || etc.
  }

  track(event: AnalyticsEvent) {
    // Console log in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', event);
    }

    // Send to analytics provider in production
    if (this.provider) {
      this.provider.track(`pricing_${event.action}`, {
        plan: event.plan,
        value: event.value,
        ...event.properties,
        timestamp: Date.now(),
        page: 'pricing'
      });
    }
  }

  // Specific tracking methods for pricing events
  trackPlanView(planId: string) {
    this.track({
      action: 'plan_viewed',
      plan: planId,
      properties: { section: 'pricing_cards' }
    });
  }

  trackBillingToggle(isAnnual: boolean) {
    this.track({
      action: 'billing_toggle',
      properties: { 
        billing_type: isAnnual ? 'annual' : 'monthly',
        savings_displayed: isAnnual
      }
    });
  }

  trackROICalculatorOpen() {
    this.track({
      action: 'roi_calculator_opened',
      properties: { engagement_level: 'high' }
    });
  }

  trackROICalculatorInput(field: string, value: number) {
    this.track({
      action: 'roi_input_changed',
      properties: { field, value, interaction_depth: 'calculation' }
    });
  }

  trackROIResults(results: { roiPercentage: number; paybackMonths: number; annualSavings: number }) {
    this.track({
      action: 'roi_results_calculated',
      value: results.annualSavings,
      properties: {
        roi_percentage: results.roiPercentage,
        payback_months: results.paybackMonths,
        intent_level: 'qualified'
      }
    });
  }

  trackFeatureComparisonView() {
    this.track({
      action: 'feature_comparison_viewed',
      properties: { research_depth: 'detailed' }
    });
  }

  trackCTAClick(planId: string, ctaText: string, position: string) {
    this.track({
      action: 'cta_clicked',
      plan: planId,
      properties: {
        cta_text: ctaText,
        position,
        conversion_intent: 'high'
      }
    });
  }

  trackPricingPageScroll(percentage: number) {
    if (percentage === 25 || percentage === 50 || percentage === 75 || percentage === 100) {
      this.track({
        action: 'page_scroll',
        properties: { 
          scroll_percentage: percentage,
          engagement_level: percentage > 75 ? 'high' : 'medium'
        }
      });
    }
  }
}

export const pricingAnalytics = new PricingAnalytics();