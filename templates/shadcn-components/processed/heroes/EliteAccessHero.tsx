"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import { 
  useFeatureFlag, 
  usePageView, 
  usePermission 
} from '@/lib/hooks/restaurant-pages';
import { cn } from "@/lib/utils";
import { ChefHat, BarChart3, Clock, Star } from "lucide-react";

// Industry-specific elite access content
const INDUSTRY_ELITE_CONTENT = {
  restaurant: {
    badge: "Announcing Elite Restaurant Features",
    title: "Achieve Peak Performance with Elite Restaurant Pro",
    subtitle: "Elevate your restaurant operations with premium analytics, priority support, and exclusive features designed for industry leaders.",
    buttons: [
      { title: "Explore Elite", url: "#", variant: "default" as const },
      { title: "Start Premium Trial", url: "#", variant: "outline" as const },
    ],
    images: [
      { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg", alt: "Kitchen operations dashboard", ratio: 0.644736842, className: "w-[30%]" },
      { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg", alt: "Advanced analytics interface", ratio: 0.926829268, className: "w-[40%]" },
      { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg", alt: "Cost optimization tools", ratio: 0.644736842, className: "w-[30%]" },
    ],
    icon: ChefHat,
    color: "orange",
  },
  bar: {
    badge: "Introducing Elite Bar Management",
    title: "Maximize Revenue with Elite Bar Pro",
    subtitle: "Transform your bar operations with advanced inventory tracking, customer insights, and premium revenue optimization tools.",
    buttons: [
      { title: "Discover Elite", url: "#", variant: "default" as const },
      { title: "Try Premium", url: "#", variant: "outline" as const },
    ],
    images: [
      { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg", alt: "Bar inventory dashboard", ratio: 0.644736842, className: "w-[30%]" },
      { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg", alt: "Revenue analytics platform", ratio: 0.926829268, className: "w-[40%]" },
      { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg", alt: "Customer behavior insights", ratio: 0.644736842, className: "w-[30%]" },
    ],
    icon: BarChart3,
    color: "purple",
  },
  cafe: {
    badge: "Launching Elite Café Solutions",
    title: "Perfect Your Café with Elite Coffee Pro",
    subtitle: "Enhance your café operations with premium quality control, advanced scheduling, and exclusive customer experience tools.",
    buttons: [
      { title: "View Elite", url: "#", variant: "default" as const },
      { title: "Begin Trial", url: "#", variant: "outline" as const },
    ],
    images: [
      { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg", alt: "Coffee quality dashboard", ratio: 0.644736842, className: "w-[30%]" },
      { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg", alt: "Customer experience platform", ratio: 0.926829268, className: "w-[40%]" },
      { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg", alt: "Order optimization system", ratio: 0.644736842, className: "w-[30%]" },
    ],
    icon: Clock,
    color: "amber",
  },
};

export interface EliteAccessHeroProps {
  industry: 'restaurant' | 'bar' | 'cafe';
  role?: 'owner' | 'manager' | 'staff';
  variant?: 'default' | 'compact' | 'detailed';
}

const EliteAccessHero = ({ 
  industry = 'restaurant', 
  role = 'owner',
  variant = 'default'
}: EliteAccessHeroProps) => {
  // Feature flags and analytics
  const showPremiumBadge = useFeatureFlag('eliteHeroPremiumBadge', true);
  const showTripleImages = useFeatureFlag('eliteHeroTripleImages', true);
  
  usePageView(`${industry}_elite_access_hero`, { 
    variant,
    industry,
    role
  });

  // Permission checking for elite access
  const canAccessElite = usePermission('ELITE_ACCESS');
  const canStartPremiumTrial = usePermission('PREMIUM_TRIAL_ACCESS');

  const content = INDUSTRY_ELITE_CONTENT[industry];
  const Icon = content.icon;

  // Industry-specific styling
  const colorClasses = {
    orange: {
      primary: 'text-primary dark:text-primary',
      bg: 'bg-primary',
      hover: 'hover:bg-primary',
      badge: 'bg-primary text-primary dark:bg-primary dark:text-primary',
    },
    purple: {
      primary: 'text-primary dark:text-primary',
      bg: 'bg-primary',
      hover: 'hover:bg-primary',
      badge: 'bg-primary text-primary dark:bg-primary dark:text-primary',
    },
    amber: {
      primary: 'text-primary dark:text-primary',
      bg: 'bg-primary',
      hover: 'hover:bg-primary',
      badge: 'bg-primary text-primary dark:bg-primary dark:text-primary',
    },
  };

  const colors = colorClasses[content.color as keyof typeof colorClasses];

  return (
    <section className="section-marketing bg-gradient-to-br from-background to-muted/20 py-32">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-10 pb-8">
          {/* Premium Badge */}
          {showPremiumBadge && (
            <Badge className={cn("animate-fade-in-up", colors.badge)}>
              <Star className="size-3 mr-1" />
              {content.badge}
            </Badge>
          )}
          
          {/* Industry Icon */}
          <div className={cn("p-4 rounded-full animate-fade-in-up animation-delay-100", colors.primary.includes('orange') ? 'bg-primary dark:bg-primary/20' : colors.primary.includes('purple') ? 'bg-primary dark:bg-primary/20' : 'bg-primary dark:bg-primary/20')}>
            <Icon className={cn("size-8", colors.primary)} />
          </div>
          
          {/* Title */}
          <h1 className="heading-brand-gradient text-display-2xl max-w-lg text-center font-bold md:max-w-2xl md:text-6xl leading-tight animate-fade-in-up animation-delay-200">
            {content.title}
          </h1>
          
          {/* Subtitle */}
          <p className="enterprise-body text-muted-foreground max-w-2xl text-center font-medium  leading-relaxed animate-fade-in-up animation-delay-300">
            {content.subtitle}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex w-full max-w-lg flex-col items-center justify-center gap-4 md:flex-row md:gap-6 animate-fade-in-up animation-delay-400">
            {content.buttons.map((btn, index) => {
              const isEliteButton = btn.title.toLowerCase().includes('elite') || btn.title.toLowerCase().includes('discover') || btn.title.toLowerCase().includes('explore');
              const isTrialButton = btn.title.toLowerCase().includes('trial') || btn.title.toLowerCase().includes('try') || btn.title.toLowerCase().includes('premium');
              
              return (
                <Button
                  asChild
                  variant={btn.variant}
                  size="lg"
                  className={cn(
                    "w-full md:flex-1 shadow-lg hover:shadow-xl transition-all duration-200",
                    btn.variant === "default" && cn("cta-shimmer text-primary-foreground", colors.bg),
                    isEliteButton && !canAccessElite && "opacity-75 cursor-not-allowed",
                    isTrialButton && !canStartPremiumTrial && "opacity-75 cursor-not-allowed"
                  )}
                  key={`hero-btn-${index}`}
                  disabled={
                    (isEliteButton && !canAccessElite) || 
                    (isTrialButton && !canStartPremiumTrial)
                  }
                >
                  <a href={btn.url} aria-label={`${btn.title} for ${industry}`}>
                    {btn.title}
                  </a>
                </Button>
              );
            })}
          </div>
        </div>
        
        {/* Image Gallery */}
        {showTripleImages && (
          <div className="flex w-full items-end justify-center gap-4 animate-fade-in-up animation-delay-500">
            {content.images.map((img, index) => (
              <div 
                className={cn(img.className, "animate-slide-in-up")} 
                key={`hero-img-${index}`}
                style={{ animationDelay: `${0.6 + (index * 0.1)}s` }}
              >
                <AspectRatio ratio={img.ratio} className="rounded-xl border shadow-lg hover:shadow-xl transition-shadow duration-200 overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    className="block size-full object-cover object-[50%_0%] hover:scale-105 transition-transform duration-300"
                   width={1200} height={800} />
                </AspectRatio>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export { EliteAccessHero };