"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const FinalCTA = ({ className }: { className?: string }) => {
  return (
    <section className={cn("py-16", className)}>
      <div className="container">
        <Card className="rounded-3xl border bg-gradient-to-br from-card via-card/90 to-card/80 backdrop-blur-sm overflow-hidden max-w-4xl mx-auto">
          <CardContent className="p-12 lg:p-16 text-center relative">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
            <div className="absolute top-6 left-6 w-20 h-20 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute bottom-6 right-6 w-16 h-16 bg-secondary/10 rounded-full blur-xl" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8">
                <Sparkles className="h-4 w-4" />
                Transform Your Operations Today
              </div>
              
              <h2 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
                Ready to experience the difference?
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12">
                Join thousands of teams that have transformed their operations 
                with our comprehensive feature suite.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="px-8 py-6 text-lg">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
                  Contact Sales
                </Button>
              </div>

              <div className="flex items-center justify-center gap-8 mt-12 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  No setup fees
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  Cancel anytime
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  24/7 support
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export { FinalCTA };
