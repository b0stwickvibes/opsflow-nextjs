"use client";

import Image from "next/image";

import { Star, TrendingUp, Users, Shield } from "lucide-react";
import { useRestaurantAnalytics } from "@/lib/hooks/restaurant-pages";

interface TestimonialCardsProps {
  industry?: "restaurants" | "bars" | "coffee" | "hotels";
}

export function TestimonialCards({ industry = "restaurants" }: TestimonialCardsProps) {
  const { trackEvent } = useRestaurantAnalytics();

  const industryConfig = {
    restaurants: {
      color: "oklch(0.70 0.15 25)",
      title: "Restaurant Case Studies",
      testimonials: [
        {
          company: "Savory Heights Restaurant Chain",
          logo: "🍽️",
          industry: "Fine Dining",
          locations: 15,
          results: {
            compliance: "99.9%",
            savings: "$180K",
            efficiency: "42%"
          },
          challenge: "Managing HACCP compliance across 15 locations was consuming 25+ hours daily and compliance rates were inconsistent at 87%.",
          solution: "Implemented OpsFlow's automated HACCP monitoring, temperature logging, and multi-location dashboard for centralized oversight.",
          outcome: "Achieved 99.9% compliance rate, reduced compliance time by 85%, and saved $180K annually in labor costs.",
          quote: "OpsFlow transformed our operations from reactive to proactive. We now exceed health department standards consistently.",
          person: {
            name: "Alexandra Martinez",
            title: "VP of Operations",
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b332b630?q=80&w=150&h=150&auto=format&fit=crop&crop=face"
          }
        },
        {
          company: "Urban Eats Fast Casual",
          logo: "🥗",
          industry: "Fast Casual",
          locations: 8,
          results: {
            turnover: "38%",
            productivity: "35%",
            satisfaction: "94%"
          },
          challenge: "High staff turnover (65%) and poor communication between kitchen and front-of-house were impacting customer satisfaction (78%).",
          solution: "Deployed OpsFlow's staff coordination tools, real-time communication system, and performance tracking across all locations.",
          outcome: "Reduced staff turnover to 27%, increased productivity 35%, and achieved 94% customer satisfaction ratings.",
          quote: "Team coordination is seamless now. Our staff actually enjoys their work more and customers notice the difference.",
          person: {
            name: "Marcus Johnson",
            title: "Franchise Owner",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop&crop=face"
          }
        }
      ]
    },
    bars: {
      color: "oklch(0.60 0.20 270)",
      title: "Bar Success Stories",
      testimonials: [
        {
          company: "Metropolitan Bar Group",
          logo: "🍺",
          industry: "Bar & Nightlife",
          locations: 6,
          results: {
            inventory: "92%",
            waste: "31%",
            compliance: "100%"
          },
          challenge: "Inventory discrepancies averaging 23% and alcohol compliance issues across multiple high-volume locations.",
          solution: "Implemented comprehensive inventory tracking, automated compliance monitoring, and staff coordination systems.",
          outcome: "Achieved 92% inventory accuracy, reduced waste by 31%, and maintained 100% alcohol service compliance.",
          quote: "Finally have complete control over our inventory. Compliance is automatic and our margins improved significantly.",
          person: {
            name: "Rachel Torres",
            title: "Operations Manager",
            avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&h=150&auto=format&fit=crop&crop=face"
          }
        }
      ]
    },
    coffee: {
      color: "oklch(0.65 0.18 80)",
      title: "Coffee Shop Success Stories",
      testimonials: [
        {
          company: "Roasted Perfection Cafes",
          logo: "☕",
          industry: "Coffee & Cafe",
          locations: 12,
          results: {
            uptime: "98.7%",
            quality: "96%",
            savings: "$85K"
          },
          challenge: "Equipment breakdowns caused 18% downtime and inconsistent quality across locations hurt brand reputation.",
          solution: "Deployed predictive maintenance monitoring, quality control tracking, and standardized brewing protocols.",
          outcome: "Achieved 98.7% equipment uptime, 96% quality consistency, and saved $85K in maintenance costs.",
          quote: "Equipment issues are now predictable and preventable. Our quality standards are consistently met across all locations.",
          person: {
            name: "David Chen",
            title: "Regional Director",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&auto=format&fit=crop&crop=face"
          }
        }
      ]
    },
    hotels: {
      color: "oklch(0.55 0.15 210)",
      title: "Hotel Success Stories",
      testimonials: [
        {
          company: "Grandview Hotel Collection",
          logo: "🏨",
          industry: "Hospitality",
          locations: 4,
          results: {
            satisfaction: "97%",
            response: "45%",
            efficiency: "38%"
          },
          challenge: "Poor departmental coordination led to 7-minute average guest request response times and 82% satisfaction scores.",
          solution: "Implemented comprehensive department coordination, guest service optimization, and real-time communication systems.",
          outcome: "Achieved 97% guest satisfaction, reduced response times by 45%, and improved operational efficiency 38%.",
          quote: "Guest experience transformed completely. Our team works as one unit and guests consistently praise our service.",
          person: {
            name: "Elena Rodriguez",
            title: "General Manager",
            avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&h=150&auto=format&fit=crop&crop=face"
          }
        }
      ]
    }
  };

  const config = industryConfig[industry];

  const getResultIcon = (key: string) => {
    switch (key) {
      case 'compliance':
      case 'satisfaction':
        return Shield;
      case 'efficiency':
      case 'productivity':
      case 'uptime':
        return TrendingUp;
      default:
        return Users;
    }
  };

  return (
    <section className="section-marketing">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-brand-gradient text-3xl font-bold md:text-5xl mb-4">
            {config.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            In-depth case studies showing how OpsFlow transforms {industry} operations with measurable results
          </p>
        </div>

        <div className="space-y-16 max-w-6xl mx-auto">
          {config.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-8 lg:p-12 border shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-center gap-6 mb-8">
                <div className="flex items-center gap-4">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl bg-primary/10"
                  >
                    {testimonial.logo}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{testimonial.company}</h3>
                    <p className="text-muted-foreground">{testimonial.industry} • {testimonial.locations} Locations</p>
                  </div>
                </div>

                <div className="flex gap-6 lg:ml-auto">
                  {Object.entries(testimonial.results).map(([key, value]) => {
                    const Icon = getResultIcon(key);
                    return (
                      <div key={key} className="text-center">
                        <div className="flex items-center gap-2 mb-1">
                          <Icon className="w-4 h-4 text-primary" />
                          <span className="text-2xl font-bold text-primary">
                            {value}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Content */}
              <div className="grid lg:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    Challenge
                  </h4>
                  <p className="text-muted-foreground">{testimonial.challenge}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Solution
                  </h4>
                  <p className="text-muted-foreground">{testimonial.solution}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    Outcome
                  </h4>
                  <p className="text-muted-foreground">{testimonial.outcome}</p>
                </div>
              </div>

              {/* Testimonial */}
              <div className="mt-8 pt-8 border-t">
                <div className="flex items-start gap-4">
                  <Image
                    src={testimonial.person.avatar}
                    alt={testimonial.person.name}
                    width={56}
                    height={56}
                    className="w-14 h-14 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <blockquote className="text-lg italic text-foreground mb-4">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <div>
                        <p className="font-semibold">{testimonial.person.name}</p>
                        <p className="text-muted-foreground text-sm">{testimonial.person.title}</p>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current text-primary" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 pt-6 border-t text-center lg:text-left">
                <button
                  onClick={() => {
                    trackEvent("case_study_cta_click", {
                      industry,
                      company: testimonial.company,
                      cta_type: "learn_more"
                    });
                    window.location.href = `/case-study/${testimonial.company.toLowerCase().replace(/\\s+/g, '-')}?industry=${industry}`;
                  }}
                  className="tile-hover inline-flex items-center gap-2 px-6 py-2 rounded-lg font-medium transition-all hover:scale-105 bg-primary/10 text-primary border border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  Read Full Case Study
                  <TrendingUp className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Operations?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join these successful {industry} operations and start seeing results in your first week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                trackEvent("case_study_bottom_trial_click", { industry });
                window.location.href = `/start-trial?industry=${industry}&source=case_studies`;
              }}
              className="cta-shimmer px-8 py-4 rounded-lg font-semibold bg-primary text-primary-foreground hover:scale-105 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Start Your Success Story
            </button>
            <button
              onClick={() => {
                trackEvent("case_study_bottom_demo_click", { industry });
                window.location.href = `/schedule-demo?industry=${industry}&source=case_studies`;
              }}
              className="px-8 py-4 rounded-lg font-semibold border-2 hover:scale-105 transition-all border-primary text-primary bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              See Live Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

