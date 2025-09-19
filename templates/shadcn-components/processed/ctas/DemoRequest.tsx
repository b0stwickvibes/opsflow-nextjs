"use client";

import { Calendar, ArrowRight, CheckCircle, Clock, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export type DemoRequestProps = {
  industry?: "restaurant" | "bar" | "coffee" | "hotel";
  heading?: string;
  subheading?: string;
  badgeText?: string;
  onDemoRequest?: () => void;
  className?: string;
};

/**
 * Demo Request Component
 * Professional demo booking CTA with restaurant operations focus
 * Uses enterprise styling system with OKLCH token system
 */
export function DemoRequest({ 
  industry = "restaurant",
  heading,
  subheading,
  badgeText,
  onDemoRequest,
  className
}: DemoRequestProps) {

  const getIndustryConfig = () => {
    const configs = {
      restaurant: {
        heading: "See OpsFlow Transform Your Restaurant Operations",
        subheading: "Book a personalized demo and discover how 2,500+ restaurants optimize their operations with HACCP compliance, staff management, and cost reduction.",
        badgeText: "Free 30-minute Demo",
        benefits: [
          "Live HACCP compliance demonstration",
          "Custom workflow setup for your restaurant",
          "ROI calculator based on your operations",
          "Integration with your existing POS system"
        ]
      },
      bar: {
        heading: "Transform Your Bar Operations with OpsFlow",
        subheading: "See how 1,200+ bars streamline operations with inventory management, compliance tracking, and staff coordination.",
        badgeText: "Free 30-minute Demo",
        benefits: [
          "Inventory management demonstration",
          "Alcohol compliance tracking setup",
          "Staff coordination features walkthrough",
          "Event management tools overview"
        ]
      },
      coffee: {
        heading: "Optimize Your Coffee Shop Operations",
        subheading: "Discover how 800+ cafes perfect their operations with quality control, equipment monitoring, and multi-location management.",
        badgeText: "Free 30-minute Demo",
        benefits: [
          "Equipment monitoring system demo",
          "Quality control tracking setup", 
          "Recipe management walkthrough",
          "Multi-location coordination tools"
        ]
      },
      hotel: {
        heading: "Elevate Your Hotel Dining Operations",
        subheading: "Learn how 300+ hotels manage dining excellence with multi-outlet management, guest preferences, and revenue optimization.",
        badgeText: "Free 30-minute Demo", 
        benefits: [
          "Multi-outlet management demo",
          "Guest preference tracking setup",
          "Banquet coordination walkthrough", 
          "Revenue optimization tools overview"
        ]
      }
    };

    return configs[industry] || configs.restaurant;
  };

  const config = getIndustryConfig();

  const handleDemoRequest = () => {
    if (onDemoRequest) {
      onDemoRequest();
    } else {
      console.log(`Demo requested for ${industry}`);
    }
  };

  return (
    <div className={cn("max-w-6xl mx-auto px-4 py-16 space-y-16", className)}>
      
      {/* Header */}
      <div className="text-center space-y-6">
        <Badge className="clerk-inspired-badge">
          <Calendar className="size-4" />
          {badgeText || config.badgeText}
        </Badge>

        <h2 className="enterprise-headline">
          <span className="text-brand-gradient">{heading || config.heading}</span>
        </h2>

        <p className="enterprise-body max-w-4xl mx-auto">
          {subheading || config.subheading}
        </p>
      </div>

      {/* Main Demo Section */}
      <div className="grid lg:grid-cols-2 gap-12">
        
        {/* Left Column - Demo Benefits */}
        <div className="enterprise-card p-8">
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="enterprise-icon-primary w-12 h-12 rounded-xl">
                <CheckCircle className="size-6" />
              </div>
              <h3 className="text-display-sm font-semibold">
                What You'll See in the Demo
              </h3>
            </div>

            <div className="space-y-4">
              {config.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="pt-6 border-t">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="metric-display-medium text-primary">30 min</div>
                  <div className="text-sm text-muted-foreground">Demo Length</div>
                </div>
                <div>
                  <div className="metric-display-medium text-primary">99.8%</div>
                  <div className="text-sm text-muted-foreground">Pass Rate</div>
                </div>
                <div>
                  <div className="metric-display-medium text-primary">24 hrs</div>
                  <div className="text-sm text-muted-foreground">Setup Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Demo Booking */}
        <div className="light-bg-brand-gradient p-8 rounded-2xl relative">
          {/* Badge in upper right */}
          <div className="absolute top-4 right-4">
            <div className="badge-subtle-active">
              <span>Schedule Your Demo</span>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="text-center">
              <div className="enterprise-icon-primary w-16 h-16 rounded-2xl mx-auto mb-6">
                <Calendar className="size-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-foreground">Choose a time that works for you</h3>
              <p className="text-muted-foreground">
                No commitment required.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Shield className="size-5" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Clock className="size-5" />
                <span>Usually takes 30 minutes</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Users className="size-5" />
                <span>Personalized to your {industry}</span>
              </div>
            </div>

            <Button
              onClick={handleDemoRequest}
              size="lg"
              className="w-full clerk-cta-primary"
            >
              Schedule Demo Now
              <ArrowRight className="size-4 ml-2" />
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              Join thousands of {industry}s already optimizing with OpsFlow
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Features */}
      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="enterprise-icon-primary w-12 h-12 rounded-xl mx-auto mb-4">
            <CheckCircle className="size-6" />
          </div>
          <h4 className="font-semibold mb-2">Instant Setup</h4>
          <p className="text-muted-foreground text-sm">Get up and running in under 24 hours with our guided onboarding</p>
        </div>

        <div className="text-center">
          <div className="enterprise-icon-secondary w-12 h-12 rounded-xl mx-auto mb-4">
            <Shield className="size-6" />
          </div>
          <h4 className="font-semibold mb-2">HACCP Compliant</h4>
          <p className="text-muted-foreground text-sm">Automated compliance tracking with 99.8% health inspection pass rate</p>
        </div>

        <div className="text-center">
          <div className="enterprise-icon-accent w-12 h-12 rounded-xl mx-auto mb-4">
            <Users className="size-6" />
          </div>
          <h4 className="font-semibold mb-2">24/7 Support</h4>
          <p className="text-muted-foreground text-sm">Dedicated support team to help you succeed every step of the way</p>
        </div>
      </div>
    </div>
  );
}