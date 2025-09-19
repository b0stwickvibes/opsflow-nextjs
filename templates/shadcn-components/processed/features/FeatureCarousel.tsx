"use client";

import { ArrowRight, Building, MapPin, Users, TrendingUp, Shield, BarChart3, Zap } from "lucide-react";
import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { useRestaurantAnalytics } from "@/lib/hooks/restaurant-pages";

interface RestaurantLocation {
  id: string;
  name: string;
  city: string;
  type: "flagship" | "franchise" | "corporate";
  metrics: {
    compliance: string;
    efficiency: string;
    savings: string;
  };
  specialties: string[];
  connectedSystems: number;
}

const restaurantLocations: RestaurantLocation[] = [
  {
    id: "flagship-downtown",
    name: "Downtown Flagship",
    city: "New York, NY",
    type: "flagship",
    metrics: {
      compliance: "99.9%",
      efficiency: "94%",
      savings: "$3,200/mo"
    },
    specialties: ["HACCP Excellence", "Staff Training Hub", "Corporate Standards"],
    connectedSystems: 12
  },
  {
    id: "suburban-family",
    name: "Suburban Family Location",
    city: "Austin, TX",
    type: "franchise",
    metrics: {
      compliance: "98.5%",
      efficiency: "89%",
      savings: "$2,100/mo"
    },
    specialties: ["Quick Service", "Family Focus", "Cost Control"],
    connectedSystems: 8
  },
  {
    id: "urban-express",
    name: "Urban Express",
    city: "San Francisco, CA",
    type: "corporate",
    metrics: {
      compliance: "99.1%",
      efficiency: "91%",
      savings: "$2,800/mo"
    },
    specialties: ["Fast Casual", "Tech Integration", "Sustainability"],
    connectedSystems: 10
  },
  {
    id: "airport-terminal",
    name: "Airport Terminal",
    city: "Chicago, IL",
    type: "corporate",
    metrics: {
      compliance: "97.8%",
      efficiency: "87%",
      savings: "$1,900/mo"
    },
    specialties: ["High Volume", "Speed Service", "Travel Hub"],
    connectedSystems: 6
  },
  {
    id: "beach-location",
    name: "Beachfront Location",
    city: "Miami, FL",
    type: "franchise",
    metrics: {
      compliance: "99.3%",
      efficiency: "92%",
      savings: "$2,500/mo"
    },
    specialties: ["Seasonal Menu", "Tourist Focus", "Weather Resilience"],
    connectedSystems: 9
  }
];

interface FeatureCarouselProps {
  className?: string;
  showAnimations?: boolean;
  variant?: "showcase" | "network" | "detailed";
}

const getLocationCardColor = (type: string) => {
  switch (type) {
    case "flagship": return "dashboard-metric-blue";
    case "franchise": return "bg-blue-100";
    case "corporate": return "bg-green-100";
    default: return "bg-card";
  }
};

const getLocationTypeColor = (type: string) => {
  switch (type) {
    case "flagship": return "dashboard-badge-active";
    case "franchise": return "dashboard-badge-franchise";
    case "corporate": return "dashboard-badge-corporate";
    default: return "bg-muted text-foreground border-border";
  }
};

const getLocationTypeIcon = (type: string) => {
  switch (type) {
    case "flagship": return <Building className="h-4 w-4" />;
    case "franchise": return <Users className="h-4 w-4" />;
    case "corporate": return <Shield className="h-4 w-4" />;
    default: return <MapPin className="h-4 w-4" />;
  }
};

