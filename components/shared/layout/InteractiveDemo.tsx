"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Sparkles, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const InteractiveDemo = ({ className }: { className?: string }) => {
  return (
    <section className={cn("relative py-32 lg:py-40 overflow-hidden", className)}>
      {/* Sophisticated background with gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 dark:from-slate-950 dark:via-blue-950/30 dark:to-indigo-950/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(15,23,42,0.02)_100%)] dark:bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(241,245,249,0.02)_100%)]" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-1/4 w-2 h-2 bg-blue-400/60 rounded-full animate-pulse" />
      <div className="absolute bottom-32 right-1/3 w-1 h-1 bg-purple-400/60 rounded-full animate-pulse delay-1000" />
      <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-indigo-400/60 rounded-full animate-pulse delay-500" />
      
      <div className="container relative">
        <div className="mx-auto max-w-6xl">
          {/* Header with sophisticated badge */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10 border border-blue-200/50 dark:border-blue-800/50 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
                Live Interactive Demo
              </span>
              <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8">
              Experience 
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                OpsFlow AI
              </span>
              <br />in action
            </h2>
            
            <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Click through a real restaurant workflow. No registration required.<br />
              <span className="font-medium text-slate-900 dark:text-slate-100">Transform daily operations in under 2 minutes.</span>
            </p>
          </div>

          {/* Sophisticated demo interface */}
          <div className="relative">
            {/* Main demo container */}
            <div className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-200/50 dark:border-slate-700/50 shadow-2xl shadow-slate-900/10 dark:shadow-slate-100/5 overflow-hidden">
              {/* Top bar */}
              <div className="flex items-center gap-2 px-6 py-4 border-b border-slate-200/50 dark:border-slate-700/50 bg-slate-50/50 dark:bg-slate-800/50">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                  <div className="w-3 h-3 bg-green-400 rounded-full" />
                </div>
                <div className="flex-1 text-center">
                  <div className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    ops-demo.opsflow.ai
                  </div>
                </div>
              </div>
              
              {/* Demo content */}
              <div className="aspect-video bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/30 dark:from-slate-900 dark:via-blue-950/30 dark:to-indigo-950/20 flex items-center justify-center relative overflow-hidden">
                {/* Background patterns */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-200/40 to-purple-200/40 dark:from-blue-800/40 dark:to-purple-800/40 rounded-2xl rotate-12" />
                  <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-br from-indigo-200/40 to-pink-200/40 dark:from-indigo-800/40 dark:to-pink-800/40 rounded-xl -rotate-12" />
                  <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-gradient-to-br from-green-200/40 to-teal-200/40 dark:from-green-800/40 dark:to-teal-800/40 rounded-lg rotate-45" />
                </div>
                
                {/* Play button */}
                <div className="relative group cursor-pointer">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-all duration-500 group-hover:scale-105">
                    <Play className="h-12 w-12 text-white ml-2 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full animate-ping opacity-20" />
                </div>
              </div>
              
              {/* Bottom action bar */}
              <div className="px-8 py-6 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border-t border-slate-200/50 dark:border-slate-700/50">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300">
                    <Play className="mr-2 h-5 w-5" />
                    Start Interactive Demo
                  </Button>
                  <Button variant="outline" size="lg" className="px-8 py-4 border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300">
                    Watch Overview
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Floating stats */}
            <div className="absolute -top-8 -left-8 bg-white/90 dark:bg-slate-800/90 backdrop-blur-lg rounded-2xl p-4 shadow-xl border border-slate-200/50 dark:border-slate-700/50 hidden lg:block">
              <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">Demo Views</div>
              <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">47,291</div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 bg-white/90 dark:bg-slate-800/90 backdrop-blur-lg rounded-2xl p-4 shadow-xl border border-slate-200/50 dark:border-slate-700/50 hidden lg:block">
              <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">Avg. Completion</div>
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">94%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { InteractiveDemo };
