import type { Metadata } from "next";
import FeaturesHeroPremium from "@/components/domain/product/features/FeaturesHeroPremium";
import { AdvancedOperations } from "@/components/shared/layout/AdvancedOperations";
import { FinalCTA } from "@/components/shared/layout/FinalCTA";
import MarketingPage from "@/components/shared/layout/MarketingPage";

export const metadata: Metadata = {
  title: "Features — OpsFlow AI Restaurant Operations Platform",
  description:
    "Complete restaurant operations management with automated temperature monitoring, HACCP compliance, staff training, and real-time analytics. See all features that help restaurants save time and stay compliant.",
  keywords:
    "restaurant features, HACCP compliance, temperature monitoring, restaurant management software, operations platform",
};

export default function ProductFeaturesPage() {
  return (
    <MarketingPage
      title="All OpsFlow Features"
      subtitle="Purpose-built for restaurant operations teams — automate compliance, streamline workflows, and surface insights that drive ROI."
      accent="orange"
    >
      {/* Premium Aurora Hero */}
      <FeaturesHeroPremium />

      {/* Advanced Operations Features */}
      <AdvancedOperations />

      {/* Final CTA */}
      <div className="py-16">
        <FinalCTA className="py-0" />
      </div>
    </MarketingPage>
  );
}
