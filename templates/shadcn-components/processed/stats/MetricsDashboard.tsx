"use client";

import { Section, SectionContent } from "@/components/shared/layout";
import { useRestaurantAnalytics } from "@/lib/hooks/restaurant-pages";

interface MetricsDashboardProps {
  industry?: "restaurants" | "bars" | "coffee" | "hotels";
}

export function MetricsDashboard({ industry = "restaurants" }: MetricsDashboardProps) {
  const { trackEvent } = useRestaurantAnalytics();

  const industryConfig = {
    restaurants: {
      title: "Revolutionizing restaurant operations with smart technology",
      subtitle: "Our advanced operational platform helps restaurant managers optimize operations and ensure compliance in real-time.",
      color: "oklch(0.70 0.15 25)",
      metrics: [
        { value: "2,500+", label: "Restaurants Managed", description: "Active locations using OpsFlow" },
        { value: "99.8%", label: "HACCP Compliance", description: "Average compliance rate" },
        { value: "15,000+", label: "Staff Members", description: "Coordinated daily" },
        { value: "0.5s", label: "Task Response", description: "Average completion time" }
      ]
    },
    bars: {
      title: "Transforming bar operations with intelligent systems",
      subtitle: "Our comprehensive platform helps bar managers streamline operations and maintain compliance effortlessly.",
      color: "oklch(0.60 0.20 270)",
      metrics: [
        { value: "1,200+", label: "Bars & Pubs", description: "Active establishments" },
        { value: "97%", label: "Inventory Accuracy", description: "Stock tracking precision" },
        { value: "8,500+", label: "Staff Coordinated", description: "Across all venues" },
        { value: "1.2s", label: "Order Processing", description: "Average response time" }
      ]
    },
    coffee: {
      title: "Optimizing coffee shop operations with precision technology", 
      subtitle: "Our specialized platform helps cafe owners maintain quality standards and operational excellence.",
      color: "oklch(0.65 0.18 80)",
      metrics: [
        { value: "800+", label: "Coffee Shops", description: "Locations optimized" },
        { value: "98.5%", label: "Equipment Uptime", description: "Machine availability" },
        { value: "5,200+", label: "Baristas", description: "Coordinated daily" },
        { value: "0.8s", label: "Quality Check", description: "Consistency monitoring" }
      ]
    },
    hotels: {
      title: "Elevating hotel operations with comprehensive management",
      subtitle: "Our enterprise platform helps hotel managers coordinate departments and deliver exceptional guest experiences.",
      color: "oklch(0.55 0.15 210)",
      metrics: [
        { value: "400+", label: "Hotel Properties", description: "Managed worldwide" },
        { value: "96%", label: "Guest Satisfaction", description: "Average rating score" },
        { value: "12,000+", label: "Hotel Staff", description: "Coordinated operations" },
        { value: "2.1s", label: "Service Response", description: "Guest request handling" }
      ]
    }
  };

  const config = industryConfig[industry];

  return (
    <Section background="muted" padding="xl">
      <SectionContent maxWidth="6xl">
        <div className="relative isolate overflow-hidden">
          
          {/* Background Pattern */}
          <div className="absolute right-0 -left-px -z-20 h-full w-full bg-[linear-gradient(90deg,var(--muted-foreground)_1px,transparent_1px)] [mask-image:linear-gradient(transparent_25%,black_25%,black_75%,transparent_75%)] [background-size:calc(100%/16)_100%] [mask-size:100%_16px] opacity-20" />

          <div>
            <h2 className="mb-16 max-w-3xl text-3xl leading-10 font-semibold sm:mb-24">
              {config.title}
              <span className="font-medium opacity-70 ml-2">
                {config.subtitle}
              </span>
            </h2>

            <div className="relative grid max-w-2xl gap-4 border-x border-border pb-32 sm:grid-cols-2 sm:gap-10 sm:pb-44 md:ml-10 md:border-0">
              {/* Decorative Circle */}
              <div 
                className="absolute inset-0 -top-[1100px] -left-[calc(1000px-22vw)] -z-10 size-[1500px] rounded-full border bg-background sm:-top-[480%] sm:-left-[185%] sm:size-[2000px] md:-top-[906%] md:-left-[294%] md:size-[3500px] lg:-top-[1186%] lg:-left-[380%] lg:size-[4500px] xl:-top-[1200%] xl:-left-[350%] 2xl:-top-[1196%] 2xl:-left-[345%] border-primary/20"
              />

              {config.metrics.map((metric, index) => (
                <div 
                  key={metric.label}
                  className="flex flex-col gap-2 group cursor-pointer hover:scale-105 transition-all duration-200"
                  onClick={() => trackEvent("metrics_stat_clicked", { 
                    industry, 
                    metric: metric.label, 
                    value: metric.value 
                  })}
                >
                  <span className="flex gap-5 text-3xl font-semibold">
                    <span 
                      className="relative -left-px w-px opacity-50 bg-primary"
                    />
                    <span className="text-primary">
                      {metric.value}
                    </span>
                  </span>
                  <p className="pl-5 font-medium text-muted-foreground/80">
                    {metric.label}
                  </p>
                  <p className="pl-5 text-sm text-muted-foreground/60">
                    {metric.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionContent>
    </Section>
  );
};

