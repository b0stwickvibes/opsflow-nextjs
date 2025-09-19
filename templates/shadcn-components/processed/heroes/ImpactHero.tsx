"use client";

import { ArrowRight, Play, Star, Users, Clock, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useState } from "react";

// Restaurant operations impact focus
const INDUSTRY_CONTENT = {
  restaurant: {
    badge: "Operational Impact",
    title: "Transform restaurant efficiency",
    highlight: "with intelligent automation",
    subtitle: "Reduce manual tasks, eliminate waste, and create exceptional dining experiences that keep customers coming back.",
    stats: [
      { label: "Restaurants served", value: "1,200+", icon: Users },
      { label: "Average rating", value: "4.9/5", icon: Star },
      { label: "Hours saved weekly", value: "15hrs", icon: Clock },
    ],
    benefits: [
      "30-day free trial",
      "Setup in under 2 hours", 
      "Cancel anytime",
    ],
    ctaText: "Start Free Trial",
    ctaSecondary: "Watch Demo",
    videoId: "restaurant-demo",
  },
  bar: {
    badge: "Bar Excellence",
    title: "Revolutionize bar operations",
    highlight: "with smart analytics",
    subtitle: "Optimize inventory, maximize pour profits, and deliver consistent customer experiences that build loyalty.",
    stats: [
      { label: "Bars optimized", value: "650+", icon: Users },
      { label: "Customer satisfaction", value: "4.8/5", icon: Star },
      { label: "Cost reduction", value: "25%", icon: Clock },
    ],
    benefits: [
      "Risk-free trial",
      "Fast setup process",
      "No long-term contracts",
    ],
    ctaText: "Try Free",
    ctaSecondary: "Bar Demo",
    videoId: "bar-demo",
  },
  cafe: {
    badge: "Café Innovation",
    title: "Elevate café operations",
    highlight: "with precision tools",
    subtitle: "Ensure quality consistency, streamline workflows, and create memorable experiences that drive repeat business.",
    stats: [
      { label: "Cafés powered", value: "2,100+", icon: Users },
      { label: "Quality score", value: "4.9/5", icon: Star },
      { label: "Efficiency gain", value: "40%", icon: Clock },
    ],
    benefits: [
      "Free 30-day trial",
      "Quick onboarding",
      "Flexible terms",
    ],
    ctaText: "Start Journey",
    ctaSecondary: "Café Demo",
    videoId: "cafe-demo",
  },
};

export interface ImpactHeroProps {
  industry?: 'restaurant' | 'bar' | 'cafe';
  variant?: 'default' | 'compact' | 'video';
  className?: string;
}

export function ImpactHero({ 
  industry = 'restaurant', 
  variant = 'default',
  className
}: ImpactHeroProps) {
  const [showVideo, setShowVideo] = useState(false);
  const content = INDUSTRY_CONTENT[industry];

  return (
    <section className={cn(
      "relative overflow-hidden",
      "bg-gradient-to-br from-background via-background/95 to-primary/5",
      className
    )}>
      {/* Ambient Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-40 w-40 rounded-full bg-secondary/10 blur-3xl" />
      </div>
      
      <div className="container relative py-20 lg:py-32">
        <div className="mx-auto max-w-4xl text-center space-y-12">
          {/* Header Section */}
          <div className="space-y-6">
            {/* Badge with sparkle - only 1 ambient element */}
            <div className="flex justify-center">
              <Badge className="clerk-inspired-badge bg-primary/10 text-primary border-primary/20 backdrop-blur-sm">
                <Sparkles className="h-3 w-3 mr-2 animate-pulse" />
                {content.badge}
              </Badge>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                {content.title}{" "}
                <br className="hidden sm:block" />
                <span className="text-brand-gradient">
                  {content.highlight}
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                {content.subtitle}
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.stats.map((stat, index) => (
              <div
                key={index}
                className="feature-tile p-6 rounded-xl text-center"
              >
                <div className="enterprise-icon-primary mx-auto mb-3">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Benefits List */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {content.benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="h-4 w-4 rounded-full bg-green-500/20 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                </div>
                <span className="text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="clerk-cta-primary cta-equal" size="lg">
                {content.ctaText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                className="cta-equal" 
                size="lg"
                onClick={() => setShowVideo(true)}
              >
                <Play className="mr-2 h-4 w-4" />
                {content.ctaSecondary}
              </Button>
            </div>

            {/* Video Placeholder */}
            {variant === 'video' && (
              <div className="relative mx-auto max-w-2xl">
                <div className="aspect-video rounded-xl overflow-hidden border bg-card/50 backdrop-blur-sm">
                  <div className="flex items-center justify-center h-full bg-gradient-to-br from-muted/50 to-primary/5">
                    <Button
                      variant="ghost"
                      size="lg"
                      className="h-16 w-16 rounded-full bg-primary/10 hover:bg-primary/20"
                      onClick={() => setShowVideo(true)}
                    >
                      <Play className="h-6 w-6 text-primary" />
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Social Proof */}
          <div className="pt-8 border-t border-border/40">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Shield className="h-4 w-4" />
              <span>Trusted by industry leaders • SOC 2 Type II certified • 99.9% uptime</span>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal would go here in real implementation */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-background rounded-xl p-6 max-w-2xl w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Product Demo</h3>
              <Button variant="ghost" size="sm" onClick={() => setShowVideo(false)}>
                ×
              </Button>
            </div>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <span className="text-muted-foreground">Demo video would load here</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
