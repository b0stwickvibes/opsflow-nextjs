"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import Autoplay from "embla-carousel-autoplay";
import { ChevronRight, DollarSign, TrendingUp, BarChart3, Clock } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

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
    <section className={cn(
      "bg-gradient-to-br",
      industryGradients[industry],
      "bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/noise.png')] py-12 font-sans md:py-20"
    )}>
      <div className="container">
        <div className="grid grid-cols-1 items-center justify-center gap-12 lg:grid-cols-[minmax(33.75rem,1fr)_1.5fr] lg:gap-8">
          {/* Content Section */}
          <div className="animate-fade-in-up">
            <div className="flex flex-col gap-6">
              <div className="space-y-4">
                <div className={cn("inline-flex items-center gap-2 px-3 py-1 rounded-full border bg-card/50 ", industryColors[industry])}>
                  <DollarSign className="size-4" />
                  <span className="text-sm font-medium">Financial Operations</span>
                </div>
                
                <h1 className="text-display-2xl enterprise-headline text-foreground  leading-tight font-bold md: lg:text-[3.5rem]">
                  {content.title}
                </h1>
                
                <p className="enterprise-body text-muted-foreground  leading-relaxed">
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
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-card/70  border text-sm font-medium"
                      >
                        <Icon className={cn("size-4", industryColors[industry])} />
                        <span>{feature.name}</span>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* CTA Section */}
              <div className="animate-fade-in-up animation-delay-300">
                <div className="flex flex-col items-start gap-4 lg:flex-row lg:items-center">
                  <div className="shrink-0">
                    <Button
                      asChild
                      className={cn(
                        "h-fit w-fit rounded-full px-8 py-4 font-medium text-sm tracking-wide shadow-lg hover:shadow-xl transition-all duration-200",
                        canViewBillingDemo ? "opacity-100" : "opacity-75 cursor-not-allowed"
                      )}
                      disabled={!canViewBillingDemo}
                    >
                      <a href="#" aria-label={content.primaryCTA}>
                        {content.primaryCTA}
                      </a>
                    </Button>
                  </div>
                  
                  <Button
                    variant="ghost"
                    asChild
                    className="group flex h-fit items-center gap-2 hover:bg-card/50 dark:hover:bg-black/20 transition-colors"
                  >
                    <a href="#" aria-label={content.secondaryCTA}>
                      <p className="text-foreground font-medium text-sm uppercase tracking-wider">
                        {content.secondaryCTA}
                      </p>
                      <ChevronRight className="stroke-foreground h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Section */}
          <div className="animate-fade-in-up animation-delay-100">
            <div className="relative ml-auto mr-auto aspect-[1.28581291/1] w-full max-w-[37.25rem] lg:ml-auto lg:mr-0">
              {/* Main Dashboard Image */}
              <div className="relative mx-auto aspect-[1.020365896/1] h-full w-[79.35%] max-w-[29.5625rem] overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                  alt={`${industry} financial dashboard interface`}
                  className="relative z-10 w-full object-cover"
                 width={1200} height={800} />
              </div>
              
              {/* Floating Feature Cards */}
              <div className="absolute -left-[-2%] top-[19.84%] z-30 aspect-[1.765043789/1] w-[30.49%] max-w-[11.875rem] overflow-hidden rounded-lg shadow-lg animate-slide-in-left animation-delay-400">
                <Image
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
                  alt={`${industry} cost tracking widget`}
                  className="size-full object-cover"
                 width={1200} height={800} />
              </div>
              
              <div className="absolute left-[0%] top-[55%] z-30 aspect-[1.776555024/1] w-[43.6%] max-w-[16.375rem] overflow-hidden rounded-lg shadow-lg animate-slide-in-left animation-delay-500">
                <Image
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg"
                  alt={`${industry} revenue analytics`}
                  className="size-full object-cover"
                 width={1200} height={800} />
              </div>
              
              <div className="absolute right-[0%] top-[40%] z-30 aspect-[1.170212766/1] w-[26.48%] max-w-[10.3125rem] overflow-hidden rounded-lg shadow-lg animate-slide-in-right animation-delay-600">
                <Image
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg"
                  alt={`${industry} payment management`}
                  className="size-full object-cover"
                 width={1200} height={800} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust/Social Proof Section */}
      {showLogosCarousel && (
        <div className="flex flex-col items-center justify-center gap-8 pt-28 animate-fade-in-up animation-delay-700">
          <p className="text-muted-foreground px-5 text-center font-medium text-sm uppercase tracking-wider">
            {content.trustMessage}
          </p>
          
          <Carousel
            opts={{
              loop: true,
              align: "center",
            }}
            plugins={enableAutoScroll ? [
              AutoScroll({ speed: 1 }),
              Autoplay({ playOnInit: true, delay: 1000 }),
            ] : []}
            className="max-w-(--breakpoint-2xl) relative w-full overflow-hidden"
          >
            <CarouselContent className="items-center">
              {TRUST_LOGOS.concat(TRUST_LOGOS).map((logo, index) => (
                <CarouselItem key={index} className="w-fit basis-auto px-7">
                  <Image
                    src={logo.src}
                    alt={`${logo.alt} - trusted ${industry} operations partner`}
                    className="h-6 md:h-8 w-full object-contain opacity-60 hover:opacity-90 transition-opacity"
                   width={1200} height={800} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      )}
    </section>
  );
};

export { BillingHero };