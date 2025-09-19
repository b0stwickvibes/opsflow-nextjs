"use client";

import { ArrowRight, Eye, Target, Zap, ChefHat, TrendingUp, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// Restaurant operations vision content
const INDUSTRY_CONTENT = {
  restaurant: {
    badge: "Our Vision",
    title: "The future of restaurant excellence",
    highlight: "starts with intelligent operations",
    subtitle: "We envision a world where restaurant owners focus on creating memorable dining experiences while AI handles the complexity of modern operations.",
    visionPoints: [
      {
        icon: ChefHat,
        title: "Culinary Focus",
        description: "Chefs and staff concentrate on what they do best - creating exceptional food and service experiences."
      },
      {
        icon: TrendingUp,
        title: "Smart Optimization",
        description: "AI-powered systems automatically optimize inventory, staffing, and operations for maximum efficiency."
      },
      {
        icon: Heart,
        title: "Guest Delight",
        description: "Every interaction is personalized and seamless, creating lasting connections with customers."
      },
    ],
    ctaText: "Join Our Vision",
    ctaSecondary: "Learn More",
  },
  bar: {
    badge: "Future Forward",
    title: "Reimagining bar hospitality",
    highlight: "through intelligent systems",
    subtitle: "Our vision transforms bars into data-driven hospitality experiences where every pour, every interaction, and every moment is optimized for excellence.",
    visionPoints: [
      {
        icon: Target,
        title: "Precision Service",
        description: "Every drink crafted to perfection with intelligent inventory and quality management systems."
      },
      {
        icon: TrendingUp,
        title: "Revenue Intelligence",
        description: "Dynamic pricing and analytics that maximize profitability while maintaining customer satisfaction."
      },
      {
        icon: Heart,
        title: "Community Building",
        description: "Technology that enhances human connection rather than replacing it."
      },
    ],
    ctaText: "Explore Vision",
    ctaSecondary: "See Roadmap",
  },
  cafe: {
    badge: "Innovation Path",
    title: "Crafting the café of tomorrow",
    highlight: "with thoughtful technology",
    subtitle: "We're building a future where café owners can focus on their craft while intelligent systems ensure every cup meets the highest standards.",
    visionPoints: [
      {
        icon: Eye,
        title: "Quality Consistency",
        description: "Advanced monitoring ensures every beverage meets your exact standards, every single time."
      },
      {
        icon: Zap,
        title: "Operational Flow",
        description: "Seamless workflows that eliminate friction and maximize both efficiency and quality."
      },
      {
        icon: Heart,
        title: "Community Impact",
        description: "Technology that strengthens the café's role as a community gathering place."
      },
    ],
    ctaText: "Start Journey",
    ctaSecondary: "View Roadmap",
  },
};

export interface VisionHeroProps {
  industry?: 'restaurant' | 'bar' | 'cafe';
  variant?: 'default' | 'detailed' | 'compact';
  className?: string;
}

export function VisionHero({ 
  industry = 'restaurant', 
  variant = 'default',
  className
}: VisionHeroProps) {
  const content = INDUSTRY_CONTENT[industry];

  return (
    <section className={cn(
      "relative overflow-hidden",
      "bg-gradient-to-br from-background via-background/98 to-secondary/5",
      className
    )}>
      {/* Elegant Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,122,1,0.05),transparent_50%)]" />
      </div>
      
      <div className="container relative py-20 lg:py-32">
        <div className="mx-auto max-w-6xl">
          {/* Header Section */}
          <div className="text-center space-y-8 mb-16">
            {/* Badge with vision icon - only 1 ambient element */}
            <div className="flex justify-center">
              <Badge className="clerk-inspired-badge bg-secondary/10 text-secondary border-secondary/20 backdrop-blur-sm">
                <Eye className="h-3 w-3 mr-2 animate-pulse" />
                {content.badge}
              </Badge>
            </div>

            {/* Vision Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                {content.title}{" "}
                <br className="hidden sm:block" />
                <span className="text-brand-gradient">
                  {content.highlight}
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                {content.subtitle}
              </p>
            </div>
          </div>

          {/* Vision Points Grid */}
          <div className="grid gap-8 lg:grid-cols-3 mb-12">
            {content.visionPoints.map((point, index) => (
              <div
                key={index}
                className="marketing-card p-8 rounded-2xl text-center space-y-4"
              >
                {/* Icon with subtle glow */}
                <div className="marketing-icon-enhanced mx-auto mb-4">
                  <point.icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground">
                  {point.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                Ready to be part of the future?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Join forward-thinking {industry} owners who are already transforming their operations with intelligent technology.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="clerk-cta-primary cta-equal" size="lg">
                {content.ctaText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="cta-equal" size="lg">
                {content.ctaSecondary}
              </Button>
            </div>

            {/* Progressive Enhancement */}
            {variant === 'detailed' && (
              <div className="pt-12 border-t border-border/40">
                <div className="grid gap-6 md:grid-cols-3 text-center">
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-primary">Q1 2026</div>
                    <div className="text-sm text-muted-foreground">AI-Powered Forecasting</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-primary">Q2 2026</div>
                    <div className="text-sm text-muted-foreground">Advanced Analytics Platform</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-primary">Q3 2026</div>
                    <div className="text-sm text-muted-foreground">Autonomous Operations</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
