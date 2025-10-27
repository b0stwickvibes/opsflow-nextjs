/**
 * Coffee Shops Solutions Page
 *
 * Enterprise-grade coffee shop operations management.
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
  Package,
  Timer
} from 'lucide-react';

export default function CoffeePage() {
  const handleStartTrial = () => {
    console.log("Start trial clicked");
  };

  const handleWatchDemo = () => {
    console.log("Watch demo clicked");
  };

  const handleScheduleDemo = () => {
    console.log("Schedule demo clicked");
  };

  const handleContactSupport = () => {
    console.log("Contact support clicked");
  };

  const handleViewDocs = () => {
    console.log("View documentation clicked");
  };

  return (
    <div className="accent-orange">
      {/* Hero Section - Standard 72px hero offset (8px from navbar) */}
      <Section background="gradient" heroOffset={true} className="hero-ambient">
        <SectionContent maxWidth="6xl">
          <CoffeeHero
            industry="Coffee Shops"
            headline="Master the Morning Rush with Intelligence"
            subheadline="Purpose-built for coffee shops and cafés"
            description="Optimize barista workflows, maintain quality consistency, and manage peak-hour operations with enterprise-grade precision. Real-time queue management, inventory tracking, and intelligent analytics designed specifically for coffee shops."
            badge={{
              text: "Coffee Shops",
              variant: "default"
            }}
            primaryCTA={{
              text: "Start Free Trial",
              action: handleStartTrial
            }}
            secondaryCTA={{
              text: "Watch Demo",
              action: handleWatchDemo
            }}
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
            description="See how OpsFlow AI transforms coffee shop management with measurable improvements in efficiency, speed, and profitability across all areas of your business."
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
                description: "Train your baristas and launch with full support and guidance.",
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
                link: {
                  text: "Learn more about workflow features",
                  action: () => console.log("Navigate to features")
                }
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
                link: {
                  text: "Explore inventory tools",
                  action: () => console.log("Navigate to features")
                }
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
                link: {
                  text: "View quality features",
                  action: () => console.log("Navigate to features")
                }
              }
            ]}
            ctaSection={{
              title: "Ready to Transform Your Coffee Shop Operations?",
              description: "Join hundreds of successful cafés already using OpsFlow AI to increase efficiency and quality.",
              primaryCTA: {
                text: "Start Your Free Trial",
                action: handleStartTrial
              },
              secondaryCTA: {
                text: "Schedule a Demo",
                action: handleScheduleDemo
              }
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
                description: "Manage your entire coffee shop from anywhere, anytime with our intuitive mobile apps.",
                benefits: [
                  "Real-time notifications for critical events",
                  "Remote access to sales and inventory data",
                  "Approve schedules and orders on-the-go"
                ],
                link: {
                  text: "Explore mobile features",
                  action: () => console.log("Mobile features")
                }
              },
              {
                icon: BarChart3,
                title: "Predictive Analytics",
                description: "Make data-driven decisions with AI-powered insights and forecasting.",
                benefits: [
                  "Demand forecasting for bean ordering",
                  "Peak hour traffic pattern analysis",
                  "Pricing strategy recommendations"
                ],
                link: {
                  text: "View analytics demo",
                  action: () => console.log("Analytics demo")
                }
              },
              {
                icon: FileCheck,
                title: "Automated Reporting",
                description: "Generate comprehensive reports automatically for stakeholders and operations.",
                benefits: [
                  "Daily, weekly, and monthly performance reports",
                  "Waste tracking and cost analysis",
                  "Custom reports for café groups"
                ],
                link: {
                  text: "See reporting examples",
                  action: () => console.log("Reporting examples")
                }
              },
              {
                icon: Sparkles,
                title: "Customer Experience Tools",
                description: "Enhance guest satisfaction with integrated loyalty programs and feedback systems.",
                benefits: [
                  "Digital loyalty and rewards programs",
                  "Real-time customer feedback collection",
                  "Personalized marketing campaigns"
                ],
                link: {
                  text: "Learn about CX tools",
                  action: () => console.log("CX tools")
                }
              }
            ]}
          />
        </SectionContent>
      </Section>

      <SectionDivider />

      {/* Platform Features Grid */}
      <Section background="muted" padding="lg">
        <SectionContent maxWidth="5xl">
          <CoffeePlatformFeaturesGrid
            badge="Platform Features"
            title="Enterprise-Grade Platform Capabilities"
            subtitle="Built on a robust, scalable infrastructure designed for high-volume coffee shop operations."
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
                  description: "Lightning-fast data synchronization ensures your entire team stays coordinated with instant updates across all devices and locations.",
                  benefits: [
                    "Sub-100ms data synchronization across all devices",
                    "Real-time order updates during morning rush",
                    "Instant staff notifications for critical events",
                    "Zero data conflicts with intelligent merge resolution"
                  ],
                  integrations: ["Square", "Toast", "Clover", "Lightspeed"]
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
                  description: "Your data is protected with the same security standards used by financial institutions, ensuring complete safety and compliance.",
                  benefits: [
                    "256-bit AES encryption for all data transmission",
                    "SOC 2 Type II certified infrastructure",
                    "Multi-factor authentication for all users",
                    "Role-based access control for sensitive data",
                    "Automated compliance audit trails"
                  ],
                  integrations: ["Auth0", "Okta", "Azure AD"]
                }
              },
              {
                id: "integrations",
                type: "connectivity",
                icon: Settings,
                title: "Custom Integrations",
                description: "Connect with existing POS and accounting systems",
                stats: { primary: "50+", label: "integrations" },
                details: {
                  title: "Custom Integrations",
                  description: "Seamlessly connect with your existing technology stack through our extensive integration library and custom API options.",
                  benefits: [
                    "One-click integration with major POS systems",
                    "Bi-directional data sync with accounting software",
                    "Payroll system integration for labor management",
                    "Custom API access for unique requirements"
                  ],
                  integrations: ["QuickBooks", "Xero", "ADP", "Gusto", "Square", "Toast"]
                }
              },
              {
                id: "multi-location",
                type: "scalability",
                icon: Users,
                title: "Multi-Location Support",
                description: "Manage multiple cafés from single dashboard",
                stats: { primary: "Unlimited", label: "locations" },
                details: {
                  title: "Multi-Location Support",
                  description: "Scale your operations effortlessly with centralized management and location-specific controls for café groups of any size.",
                  benefits: [
                    "Unified dashboard for all locations",
                    "Location-specific settings and permissions",
                    "Cross-location inventory transfers",
                    "Consolidated reporting across all cafés",
                    "Franchise-ready architecture"
                  ]
                }
              },
              {
                id: "offline",
                type: "reliability",
                icon: Smartphone,
                title: "Offline Mode",
                description: "Operations continue without internet connectivity",
                stats: { primary: "100%", label: "uptime" },
                details: {
                  title: "Offline Mode",
                  description: "Never miss a beat with robust offline functionality that keeps your operations running smoothly even during internet outages.",
                  benefits: [
                    "Full operational capability offline",
                    "Automatic sync when connection restored",
                    "Local data caching for instant access",
                    "Conflict-free data reconciliation"
                  ]
                }
              }
            ]}
          />
        </SectionContent>
      </Section>

      <SectionDivider />

      {/* Process Solutions */}
      <Section background="default" padding="lg">
        <SectionContent maxWidth="6xl">
          <CoffeeProcessSolutions
            title="Tailored Solutions for Your Coffee Shop"
            description="We solve the most common café operations challenges with intelligent automation and proven workflows."
            badge="Problem-Solving Approach"
            processSolutions={[
              {
                title: "Morning Rush Management",
                description: "Optimize peak-hour operations and reduce wait times",
                icon: Timer,
                timeframe: "Week 1",
                complexity: "Medium",
                solutions: [
                  {
                    problem: "Morning rush leads to long wait times, order errors, and stressed baristas, resulting in lost customers and revenue.",
                    solution: "AI-powered queue management with optimized station workflows and real-time order routing that reduces wait times by 45 seconds per order.",
                    benefits: [
                      "45% faster order fulfillment during peak hours",
                      "Real-time queue optimization and load balancing",
                      "Reduced barista stress and fewer errors",
                      "Improved customer satisfaction scores"
                    ]
                  }
                ]
              },
              {
                title: "Inventory & Waste Control",
                description: "Reduce waste and optimize bean ordering",
                icon: Package,
                timeframe: "Week 2",
                complexity: "Low",
                solutions: [
                  {
                    problem: "Manual bean tracking leads to stale inventory, over-ordering, and 15-20% product waste that impacts profitability.",
                    solution: "Automated inventory tracking with bean freshness monitoring, roast date tracking, and AI-powered purchasing recommendations.",
                    benefits: [
                      "85% reduction in product waste and spoilage",
                      "Automatic bean freshness alerts and rotation",
                      "Optimal ordering based on demand patterns",
                      "Real-time inventory visibility across locations"
                    ]
                  }
                ]
              },
              {
                title: "Quality & Training Management",
                description: "Maintain consistency and improve barista skills",
                icon: Coffee,
                timeframe: "Week 3",
                complexity: "High",
                solutions: [
                  {
                    problem: "Inconsistent drink quality across shifts and baristas leads to customer complaints and reduced loyalty.",
                    solution: "Digital recipe standards with training modules, performance tracking, and real-time quality checks to ensure consistency.",
                    benefits: [
                      "98% recipe adherence with digital standards",
                      "Automated training tracking and certification",
                      "Real-time quality alerts for deviations",
                      "Improved customer satisfaction and loyalty"
                    ]
                  }
                ]
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
            description="Everything you need to know about implementing OpsFlow AI for your coffee shop operations."
            badge="FAQ"
            faqs={[
              {
                question: "How long does implementation take?",
                answer: "Implementation time varies based on your needs. Our Express Setup gets you operational in 30 minutes, while our Guided Implementation for complex, multi-location operations typically takes 1-2 weeks. Both options include comprehensive training and support.",
                category: "setup"
              },
              {
                question: "Do you integrate with my existing POS system?",
                answer: "Yes! We integrate with 50+ major POS systems including Square, Toast, Clover, and more. Our integration syncs menu items, sales data, and inventory in real-time, eliminating duplicate data entry and ensuring accuracy across all systems.",
                category: "features"
              },
              {
                question: "What happens if my internet goes down during the morning rush?",
                answer: "OpsFlow AI includes robust offline functionality. You can continue core operations like order management, inventory tracking, and staff coordination without internet connectivity. All data automatically syncs when your connection is restored, ensuring zero data loss.",
                category: "features"
              },
              {
                question: "How does pricing work for multiple locations?",
                answer: "We offer flexible multi-location pricing with volume discounts. Each café gets full access to all platform features, with centralized management and reporting. Contact our sales team for custom pricing based on your number of locations and specific requirements.",
                category: "pricing"
              },
              {
                question: "Is my data secure?",
                answer: "Absolutely. We use bank-level 256-bit encryption for all data transmission and storage. Our platform is SOC 2 compliant and includes features like multi-factor authentication, role-based access control, and comprehensive audit logs. Your data is backed up multiple times daily across geographically distributed servers.",
                category: "support"
              },
              {
                question: "Can I try it before committing?",
                answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required to start. Our team provides onboarding support during your trial to ensure you experience the full value of the platform.",
                category: "pricing"
              }
            ]}
            supportCTA={{
              title: "Still Have Questions?",
              description: "Our support team is here to help 24/7",
              primaryAction: {
                text: "Chat with Support",
                action: handleContactSupport
              },
              secondaryAction: {
                text: "View Documentation",
                action: handleViewDocs
              }
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
            primaryCTA={{
              text: "Start Free Trial",
              action: handleStartTrial
            }}
            secondaryCTA={{
              text: "Schedule a Demo",
              action: handleScheduleDemo
            }}
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
