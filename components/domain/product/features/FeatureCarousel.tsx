"use client";

import { ArrowRight, Building, MapPin, Users, TrendingUp, Shield, BarChart3 } from "lucide-react";
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
  },
  {
    id: "mountain-lodge",
    name: "Mountain Lodge",
    city: "Denver, CO",
    type: "corporate",
    metrics: {
      compliance: "98.9%",
      efficiency: "90%",
      savings: "$2,300/mo"
    },
    specialties: ["Seasonal Traffic", "Inventory Efficiency", "Cold Chain Reliability"],
    connectedSystems: 7
  }
];

interface FeatureCarouselProps {
  className?: string;
  showAnimations?: boolean;
  variant?: "showcase" | "network" | "detailed";
}

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

  const getLocationTypeColor = (type: string) => {
    switch (type) {
      case "flagship": return "bg-purple-100 text-purple-800 border-purple-200";
      case "franchise": return "bg-blue-100 text-blue-800 border-blue-200";
      case "corporate": return "bg-green-100 text-green-800 border-green-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
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

  return (
    <section className={`section-marketing ${className}`}>
      <div className="container">
        <div className="mb-12 text-center">
          <Badge variant="outline" className="mb-4">
            Multi-Location Management
          </Badge>
          <h2 className="heading-brand-gradient mb-4 text-4xl font-bold tracking-tight lg:text-6xl">
            Connecting Restaurant Operations Worldwide
          </h2>
          <p className="text-muted-foreground mx-auto max-w-3xl text-lg">
            Seamlessly manage operations across unlimited locations with centralized control, 
            standardized processes, and real-time insights for every restaurant in your network.
          </p>
        </div>

        {showAnimations && <MultiLocationNetwork />}
        
        {/* Location Showcase */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
          {restaurantLocations.map((location) => (
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
            <Button size="lg" onClick={handleGetStartedClick} className="cta-shimmer">
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
      className="group p-6 bg-card rounded-lg border hover:shadow-lg transition-all duration-200 text-left w-full tile-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
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
          <div className="text-lg font-bold text-green-600">{location.metrics.compliance}</div>
          <div className="text-xs text-muted-foreground">Compliance</div>
        </div>
        <div className="text-center p-3 bg-muted/50 rounded-lg">
          <div className="text-lg font-bold text-blue-600">{location.metrics.efficiency}</div>
          <div className="text-xs text-muted-foreground">Efficiency</div>
        </div>
        <div className="text-center p-3 bg-muted/50 rounded-lg">
          <div className="text-lg font-bold text-primary">{location.metrics.savings}</div>
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
  const containerRef = useRef<HTMLDivElement>(null);
  const centralRef = useRef<HTMLDivElement>(null);
  const location1Ref = useRef<HTMLDivElement>(null);
  const location2Ref = useRef<HTMLDivElement>(null);
  const location3Ref = useRef<HTMLDivElement>(null);
  const location4Ref = useRef<HTMLDivElement>(null);
  const location5Ref = useRef<HTMLDivElement>(null);

  return (
    <div className="relative flex w-full items-center justify-center overflow-hidden p-10" ref={containerRef}>
      <div className="flex w-full flex-col items-center justify-between gap-10 lg:flex-row">
        {/* Location Nodes */}
        <div className="h-100 relative z-10 flex w-full items-center justify-center rounded-3xl lg:w-0">
          {/* Location 1 */}
          <div
            ref={location1Ref}
            className="size-16 bg-background absolute left-0 top-20 z-10 flex items-center justify-center rounded-full border-2 border-blue-500 p-2"
          >
            <div className="bg-blue-500 flex size-8 items-center justify-center rounded-full">
              <Building size={16} className="text-white" />
            </div>
          </div>
          
          {/* Location 2 */}
          <div
            ref={location2Ref}
            className="size-16 bg-background absolute right-0 top-20 z-10 flex items-center justify-center rounded-full border-2 border-green-500 p-2"
          >
            <div className="bg-green-500 flex size-8 items-center justify-center rounded-full">
              <Users size={16} className="text-white" />
            </div>
          </div>
          
          {/* Location 3 */}
          <div
            ref={location3Ref}
            className="size-16 bg-background absolute bottom-0 left-6 z-10 flex items-center justify-center rounded-full border-2 border-purple-500 p-2"
          >
            <div className="bg-purple-500 flex size-8 items-center justify-center rounded-full">
              <Shield size={16} className="text-white" />
            </div>
          </div>
          
          {/* Location 4 */}
          <div
            ref={location4Ref}
            className="size-16 bg-background absolute bottom-0 right-6 z-10 flex items-center justify-center rounded-full border-2 border-orange-500 p-2"
          >
            <div className="bg-orange-500 flex size-8 items-center justify-center rounded-full">
              <MapPin size={16} className="text-white" />
            </div>
          </div>
          
          {/* Location 5 */}
          <div
            ref={location5Ref}
            className="size-16 bg-background absolute top-0 left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center rounded-full border-2 border-pink-500 p-2"
          >
            <div className="bg-pink-500 flex size-8 items-center justify-center rounded-full">
              <TrendingUp size={16} className="text-white" />
            </div>
          </div>
        </div>
        
        {/* Central Hub */}
        <div
          ref={centralRef}
          className="bg-gradient-to-br from-primary to-primary/80 z-10 flex size-32 items-center justify-center rounded-3xl border-4 border-primary/20 lg:size-40"
        >
          <div className="text-center text-white">
            <BarChart3 className="size-8 mx-auto mb-2" />
            <div className="text-xs font-medium">OpsFlow</div>
            <div className="text-xs opacity-80">Control Center</div>
          </div>
        </div>
      </div>

      {/* Animated Beams */}
      <AnimatedBeam duration={3} containerRef={containerRef} fromRef={location1Ref} toRef={centralRef} />
      <AnimatedBeam duration={3} containerRef={containerRef} fromRef={location2Ref} toRef={centralRef} />
      <AnimatedBeam duration={3} containerRef={containerRef} fromRef={location3Ref} toRef={centralRef} />
      <AnimatedBeam duration={3} containerRef={containerRef} fromRef={location4Ref} toRef={centralRef} />
      <AnimatedBeam duration={3} containerRef={containerRef} fromRef={location5Ref} toRef={centralRef} />
    </div>
  );
};

function getLocationTypeColor(type: string) {
  switch (type) {
    case "flagship": return "bg-purple-100 text-purple-800 border-purple-200";
    case "franchise": return "bg-blue-100 text-blue-800 border-blue-200";
    case "corporate": return "bg-green-100 text-green-800 border-green-200";
    default: return "bg-gray-100 text-gray-800 border-gray-200";
  }
}

function getLocationTypeIcon(type: string) {
  switch (type) {
    case "flagship": return <Building className="h-4 w-4" />;
    case "franchise": return <Users className="h-4 w-4" />;
    case "corporate": return <Shield className="h-4 w-4" />;
    default: return <MapPin className="h-4 w-4" />;
  }
}

export type { RestaurantLocation, FeatureCarouselProps };