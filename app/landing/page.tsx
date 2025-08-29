import { MarketingHero } from "@/components/shared/layout";
import { MarketingHeroSplit } from "@/components/blocks/heroes/MarketingHeroSplit";
import { MarketingCTATracked } from "@/components/shared/layout/MarketingCTATracked";
import { MarketingBrandLogos, MarketingFeaturesGrid, Testimonials } from "@/components/shared/data-display";
import { MarketingExploreTabs } from "@/components/shared/data-display/MarketingExploreTabs";
import { RestaurantMetricsPanel } from "@/components/domain/restaurant/RestaurantMetricsPanel";
import { landingContent } from "@/lib/marketing/content";
import { PageView } from "@/components/shared/analytics/PageView";

export const metadata = {
  title: "Landing Preview",
  description: "Staging route for new homepage content.",
};

export default function LandingPreviewPage() {
  return (
    <div className="-mt-12 -mx-6 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <MarketingHeroSplit
          eyebrow={(landingContent.hero as any).eyebrow}
          chips={[{ text: 'HACCP Compliant System' }, { text: 'FDA Approved', variant: 'success' }]}
          title={landingContent.hero.title}
          description={landingContent.hero.description}
          primary={{ href: '/pricing', text: 'Get started' }}
          secondary={{ href: '/docs', text: 'Documentation' }}
          features={[
            { title: 'HACCP Compliance', description: 'Automated food safety monitoring with FDA-approved systems.' },
            { title: 'Temperature Monitoring', description: 'Real-time temperature tracking across all equipment.' },
            { title: 'Digital Checklists', description: 'Streamlined daily operations with smart task management.' },
            { title: 'Analytics Dashboard', description: 'Real-time insights for better operational decisions.' },
          ]}
        />
      </div>

      <MarketingBrandLogos
        heading="Trusted by forward-thinking teams"
        items={landingContent.logos}
      />

      <MarketingFeaturesGrid
        heading="What’s included"
        subheading="Replace with feature blocks from Figma"
        items={landingContent.features}
      />

      <RestaurantMetricsPanel />

      <MarketingExploreTabs
        heading="Explore Our Platform"
        subheading="Discover how OpsFlow AI streamlines every aspect of restaurant operations."
        tabs={[
          { key: 'haccp', label: 'HACCP Compliance', features: ['Automated temperature logging', 'Digital checklists', 'Violation alerts & corrective actions'] },
          { key: 'temperature', label: 'Temperature Monitoring', features: ['24/7 automated monitoring', 'Bluetooth sensors', 'Historical data tracking'] },
          { key: 'checklists', label: 'Digital Checklists', features: ['Smart task management', 'Mobile-friendly', 'Templates for BOH/FOH'] },
          { key: 'staff', label: 'Staff Management', features: ['Scheduling', 'Training logs', 'Accountability tools'] },
          { key: 'analytics', label: 'Analytics & Reporting', features: ['KPI dashboards', 'Operational insights', 'Exportable reports'] },
        ]}
      />

      <Testimonials title="What customers say" items={landingContent.testimonials} />

      <div className="container mx-auto px-4 sm:px-6 py-16">
        <MarketingCTATracked
          title={landingContent.cta.title}
          description={landingContent.cta.description}
          primaryAction={landingContent.cta.primary}
          secondaryAction={landingContent.cta.secondary}
          location="landing"
        />
      </div>

      {/* Pageview tracking */}
      <PageView eventName="landing_view" pageTitle="Landing Preview" />
    </div>
  );
}
