"use client";

import { ArrowRight, Wine, Users, TrendingUp, BarChart3, Zap, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// Nightlife venue content variants
const NIGHTLIFE_CONTENT = {
  bar: {
    badge: "Nightlife Management",
    title: "Master the Night",
    subtitle1: "Amplify the Energy",
    subtitle2: "Build the Experience", 
    description: "Transform your bar or nightlife venue with intelligent management tools that optimize inventory by 35%, enhance guest safety protocols, and create unforgettable experiences that keep the energy flowing all night long.",
    metrics: [
      { value: 127, label: "Drink Recipes", color: "purple" },
      { value: 284, label: "Guests Tonight", color: "blue" },
      { value: 42, label: "Revenue Growth", color: "green", suffix: "%" },
    ],
    testimonial: {
      quote: "Optimized our inventory by 35% while maintaining the perfect party atmosphere. The energy never stops!",
      author: "Night Owl Bar",
      location: "Downtown District",
      initials: "NB"
    },
    ctaText: "Elevate Your Venue",
    ctaSecondary: "Venue Success Stories",
  },
  club: {
    badge: "Club Operations",
    title: "Dominate the Scene",
    subtitle1: "Maximize the Vibe",
    subtitle2: "Perfect the Flow",
    description: "Revolutionary club management platform that orchestrates crowd flow, optimizes bar operations, and creates seamless experiences from entry to last call.",
    metrics: [
      { value: 450, label: "Club Capacity", color: "purple" },
      { value: 8, label: "Bar Stations", color: "blue" },
      { value: 68, label: "Profit Increase", color: "green", suffix: "%" },
    ],
    testimonial: {
      quote: "Game-changing platform that helped us manage 450+ guests seamlessly while boosting profits by 68%.",
      author: "Pulse Nightclub",
      location: "Entertainment District", 
      initials: "PN"
    },
    ctaText: "Transform Your Club",
    ctaSecondary: "Club Success",
  },
  lounge: {
    badge: "Lounge Excellence",
    title: "Craft the Ambiance",
    subtitle1: "Elevate the Service",
    subtitle2: "Curate the Experience",
    description: "Sophisticated lounge management tools that balance intimate atmosphere with operational efficiency, ensuring every guest feels VIP treatment.",
    metrics: [
      { value: 95, label: "Cocktail Menu", color: "purple" },
      { value: 150, label: "Premium Guests", color: "blue" },
      { value: 55, label: "Service Rating", color: "green", suffix: "%" },
    ],
    testimonial: {
      quote: "Elevated our service standards while maintaining the intimate lounge atmosphere our guests expect.",
      author: "Velvet Lounge",
      location: "Uptown Quarter",
      initials: "VL"
    },
    ctaText: "Perfect Your Lounge",
    ctaSecondary: "Luxury Stories",
  },
};

// Color variants for metrics
const COLOR_VARIANTS = {
  purple: "text-primary",
  blue: "text-blue-600 dark:text-blue-400", 
  green: "text-emerald-600 dark:text-emerald-400",
};

// Animated number component (placeholder for NumberTicker)
function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  return (
    <span className="tabular-nums">
      {value}{suffix}
    </span>
  );
}

export interface NightlifeHeroProps {
  variant?: 'bar' | 'club' | 'lounge';
  className?: string;
}

export function NightlifeHero({ 
  variant = 'bar',
  className
}: NightlifeHeroProps) {
  const content = NIGHTLIFE_CONTENT[variant];

  return (
    <section className={cn(
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
              <Badge className="clerk-inspired-badge bg-primary/10 text-primary border-primary/20 backdrop-blur-sm">
                <div className="h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
                {content.badge}
              </Badge>
            </div>

            {/* Main Heading with Creative Layout */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight leading-tight">
                {content.title}
                <br />
                <span className="text-brand-gradient">
                  {content.subtitle1}
                </span>
                <br />
                <span className="text-muted-foreground text-3xl lg:text-4xl">
                  {content.subtitle2}
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                {content.description}
              </p>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-3 gap-6">
              {content.metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className={cn(
                    "text-2xl lg:text-3xl font-bold mb-1",
                    COLOR_VARIANTS[metric.color as keyof typeof COLOR_VARIANTS]
                  )}>
                    <AnimatedNumber value={metric.value} suffix={metric.suffix} />
                  </div>
                  <div className="text-xs font-medium text-muted-foreground">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="clerk-cta-primary cta-equal" size="lg">
                {content.ctaText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="cta-equal" size="lg">
                <BarChart3 className="mr-2 h-4 w-4" />
                {content.ctaSecondary}
              </Button>
            </div>
          </div>

          {/* Interactive Card Column */}
          <div className="relative">
            <div className="enterprise-card-elevated p-8 rounded-3xl space-y-6 border bg-gradient-to-br from-card via-card to-muted/20 backdrop-blur-sm">
              
              {/* Icon Header */}
              <div className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary via-primary to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <Wine className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{content.title}</h3>
                <p className="text-muted-foreground max-w-md mx-auto text-sm">
                  Transform your nightlife venue with intelligent management tools that amplify the energy and build unforgettable experiences.
                </p>
              </div>
              
              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                {content.metrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className={cn(
                      "text-2xl font-bold mb-1",
                      COLOR_VARIANTS[metric.color as keyof typeof COLOR_VARIANTS]
                    )}>
                      <AnimatedNumber value={metric.value} suffix={metric.suffix} />
                    </div>
                    <div className="text-xs font-semibold text-muted-foreground">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Testimonial Card */}
              <div className="enterprise-testimonial-card p-6 rounded-2xl bg-gradient-to-r from-muted/30 to-muted/20 border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{content.testimonial.initials}</span>
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-sm text-foreground">{content.testimonial.author}</div>
                    <div className="text-xs text-muted-foreground">{content.testimonial.location}</div>
                  </div>
                </div>
                <blockquote className="text-foreground italic font-medium text-sm">
                  "{content.testimonial.quote}"
                </blockquote>
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
