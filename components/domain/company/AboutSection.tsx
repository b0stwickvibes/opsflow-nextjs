"use client";

import { CheckCircle, Users, Clock, Shield } from "lucide-react";
import { useRestaurantAnalytics } from "@/lib/hooks/restaurant-pages";
import Image from "next/image";

interface AboutSectionProps {
  industry?: "restaurants" | "bars" | "coffee" | "hotels";
  showJoinTeam?: boolean;
  customTitle?: string;
  customDescription?: string;
}

export function AboutSection({ 
  industry = "restaurants",
  showJoinTeam = true,
  customTitle,
  customDescription 
}: AboutSectionProps) {
  const { trackEvent } = useRestaurantAnalytics();

  const industryConfig = {
    restaurants: {
      title: "Revolutionizing Restaurant Operations Management",
      description: "OpsFlow streamlines kitchen operations, ensures HACCP compliance, and coordinates front-of-house activities. Built specifically for restaurants that demand operational excellence.",
      mission: "Empower restaurant operators with intelligent task management, real-time compliance monitoring, and seamless team coordination.",
      color: "oklch(0.70 0.15 25)", // Orange theme
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
      color: "oklch(0.60 0.20 270)", // Purple theme
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
      color: "oklch(0.65 0.18 80)", // Brown theme
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
      color: "oklch(0.55 0.15 210)", // Blue theme
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

  const handleJoinTeamClick = () => {
    trackEvent("about_join_team_click", {
      industry,
      section: "about"
    });
  };

  return (
    <section className="section-marketing">
      <div className="container flex flex-col gap-28">
        {/* Hero Section */}
        <div className="flex flex-col gap-7">
          <h1 
            className="heading-brand-gradient text-4xl font-semibold lg:text-7xl"
          >
            {customTitle || config.title}
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground">
            {customDescription || config.description}
          </p>
        </div>

        {/* Mission & Image Grid */}
        <div className="grid gap-6 md:grid-cols-2">
<Image
            src={industry === 'restaurants' ? "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1600&auto=format&fit=crop" : industry === 'bars' ? "https://images.unsplash.com/photo-1580837029840-8a1dff5b82d5?q=80&w=1600&auto=format&fit=crop" : industry === 'coffee' ? "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1600&auto=format&fit=crop" : "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=1600&auto=format&fit=crop"}
            alt={`${industry} operations management`}
            width={800}
            height={400}
            className="w-full h-auto max-h-96 rounded-2xl object-cover"
          />
          <div 
            className="flex flex-col justify-between gap-10 rounded-2xl p-10 bg-primary/10 border-l-4 border-primary"
          >
            <p className="text-sm font-medium tracking-wide text-primary">
              OUR MISSION
            </p>
            <p className="text-lg font-medium text-foreground">
              {config.mission}
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="flex flex-col gap-6 md:gap-20">
          <div className="max-w-xl">
            <h2 className="heading-brand-gradient mb-2.5 text-3xl font-semibold md:text-5xl">
              We make {industry} operations ridiculously efficient
            </h2>
            <p className="text-muted-foreground">
              Our platform is specifically designed for {industry} operations, addressing the unique challenges 
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
                <h3 className="mt-2 mb-3 text-lg font-semibold">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Join Team Section */}
        {showJoinTeam && (
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="mb-10 text-sm font-medium tracking-wide text-primary">
                JOIN OUR TEAM
              </p>
              <h2 className="heading-brand-gradient mb-2.5 text-3xl font-semibold md:text-5xl">
                We're transforming {industry} operations
              </h2>
            </div>
            <div>
<Image
                src={industry === 'restaurants' ? "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop" : industry === 'bars' ? "https://images.unsplash.com/photo-1514362545857-3bc16c4c76c8?q=80&w=1600&auto=format&fit=crop" : industry === 'coffee' ? "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1600&auto=format&fit=crop" : "https://images.unsplash.com/photo-1498550744921-75f79806b8a7?q=80&w=1600&auto=format&fit=crop"}
                alt={`${industry} operations team`}
                width={800}
                height={200}
                className="mb-6 w-full h-auto max-h-36 rounded-xl object-cover"
              />
              <p className="text-muted-foreground mb-4">
                We're looking for passionate individuals who want to revolutionize {industry} operations. 
                Join us in building the future of hospitality management.
              </p>
              <button
                onClick={handleJoinTeamClick}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors hover:opacity-90 bg-brand-gradient text-primary-foreground cta-shimmer"
                aria-label={`Join the ${industry} operations team`}
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
};

