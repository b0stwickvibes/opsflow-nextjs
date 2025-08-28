'use client';

import { useEffect } from 'react';
import { Check, X, Minus } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { registerComponentLayout } from '@/lib/style-system/layout-differentiation';
import { trackInteraction } from '@/lib/analytics';

// Simple plan data for feature comparison
const PLAN_DATA = [
  {
    id: 'starter',
    name: 'Starter',
    monthlyPrice: 49,
    popular: false
  },
  {
    id: 'professional', 
    name: 'Professional',
    monthlyPrice: 149,
    popular: true
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    monthlyPrice: 299,
    popular: false
  }
];

// Utility function
function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  }).format(amount);
}

// Type-safe feature value system
type FeatureValue = 
  | { type: 'boolean'; value: boolean }
  | { type: 'text'; value: string }
  | { type: 'unavailable' };

interface Feature {
  name: string;
  starter: FeatureValue;
  professional: FeatureValue;
  enterprise: FeatureValue;
}

interface FeatureCategory {
  name: string;
  features: Feature[];
}

// Properly typed feature comparison data
const FEATURE_CATEGORIES: FeatureCategory[] = [
  {
    name: 'Core Limits',
    features: [
      {
        name: 'Temperature Sensors',
        starter: { type: 'text', value: '5 sensors' },
        professional: { type: 'text', value: '20 sensors' },
        enterprise: { type: 'text', value: 'Unlimited' }
      },
      {
        name: 'User Accounts',
        starter: { type: 'text', value: 'Up to 10 users' },
        professional: { type: 'text', value: 'Up to 50 users' },
        enterprise: { type: 'text', value: 'Unlimited users' }
      },
      {
        name: 'Locations',
        starter: { type: 'text', value: '1 location' },
        professional: { type: 'text', value: 'Up to 5 locations' },
        enterprise: { type: 'text', value: 'Unlimited locations' }
      }
    ]
  },
  {
    name: 'HACCP & Compliance',
    features: [
      {
        name: 'Temperature Monitoring',
        starter: { type: 'boolean', value: true },
        professional: { type: 'boolean', value: true },
        enterprise: { type: 'boolean', value: true }
      },
      {
        name: 'Digital Checklists',
        starter: { type: 'text', value: 'Basic templates' },
        professional: { type: 'text', value: 'Custom checklists' },
        enterprise: { type: 'text', value: 'Advanced workflows' }
      },
      {
        name: 'Audit Preparation',
        starter: { type: 'text', value: 'Basic reports' },
        professional: { type: 'text', value: 'Advanced reports' },
        enterprise: { type: 'text', value: 'Custom reporting' }
      },
      {
        name: 'Corrective Action Tracking',
        starter: { type: 'boolean', value: false },
        professional: { type: 'boolean', value: true },
        enterprise: { type: 'boolean', value: true }
      },
      {
        name: 'Automated Alerts',
        starter: { type: 'text', value: 'Email only' },
        professional: { type: 'text', value: 'SMS + Email + App' },
        enterprise: { type: 'text', value: 'All channels + Custom' }
      }
    ]
  },
  {
    name: 'Operations Management',
    features: [
      {
        name: 'Staff Scheduling',
        starter: { type: 'boolean', value: false },
        professional: { type: 'boolean', value: true },
        enterprise: { type: 'boolean', value: true }
      },
      {
        name: 'Task Assignment',
        starter: { type: 'text', value: 'Basic' },
        professional: { type: 'text', value: 'Advanced' },
        enterprise: { type: 'text', value: 'Enterprise' }
      },
      {
        name: 'Inventory Integration',
        starter: { type: 'boolean', value: false },
        professional: { type: 'text', value: 'Limited integrations' },
        enterprise: { type: 'text', value: 'Full integration suite' }
      },
      {
        name: 'POS Integration',
        starter: { type: 'boolean', value: false },
        professional: { type: 'text', value: 'Major POS systems' },
        enterprise: { type: 'text', value: 'Custom integrations' }
      }
    ]
  },
  {
    name: 'Reporting & Analytics',
    features: [
      {
        name: 'Basic Dashboards',
        starter: { type: 'boolean', value: true },
        professional: { type: 'boolean', value: true },
        enterprise: { type: 'boolean', value: true }
      },
      {
        name: 'Advanced Analytics',
        starter: { type: 'boolean', value: false },
        professional: { type: 'boolean', value: true },
        enterprise: { type: 'boolean', value: true }
      },
      {
        name: 'Custom Reports',
        starter: { type: 'boolean', value: false },
        professional: { type: 'text', value: 'Standard templates' },
        enterprise: { type: 'text', value: 'Fully customizable' }
      },
      {
        name: 'Data Export',
        starter: { type: 'text', value: 'CSV only' },
        professional: { type: 'text', value: 'CSV, Excel, PDF' },
        enterprise: { type: 'text', value: 'All formats + API' }
      }
    ]
  },
  {
    name: 'Support & Services',
    features: [
      {
        name: 'Support Level',
        starter: { type: 'text', value: 'Email support' },
        professional: { type: 'text', value: 'Priority support' },
        enterprise: { type: 'text', value: 'Dedicated manager' }
      },
      {
        name: 'Response Time',
        starter: { type: 'text', value: '24-48 hours' },
        professional: { type: 'text', value: '4-8 hours' },
        enterprise: { type: 'text', value: '1-2 hours' }
      },
      {
        name: 'Training',
        starter: { type: 'text', value: 'Self-service' },
        professional: { type: 'text', value: 'Video training' },
        enterprise: { type: 'text', value: 'On-site training' }
      },
      {
        name: 'API Access',
        starter: { type: 'boolean', value: false },
        professional: { type: 'boolean', value: true },
        enterprise: { type: 'boolean', value: true }
      },
      {
        name: 'Custom Integrations',
        starter: { type: 'boolean', value: false },
        professional: { type: 'text', value: 'Limited' },
        enterprise: { type: 'text', value: 'Full custom dev' }
      },
      {
        name: 'White-label Options',
        starter: { type: 'boolean', value: false },
        professional: { type: 'boolean', value: false },
        enterprise: { type: 'boolean', value: true }
      },
      {
        name: 'SLA Guarantee',
        starter: { type: 'boolean', value: false },
        professional: { type: 'boolean', value: false },
        enterprise: { type: 'text', value: '99.9% uptime' }
      }
    ]
  }
];

