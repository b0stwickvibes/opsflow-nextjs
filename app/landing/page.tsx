import { MarketingCTA, MarketingHero } from "@/components/shared/layout";
import { MarketingBrandLogos, MarketingFeaturesGrid, Testimonials } from "@/components/shared/data-display";
import { landingContent } from "@/lib/marketing/content";
import { trackInteraction } from "@/lib/analytics";
import { PageView } from "@/components/shared/analytics/PageView";

export const metadata = {
  title: "Landing Preview",
  description: "Staging route for new homepage content.",
};

export default function LandingPreviewPage() {
  return (
    <div className="-mt-12 -mx-6 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <MarketingHero
          title={landingContent.hero.title}
          description={landingContent.hero.description}
          badge={landingContent.hero.badge}
          showDashboardPreview={false}
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

      <Testimonials title="What customers say" items={landingContent.testimonials} />

      <div className="container mx-auto px-4 sm:px-6 py-16">
        <MarketingCTA
          title={landingContent.cta.title}
          description={landingContent.cta.description}
          primaryAction={landingContent.cta.primary}
          secondaryAction={landingContent.cta.secondary}
          onPrimaryClick={() => trackInteraction('cta_click', { location: 'landing', variant: 'primary' })}
          onSecondaryClick={() => trackInteraction('cta_click', { location: 'landing', variant: 'secondary' })}
        />
      </div>

      {/* Pageview tracking */}
      <PageView eventName="landing_view" pageTitle="Landing Preview" />
    </div>
  );
}
