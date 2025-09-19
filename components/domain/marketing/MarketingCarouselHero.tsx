"use client";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight, Shield, CircleDot, Diamond, Blend, ChartNoAxesColumn, Thermometer, Users, BarChart3 } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { CarouselApi } from "@/components/ui/carousel";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

/**
 * Marketing Carousel Hero - Following DEVELOPMENT-SOP.md standards
 * Used in: /demo/hero page
 * Domain: Marketing demonstrations with carousel functionality  
 * Design: Enterprise styling with glassmorphism and restaurant operations context
 */

const features = [
  { 
    title: "HACCP Compliance", 
    description: "Automated temperature monitoring and audit trails for food safety.", 
    icon: Shield,
    iconStyle: "primary" as const
  },
  { 
    title: "Digital Checklists", 
    description: "Streamlined prep, cooking, and service task management.", 
    icon: CircleDot,
    iconStyle: "secondary" as const
  },
  { 
    title: "Staff Coordination", 
    description: "Connect kitchen, FOH, and management teams seamlessly.", 
    icon: Blend,
    iconStyle: "accent" as const
  },
  { 
    title: "Operational Analytics", 
    description: "Monitor compliance scores, efficiency metrics, and trends.", 
    icon: ChartNoAxesColumn,
    iconStyle: "muted" as const
  },
];

