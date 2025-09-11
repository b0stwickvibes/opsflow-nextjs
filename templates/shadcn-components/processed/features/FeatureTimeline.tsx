"use client";

import {
  CheckCircle,
  Clock,
  ArrowRight,
  Zap,
  Shield,
  BarChart3,
  Users,
  Trophy,
} from "lucide-react";
import { useRef, useState } from "react";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useRestaurantAnalytics } from "@/lib/hooks/restaurant-pages";

interface ImplementationPhase {
  id: string;
  phase: number;
  title: string;
  duration: string;
  description: string;
  icon: React.ReactNode;
  deliverables: string[];
  milestones: string[];
  timeline: string;
  status: "completed" | "in-progress" | "upcoming";
  demoVideo?: string;
}

const implementationPhases: ImplementationPhase[] = [
  {
    id: "foundation-setup",
    phase: 1,
    title: "Foundation & Setup",
    duration: "Week 1-2",
    description: "Initial system configuration, data migration, and core infrastructure setup for your restaurant operations.",
    icon: <Shield className="h-6 w-6" />,
    deliverables: [
      "Complete system installation",
      "Data migration from existing systems",
      "User account setup and permissions",
      "Basic HACCP configuration"
    ],
    milestones: [
      "System accessible to all locations",
      "Historical data imported",
      "Staff accounts created",
      "Initial compliance templates active"
    ],
    timeline: "2 weeks",
    status: "completed"
  },
  {
    id: "core-operations",
    phase: 2,
    title: "Core Operations Integration",
    duration: "Week 3-4",
    description: "Implement essential restaurant operations including temperature monitoring, task management, and basic analytics.",
    icon: <Zap className="h-6 w-6" />,
    deliverables: [
      "Temperature monitoring system",
      "Digital task management",
      "Basic reporting dashboard",
      "Mobile app deployment"
    ],
    milestones: [
      "100% temperature logging automated",
      "All daily tasks digitized",
      "Real-time dashboards active",
      "Staff using mobile apps"
    ],
    timeline: "2 weeks",
    status: "completed"
  },
  {
    id: "advanced-analytics",
    phase: 3,
    title: "Advanced Analytics & AI",
    duration: "Week 5-6",
    description: "Deploy predictive analytics, cost optimization algorithms, and advanced performance monitoring systems.",
    icon: <BarChart3 className="h-6 w-6" />,
    deliverables: [
      "Predictive analytics engine",
      "Cost optimization dashboard",
      "Performance benchmarking",
      "Automated reporting suite"
    ],
    milestones: [
      "AI predictions 90%+ accurate",
      "Cost insights generating savings",
      "Performance metrics baseline set",
      "Weekly automated reports active"
    ],
    timeline: "2 weeks",
    status: "in-progress"
  },
  {
    id: "staff-optimization",
    phase: 4,
    title: "Staff Management & Training",
    duration: "Week 7-8",
    description: "Implement comprehensive staff management including scheduling, training tracking, and performance analytics.",
    icon: <Users className="h-6 w-6" />,
    deliverables: [
      "AI-powered scheduling system",
      "Digital training programs",
      "Performance tracking dashboard",
      "Employee engagement tools"
    ],
    milestones: [
      "Scheduling optimization active",
      "Training completion tracking",
      "Individual performance dashboards",
      "Employee satisfaction surveys"
    ],
    timeline: "2 weeks",
    status: "upcoming"
  },
  {
    id: "multi-location",
    phase: 5,
    title: "Multi-location Scaling",
    duration: "Week 9-10",
    description: "Scale operations across all locations with centralized management and location-specific customizations.",
    icon: <Trophy className="h-6 w-6" />,
    deliverables: [
      "Centralized multi-location dashboard",
      "Location-specific customizations",
      "Corporate reporting suite",
      "Franchise management tools"
    ],
    milestones: [
      "All locations connected",
      "Centralized oversight active",
      "Corporate KPIs tracking",
      "Scalable processes established"
    ],
    timeline: "2 weeks",
    status: "upcoming"
  },
  {
    id: "optimization",
    phase: 6,
    title: "Optimization & Growth",
    duration: "Week 11-12",
    description: "Fine-tune all systems, optimize performance, and prepare for long-term growth and expansion.",
    icon: <CheckCircle className="h-6 w-6" />,
    deliverables: [
      "System performance optimization",
      "Advanced automation rules",
      "Growth planning dashboard",
      "Success metrics tracking"
    ],
    milestones: [
      "Peak performance achieved",
      "Full automation implemented",
      "Growth metrics established",
      "ROI targets exceeded"
    ],
    timeline: "2 weeks",
    status: "upcoming"
  }
];

interface FeatureTimelineProps {
  className?: string;
  variant?: "horizontal" | "vertical" | "compact";
  showProgress?: boolean;
}

