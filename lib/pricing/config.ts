// Restaurant Operations Pricing Configuration
// Following OpsFlow Claude Protocol for professional restaurant-focused pricing

export interface PricingTier {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  popular?: boolean;
  cta: string;
  features: string[];
  limitations: string[];
  maxLocations?: number;
  maxUsers?: number;
}

export interface AddOn {
  id: string;
  name: string;
  description: string;
  category: string;
  monthlyPrice: number;
  annualPrice: number;
  oneTime?: boolean;
}

// Restaurant-focused pricing tiers
export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'starter',
    name: 'Restaurant Starter',
    description: 'Perfect for single-location restaurants getting started with operations management',
    monthlyPrice: 49,
    annualPrice: 480, // 20% discount
    cta: 'Start Free Trial',
    features: [
      'Temperature monitoring for up to 5 units',
      'Basic HACCP compliance tracking',
      'Staff scheduling for up to 15 employees',
      'Mobile app access',
      'Email support',
      'Basic reporting dashboard'
    ],
    limitations: [
      'Limited to 1 location',
      'Basic integrations only',
      'Standard support only'
    ],
    maxLocations: 1,
    maxUsers: 15
  },
  {
    id: 'professional',
    name: 'Restaurant Pro',
    description: 'Complete operations suite for growing restaurants and small chains',
    monthlyPrice: 149,
    annualPrice: 1440, // 20% discount  
    popular: true,
    cta: 'Start Free Trial',
    features: [
      'Unlimited temperature monitoring',
      'Advanced HACCP compliance & audit prep',
      'Full inventory management with AI predictions',
      'Staff training & certification tracking',
      'Advanced reporting & analytics',
      'POS integrations (Toast, Square, etc.)',
      'Priority phone & chat support',
      'Custom compliance templates'
    ],
    limitations: [],
    maxLocations: 3,
    maxUsers: 50
  },
  {
    id: 'enterprise',
    name: 'Restaurant Enterprise',
    description: 'Full-scale solution for restaurant groups and hospitality companies',
    monthlyPrice: 399,
    annualPrice: 3840, // 20% discount
    cta: 'Contact Sales',
    features: [
      'Everything in Professional',
      'Unlimited locations & users',
      'Multi-location dashboard & reporting',
      'Advanced API access',
      'Custom integrations',
      'Dedicated account manager',
      '24/7 priority support',
      'On-site training & setup',
      'Custom compliance workflows',
      'White-label options'
    ],
    limitations: [],
    maxLocations: 999,
    maxUsers: 999
  }
];

export const ADD_ONS: AddOn[] = [
  {
    id: 'additional_locations',
    name: 'Additional Locations',
    description: 'Add more restaurant locations to your plan',
    category: 'scaling',
    monthlyPrice: 29,
    annualPrice: 300
  },
  {
    id: 'advanced_analytics',
    name: 'Advanced Analytics',
    description: 'Deep-dive reporting with predictive insights',
    category: 'analytics',
    monthlyPrice: 49,
    annualPrice: 480
  },
  {
    id: 'custom_integration',
    name: 'Custom Integration',
    description: 'Connect any third-party system',
    category: 'integration',
    monthlyPrice: 0,
    annualPrice: 2500,
    oneTime: true
  },
  {
    id: 'training_program',
    name: 'Staff Training Program',
    description: 'Comprehensive team onboarding',
    category: 'training',
    monthlyPrice: 0,
    annualPrice: 1200,
    oneTime: true
  }
];

export const FEATURES = [
  { name: 'Temperature Monitoring', starter: '5 units', professional: 'Unlimited', enterprise: 'Unlimited' },
  { name: 'HACCP Compliance', starter: true, professional: true, enterprise: true },
  { name: 'Staff Scheduling', starter: '15 users', professional: '50 users', enterprise: 'Unlimited' },
  { name: 'Inventory Management', starter: false, professional: true, enterprise: true },
  { name: 'POS Integrations', starter: false, professional: true, enterprise: true },
  { name: 'Multi-location Support', starter: false, professional: '3 locations', enterprise: 'Unlimited' },
  { name: 'Advanced Analytics', starter: false, professional: true, enterprise: true },
  { name: 'Priority Support', starter: false, professional: true, enterprise: true },
  { name: 'Custom Integrations', starter: false, professional: false, enterprise: true },
  { name: 'Dedicated Account Manager', starter: false, professional: false, enterprise: true },
  { name: 'On-site Training', starter: false, professional: false, enterprise: true },
  { name: '24/7 Support', starter: false, professional: false, enterprise: true }
];

export const FAQ = [
  {
    question: 'How does the free trial work?',
    answer: 'Get 14 days of full access to all features in your selected plan. No credit card required to start. You can cancel anytime during the trial with no charges.',
    category: 'billing'
  },
  {
    question: 'Can I change plans later?',
    answer: 'Yes! You can upgrade or downgrade your plan at any time. Upgrades are prorated immediately, while downgrades take effect at your next billing cycle.',
    category: 'billing'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express, Discover). Enterprise customers can pay via ACH transfer or check with NET 30 terms.',
    category: 'billing'
  },
  {
    question: 'Do you offer volume discounts for multiple locations?',
    answer: 'Yes! Restaurant groups with 5+ locations receive volume discounts. Contact our sales team for custom pricing based on your specific needs.',
    category: 'pricing'
  },
  {
    question: 'How quickly can we get set up?',
    answer: 'Most restaurants are up and running within 24-48 hours. Professional and Enterprise plans include dedicated onboarding support to ensure smooth setup.',
    category: 'setup'
  },
  {
    question: 'What integrations do you support?',
    answer: 'We integrate with major POS systems (Toast, Square, Clover), inventory systems (MarginEdge, BevSpot), and accounting software (QuickBooks, Xero). See our full integration list.',
    category: 'integrations'
  },
  {
    question: 'Is my restaurant data secure?',
    answer: 'Absolutely. We use enterprise-grade security with SOC 2 compliance, end-to-end encryption, and regular security audits. Your data is never shared with third parties.',
    category: 'security'
  },
  {
    question: 'Do you provide training for my staff?',
    answer: 'Yes! All plans include basic training videos and documentation. Professional and Enterprise plans include live training sessions and ongoing support.',
    category: 'support'
  }
];

// Analytics and tracking
export function trackPricingEvent(event: {
  event: string;
  tier?: string;
  billingPeriod?: string;
  experimentId?: string;
  metadata?: Record<string, any>;
}) {
  // Restaurant operations analytics tracking
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', event.event, {
      event_category: 'pricing',
      tier: event.tier,
      billing_period: event.billingPeriod,
      experiment_id: event.experimentId,
      ...event.metadata
    });
  }
  
  console.log('OpsFlow Pricing Event:', event);
}