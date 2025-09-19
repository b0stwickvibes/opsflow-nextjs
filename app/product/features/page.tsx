import type { Metadata } from "next";
import { ProductFeaturesHero } from "@/components/shared/heroes/ProductFeaturesHero";
import { Section, SectionContent } from "@/components/shared/layout";

export const metadata: Metadata = {
  title: "Features — OpsFlow Restaurant Operations Platform",
  description:
    "Complete restaurant operations management with automated temperature monitoring, HACCP compliance, staff training, and real-time analytics. See all features that help restaurants save time and stay compliant.",
  keywords:
    "restaurant features, HACCP compliance, temperature monitoring, restaurant management software, operations platform",
};

export default function ProductFeaturesPage() {
  return (
    <Section background="none" padding="none" className="pt-16">
      <SectionContent maxWidth="full">
        <ProductFeaturesHero 
          industry="restaurant" 
          variant="default" 
          className="pt-0"
        />
      </SectionContent>
    </Section>
  );
}
