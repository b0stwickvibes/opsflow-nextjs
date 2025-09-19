"use client";

import React from "react";
import { ArrowRight, CheckCircle, Thermometer, Users } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { SectionContent } from "@/components/shared/layout";

/**
 * RestaurantFeaturesHero - Hero component for product features page
 * Used in: /product/features
 * Domain: Product features with restaurant operations focus
 * Design: Uses enterprise styling system + marketing playbook
 */
const RestaurantFeaturesHero = () => {
  return (
    <SectionContent maxWidth="4xl" align="center" className="relative py-20 lg:py-32">
      <div className="h-150 relative flex w-full flex-col items-center justify-center overflow-hidden">
        <div className="bg-background pointer-events-none absolute inset-0 z-10 h-full w-full [mask-image:radial-gradient(transparent,white)]" />
        <Boxes className="pointer-events-none scale-150" />

        <h1 className="relative z-20 max-w-4xl text-center text-5xl font-medium tracking-tight md:text-7xl">
          <span className="text-muted-foreground/50 mr-3">
            Streamline Your
          </span>
          <span className="text-brand-gradient">Restaurant Operations</span>
          <span className="text-muted-foreground/50"> with Intelligence</span>
          <span>.</span>
        </h1>
        <p className="text-muted-foreground relative z-20 mt-4 max-w-xl text-center text-lg">
          Automate HACCP compliance, monitor temperatures in real-time, and optimize staff scheduling for bars, restaurants, and coffee shops.
        </p>
        <div className="relative z-20 mt-10 flex items-center justify-center gap-4">
          <Button className="clerk-cta-primary cta-equal" size="lg">
            <span>Start Free Trial</span>
            <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
          </Button>
          <Button variant="outline" className="cta-equal" size="lg">
            <span>Schedule Demo</span>
            <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
          </Button>
        </div>

        {/* Restaurant-focused metrics */}
        <div className="relative z-20 mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
          <div className="enterprise-metric-card p-6 text-center">
            <CheckCircle className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-primary">95%</div>
            <p className="text-sm text-muted-foreground">Compliance Rate</p>
          </div>
          <div className="enterprise-metric-card p-6 text-center">
            <Thermometer className="h-8 w-8 text-secondary mx-auto mb-2" />
            <div className="text-2xl font-bold text-secondary">24/7</div>
            <p className="text-sm text-muted-foreground">Temperature Monitoring</p>
          </div>
          <div className="enterprise-metric-card p-6 text-center">
            <Users className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-primary">30%</div>
            <p className="text-sm text-muted-foreground">Labor Cost Reduction</p>
          </div>
        </div>
      </div>
    </SectionContent>
  );
};

export { RestaurantFeaturesHero };

// Boxes component for background effect
const Boxes = ({ className }: { className?: string }) => {
  return (
    <div className={cn("absolute inset-0", className)}>
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute h-2 w-2 bg-primary/20 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
};
