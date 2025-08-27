"use client"

import { Skeleton } from "@/components/ui/skeleton"

// ...existing individual exports above...
// Aggregate export for barrel compatibility
export const Skeletons = {
  CardSkeleton,
  FeatureCardSkeleton,
  HeroSkeleton,
  PageSkeleton,
  TestimonialSkeleton,
};

export function CardSkeleton() {
  return (
    <div className="rounded-xl border bg-card p-6 space-y-4">
      <div className="space-y-2">
        <Skeleton className="h-5 w-1/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    </div>
  )
}

export function FeatureCardSkeleton() {
  return (
    <div className="rounded-xl border bg-card p-6 space-y-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-6 w-1/3" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
      <Skeleton className="h-10 w-1/3" />
    </div>
  )
}

export function HeroSkeleton() {
  return (
    <div className="space-y-4 text-center py-12">
      <Skeleton className="h-8 w-1/3 mx-auto" />
      <Skeleton className="h-6 w-2/3 mx-auto" />
      <div className="flex justify-center gap-4 mt-8">
        <Skeleton className="h-10 w-32" />
        <Skeleton className="h-10 w-32" />
      </div>
    </div>
  )
}

export function TestimonialSkeleton() {
  return (
    <div className="rounded-xl border bg-card p-6 space-y-4">
      <Skeleton className="h-6 w-6" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
      <div className="flex items-center space-x-3">
        <Skeleton className="h-10 w-10 rounded-full" />
        <div className="space-y-1">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-3 w-32" />
        </div>
      </div>
    </div>
  )
}

export function PageSkeleton() {
  return (
    <div className="space-y-12">
      <HeroSkeleton />
      
      <div className="space-y-6">
        <div className="text-center space-y-2 mb-6">
          <Skeleton className="h-7 w-48 mx-auto" />
          <Skeleton className="h-5 w-96 mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCardSkeleton />
          <FeatureCardSkeleton />
          <FeatureCardSkeleton />
        </div>
      </div>
      
      <div className="space-y-6">
        <div className="text-center space-y-2 mb-6">
          <Skeleton className="h-7 w-64 mx-auto" />
          <Skeleton className="h-5 w-96 mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <TestimonialSkeleton />
          <TestimonialSkeleton />
          <TestimonialSkeleton />
        </div>
      </div>
      
      <div className="rounded-xl border bg-card p-8 text-center space-y-4">
        <Skeleton className="h-7 w-96 mx-auto" />
        <Skeleton className="h-5 w-full max-w-xl mx-auto" />
        <div className="flex justify-center gap-4 mt-4">
          <Skeleton className="h-10 w-32" />
          <Skeleton className="h-10 w-32" />
        </div>
      </div>
    </div>
  )
}
