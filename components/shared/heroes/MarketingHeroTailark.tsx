"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";

export function MarketingHeroTailark() {
  return (
    <section className="section-marketing">
      <div className="container">
        <div className="enterprise-hero-section hero-ambient rounded-2xl border overflow-hidden">
          <div className="relative z-10 px-6 py-16 md:py-24 text-center">
            <div className="clerk-inspired-badge mb-4">
              <span>Restaurant Operations</span>
            </div>
            <h1 className="enterprise-headline mb-4">
              Modern Operations Platform for Restaurants
            </h1>
            <p className="enterprise-body mx-auto max-w-2xl">
              Streamline compliance, coordinate teams, and monitor performance — built with Clerk‑grade polish and accessible design.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button asChild size="lg">
                <Link href="#start-trial" aria-label="Start Free Trial">
                  <span>Start Free Trial</span>
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-black">
                <Link href="#watch-demo" aria-label="Watch Demo">
                  <PlayCircle className="mr-2" />
                  <span>Watch Demo</span>
                </Link>
              </Button>
            </div>
            <div className="mt-6 text-sm text-white/80">
              <span>Free 14‑day trial • No credit card required</span>
            </div>
          </div>
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(80%_50%_at_0%_0%,oklch(var(--oklch-primary)/.15),transparent_60%),radial-gradient(80%_50%_at_100%_0%,oklch(var(--oklch-secondary)/.12),transparent_60%)]" />
        </div>
      </div>
    </section>
  );
}
