/**
 * Restaurant Solutions Page
 *
 * Enterprise-grade restaurant operations management.
 * Features blue accent theming and restaurant-specific features.
 *
 * Uses Section/SectionContent system for consistent padding with HOME page.
 *
 * @page /solutions/restaurants
 */

"use client";

import {
  RestaurantsHero,
  RestaurantsStats,
  RestaurantsProcess,
  RestaurantsFeatureDeck,
  RestaurantsFeatureDeckAlternate,
  RestaurantPlatformFeaturesGrid,
  RestaurantsProcessSolutions,
  RestaurantsFAQ,
  RestaurantsCTA
} from '@/components/industry/restaurants';
import { Section, SectionContent, SectionDivider } from '@/components/shared/layout';
import {
  DollarSign,
  Clock,
  Target,
  TrendingUp,
  Settings,
  UserCheck,
  Users,
  ChefHat,
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
  Thermometer,
  Utensils
} from 'lucide-react';

export default function RestaurantsPage() {
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
    <div className="accent-blue">
      {/* Hero Section - Consistent Stripe-like spacing */}
      <Section background="gradient" heroOffset={true} className="hero-ambient">
        <SectionContent maxWidth="6xl">
          <RestaurantsHero
            industry="Restaurants"
            headline="Modernize Restaurant Operations with Intelligent Systems"
            subheadline="Purpose-built for full-service restaurants and kitchens"
            description="Manage inventory, staff, and compliance with enterprise-grade precision. Real-time monitoring, automated workflows, and intelligent analytics designed specifically for restaurants, cafes, and food service operations."
            badge={{
              text: "Restaurants",
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
              { value: "28%", label: "Food Cost Reduction" },
              { value: "99.5%", label: "HACCP Compliance" },
              { value: "18hrs", label: "Saved Per Week" }
            ]}
          />
        </SectionContent>
      </Section>

      <SectionDivider />

      {/* Stats Section */}
      <Section background="muted" padding="lg">
        <SectionContent maxWidth="4xl">
          <RestaurantsStats
            title="Industry-Leading Results for Restaurants"
            description="See how OpsFlow AI transforms restaurant operations with measurable improvements in efficiency, compliance, and profitability across all areas of your business."
            stats={[
              {
                icon: DollarSign,
                value: "28%",
                label: "Cost Reduction",
                description: "Average operational cost savings through optimized inventory management and waste reduction"
              },
              {
                icon: Clock,
                value: "50min",
                label: "Daily Time Saved",
                description: "Per staff member through automated task management and streamlined workflows"
              },
              {
                icon: Target,
                value: "99.5%",
                label: "Compliance Rate",
                description: "HACCP, health department, and food safety regulation compliance with automated monitoring"
              },
              {
                icon: TrendingUp,
                value: "$22K",
                label: "Monthly Revenue Boost",
                description: "Average increase through optimized pricing, menu engineering, and customer experience"
              }
            ]}
          />
        </SectionContent>
      </Section>

      <SectionDivider />

      {/* Process Section */}
      <Section background="default" padding="lg">
        <SectionContent maxWidth="6xl">
          <RestaurantsProcess
            title="Simple Setup, Powerful Results"
            description="Get your restaurant operations optimized in under 30 minutes with our streamlined onboarding process."
            badge="Quick Implementation"
            steps={[
              {
                step: 1,
                title: "System Integration",
                description: "Connect your existing POS and kitchen systems with zero downtime.",
                icon: Settings,
                details: [
                  "One-click integration with major POS systems",
                  "Import existing inventory and menu data",
                  "No disruption to daily operations"
                ],
                timeframe: "10 minutes"
              },
              {
                step: 2,
                title: "Custom Configuration",
                description: "Tailor the platform to your restaurant's unique needs and regulations.",
                icon: UserCheck,
                details: [
                  "Configure recipes and portion standards",
                  "Set up local health code requirements",
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
          <RestaurantsFeatureDeck
            title="Core Restaurant Management Features"
            description="Everything you need to run a profitable, compliant, and efficient restaurant operation."
            badge="Essential Features"
            features={[
              {
                icon: ChefHat,
                title: "Kitchen Operations Management",
                description: "Real-time tracking of prep lists, cooking times, and station efficiency with automated alerts.",
                benefits: [
                  "Automated prep list generation based on forecasts",
                  "Real-time ticket timing and kitchen efficiency metrics",
                  "Recipe standardization and portion control"
                ],
                link: {
                  text: "Learn more about kitchen features",
                  action: () => console.log("Navigate to features")
                }
              },
              {
                icon: Thermometer,
                title: "Food Safety & Compliance",
                description: "Automated HACCP monitoring with temperature logs and sanitation schedules.",
                benefits: [
                  "Automated temperature logging and alerts",
                  "Digital HACCP compliance documentation",
                  "Health inspection readiness reporting"
                ],
                link: {
                  text: "Explore compliance tools",
                  action: () => console.log("Navigate to features")
                }
              },
              {
                icon: Utensils,
                title: "Menu Engineering & Costing",
                description: "Optimize menu profitability with real-time food costing and margin analysis.",
                benefits: [
                  "Real-time plate cost calculations",
                  "Menu item profitability analysis",
                  "Dynamic pricing recommendations"
                ],
                link: {
                  text: "View menu engineering features",
                  action: () => console.log("Navigate to features")
                }
              }
            ]}
            ctaSection={{
              title: "Ready to Transform Your Restaurant Operations?",
              description: "Join hundreds of successful restaurants already using OpsFlow AI to increase profits and ensure compliance.",
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
          <RestaurantsFeatureDeckAlternate
            title="Advanced Restaurant Operations Platform"
            description="Take your restaurant management to the next level with enterprise-grade tools and insights."
            badge="Premium Features"
            features={[
              {
                icon: Smartphone,
                title: "Mobile-First Management",
                description: "Manage your entire restaurant operation from anywhere, anytime with our intuitive mobile apps.",
                benefits: [
                  "Real-time notifications for critical kitchen events",
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
                  "Menu performance recommendations"
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
                  "HACCP documentation for health inspections",
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
          <RestaurantPlatformFeaturesGrid
            badge="Platform Features"
            title="Enterprise-Grade Platform Capabilities"
            subtitle="Built on a robust, scalable infrastructure designed for high-volume restaurant operations."
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
                    "Real-time inventory updates during service",
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
                description: "Manage multiple restaurants from single dashboard",
                stats: { primary: "Unlimited", label: "locations" },
                details: {
                  title: "Multi-Location Support",
                  description: "Scale your operations effortlessly with centralized management and location-specific controls for restaurant groups of any size.",
                  benefits: [
                    "Unified dashboard for all locations",
                    "Location-specific settings and permissions",
                    "Cross-location inventory transfers",
                    "Consolidated reporting across all restaurants",
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
          <RestaurantsProcessSolutions
            title="Tailored Solutions for Your Restaurant"
            description="We solve the most common restaurant operations challenges with intelligent automation and proven workflows."
            badge="Problem-Solving Approach"
            processSolutions={[
              {
                title: "Food Cost Control",
                description: "Eliminate waste and optimize portion consistency",
                icon: ChefHat,
                timeframe: "Week 1",
                complexity: "Medium",
                solutions: [
                  {
                    problem: "Manual recipe costing and inconsistent portions lead to 25-30% food cost variance, eating into profit margins and making forecasting impossible.",
                    solution: "Automated recipe costing with real-time ingredient pricing, portion control monitoring, and AI-powered waste reduction that stabilizes food costs at 28-32%.",
                    benefits: [
                      "Real-time visibility into plate costs and margins",
                      "Automated alerts for recipe cost changes",
                      "Portion control tracking reduces waste by 40%",
                      "Menu engineering insights boost profitability"
                    ]
                  }
                ]
              },
              {
                title: "Kitchen Efficiency",
                description: "Optimize prep workflows and station coordination",
                icon: Thermometer,
                timeframe: "Week 2",
                complexity: "Low",
                solutions: [
                  {
                    problem: "Poor kitchen coordination leads to uneven ticket times, cold food, and frustrated customers during rush periods, impacting reviews and repeat business.",
                    solution: "AI-powered kitchen display system with intelligent routing, prep list automation, and real-time efficiency tracking to maintain consistent service.",
                    benefits: [
                      "30% reduction in average ticket time",
                      "Improved food quality through timing consistency",
                      "Automated prep lists based on forecasted demand",
                      "Real-time station performance monitoring"
                    ]
                  }
                ]
              },
              {
                title: "HACCP Compliance",
                description: "Maintain perfect food safety compliance",
                icon: Shield,
                timeframe: "Week 3",
                complexity: "High",
                solutions: [
                  {
                    problem: "Manual temperature logs and sanitation checks lead to missed recordings, incomplete documentation, and failed health inspections with $10K-$100K fines.",
                    solution: "Automated HACCP monitoring with wireless temperature sensors, digital checklists, and real-time alerts for any food safety issues.",
                    benefits: [
                      "99.7% compliance rate with automatic logging",
                      "Digital audit trail for health inspections",
                      "Instant alerts for temperature violations",
                      "Reduced liability and insurance costs"
                    ]
                  }
                ]
              }
            ]}
            bottomCTA={{
              title: "Ready to Solve Your Restaurant Operations Challenges?",
              description: "See these improvements in your restaurant within the first 30 days.",
              action: handleStartTrial
            }}
          />
        </SectionContent>
      </Section>

      <SectionDivider />

      {/* FAQ Section */}
      <Section background="muted" padding="lg">
        <SectionContent maxWidth="4xl">
          <RestaurantsFAQ
            title="Frequently Asked Questions"
            description="Everything you need to know about implementing OpsFlow AI for your restaurant operations."
            badge="FAQ"
            faqs={[
              {
                question: "How long does implementation take?",
                answer: "Implementation time varies based on your needs. Our Express Setup gets you operational in 30 minutes, while our Guided Implementation for complex, multi-location operations typically takes 1-2 weeks. Both options include comprehensive training and support.",
                category: "setup"
              },
              {
                question: "Do you integrate with my existing POS system?",
                answer: "Yes! We integrate with 50+ major POS systems including Toast, Square, Clover, and more. Our integration syncs menu items, sales data, and inventory in real-time, eliminating duplicate data entry and ensuring accuracy across all systems.",
                category: "features"
              },
              {
                question: "What happens if my internet goes down during service?",
                answer: "OpsFlow AI includes robust offline functionality. You can continue core operations like order taking, kitchen display, and compliance checks without internet connectivity. All data automatically syncs when your connection is restored, ensuring zero data loss.",
                category: "features"
              },
              {
                question: "How does pricing work for multiple locations?",
                answer: "We offer flexible multi-location pricing with volume discounts. Each location gets full access to all platform features, with centralized management and reporting. Contact our sales team for custom pricing based on your number of restaurants and specific requirements.",
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
          <RestaurantsCTA
            urgencyBadge="Limited Time: First Month Free for New Customers"
            headline="Ready to Transform Your Restaurant Operations?"
            subheadline="Join 800+ successful restaurants using OpsFlow AI"
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
              quote: "OpsFlow AI revolutionized our restaurant. We reduced food costs by 28% and improved our health inspection scores to perfect. The automated HACCP compliance alone was worth the investment.",
              author: "Sarah Chen",
              role: "Owner & Executive Chef",
              company: "Harvest & Table"
            }}
          />
        </SectionContent>
      </Section>
    </div>
  );
}