export function FeatureCarousel({
  className = "",
  showAnimations = true,
  variant = "showcase"
}: FeatureCarouselProps) {
  const { trackFeatureEngagement } = useRestaurantAnalytics();

  const handleLocationClick = (location: RestaurantLocation) => {
    trackFeatureEngagement("multi_location_click", {
      location_id: location.id,
      location_type: location.type,
    });
  };

  const handleGetStartedClick = () => {
    trackFeatureEngagement("cta_click", {
      source: "multi_location_showcase",
    });
  };

  return (
    <section className={`section-marketing hero-ambient energy-balanced ${className}`}>
      <div className="container">
        <div className="mb-12 text-center">
          <Badge variant="outline" className="mb-4">
            Multi-Location Management
          </Badge>
          <h2 className="heading-brand-gradient text-display-2xl mb-4  font-bold tracking-tight lg:text-6xl">
            Connecting Restaurant Operations Worldwide
          </h2>
          <p className="enterprise-body text-muted-foreground mx-auto max-w-3xl ">
            Seamlessly manage operations across unlimited locations with centralized control,
            standardized processes, and real-time insights for every restaurant in your network.
          </p>
        </div>

        {showAnimations && (
          <div className="my-20">
            <MultiLocationNetwork />
          </div>
        )}

        {/* Location Showcase */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {restaurantLocations.slice(0, 3).map((location) => (
            <LocationCard
              key={location.id}
              location={location}
              onClick={() => handleLocationClick(location)}
            />
          ))}
        </div>

        {/* Network Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="p-6 bg-muted/30 rounded-lg">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Connected Locations</div>
          </div>
          <div className="p-6 bg-muted/30 rounded-lg">
            <div className="text-3xl font-bold text-primary mb-2">99.2%</div>
            <div className="text-sm text-muted-foreground">Average Compliance</div>
          </div>
          <div className="p-6 bg-muted/30 rounded-lg">
            <div className="text-3xl font-bold text-primary mb-2">30%</div>
            <div className="text-sm text-muted-foreground">Cost Reduction</div>
          </div>
          <div className="p-6 bg-muted/30 rounded-lg">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Network Monitoring</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="p-8 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Scale Your Restaurant Operations</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Whether you're managing 2 locations or 200, OpsFlow scales with your business.
              Get centralized control without losing local flexibility.
            </p>
            <Button size="lg" onClick={handleGetStartedClick}>
              Start Multi-Location Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const LocationCard: React.FC<{
  location: RestaurantLocation;
  onClick?: () => void;
}> = ({ location, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group p-6 bg-card rounded-lg border hover:shadow-lg transition-all duration-200 text-left w-full tile-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="enterprise-body font-semibold  group-hover:text-primary transition-colors">
            {location.name}
          </h3>
          <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
            <MapPin className="h-3 w-3" />
            {location.city}
          </div>
        </div>
        <Badge
          variant="outline"
          className={`text-xs ${getLocationTypeColor(location.type)} capitalize`}
        >
          {getLocationTypeIcon(location.type)}
          <span className="ml-1">{location.type}</span>
        </Badge>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="text-center p-3 bg-muted/50 rounded-lg">
          <div className="enterprise-body  font-bold text-green-600">{location.metrics.compliance}</div>
          <div className="text-xs text-muted-foreground">Compliance</div>
        </div>
        <div className="text-center p-3 bg-muted/50 rounded-lg">
          <div className="enterprise-body  font-bold text-blue-600">{location.metrics.efficiency}</div>
          <div className="text-xs text-muted-foreground">Efficiency</div>
        </div>
        <div className="text-center p-3 bg-muted/50 rounded-lg">
          <div className="enterprise-body  font-bold text-primary">{location.metrics.savings}</div>
          <div className="text-xs text-muted-foreground">Savings</div>
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="font-medium text-sm">Specialties:</h4>
        <div className="flex flex-wrap gap-1">
          {location.specialties.map((specialty, index) => (
            <span key={index} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
              {specialty}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="text-xs text-muted-foreground">
          {location.connectedSystems} connected systems
        </div>
        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </button>
  );
};

const MultiLocationNetwork = () => {
  // Container and step refs for animated beams
  const containerRef = useRef<HTMLDivElement>(null);
  const location1Ref = useRef<HTMLDivElement>(null);
  const location2Ref = useRef<HTMLDivElement>(null);
  const location3Ref = useRef<HTMLDivElement>(null);
  const centralRef = useRef<HTMLDivElement>(null);
  const powerRef = useRef<HTMLDivElement>(null);

  return (
    <div 
      className="relative flex w-full items-center justify-center overflow-hidden py-8 px-4 mb-8 max-h-80"
      ref={containerRef}
    >
      <div className="flex items-center justify-between w-full max-w-6xl mx-auto">
        
        {/* Left Column: Input Nodes */}
        <div className="flex flex-col items-center justify-center gap-6 lg:gap-8">
          
          {/* Location 1: Setup */}
          <div
            ref={location1Ref}
            className="flex-shrink-0 z-10"
          >
            <div className="dashboard-card-white tile-hover p-3 rounded-lg shadow-sm">
              <div className="flex flex-col items-center gap-2 text-center min-w-[120px]">
                <div className="w-10 h-10 rounded-md flex items-center justify-center dashboard-metric-blue">
                  <Building className="size-7" />
                </div>
                <div>
                  <h3 className="font-semibold dashboard-text-primary text-xs mb-1">Flagship Store</h3>
                  <p className="text-xs dashboard-text-secondary">Downtown NYC</p>
                </div>
              </div>
            </div>
          </div>

          {/* Location 2: Integration */}
          <div
            ref={location2Ref}
            className="flex-shrink-0 z-10 transform translate-x-12"
          >
            <div className="dashboard-card-white tile-hover p-3 rounded-lg shadow-sm">
              <div className="flex flex-col items-center gap-2 text-center min-w-[120px]">
                <div className="w-10 h-10 rounded-md flex items-center justify-center bg-purple-100">
                  <Users className="text-purple-600 size-7" />
                </div>
                <div>
                  <h3 className="font-semibold dashboard-text-primary text-xs mb-1">Franchise Network</h3>
                  <p className="text-xs dashboard-text-secondary">Multi-location</p>
                </div>
              </div>
            </div>
          </div>

          {/* Location 3: Optimization */}
          <div
            ref={location3Ref}
            className="flex-shrink-0 z-10"
          >
            <div className="dashboard-card-white tile-hover p-3 rounded-lg shadow-sm">
              <div className="flex flex-col items-center gap-2 text-center min-w-[120px]">
                <div className="w-10 h-10 rounded-md flex items-center justify-center bg-blue-100">
                  <Shield className="text-blue-600 size-7" />
                </div>
                <div>
                  <h3 className="font-semibold dashboard-text-primary text-xs mb-1">Corporate Locations</h3>
                  <p className="text-xs dashboard-text-secondary">Enterprise</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Center: Operations Hub */}
        <div
          ref={centralRef}
          className="flex-shrink-0 z-10"
        >
          <div className="dashboard-card-white tile-hover p-6 rounded-2xl shadow-lg">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-primary/10">
                <BarChart3 className="text-primary size-8" />
              </div>
              <div>
                <h3 className="text-lg font-semibold dashboard-text-primary mb-1">
                  Operations Hub
                </h3>
                <p className="dashboard-text-secondary text-sm max-w-[140px]">
                  Centralized control center
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Results */}
        <div
          ref={powerRef}
          className="flex-shrink-0 z-10"
        >
          <div className="dashboard-card-white tile-hover p-4 rounded-xl shadow-sm">
            <div className="flex flex-col items-center gap-3 text-center min-w-[120px]">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-primary/10">
                <Zap className="text-primary size-6" />
              </div>
              <div>
                <h3 className="font-semibold dashboard-text-primary text-sm mb-1">Results</h3>
                <p className="text-xs dashboard-text-secondary">Instant impact & ROI</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Beams - 3-1-1 Layout */}
      <AnimatedBeam
        duration={3}
        delay={0}
        pathColor="var(--primary)"
        gradientStartColor="var(--primary-400)"
        gradientStopColor="var(--secondary-400)"
        containerRef={containerRef}
        fromRef={location1Ref}
        toRef={centralRef}
      />
      <AnimatedBeam
        duration={3}
        delay={0}
        pathColor="var(--primary)"
        gradientStartColor="var(--primary-400)"
        gradientStopColor="var(--secondary-400)"
        containerRef={containerRef}
        fromRef={location2Ref}
        toRef={centralRef}
      />
      <AnimatedBeam
        duration={3}
        delay={0}
        pathColor="var(--primary)"
        gradientStartColor="var(--primary-400)"
        gradientStopColor="var(--secondary-400)"
        containerRef={containerRef}
        fromRef={location3Ref}
        toRef={centralRef}
      />
      <AnimatedBeam
        duration={3}
        delay={0.9}
        pathColor="var(--secondary)"
        gradientStartColor="var(--secondary-400)"
        gradientStopColor="var(--primary-400)"
        containerRef={containerRef}
        fromRef={centralRef}
        toRef={powerRef}
      />
    </div>
  );
};

export type { RestaurantLocation, FeatureCarouselProps };