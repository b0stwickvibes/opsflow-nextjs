"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { registerComponentLayout } from "@/lib/style-system/layout-differentiation";

const Thermometer = dynamic(() => import("lucide-react").then(m => ({ default: m.Thermometer })));
const ClipboardCheck = dynamic(() => import("lucide-react").then(m => ({ default: m.ClipboardCheck })));
const Users = dynamic(() => import("lucide-react").then(m => ({ default: m.Users })));
const MessageSquare = dynamic(() => import("lucide-react").then(m => ({ default: m.MessageSquare })));
const BarChart3 = dynamic(() => import("lucide-react").then(m => ({ default: m.BarChart3 })));
const Shield = dynamic(() => import("lucide-react").then(m => ({ default: m.Shield })));

export default function FeaturesBento() {
  useEffect(() => {
    registerComponentLayout("FeaturesBento", "product" as any);
  }, []);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 auto-rows-[1fr]">
          {/* Large tile - Temperature Monitoring */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="rounded-md bg-primary/10 p-2 text-primary"><Thermometer className="h-5 w-5" /></div>
                <CardTitle>Automated temperature monitoring</CardTitle>
                <Badge variant="secondary" className="ml-auto">Live</Badge>
              </div>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Monitor walk‑ins, low‑boys, and hot‑holding in real time. Alerts create corrective actions and log entries automatically.
            </CardContent>
          </Card>

          {/* HACCP & Audits */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="rounded-md bg-primary/10 p-2 text-primary"><Shield className="h-5 w-5" /></div>
                <CardTitle>HACCP & audits</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Critical control points with digital sign‑off, inspection prep, and exportable PDF/CSV reports.
            </CardContent>
          </Card>

          {/* Smart Work Orders */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="rounded-md bg-primary/10 p-2 text-primary"><ClipboardCheck className="h-5 w-5" /></div>
                <CardTitle>Smart work orders</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Assign, prioritize, and track maintenance with photos and mobile inspections.
            </CardContent>
          </Card>

          {/* Team Comms */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="rounded-md bg-primary/10 p-2 text-primary"><MessageSquare className="h-5 w-5" /></div>
                <CardTitle>Team communication</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Announcements, @mentions, and channel routing—keep FOH and BOH in sync.
            </CardContent>
          </Card>

          {/* Analytics */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="rounded-md bg-primary/10 p-2 text-primary"><BarChart3 className="h-5 w-5" /></div>
                <CardTitle>Real‑time analytics</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              KPIs for owners, managers, and leads with drill‑downs and exports.
            </CardContent>
          </Card>

          {/* Staff & Training */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="rounded-md bg-primary/10 p-2 text-primary"><Users className="h-5 w-5" /></div>
                <CardTitle>Staff & training</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Role‑based checklists, micro‑training, and certification reminders.
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

