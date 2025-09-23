"use client";

import React, { useState } from "react";
import {
  Thermometer,
  Refrigerator,
  Flame,
  Zap,
  Wrench,
  AlertTriangle,
  CheckCircle,
  Clock,
  TrendingUp,
  TrendingDown,
  Minus,
  Activity,
  Battery,
  Wifi,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRestaurantAnalytics } from "@/lib/hooks/restaurant-pages";

interface EquipmentItem {
  id: string;
  name: string;
  type: "refrigeration" | "cooking" | "prep" | "hvac" | "general";
  location: string;
  status: "optimal" | "warning" | "critical" | "maintenance";
  icon: React.ReactNode;
  currentReading: {
    value: string;
    unit: string;
    target: string;
    trend: "up" | "down" | "stable";
  };
  lastMaintenance: string;
  nextMaintenance: string;
  efficiency: number;
  energyUsage: string;
  connectivity: "online" | "offline" | "weak";
  alerts: number;
  specifications: {
    model: string;
    capacity: string;
    powerRating: string;
    installDate: string;
  };
}

const equipmentList: EquipmentItem[] = [
  {
    id: "walk-in-cooler-1",
    name: "Walk-in Cooler #1",
    type: "refrigeration",
    location: "Main Kitchen",
    status: "optimal",
    icon: <Refrigerator className="h-5 w-5" />,
    currentReading: {
      value: "36.8",
      unit: "°F",
      target: "35-38°F",
      trend: "stable"
    },
    lastMaintenance: "2024-01-15",
    nextMaintenance: "2024-04-15",
    efficiency: 94,
    energyUsage: "2.4 kWh",
    connectivity: "online",
    alerts: 0,
    specifications: {
      model: "Arctic Pro 8x12",
      capacity: "850 cu ft",
      powerRating: "3.5 kW",
      installDate: "2023-03-15"
    }
  },
  {
    id: "fryer-station-1",
    name: "Deep Fryer Station",
    type: "cooking",
    location: "Hot Line",
    status: "warning",
    icon: <Flame className="h-5 w-5" />,
    currentReading: {
      value: "347",
      unit: "°F",
      target: "350°F",
      trend: "down"
    },
    lastMaintenance: "2024-02-01",
    nextMaintenance: "2024-03-01",
    efficiency: 87,
    energyUsage: "12.8 kWh",
    connectivity: "online",
    alerts: 2,
    specifications: {
      model: "FryMaster Pro 40",
      capacity: "40 lbs oil",
      powerRating: "15 kW",
      installDate: "2023-05-22"
    }
  },
  {
    id: "freezer-unit-2",
    name: "Reach-in Freezer",
    type: "refrigeration", 
    location: "Prep Kitchen",
    status: "critical",
    icon: <Thermometer className="h-5 w-5" />,
    currentReading: {
      value: "12.4",
      unit: "°F",
      target: "-5 to 0°F",
      trend: "up"
    },
    lastMaintenance: "2023-12-10",
    nextMaintenance: "2024-02-10",
    efficiency: 68,
    energyUsage: "4.2 kWh",
    connectivity: "weak",
    alerts: 5,
    specifications: {
      model: "ColdMax Reach-in",
      capacity: "49 cu ft",
      powerRating: "1.8 kW",
      installDate: "2022-11-08"
    }
  },
  {
    id: "prep-table-3",
    name: "Refrigerated Prep Table",
    type: "prep",
    location: "Prep Station 3",
    status: "maintenance",
    icon: <Zap className="h-5 w-5" />,
    currentReading: {
      value: "41.2",
      unit: "°F",
      target: "38-41°F",
      trend: "stable"
    },
    lastMaintenance: "2024-01-28",
    nextMaintenance: "2024-02-28",
    efficiency: 0,
    energyUsage: "0 kWh",
    connectivity: "offline",
    alerts: 1,
    specifications: {
      model: "PrepCold 72",
      capacity: "72 inch",
      powerRating: "2.1 kW",
      installDate: "2023-08-14"
    }
  },
  {
    id: "hood-system-1",
    name: "Exhaust Hood System",
    type: "hvac",
    location: "Cook Line",
    status: "optimal",
    icon: <Activity className="h-5 w-5" />,
    currentReading: {
      value: "1200",
      unit: "CFM",
      target: "1000-1500 CFM",
      trend: "stable"
    },
    lastMaintenance: "2024-01-20",
    nextMaintenance: "2024-04-20",
    efficiency: 91,
    energyUsage: "5.6 kWh",
    connectivity: "online",
    alerts: 0,
    specifications: {
      model: "VentMaster 12ft",
      capacity: "1500 CFM",
      powerRating: "7.2 kW",
      installDate: "2023-04-10"
    }
  },
  {
    id: "dishwasher-1",
    name: "Commercial Dishwasher",
    type: "general",
    location: "Dish Pit",
    status: "optimal",
    icon: <Wrench className="h-5 w-5" />,
    currentReading: {
      value: "180",
      unit: "°F",
      target: "180°F",
      trend: "stable"
    },
    lastMaintenance: "2024-02-05",
    nextMaintenance: "2024-03-05",
    efficiency: 96,
    energyUsage: "8.4 kWh",
    connectivity: "online",
    alerts: 0,
    specifications: {
      model: "WashPro Commercial",
      capacity: "64 racks/hr",
      powerRating: "12 kW",
      installDate: "2023-06-12"
    }
  }
];

