import { MarketingCTATracked } from "@/components/shared/layout/MarketingCTATracked";
import { MarketingBrandLogos, Testimonials } from "@/components/shared/data-display";
import { RestaurantLandingHero } from "@/components/domain/restaurant/RestaurantLandingHero";
import { StatusDashboard } from "@/components/domain/restaurant/StatusDashboard";
import { RestaurantFeatureCards } from "@/components/domain/restaurant/RestaurantFeatureCards";
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
        <RestaurantLandingHero />
      </div>

      <MarketingBrandLogos
        heading="Trusted by forward-thinking teams"
        items={landingContent.logos}
      />

      <StatusDashboard />
      <RestaurantFeatureCards />

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
