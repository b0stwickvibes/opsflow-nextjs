"use client";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight, CircleDot, Diamond, Blend, ChartNoAxesColumn } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import type { CarouselApi } from "@/components/ui/carousel";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { marketingAssets } from "@/lib/assets/marketing";

const features = [
  { title: "Tailored workflows", description: "Track progress across custom workflows.", icon: CircleDot },
  { title: "Milestones", description: "Break operations into concrete phases.", icon: Diamond },
  { title: "Cross-team coordination", description: "Connect kitchen, FOH, and management.", icon: Blend },
  { title: "Progress insights", description: "Monitor compliance, tasks, and trends.", icon: ChartNoAxesColumn },
];

const SLIDES = Object.values((marketingAssets as any).carousels || {}).map((a: any) => ({ image: a.src, label: a.alt, width: a.width ?? 1600, height: a.height ?? 900 }));

export function MarketingCarouselHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;
    api.on("select", () => setCurrentSlide(api.selectedScrollSnap()));
  }, [api]);

  return (
    <section className="relative overflow-hidden py-32">
      <div className="container relative grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        {/* Left: Content */}
        <div className="space-y-8 lg:space-y-12">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Elevate Restaurant Operations with OpsFlow
            </h1>
            <p className="text-muted-foreground mt-6 text-2xl font-medium">
              Digital checklists, HACCP compliance, and team coordination—built for modern kitchens.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-5">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="flex gap-2.5 lg:gap-5">
                  <Icon className="mt-1 size-4 shrink-0 lg:size-5" />
                  <div>
                    <h2 className="font-semibold">{feature.title}</h2>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button aria-label="Get started" onClick={() => (window.location.href = "/start-trial?industry=restaurants")}>Get started</Button>
            <Button
              aria-label="View documentation"
              variant="outline"
              className="max-sm:hidden"
              onClick={() => (window.location.href = "/docs/getting-started/introduction")}
            >
              <span className="flex items-center gap-2 whitespace-pre-wrap text-start">
                Documentation
                <ArrowRight className="size-4" />
              </span>
            </Button>
          </div>

          <SlideIndicator currentSlide={currentSlide} slides={SLIDES} className="mb-4! max-lg:hidden" api={api ?? null} />
        </div>

        {/* Right: Carousel */}
        <div className="relative -mr-[max(2rem,calc((100vw-80rem)/2+2rem))] max-lg:translate-x-10">
          <Carousel className="size-full [&>div]:size-full" setApi={setApi} opts={{ loop: true }} plugins={[Autoplay({ delay: 4000, stopOnInteraction: true })]}>
            <CarouselContent className="size-full">
              {SLIDES.map((slide, index) => (
                <CarouselItem key={index}>
                  <div className="relative min-h-[30rem] overflow-hidden rounded-t-xl">
                    <Image src={slide.image} alt={slide.label} width={slide.width} height={slide.height} className="size-full object-cover" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
      <SlideIndicator currentSlide={currentSlide} slides={SLIDES} className="mb-8 mt-6 lg:hidden" api={api ?? null} />
    </section>
  );
}

interface SlideIndicatorProps {
  currentSlide: number;
  slides: Array<{ label: string }>;
  className?: string;
  api: CarouselApi | null;
}

function SlideIndicator({ currentSlide, slides, className, api }: SlideIndicatorProps) {
  return (
    <div className={cn("flex flex-col items-center gap-2 font-medium", className)}>
      <div>
        <span className="text-foreground-700">{currentSlide + 1} of {slides.length} — </span>
        <span className="text-primary">{slides[currentSlide]?.label}</span>
      </div>
      <div className="flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={cn(
              "h-0.5 w-6 rounded-full transition-colors",
              index === currentSlide ? "bg-primary" : "bg-primary/20 hover:bg-primary/40",
            )}
          />
        ))}
      </div>
    </div>
  );
}
