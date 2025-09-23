"use client";

import React from "react";
import { Calendar, BarChart3, Zap, CheckCircle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

// Restaurant operations data following BARS-DEMO-DESIGN-STANDARDS
const RESTAURANT_DATA = [
  {
    title: "Smart Scheduling",
    description:
      "Optimize staff schedules with AI-powered demand forecasting and real-time adjustment capabilities for peak efficiency.",
    icon: Calendar,
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    benefits: [
      "Reduce labor costs by 15-20%",
      "Eliminate scheduling conflicts",
      "Improve staff satisfaction"
    ]
  },
  {
    title: "Revenue Analytics", 
    description:
      "Track performance with comprehensive analytics covering sales trends, customer insights, and operational metrics.",
    icon: BarChart3,
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
    benefits: [
      "Increase revenue by 12%",
      "Real-time performance insights",
      "Predictive trend analysis"
    ]
  },
  {
    title: "Operations Hub",
    description:
      "Streamline daily operations with integrated inventory management, order processing, and team coordination tools.",
    icon: Zap,
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
    benefits: [
      "Cut operational time by 30%",
      "Unified command center",
      "Automated workflow management"
    ]
  },
];

interface Feature169RestaurantProps {
  industry?: 'restaurant' | 'retail' | 'healthcare';
  className?: string;
}

/**
 * Feature169 Restaurant - Converted from shadcn Feature169 following BARS-DEMO-DESIGN-STANDARDS
 * 
 * GOLD STANDARD COMPLIANCE:
 * - clerk-inspired-badge for all badge elements
 * - clerk-glass-card for main content cards
 * - Purple checkboxes (bg-purple-100, text-purple-600) for benefits
 * - Primary/secondary color tokens throughout
 * - Restaurant operations focus with measurable benefits
 * - BARS-DEMO component structure patterns
 * - Motion animations with proper delays
 */
const Feature169Restaurant = ({ 
  industry = 'restaurant',
  className = ""
}: Feature169RestaurantProps) => {
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

        {/* Tabs System - Enhanced with BARS-DEMO styling */}
        <div className="motion-fade-in-up-320 animation-delay-300">
          <Tabs defaultValue={RESTAURANT_DATA[0].title} className="w-full">
            
            {/* Tab Navigation */}
            <TabsList className="h-auto w-full bg-transparent p-0 mb-8 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-0">
              {RESTAURANT_DATA.map((item, index) => (
                <TabsTrigger
                  key={item.title}
                  value={item.title}
                  className="group relative h-full w-full whitespace-normal rounded-lg lg:rounded-none px-6 py-8 text-start data-[state=active]:shadow-none border lg:border-0 data-[state=active]:bg-card lg:data-[state=active]:bg-transparent hover-scale-103 transition-all duration-300"
                >
                  {/* Active indicator - Using primary colors */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-primary via-primary/80 to-transparent transition-all duration-300 group-data-[state=active]:w-full" />
                  
                  <div className="flex items-start gap-4">
                    {/* Icon with BARS-DEMO primary styling */}
                    <div className="relative w-12 h-12 flex-shrink-0">
                      <div className="absolute inset-0 rounded-xl bg-primary/10 group-data-[state=active]:bg-primary/20 transition-colors duration-300" />
                      <div className="absolute inset-2 grid place-items-center rounded-lg bg-background">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-2">
                      <h3 className="text-xl font-semibold text-foreground group-data-[state=active]:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Tab Content */}
            {RESTAURANT_DATA.map((item, index) => (
              <TabsContent key={item.title} value={item.title} className="mt-0">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  
                  {/* Left: Image with BARS-DEMO clerk-glass-card */}
                  <div className="order-2 lg:order-1">
                    <div className="clerk-glass-card p-8 bg-muted/30 hover-scale-103 transition-all duration-300">
                      <img
                        src={item.image}
                        alt={item.title}
                        width={600}
                        height={400}
                        className="w-full h-auto object-contain dark:invert rounded-lg"
                      />
                    </div>
                  </div>
                  
                  {/* Right: Benefits with purple checkboxes (BARS-DEMO standard) */}
                  <div className="order-1 lg:order-2 space-y-6">
                    <div className="space-y-4">
                      <h4 className="text-2xl font-bold text-foreground">
                        Key Benefits
                      </h4>
                      <p className="text-muted-foreground">
                        Transform your restaurant operations with measurable results.
                      </p>
                    </div>
                    
                    {/* Benefits list with BARS-DEMO purple checkboxes */}
                    <div className="space-y-4">
                      {item.benefits.map((benefit, benefitIndex) => (
                        <div 
                          key={benefitIndex} 
                          className="flex items-start gap-3 motion-fade-in-up-320"
                          style={{ animationDelay: `${(benefitIndex + 1) * 100}ms` }}
                        >
                          {/* Purple checkbox - BARS-DEMO standard */}
                          <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle className="w-3 h-3 text-purple-600" />
                          </div>
                          <span className="text-foreground font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* CTA - BARS-DEMO standard clerk-cta-primary */}
                    <div className="pt-4">
                      <Button className="clerk-cta-primary cta-shimmer hover-scale-103">
                        Explore {item.title}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
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

const Accessory = ({ className }: { className: string }) => {
  return (
    <div
      className={cn(`bg-background w-2 h-2 rounded-[1px]`, className)}
      style={{
        boxShadow:
          "0px 0px 0px 0.1px rgba(0, 0, 0, 0.05), 0px 0.5px 1px 0px rgba(0, 0, 0, 0.25)",
      }}
    ></div>
  );
};

export { Feature169Restaurant };
