"use client";

import Image from "next/image";
import { Cable, CheckCircle, ArrowRight, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRestaurantAnalytics } from "@/lib/hooks/restaurant-pages";
import type { IndustryType, RoleType } from "@/types/restaurant-pages";
import { cn } from "@/lib/utils";

interface RestaurantPartnership {
  name: string;
  logo: string;
  description: string;
  category: 'pos' | 'inventory' | 'delivery' | 'payroll' | 'accounting' | 'scheduling';
  benefits: string[];
  connectionType: 'real-time' | 'batch' | 'webhook';
  setupTime: string;
}

interface IntegrationPartnersProps {
  title?: string;
  subtitle?: string;
  description?: string;
  partnerships?: RestaurantPartnership[];
  industry?: IndustryType | 'general';
  role?: RoleType | 'general';
  className?: string;
}

const defaultRestaurantPartnerships: RestaurantPartnership[] = [
  {
    name: "Toast POS",
    logo: "https://seeklogo.com/images/T/toast-logo-F1CE12DE99-seeklogo.com.png",
    description: "Premier restaurant POS system with comprehensive kitchen and front-of-house management",
    category: 'pos',
    benefits: [
      "Real-time order synchronization with task management",
      "Kitchen display system integration for prep coordination", 
      "Staff performance tracking linked to order accuracy",
      "Automated HACCP compliance documentation"
    ],
    connectionType: 'real-time',
    setupTime: '15 minutes'
  },
  {
    name: "Square Restaurant POS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/square/square-original.svg",
    description: "Complete restaurant management solution with advanced analytics and reporting",
    category: 'pos',
    benefits: [
      "Sales data integration for optimal staff scheduling",
      "Multi-location inventory and task synchronization",
      "Customer behavior insights for service optimization",
      "Revenue-driven task prioritization"
    ],
    connectionType: 'real-time',
    setupTime: '10 minutes'
  }
];

const restaurantBenefits = [
  {
    icon: <Zap className="w-6 h-6 text-orange-600" />,
    title: "Real-Time Data Sync",
    description: "Instant synchronization of orders, inventory, and staff performance across all systems"
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
    title: "Operational Intelligence",
    description: "Advanced analytics combining POS, scheduling, and compliance data for actionable insights"
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-green-600" />,
    title: "HACCP Compliance",
    description: "Automated food safety compliance documentation and real-time temperature monitoring"
  }
];

