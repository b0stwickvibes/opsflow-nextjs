"use client";

import React from "react";
import { Calendar, BarChart3, Zap, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Restaurant operations data following BARS-DEMO-DESIGN-STANDARDS
const RESTAURANT_DATA = [
  {
    title: "Smart Scheduling",
    description:
      "Optimize staff schedules with AI-powered demand forecasting and real-time adjustment capabilities for peak efficiency.",
    icon: Calendar,
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  {
    title: "Revenue Analytics",
    description:
      "Track performance with comprehensive analytics covering sales trends, customer insights, and operational metrics.",
    icon: BarChart3,
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
  },
  {
    title: "Operations Hub",
    description:
      "Streamline daily operations with integrated inventory management, order processing, and team coordination tools.",
    icon: Zap,
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
  },
];

interface Feature169RestaurantProps {
  industry?: 'restaurant' | 'retail' | 'healthcare';
  className?: string;
}

/**
 * Feature169 Restaurant - Converted from shadcn Feature169 following BARS-DEMO-DESIGN-STANDARDS
 * 
 * Original shadcn structure maintained but with:
 * - clerk-inspired-badge instead of raw Badge
 * - Primary/secondary color tokens instead of hardcoded colors
 * - Purple checkboxes (bg-purple-100, text-purple-600)
 * - Restaurant operations focus
 * - Design token compliance throughout
 */
const Feature169Restaurant = ({ 
  industry = 'restaurant',
  className = ""
}: Feature169RestaurantProps) => {
  return (
    <section id="optimized-scheduling" className={`py-24 ${className}`}>
      <div className="border-y">
        <div className="container flex flex-col gap-6 border-x py-4 max-lg:border-x lg:py-8">
          {/* Badge - Using clerk-inspired-badge instead of raw Badge */}
          <div className="clerk-inspired-badge w-fit">
            <CheckCircle className="w-4 h-4" />
            <span>Optimize</span>
          </div>
          
          {/* Headline - Following BARS standards */}
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight">
            Optimize every aspect of your restaurant
          </h2>
          
          {/* Description - Using enterprise-body */}
          <p className="enterprise-body max-w-2xl text-muted-foreground">
            Achieve seamless productivity with intelligent scheduling,
            insightful analytics, and effortless operational integrations.
          </p>
        </div>
      </div>

      <div className="container border-x">
        <Tabs defaultValue={RESTAURANT_DATA[0].title} className="">
          <TabsList className="h-auto w-full bg-transparent p-0 max-lg:flex-col max-lg:divide-y lg:grid lg:grid-cols-3 lg:divide-x">
            {RESTAURANT_DATA.map((item, index) => (
              <TabsTrigger
                key={item.title}
                value={item.title}
                className="last:max-lg:border-b group relative isolate inline-block h-full w-full whitespace-normal rounded-none px-1 py-5 text-start data-[state=active]:shadow-none max-lg:border-x lg:border-b lg:px-8"
              >
                {/* Active indicator - Using primary colors */}
                <div className="absolute bottom-[-1px] left-0 h-[1px] w-0 bg-gradient-to-r from-primary via-primary/80 to-transparent transition-all duration-300 group-data-[state=active]:w-1/2" />
                
                {/* Accessory elements */}
                <Accessory className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2" />
                <Accessory className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2" />
                {index === RESTAURANT_DATA.length - 1 && (
                  <>
                    <Accessory className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2" />
                    <Accessory className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2" />
                  </>
                )}
                
                <div className="flex items-center gap-2 p-4">
                  <div className="relative w-6 h-6">
                    {/* Icon background - Using primary colors */}
                    <div className="absolute inset-0 -rotate-45 rounded-full bg-gradient-to-l from-primary via-primary/80 to-border to-50% transition-all duration-1000 group-data-[state=inactive]:opacity-0" />
                    <div className="absolute inset-[0.75px] rounded-full bg-background"></div>
                    <div className="absolute inset-[1.25px] grid place-items-center rounded-full bg-muted">
                      <item.icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground tracking-tight">{item.title}</h3>
                </div>
                
                <p className="text-muted-foreground p-4 pt-2 text-lg leading-relaxed">
                  {item.description}
                </p>
              </TabsTrigger>
            ))}
          </TabsList>

          {RESTAURANT_DATA.map((item) => (
            <TabsContent key={item.title} value={item.title} className="mt-0">
              <div className="flex flex-1 flex-col p-6 max-lg:border-x lg:p-12">
                <div className="stripe-glass-card p-8 bg-muted/30">
                  <img
                    src={item.image}
                    alt={item.title}
                    width={1312}
                    height={743.926}
                    className="w-full h-auto object-contain dark:invert"
                  />
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      <div className="h-8 w-full border-y md:h-12 lg:h-[112px]">
        <div className="container h-full w-full border-x"></div>
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
