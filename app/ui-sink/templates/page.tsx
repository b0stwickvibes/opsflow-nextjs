"use client";
import React, { useState } from "react";
import Link from "next/link";

// Import actual template components
import { BillingHero, EarningHero, ImpactHero, MarketingStartupHero, WorkflowHero, VisionHero } from "@/templates/shadcn-components/processed/heroes";
import { RestaurantHero } from "@/components/domain/marketing";
import { NightlifeHero } from "@/components/shared/heroes/NightlifeHero";
import { PlatformFeaturesGrid } from "@/components/shared/features/PlatformFeaturesGrid";
import { PricingComparison } from "@/templates/shadcn-components/processed/pricing";
import { ContactForm, LeadCapture } from "@/templates/shadcn-components/processed/contact";
import { FeatureGrid, FeatureAccordion, FeatureCards, FeatureCarousel, FeatureHighlight, FeatureList, FeatureShowcase2, FeatureSplit, FeatureTabs, FeatureTimeline, FeatureRollingBlocks, Feature169Restaurant, FeatureWorkflowShowcase } from "@/templates/shadcn-components/processed/features";
import { FeatureBento as CleanFeatureBento } from "@/components/domain/marketing/FeatureBento";
import { KPIShowcase, StatsDisplay, MetricsDashboard } from "@/templates/shadcn-components/processed/stats";
import { CallToAction, DemoRequest, TrialSignup } from "@/templates/shadcn-components/processed/ctas";
import { RestaurantCTA, RestaurantTrialCTA, RestaurantDemoCTA } from "@/templates/shadcn-components/processed/ctas";
import { ComplianceFAQ } from "@/templates/shadcn-components/processed/faqs/ComplianceFAQ";
import { SupportFAQ } from "@/templates/shadcn-components/processed/faqs/SupportFAQ";
import { FAQSection } from "@/components/shared/data-display/FAQSection";
import { AboutSection } from "@/templates/shadcn-components/processed/about";
import { BentoGrid, BentoLayout, PremiumBentoSection } from "@/templates/shadcn-components/processed/bento";
import { ComparisonTable, CompetitorAnalysis } from "@/templates/shadcn-components/processed/compare";

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

