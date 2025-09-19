"use client";

import { Shield, Wine, Coffee, Building2, ChefHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { industryThemes, getIndustryButtonStyle, getIndustryCardStyle, getIndustryGradientText, type Industry } from "@/lib/industry-themes";

interface IndustryHeroProps {
  industry: Industry;
}

const industryConfig = {
  restaurant: {
    icon: ChefHat,
    title: 'Complete Restaurant Operations Platform',
    subtitle: 'From HACCP compliance to staff management, streamline every aspect of your restaurant operations. Built specifically for full-service, fast-casual, and fine dining establishments.',
    primaryCta: 'Start free demo',
    secondaryCta: 'Talk to Restaurant Expert',
    metrics: [
      { value: '2,500+', label: 'Restaurants Using OpsFlow' },
      { value: '32%', label: 'Average Cost Savings' },
      { value: '18 points', label: 'Compliance Score Improvement' },
      { value: '15 hrs/wk', label: 'Manager Time Saved' }
    ]
  },
  bar: {
    icon: Wine,
    title: 'Complete Bar Operations Platform',
    subtitle: 'From liquor inventory to age verification, streamline every aspect of your bar operations. Built specifically for bars, nightclubs, and entertainment venues.',
    primaryCta: 'Start free demo',
    secondaryCta: 'Talk to Bar Expert',
    metrics: [
      { value: '850+', label: 'Bars Using OpsFlow' },
      { value: '28%', label: 'Average Cost Savings' },
      { value: '22 points', label: 'Compliance Score Improvement' },
      { value: '12 hrs/wk', label: 'Manager Time Saved' }
    ]
  },
  coffee: {
    icon: Coffee,
    title: 'Complete Coffee Operations Platform',
    subtitle: 'From rush hour optimization to quality control, streamline every aspect of your coffee operations. Built specifically for coffee shops, cafes, and roasters.',
    primaryCta: 'Start free demo',
    secondaryCta: 'Talk to Coffee Expert',
    metrics: [
      { value: '1,200+', label: 'Coffee Shops Using OpsFlow' },
      { value: '25%', label: 'Average Cost Savings' },
      { value: '16 points', label: 'Quality Score Improvement' },
      { value: '8 hrs/wk', label: 'Manager Time Saved' }
    ]
  },
  hotel: {
    icon: Building2,
    title: 'Complete Hotel Operations Platform',
    subtitle: 'From guest experience to multi-venue operations, streamline every aspect of your hospitality operations. Built specifically for hotels, resorts, and enterprise hospitality.',
    primaryCta: 'Start free demo',
    secondaryCta: 'Talk to Hotel Expert',
    metrics: [
      { value: '350+', label: 'Hotels Using OpsFlow' },
      { value: '35%', label: 'Average Cost Savings' },
      { value: '24 points', label: 'Guest Score Improvement' },
      { value: '20 hrs/wk', label: 'Manager Time Saved' }
    ]
  }
};

export function IndustryHero({ industry }: IndustryHeroProps) {
  const config = industryConfig[industry];
  const theme = industryThemes[industry];
  const Icon = config.icon;

  return (
    <section className={`enterprise-hero-section section-padding-large overflow-hidden hero-ambient ${theme.accent} ${theme.energy}`}>
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Industry Badge */}
          <div className="motion-fade-in-up-320">
            <div className="clerk-inspired-badge mx-auto w-fit">
              <Icon className="h-4 w-4" />
              <span>{theme.name} Operations Platform</span>
            </div>
          </div>

          {/* Main Content with gradient title */}
          <div className="motion-fade-in-up-320 animation-delay-100">
            <h1 
              className="enterprise-headline"
              style={getIndustryGradientText(industry)}
            >
              {config.title}
            </h1>
            <p className="enterprise-body mt-6 max-w-3xl mx-auto">
              {config.subtitle}
            </p>
          </div>

          {/* CTAs with gradient styling */}
          <div className="flex flex-wrap items-center justify-center gap-4 motion-fade-in-up-320 animation-delay-200">
            <Button 
              className="hover-scale-103 text-base px-8 py-3 h-auto cta-equal transition-all duration-300 hover:shadow-lg"
              style={getIndustryButtonStyle(industry, 'primary')}
            >
              {config.primaryCta}
            </Button>
            <Button
              className="hover-scale-103 text-base px-8 py-3 h-auto cta-equal border transition-all duration-300"
              style={getIndustryButtonStyle(industry, 'secondary')}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLElement;
                target.style.backgroundColor = theme.colors.secondaryHover;
                target.style.borderColor = theme.colors.primary;
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLElement;
                target.style.background = theme.colors.gradientSubtle;
                target.style.borderColor = theme.colors.border;
              }}
            >
              {config.secondaryCta}
            </Button>
          </div>

          {/* Metrics Grid with theme colors */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 motion-fade-in-up-320 animation-delay-300">
            {config.metrics.map((metric, index) => (
              <Card 
                key={index} 
                className="clerk-interactive-tile p-6 tile-hover text-center border transition-colors duration-200"
                style={getIndustryCardStyle(industry)}
                onMouseEnter={(e) => {
                  const target = e.currentTarget as HTMLElement;
                  target.style.backgroundColor = theme.colors.secondary;
                  target.style.borderColor = theme.colors.primary;
                }}
                onMouseLeave={(e) => {
                  const target = e.currentTarget as HTMLElement;
                  target.style.backgroundColor = 'transparent';
                  target.style.borderColor = theme.colors.border;
                }}
              >
                <div 
                  className="text-3xl font-bold mb-2"
                  style={{ color: theme.colors.primary }}
                >
                  {metric.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {metric.label}
                </div>
              </Card>
            ))}
          </div>

          {/* Section Header */}
          <div className="pt-12 motion-fade-in-up-320 animation-delay-400">
            <h2 className="text-3xl font-bold text-center">
              Everything You Need for {industry.charAt(0).toUpperCase() + industry.slice(1)} Operations
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
