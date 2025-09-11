"use client";

import { Check, ArrowRight, Phone } from "lucide-react";
import { useRestaurantAnalytics } from "@/lib/hooks/restaurant-pages";

interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
  ctaAction: "trial" | "demo" | "contact";
}

interface PricingTableProps {
  industry?: "restaurants" | "bars" | "coffee" | "hotels";
  showAnnualDiscount?: boolean;
  customPlans?: PricingPlan[];
}

export function PricingTable({ 
  industry = "restaurants",
  showAnnualDiscount = true,
  customPlans 
}: PricingTableProps) {
  const { trackEvent } = useRestaurantAnalytics();

  const industryConfig = {
    restaurants: {
      title: "Restaurant Operations Pricing",
      subtitle: "Choose the plan that scales with your restaurant operations. From single locations to enterprise chains.",
      color: "oklch(0.70 0.15 25)",
      plans: [
        {
          id: "single-location",
          name: "Single Location",
          price: "$99",
          period: "/month",
          description: "Perfect for independent restaurants starting their operations journey",
          features: [
            "Up to 50 staff members",
            "HACCP compliance monitoring", 
            "Basic task management",
            "Temperature logging",
            "Mobile app access",
            "Email support",
            "Basic reporting"
          ],
          ctaText: "Start Free Trial",
          ctaAction: "trial" as const
        },
        {
          id: "small-chain",
          name: "Small Chain",
          price: "$299", 
          period: "/month",
          description: "Ideal for small restaurant chains with 2-5 locations",
          features: [
            "Up to 5 locations",
            "Up to 200 staff members",
            "Advanced HACCP compliance",
            "Multi-location reporting",
            "Inventory tracking",
            "Staff scheduling",
            "Priority support",
            "Custom workflows"
          ],
          isPopular: true,
          ctaText: "Schedule Demo",
          ctaAction: "demo" as const
        },
        {
          id: "enterprise",
          name: "Enterprise",
          price: "Custom",
          period: "pricing",
          description: "For large restaurant chains requiring custom solutions and dedicated support",
          features: [
            "Unlimited locations",
            "Unlimited staff members",
            "Custom HACCP protocols",
            "Advanced analytics",
            "API integrations",
            "24/7 dedicated support",
            "Custom training",
            "SLA guarantees"
          ],
          ctaText: "Contact Sales",
          ctaAction: "contact" as const
        }
      ]
    },
    bars: {
      title: "Bar Operations Pricing",
      subtitle: "Streamline bar operations with plans designed for establishments of all sizes.",
      color: "oklch(0.60 0.20 270)",
      plans: [
        {
          id: "single-bar",
          name: "Single Bar",
          price: "$89",
          period: "/month", 
          description: "Essential tools for independent bars and pubs",
          features: [
            "Up to 30 staff members",
            "Alcohol compliance tracking",
            "Inventory management",
            "Basic task management",
            "Mobile app access",
            "Email support"
          ],
          ctaText: "Start Free Trial",
          ctaAction: "trial" as const
        },
        {
          id: "bar-group",
          name: "Bar Group",
          price: "$249",
          period: "/month",
          description: "Perfect for bar groups with multiple locations",
          features: [
            "Up to 5 locations",
            "Up to 150 staff members",
            "Advanced inventory tracking",
            "Multi-location reporting",
            "Staff scheduling",
            "Priority support"
          ],
          isPopular: true,
          ctaText: "Schedule Demo", 
          ctaAction: "demo" as const
        },
        {
          id: "enterprise-bars",
          name: "Enterprise",
          price: "Custom",
          period: "pricing",
          description: "For large hospitality groups with comprehensive bar operations",
          features: [
            "Unlimited locations",
            "Custom compliance protocols",
            "Advanced analytics",
            "API integrations",
            "24/7 support"
          ],
          ctaText: "Contact Sales",
          ctaAction: "contact" as const
        }
      ]
    },
    coffee: {
      title: "Coffee Shop Pricing",
      subtitle: "Optimize coffee shop operations with plans tailored for cafes and coffee chains.",
      color: "oklch(0.65 0.18 80)",
      plans: [
        {
          id: "single-cafe",
          name: "Single Cafe",
          price: "$79",
          period: "/month",
          description: "Perfect for independent coffee shops and small cafes",
          features: [
            "Up to 25 staff members",
            "Equipment monitoring",
            "Quality control tracking",
            "Basic task management",
            "Mobile app access",
            "Email support"
          ],
          ctaText: "Start Free Trial",
          ctaAction: "trial" as const
        },
        {
          id: "coffee-chain",
          name: "Coffee Chain",
          price: "$199",
          period: "/month",
          description: "Designed for small to medium coffee chains",
          features: [
            "Up to 5 locations",
            "Up to 100 staff members",
            "Advanced equipment monitoring",
            "Multi-location reporting",
            "Inventory tracking",
            "Priority support"
          ],
          isPopular: true,
          ctaText: "Schedule Demo",
          ctaAction: "demo" as const
        },
        {
          id: "enterprise-coffee",
          name: "Enterprise",
          price: "Custom", 
          period: "pricing",
          description: "For large coffee chains requiring enterprise-level features",
          features: [
            "Unlimited locations",
            "Custom quality protocols",
            "Advanced analytics",
            "API integrations",
            "24/7 support"
          ],
          ctaText: "Contact Sales",
          ctaAction: "contact" as const
        }
      ]
    },
    hotels: {
      title: "Hotel Operations Pricing",
      subtitle: "Comprehensive hotel operations management for properties of all sizes.",
      color: "oklch(0.55 0.15 210)",
      plans: [
        {
          id: "boutique",
          name: "Boutique Hotel",
          price: "$199",
          period: "/month",
          description: "Tailored for boutique hotels and small properties",
          features: [
            "Up to 75 staff members",
            "Guest satisfaction tracking",
            "Housekeeping coordination",
            "Maintenance scheduling",
            "Mobile app access",
            "Email support"
          ],
          ctaText: "Start Free Trial",
          ctaAction: "trial" as const
        },
        {
          id: "hotel-group",
          name: "Hotel Group", 
          price: "$499",
          period: "/month",
          description: "Perfect for hotel groups and medium-sized properties",
          features: [
            "Up to 5 properties",
            "Up to 300 staff members",
            "Advanced guest services",
            "Multi-property reporting",
            "Department coordination",
            "Priority support"
          ],
          isPopular: true,
          ctaText: "Schedule Demo",
          ctaAction: "demo" as const
        },
        {
          id: "enterprise-hotel",
          name: "Enterprise",
          price: "Custom",
          period: "pricing",
          description: "For large hotel chains and hospitality enterprises",
          features: [
            "Unlimited properties",
            "Custom service protocols",
            "Advanced analytics",
            "API integrations", 
            "24/7 support"
          ],
          ctaText: "Contact Sales",
          ctaAction: "contact" as const
        }
      ]
    }
  };

  const config = industryConfig[industry];
  const plans = customPlans || config.plans;

  const handleCTAClick = (plan: PricingPlan) => {
    trackEvent("pricing_cta_click", {
      plan_id: plan.id,
      plan_name: plan.name,
      cta_action: plan.ctaAction,
      industry,
      price: plan.price
    });

    // Handle different CTA actions
    switch (plan.ctaAction) {
      case "trial":
        window.location.href = `/start-trial?plan=${plan.id}&industry=${industry}`;
        break;
      case "demo":
        window.location.href = `/schedule-demo?plan=${plan.id}&industry=${industry}`;
        break;
      case "contact":
        window.location.href = `/contact-sales?plan=${plan.id}&industry=${industry}`;
        break;
    }
  };

  return (
    <section className="py-32">
      <div className="container">
        <div className="rounded-xl border border-border py-6 md:py-8 lg:pt-16 lg:pb-12">
          <div className="px-6 md:px-8 lg:px-12">
            {/* Header */}
            <div className="mb-8 md:mb-10 md:flex md:justify-between lg:mb-9">
              <div className="lg:w-2/3">
                <h1 className="text-display-2xl mb-4 text-2xl font-medium md:text-3xl lg:">
                  {config.title}
                </h1>
                <p className="text-xs text-muted-foreground md:text-sm lg:text-base">
                  {config.subtitle}
                </p>
                {showAnnualDiscount && (
                  <p className="mt-2 text-sm font-medium text-primary">
                    Save 20% with annual billing
                  </p>
                )}
              </div>
              <div 
                className="hidden md:flex md:items-center md:justify-center md:size-24 lg:size-32 rounded-2xl bg-primary/10"
              >
                <div 
                  className="size-12 lg:size-16 rounded-xl flex items-center justify-center bg-primary"
                >
                  <span className="enterprise-body text-primary-foreground font-bold  lg:text-xl">$</span>
                </div>
              </div>
            </div>

            {/* Pricing Cards */}
            <div className="flex flex-col gap-x-8 gap-y-6 xl:flex-row">
              {plans.map((plan) => (
                <div 
                  key={plan.id}
                  className={`flex flex-1 flex-col rounded-lg p-6 lg:py-8 relative ${
                    plan.isPopular 
                      ? 'border-2 shadow-lg border-primary bg-primary/5' 
                      : 'bg-accent border border-border'
                  }`}
                >
                  {plan.isPopular && (
                    <div 
                      className="absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground"
                    >
                      Most Popular
                    </div>
                  )}

                  <h2 className="enterprise-body mb-1.5 text-base font-medium lg:mb-2 lg:">
                    {plan.name}
                  </h2>
                  
                  <div className="grid flex-1 grid-cols-1 gap-x-10 md:grid-cols-3 lg:grid-cols-1">
                    <div className="md:col-span-2 lg:col-span-1">
                      <p className="mb-4 text-xs text-muted-foreground lg:text-sm">
                        {plan.description}
                      </p>
                      
                      <div className="mb-6">
                        <p className="mb-4">
                          <span className="font-medium text-2xl lg:text-3xl">
                            {plan.price}
                          </span>
                          <span className="text-xs font-medium text-muted-foreground">
                            {plan.period}
                          </span>
                        </p>
                      </div>

                      <ul className="space-y-2 mb-6">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <Check 
                              className="size-4 mt-0.5 flex-shrink-0 text-primary"
                            />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="col-span-1 md:mt-auto lg:mt-0">
                      <button
                        onClick={() => handleCTAClick(plan)}
                        className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 ${
                          plan.isPopular
                            ? 'bg-primary text-primary-foreground shadow-lg'
                            : 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                        }`}
                        aria-label={`${plan.ctaText} for ${plan.name} plan`}
                      >
                        {plan.ctaAction === 'contact' && <Phone className="size-4" />}
                        {plan.ctaText}
                        {plan.ctaAction !== 'contact' && <ArrowRight className="size-4" />}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-8 text-center text-sm text-muted-foreground">
              <p>All plans include 14-day free trial • No setup fees • Cancel anytime</p>
              <p className="mt-1">
                Need a custom solution? {" "}
                <button 
                  className="font-medium hover:underline text-primary"
                  onClick={() => trackEvent("pricing_custom_solution_click", { industry })}
                >
                  Contact our enterprise team
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

