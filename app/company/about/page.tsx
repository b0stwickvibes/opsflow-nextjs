import { AboutSection } from "@/components/domain/company/AboutSection";
import { Section } from "@/components/shared/layout";

export default function AboutPage() {
  return (
    <Section background="default" heroOffset={true}>
      <AboutSection
        industry="restaurants"
        showJoinTeam={true}
      />
    </Section>
  );
}
