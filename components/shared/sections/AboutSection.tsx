"use client";

import { CheckCircle, Users, Clock, Shield, Building2, TrendingUp, Zap, Clipboard, AlertTriangle, BarChart3, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

interface AboutSectionProps {
  industry?: "restaurants" | "bars" | "coffee" | "hotels" | "general";
  showJoinTeam?: boolean;
  customTitle?: string;
  customDescription?: string;
}

export function AboutSection({ 
  industry = "general",
  showJoinTeam = true,
  customTitle,
  customDescription 
}: AboutSectionProps) {

  const industryConfig = {
    general: {
      title: "Revolutionizing Restaurant Operations Management",
      description: "OpsFlow streamlines operations across restaurants, bars, coffee shops, and hotels. Built for businesses that demand operational excellence through intelligent automation and real-time coordination.",
      mission: "Empower hospitality operators with intelligent task management, real-time compliance monitoring, and seamless team coordination across all industry sectors.",
      color: "oklch(0.70 0.15 25)",
      // 4 Core Capabilities - Task Management Focus
      capabilities: [
        {
          icon: Clipboard,
          title: "Intelligent Task Management",
          description: "Streamline daily operations with automated task creation, smart scheduling, and real-time progress tracking across all hospitality departments.",
          iconStyle: "primary"
        },
        {
          icon: Shield,
          title: "Compliance Automation",
          description: "Ensure 99.8% compliance rates with automated HACCP monitoring, safety protocols, and comprehensive audit trails for hospitality regulations.",
          iconStyle: "secondary"
        },
        {
          icon: Users,
          title: "Team Coordination",
          description: "Connect all departments seamlessly with real-time communication, shift management, and collaborative workflow tools designed for hospitality teams.",
          iconStyle: "accent"
        },
        {
          icon: BarChart3,
          title: "Operational Intelligence",
          description: "Make data-driven decisions with real-time analytics, performance insights, and predictive reporting that typically reduces costs by 32%.",
          iconStyle: "muted"
        }
      ],
      features: [
        {
          icon: Shield,
          title: "Multi-Industry Compliance",
          description: "Built-in protocols ensure your business maintains 99.8% compliance rates across health, safety, and industry-specific regulations with automated monitoring."
        },
        {
          icon: Users,
          title: "Cross-Team Coordination", 
          description: "Seamlessly connect all departments and roles, ensuring smooth operational flow and exceptional customer experiences across any hospitality business."
        },
        {
          icon: TrendingUp,
          title: "Operational Intelligence",
          description: "Data-driven insights and predictive analytics typically reduce operational costs by 32% while maintaining or improving service quality standards."
        }
      ]
    },
    restaurants: {
      title: "Revolutionizing Restaurant Operations Management",
      description: "OpsFlow streamlines kitchen operations, ensures HACCP compliance, and coordinates front-of-house activities. Built specifically for restaurants that demand operational excellence.",
      mission: "Empower restaurant operators with intelligent task management, real-time compliance monitoring, and seamless team coordination.",
      color: "oklch(0.70 0.15 25)",
      // 4 Core Capabilities - Restaurant Task Management Focus
      capabilities: [
        {
          icon: Clipboard,
          title: "Kitchen Task Automation",
          description: "Automate prep lists, cooking schedules, and service tasks with smart timing and priority-based workflow management for kitchen operations.",
          iconStyle: "primary"
        },
        {
          icon: Shield,
          title: "HACCP Compliance Engine",
          description: "Maintain 99.8% food safety compliance with automated temperature monitoring, critical control point tracking, and comprehensive audit trails.",
          iconStyle: "secondary"
        },
        {
          icon: Users,
          title: "Kitchen-Floor Coordination",
          description: "Seamlessly connect kitchen operations with front-of-house service through real-time communication and synchronized task management.",
          iconStyle: "accent"
        },
        {
          icon: BarChart3,
          title: "Labor Cost Intelligence",
          description: "Optimize staffing with smart scheduling, task automation, and performance analytics that typically reduce labor costs by 32%.",
          iconStyle: "muted"
        }
      ],
      features: [
        {
          icon: Shield,
          title: "HACCP Compliance First",
          description: "Built-in food safety protocols ensure your restaurant maintains 99.8% compliance rates with automated temperature logging and task verification."
        },
        {
          icon: Users,
          title: "Kitchen-Floor Coordination", 
          description: "Seamlessly connect kitchen operations with front-of-house service, ensuring smooth order flow and customer satisfaction."
        },
        {
          icon: Clock,
          title: "Labor Cost Optimization",
          description: "Smart scheduling and task automation typically reduce labor costs by 32% while maintaining service quality standards."
        }
      ]
    },
    bars: {
      title: "Elevating Bar Operations Excellence",
      description: "OpsFlow manages inventory control, staff coordination, and compliance requirements. Purpose-built for bars that prioritize operational efficiency.",
      mission: "Transform bar operations with intelligent inventory management, staff scheduling, and compliance tracking systems.",
      color: "oklch(0.60 0.20 270)",
      // 4 Core Capabilities - Bar Task Management Focus
      capabilities: [
        {
          icon: Clipboard,
          title: "Inventory Task Management",
          description: "Automate stock checks, ordering workflows, and inventory rotation tasks with smart alerts and demand forecasting for optimal bar operations.",
          iconStyle: "primary"
        },
        {
          icon: Shield,
          title: "Alcohol Compliance Monitoring",
          description: "Ensure regulatory compliance with automated tracking, ID verification protocols, and comprehensive audit trails for alcohol service.",
          iconStyle: "secondary"
        },
        {
          icon: Users,
          title: "Multi-Station Coordination",
          description: "Coordinate bartenders, servers, and support staff with real-time communication and synchronized task management across all bar stations.",
          iconStyle: "accent"
        },
        {
          icon: BarChart3,
          title: "Pour Profit Analytics",
          description: "Maximize profitability with pour cost analysis, inventory optimization, and sales performance insights that reduce waste by 25%.",
          iconStyle: "muted"
        }
      ],
      features: [
        {
          icon: Shield,
          title: "Alcohol Compliance Monitoring",
          description: "Automated compliance tracking ensures your establishment meets all regulatory requirements with comprehensive audit trails."
        },
        {
          icon: Users,
          title: "Multi-Station Coordination",
          description: "Coordinate bartenders, servers, and kitchen staff with real-time communication and task management systems."
        },
        {
          icon: Clock,
          title: "Inventory Optimization",
          description: "Smart inventory management reduces waste by 25% and prevents stockouts during peak service periods."
        }
      ]
    },
    coffee: {
      title: "Streamlining Coffee Shop Operations",
      description: "OpsFlow optimizes barista workflows, manages equipment maintenance, and ensures consistent quality. Designed for coffee shops focused on operational excellence.",
      mission: "Enhance coffee shop efficiency with automated quality control, equipment monitoring, and team coordination tools.",
      color: "oklch(0.65 0.18 80)",
      // 4 Core Capabilities - Coffee Shop Task Management Focus
      capabilities: [
        {
          icon: Clipboard,
          title: "Barista Workflow Automation",
          description: "Streamline brew schedules, prep tasks, and quality checks with automated workflow management designed for high-volume coffee service.",
          iconStyle: "primary"
        },
        {
          icon: Shield,
          title: "Quality Consistency Engine",
          description: "Maintain consistent quality with standardized brewing protocols, equipment monitoring, and automated quality control checkpoints.",
          iconStyle: "secondary"
        },
        {
          icon: Users,
          title: "Barista Team Coordination",
          description: "Optimize barista workflows and customer service with intelligent task routing, shift management, and real-time performance tracking.",
          iconStyle: "accent"
        },
        {
          icon: BarChart3,
          title: "Equipment Intelligence",
          description: "Maximize equipment efficiency with predictive maintenance scheduling that reduces downtime by 40% and extends machinery lifespan.",
          iconStyle: "muted"
        }
      ],
      features: [
        {
          icon: Shield,
          title: "Quality Consistency",
          description: "Standardized brewing protocols and equipment monitoring ensure consistent quality across all shifts and locations."
        },
        {
          icon: Users,
          title: "Barista Coordination",
          description: "Optimize barista workflows and customer service with intelligent task routing and real-time performance tracking."
        },
        {
          icon: Clock,
          title: "Equipment Efficiency",
          description: "Predictive maintenance scheduling reduces equipment downtime by 40% and extends machinery lifespan."
        }
      ]
    },
    hotels: {
      title: "Transforming Hotel Operations Management",
      description: "OpsFlow coordinates housekeeping, maintenance, and guest services across all departments. Built for hotels demanding operational excellence.",
      mission: "Revolutionize hotel operations with integrated departmental coordination, guest satisfaction monitoring, and efficiency optimization.",
      color: "oklch(0.55 0.15 210)",
      // 4 Core Capabilities - Hotel Task Management Focus
      capabilities: [
        {
          icon: Clipboard,
          title: "Departmental Task Orchestration",
          description: "Coordinate housekeeping, maintenance, and guest services with automated task scheduling and cross-departmental workflow management.",
          iconStyle: "primary"
        },
        {
          icon: Shield,
          title: "Guest Satisfaction Assurance",
          description: "Ensure exceptional guest experiences with automated quality control, service verification, and comprehensive feedback tracking systems.",
          iconStyle: "secondary"
        },
        {
          icon: Users,
          title: "Department Synchronization",
          description: "Seamlessly coordinate housekeeping, maintenance, and front desk operations with real-time communication and task prioritization.",
          iconStyle: "accent"
        },
        {
          icon: BarChart3,
          title: "Operational Efficiency Intelligence",
          description: "Optimize operations with intelligent scheduling, predictive maintenance, and performance analytics that reduce costs by 28%.",
          iconStyle: "muted"
        }
      ],
      features: [
        {
          icon: Shield,
          title: "Guest Satisfaction Assurance",
          description: "Comprehensive quality control systems ensure consistent guest experiences with automated task verification and feedback loops."
        },
        {
          icon: Users,
          title: "Department Synchronization",
          description: "Seamlessly coordinate housekeeping, maintenance, and front desk operations for optimal guest service delivery."
        },
        {
          icon: Clock,
          title: "Operational Efficiency",
          description: "Intelligent scheduling and task prioritization reduce operational costs by 28% while improving guest satisfaction scores."
        }
      ]
    }
  };

  const config = industryConfig[industry];

  return (
    <section className="section-marketing">
      <div className="container flex flex-col gap-28">
        {/* Hero Section */}
        <div className="flex flex-col gap-7">
          <h1 
            className="heading-brand-gradient text-display-2xl font-semibold lg:text-7xl leading-tight"
          >
            {customTitle || config.title}
          </h1>
          
          {/* 4 Capability Boxes in Single Row - Directly Under Title */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-8">
            {config.capabilities.map((capability, index) => (
              <Card key={index} className="clerk-interactive-tile feature-tile p-4 tile-hover">
                <div className="flex flex-col h-full">
                  <div className="flex flex-col items-center text-center mb-3">
                    <div className={`enterprise-icon-${capability.iconStyle} w-10 h-10 mb-3`}>
                      <capability.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">
                      {capability.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed flex-1 text-sm text-center">
                    {capability.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
          
          <p className="enterprise-body max-w-4xl text-muted-foreground mt-6">
            {customDescription || config.description}
          </p>
        </div>

        {/* Mission & Image Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          <div
            className="size-full max-h-96 rounded-2xl bg-gradient-to-br from-primary/15 via-background to-secondary/15"
            aria-hidden
          />
          <div className="flex flex-col justify-between gap-8">
            <div className="rounded-2xl p-6 bg-primary/10 border-l-4 border-primary">
              <p className="text-sm font-medium tracking-wide text-primary mb-4">
                OUR MISSION
              </p>
              <p className="enterprise-body font-medium text-foreground">
                {config.mission}
              </p>
            </div>
            <div className="rounded-2xl p-6 bg-secondary/10 border-l-4 border-secondary">
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Core Capabilities That Set Us Apart
              </h3>
              <p className="text-muted-foreground">
                OpsFlow delivers unified task management that outperforms traditional hospitality operations platforms. 
                We're not just another tool—we're the comprehensive solution hospitality operators choose for operational excellence.
              </p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="flex flex-col gap-6 md:gap-20">
          <div className="max-w-xl">
            <h2 className="heading-brand-gradient enterprise-headline mb-2.5 text-3xl font-semibold">
              We make {industry === "general" ? "hospitality" : industry} operations ridiculously efficient
            </h2>
            <p className="text-muted-foreground">
              Our platform is specifically designed for {industry === "general" ? "hospitality" : industry} operations, addressing the unique challenges 
              and requirements of your industry with proven results.
            </p>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            {config.features.map((feature, index) => (
              <div key={index} className="flex flex-col">
                <div 
                  className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-primary/10"
                >
                  <feature.icon className="size-5 text-primary" />
                </div>
                <h3 className="enterprise-body mt-2 mb-3 font-semibold">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Stats Section */}
        <div className="grid gap-6 md:grid-cols-4">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Businesses Served</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">99.8%</div>
            <div className="text-sm text-muted-foreground">Compliance Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">32%</div>
            <div className="text-sm text-muted-foreground">Cost Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Support Coverage</div>
          </div>
        </div>

        {/* Join Team Section */}
        {showJoinTeam && (
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="mb-10 text-sm font-medium tracking-wide text-primary">
                JOIN OUR TEAM
              </p>
              <h2 className="heading-brand-gradient enterprise-headline mb-2.5 text-3xl font-semibold">
                We're transforming {industry === "general" ? "hospitality" : industry} operations
              </h2>
            </div>
            <div>
              <div
                className="mb-6 max-h-36 w-full rounded-xl bg-gradient-to-br from-primary/10 via-background to-secondary/10"
                aria-hidden
              />
              <p className="text-muted-foreground mb-4">
                We're looking for passionate individuals who want to revolutionize {industry === "general" ? "hospitality" : industry} operations. 
                Join us in building the future of hospitality management.
              </p>
              <button
                className="cta-shimmer inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors bg-primary text-primary-foreground hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label={`Join the ${industry === "general" ? "hospitality" : industry} operations team`}
              >
                View Open Positions
                <CheckCircle className="size-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default AboutSection;
