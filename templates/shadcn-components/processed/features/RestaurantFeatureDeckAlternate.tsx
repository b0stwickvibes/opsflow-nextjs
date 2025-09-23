"use client";

import React from "react";
import { Calendar, BarChart3, Zap, CheckCircle } from "lucide-react";

// Restaurant operations focused features following BARS-DEMO-DESIGN-STANDARDS
// Converted from shadcn Feature169 with proper horizontal alternating layout
const RESTAURANT_FEATURES = [
  {
    title: "Smart Scheduling",
    description: "Optimize staff schedules with AI-powered demand forecasting and real-time adjustment capabilities for peak efficiency.",
    icon: Calendar,
    benefits: [
      "Auto staff optimization based on historical patterns",
      "Peak hour coverage with predictive scheduling",
      "Labor cost reduction through intelligent planning",
      "Real-time shift adjustments for maximum efficiency"
    ]
  },
  {
    title: "Revenue Analytics", 
    description: "Track performance with comprehensive analytics covering sales trends, customer insights, and operational metrics.",
    icon: BarChart3,
    benefits: [
      "Real-time sales data with trend analysis",
      "Customer behavior insights and patterns",
      "Profit margin tracking across all menu items",
      "Predictive analytics for inventory optimization"
    ]
  },
  {
    title: "Operations Hub",
    description: "Streamline daily operations with integrated inventory management, order processing, and team coordination tools.",
    icon: Zap,
    benefits: [
      "Inventory automation with smart reordering",
      "Order workflow optimization and tracking",
      "Team communication and task management",
      "Real-time operational visibility and control"
    ]
  },
];

interface RestaurantFeatureDeckAlternateProps {
  industry?: 'restaurant' | 'retail' | 'healthcare';
  className?: string;
}

/**
 * Restaurant Feature Deck Alternate - BARS-DEMO-DESIGN-STANDARDS Compliant
 * Converted from shadcn Feature169 following exact IndustryFeatureDeckAlternate pattern
 * 
 * Features:
 * - Horizontal cards with alternating layouts
 * - Purple gradient backgrounds  
 * - Mock interface elements for visual appeal
 * - No CTA section - different structure for variety
 */
const RestaurantFeatureDeckAlternate = ({ 
  industry = 'restaurant',
  className = ""
}: RestaurantFeatureDeckAlternateProps) => {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-50/30 via-blue-50/20 to-slate-50/30">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Ultra Clean */}
        <div className="text-center mb-20 motion-fade-in-up-320">
          <div className="clerk-inspired-badge mb-8">
            <CheckCircle className="w-4 h-4 mr-2" />
            Optimize Operations
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Optimize every aspect of your restaurant
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Achieve seamless productivity with intelligent scheduling, 
            insightful analytics, and effortless operational integrations.
          </p>
        </div>

        {/* Features - Horizontal Cards Layout */}
        <div className="space-y-12">
          {RESTAURANT_FEATURES.map((feature, index) => {
            const IconComponent = feature.icon;
            const isReversed = index % 2 === 1;
            
            return (
              <div 
                key={index}
                className={`motion-fade-in-up-320 animation-delay-${(index + 1) * 100}`}
              >
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                  isReversed ? 'lg:grid-flow-col-dense' : ''
                }`}>
                  
                  {/* Content Column */}
                  <div className={`space-y-8 ${isReversed ? 'lg:col-start-2' : ''}`}>
                    {/* Icon & Title */}
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
                        <IconComponent className="w-8 h-8 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          {feature.title}
                        </h3>
                        <div className="clerk-inspired-badge text-xs">
                          Advanced Feature
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Benefits Grid */}
                    <div className="grid gap-4">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-start gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-purple-100/50 hover:border-purple-200 transition-all duration-300">
                          <div className="w-6 h-6 mt-0.5 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-4 h-4 text-purple-600" />
                          </div>
                          <span className="text-foreground font-medium leading-relaxed">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visual Column - Mock Dashboard Interface */}
                  <div className={`${isReversed ? 'lg:col-start-1' : ''}`}>
                    <div className="relative">
                      {/* Main Feature Card */}
                      <div className="bg-gradient-to-br from-white to-purple-50/50 border border-purple-100 rounded-3xl p-8 shadow-lg shadow-purple-100/20">
                        <div className="space-y-6">
                          {/* Mock Interface Header */}
                          <div className="flex items-center justify-between">
                            <div className="text-sm font-medium text-foreground">
                              {feature.title} Dashboard
                            </div>
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                          </div>
                          
                          {/* Data Visualization Mock */}
                          <div className="space-y-4">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-muted-foreground">Performance</span>
                              <span className="font-semibold text-foreground">+{24 + index * 8}%</span>
                            </div>
                            <div className="w-full bg-slate-100 rounded-full h-2">
                              <div 
                                className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full" 
                                style={{width: `${75 + index * 5}%`}} 
                              />
                            </div>
                          </div>
                          
                          {/* Mock Metrics */}
                          <div className="grid grid-cols-2 gap-4">
                            <div className="text-center p-3 bg-purple-50 rounded-xl">
                              <div className="text-lg font-bold text-purple-600">
                                {index === 0 ? '95%' : index === 1 ? '$12K' : '24/7'}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {index === 0 ? 'Efficiency' : index === 1 ? 'Monthly' : 'Active'}
                              </div>
                            </div>
                            <div className="text-center p-3 bg-blue-50 rounded-xl">
                              <div className="text-lg font-bold text-blue-600">
                                {index === 0 ? '2.4x' : index === 1 ? '47%' : '99.9%'}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {index === 0 ? 'Faster' : index === 1 ? 'Growth' : 'Uptime'}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Floating Elements */}
                      <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                {index < RESTAURANT_FEATURES.length - 1 && (
                  <div className="mt-16 pt-8">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA - Clean & Minimal */}
        <div className="mt-24 motion-fade-in-up-320 animation-delay-500">
          <div className="bg-gradient-to-br from-purple-50 to-white border border-purple-200/60 rounded-3xl p-12 text-center max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-foreground">
                  Ready to Scale Your Operations?
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Advanced operations tools designed for serious restaurant operators.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-2xl font-medium hover:from-purple-700 hover:to-purple-800 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
                  Explore Advanced Features
                </button>
                
                <button className="px-8 py-4 bg-white border border-purple-200 text-foreground rounded-2xl font-medium hover:border-purple-300 hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-300">
                  Schedule Operations Demo
                </button>
              </div>
              
              {/* Trust indicators - Purple Theme */}
              <div className="flex justify-center items-center gap-8 pt-6 border-t border-purple-200/60 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full" />
                  Enterprise-grade operations
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  Real-time insights
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Predictive AI
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { RestaurantFeatureDeckAlternate };
