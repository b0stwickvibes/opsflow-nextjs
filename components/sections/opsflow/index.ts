import { HeroSection } from "./Hero";
import { TilesThreeUpSection } from "./TilesThreeUp";
import { MetricsRowSection } from "./MetricsRow";
import { FeatureAccordionSection } from "./FeatureAccordion";
import { FinalCTASection } from "./FinalCTA";

export { HeroSection } from "./Hero";
export { TilesThreeUpSection } from "./TilesThreeUp";
export { MetricsRowSection } from "./MetricsRow";
export { FeatureAccordionSection } from "./FeatureAccordion";
export { FinalCTASection } from "./FinalCTA";

export const OPSFLOW_SECTIONS = [
  { key: "hero", title: "Hero", component: HeroSection },
  { key: "tiles-three-up", title: "Tiles: Three Up", component: TilesThreeUpSection },
  { key: "metrics", title: "Metrics Row", component: MetricsRowSection },
  { key: "accordion", title: "Feature Accordion", component: FeatureAccordionSection },
  { key: "cta", title: "Final CTA", component: FinalCTASection },
] as const;
