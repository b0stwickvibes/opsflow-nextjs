import type { Metadata } from "next";
import { ProductFeaturesHero } from "@/components/shared/heroes/ProductFeaturesHero";
import { Section, SectionContent, SectionDivider } from "@/components/shared/layout";
import {
  DailyTasksSection,
  FoodSafetySection,
  AdvancedOpsSection,
  TeamAndLocationsSection
} from "@/components/domain/product/features/RestaurantFeaturesPageSections";
import {
  StripePlatformOverview,
  InteractiveFeatureShowcase,
  FeatureComparisonSection,
  FeaturesCTA
} from "@/components/domain/product/features";

export const metadata: Metadata = {
  title: "Features — OpsFlow Restaurant Operations Platform",
  description:
    "Complete restaurant operations management with automated temperature monitoring, HACCP compliance, staff training, and real-time analytics. See all features that help restaurants save time and stay compliant.",
  keywords:
    "restaurant features, HACCP compliance, temperature monitoring, restaurant management software, operations platform",
};

export default function ProductFeaturesPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" padding="xl" className="hero-ambient">
        <SectionContent maxWidth="full">
          <ProductFeaturesHero 
            industry="restaurant" 
            variant="default" 
            className="pt-0"
          />
        </SectionContent>
      </Section>

      <SectionDivider />

      {/* Feature Categories Overview */}
      <Section background="muted" padding="lg">
        <SectionContent maxWidth="6xl">
          <StripePlatformOverview />
        </SectionContent>
      </Section>

      <SectionDivider />

      {/* Daily Tasks & Checklists */}
      <Section background="default" padding="lg">
        <SectionContent maxWidth="6xl">
          <DailyTasksSection />
        </SectionContent>
      </Section>

      <SectionDivider />

      {/* Food Safety & Compliance */}
      <Section background="muted" padding="lg">
        <SectionContent maxWidth="6xl">
          <FoodSafetySection />
        </SectionContent>
      </Section>

      <SectionDivider />

      {/* Team & Multi-Location */}
      <Section background="default" padding="lg">
        <SectionContent maxWidth="6xl">
          <TeamAndLocationsSection />
        </SectionContent>
      </Section>

      <SectionDivider />

      {/* Interactive Feature Showcase */}
      <Section background="muted" padding="lg">
        <SectionContent maxWidth="6xl">
          <InteractiveFeatureShowcase />
        </SectionContent>
      </Section>

      <SectionDivider />

      {/* Advanced Operations */}
      <Section background="default" padding="lg">
        <SectionContent maxWidth="6xl">
          <AdvancedOpsSection />
        </SectionContent>
      </Section>

      <SectionDivider />

      {/* Feature Comparison */}
      <Section background="muted" padding="lg">
        <SectionContent maxWidth="6xl">
          <FeatureComparisonSection />
        </SectionContent>
      </Section>

      <SectionDivider />

      {/* Final CTA */}
      <Section background="default" padding="xl">
        <SectionContent maxWidth="4xl">
          <FeaturesCTA />
        </SectionContent>
      </Section>
    </>
  );
}
