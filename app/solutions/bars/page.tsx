/**
 * Bars & Nightlife Solutions Page
 * 
 * Enterprise-grade bar and nightlife operations management.
 * Features purple accent theming and nightlife-specific features.
 * 
 * Uses Section/SectionContent system for consistent padding with HOME page.
 * 
 * @page /solutions/bars
 */

"use client";

import { 
  BarsHero, 
  BarsStats, 
  BarsProcess, 
  BarsFeatureDeck,
  BarsFeatureDeckAlternate,
  BarPlatformFeaturesGrid,
  BarsProcessSolutions,
  BarsFAQ,
  BarsCTA
} from '@/components/industry/bars';
import { Section, SectionContent, SectionDivider } from '@/components/shared/layout';
import { 
  DollarSign, 
  Clock, 
  Target, 
  TrendingUp, 
  Settings, 
  UserCheck, 
  Users, 
  Wine, 
  Shield,
  Smartphone,
  BarChart3,
  FileCheck,
  Sparkles,
  Zap,
  Lock,
  CheckCircle,
  Star,
  Award
} from 'lucide-react';

export default function BarsPage() {
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
    <div className="accent-purple">
      {/* Hero Section - Exactly 100px from navbar bottom */}
      <Section background="gradient" heroOffset={true} className="hero-ambient">
        <SectionContent maxWidth="6xl">
          <BarsHero
            industry="Bars & Nightlife"
            headline="Streamline Bar Operations with Intelligent Systems"
            subheadline="Purpose-built for high-volume nightlife venues"
            description="Manage inventory, staff, and compliance with enterprise-grade precision. Real-time monitoring, automated workflows, and intelligent analytics designed specifically for bars, nightclubs, and entertainment venues."
            badge={{
              text: "Bars & Nightlife",
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
              { value: "30%", label: "Pour Cost Reduction" },
              { value: "99.2%", label: "Compliance Score" },
              { value: "15hrs", label: "Saved Per Week" }
            ]}
          />
        </SectionContent>
      </Section>

      <SectionDivider />

      {/* Stats Section */}
      <Section background="muted" padding="lg">
        <SectionContent maxWidth="4xl">
          <BarsStats
            title="Industry-Leading Results for Bars & Nightlife"
            description="See how OpsFlow AI transforms bar operations with measurable improvements in efficiency, compliance, and profitability across all areas of your business."
            stats={[
              {
                icon: DollarSign,
                value: "32%",
                label: "Cost Reduction",
                description: "Average operational cost savings through optimized inventory management and waste reduction"
              },
              {
                icon: Clock,
                value: "45min",
                label: "Daily Time Saved",
                description: "Per staff member through automated task management and streamlined workflows"
              },
              {
                icon: Target,
                value: "99.2%",
                label: "Compliance Rate",
                description: "TABC, health department, and safety regulation compliance with automated monitoring"
              },
              {
                icon: TrendingUp,
                value: "$18K",
                label: "Monthly Revenue Boost",
                description: "Average increase through optimized pricing, inventory turns, and customer experience"
              }
            ]}
          />
        </SectionContent>
      </Section>

      <SectionDivider />

      {/* Process Section */}
      <Section background="default" padding="lg">
        <SectionContent maxWidth="6xl">
          <BarsProcess
            title="Simple Setup, Powerful Results"
            description="Get your bar operations optimized in under 30 minutes with our streamlined onboarding process."
            badge="Quick Implementation"
            steps={[
              {
                step: 1,
                title: "System Integration",
                description: "Connect your existing POS and inventory systems with zero downtime.",
                icon: Settings,
                details: [
                  "One-click integration with major POS systems",
                  "Import existing inventory and staff data",
                  "No disruption to daily operations"
                ],
                timeframe: "10 minutes"
              },
              {
                step: 2,
                title: "Custom Configuration",
                description: "Tailor the platform to your bar's unique needs and regulations.",
                icon: UserCheck,
                details: [
                  "Configure drink recipes and portion standards",
                  "Set up local compliance requirements",
                  "Customize staff roles and permissions"
                ],
                timeframe: "15 minutes"
              },
              {
                step: 3,
                title: "Team Training & Launch",
                description: "Train your team and launch with full support and guidance.",
                icon: Users,
                details: [
                  "Interactive staff training sessions",
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
          <BarsFeatureDeck
            title="Core Bar Management Features"
            description="Everything you need to run a profitable, compliant, and efficient bar operation."
            badge="Essential Features"
            features={[
              {
                icon: Wine,
                title: "Smart Inventory Management",
                description: "Real-time tracking of liquor, beer, wine, and supplies with automated reordering.",
                benefits: [
                  "Automated par level maintenance",
                  "Real-time pour cost tracking",
                  "Theft and spillage detection"
                ],
                link: {
                  text: "Learn more about inventory features",
                  action: () => console.log("Navigate to features")
                }
              },
              {
                icon: Users,
                title: "Staff Scheduling & Management",
                description: "Optimize labor costs with intelligent scheduling based on traffic patterns.",
                benefits: [
                  "Predictive scheduling based on historical data",
                  "Shift swapping and coverage management",
                  "Performance tracking and tips reporting"
                ],
                link: {
                  text: "Explore scheduling tools",
                  action: () => console.log("Navigate to features")
                }
              },
              {
                icon: Shield,
                title: "Regulatory Compliance",
                description: "Stay compliant with TABC and health regulations through automated monitoring.",
                benefits: [
                  "Automated compliance check logging",
                  "ID verification and age tracking",
                  "Health code violation prevention"
                ],
                link: {
                  text: "View compliance features",
                  action: () => console.log("Navigate to features")
                }
              }
            ]}
            ctaSection={{
              title: "Ready to Transform Your Bar Operations?",
              description: "Join hundreds of successful bars already using OpsFlow AI to increase profits and ensure compliance.",
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
          <BarsFeatureDeckAlternate
            title="Advanced Bar Operations Platform"
            description="Take your bar management to the next level with enterprise-grade tools and insights."
            badge="Premium Features"
            features={[
              {
                icon: Smartphone,
                title: "Mobile-First Management",
                description: "Manage your entire bar operation from anywhere, anytime with our intuitive mobile apps.",
                benefits: [
                  "Real-time notifications for critical events",
                  "Remote camera access for security monitoring",
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
                  "Demand forecasting for inventory optimization",
                  "Customer behavior pattern analysis",
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
                description: "Generate comprehensive reports automatically for stakeholders and compliance.",
                benefits: [
                  "Daily, weekly, and monthly financial reports",
                  "Compliance documentation for audits",
                  "Custom reports for ownership groups"
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
          <BarPlatformFeaturesGrid
            badge="Platform Features"
            title="Enterprise-Grade Platform Capabilities"
            subtitle="Built on a robust, scalable infrastructure designed for high-volume nightlife operations."
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
                    "Real-time inventory updates during high-volume shifts",
                    "Instant staff notifications for critical events",
                    "Zero data conflicts with intelligent merge resolution"
                  ],
                  integrations: ["Toast POS", "Square", "Clover", "Aloha"]
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
                  integrations: ["QuickBooks", "Xero", "ADP", "Gusto", "Toast", "Square"]
                }
              },
              {
                id: "multi-location",
                type: "scalability",
                icon: Users,
                title: "Multi-Location Support",
                description: "Manage multiple venues from single dashboard",
                stats: { primary: "Unlimited", label: "locations" },
                details: {
                  title: "Multi-Location Support",
                  description: "Scale your operations effortlessly with centralized management and location-specific controls for venue groups of any size.",
                  benefits: [
                    "Unified dashboard for all locations",
                    "Location-specific settings and permissions",
                    "Cross-location inventory transfers",
                    "Consolidated reporting across all venues",
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
          <BarsProcessSolutions
            title="Tailored Solutions for Your Bar"
            description="We solve the most common bar operations challenges with intelligent automation and proven workflows."
            badge="Problem-Solving Approach"
            processSolutions={[
              {
                title: "Inventory Control",
                description: "Eliminate shrinkage and optimize stock levels",
                icon: Wine,
                timeframe: "Week 1",
                complexity: "Medium",
                solutions: [
                  {
                    problem: "Manual inventory counts are time-consuming and error-prone, leading to 15-20% shrinkage from theft, spillage, and poor tracking.",
                    solution: "Automated inventory tracking with real-time pour monitoring, variance alerts, and AI-powered reordering that reduces shrinkage to under 3%.",
                    benefits: [
                      "95% reduction in inventory count time",
                      "Real-time visibility into stock levels and usage patterns",
                      "Automated alerts for unusual consumption or potential theft",
                      "Predictive ordering prevents stockouts and overstock"
                    ]
                  }
                ]
              },
              {
                title: "Labor Management",
                description: "Optimize staffing costs and improve efficiency",
                icon: Users,
                timeframe: "Week 2",
                complexity: "Low",
                solutions: [
                  {
                    problem: "Poor scheduling leads to overstaffing during slow periods and understaffing during busy times, resulting in 25-30% labor cost inefficiency.",
                    solution: "AI-powered predictive scheduling based on historical traffic patterns, weather, events, and sales data to optimize labor costs.",
                    benefits: [
                      "25% reduction in labor costs through optimal scheduling",
                      "Improved staff satisfaction with predictable schedules",
                      "Automatic coverage for no-shows and call-outs",
                      "Real-time labor cost tracking against sales"
                    ]
                  }
                ]
              },
              {
                title: "Compliance Management",
                description: "Maintain perfect regulatory compliance",
                icon: Shield,
                timeframe: "Week 3",
                complexity: "High",
                solutions: [
                  {
                    problem: "Manual compliance tracking leads to missed checks, incomplete documentation, and $5K-$50K fines per violation during inspections.",
                    solution: "Automated compliance monitoring with digital checklists, photo documentation, and real-time alerts for any issues requiring attention.",
                    benefits: [
                      "99.7% compliance rate with automatic task reminders",
                      "Digital audit trail for health and safety inspections",
                      "Instant alerts for temperature or sanitation issues",
                      "Reduced liability and insurance costs"
                    ]
                  }
                ]
              }
            ]}
            bottomCTA={{
              title: "Ready to Solve Your Bar Operations Challenges?",
              description: "See these improvements in your bar within the first 30 days.",
              action: handleStartTrial
            }}
          />
        </SectionContent>
      </Section>

      <SectionDivider />

      {/* FAQ Section */}
      <Section background="muted" padding="lg">
        <SectionContent maxWidth="4xl">
          <BarsFAQ
            title="Frequently Asked Questions"
            description="Everything you need to know about implementing OpsFlow AI for your bar operations."
            badge="FAQ"
            faqs={[
              {
                question: "How long does implementation take?",
                answer: "Implementation time varies based on your needs. Our Express Setup gets you operational in 30 minutes, while our Guided Implementation for complex, multi-location operations typically takes 1-2 weeks. Both options include comprehensive training and support.",
                category: "setup"
              },
              {
                question: "Do you integrate with my existing POS system?",
                answer: "Yes! We integrate with 50+ major POS systems including Toast, Square, Clover, and more. Our integration syncs inventory, sales data, and staff information in real-time, eliminating duplicate data entry and ensuring accuracy across all systems.",
                category: "features"
              },
              {
                question: "What happens if my internet goes down?",
                answer: "OpsFlow AI includes robust offline functionality. You can continue core operations like inventory counts, staff management, and compliance checks without internet connectivity. All data automatically syncs when your connection is restored, ensuring zero data loss.",
                category: "features"
              },
              {
                question: "How does pricing work for multiple locations?",
                answer: "We offer flexible multi-location pricing with volume discounts. Each location gets full access to all platform features, with centralized management and reporting. Contact our sales team for custom pricing based on your number of venues and specific requirements.",
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
          <BarsCTA
            urgencyBadge="Limited Time: First Month Free for New Customers"
            headline="Ready to Transform Your Bar Operations?"
            subheadline="Join 500+ successful bars using OpsFlow AI"
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
              quote: "OpsFlow AI transformed how we manage our nightclub. We cut inventory shrinkage by 80% and labor costs by 25% in the first month. The ROI was immediate and substantial.",
              author: "Marcus Rodriguez",
              role: "Owner & Operator",
              company: "Voltage Nightclub"
            }}
          />
        </SectionContent>
      </Section>
    </div>
  );
}
