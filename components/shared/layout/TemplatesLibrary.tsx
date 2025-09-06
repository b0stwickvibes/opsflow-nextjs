"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ClipboardList, 
  CheckSquare2, 
  Shield, 
  Zap,
  AlertTriangle,
  Wrench,
  ArrowRight,
  Clock,
  Settings,
  Headphones,
  Star,
  Download,
  Eye,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";

const templates = [
  {
    id: 1,
    title: "Opening Checklist",
    description: "Complete morning startup procedures",
    tasks: 23,
    icon: ClipboardList,
    gradient: "from-blue-600 to-cyan-600",
    bgGradient: "from-blue-500/10 via-cyan-500/5 to-teal-500/10",
    category: "Operations",
    difficulty: "Beginner",
    time: "45 min",
    popular: true
  },
  {
    id: 2,
    title: "Food Safety Audit",
    description: "HACCP compliance inspection", 
    tasks: 47,
    icon: Shield,
    gradient: "from-red-600 to-pink-600",
    bgGradient: "from-red-500/10 via-pink-500/5 to-rose-500/10",
    category: "Compliance",
    difficulty: "Advanced",
    time: "2.5 hours",
    popular: true
  },
  {
    id: 3,
    title: "Kitchen Deep Clean",
    description: "Comprehensive sanitization protocol",
    tasks: 38,
    icon: Zap,
    gradient: "from-purple-600 to-indigo-600",
    bgGradient: "from-purple-500/10 via-indigo-500/5 to-blue-500/10",
    category: "Maintenance",
    difficulty: "Intermediate",
    time: "3 hours",
    popular: false
  },
  {
    id: 4,
    title: "Closing Checklist", 
    description: "End-of-day shutdown procedures",
    tasks: 31,
    icon: CheckSquare2,
    gradient: "from-green-600 to-emerald-600",
    bgGradient: "from-green-500/10 via-emerald-500/5 to-teal-500/10",
    category: "Operations",
    difficulty: "Beginner",
    time: "1 hour",
    popular: true
  },
  {
    id: 5,
    title: "Incident Report",
    description: "Comprehensive incident documentation",
    tasks: 15,
    icon: AlertTriangle,
    gradient: "from-orange-600 to-yellow-600",
    bgGradient: "from-orange-500/10 via-yellow-500/5 to-amber-500/10",
    category: "Safety",
    difficulty: "Intermediate",
    time: "30 min",
    popular: false
  },
  {
    id: 6,
    title: "Equipment Inspection",
    description: "Preventive maintenance checklist",
    tasks: 29,
    icon: Wrench,
    gradient: "from-gray-600 to-slate-600",
    bgGradient: "from-gray-500/10 via-slate-500/5 to-zinc-500/10",
    category: "Maintenance",
    difficulty: "Intermediate",
    time: "1.5 hours",
    popular: false
  }
];

const stats = [
  { label: "Templates", value: "50+", icon: ClipboardList, description: "Ready-to-use" },
  { label: "Customizable", value: "100%", icon: Settings, description: "Fully flexible" },
  { label: "Setup", value: "< 5min", icon: Clock, description: "Quick start" },
  { label: "Support", value: "24/7", icon: Headphones, description: "Always available" }
];

