"use client";

import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export type CallToActionProps = {
  industry?: "restaurants" | "bars" | "coffee" | "hotels";
  variant?: "primary" | "demo" | "trial";
  heading?: string;
  subheading?: string;
  badgeText?: string;
  primaryCTA?: string;
  secondaryCTA?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  className?: string;
};

/**
 * Call to Action Component
 * Clean CTA section with restaurant operations focus
 * Uses enterprise styling system with OKLCH token system
 */
export function CallToAction({ 
  industry = "restaurants",
  variant = "primary",
  heading,
  subheading,
  badgeText,
  primaryCTA,
  secondaryCTA,
  onPrimaryClick,
  onSecondaryClick,
  className
}: CallToActionProps) {
  
  const getIndustryConfig = () => {
    const configs = {
      restaurants: {
        variants: {
          primary: {
            heading: "Transform Your Restaurant Operations Today",
            subheading: "Join 2,500+ restaurants using OpsFlow to streamline operations, ensure HACCP compliance, and reduce costs by up to 35%.",
            badgeText: "Start Free Trial",
            primaryCTA: "Start 14-Day Trial",
            secondaryCTA: "Schedule Demo"
          },
          demo: {
            heading: "See OpsFlow in Action for Restaurants",
            subheading: "Book a personalized demo to see how we help restaurants achieve 99.8% health inspection pass rates.",
            badgeText: "Book Demo",
            primaryCTA: "Schedule Demo",
            secondaryCTA: "View Features"
          },
          trial: {
            heading: "Start Your Free Restaurant Operations Trial",
            subheading: "No credit card required. Get full access to HACCP compliance, staff management, and temperature monitoring.",
            badgeText: "Free Trial",
            primaryCTA: "Start Free Trial",
            secondaryCTA: "Contact Sales"
          }
        }
      },
      bars: {
        variants: {
          primary: {
            heading: "Elevate Your Bar Operations",
            subheading: "Join 1,200+ bars using OpsFlow to manage inventory, staff scheduling, and compliance tracking.",
            badgeText: "Start Free Trial",
            primaryCTA: "Start 14-Day Trial",
            secondaryCTA: "Schedule Demo"
          }
        }
      },
      coffee: {
        variants: {
          primary: {
            heading: "Perfect Your Coffee Shop Operations",
            subheading: "Join 800+ coffee shops using OpsFlow for quality control, equipment monitoring, and peak hour management.",
            badgeText: "Start Free Trial",
            primaryCTA: "Start 14-Day Trial",
            secondaryCTA: "Schedule Demo"
          }
        }
      },
      hotels: {
        variants: {
          primary: {
            heading: "Transform Hotel Dining Operations",
            subheading: "Join 400+ hotels using OpsFlow for multi-venue management, guest experience, and compliance coordination.",
            badgeText: "Start Free Trial",
            primaryCTA: "Start 14-Day Trial",
            secondaryCTA: "Schedule Demo"
          }
        }
      }
    };

    const industryConfig = configs[industry] || configs.restaurants;
    return (industryConfig.variants as any)[variant] || industryConfig.variants.primary;
  };

  const config = getIndustryConfig();

  const handlePrimaryClick = () => {
    if (onPrimaryClick) {
      onPrimaryClick();
    } else {
      console.log('Primary CTA clicked:', config.primaryCTA);
    }
  };

  const handleSecondaryClick = () => {
    if (onSecondaryClick) {
      onSecondaryClick();
    } else {
      console.log('Secondary CTA clicked:', config.secondaryCTA);
    }
  };

  return (
    <div className={cn("max-w-4xl mx-auto px-4 py-16 text-center space-y-8", className)}>
      {/* Badge */}
      <Badge className="clerk-inspired-badge">
        <ArrowRight className="size-4" />
        {badgeText || config.badgeText}
      </Badge>

      {/* Heading */}
      <h2 className="enterprise-headline">
        <span className="text-brand-gradient">{heading || config.heading}</span>
      </h2>

      {/* Subheading */}
      <p className="enterprise-body max-w-3xl mx-auto">
        {subheading || config.subheading}
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button 
          size="lg"
          onClick={handlePrimaryClick}
          className="clerk-cta-primary cta-equal"
        >
          {primaryCTA || config.primaryCTA}
          <ArrowRight className="ml-2 size-4" />
        </Button>
        
        <Button 
          size="lg"
          variant="outline"
          onClick={handleSecondaryClick}
          className="cta-equal"
        >
          <PlayCircle className="mr-2 size-4" />
          {secondaryCTA || config.secondaryCTA}
        </Button>
      </div>

      {/* Trust Indicators */}
      <div className="pt-8 border-t">
        <div className="grid grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-2xl font-bold text-primary">500+</div>
            <div className="text-sm text-muted-foreground">Restaurants Trust Us</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary">99.8%</div>
            <div className="text-sm text-muted-foreground">Health Inspection Pass Rate</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary">35%</div>
            <div className="text-sm text-muted-foreground">Average Cost Reduction</div>
          </div>
        </div>
      </div>
    </div>
  );
}