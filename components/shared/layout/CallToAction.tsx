"use client";

import { ArrowRight, PlayCircle } from "lucide-react";
import { useRestaurantAnalytics } from "@/lib/hooks/restaurant-pages";

import { Button } from "@/components/ui/button";
import Image from "next/image";

interface CallToActionProps {
  industry?: "restaurants" | "bars" | "coffee" | "hotels";
  variant?: "primary" | "demo" | "trial";
  customTitle?: string;
  customSubtitle?: string;
  // Optional override for background image. Set to null to disable images entirely.
  imageSrc?: string | null;
}

export function CallToAction({ 
  industry = "restaurants",
  variant = "primary",
  customTitle,
  customSubtitle,
  imageSrc
}: CallToActionProps) {
  const { trackEvent } = useRestaurantAnalytics();

  type CTAConfig = {
    title: string;
    subtitle: string;
    primaryCTA: string;
    secondaryCTA: string;
  };

  const industryConfig = {
    restaurants: {
      color: "oklch(0.70 0.15 25)",
      image: null,
      variants: {
        primary: {
          title: "Transform Your Restaurant Operations Today",
          subtitle: "Join 2,500+ restaurants optimizing their operations with OpsFlow",
          primaryCTA: "Start Free Trial",
          secondaryCTA: "Watch Demo"
        },
        demo: {
          title: "See OpsFlow in Action",
          subtitle: "Book a personalized demo for your restaurant operations",
          primaryCTA: "Schedule Demo",
          secondaryCTA: "View Features"
        },
        trial: {
          title: "Start Your 14-Day Free Trial",
          subtitle: "No credit card required. Full access to all restaurant features",
          primaryCTA: "Start Trial Now",
          secondaryCTA: "Contact Sales"
        }
      }
    },
    bars: {
      color: "oklch(0.60 0.20 270)",
      image: null,
      variants: {
        primary: {
          title: "Elevate Your Bar Operations",
          subtitle: "Join 1,200+ bars streamlining operations with OpsFlow",
          primaryCTA: "Start Free Trial",
          secondaryCTA: "Watch Demo"
        }
      }
    },
    coffee: {
      color: "oklch(0.65 0.18 80)",
      image: null,
      variants: {
        primary: {
          title: "Perfect Your Coffee Operations",
          subtitle: "Join 800+ coffee shops optimizing with OpsFlow",
          primaryCTA: "Start Free Trial",
          secondaryCTA: "Watch Demo"
        }
      }
    },
    hotels: {
      color: "oklch(0.55 0.15 210)",
      image: null,
      variants: {
        primary: {
          title: "Transform Hotel Operations",
          subtitle: "Join 400+ hotels enhancing operations with OpsFlow",
          primaryCTA: "Start Free Trial",
          secondaryCTA: "Watch Demo"
        }
      }
    }
  };

  const config = industryConfig[industry];
  type VariantName = "primary" | "demo" | "trial";
  const variants = config.variants as Record<string, CTAConfig>;
  const variantConfig: CTAConfig = (variant in variants ? variants[variant as VariantName] : variants["primary"]) as CTAConfig;

  // Determine background image usage
  const bgImage = imageSrc === undefined ? config.image : imageSrc;

  const handlePrimaryCTA = () => {
    trackEvent("cta_primary_click", {
      industry,
      variant,
      cta_text: variantConfig.primaryCTA
    });
    window.location.href = `/start-trial?industry=${industry}`;
  };

  const handleSecondaryCTA = () => {
    trackEvent("cta_secondary_click", {
      industry,
      variant,
      cta_text: variantConfig.secondaryCTA
    });
    if (variantConfig.secondaryCTA.includes("Demo")) {
      window.location.href = `/schedule-demo?industry=${industry}`;
    } else {
      window.location.href = `/features?industry=${industry}`;
    }
  };

  return (
    <section className="section-marketing">
      <div className="container">
        <div className="relative h-[400px] overflow-hidden rounded-xl md:h-[500px]">
          {bgImage ? (
            <Image
              src={bgImage}
              alt={`${industry} operations`}
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover"
              priority={false}
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
          )}
          <div className="absolute inset-0 z-10 bg-black/60" />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-8 p-6 text-white">
            <h2 className="text-center text-3xl font-bold md:text-5xl max-w-4xl">
              {customTitle || variantConfig.title}
            </h2>
            <p className="text-center text-lg md:text-xl max-w-2xl text-white/90">
              {customSubtitle || variantConfig.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
<Button 
                size="lg"
                onClick={handlePrimaryCTA}
              >
                {variantConfig.primaryCTA}
                <ArrowRight className="ml-2" />
              </Button>
<Button 
                size="lg"
                variant="outline"
                onClick={handleSecondaryCTA}
                className="border-white text-white hover:bg-white hover:text-black transition-all"
              >
                <PlayCircle className="mr-2" />
                {variantConfig.secondaryCTA}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