const TemplatesLibrary = ({ className }: { className?: string }) => {
  const [hoveredTemplate, setHoveredTemplate] = useState<number | null>(null);
  
  return (
    <section className={cn("relative py-32 lg:py-40", className)}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600/10 via-emerald-600/10 to-teal-600/10 border border-green-200/50 dark:border-green-800/50 rounded-full px-4 py-2 mb-8">
            <Sparkles className="h-4 w-4 text-green-600 dark:text-green-400" />
            <span className="text-sm font-medium bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent dark:from-green-400 dark:to-emerald-400">
              Ready-to-Use Templates
            </span>
            <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-8">
            Restaurant Templates
            <span className="block bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Library
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto">
            Get started instantly with our comprehensive library of restaurant-specific checklists,
            <br /><span className="font-medium text-slate-900 dark:text-slate-100">SOPs, and workflow templates — all 100% customizable.</span>
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Featured Templates */}
          <div className="mb-20">
            <div className="flex items-center justify-between mb-12">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Popular Templates</h3>
              <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                Most used by restaurants
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {templates.slice(0, 3).map((template) => {
                const IconComponent = template.icon;
                const isHovered = hoveredTemplate === template.id;
                
                return (
                  <div 
                    key={template.id}
                    className="group relative"
                    onMouseEnter={() => setHoveredTemplate(template.id)}
                    onMouseLeave={() => setHoveredTemplate(null)}
                  >
                    <div className={cn("absolute inset-0 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500", `bg-gradient-to-br ${template.bgGradient}`)} />
                    <div className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-200/50 dark:border-slate-700/50 p-8 h-full hover:border-slate-300/50 dark:hover:border-slate-600/50 transition-all duration-500 cursor-pointer">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg", `bg-gradient-to-br ${template.gradient}`)}>
                          <IconComponent className="h-8 w-8" />
                        </div>
                        <div className="flex flex-col gap-2">
                          {template.popular && (
                            <Badge className="bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-950 dark:text-yellow-300 dark:border-yellow-800 text-xs">
                              <Star className="h-3 w-3 mr-1 fill-current" />
                              Popular
                            </Badge>
                          )}
                          <Badge variant="outline" className="text-xs">
                            {template.category}
                          </Badge>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                        {template.title}
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                        {template.description}
                      </p>
                      
                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-6 pt-6 border-t border-slate-200/50 dark:border-slate-700/50">
                        <div className="text-center">
                          <div className="text-lg font-bold text-slate-900 dark:text-slate-100">{template.tasks}</div>
                          <div className="text-xs text-slate-600 dark:text-slate-400">Tasks</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-slate-900 dark:text-slate-100">{template.time}</div>
                          <div className="text-xs text-slate-600 dark:text-slate-400">Duration</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs font-medium text-slate-900 dark:text-slate-100 capitalize">{template.difficulty}</div>
                          <div className="text-xs text-slate-600 dark:text-slate-400">Level</div>
                        </div>
                      </div>
                      
                      {/* Actions */}
                      <div className="flex gap-3">
                        <Button size="sm" className={cn("flex-1 bg-gradient-to-r text-white border-0 shadow-md hover:shadow-lg transition-all duration-300", `${template.gradient}`)}>
                          <Download className="mr-2 h-4 w-4" />
                          Use Template
                        </Button>
                        <Button size="sm" variant="outline" className="px-3">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      {/* Hover effect overlay */}
                      {isHovered && (
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl pointer-events-none" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* All Templates Grid */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-8">All Templates</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {templates.map((template) => {
                const IconComponent = template.icon;
                return (
                  <div key={template.id} className="group relative">
                    <div className={cn("absolute inset-0 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300", `bg-gradient-to-br ${template.bgGradient}`)} />
                    <div className="relative bg-white/70 dark:bg-slate-900/70 backdrop-blur-lg rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-6 hover:border-slate-300/50 dark:hover:border-slate-600/50 transition-all duration-300 cursor-pointer">
                      <div className="flex items-center gap-4">
                        <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md", `bg-gradient-to-br ${template.gradient}`)}>
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">{template.title}</h4>
                          <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                            <span>{template.tasks} tasks</span>
                            <span>•</span>
                            <span>{template.time}</span>
                          </div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 group-hover:translate-x-1 transition-all duration-200" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => {
              const StatIcon = stat.icon;
              return (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-100/50 to-slate-200/30 dark:from-slate-800/50 dark:to-slate-700/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-6 text-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-500/25">
                      <StatIcon className="h-7 w-7 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">{stat.value}</div>
                    <div className="text-sm font-medium text-slate-900 dark:text-slate-100 mb-1">{stat.label}</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">{stat.description}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <Download className="mr-2 h-5 w-5" />
                Browse All Templates
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4">
                Request Custom Template
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { TemplatesLibrary };
