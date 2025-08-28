import { MarketingCTA } from "@/components/shared/layout";
import FeaturesHero from "@/components/blocks/heroes/FeaturesHero";
import FeatureCategoryGrid from "@/components/domain/product/FeatureCategoryGrid";
import AdvancedOps from "@/components/domain/product/AdvancedOps";
import RoleShowcase from "@/components/domain/roles/RoleShowcase";
import TemplatesPromo from "@/components/domain/templates/TemplatesPromo";
import IntegrationPartners from "@/components/shared/layout/IntegrationPartners";

export default function ProductFeaturesPage() {
  return (
    <div className="min-h-screen">
      {/* Features Hero */}
      <FeaturesHero featuresCount={50} />

      {/* Feature Categories */}
      <FeatureCategoryGrid />

      {/* Advanced Operations */}
      <AdvancedOps />

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
