"use client";

import React from "react";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

/**
 * FeaturesCTA - Final call-to-action for features page
 * 
 * DESIGN STANDARDS:
 * - Stripe/Clerk inspired clean design
 * - Uses primary/secondary tokens exclusively
 * - Professional CTA styling
 * - Enterprise-grade design
 * - Restaurant operations focus
 */

const benefits = [
  "14-day free trial, no credit card required",
  "Full platform access during trial",
  "White-glove onboarding included",
  "Cancel anytime, no commitments"
];

export function FeaturesCTA() {
  const handleStartTrial = () => {
    console.log("Start trial clicked");
  };

  const handleScheduleDemo = () => {
    console.log("Schedule demo clicked");
  };

  return (
    <div className="relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 rounded-3xl" />
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-900/20 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] opacity-20" />
      
      {/* Content */}
      <div className="relative border border-border/50 rounded-3xl p-12 md:p-16 space-y-10 bg-background/50 backdrop-blur-sm">
        {/* Header */}
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <Badge 
            variant="secondary" 
            className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20"
          >
            <Sparkles className="w-4 h-4 mr-2 inline" />
            Ready to Transform Your Operations?
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Start Your Free Trial Today
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground">
            Join hundreds of restaurants saving time, reducing costs, and staying compliant 
            with OpsFlow AI. No credit card required to get started.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 p-5 rounded-xl bg-muted/30 border border-border/50 hover:bg-muted/50 hover:border-border transition-all"
            >
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-secondary/10 border border-secondary/20 flex items-center justify-center mt-0.5">
                <Check className="w-3.5 h-3.5 text-secondary" />
              </div>
              <span className="text-sm text-foreground font-medium leading-relaxed">
                {benefit}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            onClick={handleStartTrial}
            className="clerk-cta-primary group min-w-[200px]"
          >
            Start Free Trial
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            onClick={handleScheduleDemo}
            className="clerk-cta-ghost min-w-[200px]"
          >
            Schedule a Demo
          </Button>
        </div>

        {/* Trust Badge */}
        <div className="text-center text-sm text-muted-foreground">
          <p>
            Trusted by restaurants, bars, cafés, and hotels nationwide
          </p>
        </div>
      </div>
    </div>
  );
}
