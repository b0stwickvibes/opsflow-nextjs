"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  DollarSign,
  BarChart3,
  Clock,
  Shield,
  Users,
} from "lucide-react";
import React, { useState } from "react";

import { cn } from "@/lib/utils";
import { useRestaurantAnalytics } from "@/lib/hooks/restaurant-pages";
import type { IndustryType, RoleType } from "@/types/restaurant-pages";

import { Button } from "@/components/ui/button";

interface BentoLayoutProps {
  industry?: IndustryType | 'general';
  role?: RoleType | 'general';
  heading?: string;
  subheading?: string;
  badgeText?: string;
  className?: string;
  ctaText?: string;
  ctaLink?: string;
}

interface LayoutItem {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgColor: string;
  industrySpecific?: {
    [K in IndustryType]?: {
      title?: string;
      description?: string;
    };
  };
}

export function BentoLayout({
  industry = 'restaurants',
  role = 'general',
  heading = "Restaurant Operations Platform",
  subheading = "Comprehensive solutions designed for modern foodservice excellence",
  badgeText = "All-in-One",
  className,
  ctaText = "Learn More",
  ctaLink = "#",
}: BentoLayoutProps) {
  const { trackInteraction } = useRestaurantAnalytics();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const defaultItems: LayoutItem[] = [
    {
      title: "Real-time Analytics",
      description: "Live performance tracking with predictive insights for optimal decision making",
      icon: BarChart3,
      color: "text-emerald-600 dark:text-emerald-400",
      bgColor: "bg-emerald-500/10",
      industrySpecific: {
        bars: { 
          title: "Beverage Analytics", 
          description: "Track pour costs, inventory turnover, and peak consumption patterns" 
        },
        coffee: { 
          title: "Sales Insights", 
          description: "Monitor coffee sales trends, customer preferences, and peak hours" 
        },
        hotels: { 
          title: "Dining Analytics", 
          description: "Track guest dining patterns, revenue per outlet, and service efficiency" 
        },
      },
    },
    {
      title: "Smart Scheduling",
      description: "AI-powered staff optimization with labor cost control and compliance monitoring",
      icon: Clock,
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-500/10",
      industrySpecific: {
        bars: { 
          title: "Peak Hour Staffing", 
          description: "Optimize bartender and security coverage for busy nights and events" 
        },
        coffee: { 
          title: "Rush Hour Coverage", 
          description: "Ensure adequate barista coverage during morning and lunch rushes" 
        },
        hotels: { 
          title: "Multi-Venue Scheduling", 
          description: "Coordinate staff across restaurants, room service, and catering" 
        },
      },
    },
    {
      title: "Food Safety Control",
      description: "Comprehensive HACCP compliance with automated temperature monitoring",
      icon: Shield,
      color: "text-red-600 dark:text-red-400",
      bgColor: "bg-red-500/10",
      industrySpecific: {
        bars: { 
          title: "Safety Protocols", 
          description: "Monitor cleanliness standards and responsible service practices" 
        },
        coffee: { 
          title: "Quality Assurance", 
          description: "Maintain coffee quality standards and equipment safety protocols" 
        },
        hotels: { 
          title: "Guest Safety Standards", 
          description: "Ensure food safety across all dining venues and room service" 
        },
      },
    },
    {
      title: "Cost Management",
      description: "Advanced pricing strategies with real-time cost analysis and profit optimization",
      icon: DollarSign,
      color: "text-yellow-600 dark:text-yellow-400",
      bgColor: "bg-yellow-500/10",
      industrySpecific: {
        bars: { 
          title: "Beverage Profitability", 
          description: "Track pour costs, markup strategies, and inventory valuation" 
        },
        coffee: { 
          title: "Bean Cost Analysis", 
          description: "Monitor supplier costs, waste reduction, and pricing optimization" 
        },
        hotels: { 
          title: "F&B Revenue Management", 
          description: "Optimize pricing across dining outlets and special events" 
        },
      },
    },
  ];

  const getIndustryItem = (item: LayoutItem) => {
    if (industry !== 'general' && item.industrySpecific?.[industry as IndustryType]) {
      const specific = item.industrySpecific[industry as IndustryType]!;
      return {
        ...item,
        title: specific.title || item.title,
        description: specific.description || item.description,
      };
    }
    return item;
  };

  const handleItemHover = (idx: number | null) => {
    setHoveredIndex(idx);
    if (idx !== null) {
      trackInteraction('bento_layout_hover', {
        industry,
        role,
        item_index: idx,
        item_title: getIndustryItem(defaultItems[idx]).title,
      });
    }
  };

  const handleCtaClick = () => {
    trackInteraction('bento_layout_cta_click', {
      industry,
      role,
      cta_text: ctaText,
    });
  };

  return (
    <section className={cn("overflow-hidden py-32", className)}>
      <div className="container flex w-full flex-col items-center justify-center px-4">
        <p className="bg-muted rounded-full px-4 py-1 text-xs uppercase tracking-wide">
          {badgeText}
        </p>
        <h2 
          className="relative z-20 py-2 text-center font-sans text-5xl font-semibold tracking-tighter md:py-7 lg:text-6xl"
          role="heading"
          aria-level={2}
        >
          {heading}
        </h2>
        <p className="text-md text-muted-foreground mx-auto max-w-xl text-center lg:text-lg">
          {subheading}
        </p>

        <div className="relative mt-10 grid w-full max-w-5xl grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {defaultItems.map((item, idx) => {
            const industryItem = getIndustryItem(item);
            return (
              <div
                key={idx}
                className="group relative block h-full w-full p-2"
                onMouseEnter={() => handleItemHover(idx)}
                onMouseLeave={() => handleItemHover(null)}
                role="presentation"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {hoveredIndex === idx && (
                    <motion.span
                      className={cn(
                        "absolute inset-0 block h-full w-full rounded-2xl",
                        industryItem.bgColor,
                      )}
                      layoutId="hoverBackground"
                      key={idx}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </AnimatePresence>

                <BentoLayoutCard
                  title={industryItem.title}
                  description={industryItem.description}
                  icon={industryItem.icon}
                  color={industryItem.color}
                  ctaText={ctaText}
                  ctaLink={ctaLink}
                  onCtaClick={handleCtaClick}
                  className="flex flex-col items-center justify-center"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const BentoLayoutCard = ({
  className,
  title,
  description,
  icon: Icon,
  color,
  ctaText,
  ctaLink,
  onCtaClick,
}: {
  className?: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  ctaText: string;
  ctaLink: string;
  onCtaClick: () => void;
}) => {
  return (
    <div
      className={cn(
        "bg-muted relative z-20 flex h-full flex-col items-center justify-center gap-2 rounded-3xl p-5 text-center transition-colors hover:bg-muted/80",
        className,
      )}
      role="article"
      aria-labelledby={`bento-layout-title-${title.replace(/\s+/g, '-').toLowerCase()}`}
    >
      <div
        className={cn(
          "bg-background size-15 mb-4 mt-4 flex items-center justify-center rounded-full p-2",
          color,
        )}
      >
        <Icon aria-hidden="true" />
      </div>
      <h1 
        id={`bento-layout-title-${title.replace(/\s+/g, '-').toLowerCase()}`}
        className="text-xl font-medium tracking-tight"
      >
        {title}
      </h1>
      <p className="text-muted-foreground text-center text-sm leading-relaxed">
        {description}
      </p>

      <Button
        variant="ghost"
        className="group/btn mt-8 w-full hover:opacity-50 transition-opacity"
        asChild
        onClick={onCtaClick}
      >
        <a 
          href={ctaLink}
          aria-label={`${ctaText} about ${title}`}
        >
          {ctaText}{" "}
          <ArrowRight 
            className="ml-2 size-4 transition-transform group-hover/btn:translate-x-1" 
            aria-hidden="true"
          />
        </a>
      </Button>
    </div>
  );
};