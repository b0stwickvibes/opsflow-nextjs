"use client";

import { motion } from "framer-motion";
import {
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import React, { useRef } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useRestaurantAnalytics } from "@/lib/hooks/restaurant-pages";
import type { IndustryType, RoleType } from "@/types/restaurant-pages";
import Image from "next/image";

interface RestaurantIntegration {
  title: string;
  src: string;
  href: string;
  category: 'pos' | 'inventory' | 'payroll' | 'accounting' | 'delivery' | 'scheduling';
  description: string;
  benefits: string[];
  icon: React.ReactNode;
}

interface IntegrationShowcaseProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  integrations?: RestaurantIntegration[];
  industry?: IndustryType | 'general';
  role?: RoleType | 'general';
  className?: string;
}

const defaultRestaurantIntegrations: RestaurantIntegration[] = [
  {
    title: "Toast POS",
    src: "https://seeklogo.com/images/T/toast-logo-F1CE12DE99-seeklogo.com.png",
    href: "#toast",
    category: 'pos',
    description: "Sync kitchen orders with prep tasks and compliance monitoring",
    benefits: ["Kitchen workflow sync", "Order accuracy tracking", "Peak time optimization"],
    icon: (
      <Image
        src="https://seeklogo.com/images/T/toast-logo-F1CE12DE99-seeklogo.com.png"
        alt="Toast POS"
        width={32}
        height={32}
        className="h-8 w-8 object-contain"
      />
    ),
  },
  {
    title: "Square POS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/square/square-original.svg",
    href: "#square",
    category: 'pos',
    description: "Real-time sales data integration with staff scheduling",
    benefits: ["Sales-driven scheduling", "Staff performance tracking", "Revenue correlation"],
    icon: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/square/square-original.svg"
        alt="Square POS"
        width={32}
        height={32}
        className="h-8 w-8 object-contain"
      />
    ),
  },
  {
    title: "QuickBooks",
    src: "https://images.ctfassets.net/4cd45et68cgf/5vAkCpBm6j7bV8gXqS4fBn/76e43bcfe6f6e7b9c0e3d7d8e3c7bdaa/QuickBooks_Logo_Horizontal_Blue_RGB.png",
    href: "#quickbooks",
    category: 'accounting',
    description: "Automate labor cost reporting and compliance documentation",
    benefits: ["Labor cost automation", "P&L integration", "HACCP reporting"],
    icon: (
      <Image
        src="https://images.ctfassets.net/4cd45et68cgf/5vAkCpBm6j7bV8gXqS4fBn/76e43bcfe6f6e7b9c0e3d7d8e3c7bdaa/QuickBooks_Logo_Horizontal_Blue_RGB.png"
        alt="QuickBooks"
        width={32}
        height={32}
        className="h-8 w-8 object-contain"
      />
    ),
  },
  {
    title: "DoorDash",
    src: "https://logo.clearbit.com/doordash.com",
    href: "#doordash",
    category: 'delivery',
    description: "Monitor delivery prep times and kitchen coordination",
    benefits: ["Prep time tracking", "Kitchen efficiency", "Quality control"],
    icon: (
      <Image
        src="https://logo.clearbit.com/doordash.com"
        alt="DoorDash"
        width={32}
        height={32}
        className="h-8 w-8 object-contain"
      />
    ),
  },
  {
    title: "BevSpot",
    src: "https://www.bevspot.com/wp-content/uploads/2019/08/BevSpot_Logo_RGB_Color.png",
    href: "#bevspot",
    category: 'inventory',
    description: "Sync inventory levels with task assignments and ordering",
    benefits: ["Automated ordering", "Waste reduction", "Cost optimization"],
    icon: (
      <Image
        src="https://www.bevspot.com/wp-content/uploads/2019/08/BevSpot_Logo_RGB_Color.png"
        alt="BevSpot"
        width={32}
        height={32}
        className="h-8 w-8 object-contain"
      />
    ),
  },
  {
    title: "ADP Workforce",
    src: "https://logos-world.net/wp-content/uploads/2021/02/ADP-Logo.png",
    href: "#adp",
    category: 'payroll',
    description: "Connect payroll data with scheduling and performance metrics",
    benefits: ["Labor cost control", "Compliance tracking", "Performance correlation"],
    icon: (
      <Image
        src="https://logos-world.net/wp-content/uploads/2021/02/ADP-Logo.png"
        alt="ADP Workforce"
        width={32}
        height={32}
        className="h-8 w-8 object-contain"
      />
    ),
  },
  {
    title: "Uber Eats",
    src: "https://logo.clearbit.com/ubereats.com",
    href: "#ubereats",
    category: 'delivery',
    description: "Track order fulfillment efficiency and staff performance",
    benefits: ["Fulfillment tracking", "Staff efficiency", "Peak hour management"],
    icon: (
      <Image
        src="https://logo.clearbit.com/ubereats.com"
        alt="Uber Eats"
        width={32}
        height={32}
        className="h-8 w-8 object-contain"
      />
    ),
  },
  {
    title: "Grubhub",
    src: "https://logo.clearbit.com/grubhub.com",
    href: "#grubhub",
    category: 'delivery',
    description: "Optimize delivery operations with real-time task management",
    benefits: ["Delivery optimization", "Order coordination", "Performance tracking"],
    icon: (
      <Image
        src="https://logo.clearbit.com/grubhub.com"
        alt="Grubhub"
        width={32}
        height={32}
        className="h-8 w-8 object-contain"
      />
    ),
  },
  {
    title: "Clover POS",
    src: "https://www.clover.com/assets/images/public-site/press/Clover_Logo_Primary_Gray_RGB.png",
    href: "#clover",
    category: 'pos',
    description: "Comprehensive POS integration for complete operations visibility",
    benefits: ["Complete visibility", "Multi-location sync", "Advanced reporting"],
    icon: (
      <Image
        src="https://www.clover.com/assets/images/public-site/press/Clover_Logo_Primary_Gray_RGB.png"
        alt="Clover POS"
        width={32}
        height={32}
        className="h-8 w-8 object-contain"
      />
    ),
  },
];

