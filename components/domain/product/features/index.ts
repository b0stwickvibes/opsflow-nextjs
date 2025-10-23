// Restaurant Operations Features - Complete Export Index
// All feature components optimized for restaurant operations with HACCP compliance

// Core Feature Components
export { FeatureGrid } from "./FeatureGrid";
export type { RestaurantFeature, FeatureGridProps } from "./FeatureGrid";

export { FeatureShowcase } from "./FeatureShowcase";
export type { KitchenOperation, FeatureShowcaseProps } from "./FeatureShowcase";

export { FeatureCards } from "./FeatureCards";
export type { StaffManagementFeature, FeatureCardsProps } from "./FeatureCards";

export { FeatureTabs } from "./FeatureTabs";
export type { AnalyticsTab, FeatureTabsProps } from "./FeatureTabs";

// Comparison & Timeline Components
export { FeatureComparison } from "./FeatureComparison";
export type { CompetitorFeature, CompetitionCard, FeatureComparisonProps } from "./FeatureComparison";

export { FeatureTimeline } from "./FeatureTimeline";
export type { ImplementationPhase, FeatureTimelineProps } from "./FeatureTimeline";

// Specialized Feature Components
export { FeatureHighlight } from "./FeatureHighlight";
export type { ROIHighlight, FeatureHighlightProps } from "./FeatureHighlight";

export { FeatureMatrix } from "./FeatureMatrix";
export type { RestaurantMatrixFeature, FeatureMatrixProps } from "./FeatureMatrix";

export { FeatureCarousel } from "./FeatureCarousel";
export type { RestaurantLocation, FeatureCarouselProps } from "./FeatureCarousel";

// Advanced Layout Components
export { FeatureSplit } from "./FeatureSplit";
export type { AuditMetric, FeatureSplitProps } from "./FeatureSplit";

export { FeatureBento } from "./FeatureBento";
export type { DashboardWidget, FeatureBentoProps } from "./FeatureBento";

export { FeatureAccordion } from "./FeatureAccordion";
export type { ComplianceProcedure, FeatureAccordionProps } from "./FeatureAccordion";

export { FeatureList } from "./FeatureList";
export type { EquipmentItem, FeatureListProps } from "./FeatureList";

export { FeatureShowcaseTwo } from "./FeatureShowcaseTwo";
export type { ROIMetric, FeatureShowcaseTwoProps } from "./FeatureShowcaseTwo";

// New Product Features Page Components
export { FeatureCategoriesGrid } from "./FeatureCategoriesGrid";
export { InteractiveFeatureShowcase } from "./InteractiveFeatureShowcase";
export { FeatureComparisonSection } from "./FeatureComparisonSection";
export { FeaturesCTA } from "./FeaturesCTA";

// Stripe/Clerk Style Components
export { StripeFeatureSection, CompactFeatureList } from "./StripeFeatureSection";
export { StripePlatformOverview } from "./StripePlatformOverview";

// Feature Categories for Restaurant Operations
export const FEATURE_CATEGORIES = {
  HACCP_COMPLIANCE: "haccp-compliance",
  KITCHEN_OPERATIONS: "kitchen-operations", 
  STAFF_MANAGEMENT: "staff-management",
  ANALYTICS_REPORTING: "analytics-reporting",
  MULTI_LOCATION: "multi-location",
  COST_CONTROL: "cost-control",
  AUDIT_DOCUMENTATION: "audit-documentation",
  EQUIPMENT_MONITORING: "equipment-monitoring",
  ROI_METRICS: "roi-metrics",
  IMPLEMENTATION: "implementation"
} as const;

// Restaurant Operations Focus Areas
export const RESTAURANT_FOCUS_AREAS = {
  FOOD_SAFETY: "Food Safety & HACCP Compliance",
  KITCHEN_EFFICIENCY: "Kitchen Operations Excellence", 
  WORKFORCE_OPTIMIZATION: "Staff Coordination & Management",
  COMPLIANCE_AUTOMATION: "Automated Compliance & Documentation",
  MULTI_LOCATION_MANAGEMENT: "Multi-location Operations Control",
  COST_OPTIMIZATION: "Labor & Food Cost Management", 
  CUSTOMER_EXPERIENCE: "Service Quality & Speed",
  ANALYTICS_INSIGHTS: "Real-time Analytics & Reporting",
  EQUIPMENT_HEALTH: "Equipment Monitoring & Maintenance",
  ROI_TRACKING: "Return on Investment Metrics"
} as const;

