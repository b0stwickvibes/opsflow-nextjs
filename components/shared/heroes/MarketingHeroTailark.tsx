"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { CTA } from "@/components/ui/cta-variants";
import { TextEffect } from "@/components/motion-primitives/text-effect";
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";

export function MarketingHeroTailark() {
  return (
    <section className="section-marketing">
      <div className="container">
        <div className="enterprise-hero-section hero-ambient rounded-2xl border overflow-hidden">
          <div className="relative z-10 px-6 py-16 md:py-24 text-center">
            <div className="clerk-inspired-badge mb-4">
              <span>Restaurant Operations</span>
            </div>
            <TextEffect preset="fade-in-blur" speedSegment={0.3} as="h1" className="enterprise-headline mb-4">
              Modern Solutions for Customer Engagement
            </TextEffect>
            <TextEffect per="line" preset="fade-in-blur" speedSegment={0.3} delay={0.5} as="p" className="enterprise-body mx-auto max-w-2xl">
              Highly customizable components for building modern websites and applications that look and feel the way you mean it.
            </TextEffect>
            <AnimatedGroup
              variants={{
                container: { visible: { transition: { staggerChildren: 0.05, delayChildren: 0.75 } } },
                item: { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } },
              }}
              className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
            >
              <Button asChild size="lg" className={CTA.primary}>
                <Link href="#start-trial" aria-label="Start free demo">
                  <span>Start free demo</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className={CTA.outline}>
                <Link href="#watch-demo" aria-label="Talk to Restaurant Expert">
                  <span>Talk to Restaurant Expert</span>
                </Link>
              </Button>
            </AnimatedGroup>
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
