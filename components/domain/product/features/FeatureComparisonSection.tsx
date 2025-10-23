"use client";

import React from "react";
import { Check, X, Minus } from "lucide-react";
import { Badge } from "@/components/ui/badge";

/**
 * FeatureComparisonSection - Compare feature availability across plans
 * 
 * DESIGN STANDARDS:
 * - Uses OKLCH color tokens exclusively
 * - Professional table styling
 * - BARS-DEMO card standards
 * - Enterprise comparison layout
 * - Restaurant operations focus
 */

const plans = [
  {
    name: "Starter",
    badge: "Small Teams",
    features: {
      taskManagement: "basic",
      temperatureMonitoring: true,
      haccpCompliance: "basic",
      teamManagement: true,
      analytics: "basic",
      mobileApps: true,
      multiLocation: false,
      integrations: "limited",
      advancedReporting: false,
      aiInsights: false,
      dedicatedSupport: false,
      customBranding: false
    }
  },
  {
    name: "Professional",
    badge: "Most Popular",
    popular: true,
    features: {
      taskManagement: true,
      temperatureMonitoring: true,
      haccpCompliance: true,
      teamManagement: true,
      analytics: true,
      mobileApps: true,
      multiLocation: "up to 5",
      integrations: true,
      advancedReporting: true,
      aiInsights: "basic",
      dedicatedSupport: false,
      customBranding: false
    }
  },
  {
    name: "Enterprise",
    badge: "Full Platform",
    features: {
      taskManagement: true,
      temperatureMonitoring: true,
      haccpCompliance: true,
      teamManagement: true,
      analytics: true,
      mobileApps: true,
      multiLocation: "unlimited",
      integrations: true,
      advancedReporting: true,
      aiInsights: true,
      dedicatedSupport: true,
      customBranding: true
    }
  }
];

const featureRows = [
  {
    category: "Core Operations",
    features: [
      { key: "taskManagement", name: "Task Management & Checklists", description: "Custom templates, assignments, tracking" },
      { key: "temperatureMonitoring", name: "Temperature Monitoring", description: "Bluetooth sensors, alerts, logs" },
      { key: "haccpCompliance", name: "HACCP Compliance Tools", description: "Digital audits, corrective actions" },
      { key: "teamManagement", name: "Team & Staff Management", description: "Scheduling, training, communication" }
    ]
  },
  {
    category: "Analytics & Insights",
    features: [
      { key: "analytics", name: "Analytics Dashboard", description: "Real-time metrics and KPIs" },
      { key: "advancedReporting", name: "Advanced Reporting", description: "Custom reports, exports, scheduling" },
      { key: "aiInsights", name: "AI-Powered Insights", description: "Predictive analytics and recommendations" }
    ]
  },
  {
    category: "Platform & Access",
    features: [
      { key: "mobileApps", name: "Mobile Apps (iOS & Android)", description: "Full-featured native apps" },
      { key: "multiLocation", name: "Multi-Location Management", description: "Central dashboard for multiple sites" },
      { key: "integrations", name: "Integrations & API", description: "POS, inventory, HR systems" }
    ]
  },
  {
    category: "Support & Customization",
    features: [
      { key: "dedicatedSupport", name: "Dedicated Account Manager", description: "Priority support and onboarding" },
      { key: "customBranding", name: "Custom Branding", description: "White-label options" }
    ]
  }
];

function FeatureCell({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <div className="flex justify-center">
        <div className="w-6 h-6 rounded-full bg-secondary/10 border border-secondary/20 flex items-center justify-center">
          <Check className="w-4 h-4 text-secondary" />
        </div>
      </div>
    );
  }
  
  if (value === false) {
    return (
      <div className="flex justify-center">
        <div className="w-6 h-6 rounded-full bg-muted/50 flex items-center justify-center">
          <X className="w-4 h-4 text-muted-foreground/40" />
        </div>
      </div>
    );
  }
  
  if (value === "basic" || value === "limited") {
    return (
      <div className="flex justify-center">
        <div className="w-6 h-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
          <Minus className="w-4 h-4 text-primary" />
        </div>
      </div>
    );
  }
  
  // String values (like "up to 5", "unlimited")
  return (
    <div className="text-center text-sm text-foreground font-medium">
      {value}
    </div>
  );
}

export function FeatureComparisonSection() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex">
          <div className="clerk-inspired-badge">
            Plan Comparison
          </div>
        </div>
        <h2 className="enterprise-headline">
          Choose the Right Plan
          <span className="block heading-brand-gradient mt-2">
            For Your Restaurant
          </span>
        </h2>
        <p className="enterprise-body">
          All plans include core features. Upgrade for advanced analytics, 
          multi-location management, and dedicated support.
        </p>
      </div>

      {/* Comparison Table */}
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden border border-border rounded-xl">
            <table className="min-w-full divide-y divide-border">
              {/* Table Header */}
              <thead className="bg-muted/30">
                <tr>
                  <th scope="col" className="py-6 pl-6 pr-3 text-left text-sm font-semibold text-foreground w-2/5">
                    Features
                  </th>
                  {plans.map((plan) => (
                    <th key={plan.name} scope="col" className="px-3 py-6 text-center w-1/5">
                      <div className="space-y-2">
                        <div className="text-lg font-bold text-foreground">
                          {plan.name}
                        </div>
                        <div className="flex justify-center">
                          <Badge 
                            variant={plan.popular ? "default" : "secondary"}
                            className="text-xs"
                          >
                            {plan.badge}
                          </Badge>
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-border bg-background">
                {featureRows.map((section, sectionIdx) => (
                  <React.Fragment key={sectionIdx}>
                    {/* Category Header */}
                    <tr className="bg-muted/10">
                      <td colSpan={4} className="py-3 pl-6 pr-3">
                        <div className="text-sm font-semibold text-foreground/80 uppercase tracking-wide">
                          {section.category}
                        </div>
                      </td>
                    </tr>
                    
                    {/* Feature Rows */}
                    {section.features.map((feature, featureIdx) => (
                      <tr key={featureIdx} className="hover:bg-muted/5 transition-colors">
                        <td className="py-4 pl-6 pr-3">
                          <div className="space-y-1">
                            <div className="text-sm font-medium text-foreground">
                              {feature.name}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {feature.description}
                            </div>
                          </div>
                        </td>
                        {plans.map((plan) => (
                          <td key={plan.name} className="px-3 py-4">
                            <FeatureCell value={plan.features[feature.key as keyof typeof plan.features]} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-secondary/10 border border-secondary/20 flex items-center justify-center">
            <Check className="w-4 h-4 text-secondary" />
          </div>
          <span>Included</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
            <Minus className="w-4 h-4 text-primary" />
          </div>
          <span>Limited</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-muted/50 flex items-center justify-center">
            <X className="w-4 h-4 text-muted-foreground/40" />
          </div>
          <span>Not included</span>
        </div>
      </div>
    </div>
  );
}
