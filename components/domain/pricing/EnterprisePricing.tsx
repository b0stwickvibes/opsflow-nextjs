"use client";

import {
  Building2,
  Shield,
  HeadphonesIcon,
  Plug,
  Database,
  Users,
  Crown,
  Star,
} from "lucide-react";
import { useRestaurantAnalytics } from "@/lib/hooks/restaurant-pages";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface EnterpriseAddon {
  icon: any;
  name: string;
  description: string;
  price: {
    unit: string;
    amount: string;
  };
  popular?: boolean;
}

interface EnterprisePricingProps {
  industry?: "restaurants" | "bars" | "coffee" | "hotels";
  customAddons?: EnterpriseAddon[];
}

export function EnterprisePricing({ 
  industry = "restaurants",
  customAddons 
}: EnterprisePricingProps) {
  const { trackEvent } = useRestaurantAnalytics();

  const industryConfig = {
    restaurants: {
      title: "Scale your restaurant operations with enterprise add-ons",
      subtitle: "Purpose-built solutions for multi-location restaurants and enterprise chains",
      color: "oklch(0.70 0.15 25)",
      addons: [
        {
          icon: Shield,
          name: "Advanced HACCP Compliance Suite",
          description: "Custom HACCP protocols, automated compliance reporting, and regulatory audit trails for enterprise restaurant chains.",
          price: {
            unit: "per location per month",
            amount: "$149",
          },
          popular: true,
        },
        {
          icon: Building2,
          name: "Multi-Brand Operations Hub",
          description: "Manage multiple restaurant brands, franchises, and concepts from a unified operations dashboard.",
          price: {
            unit: "per brand per month",
            amount: "$299",
          },
        },
        {
          icon: Users,
          name: "Advanced Staff Management",
          description: "Enterprise workforce management with advanced scheduling, labor optimization, and performance analytics.",
          price: {
            unit: "per 100 employees per month",
            amount: "$199",
          },
        },
        {
          icon: Database,
          name: "Real-Time Analytics Platform",
          description: "Advanced operational analytics, predictive insights, and custom reporting for data-driven restaurant management.",
          price: {
            unit: "per location per month",
            amount: "$99",
          },
        },
        {
          icon: Plug,
          name: "Enterprise API & Integrations",
          description: "Custom API access and dedicated integrations with POS systems, inventory management, and financial software.",
          price: {
            unit: "per integration per month",
            amount: "$399",
          },
        },
        {
          icon: HeadphonesIcon,
          name: "24/7 Dedicated Support",
          description: "Dedicated success manager, priority support, and custom training programs for your restaurant operations team.",
          price: {
            unit: "per month",
            amount: "$999",
          },
        },
      ]
    },
    bars: {
      title: "Enterprise bar operations at scale",
      subtitle: "Comprehensive solutions for bar groups and hospitality enterprises",
      color: "oklch(0.60 0.20 270)",
      addons: [
        {
          icon: Shield,
          name: "Advanced Alcohol Compliance",
          description: "Custom compliance protocols for alcohol service, automated reporting, and regulatory compliance across all locations.",
          price: {
            unit: "per location per month",
            amount: "$129",
          },
          popular: true,
        },
        {
          icon: Building2,
          name: "Multi-Venue Operations",
          description: "Unified management for bars, nightclubs, and entertainment venues with custom operational workflows.",
          price: {
            unit: "per venue type per month",
            amount: "$249",
          },
        },
        {
          icon: Database,
          name: "Advanced Inventory Analytics",
          description: "Predictive inventory management, waste reduction analytics, and automated ordering systems.",
          price: {
            unit: "per location per month",
            amount: "$89",
          },
        },
        {
icon: Plug,


          name: "POS & System Integrations",
          description: "Custom integrations with bar management systems, inventory platforms, and financial software.",
          price: {
            unit: "per integration per month",
            amount: "$299",
          },
        },
        {
          icon: Users,
          name: "Event Management Suite",
          description: "Advanced event coordination, staff scheduling for events, and customer experience management.",
          price: {
            unit: "per location per month",
            amount: "$179",
          },
        },
        {
          icon: HeadphonesIcon,
          name: "Premium Support Package",
          description: "24/7 support, dedicated account management, and priority response for critical operations.",
          price: {
            unit: "per month",
            amount: "$799",
          },
        },
      ]
    },
    coffee: {
      title: "Enterprise coffee operations solutions",
      subtitle: "Scalable solutions for coffee chains and multi-location cafes",
      color: "oklch(0.65 0.18 80)",
      addons: [
        {
          icon: Shield,
          name: "Quality Assurance Suite",
          description: "Advanced quality control protocols, brew consistency monitoring, and customer satisfaction tracking.",
          price: {
            unit: "per location per month",
            amount: "$99",
          },
          popular: true,
        },
        {
          icon: Building2,
          name: "Multi-Location Management",
          description: "Centralized operations for coffee chains with location-specific customization and reporting.",
          price: {
            unit: "per location per month",
            amount: "$149",
          },
        },
        {
          icon: Database,
          name: "Equipment Optimization Analytics",
          description: "Predictive maintenance, equipment performance analytics, and automated service scheduling.",
          price: {
            unit: "per location per month",
            amount: "$79",
          },
        },
        {
icon: Plug,

          name: "Supply Chain Integrations",
          description: "Custom integrations with suppliers, roasters, and inventory management systems.",
          price: {
            unit: "per integration per month",
            amount: "$199",
          },
        },
        {
          icon: Users,
          name: "Barista Training Platform",
          description: "Digital training modules, certification tracking, and performance management for barista teams.",
          price: {
            unit: "per 25 staff per month",
            amount: "$89",
          },
        },
        {
          icon: HeadphonesIcon,
          name: "Enterprise Support",
          description: "Dedicated support team, custom training, and priority response for coffee operations.",
          price: {
            unit: "per month",
            amount: "$599",
          },
        },
      ]
    },
    hotels: {
      title: "Enterprise hotel operations management",
      subtitle: "Comprehensive solutions for hotel groups and hospitality enterprises",
      color: "oklch(0.55 0.15 210)",
      addons: [
        {
          icon: Shield,
          name: "Guest Experience Optimization",
          description: "Advanced guest satisfaction tracking, service quality monitoring, and experience analytics.",
          price: {
            unit: "per property per month",
            amount: "$249",
          },
          popular: true,
        },
        {
          icon: Building2,
          name: "Multi-Property Operations",
          description: "Unified management for hotel portfolios with property-specific workflows and reporting.",
          price: {
            unit: "per property per month",
            amount: "$399",
          },
        },
        {
          icon: Users,
          name: "Department Coordination Suite",
          description: "Advanced coordination between housekeeping, maintenance, front desk, and guest services.",
          price: {
            unit: "per property per month",
            amount: "$199",
          },
        },
        {
          icon: Database,
          name: "Operational Intelligence Platform",
          description: "Predictive analytics for occupancy, staffing optimization, and operational efficiency metrics.",
          price: {
            unit: "per property per month",
            amount: "$149",
          },
        },
        {
icon: Plug,
          name: "Hotel System Integrations",
          description: "Custom integrations with PMS, booking systems, and hospitality management platforms.",
          price: {
            unit: "per integration per month",
            amount: "$499",
          },
        },
        {
          icon: HeadphonesIcon,
          name: "Hospitality Success Program",
          description: "Dedicated hospitality experts, 24/7 support, and custom implementation services.",
          price: {
            unit: "per month",
            amount: "$1,299",
          },
        },
      ]
    }
  };

  const config = industryConfig[industry];
  const addons = customAddons || config.addons;

  const handleAddonClick = (addon: EnterpriseAddon) => {
    trackEvent("enterprise_addon_click", {
      addon_name: addon.name,
      price: addon.price.amount,
      industry,
      popular: addon.popular || false
    });

    // Open contact sales form with addon pre-selected
    window.location.href = `/contact-sales?addon=${encodeURIComponent(addon.name)}&industry=${industry}`;
  };

  return (
    <section className="py-32">
      <div className="container">
        <div className="flex w-full flex-col items-center gap-4">
          <Badge 
            className="flex items-center gap-2 rounded-full border px-4 py-1.5"
            style={{ 
              borderColor: config.color,
              backgroundColor: `oklch(from ${config.color} l c h / 0.1)`,
              color: config.color
            }}
          >
            <Crown className="size-3" />
            <p className="text-sm leading-5 font-medium">
              Enterprise Add-ons
            </p>
          </Badge>
          
          <h2 className="max-w-full text-center text-3xl font-semibold md:max-w-[42.5rem] md:text-5xl">
            {config.title}
          </h2>
          
          <p className="text-center text-lg text-muted-foreground max-w-3xl">
            {config.subtitle}
          </p>

          <div className="flex w-full flex-col items-center gap-4 pt-10">
            {addons.map((addon, i) => (
              <div
                className={`grid w-full rounded-2xl border shadow-sm xl:grid-cols-[minmax(36.25rem,48.125rem)_1fr] relative ${
                  addon.popular ? 'border-2 shadow-lg' : 'border-muted'
                }`}
                style={addon.popular ? { borderColor: config.color } : {}}
                key={`addon-${i}`}
              >
                {addon.popular && (
                  <div 
                    className="absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-medium text-white flex items-center gap-1"
                    style={{ backgroundColor: config.color }}
                  >
                    <Star className="size-3" />
                    Most Popular
                  </div>
                )}

                <div className="flex w-full flex-col gap-4 p-6 md:flex-row">
                  <div className="relative flex size-12">
                    <div 
                      className="relative z-20 m-auto flex size-11 shrink-0 rounded-full"
                      style={{ backgroundColor: config.color }}
                    >
                      <addon.icon className="m-auto size-5 stroke-white" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-medium">{addon.name}</h3>
                    <p className="text-base text-muted-foreground">
                      {addon.description}
                    </p>
                  </div>
                </div>

                <div className="flex w-full flex-col items-center gap-2 p-6 md:flex-row">
                  <div className="flex w-full flex-wrap items-center gap-4 md:flex-nowrap">
                    <div className="text-lg font-semibold">
                      {addon.price.amount}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {addon.price.unit}
                    </div>
                  </div>
                  <Button
                    variant={addon.popular ? "default" : "outline"}
                    className="h-12 w-full px-4 md:max-w-[10.625rem] hover:scale-105 transition-transform"
                    onClick={() => handleAddonClick(addon)}
                    style={addon.popular 
                      ? { backgroundColor: config.color }
                      : { borderColor: config.color, color: config.color }
                    }
                    aria-label={`Get ${addon.name} add-on`}
                  >
                    Get Add-on
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center space-y-4">
            <h3 className="text-2xl font-semibold">
              Need a custom solution?
            </h3>
            <p className="text-muted-foreground max-w-2xl">
              Our enterprise team works with large {industry} operations to create 
              custom solutions that meet your specific operational requirements.
            </p>
            <Button 
              size="lg"
              onClick={() => {
                trackEvent("enterprise_custom_solution_click", { industry });
                window.location.href = `/contact-enterprise?industry=${industry}`;
              }}
              style={{ backgroundColor: config.color }}
              className="text-white hover:scale-105 transition-transform"
            >
              Discuss Custom Solutions
            </Button>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              All enterprise add-ons include dedicated implementation support and training
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <span>✓ Custom implementation</span>
              <span>✓ Dedicated support</span>
              <span>✓ SLA guarantees</span>
              <span>✓ Priority feature requests</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