interface FeatureListProps {
  className?: string;
  showDetails?: boolean;
  variant?: "monitoring" | "list" | "grid";
  filterStatus?: string;
}

export function FeatureList({
  className = "",
  showDetails = true,
  variant = "monitoring",
  filterStatus
}: FeatureListProps) {
  const [selectedEquipment, setSelectedEquipment] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("all");
  const { trackFeatureEngagement } = useRestaurantAnalytics();

  const filteredEquipment = filterStatus 
    ? equipmentList.filter(item => item.status === filterStatus)
    : filter === "all" 
      ? equipmentList 
      : equipmentList.filter(item => item.status === filter);

  const handleEquipmentClick = (equipment: EquipmentItem) => {
    setSelectedEquipment(equipment.id);
    trackFeatureEngagement("equipment_monitoring_click", {
      equipment_id: equipment.id,
      equipment_type: equipment.type,
      status: equipment.status,
    });
  };

  const handleViewAllClick = () => {
    trackFeatureEngagement("cta_click", {
      source: "equipment_monitoring_list",
    });
  };

const getStatusColor = (_status: string) => {
  return "bg-primary/10 text-primary border-primary/20";
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case "optimal": return <CheckCircle className="h-4 w-4 text-primary" />;
    case "warning": return <AlertTriangle className="h-4 w-4 text-muted-foreground" />;
    case "critical": return <AlertTriangle className="h-4 w-4 text-muted-foreground" />;
    case "maintenance": return <Wrench className="h-4 w-4 text-primary" />;
    default: return <Clock className="h-4 w-4 text-muted-foreground" />;
  }
};

const getTrendIcon = (trend: string) => {
  switch (trend) {
    case "up": return <TrendingUp className="h-3 w-3 text-primary" />;
    case "down": return <TrendingDown className="h-3 w-3 text-primary" />;
    case "stable": return <Minus className="h-3 w-3 text-muted-foreground" />;
    default: return null;
  }
};

const getConnectivityIcon = (connectivity: string) => {
  switch (connectivity) {
    case "online": return <Wifi className="h-4 w-4 text-primary" />;
    case "offline": return <Wifi className="h-4 w-4 text-muted-foreground" />;
    case "weak": return <Wifi className="h-4 w-4 text-muted-foreground" />;
    default: return <Wifi className="h-4 w-4 text-muted-foreground" />;
  }
};

