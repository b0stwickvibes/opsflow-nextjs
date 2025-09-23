import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ArrowRight, CheckCircle, Clock, TrendingUp } from "lucide-react";

interface Solution {
  problem: string;
  solution: string;
  benefits: string[];
  metrics?: {
    label: string;
    value: string;
    improvement: string;
  }[];
}

interface ProcessSolution {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  solutions: Solution[];
  timeframe: string;
  complexity: "Low" | "Medium" | "High";
}

interface IndustryProcessSolutionsProps {
  title: string;
  description: string;
  badge: string;
  processSolutions: ProcessSolution[];
  bottomCTA?: {
    title: string;
    description: string;
    action: () => void;
  };
}

export function IndustryProcessSolutions({ 
  title, 
  description, 
  badge, 
  processSolutions,
  bottomCTA 
}: IndustryProcessSolutionsProps) {
  return (
    <section className="section-marketing">
      <div className="container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 clerk-inspired-badge">
            {badge}
          </Badge>
          <h2 className="text-display-lg mb-6">
            {title}
          </h2>
          <p className="enterprise-body max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {/* Process Solutions */}
        <div className="space-y-16">
          {processSolutions.map((process, processIndex) => {
            const IconComponent = process.icon;
            
            return (
              <div key={processIndex} className="relative">
                {/* Process Header */}
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 icon-container-roi rounded-2xl flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-display-md dashboard-text-primary">
                        {process.title}
                      </h3>
                      <div className="flex items-center gap-4 mt-2">
                        <Badge variant="outline" className="text-xs">
                          <Clock className="w-3 h-3 mr-1" />
                          {process.timeframe}
                        </Badge>
                        <Badge 
                          variant={process.complexity === "Low" ? "default" : process.complexity === "Medium" ? "secondary" : "destructive"}
                          className="text-xs"
                        >
                          {process.complexity} complexity
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <p className="enterprise-body max-w-2xl mx-auto">
                    {process.description}
                  </p>
                </div>

                {/* Solutions Grid */}
                <div className="grid gap-8 lg:gap-12">
                  {process.solutions.map((solution, solutionIndex) => (
                    <div key={solutionIndex}>
                      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        
                        {/* Problem & Solution */}
                        <div className={`space-y-8 ${solutionIndex % 2 === 1 ? 'lg:order-2' : ''}`}>
                          {/* Problem */}
                          <div className="enterprise-card p-8 border-l-4 border-destructive/30 bg-destructive/5">
                            <div className="space-y-4">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-destructive/20 rounded-lg flex items-center justify-center">
                                  <span className="text-destructive font-bold text-sm">!</span>
                                </div>
                                <h4 className="font-semibold dashboard-text-primary">
                                  Current Challenge
                                </h4>
                              </div>
                              <p className="enterprise-body">
                                {solution.problem}
                              </p>
                            </div>
                          </div>

                          {/* Solution */}
                          <div className="enterprise-card p-8 border-l-4 border-primary/30 bg-primary/5">
                            <div className="space-y-4">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                                  <CheckCircle className="w-5 h-5 text-primary" />
                                </div>
                                <h4 className="font-semibold dashboard-text-primary">
                                  OpsFlow Solution
                                </h4>
                              </div>
                              <p className="enterprise-body">
                                {solution.solution}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Benefits & Metrics */}
                        <div className={`space-y-8 ${solutionIndex % 2 === 1 ? 'lg:order-1' : ''}`}>
                          {/* Benefits */}
                          <div className="enterprise-metric-card p-8">
                            <h4 className="font-semibold dashboard-text-primary mb-6">
                              Key Benefits
                            </h4>
                            <div className="space-y-4">
                              {solution.benefits.map((benefit, benefitIndex) => (
                                <div key={benefitIndex} className="flex items-start gap-3">
                                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                  <span className="text-sm dashboard-text-muted">
                                    {benefit}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Metrics */}
                          {solution.metrics && (
                            <div className="grid grid-cols-2 gap-4">
                              {solution.metrics.map((metric, metricIndex) => (
                                <div key={metricIndex} className="dashboard-metric-cyan p-6 rounded-lg text-center">
                                  <div className="text-2xl font-bold text-gradient mb-2">
                                    {metric.value}
                                  </div>
                                  <div className="text-sm dashboard-text-primary font-medium mb-1">
                                    {metric.label}
                                  </div>
                                  <div className="flex items-center justify-center gap-1 text-xs text-primary">
                                    <TrendingUp className="w-3 h-3" />
                                    {metric.improvement}
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Divider between solutions */}
                      {solutionIndex < process.solutions.length - 1 && (
                        <div className="mt-12 pt-8 border-t border-border/30" />
                      )}
                    </div>
                  ))}
                </div>

                {/* Divider between processes */}
                {processIndex < processSolutions.length - 1 && (
                  <div className="mt-16 pt-8 border-t border-border/50" />
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        {bottomCTA && (
          <div className="mt-20">
            <div className="enterprise-card p-12 text-center max-w-3xl mx-auto">
              <div className="space-y-6">
                <h3 className="text-display-md">
                  {bottomCTA.title}
                </h3>
                <p className="enterprise-body">
                  {bottomCTA.description}
                </p>
                <Button 
                  size="lg"
                  className="clerk-cta-primary cta-equal"
                  onClick={bottomCTA.action}
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                
                {/* Trust line */}
                <p className="text-sm dashboard-text-muted pt-4 border-t border-border/50">
                  Trusted by 1,000+ restaurants • HACCP compliant • 99.9% uptime guarantee
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}