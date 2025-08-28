"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

// Professional loading skeletons for restaurant operations

export function PricingCardSkeleton() {
  return (
    <Card className="relative">
      <CardHeader className="text-center pb-6">
        <Skeleton className="h-4 w-20 mx-auto mb-2" />
        <Skeleton className="h-6 w-32 mx-auto mb-4" />
        <Skeleton className="h-4 w-48 mx-auto mb-2" />
        <Skeleton className="h-4 w-40 mx-auto" />
        
        <div className="pt-4">
          <div className="flex items-baseline justify-center gap-1">
            <Skeleton className="h-12 w-20" />
            <Skeleton className="h-6 w-12" />
          </div>
          <Skeleton className="h-4 w-32 mx-auto mt-2" />
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="space-y-3">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-start gap-3">
              <Skeleton className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <Skeleton className="h-4 w-full" />
            </div>
          ))}
        </div>
        <Skeleton className="h-10 w-full" />
      </CardContent>
    </Card>
  );
}

export function FeatureComparisonSkeleton() {
  return (
    <section className="py-16">
      <div className="container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Skeleton className="h-10 w-64 mx-auto mb-4" />
          <Skeleton className="h-6 w-96 mx-auto" />
        </div>
        
        <Card>
          <div className="p-6">
            {/* Table header */}
            <div className="grid grid-cols-4 gap-4 pb-4 border-b">
              <Skeleton className="h-6 w-20" />
              <Skeleton className="h-6 w-24" />
              <Skeleton className="h-6 w-28" />
              <Skeleton className="h-6 w-32" />
            </div>
            
            {/* Table rows */}
            {[...Array(8)].map((_, i) => (
              <div key={i} className="grid grid-cols-4 gap-4 py-4 border-b last:border-b-0">
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-5 w-5 mx-auto" />
                <Skeleton className="h-5 w-5 mx-auto" />
                <Skeleton className="h-5 w-5 mx-auto" />
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}

export function ROICalculatorSkeleton() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Skeleton className="h-12 w-full mb-8" />
        
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Skeleton className="w-5 h-5" />
              <Skeleton className="h-6 w-48" />
            </div>
            <Skeleton className="h-4 w-full max-w-md" />
          </CardHeader>
          
          <CardContent className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="space-y-2">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-10 w-full" />
                </div>
              ))}
            </div>
            
            <div className="border-t pt-8">
              <Skeleton className="h-6 w-48 mb-4" />
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="text-center">
                    <Skeleton className="h-8 w-20 mx-auto mb-2" />
                    <Skeleton className="h-4 w-24 mx-auto" />
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export function TestimonialsSkeleton() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <Skeleton className="h-10 w-64 mx-auto mb-4" />
          <Skeleton className="h-6 w-96 mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <Skeleton className="h-8 w-8 mb-4" />
                <Skeleton className="h-6 w-full mb-2" />
                <Skeleton className="h-6 w-4/5 mb-4" />
                <Skeleton className="h-4 w-32" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MarqueeSkeleton() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Skeleton className="h-5 w-5" />
            <Skeleton className="h-4 w-48" />
          </div>
          <Skeleton className="h-6 w-96 mx-auto" />
        </div>
        
        <div className="space-y-4">
          {[...Array(2)].map((_, rowIndex) => (
            <div key={rowIndex} className="flex gap-6 overflow-hidden">
              {[...Array(5)].map((_, i) => (
                <Card key={i} className="min-w-[200px] flex-shrink-0">
                  <CardContent className="p-6 text-center">
                    <Skeleton className="h-6 w-32 mx-auto mb-2" />
                    <Skeleton className="h-4 w-20 mx-auto" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}