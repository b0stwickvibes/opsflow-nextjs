"use client";

import { Star, Quote } from "lucide-react";
import { useRestaurantAnalytics } from "@/lib/hooks/restaurant-pages";

interface TestimonialGridProps {
  industry?: "restaurants" | "bars" | "coffee" | "hotels";
}

export function TestimonialGrid({ industry = "restaurants" }: TestimonialGridProps) {
  const { trackEvent } = useRestaurantAnalytics();

  const industryConfig = {
    restaurants: {
      color: "oklch(0.70 0.15 25)",
      testimonials: [
        {
          name: "Carlos Rodriguez",
          title: "Executive Chef",
          company: "Meridian Restaurant Group",
          avatar: '',
          rating: 5,
          quote: "HACCP compliance used to take 3 hours daily across our locations. Now it's automated and we maintain 100% compliance effortlessly.",
          metric: "3hr → 15min daily"
        },
        {
          name: "Jennifer Walsh",
          title: "Operations Manager",
          company: "Farm Table Restaurants",
          avatar: '',
          rating: 5,
          quote: "Managing 8 restaurant locations became seamless. Real-time visibility into operations across all sites has transformed our efficiency.",
          metric: "8 locations managed"
        },
        {
          name: "Michael Chen",
          title: "Restaurant Owner",
          company: "Golden Dragon Cuisine",
          avatar: '',
          rating: 5,
          quote: "Labor costs dropped 28% while maintaining service quality. The staff scheduling optimization is incredible.",
          metric: "28% cost reduction"
        },
        {
          name: "Sarah Thompson",
          title: "General Manager",
          company: "Coastal Bistro",
          avatar: '',
          rating: 5,
          quote: "Temperature monitoring and task verification happen automatically. Health department inspections are now stress-free.",
          metric: "100% audit pass rate"
        }
      ]
    },
    bars: {
      color: "oklch(0.60 0.20 270)",
      testimonials: [
        {
          name: "Jake Morrison",
          title: "Bar Manager",
          company: "The Copper Still",
          avatar: '',
          rating: 5,
          quote: "Inventory shrinkage reduced by 35%. Finally have complete visibility into stock levels across all shifts.",
          metric: "35% shrinkage reduction"
        },
        {
          name: "Lisa Rodriguez",
          title: "Operations Director",
          company: "Metro Bar Group",
          avatar: '',
          rating: 5,
          quote: "Coordinating 5 bar locations is now effortless. Staff scheduling and compliance tracking work perfectly.",
          metric: "5 locations optimized"
        }
      ]
    },
    coffee: {
      color: "oklch(0.65 0.18 80)",
      testimonials: [
        {
          name: "Emma Davis",
          title: "Cafe Owner",
          company: "Artisan Coffee Co.",
          avatar: '',
          rating: 5,
          quote: "Equipment monitoring prevented 3 major breakdowns this year. Saved thousands in repair costs and downtime.",
          metric: "$12K saved annually"
        },
        {
          name: "Ryan Park",
          title: "Regional Manager",
          company: "Bean There Coffee",
          avatar: '',
          rating: 5,
          quote: "Quality consistency across 12 locations improved dramatically. Customer satisfaction scores hit all-time highs.",
          metric: "12 locations consistent"
        }
      ]
    },
    hotels: {
      color: "oklch(0.55 0.15 210)",
      testimonials: [
        {
          name: "Victoria Adams",
          title: "Hotel Manager",
          company: "Grand Plaza Hotel",
          avatar: '',
          rating: 5,
          quote: "Housekeeping efficiency increased 40%. Guest satisfaction scores improved and our team coordination is flawless.",
          metric: "40% efficiency gain"
        },
        {
          name: "David Kim",
          title: "Operations Director",
          company: "Luxury Suites Chain",
          avatar: '',
          rating: 5,
          quote: "Managing 6 properties became seamless. Maintenance requests are handled 60% faster with better guest communication.",
          metric: "60% faster response"
        }
      ]
    }
  };

  const config = industryConfig[industry];

  return (
    <section className="section-marketing">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-brand-gradient text-3xl font-bold md:text-5xl mb-4">
            Success Stories from {industry.charAt(0).toUpperCase() + industry.slice(1)} Leaders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from operations managers who transformed their businesses with OpsFlow
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
          {config.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="tile-hover bg-background rounded-xl p-8 border cursor-pointer"
              onClick={() => trackEvent("testimonial_card_clicked", {
                industry,
                testimonial: testimonial.company,
                person: testimonial.name
              })}
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center font-semibold">
                  {testimonial.name.split(' ').map(n => n[0]).slice(0,2).join('').toUpperCase()}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-muted-foreground text-sm">{testimonial.title}</p>
                  <p className="text-sm font-medium text-primary">
                    {testimonial.company}
                  </p>
                </div>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div className="relative mb-6">
                <Quote 
                  className="absolute -top-2 -left-2 w-8 h-8 opacity-20 text-primary" 
                />
                <blockquote className="text-foreground leading-relaxed pl-6">
                  "{testimonial.quote}"
                </blockquote>
              </div>

              {/* Metric */}
              <div 
                className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border border-primary/20 bg-primary/10 text-primary"
              >
                <span className="font-bold">Results: {testimonial.metric}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Ready to join these successful {industry} operations?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                trackEvent("testimonial_grid_trial_click", { industry });
                window.location.href = `/start-trial?industry=${industry}&source=testimonials`;
              }}
              className="px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform bg-brand-gradient text-primary-foreground cta-shimmer"
            >
              Start Free Trial
            </button>
            <button
              onClick={() => {
                trackEvent("testimonial_grid_demo_click", { industry });
                window.location.href = `/schedule-demo?industry=${industry}&source=testimonials`;
              }}
              className="px-8 py-3 rounded-lg font-semibold border-2 hover:scale-105 transition-all border-primary text-primary bg-transparent"
            >
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

