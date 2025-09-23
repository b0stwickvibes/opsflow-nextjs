"use client";

import React, { useState } from "react";
import { Calendar, BarChart3, Zap, CheckCircle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface RestaurantFeature {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  details: {
    title: string;
    description: string;
    benefits: string[];
    integrations?: string[];
  };
}

// Restaurant operations data following BARS-DEMO-DESIGN-STANDARDS
const RESTAURANT_FEATURES: RestaurantFeature[] = [
  {
    id: "smart-scheduling",
    title: "Smart Scheduling",
    description: "Optimize staff schedules with AI-powered demand forecasting and real-time adjustment capabilities for peak efficiency.",
    icon: Calendar,
    details: {
      title: "Intelligent Staff Management",
      description: "Transform your labor management with AI-powered scheduling that predicts demand, optimizes coverage, and reduces costs while improving staff satisfaction.",
      benefits: [
        "Reduce labor costs by 15-20%",
        "Eliminate scheduling conflicts automatically",
        "Improve staff satisfaction with fair rotations",
        "Real-time demand forecasting integration",
        "Mobile staff communication and shift trading"
      ],
      integrations: ["Toast POS", "Square", "Deputy", "When I Work", "7shifts", "Homebase"]
    }
  },
  {
    id: "revenue-analytics",
    title: "Revenue Analytics", 
    description: "Track performance with comprehensive analytics covering sales trends, customer insights, and operational metrics.",
    icon: BarChart3,
    details: {
      title: "Data-Driven Revenue Optimization",
      description: "Unlock hidden revenue opportunities with comprehensive analytics that track sales patterns, identify top performers, and optimize menu pricing strategies.",
      benefits: [
        "Increase revenue by 12% through data insights",
        "Real-time sales performance tracking",
        "Menu engineering and pricing optimization",
        "Customer behavior and preference analysis",
        "Automated reporting for stakeholders"
      ],
      integrations: ["Toast", "Square", "Resy", "OpenTable", "Yelp", "Google Analytics"]
    }
  },
  {
    id: "operations-hub",
    title: "Operations Hub",
    description: "Streamline daily operations with integrated inventory management, order processing, and team coordination tools.",
    icon: Zap,
    details: {
      title: "Unified Restaurant Command Center",
      description: "Centralize all restaurant operations in one powerful dashboard that connects inventory, orders, staff, and compliance for seamless daily management.",
      benefits: [
        "Cut operational time by 30%",
        "Unified inventory and order management",
        "Real-time kitchen coordination tools",
        "Automated compliance monitoring",
        "Multi-location management capabilities"
      ],
      integrations: ["Toast KDS", "Square KDS", "Sysco", "US Foods", "DoorDash", "Uber Eats"]
    }
  }
];

interface Feature169RestaurantProps {
  industry?: 'restaurant' | 'retail' | 'healthcare';
  className?: string;
}

/**
 * Feature169 Restaurant - Interactive Feature Selection following BARS-DEMO-DESIGN-STANDARDS
 * 
 * GOLD STANDARD COMPLIANCE + CLERK/STRIPE ENHANCEMENTS:
 * - Interactive card selection with state management
 * - clerk-inspired-badge for all badge elements
 * - clerk-glass-card for main content cards
 * - Purple checkboxes (bg-purple-100, text-purple-600) for benefits
 * - Primary/secondary color tokens throughout
 * - Restaurant operations focus with POS integrations
 * - Enhanced interactivity with hover states and selection rings
 * - Professional integration badges
 */
const Feature169Restaurant = ({ 
  industry = 'restaurant',
  className = ""
}: Feature169RestaurantProps) => {
  const [selectedFeature, setSelectedFeature] = useState<string>("smart-scheduling");
  const currentFeature = RESTAURANT_FEATURES.find((f) => f.id === selectedFeature);

  return (
    <section id="optimized-scheduling" className={cn("section-marketing", className)}>
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section - Following BARS-DEMO patterns */}
        <div className="text-center space-y-6 mb-16">
          {/* Badge - BARS-DEMO standard clerk-inspired-badge */}
          <div className="clerk-inspired-badge motion-fade-in-up-320">
            <CheckCircle className="w-4 h-4" />
            <span>Restaurant Operations</span>
          </div>
          
          {/* Headline - Following BARS typography standards */}
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight motion-fade-in-up-320 animation-delay-100">
            Optimize every aspect of your restaurant
          </h2>
          
          {/* Description - Using enterprise-body class */}
          <p className="enterprise-body max-w-2xl mx-auto text-muted-foreground motion-fade-in-up-320 animation-delay-200">
            Achieve seamless productivity with intelligent scheduling,
            insightful analytics, and effortless operational integrations.
          </p>
        </div>

        {/* Interactive Feature Cards - Clerk/Stripe style selection */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 motion-fade-in-up-320 animation-delay-300">
          {RESTAURANT_FEATURES.map((feature, index) => {
            const IconComponent = feature.icon;
            const isSelected = selectedFeature === feature.id;
            
            return (
              <Card
                key={feature.id}
                className={cn(
                  "cursor-pointer transition-all duration-300 hover:shadow-xl hover-scale-103",
                  isSelected 
                    ? "ring-2 ring-primary shadow-xl bg-primary/5" 
                    : "hover:shadow-lg clerk-glass-card"
                )}
                onClick={() => setSelectedFeature(feature.id)}
                style={{ animationDelay: `${(index + 4) * 100}ms` }}
              >
                <CardHeader className="text-center space-y-4 p-6">
                  {/* Icon with BARS-DEMO styling */}
                  <div className={cn(
                    "mx-auto w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300",
                    isSelected 
                      ? "bg-primary text-primary-foreground shadow-lg" 
                      : "bg-primary/10 text-primary"
                  )}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-2">
                    <CardTitle className={cn(
                      "text-xl transition-colors duration-300",
                      isSelected ? "text-primary" : "text-foreground"
                    )}>
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        {/* Feature Showcase - Enhanced with BARS-DEMO styling */}
        {currentFeature && (
          <Card className="clerk-glass-card min-h-[500px] motion-fade-in-up-320 animation-delay-700">
            <CardContent className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                
                {/* Left: Content */}
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-foreground">
                      {currentFeature.details.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {currentFeature.details.description}
                    </p>
                  </div>

                  {/* Benefits with BARS-DEMO purple checkboxes */}
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-foreground">Key Benefits</h4>
                    <div className="space-y-3">
                      {currentFeature.details.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-3">
                          {/* Purple checkbox - BARS-DEMO standard */}
                          <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle className="w-3 h-3 text-purple-600" />
                          </div>
                          <span className="text-foreground font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Integration badges */}
                  {currentFeature.details.integrations && (
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-foreground">POS & Platform Integrations</h4>
                      <div className="flex flex-wrap gap-2">
                        {currentFeature.details.integrations.map((integration) => (
                          <div key={integration} className="clerk-inspired-badge text-xs">
                            {integration}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CTA - BARS-DEMO standard */}
                  <div className="pt-4">
                    <Button className="clerk-cta-primary cta-shimmer hover-scale-103">
                      Explore {currentFeature.title}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Right: Restaurant Dashboard Mockup */}
                <div className="flex items-center justify-center">
                  <div className="relative p-8">
                    {/* Restaurant Dashboard Visual */}
                    <svg 
                      width="300" 
                      height="300" 
                      viewBox="0 0 300 300" 
                      className="text-primary/20 transition-all duration-500 hover:text-primary/30"
                      fill="currentColor"
                    >
                      {/* Restaurant Dashboard Background */}
                      <rect x="20" y="20" width="260" height="260" rx="12" fill="currentColor" />
                      
                      {/* Dashboard Elements */}
                      <g fill="white" fillOpacity="0.9">
                        {/* Header Bar */}
                        <rect x="40" y="40" width="220" height="8" rx="4" />
                        
                        {/* Metric Cards */}
                        <rect x="40" y="70" width="60" height="40" rx="6" />
                        <rect x="120" y="70" width="60" height="40" rx="6" />
                        <rect x="200" y="70" width="60" height="40" rx="6" />
                        
                        {/* Chart Area */}
                        <rect x="40" y="130" width="220" height="100" rx="8" />
                        
                        {/* Chart Bars */}
                        <rect x="60" y="180" width="8" height="30" fill="#10B981" />
                        <rect x="80" y="170" width="8" height="40" fill="#10B981" />
                        <rect x="100" y="160" width="8" height="50" fill="#10B981" />
                        <rect x="120" y="175" width="8" height="35" fill="#10B981" />
                        <rect x="140" y="165" width="8" height="45" fill="#10B981" />
                        <rect x="160" y="155" width="8" height="55" fill="#10B981" />
                        <rect x="180" y="170" width="8" height="40" fill="#10B981" />
                        <rect x="200" y="160" width="8" height="50" fill="#10B981" />
                        <rect x="220" y="150" width="8" height="60" fill="#10B981" />
                        
                        {/* Status Indicators */}
                        <circle cx="50" cy="250" r="4" fill="#10B981" />
                        <circle cx="80" cy="250" r="4" fill="#F59E0B" />
                        <circle cx="110" cy="250" r="4" fill="#EF4444" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};

export { Feature169Restaurant };
