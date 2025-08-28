'use client';

import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { registerComponentLayout } from '@/lib/style-system/layout-differentiation';

const Thermometer = dynamic(() => import('lucide-react').then(m => ({ default: m.Thermometer })));
const ClipboardCheck = dynamic(() => import('lucide-react').then(m => ({ default: m.ClipboardCheck })));
const AlertTriangle = dynamic(() => import('lucide-react').then(m => ({ default: m.AlertTriangle })));
const Shield = dynamic(() => import('lucide-react').then(m => ({ default: m.Shield })));

const BLOCKS = [
  {
    icon: Thermometer,
    title: 'Automated Temperature Monitoring',
    bullets: [
      'Record data from freezers, refrigerators, and food probes',
      'Continuous monitoring with LoRaWAN sensors',
      'Bluetooth handheld device integration',
      'Automated corrective action workflows',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Smart Work Orders',
    bullets: [
      'Efficient work order assignment and tracking',
      'Mobile inspections with image attachments',
      'In-task chat communication',
      'Progress analysis by team and location',
    ],
  },
  {
    icon: AlertTriangle,
    title: 'Incident Management',
    bullets: [
      'Create incident reports from any device',
      'Automated corrective action assignment',
      'Instant notification system',
      'Organized compliance reporting',
    ],
  },
  {
    icon: Shield,
    title: 'Compliance Audits',
    bullets: [
      'HACCP and FSMA compliance inspections',
      'Organized report export and sharing',
      'Failed inspection corrective actions',
      'Historical compliance documentation',
    ],
  },
];

export function AdvancedOps() {
  useEffect(() => {
    registerComponentLayout('AdvancedOps', 'product' as any);
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Advanced Restaurant Operations</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mt-2">
            Sophisticated tools for temperature monitoring, incident management, corrective actions, and compliance auditing.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {BLOCKS.map((b) => {
            const Icon = b.icon as any;
            return (
              <Card key={b.title}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-md bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle>{b.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    {b.bullets.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AdvancedOps;

