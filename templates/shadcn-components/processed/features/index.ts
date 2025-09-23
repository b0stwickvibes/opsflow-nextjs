// Restaurant Operations Features - Complete Export Index
// All 14 feature components optimized for restaurant operations with HACCP compliance

// Core Feature Components
export { FeatureGrid } from "./FeatureGrid";

export { FeatureTabsShowcase } from "./FeatureTabsShowcase";

export { FeatureCards } from "./FeatureCards";
export type { StaffManagementFeature, FeatureCardsProps } from "./FeatureCards";

export { FeatureTabs } from "./FeatureTabs";
export type { AnalyticsTab, FeatureTabsProps } from "./FeatureTabs";

// Marketing Components
export { MarketingRollingBlocks } from "@/components/domain/marketing";
export { FeatureRollingBlocks } from "./FeatureRollingBlocks";

// Comparison & Timeline Components

export { FeatureTimeline } from "./FeatureTimeline";
export type { ImplementationPhase, FeatureTimelineProps } from "./FeatureTimeline";

// Specialized Feature Components
export { FeatureHighlight } from "./FeatureHighlight";
export type { ROIHighlight, FeatureHighlightProps } from "./FeatureHighlight";


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

export { FeatureShowcase2 } from "./FeatureShowcase2";
export type { ROIMetric, FeatureShowcase2Props } from "./FeatureShowcase2";

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
  FeatureShowcase2: {
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

// Feature Component Mapping intentionally omitted here to avoid value re-export issues.
// Consumers should import specific components directly.
