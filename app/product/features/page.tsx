import { ProductHero } from "@/components/blocks/heroes";
import { RestaurantFeatureGrid } from "@/components/domain/restaurant";
import { MarketingCTA } from "@/components/shared/layout";

export default function ProductFeaturesPage() {
  return (
    <div className="min-h-screen">
      {/* Product Hero */}
      <div className="container mx-auto px-4 sm:px-6">
        <ProductHero
          title="Hospitality features built for restaurants"
          subtitle="Discover how our restaurant-first platform streamlines kitchen operations, controls food costs, manages staff scheduling, and ensures compliance with health regulations."
          badge="50+ powerful features"
          primaryAction={{
            text: "Try Restaurant Demo",
            href: "/product/demo"
          }}
          secondaryAction={{
            text: "Restaurant Pricing", 
            href: "/pricing"
          }}
        />
      </div>
      
      {/* Restaurant Feature Grid */}
      <RestaurantFeatureGrid />
      
      {/* Call to Action */}
      <div className="container mx-auto px-4 sm:px-6 py-16">
        <MarketingCTA
          title="Ready to experience the difference?"
          description="Join thousands of restaurants that have transformed their operations with our comprehensive feature suite."
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