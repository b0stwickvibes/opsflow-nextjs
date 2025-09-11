"use client";

import { CheckCircle2, Zap, Shield, Crown } from "lucide-react";
import { useState } from "react";
import { useRestaurantAnalytics } from "@/lib/hooks/restaurant-pages";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface PricingComparisonProps {
  industry?: "restaurants" | "bars" | "coffee" | "hotels";
  defaultBilling?: "monthly" | "yearly";
}

export function PricingComparison({ 
  industry = "restaurants",
  defaultBilling = "monthly" 
}: PricingComparisonProps) {
  const [isMonthly, setIsMonthly] = useState(defaultBilling === "monthly");
  const { trackEvent } = useRestaurantAnalytics();

  const industryConfig = {
    restaurants: {
      title: "Simple pricing for restaurants of all sizes",
      subtitle: "Start free, scale as you grow",
      color: "oklch(0.70 0.15 25)",
      plans: {
        starter: {
          name: "Restaurant Starter",
          description: "Perfect for single location restaurants",
          monthlyPrice: 99,
          yearlyPrice: 79,
          yearlyDiscount: "20% off",
          features: [
            "Up to 50 staff members",
            "HACCP compliance monitoring",
            "Basic task management", 
            "Temperature logging",
            "Mobile app access",
            "Email support",
            "Basic reporting"
          ]
        },
        professional: {
          name: "Restaurant Pro",
          description: "For growing restaurant operations",
          monthlyPrice: 299,
          yearlyPrice: 239,
          yearlyDiscount: "20% off",
          popular: true,
          features: [
            "Up to 5 locations",
            "Up to 200 staff members",
            "Advanced HACCP compliance",
            "Multi-location reporting",
            "Inventory tracking",
            "Staff scheduling",
            "Priority support",
            "Custom workflows"
          ]
        },
        enterprise: {
          name: "Restaurant Enterprise",
          description: "For large restaurant chains",
          monthlyPrice: "Custom",
          yearlyPrice: "Custom",
          features: [
            "Unlimited locations",
            "Unlimited staff members",
            "Custom HACCP protocols",
            "Advanced analytics",
            "API integrations",
            "24/7 dedicated support",
            "Custom training",
            "SLA guarantees"
          ]
        }
      }
    },
    bars: {
      title: "Flexible pricing for bar operations",
      subtitle: "From single bars to entertainment groups",
      color: "oklch(0.60 0.20 270)",
      plans: {
        starter: {
          name: "Bar Starter",
          description: "Essential tools for single bars",
          monthlyPrice: 89,
          yearlyPrice: 71,
          yearlyDiscount: "20% off",
          features: [
            "Up to 30 staff members",
            "Alcohol compliance tracking",
            "Basic inventory management",
            "Task management",
            "Mobile app access",
            "Email support"
          ]
        },
        professional: {
          name: "Bar Pro",
          description: "For bar groups and venues",
          monthlyPrice: 249,
          yearlyPrice: 199,
          yearlyDiscount: "20% off", 
          popular: true,
          features: [
            "Up to 5 locations",
            "Up to 150 staff members",
            "Advanced inventory tracking",
            "Multi-location reporting",
            "Staff scheduling",
            "Event management",
            "Priority support"
          ]
        },
        enterprise: {
          name: "Bar Enterprise",
          description: "For large hospitality groups",
          monthlyPrice: "Custom",
          yearlyPrice: "Custom",
          features: [
            "Unlimited locations",
            "Custom compliance protocols",
            "Advanced analytics",
            "API integrations",
            "24/7 support"
          ]
        }
      }
    },
    coffee: {
      title: "Coffee shop pricing that scales",
      subtitle: "From single cafes to coffee chains",
      color: "oklch(0.65 0.18 80)",
      plans: {
        starter: {
          name: "Cafe Starter", 
          description: "Perfect for single coffee shops",
          monthlyPrice: 79,
          yearlyPrice: 63,
          yearlyDiscount: "20% off",
          features: [
            "Up to 25 staff members",
            "Equipment monitoring",
            "Quality control tracking",
            "Basic task management",
            "Mobile app access",
            "Email support"
          ]
        },
        professional: {
          name: "Cafe Pro",
          description: "For growing coffee operations",
          monthlyPrice: 199,
          yearlyPrice: 159,
          yearlyDiscount: "20% off",
          popular: true,
          features: [
            "Up to 5 locations",
            "Up to 100 staff members",
            "Advanced equipment monitoring", 
            "Multi-location reporting",
            "Inventory tracking",
            "Recipe management",
            "Priority support"
          ]
        },
        enterprise: {
          name: "Coffee Enterprise",
          description: "For large coffee chains",
          monthlyPrice: "Custom",
          yearlyPrice: "Custom", 
          features: [
            "Unlimited locations",
            "Custom quality protocols",
            "Advanced analytics",
            "API integrations",
            "24/7 support"
          ]
        }
      }
    },
    hotels: {
      title: "Hotel operations pricing",
      subtitle: "Comprehensive solutions for hospitality",
      color: "oklch(0.55 0.15 210)",
      plans: {
        starter: {
          name: "Hotel Starter",
          description: "For boutique hotels",
          monthlyPrice: 199,
          yearlyPrice: 159,
          yearlyDiscount: "20% off",
          features: [
            "Up to 75 staff members",
            "Guest satisfaction tracking",
            "Housekeeping coordination",
            "Maintenance scheduling",
            "Mobile app access",
            "Email support"
          ]
        },
        professional: {
          name: "Hotel Pro",
          description: "For hotel groups", 
          monthlyPrice: 499,
          yearlyPrice: 399,
          yearlyDiscount: "20% off",
          popular: true,
          features: [
            "Up to 5 properties",
            "Up to 300 staff members",
            "Advanced guest services",
            "Multi-property reporting",
            "Department coordination",
            "Guest feedback system",
            "Priority support"
          ]
        },
        enterprise: {
          name: "Hotel Enterprise",
          description: "For hospitality enterprises",
          monthlyPrice: "Custom",
          yearlyPrice: "Custom",
          features: [
            "Unlimited properties",
            "Custom service protocols", 
            "Advanced analytics",
            "API integrations",
            "24/7 support"
          ]
        }
      }
    }
  };

  const config = industryConfig[industry];

  const handlePlanClick = (planKey: string, planName: string, price: string | number) => {
    trackEvent("pricing_plan_click", {
      plan_key: planKey,
      plan_name: planName,
      price: price.toString(),
      billing: isMonthly ? "monthly" : "yearly",
      industry
    });

    if (planKey === "enterprise") {
      window.location.href = `/contact-sales?plan=enterprise&industry=${industry}`;
    } else {
      window.location.href = `/start-trial?plan=${planKey}&industry=${industry}&billing=${isMonthly ? 'monthly' : 'yearly'}`;
    }
  };

  const handleBillingChange = (value: string) => {
    setIsMonthly(value === "monthly");
    trackEvent("pricing_billing_toggle", {
      billing: value,
      industry
    });
  };

  return (
    <section className="bg-muted/50 py-32">
      <div className="container">
        <div className="flex flex-col items-center gap-6">
          <Badge variant="outline" className="border-2 border-primary text-primary">
            Pricing
          </Badge>
          <h1 className="text-display-2xl enterprise-headline text-center  font-semibold text-balance sm: lg:text-7xl">
            {config.title}
          </h1>
          <p className="enterprise-body text-center  text-muted-foreground max-w-2xl">
            {config.subtitle}
          </p>
          
          <Tabs
            value={isMonthly ? "monthly" : "yearly"}
            onValueChange={handleBillingChange}
            className="w-80"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="monthly">Billed Monthly</TabsTrigger>
              <TabsTrigger value="yearly">
                Billed Yearly
                <Badge className="ml-2 bg-green-100 text-green-700 text-xs">Save 20%</Badge>
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="mx-auto mt-4 grid w-full max-w-6xl gap-6 lg:grid-cols-3">
            {/* Starter Plan */}
            <div className="w-full rounded-lg border bg-background p-8 shadow-sm">
              <div className="flex flex-col gap-1">
                <h3 className="enterprise-body  font-semibold">{config.plans.starter.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {config.plans.starter.description}
                </p>
              </div>
              <Separator className="my-6" />
              
              <div className="flex items-center gap-2">
                <div className="flex items-start font-semibold">
                  <p className="enterprise-body ">$</p>
                  <p className="enterprise-headline  leading-none">
                    {isMonthly ? config.plans.starter.monthlyPrice : config.plans.starter.yearlyPrice}
                  </p>
                </div>
                {!isMonthly && (
                  <div className="flex flex-col text-sm">
                    <p className="font-semibold text-green-700">{config.plans.starter.yearlyDiscount}</p>
                    <p className="text-muted-foreground line-through">${config.plans.starter.monthlyPrice}</p>
                  </div>
                )}
              </div>
              <p className="text-sm text-muted-foreground">
                per month, billed {isMonthly ? "monthly" : "yearly"}
              </p>
              
              <Button 
                variant="outline" 
                className="mt-4 mb-2 w-full hover:scale-105 transition-transform border-primary text-primary"
                onClick={() => handlePlanClick("starter", config.plans.starter.name, config.plans.starter.monthlyPrice)}
              >
                Start Free Trial
              </Button>
              <p className="text-center text-sm text-muted-foreground">
                14-day free trial • No credit card required
              </p>
              
              <Separator className="my-6" />
              <div>
                <p className="mb-3 text-sm font-semibold">Key features:</p>
                <ul className="flex flex-col gap-2">
                  {config.plans.starter.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                      <p className="text-sm">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Professional Plan - Popular */}
            <div className="w-full rounded-lg border-2 bg-background p-8 shadow-lg relative border-primary">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="flex items-center gap-1 px-3 py-1 bg-primary text-primary-foreground">
                  <Crown className="size-3" />
                  Most Popular
                </Badge>
              </div>
              
              <div className="flex flex-col gap-1">
                <h3 className="enterprise-body  font-semibold">{config.plans.professional.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {config.plans.professional.description}
                </p>
              </div>
              <Separator className="my-6" />
              
              <div className="flex items-center gap-2">
                <div className="flex items-start font-semibold">
                  <p className="enterprise-body ">$</p>
                  <p className="enterprise-headline  leading-none">
                    {isMonthly ? config.plans.professional.monthlyPrice : config.plans.professional.yearlyPrice}
                  </p>
                </div>
                {!isMonthly && (
                  <div className="flex flex-col text-sm">
                    <p className="font-semibold text-green-700">{config.plans.professional.yearlyDiscount}</p>
                    <p className="text-muted-foreground line-through">${config.plans.professional.monthlyPrice}</p>
                  </div>
                )}
              </div>
              <p className="text-sm text-muted-foreground">
                per month, billed {isMonthly ? "monthly" : "yearly"}
              </p>
              
              <Button 
                className="mt-4 mb-2 w-full hover:scale-105 transition-transform bg-primary text-primary-foreground"
                onClick={() => handlePlanClick("professional", config.plans.professional.name, config.plans.professional.monthlyPrice)}
              >
                Start Free Trial
              </Button>
              <p className="text-center text-sm text-muted-foreground">
                14-day free trial • No credit card required
              </p>
              
              <Separator className="my-6" />
              <div>
                <p className="mb-3 text-sm font-semibold">Key features:</p>
                <ul className="flex flex-col gap-2">
                  {config.plans.professional.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0" style={{ color: config.color }} />
                      <p className="text-sm">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="w-full rounded-lg border bg-background p-8 shadow-sm">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <h3 className="enterprise-body  font-semibold">{config.plans.enterprise.name}</h3>
                  <Shield className="size-5 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">
                  {config.plans.enterprise.description}
                </p>
              </div>
              <Separator className="my-6" />
              
              <div className="flex items-start font-semibold">
                <p className="enterprise-headline  leading-none">Custom</p>
              </div>
              <p className="text-sm text-muted-foreground">
                Tailored pricing for your needs
              </p>
              
              <Button 
                variant="outline" 
                className="mt-4 mb-2 w-full hover:scale-105 transition-transform border-primary text-primary"
                onClick={() => handlePlanClick("enterprise", config.plans.enterprise.name, "custom")}
              >
                Contact Sales
              </Button>
              <p className="text-center text-sm text-muted-foreground">
                Custom demo & consultation
              </p>
              
              <Separator className="my-6" />
              <div>
                <p className="mb-3 text-sm font-semibold">Key features:</p>
                <ul className="flex flex-col gap-2">
                  {config.plans.enterprise.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0" style={{ color: config.color }} />
                      <p className="text-sm">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center space-y-4">
            <p className="text-sm text-muted-foreground">
              All plans include free onboarding, training, and migration support
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="size-4 text-primary" />
                No setup fees
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="size-4 text-primary" />
                Cancel anytime
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="size-4 text-primary" />
                24/7 support available
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