export function IntegrationPartners({
  title = "Restaurant Technology Partners",
  subtitle = "Seamless Restaurant Operations Connectivity",
  description = "OpsFlow integrates with your existing restaurant technology stack to provide unified operations management. Whether you're running a single location or managing multiple venues, our platform ensures all your systems work together seamlessly.",
  partnerships = defaultRestaurantPartnerships,
  industry = 'restaurants',
  role = 'general',
  className
}: IntegrationPartnersProps) {
  const { trackInteraction } = useRestaurantAnalytics();

  const handlePartnershipClick = (partnership: RestaurantPartnership) => {
    trackInteraction('partnership_click', {
      partner: partnership.name,
      category: partnership.category,
      industry,
      role
    });
  };

  const handleExploreClick = () => {
    trackInteraction('explore_integrations_click', { 
      section: 'integration_partners',
      industry, 
      role 
    });
  };

  const getCategoryColor = (category: RestaurantPartnership['category']) => {
    const colors = {
      pos: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
      inventory: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
      delivery: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300',
      payroll: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
      accounting: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
      scheduling: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300'
    };
    return colors[category];
  };

  const getConnectionIcon = (type: RestaurantPartnership['connectionType']) => {
    switch (type) {
      case 'real-time':
        return <Zap className="w-4 h-4 text-green-600" />;
      case 'webhook':
        return <Cable className="w-4 h-4 text-blue-600" />;
      default:
        return <TrendingUp className="w-4 h-4 text-orange-600" />;
    }
  };

  return (
    <section className={cn("py-32 bg-gradient-to-br from-gray-50 to-orange-50/30 dark:from-gray-900 dark:to-orange-950/20", className)}>
      <div className="container relative z-10 flex flex-col items-center gap-12">
        {/* Header */}
        <div className="text-center max-w-4xl">
          <div className="bg-orange-100 dark:bg-orange-900/30 mb-4 inline-block rounded-full px-4 py-2 text-xs uppercase font-semibold text-orange-700 dark:text-orange-300 tracking-wider">
            RESTAURANT PARTNERSHIPS
          </div>
          <h1 className="text-display-md text-foreground dark:text-gray-100 mb-6 font-bold">
            {title}
          </h1>
          <h2 className="text-2xl font-semibold text-foreground dark:text-gray-300 mb-4">
            {subtitle}
          </h2>
          <p className="enterprise-body  text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        {/* Visual Connection Diagram */}
        <div className="relative my-8 flex flex-row gap-16 md:gap-24 lg:gap-32">
          {/* Connection Lines SVG */}
          <svg
            className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2"
            viewBox="0 0 300 80"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Grid pattern background */}
            <pattern
              id="restaurantGrid"
              width="15"
              height="15"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 15 0 L 0 0 0 15"
                fill="none"
                stroke="rgba(249,115,22,0.1)"
                strokeWidth="0.5"
              />
            </pattern>
            <rect width="300" height="80" fill="url(#restaurantGrid)" opacity="0.8" />

            {/* Connection line with gradient */}
            <defs>
              <linearGradient id="connectionGradient" x1="0" y1="0" x2="300" y2="0">
                <stop offset="0%" stopColor="rgb(249,115,22)" stopOpacity="0.3" />
                <stop offset="50%" stopColor="rgb(249,115,22)" stopOpacity="0.8" />
                <stop offset="100%" stopColor="rgb(249,115,22)" stopOpacity="0.3" />
              </linearGradient>
            </defs>

            <path
              d="M 60 40 L 240 40"
              stroke="url(#connectionGradient)"
              strokeWidth="2"
              fill="none"
            />

            {/* Connection nodes */}
            <circle cx="60" cy="40" r="4" fill="rgb(249,115,22)" fillOpacity="0.8" />
            <circle cx="120" cy="40" r="3" fill="rgb(249,115,22)" fillOpacity="0.6" />
            <circle cx="180" cy="40" r="3" fill="rgb(249,115,22)" fillOpacity="0.6" />
            <circle cx="240" cy="40" r="4" fill="rgb(249,115,22)" fillOpacity="0.8" />
          </svg>

          <div className="bg-card dark:bg-gray-800 relative mb-3 flex h-20 w-20 rounded-2xl border-2 border-orange-200 dark:border-orange-700 shadow-lg md:h-24 md:w-24">
            <Cable
              strokeWidth={1.5}
              className="m-auto h-8 w-8 md:h-10 md:w-10 text-orange-600"
            />
          </div>

          <div className="bg-card dark:bg-gray-800 relative mb-3 flex h-20 w-20 rounded-2xl border-2 border-orange-200 dark:border-orange-700 p-4 shadow-lg md:h-24 md:w-24 md:p-6">
            <Image 
              src="https://seeklogo.com/images/T/toast-logo-F1CE12DE99-seeklogo.com.png" 
              alt="Restaurant Integration" 
              className="object-contain"
             width={1200} height={800} />
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {restaurantBenefits.map((benefit, index) => (
            <Card key={index} className="text-center bg-card/80 dark:bg-gray-800/80 backdrop-blur-sm border-border/50 dark:border-gray-700/50">
              <CardHeader className="pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-muted dark:bg-gray-700">
                    {benefit.icon}
                  </div>
                </div>
                <CardTitle className="enterprise-body  text-foreground dark:text-gray-100">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partnerships Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {partnerships.map((partnership, index) => (
            <Card 
              key={index}
              className="group cursor-pointer hover:shadow-xl transition-all duration-300 bg-card/90 dark:bg-gray-800/90 backdrop-blur-sm border-border/50 dark:border-gray-700/50"
              onClick={() => handlePartnershipClick(partnership)}
            >
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-muted dark:bg-gray-700 flex items-center justify-center p-2">
                      <Image
                        src={partnership.logo}
                        alt={`${partnership.name} logo`}
                        className="max-w-full max-h-full object-contain"
                       width={1200} height={800} />
                    </div>
                    <div>
                      <CardTitle className="enterprise-body  font-bold text-foreground dark:text-gray-100 group-hover:text-orange-600 transition-colors">
                        {partnership.name}
                      </CardTitle>
                      <div className="flex items-center gap-3 mt-2">
                        <span className={cn(
                          "px-3 py-1 rounded-full text-xs font-medium capitalize",
                          getCategoryColor(partnership.category)
                        )}>
                          {partnership.category === 'pos' ? 'Point of Sale' : partnership.category}
                        </span>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          {getConnectionIcon(partnership.connectionType)}
                          <span className="capitalize">{partnership.connectionType}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-orange-600 transition-colors" />
                </div>
                <p className="text-muted-foreground text-sm">
                  {partnership.description}
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-foreground dark:text-gray-100 mb-3">
                    Integration Benefits:
                  </h4>
                  <ul className="space-y-2">
                    {partnership.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-border dark:border-gray-700">
                  <span className="text-xs text-muted-foreground">
                    Setup time: <span className="font-medium text-orange-600">{partnership.setupTime}</span>
                  </span>
                  <Button variant="outline" size="sm" className="text-orange-600 border-orange-200 hover:bg-orange-50 dark:border-orange-800 dark:hover:bg-orange-950">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="w-full max-w-4xl bg-gradient-to-r from-orange-600 to-amber-600 border-0 text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Connect Your Restaurant Technology Stack?
            </h3>
            <p className="enterprise-body text-orange-100 mb-6 ">
              Join over 2,000 restaurants already using OpsFlow to streamline their operations with seamless integrations.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-card text-orange-600 hover:bg-orange-50 font-semibold px-8"
              onClick={handleExploreClick}
            >
              Explore All Integrations
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </CardContent>
        </Card>

        {/* High-Quality Dashboard Preview */}
        <div className="aspect-video relative mt-12 w-[90%] md:w-[80%] max-w-5xl">
          <div className="h-full w-full rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 border border-border dark:border-gray-700 shadow-2xl overflow-hidden">
            <div className="p-6 h-full flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-orange-600 flex items-center justify-center">
                  <Cable className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-foreground dark:text-gray-100">
                  Unified Restaurant Operations Dashboard
                </h4>
                <p className="text-muted-foreground max-w-md">
                  Real-time view of all your restaurant integrations, from POS systems to delivery platforms, all in one comprehensive dashboard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};