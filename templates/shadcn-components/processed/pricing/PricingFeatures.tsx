"use client";

import { Check, ChevronRight } from "lucide-react";
import { type SVGProps, useId } from "react";
import { useRestaurantAnalytics } from "@/lib/hooks/restaurant-pages";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: {
    text: string;
    href: string;
  };
}

interface PricingFeaturesProps {
  industry?: "restaurants" | "bars" | "coffee" | "hotels";
  customTiers?: PricingTier[];
}

export function PricingFeatures({ 
  industry = "restaurants",
  customTiers 
}: PricingFeaturesProps) {
  const { trackEvent } = useRestaurantAnalytics();

  const industryConfig = {
    restaurants: {
      title: "Restaurant Operations Pricing",
      subtitle: "Scale your restaurant operations with plans designed for every stage of growth. From single locations to enterprise chains.",
      color: "oklch(0.70 0.15 25)",
      tiers: [
        {
          name: "STARTER",
          price: "$99",
          description: "per month",
          features: [
            "Up to 50 staff members",
            "HACCP compliance monitoring",
            "Basic task management",
            "Temperature logging",
            "Mobile app access",
            "Email support"
          ],
          cta: {
            text: "Start Free Trial",
            href: "/start-trial?plan=starter&industry=restaurants",
          },
        },
        {
          name: "PROFESSIONAL",
          price: "$299",
          description: "per month", 
          features: [
            "All starter features plus...",
            "Up to 5 locations",
            "Advanced HACCP protocols",
            "Multi-location reporting",
            "Inventory tracking",
            "Staff scheduling",
            "Priority support"
          ],
          cta: {
            text: "Schedule Demo",
            href: "/schedule-demo?plan=professional&industry=restaurants",
          },
        },
        {
          name: "ENTERPRISE",
          price: "CUSTOM",
          description: "tailored pricing",
          features: [
            "All professional features plus...",
            "Unlimited locations",
            "Custom HACCP protocols", 
            "Advanced analytics",
            "API integrations",
            "24/7 dedicated support",
            "SLA guarantees"
          ],
          cta: {
            text: "Contact Sales",
            href: "/contact-sales?plan=enterprise&industry=restaurants",
          },
        },
      ]
    },
    bars: {
      title: "Bar Operations Pricing",
      subtitle: "Optimize bar operations with flexible pricing that grows with your business. Perfect for single bars to hospitality groups.",
      color: "oklch(0.60 0.20 270)",
      tiers: [
        {
          name: "BAR STARTER",
          price: "$89",
          description: "per month",
          features: [
            "Up to 30 staff members",
            "Alcohol compliance tracking",
            "Basic inventory management",
            "Task management",
            "Mobile app access",
            "Email support"
          ],
          cta: {
            text: "Start Free Trial",
            href: "/start-trial?plan=starter&industry=bars",
          },
        },
        {
          name: "BAR PRO",
          price: "$249", 
          description: "per month",
          features: [
            "All starter features plus...",
            "Up to 5 locations",
            "Advanced inventory tracking",
            "Multi-location reporting",
            "Staff scheduling",
            "Event management",
            "Priority support"
          ],
          cta: {
            text: "Schedule Demo",
            href: "/schedule-demo?plan=professional&industry=bars",
          },
        },
        {
          name: "HOSPITALITY",
          price: "CUSTOM",
          description: "enterprise pricing",
          features: [
            "All pro features plus...",
            "Unlimited locations",
            "Custom compliance protocols",
            "Advanced analytics",
            "API integrations",
            "24/7 support"
          ],
          cta: {
            text: "Contact Sales",
            href: "/contact-sales?plan=enterprise&industry=bars",
          },
        },
      ]
    },
    coffee: {
      title: "Coffee Shop Pricing",
      subtitle: "Streamline coffee operations with pricing built for independent cafes and growing coffee chains.",
      color: "oklch(0.65 0.18 80)",
      tiers: [
        {
          name: "CAFE",
          price: "$79",
          description: "per month",
          features: [
            "Up to 25 staff members",
            "Equipment monitoring",
            "Quality control tracking",
            "Basic task management",
            "Mobile app access",
            "Email support"
          ],
          cta: {
            text: "Start Free Trial",
            href: "/start-trial?plan=starter&industry=coffee",
          },
        },
        {
          name: "COFFEE CHAIN",
          price: "$199",
          description: "per month",
          features: [
            "All cafe features plus...",
            "Up to 5 locations",
            "Advanced equipment monitoring",
            "Multi-location reporting",
            "Recipe management",
            "Inventory tracking",
            "Priority support"
          ],
          cta: {
            text: "Schedule Demo",
            href: "/schedule-demo?plan=professional&industry=coffee",
          },
        },
        {
          name: "ENTERPRISE",
          price: "CUSTOM",
          description: "chain pricing",
          features: [
            "All chain features plus...",
            "Unlimited locations",
            "Custom quality protocols",
            "Advanced analytics",
            "API integrations",
            "24/7 support"
          ],
          cta: {
            text: "Contact Sales",
            href: "/contact-sales?plan=enterprise&industry=coffee",
          },
        },
      ]
    },
    hotels: {
      title: "Hotel Operations Pricing", 
      subtitle: "Comprehensive hotel operations management with pricing designed for boutique hotels to large hospitality groups.",
      color: "oklch(0.55 0.15 210)",
      tiers: [
        {
          name: "BOUTIQUE",
          price: "$199",
          description: "per month",
          features: [
            "Up to 75 staff members",
            "Guest satisfaction tracking",
            "Housekeeping coordination",
            "Maintenance scheduling",
            "Mobile app access",
            "Email support"
          ],
          cta: {
            text: "Start Free Trial",
            href: "/start-trial?plan=starter&industry=hotels",
          },
        },
        {
          name: "HOTEL GROUP",
          price: "$499",
          description: "per month",
          features: [
            "All boutique features plus...",
            "Up to 5 properties",
            "Advanced guest services",
            "Multi-property reporting",
            "Department coordination",
            "Guest feedback system",
            "Priority support"
          ],
          cta: {
            text: "Schedule Demo", 
            href: "/schedule-demo?plan=professional&industry=hotels",
          },
        },
        {
          name: "HOSPITALITY",
          price: "CUSTOM",
          description: "enterprise pricing",
          features: [
            "All group features plus...",
            "Unlimited properties",
            "Custom service protocols",
            "Advanced analytics", 
            "API integrations",
            "24/7 support"
          ],
          cta: {
            text: "Contact Sales",
            href: "/contact-sales?plan=enterprise&industry=hotels",
          },
        },
      ]
    }
  };

  const config = industryConfig[industry];
  const tiers = customTiers || config.tiers;

  const handleCTAClick = (tier: PricingTier) => {
    trackEvent("pricing_features_cta_click", {
      tier_name: tier.name,
      price: tier.price,
      cta_text: tier.cta.text,
      industry,
      href: tier.cta.href
    });
  };

  return (
    <section className="relative overflow-hidden py-32 text-center">
      <div className="container">
        <h1 className="text-display-2xl enterprise-headline  font-semibold tracking-tight md: lg:text-6xl">
          {config.title}
        </h1>
        <div className="mx-auto mt-4 max-w-[45rem] space-y-2">
          <p className="enterprise-body text-muted-foreground  md:text-2xl">
            {config.subtitle}
          </p>
        </div>

        <div className="relative mt-8 overflow-hidden md:mt-12 lg:mt-20">
          {/* Background and layout wrapper */}
          <div 
            className="absolute inset-0 hidden rounded-3xl md:block bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10"
          >
            <PlusSigns className="text-white/[0.05] h-full w-full" />
          </div>

          <div className="relative space-y-6 md:grid md:grid-cols-3 md:space-y-0 md:divide-x md:divide-white/20 md:p-6 lg:p-8">
            {tiers.map((tier, index) => (
              <PricingCard
                key={tier.name}
                tier={tier}
                isHighlighted={index === 1}
                onCTAClick={() => handleCTAClick(tier)}
              />
            ))}
          </div>
        </div>

        {/* Background pattern */}
        <div className="absolute -inset-40 z-[-1] [mask-image:radial-gradient(circle_at_center,black_0%,black_20%,transparent_75%)]">
          <PlusSigns className="text-foreground/[0.05] size-full" />
        </div>

        {/* Additional info */}
        <div className="mt-12 space-y-4 text-center">
          <p className="text-sm text-muted-foreground">
            All plans include 14-day free trial, free onboarding, and migration support
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span>✓ No setup fees</span>
            <span>✓ Cancel anytime</span>
            <span>✓ 99.9% uptime SLA</span>
          </div>
        </div>
      </div>
    </section>
  );
};

