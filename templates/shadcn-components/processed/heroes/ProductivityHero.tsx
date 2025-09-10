"use client";

import {
  ArrowRight,
  ChefHat,
  BarChart3,
  Clock,
  TrendingUp,
  Users,
  Shield,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import { 
  useFeatureFlag, 
  usePageView, 
  usePermission 
} from '@/lib/hooks/restaurant-pages';

// Industry-specific productivity features and slides
const INDUSTRY_PRODUCTIVITY = {
  restaurant: {
    title: "Boost Restaurant Productivity with Smart Automation",
    subtitle: "Advanced tools designed to streamline kitchen operations and enhance service efficiency.",
    features: [
      { title: "Smart Kitchen Workflows", description: "Automate prep scheduling and reduce food waste with AI-powered insights.", icon: ChefHat },
      { title: "Service Optimization", description: "Optimize table turnover and staff coordination for peak performance.", icon: Clock },
      { title: "Team Coordination", description: "Seamless communication between front and back-of-house teams.", icon: Users },
      { title: "Performance Analytics", description: "Real-time insights into food costs, labor efficiency, and customer satisfaction.", icon: BarChart3 },
    ],
    slides: [
      { image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg", label: "Kitchen Dashboard" },
      { image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg", label: "Staff Scheduling" },
      { image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg", label: "Cost Analytics" },
    ],
    cta: "Boost Restaurant Productivity",
    color: "orange",
  },
  bar: {
    title: "Maximize Bar Productivity with Intelligent Systems",
    subtitle: "Advanced tools designed to optimize inventory management and boost revenue per customer.",
    features: [
      { title: "Smart Inventory Control", description: "Automated reordering and waste reduction with predictive analytics.", icon: BarChart3 },
      { title: "Revenue Optimization", description: "Dynamic pricing and upselling strategies for maximum profitability.", icon: TrendingUp },
      { title: "Staff Efficiency", description: "Optimize bartender workflows and service speed during peak hours.", icon: Clock },
      { title: "Customer Insights", description: "Track preferences and buying patterns to enhance service quality.", icon: Users },
    ],
    slides: [
      { image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg", label: "Inventory Control" },
      { image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg", label: "Revenue Analytics" },
      { image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg", label: "Customer Insights" },
    ],
    cta: "Boost Bar Productivity",
    color: "purple",
  },
  cafe: {
    title: "Enhance Café Productivity with Smart Operations",
    subtitle: "Advanced tools designed to perfect coffee preparation and streamline customer service.",
    features: [
      { title: "Order Flow Optimization", description: "Streamline coffee preparation with queue management and timing systems.", icon: Clock },
      { title: "Quality Consistency", description: "Maintain brew standards with automated quality control and monitoring.", icon: Shield },
      { title: "Customer Experience", description: "Enhance service speed with integrated ordering and loyalty programs.", icon: Users },
      { title: "Operational Analytics", description: "Track peak hours, popular items, and service efficiency metrics.", icon: BarChart3 },
    ],
    slides: [
      { image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg", label: "Order Queue" },
      { image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg", label: "Quality Control" },
      { image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg", label: "Customer Analytics" },
    ],
    cta: "Boost Café Productivity",
    color: "amber",
  },
};

export interface ProductivityHeroProps {
  industry: 'restaurant' | 'bar' | 'cafe';
  role?: 'owner' | 'manager' | 'staff';
  variant?: 'default' | 'compact' | 'detailed';
}

const ProductivityHero = ({ 
  industry = 'restaurant', 
  role = 'manager',
  variant = 'default'
}: ProductivityHeroProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  const showCarousel = useFeatureFlag('productivityHeroCarousel', true);
  const showFeatures = useFeatureFlag('productivityHeroFeatures', true);
  
  usePageView(`${industry}_productivity_hero`, { variant, industry, role });
  
  const canBoostProductivity = usePermission('PRODUCTIVITY_BOOST_ACCESS');
  const content = INDUSTRY_PRODUCTIVITY[industry];

  useEffect(() => {
    if (!api) return;
    
    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap());
    });
  }, [api]);

  const colorClasses = {
    orange: {
      primary: 'text-primary dark:text-primary',
      bg: 'bg-primary hover:bg-primary',
      accent: 'bg-primary dark:bg-primary/20',
    },
    purple: {
      primary: 'text-primary dark:text-primary',
      bg: 'bg-primary hover:bg-primary',
      accent: 'bg-primary dark:bg-primary/20',
    },
    amber: {
      primary: 'text-primary dark:text-primary',
      bg: 'bg-primary hover:bg-primary',
      accent: 'bg-primary dark:bg-primary/20',
    },
  };

  const colors = colorClasses[content.color as keyof typeof colorClasses];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background to-muted/20 py-20">
      <div className="container">
        {/* Carousel Section */}
        {showCarousel && (
          <div className="relative mb-16 animate-fade-in-up">
            <Carousel
              className="mx-auto max-w-4xl"
              setApi={setApi}
              opts={{ loop: true }}
              plugins={[Autoplay({ delay: 4000, stopOnInteraction: true })]}
            >
              <CarouselContent>
                {content.slides.map((slide, index) => (
                  <CarouselItem key={index}>
                    <Image
                      src={slide.image}
                      alt={`${industry} ${slide.label} interface`}
                      className="h-[400px] w-full rounded-2xl object-cover shadow-2xl sm:h-[500px] lg:h-[600px] hover:shadow-3xl transition-shadow duration-300"
                     width={1200} height={800} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Slide Indicator */}
            <div className="mt-8 flex flex-col items-center gap-3 font-medium">
              <div className="text-center">
                <span className="text-muted-foreground text-sm">
                  {currentSlide + 1} of {content.slides.length} — 
                </span>
                <span className={cn("font-semibold ml-1", colors.primary)}>
                  {content.slides[currentSlide].label}
                </span>
              </div>
              
              <div className="flex gap-2">
                {content.slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    aria-label={`Go to slide ${index + 1}: ${content.slides[index].label}`}
                    className={cn(
                      "h-1 w-8 rounded-full transition-all duration-200 hover:scale-110",
                      index === currentSlide ? "bg-primary shadow-sm" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Content Section */}
        <div className="space-y-12 text-center">
          <div className="mx-auto max-w-4xl animate-fade-in-up animation-delay-200">
            <div className={cn("inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border", colors.primary)}>
              <Zap className="size-4" />
              <span className="text-sm font-medium">Productivity Boost</span>
            </div>
            
            <h1 className="text-display-2xl enterprise-headline text-3xl font-bold tracking-tight sm: md: lg:text-6xl mb-6">
              {content.title}
            </h1>

            <p className="enterprise-body text-muted-foreground  font-medium lg:text-2xl">
              {content.subtitle}
            </p>
          </div>

          {/* Features Grid */}
          {showFeatures && (
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 animate-fade-in-up animation-delay-300">
              {content.features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={feature.title} 
                    className={cn(
                      "group space-y-4 text-center p-6 rounded-xl transition-all duration-200",
                      "hover:bg-muted/50 hover:shadow-lg hover:-translate-y-1",
                      "animate-fade-in-up",
                      `animation-delay-${400 + (index * 100)}`
                    )}
                  >
                    <div className="flex justify-center">
                      <div className={cn("p-3 rounded-full transition-colors", colors.accent)}>
                        <Icon className={cn("size-8 transition-colors", colors.primary)} />
                      </div>
                    </div>
                    <div>
                      <h2 className="enterprise-body  font-semibold group-hover:text-primary transition-colors">
                        {feature.title}
                      </h2>
                      <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* CTA Button */}
          <div className="animate-fade-in-up animation-delay-700">
            <Button 
              size="lg" 
              className={cn(
                "shadow-lg hover:shadow-xl transition-all duration-200 px-8 py-4 text-lg",
                colors.bg,
                !canBoostProductivity && "opacity-75 cursor-not-allowed"
              )}
              disabled={!canBoostProductivity}
            >
              <span className="flex items-center gap-2">
                {content.cta}
                <ArrowRight className="size-5" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ProductivityHero };