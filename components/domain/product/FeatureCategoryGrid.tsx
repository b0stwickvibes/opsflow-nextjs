'use client';

import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { registerComponentLayout } from '@/lib/style-system/layout-differentiation';

const Check = dynamic(() => import('lucide-react').then(m => ({ default: m.Check })));

type Feature = {
  title: string;
  bullets: string[];
};

const FEATURES: Feature[] = [
  {
    title: 'Daily Tasks & Checklists',
    bullets: [
      'Custom checklist builder with templates',
      'Smart recurring task scheduling',
      'Role-based task assignment',
      'Mobile-first completion tracking',
      'Progress analytics and reporting',
      'Failed step corrective actions',
    ],
  },
  {
    title: 'Food Safety & Compliance',
    bullets: [
      'Bluetooth temperature sensor integration',
      'HACCP & FSMA compliance workflows',
      'Automated incident reporting',
      'Digital food safety audits',
      'Corrective action management',
      'Regulatory report generation',
    ],
  },
  {
    title: 'Equipment & Maintenance',
    bullets: [
      'Preventive maintenance scheduling',
      'Mobile work order creation',
      'Equipment performance tracking',
      'Maintenance history logging',
      'Breakdown prediction analytics',
      'Vendor management integration',
    ],
  },
  {
    title: 'Real-Time Analytics',
    bullets: [
      'Real-time dashboard metrics',
      'Custom report generation',
      'Performance trend analysis',
      'Compliance score tracking',
      'Export to PDF/Excel',
      'Historical data insights',
    ],
  },
  {
    title: 'Team Communication',
    bullets: [
      'Real-time team messaging',
      'Company-wide announcements',
      'Team group creation',
      'Smart notification system',
      'Task-based communication',
      'File sharing capabilities',
    ],
  },
  {
    title: 'Multi-Location Management',
    bullets: [
      'Unlimited workspace creation',
      'One-click location switching',
      'Centralized SOP management',
      'Cross-location analytics',
      'Unified compliance reporting',
      'Location-specific customization',
    ],
  },
];

export function FeatureCategoryGrid() {
  useEffect(() => {
    registerComponentLayout('FeatureCategoryGrid', 'product' as any);
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Complete Restaurant Operations Platform</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mt-2">
            Unify maintenance, daily operations, food safety, and compliance management across all your restaurant
            locations with powerful automation and real-time insights.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <Card key={f.title} className="h-full">
              <CardHeader>
                <CardTitle>{f.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {f.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <Badge variant="outline" className="mt-0.5">
                        <Check className="h-3.5 w-3.5" />
                      </Badge>
                      <span className="text-sm text-muted-foreground">{b}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureCategoryGrid;

