// Industry & Role Theme Configuration
// Colors harmonized with global blue/gray theme

export type Industry = 'restaurant' | 'bar' | 'coffee' | 'hotel';
export type Role = 'owner' | 'manager' | 'kitchen-staff' | 'front-of-house';

export const industryThemes = {
  restaurant: {
    name: 'Restaurants',
    accent: 'accent-blue',
    primaryColor: 'blue',
    energy: 'energy-balanced',
    icon: 'ChefHat',
    description: 'Full-service restaurant operations',
    terminology: {
      platform: 'HACCP Compliance Platform',
      features: ['Kitchen Operations', 'Food Safety', 'Staff Management'],
      cta: 'Get Started as Restaurant'
    }
  },
  bar: {
    name: 'Bars & Nightclubs', 
    accent: 'accent-purple',
    primaryColor: 'purple',
    energy: 'energy-bold',
    icon: 'Wine',
    description: 'Bar and nightlife operations',
    terminology: {
      platform: 'Liquor Inventory Platform',
      features: ['Age Verification', 'Peak Hours', 'Staff Scheduling'],
      cta: 'Get Started as Bar Owner'
    }
  },
  coffee: {
    name: 'Coffee Shops',
    accent: 'accent-orange', 
    primaryColor: 'orange',
    energy: 'energy-warm',
    icon: 'Coffee',
    description: 'Coffee shop and cafe operations',
    terminology: {
      platform: 'Quality Control Platform',
      features: ['Rush Hours', 'Bean Inventory', 'Customer Flow'], 
      cta: 'Get Started as Coffee Owner'
    }
  },
  hotel: {
    name: 'Hotels',
    accent: 'accent-red',
    primaryColor: 'red', 
    energy: 'energy-sophisticated',
    icon: 'Building2',
    description: 'Hotel and hospitality operations',
    terminology: {
      platform: 'Multi-Venue Platform',
      features: ['Guest Experience', 'Enterprise Scale', 'Operations'],
      cta: 'Get Started as Hotel Owner'
    }
  }
} as const;

export const roleThemes = {
  owner: {
    name: 'Restaurant Owners',
    focus: 'Strategic oversight and business growth',
    ctaStyle: 'clerk-cta-primary cta-shimmer',
    ctaText: 'Start Free Trial',
    description: 'Comprehensive platform access with ROI analytics'
  },
  manager: {
    name: 'Operations Managers', 
    focus: 'Daily operations and team coordination',
    ctaStyle: 'clerk-cta-secondary',
    ctaText: 'Request Demo',
    description: 'Management tools for efficient operations'
  },
  'kitchen-staff': {
    name: 'Kitchen Staff',
    focus: 'Food safety and prep workflows', 
    ctaStyle: 'outline',
    ctaText: 'Learn More',
    description: 'Simple tools for food safety compliance'
  },
  'front-of-house': {
    name: 'Front of House',
    focus: 'Customer service and coordination',
    ctaStyle: 'outline',
    ctaText: 'See Features', 
    description: 'Front-of-house coordination and service tools'
  }
} as const;
