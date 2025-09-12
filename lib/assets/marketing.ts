/**
 * OpsFlow Marketing Assets Manifest
 * Centralized registry for all marketing images with metadata
 * Import from this file instead of using direct paths
 */

export type Aspect = '16:9' | '1:1' | '4:3';
export type Usage = 'hero' | 'card' | 'feature' | 'carousel' | 'industry' | 'avatar' | 'background';

export interface BrandGenMeta {
  seed: number;
  prompt: string;
  styleRefs?: string[];
  lens?: string;
  aperture?: string;
  negative?: string;
}

export interface MarketingAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
  aspect?: Aspect;
  usage?: Usage;
  category: 'hero' | 'card' | 'feature' | 'avatar' | 'background' | 'industry';
  priority?: 'high' | 'medium' | 'low';
  sizes?: string;
  meta?: BrandGenMeta;
  tags?: string[];
}

export interface AssetCollection {
  [key: string]: MarketingAsset;
}

// Hero Images (16:9) - Homepage and landing page headers
export const heroAssets: AssetCollection = {
  restaurantOperations: {
    src: '/images/marketing/heroes/opsflow-abstract-hero-01.svg',
    alt: 'Professional restaurant team using tablets for task management and temperature monitoring in modern commercial kitchen',
    width: 1920,
    height: 1080,
    aspect: '16:9',
    usage: 'hero',
    category: 'hero',
    priority: 'high',
    meta: {
      seed: 12345,
      prompt: 'Modern commercial kitchen, stainless steel, clean and organized, diverse chef team in uniforms coordinating with mounted tablets showing generic operational dashboard (charts, temperature logs, checklists), visible temperature probes, bright soft softbox lighting, professional photography, 24–35mm, f/5.6, shallow background, negative space on left third for headline, cohesive series, consistent color grading.',
      styleRefs: ['<STYLE_REF_1>','<STYLE_REF_2>'],
      lens: '24–35mm',
      aperture: 'f/5.6',
      negative: 'no logos, no brand marks, no watermarks, no text artifacts, no deformed hands, no extra fingers, no duplicated faces, no motion blur on faces, no home kitchen props, no messy environments'
    },
    tags: ['kitchen','tablet','team']
  },
  taskManagement: {
    src: '/images/marketing/heroes/opsflow-abstract-hero-02.svg',
    alt: 'Kitchen staff completing digital checklists on mounted tablets with real-time task tracking',
    width: 1920,
    height: 1080,
    aspect: '16:9',
    usage: 'hero',
    category: 'hero',
    priority: 'high'
  },
  complianceAudit: {
    src: '/images/marketing/heroes/compliance-audit-hero-01.webp',
    alt: 'Restaurant manager reviewing HACCP compliance reports on tablet with organized kitchen background',
    width: 1920,
    height: 1080,
    aspect: '16:9',
    usage: 'hero',
    category: 'hero',
    priority: 'medium'
  },
  temperatureMonitoring: {
    src: '/images/marketing/heroes/temperature-monitoring-hero-01.webp',
    alt: 'Chef checking temperature logs on digital interface with walk-in cooler and monitoring equipment visible',
    width: 1920,
    height: 1080,
    aspect: '16:9',
    usage: 'hero',
    category: 'hero',
    priority: 'medium'
  }
};

