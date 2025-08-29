import dynamic from "next/dynamic";
import { MarketingCTA } from "@/components/shared/layout";
import { MarketingBrandLogos } from "@/components/shared/data-display/MarketingBrandLogos";
import FeaturesHeroPro from "@/components/blocks/heroes/FeaturesHeroPro";
import FeatureStats from "@/components/domain/product/FeatureStats";
const FeaturesBento = dynamic(() => import("@/components/domain/product/FeaturesBento"));
const PlasmaFeaturesSection = dynamic(() => import("@/components/domain/product/PlasmaFeaturesSection"));
const FeatureCategoryGrid = dynamic(() => import("@/components/domain/product/FeatureCategoryGrid"));
const UseCaseTabs = dynamic(() => import("@/components/domain/product/UseCaseTabs"));
const CompetitorComparisonStrip = dynamic(() => import("@/components/domain/product/CompetitorComparisonStrip"));
const AdvancedOps = dynamic(() => import("@/components/domain/product/AdvancedOps"));
const TemplatesPromo = dynamic(() => import("@/components/domain/templates/TemplatesPromo"));
const LocationSecurityShowcase = dynamic(() => import("@/components/domain/security/LocationSecurityShowcase"));
const IntegrationPartners = dynamic(() => import("@/components/shared/layout/IntegrationPartners"));
const InteractiveDemoCTA = dynamic(() => import("@/components/domain/product/InteractiveDemoCTA"));

export default function ProductFeaturesPage() {
  return (
    <div className="min-h-screen">
      {/* Premium Features Hero */}
      <FeaturesHeroPro />

      {/* Logos band */}
      <MarketingBrandLogos
        heading="Trusted by leading restaurants and hospitality groups"
        items={[
          { src: "/logos/toast.svg", alt: "Toast" },
          { src: "/logos/square.svg", alt: "Square" },
          { src: "/logos/marginedge.svg", alt: "MarginEdge" },
          { src: "/logos/quickbooks.svg", alt: "QuickBooks" },
          { src: "/logos/slack.svg", alt: "Slack" },
          { src: "/logos/zapier.svg", alt: "Zapier" },
        ]}
      />

      {/* Bento Features Overview */}
      <FeaturesBento />

      {/* Plasma-style feature showcase */}
      <PlasmaFeaturesSection />

      {/* Stats */}
      <FeatureStats />

      {/* Role-based use cases */}
      <UseCaseTabs />

      {/* Competitor comparison strip */}
      <CompetitorComparisonStrip />

      {/* Feature Categories */}
      <FeatureCategoryGrid />

      {/* Interactive Demo CTA */}
      <InteractiveDemoCTA />

      {/* Advanced Operations */}
      <AdvancedOps />

      {/* Location-Based Security */}
      <LocationSecurityShowcase />

      {/* Role-based demos */}
      <RoleShowcase />

      {/* Templates */}
      <TemplatesPromo />

      {/* Integrations band */}
      <section className="bg-muted/30">
        <IntegrationPartners />
      </section>
      
      {/* Call to Action */}
      <div className="container mx-auto px-4 sm:px-6 py-16">
        <MarketingCTA
          title="Ready to experience the difference?"
          description="Join thousands of restaurants, bars, and night clubs using OpsFlow to streamline operations and stay compliant."
          primaryAction={{
            text: "Start Free Trial",
            href: "/pricing"
          }}
          secondaryAction={{
            text: "Contact Sales",
            href: "/company/contact"
          }}
        />
      </div>
    </div>
  );
}
