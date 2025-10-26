"use client";

import { CheckCircle, Users, Shield, Sparkles, TrendingUp } from "lucide-react";
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
      title: "Reimagining Restaurant Operations",
      description: "OpsFlow empowers restaurant teams with one unified system for tasking, food safety, and staff coordination — bringing clarity, compliance, and calm to even the busiest shifts.",
      mission: "Our mission is to eliminate operational chaos by giving operators the visibility and automation they need to deliver consistent excellence, every day, at every location.",
      story: "Born from years inside restaurant kitchens, OpsFlow was built to solve the real pain operators face: disconnected tools, missed checks, and costly compliance gaps.",
      hero: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1600&auto=format&fit=crop",
      team: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop",
    },
    bars: {
      title: "Elevating Bar Operations Excellence",
      description: "OpsFlow manages inventory control, staff coordination, and compliance requirements with precision designed for high-volume bar environments.",
      mission: "Transform bar operations with intelligent inventory management, staff scheduling, and compliance tracking systems that scale.",
      story: "Built by operators who understand the unique challenges of bar management, from inventory waste to compliance complexity.",
      hero: "https://images.unsplash.com/photo-1580837029840-8a1dff5b82d5?q=80&w=1600&auto=format&fit=crop",
      team: "https://images.unsplash.com/photo-1514362545857-3bc16c4c76c8?q=80&w=1600&auto=format&fit=crop",
    },
    coffee: {
      title: "Streamlining Coffee Shop Operations",
      description: "OpsFlow optimizes barista workflows, manages equipment maintenance, and ensures consistent quality across all locations.",
      mission: "Enhance coffee shop efficiency with automated quality control, equipment monitoring, and team coordination tools.",
      story: "Designed for specialty coffee operations that demand precision, consistency, and operational excellence.",
      hero: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1600&auto=format&fit=crop",
      team: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1600&auto=format&fit=crop",
    },
    hotels: {
      title: "Transforming Hotel Operations Management",
      description: "OpsFlow coordinates housekeeping, maintenance, and guest services across all departments with seamless integration.",
      mission: "Revolutionize hotel operations with integrated departmental coordination and guest satisfaction monitoring.",
      story: "Purpose-built for hotels demanding operational excellence across multiple departments and guest touchpoints.",
      hero: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=1600&auto=format&fit=crop",
      team: "https://images.unsplash.com/photo-1498550744921-75f79806b8a7?q=80&w=1600&auto=format&fit=crop",
    }
  };

  const values = [
    {
      icon: Sparkles,
      title: "Precision at Scale",
      description: "We design systems that scale without losing accuracy, ensuring operational standards are met whether you manage 1 or 100 locations.",
    },
    {
      icon: Users,
      title: "Built for People",
      description: "Technology should empower, not overwhelm. OpsFlow is crafted to make life simpler for managers and teams on the ground.",
    },
    {
      icon: Shield,
      title: "Compliance by Design",
      description: "Regulatory and brand standards are baked into every workflow, turning compliance from a burden into a strength.",
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "Multi‑Industry Compliance",
      description: "Built‑in protocols ensure your business maintains 99.8% compliance rates across health, safety, and industry‑specific regulations with automated monitoring.",
    },
    {
      icon: Users,
      title: "Cross‑Team Coordination",
      description: "Seamlessly connect all departments and roles, ensuring smooth operational flow and exceptional customer experiences.",
    },
    {
      icon: TrendingUp,
      title: "Operational Intelligence",
      description: "Data‑driven insights and predictive analytics typically reduce operational costs by 32% while maintaining service quality.",
    },
  ];

  const config = industryConfig[industry];

  const handleJoinTeamClick = () => {
    trackEvent("about_join_team_click", {
      industry,
      section: "about"
    });
  };

  return (
    <section className="relative px-6 py-16 md:px-10 md:py-24">
      {/* Background wash */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-primary/5 to-transparent" />
      </div>

      <div className="mx-auto max-w-6xl space-y-24">
        {/* Hero: headline left, stacked accent cards right */}
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <div className="space-y-6">
            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm shadow-sm">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span className="font-medium text-foreground">Enterprise-Grade Platform</span>
              </div>
            </div>
            
            <h1 className="text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
              {customTitle || config.title}
            </h1>
            <p className="max-w-2xl text-xl leading-relaxed text-muted-foreground md:text-2xl">
              {customDescription || config.description}
            </p>
          </div>

          <div className="space-y-6">
            {/* Mission Card */}
            <div className="relative rounded-2xl bg-card/70 p-6 pr-8 shadow-sm ring-1 ring-border/70 backdrop-blur">
              <div className="absolute left-0 top-5 bottom-5 w-[6px] rounded-full bg-gradient-to-b from-primary via-primary/80 to-primary/60" />
              <div className="pl-5 text-xs font-semibold tracking-widest text-primary/80 uppercase">
                OUR MISSION
              </div>
              <div className="pl-5 pt-3 text-base leading-relaxed text-foreground">
                {config.mission}
              </div>
            </div>

            {/* Story Card */}
            <div className="relative rounded-2xl bg-card/70 p-6 pr-8 shadow-sm ring-1 ring-border/70 backdrop-blur">
              <div className="absolute left-0 top-5 bottom-5 w-[6px] rounded-full bg-gradient-to-b from-purple-600 via-purple-600/80 to-purple-600/60" />
              <div className="pl-5 text-xs font-semibold tracking-widest text-primary/80 uppercase">
                WHY OPSFLOW
              </div>
              <div className="pl-5 pt-3 text-base leading-relaxed text-foreground">
                {config.story}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="relative mx-auto max-w-6xl">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        {/* Features */}
        <div className="space-y-8 md:space-y-12">
          <div className="max-w-2xl">
            <span className="mb-3 block text-xs font-semibold tracking-widest text-foreground/70 uppercase">
              Platform Features
            </span>
            <h2 className="mb-3 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              Core capabilities that set us apart
            </h2>
            <p className="text-muted-foreground">
              A clean, human‑centered system that scales from a single site to global operations.
            </p>
          </div>
          <div className="grid gap-x-12 gap-y-12 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur transition-shadow hover:shadow-sm"
              >
                <div className="mb-4 inline-flex h-8 w-8 items-center justify-center">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold tracking-tight text-foreground">
                  {feature.title}
                </h3>
                <p className="text-[15px] leading-7 text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="relative mx-auto max-w-6xl">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        {/* Values */}
        <div className="space-y-8 md:space-y-12">
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/90">
              Our Values
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              What we stand for
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur hover:shadow-sm"
              >
                <div className="mb-3 inline-flex h-8 w-8 items-center justify-center">
                  <value.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-1.5 text-lg font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="text-[15px] leading-7 text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="relative mx-auto max-w-6xl">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        {/* Join Team */}
        {showJoinTeam && (
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <span className="mb-3 block text-xs font-semibold tracking-widest text-foreground/70 uppercase">
                THE TEAM
              </span>
              <h2 className="mb-3 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
                We're transforming {industry} operations
              </h2>
              <p className="max-w-md text-muted-foreground">
                Our team brings decades of hospitality leadership experience—culinary degrees, operations management certifications, and careers spent mastering the art of service excellence—combined with world-class technology expertise.
              </p>
            </div>
            <div>
              <div className="overflow-hidden rounded-xl ring-1 ring-border/50">
                <Image
                  src={config.team}
                  alt="OpsFlow team"
                  width={600}
                  height={160}
                  className="mb-4 h-40 w-full object-cover"
                />
              </div>
              <p className="mb-4 text-muted-foreground">
                Our team combines deep operational expertise with cutting-edge technology to redefine how hospitality teams work together across the world's most dynamic brands.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

