import type { Metadata } from "next";
import { DemoHero } from "@/components/blocks/heroes/DemoHero";
import dynamic from "next/dynamic";
import { MarketingCTA } from "@/components/shared/layout";
const IntegrationPartners = dynamic(() => import("@/components/shared/layout/IntegrationPartners"));
const DemoFeatures = dynamic(() => import("@/components/domain/demo").then(m => m.DemoFeatures));
const DemoMetrics = dynamic(() => import("@/components/domain/demo").then(m => m.DemoMetrics));
const DemoBooking = dynamic(() => import("@/components/domain/demo").then(m => m.DemoBooking));

export const metadata: Metadata = {
  title: "Product Demo — OpsFlow AI",
  description: "See OpsFlow's restaurant operations platform in action. Interactive demo of HACCP compliance, inventory management, and staff scheduling features.",
};

export default function ProductDemoPage() {
  return (
    <div className="min-h-screen">
      {/* Demo Hero */}
      <DemoHero
        title="See OpsFlow in Action"
        subtitle="Experience how our restaurant-first platform transforms daily operations with live demonstrations of HACCP compliance, temperature monitoring, and staff management."
        badge="Interactive Demo Experience"
        primaryAction={{ text: 'Start Interactive Demo', href: '#demo-features' }}
        secondaryAction={{ text: 'Book Live Demo', href: '#demo-booking' }}
      />

      {/* Demo Features - Interactive Section */}
      <section id="demo-features">
        <DemoFeatures />
      </section>

      {/* Demo Success Metrics */}
      <DemoMetrics />

      {/* Integrations */}
      <section className="bg-muted/30">
        <IntegrationPartners />
      </section>

      {/* Demo Booking Section */}
      <section id="demo-booking" className="bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <DemoBooking />
        </div>
      </section>

      {/* Final CTA */}
      <div className="container mx-auto px-4 sm:px-6 py-16">
        <MarketingCTA
          title="Ready to Transform Your Restaurant Operations?"
          description="Join thousands of restaurants using OpsFlow to improve compliance, reduce costs, and deliver exceptional experiences."
          primaryAction={{
            text: "Start Free Trial",
            href: "/pricing"
          }}
          secondaryAction={{
            text: "Schedule Live Demo",
            href: "#demo-booking"
          }}
        />
      </div>
    </div>
  );
}
