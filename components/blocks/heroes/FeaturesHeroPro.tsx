"use client";

import { useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { registerComponentLayout } from "@/lib/style-system/layout-differentiation";

const ArrowRight = dynamic(() => import("lucide-react").then(m => ({ default: m.ArrowRight })));
const Play = dynamic(() => import("lucide-react").then(m => ({ default: m.Play })));

export default function FeaturesHeroPro() {
  useEffect(() => {
    registerComponentLayout("FeaturesHeroPro", "product" as any);
  }, []);

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900" />
      <div className="pointer-events-none absolute -top-40 -right-24 h-[36rem] w-[36rem] rounded-full bg-primary/10 blur-3xl opacity-60" />
      <div className="pointer-events-none absolute -bottom-40 -left-24 h-[32rem] w-[32rem] rounded-full bg-blue-400/10 dark:bg-blue-900/20 blur-3xl opacity-50" />
      <div className="absolute inset-0 bg-grid-primary/10 opacity-20" aria-hidden="true" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-5xl text-center">
          <Badge variant="secondary" className="mb-4">Restaurant Operations Platform</Badge>
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-6xl">
            Hospitality features
            <span className="block text-primary">built for restaurants</span>
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-muted-foreground md:text-xl">
            Streamline kitchen execution, control food costs, manage staff scheduling, and stay inspection‑ready—
            all in one place.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild className="gap-2">
              <Link href="/product/demo#demo-features">
                <Play className="h-5 w-5" />
                Start interactive demo
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="gap-2">
              <Link href="/pricing">
                View pricing
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Preview frame */}
          <div className="mx-auto mt-12 max-w-5xl rounded-2xl border bg-muted/40 shadow-sm">
            <div className="flex items-center gap-2 border-b px-4 py-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-3 text-xs text-muted-foreground">opsflow-demo.tsx — Restaurant Dashboard</span>
            </div>
            <div className="relative aspect-[16/9] w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-blue-500/10" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="rounded-lg border bg-background/60 px-4 py-2 text-sm shadow-sm backdrop-blur">
                  Live preview coming soon
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

