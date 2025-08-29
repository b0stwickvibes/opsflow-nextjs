import dynamic from "next/dynamic";
import { MarketingCTA } from "@/components/shared/layout";
import FeaturesHeroPro from "@/components/blocks/heroes/FeaturesHeroPro";
import FeatureStats from "@/components/domain/product/FeatureStats";
const FeaturesBento = dynamic(() => import("@/components/domain/product/FeaturesBento"));
const FeatureCategoryGrid = dynamic(() => import("@/components/domain/product/FeatureCategoryGrid"));
const AdvancedOps = dynamic(() => import("@/components/domain/product/AdvancedOps"));
const RoleShowcase = dynamic(() => import("@/components/domain/roles/RoleShowcase"));
const TemplatesPromo = dynamic(() => import("@/components/domain/templates/TemplatesPromo"));
const LocationSecurityShowcase = dynamic(() => import("@/components/domain/security/LocationSecurityShowcase"));
const IntegrationPartners = dynamic(() => import("@/components/shared/layout/IntegrationPartners"));
const InteractiveDemoCTA = dynamic(() => import("@/components/domain/product/InteractiveDemoCTA"));

export default function ProductFeaturesPage() {
  return (
    <div className="min-h-screen">
      {/* Premium Features Hero */}
      <FeaturesHeroPro />

      {/* Bento Features Overview */}
      <FeaturesBento />

      {/* Feature Categories */}
      <FeatureCategoryGrid />

      {/* Stats */}
      <FeatureStats />

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
