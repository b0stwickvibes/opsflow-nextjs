/**
 * Homepage - Restaurant operations platform
 */

import { MarketingHero } from "@/components/shared/layout"
import { RestaurantFeatureGrid } from "@/components/domain/restaurant"
import { Testimonials } from "@/components/shared/data-display"
import { MarketingCTA } from "@/components/shared/layout"

export default function HomePage() {
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
      
      {/* Restaurant Testimonials */}
      <div className="container mx-auto px-4 sm:px-6 py-16">
        <Testimonials
          testimonials={[
            {
              content: "OpsFlow cut our temp-log time by 60% and boosted HACCP compliance.",
              author: {
                name: "Sarah M.",
                title: "GM",
                company: "The Oak"
              }
            },
            {
              content: "15 hrs/week saved across two locations—ROI in month one.",
              author: {
                name: "Tony R.",
                title: "Owner",
                company: "Cantina Añejo"
              }
            },
            {
              content: "Seamless with Toast + MarginEdge. No more spreadsheet chaos.",
              author: {
                name: "Alex E.",
                title: "F&B Director",
                company: "Range"
              }
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