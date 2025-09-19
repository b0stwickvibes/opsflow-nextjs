"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import Autoplay from "embla-carousel-autoplay";
import { ChevronRight, DollarSign, TrendingUp, BarChart3, Clock } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Section, SectionContent } from "@/components/shared/layout";

import { 
  useFeatureFlag, 
  usePageView, 
  usePermission 
} from '@/lib/hooks/restaurant-pages';
import { cn } from "@/lib/utils";

// Industry-specific billing content
const INDUSTRY_BILLING_CONTENT = {
  restaurant: {
    title: "Optimize Your Restaurant's Financial Operations",
    subtitle: "Usage-based billing platform designed to accelerate your restaurant's growth. Effortlessly manage food costs, labor expenses, and vendor payments with confidence.",
    primaryCTA: "Get Revenue Demo",
    secondaryCTA: "Guide to Restaurant Financial Management",
    trustMessage: "Trusted by Leading Restaurant Chains and Independent Operators",
    features: [
      { name: "Food Cost Analytics", icon: BarChart3 },
      { name: "Labor Management", icon: Clock },
      { name: "Revenue Tracking", icon: TrendingUp },
      { name: "Vendor Payments", icon: DollarSign },
    ],
  },
  bar: {
    title: "Streamline Your Bar's Revenue Management",
    subtitle: "Advanced billing and analytics platform built for bar operations. Track liquor costs, optimize pricing, and manage cash flow with real-time insights.",
    primaryCTA: "Get Bar Demo",
    secondaryCTA: "Guide to Bar Revenue Optimization",
    trustMessage: "Trusted by Premium Bars and Entertainment Venues",
    features: [
      { name: "Liquor Cost Control", icon: BarChart3 },
      { name: "Dynamic Pricing", icon: TrendingUp },
      { name: "Cash Flow Management", icon: DollarSign },
      { name: "Peak Hour Analysis", icon: Clock },
    ],
  },
  cafe: {
    title: "Accelerate Your Café's Financial Growth",
    subtitle: "Smart billing solution tailored for café operations. Manage ingredient costs, track popular items, and optimize your pricing strategy with data-driven insights.",
    primaryCTA: "Get Café Demo",
    secondaryCTA: "Guide to Café Profitability",
    trustMessage: "Trusted by Independent Cafés and Coffee Chains",
    features: [
      { name: "Ingredient Cost Tracking", icon: BarChart3 },
      { name: "Menu Optimization", icon: TrendingUp },
      { name: "Daily Revenue", icon: DollarSign },
      { name: "Service Speed Metrics", icon: Clock },
    ],
  },
};

// Mock logos - in real implementation, these would be industry-specific client logos
const TRUST_LOGOS = [
  { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/react-wordmark-white.svg", alt: "Restaurant Partner" },
  { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcn-ui-wordmark-white.svg", alt: "Bar Partner" },
  { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/supabase-wordmark-white.svg", alt: "Café Partner" },
  { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/tailwind-wordmark-white.svg", alt: "Food Service Partner" },
  { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vercel-wordmark-white.svg", alt: "Hospitality Partner" },
];

export interface BillingHeroProps {
  industry: 'restaurant' | 'bar' | 'cafe';
  role?: 'owner' | 'manager' | 'staff';
  variant?: 'default' | 'compact' | 'detailed';
}

const BillingHero = ({ 
  industry = 'restaurant', 
  role = 'manager',
  variant = 'default'
}: BillingHeroProps) => {
  // Feature flags and analytics
  const showLogosCarousel = useFeatureFlag('billingHeroLogos', true);
  const enableAutoScroll = useFeatureFlag('logoAutoScroll', true);
  
  usePageView(`${industry}_billing_hero`, { 
    variant,
    industry,
    role
  });

  // Permission checking for advanced billing features
  const canViewBillingDemo = usePermission('BILLING_DEMO_ACCESS');

  const content = INDUSTRY_BILLING_CONTENT[industry];

  // Industry-specific styling
  const industryColors = {
    restaurant: 'text-primary dark:text-primary',
    bar: 'text-primary dark:text-primary', 
    cafe: 'text-primary dark:text-primary'
  };

  const industryGradients = {
    restaurant: 'from-primary/10 to-secondary/10 dark:from-orange-950/20 dark:to-orange-900/10',
    bar: 'from-primary/10 to-secondary/10 dark:from-purple-950/20 dark:to-purple-900/10',
    cafe: 'from-primary/10 to-secondary/10 dark:from-amber-950/20 dark:to-amber-900/10'
  };

  return (
    <Section background="gradient" padding="xl">
      <SectionContent maxWidth="6xl">
        <div className="grid grid-cols-1 items-center justify-center gap-12 lg:grid-cols-[minmax(33.75rem,1fr)_1.5fr] lg:gap-8">
          {/* Content Section */}
          <div className="animate-fade-in-up">
            <div className="flex flex-col gap-6">
              <div className="space-y-4">
                <Badge className="clerk-inspired-badge inline-flex items-center gap-2">
                  <DollarSign className="size-4" />
                  <span className="text-sm font-medium">Financial Operations</span>
                </Badge>
                
                <h1 className="enterprise-headline text-foreground leading-tight font-bold">
                  {content.title}
                </h1>
                
                <p className="enterprise-body text-muted-foreground leading-relaxed">
                  {content.subtitle}
                </p>
              </div>

              {/* Feature Pills */}
              {variant === 'detailed' && (
                <div className="flex flex-wrap gap-3 animate-fade-in-up animation-delay-200">
                  {content.features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <div
                        key={feature.name}
                        className="enterprise-card inline-flex items-center gap-2 px-3 py-2 rounded-xl border text-sm font-medium hover-scale-103"
                      >
                        <div className="enterprise-icon-primary">
                          <Icon className="size-4" />
                        </div>
                        <span>{feature.name}</span>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
                <Button 
                  size="lg"
                  className="clerk-cta-primary cta-equal"
                  onClick={() => window.location.href = `/schedule-demo?industry=${industry}`}
                >
                  {content.primaryCTA}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="cta-equal"
                  onClick={() => window.location.href = `/resources?industry=${industry}`}
                >
                  {content.secondaryCTA}
                </Button>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="animate-fade-in-up animation-delay-300">
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-muted/20 to-muted/10 p-8 lg:aspect-[4/3]">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="enterprise-icon-primary mx-auto mb-4">
                      <BarChart3 className="size-16" />
                    </div>
                    <h3 className="text-xl font-semibold">Financial Dashboard Preview</h3>
                    <p className="text-sm text-muted-foreground">
                      Real-time revenue tracking and cost analysis
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContent>
    </Section>
  );
};

export { BillingHero };