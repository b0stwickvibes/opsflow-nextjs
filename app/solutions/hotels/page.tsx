/**
 * Hotels Solutions Page
 *
 * Enterprise-grade hotel operations management solution.
 * Features red accent theming and hotel-specific features.
 *
 * Uses Section/SectionContent system for consistent padding with HOME page.
 *
 * @page /solutions/hotels
 */

"use client";

import {
  HotelsHero,
  HotelsStats,
  HotelsProcess,
  HotelsFeatureDeck,
  HotelsFeatureDeckAlternate,
  HotelPlatformFeaturesGrid,
  HotelsProcessSolutions,
  HotelsFAQ,
  HotelsCTA
} from '@/components/industry/hotels';
import { Section, SectionContent, SectionDivider } from '@/components/shared/layout';
import {
  DollarSign,
  Clock,
  Target,
  TrendingUp,
  Settings,
  UserCheck,
  Users,
  Building2,
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
  Bed,
  Utensils,
  Dumbbell
} from 'lucide-react';

export default function HotelsPage() {
  const handleStartTrial = () => console.log("Start trial clicked");
  const handleWatchDemo = () => console.log("Watch demo clicked");
  const handleScheduleDemo = () => console.log("Schedule demo clicked");
  const handleContactSupport = () => console.log("Contact support clicked");
  const handleViewDocs = () => console.log("View documentation clicked");

  return (
    <div className="accent-red">
      {/* Hero Section - Standard 72px hero offset (8px from navbar) */}
      <Section background="gradient" heroOffset={true} className="hero-ambient">
        <SectionContent maxWidth="6xl">
          <HotelsHero
            industry="Hotels & Hospitality"
            headline="Elevate Guest Experience with Intelligent Operations"
            subheadline="Purpose-built for hotels and hospitality venues"
            description="Orchestrate room service, housekeeping, concierge, and multi-venue operations with enterprise-grade precision. Real-time coordination, automated workflows, and intelligent analytics designed specifically for hotels and resorts."
            badge={{ text: "Hotels & Hospitality", variant: "default" }}
            primaryCTA={{ text: "Start Free Trial", action: handleStartTrial }}
            secondaryCTA={{ text: "Watch Demo", action: handleWatchDemo }}
            stats={[
              { value: "35%", label: "Efficiency Gain" },
              { value: "4.8/5", label: "Guest Satisfaction" },
              { value: "25hrs", label: "Saved Per Week" }
            ]}
          />
        </SectionContent>
      </Section>

      <SectionDivider />

      {/* Stats Section */}
      <Section background="muted" padding="lg">
        <SectionContent maxWidth="4xl">
          <HotelsStats
            title="Industry-Leading Results for Hotel Operations"
            description="See how OpsFlow AI transforms hotel management with measurable improvements in efficiency, guest satisfaction, and profitability across all departments."
            stats={[
              {
                icon: DollarSign,
                value: "35%",
                label: "Operational Efficiency",
                description: "Average efficiency gains through coordinated multi-department operations"
              },
              {
                icon: Clock,
                value: "18min",
                label: "Faster Room Turnover",
                description: "Average reduction in room preparation time with optimized housekeeping"
              },
              {
                icon: Target,
                value: "4.8/5",
                label: "Guest Satisfaction",
                description: "Average guest rating with streamlined service coordination"
              },
              {
                icon: TrendingUp,
                value: "$45K",
                label: "Monthly Revenue Boost",
                description: "Average increase through optimized operations and guest experience"
              }
            ]}
          />
        </SectionContent>
      </Section>

      <SectionDivider />

      {/* Process Section */}
      <Section background="default" padding="lg">
        <SectionContent maxWidth="6xl">
          <HotelsProcess
            title="Simple Setup, Powerful Results"
            description="Get your hotel operations optimized in under 30 minutes with our streamlined onboarding process."
            badge="Quick Implementation"
            steps={[
              {
                step: 1,
                title: "System Integration",
                description: "Connect your existing PMS and department systems with zero downtime.",
                icon: Settings,
                details: [
                  "One-click integration with major hotel PMS systems",
                  "Import existing guest, room, and staff data",
                  "No disruption to daily hotel operations"
                ],
                timeframe: "10 minutes"
              },
              {
                step: 2,
                title: "Multi-Department Configuration",
                description: "Tailor the platform to your hotel's unique operations and standards.",
                icon: UserCheck,
                details: [
                  "Configure room service, housekeeping, and concierge workflows",
                  "Set up multi-venue operations (restaurant, bar, spa, gym)",
                  "Customize department roles and permissions"
                ],
                timeframe: "15 minutes"
              },
              {
                step: 3,
                title: "Team Training & Launch",
                description: "Train your staff across all departments and launch with support.",
                icon: Users,
                details: [
                  "Department-specific training sessions",
                  "Mobile app walkthrough for all team members",
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
          <HotelsFeatureDeck
            title="Core Hotel Management Features"
            description="Everything you need to run a profitable, efficient, and guest-focused hotel operation."
            badge="Essential Features"
            features={[
              {
                icon: Bed,
                title: "Room Service & Housekeeping",
                description: "Real-time coordination of room service orders and housekeeping schedules.",
                benefits: [
                  "Automated room status updates",
                  "Priority-based housekeeping assignment",
                  "Room service order tracking and timing"
                ],
                link: { text: "Learn more about room operations", action: () => {} }
              },
              {
                icon: Building2,
                title: "Multi-Venue Coordination",
                description: "Seamless management of restaurant, bar, spa, gym, and event operations.",
                benefits: [
                  "Unified dashboard for all venues",
                  "Cross-venue staff scheduling",
                  "Integrated guest experience tracking"
                ],
                link: { text: "Explore venue management", action: () => {} }
              },
              {
                icon: Users,
                title: "Guest Experience Management",
                description: "Track and optimize every guest touchpoint across all departments.",
                benefits: [
                  "Guest preference tracking and history",
                  "Concierge request management",
                  "Real-time guest satisfaction monitoring"
                ],
                link: { text: "View guest experience tools", action: () => {} }
              }
            ]}
            ctaSection={{
              title: "Ready to Transform Your Hotel Operations?",
              description: "Join hundreds of successful hotels already using OpsFlow AI to enhance guest satisfaction and operational efficiency.",
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
          <HotelsFeatureDeckAlternate
            title="Advanced Hotel Operations Platform"
            description="Take your hotel management to the next level with enterprise-grade tools and insights."
            badge="Premium Features"
            features={[
              {
                icon: Smartphone,
                title: "Mobile-First Hotel Management",
                description: "Manage your entire hotel operation from anywhere with intuitive mobile apps.",
                benefits: [
                  "Real-time notifications across all departments",
                  "Remote access to all venue operations",
                  "Approve requests and schedules on-the-go"
                ],
                link: { text: "Explore mobile features", action: () => {} }
              },
              {
                icon: BarChart3,
                title: "Predictive Analytics & Revenue Management",
                description: "Make data-driven decisions with AI-powered insights and forecasting.",
                benefits: [
                  "Occupancy forecasting and dynamic pricing",
                  "Guest behavior pattern analysis",
                  "Revenue optimization recommendations"
                ],
                link: { text: "View analytics demo", action: () => {} }
              },
              {
                icon: FileCheck,
                title: "Automated Reporting & Compliance",
                description: "Generate comprehensive reports for operations, compliance, and ownership.",
                benefits: [
                  "Daily operational performance reports",
                  "Compliance documentation for inspections",
                  "Custom reports for hotel groups"
                ],
                link: { text: "See reporting examples", action: () => {} }
              },
              {
                icon: Sparkles,
                title: "Guest Loyalty & Personalization",
                description: "Build lasting relationships with integrated loyalty and personalization tools.",
                benefits: [
                  "Automated loyalty program management",
                  "Personalized guest experience workflows",
                  "Targeted marketing campaigns"
                ],
                link: { text: "Learn about loyalty tools", action: () => {} }
              }
            ]}
          />
        </SectionContent>
      </Section>

      <SectionDivider />

      {/* Platform Features Grid */}
      <Section background="muted" padding="lg">
        <SectionContent maxWidth="5xl">
          <HotelPlatformFeaturesGrid
            badge="Platform Features"
            title="Enterprise-Grade Platform Capabilities"
            subtitle="Built on robust infrastructure designed for complex multi-venue hotel operations."
            features={[
              {
                id: "sync",
                type: "infrastructure",
                icon: Zap,
                title: "Real-Time Sync",
                description: "Instant updates across all devices and departments",
                stats: { primary: "< 100ms", label: "sync time" },
                details: {
                  title: "Real-Time Synchronization",
                  description: "Lightning-fast data synchronization ensures perfect coordination across all hotel departments.",
                  benefits: [
                    "Sub-100ms synchronization across all devices",
                    "Real-time room status updates",
                    "Instant cross-department notifications",
                    "Zero data conflicts with intelligent resolution"
                  ],
                  integrations: ["Opera PMS", "Maestro", "Cloudbeds", "Mews"]
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
                  description: "Your data is protected with the same security standards used by financial institutions.",
                  benefits: [
                    "256-bit AES encryption for all data",
                    "SOC 2 Type II certified infrastructure",
                    "Multi-factor authentication",
                    "PCI DSS compliant for payment data"
                  ],
                  integrations: ["Auth0", "Okta", "Azure AD"]
                }
              },
              {
                id: "multi-property",
                type: "scalability",
                icon: Building2,
                title: "Multi-Property Support",
                description: "Manage multiple hotels from single dashboard",
                stats: { primary: "Unlimited", label: "properties" },
                details: {
                  title: "Multi-Property Support",
                  description: "Scale effortlessly with centralized management for hotel groups of any size.",
                  benefits: [
                    "Unified dashboard for all properties",
                    "Property-specific settings and branding",
                    "Cross-property staff management",
                    "Consolidated reporting and analytics"
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
          <HotelsProcessSolutions
            title="Tailored Solutions for Your Hotel"
            description="We solve the most common hotel operations challenges with intelligent automation and proven workflows."
            badge="Problem-Solving Approach"
            processSolutions={[
              {
                title: "Multi-Department Coordination",
                description: "Seamless communication across all hotel departments",
                icon: Building2,
                timeframe: "Week 1",
                complexity: "Medium",
                solutions: [{
                  problem: "Poor communication between departments leads to delayed service, guest complaints, and 25-30% efficiency loss across room service, housekeeping, and concierge.",
                  solution: "Real-time coordination platform with automated workflows and instant notifications that connects all departments for seamless guest service delivery.",
                  benefits: [
                    "35% improvement in cross-department coordination",
                    "Real-time status updates across all teams",
                    "Automated task routing and prioritization",
                    "Reduced guest wait times and complaints"
                  ]
                }]
              },
              {
                title: "Guest Experience Optimization",
                description: "Personalized service at scale",
                icon: Sparkles,
                timeframe: "Week 2",
                complexity: "Low",
                solutions: [{
                  problem: "Generic service delivery and lack of personalization results in low guest satisfaction scores and reduced repeat bookings.",
                  solution: "AI-powered guest preference tracking with automated personalization workflows that remember and anticipate guest needs across stays.",
                  benefits: [
                    "45% increase in guest satisfaction scores",
                    "Automated preference tracking and application",
                    "Personalized service recommendations",
                    "Increased repeat bookings and loyalty"
                  ]
                }]
              },
              {
                title: "Room Turnover Efficiency",
                description: "Optimize housekeeping and room availability",
                icon: Bed,
                timeframe: "Week 3",
                complexity: "High",
                solutions: [{
                  problem: "Inefficient housekeeping scheduling leads to delayed room availability, lost revenue from late checkouts, and 20-25% productivity waste.",
                  solution: "Intelligent housekeeping management with priority-based assignment, real-time status tracking, and optimized routing that maximizes room availability.",
                  benefits: [
                    "18 minutes faster average room turnover",
                    "Priority-based intelligent task assignment",
                    "Real-time room status visibility",
                    "Increased available room inventory"
                  ]
                }]
              }
            ]}
            bottomCTA={{
              title: "Ready to Solve Your Hotel Operations Challenges?",
              description: "See these improvements in your hotel within the first 30 days.",
              action: handleStartTrial
            }}
          />
        </SectionContent>
      </Section>

      <SectionDivider />

      {/* FAQ Section */}
      <Section background="muted" padding="lg">
        <SectionContent maxWidth="4xl">
          <HotelsFAQ
            title="Frequently Asked Questions"
            description="Everything you need to know about implementing OpsFlow AI for your hotel operations."
            badge="FAQ"
            faqs={[
              {
                question: "How long does implementation take for my hotel?",
                answer: "Our Express Setup gets you operational in 30 minutes. For complex, multi-property hotels, our Guided Implementation typically takes 1-2 weeks and includes comprehensive training for all departments.",
                category: "setup"
              },
              {
                question: "Do you integrate with my existing PMS system?",
                answer: "Yes! We integrate with 50+ major hotel PMS systems including Opera, Maestro, Cloudbeds, Mews, and more. Our integration syncs guest data, room status, and operations in real-time.",
                category: "features"
              },
              {
                question: "Can I manage multiple properties from one dashboard?",
                answer: "Absolutely. Our multi-property management feature allows you to oversee unlimited hotels from a single unified dashboard while maintaining property-specific settings and branding.",
                category: "features"
              },
              {
                question: "How does pricing work for hotel groups?",
                answer: "We offer flexible multi-property pricing with volume discounts. Each property gets full access to all platform features, with centralized management and reporting. Contact our sales team for custom pricing.",
                category: "pricing"
              },
              {
                question: "Is guest data secure and compliant?",
                answer: "Yes. We use bank-level 256-bit encryption and are SOC 2 and PCI DSS compliant. Your guest data is protected with multi-factor authentication, role-based access control, and comprehensive audit logs.",
                category: "support"
              },
              {
                question: "Can I try it before committing?",
                answer: "Yes! We offer a 14-day free trial with full access to all features for your hotel. No credit card required to start. Our team provides onboarding support during your trial.",
                category: "pricing"
              }
            ]}
            supportCTA={{
              title: "Still Have Questions?",
              description: "Our hotel operations experts are here to help 24/7",
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
          <HotelsCTA
            urgencyBadge="Limited Time: First Month Free for New Hotels"
            headline="Ready to Transform Your Hotel Operations?"
            subheadline="Join 400+ successful hotels using OpsFlow AI"
            description="Start your free 14-day trial today and experience the difference enterprise-grade operations management can make for your hotel. No credit card required."
            primaryCTA={{ text: "Start Free Trial", action: handleStartTrial }}
            secondaryCTA={{ text: "Schedule a Demo", action: handleScheduleDemo }}
            trustIndicators={[
              { icon: CheckCircle, text: "14-day free trial" },
              { icon: Shield, text: "No credit card required" },
              { icon: Award, text: "24/7 support" },
              { icon: Star, text: "4.9/5 rating" }
            ]}
            testimonial={{
              quote: "OpsFlow AI revolutionized our multi-property operations. We improved guest satisfaction by 45%, reduced room turnover time by 18 minutes, and achieved seamless coordination across all departments. The ROI was immediate.",
              author: "Jennifer Martinez",
              role: "Director of Operations",
              company: "Coastal Luxury Hotels Group"
            }}
          />
        </SectionContent>
      </Section>
    </div>
  );
}
