import { TrendingUp, Clock, Target, Users } from "lucide-react";

interface StatItem {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
  description: string;
  trend?: {
    value: string;
    direction: "up" | "down";
  };
}

interface IndustryStatsProps {
  title: string;
  description: string;
  stats: StatItem[];
}

export function IndustryStats({ title, description, stats }: IndustryStatsProps) {
  return (
    <section className="section-marketing bg-surface-subtle-primary/30">
      <div className="container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-display-lg mb-8">
            {title}
          </h2>
          <p className="enterprise-body max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index}
                className="enterprise-metric-card p-10 text-center hover-scale-103 group"
              >
                {/* Icon */}
                <div className="w-20 h-20 icon-container-primary rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-10 h-10 text-white" />
                </div>

                {/* Value with trend */}
                <div className="space-y-3 mb-6">
                  <div className="text-4xl lg:text-5xl font-bold text-gradient">
                    {stat.value}
                  </div>
                  
                  {stat.trend && (
                    <div className={`inline-flex items-center gap-1 text-sm font-medium ${
                      stat.trend.direction === 'up' ? 'text-primary' : 'text-secondary'
                    }`}>
                      <TrendingUp className={`w-4 h-4 ${
                        stat.trend.direction === 'down' ? 'rotate-180' : ''
                      }`} />
                      {stat.trend.value}
                    </div>
                  )}
                </div>

                {/* Label and description */}
                <div className="space-y-3">
                  <h3 className="font-semibold dashboard-text-primary text-xl">
                    {stat.label}
                  </h3>
                  <p className="text-sm dashboard-text-muted leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-24 pt-12 border-t border-border/50">
          <div className="text-center">
            <p className="enterprise-body mb-6">
              Join thousands of restaurants already using OpsFlow AI to optimize their operations
            </p>
            <div className="flex justify-center items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm dashboard-text-muted">Live system monitoring</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm dashboard-text-muted">24/7 support available</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-primary" />
                <span className="text-sm dashboard-text-muted">HACCP compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}