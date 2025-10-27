/**
 * Homepage - Restaurant operations platform
 * Updated to use new non-repetitive components
 */

import { RestaurantHomeHero, RestaurantPlatformExplorer } from "@/components/domain/restaurant";
import { MarketingRollingBlocks } from "@/components/domain/marketing";
import { Testimonials } from "@/components/shared/data-display";
import { MarketingCTA } from "@/components/shared/layout";
import { CustomerMarquee } from "@/components/shared/enhanced/CustomerMarquee";
import { Section, SectionContent, SectionDivider, RadialBackground } from "@/components/shared/layout";

export default function HomePage() {
  return (
    <RadialBackground intensity="subtle" position="top" color="primary">
      {/* Hero Section - Consistent hero spacing (Stripe-inspired 100-116px offset) */}
      <Section background="none" heroOffset={true}>
        <RestaurantHomeHero />
      </Section>

      <SectionDivider />

      {/* Platform Explorer - Clean section separation */}
      <Section background="default" padding="lg">
        <RestaurantPlatformExplorer />
      </Section>

      <SectionDivider />

      {/* Marketing Rolling Blocks - Alternating background */}
      <Section background="muted" padding="lg">
        <MarketingRollingBlocks />
      </Section>

      <SectionDivider />

      {/* Customer Marquee - Full width accent */}
      <Section background="accent" padding="md" className="py-8">
        <CustomerMarquee />
      </Section>

      <SectionDivider />

      {/* Restaurant Testimonials - Clean content container */}
      <Section background="default" padding="xl">
        <SectionContent maxWidth="4xl" align="center">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
              Trusted by Restaurant Operators
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how OpsFlow is transforming restaurant operations across the industry
            </p>
          </div>
          <Testimonials
            items={[
              {
                quote: "OpsFlow cut our temp-log time by 60% and boosted HACCP compliance.",
                author: "Sarah M., GM at The Oak"
              },
              {
                quote: "15 hrs/week saved across two locations—ROI in month one.",
                author: "Tony R., Owner of Cantina Añejo"
              },
              {
                quote: "Seamless with Toast + MarginEdge. No more spreadsheet chaos.",
                author: "Alex E., F&B Director at Range"
              }
            ]}
          />
        </SectionContent>
      </Section>

      <SectionDivider />

      {/* Final CTA - Strong call-to-action section */}
      <Section background="gradient" padding="xl">
        <SectionContent maxWidth="3xl" align="center">
          <MarketingCTA
            title="Ready to transform your restaurant operations?"
            description="Join hundreds of restaurants already using OpsFlow to streamline compliance, reduce costs, and improve efficiency."
            primaryAction={{
              text: "Start Free Trial",
              href: "/start-trial"
            }}
            secondaryAction={{
              text: "Schedule Demo",
              href: "/demo"
            }}
          />
        </SectionContent>
      </Section>
    </RadialBackground>
  );
}
