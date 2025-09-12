"use client";
import React, { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CopyButton from "@/components/ui/CopyButton";

// Simple fallback select without pulling shadcn Select here to keep this light
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex items-center gap-2 text-sm text-muted-foreground">
      <span className="w-28 shrink-0">{label}</span>
      <div className="grow">{children}</div>
    </label>
  );
}

// OpsFlow sections
import { HeroSection, MetricsRowSection, FeatureAccordionSection, FinalCTASection } from "@/components/sections/opsflow";

// Processed template exports
import * as Heroes from "@/templates/shadcn-components/processed/heroes";
import * as Features from "@/templates/shadcn-components/processed/features";
import * as CTAs from "@/templates/shadcn-components/processed/ctas";
import * as Stats from "@/templates/shadcn-components/processed/stats";
import { PricingTable } from "@/templates/shadcn-components/processed/pricing/PricingTable";
import { PricingComparison } from "@/templates/shadcn-components/processed/pricing/PricingComparison";
import * as Contact from "@/templates/shadcn-components/processed/contact";
import * as About from "@/templates/shadcn-components/processed/about";
import * as Bento from "@/templates/shadcn-components/processed/bento";

// Category filter list (provided)
const CATEGORIES = [
  "hero","feature","footer","content","pricing","login","about","banner","bento","blog","blogpost","careers","casestudies","casestudy","changelog","chatinput","community","component","contact","cta","download","faq","gallery","list","navbar","product","resource","resources","services","signup","stats","team","timeline","waitlist","price"
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

type BlueprintSection = {
  importPath: string;
  importName: string;
  props?: Record<string, any>;
};

// Simple error boundary to sandbox broken templates
class TemplateBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean; msg?: string }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, msg: error?.message };
  }
  componentDidCatch(_e: Error) {
    // noop: keep catalog resilient
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="rounded-md border border-destructive/40 bg-destructive/5 p-4 text-sm text-destructive">
          Template failed to render. Check export, props, or styling. {this.state.msg && <span className="opacity-70">({this.state.msg})</span>}
        </div>
      );
    }
    return this.props.children;
  }
}

// Build registry
const REGISTRY: TemplateItem[] = [
  // OpsFlow sections
  { key: "hero", title: "Hero (OpsFlow)", component: HeroSection, tags: ["hero"], importPath: "@/components/sections/opsflow", importName: "HeroSection" },
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

function SectionCard({ item, onAdd }: { item: TemplateItem; onAdd: (s: BlueprintSection) => void }) {
  const { component: Section, importName, importPath, title } = item;

  // Per-item props controls (only for known components)
  const [industry, setIndustry] = useState<'restaurants' | 'bars' | 'coffee' | 'hotels'>('restaurants');
  const [variant, setVariant] = useState<'ambient' | 'outline' | 'ghost' | 'mono'>('outline');
  const [energy, setEnergy] = useState<'subtle' | 'balanced' | 'bold'>('balanced');
  const [leadKey, setLeadKey] = useState<string>('Efficiency');
  const [leadIndex, setLeadIndex] = useState<number>(0);

  const isKPI = importName === 'KPIShowcase';
  const isStatsDisplay = importName === 'StatsDisplay';
  const isMetrics = importName === 'MetricsDashboard';
  const isIntegrationGrid = importName === 'IntegrationGrid';

  const props: Record<string, any> = {};
  if (isKPI) Object.assign(props, { industry, variant, energy, leadKey });
  if (isStatsDisplay) Object.assign(props, { industry, variant, energy, leadIndex });
  if (isMetrics) Object.assign(props, { industry });
  if (isIntegrationGrid) Object.assign(props, {});

  const hasControls = isKPI || isStatsDisplay || isMetrics || isIntegrationGrid;

  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between gap-4">
        <CardTitle className="text-display-sm">{title}</CardTitle>
        <div className="flex items-center gap-2">
          <CopyButton value={usageSnippet(item)} label="Copy usage" />
          <Button size="sm" variant="outline" onClick={() => onAdd({ importName, importPath, props })}>
            Add to blueprint
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {hasControls && (
          <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-3">
            {(isKPI || isStatsDisplay || isMetrics) && (
              <Field label="Industry">
                <select className="w-full rounded-md border bg-background p-2" value={industry} onChange={(e) => setIndustry(e.target.value as any)}>
                  <option value="restaurants">restaurants</option>
                  <option value="bars">bars</option>
                  <option value="coffee">coffee</option>
                  <option value="hotels">hotels</option>
                </select>
              </Field>
            )}
            {(isKPI || isStatsDisplay) && (
              <Field label="Variant">
                <select className="w-full rounded-md border bg-background p-2" value={variant} onChange={(e) => setVariant(e.target.value as any)}>
                  <option value="outline">outline</option>
                  <option value="ambient">ambient</option>
                  <option value="ghost">ghost</option>
                  <option value="mono">mono</option>
                </select>
              </Field>
            )}
            {(isKPI || isStatsDisplay) && (
              <Field label="Energy">
                <select className="w-full rounded-md border bg-background p-2" value={energy} onChange={(e) => setEnergy(e.target.value as any)}>
                  <option value="subtle">subtle</option>
                  <option value="balanced">balanced</option>
                  <option value="bold">bold</option>
                </select>
              </Field>
            )}
            {isKPI && (
              <Field label="Lead key">
                <Input value={leadKey} onChange={(e) => setLeadKey(e.target.value)} placeholder="e.g. Compliance" />
              </Field>
            )}
            {isStatsDisplay && (
              <Field label="Lead index">
                <Input type="number" value={leadIndex} onChange={(e) => setLeadIndex(Number(e.target.value) || 0)} min={0} />
              </Field>
            )}
          </div>
        )}
        <div className="container">
          <TemplateBoundary>
            <Section {...props} />
          </TemplateBoundary>
        </div>
      </CardContent>
    </Card>
  );
}

