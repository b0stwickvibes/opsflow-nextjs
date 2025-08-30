"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FeaturesHero() {
  return (
    <section className="relative py-14 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div className="flex max-w-3xl flex-1 flex-col items-start gap-5">
            <div className="flex items-center rounded-full border p-1 text-xs">
              <span className="bg-muted rounded-full px-3 py-1">What\'s New?</span>
              <span className="px-3">Introducing OpsFlow Features</span>
            </div>

            <h1 className="text-balance text-5xl leading-none tracking-tight md:text-6xl lg:text-7xl">
              Restaurant operations <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">features</span>
            </h1>

            <p className="text-muted-foreground leading-snug md:text-lg lg:text-xl max-w-2xl">
              Streamline kitchen execution, control food costs, manage staff, and stay inspection‑ready — all in one place.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="w-full max-w-sm space-y-3">
            <div className="flex gap-3">
              <Button className="flex-1" asChild>
                <Link href="/product/demo#demo-features">Start interactive demo</Link>
              </Button>
              <Button className="flex-1" variant="outline" asChild>
                <Link href="/pricing">View pricing</Link>
              </Button>
            </div>
            <div className="text-center text-sm">Inspection‑ready logs · Real‑time alerts</div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-10 md:mt-16 lg:mt-20" data-capture="features-hero-frame">
          <Image
            src="/images/features/hero-dashboard.png"
            alt="OpsFlow dashboard preview"
            className="w-full rounded-md shadow-2xl ring-1 ring-foreground/5"
            width={1440}
            height={905}
            priority
          />
        </div>
      </div>
    </section>
  );
}
