import { MarketingHero } from "@/components/shared/layout"
import { MarketingCTA } from "@/components/shared/layout"
import { CardSection } from "@/components/shared/data-display"

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <MarketingHero
        title="Transforming restaurant operations"
        description="We make food safety simple and compliance effortless through intelligent automation."
        badge="About OpsFlow AI"
      />

      {/* Values Section */}
      <CardSection />

      {/* CTA Section */}
      <MarketingCTA
        title="Ready to get started?"
        description="Join hundreds of restaurants using OpsFlow."
        primaryAction={{
          text: "Contact Us",
          href: "/company/contact"
        }}
      />
    </div>
  )
}