export default function TemplateCatalogPage() {
  const [selected, setSelected] = useState<string>("all");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<string>("az");

  // Template registry with actual components and their props
  const templates = [
    { id: 1, title: "Premium Restaurant Hero", category: "hero", component: RestaurantHero, props: { onNavigate: (page: string) => console.log(`Navigate: ${page}`) }, description: "Enhanced restaurant hero with Stripe/Clerk premium styling, interactive dashboard mockups, and coordinated animations" },
    { id: 2, title: "Billing Hero", category: "hero", component: BillingHero, props: { industry: 'restaurant' as const }, description: "Restaurant billing hero section" },
    { id: 3, title: "Earning Hero", category: "hero", component: EarningHero, props: { industry: 'restaurant' as const }, description: "Restaurant earnings hero section" },
    { id: 4, title: "Impact Hero", category: "hero", component: ImpactHero, props: { industry: 'restaurant' as const }, description: "Restaurant impact hero section" },
    { id: 5, title: "Workflow Hero", category: "hero", component: WorkflowHero, props: { industry: 'restaurant' as const }, description: "Restaurant workflow hero section" },
    { id: 6, title: "Vision Hero", category: "hero", component: VisionHero, props: { industry: 'restaurant' as const }, description: "Restaurant vision hero section" },
    { id: 7, title: "Marketing Startup Hero", category: "hero", component: MarketingStartupHero, props: { industry: 'restaurant' as const, variant: 'bordered' as const, showFeatures: true }, description: "Marketing hero for restaurant startup acceleration with SOP-compliant design" },
    { id: 8, title: "Nightlife Hero", category: "hero", component: NightlifeHero, props: { variant: 'bar' as const }, description: "Nightlife venue hero with interactive card, metrics, and testimonial - inspired by provided design" },
    { id: 9, title: "Platform Features Grid", category: "feature", component: PlatformFeaturesGrid, props: { industry: 'restaurant' as const }, description: "6-card features grid showcasing platform capabilities with stats, charts, security, and team coordination" },
    { id: 10, title: "Feature Grid", category: "feature", component: FeatureGrid, props: {}, description: "Feature showcase grid" },
    { id: 11, title: "Feature Accordion", category: "feature", component: FeatureAccordion, props: {}, description: "Expandable feature list" },
    { id: 12, title: "Feature Cards", category: "feature", component: FeatureCards, props: {}, description: "Feature cards layout" },
    { id: 13, title: "Feature Bento (Clean)", category: "feature", component: CleanFeatureBento, props: { industry: 'restaurant' as const }, description: "Clean Clerk-inspired feature bento layout - GOLD STANDARD COMPLIANT" },
    { id: 14, title: "Feature Carousel", category: "feature", component: FeatureCarousel, props: {}, description: "Feature carousel slider" },
    { id: 15, title: "Feature Highlight", category: "feature", component: FeatureHighlight, props: {}, description: "Highlighted feature section" },
    { id: 16, title: "Feature List", category: "feature", component: FeatureList, props: {}, description: "Simple feature list" },
    { id: 17, title: "Feature Showcase 2", category: "feature", component: FeatureShowcase2, props: {}, description: "Alternative feature showcase" },
    { id: 18, title: "Feature Split", category: "feature", component: FeatureSplit, props: {}, description: "Split layout feature section" },
    { id: 19, title: "Feature Tabs", category: "feature", component: FeatureTabs, props: {}, description: "Tabbed feature content" },
    { id: 20, title: "Feature Timeline", category: "feature", component: FeatureTimeline, props: {}, description: "Feature timeline display" },
    { id: 21, title: "Pricing Comparison", category: "pricing", component: PricingComparison, props: { industry: 'restaurants' as const }, description: "Pricing comparison layout" },
    { id: 22, title: "Contact Form", category: "contact", component: ContactForm, props: {}, description: "Contact form component" },
    { id: 23, title: "Lead Capture", category: "contact", component: LeadCapture, props: {}, description: "Lead capture form" },
    { id: 24, title: "KPI Showcase", category: "testimonial", component: KPIShowcase, props: {}, description: "Key performance indicators" },
    { id: 25, title: "Stats Display", category: "testimonial", component: StatsDisplay, props: {}, description: "Statistics display component" },
    { id: 26, title: "Metrics Dashboard", category: "testimonial", component: MetricsDashboard, props: {}, description: "Dashboard for metrics" },
    { id: 27, title: "Call To Action", category: "cta", component: CallToAction, props: {}, description: "Call to action section" },
    { id: 28, title: "Demo Request (Enhanced)", category: "cta", component: DemoRequest, props: { industry: 'restaurant' as const }, description: "Premium demo booking with glassmorphism design, Stripe/Clerk-style enhancements, and featured blue calendar icon" },
    { id: 29, title: "Trial Signup (Enhanced)", category: "cta", component: TrialSignup, props: { industry: 'restaurant' as const }, description: "Premium trial signup with glassmorphism design, Stripe/Clerk-style enhancements, and featured calendar demo booking" },
    { id: 30, title: "Restaurant CTA (Primary)", category: "cta", component: RestaurantCTA, props: { industry: 'restaurant' as const }, description: "Restaurant-focused CTA with social proof" },
    { id: 31, title: "Restaurant Trial CTA", category: "cta", component: RestaurantTrialCTA, props: {}, description: "Simple trial-focused CTA" },
    { id: 32, title: "Restaurant Demo CTA", category: "cta", component: RestaurantDemoCTA, props: {}, description: "Demo-focused CTA with benefits" },
    { id: 33, title: "Compliance FAQ", category: "faq", component: ComplianceFAQ, props: {}, description: "Compliance frequently asked questions" },
    { id: 34, title: "Support FAQ", category: "faq", component: SupportFAQ, props: {}, description: "Support frequently asked questions" },
    { id: 35, title: "FAQ Section", category: "faq", component: FAQSection, props: {}, description: "General FAQ section" },
    { id: 36, title: "About Section", category: "about", component: AboutSection, props: {}, description: "About us section" },
    { id: 37, title: "Bento Grid", category: "bento", component: BentoGrid, props: {}, description: "Grid layout for bento" },
    { id: 38, title: "Bento Layout", category: "bento", component: BentoLayout, props: {}, description: "Flexible bento layout" },
    { id: 39, title: "Premium Bento Section", category: "bento", component: PremiumBentoSection, props: { industry: 'restaurants' as const }, description: "Premium restaurant operations showcase with live metrics and glassmorphism design" },
    { id: 40, title: "Comparison Table", category: "compare", component: ComparisonTable, props: {}, description: "Table for comparing items" },
    { id: 41, title: "Competitor Analysis", category: "compare", component: CompetitorAnalysis, props: {}, description: "Analysis of competitors" },
    { id: 42, title: "Feature Rolling Blocks", category: "feature", component: FeatureRollingBlocks, props: {}, description: "Rolling blocks for marketing/operations features" },
    { id: 43, title: "Feature169 Restaurant", category: "feature", component: Feature169Restaurant, props: { industry: 'restaurant' as const }, description: "Converted shadcn Feature169 with tabs interface, restaurant operations focus, and BARS-DEMO-DESIGN-STANDARDS compliance (clerk-inspired-badge, primary colors, purple checkboxes)" },
    { id: 44, title: "Feature Workflow Showcase", category: "feature", component: FeatureWorkflowShowcase, props: { industry: 'restaurant' as const }, description: "Interactive workflow selection with sidebar navigation, restaurant operations focus, and full BARS-DEMO-DESIGN-STANDARDS compliance including purple checkboxes, clerk-inspired badges, and professional styling" },
  ];

  const categories = ["all", "hero", "feature", "pricing", "contact", "testimonial", "cta", "faq", "about", "bento", "compare"];

  const filteredTemplates = templates.filter(template => {
    const matchesCategory = selected === "all" || template.category === selected;
    const matchesQuery = query === "" ||
      template.title.toLowerCase().includes(query.toLowerCase()) ||
      template.category.toLowerCase().includes(query.toLowerCase()) ||
      template.description.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const sortedTemplates = [...filteredTemplates].sort((a, b) => {
    if (sort === "az") return a.title.localeCompare(b.title);
    if (sort === "za") return b.title.localeCompare(a.title);
    return a.category.localeCompare(b.category);
  });

  return (
    <main className="min-h-screen bg-background p-8">
      <div className="space-y-8">
        <div>
          <Link 
            href="/ui-sink" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            ← Back to UI Sink
          </Link>
          <h1 className="text-3xl font-bold mb-4">Template Catalog</h1>
          <p className="text-muted-foreground">Preview and copy standardized sections. Use filters to browse by type.</p>
        </div>

        {/* Search + Sort */}
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="w-full md:max-w-sm">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name or tag…"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-muted-foreground">Sort</span>
            <button
              className={`px-3 py-2 text-sm rounded-md transition-colors ${
                sort === "az"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => setSort("az")}
            >
              A–Z
            </button>
            <button
              className={`px-3 py-2 text-sm rounded-md transition-colors ${
                sort === "za"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => setSort("za")}
            >
              Z–A
            </button>
            <button
              className={`px-3 py-2 text-sm rounded-md transition-colors ${
                sort === "category"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => setSort("category")}
            >
              Category
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-3 py-2 text-sm rounded-md transition-colors ${
                selected === category
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => {
                setSelected(category);
              }}
            >
              {category}
              <span className="ml-2 rounded bg-gray-100 px-1 text-xs">
                {category === "all" ? templates.length : templates.filter(t => t.category === category).length}
              </span>
            </button>
          ))}
        </div>

        {/* Template Grid */}
        <div className="space-y-8">
          {sortedTemplates.map((template) => (
            <div key={template.id} className="border rounded-lg p-6 bg-white shadow-sm">
              <div className="mb-6">
                <h3 className="font-semibold mb-2 text-lg">{template.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{template.description}</p>
                <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                  {template.category}
                </span>
              </div>

              {/* Render the actual component at full size */}
              <div className="border-t pt-6">
                <div className="text-sm text-gray-500 mb-4">Full Preview:</div>
                <TemplateBoundary>
                  {React.createElement(template.component as React.ComponentType<any>, template.props)}
                </TemplateBoundary>
              </div>
            </div>
          ))}
        </div>

        {sortedTemplates.length === 0 && (
          <div className="text-center py-8">
            <p className="text-muted-foreground">No templates found matching your criteria.</p>
          </div>
        )}
      </div>
    </main>
  );
}
