"use client";

import React from "react";
import { ChefHat, Users, ShieldCheck } from "lucide-react";

interface FeatureItem {
  title: string;
  description: string;
  icon: React.ElementType;
}

const features: FeatureItem[] = [
  {
    title: "Kitchen Workflows",
    description: "Standardize prep and service phases.",
    icon: ChefHat
  },
  {
    title: "Team Coordination", 
    description: "Clear tasking and status across shifts.",
    icon: Users
  },
  {
    title: "Food Safety",
    description: "Proactive HACCP checks and alerts.",
    icon: ShieldCheck
  }
];

interface FeatureGridProps {
  className?: string;
}

export function FeatureGrid({ className = "" }: FeatureGridProps) {
  return (
    <section className={`py-20 lg:py-32 ${className}`}>
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Restaurant Operations Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive HACCP compliance and operational control designed for modern restaurant chains
          </p>
        </div>

        {/* Feature Grid - 3 Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.title} 
                className="bg-background rounded-lg border border-border p-6 transition-all duration-200 hover:border-primary/30 hover:shadow-lg"
              >
                {/* Icon */}
                <div className="mb-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export type { FeatureItem, FeatureGridProps };

