import { HeroSection } from "@/components/sections/opsflow";
import { TilesThreeUpSection } from "@/components/sections/opsflow";
import { MetricsRowSection } from "@/components/sections/opsflow";
import { FeatureAccordionSection } from "@/components/sections/opsflow";
import { FinalCTASection } from "@/components/sections/opsflow";

export default function TestPageOne() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
<TilesThreeUpSection />
      <MetricsRowSection />
      <FeatureAccordionSection />
      <FinalCTASection />
    </main>
  );
}