// Feature Cards (1:1) - Feature highlights and benefit showcases
export const cardAssets: AssetCollection = {
  tabletChecklist: {
    src: '/images/marketing/cards/opsflow-abstract-card-01.svg',
    alt: 'Close-up of hands using tablet to complete opening checklist in commercial kitchen',
    width: 1200,
    height: 1200,
    aspect: '1:1',
    usage: 'card',
    category: 'card',
    priority: 'high',
    tags: ['tablet','checklist']
  },
  temperatureProbe: {
    src: '/images/marketing/cards/opsflow-abstract-card-02.svg',
    alt: 'Digital thermometer reading temperature in walk-in cooler with compliance documentation',
    width: 1200,
    height: 1200,
    aspect: '1:1',
    usage: 'card',
    category: 'card',
    priority: 'high',
    tags: ['temperature','compliance']
  },
  teamMeeting: {
    src: '/images/marketing/cards/team-meeting-card-01.webp',
    alt: 'Restaurant manager conducting team meeting with staff schedules displayed on tablet',
    width: 1200,
    height: 1200,
    aspect: '1:1',
    usage: 'card',
    category: 'card',
    priority: 'medium',
    tags: ['team','scheduling']
  },
  complianceCheck: {
    src: '/images/marketing/cards/compliance-check-card-01.webp',
    alt: 'Staff member reviewing HACCP compliance checklist on mounted kitchen tablet',
    width: 1200,
    height: 1200,
    aspect: '1:1',
    usage: 'card',
    category: 'card',
    priority: 'medium',
    tags: ['compliance','checklist']
  },
  inventoryManagement: {
    src: '/images/marketing/cards/inventory-management-card-01.webp',
    alt: 'Kitchen staff using tablet to track inventory in organized walk-in storage area',
    width: 1200,
    height: 1200,
    category: 'card',
    priority: 'low'
  }
};

// Feature Images (4:3) - Detailed feature explanations
export const featureAssets: AssetCollection = {
  haccpCompliance: {
    src: '/images/marketing/features/haccp-compliance-feature-01.webp',
    alt: 'Organized commercial kitchen with visible HACCP compliance documentation and temperature monitoring systems',
    width: 1600,
    height: 1200,
    aspect: '4:3',
    usage: 'feature',
    category: 'feature',
    priority: 'high',
    tags: ['haccp','compliance']
  },
  staffScheduling: {
    src: '/images/marketing/features/staff-scheduling-feature-01.webp',
    alt: 'Restaurant manager reviewing staff schedules and assignments on tablet with team in background',
    width: 1600,
    height: 1200,
    aspect: '4:3',
    usage: 'feature',
    category: 'feature',
    priority: 'high',
    tags: ['scheduling','team']
  },
  coldStorageMonitoring: {
    src: '/images/marketing/features/cold-storage-monitoring-feature-01.webp',
    alt: 'Walk-in cooler with digital temperature monitoring system and organized food storage',
    width: 1600,
    height: 1200,
    aspect: '4:3',
    usage: 'feature',
    category: 'feature',
    priority: 'medium',
    tags: ['cold-storage','temperature']
  },
  taskCompletion: {
    src: '/images/marketing/features/task-completion-feature-01.webp',
    alt: 'Kitchen team completing closing procedures with digital task tracking and verification',
    width: 1600,
    height: 1200,
    aspect: '4:3',
    usage: 'feature',
    category: 'feature',
    priority: 'medium',
    tags: ['tasks','closing']
  }
};

// Industry-Specific Assets
export const industryAssets = {
  restaurants: {
    fullServiceDining: {
    src: '/images/industries/restaurants/full-service-dining-01.webp',
      alt: 'Busy full-service restaurant kitchen with coordinated team using digital management systems',
      width: 1600,
      height: 1200,
      category: 'industry' as const,
      priority: 'high' as const
    },
    fastCasual: {
      src: '/images/industries/restaurants/fast-casual-ops-01.webp',
      alt: 'Fast-casual restaurant kitchen with streamlined operations and digital order management',
      width: 1600,
      height: 1200,
      category: 'industry' as const,
      priority: 'medium' as const
    }
  },
  coffee: {
    coffeeShopOps: {
      src: '/images/industries/coffee/coffee-shop-ops-01.webp',
      alt: 'Coffee shop team managing operations with tablet-based systems and quality control',
      width: 1600,
      height: 1200,
      category: 'industry' as const,
      priority: 'high' as const
    }
  },
  bars: {
    barOperations: {
      src: '/images/industries/bars/bar-operations-01.webp',
      alt: 'Professional bar staff managing inventory and compliance with digital systems',
      width: 1600,
      height: 1200,
      category: 'industry' as const,
      priority: 'medium' as const
    }
  },
  hotels: {
    hotelDining: {
      src: '/images/industries/hotels/hotel-dining-ops-01.webp',
      alt: 'Hotel restaurant kitchen with multi-venue management systems and compliance tracking',
      width: 1600,
      height: 1200,
      category: 'industry' as const,
      priority: 'medium' as const
    }
  }
};

