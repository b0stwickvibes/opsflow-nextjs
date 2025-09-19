"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { useRestaurantAnalytics } from "@/lib/hooks/restaurant-pages";

interface TestimonialCarouselProps {
  industry?: "restaurants" | "bars" | "coffee" | "hotels";
}

export function TestimonialCarousel({ industry = "restaurants" }: TestimonialCarouselProps) {
  const { trackEvent } = useRestaurantAnalytics();

  const industryConfig = {
    restaurants: {
      color: "oklch(0.70 0.15 25)",
      testimonials: [
        {
          name: "Maria Rodriguez",
          title: "General Manager",
          company: "Bella Vista Bistro",
          avatar: "https://images.unsplash.com/photo-1494790108755-2616b332b630?q=80&w=150&h=150&auto=format&fit=crop&crop=face",
          logo: "BVB",
          quote: "OpsFlow transformed our HACCP compliance from a daily struggle to an automated process. We've maintained 100% compliance for 8 months straight.",
          metrics: [
            { value: "100%", label: "HACCP Compliance Rate" },
            { value: "35%", label: "Labor Cost Reduction" }
          ]
        },
        {
          name: "James Chen",
          title: "Owner",
          company: "Dragon Kitchen Chain",
          avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&auto=format&fit=crop&crop=face",
          logo: "🍜",
          quote: "Managing 12 locations became seamless with OpsFlow. Real-time visibility into operations across all restaurants has been game-changing.",
          metrics: [
            { value: "12", label: "Locations Managed" },
            { value: "45%", label: "Task Efficiency Increase" }
          ]
        }
      ]
    },
    bars: {
      color: "oklch(0.60 0.20 270)",
      testimonials: [
        {
          name: "Sarah Mitchell",
          title: "Bar Manager",
          company: "The Copper Mug",
          avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&auto=format&fit=crop&crop=face",
          logo: "🍺",
          quote: "Inventory management was our biggest headache. OpsFlow's tracking reduced our waste by 28% and prevented stockouts completely.",
          metrics: [
            { value: "28%", label: "Waste Reduction" },
            { value: "99%", label: "Stock Availability" }
          ]
        }
      ]
    },
    coffee: {
      color: "oklch(0.65 0.18 80)",
      testimonials: [
        {
          name: "Alex Johnson",
          title: "Cafe Owner",
          company: "Morning Brew Co.",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop&crop=face",
          logo: "☕",
          quote: "Equipment monitoring saved us thousands in potential repairs. The predictive maintenance alerts are incredibly accurate.",
          metrics: [
            { value: "$8,500", label: "Maintenance Savings" },
            { value: "98%", label: "Equipment Uptime" }
          ]
        }
      ]
    },
    hotels: {
      color: "oklch(0.55 0.15 210)",
      testimonials: [
        {
          name: "Elena Vasquez",
          title: "Operations Director",
          company: "Grand Plaza Hotels",
          avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&h=150&auto=format&fit=crop&crop=face",
          logo: "🏨",
          quote: "Guest satisfaction improved dramatically when our departments started coordinating through OpsFlow. Response times are now under 2 minutes.",
          metrics: [
            { value: "96%", label: "Guest Satisfaction" },
            { value: "2min", label: "Response Time" }
          ]
        }
      ]
    }
  };

  const config = industryConfig[industry];

  return (
    <section className="section-marketing">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="heading-brand-gradient text-3xl font-bold md:text-5xl mb-4">
            Real Results from {industry.charAt(0).toUpperCase() + industry.slice(1)}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how operations leaders are transforming their businesses with OpsFlow
          </p>
        </div>

        <div className="relative rounded-2xl bg-muted/50 border">
          <Carousel className="static">
            <CarouselContent className="-ml-4">
              {config.testimonials.map((testimonial, index) => (
                <CarouselItem 
                  key={index}
                  className="grid grid-cols-1 gap-y-10 pt-4 pr-4 pb-14 pl-8 sm:pt-8 lg:grid-cols-3 lg:gap-10 lg:p-20"
                >
                  <div className="text-center lg:text-left">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="mx-auto w-32 h-32 rounded-xl object-cover lg:mx-0"
                    />
                    <div className="mt-4">
                      <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                      <p className="text-muted-foreground">{testimonial.title}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                  
                  <div className="col-span-2">
                    <div className="mb-6 flex items-center justify-center gap-3 lg:mb-8 lg:justify-start">
                      <span className="text-3xl">{testimonial.logo}</span>
                      <span className="text-xl font-semibold lg:text-3xl text-primary">
                        {testimonial.company}
                      </span>
                    </div>
                    
                    <blockquote className="text-center text-xl font-medium lg:text-left lg:text-2xl text-foreground mb-8">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <Separator className="my-8 lg:my-10" />
                    
                    <div className="grid justify-center gap-10 text-center md:grid-cols-2 lg:justify-start lg:text-left">
                      {testimonial.metrics.map((metric, metricIndex) => (
                        <div 
                          key={metricIndex}
                          className="flex flex-col cursor-pointer tile-hover rounded-lg p-4"
                          onClick={() => trackEvent("testimonial_metric_clicked", {
                            industry,
                            testimonial: testimonial.company,
                            metric: metric.label,
                            value: metric.value
                          })}
                        >
                          <span 
                            className="mb-4 text-4xl font-bold md:text-6xl text-primary"
                          >
                            {metric.value}
                          </span>
                          <span className="text-muted-foreground font-medium">
                            {metric.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Join thousands of {industry} operations using OpsFlow
          </p>
          <button
            onClick={() => {
              trackEvent("testimonial_cta_click", { industry });
              window.location.href = `/case-studies?industry=${industry}`;
            }}
            className="px-6 py-3 rounded-lg font-medium transition-all hover:scale-105 bg-brand-gradient text-primary-foreground cta-shimmer"
          >
            Read More Success Stories
          </button>
        </div>
      </div>
    </section>
  );
};

