import type { Metadata } from "next";
import { DemoHero } from "@/components/domain/demo";
import dynamic from "next/dynamic";
import { MarketingCTA } from "@/components/shared/layout";
import { Section, SectionContent, SectionDivider } from "@/components/shared/layout";
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
      {/* Enhanced Demo Hero with Clerk.com premium styling */}
      <Section background="none" padding="none">
        <DemoHero
          title="See OpsFlow in Action"
          subtitle="Experience how our restaurant-first platform transforms daily operations with live demonstrations of HACCP compliance, temperature monitoring, and staff management."
          badge="Interactive Demo Experience"
          primaryAction={{ text: 'Start Interactive Demo', href: '#demo-features' }}
          secondaryAction={{ text: 'Book Live Demo', href: '#demo-booking' }}
        />
      </Section>

      {/* Demo Features - Interactive Section */}
      <div id="demo-features">
        <Section background="default" padding="lg">
          <DemoFeatures />
        </Section>
      </div>

      {/* Demo Success Metrics */}
      <DemoMetrics />

      {/* Integrations */}
      <section className="bg-muted/30">
        <IntegrationPartners />
      </section>

      {/* Demo Booking Section */}
      <Section background="muted" padding="lg">
        <SectionContent>
          <DemoBooking />
        </SectionContent>
      </Section>

      {/* Final CTA */}
      <Section padding="lg">
        <SectionContent>
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
        </SectionContent>
      </Section>
    </div>
  );
}
