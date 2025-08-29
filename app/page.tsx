/**
 * Homepage - Restaurant operations platform
 */

import { MarketingHero } from "@/components/blocks/heroes";
import { RestaurantFeatureGrid } from "@/components/domain/restaurant";
import { Testimonials, MarketingBrandLogos, MarketingFeaturesGrid } from "@/components/shared/data-display";
import { MarketingCTA } from "@/components/shared/layout";
import { CustomerMarquee } from "@/components/enhanced/CustomerMarquee";
import { landingV2Enabled } from "@/lib/config/flags";
import { landingContent } from "@/lib/marketing/content";
import { trackInteraction } from "@/lib/analytics";

export default function HomePage() {
  if (landingV2Enabled) {
    return (
      <div className="min-h-screen -mt-12 -mx-6 overflow-x-hidden">
        {/* Marketing Hero */}
        <div className="container mx-auto px-4 sm:px-6">
          <MarketingHero 
            title={landingContent.hero.title}
            description={landingContent.hero.description}
            badge={landingContent.hero.badge}
            showDashboardPreview={false}
          />
        </div>

        <MarketingBrandLogos heading="Trusted by forward-thinking teams" items={landingContent.logos} />

        <MarketingFeaturesGrid heading="What’s included" subheading="Replace with feature blocks from Figma" items={landingContent.features} />

        <Testimonials title="What customers say" items={landingContent.testimonials} />

        <div className="container mx-auto px-4 sm:px-6 py-16">
          <MarketingCTA
            title={landingContent.cta.title}
            description={landingContent.cta.description}
            primaryAction={landingContent.cta.primary}
            secondaryAction={landingContent.cta.secondary}
            onPrimaryClick={() => trackInteraction('cta_click', { location: 'home', variant: 'primary' })}
            onSecondaryClick={() => trackInteraction('cta_click', { location: 'home', variant: 'secondary' })}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen -mt-12 -mx-6 overflow-x-hidden">
      {/* Marketing Hero */}
      <div className="container mx-auto px-4 sm:px-6">
        <MarketingHero 
          title="Transforming restaurant operations"
          description="Make food safety simple and compliance effortless through intelligent automation."
          badge="Restaurant Operations Platform"
        />
      </div>
      
      {/* Restaurant Features */}
      <div className="container mx-auto px-4 sm:px-6 py-16">
        <RestaurantFeatureGrid />
      </div>
      
      {/* Customer Marquee */}
      <CustomerMarquee />
      
      {/* Restaurant Testimonials */}
      <div className="container mx-auto px-4 sm:px-6 py-16">
        <Testimonials
          items={[
            {
              quote: "OpsFlow cut our temp-log time by 60% and boosted HACCP compliance.",
              author: "Sarah M., GM at The Oak"
            },
            {
              quote: "15 hrs/week saved across two locations—ROI in month one.",
              author: "Tony R., Owner of Cantina Añejo"
            },
            {
              quote: "Seamless with Toast + MarginEdge. No more spreadsheet chaos.",
              author: "Alex E., F&B Director at Range"
            }
          ]}
        />
      </div>
      
      {/* Final CTA */}
      <div className="container mx-auto px-4 sm:px-6 py-16">
        <MarketingCTA
          title="Ready to transform your restaurant operations?"
          description="Join thousands of restaurants using OpsFlow to improve compliance, reduce costs, and deliver exceptional experiences."
          primaryAction={{
            text: "Start Free Trial",
            href: "/pricing"
          }}
          secondaryAction={{
            text: "Schedule Demo", 
            href: "/company/contact"
          }}
        />
      </div>
    </div>
  )
}
