"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { registerComponentLayout } from "@/lib/style-system/layout-differentiation";

const Clock = dynamic(() => import("lucide-react").then(m => ({ default: m.Clock })));
const LineChart = dynamic(() => import("lucide-react").then(m => ({ default: m.LineChart })));
const Cpu = dynamic(() => import("lucide-react").then(m => ({ default: m.Cpu })));
const Route = dynamic(() => import("lucide-react").then(m => ({ default: m.Route })));

export default function PlasmaFeaturesSection() {
  useEffect(() => {
    registerComponentLayout("PlasmaFeaturesSection", "product" as any);
  }, []);

  return (
    <section className="relative py-16">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-accent/10" />
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="mb-8 text-center text-3xl font-bold md:text-5xl">
          Privacy friendly, lightweight
          <br className="hidden md:block" />
          visualisation and control
        </h2>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Large chart card */}
          <Card className="lg:col-span-2">
            <CardHeader className="flex flex-row items-center gap-3">
              <div className="rounded-md bg-primary/10 p-2 text-primary"><Clock className="h-5 w-5" /></div>
              <CardTitle className="text-lg md:text-xl">See everything at a glance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-muted-foreground max-w-prose">
                Track operational performance in real time—no guesswork, just clarity.
              </p>
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border bg-gradient-to-br from-muted to-background">
                {/* Chart placeholder */}
                <div className="absolute inset-0 grid place-items-center text-muted-foreground">
                  <div className="flex items-center gap-2 rounded-md border bg-background/60 px-3 py-1.5 text-xs shadow-sm">
                    <LineChart className="h-4 w-4" />
                    Chart preview
                  </div>
                </div>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-3 md:max-w-md">
                <div className="rounded-md border p-3 text-sm">
                  <div className="mb-1 text-muted-foreground">Views</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-semibold">140</span>
                    <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20">+7.4%</Badge>
                  </div>
                </div>
                <div className="rounded-md border p-3 text-sm">
                  <div className="mb-1 text-muted-foreground">Tasks</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-semibold">110</span>
                    <Badge variant="secondary" className="bg-rose-500/10 text-rose-600 border-rose-500/20">-5.2%</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Metrics card */}
          <Card>
            <CardHeader className="flex flex-row items-center gap-3">
              <div className="rounded-md bg-primary/10 p-2 text-primary"><Cpu className="h-5 w-5" /></div>
              <CardTitle className="text-lg md:text-xl">Build workflows like you think</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border bg-muted/40 p-4">
                <div className="mb-4 text-sm text-muted-foreground">Total tasks last 7 days</div>
                <div className="text-4xl font-bold">3,812</div>
                <p className="mt-6 text-sm text-muted-foreground">
                  Drag and connect steps to match your kitchen and FOH processes.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom feature bullets */}
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Route, title: "Performance tracking", desc: "Timing, results, and logs without digging." },
            { icon: Cpu, title: "Real‑time syncing", desc: "Data stays in lock‑step across locations." },
            { icon: LineChart, title: "Intelligent automation", desc: "Describe goals—let OpsFlow draft workflows." },
            { icon: Route, title: "Workflow mapping", desc: "Visual blueprints that are powerful to execute." },
          ].map((f) => {
            const Icon = f.icon as any;
            return (
              <Card key={f.title}>
                <CardHeader className="flex flex-row items-center gap-3">
                  <div className="rounded-md bg-primary/10 p-2 text-primary"><Icon className="h-5 w-5" /></div>
                  <CardTitle className="text-base">{f.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">{f.desc}</CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

