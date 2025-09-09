"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRestaurantAnalytics } from "@/lib/hooks/restaurant-pages";
import type { IndustryType, RoleType } from "@/types/restaurant-pages";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface RestaurantIntegration {
  id: number;
  icon: string;
  title: string;
  description: string;
  category: 'pos' | 'inventory' | 'payroll' | 'accounting' | 'delivery';
  benefits: string[];
}

interface IntegrationGridProps {
  title?: string;
  subtitle?: string;
  integrations?: RestaurantIntegration[];
  industry?: IndustryType | 'general';
  role?: RoleType | 'general';
  className?: string;
}

const defaultRestaurantIntegrations: RestaurantIntegration[] = [
  {
    id: 1,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/square/square-original.svg",
    title: "Square POS",
    description: "Sync sales data with task scheduling and staff performance tracking.",
    category: 'pos',
    benefits: ["Real-time sales integration", "Staff performance correlation", "Revenue-based scheduling"]
  },
  {
    id: 2,
    icon: "https://seeklogo.com/images/T/toast-logo-F1CE12DE99-seeklogo.com.png",
    title: "Toast POS",
    description: "Connect kitchen orders with prep tasks and compliance monitoring.",
    category: 'pos',
    benefits: ["Kitchen workflow sync", "Order accuracy tracking", "Peak time optimization"]
  },
  {
    id: 3,
    icon: "https://images.ctfassets.net/4cd45et68cgf/5vAkCpBm6j7bV8gXqS4fBn/76e43bcfe6f6e7b9c0e3d7d8e3c7bdaa/QuickBooks_Logo_Horizontal_Blue_RGB.png",
    title: "QuickBooks",
    description: "Automate labor cost reporting and HACCP compliance documentation.",
    category: 'accounting',
    benefits: ["Labor cost automation", "Compliance reporting", "P&L integration"]
  },
  {
    id: 4,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Slack_Technologies_Logo.svg/512px-Slack_Technologies_Logo.svg.png",
    title: "Slack",
    description: "Send HACCP alerts, task notifications, and shift updates to teams.",
    category: 'payroll',
    benefits: ["Instant HACCP alerts", "Team communication", "Shift coordination"]
  },
  {
    id: 5,
    icon: "https://logo.clearbit.com/doordash.com",
    title: "DoorDash",
    description: "Monitor delivery preparation times and kitchen coordination.",
    category: 'delivery',
    benefits: ["Prep time optimization", "Kitchen coordination", "Quality control"]
  },
  {
    id: 6,
    icon: "https://logo.clearbit.com/ubereats.com",
    title: "Uber Eats",
    description: "Track order fulfillment efficiency and staff performance metrics.",
    category: 'delivery',
    benefits: ["Fulfillment tracking", "Staff efficiency", "Peak hour management"]
  }
];

export function IntegrationGrid({
  title = "Restaurant Operations Integrations",
  subtitle = "Connect OpsFlow with your existing restaurant technology stack for seamless operations management.",
  integrations = defaultRestaurantIntegrations,
  industry = 'restaurants',
  role = 'general',
  className
}: IntegrationGridProps) {
  const { trackInteraction } = useRestaurantAnalytics();

  const handleIntegrationClick = (integration: RestaurantIntegration) => {
    trackInteraction('integration_click', {
      integration: integration.title,
      category: integration.category,
      industry,
      role
    });
  };

  const handleViewAllClick = () => {
    trackInteraction('view_all_integrations', { industry, role });
  };

  const getCategoryColor = (category: RestaurantIntegration['category']) => {
    const colors = {
      pos: 'bg-orange-50 border-orange-200 text-orange-700 dark:bg-orange-950/30 dark:border-orange-800 dark:text-orange-300',
      inventory: 'bg-blue-50 border-blue-200 text-blue-700 dark:bg-blue-950/30 dark:border-blue-800 dark:text-blue-300',
      payroll: 'bg-green-50 border-green-200 text-green-700 dark:bg-green-950/30 dark:border-green-800 dark:text-green-300',
      accounting: 'bg-purple-50 border-purple-200 text-purple-700 dark:bg-purple-950/30 dark:border-purple-800 dark:text-purple-300',
      delivery: 'bg-amber-50 border-amber-200 text-amber-700 dark:bg-amber-950/30 dark:border-amber-800 dark:text-amber-300'
    };
    return colors[category];
  };

  return (
    <section className={cn("py-24 bg-gray-50/50 dark:bg-gray-900/50", className)}>
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-display-md text-gray-900 dark:text-gray-100 mb-4">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {integrations.map((integration) => (
            <Card 
              key={integration.id}
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm"
              onClick={() => handleIntegrationClick(integration)}
            >
              <CardHeader className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="relative w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={integration.icon}
                      alt={`${integration.title} integration`}
                      fill
                      sizes="64px"
                      className="p-4 object-contain"
                    />
                  </div>
                </div>
                
                <div>
                  <CardTitle className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-orange-600 transition-colors">
                    {integration.title}
                  </CardTitle>
                  <div className={cn(
                    "inline-block px-3 py-1 rounded-full text-xs font-medium mt-2 capitalize",
                    getCategoryColor(integration.category)
                  )}>
                    {integration.category === 'pos' ? 'Point of Sale' : integration.category}
                  </div>
                </div>
                
                <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                  {integration.description}
                </CardDescription>

                <div className="space-y-2 pt-4">
                  {integration.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            onClick={handleViewAllClick}
            className="px-8 py-6 text-lg font-semibold bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-white hover:border-gray-300 transition-all duration-200"
          >
            View All Integrations
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Over 50+ restaurant technology integrations available
          </p>
        </div>
      </div>
    </section>
  );
}