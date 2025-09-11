"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ButtonType {
  title: string;
  url: string;
  variant: "outline" | "default";
}

const BUTTONS: ButtonType[] = [
  { title: "Explore", url: "#", variant: "default" },
  { title: "Sign up", url: "#", variant: "outline" },
];

const IMAGES = [
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    alt: "Product placeholder 1",
    ratio: 0.644736842,
    className: "w-[30%]",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
    alt: "Product placeholder 2",
    ratio: 0.926829268,
    className: "w-[40%]",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
    alt: "Product placeholder 3",
    ratio: 0.644736842,
    className: "w-[30%]",
  },
];

export function FeatureAnnouncementHero() {
  return (
    <section className="section-marketing">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-10 pb-8 text-center">
          <Badge variant="secondary">Announcing our new features</Badge>
          <h1 className="heading-brand-gradient max-w-lg text-4xl font-semibold md:max-w-2xl md:text-6xl">
            Achieve More with Elite Access Pro
          </h1>
          <p className="text-foreground/80 max-w-lg font-medium md:text-lg">
            Enhance your career hunt with increased visibility, first-look opportunities and monetary incentives!
          </p>
          <div className="flex w-full max-w-lg flex-col items-center justify-center gap-4 md:flex-row md:gap-6">
            {BUTTONS.map((btn, index) => (
              <Button
                asChild
                variant={btn.variant}
                size="lg"
                className="w-full md:flex-1"
                key={`hero-btn-${index}`}
              >
                <a href={btn.url}>{btn.title}</a>
              </Button>
            ))}
          </div>
        </div>

        <div className="flex w-full items-end justify-center gap-4">
          {IMAGES.map((img, index) => (
            <div className={cn("tile-hover", img.className)} key={`hero-img-${index}`}>
              <AspectRatio ratio={img.ratio} className="rounded-md border bg-muted/30">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-[50%_0%]"
                />
              </AspectRatio>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" aria-label="Get started" className="cta-shimmer">
            Get started
          </Button>
          <a href="#">
            <Button aria-label="Documentation" variant="outline" size="lg">
              <span className="flex items-center gap-2">
                Documentation
                <ArrowRight className="size-4" />
              </span>
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