export default function TemplateCatalogPage() {
  const [selected, setSelected] = useState<Category>("all");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<"az" | "za" | "category">("az");
  const [blueprint, setBlueprint] = useState<BlueprintSection[]>([]);

  const addToBlueprint = (s: BlueprintSection) => setBlueprint((prev) => [...prev, s]);
  const clearBlueprint = () => setBlueprint([]);

  const counts = useMemo(() => {
    const map = new Map<string, number>();
    REGISTRY.forEach((i) => i.tags.forEach((t) => map.set(t, (map.get(t) || 0) + 1)));
    return map;
  }, []);

  const filtered = useMemo(() => {
    const base = selected === "all" ? REGISTRY : REGISTRY.filter((i) => i.tags.includes(selected));
    const q = query.trim().toLowerCase();
    const searched = q
      ? base.filter((i) =>
          i.title.toLowerCase().includes(q) ||
          i.importName.toLowerCase().includes(q) ||
          i.tags.some((t) => t.toLowerCase().includes(q))
        )
      : base;
    const sorted = [...searched].sort((a, b) => {
      if (sort === "az") return a.title.localeCompare(b.title);
      if (sort === "za") return b.title.localeCompare(a.title);
      // category: compare first tag then title
      const at = a.tags[0] || "";
      const bt = b.tags[0] || "";
      const c = at.localeCompare(bt);
      return c !== 0 ? c : a.title.localeCompare(b.title);
    });
    return sorted;
  }, [selected, query, sort]);

  return (
    <main className="min-h-screen bg-background">
      <section className="section-padding-large">
        <div className="container space-y-8">
          <div>
            <div className="clerk-inspired-badge mb-2"><span>Template Catalog</span></div>
            <h1 className="enterprise-headline">OpsFlow Section Library</h1>
            <p className="enterprise-body mt-2">Preview and copy standardized sections. Use filters to browse by type.</p>
          </div>

          {/* Blueprint panel */}
          <Card className="border-primary/20">
            <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <CardTitle className="text-base">Blueprint cart</CardTitle>
              <div className="flex items-center gap-2">
                <CopyButton 
                  value={JSON.stringify({ sections: blueprint }, null, 2)} 
                  label={`Copy (${blueprint.length})`} 
                />
                <Button size="sm" variant="outline" onClick={clearBlueprint} disabled={blueprint.length === 0}>
                  Clear
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <pre className="max-h-64 overflow-auto rounded bg-muted/50 p-3 text-xs">
{JSON.stringify({ sections: blueprint }, null, 2)}
              </pre>
              <p className="mt-2 text-xs text-muted-foreground">
                Tip: Save this JSON and run: node scripts/page-blueprinter.mjs --input blueprint.json --output app/solutions/draft/page.tsx
              </p>
            </CardContent>
          </Card>

          {/* Search + Sort */}
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="w-full md:max-w-sm">
              <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search by name or tag…" />
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-muted-foreground">Sort</span>
              <Button size="sm" variant={sort === "az" ? "default" : "outline"} onClick={() => setSort("az")}>A–Z</Button>
              <Button size="sm" variant={sort === "za" ? "default" : "outline"} onClick={() => setSort("za")}>Z–A</Button>
              <Button size="sm" variant={sort === "category" ? "default" : "outline"} onClick={() => setSort("category")}>Category</Button>
            </div>
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
            {filtered.map((item) => (
              <SectionCard key={item.key} item={item} onAdd={addToBlueprint} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
