
import type { Metadata } from "next";
import PricingPageClient from "@/components/domain/pricing/PricingPageClient";
import { PRICING_TIERS, ADD_ONS, FEATURES, FAQ } from "@/lib/pricing/config";

export const metadata: Metadata = {
  title: "Restaurant Operations Pricing — OpsFlow AI",
  description: "Simple, transparent pricing for restaurant operations management. HACCP compliance, temperature monitoring, staff scheduling, and more.",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <PricingPageClient 
        tiers={PRICING_TIERS} 
        addOns={ADD_ONS} 
        features={FEATURES} 
        faq={FAQ} 
      />
    </div>
  );
}
