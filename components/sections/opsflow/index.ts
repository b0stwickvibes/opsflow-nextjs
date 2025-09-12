import { HeroSection } from "./Hero";
import { MetricsRowSection } from "./MetricsRow";
import { FeatureAccordionSection } from "./FeatureAccordion";
import { FinalCTASection } from "./FinalCTA";

export { HeroSection } from "./Hero";
export { MetricsRowSection } from "./MetricsRow";
export { FeatureAccordionSection } from "./FeatureAccordion";
export { FinalCTASection } from "./FinalCTA";

export const OPSFLOW_SECTIONS = [
  { key: "hero", title: "Hero", component: HeroSection },
  { key: "metrics", title: "Metrics Row", component: MetricsRowSection },
  { key: "accordion", title: "Feature Accordion", component: FeatureAccordionSection },
  { key: "cta", title: "Final CTA", component: FinalCTASection },
] as const;
