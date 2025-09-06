import type { Metadata } from "next";
import { FeaturesHeroPremium } from "@/components/domain/product";
import { 
  AdvancedOperations,
  FinalCTA
} from "@/components/shared/layout";

export const metadata: Metadata = {
  title: "Features — OpsFlow AI Restaurant Operations Platform",
  description: "Complete restaurant operations management with automated temperature monitoring, HACCP compliance, staff training, and real-time analytics. See all features that help restaurants save time and stay compliant.",
  keywords: "restaurant features, HACCP compliance, temperature monitoring, restaurant management software, operations platform",
};

export default function ProductFeaturesPage() {
  return (
    <div className="min-h-screen">
      {/* Premium Aurora Hero */}
      <FeaturesHeroPremium />
      
      {/* Advanced Operations Features */}
      <AdvancedOperations />
      
      {/* Final CTA */}
      <div className="container mx-auto px-4 sm:px-6 py-16">
        <FinalCTA className="py-0" />
      </div>
    </div>
  );
}
