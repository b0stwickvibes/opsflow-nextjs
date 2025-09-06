"use client";

import { useRestaurantAnalytics } from "@/lib/hooks/restaurant-pages";
import { useEffect, useRef, useState } from "react";

interface StatItem {
  label: string;
  value: string;
  description: string;
  color?: string;
}

interface StatsDisplayProps {
  industry?: "restaurants" | "bars" | "coffee" | "hotels";
  customStats?: StatItem[];
  animateOnView?: boolean;
  title?: string;
}

export function StatsDisplay({ 
  industry = "restaurants",
  customStats,
  animateOnView = true,
  title
}: StatsDisplayProps) {
  const { trackEvent } = useRestaurantAnalytics();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const industryConfig = {
    restaurants: {
      title: "Restaurant Operations Performance",
      color: "oklch(0.70 0.15 25)",
      stats: [
        {
          label: "HACCP Compliance Rate",
          value: "99.8%",
          description: "average across all locations",
        },
        {
          label: "Labor Cost Reduction",
          value: "32%",
          description: "typical savings achieved",
        },
        {
          label: "Time Saved Weekly",
          value: "15",
          description: "hours per location",
        }
      ]
    },
    bars: {
      title: "Bar Operations Excellence",
      color: "oklch(0.60 0.20 270)",
      stats: [
        {
          label: "Inventory Accuracy",
          value: "97%",
          description: "reduction in stock discrepancies",
        },
        {
          label: "Service Efficiency",
          value: "28%",
          description: "improvement in order flow",
        },
        {
          label: "Compliance Score",
          value: "99%",
          description: "alcohol service compliance",
        }
      ]
    },
    coffee: {
      title: "Coffee Shop Performance Metrics",
      color: "oklch(0.65 0.18 80)",
      stats: [
        {
          label: "Equipment Uptime",
          value: "98.5%",
          description: "machine availability rate",
        },
        {
          label: "Quality Consistency",
          value: "95%",
          description: "customer satisfaction score",
        },
        {
          label: "Waste Reduction",
          value: "23%",
          description: "decrease in product waste",
        }
      ]
    },
    hotels: {
      title: "Hotel Operations Excellence",
      color: "oklch(0.55 0.15 210)",
      stats: [
        {
          label: "Guest Satisfaction",
          value: "96%",
          description: "average satisfaction rating",
        },
        {
          label: "Operational Efficiency",
          value: "35%",
          description: "improvement in task completion",
        },
        {
          label: "Staff Productivity",
          value: "29%",
          description: "increase in productive hours",
        }
      ]
    }
  };

  const config = industryConfig[industry];
  const stats = customStats || config.stats;
  const sectionTitle = title || config.title;

  // Intersection Observer for animation
  useEffect(() => {
    if (!animateOnView) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          trackEvent("stats_section_viewed", {
            industry,
            title: sectionTitle
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [animateOnView, industry, sectionTitle, trackEvent]);

  const handleStatClick = (stat: StatItem) => {
    trackEvent("stat_item_clicked", {
      industry,
      stat_label: stat.label,
      stat_value: stat.value
    });
  };

  return (
    <section className="py-32" ref={sectionRef}>
      <div className="container">
        <h1 
          className="text-center text-4xl font-semibold lg:text-6xl mb-4"
          style={{ color: config.color }}
        >
          {sectionTitle}
        </h1>
        <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
          Real results from {industry} using OpsFlow to optimize their operations and improve their bottom line.
        </p>

        <div className="grid gap-10 pt-9 md:grid-cols-3 lg:gap-0 lg:pt-20">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className={`text-center cursor-pointer group transition-all duration-700 hover:scale-105 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: `${index * 200}ms`
              }}
              onClick={() => handleStatClick(stat)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleStatClick(stat);
                }
              }}
              aria-label={`${stat.label}: ${stat.value} ${stat.description}`}
            >
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                {stat.label}
              </p>
              <p 
                className="pt-4 text-7xl font-bold lg:pt-10 transition-all duration-300 group-hover:scale-110"
                style={{ color: stat.color || config.color }}
              >
                {stat.value}
              </p>
              <p className="text-2xl font-semibold text-muted-foreground capitalize">
                {stat.description}
              </p>

              {/* Decorative underline on hover */}
              <div 
                className="mt-4 mx-auto h-1 w-0 group-hover:w-16 transition-all duration-300 rounded-full"
                style={{ backgroundColor: stat.color || config.color }}
              />
            </div>
          ))}
        </div>

        {/* Additional Context */}
        <div className="mt-16 text-center space-y-4">
          <p className="text-sm text-muted-foreground">
            * Based on data from over 1,000+ {industry} locations using OpsFlow
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <span className="flex items-center gap-2">
              <div 
                className="w-2 h-2 rounded-full" 
                style={{ backgroundColor: config.color }}
              />
              Industry Average Performance
            </span>
            <span className="text-muted-foreground">
              Results may vary by location and implementation
            </span>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <button
            onClick={() => {
              trackEvent("stats_cta_click", {
                industry,
                cta_type: "learn_more"
              });
              window.location.href = `/case-studies?industry=${industry}`;
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg"
            style={{ 
              backgroundColor: `oklch(from ${config.color} l c h / 0.1)`,
              color: config.color,
              border: `2px solid ${config.color}`
            }}
          >
            See Detailed Case Studies
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

