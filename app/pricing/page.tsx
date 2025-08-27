

import type { Metadata } from "next";
import { MarketingHero, MarketingCTA } from "@/components/shared/layout";
import { RestaurantPricingTable } from "@/components/domain/restaurant";
import { ROICalculator } from "@/components/domain/pricing";
import { FeatureComparison, FAQSection } from "@/components/shared/data-display";

export const metadata: Metadata = {
  title: "Pricing — OpsFlow AI",
  description: "Simple, transparent pricing for restaurant operations.",
};

// Restaurant-focused FAQ items
const restaurantFaqItems = [
  {
    question: "How does the free trial work?",
    answer:
      "Get 14 days of full access to OpsFlow features (temperature monitoring, HACCP, staff management). No card required.",
  },
  {
    question: "Can I change plans later?",
    answer:
      "Yes. Upgrades are prorated immediately; downgrades take effect at the end of the billing cycle.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "All major cards. Enterprise can use invoice / ACH with NET 30 terms.",
  },
  {
    question: "Is there a setup fee?",
    answer:
      "No setup fees for Starter/Professional. Enterprise includes onboarding & integration support.",
  },
  {
    question: "Do you offer multi-location discounts?",
    answer:
      "Yes—volume discounts for 5+ locations. Talk to sales for custom pricing.",
  },
];

export default function PricingPage() {
  return (
    <div className="-mt-0 overflow-x-hidden">
      {/* Contained hero */}
      <div className="container mx-auto px-4 sm:px-6">
        <MarketingHero
          title="Simple, Transparent Pricing"
          description="Choose the plan that fits your restaurant operations. 14-day free trial, no credit card."
          align="center"
        />
      </div>

      {/* Pricing table (contained) */}
      <div className="container mx-auto px-4 sm:px-6">
        <RestaurantPricingTable />
      </div>

      {/* ROI calculator with muted background, contained content */}
      <section className="bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <ROICalculator />
        </div>
      </section>

      {/* Feature comparison (contained) */}
      <div className="container mx-auto px-4 sm:px-6">
        <FeatureComparison />
      </div>

      {/* FAQ (contained) */}
      <div className="container mx-auto px-4 sm:px-6">
        <FAQSection
          title="Pricing Questions"
          description="Common questions about our plans and billing"
          items={restaurantFaqItems}
        />
      </div>

      {/* Closing CTA (contained) */}
      <div className="container mx-auto px-4 sm:px-6">
        <MarketingCTA
          title="Ready to Get Started?"
          description="Join restaurants improving HACCP compliance and cutting costs with OpsFlow."
          primaryAction={{ text: "Start Free Trial", href: "/pricing" }}
          secondaryAction={{ text: "Request Demo", href: "/company/contact" }}
        />
      </div>
    </div>
  );
}