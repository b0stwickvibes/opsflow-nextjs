"use client";

import Autoplay from "embla-carousel-autoplay";
import {
  ArrowRight,
  ChefHat,
  Thermometer,
  CheckSquare,
  BarChart3,
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
import { useRestaurantAnalytics } from "@/lib/hooks/restaurant-pages";
import type { IndustryType, RoleType } from "@/types/restaurant-pages";

interface CarouselHeroSlide {
  image: string;
  label: string;
  alt: string;
}

interface CarouselHeroFeature {
  title: string;
  description: string;
  icon: React.ElementType;
}

interface CarouselHeroProps {
  slides: CarouselHeroSlide[];
  features: CarouselHeroFeature[];
  title: string;
  subtitle: string;
  primaryCTA: string;
  secondaryCTA?: string;
  industry?: IndustryType | 'general';
  role?: RoleType | 'general';
  autoplayDelay?: number;
  className?: string;
}

const defaultRestaurantFeatures: CarouselHeroFeature[] = [
  {
    title: "Smart Task Management",
    description: "Track kitchen prep, FOH duties, and cleaning schedules in real-time.",
    icon: CheckSquare,
  },
  {
    title: "HACCP Compliance",
    description: "Automated temperature monitoring and food safety workflows.",
    icon: Thermometer,
  },
  {
    title: "Staff Coordination",
    description: "Streamline communication between kitchen, FOH, and management.",
    icon: ChefHat,
  },
  {
    title: "Live Analytics",
    description: "Real-time insights on task completion and compliance scores.",
    icon: BarChart3,
  },
];

const defaultRestaurantSlides: CarouselHeroSlide[] = [
  { 
    image: "/images/restaurant-dashboard.webp", 
    label: "Operations Dashboard",
    alt: "Restaurant operations management dashboard showing live metrics"
  },
  { 
    image: "/images/haccp-monitoring.webp", 
    label: "HACCP Monitoring",
    alt: "Food safety compliance dashboard with temperature tracking"
  },
  { 
    image: "/images/task-coordination.webp", 
    label: "Task Coordination",
    alt: "Staff task management and coordination interface"
  },
];

export function CarouselHero({
  slides = defaultRestaurantSlides,
  features = defaultRestaurantFeatures,
  title = "Restaurant Operations, Streamlined",
  subtitle = "Complete task management, HACCP compliance, and staff coordination for modern restaurant operations.",
  primaryCTA = "Start Restaurant Demo",
  secondaryCTA = "View Features",
  industry = 'restaurants',
  role = 'general',
  autoplayDelay = 4000,
  className
}: CarouselHeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState<CarouselApi>();
  const { trackHeroCTA } = useRestaurantAnalytics();

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap());
    });
  }, [api]);

  const handlePrimaryClick = () => {
    trackHeroCTA(industry, 'carousel', primaryCTA);
  };

  const handleSecondaryClick = () => {
    trackHeroCTA(industry, 'carousel', secondaryCTA || 'secondary');
  };

  return (
    <section className={cn("relative overflow-hidden py-24", className)}>
      <div className="container">
        {/* Carousel Section */}
        <div className="relative mb-16">
          <Carousel
            className="mx-auto max-w-5xl"
            setApi={setApi}
            opts={{
              loop: true,
            }}
            plugins={[Autoplay({ delay: autoplayDelay, stopOnInteraction: true })]}
          >
            <CarouselContent>
              {slides.map((slide, index) => (
                <CarouselItem key={index}>
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-blue-50 dark:from-orange-950/20 dark:to-blue-950/20">
                    <Image
                      src={slide.image}
                      alt={slide.alt}
                      className="h-[400px] w-full object-cover sm:h-[500px] lg:h-[600px]"
                     width={1200} height={800} />
                    {/* Overlay for better text contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <SlideIndicator
            currentSlide={currentSlide}
            slides={slides}
            className="mt-8"
            api={api}
          />
        </div>

        {/* Content Section */}
        <div className="space-y-12 text-center">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-display-2xl text-primary dark:text-primary">
              {title}
            </h1>

            <p className="enterprise-body text-muted-foreground mt-6  font-medium lg:text-2xl">
              {subtitle}
            </p>
          </div>

          {/* Restaurant Features */}
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="space-y-4 text-center">
                  <div className="flex justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary dark:bg-primary/30">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h2 className="enterprise-body  font-semibold text-primary dark:text-primary">
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

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button 
              size="lg" 
              onClick={handlePrimaryClick}
              className="enterprise-body bg-gradient-to-r from-primary/100 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white border-0 px-8 py-6  font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
              aria-label={primaryCTA}
            >
              {primaryCTA}
            </Button>
            <Button 
              onClick={handleSecondaryClick}
              variant="outline" 
              size="lg"
              className="enterprise-body px-8 py-6  font-semibold bg-card/80 backdrop-blur-sm border-primary hover:bg-card hover:border-primary transition-all duration-200"
              aria-label={secondaryCTA}
            >
              <span className="flex items-center gap-2">
                {secondaryCTA}
                <ArrowRight className="h-5 w-5" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

interface SlideIndicatorProps {
  currentSlide: number;
  slides: Array<{ label: string }>;
  className?: string;
  api?: CarouselApi | null;
}

const SlideIndicator = ({
  currentSlide,
  slides,
  className,
  api,
}: SlideIndicatorProps) => {
  return (
    <div
      className={cn("flex flex-col items-center gap-2 font-medium", className)}
    >
      <div className="">
        <span className="text-primary dark:text-primary">
          {currentSlide + 1} of {slides.length} — 
        </span>
        <span className="text-primary ml-1">
          {slides[currentSlide].label}
        </span>
      </div>
      <div className="flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={cn(
              "h-1 w-8 rounded-full transition-colors",
              index === currentSlide
                ? "bg-primary0"
                : "bg-primary hover:bg-primary dark:bg-primary dark:hover:bg-primary",
            )}
          />
        ))}
      </div>
    </div>
  );
};