interface PricingCardProps {
  tier: PricingTier;
  isHighlighted: boolean;
  onCTAClick: () => void;
}

function PricingCard({ tier, isHighlighted, onCTAClick }: PricingCardProps) {
  const styles = {
    card: cn(
      "flex flex-col gap-6 rounded-xl p-6 sm:rounded-2xl md:rounded-none lg:p-8",
      // Mobile styles
      isHighlighted
        ? "max-md:bg-gradient-to-r max-md:from-primary max-md:to-primary/80"
        : "bg-background max-md:border",
      // Desktop styles
      "md:bg-transparent",
    ),
    title: cn(
      "font-mono text-sm tracking-widest font-medium",
      // Mobile styles
      isHighlighted ? "text-background/70" : "text-foreground/70",
      // Desktop styles
      "md:text-white/70",
    ),
    price: cn(
      "text-5xl font-semibold tracking-tight",
      // Mobile styles
      isHighlighted ? "text-background" : "text-foreground",
      // Desktop styles
      "md:text-white",
    ),
    description: cn(
      "mt-2 text-xl font-medium",
      // Mobile styles
      isHighlighted ? "text-background/70" : "text-foreground/70",
      // Desktop styles
      "md:text-white/70",
    ),
    features: cn(
      "space-y-3 text-sm text-left",
      // Mobile styles
      isHighlighted ? "text-background/80" : "text-foreground/80",
      // Desktop styles
      "md:text-white/80",
    ),
    button: cn(
      "group relative w-full transition-all duration-200",
      // Desktop styles
      "md:text-white md:bg-card/10 md:border-white/20 md:hover:bg-card/20",
      isHighlighted &&
        "md:bg-card md:text-primary md:hover:bg-card/90 md:shadow-lg",
    ),
  };

  const handleClick = () => {
    onCTAClick();
    window.location.href = tier.cta.href;
  };

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{tier.name}</h3>
      <div>
        <p className={styles.price}>{tier.price}</p>
        <p className={styles.description}>{tier.description}</p>
      </div>
      <ul className={styles.features}>
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check 
              className={cn(
                "size-4 shrink-0 mt-0.5 text-primary",
                isHighlighted && "md:text-white"
              )}
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-1 items-end">
        <Button
          variant={isHighlighted ? "default" : "outline"}
          size="lg"
          className={cn(
            styles.button,
            !isHighlighted && "border-primary text-primary",
            isHighlighted && "cta-shimmer"
          )}
          onClick={handleClick}
          aria-label={`${tier.cta.text} for ${tier.name} plan`}
        >
          {tier.cta.text}
          <ChevronRight className="ml-1 size-4 transition-transform group-hover:translate-x-0.5" />
        </Button>
      </div>
    </div>
  );
}

interface PlusSignsProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

const PlusSigns = ({ className, ...props }: PlusSignsProps) => {
  const GAP = 16;
  const STROKE_WIDTH = 1;
  const PLUS_SIZE = 6;
  const id = useId();
  const patternId = `plus-pattern-${id}`;

  return (
    <svg width={GAP * 2} height={GAP * 2} className={className} {...props}>
      <defs>
        <pattern
          id={patternId}
          x="0"
          y="0"
          width={GAP}
          height={GAP}
          patternUnits="userSpaceOnUse"
        >
          <line
            x1={GAP / 2}
            y1={(GAP - PLUS_SIZE) / 2}
            x2={GAP / 2}
            y2={(GAP + PLUS_SIZE) / 2}
            stroke="currentColor"
            strokeWidth={STROKE_WIDTH}
          />
          <line
            x1={(GAP - PLUS_SIZE) / 2}
            y1={GAP / 2}
            x2={(GAP + PLUS_SIZE) / 2}
            y2={GAP / 2}
            stroke="currentColor"
            strokeWidth={STROKE_WIDTH}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
};