// Custom SVG Dashboard Components
const DashboardSVG = ({ variant = "dashboard" }: { variant?: "dashboard" | "temperature" | "staff" }) => {
  const baseProps = {
    width: "100%",
    height: "100%",
    viewBox: "0 0 400 320",
    className: "w-full h-full"
  };

  if (variant === "dashboard") {
    return (
      <svg {...baseProps}>
        <defs>
          <linearGradient id="dashboardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/> 
            </feMerge>
          </filter>
        </defs>
        
        {/* Background */}
        <rect width="400" height="320" fill="url(#dashboardGradient)" rx="12"/>
        
        {/* Background shapes */}
        <circle cx="320" cy="80" r="40" fill="rgba(255,255,255,0.05)"/>
        <rect x="20" y="200" width="60" height="60" rx="30" fill="rgba(255,255,255,0.05)"/>
        
        {/* Header */}
        <rect x="24" y="24" width="40" height="40" rx="8" fill="rgba(255,255,255,0.2)"/>
        <rect x="76" y="32" width="80" height="8" rx="4" fill="rgba(255,255,255,0.9)"/>
        <rect x="76" y="46" width="120" height="6" rx="3" fill="rgba(255,255,255,0.7)"/>
        
        {/* Revenue Card */}
        <rect x="24" y="80" width="110" height="70" rx="12" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)"/>
        <rect x="32" y="88" width="60" height="6" rx="3" fill="rgba(255,255,255,0.8)"/>
        <rect x="32" y="108" width="80" height="12" rx="6" fill="rgba(255,255,255,0.9)"/>
        <rect x="32" y="126" width="40" height="6" rx="3" fill="rgba(34,197,94,0.8)"/>
        
        {/* Orders Card */}
        <rect x="144" y="80" width="110" height="70" rx="12" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)"/>
        <rect x="152" y="88" width="70" height="6" rx="3" fill="rgba(255,255,255,0.8)"/>
        <rect x="152" y="108" width="60" height="12" rx="6" fill="rgba(255,255,255,0.9)"/>
        <rect x="152" y="126" width="30" height="6" rx="3" fill="rgba(34,197,94,0.8)"/>
        
        {/* Time Card */}
        <rect x="264" y="80" width="110" height="70" rx="12" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)"/>
        <rect x="272" y="88" width="80" height="6" rx="3" fill="rgba(255,255,255,0.8)"/>
        <rect x="272" y="108" width="50" height="12" rx="6" fill="rgba(255,255,255,0.9)"/>
        <rect x="272" y="126" width="35" height="6" rx="3" fill="rgba(239,68,68,0.8)"/>
        
        {/* Chart Area */}
        <rect x="24" y="170" width="350" height="100" rx="12" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)"/>
        <polyline points="40,240 80,220 120,200 160,210 200,185 240,190 280,175 320,160 360,150" 
                  fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2"/>
        
        {/* Status indicator */}
        <circle cx="32" cy="288" r="4" fill="#10B981">
          <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite"/>
        </circle>
        <rect x="44" y="284" width="60" height="8" rx="4" fill="rgba(255,255,255,0.8)"/>
      </svg>
    );
  }

  if (variant === "temperature") {
    return (
      <svg {...baseProps}>
        <defs>
          <linearGradient id="tempGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14B8A6" />
            <stop offset="50%" stopColor="#0D9488" />
            <stop offset="100%" stopColor="#0F766E" />
          </linearGradient>
        </defs>
        
        {/* Background */}
        <rect width="400" height="320" fill="url(#tempGradient)" rx="12"/>
        
        {/* Background shapes */}
        <circle cx="300" cy="60" r="30" fill="rgba(255,255,255,0.05)"/>
        <rect x="30" y="220" width="40" height="40" rx="20" fill="rgba(255,255,255,0.05)"/>
        
        {/* Header */}
        <rect x="24" y="24" width="40" height="40" rx="8" fill="rgba(255,255,255,0.2)"/>
        <rect x="76" y="32" width="100" height="8" rx="4" fill="rgba(255,255,255,0.9)"/>
        <rect x="76" y="46" width="140" height="6" rx="3" fill="rgba(255,255,255,0.7)"/>
        
        {/* Temperature Zones */}
        <rect x="24" y="80" width="350" height="50" rx="12" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)"/>
        <rect x="32" y="88" width="80" height="8" rx="4" fill="rgba(255,255,255,0.8)"/>
        <rect x="32" y="104" width="60" height="12" rx="6" fill="rgba(255,255,255,0.9)"/>
        <circle cx="320" cy="105" r="6" fill="#10B981"/>
        <rect x="340" y="100" width="30" height="8" rx="4" fill="rgba(255,255,255,0.8)"/>
        
        <rect x="24" y="140" width="350" height="50" rx="12" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)"/>
        <rect x="32" y="148" width="60" height="8" rx="4" fill="rgba(255,255,255,0.8)"/>
        <rect x="32" y="164" width="80" height="12" rx="6" fill="rgba(255,255,255,0.9)"/>
        <circle cx="320" cy="165" r="6" fill="#10B981"/>
        <rect x="340" y="160" width="30" height="8" rx="4" fill="rgba(255,255,255,0.8)"/>
        
        <rect x="24" y="200" width="350" height="50" rx="12" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)"/>
        <rect x="32" y="208" width="50" height="8" rx="4" fill="rgba(255,255,255,0.8)"/>
        <rect x="32" y="224" width="40" height="12" rx="6" fill="rgba(255,255,255,0.9)"/>
        <circle cx="320" cy="225" r="6" fill="#10B981"/>
        <rect x="340" y="220" width="30" height="8" rx="4" fill="rgba(255,255,255,0.8)"/>
        
        {/* Status */}
        <circle cx="32" cy="280" r="4" fill="#10B981">
          <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite"/>
        </circle>
        <rect x="44" y="276" width="80" height="8" rx="4" fill="rgba(255,255,255,0.8)"/>
      </svg>
    );
  }

  // Staff variant
  return (
    <svg {...baseProps}>
      <defs>
        <linearGradient id="staffGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366F1" />
          <stop offset="50%" stopColor="#4F46E5" />
          <stop offset="100%" stopColor="#4338CA" />
        </linearGradient>
      </defs>
      
      {/* Background */}
      <rect width="400" height="320" fill="url(#staffGradient)" rx="12"/>
      
      {/* Background shapes */}
      <circle cx="320" cy="70" r="35" fill="rgba(255,255,255,0.05)"/>
      <rect x="40" y="220" width="50" height="50" rx="25" fill="rgba(255,255,255,0.05)"/>
      
      {/* Header */}
      <rect x="24" y="24" width="40" height="40" rx="8" fill="rgba(255,255,255,0.2)"/>
      <rect x="76" y="32" width="120" height="8" rx="4" fill="rgba(255,255,255,0.9)"/>
      <rect x="76" y="46" width="100" height="6" rx="3" fill="rgba(255,255,255,0.7)"/>
      
      {/* Staff Cards */}
      <rect x="24" y="80" width="100" height="80" rx="12" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)"/>
      <circle cx="74" cy="105" r="12" fill="rgba(255,255,255,0.3)"/>
      <rect x="44" y="125" width="60" height="6" rx="3" fill="rgba(255,255,255,0.8)"/>
      <rect x="54" y="138" width="40" height="8" rx="4" fill="rgba(255,255,255,0.9)"/>
      
      <rect x="140" y="80" width="100" height="80" rx="12" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)"/>
      <circle cx="190" cy="105" r="12" fill="rgba(255,255,255,0.3)"/>
      <rect x="160" y="125" width="60" height="6" rx="3" fill="rgba(255,255,255,0.8)"/>
      <rect x="170" y="138" width="40" height="8" rx="4" fill="rgba(255,255,255,0.9)"/>
      
      <rect x="256" y="80" width="100" height="80" rx="12" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)"/>
      <circle cx="306" cy="105" r="12" fill="rgba(255,255,255,0.3)"/>
      <rect x="276" y="125" width="60" height="6" rx="3" fill="rgba(255,255,255,0.8)"/>
      <rect x="286" y="138" width="40" height="8" rx="4" fill="rgba(255,255,255,0.9)"/>
      
      {/* Progress bars */}
      <rect x="24" y="180" width="350" height="30" rx="8" fill="rgba(255,255,255,0.08)"/>
      <rect x="32" y="188" width="80" height="6" rx="3" fill="rgba(255,255,255,0.8)"/>
      <rect x="32" y="198" width="280" height="8" rx="4" fill="rgba(255,255,255,0.2)"/>
      <rect x="32" y="198" width="238" height="8" rx="4" fill="rgba(34,197,94,0.8)"/>
      
      {/* Status */}
      <circle cx="32" cy="280" r="4" fill="#3B82F6">
        <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite"/>
      </circle>
      <rect x="44" y="276" width="70" height="8" rx="4" fill="rgba(255,255,255,0.8)"/>
    </svg>
  );
};

