"use client";

import { Calendar, ArrowRight, CheckCircle } from "lucide-react";
import { useRestaurantAnalytics } from "@/lib/hooks/restaurant-pages";
import { Button } from "@/components/ui/button";

interface DemoRequestProps {
  industry?: "restaurants" | "bars" | "coffee" | "hotels";
}

export function DemoRequest({ industry = "restaurants" }: DemoRequestProps) {
  const { trackEvent } = useRestaurantAnalytics();

  const industryConfig = {
    restaurants: {
      color: "oklch(0.70 0.15 25)",
      title: "See OpsFlow Transform Your Restaurant Operations",
      subtitle: "Book a personalized demo and discover how 2,500+ restaurants optimize their operations",
      benefits: [
        "Live HACCP compliance demonstration",
        "Custom workflow setup for your restaurant",
        "ROI calculator based on your operations",
        "Integration with your existing POS system"
      ]
    },
    bars: {
      color: "oklch(0.60 0.20 270)",
      title: "Transform Your Bar Operations",
      subtitle: "See how 1,200+ bars streamline operations with OpsFlow",
      benefits: [
        "Inventory management demo",
        "Alcohol compliance tracking",
        "Staff coordination features",
        "Event management tools"
      ]
    },
    coffee: {
      color: "oklch(0.65 0.18 80)",
      title: "Optimize Your Coffee Shop Operations",
      subtitle: "Discover how 800+ cafes perfect their operations",
      benefits: [
        "Equipment monitoring system",
        "Quality control tracking",
        "Recipe management demo",
        "Multi-location coordination"
      ]
    },
    hotels: {
      color: "oklch(0.55 0.15 210)",
      title: "Elevate Your Hotel Operations",
      subtitle: "See how 400+ hotels enhance guest satisfaction",
      benefits: [
        "Department coordination demo",
        "Guest service optimization",
        "Housekeeping workflows",
        "Maintenance scheduling"
      ]
    }
  };

  const config = industryConfig[industry];

  const handleScheduleDemo = () => {
    trackEvent("demo_request_click", {
      industry,
      source: "demo_cta"
    });
    window.location.href = `/schedule-demo?industry=${industry}&source=cta`;
  };

  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <div 
            className="relative rounded-2xl p-12 text-white overflow-hidden"
            style={{ backgroundColor: config.color }}
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24" />
            </div>

            <div className="relative z-10">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white/90 mb-6">
                  <Calendar className="size-4" />
                  <span className="text-sm font-medium">Free 30-minute Demo</span>
                </div>
                
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  {config.title}
                </h2>
                
                <p className="text-xl text-white/90 max-w-3xl mx-auto">
                  {config.subtitle}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-white/95">
                    What you'll see in the demo:
                  </h3>
                  <ul className="space-y-4">
                    {config.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="size-5 text-white/90 mt-0.5 flex-shrink-0" />
                        <span className="text-white/90">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                    <Calendar className="size-12 text-white/90 mx-auto mb-4" />
                    <h4 className="text-lg font-semibold mb-2">Schedule Your Demo</h4>
                    <p className="text-white/80 mb-6 text-sm">
                      Choose a time that works for you. No commitment required.
                    </p>
                    <Button
                      onClick={handleScheduleDemo}
                      size="lg"
                      className="w-full bg-white text-black hover:bg-white/90 hover:scale-105 transition-all font-semibold"
                    >
                      Schedule Demo Now
                      <ArrowRight className="ml-2 size-4" />
                    </Button>
                    <p className="text-xs text-white/70 mt-3">
                      Usually takes 30 minutes • No sales pitch
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <p className="text-white/80 text-sm">
                  Join thousands of {industry} already optimizing with OpsFlow
                </p>
                <div className="flex justify-center items-center mt-4 space-x-8 text-white/70">
                  <span>✓ No credit card required</span>
                  <span>✓ Setup in under 24 hours</span>
                  <span>✓ 14-day free trial</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

