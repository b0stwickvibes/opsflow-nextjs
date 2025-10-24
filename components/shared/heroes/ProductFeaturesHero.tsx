"use client";

import { ArrowRight, Check, Shield, Zap, BarChart3, Users, Clock, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// Product features showcase content
const FEATURES_CONTENT = {
  restaurant: {
    badge: "Multi-Role Platform",
    title: "Task management built",
    highlight: "for every restaurant role",
    subtitle: "Unified task management system with role-based workflows, automated assignments, and cross-team collaboration tools that keep every position aligned and accountable.",
    capabilities: [
      { value: "Every", label: "Position covered", icon: Users },
      { value: "Auto", label: "Task routing", icon: Target },
      { value: "Real-time", label: "Collaboration", icon: BarChart3 },
    ],
    features: [
      "Role-based task assignments",
      "Manager oversight dashboards", 
      "Server checklist automation",
      "Kitchen workflow coordination",
      "Host rotation scheduling",
      "Multi-location task sync",
    ],
    ctaText: "See Task Management",
    ctaSecondary: "Role Demo",
  },
  bar: {
    badge: "Bar Team Management",
    title: "Coordinate every role",
    highlight: "from bartender to manager",
    subtitle: "Multi-role task management for bars with bartender checklists, manager oversight, security protocols, and coordinated shift handoffs.",
    capabilities: [
      { value: "6+", label: "Bar roles", icon: Users },
      { value: "Smart", label: "Scheduling", icon: Target },
      { value: "Team", label: "Chat", icon: BarChart3 },
    ],
    features: [
      "Bartender opening/closing tasks",
      "Manager inventory oversight",
      "Security incident tracking",
      "Shift handoff protocols",
      "Team communication hub",
      "Multi-bar coordination",
    ],
    ctaText: "Bar Task System",
    ctaSecondary: "Team Demo",
  },
  cafe: {
    badge: "Café Workflow",
    title: "Tasks for every position",
    highlight: "barista to manager",
    subtitle: "Role-specific task management for cafés with barista workflows, shift lead coordination, and manager oversight across all café operations.",
    capabilities: [
      { value: "5+", label: "Café roles", icon: Users },
      { value: "Quality", label: "Tracking", icon: Shield },
      { value: "Team", label: "Sync", icon: Target },
    ],
    features: [
      "Barista quality checklists",
      "Shift lead task delegation",
      "Manager performance tracking",
      "Customer service protocols",
      "Equipment maintenance roles",
      "Cross-training workflows",
    ],
    ctaText: "Café Workflows",
    ctaSecondary: "Role Demo",
  },
};

export interface ProductFeaturesHeroProps {
  industry?: 'restaurant' | 'bar' | 'cafe';
  variant?: 'default' | 'compact' | 'detailed';
  className?: string;
}

export function ProductFeaturesHero({ 
  industry = 'restaurant', 
  variant = 'default',
  className
}: ProductFeaturesHeroProps) {
  const content = FEATURES_CONTENT[industry];

  return (
    <div className={cn(
      "relative overflow-hidden",
      "bg-gradient-to-br from-background via-background to-muted/30",
      className
    )}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-900/20 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] opacity-30" />
      
      <div className="container relative py-20 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Content Column */}
          <div className="space-y-8">
            {/* Badge with subtle glow - only 1 ambient element */}
            <div className="flex">
              <Badge className="badge-subtle-gradient">
                <div className="h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
                {content.badge}
              </Badge>
            </div>

            {/* Heading with text gradient */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                {content.title}{" "}
                <br className="hidden sm:block" />
                <span className="text-brand-gradient">
                  {content.highlight}
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                {content.subtitle}
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {content.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 border border-primary/20">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-foreground font-medium text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* Single Impact Card */}
            <div className="enterprise-card-subtle p-6 rounded-xl border bg-gradient-to-r from-primary/5 to-primary/10 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="enterprise-icon-primary">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Built for Restaurant Operations</div>
                  <div className="text-sm text-muted-foreground">Streamline every workflow, from front-of-house to kitchen coordination</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="clerk-cta-primary group min-w-[200px]" size="lg">
                {content.ctaText}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="clerk-cta-ghost min-w-[200px]" size="lg">
                {content.ctaSecondary}
              </Button>
            </div>
          </div>

          {/* Capabilities Column */}
          <div className="space-y-6">
            {/* Capability Cards */}
            <div className="grid gap-4">
              {content.capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="enterprise-metric-card p-6 rounded-xl border bg-card/50 backdrop-blur-sm"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold text-foreground">
                        {capability.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {capability.label}
                      </div>
                    </div>
                    <div className="enterprise-icon-primary">
                      <capability.icon className="h-6 w-6" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Platform Highlights - REMOVED: Repetitive content */}
          </div>
        </div>
      </div>
    </div>
  );
}