const SLIDES = [
  { 
    label: "Restaurant Dashboard",
    component: "dashboard" as const
  },
  { 
    label: "Temperature Monitoring",
    component: "temperature" as const
  },
  { 
    label: "Staff Management",
    component: "staff" as const
  },
];

export function MarketingCarouselHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;
    api.on("select", () => setCurrentSlide(api.selectedScrollSnap()));
  }, [api]);

  return (
    <section className="enterprise-hero-section section-padding-large overflow-hidden hero-ambient accent-blue energy-balanced">
      <div className="container relative z-10 grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        {/* Left side - Content following SOP structure */}
        <div className="flex flex-col justify-between">
          <div className="space-y-8 lg:space-y-10">
            {/* Clerk-inspired badge per SOP */}
            <div className="motion-fade-in-up-320">
              <div className="clerk-inspired-badge">
                <Shield className="h-4 w-4" />
                <span>Restaurant Operations Platform</span>
              </div>
            </div>

            {/* Premium Typography per SOP */}
            <div className="motion-fade-in-up-320 animation-delay-100">
              <h1 className="enterprise-headline">
                Elevate Restaurant Operations
                <br />
                <span className="heading-brand-gradient">with OpsFlow</span>
              </h1>
              <p className="enterprise-body mt-6">
                Digital checklists, HACCP compliance, and team coordination—built specifically for modern restaurant operations and food safety management.
              </p>
            </div>

            {/* Features using enterprise-card classes per SOP */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 motion-fade-in-up-320 animation-delay-200">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <Card key={feature.title} className="clerk-interactive-tile feature-tile p-4 tile-hover">
                    <div className="flex gap-3">
                      <div className={`enterprise-icon-${feature.iconStyle} shrink-0`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Bottom section - CTAs and Slide Indicator */}
          <div className="space-y-6 mt-8">
            {/* CTA system per SOP */}
            <div className="flex flex-wrap items-center gap-4 motion-fade-in-up-320 animation-delay-300">
              <Button 
                className="clerk-cta-primary cta-shimmer hover-scale-103 text-base px-8 py-3 h-auto cta-equal"
                onClick={() => (window.location.href = "/pricing?industry=restaurants")}
              >
                Start Free Trial
              </Button>
              <Button
                variant="outline"
                className="hover-scale-103 text-base px-8 py-3 h-auto cta-equal max-sm:hidden"
                onClick={() => (window.location.href = "/product/demo")}
              >
                <span className="flex items-center gap-2">
                  Watch Demo
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Button>
            </div>

            {/* Slide Indicator with enterprise styling per SOP */}
            <div className="motion-fade-in-up-320 animation-delay-400 hidden lg:block">
              <Card className="clerk-interactive-tile w-fit">
                <div className="p-3">
                  <SlideIndicator
                    currentSlide={currentSlide}
                    slides={SLIDES}
                    api={api}
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Right side - Custom SVG Carousel */}
        <div className="relative -mr-[max(2rem,calc((100vw-80rem)/2+2rem))] max-lg:translate-x-10 motion-fade-in-up-320 animation-delay-200 flex items-center">
          <Carousel
            className="w-full"
            setApi={setApi}
            opts={{ loop: true }}
            plugins={[Autoplay({ delay: 4000, stopOnInteraction: true })]}
          >
            <CarouselContent>
              {SLIDES.map((slide, index) => (
                <CarouselItem key={index}>
                  <div className="relative w-full h-[400px] overflow-hidden rounded-t-xl">
                    <DashboardSVG variant={slide.component} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
      
      {/* Mobile Slide Indicator with SOP styling */}
      <div className="mt-8 motion-fade-in-up-320 animation-delay-500 lg:hidden">
        <Card className="clerk-interactive-tile mx-auto w-fit">
          <div className="p-4">
            <SlideIndicator
              currentSlide={currentSlide}
              slides={SLIDES}
              api={api}
            />
          </div>
        </Card>
      </div>
    </section>
  );
}

interface SlideIndicatorProps {
  currentSlide: number;
  slides: Array<{ label: string }>;
  api: CarouselApi | null;
}

function SlideIndicator({ currentSlide, slides, api }: SlideIndicatorProps) {
  return (
    <div className="flex flex-col items-center gap-2 font-medium">
      <div>
        <span className="text-muted-foreground">{currentSlide + 1} of {slides.length} — </span>
        <span className="text-purple-500 font-semibold">{slides[currentSlide]?.label}</span>
      </div>
      <div className="flex items-center gap-2 relative">
        {/* Connecting line behind indicators */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-px w-full bg-border opacity-40"></div>
        </div>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={cn(
              "h-0.5 w-6 rounded-full transition-colors relative z-10 bg-background",
              index === currentSlide
                ? "bg-purple-500"
                : "bg-purple-500/20 hover:bg-purple-500/40"
            )}
          />
        ))}
      </div>
    </div>
  );
}
