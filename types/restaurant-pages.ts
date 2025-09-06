/**
 * Restaurant Operations Page Types
 * Following RESTAURANT-OPERATIONS-SYSTEMATIC-GUIDE.md patterns
 */

export interface RestaurantHeroContent {
  badge: string;
  headline: string[];
  subtitle: string;
  ctas: {
    primary: string;
    secondary: string;
  };
}

export interface RestaurantKPIs {
  realTime: boolean;
  metrics: {
    label: string;
    value: string;
    description: string;
    trend?: 'up' | 'down' | 'stable';
  }[];
}

export interface RestaurantWorkflow {
  title: string;
  description: string;
  features: string[];
  metrics?: string;
}

export interface RestaurantFeatures {
  category: 'operations' | 'compliance' | 'analytics' | 'communication';
  title: string;
  features: string[];
}

export interface RestaurantProof {
  metric: string;
  source: string;
  industry?: string;
}

export interface RestaurantPageContent {
  hero: RestaurantHeroContent;
  kpis: RestaurantKPIs;
  workflows?: RestaurantWorkflow[];
  features?: RestaurantFeatures[];
  proof: RestaurantProof[];
  cta: {
    title: string;
    subtitle: string;
    ctas: {
      primary: string;
      secondary: string;
    };
  };
}

export interface RestaurantPageProps {
  content: RestaurantPageContent;
  industry: 'restaurants' | 'bars' | 'coffee' | 'hotels' | 'general';
  role: 'owners' | 'managers' | 'staff' | 'general';
}

export type IndustryType = 'restaurants' | 'bars' | 'coffee' | 'hotels';
export type RoleType = 'owners' | 'managers' | 'kitchen' | 'foh' | 'general';
