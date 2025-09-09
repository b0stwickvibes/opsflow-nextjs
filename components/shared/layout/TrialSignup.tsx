"use client";

import { Zap, Shield, Users, ArrowRight } from "lucide-react";
import { useRestaurantAnalytics } from "@/lib/hooks/restaurant-pages";
import { Button } from "@/components/ui/button";

interface TrialSignupProps {
  industry?: "restaurants" | "bars" | "coffee" | "hotels";
}

export function TrialSignup({ industry = "restaurants" }: TrialSignupProps) {
  const { trackEvent } = useRestaurantAnalytics();

  const industryConfig = {
    restaurants: {
      color: "oklch(0.70 0.15 25)",
      title: "Start Your Restaurant Transformation Today",
      subtitle: "14-day free trial with full access to all restaurant operations features",
      features: [
        {
          icon: Shield,
          title: "HACCP Compliance",
          description: "Automated temperature logging and compliance tracking"
        },
        {
          icon: Users,
          title: "Staff Coordination",
          description: "Seamless kitchen and front-of-house communication"
        },
        {
          icon: Zap,
          title: "Real-time Insights",
          description: "Live operational dashboards and performance metrics"
        }
      ],
      ctaText: "Start Free Restaurant Trial",
      benefits: [
        "Setup in under 30 minutes",
        "No credit card required",
        "Cancel anytime",
        "Full support during trial"
      ]
    },
    bars: {
      color: "oklch(0.60 0.20 270)",
      title: "Transform Your Bar Operations",
      subtitle: "14-day free trial with complete bar management features",
      ctaText: "Start Free Bar Trial"
    },
    coffee: {
      color: "oklch(0.65 0.18 80)",
      title: "Perfect Your Coffee Operations",
      subtitle: "14-day free trial with all coffee shop optimization tools",
      ctaText: "Start Free Coffee Trial"
    },
    hotels: {
      color: "oklch(0.55 0.15 210)",
      title: "Elevate Your Hotel Operations",
      subtitle: "14-day free trial with comprehensive hotel management features",
      ctaText: "Start Free Hotel Trial"
    }
  };

  const config = industryConfig[industry];

  const handleStartTrial = () => {
    trackEvent("trial_signup_click", {
      industry,
      source: "trial_cta"
    });
    window.location.href = `/start-trial?industry=${industry}&source=cta`;
  };

  const handleWatchDemo = () => {
    trackEvent("trial_demo_click", {
      industry,
      source: "trial_cta"
    });
    window.location.href = `/schedule-demo?industry=${industry}&source=trial_cta`;
  };

  return (
    <section className="py-32 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white mb-6"
              style={{ backgroundColor: config.color }}
            >
              <Zap className="size-4" />
              <span className="text-sm font-medium">Free 14-Day Trial</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              {config.title}
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {config.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="grid gap-8">
                {Array.isArray((config as any).features)
                  ? (((config as any).features as any[]).map((feature: any, index: number) => (
                    <div 
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-lg bg-background border hover:shadow-md transition-shadow"
                    >
                      <div 
                        className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `oklch(from ${config.color} l c h / 0.1)` }}
                      >
                        <feature.icon 
                          className="size-6" 
                          style={{ color: config.color }}
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  )))
                  : (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-semibold">Why Choose OpsFlow?</h3>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3">
                          <Shield className="size-5" style={{ color: config.color }} />
                          <span>Industry-specific compliance tools</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <Users className="size-5" style={{ color: config.color }} />
                          <span>Seamless team coordination</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <Zap className="size-5" style={{ color: config.color }} />
                          <span>Real-time operational insights</span>
                        </li>
                      </ul>
                    </div>
                  )}
              </div>
            </div>

            <div>
              <div 
                className="bg-background rounded-2xl p-8 border shadow-lg"
                style={{ borderColor: `oklch(from ${config.color} l c h / 0.3)` }}
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                  <p className="text-muted-foreground mb-6">
                    Join thousands of {industry} operations already using OpsFlow
                  </p>
                  
                  <Button
                    onClick={handleStartTrial}
                    size="lg"
                    className="w-full text-white font-semibold hover:scale-105 transition-transform mb-4"
                    style={{ backgroundColor: config.color }}
                  >
                    {config.ctaText}
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                  
                  <Button
                    variant="outline"
                    onClick={handleWatchDemo}
                    size="lg"
                    className="w-full"
                    style={{ borderColor: config.color, color: config.color }}
                  >
                    Watch Demo First
                  </Button>
                </div>

                <div className="space-y-3 text-center">
                  {((config as any).benefits || [
                    "Setup in under 30 minutes",
                    "No credit card required", 
                    "Cancel anytime",
                    "Full support during trial"
]).map((benefit: any, index: number) => (
                    <div key={index} className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <div 
                        className="w-2 h-2 rounded-full" 
                        style={{ backgroundColor: config.color }}
                      />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">
              Trusted by leading {industry} operations worldwide
            </p>
            <div className="flex justify-center items-center space-x-8 text-sm text-muted-foreground">
              <span>🏆 Industry Leader</span>
              <span>🔒 SOC 2 Certified</span>
              <span>📞 24/7 Support</span>
              <span>📊 99.9% Uptime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

