"use client";

import dynamic from "next/dynamic";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect } from "react";
import { registerComponentLayout } from "@/lib/style-system/layout-differentiation";

const Thermometer = dynamic(() => import("lucide-react").then(m => ({ default: m.Thermometer })));
const Shield = dynamic(() => import("lucide-react").then(m => ({ default: m.Shield })));
const ClipboardCheck = dynamic(() => import("lucide-react").then(m => ({ default: m.ClipboardCheck })));
const MessageSquare = dynamic(() => import("lucide-react").then(m => ({ default: m.MessageSquare })));
const BarChart3 = dynamic(() => import("lucide-react").then(m => ({ default: m.BarChart3 })));
const Users = dynamic(() => import("lucide-react").then(m => ({ default: m.Users })));

export default function FeaturesHeroGrid() {
  useEffect(() => {
    registerComponentLayout("FeaturesHeroGrid", "product" as any);
  }, []);

  return (
    <section className="py-10">
      <div className="container mx-auto px-4 sm:px-6 grid gap-5 md:grid-cols-3 auto-rows-[1fr]">
        {/* Large left tile spanning two rows */}
        <Card className="md:col-span-2 md:row-span-2 bg-background">
          <CardHeader className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-primary/10 p-2 text-primary">
                <Thermometer className="h-5 w-5" />
              </div>
              <CardTitle className="text-base md:text-lg">Automated temperature monitoring</CardTitle>
            </div>
            <Badge variant="secondary">Live</Badge>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <p className="leading-relaxed">
              Monitor walk‑ins, low‑boys, and hot‑holding in real time. Alerts create corrective actions and log entries
              automatically.
            </p>
            <div className="mt-4 rounded-xl border bg-muted/40 p-4 text-xs text-muted-foreground">
              Inline preview area — swap with a small live widget or screenshot.
            </div>
          </CardContent>
        </Card>

        {/* Right column top */}
        <Card className="bg-background">
          <CardHeader className="flex items-center gap-3">
            <div className="rounded-lg bg-primary/10 p-2 text-primary"><Shield className="h-5 w-5" /></div>
            <CardTitle className="text-base">HACCP & audits</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Critical control points with digital sign‑off, inspection prep, and exportable PDF/CSV reports.
          </CardContent>
        </Card>

        {/* Right column middle */}
        <Card className="bg-background">
          <CardHeader className="flex items-center gap-3">
            <div className="rounded-lg bg-primary/10 p-2 text-primary"><ClipboardCheck className="h-5 w-5" /></div>
            <CardTitle className="text-base">Smart work orders</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Assign, prioritize, and track maintenance with photos and mobile inspections.
          </CardContent>
        </Card>

        {/* Bottom row left */}
        <Card className="bg-background">
          <CardHeader className="flex items-center gap-3">
            <div className="rounded-lg bg-primary/10 p-2 text-primary"><MessageSquare className="h-5 w-5" /></div>
            <CardTitle className="text-base">Team communication</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Announcements, @mentions, and channel routing—keep FOH and BOH in sync.
          </CardContent>
        </Card>

        {/* Bottom row middle */}
        <Card className="bg-background">
          <CardHeader className="flex items-center gap-3">
            <div className="rounded-lg bg-primary/10 p-2 text-primary"><BarChart3 className="h-5 w-5" /></div>
            <CardTitle className="text-base">Real‑time analytics</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            KPIs for owners, managers, and leads with drill‑downs and exports.
          </CardContent>
        </Card>

        {/* Bottom row right */}
        <Card className="bg-background">
          <CardHeader className="flex items-center gap-3">
            <div className="rounded-lg bg-primary/10 p-2 text-primary"><Users className="h-5 w-5" /></div>
            <CardTitle className="text-base">Staff & training</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Role‑based checklists, micro‑training, and certification reminders.
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

