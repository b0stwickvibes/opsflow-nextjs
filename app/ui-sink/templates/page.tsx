"use client";
import React from "react";
import { OPSFLOW_SECTIONS } from "@/components/sections/opsflow";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CopyButton from "@/components/ui/CopyButton";

const usageFor = (key: string) => {
  switch (key) {
    case "hero":
      return `import { HeroSection } from "@/components/sections/opsflow"\n\n<HeroSection />`;
    case "tiles-three-up":
      return `import { TilesThreeUpSection } from "@/components/sections/opsflow"\n\n<TilesThreeUpSection />`;
    case "metrics":
      return `import { MetricsRowSection } from "@/components/sections/opsflow"\n\n<MetricsRowSection />`;
    case "accordion":
      return `import { FeatureAccordionSection } from "@/components/sections/opsflow"\n\n<FeatureAccordionSection />`;
    case "cta":
      return `import { FinalCTASection } from "@/components/sections/opsflow"\n\n<FinalCTASection />`;
    default:
      return "";
  }
};

export default function TemplateCatalogPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="section-padding-large">
        <div className="container space-y-8">
          <div>
            <div className="clerk-inspired-badge mb-2"><span>Template Catalog</span></div>
            <h1 className="enterprise-headline">OpsFlow Section Library</h1>
            <p className="enterprise-body mt-2">Preview and copy standardized sections. Click the button to copy the usage snippet.</p>
          </div>

          {/* Single column list */}
          <div className="grid grid-cols-1 gap-8">
            {OPSFLOW_SECTIONS.map(({ key, title, component: Section }) => (
              <Card key={key} className="overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-display-sm">{title}</CardTitle>
                  <CopyButton value={usageFor(key)} label="Copy usage" />
                </CardHeader>
                <CardContent>
                  <div className="container">
                    <Section />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