const getTypeColor = (_type: string) => {
  return "bg-primary/10 text-primary border-primary/20";
};

  return (
    <section className={`section-marketing ${className}`}>
      <div className="container">
        <div className="mb-12 text-center">
          <Badge variant="outline" className="mb-4">
            Equipment Monitoring
          </Badge>
          <h2 className="heading-brand-gradient mb-4 font-bold tracking-tight lg:text-6xl">
            Real-time Equipment Health Monitoring
          </h2>
          <p className="enterprise-body text-muted-foreground mx-auto max-w-3xl ">
            Complete visibility into your restaurant equipment performance with IoT sensors, 
            predictive maintenance alerts, and energy optimization recommendations.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="mb-8 flex flex-wrap items-center gap-3 justify-center">
          {["all", "optimal", "warning", "critical", "maintenance"].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={cn(
                "px-4 py-2 rounded-lg border transition-colors capitalize",
                filter === status
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card hover:bg-muted border-border"
              )}
            >
              {status === "all" ? "All Equipment" : status}
              {status !== "all" && (
                <span className="ml-2 text-xs">
                  ({equipmentList.filter(item => item.status === status).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Equipment List */}
        <div className="grid gap-4 lg:gap-6">
          {filteredEquipment.map((equipment) => (
            <div
              key={equipment.id}
              className={cn(
                "bg-card border rounded-lg p-6 cursor-pointer transition-all duration-200 tile-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                selectedEquipment === equipment.id ? "border-primary shadow-lg" : ""
              )}
              onClick={() => handleEquipmentClick(equipment)}
            >
              <div className="grid gap-4 lg:grid-cols-4">
                {/* Equipment Info */}
                <div className="lg:col-span-2 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-muted rounded-lg">
                      {equipment.icon}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="enterprise-body  font-semibold">{equipment.name}</h3>
                        <Badge 
                          variant="outline" 
                          className={`text-xs ${getStatusColor(equipment.status)} capitalize`}
                        >
                          {getStatusIcon(equipment.status)}
                          <span className="ml-1">{equipment.status}</span>
                        </Badge>
                        <Badge 
                          variant="outline" 
                          className={`text-xs ${getTypeColor(equipment.type)} capitalize`}
                        >
                          {equipment.type}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>📍 {equipment.location}</span>
                        <span className="flex items-center gap-1">
                          {getConnectivityIcon(equipment.connectivity)}
                          {equipment.connectivity}
                        </span>
{equipment.alerts > 0 && (
                          <span className="flex items-center gap-1 text-primary">
                            <AlertTriangle className="h-4 w-4" />
                            {equipment.alerts} alerts
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Current Reading */}
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">Current Reading</div>
                  <div className="flex items-center gap-2">
                    <div className="text-2xl font-bold text-primary">
                      {equipment.currentReading.value}{equipment.currentReading.unit}
                    </div>
                    {getTrendIcon(equipment.currentReading.trend)}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Target: {equipment.currentReading.target}
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Efficiency</div>
                      <div className="flex items-center gap-2">
<div className={cn(
                          "text-sm font-medium text-primary"
                        )}>
                          {equipment.efficiency > 0 ? `${equipment.efficiency}%` : "Offline"}
                        </div>
                        {equipment.efficiency > 0 && (
                          <Battery className={cn(
                            "h-4 w-4 text-primary"
                          )} />
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Energy Usage</div>
                      <div className="text-sm font-medium">{equipment.energyUsage}</div>
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Next Maintenance</div>
                    <div className="text-sm font-medium">{equipment.nextMaintenance}</div>
                  </div>
                </div>
              </div>

              {/* Expanded Details */}
              {showDetails && selectedEquipment === equipment.id && (
                <div className="mt-6 pt-6 border-t">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Equipment Specifications</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Model:</span>
                          <span>{equipment.specifications.model}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Capacity:</span>
                          <span>{equipment.specifications.capacity}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Power Rating:</span>
                          <span>{equipment.specifications.powerRating}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Install Date:</span>
                          <span>{equipment.specifications.installDate}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Maintenance History</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Last Service:</span>
                          <span>{equipment.lastMaintenance}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Next Service:</span>
                          <span>{equipment.nextMaintenance}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Service Status:</span>
                          <span className={cn(
                            "font-medium",
                            equipment.status === "maintenance" ? "text-primary" : "text-primary"
                          )}>
                            {equipment.status === "maintenance" ? "Scheduled" : "Up to date"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-muted/30 rounded-lg">
<CheckCircle className="h-8 w-8 mx-auto text-primary mb-2" />
            <div className="text-2xl font-bold text-primary">
              {equipmentList.filter(item => item.status === "optimal").length}
            </div>
            <div className="text-sm text-muted-foreground">Optimal Status</div>
          </div>
          
          <div className="text-center p-6 bg-muted/30 rounded-lg">
<AlertTriangle className="h-8 w-8 mx-auto text-primary mb-2" />
            <div className="text-2xl font-bold text-primary">
              {equipmentList.filter(item => item.status === "warning").length}
            </div>
            <div className="text-sm text-muted-foreground">Need Attention</div>
          </div>
          
          <div className="text-center p-6 bg-muted/30 rounded-lg">
            <Activity className="h-8 w-8 mx-auto text-primary mb-2" />
            <div className="text-2xl font-bold text-primary">
              {Math.round(equipmentList.reduce((sum, item) => sum + item.efficiency, 0) / equipmentList.filter(item => item.efficiency > 0).length)}%
            </div>
            <div className="text-sm text-muted-foreground">Avg Efficiency</div>
          </div>
          
          <div className="text-center p-6 bg-muted/30 rounded-lg">
<Zap className="h-8 w-8 mx-auto text-primary mb-2" />
            <div className="text-2xl font-bold text-primary">24/7</div>
            <div className="text-sm text-muted-foreground">Live Monitoring</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Button size="lg" onClick={handleViewAllClick}>
            View Full Equipment Dashboard
          </Button>
          <p className="mt-3 text-sm text-muted-foreground">
            Get complete equipment insights with predictive maintenance and energy optimization
          </p>
        </div>
      </div>
    </section>
  );
};

export type { EquipmentItem, FeatureListProps };