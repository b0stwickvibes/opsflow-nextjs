import dynamic from "next/dynamic";
import { MarketingCTA } from "@/components/shared/layout";
import FeaturesHero from "@/components/blocks/heroes/FeaturesHero";
const FeatureCategoryGrid = dynamic(() => import("@/components/domain/product/FeatureCategoryGrid"), { ssr: false });
const AdvancedOps = dynamic(() => import("@/components/domain/product/AdvancedOps"), { ssr: false });
const RoleShowcase = dynamic(() => import("@/components/domain/roles/RoleShowcase"), { ssr: false });
const TemplatesPromo = dynamic(() => import("@/components/domain/templates/TemplatesPromo"), { ssr: false });
const IntegrationPartners = dynamic(() => import("@/components/shared/layout/IntegrationPartners"), { ssr: false });

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
