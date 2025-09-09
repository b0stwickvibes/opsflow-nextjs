"use client";
import React, { useMemo, useState } from "react";
import { OPSFLOW_SECTIONS } from "@/components/sections/opsflow";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CopyButton from "@/components/ui/CopyButton";

export default function TemplateCatalogPage() {
  const [wrap, setWrap] = useState<"container" | "narrow" | "full">("container");
  const [surface, setSurface] = useState<"plain" | "muted">("plain");

  const wrapperClass = useMemo(() => {
    const width = wrap === "full" ? "" : wrap === "narrow" ? "max-w-3xl mx-auto" : "container";
    const bg = surface === "muted" ? "bg-muted/20 p-4 rounded-lg border" : "";
    return `${width} ${bg}`.trim();
  }, [wrap, surface]);

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

  return (
    <main className="min-h-screen bg-background">
      <section className="section-padding-large">
        <div className="container space-y-8">
          <div>
            <div className="clerk-inspired-badge mb-2"><span>Template Catalog</span></div>
            <h1 className="enterprise-headline">OpsFlow Section Library</h1>
            <p className="enterprise-body mt-2">Preview and copy standardized sections. Use the knobs to adjust layout while previewing.</p>
          </div>

          {/* Knobs */}
          <div className="flex flex-wrap items-center gap-4 border rounded-lg p-3 bg-muted/10">
            <div className="text-sm">Width:</div>
            <div className="flex gap-2 text-sm">
              <button className={`px-2 py-1 rounded border ${wrap==='container'?'bg-background':''}`} onClick={()=>setWrap('container')}>Container</button>
              <button className={`px-2 py-1 rounded border ${wrap==='narrow'?'bg-background':''}`} onClick={()=>setWrap('narrow')}>Narrow</button>
              <button className={`px-2 py-1 rounded border ${wrap==='full'?'bg-background':''}`} onClick={()=>setWrap('full')}>Full</button>
            </div>
            <div className="text-sm ml-4">Surface:</div>
            <div className="flex gap-2 text-sm">
              <button className={`px-2 py-1 rounded border ${surface==='plain'?'bg-background':''}`} onClick={()=>setSurface('plain')}>Plain</button>
              <button className={`px-2 py-1 rounded border ${surface==='muted'?'bg-background':''}`} onClick={()=>setSurface('muted')}>Muted</button>
            </div>
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
                  <div className={wrapperClass}>
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
