// Industry & Role Theme Configuration
// Following DEVELOPMENT-SOP.md standards for theming

export const INDUSTRY_THEMES = {
  restaurant: {
    accent: 'accent-orange',
    primary: 'oklch(0.70 0.15 25)', // Orange
    energy: 'energy-balanced',
    icons: ['ChefHat', 'Shield', 'Thermometer', 'ClipboardCheck'],
    terminology: ['HACCP Compliance', 'Kitchen Operations', 'Food Safety', 'Staff Management']
  },
  bar: {
    accent: 'accent-purple',
    primary: 'oklch(0.60 0.20 270)', // Purple
    energy: 'energy-bold',
    icons: ['Wine', 'Shield', 'Users', 'BarChart3'],
    terminology: ['Liquor Inventory', 'Age Verification', 'Peak Hours', 'Staff Scheduling']
  },
  coffee: {
    accent: 'accent-amber',
    primary: 'oklch(0.65 0.18 80)', // Amber
    energy: 'energy-balanced',
    icons: ['Coffee', 'Clock', 'TrendingUp', 'Users'],
    terminology: ['Quality Control', 'Rush Hours', 'Bean Inventory', 'Customer Flow']
  },
  hotel: {
    accent: 'accent-blue',
    primary: 'oklch(0.55 0.15 210)', // Blue
    energy: 'energy-subtle',
    icons: ['Building2', 'Star', 'Users', 'BarChart3'],
    terminology: ['Multi-Venue', 'Guest Experience', 'Enterprise Scale', 'Operations']
  }
} as const;

export const ROLE_THEMES = {
  owner: {
    variant: 'premium',
    ctaStyle: 'clerk-cta-primary cta-shimmer',
    badgeColor: 'bg-primary/10 text-primary border-primary/20',
    focus: 'strategic'
  },
  manager: {
    variant: 'professional',
    ctaStyle: 'clerk-cta-secondary',
    badgeColor: 'bg-secondary/10 text-secondary border-secondary/20',
    focus: 'operational'
  },
  staff: {
    variant: 'accessible',
    ctaStyle: 'clerk-cta-muted',
    badgeColor: 'bg-muted/10 text-muted-foreground border-muted/20',
    focus: 'practical'
  }
} as const;

export type IndustryType = keyof typeof INDUSTRY_THEMES;
export type RoleType = keyof typeof ROLE_THEMES;

export interface IndustryTheme {
  accent: string;
  primary: string;
  energy: string;
  icons: string[];
  terminology: string[];
}

export interface RoleTheme {
  variant: string;
  ctaStyle: string;
  badgeColor: string;
  focus: string;
}