// Team/Avatar Assets
export const teamAssets: AssetCollection = {
  restaurantManager: {
    src: '/images/avatars/restaurant-manager-01.webp',
    alt: 'Professional restaurant manager in clean uniform, confident pose',
    width: 800,
    height: 800,
    category: 'avatar',
    priority: 'medium'
  },
  headChef: {
    src: '/images/avatars/head-chef-01.webp',
    alt: 'Experienced head chef in professional kitchen attire, leadership presence',
    width: 800,
    height: 800,
    category: 'avatar',
    priority: 'medium'
  },
  kitchenStaff: {
    src: '/images/avatars/kitchen-staff-01.webp',
    alt: 'Professional kitchen staff member in clean uniform, focused and competent',
    width: 800,
    height: 800,
    category: 'avatar',
    priority: 'low'
  }
};

// Background/Environment Assets
export const backgroundAssets: AssetCollection = {
  cleanKitchen: {
    src: '/images/marketing/backgrounds/clean-kitchen-bg-01.webp',
    alt: 'Clean, organized commercial kitchen background with stainless steel surfaces',
    width: 1920,
    height: 1080,
    category: 'background',
    priority: 'low'
  },
  restaurantDining: {
    src: '/images/marketing/backgrounds/restaurant-dining-bg-01.webp',
    alt: 'Professional restaurant dining room setup with clean, modern aesthetic',
    width: 1920,
    height: 1080,
    category: 'background',
    priority: 'low'
  }
};

// Main marketing assets export
export const marketingAssets = {
  heroes: heroAssets,
  cards: cardAssets,
  features: featureAssets,
  industries: industryAssets,
  team: teamAssets,
  backgrounds: backgroundAssets
};

// Utility functions for asset management
export const getAssetsByCategory = (category: MarketingAsset['category']) => {
  const allAssets = [
    ...Object.values(heroAssets),
    ...Object.values(cardAssets),
    ...Object.values(featureAssets),
    ...Object.values(teamAssets),
    ...Object.values(backgroundAssets)
  ];
  
  return allAssets.filter(asset => asset.category === category);
};

export const getAssetsByPriority = (priority: NonNullable<MarketingAsset['priority']>) => {
  const allAssets = [
    ...Object.values(heroAssets),
    ...Object.values(cardAssets),
    ...Object.values(featureAssets),
    ...Object.values(teamAssets),
    ...Object.values(backgroundAssets)
  ];
  
  return allAssets.filter(asset => asset.priority === priority);
};

export const getAllAssets = () => {
  return {
    ...heroAssets,
    ...cardAssets,
    ...featureAssets,
    ...teamAssets,
    ...backgroundAssets
  };
};

// Component usage examples:
/*
// In a component:
import { marketingAssets } from '@/lib/assets/marketing';

<Image
  src={marketingAssets.heroes.restaurantOperations.src}
  alt={marketingAssets.heroes.restaurantOperations.alt}
  width={marketingAssets.heroes.restaurantOperations.width}
  height={marketingAssets.heroes.restaurantOperations.height}
  priority={marketingAssets.heroes.restaurantOperations.priority === 'high'}
/>

// For dynamic usage:
const heroImage = marketingAssets.heroes.restaurantOperations;
<Image {...heroImage} priority={heroImage.priority === 'high'} />
*/

export default marketingAssets;
