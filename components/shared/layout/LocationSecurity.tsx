"use client";

import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Wifi, 
  Bluetooth, 
  Shield,
  Eye,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Lock,
  Zap,
  TrendingUp
} from "lucide-react";
import { cn } from "@/lib/utils";

const LocationSecurity = ({ className }: { className?: string }) => {
  return (
    <section className={cn("relative py-32 lg:py-40 bg-gradient-to-br from-slate-50 via-orange-50/30 to-red-50/20 dark:from-slate-950 dark:via-orange-950/30 dark:to-red-950/20", className)}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(15,23,42,0.02)_100%)] dark:bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(241,245,249,0.02)_100%)]" />
      
      <div className="container relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600/10 via-red-600/10 to-pink-600/10 border border-orange-200/50 dark:border-orange-800/50 rounded-full px-4 py-2 mb-8">
            <Shield className="h-4 w-4 text-orange-600 dark:text-orange-400" />
            <span className="text-sm font-medium bg-gradient-to-r from-orange-700 to-red-700 bg-clip-text text-transparent dark:from-orange-400 dark:to-red-400">
              Enterprise Security Innovation
            </span>
            <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-8">
            Advanced Location-Based
            <span className="block bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
              Access Control
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto mb-8">
            Revolutionary multi-layered location verification beyond traditional geofencing.<br />
            <span className="font-medium text-slate-900 dark:text-slate-100">Restrict operations to authorized locations with military-grade precision.</span>
          </p>
          
          <div className="inline-flex items-center gap-3 bg-green-50 dark:bg-green-950/20 border border-green-200/50 dark:border-green-800/50 rounded-full px-6 py-3">
            <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
            <span className="text-sm font-medium text-green-700 dark:text-green-300">
              Superior to JOLT and traditional GPS-only solutions
            </span>
          </div>
        </div>

        {/* Main content - split panel design */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Technology Stack */}
            <div className="space-y-8">
              <div className="mb-12">
                <h3 className="text-3xl font-bold tracking-tight mb-6">
                  Multi-layered verification
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-300">
                  Our proprietary technology stack combines multiple verification methods 
                  for unparalleled location accuracy and security.
                </p>
              </div>
              
              {/* Technology layers */}
              <div className="space-y-6">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <div className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-6 hover:border-blue-300/50 dark:hover:border-blue-700/50 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 text-white shadow-lg shadow-blue-500/25">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold mb-2">GPS Geofencing</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Precision outdoor positioning with configurable boundaries</p>
                      </div>
                      <Badge className="bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800">
                        Layer 1
                      </Badge>
                    </div>
                  </div>
                </div>
                
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <div className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-6 hover:border-purple-300/50 dark:hover:border-purple-700/50 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25">
                        <Wifi className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold mb-2">WiFi Fingerprinting</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Indoor positioning through network signature analysis</p>
                      </div>
                      <Badge className="bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800">
                        Layer 2
                      </Badge>
                    </div>
                  </div>
                </div>
                
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <div className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-6 hover:border-teal-300/50 dark:hover:border-teal-700/50 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 text-white shadow-lg shadow-teal-500/25">
                        <Bluetooth className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold mb-2">Bluetooth Beacons</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Micro-location detection with proximity sensing</p>
                      </div>
                      <Badge className="bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-950 dark:text-teal-300 dark:border-teal-800">
                        Layer 3
                      </Badge>
                    </div>
                  </div>
                </div>
                
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <div className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-6 hover:border-orange-300/50 dark:hover:border-orange-700/50 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/25">
                        <Shield className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold mb-2">AI Anti-Spoofing</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Machine learning fraud detection and movement analysis</p>
                      </div>
                      <Badge className="bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950 dark:text-orange-300 dark:border-orange-800">
                        AI Layer
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right: Comparison */}
            <div className="lg:pl-8">
              <div className="sticky top-8">
                <div className="mb-12">
                  <h3 className="text-3xl font-bold tracking-tight mb-6">
                    Why we're different
                  </h3>
                  <p className="text-lg text-slate-600 dark:text-slate-300">
                    See how our advanced approach compares to traditional location-based solutions.
                  </p>
                </div>
                
                {/* Comparison cards */}
                <div className="space-y-4">
                  {/* Traditional GPS */}
                  <div className="group relative">
                    <div className="relative bg-white/60 dark:bg-slate-900/60 backdrop-blur-lg rounded-2xl border border-red-200/50 dark:border-red-800/50 p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <XCircle className="h-6 w-6 text-red-500" />
                          <span className="font-semibold text-slate-900 dark:text-slate-100">Traditional GPS (JOLT)</span>
                        </div>
                        <Badge variant="outline" className="border-red-200 text-red-700 dark:border-red-800 dark:text-red-300">
                          Limited
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                        GPS-only verification, poor indoor accuracy, easily spoofable, no audit trail
                      </p>
                      <div className="flex items-center gap-4 pt-4 border-t border-red-200/50 dark:border-red-800/50">
                        <div className="text-center">
                          <div className="text-lg font-bold text-red-600 dark:text-red-400">60%</div>
                          <div className="text-xs text-slate-600 dark:text-slate-400">Accuracy</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-red-600 dark:text-red-400">High</div>
                          <div className="text-xs text-slate-600 dark:text-slate-400">Spoofing risk</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Basic Geofencing */}
                  <div className="group relative">
                    <div className="relative bg-white/60 dark:bg-slate-900/60 backdrop-blur-lg rounded-2xl border border-yellow-200/50 dark:border-yellow-800/50 p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <AlertTriangle className="h-6 w-6 text-yellow-600" />
                          <span className="font-semibold text-slate-900 dark:text-slate-100">Basic Geofencing</span>
                        </div>
                        <Badge variant="outline" className="border-yellow-200 text-yellow-700 dark:border-yellow-800 dark:text-yellow-300">
                          Basic
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                        Single method verification, limited indoor coverage, basic audit capabilities
                      </p>
                      <div className="flex items-center gap-4 pt-4 border-t border-yellow-200/50 dark:border-yellow-800/50">
                        <div className="text-center">
                          <div className="text-lg font-bold text-yellow-600 dark:text-yellow-400">75%</div>
                          <div className="text-xs text-slate-600 dark:text-slate-400">Accuracy</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-yellow-600 dark:text-yellow-400">Medium</div>
                          <div className="text-xs text-slate-600 dark:text-slate-400">Spoofing risk</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* OpsFlow AI */}
                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-emerald-500/5 to-teal-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                    <div className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-green-200/50 dark:border-green-800/50 p-6 ring-2 ring-green-500/20 dark:ring-green-400/20">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400" />
                          <span className="font-semibold text-slate-900 dark:text-slate-100">OpsFlow AI</span>
                          <div className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-medium rounded-full">
                            Recommended
                          </div>
                        </div>
                        <Badge className="bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800">
                          Advanced
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                        Multi-layered verification, AI anti-spoofing, confidence scoring, comprehensive audit trails
                      </p>
                      <div className="flex items-center gap-4 pt-4 border-t border-green-200/50 dark:border-green-800/50">
                        <div className="text-center">
                          <div className="text-lg font-bold text-green-600 dark:text-green-400">99.2%</div>
                          <div className="text-xs text-slate-600 dark:text-slate-400">Accuracy</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-green-600 dark:text-green-400">Minimal</div>
                          <div className="text-xs text-slate-600 dark:text-slate-400">Spoofing risk</div>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center gap-1">
                            <TrendingUp className="h-3 w-3 text-green-600 dark:text-green-400" />
                            <span className="text-lg font-bold text-green-600 dark:text-green-400">AI</span>
                          </div>
                          <div className="text-xs text-slate-600 dark:text-slate-400">Powered</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { LocationSecurity };