export function IntegrationShowcase({
  title = "Restaurant Technology Integrations",
  subtitle = "Connect OpsFlow with your existing restaurant technology stack for seamless operations management and enhanced visibility.",
  ctaText = "Start Integration Setup",
  integrations = defaultRestaurantIntegrations,
  industry = 'restaurants',
  role = 'general',
  className
}: IntegrationShowcaseProps) {
  const { trackInteraction } = useRestaurantAnalytics();

  const handleCtaClick = () => {
    trackInteraction('integration_cta_click', { 
      section: 'integration_showcase',
      industry,
      role
    });
  };

  return (
    <section className={cn("overflow-hidden py-32 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20", className)}>
      <div className="container flex w-full flex-col items-center justify-center px-4">
        <div className="bg-orange-100 dark:bg-orange-900/30 mb-4 rounded-full px-4 py-2 text-xs uppercase font-semibold text-orange-700 dark:text-orange-300 tracking-wider">
          RESTAURANT INTEGRATIONS
        </div>
        <h2 className="relative py-2 text-center font-sans text-5xl font-semibold tracking-tighter lg:text-6xl text-gray-900 dark:text-gray-100">
          {title}
        </h2>
        <p className="text-xl text-muted-foreground mx-auto mt-6 max-w-3xl px-5 text-center lg:text-xl">
          {subtitle}
        </p>

        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-4xl container relative my-20 w-fit border border-orange-200/50 dark:border-orange-800/50 shadow-xl">
          <DockIntegrations
            integrations={integrations}
            className="hidden md:flex"
            industry={industry}
            role={role}
          />
          <div className="flex flex-wrap items-center justify-center gap-4 py-8 px-6 md:hidden">
            {integrations.map((integration) => (
              <IntegrationCard
                key={integration.title}
                integration={integration}
                industry={industry}
                role={role}
              />
            ))}
          </div>
        </div>
        
        <div className="text-center space-y-4">
          <Button 
            className="h-12 rounded-xl px-8 bg-orange-600 hover:bg-orange-700 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200"
            onClick={handleCtaClick}
          >
            {ctaText}
          </Button>
          <p className="text-sm text-muted-foreground">
            Over 50+ restaurant technology integrations available
          </p>
        </div>
      </div>
    </section>
  );
}

