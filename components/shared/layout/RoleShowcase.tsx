"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  UserCheck, 
  Wine, 
  ChefHat,
  TrendingUp,
  DollarSign,
  Users,
  Star,
  BarChart3,
  Thermometer,
  CheckSquare2,
  Calendar,
  MessageSquare,
  ArrowUpRight,
  Clock,
  Target
} from "lucide-react";
import { cn } from "@/lib/utils";

const roles = [
  {
    id: "manager",
    title: "Manager",
    icon: UserCheck,
    gradient: "from-blue-600 to-indigo-600",
    bgGradient: "from-blue-500/10 via-indigo-500/5 to-purple-500/10",
    metrics: [
      { label: "Daily Revenue", value: "$12,450", icon: DollarSign, trend: "+8%", trendColor: "text-green-600" },
      { label: "Food Cost %", value: "28.5%", icon: TrendingUp, trend: "-2%", trendColor: "text-green-600" },
      { label: "Staff Utilization", value: "94%", icon: Users, trend: "+5%", trendColor: "text-green-600" },
      { label: "Customer Reviews", value: "4.8", icon: Star, trend: "+0.2", trendColor: "text-green-600" }
    ],
    tasks: [
      { task: "P&L review", priority: "high", time: "2h" },
      { task: "Schedule approvals", priority: "medium", time: "30m" },
      { task: "Feedback analysis", priority: "low", time: "1h" },
      { task: "Budget planning", priority: "medium", time: "45m" }
    ]
  },
  {
    id: "bartender", 
    title: "Bartender",
    icon: Wine,
    gradient: "from-purple-600 to-pink-600",
    bgGradient: "from-purple-500/10 via-pink-500/5 to-rose-500/10",
    metrics: [
      { label: "Bar Inventory", value: "85%", icon: BarChart3, trend: "-5%", trendColor: "text-yellow-600" },
      { label: "Drinks Served", value: "143", icon: Wine, trend: "+12%", trendColor: "text-green-600" },
      { label: "Customer Rating", value: "4.9", icon: Star, trend: "0%", trendColor: "text-slate-600" },
      { label: "Tips Today", value: "$89", icon: DollarSign, trend: "+15%", trendColor: "text-green-600" }
    ],
    tasks: [
      { task: "Stock bar inventory", priority: "high", time: "1h" },
      { task: "Update menu specials", priority: "medium", time: "20m" },
      { task: "Clean glassware/tools", priority: "low", time: "40m" },
      { task: "Recipe updates", priority: "low", time: "15m" }
    ]
  },
  {
    id: "kitchen",
    title: "Kitchen Staff", 
    icon: ChefHat,
    gradient: "from-orange-600 to-red-600",
    bgGradient: "from-orange-500/10 via-red-500/5 to-pink-500/10",
    metrics: [
      { label: "Orders Completed", value: "67", icon: CheckSquare2, trend: "+3%", trendColor: "text-green-600" },
      { label: "Temperature Checks", value: "12/12", icon: Thermometer, trend: "0%", trendColor: "text-green-600" },
      { label: "Prep Tasks", value: "8/10", icon: Calendar, trend: "+2", trendColor: "text-green-600" },
      { label: "Quality Score", value: "96%", icon: Star, trend: "+1%", trendColor: "text-green-600" }
    ],
    tasks: [
      { task: "Morning prep tasks", priority: "high", time: "3h" },
      { task: "Fridge temperature checks", priority: "high", time: "15m" },
      { task: "Lunch specials prep", priority: "medium", time: "2h" },
      { task: "Inventory update", priority: "low", time: "30m" }
    ]
  }
];