// Component Usage Examples
export const FEATURE_USAGE_EXAMPLES = {
  // HACCP Compliance Grid
  FeatureGrid: {
    description: "Comprehensive HACCP compliance dashboard with real-time monitoring",
    bestFor: "Homepage hero sections, compliance overview pages",
    props: { showMetrics: true, variant: "default" }
  },
  
  // Kitchen Operations Showcase
  FeatureShowcase: {
    description: "Interactive carousel showcasing kitchen operation solutions",
    bestFor: "Product pages, kitchen management sections",
    props: { showMetrics: true, variant: "carousel" }
  },
  
  // Staff Management Cards
  FeatureCards: {
    description: "Staff management features with productivity metrics",
    bestFor: "HR management pages, workforce optimization sections",
    props: { showMetrics: true, variant: "detailed" }
  },
  
  // Analytics & Reporting Tabs
  FeatureTabs: {
    description: "Interactive analytics dashboard with multiple data views",
    bestFor: "Analytics pages, reporting dashboards",
    props: { showMetrics: true, defaultTab: "operations-dashboard" }
  },
  
  // Competitor Comparison
  FeatureComparison: {
    description: "Detailed comparison with JOLT and Xenia.Teams",
    bestFor: "Competitive analysis pages, sales materials",
    props: { showPricing: true, variant: "cards" }
  },
  
  // Implementation Timeline
  FeatureTimeline: {
    description: "12-week implementation process with progress tracking",
    bestFor: "Onboarding pages, implementation guides",
    props: { showProgress: true, variant: "horizontal" }
  },
  
  // ROI Highlights
  FeatureHighlight: {
    description: "Proven ROI metrics with client success stories",
    bestFor: "Landing pages, case study sections",
    props: { showStats: true, variant: "spotlight" }
  },
  
  // Feature Matrix
  FeatureMatrix: {
    description: "Complete restaurant operations capability matrix",
    bestFor: "Product overview pages, feature comparison",
    props: { showMetrics: true, variant: "grid" }
  },
  
  // Multi-location Carousel
  FeatureCarousel: {
    description: "Multi-location management with network visualization",
    bestFor: "Enterprise pages, chain restaurant sections",
    props: { showAnimations: true, variant: "showcase" }
  },
  
  // Audit & Documentation Split
  FeatureSplit: {
    description: "Audit preparation and compliance documentation",
    bestFor: "Compliance pages, audit preparation guides",
    props: { showAnimations: true, variant: "split" }
  },
  
  // Operations Dashboard Bento
  FeatureBento: {
    description: "Interactive dashboard widget preview in bento layout",
    bestFor: "Dashboard previews, operations control centers",
    props: { showLiveData: true, variant: "dashboard" }
  },
  
  // Compliance Procedures Accordion
  FeatureAccordion: {
    description: "Detailed compliance procedures with step-by-step guides",
    bestFor: "Training pages, procedure documentation",
    props: { showCompliance: true, variant: "procedures" }
  },
  
  // Equipment Monitoring List
  FeatureList: {
    description: "Real-time equipment health monitoring with IoT integration",
    bestFor: "Equipment management pages, maintenance dashboards",
    props: { showDetails: true, variant: "monitoring" }
  },
  
  // ROI Metrics Showcase
  FeatureShowcaseTwo: {
    description: "Comprehensive ROI metrics with sparkle animations",
    bestFor: "Value proposition pages, ROI calculators",
    props: { showSparkles: true, variant: "showcase" }
  }
} as const;

// Restaurant Industry Metrics
export const RESTAURANT_METRICS = {
  AVERAGE_COMPLIANCE_RATE: "99.8%",
  AVERAGE_COST_REDUCTION: "32%",
  AVERAGE_EFFICIENCY_GAIN: "40%",
  TYPICAL_ROI_TIMEFRAME: "45-60 days",
  CLIENT_SATISFACTION: "94%",
  HEALTH_INSPECTION_PASS_RATE: "99.8%",
  LABOR_COST_SAVINGS: "25-35%",
  EQUIPMENT_UPTIME: "98.5%",
  AUDIT_PREP_TIME_REDUCTION: "80%",
  TOTAL_RESTAURANTS_SERVED: "500+"
} as const;

// Feature Component Mapping intentionally omitted here; import concrete components directly where needed.
