"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X, Minus, Info } from "lucide-react";

/**
 * FeatureComparisonSection - Compare feature availability across plans
 *
 * DESIGN STANDARDS:
 * - Uses OKLCH color tokens exclusively
 * - Professional table styling with pricing cards
 * - Framer Motion animations
 * - Enterprise comparison layout
 * - Restaurant operations focus
 */

const plans = [
  {
    id: "starter",
    name: "Starter",
    price: 49,
    description: "Perfect for small teams getting started",
    popular: false,
    cta: "Get Started",
    features: {
      "Task Management & Checklists": "limited",
      "Temperature Monitoring": true,
      "HACCP Compliance": "limited",
      "Team & Staff Management": true,
      "Analytics Dashboard": "limited",
      "Advanced Reporting": false,
      "AI-Powered Insights": false,
      "Mobile Apps (iOS & Android)": true,
      "Multi-Location Management": false,
      "Integrations & API": "limited",
      "Dedicated Account Manager": false,
      "Custom Branding": false,
    },
  },
  {
    id: "professional",
    name: "Professional",
    price: 149,
    description: "For growing businesses that need more",
    popular: true,
    cta: "Get Started",
    features: {
      "Task Management & Checklists": true,
      "Temperature Monitoring": true,
      "HACCP Compliance": true,
      "Team & Staff Management": true,
      "Analytics Dashboard": true,
      "Advanced Reporting": true,
      "AI-Powered Insights": "limited",
      "Mobile Apps (iOS & Android)": true,
      "Multi-Location Management": "up to 5",
      "Integrations & API": true,
      "Dedicated Account Manager": false,
      "Custom Branding": false,
    },
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: null,
    priceLabel: "Custom",
    description: "Advanced features for large organizations",
    popular: false,
    cta: "Get Started",
    features: {
      "Task Management & Checklists": true,
      "Temperature Monitoring": true,
      "HACCP Compliance": true,
      "Team & Staff Management": true,
      "Analytics Dashboard": true,
      "Advanced Reporting": true,
      "AI-Powered Insights": true,
      "Mobile Apps (iOS & Android)": true,
      "Multi-Location Management": "unlimited",
      "Integrations & API": true,
      "Dedicated Account Manager": true,
      "Custom Branding": true,
    },
  },
];

const featureDescriptions: Record<string, string> = {
  "Task Management & Checklists": "Create and manage tasks with smart checklists and automated scheduling",
  "Temperature Monitoring": "Real-time temperature monitoring with Bluetooth sensors and alerts",
  "HACCP Compliance": "Digital audits and automated compliance tracking for food safety",
  "Team & Staff Management": "Scheduling, training tracking, and real-time team communication",
  "Analytics Dashboard": "Live dashboards with custom reports and AI-powered insights",
  "Advanced Reporting": "Detailed analytics with custom report builder and data exports",
  "AI-Powered Insights": "Predictive analytics and intelligent recommendations",
  "Mobile Apps (iOS & Android)": "Native mobile apps with offline mode and push notifications",
  "Multi-Location Management": "Centralized oversight with location-specific controls",
  "Integrations & API": "Connect with POS, inventory, HR, and accounting systems",
  "Dedicated Account Manager": "Personal support with priority response times",
  "Custom Branding": "White-label solution with your brand identity",
};

