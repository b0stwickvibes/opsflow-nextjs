'use client';

import React, { useEffect, useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Puzzle, Check, Copy, ThermometerSnowflake, DollarSign, Clock, ShoppingCart, CreditCard, Utensils } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { registerComponentLayout } from '@/lib/style-system/layout-differentiation';
import { cn } from '@/lib/utils';

// Restaurant integration categories and examples
const integrations = [
  {
    name: 'POS Systems',
    icon: CreditCard,
    code: `// OpsFlow with Toast POS
    
import { createIntegration } from '@opsflow/integrations';

export const toastIntegration = createIntegration({
  provider: 'toast',
  apiKey: process.env.TOAST_API_KEY,
  config: {
    // Sync inventory levels
    syncInventory: true,
    // Monitor item sales for inventory depletion alerts
    salesTracking: true,
    // Sync employee data with scheduling
    staffSync: true
  }
});`,
  },
  {
    name: 'Inventory Systems',
    icon: ShoppingCart,
    code: `// OpsFlow with MarginEdge
    
import { createIntegration } from '@opsflow/integrations';

export const marginEdgeIntegration = createIntegration({
  provider: 'marginEdge',
  apiKey: process.env.MARGINEDGE_API_KEY,
  config: {
    // Sync real-time inventory levels
    inventorySync: true,
    // Import vendor orders automatically
    orderImport: true,
    // Connect with POS for sales data
    posIntegration: 'toast'
  }
});`,
  },
  {
    name: 'Temperature Sensors',
    icon: ThermometerSnowflake,
    code: `// OpsFlow with Bluetooth Temperature Sensors
    
import { setupSensors } from '@opsflow/compliance';

export const temperatureSensors = setupSensors({
  // Configure Bluetooth sensors
  sensors: [
    { id: 'walk-in-1', name: 'Walk-in Cooler', minTemp: 33, maxTemp: 39 },
    { id: 'freezer-1', name: 'Main Freezer', minTemp: -10, maxTemp: 0 },
    { id: 'prep-1', name: 'Prep Line', minTemp: 33, maxTemp: 41 }
  ],
  // Alert settings
  alerts: {
    smsEnabled: true,
    emailEnabled: true,
    pushEnabled: true,
    escalationMinutes: 15
  }
});`,
  },
  {
    name: 'Scheduling Tools',
    icon: Clock,
    code: `// OpsFlow with 7Shifts
    
import { createIntegration } from '@opsflow/integrations';

export const schedulingIntegration = createIntegration({
  provider: '7shifts',
  apiKey: process.env.SEVENSHIFT_API_KEY,
  config: {
    // Sync staff scheduling 
    scheduleSync: true,
    // Import labor costs for reporting
    laborCostImport: true,
    // Enable staff messaging through OpsFlow
    staffMessaging: true,
    // Forecast scheduling needs based on sales data
    forecastEnabled: true
  }
});`,
  },
  {
    name: 'Accounting Software',
    icon: DollarSign,
    code: `// OpsFlow with QuickBooks
    
import { createIntegration } from '@opsflow/integrations';

export const accountingIntegration = createIntegration({
  provider: 'quickbooks',
  apiKey: process.env.QUICKBOOKS_API_KEY,
  config: {
    // Automatically sync daily sales data
    salesSync: true,
    // Import vendor bills
    billImport: true,
    // Payroll integration
    payrollEnabled: true,
    // Create P&L reports by location
    reportingEnabled: true
  }
});`,
  },
  {
    name: 'Online Ordering',
    icon: Utensils,
    code: `// OpsFlow with DoorDash, UberEats & Direct Orders
    
import { setupOrdering } from '@opsflow/ordering';

export const onlineOrdering = setupOrdering({
  // Supported delivery services
  services: ['doordash', 'ubereats', 'grubhub'],
  // Direct website ordering
  direct: {
    enabled: true,
    fees: {
      delivery: 3.99,
      service: 0
    },
    radius: 5 // miles
  },
  // Order management
  management: {
    autoAccept: true,
    kitchenDisplayEnabled: true,
    notificationEnabled: true
  }
});`,
  },
];

export function IntegrationPartners() {
  const [activeTab, setActiveTab] = useState(integrations[0].name);
  const [isMobile, setIsMobile] = useState(false);
  const { theme } = useTheme();
  
  // Register with layout validator
  useEffect(() => {
    registerComponentLayout('IntegrationPartners', 'marketing');
    setIsMobile(window.innerWidth < 768);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="container relative my-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Seamless Integrations</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Connect OpsFlow with your existing restaurant technology stack
        </p>
      </motion.div>
      
      <div className="bordered-div-padding border">
        <div className="space-y-4">
          <h3 className="text-muted-foreground flex items-center gap-2 text-sm leading-snug font-medium md:text-base">
            <Puzzle className="size-5" />
            Technology Integrations
          </h3>
          <h2 className="text-foreground font-weight-display leading-snug md:text-xl">
            Works with your favorite restaurant tools:
          </h2>
        </div>

        <div className="mt-6 gap-6">
          {isMobile ? (
            <Select value={activeTab} onValueChange={setActiveTab}>
              <SelectTrigger className="w-full">
                <SelectValue>{activeTab}</SelectValue>
              </SelectTrigger>
              <SelectContent>
                {integrations.map((integration) => (
                  <SelectItem key={integration.name} value={integration.name}>
                    {integration.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          ) : (
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="flex gap-3">
                {integrations.map((integration) => (
                  <TabsTrigger 
                    key={integration.name} 
                    value={integration.name}
                    className="flex items-center gap-2"
                  >
                    <integration.icon className="size-4" />
                    {integration.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          )}

          <div className="mt-4">
            {integrations.map(
              (integration) =>
                integration.name === activeTab && (
                  <Card
                    key={integration.name}
                    className="relative overflow-hidden !p-0"
                  >
                    <CardContent className="!p-0">
                      <pre
                        className={cn(
                          "h-89 overflow-x-auto overflow-y-auto text-sm m-0 h-89 bg-transparent p-4 whitespace-pre-wrap",
                          theme === 'dark' ? 'bg-slate-950' : 'bg-slate-50'
                        )}
                      >
                        <code>{integration.code}</code>
                      </pre>
                      <CopyButton
                        text={integration.code}
                        className="absolute top-4 right-4"
                      />
                    </CardContent>
                  </Card>
                ),
            )}
          </div>
        </div>
        
        {/* Popular Integration Partners */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <PartnerLogo name="Toast" />
          <PartnerLogo name="Square" />
          <PartnerLogo name="MarginEdge" />
          <PartnerLogo name="7Shifts" />
          <PartnerLogo name="QuickBooks" />
          <PartnerLogo name="DoorDash" />
        </div>
      </div>
    </section>
  );
}

function PartnerLogo({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-center h-12 px-6 rounded-md border border-border/50 bg-background hover:border-primary/50 transition-colors duration-200">
      <span className="font-medium">{name}</span>
    </div>
  );
}

interface CopyButtonProps {
  text: string;
  className?: string;
}

function CopyButton({ text, className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleCopy = async () => {
    if (copied) return;

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);

      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <Button
      aria-label="Copy code"
      onClick={handleCopy}
      variant="ghost"
      size="icon"
      className={cn(className)}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={copied ? 'check' : 'copy'}
          initial={{ opacity: 0, y: 2 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -2 }}
          transition={{ duration: 0.15 }}
        >
          {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
        </motion.div>
      </AnimatePresence>
    </Button>
  );
}

export default IntegrationPartners;