"use client";

import React from "react";
import { CheckCircle, Calendar, BarChart3, Zap } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Restaurant operations focused features following BARS-DEMO-DESIGN-STANDARDS
const RESTAURANT_FEATURES = [
  {
    title: "Smart Scheduling",
    description: "Optimize staff schedules with AI-powered demand forecasting and real-time adjustment capabilities for peak efficiency.",
    icon: Calendar,
    image: "/images/dashboard-scheduling.svg", // Placeholder - would need actual restaurant scheduling mockup
    benefits: ["Auto staff optimization", "Peak hour coverage", "Labor cost reduction"]
  },
  {
    title: "Revenue Analytics", 
    description: "Track performance with comprehensive analytics covering sales trends, customer insights, and operational metrics.",
    icon: BarChart3,
    image: "/images/dashboard-analytics.svg", // Placeholder - would need actual analytics mockup
    benefits: ["Real-time sales data", "Customer behavior insights", "Profit margin tracking"]
  },
  {
    title: "Operations Hub",
    description: "Streamline daily operations with integrated inventory management, order processing, and team coordination tools.",
    icon: Zap,
    image: "/images/dashboard-operations.svg", // Placeholder - would need actual operations mockup
    benefits: ["Inventory automation", "Order workflow", "Team communication"]
  },
];

interface FeatureTabsShowcaseProps {
  industry?: 'restaurant' | 'retail' | 'healthcare';
  className?: string;
}

const FeatureTabsShowcase = ({ 
  industry = 'restaurant',
  className = ""
}: FeatureTabsShowcaseProps) => {
  return (
    <section className={`py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section - Following BARS-DEMO-DESIGN-STANDARDS */}
        <div className="text-center mb-16 space-y-6">
          <div className="clerk-inspired-badge mx-auto motion-fade-in-up-320">
            <CheckCircle className="w-4 h-4 mr-2" />
            Optimize Operations
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground motion-fade-in-up-320 animation-delay-100">
            Optimize every aspect of your restaurant
          </h2>
          
          <p className="enterprise-body max-w-2xl mx-auto text-muted-foreground motion-fade-in-up-320 animation-delay-200">
            Achieve seamless productivity with intelligent scheduling, 
            insightful analytics, and effortless operational integrations.
          </p>
        </div>

        {/* Tabs Feature Showcase */}
        <div className="clerk-glass-card motion-fade-in-up-320 animation-delay-300">
          <Tabs defaultValue={RESTAURANT_FEATURES[0].title} className="w-full">
            
            {/* Tab Navigation */}
            <TabsList className="h-auto w-full bg-transparent p-0 grid lg:grid-cols-3 divide-x border-b">
              {RESTAURANT_FEATURES.map((feature, index) => (
                <TabsTrigger
                  key={feature.title}
                  value={feature.title}
                  className="group relative h-full w-full rounded-none px-6 py-8 text-left data-[state=active]:shadow-none hover-scale-103 transition-all duration-300"
                >
                  {/* Active indicator line */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-primary to-primary/50 transition-all duration-300 group-data-[state=active]:w-full" />
                  
                  {/* Feature icon and content */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="relative w-8 h-8">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 rounded-full opacity-0 group-data-[state=active]:opacity-100 transition-opacity duration-300" />
                        <div className="absolute inset-[2px] bg-background rounded-full" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <feature.icon className="w-4 h-4 text-primary" />
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {feature.title}
                      </h3>
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                    
                    {/* Benefits list */}
                    <div className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-purple-100 rounded-full flex items-center justify-center">
                            <CheckCircle className="w-2.5 h-2.5 text-purple-600" />
                          </div>
                          <span className="text-xs text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Tab Content - Dashboard Mockups */}
            {RESTAURANT_FEATURES.map((feature) => (
              <TabsContent key={feature.title} value={feature.title} className="mt-0">
                <div className="p-8 lg:p-12">
                  <div className="stripe-glass-card p-8 bg-gradient-to-br from-muted/30 to-muted/10">
                    {/* Dashboard mockup placeholder */}
                    <div className="aspect-video bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg border border-primary/10 flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <feature.icon className="w-16 h-16 text-primary mx-auto" />
                        <div className="space-y-2">
                          <h4 className="text-lg font-semibold text-foreground">
                            {feature.title} Dashboard
                          </h4>
                          <p className="text-sm text-muted-foreground max-w-md">
                            Interactive {feature.title.toLowerCase()} interface would be displayed here
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export { FeatureTabsShowcase };
