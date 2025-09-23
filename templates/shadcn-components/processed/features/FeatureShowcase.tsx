// FeatureShowcase.tsx
// Interactive sidebar feature selection with hexagonal logo, restaurant workflow focus

"use client";

import React, { useState } from "react";
import { Check, ChefHat, ClipboardCheck, TrendingUp, Users, Shield, BarChart3 } from "lucide-react";

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
}

export interface FeatureShowcaseProps {
  industry?: "restaurant" | "bar" | "cafe" | "hotel";
}

export function FeatureShowcase({ industry = "restaurant" }: FeatureShowcaseProps) {
  const [selectedFeature, setSelectedFeature] = useState<string>("kitchen-ops");

  const features: Feature[] = [
    {
      id: "kitchen-ops",
      title: "Kitchen Operations",
      description: "Streamline your kitchen workflow with digital checklists, task management, and real-time coordination.",
      icon: <ChefHat className="w-6 h-6" />,
      benefits: [
        "Digital task management",
        "Real-time team coordination",
        "Automated shift handoffs",
        "Performance tracking"
      ]
    },
    {
      id: "compliance",
      title: "HACCP Compliance",
      description: "Automated temperature monitoring, compliance checklists, and instant audit preparation.",
      icon: <ClipboardCheck className="w-6 h-6" />,
      benefits: [
        "Automated temp logs",
        "Digital audit trails",
        "Instant compliance reports",
        "Health inspection ready"
      ]
    },
    {
      id: "analytics",
      title: "Performance Analytics",
      description: "Real-time insights into operations, labor costs, and efficiency metrics.",
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: [
        "Real-time dashboards",
        "Labor cost tracking",
        "Efficiency metrics",
        "Custom reports"
      ]
    },
    {
      id: "team",
      title: "Team Management",
      description: "Simplified scheduling, communication, and performance tracking for your staff.",
      icon: <Users className="w-6 h-6" />,
      benefits: [
        "Easy scheduling",
        "Team messaging",
        "Performance reviews",
        "Training tracking"
      ]
    }
  ];

  const selectedFeatureData = features.find(f => f.id === selectedFeature) || features[0];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="clerk-inspired-badge mb-4 inline-flex items-center gap-2">
            <Shield className="h-4 w-4" />
            <span className="text-sm font-medium">Restaurant Operations Platform</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything Your {industry === "restaurant" ? "Restaurant" : "Business"} Needs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed specifically for hospitality operations
          </p>
        </div>

        {/* Feature Showcase Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Sidebar - Feature Selection */}
          <div className="space-y-3">
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setSelectedFeature(feature.id)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                  selectedFeature === feature.id
                    ? "border-primary-500 bg-primary-50 dark:bg-primary-950"
                    : "border-border hover:border-primary-300 bg-card"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg ${
                    selectedFeature === feature.id
                      ? "bg-primary-500 text-white"
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {feature.description}
                    </p>
                  </div>
                  {selectedFeature === feature.id && (
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Main Content - Selected Feature Details */}
          <div className="lg:sticky lg:top-8">
            <div className="enterprise-card p-8">
              <div className="mb-6">
                <div className={`inline-flex p-3 rounded-xl bg-primary-500 text-white mb-4`}>
                  {selectedFeatureData.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{selectedFeatureData.title}</h3>
                <p className="text-muted-foreground">{selectedFeatureData.description}</p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-sm uppercase text-muted-foreground mb-4">
                  Key Benefits
                </h4>
                {selectedFeatureData.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-primary-600" />
                    </div>
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t">
                <button className="clerk-cta-primary w-full px-6 py-3 rounded-lg font-medium">
                  Learn More About {selectedFeatureData.title}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureShowcase;
