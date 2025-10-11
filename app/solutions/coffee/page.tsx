/**
 * Coffee Shops Solutions Page
 *
 * Enterprise-grade coffee shop operations management solution.
 * Features orange accent theming and coffee-specific features.
 *
 * Uses Section/SectionContent system for consistent padding with HOME page.
 *
 * @page /solutions/coffee
 */

"use client";

import {
  CoffeeHero,
  CoffeeStats,
  CoffeeProcess,
  CoffeeFeatureDeck,
  CoffeeFeatureDeckAlternate,
  CoffeePlatformFeaturesGrid,
  CoffeeProcessSolutions,
  CoffeeFAQ,
  CoffeeCTA
} from '@/components/industry/coffee';
import { Section, SectionContent, SectionDivider } from '@/components/shared/layout';
import {
  DollarSign,
  Clock,
  Target,
  TrendingUp,
  Settings,
  UserCheck,
  Users,
  Coffee,
  Shield,
  Smartphone,
  BarChart3,
  FileCheck,
  Sparkles,
  Zap,
  Lock,
  CheckCircle,
  Star,
  Award,
  Timer,
  Package,
  ClipboardCheck
} from 'lucide-react';

export default function CoffeePage() {
  const handleStartTrial = () => console.log("Start trial clicked");
  const handleWatchDemo = () => console.log("Watch demo clicked");
  const handleScheduleDemo = () => console.log("Schedule demo clicked");
  const handleContactSupport = () => console.log("Contact support clicked");
  const handleViewDocs = () => console.log("View documentation clicked");

  return (
    <div className="accent-orange">
      {/* Hero Section */}
      <Section background="gradient" padding="xl" className="hero-ambient">
        <SectionContent maxWidth="6xl">
          <CoffeeHero
            industry="Coffee Shops"
            headline="Master the Morning Rush with Intelligence"
            subheadline="Purpose-built for coffee shops and cafés"
            description="Optimize barista workflows, maintain quality consistency, and manage peak-hour operations with enterprise-grade precision. Real-time queue management, inventory tracking, and intelligent analytics designed specifically for coffee shops."
            badge={{ text: "Coffee Shops", variant: "default" }}
            primaryCTA={{ text: "Start Free Trial", action: handleStartTrial }}
            secondaryCTA={{ text: "Watch Demo", action: handleWatchDemo }}
            stats={[
              { value: "18%", label: "Cost Reduction" },
              { value: "45sec", label: "Faster Service" },
              { value: "12hrs", label: "Saved Per Week" }
            ]}
          />
        </SectionContent>
      </Section>

      <SectionDivider />

      {/* Stats Section */}
      <Section background="muted" padding="lg">
        <SectionContent maxWidth="4xl">
          <CoffeeStats
            title="Industry-Leading Results for Coffee Shop Operations"
            description="See how OpsFlow AI transforms coffee shop management with measurable improvements in efficiency, speed, and profitability."
            stats={[
              {
                icon: DollarSign,
                value: "18%",
                label: "Cost Reduction",
                description: "Average operational cost savings through optimized inventory and waste reduction"
              },
              {
                icon: Clock,
                value: "45sec",
                label: "Faster Service",
                description: "Average reduction in order fulfillment time during peak morning rush"
              },
              {
                icon: Target,
                value: "98%",
                label: "Quality Consistency",
                description: "Recipe adherence and drink quality standards across all baristas"
              },
              {
                icon: TrendingUp,
                value: "$8K",
                label: "Monthly Revenue Boost",
                description: "Average increase through faster service and reduced waste"
              }
            ]}
          />
        </SectionContent>
      </Section>

      <SectionDivider />

      {/* Process Section */}
      <Section background="default" padding="lg">
        <SectionContent maxWidth="6xl">
          <CoffeeProcess
            title="Simple Setup, Powerful Results"
            description="Get your coffee shop optimized in under 30 minutes with our streamlined onboarding process."
            badge="Quick Implementation"
            steps={[
              {
                step: 1,
                title: "System Integration",
                description: "Connect your existing POS and inventory systems with zero downtime.",
                icon: Settings,
                details: [
                  "One-click integration with major café POS systems",
                  "Import existing menu, beans, and staff data",
                  "No disruption to daily coffee shop operations"
                ],
                timeframe: "10 minutes"
              },
              {
                step: 2,
                title: "Custom Configuration",
                description: "Tailor the platform to your café's unique workflow and standards.",
                icon: UserCheck,
                details: [
                  "Configure drink recipes and pour standards",
                  "Set up bean inventory and roast tracking",
                  "Customize barista roles and station permissions"
                ],
                timeframe: "15 minutes"
              },
              {
                step: 3,
                title: "Team Training & Launch",
                description: "Train your baristas and launch with full support.",
                icon: Users,
                details: [
                  "Quick barista training on mobile workflows",
                  "Station-specific app walkthroughs",
                  "Real-time support during first week"
                ],
                timeframe: "5 minutes"
              }
            ]}
          />
        </SectionContent>
      </Section>

      <SectionDivider />

      {/* Feature Deck */}
      <Section background="muted" padding="lg">
        <SectionContent maxWidth="5xl">
          <CoffeeFeatureDeck
            title="Core Coffee Shop Management Features"
            description="Everything you need to run a profitable, efficient, and consistent coffee shop operation."
            badge="Essential Features"
            features={[
              {
                icon: Coffee,
                title: "Barista Workflow Optimization",
                description: "Real-time order management and station coordination for peak efficiency.",
                benefits: [
                  "Queue management during morning rush",
                  "Recipe consistency across all baristas",
                  "Station coordination and timing optimization"
                ],
                link: { text: "Learn more about workflow features", action: () => {} }
              },
              {
                icon: Package,
                title: "Bean & Inventory Management",
                description: "Track bean freshness, roast dates, and supplies with automated reordering.",
                benefits: [
                  "Automated bean freshness tracking",
                  "Roast date monitoring and alerts",
                  "Predictive ordering for supplies"
                ],
                link: { text: "Explore inventory tools", action: () => {} }
              },
              {
                icon: Timer,
                title: "Quality Control & Training",
                description: "Maintain consistency with recipe standards and barista performance tracking.",
                benefits: [
                  "Digital recipe cards with pour times",
                  "Barista skill tracking and training",
                  "Quality check workflows"
                ],
                link: { text: "View quality features", action: () => {} }
              }
            ]}
            ctaSection={{
              title: "Ready to Transform Your Coffee Shop Operations?",
              description: "Join hundreds of successful cafés already using OpsFlow AI to increase efficiency and quality.",
              primaryCTA: { text: "Start Your Free Trial", action: handleStartTrial },
              secondaryCTA: { text: "Schedule a Demo", action: handleScheduleDemo }
            }}
          />
        </SectionContent>
      </Section>

      <SectionDivider />

      {/* Feature Deck Alternate */}
      <Section background="default" padding="lg">
        <SectionContent maxWidth="6xl">
          <CoffeeFeatureDeckAlternate
            title="Advanced Coffee Shop Operations Platform"
            description="Take your café management to the next level with enterprise-grade tools and insights."
            badge="Premium Features"
            features={[
              {
                icon: Smartphone,
                title: "Mobile-First Café Management",
                description: "Manage your entire coffee shop from anywhere with intuitive mobile apps.",
                benefits: [
                  "Real-time notifications for critical events",
                  "Remote access to sales and inventory",
                  "Approve schedules and orders on-the-go"
                ],
                link: { text: "Explore mobile features", action: () => {} }
              },
              {
                icon: BarChart3,
                title: "Predictive Analytics & Insights",
                description: "Make data-driven decisions with AI-powered forecasting.",
                benefits: [
                  "Demand forecasting for bean ordering",
                  "Peak hour traffic pattern analysis",
                  "Pricing optimization recommendations"
                ],
                link: { text: "View analytics demo", action: () => {} }
              },
              {
                icon: FileCheck,
                title: "Automated Reporting",
                description: "Generate comprehensive reports for operations and ownership.",
                benefits: [
                  "Daily, weekly, and monthly performance reports",
                  "Waste tracking and cost analysis",
                  "Custom reports for café groups"
                ],
                link: { text: "See reporting examples", action: () => {} }
              },
              {
                icon: Sparkles,
                title: "Customer Experience Tools",
                description: "Enhance satisfaction with loyalty programs and feedback systems.",
                benefits: [
                  "Digital loyalty rewards programs",
                  "Customer feedback collection",
                  "Personalized marketing campaigns"
                ],
                link: { text: "Learn about CX tools", action: () => {} }
              }
            ]}
          />
        </SectionContent>
      </Section>

      <SectionDivider />

      {/* Platform Features Grid - Abbreviated for brevity */}
      <Section background="muted" padding="lg">
        <SectionContent maxWidth="5xl">
          <CoffeePlatformFeaturesGrid
            badge="Platform Features"
            title="Enterprise-Grade Platform Capabilities"
            subtitle="Built on robust infrastructure designed for high-volume coffee shop operations."
            features={[
              {
                id: "sync",
                type: "infrastructure",
                icon: Zap,
                title: "Real-Time Sync",
                description: "Instant updates across all devices and locations",
                stats: { primary: "< 100ms", label: "sync time" },
                details: {
                  title: "Real-Time Synchronization",
                  description: "Lightning-fast data synchronization ensures coordination across all stations.",
                  benefits: [
                    "Sub-100ms synchronization across devices",
                    "Real-time order updates during rush",
                    "Instant staff notifications",
                    "Zero data conflicts"
                  ],
                  integrations: ["Square", "Toast", "Clover"]
                }
              },
              {
                id: "security",
                type: "security",
                icon: Lock,
                title: "Bank-Level Security",
                description: "Enterprise encryption and SOC 2 compliance",
                stats: { primary: "256-bit", label: "encryption" },
                details: {
                  title: "Bank-Level Security",
                  description: "Your data is protected with financial-grade security standards.",
                  benefits: [
                    "256-bit AES encryption",
                    "SOC 2 Type II certified",
                    "Multi-factor authentication",
                    "Role-based access control"
                  ],
                  integrations: ["Auth0", "Okta"]
                }
              },
              {
                id: "offline",
                type: "reliability",
                icon: Smartphone,
                title: "Offline Mode",
                description: "Operations continue without internet",
                stats: { primary: "100%", label: "uptime" },
                details: {
                  title: "Offline Mode",
                  description: "Robust offline functionality keeps operations running during internet outages.",
                  benefits: [
                    "Full capability offline",
                    "Automatic sync when restored",
                    "Local data caching",
                    "Conflict-free reconciliation"
                  ]
                }
              }
            ]}
          />
        </SectionContent>
      </Section>

      <SectionDivider />

      {/* Process Solutions - Abbreviated */}
      <Section background="default" padding="lg">
        <SectionContent maxWidth="6xl">
          <CoffeeProcessSolutions
            title="Tailored Solutions for Your Coffee Shop"
            description="We solve the most common café operations challenges with intelligent automation."
            badge="Problem-Solving Approach"
            processSolutions={[
              {
                title: "Morning Rush Management",
                description: "Optimize peak-hour operations",
                icon: Timer,
                timeframe: "Week 1",
                complexity: "Medium",
                solutions: [{
                  problem: "Morning rush leads to long wait times, order errors, and stressed baristas, resulting in lost customers and revenue.",
                  solution: "AI-powered queue management with optimized station workflows and real-time order routing that reduces wait times by 45 seconds per order.",
                  benefits: [
                    "45% faster order fulfillment during peak hours",
                    "Real-time queue optimization",
                    "Reduced barista stress and errors",
                    "Improved customer satisfaction scores"
                  ]
                }]
              },
              {
                title: "Inventory & Waste Control",
                description: "Reduce waste and optimize ordering",
                icon: Package,
                timeframe: "Week 2",
                complexity: "Low",
                solutions: [{
                  problem: "Manual bean tracking leads to stale inventory, over-ordering, and 15-20% product waste that impacts profitability.",
                  solution: "Automated inventory tracking with bean freshness monitoring and AI-powered purchasing recommendations.",
                  benefits: [
                    "85% reduction in product waste",
                    "Automatic bean freshness alerts",
                    "Optimal ordering based on demand",
                    "Real-time inventory visibility"
                  ]
                }]
              }
            ]}
            bottomCTA={{
              title: "Ready to Solve Your Coffee Shop Challenges?",
              description: "See these improvements in your café within the first 30 days.",
              action: handleStartTrial
            }}
          />
        </SectionContent>
      </Section>

      <SectionDivider />

      {/* FAQ Section */}
      <Section background="muted" padding="lg">
        <SectionContent maxWidth="4xl">
          <CoffeeFAQ
            title="Frequently Asked Questions"
            description="Everything you need to know about implementing OpsFlow AI for your coffee shop."
            badge="FAQ"
            faqs={[
              {
                question: "How long does implementation take for my coffee shop?",
                answer: "Our Express Setup gets you operational in 30 minutes. For multi-location cafés, our Guided Implementation typically takes 1-2 weeks and includes comprehensive barista training.",
                category: "setup"
              },
              {
                question: "Do you integrate with my existing POS system?",
                answer: "Yes! We integrate with 50+ major POS systems including Square, Toast, Clover, and more. Our integration syncs menu items, sales data, and inventory in real-time.",
                category: "features"
              },
              {
                question: "What happens if my internet goes down during the morning rush?",
                answer: "OpsFlow AI includes robust offline functionality. You can continue operations without internet. All data automatically syncs when connection is restored.",
                category: "features"
              },
              {
                question: "Can I try it before committing?",
                answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required to start.",
                category: "pricing"
              }
            ]}
            supportCTA={{
              title: "Still Have Questions?",
              description: "Our coffee operations experts are here to help 24/7",
              primaryAction: { text: "Chat with Support", action: handleContactSupport },
              secondaryAction: { text: "View Documentation", action: handleViewDocs }
            }}
          />
        </SectionContent>
      </Section>

      <SectionDivider />

      {/* Final CTA */}
      <Section background="default" padding="xl">
        <SectionContent maxWidth="4xl">
          <CoffeeCTA
            urgencyBadge="Limited Time: First Month Free for New Coffee Shops"
            headline="Ready to Transform Your Coffee Shop Operations?"
            subheadline="Join 600+ successful cafés using OpsFlow AI"
            description="Start your free 14-day trial today and experience the difference enterprise-grade operations management can make. No credit card required."
            primaryCTA={{ text: "Start Free Trial", action: handleStartTrial }}
            secondaryCTA={{ text: "Schedule a Demo", action: handleScheduleDemo }}
            trustIndicators={[
              { icon: CheckCircle, text: "14-day free trial" },
              { icon: Shield, text: "No credit card required" },
              { icon: Award, text: "24/7 support" },
              { icon: Star, text: "4.9/5 rating" }
            ]}
            testimonial={{
              quote: "OpsFlow AI transformed our morning rush. We reduced wait times by 40% and waste by 85%. Our baristas are less stressed, and customer satisfaction is at an all-time high.",
              author: "Michael Torres",
              role: "Owner",
              company: "Brew & Bean Coffee Co."
            }}
          />
        </SectionContent>
      </Section>
    </div>
  );
}
