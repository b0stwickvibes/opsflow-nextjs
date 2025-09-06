import { Metadata } from 'next';
import { RestaurantPageTemplate } from '@/components/domain/product/RestaurantPageTemplate';
import type { RestaurantPageContent } from '@/types/restaurant-pages';

export const metadata: Metadata = {
  title: 'Restaurant Solutions | OpsFlow - Restaurant Operations Management',
  description: 'Streamline kitchen execution, staff coordination, audits, and HACCP logging with OpsFlow. Built for full-service and casual dining restaurants.',
  keywords: 'restaurant operations, HACCP compliance, kitchen management, food safety, restaurant software',
};

// Restaurant Solutions Content - Following RESTAURANT-OPERATIONS-SYSTEMATIC-GUIDE.md
const restaurantSolutionsContent: RestaurantPageContent = {
  hero: {
    badge: "Restaurant operations, perfected",
    headline: ["Built for", "full-service & casual dining"],
    subtitle: "Streamline kitchen execution, staff coordination, audits, and HACCP logging—backed by live dashboards and alerts.",
    ctas: { 
      primary: "Start restaurant demo", 
      secondary: "Talk to an expert" 
    }
  },
  
  kpis: {
    realTime: true,
    metrics: [
      { 
        label: "Active Locations", 
        value: "2,500+", 
        description: "Using OpsFlow daily",
        trend: "up"
      },
      { 
        label: "HACCP Compliance", 
        value: "99.8%", 
        description: "Average success rate",
        trend: "stable" 
      },
      { 
        label: "Labor Cost Reduction", 
        value: "32%", 
        description: "Average savings",
        trend: "up"
      },
      { 
        label: "Time Saved", 
        value: "15hrs/wk", 
        description: "Per manager",
        trend: "up"
      }
    ]
  },
  
  workflows: [
    {
      title: "Smart Task Management",
      description: "AI-powered assignment and tracking for kitchen and FOH",
      features: [
        "Role-based task assignment",
        "Mobile completion tracking", 
        "Progress analytics",
        "Automated recurring tasks",
        "Real-time status updates",
        "Performance reporting"
      ],
      metrics: "40% faster task completion"
    },
    {
      title: "Food Safety & HACCP", 
      description: "Real-time monitoring across cold, frozen, and hot holding",
      features: [
        "Bluetooth sensor integration",
        "Automated corrective actions", 
        "Audit-ready logs",
        "Critical control point monitoring",
        "Violation alerts & escalation",
        "Regulatory report generation"
      ],
      metrics: "99.8% compliance rate"
    },
    {
      title: "Digital Audits",
      description: "Guided inspections with evidence capture",
      features: [
        "Photo documentation",
        "Corrective action workflows", 
        "PDF/CSV exports",
        "Custom inspection templates",
        "Multi-location standardization",
        "Historical trend analysis"
      ],
      metrics: "60% faster inspections"
    },
    {
      title: "Real-time Analytics",
      description: "Live insights and historical trends",
      features: [
        "Custom dashboards",
        "Compliance scoring", 
        "Performance trends",
        "Cost control analytics",
        "Staff productivity metrics",
        "Predictive maintenance alerts"
      ],
      metrics: "32% labor cost reduction"
    }
  ],
  
  proof: [
    {
      metric: "47% faster kitchen coordination",
      source: "Fine Dining Restaurant",
      industry: "Fine Dining"
    },
    {
      metric: "62% order accuracy improvement", 
      source: "Fast-Casual Chain",
      industry: "Fast Casual"
    },
    {
      metric: "85% reduction in health code violations",
      source: "Multi-location Restaurant Group",
      industry: "Restaurant Group"
    },
    {
      metric: "25% increase in customer satisfaction scores",
      source: "Family Restaurant",
      industry: "Family Dining"
    }
  ],

  cta: {
    title: "Ready to Transform Your Restaurant?",
    subtitle: "Join thousands of restaurants using OpsFlow to streamline operations and ensure compliance.",
    ctas: {
      primary: "Start Free Restaurant Demo",
      secondary: "Talk to Restaurant Expert"
    }
  }
};

export default function RestaurantSolutionsPage() {
  return (
    <RestaurantPageTemplate 
      content={restaurantSolutionsContent}
      industry="restaurants"
      role="general"
    />
  );
}
