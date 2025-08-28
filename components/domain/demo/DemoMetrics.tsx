"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Clock, 
  DollarSign, 
  Shield, 
  CheckCircle,
  Star,
  Users,
  BarChart3
} from "lucide-react";

export function DemoMetrics() {
  const successMetrics = [
    {
      icon: TrendingUp,
      title: "Average ROI",
      value: "340%",
      description: "Return on investment within first year",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Clock,
      title: "Time Savings",
      value: "15hrs/week",
      description: "Average time saved per manager",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: DollarSign,
      title: "Cost Reduction",
      value: "$12,000/yr",
      description: "Average annual savings per location",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Shield,
      title: "Compliance Rate",
      value: "99.8%",
      description: "HACCP audit pass rate",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  const customerSpotlight = [
    {
      name: "Bella Vista Restaurant Group",
      type: "Multi-location Italian",
      locations: "8 locations",
      results: [
        "32% reduction in food waste",
        "4.5 hrs/day saved on admin",
        "100% health inspection pass rate"
      ],
      quote: "OpsFlow transformed how we manage food safety across all locations. The automated temperature monitoring alone saves us hours every day.",
      author: "Maria Rodriguez, Operations Director"
    },
    {
      name: "Urban Grind Coffee",
      type: "Coffee Shop Chain", 
      locations: "12 locations",
      results: [
        "28% improvement in inventory turnover",
        "50% reduction in compliance paperwork", 
        "$18K annual savings per location"
      ],
      quote: "The staff training module is incredible. Our team compliance went from 73% to 96% in just two months.",
      author: "Jake Chen, Regional Manager"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Success Metrics */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Real Results from Real Restaurants</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See the measurable impact OpsFlow has on restaurant operations and profitability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {successMetrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${metric.bgColor} mx-auto mb-4`}>
                    <IconComponent className={`h-6 w-6 ${metric.color}`} />
                  </div>
                  <CardTitle className="text-3xl font-bold">{metric.value}</CardTitle>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold mb-2">{metric.title}</h3>
                  <p className="text-sm text-muted-foreground">{metric.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Customer Spotlights */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Customer Success Spotlights</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Learn how restaurants like yours are achieving exceptional results with OpsFlow.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {customerSpotlight.map((customer, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        {customer.name}
                        <Badge variant="outline">{customer.locations}</Badge>
                      </CardTitle>
                      <p className="text-muted-foreground">{customer.type}</p>
                    </div>
                    <div className="flex items-center text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Results */}
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center">
                      <BarChart3 className="h-4 w-4 mr-2 text-primary" />
                      Key Results
                    </h4>
                    <ul className="space-y-2">
                      {customer.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Quote */}
                  <div className="border-l-4 border-primary pl-4">
                    <blockquote className="text-muted-foreground italic mb-2">
                      "{customer.quote}"
                    </blockquote>
                    <footer className="text-sm font-medium">
                      — {customer.author}
                    </footer>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Industry Recognition */}
        <div className="text-center mt-16">
          <div className="bg-background rounded-2xl p-8 border shadow-sm">
            <div className="flex items-center justify-center gap-8 mb-6">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="font-semibold">2,500+ Restaurants</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <span className="font-semibold">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-500" />
                <span className="font-semibold">SOC 2 Certified</span>
              </div>
            </div>
            <p className="text-muted-foreground mb-6">
              Trusted by restaurant chains, independent operators, and hospitality groups worldwide.
            </p>
            <Button size="lg">
              Join Successful Restaurants
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}