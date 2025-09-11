import MarketingPage from "@/components/shared/layout/MarketingPage"
import { MarketingCTA } from "@/components/shared/layout"
import { CardSection } from "@/components/shared/data-display"

export default function AboutPage() {
  return (
    <MarketingPage
      title="Transforming restaurant operations"
      subtitle="We make food safety simple and compliance effortless through intelligent automation."
      badge={<span>About OpsFlow AI</span>}
    >
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
    </MarketingPage>
  )
}
