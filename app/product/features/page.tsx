import type { Metadata } from "next";
import dynamic from "next/dynamic";
import FeaturesHero from "@/components/domain/product/features/FeaturesHero";
import FeatureStats from "@/components/domain/product/features/FeatureStats";
import { MarketingCTA } from "@/components/shared/layout";

const FeatureCategoryGrid = dynamic(() => import("@/components/domain/product/features/FeatureCategoryGrid"));
const FeatureBento = dynamic(() => import("@/components/domain/product/features/FeatureBento").then(m => ({ default: m.FeatureBento })));
const InteractiveDemoCTA = dynamic(() => import("@/components/domain/product/features/InteractiveDemoCTA"));
const AdvancedOps = dynamic(() => import("@/components/domain/product/features/AdvancedOps"));
const LocationSecurityShowcase = dynamic(() => import("@/components/domain/security/LocationSecurityShowcase"));
const RoleShowcase = dynamic(() => import("@/components/domain/roles/RoleShowcase"));
const TemplatesPromo = dynamic(() => import("@/components/domain/templates/TemplatesPromo"));
const IntegrationPartners = dynamic(() => import("@/components/shared/layout/IntegrationPartners"));

export const metadata: Metadata = {
  title: "Features — OpsFlow AI Restaurant Operations Platform",
  description:
    "Complete restaurant operations management with automated temperature monitoring, HACCP compliance, staff training, and real-time analytics.",
  keywords:
    "restaurant features, HACCP compliance, temperature monitoring, restaurant management software, operations platform",
};

export default function ProductFeaturesPage() {
  return (
    <div className="min-h-screen">
      {/* Premium Features Hero */}
      <FeaturesHero />

      {/* Feature Categories */}
      <FeatureCategoryGrid />

      {/* Stats */}
      <FeatureStats />

      {/* Dashboard Bento */}
      <FeatureBento />

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
            href: "/pricing",
          }}
          secondaryAction={{
            text: "Contact Sales",
            href: "/company/contact",
          }}
        />
      </div>
    </div>
  );
}
