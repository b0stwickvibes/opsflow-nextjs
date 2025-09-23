"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ChefHat,
  Clock,
  Shield,
  Users,
  Calendar,
  TrendingUp,
} from "lucide-react";
import React, { useState } from "react";

import { cn } from "@/lib/utils";
import { useRestaurantAnalytics } from "@/lib/hooks/restaurant-pages";
import type { IndustryType, RoleType } from "@/types/restaurant-pages";

interface BentoGridProps {
  industry?: IndustryType | 'general';
  role?: RoleType | 'general';
  heading?: string;
  subheading?: string;
  badgeText?: string;
  className?: string;
}

interface GridItem {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  industrySpecific?: {
    [K in IndustryType]?: {
      title?: string;
      description?: string;
    };
  };
}

export function BentoGrid({
  industry = 'restaurants',
  role = 'general',
  heading = "Complete Restaurant Operations Suite",
  subheading = "Streamlined solutions for modern foodservice management",
  badgeText = "Operations Hub",
  className,
}: BentoGridProps) {
  const { trackInteraction } = useRestaurantAnalytics();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const defaultItems: GridItem[] = [
    {
      title: "HACCP Compliance",
      description: "Automated food safety protocols and real-time compliance monitoring for health inspections",
      icon: Shield,
      industrySpecific: {
        bars: { title: "Safety Protocols", description: "Automated safety and sanitation tracking for bar operations" },
        coffee: { title: "Quality Control", description: "Coffee quality standards and health compliance monitoring" },
        hotels: { title: "Guest Safety", description: "Comprehensive safety protocols for dining operations" },
      },
    },
    {
      title: "Kitchen Coordination",
      description: "Real-time kitchen display systems with order prioritization and timing optimization",
      icon: ChefHat,
      industrySpecific: {
        bars: { title: "Service Coordination", description: "Streamlined drink preparation and service timing" },
        coffee: { title: "Brew Management", description: "Coordinated espresso and brewing station workflows" },
        hotels: { title: "Multi-Outlet Coordination", description: "Synchronized operations across dining venues" },
      },
    },
    {
      title: "Shift Management",
      description: "Smart scheduling with labor cost optimization and compliance tracking",
      icon: Clock,
      industrySpecific: {
        bars: { title: "Bar Scheduling", description: "Peak hour staffing optimization for bars and nightlife" },
        coffee: { title: "Barista Scheduling", description: "Rush hour coverage and skill-based shift assignments" },
        hotels: { title: "Hospitality Scheduling", description: "Multi-department coordination and coverage" },
      },
    },
    {
      title: "Team Communication",
      description: "Integrated messaging and task management for seamless front-of-house coordination",
      icon: Users,
      industrySpecific: {
        bars: { title: "Floor Communication", description: "Real-time coordination between bar, servers, and security" },
        coffee: { title: "Crew Messaging", description: "Quick communication for busy coffee shop operations" },
        hotels: { title: "Guest Service Coordination", description: "Seamless communication across all service touchpoints" },
      },
    },
    {
      title: "Inventory Control",
      description: "Real-time stock tracking with automated reordering and waste reduction analytics",
      icon: TrendingUp,
      industrySpecific: {
        bars: { title: "Liquor Management", description: "Precision tracking for high-value beverage inventory" },
        coffee: { title: "Bean & Supply Tracking", description: "Fresh inventory rotation and supplier management" },
        hotels: { title: "Multi-Venue Inventory", description: "Centralized inventory across restaurant and room service" },
      },
    },
    {
      title: "Event Planning",
      description: "Comprehensive event management with capacity planning and special menu coordination",
      icon: Calendar,
      industrySpecific: {
        bars: { title: "Event Coordination", description: "Private parties, live music, and special event management" },
        coffee: { title: "Catering Management", description: "Corporate orders and special event coordination" },
        hotels: { title: "Function Management", description: "Banquet coordination and special dining events" },
      },
    },
  ];

  const getIndustryItem = (item: GridItem) => {
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
      trackInteraction('bento_grid_hover', {
        industry,
        role,
        item_index: idx,
        item_title: getIndustryItem(defaultItems[idx]).title,
      });
    }
  };

  const getIndustryAccent = () => {
    // Always use primary tokens - no industry-specific colors
    return '';
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

        <div className="relative grid w-full max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
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

                <BentoCard
                  title={industryItem.title}
                  description={industryItem.description}
                  icon={industryItem.icon}
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

const BentoCard = ({
  className,
  title,
  description,
  icon: Icon,
  style,
}: {
  className?: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
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
      aria-labelledby={`bento-title-${title.replace(/\s+/g, '-').toLowerCase()}`}
    >
      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-2">
        <Icon 
          className="size-6 text-primary" 
          aria-hidden="true"
        />
      </div>
      <h3 
        id={`bento-title-${title.replace(/\s+/g, '-').toLowerCase()}`}
        className="text-lg font-semibold text-foreground mb-2"
      >
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};