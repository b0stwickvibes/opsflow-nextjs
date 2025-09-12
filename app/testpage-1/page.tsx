import { HeroSection } from "@/components/sections/opsflow";
// Removed TilesThreeUpSection; using MetricsRowSection instead
import { MetricsRowSection } from "@/components/sections/opsflow";
import { FeatureAccordionSection } from "@/components/sections/opsflow";
import { FinalCTASection } from "@/components/sections/opsflow";

export default function TestPageOne() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
<MetricsRowSection />
      <MetricsRowSection />
      <FeatureAccordionSection />
      <FinalCTASection />
    </main>
  );
}
