"use client";
import React, { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CopyButton from "@/components/ui/CopyButton";

// OpsFlow sections
import { HeroSection, TilesThreeUpSection, MetricsRowSection, FeatureAccordionSection, FinalCTASection } from "@/components/sections/opsflow";

// Processed template exports
import * as Heroes from "@/templates/shadcn-components/processed/heroes";
import * as Features from "@/templates/shadcn-components/processed/features";
import * as CTAs from "@/templates/shadcn-components/processed/ctas";
import * as Logos from "@/templates/shadcn-components/processed/logos";
import * as Stats from "@/templates/shadcn-components/processed/stats";
import { PricingTable } from "@/templates/shadcn-components/processed/pricing/PricingTable";
import { PricingComparison } from "@/templates/shadcn-components/processed/pricing/PricingComparison";
import { PricingFeatures } from "@/templates/shadcn-components/processed/pricing/PricingFeatures";
import * as Integration from "@/templates/shadcn-components/processed/integration";
import * as Testimonials from "@/templates/shadcn-components/processed/testimonials";
import * as Contact from "@/templates/shadcn-components/processed/contact";
import * as About from "@/templates/shadcn-components/processed/about";
import * as Bento from "@/templates/shadcn-components/processed/bento";

// Category filter list (provided)
const CATEGORIES = [
  "hero","feature","footer","content","testimonial","pricing","login","logos","about","banner","bento","blog","blogpost","careers","casestudies","casestudy","changelog","chatinput","community","compare","component","contact","cta","download","faq","gallery","integration","list","navbar","product","resource","resources","services","signup","stats","team","timeline","waitlist","price"
] as const;

type Category = typeof CATEGORIES[number] | "all";

type TemplateItem = {
  key: string;
  title: string;
  component: React.ComponentType<any>;
  tags: string[]; // categories (loosened for flexibility)
  importPath: string;
  importName: string;
};

// Build registry
const REGISTRY: TemplateItem[] = [
  // OpsFlow sections
  { key: "hero", title: "Hero (OpsFlow)", component: HeroSection, tags: ["hero"], importPath: "@/components/sections/opsflow", importName: "HeroSection" },
  { key: "tiles-three-up", title: "Tiles Three Up (OpsFlow)", component: TilesThreeUpSection, tags: ["feature","bento"], importPath: "@/components/sections/opsflow", importName: "TilesThreeUpSection" },
  { key: "metrics", title: "Metrics Row (OpsFlow)", component: MetricsRowSection, tags: ["stats"], importPath: "@/components/sections/opsflow", importName: "MetricsRowSection" },
  { key: "accordion", title: "Feature Accordion (OpsFlow)", component: FeatureAccordionSection, tags: ["feature","faq","list"], importPath: "@/components/sections/opsflow", importName: "FeatureAccordionSection" },
  { key: "cta", title: "Final CTA (OpsFlow)", component: FinalCTASection, tags: ["cta"], importPath: "@/components/sections/opsflow", importName: "FinalCTASection" },

  // Heroes
  ...Object.entries(Heroes).map(([name, Comp]) => ({
    key: `hero-${name.toLowerCase()}`,
    title: name,
    component: Comp as React.ComponentType<any>,
    tags: ["hero"],
    importPath: "@/templates/shadcn-components/processed/heroes",
    importName: name,
  })),
  // Features (exclude info objects)
  ...Object.entries(Features).filter(([name]) => !name.endsWith("USAGE_EXAMPLES") && !name.endsWith("CATEGORIES") && !name.endsWith("FOCUS_AREAS") && !name.endsWith("METRICS")).map(([name, Comp]) => ({
    key: `feature-${name.toLowerCase()}`,
    title: name,
    component: Comp as React.ComponentType<any>,
    tags: ["feature"],
    importPath: "@/templates/shadcn-components/processed/features",
    importName: name,
  })),
  // CTAs
  ...Object.entries(CTAs).map(([name, Comp]) => ({
    key: `cta-${name.toLowerCase()}`,
    title: name,
    component: Comp as React.ComponentType<any>,
    tags: ["cta"],
    importPath: "@/templates/shadcn-components/processed/ctas",
    importName: name,
  })),
  // Logos
  ...Object.entries(Logos).map(([name, Comp]) => ({
    key: `logos-${name.toLowerCase()}`,
    title: name,
    component: Comp as React.ComponentType<any>,
    tags: ["logos"],
    importPath: "@/templates/shadcn-components/processed/logos",
    importName: name,
  })),
  // Stats
  ...Object.entries(Stats).map(([name, Comp]) => ({
    key: `stats-${name.toLowerCase()}`,
    title: name,
    component: Comp as React.ComponentType<any>,
    tags: ["stats"],
    importPath: "@/templates/shadcn-components/processed/stats",
    importName: name,
  })),
  // Pricing (explicit imports to avoid EnterprisePricing issues)
  { key: "pricing-pricingtable", title: "PricingTable", component: PricingTable as React.ComponentType<any>, tags: ["pricing","price"], importPath: "@/templates/shadcn-components/processed/pricing/PricingTable", importName: "PricingTable" },
  { key: "pricing-pricingcomparison", title: "PricingComparison", component: PricingComparison as React.ComponentType<any>, tags: ["pricing","compare","price"], importPath: "@/templates/shadcn-components/processed/pricing/PricingComparison", importName: "PricingComparison" },
  { key: "pricing-pricingfeatures", title: "PricingFeatures", component: PricingFeatures as React.ComponentType<any>, tags: ["pricing","feature"], importPath: "@/templates/shadcn-components/processed/pricing/PricingFeatures", importName: "PricingFeatures" },
  // Integration
  ...Object.entries(Integration).map(([name, Comp]) => ({
    key: `integration-${name.toLowerCase()}`,
    title: name,
    component: Comp as React.ComponentType<any>,
    tags: ["integration"],
    importPath: "@/templates/shadcn-components/processed/integration",
    importName: name,
  })),
  // Testimonials
  ...Object.entries(Testimonials).map(([name, Comp]) => ({
    key: `testimonial-${name.toLowerCase()}`,
    title: name,
    component: Comp as React.ComponentType<any>,
    tags: ["testimonial"],
    importPath: "@/templates/shadcn-components/processed/testimonials",
    importName: name,
  })),
  // Contact
  ...Object.entries(Contact).map(([name, Comp]) => ({
    key: `contact-${name.toLowerCase()}`,
    title: name,
    component: Comp as React.ComponentType<any>,
    tags: ["contact","signup"],
    importPath: "@/templates/shadcn-components/processed/contact",
    importName: name,
  })),
  // About
  ...Object.entries(About).map(([name, Comp]) => ({
    key: `about-${name.toLowerCase()}`,
    title: name,
    component: Comp as React.ComponentType<any>,
    tags: ["about","content"],
    importPath: "@/templates/shadcn-components/processed/about",
    importName: name,
  })),
  // Bento
  ...Object.entries(Bento).filter(([name]) => !name.endsWith("Type")).map(([name, Comp]) => ({
    key: `bento-${name.toLowerCase()}`,
    title: name,
    component: Comp as React.ComponentType<any>,
    tags: ["bento","feature"],
    importPath: "@/templates/shadcn-components/processed/bento",
    importName: name,
  })),
];

function usageSnippet(item: TemplateItem) {
  return `import { ${item.importName} } from "${item.importPath}"\n\n<${item.importName} />`;
}

export default function TemplateCatalogPage() {
  const [selected, setSelected] = useState<Category>("all");

  const counts = useMemo(() => {
    const map = new Map<string, number>();
    REGISTRY.forEach((i) => i.tags.forEach((t) => map.set(t, (map.get(t) || 0) + 1)));
    return map;
  }, []);

  const filtered = useMemo(() => {
    if (selected === "all") return REGISTRY;
    return REGISTRY.filter((i) => i.tags.includes(selected));
  }, [selected]);

  return (
    <main className="min-h-screen bg-background">
      <section className="section-padding-large">
        <div className="container space-y-8">
          <div>
            <div className="clerk-inspired-badge mb-2"><span>Template Catalog</span></div>
            <h1 className="enterprise-headline">OpsFlow Section Library</h1>
            <p className="enterprise-body mt-2">Preview and copy standardized sections. Use filters to browse by type.</p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            <Button variant={selected === "all" ? "default" : "outline"} size="sm" onClick={() => setSelected("all")}>
              All <span className="ml-2 rounded bg-primary/10 px-1 text-xs">{REGISTRY.length}</span>
            </Button>
            {CATEGORIES.map((cat) => (
              <Button key={cat} variant={selected === cat ? "default" : "outline"} size="sm" onClick={() => setSelected(cat)}>
                {cat}
                <span className="ml-2 rounded bg-muted px-1 text-xs">{counts.get(cat) || 0}</span>
              </Button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 gap-8">
            {filtered.map(({ key, title, component: Section, importName, importPath }) => (
              <Card key={key} className="overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-display-sm">{title}</CardTitle>
                  <CopyButton value={usageSnippet({ key, title, component: Section, tags: [], importName, importPath })} label="Copy usage" />
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
