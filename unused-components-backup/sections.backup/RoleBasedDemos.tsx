'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle2, Crown, Wine, ChefHat } from 'lucide-react';
import { trackEvent } from '@/lib/utils/features';

const roleDemos = [
  {
    role: "Manager",
    icon: Crown,
    metrics: [
      { label: "Daily Revenue", value: "$4,247", trend: "+12%" },
      { label: "Food Cost %", value: "28.4%", trend: "-2.1%" },
      { label: "Staff Utilization", value: "94%", trend: "+5%" },
      { label: "Customer Reviews", value: "4.6/5", trend: "+0.2" }
    ],
    tasks: ["P&L review", "Schedule approvals", "Feedback analysis", "Budget planning"]
  },
  {
    role: "Bartender",
    icon: Wine,
    metrics: [
      { label: "Bar Inventory", value: "87%", trend: "stable" },
      { label: "Drinks Served", value: "142", trend: "+8%" },
      { label: "Customer Rating", value: "4.8/5", trend: "+0.1" },
      { label: "Tips Today", value: "$89", trend: "+15%" }
    ],
    tasks: ["Stock bar", "Menu specials", "Glassware clean", "Recipe updates"]
  },
  {
    role: "Kitchen Staff",
    icon: ChefHat,
    metrics: [
      { label: "Orders Completed", value: "218", trend: "+6%" },
      { label: "Temperature Checks", value: "24/24", trend: "100%" },
      { label: "Prep Tasks", value: "16/18", trend: "89%" },
      { label: "Quality Score", value: "9.2/10", trend: "+0.3" }
    ],
    tasks: ["Morning prep", "Fridge temps", "Lunch specials", "Inventory update"]
  }
];

export default function RoleBasedDemos() {
  const [activeRole, setActiveRole] = useState("Manager");

  const handleRoleChange = (role: string) => {
    setActiveRole(role);
    trackEvent('ROLE_SWITCHED', { to_role: role });
  };

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See features in action
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interactive role demos with live metrics and tasks.
          </p>
        </div>

        <Tabs value={activeRole} onValueChange={handleRoleChange} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            {roleDemos.map((demo) => (
              <TabsTrigger key={demo.role} value={demo.role} className="flex items-center gap-2">
                <demo.icon className="h-4 w-4" />
                {demo.role}
              </TabsTrigger>
            ))}
          </TabsList>

          {roleDemos.map((demo) => (
            <TabsContent key={demo.role} value={demo.role} className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {demo.metrics.map((metric, index) => (
                  <Card key={metric.label} className="border-0 shadow-md">
                    <CardContent className="p-6">
                      <div className="text-2xl font-bold text-primary mb-1">{metric.value}</div>
                      <div className="text-sm text-muted-foreground mb-2">{metric.label}</div>
                      <div className="text-xs text-green-600 dark:text-green-400">{metric.trend}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <demo.icon className="h-5 w-5 text-primary" />
                    Today's Tasks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {demo.tasks.map((task, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        {task}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}