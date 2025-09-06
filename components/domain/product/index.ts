// Product Domain Components
// Following ENTERPRISE-FILE-STRUCTURE.md patterns

// Features (Product capability showcases)
export * from './features';

// Integration (Product integrations)  
export * from './integration';

// Existing product components
export * from './RestaurantPageTemplate';
export * from './RestaurantHero';
export * from './RestaurantKPIs';
export * from './RestaurantWorkflows';

// Comparison Components
export { ComparisonTable } from './ComparisonTable';
export { CompetitorAnalysis } from './CompetitorAnalysis';

// Re-export types for convenience
export type { 
  IndustryType,
  RoleType 
} from '@/types/restaurant-pages';