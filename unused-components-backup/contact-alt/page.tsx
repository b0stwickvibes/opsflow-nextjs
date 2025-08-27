import type { Metadata } from "next";
import { CustomContactHero } from "@/components/sections/heroes";
import { CustomContactSection, CustomTeamSection, CustomCtaSection } from "@/components/sections/features";

export const metadata: Metadata = {
  title: "Contact OpsFlow | Restaurant Operations Platform",
  description: "Get in touch with our hospitality experts for sales, support, partnerships, and integrations. 24/7 assistance available for restaurant operations.",
};

export default function ContactAltPage() {
  return (
    <div className="-mt-0 overflow-x-hidden">
      {/* Hero section */}
      <div className="container mx-auto px-4 sm:px-6">
        <CustomContactHero />
      </div>

      {/* Contact form section */}
      <section className="bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <CustomContactSection />
        </div>
      </section>

      {/* Team section */}
      <div className="container mx-auto px-4 sm:px-6">
        <CustomTeamSection />
      </div>

      {/* Call to action */}
      <div className="container mx-auto px-4 sm:px-6">
        <CustomCtaSection />
      </div>
    </div>
  );
}