const IntegrationCard = ({ 
  integration, 
  industry, 
  role 
}: { 
  integration: RestaurantIntegration; 
  industry: IndustryType | 'general'; 
  role: RoleType | 'general'; 
}) => {
  const { trackInteraction } = useRestaurantAnalytics();

  const handleClick = () => {
    trackInteraction('integration_mobile_click', {
      integration: integration.title,
      category: integration.category,
      industry,
      role
    });
  };

  return (
    <div
      className="group cursor-pointer transition-transform hover:scale-105"
      onClick={handleClick}
    >
      <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md border border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-center mb-3">
          <div className="w-12 h-12 rounded-lg bg-gray-50 dark:bg-gray-700 flex items-center justify-center">
            {integration.icon}
          </div>
        </div>
        <h4 className="text-sm font-semibold text-center text-gray-900 dark:text-gray-100">
          {integration.title}
        </h4>
        <p className="text-xs text-muted-foreground text-center mt-1 capitalize">
          {integration.category === 'pos' ? 'Point of Sale' : integration.category}
        </p>
      </div>
    </div>
  );
};

const DockIntegrations = ({
  integrations,
  className,
  industry,
  role,
}: {
  integrations: RestaurantIntegration[];
  className?: string;
  industry: IndustryType | 'general';
  role: RoleType | 'general';
}) => {
  const mouseX = useMotionValue(Infinity);
  return (
    <div
      className={cn("flex items-end gap-2 px-6 py-6", className)}
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
    >
      {integrations.map((integration) => (
        <DockIcon
          key={integration.title}
          integration={integration}
          mouseX={mouseX}
          industry={industry}
          role={role}
        />
      ))}
    </div>
  );
};

const DockIcon = ({
  integration,
  mouseX,
  industry,
  role,
}: {
  integration: RestaurantIntegration;
  mouseX: MotionValue<number>;
  industry: IndustryType | 'general';
  role: RoleType | 'general';
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { trackInteraction } = useRestaurantAnalytics();
  
  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });
  
  const width = useSpring(
    useTransform(distance, [-100, 0, 100], [64, 85, 64]),
    {
      mass: 0.1,
      stiffness: 150,
      damping: 12,
    },
  );
  
  const height = useSpring(
    useTransform(distance, [-100, 0, 100], [64, 94, 64]),
    {
      mass: 0.1,
      stiffness: 150,
      damping: 12,
    },
  );

  const y = useSpring(useTransform(distance, [-150, 0, 150], [0, -12, 0]), {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const handleClick = () => {
    trackInteraction('integration_dock_click', {
      integration: integration.title,
      category: integration.category,
      industry,
      role
    });
  };

  return (
    <div
      ref={ref}
      className="relative flex h-16 w-16 flex-col items-center justify-end group"
    >
      <motion.div
        style={{ width, height, y, transformOrigin: "bottom center" }}
        className="absolute bottom-0 flex items-center justify-center rounded-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50 shadow-lg hover:shadow-xl transition-shadow"
      >
        <button
          onClick={handleClick}
          className="h-full w-full rounded-xl p-2"
          title={`${integration.title} - ${integration.description}`}
        >
          {integration.icon}
        </button>
      </motion.div>
      
      {/* Tooltip */}
      <div className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
        <div className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap shadow-lg">
          <div className="font-semibold">{integration.title}</div>
          <div className="text-xs opacity-80 capitalize">
            {integration.category === 'pos' ? 'Point of Sale' : integration.category}
          </div>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-gray-100"></div>
        </div>
      </div>
    </div>
  );
};