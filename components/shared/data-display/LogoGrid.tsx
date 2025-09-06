"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import React from "react";
import { Play, CheckCircle } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useRestaurantAnalytics } from "@/lib/hooks/restaurant-pages";
import type { IndustryType, RoleType } from "@/types/restaurant-pages";

interface RestaurantClient {
  id: string;
  name: string;
  logo: string;
  industry: 'fine-dining' | 'fast-casual' | 'bars' | 'coffee' | 'catering' | 'food-truck';
  size: 'single' | 'small-chain' | 'large-chain' | 'enterprise';
  featured?: boolean;
  testimonial?: string;
  className?: string;
}

interface LogoGridProps {
  title?: string;
  subtitle?: string;
  ctaPrimary?: string;
  ctaSecondary?: string;
  clients?: RestaurantClient[];
  industry?: IndustryType | 'general';
  role?: RoleType | 'general';
  className?: string;
}

const bgPattern = {
  backgroundImage:
    "linear-gradient(135deg, oklch(0.95 0.02 50) 25%, transparent 25.5%, transparent 50%, oklch(0.95 0.02 50) 50.5%, oklch(0.95 0.02 50) 75%, transparent 75.5%, transparent)",
  backgroundSize: "12px 12px",
};

const defaultRestaurantClients: RestaurantClient[] = [
  {
    id: "client-1",
    name: "Artisan Bistro Group",
    logo: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=200&h=80&fit=crop&crop=center",
    industry: 'fine-dining',
    size: 'small-chain',
    featured: true,
    testimonial: "OpsFlow helped us reduce food waste by 35% across all locations",
    className: "h-8 w-auto",
  },
  {
    id: "client-2",
    name: "Metro Coffee Co.",
    logo: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=200&h=80&fit=crop&crop=center",
    industry: 'coffee',
    size: 'large-chain',
    className: "h-7 w-auto",
  },
  {
    id: "client-3",
    name: "Coastal Grill Network",
    logo: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=200&h=80&fit=crop&crop=center",
    industry: 'fast-casual',
    size: 'enterprise',
    featured: true,
    testimonial: "Staff scheduling efficiency improved by 45% with OpsFlow integration",
    className: "h-8 w-auto",
  },
  {
    id: "client-4",
    name: "Urban Bar Collective",
    logo: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=200&h=80&fit=crop&crop=center",
    industry: 'bars',
    size: 'small-chain',
    className: "h-7 w-auto",
  },
  {
    id: "client-5",
    name: "Garden Fresh Catering",
    logo: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=200&h=80&fit=crop&crop=center",
    industry: 'catering',
    size: 'single',
    className: "h-7 w-auto",
  },
  {
    id: "client-6",
    name: "Street Eats Trucks",
    logo: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=200&h=80&fit=crop&crop=center",
    industry: 'food-truck',
    size: 'small-chain',
    className: "h-6 w-auto",
  },
  {
    id: "client-7",
    name: "Downtown Deli Chain",
    logo: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=200&h=80&fit=crop&crop=center",
    industry: 'fast-casual',
    size: 'large-chain',
    className: "h-8 w-auto",
  },
  {
    id: "client-8",
    name: "Rooftop Restaurant Group",
    logo: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=200&h=80&fit=crop&crop=center",
    industry: 'fine-dining',
    size: 'enterprise',
    featured: true,
    testimonial: "HACCP compliance became effortless with automated monitoring",
    className: "h-8 w-auto",
  },
];

