"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { registerComponentLayout } from "@/lib/style-system/layout-differentiation";
import { Phone, Mail } from "lucide-react";

export function CustomContactHero() {
  useEffect(() => {
    registerComponentLayout("CustomContactHero", "site");
  }, []);

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h1 className="my-3 text-3xl font-bold text-pretty sm:text-4xl md:my-6 lg:text-6xl">
          Talk to our hospitality experts
        </h1>
        <p className="mb-6 mx-auto max-w-xl text-muted-foreground lg:mb-12 lg:text-2xl">
          Sales, support, partnerships, and integrations—tell us what you need.
        </p>
        <div className="mb-6 flex items-center justify-center gap-2 lg:mb-12">
          <Button className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            Schedule a Demo
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            Contact Support
          </Button>
        </div>
      </div>

      {/* Contained media */}
      <div className="container mx-auto px-4 sm:px-6">
        <div className="relative aspect-video overflow-hidden rounded-md [mask-image:linear-gradient(#000_80%,transparent_100%)]">
          <Image
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
            alt="Restaurant operations dashboard"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 1024px, 100vw"
            priority
          />
          
          {/* Overlay stats */}
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-6">
            <div className="grid grid-cols-4 gap-4 text-white">
              <div className="text-center">
                <p className="text-xl font-bold">24/7</p>
                <p className="text-xs">Support</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold">15+</p>
                <p className="text-xs">POS Integrations</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold">37%</p>
                <p className="text-xs">Audit Time Saved</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold">5,000+</p>
                <p className="text-xs">Restaurants Served</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
