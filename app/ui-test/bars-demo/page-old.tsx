import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Settings, Users, Shield, BarChart3, Calendar, ExternalLink, ChevronDown, MessageCircle, Wine, Clock } from "lucide-react"

export default function BarsDemo() {
  // Hero component data - converted to your design system
  const heroData = {
    industry: "Bars & Nightlife",
    headline: "Elevate Your Bar Operations",
    subheadline: "From Happy Hour to Last Call",
    description: "Streamline inventory management, optimize staff scheduling, ensure regulatory compliance, and maximize profitability with OpsFlow AI's comprehensive bar management platform.",
    primaryCTA: {
      text: "Start Free Trial"
    },
    secondaryCTA: {
      text: "Watch Demo"
    },
    badge: {
      text: "Bars & Nightlife Solutions",
      variant: "default" as const
    },
    stats: [
      { value: "32%", label: "Avg. cost reduction" },
      { value: "45min", label: "Daily time saved" },
      { value: "99.2%", label: "Compliance rate" }
    ],
    backgroundImage: "https://images.unsplash.com/photo-1752691086174-b44c0a3ccf7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYXIlMjBuaWdodGxpZmUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NTg1MDEzODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  };

  // Stats component data - using your OKLCH token system
  const statsData = {
    title: "Industry-Leading Results for Bars & Nightlife",
    description: "See how OpsFlow AI transforms bar operations with measurable improvements in efficiency, compliance, and profitability across all areas of your business.",
    stats: [
      {
        icon: DollarSign,
        value: "32%",
        label: "Cost Reduction", 
        description: "Average operational cost savings through optimized inventory management and waste reduction",
        trend: { value: "+18% vs. industry avg.", direction: "up" as const }
      },
      {
        icon: Clock,
        value: "45min",
        label: "Daily Time Saved",
        description: "Per staff member through automated task management and streamlined workflows", 
        trend: { value: "2.5hrs weekly", direction: "up" as const }
      },
      {
        icon: Target,
        value: "99.2%",
        label: "Compliance Rate",
        description: "TABC, health department, and safety regulation compliance with automated monitoring",
        trend: { value: "+15% improvement", direction: "up" as const }
      },
      {
        icon: TrendingUp,
        value: "$18K",
        label: "Monthly Revenue Boost",
        description: "Average increase through optimized pricing, inventory turns, and customer experience",
        trend: { value: "ROI in 6 weeks", direction: "up" as const }
      }
    ]
  };

  // Process component data - following your Section/SectionContent architecture
  const processData = {
    title: "Simple Setup, Powerful Results",
    description: "Get your bar operations optimized in under 30 minutes with our streamlined onboarding process.",
    badge: "Quick Implementation",
    steps: [
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
    ]
  };

  // Feature Deck 1 data - using enterprise styling classes
  const featureDeck1Data = {
    title: "Core Bar Management Features",
    description: "Everything you need to run a profitable, compliant, and efficient bar operation.",
    badge: "Essential Features",
    features: [
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
          action: () => console.log('Navigate to features') // Demo action
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
          action: () => console.log('Navigate to features') // Demo action
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
          action: () => console.log('Navigate to features') // Demo action
        }
      }
    ],
    ctaSection: {
      title: "Ready to Transform Your Bar Operations?",
      description: "Join hundreds of successful bars already using OpsFlow AI to increase profits and ensure compliance.",
      primaryCTA: {
        text: "Start Your Free Trial",
        action: () => console.log('Navigate to demo') // Demo action
      },
      secondaryCTA: {
        text: "Schedule a Demo",
        action: () => console.log('Navigate to contact') // Demo action
      }
    }
  };

  // Process Solutions data - problem/solution mapping with ROI focus
  const processSolutionsData = {
    title: "Solving Your Biggest Bar Challenges",
    description: "Address the most common operational pain points that cost bars time, money, and compliance issues every day.",
    badge: "Problem Solvers",
    processSolutions: [
      {
        title: "Inventory & Cost Control",
        description: "Eliminate inventory shrinkage and optimize pour costs with intelligent tracking and alerts.",
        icon: BarChart3,
        timeframe: "Immediate impact",
        complexity: "Low" as const,
        solutions: [
          {
            problem: "High liquor costs due to over-pouring, theft, and inaccurate inventory tracking leading to 15-25% profit loss.",
            solution: "Automated pour tracking with smart dispensers, real-time inventory monitoring, and AI-powered theft detection algorithms.",
            benefits: [
              "Reduce liquor costs by 18-25% within first month",
              "Eliminate inventory discrepancies", 
              "Automatic alerts for unusual consumption patterns",
              "Integration with existing POS for seamless tracking"
            ],
            metrics: [
              { label: "Cost Reduction", value: "23%", improvement: "+18% vs. manual tracking" },
              { label: "Accuracy", value: "99.7%", improvement: "Eliminates human error" }
            ]
          }
        ]
      },
      {
        title: "Staff Performance & Scheduling",
        description: "Optimize labor costs while maintaining service quality through intelligent scheduling and performance tracking.",
        icon: Users,
        timeframe: "1-2 weeks",
        complexity: "Medium" as const,
        solutions: [
          {
            problem: "Overstaffing during slow periods and understaffing during peak times, leading to 20-30% higher labor costs.",
            solution: "AI-powered predictive scheduling based on historical sales data, weather, events, and local factors.",
            benefits: [
              "Reduce labor costs by 20-25%",
              "Improve customer service during peak times",
              "Automatic shift coverage and swap management",
              "Performance metrics and tip distribution tracking"
            ],
            metrics: [
              { label: "Labor Savings", value: "22%", improvement: "vs. manual scheduling" },
              { label: "Service Rating", value: "4.8/5", improvement: "+0.7 points" }
            ]
          }
        ]
      }
    ],
    bottomCTA: {
      title: "Start Solving Your Bar's Biggest Challenges Today",
      description: "See immediate improvements in cost control, compliance, and customer satisfaction.",
      action: () => console.log('Navigate to demo') // Demo action
    }
  };

  // Feature Deck 2 data - advanced features and growth tools
  const featureDeck2Data = {
    title: "Advanced Analytics & Growth Tools",
    description: "Take your bar to the next level with advanced analytics, customer insights, and growth optimization features.",
    badge: "Growth & Analytics",
    features: [
      {
        icon: BarChart3,
        title: "Revenue Analytics Dashboard",
        description: "Deep insights into sales patterns, customer preferences, and profitability by drink, time, and staff member.",
        benefits: [
          "Real-time sales performance tracking",
          "Customer preference analytics",
          "Seasonal trend identification",
          "Profit margin optimization recommendations"
        ]
      },
      {
        icon: Smartphone,
        title: "Customer Experience Tools",
        description: "Enhance customer satisfaction with digital ordering, loyalty programs, and personalized service.",
        benefits: [
          "Mobile ordering and payment integration",
          "Automated loyalty program management",
          "Customer feedback collection and analysis", 
          "Personalized drink recommendations"
        ]
      },
      {
        icon: TrendingUp,
        title: "Predictive Business Intelligence",
        description: "Make data-driven decisions with AI-powered forecasting for inventory, staffing, and revenue optimization.",
        benefits: [
          "Sales forecasting with 95% accuracy",
          "Seasonal demand prediction",
          "Optimal pricing recommendations",
          "New product introduction guidance"
        ]
      }
    ]
  };

  // FAQ data - address objections and build confidence
  const faqData = {
    title: "Frequently Asked Questions",
    description: "Everything you need to know about implementing OpsFlow AI in your bar.",
    badge: "Support & Setup",
    faqs: [
      {
        question: "How quickly can we get OpsFlow AI up and running?",
        answer: "Most bars are fully operational within 30 minutes. Our system integrates with your existing POS and inventory systems, so there's no disruption to your daily operations.",
        category: "setup" as const
      },
      {
        question: "Does OpsFlow AI integrate with our current POS system?",
        answer: "Yes! We integrate with all major POS systems including Square, Toast, Clover, and 50+ others. Our integration maintains real-time sync without changing your workflows.",
        category: "setup" as const
      },
      {
        question: "How does the inventory tracking work?",
        answer: "Our system uses smart sensors and pour tracking technology to monitor every drink served. You'll get real-time updates on inventory levels and detailed analytics.",
        category: "features" as const
      },
      {
        question: "Can the system help with TABC compliance?",
        answer: "Absolutely. OpsFlow AI automatically logs compliance checks, tracks ID verification, and generates required reports for TABC and health department inspections.",
        category: "features" as const
      },
      {
        question: "What's included in the pricing?",
        answer: "Our plans include the full platform, integrations, mobile apps, training, and 24/7 support. There are no setup fees or hidden costs.",
        category: "pricing" as const
      },
      {
        question: "Do you provide training for our staff?",
        answer: "Yes! We include comprehensive training for your entire team, including managers, bartenders, and support staff. We also provide ongoing support as needed.",
        category: "support" as const
      }
    ],
    supportCTA: {
      title: "Need Help Getting Started?",
      description: "Our bar operations experts are standing by to help you implement OpsFlow AI and start seeing results immediately.",
      primaryAction: {
        text: "Chat with Expert",
        action: () => console.log('Navigate to contact') // Demo action
      },
      secondaryAction: {
        text: "Browse Help Center",
        action: () => console.log('Navigate to support') // Demo action
      }
    }
  };

  // Final CTA data - conversion with urgency and social proof
  const ctaData = {
    headline: "Ready to Revolutionize Your Bar Operations?",
    subheadline: "Join 1,000+ Bars Already Saving Time and Money",
    description: "Start your 30-day free trial today and see why leading bars choose OpsFlow AI to optimize their operations, ensure compliance, and maximize profitability.",
    primaryCTA: {
      text: "Start Free Trial",
      action: () => console.log('Navigate to demo') // Demo action
    },
    secondaryCTA: {
      text: "Schedule Demo",
      action: () => console.log('Navigate to contact') // Demo action
    },
    trustIndicators: [
      { icon: Shield, text: "TABC Compliant" },
      { icon: Clock, text: "24/7 Support" },
      { icon: CheckCircle, text: "99.9% Uptime" },
      { icon: Zap, text: "30-Day Free Trial" }
    ],
    urgencyBadge: "Limited Time: Free Setup & Training Worth $500",
    backgroundPattern: "ambient" as const,
    testimonial: {
      quote: "OpsFlow AI transformed our bar operations. We reduced liquor costs by 28% and improved compliance scores to 100%. The ROI was evident within the first month.",
      author: "Marcus Rodriguez",
      role: "Owner",
      company: "Sunset Rooftop Bar"
    }
  };

  return (
    <>
      {/* Demo Banner */}
      <div className="bg-secondary-300 border-b border-border">
        <div className="container mx-auto px-4 py-2">
          <p className="text-center text-sm font-medium">
            🎨 <span className="text-brand-gradient">Figma Demo Conversion</span> - Bars & Nightlife Industry Page
          </p>
        </div>
      </div>
      
      {/* 8-Component Template System Implementation */}
      <div className="min-h-screen bg-background accent-purple">
        
        {/* 1. Industry Hero */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden hero-ambient">
          <div className="absolute inset-0 z-0">
            <div 
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ 
                backgroundImage: `url(${heroData.backgroundImage})`,
                filter: 'brightness(0.4)'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <Badge className="clerk-inspired-badge mb-6">
                  {heroData.badge.text}
                </Badge>
                
                <h1 className="text-display-2xl mb-4">
                  {heroData.headline}
                </h1>
                
                <p className="text-display-md text-brand-gradient mb-6">
                  {heroData.subheadline}
                </p>
                
                <p className="enterprise-body text-lg mb-8 max-w-2xl">
                  {heroData.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <Button 
                    className="clerk-cta-primary cta-equal" 
                    size="lg"
                  >
                    {heroData.primaryCTA.text}
                  </Button>
                  <Button 
                    variant="outline" 
                    className="cta-equal" 
                    size="lg"
                  >
                    {heroData.secondaryCTA.text}
                  </Button>
                </div>
                
                <div className="grid grid-cols-3 gap-6">
                  {heroData.stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-sm text-white/80">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Industry Stats */}
        <section className="py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-display-lg mb-4">{statsData.title}</h2>
              <p className="enterprise-body text-lg max-w-3xl mx-auto">{statsData.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {statsData.stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <Card key={index} className="enterprise-metric-card text-center">
                    <CardContent className="p-6">
                      <div className="enterprise-icon-primary mx-auto mb-4">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div className="text-3xl font-bold mb-2">{stat.value}</div>
                      <div className="font-semibold text-lg mb-2">{stat.label}</div>
                      <p className="text-sm text-muted-foreground mb-3">{stat.description}</p>
                      <Badge className="badge-subtle-active">
                        {stat.trend.value}
                      </Badge>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3. Industry Process */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="clerk-inspired-badge mb-4">{processData.badge}</Badge>
              <h2 className="text-display-lg mb-4">{processData.title}</h2>
              <p className="enterprise-body text-lg max-w-3xl mx-auto">{processData.description}</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {processData.steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <Card key={index} className="feature-tile text-center relative">
                    <CardContent className="p-8">
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                          {step.step}
                        </div>
                      </div>
                      
                      <div className="enterprise-icon-primary mx-auto mb-6 mt-4">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground mb-4">{step.description}</p>
                      
                      <div className="space-y-2 mb-4">
                        {step.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="text-sm flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {detail}
                          </div>
                        ))}
                      </div>
                      
                      <Badge className="badge-subtle-pending">
                        <Clock className="h-3 w-3 mr-1" />
                        {step.timeframe}
                      </Badge>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. Feature Deck 1 */}
        <section className="py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="clerk-inspired-badge mb-4">{featureDeck1Data.badge}</Badge>
              <h2 className="text-display-lg mb-4">{featureDeck1Data.title}</h2>
              <p className="enterprise-body text-lg max-w-3xl mx-auto">{featureDeck1Data.description}</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {featureDeck1Data.features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card key={index} className="enterprise-card">
                    <CardContent className="p-8">
                      <div className="enterprise-icon-primary mb-6">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                      <p className="text-muted-foreground mb-6">{feature.description}</p>
                      
                      <div className="space-y-2 mb-6">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="text-sm flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                      
                      <Button variant="ghost">
                        {feature.link.text} →
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            
            {/* Embedded CTA */}
            <Card className="enterprise-card text-center">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">{featureDeck1Data.ctaSection.title}</h3>
                <p className="enterprise-body mb-6">{featureDeck1Data.ctaSection.description}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    className="clerk-cta-primary"
                  >
                    {featureDeck1Data.ctaSection.primaryCTA.text}
                  </Button>
                  <Button 
                    variant="outline"
                  >
                    {featureDeck1Data.ctaSection.secondaryCTA.text}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 5. Process Solutions */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="clerk-inspired-badge mb-4">{processSolutionsData.badge}</Badge>
              <h2 className="text-display-lg mb-4">{processSolutionsData.title}</h2>
              <p className="enterprise-body text-lg max-w-3xl mx-auto">{processSolutionsData.description}</p>
            </div>
            
            <div className="space-y-12">
              {processSolutionsData.processSolutions.map((processItem, index) => {
                const IconComponent = processItem.icon;
                return (
                  <Card key={index} className="enterprise-card">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-6 mb-8">
                        <div className="enterprise-icon-primary">
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-semibold mb-2">{processItem.title}</h3>
                          <p className="text-muted-foreground mb-4">{processItem.description}</p>
                          <div className="flex gap-4">
                            <Badge className="badge-subtle-active">
                              <Clock className="h-3 w-3 mr-1" />
                              {processItem.timeframe}
                            </Badge>
                            <Badge className="badge-outline">
                              Complexity: {processItem.complexity}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      {processItem.solutions.map((solution, solutionIndex) => (
                        <div key={solutionIndex} className="grid lg:grid-cols-2 gap-8">
                          <div>
                            <h4 className="font-semibold text-red-600 mb-3">Problem:</h4>
                            <p className="text-sm mb-4">{solution.problem}</p>
                            
                            <h4 className="font-semibold text-green-600 mb-3">Solution:</h4>
                            <p className="text-sm">{solution.solution}</p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-3">Benefits:</h4>
                            <div className="space-y-2 mb-6">
                              {solution.benefits.map((benefit, benefitIndex) => (
                                <div key={benefitIndex} className="text-sm flex items-center">
                                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                  {benefit}
                                </div>
                              ))}
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4">
                              {solution.metrics.map((metric, metricIndex) => (
                                <div key={metricIndex} className="text-center p-3 bg-muted rounded-lg">
                                  <div className="font-bold text-lg">{metric.value}</div>
                                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                                  <div className="text-xs text-green-600">{metric.improvement}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            
            <div className="text-center mt-12">
              <h3 className="text-2xl font-semibold mb-4">{processSolutionsData.bottomCTA.title}</h3>
              <p className="enterprise-body mb-6">{processSolutionsData.bottomCTA.description}</p>
              <Button className="clerk-cta-primary">
                Start Free Trial
              </Button>
            </div>
          </div>
        </section>

        {/* 6. Feature Deck 2 */}
        <section className="py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="clerk-inspired-badge mb-4">{featureDeck2Data.badge}</Badge>
              <h2 className="text-display-lg mb-4">{featureDeck2Data.title}</h2>
              <p className="enterprise-body text-lg max-w-3xl mx-auto">{featureDeck2Data.description}</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featureDeck2Data.features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card key={index} className="enterprise-card">
                    <CardContent className="p-8">
                      <div className="enterprise-icon-accent mb-6">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                      <p className="text-muted-foreground mb-6">{feature.description}</p>
                      
                      <div className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="text-sm flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* 7. FAQ */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="clerk-inspired-badge mb-4">{faqData.badge}</Badge>
              <h2 className="text-display-lg mb-4">{faqData.title}</h2>
              <p className="enterprise-body text-lg max-w-3xl mx-auto">{faqData.description}</p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="space-y-4">
                  {faqData.faqs.map((faq, index) => (
                    <Card key={index} className="enterprise-card">
                      <CardContent className="p-6">
                        <h3 className="font-semibold mb-3">{faq.question}</h3>
                        <p className="text-muted-foreground">{faq.answer}</p>
                        <Badge className="mt-3 badge-outline">
                          {faq.category}
                        </Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              
              <div>
                <Card className="enterprise-card sticky top-8">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3">{faqData.supportCTA.title}</h3>
                    <p className="text-muted-foreground mb-6">{faqData.supportCTA.description}</p>
                    <div className="space-y-3">
                      <Button 
                        className="clerk-cta-primary w-full"
                      >
                        {faqData.supportCTA.primaryAction.text}
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full"
                      >
                        {faqData.supportCTA.secondaryAction.text}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Final CTA */}
        <section className="py-16 lg:py-20 hero-ambient relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center">
              <Badge className="clerk-inspired-badge mb-6">
                {ctaData.urgencyBadge}
              </Badge>
              
              <h2 className="text-display-xl text-white mb-4">
                {ctaData.headline}
              </h2>
              
              <p className="text-xl text-white/90 mb-6">
                {ctaData.subheadline}
              </p>
              
              <p className="enterprise-body text-lg text-white/80 mb-8 max-w-3xl mx-auto">
                {ctaData.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button 
                  className="clerk-cta-primary cta-equal" 
                  size="lg"
                >
                  {ctaData.primaryCTA.text}
                </Button>
                <Button 
                  variant="outline" 
                  className="cta-equal" 
                  size="lg"
                >
                  {ctaData.secondaryCTA.text}
                </Button>
              </div>
              
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                {ctaData.trustIndicators.map((indicator, index) => {
                  const IconComponent = indicator.icon;
                  return (
                    <div key={index} className="flex items-center text-white/90">
                      <IconComponent className="h-4 w-4 mr-2" />
                      {indicator.text}
                    </div>
                  );
                })}
              </div>
              
              <Card className="enterprise-card max-w-2xl mx-auto">
                <CardContent className="p-6">
                  <blockquote className="text-lg italic mb-4">
                    "{ctaData.testimonial.quote}"
                  </blockquote>
                  <div className="text-right">
                    <div className="font-semibold">{ctaData.testimonial.author}</div>
                    <div className="text-muted-foreground">{ctaData.testimonial.role}, {ctaData.testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
      </div>
    </>
  );
}
