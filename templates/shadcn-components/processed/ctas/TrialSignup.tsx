"use client";

import { Zap, Shield, Users, ArrowRight, Trophy, Lock, Phone, BarChart3, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export type TrialSignupProps = {
  industry?: "restaurants" | "bars" | "coffee" | "hotels";
  heading?: string;
  subheading?: string;
  badgeText?: string;
  ctaText?: string;
  onStartTrial?: () => void;
  onWatchDemo?: () => void;
  className?: string;
};

/**
 * Trial Signup Component
 * Professional trial signup CTA with restaurant operations focus
 * Uses enterprise styling system with OKLCH token system
 */
export function TrialSignup({ 
  industry = "restaurants",
  heading,
  subheading,
  badgeText,
  ctaText,
  onStartTrial,
  onWatchDemo,
  className
}: TrialSignupProps) {

  const getIndustryConfig = () => {
    const configs = {
      restaurants: {
        heading: "Start Your Restaurant Transformation Today",
        subheading: "Get full access to HACCP compliance, staff management, temperature monitoring, and cost reduction tools. No credit card required.",
        badgeText: "Free 14-Day Trial",
        ctaText: "Start Free Restaurant Trial",
        features: [
          {
            icon: Shield,
            title: "HACCP Compliance",
            description: "Automated temperature logging and compliance tracking"
          },
          {
            icon: Users,
            title: "Staff Coordination", 
            description: "Seamless kitchen and front-of-house communication"
          },
          {
            icon: Zap,
            title: "Real-time Insights",
            description: "Live operational dashboards and performance metrics"
          }
        ]
      },
      bars: {
        heading: "Transform Your Bar Operations",
        subheading: "Get full access to inventory management, compliance tracking, and staff coordination tools. No credit card required.",
        badgeText: "Free 14-Day Trial",
        ctaText: "Start Free Bar Trial",
        features: [
          {
            icon: Shield,
            title: "Inventory Management",
            description: "Automated stock tracking and ordering systems"
          },
          {
            icon: Users,
            title: "Staff Management",
            description: "Streamlined scheduling and performance tracking"
          },
          {
            icon: Zap,
            title: "Real-time Analytics",
            description: "Live operational dashboards and insights"
          }
        ]
      },
      coffee: {
        heading: "Perfect Your Coffee Shop Operations",
        subheading: "Get full access to quality control, equipment monitoring, and multi-location management tools. No credit card required.",
        badgeText: "Free 14-Day Trial",
        ctaText: "Start Free Coffee Trial",
        features: [
          {
            icon: Shield,
            title: "Quality Control",
            description: "Automated brewing and temperature monitoring"
          },
          {
            icon: Users,
            title: "Staff Training",
            description: "Barista training and performance tracking"
          },
          {
            icon: Zap,
            title: "Real-time Metrics",
            description: "Live operational dashboards and analytics"
          }
        ]
      },
      hotels: {
        heading: "Elevate Your Hotel Operations",
        subheading: "Get full access to multi-outlet management, guest services, and staff coordination tools. No credit card required.",
        badgeText: "Free 14-Day Trial",
        ctaText: "Start Free Hotel Trial",
        features: [
          {
            icon: Shield,
            title: "Guest Services",
            description: "Automated guest service and satisfaction tracking"
          },
          {
            icon: Users,
            title: "Staff Coordination",
            description: "Seamless communication across all departments"
          },
          {
            icon: Zap,
            title: "Real-time Insights",
            description: "Live operational dashboards and performance metrics"
          }
        ]
      }
    };

    return configs[industry] || configs.restaurants;
  };

  const config = getIndustryConfig();

  const handleStartTrial = () => {
    if (onStartTrial) {
      onStartTrial();
    } else {
      console.log(`Trial started for ${industry}`);
    }
  };

  const handleWatchDemo = () => {
    if (onWatchDemo) {
      onWatchDemo();
    } else {
      console.log(`Demo requested for ${industry}`);
    }
  };

  const benefits = [
    "Setup in under 30 minutes",
    "No credit card required", 
    "Cancel anytime",
    "Full support during trial"
  ];

  return (
    <div className={cn("max-w-6xl mx-auto px-4 py-16 space-y-16", className)}>
      
      {/* Header */}
      <div className="text-center space-y-6">
        <Badge className="clerk-inspired-badge">
          <Zap className="size-4" />
          {badgeText || config.badgeText}
        </Badge>

        <h2 className="enterprise-headline">
          <span className="text-brand-gradient">{heading || config.heading}</span>
        </h2>

        <p className="enterprise-body max-w-3xl mx-auto">
          {subheading || config.subheading}
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="grid gap-8">
            {config.features.map((feature, index) => (
              <div 
                key={index}
                className="enterprise-card p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="enterprise-icon-primary">
                    <feature.icon className="size-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="enterprise-card p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 border border-primary-200 mb-4">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-xs font-medium text-primary">Available now</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-3">
                Ready to Get Started?
              </h3>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                Join thousands of {industry} operations already transforming with OpsFlow
              </p>
              
              <Button
                onClick={handleStartTrial}
                size="lg"
                className="w-full clerk-cta-primary mb-3"
              >
                <span className="flex items-center gap-2">
                  {ctaText || config.ctaText}
                  <ArrowRight className="size-4" />
                </span>
              </Button>
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border/30" />
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="bg-card px-3 text-muted-foreground/60">or</span>
                </div>
              </div>
              
              <Button
                variant="outline"
                onClick={handleWatchDemo}
                size="lg"
                className="w-full mt-3 group"
              >
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Calendar className="size-4 text-secondary group-hover:text-secondary-600 transition-colors" />
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-secondary rounded-full animate-pulse" />
                  </div>
                  <span className="font-medium">Schedule Demo</span>
                </div>
              </Button>
            </div>

            <div className="space-y-3">
              <div className="text-center mb-3">
                <span className="text-xs font-medium text-muted-foreground/60 uppercase tracking-wide">What's included</span>
              </div>
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-50 border border-primary-200 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <p className="text-muted-foreground mb-4">
          Trusted by leading {industry} operations worldwide
        </p>
        <div className="flex justify-center items-center space-x-8 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Trophy className="h-4 w-4" />
            Industry Leader
          </span>
          <span className="flex items-center gap-1">
            <Lock className="h-4 w-4" />
            SOC 2 Certified
          </span>
          <span className="flex items-center gap-1">
            <Phone className="h-4 w-4" />
            24/7 Support
          </span>
          <span className="flex items-center gap-1">
            <BarChart3 className="h-4 w-4" />
            99.9% Uptime
          </span>
        </div>
      </div>
    </div>
  );
}