interface FeatureValueRendererProps {
  value: FeatureValue;
}

function FeatureValueRenderer({ value }: FeatureValueRendererProps) {
  switch (value.type) {
    case 'boolean':
      return value.value ? (
        <Check className="h-5 w-5 text-green-600 mx-auto" />
      ) : (
        <X className="h-5 w-5 text-muted-foreground mx-auto" />
      );
    case 'text':
      return <span className="text-sm text-center">{value.value}</span>;
    case 'unavailable':
      return <Minus className="h-5 w-5 text-muted-foreground mx-auto" />;
    default:
      return <Minus className="h-5 w-5 text-muted-foreground mx-auto" />;
  }
}

interface MobileFeatureCardProps {
  feature: Feature;
}

function MobileFeatureCard({ feature }: MobileFeatureCardProps) {
  return (
    <div className="space-y-3">
      <h4 className="font-medium">{feature.name}</h4>
      
      <div className="grid gap-3 sm:grid-cols-3">
        {PLAN_DATA.map((plan) => {
          const value = feature[plan.id as keyof Feature] as FeatureValue;
          return (
            <div 
              key={plan.id}
              className={`flex items-center justify-between p-3 border rounded-lg ${
                plan.popular ? 'border-primary bg-primary/5' : ''
              }`}
            >
              <div>
                <div className="font-medium text-sm flex items-center gap-1">
                  {plan.name}
                  {plan.popular && <Badge variant="default" className="text-xs">Popular</Badge>}
                </div>
                <div className="text-xs text-muted-foreground">
                  {formatCurrency(plan.monthlyPrice)}/mo
                </div>
              </div>
              <div><FeatureValueRenderer value={value} /></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function FeatureComparison() {
  // Register with layout validator
  useEffect(() => {
    registerComponentLayout('FeatureComparison', 'marketing');
  }, []);

  // Track feature comparison view
  useEffect(() => {
    const timer = setTimeout(() => {
      trackInteraction('feature_comparison_viewed', { 
        component: 'FeatureComparison',
        plans_shown: PLAN_DATA.map(p => p.id)
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Feature Comparison</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Compare our restaurant operations plans to find the perfect fit for your business
          </p>
        </div>

        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle>Plan Features</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            
            {/* Desktop Table View */}
            <div className="hidden lg:block">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-muted/30">
                      <th className="text-left p-4 font-semibold w-1/4">Feature</th>
                      {PLAN_DATA.map((plan) => (
                        <th key={plan.id} className="text-center p-4 font-semibold w-1/4">
                          <div className="flex flex-col items-center">
                            <div className="flex items-center gap-2">
                              <span>{plan.name}</span>
                              {plan.popular && (
                                <Badge variant="default" className="text-xs">Popular</Badge>
                              )}
                            </div>
                            <span className="text-sm font-normal text-muted-foreground">
                              {formatCurrency(plan.monthlyPrice)}/mo
                            </span>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {FEATURE_CATEGORIES.map((category, categoryIndex) => (
                      <>
                        <tr key={`category-${categoryIndex}`} className="bg-muted/20">
                          <td colSpan={4} className="p-4 font-semibold text-sm uppercase tracking-wider">
                            {category.name}
                          </td>
                        </tr>
                        {category.features.map((feature, featureIndex) => (
                          <tr key={`feature-${categoryIndex}-${featureIndex}`} className="border-b hover:bg-muted/20 transition-colors">
                            <td className="p-4 font-medium">{feature.name}</td>
                            {PLAN_DATA.map((plan) => {
                              const value = feature[plan.id as keyof Feature] as FeatureValue;
                              return (
                                <td key={plan.id} className="p-4 text-center">
                                  <FeatureValueRenderer value={value} />
                                </td>
                              );
                            })}
                          </tr>
                        ))}
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile Card View */}
            <div className="lg:hidden space-y-6 p-4">
              {FEATURE_CATEGORIES.map((category, categoryIndex) => (
                <div key={categoryIndex} className="space-y-4">
                  <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground border-b pb-2">
                    {category.name}
                  </h3>
                  
                  {category.features.map((feature, featureIndex) => (
                    <MobileFeatureCard key={featureIndex} feature={feature} />
                  ))}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}