const RoleShowcase = ({ className }: { className?: string }) => {
  const [activeRole, setActiveRole] = useState(roles[0]);

  return (
    <section className={cn("relative py-32 lg:py-40 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/20 dark:from-slate-950 dark:via-indigo-950/30 dark:to-purple-950/20", className)}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(15,23,42,0.02)_100%)] dark:bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(241,245,249,0.02)_100%)]" />
      
      <div className="container relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600/10 via-purple-600/10 to-pink-600/10 border border-indigo-200/50 dark:border-indigo-800/50 rounded-full px-4 py-2 mb-8">
            <Target className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
            <span className="text-sm font-medium bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400">
              Role-Based Intelligence
            </span>
            <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-8">
            See features in
            <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              real-time action
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto">
            Experience personalized dashboards with live metrics and intelligent task management.
            <br /><span className="font-medium text-slate-900 dark:text-slate-100">Every role gets exactly what they need, when they need it.</span>
          </p>
        </div>

        {/* Role Selector - Sophisticated tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-16 p-2 bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 max-w-fit mx-auto">
          {roles.map((role) => {
            const IconComponent = role.icon;
            const isActive = activeRole.id === role.id;
            return (
              <button
                key={role.id}
                onClick={() => setActiveRole(role)}
                className={cn(
                  "relative px-6 py-4 rounded-xl font-medium text-sm transition-all duration-300 flex items-center gap-3",
                  isActive 
                    ? `bg-gradient-to-r ${role.gradient} text-white shadow-lg transform scale-105`
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100/50 dark:hover:bg-slate-800/50"
                )}
              >
                <IconComponent className="h-5 w-5" />
                {role.title}
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-xl" />
                )}
              </button>
            );
          })}
        </div>

        {/* Dashboard Interface */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Metrics - 2/3 width */}
            <div className="lg:col-span-2 group relative">
              <div className={cn("absolute inset-0 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500", `bg-gradient-to-br ${activeRole.bgGradient}`)} />
              <div className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-200/50 dark:border-slate-700/50 p-8">
                {/* Dashboard header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg", `bg-gradient-to-br ${activeRole.gradient}`)}>
                      <activeRole.icon className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                        {activeRole.title} Dashboard
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Live metrics • Updated now</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    Real-time
                  </div>
                </div>
                
                {/* Metrics grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {activeRole.metrics.map((metric, index) => {
                    const MetricIcon = metric.icon;
                    return (
                      <div key={index} className="group/metric relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-100/50 to-slate-200/30 dark:from-slate-800/50 dark:to-slate-700/30 rounded-2xl blur-xl group-hover/metric:blur-2xl transition-all duration-300" />
                        <div className="relative bg-white/60 dark:bg-slate-900/60 backdrop-blur-lg rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-6 hover:border-slate-300/50 dark:hover:border-slate-600/50 transition-all duration-300">
                          <div className="flex items-start justify-between mb-4">
                            <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-md", `bg-gradient-to-br ${activeRole.gradient}`)}>
                              <MetricIcon className="h-5 w-5" />
                            </div>
                            <div className={cn("text-sm font-medium px-2 py-1 rounded-full", metric.trendColor, "bg-current/10")}>
                              {metric.trend}
                            </div>
                          </div>
                          <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                            {metric.value}
                          </div>
                          <div className="text-sm text-slate-600 dark:text-slate-400">
                            {metric.label}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Tasks Panel - 1/3 width */}
            <div className="group relative">
              <div className={cn("absolute inset-0 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500", `bg-gradient-to-br ${activeRole.bgGradient}`)} />
              <div className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-200/50 dark:border-slate-700/50 p-8 h-full">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">Today's Priority</h3>
                  <Badge variant="outline" className="text-xs">
                    {activeRole.tasks.length} tasks
                  </Badge>
                </div>
                
                <div className="space-y-4">
                  {activeRole.tasks.map((item, index) => {
                    const priorityColors = {
                      high: "border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20",
                      medium: "border-yellow-200 dark:border-yellow-800 bg-yellow-50/50 dark:bg-yellow-950/20",
                      low: "border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-950/20"
                    };
                    
                    return (
                      <div key={index} className={cn("rounded-xl border p-4 transition-all duration-300 hover:shadow-md", priorityColors[item.priority as keyof typeof priorityColors])}>
                        <div className="flex items-start justify-between mb-3">
                          <span className="text-sm font-medium text-slate-900 dark:text-slate-100 flex-1">
                            {item.task}
                          </span>
                          <ArrowUpRight className="h-4 w-4 text-slate-400 shrink-0" />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Clock className="h-3 w-3 text-slate-500" />
                            <span className="text-xs text-slate-600 dark:text-slate-400">{item.time}</span>
                          </div>
                          <Badge variant="outline" className="text-xs capitalize">
                            {item.priority}
                          </Badge>
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                <Button className={cn("w-full mt-6 bg-gradient-to-r text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300", `${activeRole.gradient}`)}>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Open Full Dashboard
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { RoleShowcase };
