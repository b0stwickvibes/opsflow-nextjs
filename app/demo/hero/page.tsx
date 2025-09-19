"use client"

import { MarketingCarouselHero, MarketingRollingBlocks } from "@/components/domain/marketing"
import { Section } from "@/components/shared/layout"

export default function HeroDemo() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Section background="none" padding="none">
        <MarketingCarouselHero />
      </Section>
      
      {/* Features Section */}
      <Section background="none" padding="lg">
        <MarketingRollingBlocks />
      </Section>
    </div>
  )
}
