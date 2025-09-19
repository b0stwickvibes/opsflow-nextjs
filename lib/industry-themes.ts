// Industry Theme System - Component-level theming for reliability
// This approach ensures colors apply correctly without CSS cascade issues

export type Industry = 'restaurant' | 'bar' | 'coffee' | 'hotel';
export type Role = 'owner' | 'manager' | 'kitchen-staff' | 'front-of-house';

export const industryThemes = {
  restaurant: {
    name: 'Restaurants',
    accent: 'accent-blue',
    colors: {
      primary: '#3B82F6',      // Blue-500
      primaryHover: '#2563EB', // Blue-600
      secondary: '#EFF6FF',    // Blue-50
      secondaryHover: '#DBEAFE', // Blue-100
      border: '#93C5FD',       // Blue-300
      text: '#1E40AF',         // Blue-800
      gradient: 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)', // Blue-500 to Blue-700
      gradientSubtle: 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)', // Blue-50 to Blue-100
    },
    energy: 'energy-balanced',
    icon: 'ChefHat',
    terminology: {
      platform: 'HACCP Compliance Platform',
      features: ['Kitchen Operations', 'Food Safety', 'Staff Management'],
      cta: 'Get Started as Restaurant'
    }
  },
  bar: {
    name: 'Bars & Nightclubs',
    accent: 'accent-purple',
    colors: {
      primary: '#A855F7',      // Purple-500
      primaryHover: '#9333EA', // Purple-600
      secondary: '#FAF5FF',    // Purple-50
      secondaryHover: '#F3E8FF', // Purple-100
      border: '#C084FC',       // Purple-300
      text: '#6B21A8',         // Purple-800
      gradient: 'linear-gradient(135deg, #A855F7 0%, #7C3AED 100%)', // Purple-500 to Purple-600
      gradientSubtle: 'linear-gradient(135deg, #FAF5FF 0%, #F3E8FF 100%)', // Purple-50 to Purple-100
    },
    energy: 'energy-bold',
    icon: 'Wine',
    terminology: {
      platform: 'Liquor Inventory Platform',
      features: ['Age Verification', 'Peak Hours', 'Staff Scheduling'],
      cta: 'Get Started as Bar Owner'
    }
  },
  coffee: {
    name: 'Coffee Shops',
    accent: 'accent-orange',
    colors: {
      primary: '#F97316',      // Orange-500
      primaryHover: '#EA580C', // Orange-600
      secondary: '#FFF7ED',    // Orange-50
      secondaryHover: '#FFEDD5', // Orange-100
      border: '#FDBA74',       // Orange-300
      text: '#C2410C',         // Orange-700
      gradient: 'linear-gradient(135deg, #F97316 0%, #DC2626 100%)', // Orange-500 to Red-600
      gradientSubtle: 'linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%)', // Orange-50 to Orange-100
    },
    energy: 'energy-warm',
    icon: 'Coffee',
    terminology: {
      platform: 'Quality Control Platform',
      features: ['Rush Hours', 'Bean Inventory', 'Customer Flow'],
      cta: 'Get Started as Coffee Owner'
    }
  },
  hotel: {
    name: 'Hotels',
    accent: 'accent-red',
    colors: {
      primary: '#EF4444',      // Red-500
      primaryHover: '#DC2626', // Red-600
      secondary: '#FEF2F2',    // Red-50
      secondaryHover: '#FEE2E2', // Red-100
      border: '#FCA5A5',       // Red-300
      text: '#B91C1C',         // Red-700
      gradient: 'linear-gradient(135deg, #EF4444 0%, #B91C1C 100%)', // Red-500 to Red-700
      gradientSubtle: 'linear-gradient(135deg, #FEF2F2 0%, #FEE2E2 100%)', // Red-50 to Red-100
    },
    energy: 'energy-sophisticated',
    icon: 'Building2',
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
    ctaStyle: 'primary',
    ctaText: 'Start Free Trial',
    description: 'Comprehensive platform access with ROI analytics'
  },
  manager: {
    name: 'Operations Managers',
    focus: 'Daily operations and team coordination',
    ctaStyle: 'secondary',
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

// Helper function to get theme-aware button styles with gradients
export function getIndustryButtonStyle(industry: Industry, variant: 'primary' | 'secondary' = 'primary') {
  const theme = industryThemes[industry];
  
  if (variant === 'primary') {
    return {
      background: theme.colors.gradient,
      border: 'none',
      color: 'white',
      boxShadow: '0 4px 14px 0 rgba(0, 0, 0, 0.1)',
    } as React.CSSProperties;
  }
  
  return {
    background: theme.colors.gradientSubtle,
    borderColor: theme.colors.border,
    color: theme.colors.text,
    '--hover-bg': theme.colors.secondaryHover,
    '--hover-border': theme.colors.primary,
  } as React.CSSProperties;
}

// Helper function to get theme-aware card styles with gradient accents
export function getIndustryCardStyle(industry: Industry) {
  const theme = industryThemes[industry];
  
  return {
    borderColor: theme.colors.border,
    '--hover-bg': theme.colors.gradientSubtle,
    '--hover-border': theme.colors.primary,
  } as React.CSSProperties;
}

// Helper function to get theme-aware gradient text
export function getIndustryGradientText(industry: Industry) {
  const theme = industryThemes[industry];
  
  return {
    backgroundImage: theme.colors.gradient,
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
  } as React.CSSProperties;
}