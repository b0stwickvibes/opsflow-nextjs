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
      color: "text-primary",
      bgColor: "bg-primary/10",
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
      color: "text-primary",
      bgColor: "bg-primary/10",
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
      color: "text-primary",
      bgColor: "bg-primary/10",
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
      color: "text-secondary",
      bgColor: "bg-secondary/10",
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
    <section className={cn("py-24", className)}>
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex w-full flex-col items-center justify-center">
        <div className="clerk-inspired-badge mb-6">
          {badgeText}
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 text-center">
          {heading}
        </h2>
        <p className="enterprise-body max-w-2xl mx-auto text-center text-muted-foreground mb-12">
          {subheading}
        </p>

        <div className="relative grid w-full max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-4">
          {defaultItems.map((item, idx) => {
            const industryItem = getIndustryItem(item);
            return (
              <div
                key={idx}
                className="group relative block h-full w-full"
                onMouseEnter={() => handleItemHover(idx)}
                onMouseLeave={() => handleItemHover(null)}
                role="presentation"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {hoveredIndex === idx && (
                    <motion.span
                      className="absolute inset-0 block h-full w-full rounded-xl bg-primary/5"
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
                  className="flex flex-col items-center justify-center motion-fade-in-up-320"
                  style={{ animationDelay: `${idx * 100}ms` }}
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
  style,
}: {
  className?: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  ctaText: string;
  ctaLink: string;
  onCtaClick: () => void;
  style?: React.CSSProperties;
}) => {
  return (
    <div
      className={cn(
        "clerk-glass-card h-full flex flex-col items-center justify-center gap-4 p-6 text-center hover-scale-103 transition-all duration-300",
        className,
      )}
      style={style}
      role="article"
      aria-labelledby={`bento-layout-title-${title.replace(/\s+/g, '-').toLowerCase()}`}
    >
      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-2">
        <Icon 
          className={cn("size-6", color)}
          aria-hidden="true" 
        />
      </div>
      <h3 
        id={`bento-layout-title-${title.replace(/\s+/g, '-').toLowerCase()}`}
        className="text-lg font-semibold text-foreground mb-2"
      >
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed flex-1">
        {description}
      </p>

      <Button
        variant="ghost"
        className="group/btn mt-4 w-full hover:bg-primary/10 transition-colors text-primary"
        asChild
        onClick={onCtaClick}
      >
        <a 
          href={ctaLink}
          aria-label={`${ctaText} about ${title}`}
          className="flex items-center justify-center"
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