// StripeCarousel.tsx - Premium Stripe/Clerk Visual Match
// Using OpsFlow clerk-glass-card and stripe-glass-card tokens

"use client";

import { useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ArrowRight, Shield } from "lucide-react";

export interface StripeCarouselProps {
  industry?: "restaurant" | "bar" | "cafe" | "hotel";
}

const stats = [
  {
    number: "500+",
    description: "Restaurant locations using OpsFlow for daily operations",
  },
  {
    number: "99.8%",
    description: "Average HACCP compliance rate across all client locations",
  },
  {
    number: "10M+",
    description: "Temperature checks logged and verified automatically",
  },
  {
    number: "32%",
    description: "Average reduction in labor costs through optimized scheduling",
  },
];

const carouselCards = [
  {
    id: "platforms",
    title: "Facilitate and monetize platform payments",
    description:
      "Make your software integral to your users' businesses by embedding our best-in-class payments technology to create your own payments service.",
    link: "Connect for platforms",
    companies: ["Shopify", "mindbody", "Housecall Pro"],
    color: "bg-primary-500",
  },
  {
    id: "marketplace",
    title: "Power payments for your marketplace",
    description:
      "Onboard, verify, and pay out your users at scale—whether you run an on-demand, retail, or crowdfunding marketplace.",
    link: "Connect for marketplaces",
    companies: ["Instacart", "Lyft", "Kickstarter"],
    color: "bg-primary-600",
  },
  {
    id: "enterprise",
    title: "Streamline money movement for your enterprise",
    description:
      "Route funds, make payouts, and offer financial services to introduce new business models, overhaul franchise operations, or unify commerce globally.",
    link: "Future-proof your enterprise",
    companies: ["Ford", "CVS", "H&M"],
    color: "bg-secondary-500",
  },
  {
    id: "payouts",
    title: "Send payouts around the world",
    description:
      "Programmatically send fast fiat or crypto payouts to your sellers, freelancers, creators, or service providers around the world with simple rates.",
    link: "Connect payouts",
    companies: ["GitHub", "Teachable", "Lyra"],
    color: "bg-secondary-600",
  },
  {
    id: "embedded",
    title: "Embed financial services",
    description:
      "Offer banking-as-a-service, lending, or other financial products directly within your platform to create new revenue streams and improve user experience.",
    link: "Embedded finance",
    companies: ["Ramp", "Mercury", "Brex"],
    color: "bg-primary-500",
  },
  {
    id: "global",
    title: "Scale payments globally",
    description:
      "Accept payments in 135+ currencies, optimize authorization rates worldwide, and handle local payment methods with a single integration.",
    link: "Global payments",
    companies: ["Spotify", "Zoom", "Slack"],
    color: "bg-primary-600",
  },
];

export function StripeCarousel({ industry = "restaurant" }: StripeCarouselProps) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const cardWidth = 435;
  const gap = 24;
  const maxScroll = carouselCards.length * (cardWidth + gap) - cardWidth * 2.5;

  const scroll = (direction: "left" | "right") => {
    const scrollAmount = cardWidth + gap;
    const newPosition =
      direction === "left"
        ? Math.max(0, scrollPosition - scrollAmount)
        : Math.min(maxScroll, scrollPosition + scrollAmount);

    setScrollPosition(newPosition);

    if (trackRef.current) {
      trackRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-12">
      {/* Header Section */}
      <div className="space-y-4">
        <div className="clerk-inspired-badge inline-flex items-center gap-2">
          <Shield className="h-4 w-4" />
          <span className="text-sm font-medium">Enterprise Operations Platform</span>
        </div>
        <h1 className="text-display-lg font-bold text-foreground max-w-2xl">
          Build a foundation for any business model
        </h1>
        <p className="enterprise-body text-muted-foreground max-w-3xl">
          OpsFlow is the premier operations platform for multi-location {industry === "restaurant" ? "restaurants" : "hospitality businesses"}, 
          combining HACCP compliance, team management, and real-time analytics in one powerful solution.
        </p>
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="space-y-2">
            <div className="metric-display-medium text-primary">{stat.number}</div>
            <p className="text-sm text-muted-foreground leading-relaxed">{stat.description}</p>
          </div>
        ))}
      </div>

      {/* Carousel Section */}
      <div className="relative">
        {/* Navigation Controls */}
        <div className="flex items-center justify-end mb-6 gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => scroll("left")}
            className="h-10 w-10 p-0 rounded-full border-border hover:border-primary-300 hover-scale-103 transition-all"
            disabled={scrollPosition === 0}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => scroll("right")}
            className="h-10 w-10 p-0 rounded-full border-border hover:border-primary-300 hover-scale-103 transition-all"
            disabled={scrollPosition >= maxScroll}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Horizontal Scrolling Track */}
        <div className="relative overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-6 overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden"
            style={{
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <div className="flex-shrink-0 w-0" />

            {carouselCards.map((card) => (
              <div
                key={card.id}
                className="flex-shrink-0"
                style={{
                  width: `${cardWidth}px`,
                  scrollSnapAlign: "start",
                }}
              >
                {/* Premium Clerk/Stripe Glass Card with Enhanced Hover */}
                <div className="clerk-glass-card h-full rounded-xl overflow-hidden hover-lift">
                  {/* Top accent bar */}
                  <div className={`h-1 ${card.color}`} />
                  
                  {/* Card Content */}
                  <div className="p-8 space-y-3">
                    {/* Title - Refined Typography */}
                    <h3 className="text-[19px] font-semibold text-foreground leading-[1.3] tracking-[-0.01em]">
                      {card.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-[14px] text-muted-foreground leading-[1.6] tracking-[-0.005em]">
                      {card.description}
                    </p>

                    {/* Company Badges - Clean Text Style */}
                    <div className="flex items-center gap-3 pt-4 pb-2">
                      {card.companies.map((company, idx) => (
                        <div
                          key={idx}
                          className="text-xs font-medium text-muted-foreground/70 tracking-tight"
                        >
                          {company}
                        </div>
                      ))}
                    </div>

                    {/* CTA Link with Enhanced Hover */}
                    <div className="pt-2">
                      <button className="text-primary text-[14px] font-medium inline-flex items-center gap-1.5 hover:gap-2.5 transition-all group">
                        {card.link}
                        <ArrowRight className="h-3.5 w-3.5 transition-all group-hover:translate-x-0.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex-shrink-0 w-0" />
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {carouselCards.map((_, idx) => {
            const isActive = Math.round(scrollPosition / (cardWidth + gap)) === idx;
            return (
              <button
                key={idx}
                onClick={() => {
                  const newPos = idx * (cardWidth + gap);
                  setScrollPosition(newPos);
                  trackRef.current?.scrollTo({ left: newPos, behavior: "smooth" });
                }}
                className={`h-1.5 rounded-full transition-all hover:opacity-80 ${
                  isActive ? "w-8 bg-primary-500" : "w-1.5 bg-border hover:bg-primary-300"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default StripeCarousel;
