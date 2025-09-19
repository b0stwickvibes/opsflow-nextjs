/**
 * Radial Background Demo - Shows different intensity and position options
 * Remove this file after testing the backgrounds
 */

import { RadialBackground, Section, SectionContent } from "@/components/shared/layout";

export default function RadialDemo() {
  return (
    <div className="space-y-8">
      {/* Subtle Top */}
      <RadialBackground intensity="subtle" position="top" color="primary" className="min-h-[50vh]">
        <Section background="none" padding="lg">
          <SectionContent maxWidth="4xl" align="center">
            <h2 className="text-2xl font-bold mb-4">Subtle Top Radial</h2>
            <p className="text-muted-foreground">Very gentle gradient from the top</p>
          </SectionContent>
        </Section>
      </RadialBackground>

      {/* Medium Center */}
      <RadialBackground intensity="medium" position="center" color="primary" className="min-h-[50vh]">
        <Section background="none" padding="lg">
          <SectionContent maxWidth="4xl" align="center">
            <h2 className="text-2xl font-bold mb-4">Medium Center Radial</h2>
            <p className="text-muted-foreground">Balanced gradient from the center</p>
          </SectionContent>
        </Section>
      </RadialBackground>

      {/* Strong Bottom */}
      <RadialBackground intensity="strong" position="bottom" color="primary" className="min-h-[50vh]">
        <Section background="none" padding="lg">
          <SectionContent maxWidth="4xl" align="center">
            <h2 className="text-2xl font-bold mb-4">Strong Bottom Radial</h2>
            <p className="text-muted-foreground">More pronounced gradient from the bottom</p>
          </SectionContent>
        </Section>
      </RadialBackground>
    </div>
  );
}