export function FeatureComparisonSection() {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const headerRef = useRef(null);
  const plansRef = useRef(null);
  const featuresRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
  const plansInView = useInView(plansRef, { once: true, margin: "-100px" });
  const featuresInView = useInView(featuresRef, { once: true, margin: "-50px" });

  const featureNames = Object.keys(plans[0].features);

  const renderFeatureValue = (value: boolean | string) => {
    if (value === true) {
      return (
        <div className="flex justify-center">
          <div className="h-5 w-5 rounded-full bg-secondary/10 border border-secondary/20 flex items-center justify-center">
            <Check className="h-3.5 w-3.5 text-secondary" strokeWidth={3} />
          </div>
        </div>
      );
    }
    if (value === false) {
      return (
        <div className="flex justify-center">
          <div className="h-5 w-5 rounded-full bg-muted/50 flex items-center justify-center">
            <X className="h-3.5 w-3.5 text-muted-foreground/40" strokeWidth={2.5} />
          </div>
        </div>
      );
    }
    if (value === "limited") {
      return (
        <div className="flex justify-center">
          <div className="h-5 w-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
            <Minus className="h-3.5 w-3.5 text-primary" strokeWidth={3} />
          </div>
        </div>
      );
    }
    return <div className="text-center text-sm font-medium text-foreground">{value}</div>;
  };

  return (
    <div className="space-y-16">
      {/* Header */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 20 }}
        animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <div className="inline-flex mb-4">
          <Badge variant="secondary" className="badge-subtle-gradient">
            Plan Comparison
          </Badge>
        </div>
        <h2 className="enterprise-headline mb-4">
          Choose Your Plan
        </h2>
        <p className="enterprise-body max-w-2xl mx-auto">
          All plans include core features. Scale as you grow.
        </p>
      </motion.div>

      {/* Pricing Cards */}
      <motion.div
        ref={plansRef}
        initial={{ opacity: 0, y: 30 }}
        animate={plansInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid md:grid-cols-3 gap-6"
      >
        {plans.map((plan, index) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 20 }}
            animate={plansInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            className={`relative rounded-2xl p-8 transition-all duration-300 ${
              plan.popular
                ? "clerk-glass-card border-primary/20 shadow-xl scale-105"
                : "clerk-glass-card hover:shadow-xl hover:border-border"
            }`}
            onMouseEnter={() => setSelectedPlan(plan.id)}
            onMouseLeave={() => setSelectedPlan(null)}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground px-4 py-1 shadow-lg">
                  Most Popular
                </Badge>
              </div>
            )}

            <div className="text-center space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <div>
                {plan.price ? (
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold text-foreground">${plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                ) : (
                  <div className="text-4xl font-bold text-foreground">{plan.priceLabel}</div>
                )}
              </div>

              <Button
                className={`w-full ${plan.popular ? "clerk-cta-primary" : "clerk-cta-ghost"}`}
                size="lg"
              >
                {plan.cta}
              </Button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Feature Comparison Table */}
      <motion.div
        ref={featuresRef}
        initial={{ opacity: 0, y: 30 }}
        animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="clerk-glass-card overflow-hidden"
      >
        {/* Table Header */}
        <div className="grid grid-cols-4 gap-4 p-6 bg-muted/30 border-b border-border">
          <div className="font-semibold text-foreground">Features</div>
          {plans.map((plan) => (
            <div key={plan.id} className="text-center font-semibold text-foreground">
              {plan.name}
            </div>
          ))}
        </div>

        {/* Feature Rows */}
        <div className="divide-y divide-border">
          {featureNames.map((featureName, index) => (
            <motion.div
              key={featureName}
              initial={{ opacity: 0, x: -20 }}
              animate={featuresInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
              className={`grid grid-cols-4 gap-4 p-6 transition-colors ${
                hoveredFeature === featureName ? "bg-muted/50" : "bg-background"
              }`}
              onMouseEnter={() => setHoveredFeature(featureName)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <div className="flex items-center gap-2 group">
                <span className="font-medium text-foreground">{featureName}</span>
                <div className="relative">
                  <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                  {hoveredFeature === featureName && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute left-0 top-6 z-10 w-64 p-3 bg-foreground text-background text-xs rounded-lg shadow-xl"
                    >
                      {featureDescriptions[featureName]}
                      <div className="absolute -top-1 left-4 w-2 h-2 bg-foreground rotate-45" />
                    </motion.div>
                  )}
                </div>
              </div>
              {plans.map((plan) => (
                <div key={plan.id} className="flex items-center justify-center">
                  {renderFeatureValue(plan.features[featureName])}
                </div>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Row */}
        <div className="grid grid-cols-4 gap-4 p-6 bg-muted/30 border-t border-border">
          <div className="flex items-center font-semibold text-foreground">Ready to start?</div>
          {plans.map((plan) => (
            <div key={plan.id} className="flex justify-center">
              <Button
                variant={plan.popular ? "default" : "outline"}
                className={plan.popular ? "clerk-cta-primary" : ""}
              >
                Select {plan.name}
              </Button>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Legend */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={featuresInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="flex items-center justify-center gap-8 text-sm text-muted-foreground"
      >
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded-full bg-secondary/10 border border-secondary/20 flex items-center justify-center">
            <Check className="h-3.5 w-3.5 text-secondary" strokeWidth={3} />
          </div>
          <span>Included</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
            <Minus className="h-3.5 w-3.5 text-primary" strokeWidth={3} />
          </div>
          <span>Limited</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded-full bg-muted/50 flex items-center justify-center">
            <X className="h-3.5 w-3.5 text-muted-foreground/40" strokeWidth={2.5} />
          </div>
          <span>Not available</span>
        </div>
      </motion.div>
    </div>
  );
}