export function FeatureTimeline({ 
  className = "",
  variant = "horizontal",
  showProgress = true
}: FeatureTimelineProps) {
  const [selectedPhase, setSelectedPhase] = useState<string>("foundation-setup");
  const { trackFeatureEngagement } = useRestaurantAnalytics();

  const selectedPhaseData = implementationPhases.find(phase => phase.id === selectedPhase) || implementationPhases[0];
  const completedPhases = implementationPhases.filter(phase => phase.status === "completed").length;
  const progressPercentage = (completedPhases / implementationPhases.length) * 100;

  const handlePhaseClick = (phaseId: string) => {
    setSelectedPhase(phaseId);
    trackFeatureEngagement("timeline_phase_click", {
      phase_id: phaseId,
      phase_number: implementationPhases.find(p => p.id === phaseId)?.phase,
    });
  };

  const handleGetStartedClick = () => {
    trackFeatureEngagement("cta_click", {
      source: "implementation_timeline",
      selected_phase: selectedPhase,
    });
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed": return <CheckCircle className="h-5 w-5 text-green-600" />;
      case "in-progress": return <Clock className="h-5 w-5 text-orange-500" />;
      default: return <div className="h-5 w-5 rounded-full border-2 border-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-100 text-green-800 border-green-200";
      case "in-progress": return "bg-orange-100 text-orange-800 border-orange-200";
      default: return "bg-muted text-foreground border-border";
    }
  };

  return (
    <section className={`py-24 lg:py-32 ${className}`}>
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="enterprise-headline mb-4 text-3xl font-bold lg:">
            Your Implementation Journey
          </h2>
          <p className="enterprise-body text-muted-foreground ">
            A proven 12-week implementation process that gets your restaurant operations running smoothly. 
            From setup to optimization, we're with you every step.
          </p>
        </div>

        {/* Progress Bar */}
        {showProgress && (
          <div className="mb-12 mx-auto max-w-4xl">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-medium">Implementation Progress</div>
              <div className="text-sm text-muted-foreground">{completedPhases} of {implementationPhases.length} phases complete</div>
            </div>
            <div className="w-full bg-muted rounded-full h-3">
              <div 
                className="bg-primary h-3 rounded-full transition-all duration-300 ease-in-out"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Timeline Navigation */}
        <div className="mb-12 overflow-x-auto">
          <div className="flex gap-4 min-w-max pb-4">
            {implementationPhases.map((phase) => (
              <button
                key={phase.id}
                onClick={() => handlePhaseClick(phase.id)}
                className={`flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-all min-w-[200px] ${
                  selectedPhase === phase.id
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/20"
                }`}
              >
                <div className="flex items-center gap-2">
                  {getStatusIcon(phase.status)}
                  <Badge 
                    variant="outline" 
                    className={`text-xs ${getStatusColor(phase.status)} capitalize`}
                  >
                    {phase.status.replace("-", " ")}
                  </Badge>
                </div>
                
                <div className="text-center">
                  <div className="text-sm font-semibold">Phase {phase.phase}</div>
                  <div className="text-xs text-muted-foreground">{phase.duration}</div>
                </div>
                
                <h3 className="text-sm font-medium text-center">{phase.title}</h3>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Phase Details */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Phase Information */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  {selectedPhaseData.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{selectedPhaseData.title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${getStatusColor(selectedPhaseData.status)}`}
                    >
                      {selectedPhaseData.status.replace("-", " ")}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{selectedPhaseData.duration}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                {selectedPhaseData.description}
              </p>
            </div>

            <div>
              <h4 className="enterprise-body  font-semibold mb-3">Key Deliverables</h4>
              <div className="space-y-2">
                {selectedPhaseData.deliverables.map((deliverable, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span className="text-sm">{deliverable}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="enterprise-body  font-semibold mb-3">Success Milestones</h4>
              <div className="space-y-2">
                {selectedPhaseData.milestones.map((milestone, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Trophy className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{milestone}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Visual Demo */}
          <div className="space-y-4">
            <div className="p-6 bg-muted/30 rounded-lg">
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Phase {selectedPhaseData.phase} Overview</h4>
                <div className="h-32 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center space-y-2">
                    {selectedPhaseData.icon}
                    <div className="text-sm text-muted-foreground">Implementation Preview</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Duration:</span>
                  <span className="font-medium">{selectedPhaseData.timeline}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Deliverables:</span>
                  <span className="font-medium">{selectedPhaseData.deliverables.length} items</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Milestones:</span>
                  <span className="font-medium">{selectedPhaseData.milestones.length} goals</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Clock className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h5 className="font-medium text-sm mb-1">Timeline Guarantee</h5>
                  <p className="text-xs text-muted-foreground">
                    We guarantee completion of Phase {selectedPhaseData.phase} within {selectedPhaseData.timeline} or provide additional support at no cost.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center p-8 bg-muted/30 rounded-lg">
          <h3 className="enterprise-body  font-bold mb-2">Ready to Start Your Implementation?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join 500+ restaurants that have successfully implemented OpsFlow. Our implementation team 
            will work closely with you to ensure a smooth transition and rapid ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" onClick={handleGetStartedClick}>
              Schedule Implementation Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <div className="text-sm text-muted-foreground">
              Free consultation • No setup fees • 30-day guarantee
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export type { ImplementationPhase, FeatureTimelineProps };