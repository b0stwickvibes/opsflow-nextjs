"use client";

import { MoveRight, ChefHat, BarChart3, Clock, TrendingUp, Shield, Utensils } from "lucide-react";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

import { 
  useFeatureFlag, 
  usePageView, 
  usePermission 
} from '@/lib/hooks/restaurant-pages';
import { cn } from "@/lib/utils";

// Industry-specific vision content
const INDUSTRY_VISION_CONTENT = {
  restaurant: {
    title: "Uncover our vision for more efficient, profitable restaurants",
    subtitle: "Be part of our journey to revolutionize restaurant operations with AI-powered solutions that reduce waste, optimize workflows, and enhance customer satisfaction.",
    cta: "Start Free Trial",
    images: [
      { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg", alt: "Kitchen automation dashboard" },
      { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-2.svg", alt: "Food cost analytics" },
      { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-3.svg", alt: "Staff scheduling optimization" },
    ],
    icon: ChefHat,
    color: "orange",
    bgColor: "bg-orange-50/50 dark:bg-orange-950/10",
  },
  bar: {
    title: "Discover our vision for smarter, more profitable bars",
    subtitle: "Join our mission to transform bar operations with intelligent inventory management, dynamic pricing, and customer analytics that maximize revenue.",
    cta: "Explore Solutions", 
    images: [
      { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg", alt: "Bar inventory dashboard" },
      { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-2.svg", alt: "Revenue optimization analytics" },
      { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-3.svg", alt: "Customer behavior insights" },
    ],
    icon: BarChart3,
    color: "purple",
    bgColor: "bg-purple-50/50 dark:bg-purple-950/10",
  },
  cafe: {
    title: "Explore our vision for streamlined, exceptional cafés",
    subtitle: "Be part of revolutionizing café operations with smart ordering systems, quality consistency tools, and customer experience enhancements.",
    cta: "Start Journey",
    images: [
      { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg", alt: "Coffee quality dashboard" },
      { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-2.svg", alt: "Order flow optimization" },
      { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-3.svg", alt: "Customer experience metrics" },
    ],
    icon: Clock,
    color: "amber",
    bgColor: "bg-amber-50/50 dark:bg-amber-950/10",
  },
};

export interface VisionHeroProps {
  industry: 'restaurant' | 'bar' | 'cafe';
  role?: 'owner' | 'manager' | 'staff';
  variant?: 'default' | 'compact' | 'detailed';
}

const VisionHero = ({ 
  industry = 'restaurant', 
  role = 'owner',
  variant = 'default'
}: VisionHeroProps) => {
  // Feature flags and analytics
  const showAnimatedCTA = useFeatureFlag('visionHeroAnimatedCTA', true);
  
  usePageView(`${industry}_vision_hero`, { 
    variant,
    industry,
    role
  });

  // Permission checking
  const canStartTrial = usePermission('TRIAL_START_ACCESS');

  const content = INDUSTRY_VISION_CONTENT[industry];
  const Icon = content.icon;

  // Industry-specific styling
  const colorClasses = {
    orange: {
      primary: 'text-orange-600 dark:text-orange-400',
      bg: 'bg-orange-600',
      hover: 'hover:bg-orange-700',
      accent: 'bg-orange-100 dark:bg-orange-900/20',
    },
    purple: {
      primary: 'text-purple-600 dark:text-purple-400',
      bg: 'bg-purple-600',
      hover: 'hover:bg-purple-700',
      accent: 'bg-purple-100 dark:bg-purple-900/20',
    },
    amber: {
      primary: 'text-amber-600 dark:text-amber-400',
      bg: 'bg-amber-600',
      hover: 'hover:bg-amber-700',
      accent: 'bg-amber-100 dark:bg-amber-900/20',
    },
  };

  const colors = colorClasses[content.color as keyof typeof colorClasses];

  return (
    <section className={cn("py-12 font-sans md:py-20", content.bgColor)}>
      <div className="container max-w-[87.5rem]">
        <div className="grid grid-cols-1 gap-[5.625rem] lg:grid-cols-2">
          {/* Content Section */}
          <div className="animate-fade-in-up">
            <div className="flex flex-col gap-12">
              {/* Industry Badge */}
              <div className={cn("inline-flex items-center gap-2 self-start px-3 py-1 rounded-full border", colors.primary)}>
                <Icon className="size-4" />
                <span className="text-sm font-medium capitalize">{industry} Innovation</span>
              </div>
              
              <div>
                <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl leading-tight">
                  {content.title}
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {content.subtitle}
                </p>
              </div>
              
              {/* CTA Button */}
              <Button
                asChild
                className={cn(
                  "group flex h-fit w-fit items-center gap-2 rounded-full px-8 py-4 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-200",
                  colors.bg,
                  colors.hover,
                  !canStartTrial && "opacity-75 cursor-not-allowed"
                )}
                disabled={!canStartTrial}
              >
                <a href="#" aria-label={`${content.cta} for ${industry}`}>
                  <div>{content.cta}</div>
                  {showAnimatedCTA ? (
                    <div className="relative h-6 w-7 overflow-hidden">
                      <div className="absolute top-0 left-0 flex -translate-x-1/2 items-center transition-all duration-500 group-hover:translate-x-0">
                        <MoveRight className="h-6 w-6 fill-white px-1" />
                        <MoveRight className="h-6 w-6 fill-white px-1" />
                      </div>
                    </div>
                  ) : (
                    <MoveRight className="h-5 w-5" />
                  )}
                </a>
              </Button>
            </div>
          </div>

          {/* Visual Grid Section */}
          <div className="animate-fade-in-up animation-delay-200">
            <AspectRatio ratio={1.390658174 / 1}>
              <div className="grid h-full w-full grid-cols-2 grid-rows-2 gap-5 lg:max-w-[38.9375rem] lg:gap-8">
                {/* Large Image */}
                <div className="col-[1/2] row-[1/3] animate-scale-in animation-delay-400">
                  <div className="h-full w-full overflow-hidden rounded-xl sm:rounded-2xl xl:rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-200">
                    <img
                      src={content.images[0].src}
                      alt={content.images[0].alt}
                      className="h-full w-full object-cover object-center hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                
                {/* Top Right Image */}
                <div className="col-[2/3] row-[1/2] animate-slide-in-right animation-delay-500">
                  <div className="h-full w-full overflow-hidden rounded-xl sm:rounded-2xl xl:rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-200">
                    <img
                      src={content.images[1].src}
                      alt={content.images[1].alt}
                      className="h-full w-full object-cover object-center hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                
                {/* Bottom Right Image */}
                <div className="col-[2/3] row-[2/3] animate-slide-in-right animation-delay-600">
                  <div className="h-full w-full overflow-hidden rounded-xl sm:rounded-2xl xl:rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-200">
                    <img
                      src={content.images[2].src}
                      alt={content.images[2].alt}
                      className="h-full w-full object-cover object-center hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  );
};

export { VisionHero };