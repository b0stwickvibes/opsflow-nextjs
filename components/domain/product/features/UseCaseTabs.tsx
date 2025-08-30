"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { registerComponentLayout } from "@/lib/style-system/layout-differentiation";

const BarChart3 = dynamic(() => import("lucide-react").then(m => ({ default: m.BarChart3 })));
const Thermometer = dynamic(() => import("lucide-react").then(m => ({ default: m.Thermometer })));
const Users = dynamic(() => import("lucide-react").then(m => ({ default: m.Users })));
const DollarSign = dynamic(() => import("lucide-react").then(m => ({ default: m.DollarSign })));

export default function UseCaseTabs() {
  const [tab, setTab] = useState("manager");

  useEffect(() => {
    registerComponentLayout("UseCaseTabs", "product" as any);
  }, []);

  const content: Record<string, { metrics: Array<{ icon: any; label: string; value: string }>; tasks: string[] }> = {
    manager: {
      metrics: [
        { icon: DollarSign, label: "Daily revenue", value: "$12,480" },
        { icon: BarChart3, label: "Food cost %", value: "28.6%" },
        { icon: Users, label: "Staff utilization", value: "92%" },
        { icon: BarChart3, label: "Guest rating", value: "4.7★" },
      ],
      tasks: ["P&L review", "Schedule approvals", "Feedback analysis", "Budget planning"],
    },
    bartender: {
      metrics: [
        { icon: BarChart3, label: "Drinks served", value: "486" },
        { icon: Users, label: "Tips today", value: "$364" },
        { icon: BarChart3, label: "Bar inventory", value: "87%" },
        { icon: BarChart3, label: "Customer rating", value: "4.6★" },
      ],
      tasks: ["Stock bar", "Menu specials", "Glassware clean", "Recipe updates"],
    },
    kitchen: {
      metrics: [
        { icon: BarChart3, label: "Orders completed", value: "1,128" },
        { icon: Thermometer, label: "Temp checks", value: "38" },
        { icon: Users, label: "Prep tasks", value: "74" },
        { icon: BarChart3, label: "Quality score", value: "98%" },
      ],
      tasks: ["Morning prep", "Fridge temps", "Lunch specials", "Inventory update"],
    },
  };

  const tabs = [
    { key: "manager", label: "Manager" },
    { key: "bartender", label: "Bartender" },
    { key: "kitchen", label: "Kitchen" },
  ];

  const current = content[tab];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Role-based demos</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Live metrics and tasks tailored to each role.</p>
        </div>

        <Tabs value={tab} onValueChange={setTab} className="w-full">
          <TabsList className="grid grid-cols-3 max-w-xl mx-auto">
            {tabs.map(t => (
              <TabsTrigger key={t.key} value={t.key}>{t.label}</TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value={tab} className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {current.metrics.map((m) => {
                const Icon = m.icon as any;
                return (
                  <Card key={m.label}>
                    <CardHeader className="flex items-center gap-3">
                      <div className="rounded-md bg-primary/10 p-2 text-primary"><Icon className="h-5 w-5" /></div>
                      <CardTitle className="text-base">{m.label}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-2xl font-bold">{m.value}</CardContent>
                  </Card>
                );
              })}
            </div>
            <div className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Typical tasks</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-1 text-sm text-muted-foreground md:grid-cols-2 list-disc pl-5">
                    {current.tasks.map(t => <li key={t}>{t}</li>)}
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