export function LogoGrid({
  title = "Trusted by Restaurant Leaders",
  subtitle = "From single locations to enterprise chains, restaurant operators trust OpsFlow to streamline their operations and ensure compliance.",
  ctaPrimary = "Start Your Trial",
  ctaSecondary = "Watch Demo",
  clients = defaultRestaurantClients,
  industry = 'restaurants',
  role = 'general',
  className
}: LogoGridProps) {
  const { trackInteraction } = useRestaurantAnalytics();

  const handlePrimaryCtaClick = () => {
    trackInteraction('primary_cta_click', { 
      section: 'logo_grid',
      industry, 
      role 
    });
  };

  const handleSecondaryCtaClick = () => {
    trackInteraction('demo_cta_click', { 
      section: 'logo_grid',
      industry, 
      role 
    });
  };

  const handleClientClick = (client: RestaurantClient) => {
    trackInteraction('client_logo_click', {
      client: client.name,
      industry: client.industry,
      size: client.size,
      role
    });
  };

  const getIndustryColor = (clientIndustry: RestaurantClient['industry']) => {
    const colors = {
      'fine-dining': 'bg-purple-100 dark:bg-purple-900/30',
      'fast-casual': 'bg-orange-100 dark:bg-orange-900/30',
      'bars': 'bg-amber-100 dark:bg-amber-900/30',
      'coffee': 'bg-yellow-100 dark:bg-yellow-900/30',
      'catering': 'bg-green-100 dark:bg-green-900/30',
      'food-truck': 'bg-blue-100 dark:bg-blue-900/30'
    };
    return colors[clientIndustry] || 'bg-gray-100 dark:bg-gray-900/30';
  };

  return (
    <section className={cn("relative grid w-full overflow-hidden py-32 bg-gradient-to-br from-orange-50/50 to-amber-50/50 dark:from-orange-950/20 dark:to-amber-950/20", className)}>
      <div className="container relative z-10 h-full items-center justify-center gap-8">
        {/* Header Section */}
        <div className="relative flex h-20 w-full items-center justify-center border border-x-0 border-orange-200/50 dark:border-orange-800/50 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
          <div className="text-center px-8">
            <h1 className="text-3xl font-bold uppercase tracking-tighter md:text-4xl text-gray-900 dark:text-gray-100">
              {title}
            </h1>
            <p className="text-sm text-muted-foreground mt-2 max-w-2xl">
              {subtitle}
            </p>
          </div>
          <BgPattern />
        </div>

        {/* Carousel Sections */}
        <div className="w-full py-20">
          {/* Top Carousel - Featured Clients */}
          <div className="mb-8">
            <h3 className="text-center text-lg font-semibold text-gray-700 dark:text-gray-300 mb-6">
              Featured Success Stories
            </h3>
            <Carousel
              opts={{ loop: true, align: "start" }}
              plugins={[AutoScroll({ playOnInit: true, speed: 1 })]}
            >
              <CarouselContent className="ml-0">
                {clients.filter(client => client.featured).map((client) => (
                  <CarouselItem
                    key={client.id}
                    className={cn(
                      "border-border relative flex basis-1/2 justify-center border border-r-0 border-t-0 pl-0 sm:basis-1/3 md:basis-1/4 lg:basis-1/5",
                      getIndustryColor(client.industry)
                    )}
                  >
                    <div 
                      className="group flex flex-col items-center justify-center lg:mx-10 py-8 cursor-pointer"
                      onClick={() => handleClientClick(client)}
                    >
                      <div className="relative mb-4">
                        <img
                          src={client.logo}
                          alt={client.name}
                          className={cn(client.className, "rounded-lg object-cover filter brightness-110 group-hover:scale-105 transition-transform")}
                        />
                        <div className="absolute -top-2 -right-2">
                          <CheckCircle className="w-5 h-5 text-green-600 bg-white rounded-full" />
                        </div>
                      </div>
                      <h4 className="font-semibold text-sm text-center text-gray-900 dark:text-gray-100">
                        {client.name}
                      </h4>
                      <p className="text-xs text-muted-foreground capitalize text-center">
                        {client.industry.replace('-', ' ')} • {client.size.replace('-', ' ')}
                      </p>
                      {client.testimonial && (
                        <p className="text-xs text-muted-foreground text-center mt-2 px-4 line-clamp-2">
                          "{client.testimonial}"
                        </p>
                      )}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          {/* Bottom Carousel - All Clients */}
          <Carousel
            opts={{ loop: true, align: "end" }}
            plugins={[AutoScroll({ playOnInit: true, speed: 0.8, direction: "backward" })]}
          >
            <CarouselContent className="ml-0">
              {clients.map((client) => (
                <CarouselItem
                  key={`bottom-${client.id}`}
                  className="border-border relative flex basis-1/2 justify-center border border-b-0 border-r-0 border-t-0 pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-colors"
                >
                  <div 
                    className="group flex flex-col items-center justify-center lg:mx-10 py-6 cursor-pointer"
                    onClick={() => handleClientClick(client)}
                  >
                    <img
                      src={client.logo}
                      alt={client.name}
                      className={cn(client.className, "rounded-md object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300")}
                    />
                    <span className="text-xs text-muted-foreground mt-2 text-center capitalize">
                      {client.industry.replace('-', ' ')}
                    </span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* CTA Section */}
        <div className="relative flex h-24 w-full items-center justify-center border border-x-0 border-orange-200/50 dark:border-orange-800/50 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button 
              className="h-12 rounded-xl !px-8 bg-orange-600 hover:bg-orange-700 text-white font-semibold"
              onClick={handlePrimaryCtaClick}
            >
              {ctaPrimary}
            </Button>
            <Button
              variant="ghost"
              className="flex h-12 items-center gap-3 rounded-xl !px-8 hover:bg-orange-50 dark:hover:bg-orange-950/30"
              onClick={handleSecondaryCtaClick}
            >
              <Play className="w-4 h-4" />
              {ctaSecondary}
            </Button>
          </div>
          <BgPattern sideLines={false} />
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-orange-600">2,000+</div>
            <div className="text-sm text-muted-foreground">Restaurant Locations</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-orange-600">95%</div>
            <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-orange-600">35%</div>
            <div className="text-sm text-muted-foreground">Average Waste Reduction</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-orange-600">24/7</div>
            <div className="text-sm text-muted-foreground">Support Coverage</div>
          </div>
        </div>
      </div>
    </section>
  );
}

const PlayIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="15"
      height="18"
      viewBox="0 0 15 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1.11523 3.94458C1.11523 2.36225 2.86573 1.40657 4.19675 2.26222L12.4982 7.59889C13.7229 8.38617 13.7229 10.1763 12.4982 10.9636L4.19675 16.3003C2.86573 17.1559 1.11523 16.2003 1.11523 14.6179V3.94458Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const BgPattern = ({ sideLines = true }: { sideLines?: boolean }) => {
  return (
    <>
      {/* bg pattern left */}
      <div
        className="absolute left-0 top-1/2 z-20 size-20 -translate-x-full -translate-y-1/2 border border-r-0 border-orange-200/50 dark:border-orange-800/50"
        style={bgPattern}
      >
        <span className="bg-orange-600 absolute -right-1 -top-1 z-20 size-2 rounded-full" />
        <span className="bg-orange-600 absolute -bottom-1 -right-1 z-20 size-2 rounded-full" />
        <span className="bg-orange-600 absolute -bottom-1 -left-1 z-20 size-2 rounded-full" />
        <span className="bg-orange-600 absolute -left-1 -top-1 z-20 size-2 rounded-full" />
      </div>

      {/* bg pattern right */}
      <div
        className="absolute right-0 top-1/2 z-20 size-20 -translate-y-1/2 translate-x-full border border-l-0 border-orange-200/50 dark:border-orange-800/50"
        style={bgPattern}
      >
        <span className="bg-orange-600 absolute -right-1 -top-1 z-20 size-2 rounded-full" />
        <span className="bg-orange-600 absolute -bottom-1 -right-1 z-20 size-2 rounded-full" />
        <span className="bg-orange-600 absolute -bottom-1 -left-1 z-20 size-2 rounded-full" />
        <span className="bg-orange-600 absolute -left-1 -top-1 z-20 size-2 rounded-full" />
      </div>

      {/* bg Lines left */}
      {sideLines && (
        <div className="absolute left-0 z-10 h-[200vh] w-px border-l border-orange-200/30 dark:border-orange-800/30" />
      )}
      {sideLines && (
        <div className="absolute -left-20 z-10 h-[200vh] w-px border-l border-orange-200/20 dark:border-orange-800/20" />
      )}

      {/* bg Lines right */}
      {sideLines && (
        <div className="absolute right-0 z-10 h-[200vh] w-px border-l border-orange-200/30 dark:border-orange-800/30" />
      )}
      {sideLines && (
        <div className="absolute -right-20 z-10 h-[200vh] w-px border-l border-orange-200/20 dark:border-orange-800/20" />
      )}
    </>
  );
};