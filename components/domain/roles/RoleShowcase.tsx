'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { registerComponentLayout } from '@/lib/style-system/layout-differentiation';

const BarChart3 = dynamic(() => import('lucide-react').then(m => ({ default: m.BarChart3 })));
const Activity = dynamic(() => import('lucide-react').then(m => ({ default: m.Activity })));
const TrendingUp = dynamic(() => import('lucide-react').then(m => ({ default: m.TrendingUp })));
const Timer = dynamic(() => import('lucide-react').then(m => ({ default: m.Timer })));

type Metric = { label: string; value: string; icon: any };

const ROLES: Record<string, { metrics: Metric[]; tasks: string[] }> = {
  manager: {
    metrics: [
      { label: 'Daily Revenue', value: '$12,480', icon: BarChart3 },
      { label: 'Food Cost %', value: '28.6%', icon: TrendingUp },
      { label: 'Staff Utilization', value: '92%', icon: Activity },
      { label: 'Customer Reviews', value: '4.7★', icon: TrendingUp },
    ],
    tasks: ['P&L review', 'Schedule approvals', 'Feedback analysis', 'Budget planning'],
  },
  bartender: {
    metrics: [
      { label: 'Bar Inventory', value: '87%', icon: Activity },
      { label: 'Drinks Served', value: '486', icon: BarChart3 },
      { label: 'Customer Rating', value: '4.6★', icon: TrendingUp },
      { label: 'Tips Today', value: '$364', icon: TrendingUp },
    ],
    tasks: ['Stock bar', 'Menu specials', 'Glassware/tools clean', 'Recipe updates'],
  },
  kitchen: {
    metrics: [
      { label: 'Orders Completed', value: '1,128', icon: BarChart3 },
      { label: 'Temperature Checks', value: '38', icon: Timer },
      { label: 'Prep Tasks', value: '74', icon: Activity },
      { label: 'Quality Score', value: '98%', icon: TrendingUp },
    ],
    tasks: ['Morning prep', 'Fridge temps', 'Lunch specials', 'Inventory update'],
  },
};

export function RoleShowcase() {
  const [tab, setTab] = useState('manager');
  useEffect(() => {
    registerComponentLayout('RoleShowcase', 'product' as any);
  }, []);

  const role = ROLES[tab];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">See features in action</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mt-2">
            Interactive role demos with live metrics and tasks.
          </p>
        </div>

        <Tabs value={tab} onValueChange={setTab} className="w-full">
          <TabsList className="grid grid-cols-3 max-w-xl mx-auto">
            <TabsTrigger value="manager">Manager</TabsTrigger>
            <TabsTrigger value="bartender">Bartender</TabsTrigger>
            <TabsTrigger value="kitchen">Kitchen Staff</TabsTrigger>
          </TabsList>

          <TabsContent value={tab} className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {role.metrics.map((m) => {
                const Icon = m.icon as any;
                return (
                  <Card key={m.label}>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-md bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" />
                        </div>
                        <CardTitle className="text-base">{m.label}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="text-2xl font-bold">{m.value}</CardContent>
                  </Card>
                );
              })}
            </div>
            <div className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Typical tasks</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground grid md:grid-cols-2 gap-1">
                    {role.tasks.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

export default RoleShowcase;

