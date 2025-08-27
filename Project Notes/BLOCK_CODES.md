# OpsFlow AI V2 - Block Code Collection Document

## Overview
This document contains all the block components needed to build the complete OpsFlow AI v2 website. Each block is a reusable Shadcn/UI component that follows Stripe's professional design aesthetic.

## Usage Instructions
1. **Block Organization**: Components are organized by page, with each page containing the specific blocks needed
2. **Implementation Order**: Build blocks as reusable components first, then assemble pages
3. **Design Consistency**: All blocks follow Stripe-level professional UI/UX standards
4. **Customization**: Each block can be configured with different data/content for different pages

## Block Types Reference
- **Hero Block**: Page headers with titles, descriptions, and CTAs
- **Feature Block**: Product feature showcases with icons and descriptions  
- **Stats Block**: Key metrics and numbers displays
- **Testimonial Block**: Customer quotes and social proof
- **CTA Block**: Call-to-action sections for conversions
- **Footer Block**: Site footer with links and information
- **Bento Block**: Grid-based feature layouts
- **Component Block**: Interactive component demonstrations
- **Integration Block**: Third-party service integrations
- **Logos Block**: Partner/client logo displays
- **Pricing Block**: Pricing plans and comparisons
- **FAQ Block**: Frequently asked questions
- **Contact Block**: Contact forms and information
- **Content Block**: General content sections
- **List Block**: Organized list displays
- **Team Block**: Team member showcases
- **About Block**: Company information sections
- **Timeline Block**: Chronological displays
- **Casestudies Block**: Customer success stories
- **Resource Block**: Downloadable resources
- **Download Block**: File download sections
- **Blog Block**: Blog post listings
- **Careers Block**: Job listings and information

-- 

## Organization Per Page:

🏠 HOME (Landing Page)
Hero Block - Hero223
Logos Block - Feature257
Feature Block - Feature261
Stats Block - Stats9
Testimonial Block - Testimonial3
Cta Block - Cta26
Footer Block - Footer13
📦 PRODUCT - Features Page
Hero Block - Hero218
Feature Block - Feature249
Bento Block - Feature202
Stats Block - Stats12
Cta Block - Cta18
📦 PRODUCT - Demo Page
Hero Block - Hero222
Feature Block - Feature186
Cta Block - Cta18
📦 PRODUCT - Integrations Page
Hero Block - Hero232
Integration Block - Hero219
Logos Block - Logos2
Cta Block - Cta18
📦 PRODUCT - HACCP Compliance Page
Hero Block - Hero183
Feature Block - Feature170
Stats Block - Stats1
Testimonial Block - Testimonial28
Cta Block - Cta18
📦 PRODUCT - Audit Tools Page
Hero Block - Hero201
Feature Block - Feature251
Cta Block - Cta18
📦 PRODUCT - Reporting Page
Hero Block - Hero218
Stats Block - Stats15
Feature Block - Feature237
Cta Block - Cta18
🎯 SOLUTIONS - Restaurants Page
Hero Block - Hero196
Feature Block - Feature215
Testimonial Block - Testimonial20
Stats Block - Stats10
Cta Block - Cta17
🎯 SOLUTIONS - Bars & Nightlife Page
Hero Block - Hero195
Feature Block - Feature242
Testimonial Block - Testimonial20
Cta Block - Cta17
🎯 SOLUTIONS - Coffee Shops Page
Hero Block - Hero206
Feature Block - Feature227
Testimonial Block - Testimonial20
Cta Block - Cta17
🎯 SOLUTIONS - Hotels Page
Hero Block - Hero196
Feature Block - Feature205
Testimonial Block - Testimonial20
Cta Block - Cta17
🎯 SOLUTIONS - Restaurant Owners Page
Hero Block - Hero111
Feature Block - Feature243
Testimonial Block - Testimonial12
Cta Block - Cta17
🎯 SOLUTIONS - Operations Managers Page
Hero Block - Hero183
Feature Block - Feature176
Testimonial Block - Testimonial12
Cta Block - Cta17
🎯 SOLUTIONS - Kitchen Staff Page
Hero Block - Hero187
Feature Block - Feature184
Testimonial Block - Testimonial20
Cta Block - Cta17
🎯 SOLUTIONS - Front of House Page
Hero Block - Hero186
Feature Block - Feature186
Testimonial Block - Testimonial12
Cta Block - Cta17
💰 PRICING Page
Hero Block - Hero159
Pricing Block - Pricing32 & Pricing33
Feature Block - Feature195
Faq Block - Faq7
Cta Block - Cta15
📚 RESOURCES - Help Center Page
Hero Block - Hero36
Faq Block - Faq10
Contact Block - Contact3
Cta Block - Cta3
📚 RESOURCES - Documentation Page
Hero Block - Hero36
Content Block - Content3
List Block - List1
Cta Block - Cta3
📚 RESOURCES - Contact Support Page
Hero Block - Hero55
Contact Block - Contact3
Team Block - Team4
Cta Block - Cta3
📚 RESOURCES - Blog & Articles Page
Hero Block - Hero112
Blog Block - Blog12
List Block - List1
Cta Block - Cta3
📚 RESOURCES - Case Studies Page
Hero Block - Hero64
Casestudies Block - Feature222
Testimonial Block - Testimonial21
Stats Block - Stats5
Cta Block - Cta3
📚 RESOURCES - Templates Page
Hero Block - Hero216
Resource Block - Resources1
Download Block - Download4
Cta Block - Cta3
🏢 COMPANY - About Us Page
Hero Block - Hero38
About Block - About1
Team Block - Team7
Timeline Block - Timeline5
Cta Block - Cta30
🏢 COMPANY - Contact Page
Hero Block - Hero16
Contact Block - Contact10
Team Block - Team4
Cta Block - Cta30
🏢 COMPANY - Careers Page
Hero Block - Hero158
Careers Block - Careers5
Team Block - Team5
Cta Block - Cta30

-- 

## Next Steps
After reviewing this document:
1. Create reusable block components in `/src/components/blocks/`
2. Implement pages using these blocks in `/src/pages/`
3. Ensure consistent styling and professional appearance
4. Test all components and pages for functionality

---
OpsFlow AI V2 - Block Code Collection Document
🏠 HOME (Landing Page)
Hero Block

"use client";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import React from "react";

import { cn } from "@/lib/utils";

import { LineShadowText } from "@/components/magicui/line-shadow-text";
import { Button } from "@/components/ui/button";

const Hero223 = () => {
  return (
    <section className="py-32">
      <div className="h-150 container relative flex w-full flex-col items-center justify-center overflow-hidden">
        <div className="bg-background pointer-events-none absolute inset-0 z-20 h-full w-full [mask-image:radial-gradient(transparent,white)]" />
        <Boxes className="scale-150" />

        <h1 className="z-99 relative max-w-4xl text-center text-5xl font-medium tracking-tight md:text-7xl">
          <span className="text-muted-foreground/50 mr-3">
            The only app you Need to Stay
          </span>
          <LineShadowText> Productive </LineShadowText>
          <span className="text-muted-foreground/50"> ever</span>
          <span>.</span>
        </h1>
        <p className="z-99 text-muted-foreground relative mt-4 max-w-xl text-center text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sapiente
          quisquam debitis error vero possimus amet
        </p>
        <div className="realtive z-99 mt-10 flex items-center justify-center gap-4">
          <Button
            variant="default"
            className="text-md group flex w-fit items-center justify-center gap-2 rounded-full px-4 py-1 tracking-tight"
          >
            <span>See Pricing</span>
            <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
          </Button>
          <Button
            variant="secondary"
            className="text-md group flex w-fit items-center justify-center gap-2 rounded-full px-4 py-1 tracking-tight"
          >
            <span>Try it for free</span>
            <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export { Hero223 };

// Below is the modified component from Aceternity UI
// Original source: npx shadcn@latest add https://ui.aceternity.com/registry/background-boxes.json
// Modified to follow our coding standards and design system
// We respect copyright and attribution to the original creators

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  const rows = new Array(150).fill(1);
  const cols = new Array(100).fill(1);
  const colors = [
    "#33A1FD",
    "#2276FF",
    "#FDCA41",
    "#2EDCC3",
    "#FF99CA",
    "#E5D5C3",
    "#343433",
  ];
  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
      }}
      className={cn(
        "absolute -top-1/4 left-1/4 z-0 flex h-full w-full -translate-x-1/2 -translate-y-1/2 p-4",
        className,
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row` + i}
          className="border-muted-foreground/20 relative h-8 w-16 border-l"
        >
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: `${getRandomColor()}`,
                transition: { duration: 0 },
              }}
              animate={{
                transition: { duration: 2 },
              }}
              key={`col` + j}
              className="border-muted-foreground/20 relative h-8 w-16 border-r border-t"
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="text-muted pointer-events-none absolute -left-[22px] -top-[14px] h-6 w-10 stroke-[1px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);



Logos Block


import { CardSpotlight } from "@/components/aceternity/card-spotlight";

interface Feature257Props {
  category: string;
  name: string;
  logo: string;
}

const TOOLS: Feature257Props[] = [
  {
    category: "STATIC SITE GENERATOR",
    name: "Astro",
    logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-icon.svg",
  },
  {
    category: "STATIC SITE GENERATOR",
    name: "Gatsby",
    logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/gatsby-icon-black.svg",
  },
  {
    category: "VERSION CONTROL",
    name: "GitHub",
    logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/github-icon-black.svg",
  },
  {
    category: "REACT FRAMEWORK",
    name: "Next.js",
    logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/nextjs-icon.svg",
  },
  {
    category: "UI DESIGN",
    name: "Figma",
    logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/figma.svg",
  },
  {
    category: "REACT FRAMEWORK",
    name: "Remix",
    logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/remix-icon-black.svg",
  },
  {
    category: "DEPLOYMENT",
    name: "Vercel",
    logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vercel-icon.svg",
  },
  {
    category: "CSS FRAMEWORK",
    name: "Tailwind CSS",
    logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/tailwind-icon-black.svg",
  },
];

const Feature257 = () => {
  return (
    <section className="bg-muted py-16 sm:py-32">
      <div className="container">
        <div className="md:hidden">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {TOOLS.map((tool, index) => (
              <CardSpotlight
                key={index}
                className="bg-background border-border group flex min-h-[20rem] flex-col items-start justify-between rounded-md border p-4 transition-all duration-300 hover:bg-black hover:text-white"
              >
                <div className="border-border rounded-md border px-3 py-1 text-xs font-medium transition-colors duration-300 group-hover:border-white sm:text-sm">
                  {tool.category}
                </div>
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="mx-auto mb-4 h-24 object-contain transition-all duration-300 [filter:brightness(0)] group-hover:[filter:brightness(1)_invert(1)] sm:h-28 sm:w-28 dark:invert"
                />
                <h2 className="text-xl font-normal transition-colors duration-300 sm:text-2xl">
                  {tool.name}
                </h2>
              </CardSpotlight>
            ))}
          </div>
        </div>

        <div className="hidden md:block">
          <div className="mx-auto max-w-6xl px-8 pb-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {TOOLS.slice(0, 2).map((tool, index) => (
                <CardSpotlight
                  key={index}
                  className="bg-background border-border group flex h-96 flex-col items-start justify-between rounded-md border p-2 transition-all duration-300 hover:bg-black hover:text-white md:p-4"
                >
                  <div className="border-border rounded-md border px-2 py-1 text-xs font-medium transition-colors duration-300 group-hover:border-white md:px-4 md:py-2 md:text-sm">
                    {tool.category}
                  </div>
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    className="mx-auto mb-4 h-24 object-contain transition-all duration-300 [filter:brightness(0)] group-hover:[filter:brightness(1)_invert(1)] dark:invert"
                  />
                  <h2 className="text-xl font-normal transition-colors duration-300 lg:text-3xl">
                    {tool.name}
                  </h2>
                </CardSpotlight>
              ))}
            </div>
          </div>

          <div className="mx-auto max-w-6xl px-8 pb-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {TOOLS.slice(2, 9).map((tool, index) => (
                <CardSpotlight
                  key={index}
                  className="bg-background border-border group flex h-96 flex-col items-start justify-between rounded-md border p-2 transition-all duration-300 hover:bg-black hover:text-white md:p-4"
                >
                  <div className="border-border rounded-md border px-2 py-1 text-xs font-medium transition-colors duration-300 group-hover:border-white md:px-4 md:py-2 md:text-sm">
                    {tool.category}
                  </div>
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    className="mx-auto mb-4 h-24 object-contain transition-all duration-300 [filter:brightness(0)] group-hover:[filter:brightness(1)_invert(1)] dark:invert"
                  />
                  <h2 className="text-xl font-normal transition-colors duration-300 lg:text-3xl">
                    {tool.name}
                  </h2>
                </CardSpotlight>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature257 };


Feature Block


import { Clock, Zap } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Feature261 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 lg:grid-cols-12">
          <div className="relative h-60 overflow-hidden rounded-3xl md:col-span-2 md:row-span-2 md:h-[400px] lg:col-span-4 lg:h-full">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/Minimalist Concrete Wall with Shadows.jpeg"
              alt="shadcn UI components showcase"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0" />
            <div className="absolute bottom-6 left-6 z-10 text-white">
              <p className="text-lg font-medium">
                Experience Design Excellence.
              </p>
            </div>
            <div className="absolute right-6 top-6 z-10">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                <Zap className="h-5 w-5 text-white" />
              </div>
            </div>
          </div>

          <div className="relative h-60 overflow-hidden rounded-3xl border md:col-span-2 md:row-span-2 md:h-[400px] lg:col-span-4 lg:h-full">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
              alt="shadcn UI component library"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 z-10">
              <h2 className="text-sm font-medium leading-tight md:text-base lg:text-xl">
                Build your interface with stunning components and modern design.
              </h2>
            </div>
          </div>

          <Card className="col-span-1 rounded-3xl md:col-span-2 md:row-span-1 md:h-[192px] lg:col-span-2">
            <CardContent className="flex h-full flex-col justify-center p-4 md:p-6">
              <div className="mb-2 text-4xl font-bold md:text-4xl lg:text-6xl">
                95
                <span className="align-top text-2xl md:text-xl lg:text-3xl">
                  %
                </span>
              </div>
              <p className="text-sm leading-tight md:text-sm">
                Developers choose us
                <br />
                for our exceptional quality
              </p>
            </CardContent>
          </Card>

          <div className="relative col-span-1 h-60 overflow-hidden rounded-3xl border md:col-span-2 md:row-span-1 md:h-[192px] lg:col-span-2">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
              alt="shadcn UI components"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <Card className="bg-muted col-span-1 rounded-3xl md:col-span-4 md:row-span-1 md:h-[300px] lg:col-span-4">
            <CardContent className="h-full p-4 md:p-5">
              <div className="flex h-full flex-col justify-end">
                <div className="space-y-2">
                  <div className="text-4xl font-normal md:text-5xl lg:text-6xl">
                    $299
                  </div>
                  <div className="text-muted-foreground">
                    Premium Component Library
                  </div>
                  <Button>Buy Now</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-1 rounded-3xl md:col-span-2 md:row-span-1 md:h-[300px] lg:col-span-3">
            <CardContent className="flex h-full flex-col justify-center p-4 md:p-5">
              <div className="mb-3">
                <span className="text-4xl font-bold md:text-3xl lg:text-6xl">
                  300
                </span>
                <span className="align-top text-2xl font-bold md:text-xl lg:text-3xl">
                  +
                </span>
              </div>
              <p className="mb-4 text-sm md:text-sm">Delighted developers</p>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Avatar
                    key={i}
                    className="border-border h-8 w-8 border-2 md:h-8 md:w-8 lg:h-10 lg:w-10"
                  >
                    <AvatarImage src={`/images/block/avatar-${i + 1}.webp`} />
                    <AvatarFallback>DEV{i}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="relative col-span-1 h-60 overflow-hidden rounded-3xl md:col-span-3 md:row-span-1 md:h-[300px] lg:col-span-5">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg"
              alt="shadcn UI components"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </Card>

          <Card className="relative col-span-1 h-60 overflow-hidden rounded-3xl md:col-span-3 md:row-span-1 md:h-[300px] lg:col-span-4">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/Geometric Staircase and Concrete Wall.jpeg"
              alt="shadcn UI development"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
            <div className="absolute inset-0 z-10 flex items-center justify-start p-4 md:p-6">
              <div className="text-white">
                <div className="mb-2 flex items-center gap-2 md:gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 md:h-7 md:w-7">
                    <Clock className="h-3 w-3 md:h-4 md:w-4" />
                  </div>
                  <span className="text-base font-semibold md:text-lg">
                    Rapid Development
                  </span>
                </div>
                <p className="text-sm opacity-90 md:text-sm">
                  Build your interface faster
                  <br />
                  <span className="text-sm font-semibold md:text-sm">
                    with ready-to-use components
                  </span>
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export { Feature261 };

Stats Block


import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Stats9 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="flex flex-col items-center gap-3 text-center lg:items-start lg:text-left">
              <Badge
                variant="outline"
                className="flex w-fit items-center gap-1"
              >
                Features
              </Badge>
              <h1 className="mb-5 text-4xl font-semibold text-pretty">
                Transform Your Digital Experience Today Together
              </h1>
              <p className="text-muted-foreground">
                Leverage cutting-edge technology to streamline your workflow and
                unlock new possibilities in the digital landscape.
              </p>
            </div>
            <div className="mt-12 flex justify-center gap-7 lg:justify-start">
              <div className="flex flex-col gap-1.5">
                <p className="text-2xl font-bold text-foreground sm:text-3xl">
                  2.5M +
                </p>
                <p className="text-muted-foreground">Users Served</p>
              </div>
              <Separator orientation="vertical" className="h-auto" />
              <div className="flex flex-col gap-1.5">
                <p className="text-2xl font-bold text-foreground sm:text-3xl">
                  99.9%
                </p>
                <p className="text-muted-foreground">Uptime</p>
              </div>
              <Separator orientation="vertical" className="h-auto" />
              <div className="flex flex-col gap-1.5">
                <p className="text-2xl font-bold text-foreground sm:text-3xl">
                  4.8
                </p>
                <p className="text-muted-foreground">User Score</p>
              </div>
            </div>
          </div>
          <div className="grid gap-2.5 text-left sm:grid-cols-2 sm:text-center lg:text-left">
            <div className="flex items-center gap-5 rounded-lg border border-border bg-muted p-6 sm:flex-col sm:items-start sm:p-7">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg"
                alt="logo"
                className="mx-0 size-12 sm:mx-auto lg:mx-0"
              />
              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold text-foreground sm:text-base">
                  Cloud Integration
                </p>
                <p className="text-sm text-muted-foreground sm:text-base">
                  Seamless cloud solutions for modern business needs
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 rounded-lg border border-border bg-muted p-6 sm:flex-col sm:items-start sm:p-7">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-2.svg"
                alt="logo"
                className="mx-0 size-12 sm:mx-auto lg:mx-0"
              />
              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold text-foreground sm:text-base">
                  24/7 Monitoring
                </p>
                <p className="text-sm text-muted-foreground sm:text-base">
                  Round-the-clock system monitoring and support
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 rounded-lg border border-border bg-muted p-6 sm:flex-col sm:items-start sm:p-7">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-3.svg"
                alt="logo"
                className="mx-0 size-12 sm:mx-auto lg:mx-0"
              />
              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold text-foreground sm:text-base">
                  AI-Powered Tools
                </p>
                <p className="text-sm text-muted-foreground sm:text-base">
                  Advanced machine learning algorithms delivering intelligent
                  insights
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 rounded-lg border border-border bg-muted p-6 sm:flex-col sm:items-start sm:p-7">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-4.svg"
                alt="logo"
                className="mx-0 size-12 sm:mx-auto lg:mx-0"
              />
              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold text-foreground sm:text-base">
                  Enterprise Security
                </p>
                <p className="text-sm text-muted-foreground sm:text-base">
                  Military-grade encryption and advanced threat protection
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Stats9 };


Cta Block


import { ArrowUpRight, BookOpen, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";

const Cta26 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="relative h-96 overflow-hidden rounded-xl border border-border">
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/full-width-backgrounds/andrew-kliatskyi-LYZxo7oVFOI-unsplash.webp"
            alt="placeholder"
            className="hidden h-full w-full object-cover dark:block"
          />
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/full-width-backgrounds/denis96-gmsf4Zo2-rY-unsplash.webp"
            alt="placeholder"
            className="h-full w-full object-cover dark:hidden"
          />
          <div className="absolute inset-0 bg-radial from-background to-background/50 lg:to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 p-6">
            <div className="text-center">
              <h2 className="text-3xl font-semibold md:text-5xl">
                Try it free
              </h2>
              <p className="text-lg text-muted-foreground md:text-xl">
                Experience our platform and discover how it can transform your
                workflow
              </p>
            </div>
            <Button size="lg">
              Get started
              <ArrowUpRight className="size-4" />
            </Button>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          <a
            href="#"
            className="flex flex-col items-start gap-8 rounded-xl border border-border bg-muted/50 px-10 py-8 transition-transform hover:-translate-y-0.5"
          >
            <span className="grid size-12 place-items-center rounded-lg border border-border">
              <Zap className="size-5" />
            </span>
            <div className="flex flex-col gap-1">
              <h3 className="text-2xl font-medium md:text-3xl">
                Instant setup
              </h3>
              <p className="text-muted-foreground">
                Get up and running in minutes with our guided onboarding
              </p>
            </div>
          </a>
          <a
            href="#"
            className="flex flex-col items-start gap-8 rounded-xl border border-border bg-muted/50 px-10 py-8 transition-transform hover:-translate-y-0.5"
          >
            <span className="grid size-12 place-items-center rounded-lg border border-border">
              <BookOpen className="size-5" />
            </span>
            <div className="flex flex-col gap-1">
              <h3 className="text-2xl font-medium md:text-3xl">
                Documentation
              </h3>
              <p className="text-muted-foreground">
                Comprehensive guides and tutorials to help you succeed
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export { Cta26 };



Testimonial Block


const Testimonial3 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col items-center gap-6 border-y py-14 text-center md:py-20">
          <q className="block max-w-4xl text-2xl font-medium lg:text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            nesciunt iste distinctio corporis, alias illum.
          </q>
          <div className="flex flex-col items-center gap-2 sm:flex-row">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcn-ui-wordmark.svg"
              alt="shadcn"
              className="h-7"
            />
            <p className="font-medium">John Doe, Founder & CEO of Company</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Testimonial3 };
Footer Block

import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const navigation = [
  {
    title: "Product",
    links: [
      { name: "Home", href: "#" },
      { name: "Feature1", href: "#" },
      { name: "Feature2", href: "#" },
      { name: "Feature3", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Pricing", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "FAQ", href: "#" },
      { name: "Contact", href: "#" },
    ],
  },
  {
    title: "Service",
    links: [
      { name: "Terms of service", href: "#" },
      { name: "Privacy policy", href: "#" },
    ],
  },
];

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
];

const Footer13 = () => {
  return (
    <section className="bg-primary py-16 text-primary-foreground md:py-24 lg:py-32">
      <div className="container">
        <footer>
          <div className="mb-16 rounded-2xl bg-primary-foreground/5 p-8 backdrop-blur-sm md:p-12 lg:p-16">
            <div className="flex flex-col items-center text-center">
              <h2 className="max-w-[800px] text-4xl leading-tight font-semibold tracking-tight text-balance md:text-5xl lg:text-6xl">
                Start your free trial today.
                <span className="text-sand-600 relative inline-block">
                  Your future won&apos;t wait.
                  <span className="bg-sand-600/30 absolute bottom-1 left-0 h-1 w-full rounded-full"></span>
                </span>
              </h2>
              <p className="mt-4 max-w-[600px] text-lg text-primary-foreground/80">
                Join thousands of users already leveraging our platform to
                achieve more.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button asChild variant="secondary" size="lg" className="group">
                  <a href="/get-started" className="flex items-center gap-2">
                    Get started with 7 days free
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="border-sand-600/20 mb-14 border-b pb-14">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
              <div>
                <h3 className="mb-2 text-2xl font-medium">Stay connected</h3>
                <p className="max-w-md text-primary-foreground/70">
                  Subscribe to our newsletter for the latest updates, resources,
                  and exclusive offers.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="relative grow">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    className="h-12 border-primary-foreground/20 bg-primary-foreground/10 pl-10"
                  />
                </div>
                <Button variant="secondary" type="submit" className="h-12 px-6">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Navigation Section */}
          <nav className="border-sand-600/20 grid grid-cols-2 gap-x-6 gap-y-10 border-b py-10 sm:grid-cols-4 lg:py-16">
            {navigation.map((section) => (
              <div key={section.title}>
                <h3 className="mb-5 text-lg font-semibold">{section.title}</h3>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="inline-block text-primary-foreground/80 transition-colors duration-200 hover:text-primary-foreground"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          {/* Bottom Section */}
          <div className="mx-auto mt-4 py-8">
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <p className="font-medium text-primary-foreground/80">
                © {new Date().getFullYear()} Streamline -{" "}
                <a
                  href="https://shadcnblocks.com"
                  className="underline transition-colors hover:text-primary-foreground"
                  target="_blank"
                >
                  Shadcnblocks.com
                </a>
              </p>
              <div className="flex items-center gap-6">
                {socialLinks.map((link) => (
                  <a
                    aria-label={link.label}
                    key={link.href}
                    href={link.href}
                    className="text-primary-foreground/70 transition-colors hover:text-primary-foreground/100"
                  >
                    <link.icon
                      size={20}
                      className="transition-transform hover:scale-110"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer13 };





📦 PRODUCT - Features Page
Hero Block

"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React from "react";

import { Particles } from "@/components/magicui/particles";
import { Button } from "@/components/ui/button";

const Hero218 = () => {
  return (
    <section className="py-32">
      <div className="container flex flex-col items-center justify-center gap-4 overflow-hidden">
        <p className="text-muted-foreground">
          Bridging Developers, Building the Future
        </p>
        <h1 className="realtive z-15 max-w-3xl text-center text-6xl font-medium tracking-tighter md:text-7xl">
          <span
            className="overflow-hidden"
            style={{
              transformStyle: "preserve-3d",
              perspective: "600px",
            }}
          >
            {"The only app you Need to Stay Productive"
              .split(" ")
              .map((word, i) => (
                <motion.span
                  className="relative inline-block px-[6px] leading-[none]"
                  key={i}
                  initial={{
                    opacity: 0,
                    y: "70%",
                    rotateX: "-28deg",
                  }}
                  animate={{
                    opacity: 1,
                    y: "0%",
                    rotateX: "0deg",
                  }}
                  transition={{
                    delay: i * 0.08 + 0.1,
                    duration: 0.8,
                    ease: [0.215, 0.61, 0.355, 1],
                  }}
                >
                  {word === "Productive" ? (
                    <span className="font-playfair italic">{word}</span>
                  ) : (
                    word
                  )}
                </motion.span>
              ))}
          </span>
        </h1>
        <Particles
          className="absolute inset-0 z-0"
          quantity={500}
          ease={80}
          color="#000000"
          refresh
        />

        <div className="h-92 -translate-y-15 relative w-full overflow-hidden">
          <div className="h-92 bg-background absolute z-10 w-full blur-xl" />
          <div className="z-13 h-92 -translate-y-62 bg-background absolute w-full blur-2xl" />

          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="z-12 absolute w-full overflow-hidden"
          >
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/green-shape.svg"
              className="h-215 -translate-y-90 -rotate-76 w-full"
              alt=""
            />
          </motion.div>
        </div>
        <Button
          variant="secondary"
          className="text-md -mt-15 group flex w-fit items-center justify-center gap-2 rounded-full px-4 py-1 tracking-tight"
        >
          Contact Us now
          <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
        </Button>
      </div>
    </section>
  );
};

export { Hero218 };

Feature Block

"use client";

import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";

import { AuroraText } from "@/components/magicui/aurora-text";

const Feature249 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <ContainerScroll
          titleComponent={
            <>
              <p className="mx-auto mb-4 text-muted-foreground md:text-xl">
                Blocks Build with Shadcn and Tailwindcss
              </p>
              <h1 className="text-7xl font-semibold tracking-tighter md:text-8xl xl:text-[10rem]">
                <span className="pr-6 text-muted-foreground/40">Build</span>
                <AuroraText
                  colors={["#ff6449", "#ff6449", "#6248fe", "#6248fe"]}
                >
                  Faster
                </AuroraText>
              </h1>
            </>
          }
        >
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/dashboard/admin-dashboard-1.png"
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto h-full rounded-2xl object-cover object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </section>
  );
};

export { Feature249 };


// Below is the modified component from Aceternity UI
// Original source: npx shadcn@latest add https://ui.aceternity.com/registry/container-scroll-animation.json
// Modified to follow our coding standards and design system
// We respect copyright and attribution to the original creators

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="relative flex h-[60rem] items-center justify-center"
      ref={containerRef}
    >
      <div
        className="relative w-full"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({
  translate,
  titleComponent,
}: {
  translate: MotionValue<number>;
  titleComponent: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div mx-auto max-w-5xl text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
      }}
      className="-4 mx-auto -mt-12 h-[30rem] w-full max-w-5xl rounded-[30px] p-2 shadow-2xl md:h-[40rem] md:p-6"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-gray-100 md:rounded-2xl md:p-4 dark:bg-zinc-900">
        {children}
      </div>
    </motion.div>
  );
};



Bento Block

import {
  Building2,
  CircleDot,
  Compass,
  Home,
  Landmark,
  LayoutGrid,
} from "lucide-react";

const Feature202 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-xs text-muted-foreground md:text-sm">
            ARCHITECTURE
          </div>
          <h2 className="mt-4 mb-8 text-4xl font-semibold text-pretty md:text-6xl">
            Modern solutions. Timeless design.
          </h2>
          <p className="text-base text-muted-foreground md:text-lg">
            Residential, commercial, and urban planning. Transform spaces into
            experiences with our comprehensive architectural solutions.
          </p>
        </div>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <a
            href="#"
            className="group relative isolate h-80 overflow-hidden rounded-2xl border border-border transition-transform duration-300 hover:-translate-y-0.5 lg:col-span-2"
          >
            <div className="absolute inset-0 -z-10 bg-linear-to-t from-primary to-transparent" />
            <img
              src="https://images.unsplash.com/photo-1647517649469-ba454dc72896?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="placeholder"
              className="absolute inset-0 -z-20 size-full rounded-2xl object-cover grayscale-100 transition-all duration-300 group-hover:grayscale-50"
            />
            <div className="flex h-full flex-col justify-between p-10">
              <span className="flex size-12 items-center justify-center rounded-xl border border-background/20 bg-background/15 backdrop-blur-sm">
                <Building2
                  className="size-5 text-background"
                  strokeWidth={1.5}
                />
              </span>
              <div>
                <h3 className="font-medium text-background">
                  Sustainable Design
                </h3>
                <p className="mt-2 text-background/70">
                  Create eco-friendly spaces that blend innovation with
                  environmental responsibility. Utilizing renewable materials
                  and energy-efficient solutions for tomorrow's world.
                </p>
              </div>
            </div>
          </a>
          <a
            href="#"
            className="group relative isolate h-80 overflow-hidden rounded-2xl border border-border transition-transform duration-300 hover:-translate-y-0.5"
          >
            <div className="absolute inset-0 -z-10 bg-linear-to-t from-primary to-transparent" />
            <img
              src="https://images.unsplash.com/photo-1698516923132-b0236bc8f3ef?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="placeholder"
              className="absolute inset-0 -z-20 size-full rounded-2xl object-cover grayscale-100 transition-all duration-300 group-hover:grayscale-50"
            />
            <div className="flex h-full flex-col justify-between p-10">
              <span className="flex size-12 items-center justify-center rounded-xl border border-background/20 bg-background/15 backdrop-blur-sm">
                <Landmark
                  className="size-5 text-background"
                  strokeWidth={1.5}
                />
              </span>
              <div>
                <h3 className="font-medium text-background">Urban Planning</h3>
                <p className="mt-2 text-background/70">
                  Design thriving communities that balance density with
                  livability, fostering growth.
                </p>
              </div>
            </div>
          </a>
          <a
            href="#"
            className="group relative isolate h-80 overflow-hidden rounded-2xl border border-border transition-transform duration-300 hover:-translate-y-0.5"
          >
            <div className="absolute inset-0 -z-10 bg-linear-to-t from-primary to-transparent" />
            <img
              src="https://images.unsplash.com/photo-1586869871566-d8e41dd50318?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="placeholder"
              className="absolute inset-0 -z-20 size-full rounded-2xl object-cover grayscale-100 transition-all duration-300 group-hover:grayscale-50"
            />
            <div className="flex h-full flex-col justify-between p-10">
              <span className="flex size-12 items-center justify-center rounded-xl border border-background/20 bg-background/15 backdrop-blur-sm">
                <LayoutGrid
                  className="size-5 text-background"
                  strokeWidth={1.5}
                />
              </span>
              <div>
                <h3 className="font-medium text-background">
                  Digital Integration
                </h3>
                <p className="mt-2 text-background/70">
                  Blend smart technology with architectural design, creating
                  responsive spaces for living.
                </p>
              </div>
            </div>
          </a>
          <a
            href="#"
            className="group relative isolate h-80 overflow-hidden rounded-2xl border border-border transition-transform duration-300 hover:-translate-y-0.5 lg:col-span-2"
          >
            <div className="absolute inset-0 -z-10 bg-linear-to-t from-primary to-transparent" />
            <img
              src="https://images.unsplash.com/photo-1588742415209-69dbb64791b6?q=80&w=2014&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="placeholder"
              className="absolute inset-0 -z-20 size-full rounded-2xl object-cover grayscale-100 transition-all duration-300 group-hover:grayscale-50"
            />
            <div className="flex h-full flex-col justify-between p-10">
              <span className="flex size-12 items-center justify-center rounded-xl border border-background/20 bg-background/15 backdrop-blur-sm">
                <Compass className="size-5 text-background" strokeWidth={1.5} />
              </span>
              <div>
                <h3 className="font-medium text-background">BIM Solutions</h3>
                <p className="mt-2 text-background/70">
                  From concept to construction, leverage advanced modeling tools
                  and AI-driven analytics for precise and efficient project
                  delivery.
                </p>
              </div>
            </div>
          </a>
          <a
            href="#"
            className="group relative isolate h-80 overflow-hidden rounded-2xl border border-border transition-transform duration-300 hover:-translate-y-0.5 lg:col-span-2"
          >
            <div className="absolute inset-0 -z-10 bg-linear-to-t from-primary to-transparent" />
            <img
              src="https://images.unsplash.com/photo-1587278163304-99d65f6a58f0?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="placeholder"
              className="absolute inset-0 -z-20 size-full rounded-2xl object-cover grayscale-100 transition-all duration-300 group-hover:grayscale-50"
            />
            <div className="flex h-full flex-col justify-between p-10">
              <span className="flex size-12 items-center justify-center rounded-xl border border-background/20 bg-background/15 backdrop-blur-sm">
                <Home className="size-5 text-background" strokeWidth={1.5} />
              </span>
              <div>
                <h3 className="font-medium text-background">
                  Heritage Preservation
                </h3>
                <p className="mt-2 text-background/70">
                  Restore and adapt historical structures while preserving their
                  cultural significance and architectural heritage for future
                  generations.
                </p>
              </div>
            </div>
          </a>
          <a
            href="#"
            className="group relative isolate h-80 overflow-hidden rounded-2xl border border-border transition-transform duration-300 hover:-translate-y-0.5"
          >
            <div className="absolute inset-0 -z-10 bg-linear-to-t from-primary to-transparent" />
            <img
              src="https://images.unsplash.com/photo-1589100787575-fad1dcaa9d17?q=80&w=1953&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="placeholder"
              className="absolute inset-0 -z-20 size-full rounded-2xl object-cover grayscale-100 transition-all duration-300 group-hover:grayscale-50"
            />
            <div className="flex h-full flex-col justify-between p-10">
              <span className="flex size-12 items-center justify-center rounded-xl border border-background/20 bg-background/15 backdrop-blur-sm">
                <CircleDot
                  className="size-5 text-background"
                  strokeWidth={1.5}
                />
              </span>
              <div>
                <h3 className="font-medium text-background">
                  Interior Innovation
                </h3>
                <p className="mt-2 text-background/70">
                  Transform interior spaces with cutting-edge design solutions
                  for aesthetics functionality.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export { Feature202 };



Stats Block

"use client";

import NumberFlow from "@number-flow/react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, RefreshCcw } from "lucide-react";
import React, { useEffect, useMemo, useRef, useState } from "react";

import { Button } from "@/components/ui/button";

const Stats12 = () => {
  const [showMonthlyStats, setShowMonthlyStats] = useState(false);
  const [stats, setStats] = useState({
    monthly: {
      TotalRevenue: 0,
      TotalUsers: 0,
      CompanyGrowth: 0,
      NewCustomers: 0,
      BigCorpClients: 0,
    },
    yearly: {
      TotalRevenue: 0,
      TotalUsers: 0,
      CompanyGrowth: 0,
      NewCustomers: 0,
      BigCorpClients: 0,
    },
  });

  const ref = useRef(null);
  const isInView = useInView(ref);

  const finalStats = useMemo(
    () => ({
      monthly: {
        TotalRevenue: 12.3,
        TotalUsers: 0.3,
        CompanyGrowth: 300,
        NewCustomers: 100,
        BigCorpClients: 10,
      },
      yearly: {
        TotalRevenue: 105,
        TotalUsers: 50,
        CompanyGrowth: 30,
        NewCustomers: 1.5,
        BigCorpClients: 75,
      },
    }),
    [],
  );

  useEffect(() => {
    if (isInView) {
      setStats(finalStats);
    }
  }, [isInView, finalStats]);

  return (
    <section className="py-32">
      <div className="container flex justify-center">
        <div className="flex w-full flex-col justify-between gap-4 lg:flex-row">
          <div className="w-full lg:w-1/3">
            <h1 className="w-full font-calSans text-6xl font-medium">
              We don't just talk we Deliver Results
            </h1>
            <p className="my-4 text-lg tracking-tight text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              perferendis deserunt quis excepturi reiciendis nulla?
            </p>
            <Button
              variant="secondary"
              className="group text-md mt-10 flex w-fit items-center justify-center gap-2 rounded-full px-6 py-1 tracking-tight shadow-none"
            >
              <span>Get Started With Us</span>
              <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
            </Button>
            <div className="mt-10 lg:w-[115%]">
              <Graph />
            </div>
          </div>
          <div ref={ref} className="flex w-full flex-col items-end lg:w-1/2">
            <h1 className="font-calSans text-8xl leading-0 lg:text-[10rem]">
              <NumberFlow
                value={
                  showMonthlyStats
                    ? stats.monthly.TotalRevenue
                    : stats.yearly.TotalRevenue
                }
                prefix="$"
                suffix="M"
                className="font-calSans"
              />
            </h1>
            <div className="mb-6 flex flex-col items-center justify-center gap-6 lg:flex-row lg:gap-17">
              <p>And its just in a year</p>
              <Button
                variant="secondary"
                className="group text-md flex w-fit items-center justify-center gap-2 rounded-full px-6 py-1 tracking-tight shadow-none transition-all duration-300 ease-out active:scale-95"
                onClick={() => setShowMonthlyStats(!showMonthlyStats)}
              >
                <span>Show Monthly Stats</span>
                <RefreshCcw className="size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
              </Button>
            </div>
            <div className="mt-auto mb-10 grid w-full grid-cols-2 gap-14">
              <div className="text-left">
                <h2 className="text-4xl font-medium lg:text-6xl">
                  <NumberFlow
                    value={
                      showMonthlyStats
                        ? stats.monthly.TotalUsers
                        : stats.yearly.TotalUsers
                    }
                    suffix="k+"
                  />
                </h2>
                <p className="text-muted-foreground/70"> Team Members </p>
              </div>
              <div className="text-right">
                <h2 className="text-4xl font-medium lg:text-6xl">
                  <NumberFlow
                    value={
                      showMonthlyStats
                        ? stats.monthly.CompanyGrowth
                        : stats.yearly.CompanyGrowth
                    }
                    suffix="%"
                  />
                </h2>
                <p className="text-muted-foreground/70"> Company Growth </p>
              </div>
              <div className="text-left">
                <h2 className="text-4xl font-medium lg:text-6xl">
                  <NumberFlow
                    value={
                      showMonthlyStats
                        ? stats.monthly.NewCustomers
                        : stats.yearly.NewCustomers
                    }
                    suffix="M"
                  />
                </h2>
                <p className="text-muted-foreground/70"> New Customers </p>
              </div>
              <div className="text-right">
                <h2 className="text-4xl font-medium lg:text-6xl">
                  <NumberFlow
                    value={
                      showMonthlyStats
                        ? stats.monthly.BigCorpClients
                        : stats.yearly.BigCorpClients
                    }
                    prefix="~"
                    suffix="+"
                  />
                </h2>
                <p className="text-muted-foreground/70"> Revenue </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Stats12 };

function Graph() {
  return (
    <div className="wrapper">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 644 388"
        initial={{
          clipPath: "inset(0px 100% 0px 0px)",
        }}
        animate={{
          clipPath: "inset(0px 0% 0px 0px)",
        }}
        transition={{
          duration: 1,
          type: "spring",
          damping: 18,
        }}
      >
        <g clipPath="url(#grad)">
          <path
            d="M1 118.5C1 118.5 83.308 102.999 114.735 89.4998C146.162 76.0008 189.504 87.7868 235.952 77.4998C273.548 69.1718 294.469 62.4938 329.733 46.9998C409.879 11.7848 452.946 30.9998 483.874 22.4998C514.802 13.9998 635.97 0.84884 644 1.49984"
            stroke="#0090FF"
            strokeWidth="2"
          />
          <path
            d="M113.912 89.4888C82.437 102.988 1 118.487 1 118.487V438.477H644V1.49977C635.957 0.849773 514.601 13.9988 483.625 22.4978C452.649 30.9958 409.515 11.7838 329.245 46.9938C293.926 62.4868 272.973 69.1638 235.318 77.4908C188.798 87.7768 145.388 75.9908 113.912 89.4888Z"
            fill="url(#grad)"
          />
        </g>
        <defs>
          <linearGradient
            id="grad"
            x1="321.5"
            y1="0.476773"
            x2="321.5"
            y2="387.477"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#138EED" stopOpacity="0.4" />
            <stop offset="1" stopColor="#058FFB" stopOpacity="0" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  );
}



Cta Block

import { Play } from "lucide-react";

import { Button } from "@/components/ui/button";

const Cta18 = () => {
  return (
    <section className="py-32">
      <div className="container overflow-hidden">
        <div className="relative mx-auto flex max-w-7xl flex-col justify-between gap-6 overflow-hidden rounded-xl border bg-muted/50 md:flex-row">
          <div className="max-w-xl self-center p-6 md:p-12">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Explore Our Platform
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Discover the full potential of our platform. Try our interactive
              demo or watch a comprehensive walkthrough today.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button>Try Demo</Button>
              <Button variant="outline">
                Watch Video
                <Play className="ml-2" />
              </Button>
            </div>
          </div>
          <div className="relative ml-6 max-h-96 md:mt-8 md:ml-0">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-3.svg"
              alt="placeholder"
              className="absolute -bottom-12 left-4 h-48 -translate-x-1/2 -rotate-[120deg]"
            />
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
              alt="placeholder"
              className="z-10 aspect-video h-full w-full rounded-tl-xl border-t border-l object-cover pt-3.5 pl-3.5 backdrop-blur-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta18 };



📦 PRODUCT - Demo Page
Hero Block

"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React, { useRef } from "react";

import { useMousePosition } from "@/hooks/use-mouse-position";

import VariableFontAndCursor from "@/components/fancy/components/text/variable-font-and-cursor";

const Hero222 = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { x, y } = useMousePosition(containerRef);
  return (
    <section className="py-18">
      <div className="container">
        <div
          ref={containerRef}
          className="relative flex h-[85vh] flex-col items-center justify-center gap-4 overflow-hidden bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw15.jpeg')] bg-[position:center_-24rem] xl:bg-cover"
        >
          <div className="absolute bottom-10 left-10 flex flex-col mix-blend-exclusion">
            <p className="text-secondary text-xs">x : {Math.round(x)}</p>
            <p className="text-secondary text-xs">y : {Math.round(y)}</p>
          </div>
          <div className="relative z-10 h-full w-full mix-blend-exclusion">
            <div className="mt-62 mx-auto w-fit">
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-mono text-lg text-white md:ml-3"
              >
                CHAPTER 01{" "}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <VariableFontAndCursor
                  label="BEYOND SPEED"
                  className="text-5xl tracking-[-5px] text-white sm:text-7xl md:text-9xl md:tracking-[-13px]"
                  fontVariationMapping={{
                    y: { name: "wght", min: 100, max: 900 },
                    x: { name: "slnt", min: 0, max: -10 },
                  }}
                  containerRef={containerRef as React.RefObject<HTMLDivElement>}
                />
              </motion.div>
              <div
                className="bg-background absolute top-0 h-screen w-px -translate-x-1/2"
                style={{
                  left: `${x - 2}px`,
                }}
              />
              <div
                className="bg-background absolute left-0 h-px w-screen -translate-y-1/2"
                style={{
                  top: `${y - 2}px`,
                }}
              />
              <div
                className="rounded-xs bg-background absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  top: `${y - 2}px`,
                  left: `${x - 2}px`,
                }}
              />
            </div>
          </div>
          <button className="z-99 bg-background group mb-10 flex items-center gap-2 px-4 py-2 text-black transition-all duration-300 hover:gap-4">
            Get Started
            <ArrowRight
              className="-rotate-45 transition-all duration-300 group-hover:rotate-0"
              size={16}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export { Hero222 };



Component Block

"use client";

import { Download } from "lucide-react";

import { cn } from "@/lib/utils";

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

interface LogoProps extends React.HTMLAttributes<HTMLAnchorElement> {
  url: string;
  className?: string;
  children: React.ReactNode;
}

interface LogoImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
}

interface LogoTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  className?: string;
}

interface LogoBrandDownloadProps {
  children: React.ReactNode;
  files: Array<{
    name: string;
    path: string;
    format: "svg" | "png" | "jpg" | "jpeg" | "webp";
  }>;
  className?: string;
}

const LogoBrandDownload = ({
  children,
  files,
  className,
}: LogoBrandDownloadProps) => {
  const handleDownload = async (file: LogoBrandDownloadProps["files"][0]) => {
    try {
      const response = await fetch(file.path);
      if (!response.ok) throw new Error(`Failed to fetch ${file.name}`);

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = file.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Failed to download file:", error);
    }
  };

  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <div className={cn("inline-block", className)}>{children}</div>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-48">
        {files.map((file) => (
          <ContextMenuItem
            key={file.path}
            onClick={() => handleDownload(file)}
            className="cursor-pointer"
          >
            <Download className="mr-2 h-4 w-4" />
            Download {file.format.toUpperCase()}
          </ContextMenuItem>
        ))}
      </ContextMenuContent>
    </ContextMenu>
  );
};

const Logo = ({ url, className, children, ...props }: LogoProps) => {
  return (
    <a
      href={url}
      className={cn("flex max-h-8 items-center gap-2", className)}
      {...props}
    >
      {children}
    </a>
  );
};

const LogoImage = ({ src, alt, className, ...props }: LogoImageProps) => (
  <img src={src} alt={alt} className={cn("block h-8", className)} {...props} />
);

const LogoImageMobile = ({ src, alt, className, ...props }: LogoImageProps) => (
  <img
    src={src}
    alt={alt}
    className={cn("flex h-8 md:hidden", className)}
    {...props}
  />
);

const LogoImageDesktop = ({
  src,
  alt,
  className,
  ...props
}: LogoImageProps) => (
  <img
    src={src}
    alt={alt}
    className={cn("hidden h-8 md:flex", className)}
    {...props}
  />
);

const LogoText = ({ children, className, ...props }: LogoTextProps) => (
  <span
    className={cn("text-lg font-semibold tracking-tighter", className)}
    {...props}
  >
    {children}
  </span>
);

const LogoTextMobile = ({ children, className, ...props }: LogoTextProps) => (
  <span
    className={cn(
      "text-lg font-semibold tracking-tighter md:hidden",
      className,
    )}
    {...props}
  >
    {children}
  </span>
);

const LogoTextDesktop = ({ children, className, ...props }: LogoTextProps) => (
  <span
    className={cn(
      "hidden text-lg font-semibold tracking-tighter md:flex",
      className,
    )}
    {...props}
  >
    {children}
  </span>
);

export {
  Logo,
  LogoBrandDownload,
  LogoImage,
  LogoImageDesktop,
  LogoImageMobile,
  LogoText,
  LogoTextDesktop,
  LogoTextMobile,
};



Feature Block

"use client";

import { Database, LockKeyhole, Sparkles } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface DataItem {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

const DATA: DataItem[] = [
  {
    id: "feature-1",
    title: "Innovative Solutions",
    description: "Discover cutting-edge tools to revolutionize your workflow.",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    icon: <Sparkles className="h-6 w-6 text-white" />,
  },
  {
    id: "feature-2",
    title: "Data Management",
    description: "Efficiently organize and manage your data with ease.",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-2.svg",
    icon: <Database className="h-6 w-6 text-white" />,
  },
  {
    id: "feature-3",
    title: "Advanced Security",
    description: "Protect your assets with state-of-the-art security features.",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-3.svg",
    icon: <LockKeyhole className="h-6 w-6 text-white" />,
  },
];

const Feature186 = () => {
  const [selection, setSelection] = useState(DATA[0].id);

  return (
    <section className="relative py-16 md:py-32">
      <div
        className="absolute left-0 right-0 top-0 z-0 h-[800px] w-screen bg-repeat opacity-30 [mask-image:radial-gradient(ellipse_at_center,white_20%,transparent_70%)]"
        style={{
          backgroundImage: "url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/architect.svg')",
          backgroundSize: "60px",
        }}
      />
      <div className="container relative z-10">
        <div>
          <h2 className="text-4xl font-medium sm:text-5xl lg:text-6xl">
            Our Key Features
          </h2>
          <p className="text-muted-foreground mt-4 md:text-lg">
            Unlock the full potential of your projects with our powerful and
            intuitive features.
          </p>

          {/* Tabs */}
          <div className="mt-4 lg:mt-8">
            <Tabs value={selection} onValueChange={setSelection}>
              <div className="relative">
                <div className="overflow-auto">
                  {/* TabsTrigger Container Aligned Left */}
                  <div className="mb-6 flex min-w-fit flex-col items-start lg:mb-8">
                    <TabsList className="gap-4 bg-transparent">
                      {DATA.map((feature) => (
                        <TabsTrigger key={feature.id} value={feature.id}>
                          {feature.title}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--background))_0%,transparent_10%,transparent_90%,hsl(var(--background))_100%)] md:hidden" />
                </div>
              </div>

              {/* TabsContent */}
              <div className="relative w-full overflow-hidden">
                {DATA.map((feature) => (
                  <TabsContent
                    key={feature.id}
                    value={feature.id}
                    className="relative z-20"
                  >
                    <div className="aspect-3/2 bg-accent w-full rounded-lg p-6 md:p-14 md:px-24">
                      <div className="mx-auto max-w-full md:mx-0 md:max-w-md">
                        <div className="flex size-12 items-center justify-center rounded-full bg-black">
                          {feature.icon}
                        </div>
                        <div className="my-4 md:my-8">
                          <h1 className="text-lg font-bold sm:text-xl lg:text-2xl">
                            {feature.title}
                          </h1>
                          <span className="text-muted-foreground text-base sm:text-lg lg:text-xl">
                            {feature.description}
                          </span>
                        </div>
                      </div>
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="mt-4 h-full w-full rounded-lg object-cover object-center md:mt-0"
                      />
                    </div>
                  </TabsContent>
                ))}
              </div>

              {/* Mobile Navigation Dots */}
              <div className="flex justify-center py-3 md:hidden">
                {DATA.map((feature) => (
                  <Button
                    key={feature.id}
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setSelection(feature.id);
                    }}
                  >
                    <div
                      className={`size-2 rounded-full ${
                        feature.id === selection ? "bg-primary" : "bg-input"
                      }`}
                    />
                  </Button>
                ))}
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature186 };



Cta Block

import { Play } from "lucide-react";

import { Button } from "@/components/ui/button";

const Cta18 = () => {
  return (
    <section className="py-32">
      <div className="container overflow-hidden">
        <div className="relative mx-auto flex max-w-7xl flex-col justify-between gap-6 overflow-hidden rounded-xl border bg-muted/50 md:flex-row">
          <div className="max-w-xl self-center p-6 md:p-12">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Explore Our Platform
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Discover the full potential of our platform. Try our interactive
              demo or watch a comprehensive walkthrough today.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button>Try Demo</Button>
              <Button variant="outline">
                Watch Video
                <Play className="ml-2" />
              </Button>
            </div>
          </div>
          <div className="relative ml-6 max-h-96 md:mt-8 md:ml-0">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-3.svg"
              alt="placeholder"
              className="absolute -bottom-12 left-4 h-48 -translate-x-1/2 -rotate-[120deg]"
            />
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
              alt="placeholder"
              className="z-10 aspect-video h-full w-full rounded-tl-xl border-t border-l object-cover pt-3.5 pl-3.5 backdrop-blur-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta18 };




📦 PRODUCT - Integrations Page
Hero Block

"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React from "react";

import { LineShadowText } from "@/components/magicui/line-shadow-text";
import { Button } from "@/components/ui/button";

const Hero232 = () => {
  return (
    <section className="bg-background relative h-screen w-screen py-32">
      <div className="container relative z-20 flex items-center justify-center">
        <div className="bg-background flex w-fit flex-col items-center justify-center gap-4 pb-3 text-center">
          <Button
            variant="secondary"
            className="text-md bg-muted/60 group mt-24 flex w-fit items-center justify-center gap-3 rounded-full px-5 py-1 tracking-tight"
          >
            <span className="bg-foreground size-2 rounded-full" />
            <span>Flexible Plan customized for you</span>
          </Button>
          <div className="relative flex max-w-4xl items-center justify-center text-center text-5xl font-medium tracking-tight md:text-7xl">
            <h1 className="relative z-10 tracking-tighter">
              <span className="text-muted-foreground/50 mr-3">
                The only app you need to Stay
              </span>
              <LineShadowText> Productive </LineShadowText>
              <span className="text-muted-foreground/50"> ever</span>
              <span>.</span>
            </h1>
            <div className="z-9 bg-background absolute h-[105%] w-[85%]" />
          </div>
          <p className="bg-background text-muted-foreground/80 mt-5 max-w-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
            animi, ipsam provident optio delectus neque aliquid cumque. Beatae,
            odio!
          </p>
          <div className="flex gap-4">
            <Button
              variant="secondary"
              className="text-md group flex w-fit items-center justify-center gap-2 rounded-full px-4 py-1 tracking-tight"
            >
              <span>Documentation</span>
              <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
            </Button>
            <Button
              variant="default"
              className="text-md group flex w-fit items-center justify-center gap-2 rounded-full px-4 py-1 tracking-tight"
            >
              <span>Get Started</span>
              <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
            </Button>
          </div>
        </div>
      </div>

      <Illustration1
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0, 0, 0, 1.12] }}
        className="absolute left-0 top-6 hidden text-orange-500 lg:block"
      />

      <Illustration1
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0, 0, 0, 1.12] }}
        className="absolute right-0 top-32 hidden scale-x-[-1] scale-y-[-1] text-orange-500 lg:block"
      />
    </section>
  );
};

export { Hero232 };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Illustration1 = (props: any) => {
  return (
    <svg
      {...props}
      width="571"
      height="560"
      viewBox="0 0 571 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke="#cccccc"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.2"
        d="M166.571 320.89L166.337 320.448L166.571 320.89ZM-185.483 414.753L-185.029 414.961L-185.483 414.753ZM-90.798 550.017L-90.541 550.446L-90.541 550.446L-90.798 550.017ZM251.609 358.688L251.447 358.215L251.447 358.215L251.609 358.688ZM569.859 394.354C570.073 394.528 570.388 394.496 570.562 394.281C570.736 394.067 570.703 393.752 570.489 393.578L569.859 394.354ZM166.571 320.89L166.337 320.448C84.8815 363.503 5.15738 369.122 -58.3672 372.888C-90.1101 374.77 -117.856 376.19 -139.709 381.614C-161.58 387.041 -177.656 396.504 -185.937 414.544L-185.483 414.753L-185.029 414.961C-176.926 397.312 -161.193 387.976 -139.469 382.584C-117.727 377.188 -90.0926 375.77 -58.308 373.886C5.22228 370.12 85.1407 364.497 166.804 321.332L166.571 320.89ZM-185.483 414.753L-185.937 414.544C-213.037 473.573 -201.627 514.972 -177.119 537.918C-152.665 560.814 -115.234 565.241 -90.541 550.446L-90.798 550.017L-91.055 549.588C-115.323 564.129 -152.27 559.813 -176.436 537.188C-200.548 514.612 -212 473.711 -185.029 414.961L-185.483 414.753ZM-90.798 550.017L-90.541 550.446C-58.5271 531.264 -27.9166 512.042 1.68716 493.418C31.2925 474.794 59.8897 456.769 87.8844 439.978C143.875 406.396 197.433 377.763 251.771 359.161L251.609 358.688L251.447 358.215C197.009 376.851 143.38 405.527 87.37 439.121C59.3643 455.918 30.7575 473.949 1.15467 492.572C-28.4497 511.196 -59.0516 530.413 -91.055 549.588L-90.798 550.017ZM251.609 358.688L251.771 359.161C376.455 316.476 485.473 325.788 569.859 394.354L570.174 393.966L570.489 393.578C485.756 324.729 376.346 315.457 251.447 358.215L251.609 358.688ZM-3.19002 2.72941L-3.12782 3.22553C104.974 -10.3276 201.201 40.6009 243.453 109.09C264.574 143.326 272.197 181.928 261.119 219.065C250.041 256.203 220.237 291.959 166.337 320.448L166.571 320.89L166.804 321.332C220.873 292.754 250.903 256.812 262.077 219.351C273.252 181.891 265.545 142.995 244.304 108.565C201.832 39.719 105.21 -11.365 -3.25222 2.23329L-3.19002 2.72941Z"
      />
      <motion.path
        initial={{ pathLength: 0, opacity: 0, pathOffset: 0.3 }}
        animate={{
          pathLength: 1,
          pathOffset: 0,
          opacity: 1,
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          opacity: { duration: 0.5 },
        }}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M166.571 320.89L166.337 320.448L166.571 320.89ZM-185.483 414.753L-185.029 414.961L-185.483 414.753ZM-90.798 550.017L-90.541 550.446L-90.541 550.446L-90.798 550.017ZM251.609 358.688L251.447 358.215L251.447 358.215L251.609 358.688ZM569.859 394.354C570.073 394.528 570.388 394.496 570.562 394.281C570.736 394.067 570.703 393.752 570.489 393.578L569.859 394.354ZM166.571 320.89L166.337 320.448C84.8815 363.503 5.15738 369.122 -58.3672 372.888C-90.1101 374.77 -117.856 376.19 -139.709 381.614C-161.58 387.041 -177.656 396.504 -185.937 414.544L-185.483 414.753L-185.029 414.961C-176.926 397.312 -161.193 387.976 -139.469 382.584C-117.727 377.188 -90.0926 375.77 -58.308 373.886C5.22228 370.12 85.1407 364.497 166.804 321.332L166.571 320.89ZM-185.483 414.753L-185.937 414.544C-213.037 473.573 -201.627 514.972 -177.119 537.918C-152.665 560.814 -115.234 565.241 -90.541 550.446L-90.798 550.017L-91.055 549.588C-115.323 564.129 -152.27 559.813 -176.436 537.188C-200.548 514.612 -212 473.711 -185.029 414.961L-185.483 414.753ZM-90.798 550.017L-90.541 550.446C-58.5271 531.264 -27.9166 512.042 1.68716 493.418C31.2925 474.794 59.8897 456.769 87.8844 439.978C143.875 406.396 197.433 377.763 251.771 359.161L251.609 358.688L251.447 358.215C197.009 376.851 143.38 405.527 87.37 439.121C59.3643 455.918 30.7575 473.949 1.15467 492.572C-28.4497 511.196 -59.0516 530.413 -91.055 549.588L-90.798 550.017ZM251.609 358.688L251.771 359.161C376.455 316.476 485.473 325.788 569.859 394.354L570.174 393.966L570.489 393.578C485.756 324.729 376.346 315.457 251.447 358.215L251.609 358.688ZM-3.19002 2.72941L-3.12782 3.22553C104.974 -10.3276 201.201 40.6009 243.453 109.09C264.574 143.326 272.197 181.928 261.119 219.065C250.041 256.203 220.237 291.959 166.337 320.448L166.571 320.89L166.804 321.332C220.873 292.754 250.903 256.812 262.077 219.351C273.252 181.891 265.545 142.995 244.304 108.565C201.832 39.719 105.21 -11.365 -3.25222 2.23329L-3.19002 2.72941Z"
      />
    </svg>
  );
};



Integration Block

"use client";

import { motion } from "framer-motion";
import React from "react";

import { cn } from "@/lib/utils";

import { Particles } from "@/components/magicui/particles";

const Hero219 = () => {
  return (
    <section className="relative py-32">
      <div className="container flex flex-col items-center justify-center gap-4 overflow-hidden">
        <p className="text-muted-foreground">
          Bridging Developers, Building the Future
        </p>
        <h1 className="realtive z-15 max-w-3xl text-center text-6xl font-medium tracking-tighter md:text-7xl">
          The only app you Need to{" "}
          <span
            className="overflow-hidden"
            style={{
              transformStyle: "preserve-3d",
              perspective: "600px",
            }}
          >
            {"Stay Productive".split(" ").map((word, i) => (
              <motion.span
                className="relative inline-block px-[6px] leading-[none]"
                key={i}
                initial={{
                  opacity: 0,
                  y: "70%",
                  rotateX: "-28deg",
                }}
                animate={{
                  opacity: 1,
                  y: "0%",
                  rotateX: "0deg",
                }}
                transition={{
                  delay: i * 0.08 + 0.1,
                  duration: 0.8,
                  ease: [0.215, 0.61, 0.355, 1],
                }}
              >
                {word === "Productive" ? (
                  <span className="font-playfair">{word}</span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </span>
        </h1>
        <Particles
          className="absolute inset-0 z-0"
          quantity={500}
          ease={80}
          color="#000000"
          refresh
        />

        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 1 }}
          className="relative z-20 mt-10 flex items-center justify-center gap-4"
        >
          <SkiperUiMarquee
            showCard={1}
            className=""
            reverse={true}
            src={[
              "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/nextjs-icon.svg",
              "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/react-icon.svg",
              "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vue-icon.svg",
              "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/typescript-icon.svg",
            ]}
          />
          <SkiperUiMarquee
            showCard={2}
            className=""
            src={[
              "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/tailwind-icon.svg",
              "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-icon.svg",
              "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/remix-icon.svg",
              "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vite-icon.svg",
            ]}
          />
          <SkiperUiMarquee
            showCard={3}
            reverse={true}
            className=""
            src={[
              "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/github-icon.svg",
              "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/laravel-icon.svg",
              "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/gatsby-icon.svg",
              "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vscode-icon.svg",
            ]}
          />
          <SkiperUiMarquee
            showCard={2}
            className=""
            src={[
              "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vite-icon.svg",
              "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/sketch-icon.svg",
              "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/brave-icon.svg",
              "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/dropbox-icon.svg",
            ]}
          />
          <SkiperUiMarquee
            showCard={3}
            reverse={true}
            className=""
            src={[
              "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vercel-icon.svg",
              "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcn-ui-icon.svg",
              "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/nike-icon.svg",
              "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/spotify-icon.svg",
            ]}
          />
          <SkiperUiMarquee
            showCard={2}
            className=""
            src={[
              "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/slack-icon.svg",
              "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/linkedin-icon.svg",
              "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/instagram-icon.svg",
              "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/facebook-icon.svg",
            ]}
          />
          <SkiperUiMarquee
            reverse={true}
            showCard={1}
            className=""
            src={[
              "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/notion-icon.svg",
              "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/twitter-icon.svg",
              "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/google-icon.svg",
              "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/google-play-icon.svg",
            ]}
          />
        </motion.div>

        <div className="h-92 bg-background absolute bottom-20 left-0 right-0 w-full blur-xl" />
      </div>
    </section>
  );
};

export { Hero219 };

function Marquee({
  className,
  reverse,
  children,
  vertical = false,
  repeat = 4,
  ...props
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}: any) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className,
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn(
              "flex shrink-0 justify-around ![animation-duration:12s] [animation-play-state:running] [gap:var(--gap)] group-hover:[animation-play-state:paused]",
              {
                "animate-marquee flex-row": !vertical,
                "animate-marquee-vertical flex-col": vertical,
                "[animation-direction:reverse]": reverse,
              },
            )}
          >
            {children}
          </div>
        ))}
    </div>
  );
}

interface SkiperUiMarqueeProps {
  showCard: number;
  reverse?: boolean;
  className?: string;
  src: string[];
}

export function SkiperUiMarquee({
  showCard,
  reverse = false,
  className,
  src,
}: SkiperUiMarqueeProps) {
  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{
        height: showCard * 113,
      }}
    >
      <Marquee reverse={reverse} vertical={true}>
        {src.map((item, idx) => (
          <Card key={idx} src={item} />
        ))}
      </Marquee>
      <div className="from-background absolute top-0 z-10 h-8 w-full bg-gradient-to-b to-transparent" />
      <div className="from-background absolute bottom-0 z-10 h-8 w-full bg-gradient-to-t to-transparent" />
    </div>
  );
}

function Card({ src }: { src?: string }) {
  return (
    <div
      className={cn(
        "border-muted relative flex size-24 items-center justify-center overflow-hidden rounded-3xl border p-4",
        "from-muted/50 to-background bg-gradient-to-b",
        "dark:bg-transparent dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <img
        src={src || "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/notion-icon.svg"}
        alt="Card"
        className="size-8 object-cover"
      />
    </div>
  );
}



Logos Block

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const logos = [
  {
    id: "logo-1",
    description: "Logo 1",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
  },
  {
    id: "logo-2",
    description: "Logo 2",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-2.svg",
  },
  {
    id: "logo-3",
    description: "Logo 3",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-3.svg",
  },
  {
    id: "logo-4",
    description: "Logo 4",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-4.svg",
  },
  {
    id: "logo-5",
    description: "Logo 5",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-5.svg",
  },
  {
    id: "logo-6",
    description: "Logo 6",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-6.svg",
  },
];

const Logos2 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid overflow-hidden rounded-xl border border-border md:grid-cols-2">
          <div className="my-auto px-6 py-10 sm:px-10 sm:py-12 lg:p-16">
            <div className="w-full md:max-w-md">
              <h2 className="mb-4 text-2xl font-semibold lg:text-3xl">
                Our certifications say it all.
              </h2>
              <p className="mb-6 text-lg">
                In non libero bibendum odio pellentesque ullamcorper. Aenean
                condimentum, dolor commodo pulvinar bibendum.
              </p>
              <Button className="w-full md:w-fit">
                <ArrowRight className="mr-2 size-5" />
                Get in touch
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-3 border-t border-border md:border-t-0 md:border-l">
            {logos.map((logo) => (
              <div
                key={logo.id}
                className="-mb-px flex items-center justify-center border-r border-b border-border p-5 nth-[3n]:border-r-0 sm:p-6"
              >
                <img
                  src={logo.image}
                  alt={logo.description}
                  className="size-12 object-cover object-center sm:size-16 lg:size-24"
                ></img>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Logos2 };



Cta Block

import { Play } from "lucide-react";

import { Button } from "@/components/ui/button";

const Cta18 = () => {
  return (
    <section className="py-32">
      <div className="container overflow-hidden">
        <div className="relative mx-auto flex max-w-7xl flex-col justify-between gap-6 overflow-hidden rounded-xl border bg-muted/50 md:flex-row">
          <div className="max-w-xl self-center p-6 md:p-12">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Explore Our Platform
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Discover the full potential of our platform. Try our interactive
              demo or watch a comprehensive walkthrough today.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button>Try Demo</Button>
              <Button variant="outline">
                Watch Video
                <Play className="ml-2" />
              </Button>
            </div>
          </div>
          <div className="relative ml-6 max-h-96 md:mt-8 md:ml-0">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-3.svg"
              alt="placeholder"
              className="absolute -bottom-12 left-4 h-48 -translate-x-1/2 -rotate-[120deg]"
            />
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
              alt="placeholder"
              className="z-10 aspect-video h-full w-full rounded-tl-xl border-t border-l object-cover pt-3.5 pl-3.5 backdrop-blur-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta18 };



📦 PRODUCT - HACCP Compliance Page
Hero Block

"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const Hero183 = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="overflow-hidden py-32">
      <div className="container">
        <div className="mx-auto max-w-5xl text-center">
          <Badge variant="outline">Premium</Badge>
          <h1 className="mt-6 text-4xl font-bold md:text-6xl">
            Your Ultimate Business Solution.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground md:text-xl lg:px-32">
            Transform your business operations with our cutting-edge solutions
            designed to streamline workflows and boost team efficiency.
          </p>
          <div className="mt-8 flex justify-center gap-2">
            <Button size="lg">Get started</Button>
            <Button variant="outline" size="lg">
              Learn more
            </Button>
          </div>
        </div>
        <div className="relative mx-10 mt-16 hidden md:block">
          <div className="absolute top-0 -right-20 -left-20 z-10 h-px bg-[linear-gradient(to_right,transparent,hsl(var(--border))_4%,hsl(var(--border))_96%,transparent)]"></div>
          <div className="absolute -right-20 bottom-0 -left-20 z-10 h-px bg-[linear-gradient(to_right,transparent,hsl(var(--border))_4%,hsl(var(--border))_96%,transparent)]"></div>
          <div className="relative grid grid-cols-7 grid-rows-11 gap-4 lg:gap-6">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
              alt="placeholder"
              className="col-span-2 row-span-4 row-start-2 aspect-video h-full rounded-lg border border-border object-cover"
            />
            <div className="col-span-3 col-start-3 row-span-full m-px rounded-lg bg-muted p-2.5">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
                alt="placeholder"
                className="aspect-video h-full rounded-lg border border-border object-cover"
              />
            </div>
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg"
              alt="placeholder"
              className="col-span-2 row-span-5 row-start-2 aspect-video h-full rounded-lg border border-border object-cover"
            />
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg"
              alt="placeholder"
              className="col-span-2 row-span-5 aspect-video h-full rounded-lg border border-border object-cover"
            />
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-5.svg"
              alt="placeholder"
              className="col-span-2 row-span-4 aspect-video h-full rounded-lg border border-border object-cover"
            />
            <div className="absolute -top-[10%] -bottom-[10%] col-start-3 row-span-full row-start-1 w-px bg-[linear-gradient(to_bottom,transparent,hsl(var(--border))_5%,hsl(var(--border))_95%,transparent)]"></div>
            <div className="absolute -top-[10%] -bottom-[10%] -left-[17px] col-start-6 row-span-full row-start-1 w-px bg-[linear-gradient(to_bottom,transparent,hsl(var(--border))_5%,hsl(var(--border))_95%,transparent)] lg:-left-[25px]"></div>
          </div>
          <div className="absolute -top-full -bottom-1/2 -left-6 w-px bg-linear-to-b from-transparent via-border via-60% to-transparent"></div>
          <div className="absolute -top-full -right-6 -bottom-1/2 w-px bg-linear-to-b from-transparent via-border via-60% to-transparent"></div>
        </div>
        <div className="mt-16 md:hidden">
          <Carousel setApi={setApi} className="mx-auto max-w-md">
            <CarouselContent className="max-h-full">
              <CarouselItem>
                <div className="flex flex-col gap-3">
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
                    alt="placeholder"
                    className="aspect-video rounded-lg border border-border object-cover"
                  />
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg"
                    alt="placeholder"
                    className="aspect-4/3 rounded-lg border border-border object-cover"
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                  alt="placeholder"
                  className="h-full rounded-lg border border-border object-cover"
                />
              </CarouselItem>
              <CarouselItem>
                <div className="flex flex-col gap-3">
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg"
                    alt="placeholder"
                    className="aspect-4/3 rounded-lg border border-border object-cover"
                  />
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-5.svg"
                    alt="placeholder"
                    className="aspect-video rounded-lg border border-border object-cover"
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
            <div className="mt-6 flex justify-center">
              {Array.from({ length: 3 }).map((_, index) => (
                <span
                  key={index}
                  className={cn(
                    "mx-1.5 inline-block size-2 cursor-pointer rounded-full bg-muted-foreground/20 transition-colors duration-300",
                    index + 1 === current && "bg-muted-foreground/60",
                  )}
                  onClick={() => api && api.scrollTo(index)}
                />
              ))}
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export { Hero183 };



Feature Block

import { ArrowRight, Heart, Lightbulb, Shield, UserPen } from "lucide-react";

import { Badge } from "@/components/ui/badge";

const values = [
  {
    title: "User-Centered Design",
    description:
      "We prioritize the user experience, ensuring every feature adds real value and is intuitive to use.",
    icon: UserPen,
  },
  {
    title: "Continuous Innovation",
    description:
      "We are committed to pushing boundaries, and evolving to meet the needs of modern teams.",
    icon: Lightbulb,
  },
  {
    title: "Integrity and Transparency",
    description:
      "We build with honesty and clarity, fostering trust with our users and partners.",
    icon: Shield,
  },
];

const Feature170 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col gap-6 py-4 lg:py-8">
          <Badge
            variant="outline"
            className="w-fit gap-1 bg-card px-3 text-sm font-normal tracking-tight shadow-sm"
          >
            <Heart className="size-4" />
            <span>We live by</span>
          </Badge>
          <h2 className="text-3xl leading-tight tracking-tight md:text-4xl lg:text-6xl">
            Our Core Values
          </h2>
          <div className="flex flex-col gap-2">
            <p className="text-muted-foreground">
              We believe in principles that guide our growth and inspire our
              community.
            </p>
            <p className="inline-flex items-center gap-1 text-primary">
              <span className="underline">Learn More</span>
              <ArrowRight className="size-4" />
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 md:mt-14 lg:grid-cols-3">
          {values.map((value, index) => (
            <div className="flex gap-2.5" key={index}>
              <value.icon className="mt-0.5 size-[18px] shrink-0" />
              <div>
                <h3 className="text-lg leading-none! tracking-[-0.96px] lg:text-2xl">
                  {value.title}
                </h3>
                <p className="mt-2.5 text-sm tracking-[-0.36px] text-muted-foreground">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature170 };


Stats Block

const Stats1 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <h1 className="text-center text-4xl font-semibold lg:text-6xl">
          Platform Performance Insights
        </h1>
        <div className="grid gap-10 pt-9 md:grid-cols-3 lg:gap-0 lg:pt-20">
          <div className="text-center">
            <p className="text-sm font-medium text-muted-foreground">
              Reduce your time to hire by
            </p>
            <p className="pt-4 text-7xl font-semibold lg:pt-10">4x</p>
            <p className="text-2xl font-semibold text-muted-foreground">
              quicker
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-muted-foreground">
              Clients have seen a decrease in
            </p>
            <p className="pt-4 text-7xl font-semibold lg:pt-10">50%</p>
            <p className="text-2xl font-semibold text-muted-foreground">
              in time to hire
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-muted-foreground">
              The average number of hires per
            </p>
            <p className="pt-4 text-7xl font-semibold lg:pt-10">3</p>
            <p className="text-2xl font-semibold text-muted-foreground">
              months
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Stats1 };



Testimonial Block

"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonial28 = () => {
  const testimonials = [
    {
      name: "John Doe",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitiafugiat omnis! Porro facilis quo animi consequatur. Explicabo.Lorem ipsum dolor sit amet!Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitiaf.",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
    },
    {
      name: "Jane Smith",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitiafugiat omnis! Porro facilis quo animi consequatur. Explicabo.Lorem ipsum dolor sit amet!Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitiaf.",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    },
    {
      name: "Alex Johnson",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitiafugiat omnis! Porro facilis quo animi consequatur. Explicabo.Lorem ipsum dolor sit amet!Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitiaf.",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
    },
    {
      name: "John Doe",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitiafugiat omnis! Porro facilis quo animi consequatur. Explicabo.Lorem ipsum dolor sit amet!Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitiaf.",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
    },
    {
      name: "Jane Smith",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitiafugiat omnis! Porro facilis quo animi consequatur. Explicabo.Lorem ipsum dolor sit amet!Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitiaf.",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
    },
    {
      name: "Alex Johnson",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitiafugiat omnis! Porro facilis quo animi consequatur. Explicabo.Lorem ipsum dolor sit amet!Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitiaf.",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-6.webp",
    },
  ];

  return (
    <section className="bg-background py-32">
      <div className="container">
        <h1 className="mb-10 text-center text-3xl font-bold tracking-tighter text-foreground lg:text-6xl">
          Testimonials
        </h1>

        <Carousel className="mx-auto w-full md:max-w-5xl lg:mt-30">
          <CarouselContent>
            {testimonials.map((currentTestimonial, index) => (
              <CarouselItem key={index}>
                <DashedCard>
                  <div className="px-5 py-10 lg:p-20">
                    <div className="flex items-center justify-center gap-3">
                      <Avatar className="relative size-12 rounded-full">
                        <AvatarImage
                          src={currentTestimonial.avatar}
                          alt={currentTestimonial.name}
                        />
                      </Avatar>
                      <h2 className="text-2xl font-bold tracking-tight text-foreground">
                        {currentTestimonial.name}
                      </h2>
                    </div>
                    <p className="mt-5 text-center text-lg tracking-tight">
                      {currentTestimonial.content}
                    </p>
                  </div>
                </DashedCard>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-6 flex items-center justify-center gap-3 lg:mt-24">
            <CarouselPrevious className="relative top-0 left-0 translate-y-0 lg:p-6" />
            <div className="relative flex h-10 w-[50px] items-center justify-center overflow-hidden lg:w-[200px]">
              <LineHorizontal className="absolute left-0 clear-both" />
            </div>
            <CarouselNext
              variant="default"
              className="relative top-0 left-0 translate-y-0 lg:p-6"
            />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

const LineHorizontal = ({ className = "" }) => (
  <svg
    height="1"
    className={cn("absolute h-1 w-full", className)}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.63721 1.62573H1125.26"
      stroke="#2C2D30"
      strokeOpacity="0.1"
      strokeWidth="1.40102"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="5.6 8.41"
    />
  </svg>
);

const LineVertical = ({ className = "" }) => (
  <svg
    className={cn("absolute h-full w-1", className)}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.93457 0.886963V910.841"
      stroke="#2C2D30"
      strokeOpacity="0.1"
      strokeWidth="1.40102"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="5.6 8.41"
    />
  </svg>
);

const DashedCard = ({ children }: { children: React.ReactNode }) => (
  <div className="group relative items-center justify-center overflow-hidden p-4">
    <LineHorizontal className="top-4 left-0" />
    <LineHorizontal className="bottom-4 left-0" />
    <LineVertical className="top-0 left-4" />
    <LineVertical className="top-0 right-4" />
    <IconSvgs.Plus className="absolute top-1.5 left-1.5" />
    <IconSvgs.Plus className="absolute top-1.5 right-[7px]" />
    <IconSvgs.Plus className="absolute bottom-[7px] left-1.5" />
    <IconSvgs.Plus className="absolute right-[7px] bottom-[7px]" />
    <div>{children}</div>
  </div>
);

const IconSvgs = {
  SvgBorder1: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      {...props}
      width="78"
      height="73"
      viewBox="0 0 68 67"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M34.0021 5.5111C31.6361 5.5181 27.1901 4.5351 25.3921 3.9141C19.1911 1.7761 9.96914 -0.7129 4.61214 5.7881C0.595138 10.6571 0.538138 15.5941 4.04314 25.5591C4.71314 27.4591 5.59914 31.0741 5.54114 33.5811C5.59514 36.0881 4.71314 39.7031 4.04314 41.6031C0.534138 51.5681 0.595137 56.5051 4.60814 61.3731C9.96914 67.8751 19.1911 65.3861 25.3881 63.2481C27.1861 62.6271 31.6361 61.6451 33.9981 61.6521C36.3641 61.6451 40.8111 62.6271 42.6081 63.2481C48.8101 65.3861 58.0311 67.8751 63.3891 61.3741C67.4051 56.5041 67.4631 51.5681 63.9571 41.6031C63.2871 39.7031 62.4021 36.0881 62.4591 33.5811C62.4011 31.0741 63.2881 27.4591 63.9571 25.5591C67.4671 15.5941 67.4051 10.6611 63.3891 5.7891C58.0281 -0.7129 48.8091 1.7761 42.6091 3.9141C40.8111 4.5351 36.3611 5.5181 33.9991 5.5101H34.0021V5.5111Z"
        stroke="#2C2D30"
        strokeOpacity="0.1"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  SvgBorder2: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      {...props}
      width="78"
      height="73"
      viewBox="0 0 78 73"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M75.6648 29.841C75.5905 29.4622 75.435 29.104 75.2088 28.791C74.9841 28.4768 74.6942 28.2149 74.3588 28.023L65.6588 23.053C65.2554 22.822 64.9196 22.489 64.6852 22.0875C64.4507 21.686 64.3258 21.23 64.3228 20.765L64.2888 10.972C64.2887 10.5834 64.2038 10.1994 64.0401 9.84692C63.8764 9.49442 63.6377 9.18187 63.3408 8.93105C59.7093 5.84379 55.5254 3.47294 51.0108 1.94405C50.7323 1.85062 50.4406 1.80268 50.1468 1.80205C49.6882 1.79933 49.2366 1.91506 48.8358 2.13805L39.9958 7.07605C39.6003 7.29665 39.1548 7.41221 38.7019 7.41168C38.249 7.41116 37.8038 7.29457 37.4088 7.07305L28.5748 2.11105C28.2467 1.92714 27.8836 1.81429 27.5091 1.77983C27.1346 1.74538 26.757 1.79008 26.4008 1.91105C21.8794 3.42193 17.6863 5.77842 14.0448 8.85505C13.748 9.10691 13.5092 9.41998 13.3447 9.77278C13.1802 10.1256 13.0939 10.5098 13.0918 10.899L13.0478 20.681C13.0458 21.1465 12.921 21.6033 12.6861 22.0051C12.4512 22.407 12.1144 22.7399 11.7098 22.97L3.00483 27.923C2.66872 28.1135 2.37768 28.3742 2.15159 28.6875C1.92551 29.0007 1.76971 29.3591 1.69483 29.7381C0.772786 34.353 0.768369 39.1044 1.68183 43.7211C1.75583 44.1011 1.91183 44.459 2.13783 44.772C2.36283 45.086 2.65283 45.3481 2.98783 45.5391L11.6878 50.5091C12.0917 50.7399 12.4276 51.0729 12.662 51.4747C12.8963 51.8765 13.0208 52.3329 13.0228 52.798L13.0578 62.59C13.058 62.9787 13.1428 63.3627 13.3066 63.7152C13.4703 64.0677 13.7089 64.3802 14.0058 64.6311C17.6352 67.722 21.8192 70.0948 26.3348 71.623C26.6916 71.7424 27.0694 71.7862 27.444 71.7516C27.8186 71.717 28.1819 71.6048 28.5108 71.4221L37.3528 66.484C37.7479 66.2635 38.1929 66.1478 38.6453 66.1478C39.0978 66.1478 39.5427 66.2635 39.9378 66.484L48.7598 71.427C49.0879 71.6111 49.451 71.724 49.8255 71.7585C50.2001 71.7929 50.5777 71.7481 50.9338 71.6271C55.4549 70.1161 59.6477 67.7596 63.2888 64.6831C63.5867 64.4316 63.8263 64.1183 63.991 63.7651C64.1558 63.4118 64.2417 63.0269 64.2428 62.637L64.2868 52.8571C64.2889 52.3916 64.4137 51.9348 64.6486 51.533C64.8835 51.1311 65.2202 50.7982 65.6248 50.5681L74.3288 45.6151C74.6651 45.4247 74.9564 45.164 75.1826 44.8508C75.4089 44.5375 75.5648 44.1791 75.6398 43.8C76.5638 39.19 76.5708 34.443 75.6618 29.83L75.6648 29.841Z"
        stroke="#2C2D30"
        strokeOpacity="0.1"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  Plus: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      {...props}
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11.1301 0.868652V22.9502" stroke="black" />
      <path d="M22.1709 11.9097H0.0893555" stroke="black" />
    </svg>
  ),
};

export { Testimonial28 };



Cta Block

import { Play } from "lucide-react";

import { Button } from "@/components/ui/button";

const Cta18 = () => {
  return (
    <section className="py-32">
      <div className="container overflow-hidden">
        <div className="relative mx-auto flex max-w-7xl flex-col justify-between gap-6 overflow-hidden rounded-xl border bg-muted/50 md:flex-row">
          <div className="max-w-xl self-center p-6 md:p-12">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Explore Our Platform
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Discover the full potential of our platform. Try our interactive
              demo or watch a comprehensive walkthrough today.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button>Try Demo</Button>
              <Button variant="outline">
                Watch Video
                <Play className="ml-2" />
              </Button>
            </div>
          </div>
          <div className="relative ml-6 max-h-96 md:mt-8 md:ml-0">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-3.svg"
              alt="placeholder"
              className="absolute -bottom-12 left-4 h-48 -translate-x-1/2 -rotate-[120deg]"
            />
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
              alt="placeholder"
              className="z-10 aspect-video h-full w-full rounded-tl-xl border-t border-l object-cover pt-3.5 pl-3.5 backdrop-blur-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta18 };




📦 PRODUCT - Audit Tools Page
Hero Block

"use client";

import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

const Hero201 = () => {
  return (
    <section className="py-32">
      <div className="container relative overflow-hidden md:py-32">
        <div className="mb-4 flex items-center justify-center gap-4">
          <img
            className="size-6 dark:invert"
            alt="Copy paste icon"
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg"
          />
          <h2 className="text-foreground text-center text-lg font-semibold tracking-tight">
            Just Copy Paste
          </h2>
        </div>

        <h1 className="font-inter text-foreground mx-auto max-w-4xl text-center text-[70px] font-semibold leading-[65px] tracking-tighter md:text-[105px] md:leading-[96px]">
          Amazing components
        </h1>

        <p className="text-muted-foreground mx-auto mt-6 max-w-3xl text-center text-xl">
          Discover our collection of beautifully designed, ready-to-use
          components that you can easily integrate into your projects.
        </p>

        <div className="relative mt-8 flex flex-col items-center justify-center">
          <Button className="w-75 rounded-2xl px-2 py-6 shadow-[0px_1px_3px_#0000001a,inset_0px_2px_0px_#ffffff40]">
            Sign up for free
          </Button>
          <a
            href="#"
            className="z-12 w-75 text-muted-foreground group relative flex items-center justify-center rounded-2xl py-6 hover:bg-none"
          >
            Book a demo
            <ChevronRightIcon className="ml-1 h-4 w-4 transition-all ease-in-out group-hover:ml-4" />
          </a>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -250, scale: 0.6 }}
          animate={{ opacity: 100, y: 0, scale: 1 }}
          transition={{ ease: "easeInOut", duration: 0.6 }}
          className="w-240 absolute -right-80 -top-80 -z-10 hidden h-full items-center justify-center md:flex"
        >
          <img
            className="infinite absolute w-full rotate-12 animate-[spin_15s_linear_infinite] dark:invert"
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/illustrations/tokyo-solar-system-around-a-smiley.svg"
            alt=""
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 250, scale: 0.6 }}
          animate={{ opacity: 100, y: 0, scale: 1 }}
          transition={{ ease: "easeInOut", duration: 0.6 }}
          className="md:w-240 -bottom-80 -left-80 -z-10 -mb-24 mt-32 flex h-full w-full items-center justify-center md:absolute"
        >
          <img
            className="infinite absolute w-full rotate-12 animate-[spin_15s_linear_infinite] dark:invert"
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/illustrations/tokyo-solar-system-around-a-smiley.svg"
            alt=""
          />
        </motion.div>
      </div>
    </section>
  );
};

export { Hero201 };


Feature Block

"use client";

import { motion } from "motion/react";
import React, { useRef } from "react";
import { RefObject, useEffect, useId, useState } from "react";

import { cn } from "@/lib/utils";

import { Globe } from "@/components/magicui/globe";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Feature251 = () => {
  const containerRef1 = useRef<HTMLDivElement>(null);
  const containerRef2 = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);
  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-5">
          {/* 1st Card  */}
          <Card className="w-166 relative h-96 rounded-3xl border">
            <CardHeader>
              <h3 className="text-2xl font-semibold tracking-tight">
                Customizable Workflows
              </h3>
              <p className="text-muted-foreground/70 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt Lorem ipsum dolor sit amet,
                consectetur
              </p>
            </CardHeader>
            <CardContent ref={containerRef1} className="relative ml-5">
              <IconCard
                ref={div1Ref as React.RefObject<HTMLDivElement>}
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/google-icon.svg"
                className="mb-3"
              />
              <IconCard
                ref={div2Ref as React.RefObject<HTMLDivElement>}
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/figma-icon.svg"
                className="translate-x-32"
              />
              <IconCard
                ref={div3Ref as React.RefObject<HTMLDivElement>}
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/notion-icon.svg"
                className="mt-3"
              />
              <IconCard
                ref={div5Ref as React.RefObject<HTMLDivElement>}
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg"
                className="absolute right-12 top-1/2 -translate-y-1/2"
              />
              <div
                ref={div4Ref as React.RefObject<HTMLDivElement>}
                className="z-99 bg-muted absolute left-1/2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border"
              />
              <AnimatedBeam
                duration={3}
                containerRef={containerRef1}
                fromRef={div1Ref}
                curvature={40}
                toRef={div4Ref}
              />
              <AnimatedBeam
                duration={3}
                containerRef={containerRef1}
                fromRef={div2Ref}
                toRef={div4Ref}
              />
              <AnimatedBeam
                duration={3}
                containerRef={containerRef1}
                fromRef={div3Ref}
                curvature={-40}
                toRef={div4Ref}
              />
              <AnimatedBeam
                duration={3}
                containerRef={containerRef1}
                fromRef={div4Ref}
                toRef={div5Ref}
              />
            </CardContent>
          </Card>

          {/* 2nd Card */}
          <Card className="md:w-83 h-96 w-full rounded-3xl border">
            <CardHeader>
              <h3 className="text-2xl font-semibold tracking-tight">
                Smart Task Tracking{" "}
              </h3>
              <p className="text-muted-foreground/70">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </p>
            </CardHeader>
            <CardContent
              ref={containerRef2}
              className="relative flex h-full flex-col items-center justify-between"
            >
              <IconCard
                ref={div6Ref as React.RefObject<HTMLDivElement>}
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg"
                className="mb-3"
              />

              <IconCard
                ref={div7Ref as React.RefObject<HTMLDivElement>}
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/g2-icon.svg"
                className="mt-3"
              />

              <AnimatedBeam
                duration={3}
                containerRef={containerRef2}
                fromRef={div6Ref as React.RefObject<HTMLDivElement>}
                direction="vertical"
                curvature={40}
                toRef={div7Ref as React.RefObject<HTMLDivElement>}
              />
            </CardContent>
          </Card>

          {/* 3rd card */}
          <Card className="relative flex h-96 w-full flex-col rounded-3xl border md:w-[330px]">
            <CardContent>
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg"
                className="mt-5 size-32"
                alt=""
              />
            </CardContent>
            <CardHeader className="mt-auto">
              <h3 className="text-2xl font-semibold tracking-tight">
                Seamless Integration & Real-Time Collaboration
              </h3>
              <p className="text-muted-foreground/70">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </p>
            </CardHeader>
          </Card>
          {/* 4th card */}
          <Card className="w-166 h-96 overflow-hidden rounded-3xl border">
            <CardHeader>
              <h3 className="text-2xl font-semibold tracking-tight">
                Trusted by 100k Users{" "}
              </h3>
              <p className="text-muted-foreground/70">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt Lorem ipsum dolor sit amet,
                consectetur
              </p>
            </CardHeader>

            <CardContent className="relative">
              <Globe className="-top-4" />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export { Feature251 };

const IconCard = ({
  src,
  className,
  ref,
}: {
  src: string;
  className?: string;
  ref: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <div
      ref={ref}
      className={cn(
        "bg-muted relative z-10 flex size-14 items-center justify-center rounded-xl",
        className,
      )}
    >
      <img src={src} alt="Google" className="size-5" />
      <HandleIcon className="absolute -top-3 left-1/2 size-6 -translate-x-1/2" />
      <HandleIcon className="absolute -bottom-3 left-1/2 size-6 -translate-x-1/2" />
      <HandleIcon className="absolute -left-3 top-1/2 size-6 -translate-y-1/2 rotate-90" />
      <HandleIcon className="absolute -right-3 top-1/2 size-6 -translate-y-1/2 rotate-90" />
    </div>
  );
};

const HandleIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      width="14"
      height="5"
      viewBox="0 0 14 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="0.543457"
        y1="0.972656"
        x2="0.543457"
        y2="4.625"
        stroke="black"
        strokeOpacity="0.2"
      />
      <line
        x1="4.54346"
        y1="0.972656"
        x2="4.54346"
        y2="4.625"
        stroke="black"
        strokeOpacity="0.2"
      />
      <line
        x1="8.54346"
        y1="0.972656"
        x2="8.54346"
        y2="4.625"
        stroke="black"
        strokeOpacity="0.2"
      />
      <line
        x1="12.5435"
        y1="0.972656"
        x2="12.5435"
        y2="4.625"
        stroke="black"
        strokeOpacity="0.2"
      />
    </svg>
  );
};

// Below is the modified component from Magic UI
// Original source: https://magicui.design/docs/components/animated-beam
// Modified to follow our coding standards and design system
// We respect copyright and attribution to the original creators

export interface AnimatedBeamProps {
  className?: string;
  containerRef: RefObject<HTMLElement | null>; // Container ref
  fromRef: RefObject<HTMLElement | null>;
  toRef: RefObject<HTMLElement | null>;
  curvature?: number;
  reverse?: boolean;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  delay?: number;
  duration?: number;
  startXOffset?: number;
  startYOffset?: number;
  endXOffset?: number;
  endYOffset?: number;
  direction?: "horizontal" | "vertical";
}

export const AnimatedBeam: React.FC<AnimatedBeamProps> = ({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false, // Include the reverse prop
  duration = Math.random() * 3 + 4,
  delay = 0,
  pathColor = "gray",
  pathWidth = 2,
  pathOpacity = 0.2,
  gradientStartColor = "#ffaa40",
  gradientStopColor = "#9c40ff",
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
  direction = "horizontal",
}) => {
  const id = useId();
  const [pathD, setPathD] = useState("");
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });

  // Calculate the gradient coordinates based on the reverse prop
  const gradientCoordinates =
    direction === "vertical"
      ? reverse
        ? {
            x1: ["0%", "0%"],
            x2: ["0%", "0%"],
            y1: ["90%", "-10%"],
            y2: ["100%", "0%"],
          }
        : {
            x1: ["0%", "0%"],
            x2: ["0%", "0%"],
            y1: ["10%", "110%"],
            y2: ["0%", "100%"],
          }
      : reverse
        ? {
            // Horizontal (existing logic)
            x1: ["90%", "-10%"],
            x2: ["100%", "0%"],
            y1: ["0%", "0%"],
            y2: ["0%", "0%"],
          }
        : {
            x1: ["10%", "110%"],
            x2: ["0%", "100%"],
            y1: ["0%", "0%"],
            y2: ["0%", "0%"],
          };

  useEffect(() => {
    const updatePath = () => {
      if (containerRef.current && fromRef.current && toRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const rectA = fromRef.current.getBoundingClientRect();
        const rectB = toRef.current.getBoundingClientRect();

        const svgWidth = containerRect.width;
        const svgHeight = containerRect.height;
        setSvgDimensions({ width: svgWidth, height: svgHeight });

        const startX =
          rectA.left - containerRect.left + rectA.width / 2 + startXOffset;
        const startY =
          rectA.top - containerRect.top + rectA.height / 2 + startYOffset;
        const endX =
          rectB.left - containerRect.left + rectB.width / 2 + endXOffset;
        const endY =
          rectB.top - containerRect.top + rectB.height / 2 + endYOffset;

        const controlY = startY - curvature;
        const d = `M ${startX},${startY} Q ${
          (startX + endX) / 2
        },${controlY} ${endX},${endY}`;
        setPathD(d);
      }
    };

    // Initialize ResizeObserver
    const resizeObserver = new ResizeObserver((entries) => {
      // For all entries, recalculate the path
      for (const entry of entries) {
        updatePath();
      }
    });

    // Observe the container element
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // Call the updatePath initially to set the initial path
    updatePath();

    // Clean up the observer on component unmount
    return () => {
      resizeObserver.disconnect();
    };
  }, [
    containerRef,
    fromRef,
    toRef,
    curvature,
    startXOffset,
    startYOffset,
    endXOffset,
    endYOffset,
  ]);

  return (
    <svg
      fill="none"
      width={svgDimensions.width}
      height={svgDimensions.height}
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "pointer-events-none absolute top-0 left-0 transform-gpu stroke-2",
        className,
      )}
      viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
    >
      <path
        d={pathD}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        strokeLinecap="round"
      />
      <path
        d={pathD}
        strokeWidth={pathWidth}
        stroke={`url(#${id})`}
        strokeOpacity="1"
        strokeLinecap="round"
      />
      <defs>
        <motion.linearGradient
          className="transform-gpu"
          id={id}
          gradientUnits={"userSpaceOnUse"}
          initial={{
            x1: "0%",
            x2: "0%",
            y1: "0%",
            y2: "0%",
          }}
          animate={{
            x1: gradientCoordinates.x1,
            x2: gradientCoordinates.x2,
            y1: gradientCoordinates.y1,
            y2: gradientCoordinates.y2,
          }}
          transition={{
            delay,
            duration,
            ease: [0.16, 1, 0.3, 1],
            repeat: Infinity,
            repeatDelay: 0,
          }}
        >
          <stop stopColor={gradientStartColor} stopOpacity="0"></stop>
          <stop stopColor={gradientStartColor}></stop>
          <stop offset="32.5%" stopColor={gradientStopColor}></stop>
          <stop
            offset="100%"
            stopColor={gradientStopColor}
            stopOpacity="0"
          ></stop>
        </motion.linearGradient>
      </defs>
    </svg>
  );
};



Component Block

"use client";

import { Download } from "lucide-react";

import { cn } from "@/lib/utils";

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

interface LogoProps extends React.HTMLAttributes<HTMLAnchorElement> {
  url: string;
  className?: string;
  children: React.ReactNode;
}

interface LogoImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
}

interface LogoTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  className?: string;
}

interface LogoBrandDownloadProps {
  children: React.ReactNode;
  files: Array<{
    name: string;
    path: string;
    format: "svg" | "png" | "jpg" | "jpeg" | "webp";
  }>;
  className?: string;
}

const LogoBrandDownload = ({
  children,
  files,
  className,
}: LogoBrandDownloadProps) => {
  const handleDownload = async (file: LogoBrandDownloadProps["files"][0]) => {
    try {
      const response = await fetch(file.path);
      if (!response.ok) throw new Error(`Failed to fetch ${file.name}`);

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = file.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Failed to download file:", error);
    }
  };

  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <div className={cn("inline-block", className)}>{children}</div>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-48">
        {files.map((file) => (
          <ContextMenuItem
            key={file.path}
            onClick={() => handleDownload(file)}
            className="cursor-pointer"
          >
            <Download className="mr-2 h-4 w-4" />
            Download {file.format.toUpperCase()}
          </ContextMenuItem>
        ))}
      </ContextMenuContent>
    </ContextMenu>
  );
};

const Logo = ({ url, className, children, ...props }: LogoProps) => {
  return (
    <a
      href={url}
      className={cn("flex max-h-8 items-center gap-2", className)}
      {...props}
    >
      {children}
    </a>
  );
};

const LogoImage = ({ src, alt, className, ...props }: LogoImageProps) => (
  <img src={src} alt={alt} className={cn("block h-8", className)} {...props} />
);

const LogoImageMobile = ({ src, alt, className, ...props }: LogoImageProps) => (
  <img
    src={src}
    alt={alt}
    className={cn("flex h-8 md:hidden", className)}
    {...props}
  />
);

const LogoImageDesktop = ({
  src,
  alt,
  className,
  ...props
}: LogoImageProps) => (
  <img
    src={src}
    alt={alt}
    className={cn("hidden h-8 md:flex", className)}
    {...props}
  />
);

const LogoText = ({ children, className, ...props }: LogoTextProps) => (
  <span
    className={cn("text-lg font-semibold tracking-tighter", className)}
    {...props}
  >
    {children}
  </span>
);

const LogoTextMobile = ({ children, className, ...props }: LogoTextProps) => (
  <span
    className={cn(
      "text-lg font-semibold tracking-tighter md:hidden",
      className,
    )}
    {...props}
  >
    {children}
  </span>
);

const LogoTextDesktop = ({ children, className, ...props }: LogoTextProps) => (
  <span
    className={cn(
      "hidden text-lg font-semibold tracking-tighter md:flex",
      className,
    )}
    {...props}
  >
    {children}
  </span>
);

export {
  Logo,
  LogoBrandDownload,
  LogoImage,
  LogoImageDesktop,
  LogoImageMobile,
  LogoText,
  LogoTextDesktop,
  LogoTextMobile,
};



Cta Block

import { Play } from "lucide-react";

import { Button } from "@/components/ui/button";

const Cta18 = () => {
  return (
    <section className="py-32">
      <div className="container overflow-hidden">
        <div className="relative mx-auto flex max-w-7xl flex-col justify-between gap-6 overflow-hidden rounded-xl border bg-muted/50 md:flex-row">
          <div className="max-w-xl self-center p-6 md:p-12">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Explore Our Platform
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Discover the full potential of our platform. Try our interactive
              demo or watch a comprehensive walkthrough today.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button>Try Demo</Button>
              <Button variant="outline">
                Watch Video
                <Play className="ml-2" />
              </Button>
            </div>
          </div>
          <div className="relative ml-6 max-h-96 md:mt-8 md:ml-0">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-3.svg"
              alt="placeholder"
              className="absolute -bottom-12 left-4 h-48 -translate-x-1/2 -rotate-[120deg]"
            />
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
              alt="placeholder"
              className="z-10 aspect-video h-full w-full rounded-tl-xl border-t border-l object-cover pt-3.5 pl-3.5 backdrop-blur-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta18 };



📦 PRODUCT - Reporting Page
Hero Block

"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React from "react";

import { Particles } from "@/components/magicui/particles";
import { Button } from "@/components/ui/button";

const Hero218 = () => {
  return (
    <section className="py-32">
      <div className="container flex flex-col items-center justify-center gap-4 overflow-hidden">
        <p className="text-muted-foreground">
          Bridging Developers, Building the Future
        </p>
        <h1 className="realtive z-15 max-w-3xl text-center text-6xl font-medium tracking-tighter md:text-7xl">
          <span
            className="overflow-hidden"
            style={{
              transformStyle: "preserve-3d",
              perspective: "600px",
            }}
          >
            {"The only app you Need to Stay Productive"
              .split(" ")
              .map((word, i) => (
                <motion.span
                  className="relative inline-block px-[6px] leading-[none]"
                  key={i}
                  initial={{
                    opacity: 0,
                    y: "70%",
                    rotateX: "-28deg",
                  }}
                  animate={{
                    opacity: 1,
                    y: "0%",
                    rotateX: "0deg",
                  }}
                  transition={{
                    delay: i * 0.08 + 0.1,
                    duration: 0.8,
                    ease: [0.215, 0.61, 0.355, 1],
                  }}
                >
                  {word === "Productive" ? (
                    <span className="font-playfair italic">{word}</span>
                  ) : (
                    word
                  )}
                </motion.span>
              ))}
          </span>
        </h1>
        <Particles
          className="absolute inset-0 z-0"
          quantity={500}
          ease={80}
          color="#000000"
          refresh
        />

        <div className="h-92 -translate-y-15 relative w-full overflow-hidden">
          <div className="h-92 bg-background absolute z-10 w-full blur-xl" />
          <div className="z-13 h-92 -translate-y-62 bg-background absolute w-full blur-2xl" />

          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="z-12 absolute w-full overflow-hidden"
          >
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/green-shape.svg"
              className="h-215 -translate-y-90 -rotate-76 w-full"
              alt=""
            />
          </motion.div>
        </div>
        <Button
          variant="secondary"
          className="text-md -mt-15 group flex w-fit items-center justify-center gap-2 rounded-full px-4 py-1 tracking-tight"
        >
          Contact Us now
          <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
        </Button>
      </div>
    </section>
  );
};

export { Hero218 };



Stats Block

"use client";

import NumberFlow from "@number-flow/react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React, { useRef, useState } from "react";

import { Button } from "@/components/ui/button";

const Stats15 = () => {
  const ref = useRef(null);
  const IllustrationRef = useRef(null);
  const [selectedYear, setSelectedYear] = useState(2021);

  const Stats = {
    2021: {
      TotalRevenue: 12.3,
      TotalUsers: 0.3,
      CompanyGrowth: 300,
      NewCustomers: 100,
      BigCorpClients: 10,
      PathHeight: 0,
    },
    2022: {
      TotalRevenue: 105,
      TotalUsers: 50,
      CompanyGrowth: 30,
      NewCustomers: 1.5,
      BigCorpClients: 75,
      PathHeight: 55,
    },
    2023: {
      TotalRevenue: 250,
      TotalUsers: 120,
      CompanyGrowth: 45,
      NewCustomers: 2.8,
      BigCorpClients: 150,
      PathHeight: 105,
    },
    2024: {
      TotalRevenue: 500,
      TotalUsers: 300,
      CompanyGrowth: 65,
      NewCustomers: 4.2,
      BigCorpClients: 250,
      PathHeight: 160,
    },
  };

  const years = Object.keys(Stats).map(Number);

  return (
    <section className="py-32">
      <div className="container flex flex-col md:flex-row">
        <div className="z-10 md:flex-1">
          <h1 className="font-cal max-w-xl text-5xl font-medium tracking-tighter md:text-6xl">
            Numbers don&apos;t Lie
          </h1>
          <p className="mt-4 max-w-xl text-muted-foreground/80">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad,
            distinctio eius incidunt doloribus quam velit sint sed alias,
          </p>
          <div className="my-10 flex gap-4">
            <Button
              variant="secondary"
              className="group text-md flex w-fit items-center justify-center gap-2 rounded-full px-4 py-1 tracking-tight"
            >
              <span>Documentation</span>
              <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
            </Button>
            <Button
              variant="default"
              className="group text-md flex w-fit items-center justify-center gap-2 rounded-full px-4 py-1 tracking-tight"
            >
              <span>Get Started</span>
              <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
            </Button>
          </div>
          <div
            ref={ref}
            className="mt-12 flex max-w-3xl flex-col items-end bg-background md:mt-32 xl:bg-transparent"
          >
            <div className="mt-auto mb-10 grid w-full grid-cols-2 gap-4 md:grid-cols-4">
              <div className="w-full text-left">
                <h2 className="text-4xl font-medium lg:text-5xl">
                  <NumberFlow
                    value={Stats[selectedYear as keyof typeof Stats].TotalUsers}
                    suffix="k+"
                  />
                </h2>
                <p className="text-sm whitespace-pre text-muted-foreground/70">
                  {" "}
                  Team Members{" "}
                </p>
              </div>
              <div className="w-full text-left">
                <h2 className="text-4xl font-medium lg:text-5xl">
                  <NumberFlow
                    value={
                      Stats[selectedYear as keyof typeof Stats].CompanyGrowth
                    }
                    suffix="%"
                  />
                </h2>
                <p className="text-sm whitespace-pre text-muted-foreground/70">
                  {" "}
                  Company Growth{" "}
                </p>
              </div>
              <div className="w-full text-left">
                <h2 className="text-4xl font-medium lg:text-5xl">
                  <NumberFlow
                    value={
                      Stats[selectedYear as keyof typeof Stats].NewCustomers
                    }
                    suffix="M"
                  />
                </h2>
                <p className="text-sm whitespace-pre text-muted-foreground/70">
                  {" "}
                  New Customers{" "}
                </p>
              </div>
              <div ref={IllustrationRef} className="w-full text-left">
                <h2 className="text-4xl font-medium lg:text-5xl">
                  <NumberFlow
                    value={
                      Stats[selectedYear as keyof typeof Stats].BigCorpClients
                    }
                    prefix="~"
                    suffix="+"
                  />
                </h2>
                <p className="text-sm whitespace-pre text-muted-foreground/70">
                  {" "}
                  Revenue{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex w-fit flex-row flex-wrap gap-2 md:mt-42 md:flex-col">
          {years.map((year) => (
            <div key={year} className="group">
              <button
                onClick={() => setSelectedYear(year)}
                className={`relative rounded-full px-4 py-1 text-sm transition-all ease-out ${
                  selectedYear === year
                    ? "bg-primary text-primary-foreground md:-translate-x-8"
                    : "bg-muted/70 group-hover:-translate-x-4 group-hover:bg-muted"
                }`}
              >
                {year} - {year + 1}
              </button>
            </div>
          ))}
          <LinkIllustration
            className="absolute bottom-9 -left-14 hidden -translate-x-full -translate-y-full text-orange-500 md:block"
            PathHeight={Stats[selectedYear as keyof typeof Stats].PathHeight}
          />
        </div>
      </div>
    </section>
  );
};

export { Stats15 };

const LinkIllustration = ({ className = "", PathHeight = 0 }) => {
  return (
    <svg
      width="280"
      height="124"
      viewBox="0 0 412 178"
      overflow="visible"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1 }}
        key={PathHeight}
        d={`M408.308 ${PathHeight}H294L114.965 274H1`}
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <motion.path
        d={`M408.308 ${PathHeight}H294L114.965 274H1`}
        stroke="black"
        strokeWidth="1.5"
        opacity="0.1"
      />
      <circle cx="408.309" cy={PathHeight} r="5" fill="currentColor" />
      <circle cx="2" cy="274" r="5" fill="currentColor" />
    </svg>
  );
};



Feature Block

import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  ChartBarIcon,
  ChartNetwork,
  CheckCircle2,
  Clock,
  Cpu,
  DollarSign,
  LocateFixed,
  Server,
  Settings,
  UserIcon,
  Zap,
} from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

interface CardData {
  icon: React.ElementType;
  title: string;
  description: string;
  href: string;
  metrics: {
    value: string;
    label: string;
    trend: number;
    secondaryMetric?: {
      value: string;
      label: string;
    };
  };
  status: {
    label: "Active" | "In Progress" | "Optimizing";
    color: "text-green-500" | "text-yellow-500" | "text-blue-500";
    icon: LucideIcon;
    lastUpdated: string;
  };
  performance: {
    cpu: string;
    memory: string;
    latency: string;
  };
  deployment: {
    version: string;
    environment: "production" | "staging" | "development";
    region: string;
  };
}

const CARDS: CardData[] = [
  {
    icon: DollarSign,
    title: "Revenue Optimization",
    description:
      "AI-powered revenue optimization engine with real-time market analysis and dynamic pricing strategies.",
    href: "#revenue",
    metrics: {
      value: "99.9%",
      label: "Accuracy Rate",
      trend: 12.5,
      secondaryMetric: {
        value: "2.3ms",
        label: "Avg. Response Time",
      },
    },
    status: {
      label: "Active",
      color: "text-green-500",
      icon: CheckCircle2,
      lastUpdated: "2024-03-21T15:30:00Z",
    },
    performance: {
      cpu: "45%",
      memory: "2.8GB",
      latency: "120ms",
    },
    deployment: {
      version: "v2.3.4",
      environment: "production",
      region: "us-west-2",
    },
  },
  {
    icon: ChartBarIcon,
    title: "Performance Analytics",
    description:
      "Advanced analytics platform processing over 1M events per second with distributed computing.",
    href: "#analytics",
    metrics: {
      value: "1.2ms",
      label: "Response Time",
      trend: -8.3,
      secondaryMetric: {
        value: "850k",
        label: "Req/sec",
      },
    },
    status: {
      label: "Optimizing",
      color: "text-blue-500",
      icon: Zap,
      lastUpdated: "2024-03-21T15:28:00Z",
    },
    performance: {
      cpu: "78%",
      memory: "12.4GB",
      latency: "1.2ms",
    },
    deployment: {
      version: "v3.1.0",
      environment: "production",
      region: "eu-west-1",
    },
  },
  {
    icon: Settings,
    title: "System Architecture",
    description:
      "Cloud-native infrastructure with auto-scaling capabilities and multi-region deployment.",
    href: "#architecture",
    metrics: {
      value: "99.99%",
      label: "Uptime",
      trend: 2.1,
      secondaryMetric: {
        value: "12",
        label: "Active Regions",
      },
    },
    status: {
      label: "Active",
      color: "text-green-500",
      icon: CheckCircle2,
      lastUpdated: "2024-03-21T15:25:00Z",
    },
    performance: {
      cpu: "65%",
      memory: "32GB",
      latency: "85ms",
    },
    deployment: {
      version: "v2.8.1",
      environment: "production",
      region: "global",
    },
  },
  {
    icon: UserIcon,
    title: "User Authentication",
    description:
      "Zero-trust security model with biometric authentication and behavioral analysis.",
    href: "#security",
    metrics: {
      value: "0.001%",
      label: "False Positive Rate",
      trend: -15.7,
      secondaryMetric: {
        value: "50ms",
        label: "Auth Time",
      },
    },
    status: {
      label: "In Progress",
      color: "text-yellow-500",
      icon: Clock,
      lastUpdated: "2024-03-21T15:15:00Z",
    },
    performance: {
      cpu: "35%",
      memory: "4.2GB",
      latency: "50ms",
    },
    deployment: {
      version: "v1.9.3",
      environment: "staging",
      region: "us-east-1",
    },
  },
  {
    icon: ChartNetwork,
    title: "Network Intelligence",
    description:
      "Self-healing network infrastructure with predictive maintenance and anomaly detection.",
    href: "#network",
    metrics: {
      value: "500TB",
      label: "Daily Processing",
      trend: 25.4,
      secondaryMetric: {
        value: "99.999%",
        label: "Availability",
      },
    },
    status: {
      label: "Active",
      color: "text-green-500",
      icon: CheckCircle2,
      lastUpdated: "2024-03-21T15:29:00Z",
    },
    performance: {
      cpu: "82%",
      memory: "128GB",
      latency: "5ms",
    },
    deployment: {
      version: "v4.2.0",
      environment: "production",
      region: "multi-region",
    },
  },
  {
    icon: LocateFixed,
    title: "Location Services",
    description:
      "High-precision geolocation services with indoor mapping and spatial analytics.",
    href: "#location",
    metrics: {
      value: "±0.5m",
      label: "Accuracy",
      trend: 5.8,
      secondaryMetric: {
        value: "10M",
        label: "Daily Users",
      },
    },
    status: {
      label: "Optimizing",
      color: "text-blue-500",
      icon: Zap,
      lastUpdated: "2024-03-21T15:20:00Z",
    },
    performance: {
      cpu: "55%",
      memory: "16GB",
      latency: "150ms",
    },
    deployment: {
      version: "v2.4.5",
      environment: "production",
      region: "global",
    },
  },
];

const Feature237 = () => {
  return (
    <section className="bg-background py-32">
      <div className="container">
        <h1 className="mb-10 text-center text-3xl font-bold tracking-tighter text-foreground lg:text-6xl">
          System Capabilities
        </h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {CARDS.map((card, index) => (
            <a key={index} href={card.href} className="group block h-full">
              <div className="flex h-full flex-col rounded-xl border bg-card p-6 transition-all duration-200 hover:border-primary hover:shadow-lg">
                <div className="flex h-full flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl text-foreground transition-colors duration-200 group-hover:text-primary">
                          {card.title}
                        </h3>
                        <div className="flex items-center space-x-2">
                          <card.status.icon
                            className={cn("h-4 w-4", card.status.color)}
                          />
                          <span
                            className={cn(
                              "font-mono text-sm",
                              card.status.color,
                            )}
                          >
                            {card.status.label}
                          </span>
                          <span className="font-mono text-xs text-muted-foreground">
                            [
                            {new Date(
                              card.status.lastUpdated,
                            ).toLocaleTimeString()}
                            ]
                          </span>
                        </div>
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" />
                    </div>

                    <p className="mt-4 text-muted-foreground">
                      {card.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="font-mono text-xl font-bold">
                          {card.metrics.value}
                        </div>
                        <div className="font-mono text-sm text-muted-foreground">
                          {card.metrics.label}
                        </div>
                        <div
                          className={cn(
                            "font-mono text-sm",
                            card.metrics.trend > 0
                              ? "text-green-500"
                              : "text-red-500",
                          )}
                        >
                          {card.metrics.trend > 0 ? "+" : ""}
                          {card.metrics.trend}%
                        </div>
                      </div>
                      {card.metrics.secondaryMetric && (
                        <div>
                          <div className="font-mono text-xl font-bold">
                            {card.metrics.secondaryMetric.value}
                          </div>
                          <div className="font-mono text-sm text-muted-foreground">
                            {card.metrics.secondaryMetric.label}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="grid grid-cols-3 gap-2 border-t pt-4">
                      <div className="flex items-center space-x-2">
                        <Cpu className="h-4 w-4 text-muted-foreground" />
                        <span className="font-mono text-xs">
                          {card.performance.cpu}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Server className="h-4 w-4 text-muted-foreground" />
                        <span className="font-mono text-xs">
                          {card.performance.memory}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Zap className="h-4 w-4 text-muted-foreground" />
                        <span className="font-mono text-xs">
                          {card.performance.latency}
                        </span>
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex items-center space-x-2 font-mono text-xs text-muted-foreground">
                        <span>{card.deployment.version}</span>
                        <span>•</span>
                        <span className="uppercase">
                          {card.deployment.environment}
                        </span>
                        <span>•</span>
                        <span>{card.deployment.region}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature237 };



Cta Block

import { Play } from "lucide-react";

import { Button } from "@/components/ui/button";

const Cta18 = () => {
  return (
    <section className="py-32">
      <div className="container overflow-hidden">
        <div className="relative mx-auto flex max-w-7xl flex-col justify-between gap-6 overflow-hidden rounded-xl border bg-muted/50 md:flex-row">
          <div className="max-w-xl self-center p-6 md:p-12">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Explore Our Platform
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Discover the full potential of our platform. Try our interactive
              demo or watch a comprehensive walkthrough today.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button>Try Demo</Button>
              <Button variant="outline">
                Watch Video
                <Play className="ml-2" />
              </Button>
            </div>
          </div>
          <div className="relative ml-6 max-h-96 md:mt-8 md:ml-0">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-3.svg"
              alt="placeholder"
              className="absolute -bottom-12 left-4 h-48 -translate-x-1/2 -rotate-[120deg]"
            />
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
              alt="placeholder"
              className="z-10 aspect-video h-full w-full rounded-tl-xl border-t border-l object-cover pt-3.5 pl-3.5 backdrop-blur-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta18 };




🎯 SOLUTIONS - Restaurants Page
Hero Block

"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowRight,
  Calendar,
  Route,
  Text,
  Waypoints,
  Workflow,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TAB_LIST = [
  {
    icon: Calendar,
    title: "Scheduling",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  {
    icon: Route,
    title: "Routing",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
  },
  {
    icon: Workflow,
    title: "Workflows",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
  },
  {
    icon: Text,
    title: "Forms",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
  },
  {
    icon: Waypoints,
    title: "Enrichment",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-5.svg",
  },
];

const formSchema = z
  .object({
    email: z.string().email({
      message: "Invalid email address",
    }),
  })
  .required({ email: true });

const HeroForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="w-full">
                  <div className="relative flex w-full flex-col gap-2 lg:block">
                    <Input
                      {...field}
                      type="email"
                      id="emailInput"
                      placeholder="What’s your work email?"
                      className="bg-background h-fit py-4 pl-5 pr-5 lg:pr-[13.75rem]"
                    />
                    <div className="right-2.5 top-1/2 lg:absolute lg:-translate-y-1/2">
                      <Button
                        type="submit"
                        className="w-full rounded-full lg:w-fit"
                      >
                        See Default in action
                        <ArrowRight />
                      </Button>
                    </div>
                  </div>
                  <FormMessage className="py-1" />
                </div>
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

const Hero196 = () => {
  return (
    <section className="bg-muted bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/dot-pattern-2.svg')] bg-[length:3.125rem_3.125rem] bg-repeat py-20">
      <div className="container">
        <div className="flex w-full flex-col gap-14">
          <div className="flex w-full max-w-[80rem] flex-col items-center gap-6">
            <Badge
              asChild
              variant="outline"
              className="bg-background px-3! gap-2.5 rounded-full py-1.5 text-sm font-medium leading-[1.2]"
            >
              <a href="#">
                Introducing version 2.0!
                <ArrowRight className="size-base" />
              </a>
            </Badge>
            <h1 className="text-center text-[2.5rem] font-bold leading-[.97] sm:text-[3.5rem] md:text-[4rem]">
              Transform inbound with smarter routing, actionable insights, and
              fast scheduling
            </h1>
            <div className="flex w-full max-w-[36rem] flex-col items-center justify-center gap-6 pt-5">
              <p className="text-foreground text-center text-[1.25rem] font-medium leading-snug">
                Drive scalable growth with a single platform that automates
                scheduling, routing, enrichment, and intent workflows.
              </p>
              <div className="w-full max-w-[30rem]">
                <HeroForm />
              </div>
            </div>
          </div>
          <div>
            <Tabs
              defaultValue={TAB_LIST[0].title}
              className="bg-background w-full max-w-[85rem] gap-5 rounded-3xl p-2.5"
            >
              <TabsList className="bg-muted flex h-fit w-full max-w-fit items-start justify-start gap-2.5 overflow-auto rounded-2xl p-2.5 md:mx-auto md:items-center md:justify-center">
                {TAB_LIST.map((trigger, i) => (
                  <TabsTrigger
                    className="fshrink-0 bg-background px-5 py-2.5"
                    key={`tab-trigger-${i}`}
                    value={trigger.title}
                  >
                    <trigger.icon />
                    {trigger.title}
                  </TabsTrigger>
                ))}
              </TabsList>
              {TAB_LIST.map((content, i) => (
                <TabsContent key={`tab-content-${i}`} value={content.title}>
                  <div className="aspect-[1.696202532] w-full overflow-hidden rounded-3xl">
                    <img
                      src={content.image}
                      alt=""
                      className="block size-full object-cover object-center"
                    />
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero196 };



Feature Block

"use client";
import {
  AudioLines,
  Captions,
  Eye,
  Languages,
  ListMinus,
  LucideIcon,
  ScanFace,
  TextQuote,
} from "lucide-react";
import { useRef } from "react";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface card {
  video: string;
  Icon: LucideIcon;
  title: string;
  link: string;
  summary: string;
}

const List: Array<card> = [
  {
    video: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/video-1.mp4",
    Icon: Eye,
    title: "Visual Design System",
    link: "#",
    summary:
      "Consistent, beautiful components built with a cohesive design language that scales across your entire application.",
  },
  {
    video: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/video-2.mp4",
    Icon: Languages,
    title: "Framework Agnostic",
    link: "#",
    summary:
      "Use with React, Vue, Angular, or vanilla JavaScript. One library that works everywhere you need it.",
  },
  {
    video: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/video-3.mp4",
    Icon: AudioLines,
    title: "Interactive Components",
    link: "#",
    summary:
      "Rich interactions and smooth animations built-in. From subtle hover effects to complex state transitions.",
  },
  {
    video: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/video-4.mp4",
    Icon: ListMinus,
    title: "Minimal Setup",
    link: "#",
    summary:
      "Get started in minutes with zero configuration. Clean, semantic code that doesn't bloat your bundle size.",
  },
  {
    video: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/video-5.mp4",
    Icon: ScanFace,
    title: "Accessibility First",
    link: "#",
    summary:
      "WCAG compliant components with full keyboard navigation, screen reader support, and focus management.",
  },
  {
    video: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/video-6.mp4",
    Icon: TextQuote,
    title: "Complete Documentation",
    link: "#",
    summary:
      "Comprehensive guides, live examples, and API references. Everything you need to build with confidence.",
  },
  {
    video: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/video-6.mp4",
    Icon: Captions,
    title: "TypeScript Native",
    link: "#",
    summary:
      "Built with TypeScript from the ground up. Full type safety, autocomplete, and IntelliSense support.",
  },
];

const CarouselCard = ({ video, Icon, title, link, summary }: card) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  return (
    <a
      href={link}
      className="group block h-full"
      onMouseEnter={() => {
        if (videoRef.current) {
          videoRef.current.play();
        }
      }}
      onMouseLeave={() => {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }}
    >
      <Card className="bg-muted h-full min-h-[24rem] p-8 shadow-none transition-all group-hover:shadow-md">
        <CardContent className="p-0">
          <div className="relative">
            <AspectRatio
              ratio={16 / 9}
              className="overflow-hidden rounded-[0.5rem]"
            >
              <video
                src={video}
                className="block size-full object-cover object-center"
                ref={videoRef}
                controls={false}
                muted={true}
              />
            </AspectRatio>
            <div className="bg-primary absolute -left-2 -top-3 flex size-9 rounded-[0.5rem]">
              <Icon className="stroke-primary-foreground m-auto size-4" />
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-2">
            <CardTitle className="text-foreground text-xl font-normal leading-[130%] tracking-[-0.48px]">
              {title}
            </CardTitle>
            <CardDescription className="text-sm leading-[150%] tracking-[-0.36px]">
              {summary}
            </CardDescription>
          </div>
        </CardContent>
      </Card>
    </a>
  );
};
const Feature215 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto mb-16 flex max-w-[47.5rem] flex-col gap-6">
          <h2 className="text-center text-4xl font-semibold xl:text-6xl">
            Fully Editable Components
          </h2>
          <p className="text-muted-foreground text-center text-xl">
            A comprehensive component library designed for modern web
            development. Ship beautiful, accessible interfaces in record time
            with our battle-tested components.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent className="py-4">
            {List.map((item, index) => (
              <CarouselItem
                key={index}
                className="basis-full md:basis-1/2 lg:basis-1/3"
              >
                <CarouselCard {...item} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-8 flex w-full justify-center gap-4">
            <CarouselPrevious className="static size-12" />
            <CarouselNext className="static size-12" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export { Feature215 };



Testimonial Block

import { Sparkle } from "lucide-react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";

const Testimonial20 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="relative grid border border-dashed md:grid-cols-2">
          <div className="border-dashed px-6 py-12 md:border-r md:px-12 md:py-16">
            <p className="mb-6 text-center font-medium md:text-xl">
              “The platform has exceeded our expectations in every way. The
              implementation was smooth and
              <strong className="ml-1 font-bold">
                the results are outstanding!”
              </strong>
            </p>
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
              <Avatar className="size-14 rounded-full border">
                <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp" />
              </Avatar>
              <p className="text-center font-medium md:text-left">
                Sarah Mitchell, Director of Operations
              </p>
            </div>
          </div>
          <div className="px-6 py-12 text-center md:px-12 md:py-16">
            <p className="mb-6 text-center font-medium md:text-xl">
              “The team delivered
              <strong className="mx-1 font-bold">exceptional quality</strong>
              throughout the entire process. The support has been remarkable at
              every step.”
            </p>
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
              <Avatar className="size-14 rounded-full border">
                <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp" />
              </Avatar>
              <p className="text-center font-medium md:text-left">
                Michael Chen, Technical Lead
              </p>
            </div>
          </div>
          <Sparkle
            strokeWidth={1}
            className="absolute -top-[9px] -left-[9px] size-4 fill-primary"
          />
          <Sparkle
            strokeWidth={1}
            className="absolute -top-2 -right-2 size-4 fill-primary"
          />
          <Sparkle
            strokeWidth={1}
            className="absolute -right-2 -bottom-2 size-4 fill-primary"
          />
          <Sparkle
            strokeWidth={1}
            className="absolute -bottom-2 -left-2 size-4 fill-primary"
          />
        </div>
      </div>
    </section>
  );
};

export { Testimonial20 };



Stats Block

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const statsData = [
  {
    logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-1.svg",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
    avatarFallback: "",
    heading: "89%",
    text: "Stop spending on ads with zero conversions",
  },
  {
    logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    avatarFallback: "",
    heading: "7 HRS",
    text: "Daily savings on ad management",
  },
  {
    logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
    avatarFallback: "",
    heading: "2,540%",
    text: "Growth in overall client ad investment",
  },
];

const Stats10 = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container max-w-[75rem]">
        <div className="pt-10 pb-10">
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {statsData.map(
              ({ logo, avatar, avatarFallback, heading, text }, i) => (
                <a href="#" key={`link${i}`} className="block w-full">
                  <Card className="rounded-3xl border-2 p-10 transition hover:-translate-y-3 hover:border-primary">
                    <CardContent className="block p-0">
                      <div className="flex items-center gap-7">
                        <Avatar className="h-14 w-14 overflow-hidden rounded-full border">
                          <AvatarImage src={avatar} alt="" />
                          <AvatarFallback>{avatarFallback}</AvatarFallback>
                        </Avatar>
                        <img src={logo} alt="" className="h-6" />
                      </div>
                      <div className="mt-6 text-6xl leading-tight font-semibold">
                        {heading}
                      </div>
                      <p className="mb-5 max-w-52 text-lg font-medium">
                        {text}
                      </p>
                    </CardContent>
                  </Card>
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Stats10 };



Cta Block

import { Button } from "@/components/ui/button";

const Cta17 = () => {
  return (
    <section className="py-32">
      <div className="flex items-center justify-center border bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/circles.svg')] bg-cover bg-center py-20 text-center md:p-20">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-4 text-balance text-3xl font-semibold md:text-5xl">
              Start building your websites faster
            </h1>
            <p className="md:text-lg">
              Try our tools and services to build your website faster. Start
              with a 14-day free trial. No credit card required. No setup fees.
              Cancel anytime.
            </p>
            <div className="mt-11 flex flex-col justify-center gap-2 sm:flex-row">
              <Button size="lg">Get Started</Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta17 };



🎯 SOLUTIONS - Bars & Nightlife Page
Hero Block

"use client";

import {
  BarChart,
  Database,
  Layers,
  PieChart,
  SquareKanban,
} from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { BorderBeam } from "@/components/magicui/border-beam";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export interface Tab {
  title: string;
  icon: React.ReactNode;
  image: string;
}

export interface Hero195Props {
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText?: string;
  primaryButtonUrl: string;
  secondaryButtonUrl?: string;
  tabs?: Tab[];
}

const defaultTabs: Tab[] = [
  {
    title: "Insights",
    icon: <SquareKanban />,
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/dashboard/admin-dashboard-1.png",
  },
  {
    title: "Metrics",
    icon: <BarChart />,
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/dashboard/admin-dashboard-2.png",
  },
  {
    title: "Trends",
    icon: <PieChart />,
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/dashboard/admin-dashboard-3.png",
  },
  {
    title: "Sources",
    icon: <Database />,
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/dashboard/admin-users.png",
  },
  {
    title: "Models",
    icon: <Layers />,
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/dashboard/admin-developer.png",
  },
];

const Hero195 = ({
  title = "Beautiful blocks for Shadcn UI.",
  description = "Shadcnblocks.com offers the best collection of components and blocks for shadcn/ui.",
  primaryButtonText = "Download",
  primaryButtonUrl = "https://shadcnblocks.com",
  secondaryButtonUrl,
  secondaryButtonText,
  tabs = defaultTabs,
}: Hero195Props) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.title || "");

  return (
    <section className="overflow-hidden">
      <div className="container">
        <div className="border-border border-x py-20">
          <div className="relative mx-auto max-w-2xl p-2">
            <h1 className="mx-1 mt-6 text-center text-5xl font-bold tracking-tighter md:text-7xl">
              {title}
            </h1>
            <p className="text-muted-foreground mx-2 mt-6 max-w-xl text-center text-lg font-medium md:text-xl">
              {description}
            </p>
            <div className="mx-2 mt-6 flex justify-center gap-2">
              <Button asChild>
                <a href={primaryButtonUrl}>{primaryButtonText}</a>
              </Button>
              {secondaryButtonText && (
                <Button variant="outline" asChild>
                  <a href={secondaryButtonUrl}>{secondaryButtonText}</a>
                </Button>
              )}
            </div>
          </div>
          <div className="mt-16 md:mt-20">
            <Tabs defaultValue={tabs[0]?.title} onValueChange={setActiveTab}>
              <div className="px-2">
                <TabsList className="mx-auto mb-6 flex h-auto w-fit max-w-xs flex-wrap justify-center gap-2 md:max-w-none">
                  {tabs.map((tab) => (
                    <TabsTrigger
                      key={tab.title}
                      value={tab.title}
                      className="text-muted-foreground font-normal"
                    >
                      {tab.icon}
                      {tab.title}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              <div className="relative isolate">
                <div className="relative z-10">
                  {tabs.map((tab) => (
                    <TabsContent
                      key={tab.title}
                      value={tab.title}
                      className={cn(
                        "bg-background -mx-px transition-opacity duration-500",
                        {
                          "animate-in fade-in opacity-100":
                            activeTab === tab.title,
                          "opacity-0": activeTab !== tab.title,
                        },
                      )}
                    >
                      <img
                        src={tab.image}
                        alt={tab.title}
                        className="border-border aspect-[16/10] w-full border object-top shadow-[0_6px_20px_rgb(0,0,0,0.12)]"
                      />
                      <BorderBeam duration={8} size={100} />
                    </TabsContent>
                  ))}
                </div>
                <span className="-inset-x-1/5 bg-border absolute top-0 -z-10 h-px [mask-image:linear-gradient(to_right,transparent_1%,black_10%,black_90%,transparent_99%)]"></span>
                <span className="-inset-x-1/5 bg-border absolute bottom-0 -z-10 h-px [mask-image:linear-gradient(to_right,transparent_1%,black_10%,black_90%,transparent_99%)]"></span>

                <span className="-inset-x-1/5 border-border absolute top-12 h-px border-t border-dashed [mask-image:linear-gradient(to_right,transparent_1%,black_10%,black_90%,transparent_99%)]"></span>
                <span className="-inset-x-1/5 border-border absolute bottom-12 h-px border-t border-dashed [mask-image:linear-gradient(to_right,transparent_1%,black_10%,black_90%,transparent_99%)]"></span>

                <span className="-inset-y-1/5 left-1/6 border-border absolute w-px border-r border-dashed [mask-image:linear-gradient(to_bottom,transparent_1%,black_10%,black_90%,transparent_99%)]"></span>
                <span className="-inset-y-1/5 right-1/6 border-border absolute w-px border-r border-dashed [mask-image:linear-gradient(to_bottom,transparent_1%,black_10%,black_90%,transparent_99%)]"></span>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero195 };



Feature Block

"use client";

import { ChevronRight, Plus } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Feature242 = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const testimonials = [
    {
      title: "Just Copy Paste Shadcn Blocks",
      imgSrc:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/illustrations/tokyo-exchange-between-the-user-and-the-global-network.svg",
      href: "#",
    },
    {
      title: "Build Modern UI/UX",
      imgSrc:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/illustrations/tokyo-letters-and-arrows-flying-out-of-a-black-hole.svg",
      href: "#",
    },
    {
      title: "Streamline Your Workflow",
      imgSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/illustrations/tokyo-loading-the-next-page.svg",
      href: "#",
    },
    {
      title: "Collaborate Effectively",
      imgSrc:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/illustrations/tokyo-many-browser-windows-with-different-information.svg",
      href: "#",
    },
  ];

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(testimonials.length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api, testimonials.length]);

  return (
    <section className="overflow-hidden py-32">
      <div className="container relative flex flex-col items-center md:px-0 lg:pt-8">
        <div className="relative z-10 w-full items-center justify-between lg:flex">
          <h1 className="max-w-2xl text-5xl font-semibold tracking-tighter md:text-7xl">
            Made for modern UI/UX teams
          </h1>
          <p className="text-muted-foreground/80 mt-8 max-w-lg tracking-tight md:text-xl lg:mt-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.{" "}
            <span className="text-foreground group inline-flex cursor-pointer items-center font-medium transition-all ease-in-out">
              Read more here{" "}
              <ChevronRight
                size={17}
                className="ml-1 mt-px transition-all ease-in-out group-hover:ml-2"
              />{" "}
            </span>
          </p>
        </div>
        <DottedDiv className="mt-8 flex w-full items-center justify-center px-2 py-10">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
            setApi={setApi}
          >
            <CarouselContent className="m-0 flex w-full">
              {testimonials.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="px-2 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="bg-muted group relative flex h-full max-h-96 w-full flex-col items-end justify-between text-ellipsis rounded-3xl p-5">
                    <img
                      className="max-h-72 w-full opacity-100 transition-all ease-in-out group-hover:scale-90 group-hover:opacity-60"
                      src={item.imgSrc}
                      alt={item.title}
                    />
                    <div className="flex w-full items-center justify-between gap-4">
                      <h5 className="text-2xl font-medium leading-7 tracking-tighter transition-all ease-in-out group-hover:translate-x-4">
                        {item.title}
                      </h5>
                      <a
                        href={item.href}
                        className="relative z-10 cursor-pointer"
                      >
                        <Button
                          variant="outline"
                          className="hover:bg-muted h-12 w-12 rounded-full bg-transparent transition-all ease-in-out"
                        >
                          <Plus className="scale-150" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="mt-8 flex w-full items-center justify-between px-4">
              <div className="flex items-center gap-2">
                <span className="text-lg font-medium">
                  {current.toString().padStart(2, "0")}
                </span>
                <span className="text-muted-foreground">/</span>
                <span className="text-muted-foreground">
                  {count.toString().padStart(2, "0")}
                </span>
              </div>

              <div className="relative mr-10 flex gap-2">
                <CarouselPrevious className="h-10 w-10" />
                <CarouselNext variant="default" className="h-10 w-10" />
              </div>
            </div>
          </Carousel>
        </DottedDiv>
      </div>
    </section>
  );
};

export { Feature242 };

const DottedDiv = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("relative", className)}>
    <div className="bg-muted absolute -left-[12.5px] top-4 h-[1.5px] w-[110%] md:-left-20" />
    <div className="bg-muted absolute -left-[12.5px] bottom-4 h-[1.5px] w-[110%] md:-left-20" />
    <div className="bg-muted absolute -top-4 left-0 h-[110%] w-[1.5px]" />
    <div className="bg-muted absolute -top-4 right-0 h-[110%] w-[1.5px]" />
    <div className="bg-foreground absolute left-[-3px] top-[12.5px] z-10 h-2 w-2 rounded-full" />
    <div className="bg-foreground absolute right-[-3px] top-[12.5px] z-10 h-2 w-2 rounded-full" />
    <div className="bg-foreground absolute bottom-[12.5px] left-[-3px] z-10 h-2 w-2 rounded-full" />
    <div className="bg-foreground absolute bottom-[12.5px] right-[-3px] z-10 h-2 w-2 rounded-full" />
    {children}
  </div>
);



Testimonial Block

import { Sparkle } from "lucide-react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";

const Testimonial20 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="relative grid border border-dashed md:grid-cols-2">
          <div className="border-dashed px-6 py-12 md:border-r md:px-12 md:py-16">
            <p className="mb-6 text-center font-medium md:text-xl">
              “The platform has exceeded our expectations in every way. The
              implementation was smooth and
              <strong className="ml-1 font-bold">
                the results are outstanding!”
              </strong>
            </p>
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
              <Avatar className="size-14 rounded-full border">
                <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp" />
              </Avatar>
              <p className="text-center font-medium md:text-left">
                Sarah Mitchell, Director of Operations
              </p>
            </div>
          </div>
          <div className="px-6 py-12 text-center md:px-12 md:py-16">
            <p className="mb-6 text-center font-medium md:text-xl">
              “The team delivered
              <strong className="mx-1 font-bold">exceptional quality</strong>
              throughout the entire process. The support has been remarkable at
              every step.”
            </p>
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
              <Avatar className="size-14 rounded-full border">
                <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp" />
              </Avatar>
              <p className="text-center font-medium md:text-left">
                Michael Chen, Technical Lead
              </p>
            </div>
          </div>
          <Sparkle
            strokeWidth={1}
            className="absolute -top-[9px] -left-[9px] size-4 fill-primary"
          />
          <Sparkle
            strokeWidth={1}
            className="absolute -top-2 -right-2 size-4 fill-primary"
          />
          <Sparkle
            strokeWidth={1}
            className="absolute -right-2 -bottom-2 size-4 fill-primary"
          />
          <Sparkle
            strokeWidth={1}
            className="absolute -bottom-2 -left-2 size-4 fill-primary"
          />
        </div>
      </div>
    </section>
  );
};

export { Testimonial20 };



Cta Block

import { Button } from "@/components/ui/button";

const Cta17 = () => {
  return (
    <section className="py-32">
      <div className="flex items-center justify-center border bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/circles.svg')] bg-cover bg-center py-20 text-center md:p-20">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-4 text-balance text-3xl font-semibold md:text-5xl">
              Start building your websites faster
            </h1>
            <p className="md:text-lg">
              Try our tools and services to build your website faster. Start
              with a 14-day free trial. No credit card required. No setup fees.
              Cancel anytime.
            </p>
            <div className="mt-11 flex flex-col justify-center gap-2 sm:flex-row">
              <Button size="lg">Get Started</Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta17 };



🎯 SOLUTIONS - Coffee Shops Page
Hero Block

"use client";

import {
  ChevronLeft,
  ChevronRight,
  Copy,
  Plus,
  RotateCw,
  Share,
} from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const Hero206 = () => {
  return (
    <section className="bg-background">
      <div className="container relative py-32">
        <header className="mx-auto max-w-3xl text-center">
          <h1 className="font-anton text-foreground text-5xl font-semibold tracking-tight md:text-7xl">
            Shadcn Blocks <br /> Just Copy/Paste.
          </h1>
          <p className="text-muted-foreground my-7 max-w-3xl tracking-tight md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipiasicing elit.Lorem ipsum
            dolor sit amet consectetur Lorem
          </p>
        </header>

        <Badge
          variant="outline"
          className="mx-auto mt-10 flex w-fit cursor-pointer items-center justify-center rounded-full border py-1 pl-2 pr-3 font-normal transition-all ease-in-out hover:gap-3"
        >
          <Avatar className="relative -mr-5 overflow-hidden rounded-full border md:size-10">
            <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp" alt="" />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <Avatar className="relative -mr-5 overflow-hidden rounded-full border md:size-10">
            <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp" alt="" />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <Avatar className="relative -mr-5 overflow-hidden rounded-full border md:size-10">
            <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-6.webp" alt="" />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <p className="ml-6 capitalize tracking-tight md:text-lg">
            {" "}
            Trusted by <span className="text-foreground font-bold">
              10k+
            </span>{" "}
            users.
          </p>
        </Badge>

        <div className="relative mt-12 flex h-full w-full flex-col items-center justify-center">
          <BrowserMockup
            className="w-full"
            url="https://shadcnblocks.com/block/hero206"
            DahboardUrlDesktop="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/dashboard/dashboard-1.png"
            DahboardUrlMobile="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/dashboard/dashboard-mobile-1.png"
          />
          <div className="bg-linear-to-t absolute bottom-0 h-2/3 w-full from-white to-transparent" />
        </div>
      </div>
    </section>
  );
};

export { Hero206 };

const BrowserMockup = ({
  className = "",
  url = "https://shadcnblocks.com/block/hero206",
  DahboardUrlDesktop = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/dashboard/dashboard-1.png",
  DahboardUrlMobile = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/dashboard/dashboard-mobile-1.png",
}) => (
  <div
    className={cn(
      "rounded-4xl relative w-full overflow-hidden border",
      className,
    )}
  >
    <div className="bg-muted lg:gap-25 flex items-center justify-between gap-10 px-8 py-4">
      <div className="flex items-center gap-2">
        <div className="size-3 rounded-full bg-red-500" />
        <div className="size-3 rounded-full bg-yellow-500" />
        <div className="size-3 rounded-full bg-green-500" />
        <div className="ml-6 hidden items-center gap-2 opacity-40 lg:flex">
          <ChevronLeft className="size-5" />
          <ChevronRight className="size-5" />
        </div>
      </div>
      <div className="flex w-full items-center justify-center">
        <p className="bg-background relative hidden w-full rounded-full px-4 py-1 text-center text-sm tracking-tight md:block">
          {url}
          <RotateCw className="absolute right-3 top-2 size-3.5" />
        </p>
      </div>

      <div className="flex items-center gap-4 opacity-40">
        <Share className="size-4" />
        <Plus className="size-4" />
        <Copy className="size-4" />
      </div>
    </div>

    <div className="relative w-full">
      <img
        src={DahboardUrlDesktop}
        alt=""
        className="object-cove hidden aspect-video h-full w-full object-top md:block"
      />
      <img
        src={DahboardUrlMobile}
        alt=""
        className="block h-full w-full object-cover md:hidden"
      />
    </div>
    <div className="bg-muted absolute bottom-0 z-10 flex w-full items-center justify-center py-3 md:hidden">
      <p className="relative flex items-center gap-2 rounded-full px-8 py-1 text-center text-sm tracking-tight">
        {url}
      </p>
    </div>
  </div>
);



Feature Block

import { CircleCheckBig } from "lucide-react";

const Feature227 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="mb-5 text-5xl font-medium text-balance lg:text-7xl">
              Transform an Idea into Reality
            </h2>
            <p className="mb-12 text-lg text-muted-foreground">
              Unleash your creativity and break through barriers. Our platform
              brings all your ideas together in one intuitive workspace.
              Eliminate creative blocks and empower your team to imagine,
              design, and deliver.
            </p>
            <ul className="grid max-w-xl gap-5 sm:grid-cols-2">
              <li className="flex items-center gap-1.5">
                <CircleCheckBig className="size-5 shrink-0" />
                <p className="text-sm font-medium">Advanced Design Templates</p>
              </li>
              <li className="flex items-center gap-1.5">
                <CircleCheckBig className="size-5 shrink-0" />
                <p className="text-sm font-medium">Collaborative Editing</p>
              </li>
              <li className="flex items-center gap-1.5">
                <CircleCheckBig className="size-5 shrink-0" />
                <p className="text-sm font-medium">Resource Libraries</p>
              </li>
              <li className="flex items-center gap-1.5">
                <CircleCheckBig className="size-5 shrink-0" />
                <p className="text-sm font-medium">Real-time Feedback Tools</p>
              </li>
              <li className="flex items-center gap-1.5">
                <CircleCheckBig className="size-5 shrink-0" />
                <p className="text-sm font-medium">Custom Asset Export</p>
              </li>
              <li className="flex items-center gap-1.5">
                <CircleCheckBig className="size-5 shrink-0" />
                <p className="text-sm font-medium">Version History</p>
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-t from-background to-transparent to-30%" />
            <div className="absolute inset-0 bg-linear-to-l from-background to-transparent to-30%" />
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
              alt="placeholder"
              className="max-h-[500px] w-full rounded-2xl border border-border object-cover lg:max-h-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature227 };



Testimonial Block

import { Sparkle } from "lucide-react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";

const Testimonial20 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="relative grid border border-dashed md:grid-cols-2">
          <div className="border-dashed px-6 py-12 md:border-r md:px-12 md:py-16">
            <p className="mb-6 text-center font-medium md:text-xl">
              “The platform has exceeded our expectations in every way. The
              implementation was smooth and
              <strong className="ml-1 font-bold">
                the results are outstanding!”
              </strong>
            </p>
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
              <Avatar className="size-14 rounded-full border">
                <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp" />
              </Avatar>
              <p className="text-center font-medium md:text-left">
                Sarah Mitchell, Director of Operations
              </p>
            </div>
          </div>
          <div className="px-6 py-12 text-center md:px-12 md:py-16">
            <p className="mb-6 text-center font-medium md:text-xl">
              “The team delivered
              <strong className="mx-1 font-bold">exceptional quality</strong>
              throughout the entire process. The support has been remarkable at
              every step.”
            </p>
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
              <Avatar className="size-14 rounded-full border">
                <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp" />
              </Avatar>
              <p className="text-center font-medium md:text-left">
                Michael Chen, Technical Lead
              </p>
            </div>
          </div>
          <Sparkle
            strokeWidth={1}
            className="absolute -top-[9px] -left-[9px] size-4 fill-primary"
          />
          <Sparkle
            strokeWidth={1}
            className="absolute -top-2 -right-2 size-4 fill-primary"
          />
          <Sparkle
            strokeWidth={1}
            className="absolute -right-2 -bottom-2 size-4 fill-primary"
          />
          <Sparkle
            strokeWidth={1}
            className="absolute -bottom-2 -left-2 size-4 fill-primary"
          />
        </div>
      </div>
    </section>
  );
};

export { Testimonial20 };



Cta Block

import { Button } from "@/components/ui/button";

const Cta17 = () => {
  return (
    <section className="py-32">
      <div className="flex items-center justify-center border bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/circles.svg')] bg-cover bg-center py-20 text-center md:p-20">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-4 text-balance text-3xl font-semibold md:text-5xl">
              Start building your websites faster
            </h1>
            <p className="md:text-lg">
              Try our tools and services to build your website faster. Start
              with a 14-day free trial. No credit card required. No setup fees.
              Cancel anytime.
            </p>
            <div className="mt-11 flex flex-col justify-center gap-2 sm:flex-row">
              <Button size="lg">Get Started</Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta17 };



🎯 SOLUTIONS - Hotels Page
Hero Block

"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowRight,
  Calendar,
  Route,
  Text,
  Waypoints,
  Workflow,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TAB_LIST = [
  {
    icon: Calendar,
    title: "Scheduling",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  {
    icon: Route,
    title: "Routing",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
  },
  {
    icon: Workflow,
    title: "Workflows",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
  },
  {
    icon: Text,
    title: "Forms",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
  },
  {
    icon: Waypoints,
    title: "Enrichment",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-5.svg",
  },
];

const formSchema = z
  .object({
    email: z.string().email({
      message: "Invalid email address",
    }),
  })
  .required({ email: true });

const HeroForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="w-full">
                  <div className="relative flex w-full flex-col gap-2 lg:block">
                    <Input
                      {...field}
                      type="email"
                      id="emailInput"
                      placeholder="What’s your work email?"
                      className="bg-background h-fit py-4 pl-5 pr-5 lg:pr-[13.75rem]"
                    />
                    <div className="right-2.5 top-1/2 lg:absolute lg:-translate-y-1/2">
                      <Button
                        type="submit"
                        className="w-full rounded-full lg:w-fit"
                      >
                        See Default in action
                        <ArrowRight />
                      </Button>
                    </div>
                  </div>
                  <FormMessage className="py-1" />
                </div>
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

const Hero196 = () => {
  return (
    <section className="bg-muted bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/dot-pattern-2.svg')] bg-[length:3.125rem_3.125rem] bg-repeat py-20">
      <div className="container">
        <div className="flex w-full flex-col gap-14">
          <div className="flex w-full max-w-[80rem] flex-col items-center gap-6">
            <Badge
              asChild
              variant="outline"
              className="bg-background px-3! gap-2.5 rounded-full py-1.5 text-sm font-medium leading-[1.2]"
            >
              <a href="#">
                Introducing version 2.0!
                <ArrowRight className="size-base" />
              </a>
            </Badge>
            <h1 className="text-center text-[2.5rem] font-bold leading-[.97] sm:text-[3.5rem] md:text-[4rem]">
              Transform inbound with smarter routing, actionable insights, and
              fast scheduling
            </h1>
            <div className="flex w-full max-w-[36rem] flex-col items-center justify-center gap-6 pt-5">
              <p className="text-foreground text-center text-[1.25rem] font-medium leading-snug">
                Drive scalable growth with a single platform that automates
                scheduling, routing, enrichment, and intent workflows.
              </p>
              <div className="w-full max-w-[30rem]">
                <HeroForm />
              </div>
            </div>
          </div>
          <div>
            <Tabs
              defaultValue={TAB_LIST[0].title}
              className="bg-background w-full max-w-[85rem] gap-5 rounded-3xl p-2.5"
            >
              <TabsList className="bg-muted flex h-fit w-full max-w-fit items-start justify-start gap-2.5 overflow-auto rounded-2xl p-2.5 md:mx-auto md:items-center md:justify-center">
                {TAB_LIST.map((trigger, i) => (
                  <TabsTrigger
                    className="fshrink-0 bg-background px-5 py-2.5"
                    key={`tab-trigger-${i}`}
                    value={trigger.title}
                  >
                    <trigger.icon />
                    {trigger.title}
                  </TabsTrigger>
                ))}
              </TabsList>
              {TAB_LIST.map((content, i) => (
                <TabsContent key={`tab-content-${i}`} value={content.title}>
                  <div className="aspect-[1.696202532] w-full overflow-hidden rounded-3xl">
                    <img
                      src={content.image}
                      alt=""
                      className="block size-full object-cover object-center"
                    />
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero196 };



Feature Block

import { ScrollableTabsList } from "@/components/shadcnblocks/scrollable-tabslist";
import { ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Feature205 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <Tabs
          defaultValue="efficiency"
          className="rounded-4xl border-border grid grid-cols-1 gap-8 border p-4 lg:grid-cols-2 lg:p-8 xl:gap-20"
        >
          <div className="flex flex-col-reverse justify-between gap-8 lg:flex-col">
            <div>
              <TabsContent
                value="efficiency"
                className="animate-in fade-in flex flex-col gap-6 duration-300"
              >
                <span className="text-muted-foreground text-xs uppercase">
                  Efficiency
                </span>
                <div className="flex flex-col gap-4">
                  <h2 className="text-3xl font-medium">
                    Streamline. Automate. Focus.
                  </h2>
                  <p className="text-muted-foreground">
                    Our AI-powered workspace eliminates repetitive tasks and
                    centralizes your workflow. Spend time on what matters.
                  </p>
                </div>
              </TabsContent>
              <TabsContent
                value="collaboration"
                className="animate-in fade-in flex flex-col gap-6 duration-300"
              >
                <span className="text-muted-foreground text-xs uppercase">
                  Collaboration
                </span>
                <div className="flex flex-col gap-4">
                  <h2 className="text-3xl font-medium">
                    Connect. Create. Collaborate.
                  </h2>
                  <p className="text-muted-foreground">
                    Real-time editing and seamless sharing keep your team in
                    sync. Communication tools built right into your workspace.
                  </p>
                </div>
              </TabsContent>
              <TabsContent
                value="insights"
                className="animate-in fade-in flex flex-col gap-6 duration-300"
              >
                <span className="text-muted-foreground text-xs uppercase">
                  Insights
                </span>
                <div className="flex flex-col gap-4">
                  <h2 className="text-3xl font-medium">
                    Track. Analyze. Optimize.
                  </h2>
                  <p className="text-muted-foreground">
                    Our analytics dashboard visualizes productivity patterns and
                    identifies bottlenecks and areas for improvement.
                  </p>
                </div>
              </TabsContent>
            </div>
            <ScrollableTabsList>
              <TabsList className="mx-auto h-12 rounded-full p-2 lg:mx-0">
                <TabsTrigger
                  value="efficiency"
                  className="h-full rounded-full px-4 py-2"
                >
                  Efficiency
                </TabsTrigger>
                <TabsTrigger
                  value="collaboration"
                  className="h-full rounded-full px-4 py-2"
                >
                  Collaboration
                </TabsTrigger>
                <TabsTrigger
                  value="insights"
                  className="h-full rounded-full px-4 py-2"
                >
                  Insights
                </TabsTrigger>
              </TabsList>
              <ScrollBar orientation="horizontal" className="h-2" />
            </ScrollableTabsList>
          </div>
          <div>
            <TabsContent
              value="efficiency"
              className="animate-in fade-in duration-300"
            >
              <div className="relative">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/annie-spratt-hCb3lIB8L8E-unsplash.jpg"
                  alt="placeholder"
                  className="h-[440px] w-full rounded-3xl object-cover lg:h-[540px]"
                />
                <div className="from-primary/80 absolute inset-0 rounded-3xl bg-gradient-to-tr via-transparent to-transparent" />
                <div className="text-background absolute bottom-0 left-0 flex flex-col justify-center gap-8 p-6">
                  <div className="flex flex-col gap-1.5">
                    <p className="text-4xl font-medium lg:text-5xl">40%</p>
                    <p className="font-medium">less time on admin tasks</p>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <p className="text-4xl font-medium lg:text-5xl">$720</p>
                    <p className="font-medium">saved per employee monthly</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="collaboration"
              className="animate-in fade-in duration-300"
            >
              <div className="relative">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/annie-spratt-MChSQHxGZrQ-unsplash.jpg"
                  alt="placeholder"
                  className="h-[440px] w-full rounded-3xl object-cover lg:h-[540px]"
                />
                <div className="from-primary/80 absolute inset-0 rounded-3xl bg-gradient-to-tr via-transparent to-transparent" />
                <div className="text-background absolute bottom-0 left-0 flex flex-col justify-center gap-8 p-6">
                  <div className="flex flex-col gap-1.5">
                    <p className="text-4xl font-medium lg:text-5xl">3x</p>
                    <p className="font-medium">faster project completion</p>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <p className="text-4xl font-medium lg:text-5xl">87%</p>
                    <p className="font-medium">increase in team engagement</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="insights"
              className="animate-in fade-in duration-300"
            >
              <div className="relative">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/annie-spratt-AkftcHujUmk-unsplash.jpg"
                  alt="placeholder"
                  className="h-[440px] w-full rounded-3xl object-cover lg:h-[540px]"
                />
                <div className="from-primary/80 absolute inset-0 rounded-3xl bg-gradient-to-tr via-transparent to-transparent" />
                <div className="text-background absolute bottom-0 left-0 flex flex-col justify-center gap-8 p-6">
                  <div className="flex flex-col gap-1.5">
                    <p className="text-4xl font-medium lg:text-5xl">65%</p>
                    <p className="font-medium">better resource allocation</p>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <p className="text-4xl font-medium lg:text-5xl">28%</p>
                    <p className="font-medium">increased productivity</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export { Feature205 };



Testimonial Block

import { Sparkle } from "lucide-react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";

const Testimonial20 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="relative grid border border-dashed md:grid-cols-2">
          <div className="border-dashed px-6 py-12 md:border-r md:px-12 md:py-16">
            <p className="mb-6 text-center font-medium md:text-xl">
              “The platform has exceeded our expectations in every way. The
              implementation was smooth and
              <strong className="ml-1 font-bold">
                the results are outstanding!”
              </strong>
            </p>
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
              <Avatar className="size-14 rounded-full border">
                <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp" />
              </Avatar>
              <p className="text-center font-medium md:text-left">
                Sarah Mitchell, Director of Operations
              </p>
            </div>
          </div>
          <div className="px-6 py-12 text-center md:px-12 md:py-16">
            <p className="mb-6 text-center font-medium md:text-xl">
              “The team delivered
              <strong className="mx-1 font-bold">exceptional quality</strong>
              throughout the entire process. The support has been remarkable at
              every step.”
            </p>
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
              <Avatar className="size-14 rounded-full border">
                <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp" />
              </Avatar>
              <p className="text-center font-medium md:text-left">
                Michael Chen, Technical Lead
              </p>
            </div>
          </div>
          <Sparkle
            strokeWidth={1}
            className="absolute -top-[9px] -left-[9px] size-4 fill-primary"
          />
          <Sparkle
            strokeWidth={1}
            className="absolute -top-2 -right-2 size-4 fill-primary"
          />
          <Sparkle
            strokeWidth={1}
            className="absolute -right-2 -bottom-2 size-4 fill-primary"
          />
          <Sparkle
            strokeWidth={1}
            className="absolute -bottom-2 -left-2 size-4 fill-primary"
          />
        </div>
      </div>
    </section>
  );
};

export { Testimonial20 };



Cta Block

import { Button } from "@/components/ui/button";

const Cta17 = () => {
  return (
    <section className="py-32">
      <div className="flex items-center justify-center border bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/circles.svg')] bg-cover bg-center py-20 text-center md:p-20">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-4 text-balance text-3xl font-semibold md:text-5xl">
              Start building your websites faster
            </h1>
            <p className="md:text-lg">
              Try our tools and services to build your website faster. Start
              with a 14-day free trial. No credit card required. No setup fees.
              Cancel anytime.
            </p>
            <div className="mt-11 flex flex-col justify-center gap-2 sm:flex-row">
              <Button size="lg">Get Started</Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta17 };



🎯 SOLUTIONS - Restaurant Owners Page
Hero Block

"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircleCheck } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z
  .object({
    email: z.string().email({ message: "Invalid email address" }),
  })
  .required({ email: true });

function HeroFrom() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="flex flex-col justify-center gap-3 md:flex-row">
          <div className="w-full">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      id="emailInput"
                      placeholder="Enter your mail"
                      className="block h-fit w-full rounded-full px-6 py-3 placeholder:text-black/60 focus:outline-none sm:py-5"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="shrink-0">
            <Button
              type="submit"
              className="h-fit w-full rounded-full px-6 py-3 text-base font-semibold sm:py-5 md:w-fit"
            >
              Get Started Free
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}

const Hero111 = () => {
  return (
    <section className="bg-muted py-12 font-sans md:py-20">
      <div className="container max-w-[80.5rem]">
        <div className="mx-auto flex max-w-[24.375rem] flex-col items-center justify-center gap-8 sm:max-w-[31.25rem] md:max-w-[37.5rem] xl:max-w-[43.125rem]">
          <div className="flex flex-col items-center justify-center gap-5">
            <h1 className="font-outfit text-center text-3xl leading-tight font-medium text-primary sm:text-4xl md:text-5xl xl:text-6xl">
              HR Management with advanced Hiring process
            </h1>
            <p className="text-center text-lg text-primary/80">
              Simplify HR tasks and empower your team with our solution. Easily
              manage employee data and more—all from a single, centralized
              platform.
            </p>
          </div>
          <div className="w-full max-w-[32.5rem]">
            <HeroFrom />
          </div>
          <div className="flex w-full flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-3">
              <div className="relative h-6 w-6 shrink-0">
                <CircleCheck className="absolute top-1/2 left-1/2 m-auto h-[108%] w-[108%] -translate-x-1/2 -translate-y-1/2 stroke-primary" />
              </div>
              <p className="text-base text-muted-foreground">
                No Credit Card Required
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative h-6 w-6 shrink-0">
                <CircleCheck className="absolute top-1/2 left-1/2 m-auto h-[108%] w-[108%] -translate-x-1/2 -translate-y-1/2 stroke-primary" />
              </div>
              <p className="text-base text-muted-foreground">Cancel Anytime</p>
            </div>
          </div>
        </div>
        <div className="mt-20 mb-20 flex w-full items-start justify-between md:mt-28">
          <div className="border-muted2 w-[41.4%] overflow-hidden rounded-lg">
            <AspectRatio ratio={1.28627451 / 1}>
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
                alt=""
                className="h-full w-full object-cover"
              />
            </AspectRatio>
          </div>
          <div className="border-muted2 w-[23.98%] overflow-hidden rounded-lg">
            <AspectRatio ratio={0.745098039 / 1}>
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-2.svg"
                alt=""
                className="h-full w-full object-cover"
              />
            </AspectRatio>
          </div>
          <div className="border-muted2 w-[32.82%] overflow-hidden rounded-lg">
            <AspectRatio ratio={1.019607843 / 1}>
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-3.svg"
                alt=""
                className="h-full w-full object-cover"
              />
            </AspectRatio>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-10">
          <p className="text-center text-lg text-muted-foreground">
            Trusted by 7+ million people at companies like
          </p>
          <div className="grid grid-cols-3 grid-rows-2 flex-wrap justify-between gap-8 md:grid-cols-6 md:grid-rows-1">
            {Array(6)
              .fill(null)
              .map((_, i) => (
                <div className="h-9" key={`logos-${i}`}>
                  <img
                    src={`/images/block/logos/company/fictional-company-logo-${++i}.svg`}
                    alt=""
                    className="h-full w-full object-contain object-center"
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero111 };


Feature Block

import { Cog, Gem, Landmark, LocateFixed } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

import { Card, CardContent } from "@/components/ui/card";

type Step = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const Feature243 = () => {
  const steps: Step[] = [
    {
      title: "Initialization",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      icon: (
        <LocateFixed className="size-10 stroke-white transition-all ease-in-out group-hover:rotate-90" />
      ),
    },
    {
      title: "Optimization",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      icon: (
        <Cog className="size-10 stroke-white transition-all ease-in-out group-hover:rotate-90" />
      ),
    },
    {
      title: "Efficiency",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      icon: (
        <Gem className="size-10 stroke-white transition-all ease-in-out group-hover:size-12" />
      ),
    },
    {
      title: "Finalization",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      icon: (
        <Landmark className="size-10 stroke-white transition-all ease-in-out group-hover:size-12" />
      ),
    },
  ];

  return (
    <section className="bg-background">
      <div className="container py-32">
        <header className="bg-background relative z-10 flex flex-col items-center justify-center gap-6 text-center">
          <h1 className="text-foreground text-5xl font-bold tracking-tighter lg:text-6xl">
            From Input to Outcome
          </h1>

          <p className="text-muted-foreground mb-4 mt-2 max-w-xl text-lg md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipiasicing elit.Lorem ipsum
            dolor sit amet consectetur
          </p>
        </header>

        <div className="gap-18 sm:mt-68 mt-24 flex flex-wrap items-center justify-center sm:gap-6">
          <div className="h-55 bg-muted lg:h-58 absolute left-1/2 top-40 w-0.5 rounded-full" />
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex w-fit flex-col items-center"
            >
              <div
                className={cn(
                  "bg-muted absolute -top-[174px] left-1/2 h-0.5 w-[109%] rounded-full",
                  index == 3 ? "hidden" : "",
                  index == 2 ? "hidden 2xl:block" : "",
                  index == 1 ? "hidden lg:block" : "",
                  index == 0 ? "hidden sm:block" : "",
                )}
              />
              <div className="bg-muted absolute -top-[174px] left-1/2 h-full w-0.5 rounded-full" />
              <div className="bg-background relative z-10 flex h-8 w-5 items-center justify-center rounded-full p-1 pb-5">
                <div className="bg-foreground relative z-10 size-3 rounded-full" />
              </div>

              <Card className="rounded-4xl bg-muted group relative z-10 h-full w-full overflow-hidden border-none shadow-none sm:w-64 md:w-72">
                <CardContent className="flex h-full flex-col items-center gap-5 p-0 pb-5 pt-10">
                  <div className="bg-foreground flex size-20 items-center justify-center rounded-3xl">
                    {step.icon}
                  </div>

                  <div className="flex w-full flex-col items-center gap-4 px-4 pb-3 pt-5">
                    <h3 className="text-foreground w-full text-center text-3xl font-semibold tracking-tighter">
                      {step.title}
                    </h3>

                    <p className="text-muted-foreground/70 w-full max-w-sm text-center font-medium">
                      {step.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature243 };



Testimonial Block

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";

const Testimonial12 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="relative rounded-2xl bg-muted">
          <Carousel className="static">
            <CarouselContent className="-ml-4">
              <CarouselItem className="grid grid-cols-1 gap-y-10 pt-4 pr-4 pb-14 pl-8 sm:pt-8 lg:grid-cols-3 lg:gap-10 lg:p-20">
                <div>
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
                    alt="placeholder"
                    className="mx-auto max-h-80 rounded-xl lg:mx-0 lg:max-h-none"
                  />
                  <div className="mt-4 text-center">
                    <h3 className="font-semibold">John Doe</h3>
                    <p className="text-muted-foreground">CEO, Company Name</p>
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="mb-6 flex items-center justify-center gap-2 lg:mb-8 lg:justify-start">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/nike-icon.svg"
                      alt="logo"
                      className="h-auto w-7 lg:w-11"
                    />
                    <span className="text-xl font-semibold lg:text-3xl">
                      Company Name
                    </span>
                  </div>
                  <p className="text-center text-xl font-semibold lg:text-left lg:text-2xl">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua”
                  </p>
                  <Separator className="my-8 lg:my-10" />
                  <div className="grid justify-center gap-10 text-center md:grid-cols-2 lg:justify-start lg:text-left">
                    <div className="flex flex-col">
                      <span className="mb-4 text-4xl font-semibold md:text-6xl">
                        2.2x
                      </span>
                      <span className="font-medium">Monthly Active Users</span>
                      <span className="text-muted-foreground">
                        Since last month
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="mb-4 text-4xl font-semibold md:text-6xl">
                        256%
                      </span>
                      <span className="font-medium">Increase in Revenue</span>
                      <span className="text-muted-foreground">
                        Since last year
                      </span>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="grid grid-cols-1 gap-y-10 pt-4 pr-4 pb-14 pl-8 sm:pt-8 lg:grid-cols-3 lg:gap-10 lg:p-20">
                <div>
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-2.svg"
                    alt="placeholder"
                    className="mx-auto max-h-80 rounded-xl lg:mx-0 lg:max-h-none"
                  />
                  <div className="mt-4 text-center">
                    <h3 className="font-semibold">Jane Doe</h3>
                    <p className="text-muted-foreground">CTO, Company 2</p>
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="mb-6 flex items-center justify-center gap-2 lg:mb-8 lg:justify-start">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/slack-icon.svg"
                      alt="logo"
                      className="h-auto w-5 lg:mr-1 lg:w-9"
                    />
                    <span className="text-xl font-semibold lg:text-3xl">
                      Company Name
                    </span>
                  </div>
                  <p className="text-center text-xl font-semibold lg:text-left lg:text-2xl">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua”
                  </p>
                  <Separator className="my-8 lg:my-10" />
                  <div className="grid justify-center gap-10 text-center md:grid-cols-2 lg:justify-start lg:text-left">
                    <div className="flex flex-col">
                      <span className="mb-4 text-4xl font-semibold md:text-6xl">
                        1.5x
                      </span>
                      <span className="font-medium">Monthly Active Users</span>
                      <span className="text-muted-foreground">
                        Since last month
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="mb-4 text-4xl font-semibold md:text-6xl">
                        150%
                      </span>
                      <span className="font-medium">Increase in Revenue</span>
                      <span className="text-muted-foreground">
                        Since last year
                      </span>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <div className="absolute right-6 bottom-6 z-10 lg:right-10 lg:bottom-10">
              <div className="relative flex items-center gap-4">
                <CarouselPrevious className="static translate-y-0" />
                <CarouselNext className="static translate-y-0" />
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export { Testimonial12 };



Cta Block

import { Button } from "@/components/ui/button";

const Cta17 = () => {
  return (
    <section className="py-32">
      <div className="flex items-center justify-center border bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/circles.svg')] bg-cover bg-center py-20 text-center md:p-20">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-4 text-balance text-3xl font-semibold md:text-5xl">
              Start building your websites faster
            </h1>
            <p className="md:text-lg">
              Try our tools and services to build your website faster. Start
              with a 14-day free trial. No credit card required. No setup fees.
              Cancel anytime.
            </p>
            <div className="mt-11 flex flex-col justify-center gap-2 sm:flex-row">
              <Button size="lg">Get Started</Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta17 };



🎯 SOLUTIONS - Operations Managers Page
Hero Block

"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const Hero183 = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="overflow-hidden py-32">
      <div className="container">
        <div className="mx-auto max-w-5xl text-center">
          <Badge variant="outline">Premium</Badge>
          <h1 className="mt-6 text-4xl font-bold md:text-6xl">
            Your Ultimate Business Solution.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground md:text-xl lg:px-32">
            Transform your business operations with our cutting-edge solutions
            designed to streamline workflows and boost team efficiency.
          </p>
          <div className="mt-8 flex justify-center gap-2">
            <Button size="lg">Get started</Button>
            <Button variant="outline" size="lg">
              Learn more
            </Button>
          </div>
        </div>
        <div className="relative mx-10 mt-16 hidden md:block">
          <div className="absolute top-0 -right-20 -left-20 z-10 h-px bg-[linear-gradient(to_right,transparent,hsl(var(--border))_4%,hsl(var(--border))_96%,transparent)]"></div>
          <div className="absolute -right-20 bottom-0 -left-20 z-10 h-px bg-[linear-gradient(to_right,transparent,hsl(var(--border))_4%,hsl(var(--border))_96%,transparent)]"></div>
          <div className="relative grid grid-cols-7 grid-rows-11 gap-4 lg:gap-6">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
              alt="placeholder"
              className="col-span-2 row-span-4 row-start-2 aspect-video h-full rounded-lg border border-border object-cover"
            />
            <div className="col-span-3 col-start-3 row-span-full m-px rounded-lg bg-muted p-2.5">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
                alt="placeholder"
                className="aspect-video h-full rounded-lg border border-border object-cover"
              />
            </div>
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg"
              alt="placeholder"
              className="col-span-2 row-span-5 row-start-2 aspect-video h-full rounded-lg border border-border object-cover"
            />
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg"
              alt="placeholder"
              className="col-span-2 row-span-5 aspect-video h-full rounded-lg border border-border object-cover"
            />
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-5.svg"
              alt="placeholder"
              className="col-span-2 row-span-4 aspect-video h-full rounded-lg border border-border object-cover"
            />
            <div className="absolute -top-[10%] -bottom-[10%] col-start-3 row-span-full row-start-1 w-px bg-[linear-gradient(to_bottom,transparent,hsl(var(--border))_5%,hsl(var(--border))_95%,transparent)]"></div>
            <div className="absolute -top-[10%] -bottom-[10%] -left-[17px] col-start-6 row-span-full row-start-1 w-px bg-[linear-gradient(to_bottom,transparent,hsl(var(--border))_5%,hsl(var(--border))_95%,transparent)] lg:-left-[25px]"></div>
          </div>
          <div className="absolute -top-full -bottom-1/2 -left-6 w-px bg-linear-to-b from-transparent via-border via-60% to-transparent"></div>
          <div className="absolute -top-full -right-6 -bottom-1/2 w-px bg-linear-to-b from-transparent via-border via-60% to-transparent"></div>
        </div>
        <div className="mt-16 md:hidden">
          <Carousel setApi={setApi} className="mx-auto max-w-md">
            <CarouselContent className="max-h-full">
              <CarouselItem>
                <div className="flex flex-col gap-3">
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
                    alt="placeholder"
                    className="aspect-video rounded-lg border border-border object-cover"
                  />
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg"
                    alt="placeholder"
                    className="aspect-4/3 rounded-lg border border-border object-cover"
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                  alt="placeholder"
                  className="h-full rounded-lg border border-border object-cover"
                />
              </CarouselItem>
              <CarouselItem>
                <div className="flex flex-col gap-3">
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg"
                    alt="placeholder"
                    className="aspect-4/3 rounded-lg border border-border object-cover"
                  />
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-5.svg"
                    alt="placeholder"
                    className="aspect-video rounded-lg border border-border object-cover"
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
            <div className="mt-6 flex justify-center">
              {Array.from({ length: 3 }).map((_, index) => (
                <span
                  key={index}
                  className={cn(
                    "mx-1.5 inline-block size-2 cursor-pointer rounded-full bg-muted-foreground/20 transition-colors duration-300",
                    index + 1 === current && "bg-muted-foreground/60",
                  )}
                  onClick={() => api && api.scrollTo(index)}
                />
              ))}
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export { Hero183 };



Feature Block

"use client";

import {
  ArrowUp,
  ArrowUpRight,
  ChartCandlestick,
  ChartNoAxesColumnIncreasing,
  Share,
  X,
} from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";

const chartData = [
  { month: "January", desktop: 40, mobile: 30 },
  { month: "February", desktop: 60, mobile: 30 },
  { month: "March", desktop: 70, mobile: 35 },
  { month: "April", desktop: 50, mobile: 25 },
  { month: "May", desktop: 40, mobile: 20 },
  { month: "June", desktop: 30, mobile: 15 },
  { month: "March", desktop: 70, mobile: 35 },
  { month: "April", desktop: 50, mobile: 25 },
  { month: "May", desktop: 40, mobile: 20 },
  { month: "June", desktop: 30, mobile: 15 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
  },
  mobile: {
    label: "Mobile",
  },
} satisfies ChartConfig;

const Feature176 = () => {
  return (
    <section className="relative py-32">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_0.5px,transparent_0.5px)] [background-size:16px_16px] opacity-20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(var(--background))_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--muted-foreground)/10)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted-foreground)/10)_1px,transparent_1px)] [mask-image:radial-gradient(circle_at_center,transparent_50%,hsl(var(--background))_100%)] bg-[size:32px_32px] opacity-20"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Left Side */}
          <div className="flex h-fit flex-col gap-4 rounded-lg bg-background/50 p-4">
            <div className="flex flex-row items-center gap-x-2 rounded-lg border bg-card p-4 shadow-sm">
              <ChartNoAxesColumnIncreasing className="size-6" />
              <h1 className="truncate text-xl font-bold sm:text-2xl">
                Analytics Snapshot
              </h1>
              <span className="ml-auto shrink-0 font-mono text-sm text-muted-foreground uppercase">
                Data/logs/3201927
              </span>
            </div>

            {/* Middle: Evaluation */}
            <div className="rounded-lg border bg-card p-4 shadow-sm">
              <div className="flex flex-row items-center">
                <h1>Evaluation</h1>
                <Badge className="ml-auto bg-green-300 text-green-600 hover:bg-green-300/80">
                  False Positive
                </Badge>
              </div>
              <div className="my-4">
                <span className="text-xs text-muted-foreground">
                  Recent performance evaluation shows significant improvement in
                  code quality and project delivery times. Consistently meets
                  deadlines and demonstrates strong problem-solving skills.
                  Recommended for consideration in upcoming team lead positions.
                </span>
              </div>
              <div className="flex flex-row items-center">
                <h1>Key Skills</h1>
              </div>
              <div className="my-4 flex flex-row items-center space-x-3">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">TypeScript</Badge>
              </div>
              <div>
                <div className="flex flex-row items-center">
                  <h1>True Positive Score</h1>
                  <Progress
                    value={60}
                    className="ml-auto max-w-32 rounded-sm"
                  />
                </div>

                <div className="my-4 space-y-2">
                  <Skeleton className="h-1 w-full" />
                  <Skeleton className="h-1 w-full" />
                  <Skeleton className="h-1 w-full" />
                </div>
              </div>
              <div className="mt-12 mb-4 flex items-center justify-between bg-card">
                <div className="space-x-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-success text-success hover:bg-success/10"
                  >
                    False Positive
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-destructive text-destructive hover:bg-destructive/10 hover:text-red-600"
                  >
                    True Positive
                  </Button>
                </div>

                <div className="flex space-x-2">
                  <Button size="icon" variant="outline" className="size-8">
                    <X className="size-4" />
                  </Button>
                  <Button size="icon" variant="outline" className="size-8">
                    <Share className="size-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div>
            <div className="mt-24 flex flex-col gap-4 rounded-lg bg-background/50 p-4">
              <div className="flex flex-row items-center gap-x-2 rounded-lg border bg-card p-4 shadow-sm">
                <ChartNoAxesColumnIncreasing className="size-6" />
                <h1 className="truncate text-xl font-bold sm:text-2xl">
                  Data Metrics
                </h1>
                <span className="ml-auto shrink-0 font-mono text-sm text-muted-foreground uppercase">
                  Data/logs/182620
                </span>
              </div>

              {/* Chart Section */}
              <Card>
                <CardHeader className="flex flex-row items-center">
                  <CardTitle className="text-xl">Monthly Performance</CardTitle>
                  <CardDescription className="ml-auto">
                    <Badge className="bg-green-300 text-green-600 hover:bg-green-300/80">
                      Last 6 Months
                    </Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={chartConfig}
                    className="h-[196px] w-full"
                  >
                    <BarChart accessibilityLayer data={chartData}>
                      <CartesianGrid vertical={false} />
                      <XAxis
                        dataKey="month"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => value.slice(0, 3)}
                      />
                      <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent indicator="dashed" />}
                      />
                      <Bar dataKey="desktop" radius={4} />
                      <Bar dataKey="mobile" radius={4} />
                    </BarChart>
                  </ChartContainer>
                </CardContent>
              </Card>

              {/* Analytics Cards */}
              <div className="mt-4 flex flex-col rounded-lg border bg-background/50 p-4 shadow-sm">
                <div className="flex flex-row items-center">
                  <ChartCandlestick className="size-6 text-foreground/60" />
                  <span className="ml-4 text-sm text-muted-foreground">
                    Shadcnblocks.com Stats
                  </span>
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  {/* Card 1 */}
                  <div className="rounded-lg border bg-card p-4 shadow-sm">
                    <div className="flex items-start justify-between">
                      <h2 className="text-3xl font-bold">2.5K</h2>
                      <ArrowUpRight className="text-success size-6" />
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Active Users
                    </p>
                  </div>

                  {/* Card 2 */}
                  <div className="rounded-lg border bg-card p-4 shadow-sm">
                    <div className="flex items-start justify-between">
                      <h2 className="text-3xl font-bold">$8.1K</h2>
                      <ArrowUpRight className="text-success size-6" />
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Monthly Revenue
                    </p>
                  </div>

                  {/* Card 3 */}
                  <div className="rounded-lg border bg-card p-4 shadow-sm">
                    <div className="flex items-start justify-between">
                      <h2 className="text-3xl font-bold">92%</h2>
                      <ArrowUp className="text-success size-6" />
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Customer Satisfaction
                    </p>
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

export { Feature176 };



Testimonial Block

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";

const Testimonial12 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="relative rounded-2xl bg-muted">
          <Carousel className="static">
            <CarouselContent className="-ml-4">
              <CarouselItem className="grid grid-cols-1 gap-y-10 pt-4 pr-4 pb-14 pl-8 sm:pt-8 lg:grid-cols-3 lg:gap-10 lg:p-20">
                <div>
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
                    alt="placeholder"
                    className="mx-auto max-h-80 rounded-xl lg:mx-0 lg:max-h-none"
                  />
                  <div className="mt-4 text-center">
                    <h3 className="font-semibold">John Doe</h3>
                    <p className="text-muted-foreground">CEO, Company Name</p>
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="mb-6 flex items-center justify-center gap-2 lg:mb-8 lg:justify-start">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/nike-icon.svg"
                      alt="logo"
                      className="h-auto w-7 lg:w-11"
                    />
                    <span className="text-xl font-semibold lg:text-3xl">
                      Company Name
                    </span>
                  </div>
                  <p className="text-center text-xl font-semibold lg:text-left lg:text-2xl">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua”
                  </p>
                  <Separator className="my-8 lg:my-10" />
                  <div className="grid justify-center gap-10 text-center md:grid-cols-2 lg:justify-start lg:text-left">
                    <div className="flex flex-col">
                      <span className="mb-4 text-4xl font-semibold md:text-6xl">
                        2.2x
                      </span>
                      <span className="font-medium">Monthly Active Users</span>
                      <span className="text-muted-foreground">
                        Since last month
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="mb-4 text-4xl font-semibold md:text-6xl">
                        256%
                      </span>
                      <span className="font-medium">Increase in Revenue</span>
                      <span className="text-muted-foreground">
                        Since last year
                      </span>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="grid grid-cols-1 gap-y-10 pt-4 pr-4 pb-14 pl-8 sm:pt-8 lg:grid-cols-3 lg:gap-10 lg:p-20">
                <div>
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-2.svg"
                    alt="placeholder"
                    className="mx-auto max-h-80 rounded-xl lg:mx-0 lg:max-h-none"
                  />
                  <div className="mt-4 text-center">
                    <h3 className="font-semibold">Jane Doe</h3>
                    <p className="text-muted-foreground">CTO, Company 2</p>
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="mb-6 flex items-center justify-center gap-2 lg:mb-8 lg:justify-start">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/slack-icon.svg"
                      alt="logo"
                      className="h-auto w-5 lg:mr-1 lg:w-9"
                    />
                    <span className="text-xl font-semibold lg:text-3xl">
                      Company Name
                    </span>
                  </div>
                  <p className="text-center text-xl font-semibold lg:text-left lg:text-2xl">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua”
                  </p>
                  <Separator className="my-8 lg:my-10" />
                  <div className="grid justify-center gap-10 text-center md:grid-cols-2 lg:justify-start lg:text-left">
                    <div className="flex flex-col">
                      <span className="mb-4 text-4xl font-semibold md:text-6xl">
                        1.5x
                      </span>
                      <span className="font-medium">Monthly Active Users</span>
                      <span className="text-muted-foreground">
                        Since last month
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="mb-4 text-4xl font-semibold md:text-6xl">
                        150%
                      </span>
                      <span className="font-medium">Increase in Revenue</span>
                      <span className="text-muted-foreground">
                        Since last year
                      </span>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <div className="absolute right-6 bottom-6 z-10 lg:right-10 lg:bottom-10">
              <div className="relative flex items-center gap-4">
                <CarouselPrevious className="static translate-y-0" />
                <CarouselNext className="static translate-y-0" />
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export { Testimonial12 };



Cta Block

import { Button } from "@/components/ui/button";

const Cta17 = () => {
  return (
    <section className="py-32">
      <div className="flex items-center justify-center border bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/circles.svg')] bg-cover bg-center py-20 text-center md:p-20">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-4 text-balance text-3xl font-semibold md:text-5xl">
              Start building your websites faster
            </h1>
            <p className="md:text-lg">
              Try our tools and services to build your website faster. Start
              with a 14-day free trial. No credit card required. No setup fees.
              Cancel anytime.
            </p>
            <div className="mt-11 flex flex-col justify-center gap-2 sm:flex-row">
              <Button size="lg">Get Started</Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta17 };



🎯 SOLUTIONS - Kitchen Staff Page
Hero Block

"use client";
import Autoplay from "embla-carousel-autoplay";
import {
  ArrowRight,
  Blend,
  ChartNoAxesColumn,
  CircleDot,
  Diamond,
} from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const features = [
  {
    title: "Tailored workflows",
    description: "Track progress across custom issue flows for your team.",
    icon: CircleDot,
  },
  {
    title: "Milestones",
    description: "Break projects down into concrete phases.",
    icon: Diamond,
  },
  {
    title: "Cross-team projects",
    description: "Collaborate across teams and departments.",
    icon: Blend,
  },
  {
    title: "Progress insights",
    description: "Track scope, velocity, and progress over time.",
    icon: ChartNoAxesColumn,
  },
];

const SLIDES = [
  { image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg", label: "Kanban" },
  { image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg", label: "Issues" },
  { image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg", label: "Add Issues" },
];

const Hero187 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="relative overflow-hidden py-32 dark:bg-gray-900">
      {/* Gradient border */}
      <div className="container relative grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div className="bg-linear-to-r via-border to-border absolute inset-x-0 bottom-0 z-10 h-px from-transparent" />
        {/* Left side - Content */}
        <div className="space-y-8 lg:space-y-12">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Shadcnblocks components for your next project
            </h1>

            <p className="text-muted-foreground mt-6 text-2xl font-medium">
              Streamline is the fit-for-purpose tool for planning and building
              modern software products.
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
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button aria-label="Get started">Get started</Button>
            <a href="#">
              <Button
                aria-label="Streamline raises $12M from Roba Ventures"
                variant="outline"
                className="max-sm:hidden"
              >
                <span className="flex items-center gap-2 whitespace-pre-wrap text-start">
                  Documentation
                  <ArrowRight className="size-4" />
                </span>
              </Button>
            </a>
          </div>

          <SlideIndicator
            currentSlide={currentSlide}
            slides={SLIDES}
            className="mb-4! max-lg:hidden"
            api={api}
          />
        </div>

        {/* Right side - Carousel */}
        <div className="relative -mr-[max(2rem,calc((100vw-80rem)/2+2rem))] max-lg:translate-x-10">
          <Carousel
            className="size-full [&>div]:size-full"
            setApi={setApi}
            opts={{
              loop: true,
            }}
            plugins={[Autoplay({ delay: 4000, stopOnInteraction: true })]}
          >
            <CarouselContent className="size-full">
              {SLIDES.map((slide, index) => (
                <CarouselItem key={index}>
                  <img
                    src={slide.image}
                    alt={`Streamline product interface showing ${slide.label}`}
                    className="size-full min-h-[30rem] overflow-hidden rounded-t-xl object-cover"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
      <SlideIndicator
        currentSlide={currentSlide}
        slides={SLIDES}
        className="mb-8 mt-6 lg:hidden"
        api={api}
      />
    </section>
  );
};

interface SlideIndicatorProps {
  currentSlide: number;
  slides: Array<{ label: string }>;
  className?: string;
  api: CarouselApi | null;
}

const SlideIndicator = ({
  currentSlide,
  slides,
  className,
  api,
}: SlideIndicatorProps) => {
  return (
    <div
      className={cn("flex flex-col items-center gap-2 font-medium", className)}
    >
      <div className="">
        <span className="text-foreground-700">{currentSlide + 1} of 3 — </span>
        <span className="text-primary">{slides[currentSlide].label}</span>
      </div>
      <div className="flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={cn(
              "h-0.5 w-6 rounded-full transition-colors",
              index === currentSlide
                ? "bg-primary"
                : "bg-primary/20 hover:bg-primary/40",
            )}
          />
        ))}
      </div>
    </div>
  );
};

export { Hero187 };



Feature Block

"use client";
import { ChevronUp, Flag, Pyramid, Users, Workflow, Zap } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FEATURES = [
  {
    title: "Tailored workflows",
    description: "Custom issue flows",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    icon: <Workflow />,
  },
  {
    title: "Cross-team projects",
    description: "Team collaboration",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
    icon: <Users />,
  },
  {
    title: "Milestones",
    description: "Concrete phases",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
    icon: <Flag />,
  },
];

const Feature184 = () => {
  const [activeTab, setActiveTab] = useState(FEATURES[0].title);

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-8">
        {/* Center the heading */}
        <div className="mb-12 max-w-3xl text-center">
          <h2 className="text-2xl font-semibold leading-tight tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
            Explore our features
          </h2>
        </div>

        {/* Content Section */}
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="relative h-[300px] overflow-hidden rounded-xl sm:h-[420px]">
            <img
              src={FEATURES.find((f) => f.title === activeTab)?.image}
              alt={activeTab}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="relative flex flex-col justify-between">
            <Tabs
              defaultValue={FEATURES[0].title}
              onValueChange={(value) => setActiveTab(value)}
              className="h-full w-full"
            >
              <TabsList className="flex h-full flex-col gap-4 rounded-xl border-none bg-transparent p-0">
                {FEATURES.map((feature) => (
                  <TabsTrigger
                    key={feature.title}
                    value={feature.title}
                    className={cn(
                      "group flex h-full w-full flex-col items-start rounded-xl p-6 text-left transition-all",
                      "border-border/50 bg-card hover:border-primary/50 border",
                      "data-[state=active]:border-primary data-[state=active]:bg-primary/95 data-[state=active]:shadow-lg",
                      "relative",
                      "data-[state=active]:scale-[1.02]",
                      "data-[state=active]:z-20",
                    )}
                  >
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center gap-6">
                        <div
                          className={cn(
                            "bg-muted rounded-lg p-4 transition-colors",
                            "group-data-[state=active]:bg-background",
                          )}
                        >
                          {feature.icon}
                        </div>
                        <div className="flex flex-col gap-2">
                          <h3
                            className={cn(
                              "text-xl font-medium",
                              "group-data-[state=active]:text-primary-foreground",
                            )}
                          >
                            {feature.title}
                          </h3>
                          <span
                            className={cn(
                              "text-muted-foreground text-sm transition-colors",
                              "group-data-[state=active]:text-primary-foreground/90",
                            )}
                          >
                            {feature.description}
                          </span>
                        </div>
                      </div>
                      <div className="pl-8">
                        <ChevronUp
                          className={cn(
                            "text-muted-foreground size-5 transition-all duration-300",
                            "group-data-[state=active]:text-primary-foreground group-data-[state=active]:rotate-180",
                          )}
                        />
                      </div>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>

        {/* Buttons row */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button className="w-full sm:w-auto">
            <Zap className="mr-2 size-4" /> Get Started
          </Button>
          <Button variant="outline" className="w-full sm:w-auto">
            <Pyramid className="mr-2 size-4" /> Register Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export { Feature184 };


Testimonial Block

import { Sparkle } from "lucide-react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";

const Testimonial20 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="relative grid border border-dashed md:grid-cols-2">
          <div className="border-dashed px-6 py-12 md:border-r md:px-12 md:py-16">
            <p className="mb-6 text-center font-medium md:text-xl">
              “The platform has exceeded our expectations in every way. The
              implementation was smooth and
              <strong className="ml-1 font-bold">
                the results are outstanding!”
              </strong>
            </p>
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
              <Avatar className="size-14 rounded-full border">
                <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp" />
              </Avatar>
              <p className="text-center font-medium md:text-left">
                Sarah Mitchell, Director of Operations
              </p>
            </div>
          </div>
          <div className="px-6 py-12 text-center md:px-12 md:py-16">
            <p className="mb-6 text-center font-medium md:text-xl">
              “The team delivered
              <strong className="mx-1 font-bold">exceptional quality</strong>
              throughout the entire process. The support has been remarkable at
              every step.”
            </p>
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
              <Avatar className="size-14 rounded-full border">
                <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp" />
              </Avatar>
              <p className="text-center font-medium md:text-left">
                Michael Chen, Technical Lead
              </p>
            </div>
          </div>
          <Sparkle
            strokeWidth={1}
            className="absolute -top-[9px] -left-[9px] size-4 fill-primary"
          />
          <Sparkle
            strokeWidth={1}
            className="absolute -top-2 -right-2 size-4 fill-primary"
          />
          <Sparkle
            strokeWidth={1}
            className="absolute -right-2 -bottom-2 size-4 fill-primary"
          />
          <Sparkle
            strokeWidth={1}
            className="absolute -bottom-2 -left-2 size-4 fill-primary"
          />
        </div>
      </div>
    </section>
  );
};

export { Testimonial20 };



Cta Block

import { Button } from "@/components/ui/button";

const Cta17 = () => {
  return (
    <section className="py-32">
      <div className="flex items-center justify-center border bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/circles.svg')] bg-cover bg-center py-20 text-center md:p-20">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-4 text-balance text-3xl font-semibold md:text-5xl">
              Start building your websites faster
            </h1>
            <p className="md:text-lg">
              Try our tools and services to build your website faster. Start
              with a 14-day free trial. No credit card required. No setup fees.
              Cancel anytime.
            </p>
            <div className="mt-11 flex flex-col justify-center gap-2 sm:flex-row">
              <Button size="lg">Get Started</Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta17 };



🎯 SOLUTIONS - Front of House Page
Hero Block

import {
  ArrowRight,
  Blend,
  ChartNoAxesColumn,
  CircleDot,
  Diamond,
} from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Tailored workflows",
    description: "Track progress across custom issue flows for your team.",
    icon: CircleDot,
  },
  {
    title: "Milestones",
    description: "Break projects down into concrete phases.",
    icon: Diamond,
  },
  {
    title: "Cross-team projects",
    description: "Collaborate across teams and departments.",
    icon: Blend,
  },
  {
    title: "Progress insights",
    description: "Track scope, velocity, and progress over time.",
    icon: ChartNoAxesColumn,
  },
];

const Hero186 = () => {
  return (
    <section className="bg-linear-to-b from-background via-background to-background relative mx-2.5 mt-2.5 rounded-b-[36px] rounded-t-2xl lg:mx-4">
      <div className="py-32">
        <div className="container flex flex-col justify-between gap-8 md:gap-14 lg:flex-row">
          {/* Left side - Main content */}
          <div className="flex-1">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Shadcnblocks components for your next project
            </h1>

            <p className="text-muted-foreground mt-5 text-2xl">
              Streamline is the fit-for-purpose tool for planning and building
              modern software products.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button>Get started</Button>
              <a href="#">
                <Button variant="outline" className="h-auto">
                  <span className="flex items-center gap-2 whitespace-pre-wrap text-start">
                    Documentation <ArrowRight />
                  </span>
                </Button>
              </a>
            </div>
          </div>

          {/* Right side - Features */}
          <div className="relative flex flex-1 flex-col justify-center space-y-5 max-lg:pt-10 lg:ps-10">
            <DashedLine
              orientation="vertical"
              className="absolute left-0 top-0 max-lg:hidden"
            />
            <DashedLine
              orientation="horizontal"
              className="absolute top-0 lg:hidden"
            />
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="flex gap-2.5 lg:gap-5">
                  <Icon className="mt-1 size-4 shrink-0 lg:size-5" />
                  <div>
                    <h2 className="font-semibold">{feature.title}</h2>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="container mt-12 md:mt-20 lg:mt-24">
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg"
            alt="hero"
            className="w-full rounded-2xl object-cover object-center sm:h-[500px] lg:h-[793px]"
          />
        </div>
      </div>
    </section>
  );
};

interface DashedLineProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
}

const DashedLine = ({
  orientation = "horizontal",
  className,
}: DashedLineProps) => {
  const isHorizontal = orientation === "horizontal";

  return (
    <div
      className={cn(
        "text-muted-foreground relative",
        isHorizontal ? "h-px w-full" : "h-full w-px",
        className,
      )}
    >
      <div
        className={cn(
          isHorizontal
            ? [
                "h-px w-full",
                "bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)]",
                "[mask-image:linear-gradient(90deg,transparent,black_25%,black_75%,transparent)]",
              ]
            : [
                "h-full w-px",
                "bg-[repeating-linear-gradient(180deg,transparent,transparent_4px,currentColor_4px,currentColor_8px)]",
                "[mask-image:linear-gradient(180deg,transparent,black_25%,black_75%,transparent)]",
              ],
        )}
      />
    </div>
  );
};

export { Hero186 };



Feature Block

"use client";

import { Database, LockKeyhole, Sparkles } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface DataItem {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

const DATA: DataItem[] = [
  {
    id: "feature-1",
    title: "Innovative Solutions",
    description: "Discover cutting-edge tools to revolutionize your workflow.",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    icon: <Sparkles className="h-6 w-6 text-white" />,
  },
  {
    id: "feature-2",
    title: "Data Management",
    description: "Efficiently organize and manage your data with ease.",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-2.svg",
    icon: <Database className="h-6 w-6 text-white" />,
  },
  {
    id: "feature-3",
    title: "Advanced Security",
    description: "Protect your assets with state-of-the-art security features.",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-3.svg",
    icon: <LockKeyhole className="h-6 w-6 text-white" />,
  },
];

const Feature186 = () => {
  const [selection, setSelection] = useState(DATA[0].id);

  return (
    <section className="relative py-16 md:py-32">
      <div
        className="absolute left-0 right-0 top-0 z-0 h-[800px] w-screen bg-repeat opacity-30 [mask-image:radial-gradient(ellipse_at_center,white_20%,transparent_70%)]"
        style={{
          backgroundImage: "url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/architect.svg')",
          backgroundSize: "60px",
        }}
      />
      <div className="container relative z-10">
        <div>
          <h2 className="text-4xl font-medium sm:text-5xl lg:text-6xl">
            Our Key Features
          </h2>
          <p className="text-muted-foreground mt-4 md:text-lg">
            Unlock the full potential of your projects with our powerful and
            intuitive features.
          </p>

          {/* Tabs */}
          <div className="mt-4 lg:mt-8">
            <Tabs value={selection} onValueChange={setSelection}>
              <div className="relative">
                <div className="overflow-auto">
                  {/* TabsTrigger Container Aligned Left */}
                  <div className="mb-6 flex min-w-fit flex-col items-start lg:mb-8">
                    <TabsList className="gap-4 bg-transparent">
                      {DATA.map((feature) => (
                        <TabsTrigger key={feature.id} value={feature.id}>
                          {feature.title}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--background))_0%,transparent_10%,transparent_90%,hsl(var(--background))_100%)] md:hidden" />
                </div>
              </div>

              {/* TabsContent */}
              <div className="relative w-full overflow-hidden">
                {DATA.map((feature) => (
                  <TabsContent
                    key={feature.id}
                    value={feature.id}
                    className="relative z-20"
                  >
                    <div className="aspect-3/2 bg-accent w-full rounded-lg p-6 md:p-14 md:px-24">
                      <div className="mx-auto max-w-full md:mx-0 md:max-w-md">
                        <div className="flex size-12 items-center justify-center rounded-full bg-black">
                          {feature.icon}
                        </div>
                        <div className="my-4 md:my-8">
                          <h1 className="text-lg font-bold sm:text-xl lg:text-2xl">
                            {feature.title}
                          </h1>
                          <span className="text-muted-foreground text-base sm:text-lg lg:text-xl">
                            {feature.description}
                          </span>
                        </div>
                      </div>
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="mt-4 h-full w-full rounded-lg object-cover object-center md:mt-0"
                      />
                    </div>
                  </TabsContent>
                ))}
              </div>

              {/* Mobile Navigation Dots */}
              <div className="flex justify-center py-3 md:hidden">
                {DATA.map((feature) => (
                  <Button
                    key={feature.id}
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setSelection(feature.id);
                    }}
                  >
                    <div
                      className={`size-2 rounded-full ${
                        feature.id === selection ? "bg-primary" : "bg-input"
                      }`}
                    />
                  </Button>
                ))}
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature186 };



Testimonial Block

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";

const Testimonial12 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="relative rounded-2xl bg-muted">
          <Carousel className="static">
            <CarouselContent className="-ml-4">
              <CarouselItem className="grid grid-cols-1 gap-y-10 pt-4 pr-4 pb-14 pl-8 sm:pt-8 lg:grid-cols-3 lg:gap-10 lg:p-20">
                <div>
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
                    alt="placeholder"
                    className="mx-auto max-h-80 rounded-xl lg:mx-0 lg:max-h-none"
                  />
                  <div className="mt-4 text-center">
                    <h3 className="font-semibold">John Doe</h3>
                    <p className="text-muted-foreground">CEO, Company Name</p>
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="mb-6 flex items-center justify-center gap-2 lg:mb-8 lg:justify-start">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/nike-icon.svg"
                      alt="logo"
                      className="h-auto w-7 lg:w-11"
                    />
                    <span className="text-xl font-semibold lg:text-3xl">
                      Company Name
                    </span>
                  </div>
                  <p className="text-center text-xl font-semibold lg:text-left lg:text-2xl">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua”
                  </p>
                  <Separator className="my-8 lg:my-10" />
                  <div className="grid justify-center gap-10 text-center md:grid-cols-2 lg:justify-start lg:text-left">
                    <div className="flex flex-col">
                      <span className="mb-4 text-4xl font-semibold md:text-6xl">
                        2.2x
                      </span>
                      <span className="font-medium">Monthly Active Users</span>
                      <span className="text-muted-foreground">
                        Since last month
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="mb-4 text-4xl font-semibold md:text-6xl">
                        256%
                      </span>
                      <span className="font-medium">Increase in Revenue</span>
                      <span className="text-muted-foreground">
                        Since last year
                      </span>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="grid grid-cols-1 gap-y-10 pt-4 pr-4 pb-14 pl-8 sm:pt-8 lg:grid-cols-3 lg:gap-10 lg:p-20">
                <div>
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-2.svg"
                    alt="placeholder"
                    className="mx-auto max-h-80 rounded-xl lg:mx-0 lg:max-h-none"
                  />
                  <div className="mt-4 text-center">
                    <h3 className="font-semibold">Jane Doe</h3>
                    <p className="text-muted-foreground">CTO, Company 2</p>
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="mb-6 flex items-center justify-center gap-2 lg:mb-8 lg:justify-start">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/slack-icon.svg"
                      alt="logo"
                      className="h-auto w-5 lg:mr-1 lg:w-9"
                    />
                    <span className="text-xl font-semibold lg:text-3xl">
                      Company Name
                    </span>
                  </div>
                  <p className="text-center text-xl font-semibold lg:text-left lg:text-2xl">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua”
                  </p>
                  <Separator className="my-8 lg:my-10" />
                  <div className="grid justify-center gap-10 text-center md:grid-cols-2 lg:justify-start lg:text-left">
                    <div className="flex flex-col">
                      <span className="mb-4 text-4xl font-semibold md:text-6xl">
                        1.5x
                      </span>
                      <span className="font-medium">Monthly Active Users</span>
                      <span className="text-muted-foreground">
                        Since last month
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="mb-4 text-4xl font-semibold md:text-6xl">
                        150%
                      </span>
                      <span className="font-medium">Increase in Revenue</span>
                      <span className="text-muted-foreground">
                        Since last year
                      </span>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <div className="absolute right-6 bottom-6 z-10 lg:right-10 lg:bottom-10">
              <div className="relative flex items-center gap-4">
                <CarouselPrevious className="static translate-y-0" />
                <CarouselNext className="static translate-y-0" />
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export { Testimonial12 };



Cta Block

import { Button } from "@/components/ui/button";

const Cta17 = () => {
  return (
    <section className="py-32">
      <div className="flex items-center justify-center border bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/circles.svg')] bg-cover bg-center py-20 text-center md:p-20">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-4 text-balance text-3xl font-semibold md:text-5xl">
              Start building your websites faster
            </h1>
            <p className="md:text-lg">
              Try our tools and services to build your website faster. Start
              with a 14-day free trial. No credit card required. No setup fees.
              Cancel anytime.
            </p>
            <div className="mt-11 flex flex-col justify-center gap-2 sm:flex-row">
              <Button size="lg">Get Started</Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta17 };



💰 PRICING Page
Hero Block

import { MoveRight } from "lucide-react";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

const Hero159 = () => {
  return (
    <section className="relative overflow-hidden bg-primary/5 pt-28 pb-12 md:pt-40 md:pb-20 lg:pt-48">
      <div className="relative z-10 container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-10 md:grid-cols-[1fr_1fr] xl:gap-x-48">
          <div>
            <div className="flex h-full flex-col justify-between gap-6 md:gap-24">
              <div>
                <h1 className="mb-4 text-5xl leading-tight font-bold text-gray-900 lg:text-[3.625rem] xl:text-6xl">
                  Enabling your financial success
                </h1>
                <p className="text-lg text-muted-foreground">
                  Our platform offers powerful tools and insights to help you
                  manage, grow, and protect your financial assets.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-5">
                <Button
                  asChild
                  className="group flex h-fit w-fit items-center gap-2 rounded-full px-8 py-3"
                >
                  <a href="#">
                    <div className="font-medium text-white">
                      Started for free
                    </div>
                    <div className="relative h-6 w-7 overflow-hidden">
                      <div className="absolute top-0 left-0 flex -translate-x-1/2 items-center transition-all duration-500 group-hover:translate-x-0">
                        <MoveRight className="h-6! w-6! stroke-white px-1" />
                        <MoveRight className="h-6! w-6! stroke-white px-1" />
                      </div>
                    </div>
                  </a>
                </Button>
                <p className="text-muted-foreground">
                  No joining fee . No annual fee
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="h-full w-full md:max-w-[37.5rem]">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
                alt=""
                className="aspect-[1.026845638/1] h-full w-full rounded-xl object-cover object-center lg:aspect-[1.34529148/1]"
              />
            </div>
            <div className="absolute bottom-[4%] left-[4%] w-36 lg:w-56">
              <AspectRatio
                ratio={1.140102041 / 1}
                className="overflow-hidden rounded-lg border shadow-sm"
              >
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-white-1.svg"
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -top-36 right-0 hidden w-1/2 rounded-bl-[1.875rem] md:block md:h-[34.375rem] xl:h-[41.5625rem]">
        <img
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-8-wide.svg"
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>
    </section>
  );
};

export { Hero159 };



Pricing Block

"use client";
import {
  ArrowRight,
  Bell,
  Book,
  Brush,
  CalendarCheck2,
  CheckSquare,
  ClipboardList,
  Code,
  Database,
  FileText,
  GitBranch,
  GitPullRequest,
  LayoutGrid,
  LifeBuoy,
  LucideIcon,
  MonitorSmartphone,
  PhoneCall,
  Server,
  Settings2,
  Slack,
  Users,
  Zap,
} from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

interface FeatureItem {
  icon: LucideIcon;
  text: string;
}

interface PricingPlan {
  name: string;
  priceMonthly: string;
  priceYearly: string;
  description: string;
  bestFor: string;
  features?: FeatureItem[];
  mostPopular?: boolean;
  cta: {
    text: string;
    href: string;
  };
}

const PLANS: PricingPlan[] = [
  {
    name: "Starter",
    priceMonthly: "$9",
    priceYearly: "$90",
    description: "Great for solo developers",
    bestFor: "Freelancers just starting out",
    features: [
      { icon: Code, text: "Access to core components" },
      { icon: LayoutGrid, text: "Basic layout blocks" },
      { icon: MonitorSmartphone, text: "Responsive design templates" },
      { icon: FileText, text: "Starter documentation" },
      { icon: GitBranch, text: "Version history" },
      { icon: LifeBuoy, text: "Community support" },
      { icon: Book, text: "UI guidebook PDF" },
    ],
    cta: {
      text: "Get started",
      href: "#",
    },
  },
  {
    name: "Pro",
    mostPopular: true,
    priceMonthly: "$29",
    priceYearly: "$290",
    description: "Best for growing teams",
    bestFor: "Small dev teams and startups",
    features: [
      { icon: Code, text: "Advanced UI block library" },
      { icon: Brush, text: "Custom themes support" },
      { icon: Settings2, text: "Design system tools" },
      { icon: CheckSquare, text: "Component tests included" },
      { icon: Zap, text: "Performance enhancements" },
      { icon: Server, text: "Shared components hosting" },
      { icon: PhoneCall, text: "Email + chat support" },
    ],
    cta: {
      text: "Get started",
      href: "#",
    },
  },
  {
    name: "Team",
    priceMonthly: "$59",
    priceYearly: "$590",
    description: "Collaborate and scale fast",
    bestFor: "Product teams with multiple projects",
    features: [
      { icon: Users, text: "Team access control" },
      { icon: GitPullRequest, text: "Merge & review UI blocks" },
      { icon: CalendarCheck2, text: "Priority feature roadmap" },
      { icon: Bell, text: "Update notifications" },
      { icon: Database, text: "Component usage analytics" },
      { icon: Slack, text: "Slack integration" },
      { icon: ClipboardList, text: "Project templates library" },
    ],
    cta: {
      text: "Get started",
      href: "#",
    },
  },
  {
    name: "Business",
    priceMonthly: "$99",
    priceYearly: "$990",
    description: "Full control and support",
    bestFor: "Agencies and large-scale teams",
    cta: {
      text: "Get started",
      href: "#",
    },
  },
  {
    name: "Enterprise",
    priceMonthly: "$199",
    priceYearly: "$1,990",
    description: "Custom solutions at scale",
    bestFor: "Large enterprises and SaaS platforms",
    cta: {
      text: "Get started",
      href: "#",
    },
  },
];

const Pricing32 = () => {
  const [checked, setChecked] = useState(true);

  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-9.5">
          <h1 className="text-center font-serif text-5xl leading-none text-foreground md:text-6xl lg:text-7xl">
            A plan for any project you undertake
          </h1>
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center justify-center gap-4">
              <Label
                htmlFor="plan-duration"
                className={`${!checked ? "text-foreground" : "text-muted-foreground"} text-sm`}
              >
                Annual
              </Label>
              <Switch
                id="plan-duration"
                checked={checked}
                onCheckedChange={setChecked}
              />
              <Label
                htmlFor="plan-duration"
                className={`${checked ? "text-foreground" : "text-muted-foreground"} text-sm`}
              >
                Monthly
              </Label>
            </div>
            <div className="text-center text-green-600">
              Save as much as 40% with annual billing
            </div>
          </div>
          <div className="mt-3 grid w-full grid-cols-1 gap-5 lg:grid-cols-6">
            {PLANS.map((plan, index) => (
              <PlanCard
                key={index}
                plan={plan}
                monthly={checked}
                className={
                  index > PLANS.length - 3 ? "lg:col-span-3" : "lg:col-span-2"
                }
              />
            ))}
          </div>
        </div>
        <div className="m-9.5 flex items-center justify-center">
          <Button size="lg">Compare all plans</Button>
        </div>
      </div>
    </section>
  );
};

const PlanCard = ({
  plan,
  monthly,
  className,
}: {
  plan: PricingPlan;
  monthly: boolean;
  className?: string;
}) => {
  return (
    <div
      className={`relative h-full w-full rounded-lg border px-6 py-5 ${className} ${plan?.mostPopular ? "border-primary" : "border-muted-2"} bg-background`}
    >
      <div className="text-2xl">{plan.name}</div>
      <div className="h-[2.875rem] overflow-hidden">
        <div
          className={`text-[2.875rem] leading-none font-semibold transition-transform duration-500 ${monthly ? "translate-y-0" : "translate-y-[-3rem]"}`}
        >
          <div>{plan.priceMonthly}</div>
          <div>{plan.priceYearly}</div>
        </div>
      </div>
      <div className="text-xs text-muted-2-foreground">
        <div>per person / {monthly ? "month" : "year"}</div>
        <div>{plan.bestFor}</div>
      </div>
      <div className="mt-4 mb-6 text-lg font-medium text-foreground">
        {plan.description}
      </div>
      <Button
        asChild
        className="w-full"
        variant={plan.mostPopular ? "default" : "outline"}
        size="lg"
      >
        <a href={plan.cta.href}>
          {plan.cta.text}
          <ArrowRight />
        </a>
      </Button>
      <div className="mt-6 flex flex-col gap-4">
        {plan.features?.map((feature, index) => (
          <div key={index} className="flex items-center gap-3 text-foreground">
            <feature.icon className="size-5 stroke-1" />
            {feature.text}
          </div>
        ))}
      </div>
      {plan.mostPopular && (
        <div className="absolute top-0 left-1/2 w-fit -translate-1/2 -translate-y-1/2 rounded-full bg-primary px-4 py-1 text-xs font-medium text-primary-foreground">
          Most popular
        </div>
      )}
    </div>
  );
};

export { Pricing32 };

import {
  CalendarSync,
  Globe,
  MessageCircle,
  MessagesSquare,
  PlusCircle,
  Sparkles,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ADDONS = [
  {
    icon: CalendarSync,
    name: "Automatically refill your credits",
    description:
      "Set your threshold, and we'll auto-refill your credits—no expiration, no interruptions!",
    price: {
      unit: "Total per 1000 message credits",
      amount: "$14",
    },
    link: "#",
  },
  {
    icon: MessageCircle,
    name: "Bonus message credits",
    description: "$12 per 1000 credits / month",
    price: {
      unit: "Total per month",
      amount: "$12",
    },
    link: "#",
  },
  {
    icon: MessagesSquare,
    name: "Additional agents",
    description: "$7 per AI agent / month",
    price: {
      unit: "Total per month",
      amount: "$7",
    },
    link: "#",
  },
  {
    icon: Globe,
    name: "Personalized domains",
    description:
      "Use your custom domains for the AI agent’s embed script, iframe, and shareable link—fully branded and seamless!",
    price: {
      unit: "Total per month",
      amount: "$59",
    },
    link: "#",
  },
  {
    icon: Sparkles,
    name: "Remove Watermark",
    description: "Remove the branding from the iframe and widget",
    price: {
      unit: "Total per month",
      amount: "$39",
    },
    link: "#",
  },
];

const Pricing33 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex w-full flex-col items-center gap-4">
          <Badge className="flex items-center gap-2 rounded-full border border-muted bg-background px-4 py-1.5">
            <PlusCircle className="size-2 text-primary" />
            <p className="text-sm leading-5 font-medium text-foreground">
              Add-ons
            </p>
          </Badge>
          <h2 className="max-w-full text-center text-3xl font-semibold md:max-w-[42.5rem] md:text-5xl">
            Enhance your plan with powerful add-ons!
          </h2>
          <div className="flex w-full flex-col items-center gap-4 pt-10">
            {ADDONS.map((addon, i) => (
              <div
                className="grid w-full rounded-2xl border border-muted shadow-xs xl:grid-cols-[minmax(36.25rem,48.125rem)_1fr]"
                key={`addon-${i}`}
              >
                <div className="flex w-full flex-col gap-4 p-6 md:flex-row">
                  <div className="relative flex size-12 after:absolute after:top-1/2 after:left-1/2 after:z-10 after:block after:size-full after:-translate-1/2 after:rounded-full after:content-['']">
                    <div className="relative z-20 m-auto flex size-11.5 shrink-0 rounded-full bg-black">
                      <addon.icon className="m-auto size-5 stroke-white" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-medium">{addon.name}</h3>
                    <p className="text-base text-muted-foreground">
                      {addon.description}
                    </p>
                  </div>
                </div>
                <div className="flex w-full flex-col items-center gap-2 p-6 md:flex-row">
                  <div className="flex w-full flex-wrap items-center gap-4 md:flex-nowrap">
                    <div className="text-lg font-semibold">
                      {addon.price.amount}
                    </div>
                    <div className="text-xs text-muted-2-foreground">
                      {addon.price.unit}
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="block h-12 w-full px-4 md:max-w-[10.625rem]"
                  >
                    <a href={addon.link}>Get Add-on</a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Pricing33 };



Feature Block

import { Check, ChevronRight } from "lucide-react";
import { type SVGProps, useId } from "react";

import { Button } from "@/components/ui/button";

export function Feature195() {
  return (
    <section className="py-32 text-background md:container md:max-w-5xl">
      <div className="relative isolate container grid items-center overflow-hidden bg-linear-to-r from-primary to-primary/75 py-8 max-lg:gap-10 max-md:gap-6 md:rounded-3xl lg:grid-cols-2 lg:px-8">
        <div className="absolute inset-0 -z-10 [mask-image:linear-gradient(to_left,black_50%,transparent_100%)]">
          <PlusSigns className="h-full w-full text-background/[0.05]" />
        </div>
        <div className="border-background/20 lg:border-e lg:py-16 lg:pr-20">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
            Launch today
          </h2>
          <p className="mt-3 text-sm font-medium text-background/70">
            In the past, new financial companies had to rely on expensive
            middleware that linked them to outdated sponsor bank systems,
            restricting their potential. Our API solves this today.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 max-md:hidden">
            <Button size="lg" variant="secondary" className="group" asChild>
              <a href="/signup">
                Start for free
                <ChevronRight className="ml-1 size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
            <Button size="lg" className="group bg-secondary-foreground" asChild>
              <a href="/">
                Get a demo
                <ChevronRight className="ml-1 size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
          </div>
        </div>

        <div className="space-y-6 lg:py-10 lg:pl-20">
          <div>
            <h3 className="text-3xl font-semibold text-background md:text-4xl lg:text-5xl">
              $29.99
            </h3>
            <p className="mt-1 text-xl font-medium text-background/70">
              per user per month
            </p>
          </div>
          <ul className="space-y-3 text-sm text-background/70">
            <li className="flex items-center gap-2">
              <Check className="size-4" />
              All free plan features and...
            </li>
            <li className="flex items-center gap-2">
              <Check className="size-4" />
              Mainline AI
            </li>
            <li className="flex items-center gap-2">
              <Check className="size-4" />
              Unlimited teams
            </li>
          </ul>
          <div className="mt-10 flex flex-wrap gap-4 md:hidden">
            <Button size="lg" variant="secondary" className="group w-full">
              <a href="/signup" className="flex items-center gap-2">
                Start building for free
                <ChevronRight className="ml-1 size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
            <Button size="lg" className="group w-full bg-secondary-foreground">
              <a href="/" className="flex items-center gap-2">
                Get a demo
                <ChevronRight className="ml-1 size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

interface PlusSignsProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

const PlusSigns = ({ className, ...props }: PlusSignsProps) => {
  const GAP = 16;
  const STROKE_WIDTH = 1;
  const PLUS_SIZE = 6;
  const id = useId();
  const patternId = `plus-pattern-${id}`;

  return (
    <svg width={GAP * 2} height={GAP * 2} className={className} {...props}>
      <defs>
        <pattern
          id={patternId}
          x="0"
          y="0"
          width={GAP}
          height={GAP}
          patternUnits="userSpaceOnUse"
        >
          <line
            x1={GAP / 2}
            y1={(GAP - PLUS_SIZE) / 2}
            x2={GAP / 2}
            y2={(GAP + PLUS_SIZE) / 2}
            stroke="currentColor"
            strokeWidth={STROKE_WIDTH}
          />
          <line
            x1={(GAP - PLUS_SIZE) / 2}
            y1={GAP / 2}
            x2={(GAP + PLUS_SIZE) / 2}
            y2={GAP / 2}
            stroke="currentColor"
            strokeWidth={STROKE_WIDTH}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
};



Faq Block

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "What is a FAQ and why is it important?",
    answer:
      "FAQ stands for Frequently Asked Questions. It is a list that provides answers to common questions people may have about a specific product, service, or topic.",
  },
  {
    question: "Why should I use a FAQ on my website or app?",
    answer:
      "Utilizing a FAQ section on your website or app is a practical way to offer instant assistance to your users or customers. Instead of waiting for customer support responses, they can find quick answers to commonly asked questions. ",
  },
  {
    question: "How do I effectively create a FAQ section?",
    answer:
      "Creating a FAQ section starts with gathering the most frequent questions you receive from your users or customers. Once you have a list, you need to write clear, detailed, and helpful answers to each question.",
  },
  {
    question: "What are the benefits of having a well-maintained FAQ section?",
    answer:
      "There are numerous advantages to maintaining a robust FAQ section. Firstly, it provides immediate answers to common queries, which improves the user experience.",
  },
  {
    question: "How do I effectively create a FAQ section?",
    answer:
      "Creating a FAQ section starts with gathering the most frequent questions you receive from your users or customers. Once you have a list, you need to write clear, detailed, and helpful answers to each question.",
  },
];

const Faq7 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl font-semibold">
              Need Help?
              <br />
              <span className="text-muted-foreground/70">
                We&apos;re here to assist.
              </span>
            </h2>
            <p className="text-lg text-muted-foreground md:text-xl">
              Still have questions? Feel free to contact our friendly
              <a href="#" className="mx-1 whitespace-nowrap underline">
                support team
              </a>
              specialists.
            </p>
            <Button size="lg" variant="outline" className="w-fit">
              View all FAQs
            </Button>
          </div>
          <Accordion type="multiple">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export { Faq7 };



Cta Block

import { Button } from "@/components/ui/button";

const Cta15 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-20 overflow-hidden rounded-2xl border bg-[radial-gradient(ellipse_30%_60%_at_100%_80%,var(--color-gray-200),transparent)] pt-20 sm:pl-16 lg:flex-row lg:bg-[radial-gradient(ellipse_50%_80%_at_40%_120%,var(--color-gray-200),transparent)] lg:pl-20">
          <div className="lg:texlf mx-auto max-w-md px-4 text-center md:px-0 lg:mx-0 lg:pb-20 lg:text-left">
            <p className="mb-6 font-medium">Ready to get started?</p>
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              Start your free trial today.
            </h2>
            <p className="text-lg text-muted-foreground">
              Start with a 14-day free trial. No credit card required. No setup
              fees. Cancel anytime.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Button>Get Started</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
          <div className="relative w-full pl-4 sm:pl-0">
            <div className="absolute -bottom-8 -left-8 -z-10 h-4/5 w-4/5 rounded-tl-2xl rounded-br-2xl bg-stone-900/20 blur-2xl"></div>
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/pawel-czerwinski-O4fAgtXLRwI-unsplash.jpg"
              alt="placeholder"
              className="relative z-10 h-full max-h-[400px] w-full rounded-tl-2xl rounded-br-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta15 };



📚 RESOURCES - Help Center Page
Hero Block

import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";

// Move card data outside the component
const heroCards = [
  {
    title: "Product Design",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
    description:
      "Maecenas egestas leo nec risus viverra accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
  },
  {
    title: "Development",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-2.svg",
    description:
      "Maecenas egestas leo nec risus viverra accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
  },
  {
    title: "Marketing",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-3.svg",
    description:
      "Maecenas egestas leo nec risus viverra accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
  },
];

const Hero36 = () => {
  return (
    <section className="relative overflow-hidden bg-accent py-24 md:py-32">
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_50%)]"></div>
      </div>
      <div className="relative container flex flex-col items-center text-center">
        <Badge
          variant="outline"
          className="px-4 py-1.5 text-xs font-medium uppercase"
        >
          New Release
        </Badge>
        <h1 className="my-4 max-w-3xl text-2xl font-bold text-pretty sm:text-4xl md:my-6 lg:text-5xl">
          Our blocks help global companies expand into new markets
        </h1>
        <p className="max-w-2xl text-muted-foreground">
          Discover how our powerful building blocks can transform your business
          and drive growth
        </p>
      </div>
      <div className="container mt-12 grid gap-6 md:mt-16 md:grid-cols-3 md:gap-8">
        {heroCards.map((item, index) => (
          <a
            key={index}
            href="#"
            className={cn(
              "relative flex flex-col items-center rounded-xl border bg-background/70 px-6 py-10 text-center backdrop-blur-sm lg:px-8 lg:py-12",
              index === 1 && "md:translate-y-4",
            )}
          >
            <div className="mb-6 flex aspect-square w-16 items-center justify-center md:w-20 lg:mb-8">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-contain object-center"
              />
            </div>
            <h3 className="mb-3 text-lg font-semibold md:text-xl">
              {item.title}
            </h3>
            <p className="mb-auto text-sm text-muted-foreground">
              {item.description}
            </p>
            <div className="mt-8 flex items-center text-primary md:mt-10">
              <span className="font-medium">See more</span>
              <ArrowRight className="ml-2 size-4" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export { Hero36 };



Faq Block

import { MessageCircleQuestion } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const DATA = [
  {
    question: "Is there a free version?",
    answer:
      "Yes! We offer a Free Plan with essential features. You can upgrade anytime for advanced tools and integrations.",
  },
  {
    question: "What apps can I integrate?",
    answer:
      "Our platform supports integration with various popular apps and services. The specific integrations available depend on your plan level.",
  },
  {
    question: "How does the AI work?",
    answer:
      "Our AI technology uses advanced machine learning algorithms to analyze and process your data, providing intelligent insights and automation capabilities.",
  },
  {
    question: "Can I use this with a team?",
    answer:
      "Absolutely! Our platform is designed for both individual and team use. You can easily collaborate and share resources with team members.",
  },
  {
    question: "Is my data safe?",
    answer:
      "We take data security seriously. All data is encrypted and stored securely following industry best practices and compliance standards.",
  },
  {
    question: "How do I manage my subscription?",
    answer:
      "You can manage your subscription easily through your account dashboard, where you can upgrade, downgrade, or modify your plan settings.",
  },
];

const Faq10 = () => {
  return (
    <section className="py-32">
      <div className="border-y">
        <div className="container flex flex-col gap-6 border-x py-4 max-lg:border-x lg:py-8">
          <Badge
            variant="outline"
            className="w-fit gap-1 bg-card px-3 text-sm font-normal tracking-tight shadow-sm"
          >
            <MessageCircleQuestion className="size-4" />

            <span>FAQ</span>
          </Badge>
          <h2 className="text-3xl leading-tight tracking-tight md:text-4xl lg:text-6xl">
            Everything You Need to Know
          </h2>
          <p className="max-w-[600px] tracking-[-0.32px] text-muted-foreground">
            Looking for quick answers? Check out our{" "}
            <span className="underline">FAQ section</span>.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="mx-auto max-w-3xl pt-8 pb-4 md:pb-8 lg:pt-[3.75rem] lg:pb-[50px]">
          <Accordion type="single" collapsible className="space-y-4">
            {DATA.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-[7px] border px-6 text-primary data-[state=open]:pb-2"
              >
                <AccordionTrigger className="py-5 text-start text-base tracking-[-0.32px]">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base tracking-[-0.32px] text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <div className="h-8 w-full border-y md:h-12 lg:h-[112px]">
        <div className="container h-full w-full border-x"></div>
      </div>
    </section>
  );
};

export { Faq10 };



Contact Block

import {
  MessageCircleDashed,
  MessagesSquare,
  ScanFace,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const Contact3 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="text-center">
          <h1 className="mb-7 text-4xl font-bold md:text-6xl">Get in Touch</h1>
          <div className="flex flex-col justify-center gap-2 sm:flex-row">
            <Button size="lg">Request a demo</Button>
            <Button variant="outline" size="lg">
              Start your free trial
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            No payment details needed
          </p>
        </div>
        <div className="mt-28 grid gap-16 md:grid-cols-2">
          <div>
            <MessagesSquare className="mb-5 h-8 w-auto" />
            <p className="mb-2 font-bold md:text-xl">Support</p>
            <p className="mb-6 text-sm text-muted-foreground md:text-base">
              Need help or have questions? Our support team is here for you
              24/7. Feel free to reach out via email or live chat.
            </p>
            <a href="#" className="font-semibold hover:underline">
              Contact support
            </a>
          </div>
          <div>
            <Users className="mb-5 h-8 w-auto" />
            <p className="mb-2 font-bold md:text-xl">Sales</p>
            <p className="mb-6 text-sm text-muted-foreground md:text-base">
              Have questions about our services or need a demo? Our sales team
              can assist you with personalized solutions.
            </p>
            <a href="#" className="font-semibold hover:underline">
              Talk to sales
            </a>
          </div>
          <div>
            <MessageCircleDashed className="mb-5 h-8 w-auto" />
            <p className="mb-2 font-bold md:text-xl">Inquiries</p>
            <p className="mb-6 text-sm text-muted-foreground md:text-base">
              For any general inquiries, partnership requests, or media
              questions, fill out the form and we’ll get back to you shortly.
            </p>
            <a href="#" className="font-semibold hover:underline">
              Contact us
            </a>
          </div>
          <div>
            <ScanFace className="mb-5 h-8 w-auto" />
            <p className="mb-2 font-bold md:text-xl">Verification</p>
            <p className="mb-6 text-sm text-muted-foreground md:text-base">
              To verify employment or confirm income, please reach out to our
              third-party verification provider.
            </p>
            <a href="#" className="font-semibold hover:underline">
              Get verified
            </a>
          </div>
        </div>
        <div className="mt-28">
          <h1 className="mb-16 text-center text-2xl font-bold md:text-4xl">
            Our Global Offices
          </h1>
          <div className="mx-auto grid max-w-7xl gap-7 sm:grid-cols-2 md:grid-cols-3 lg:px-14">
            <div className="rounded-lg border p-5">
              <div className="mb-2 flex items-center">
                <div className="mr-2 h-5 w-7 rounded-sm bg-blue-500"></div>
                <p className="font-bold sm:text-lg">New York, USA</p>
              </div>
              <p className="text-sm text-muted-foreground sm:text-base">
                123 5th Ave, New York, NY 10001
              </p>
            </div>
            <div className="rounded-lg border p-5">
              <div className="mb-2 flex items-center">
                <div className="mr-2 h-5 w-7 rounded-sm bg-red-500"></div>
                <p className="font-bold sm:text-lg">London, UK</p>
              </div>
              <p className="text-sm text-muted-foreground sm:text-base">
                50 Oxford St, London W1D 1BS, United Kingdom
              </p>
            </div>
            <div className="rounded-lg border p-5">
              <div className="mb-2 flex items-center">
                <div className="mr-2 h-5 w-7 rounded-sm bg-green-500"></div>
                <p className="font-bold sm:text-lg">Tokyo, Japan</p>
              </div>
              <p className="text-sm text-muted-foreground sm:text-base">
                2-7-5 Kyobashi, Chuo-ku, Tokyo 104-0031, Japan
              </p>
            </div>
            <div className="rounded-lg border p-5">
              <div className="mb-2 flex items-center">
                <div className="mr-2 h-5 w-7 rounded-sm bg-yellow-500"></div>
                <p className="font-bold sm:text-lg">Sydney, Australia</p>
              </div>
              <p className="text-sm text-muted-foreground sm:text-base">
                100 George St, Sydney NSW 2000, Australia
              </p>
            </div>
            <div className="rounded-lg border p-5">
              <div className="mb-2 flex items-center">
                <div className="mr-2 h-5 w-7 rounded-sm bg-purple-500"></div>
                <p className="leading-3 font-bold sm:text-lg">
                  Berlin, Germany
                </p>
              </div>
              <p className="text-sm text-muted-foreground sm:text-base">
                Unter den Linden 52, 10117 Berlin, Germany
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contact3 };



Cta Block

import { ArrowRight, Book, ChevronRight, File } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Cta3 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid grid-cols-1 flex-col gap-10 rounded-lg border p-6 shadow-sm lg:grid-cols-2 lg:px-20 lg:py-16">
          <div>
            <h4 className="mb-2 text-2xl font-bold lg:text-4xl">
              Call To Action
            </h4>
            <p className="text-muted-foreground">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto illo praesentium nisi, accusantium quae.
            </p>
            <div className="mt-8 flex flex-col items-center gap-2 sm:flex-row">
              <Button className="w-full sm:w-auto">
                Get Started
                <ArrowRight className="ml-2 size-4" />
              </Button>
              <Button variant="outline" className="w-full sm:w-auto">
                Contact Sales
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <a href="#">
              <Card className="flex flex-row items-center justify-between gap-2 px-6 py-4 shadow-none hover:bg-accent">
                <div className="flex items-start gap-2">
                  <File className="size-4" />
                  <div>
                    <h5 className="mb-2 leading-4 font-medium">
                      Documentation
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      Lorem ipsum dolor, sit amet consectetur.
                    </p>
                  </div>
                </div>
                <ChevronRight className="size-6" />
              </Card>
            </a>
            <a href="#">
              <Card className="flex flex-row items-center justify-between gap-2 px-6 py-4 shadow-none hover:bg-accent">
                <div className="flex items-start gap-2">
                  <Book className="size-4" />
                  <div>
                    <h5 className="mb-2 leading-4 font-medium">
                      Getting Started
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      Lorem ipsum dolor, sit amet consectetur.
                    </p>
                  </div>
                </div>
                <ChevronRight className="size-6" />
              </Card>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta3 };



📚 RESOURCES - Documentation Page
Hero Block

import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";

// Move card data outside the component
const heroCards = [
  {
    title: "Product Design",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
    description:
      "Maecenas egestas leo nec risus viverra accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
  },
  {
    title: "Development",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-2.svg",
    description:
      "Maecenas egestas leo nec risus viverra accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
  },
  {
    title: "Marketing",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-3.svg",
    description:
      "Maecenas egestas leo nec risus viverra accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
  },
];

const Hero36 = () => {
  return (
    <section className="relative overflow-hidden bg-accent py-24 md:py-32">
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_50%)]"></div>
      </div>
      <div className="relative container flex flex-col items-center text-center">
        <Badge
          variant="outline"
          className="px-4 py-1.5 text-xs font-medium uppercase"
        >
          New Release
        </Badge>
        <h1 className="my-4 max-w-3xl text-2xl font-bold text-pretty sm:text-4xl md:my-6 lg:text-5xl">
          Our blocks help global companies expand into new markets
        </h1>
        <p className="max-w-2xl text-muted-foreground">
          Discover how our powerful building blocks can transform your business
          and drive growth
        </p>
      </div>
      <div className="container mt-12 grid gap-6 md:mt-16 md:grid-cols-3 md:gap-8">
        {heroCards.map((item, index) => (
          <a
            key={index}
            href="#"
            className={cn(
              "relative flex flex-col items-center rounded-xl border bg-background/70 px-6 py-10 text-center backdrop-blur-sm lg:px-8 lg:py-12",
              index === 1 && "md:translate-y-4",
            )}
          >
            <div className="mb-6 flex aspect-square w-16 items-center justify-center md:w-20 lg:mb-8">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-contain object-center"
              />
            </div>
            <h3 className="mb-3 text-lg font-semibold md:text-xl">
              {item.title}
            </h3>
            <p className="mb-auto text-sm text-muted-foreground">
              {item.description}
            </p>
            <div className="mt-8 flex items-center text-primary md:mt-10">
              <span className="font-medium">See more</span>
              <ArrowRight className="ml-2 size-4" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export { Hero36 };



Content Block

"use client";

import { Lightbulb } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";

const Content3 = () => {
  const [activeHeadings, setActiveHeadings] = useState<string[]>([]);
  const sectionRefs = useRef<Record<string, HTMLElement>>({});

  useEffect(() => {
    const sections = Object.keys(sectionRefs.current);

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const id = entry.target.id;

        if (entry.isIntersecting) {
          setActiveHeadings((prev) =>
            prev.includes(id) ? prev : [...prev, id],
          );
        } else {
          setActiveHeadings((prev) => prev.filter((heading) => heading !== id));
        }
      });
    };

    let observer: IntersectionObserver | null = new IntersectionObserver(
      observerCallback,
      {
        root: null,
        rootMargin: "0px",
        threshold: 1,
      },
    );

    sections.forEach((sectionId) => {
      const element = sectionRefs.current[sectionId];
      if (element) {
        observer?.observe(element);
      }
    });

    return () => {
      observer?.disconnect();
      observer = null;
    };
  }, []);

  const addSectionRef = (id: string, ref: HTMLElement | null) => {
    if (ref) {
      sectionRefs.current[id] = ref;
    }
  };
  return (
    <section className="py-32">
      <div className="container">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Blog</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>Urban Gardening</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="mt-10 text-balance text-4xl font-bold md:text-5xl lg:text-6xl">
          Mastering sustainable urban gardening in small spaces.
        </h1>
        <p className="mt-5 max-w-2xl text-balance text-xl font-medium">
          Transform your apartment balcony or tiny yard into a thriving green
          oasis with our proven techniques.
        </p>
        <div className="mt-8 flex items-center gap-3">
          <Button size="lg">Get Started</Button>
          <Button variant="outline" size="lg">
            Gardening Guide
          </Button>
        </div>
        <div className="relative mt-16 grid gap-10 lg:mt-28 lg:grid-cols-5">
          <aside className="top-10 flex h-fit w-full max-w-56 flex-col gap-5 lg:sticky">
            <div>
              <h2 className="font-semibold">Topics</h2>
              <ul className="mt-2 flex flex-col gap-2">
                <li>
                  <p className="text-muted-foreground text-sm">
                    Container Gardens
                  </p>
                </li>
                <li>
                  <p className="text-muted-foreground text-sm">
                    Vertical Systems
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold">Last Updated</h2>
              <time className="text-muted-foreground text-sm">
                April 15, 2024
              </time>
            </div>
          </aside>
          <div className="gap-6 lg:col-span-3">
            <div className="max-w-prose lg:mx-auto">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                alt="placeholder"
                className="border-border aspect-video rounded-2xl border object-cover"
              />
              <div className="prose dark:prose-invert prose-h3:mt-14 prose-h3:scroll-mt-14 prose-h3:text-lg mt-12">
                <h2 className="text-4xl font-semibold">Beginner's Guide</h2>
                <h3
                  id="heading1"
                  ref={(ref) => addSectionRef("heading1", ref)}
                  className="text-2xl font-semibold"
                >
                  Overview
                </h3>
                <p>
                  This guide will help you create a thriving garden even in the
                  smallest urban spaces. With strategic planning and the right
                  plant selection, anyone can enjoy homegrown herbs, vegetables,
                  and flowers, regardless of square footage.
                </p>
                <h3 id="heading2" ref={(ref) => addSectionRef("heading2", ref)}>
                  Getting Started
                </h3>
                <p>
                  Before diving into urban gardening, consider these essential
                  requirements for success. This checklist will help you avoid
                  common beginner mistakes and set up your garden for optimal
                  growth.
                </p>
                <ul>
                  <li>
                    Basic supplies for your starter garden:
                    <ul>
                      <li>
                        <code>Containers</code> with proper drainage holes
                      </li>
                      <li>
                        <code>Soil</code> specially formulated for containers
                      </li>
                    </ul>
                  </li>
                  <li>
                    Proper lighting conditions{" "}
                    <a href="#">View lighting guide</a>
                  </li>
                  <li>Regular watering schedule and techniques</li>
                  <li>Quality potting mix with balanced nutrients</li>
                </ul>

                <h3 id="heading3" ref={(ref) => addSectionRef("heading3", ref)}>
                  Choosing Your Plants
                </h3>
                <p>
                  Once you've set up, you'll need to select appropriate plants
                  for your space.
                </p>
                <div>
                  <table>
                    <thead>
                      <tr>
                        <th>Light Conditions</th>
                        <th>Recommended Plants</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Full Sun</td>
                        <td>Tomatoes, Peppers, Basil</td>
                      </tr>
                      <tr className="even:bg-muted m-0 border-t p-0">
                        <td>Partial Sun</td>
                        <td>Lettuce, Kale, Mint</td>
                      </tr>
                      <tr className="even:bg-muted m-0 border-t p-0">
                        <td>Shade</td>
                        <td>Ferns, Hostas, Impatiens</td>
                      </tr>
                      <tr className="even:bg-muted m-0 border-t p-0">
                        <td>Indirect Light</td>
                        <td>Orchids, Peace Lily</td>
                      </tr>
                      <tr className="even:bg-muted m-0 border-t p-0">
                        <td>Low Light</td>
                        <td>Snake Plants, Prayer Plants</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  By matching plants to your light conditions, you'll see
                  dramatic improvements in growth and yield. Remember that even
                  in challenging spaces, there's always something that can
                  thrive.
                </p>
                <Alert>
                  <Lightbulb className="h-4 w-4" />
                  <AlertTitle>Pro Tip!</AlertTitle>
                  <AlertDescription>
                    Always group plants with similar water needs together to
                    simplify maintenance and prevent overwatering
                  </AlertDescription>
                </Alert>

                <h3 id="heading4" ref={(ref) => addSectionRef("heading4", ref)}>
                  Vertical Solutions
                </h3>
                <p>
                  When floor space is limited, the answer is to go up!{" "}
                  <a href="#">Vertical gardening techniques</a> can double or
                  triple your growing capacity.
                </p>
                <blockquote>
                  &ldquo;The greatest limitation in urban gardening isn't
                  space—it's imagination,&rdquo; says renowned urban farmer
                  Maria Chen.
                </blockquote>
                <p>
                  Consider these vertical options based on your available space:
                </p>
                <ul>
                  <li>Wall-mounted pocket planters: Perfect for herbs</li>
                  <li>Tiered plant stands: Ideal for small potted plants</li>
                  <li>
                    Trellises for climbers: Great for beans, peas, and cucumbers
                  </li>
                </ul>
                <p>
                  With these strategies, even a tiny balcony can produce an
                  impressive harvest throughout the growing season, bringing
                  both beauty and bounty to your urban dwelling.
                </p>
              </div>
            </div>
          </div>
          <nav className="sticky top-10 hidden h-fit lg:block">
            <p className="text-muted-foreground text-sm">ON THIS PAGE</p>
            <ul className="text-muted-foreground mt-1.5 text-xs">
              <li>
                <a
                  className={cn(
                    "border-border block border-l py-1 pl-2.5 transition-colors duration-200",
                    activeHeadings.includes("heading1")
                      ? "border-primary text-primary font-medium"
                      : "text-muted-foreground hover:text-primary",
                  )}
                  href="#heading1"
                >
                  Overview
                </a>
              </li>
              <li>
                <a
                  className={cn(
                    "border-border block border-l py-1 pl-2.5 transition-colors duration-200",
                    activeHeadings.includes("heading2")
                      ? "border-primary text-primary font-medium"
                      : "text-muted-foreground hover:text-primary",
                  )}
                  href="#heading2"
                >
                  Getting Started
                </a>
              </li>
              <li>
                <a
                  className={cn(
                    "border-border block border-l py-1 pl-2.5 transition-colors duration-200",
                    activeHeadings.includes("heading3")
                      ? "border-primary text-primary font-medium"
                      : "text-muted-foreground hover:text-primary",
                  )}
                  href="#heading3"
                >
                  Choosing Your Plants
                </a>
              </li>
              <li>
                <a
                  className={cn(
                    "border-border block border-l py-1 pl-2.5 transition-colors duration-200",
                    activeHeadings.includes("heading4")
                      ? "border-primary text-primary font-medium"
                      : "text-muted-foreground hover:text-primary",
                  )}
                  href="#heading4"
                >
                  Vertical Solutions
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export { Content3 };



List Block

import { BarChart3, Briefcase, Cloud, Shield } from "lucide-react";

import { cn } from "@/lib/utils";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const data = [
  {
    icon: <Shield strokeWidth={2} />,
    category: "Security",
    description:
      "Enterprise security solution providing advanced threat protection and monitoring",
    year: 2024,
    offer: "Free",
    segment: "Business",
  },
  {
    icon: <Cloud strokeWidth={2} />,
    category: "Technology",
    description:
      "Cloud-based platform offering scalable solutions for modern businesses",
    year: 2023,
    offer: "Professional",
    segment: "Business",
  },
  {
    icon: <Briefcase strokeWidth={2} />,
    category: "Services",
    description:
      "Comprehensive business management suite for growing organizations",
    year: 2022,
    offer: "Enterprise",
    segment: "Enterprise",
  },
  {
    icon: <BarChart3 strokeWidth={2} />,
    category: "Analytics",
    description:
      "Real-time data analytics platform with customizable dashboards and reporting",
    year: 2024,
    offer: "Professional",
    segment: "Business",
  },
  {
    icon: <Shield strokeWidth={2} />,
    category: "Security",
    description:
      "Advanced endpoint protection system with AI-powered threat detection",
    year: 2023,
    offer: "Professional",
    segment: "Enterprise",
  },
  {
    icon: <Cloud strokeWidth={2} />,
    category: "Technology",
    description:
      "Serverless computing platform with automatic scaling capabilities",
    year: 2024,
    offer: "Enterprise",
    segment: "Business",
  },
  {
    icon: <Briefcase strokeWidth={2} />,
    category: "Services",
    description:
      "Professional consulting services for digital transformation initiatives",
    year: 2023,
    offer: "Free",
    segment: "Business",
  },
];

const List1 = () => {
  return (
    <section className="py-32">
      <div className="container px-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead></TableHead>
              <TableHead className="hidden font-bold text-primary md:table-cell">
                Category
              </TableHead>
              <TableHead>
                <span className="hidden font-bold text-primary md:block">
                  Description
                </span>
                <span className="block font-bold text-primary md:hidden">
                  Project
                </span>
              </TableHead>
              <TableHead className="hidden text-right font-bold text-primary md:table-cell">
                Year
              </TableHead>
              <TableHead className="hidden font-bold text-primary md:table-cell">
                Offer
              </TableHead>
              <TableHead className="hidden font-bold text-primary md:table-cell">
                Segment
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.category}>
                <TableCell className="">
                  <div className="flex items-center gap-2 align-top">
                    {item.icon}
                  </div>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {item.category}
                </TableCell>
                <TableCell className="pl-0 align-top md:pl-4">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-baseline justify-between gap-1 md:hidden">
                      <div className="flex items-center gap-1">
                        <span className="text-sm font-medium">
                          {item.category}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          - {item.segment}
                        </span>
                        <span
                          className={cn(
                            "ml-1 block h-1.5 w-4 rounded-full md:hidden",
                            item.offer === "Free" && "bg-yellow-400",
                            item.offer === "Professional" && "bg-green-400",
                            item.offer === "Enterprise" && "bg-blue-400",
                          )}
                        ></span>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground md:text-primary">
                      {item.description}
                    </p>
                  </div>
                </TableCell>
                <TableCell className="hidden text-right md:table-cell">
                  {item.year}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <div className="flex items-center gap-2">
                    <span
                      className={cn(
                        "block h-6 w-1.5 rounded-full",
                        item.offer === "Free" && "bg-yellow-400",
                        item.offer === "Professional" && "bg-green-400",
                        item.offer === "Enterprise" && "bg-blue-400",
                      )}
                    ></span>
                    {item.offer}
                  </div>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {item.segment}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export { List1 };



Cta Block

import { ArrowRight, Book, ChevronRight, File } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Cta3 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid grid-cols-1 flex-col gap-10 rounded-lg border p-6 shadow-sm lg:grid-cols-2 lg:px-20 lg:py-16">
          <div>
            <h4 className="mb-2 text-2xl font-bold lg:text-4xl">
              Call To Action
            </h4>
            <p className="text-muted-foreground">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto illo praesentium nisi, accusantium quae.
            </p>
            <div className="mt-8 flex flex-col items-center gap-2 sm:flex-row">
              <Button className="w-full sm:w-auto">
                Get Started
                <ArrowRight className="ml-2 size-4" />
              </Button>
              <Button variant="outline" className="w-full sm:w-auto">
                Contact Sales
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <a href="#">
              <Card className="flex flex-row items-center justify-between gap-2 px-6 py-4 shadow-none hover:bg-accent">
                <div className="flex items-start gap-2">
                  <File className="size-4" />
                  <div>
                    <h5 className="mb-2 leading-4 font-medium">
                      Documentation
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      Lorem ipsum dolor, sit amet consectetur.
                    </p>
                  </div>
                </div>
                <ChevronRight className="size-6" />
              </Card>
            </a>
            <a href="#">
              <Card className="flex flex-row items-center justify-between gap-2 px-6 py-4 shadow-none hover:bg-accent">
                <div className="flex items-start gap-2">
                  <Book className="size-4" />
                  <div>
                    <h5 className="mb-2 leading-4 font-medium">
                      Getting Started
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      Lorem ipsum dolor, sit amet consectetur.
                    </p>
                  </div>
                </div>
                <ChevronRight className="size-6" />
              </Card>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta3 };




📚 RESOURCES - Contact Support Page
Hero Block

import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Hero55 = () => {
  return (
    <section className="relative py-32">
      <div className="container">
        <div className="flex flex-col items-center gap-10 text-center">
          <a
            href="#"
            className="flex items-center gap-2 rounded-full px-2 py-1 text-sm transition-colors hover:bg-muted"
          >
            <Badge>7 days ago</Badge>
            Slack integration is here!
            <ArrowRight className="h-auto w-4" />
          </a>
          <h1 className="text-4xl font-semibold lg:text-8xl">
            Manage design work right from the canvas
          </h1>
          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
            <Button size="lg">Get started - it&apos;s free</Button>
            <Button size="lg" variant="outline">
              Book a demo
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 bg-[50%_0] bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/shadow-overlay.png')] bg-no-repeat"></div>
    </section>
  );
};

export { Hero55 };



Contact Block

import {
  MessageCircleDashed,
  MessagesSquare,
  ScanFace,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const Contact3 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="text-center">
          <h1 className="mb-7 text-4xl font-bold md:text-6xl">Get in Touch</h1>
          <div className="flex flex-col justify-center gap-2 sm:flex-row">
            <Button size="lg">Request a demo</Button>
            <Button variant="outline" size="lg">
              Start your free trial
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            No payment details needed
          </p>
        </div>
        <div className="mt-28 grid gap-16 md:grid-cols-2">
          <div>
            <MessagesSquare className="mb-5 h-8 w-auto" />
            <p className="mb-2 font-bold md:text-xl">Support</p>
            <p className="mb-6 text-sm text-muted-foreground md:text-base">
              Need help or have questions? Our support team is here for you
              24/7. Feel free to reach out via email or live chat.
            </p>
            <a href="#" className="font-semibold hover:underline">
              Contact support
            </a>
          </div>
          <div>
            <Users className="mb-5 h-8 w-auto" />
            <p className="mb-2 font-bold md:text-xl">Sales</p>
            <p className="mb-6 text-sm text-muted-foreground md:text-base">
              Have questions about our services or need a demo? Our sales team
              can assist you with personalized solutions.
            </p>
            <a href="#" className="font-semibold hover:underline">
              Talk to sales
            </a>
          </div>
          <div>
            <MessageCircleDashed className="mb-5 h-8 w-auto" />
            <p className="mb-2 font-bold md:text-xl">Inquiries</p>
            <p className="mb-6 text-sm text-muted-foreground md:text-base">
              For any general inquiries, partnership requests, or media
              questions, fill out the form and we’ll get back to you shortly.
            </p>
            <a href="#" className="font-semibold hover:underline">
              Contact us
            </a>
          </div>
          <div>
            <ScanFace className="mb-5 h-8 w-auto" />
            <p className="mb-2 font-bold md:text-xl">Verification</p>
            <p className="mb-6 text-sm text-muted-foreground md:text-base">
              To verify employment or confirm income, please reach out to our
              third-party verification provider.
            </p>
            <a href="#" className="font-semibold hover:underline">
              Get verified
            </a>
          </div>
        </div>
        <div className="mt-28">
          <h1 className="mb-16 text-center text-2xl font-bold md:text-4xl">
            Our Global Offices
          </h1>
          <div className="mx-auto grid max-w-7xl gap-7 sm:grid-cols-2 md:grid-cols-3 lg:px-14">
            <div className="rounded-lg border p-5">
              <div className="mb-2 flex items-center">
                <div className="mr-2 h-5 w-7 rounded-sm bg-blue-500"></div>
                <p className="font-bold sm:text-lg">New York, USA</p>
              </div>
              <p className="text-sm text-muted-foreground sm:text-base">
                123 5th Ave, New York, NY 10001
              </p>
            </div>
            <div className="rounded-lg border p-5">
              <div className="mb-2 flex items-center">
                <div className="mr-2 h-5 w-7 rounded-sm bg-red-500"></div>
                <p className="font-bold sm:text-lg">London, UK</p>
              </div>
              <p className="text-sm text-muted-foreground sm:text-base">
                50 Oxford St, London W1D 1BS, United Kingdom
              </p>
            </div>
            <div className="rounded-lg border p-5">
              <div className="mb-2 flex items-center">
                <div className="mr-2 h-5 w-7 rounded-sm bg-green-500"></div>
                <p className="font-bold sm:text-lg">Tokyo, Japan</p>
              </div>
              <p className="text-sm text-muted-foreground sm:text-base">
                2-7-5 Kyobashi, Chuo-ku, Tokyo 104-0031, Japan
              </p>
            </div>
            <div className="rounded-lg border p-5">
              <div className="mb-2 flex items-center">
                <div className="mr-2 h-5 w-7 rounded-sm bg-yellow-500"></div>
                <p className="font-bold sm:text-lg">Sydney, Australia</p>
              </div>
              <p className="text-sm text-muted-foreground sm:text-base">
                100 George St, Sydney NSW 2000, Australia
              </p>
            </div>
            <div className="rounded-lg border p-5">
              <div className="mb-2 flex items-center">
                <div className="mr-2 h-5 w-7 rounded-sm bg-purple-500"></div>
                <p className="leading-3 font-bold sm:text-lg">
                  Berlin, Germany
                </p>
              </div>
              <p className="text-sm text-muted-foreground sm:text-base">
                Unter den Linden 52, 10117 Berlin, Germany
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contact3 };



Team Block

import { Github, Twitter, Users } from "lucide-react";

import { Badge } from "@/components/ui/badge";

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "CEO & Founder",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",

    bio: "With a background in software development and a vision for productivity, Alex leads the team with passion on user-first innovation.",
    social: {
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Jamie Lee",
    role: "Chief Product Officer",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",

    bio: "Jamie brings years of experience in product design and strategy, ensuring each feature meets the highest standards of functionality and design. ",
    social: {
      twitter: "#",
    },
  },
  {
    name: "Taylor Smith",
    role: "Head of Engineering",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",

    bio: "Taylor drives the technical vision, overseeing development and ensuring the product is robust, secure, and scalable for users worldwide.",
    social: {
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Morgan Davis",
    role: "Marketing Lead",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",

    bio: "With a knack for storytelling and a deep understanding of the market, Morgan communicates our mission and product benefits to the world.",
    social: {
      twitter: "#",
    },
  },
];

const Team4 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col gap-6 py-4 lg:py-8">
          <Badge
            variant="outline"
            className="w-fit gap-1 bg-card px-3 text-sm font-normal tracking-tight shadow-sm"
          >
            <Users className="size-4" />
            <span>Team up!</span>
          </Badge>
          <h2 className="text-3xl leading-tight tracking-tight md:text-4xl lg:text-6xl">
            The Minds Behind the Mission
          </h2>
          <p className="max-w-[600px] tracking-[-0.32px] text-muted-foreground">
            A dedicated team passionate about shaping the future of
            productivity.
          </p>
        </div>

        <div className="mt-10 grid gap-x-12 gap-y-16 sm:grid-cols-2 md:mt-14 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div key={member.name} className="group flex flex-col">
              <img
                src={member.image}
                alt={member.name}
                width={80}
                height={80}
                className="rounded-full object-contain"
              />
              <div className="mt-6 flex flex-col tracking-[-0.32px]">
                <h3 className="text-lg">{member.name}</h3>
                <p className="text-muted-foreground-subtle">{member.role}</p>
                <p className="mt-4 text-sm tracking-[-0.36px] text-muted-foreground">
                  {member.bio}
                </p>
                <div className="mt-6 flex gap-2">
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      className="hover:text-foreground"
                    >
                      <Twitter />
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      className="hover:text-foreground"
                    >
                      <Github />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Team4 };

Cta Block

import { ArrowRight, Book, ChevronRight, File } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Cta3 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid grid-cols-1 flex-col gap-10 rounded-lg border p-6 shadow-sm lg:grid-cols-2 lg:px-20 lg:py-16">
          <div>
            <h4 className="mb-2 text-2xl font-bold lg:text-4xl">
              Call To Action
            </h4>
            <p className="text-muted-foreground">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto illo praesentium nisi, accusantium quae.
            </p>
            <div className="mt-8 flex flex-col items-center gap-2 sm:flex-row">
              <Button className="w-full sm:w-auto">
                Get Started
                <ArrowRight className="ml-2 size-4" />
              </Button>
              <Button variant="outline" className="w-full sm:w-auto">
                Contact Sales
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <a href="#">
              <Card className="flex flex-row items-center justify-between gap-2 px-6 py-4 shadow-none hover:bg-accent">
                <div className="flex items-start gap-2">
                  <File className="size-4" />
                  <div>
                    <h5 className="mb-2 leading-4 font-medium">
                      Documentation
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      Lorem ipsum dolor, sit amet consectetur.
                    </p>
                  </div>
                </div>
                <ChevronRight className="size-6" />
              </Card>
            </a>
            <a href="#">
              <Card className="flex flex-row items-center justify-between gap-2 px-6 py-4 shadow-none hover:bg-accent">
                <div className="flex items-start gap-2">
                  <Book className="size-4" />
                  <div>
                    <h5 className="mb-2 leading-4 font-medium">
                      Getting Started
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      Lorem ipsum dolor, sit amet consectetur.
                    </p>
                  </div>
                </div>
                <ChevronRight className="size-6" />
              </Card>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta3 };



📚 RESOURCES - Blog & Articles Page
Hero Block

"use client";

import { BookOpen, PenTool, Play } from "lucide-react";
import { useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Hero112 = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="bg-background py-12 md:py-32">
      <div className="container max-w-[60rem]">
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl font-medium lg:text-6xl">
              Find the perfect course for you
            </h1>
            <p className="text-muted-foreground text-lg lg:max-w-[80%]">
              Unlock exclusive access to premium tutorials, insider insights,
              and more. Enhance your creativity and elevate your learning
              journey.
            </p>
            <div className="relative z-10 flex flex-wrap items-center gap-6">
              <Button asChild variant="default">
                <a href="#">Explore Courses</a>
              </Button>
              <Button
                variant="ghost"
                className="group flex items-center gap-2 hover:bg-transparent"
                onClick={() => setIsVideoOpen(true)}
              >
                <div className="bg-primary flex h-10 w-10 rounded-full transition-transform group-hover:scale-110">
                  <Play className="m-auto h-5 w-5 fill-white stroke-white" />
                </div>
                <div>Course Video</div>
              </Button>
            </div>
          </div>
          <div>
            <div className="bg-primary relative mx-auto mt-28 h-[21.25rem] w-[21.25rem] rounded-full md:mx-0 md:mt-0 lg:h-[25rem] lg:w-[25rem]">
              <div className="absolute bottom-0 w-[21.25rem] overflow-hidden rounded-full lg:h-[25rem] lg:w-[25rem]">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                  alt=""
                  className="w-full scale-100 object-cover object-center"
                />
              </div>
              <div className="bg-background absolute -right-5 bottom-10 flex w-[17.5rem] items-center justify-center gap-1 rounded-full px-4 py-3 shadow-md">
                <div className="flex -space-x-[0.875rem]">
                  {[
                    {
                      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
                      fallback: "AB",
                    },
                    {
                      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
                      fallback: "CD",
                    },
                    {
                      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
                      fallback: "EF",
                    },
                  ].map(({ src, fallback }, i) => (
                    <Avatar
                      key={i}
                      className="flex h-12 w-12 shrink-0 rounded-full border-4 border-white object-cover"
                    >
                      <AvatarImage src={src} alt="" />
                      <AvatarFallback>{fallback}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <div className="flex-1 text-sm text-gray-800">
                  7000+ people already joined
                </div>
              </div>
              <div className="bg-primary absolute right-0 top-0 flex h-[6.25rem] w-[6.25rem] rotate-12 rounded-3xl border-8 border-white lg:h-[6.875rem] lg:w-[6.875rem]">
                <BookOpen className="m-auto h-[2.5rem] w-[2.5rem] stroke-white lg:h-[3.125rem] lg:w-[3.125rem]" />
              </div>
              <div className="bg-primary absolute -left-10 top-1/3 flex h-[6.25rem] w-[6.25rem] -rotate-12 rounded-3xl border-8 border-white lg:h-[6.875rem] lg:w-[6.875rem]">
                <PenTool className="m-auto h-[3.5rem] w-[3.5rem] -rotate-90 fill-white lg:h-[4.5rem] lg:w-[4.5rem]" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 rounded-3xl border p-6">
          <div className="flex w-full flex-col md:flex-row">
            <div className="flex flex-1 flex-col gap-3 border-b-[1px] p-6 md:border-b-0 md:border-r-[1px]">
              <div className="text-primary text-2xl font-medium lg:text-4xl">
                87
              </div>
              <div className="text-muted-foreground lg:text-lg">
                Courses by Experts
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-3 border-b-[1px] p-6 md:border-b-0 md:border-r-[1px]">
              <div className="text-primary text-2xl font-medium lg:text-4xl">
                200+
              </div>
              <div className="text-muted-foreground lg:text-lg">
                Hours of Content
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-3 p-6">
              <div className="text-primary text-2xl font-medium lg:text-4xl">
                100%
              </div>
              <div className="text-muted-foreground lg:text-lg">
                User Satisfaction Rating
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="sm:max-w-[800px]">
          <DialogHeader>
            <DialogTitle>Presentation Video</DialogTitle>
          </DialogHeader>
          <div className="aspect-video">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/your-video-id"
              title="Presentation Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export { Hero112 };



Blog Block

import { ArrowRight, FileText } from "lucide-react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Blog12 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <Badge variant="outline" className="gap-1 py-1">
            <FileText className="h-full w-4" /> Our Blogs
          </Badge>
          <h1 className="text-4xl font-semibold text-balance">
            Discover the latest trends
          </h1>
          <p className="text-muted-foreground">
            Explore our blog for insightful articles, personal reflections and
            ideas that inspire action on the topics you care about.
          </p>
        </div>
        <div className="mt-20 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <a className="rounded-xl border" href="#">
            <div className="p-2">
              <img
                src="https://images.unsplash.com/photo-1536735561749-fc87494598cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxNzd8fHx8fHwyfHwxNzIzNjM0NDc0fA&ixlib=rb-4.0.3&q=80&w=1080"
                alt="placeholder"
                className="aspect-video w-full rounded-lg object-cover"
              />
            </div>
            <div className="px-3 pt-2 pb-4">
              <h2 className="mb-1 font-medium">
                How to build a successful brand and business online in 2024
              </h2>
              <p className="line-clamp-2 text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Separator className="my-5" />
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Avatar className="size-9 rounded-full ring-1 ring-input">
                    <AvatarImage
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp"
                      alt="placeholder"
                    />
                  </Avatar>
                  <span className="text-sm font-medium">John Doe</span>
                </div>
                <Badge variant="secondary" className="h-fit">
                  10 Min Read
                </Badge>
              </div>
            </div>
          </a>
          <a className="rounded-xl border" href="#">
            <div className="p-2">
              <img
                src="https://images.unsplash.com/photo-1653288973812-81d1951b8127?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="placeholder"
                className="aspect-video w-full rounded-lg object-cover"
              />
            </div>
            <div className="px-3 pt-2 pb-4">
              <h2 className="mb-1 font-medium">
                The difference between UI and UX and how to design for both
              </h2>
              <p className="line-clamp-2 text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Separator className="my-5" />
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Avatar className="size-9 rounded-full ring-1 ring-input">
                    <AvatarImage
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp"
                      alt="placeholder"
                    />
                  </Avatar>
                  <span className="text-sm font-medium">Jane Doe</span>
                </div>
                <Badge variant="secondary" className="h-fit">
                  14 Min Read
                </Badge>
              </div>
            </div>
          </a>
          <a className="rounded-xl border" href="#">
            <div className="p-2">
              <img
                src="https://images.unsplash.com/photo-1563952532949-3d1a874ad614?q=80&w=1951&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="placeholder"
                className="aspect-video w-full rounded-lg object-cover"
              />
            </div>
            <div className="px-3 pt-2 pb-4">
              <h2 className="mb-1 font-medium">
                Optimizing your website for SEO and getting more traffic
              </h2>
              <p className="line-clamp-2 text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Separator className="my-5" />
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Avatar className="size-9 rounded-full ring-1 ring-input">
                    <AvatarImage
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp"
                      alt="placeholder"
                    />
                  </Avatar>
                  <span className="text-sm font-medium">Jane Smith</span>
                </div>
                <Badge variant="secondary" className="h-fit">
                  9 Min Read
                </Badge>
              </div>
            </div>
          </a>
        </div>
        <div className="mt-10 flex justify-center">
          <Button variant="outline">
            View All Blogs <ArrowRight className="ml-2 h-full w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export { Blog12 };



List Block

import { BarChart3, Briefcase, Cloud, Shield } from "lucide-react";

import { cn } from "@/lib/utils";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const data = [
  {
    icon: <Shield strokeWidth={2} />,
    category: "Security",
    description:
      "Enterprise security solution providing advanced threat protection and monitoring",
    year: 2024,
    offer: "Free",
    segment: "Business",
  },
  {
    icon: <Cloud strokeWidth={2} />,
    category: "Technology",
    description:
      "Cloud-based platform offering scalable solutions for modern businesses",
    year: 2023,
    offer: "Professional",
    segment: "Business",
  },
  {
    icon: <Briefcase strokeWidth={2} />,
    category: "Services",
    description:
      "Comprehensive business management suite for growing organizations",
    year: 2022,
    offer: "Enterprise",
    segment: "Enterprise",
  },
  {
    icon: <BarChart3 strokeWidth={2} />,
    category: "Analytics",
    description:
      "Real-time data analytics platform with customizable dashboards and reporting",
    year: 2024,
    offer: "Professional",
    segment: "Business",
  },
  {
    icon: <Shield strokeWidth={2} />,
    category: "Security",
    description:
      "Advanced endpoint protection system with AI-powered threat detection",
    year: 2023,
    offer: "Professional",
    segment: "Enterprise",
  },
  {
    icon: <Cloud strokeWidth={2} />,
    category: "Technology",
    description:
      "Serverless computing platform with automatic scaling capabilities",
    year: 2024,
    offer: "Enterprise",
    segment: "Business",
  },
  {
    icon: <Briefcase strokeWidth={2} />,
    category: "Services",
    description:
      "Professional consulting services for digital transformation initiatives",
    year: 2023,
    offer: "Free",
    segment: "Business",
  },
];

const List1 = () => {
  return (
    <section className="py-32">
      <div className="container px-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead></TableHead>
              <TableHead className="hidden font-bold text-primary md:table-cell">
                Category
              </TableHead>
              <TableHead>
                <span className="hidden font-bold text-primary md:block">
                  Description
                </span>
                <span className="block font-bold text-primary md:hidden">
                  Project
                </span>
              </TableHead>
              <TableHead className="hidden text-right font-bold text-primary md:table-cell">
                Year
              </TableHead>
              <TableHead className="hidden font-bold text-primary md:table-cell">
                Offer
              </TableHead>
              <TableHead className="hidden font-bold text-primary md:table-cell">
                Segment
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.category}>
                <TableCell className="">
                  <div className="flex items-center gap-2 align-top">
                    {item.icon}
                  </div>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {item.category}
                </TableCell>
                <TableCell className="pl-0 align-top md:pl-4">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-baseline justify-between gap-1 md:hidden">
                      <div className="flex items-center gap-1">
                        <span className="text-sm font-medium">
                          {item.category}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          - {item.segment}
                        </span>
                        <span
                          className={cn(
                            "ml-1 block h-1.5 w-4 rounded-full md:hidden",
                            item.offer === "Free" && "bg-yellow-400",
                            item.offer === "Professional" && "bg-green-400",
                            item.offer === "Enterprise" && "bg-blue-400",
                          )}
                        ></span>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground md:text-primary">
                      {item.description}
                    </p>
                  </div>
                </TableCell>
                <TableCell className="hidden text-right md:table-cell">
                  {item.year}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <div className="flex items-center gap-2">
                    <span
                      className={cn(
                        "block h-6 w-1.5 rounded-full",
                        item.offer === "Free" && "bg-yellow-400",
                        item.offer === "Professional" && "bg-green-400",
                        item.offer === "Enterprise" && "bg-blue-400",
                      )}
                    ></span>
                    {item.offer}
                  </div>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {item.segment}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export { List1 };



Cta Block

import { ArrowRight, Book, ChevronRight, File } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Cta3 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid grid-cols-1 flex-col gap-10 rounded-lg border p-6 shadow-sm lg:grid-cols-2 lg:px-20 lg:py-16">
          <div>
            <h4 className="mb-2 text-2xl font-bold lg:text-4xl">
              Call To Action
            </h4>
            <p className="text-muted-foreground">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto illo praesentium nisi, accusantium quae.
            </p>
            <div className="mt-8 flex flex-col items-center gap-2 sm:flex-row">
              <Button className="w-full sm:w-auto">
                Get Started
                <ArrowRight className="ml-2 size-4" />
              </Button>
              <Button variant="outline" className="w-full sm:w-auto">
                Contact Sales
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <a href="#">
              <Card className="flex flex-row items-center justify-between gap-2 px-6 py-4 shadow-none hover:bg-accent">
                <div className="flex items-start gap-2">
                  <File className="size-4" />
                  <div>
                    <h5 className="mb-2 leading-4 font-medium">
                      Documentation
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      Lorem ipsum dolor, sit amet consectetur.
                    </p>
                  </div>
                </div>
                <ChevronRight className="size-6" />
              </Card>
            </a>
            <a href="#">
              <Card className="flex flex-row items-center justify-between gap-2 px-6 py-4 shadow-none hover:bg-accent">
                <div className="flex items-start gap-2">
                  <Book className="size-4" />
                  <div>
                    <h5 className="mb-2 leading-4 font-medium">
                      Getting Started
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      Lorem ipsum dolor, sit amet consectetur.
                    </p>
                  </div>
                </div>
                <ChevronRight className="size-6" />
              </Card>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta3 };



📚 RESOURCES - Case Studies Page
Hero Block

import { FaStar } from "react-icons/fa";

import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface TestimonialCardProps {
  name: string;
  title: string;
  imageSrc: string;
  className?: string;
  style?: React.CSSProperties;
}

interface RatingDisplayProps {
  rating?: number;
  userCount?: number;
  className?: string;
  style?: React.CSSProperties;
  showAvatars?: boolean;
}

function TestimonialCard({
  name = "Jane Doe",
  title = "Job Title",
  imageSrc = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
  className,
  style,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "bg-card flex w-[320px] flex-col gap-4 rounded-lg p-6 shadow-sm",
        className,
      )}
      style={style}
    >
      <img
        src={imageSrc}
        alt={name}
        className="h-24 w-24 rounded-md object-cover"
      />
      <div className="flex gap-0.5">
        {Array(5)
          .fill(null)
          .map((_, i) => (
            <FaStar key={i} className="h-5 w-5 fill-yellow-400" />
          ))}
      </div>
      <div className="space-y-2">
        <div className="bg-muted h-2 w-[80%] rounded"></div>
        <div className="bg-muted h-2 w-[90%] rounded"></div>
        <div className="bg-muted h-2 w-[60%] rounded"></div>
      </div>
      <div className="space-y-1">
        <p className="text-foreground font-semibold">{name}</p>
        <p className="text-muted-foreground text-sm">{title}</p>
      </div>
    </div>
  );
}

function RatingDisplay({
  rating = 4.9,
  userCount = 500,
  className,
  style,
}: RatingDisplayProps) {
  return (
    <div className={cn("space-y-0.5", className)} style={style}>
      <div className="flex items-center gap-3">
        <div className="flex -space-x-[14px]">
          {[1, 2, 3, 4, 5].map((i) => (
            <Avatar key={i} className="size-12">
              <AvatarImage src={`/images/block/avatar-${i}.webp`} />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          ))}
        </div>
        <div>
          <div className="flex items-end gap-1.5">
            <div className="flex gap-1">
              {Array(5)
                .fill(null)
                .map((_, i) => (
                  <FaStar key={i} className="h-5 w-5 fill-yellow-400" />
                ))}
            </div>
            <p className="text-foreground text-base font-semibold leading-4">
              {rating}
            </p>
          </div>
          <p className="text-muted-foreground whitespace-nowrap text-sm font-medium">
            Join {userCount}+ happy users
          </p>
        </div>
      </div>
    </div>
  );
}

const Hero64 = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="mx-auto flex items-start md:mx-0 md:w-1/2 md:items-center">
            <div className="text-center md:text-left">
              <h1 className="text-foreground text-4xl font-bold tracking-tight sm:text-5xl/tight md:text-6xl/tight">
                Leverage the{" "}
                <span className="bg-linear-to-tr from-gray-600 to-gray-500 bg-clip-text text-transparent">
                  influence of testimonials
                </span>{" "}
                to boost your sales.
              </h1>
              <p className="text-muted-foreground mx-auto mt-3 max-w-md text-base sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
                Gather and display testimonials from happy customers to build
                trust and boost your conversion rate.
              </p>
              <div className="mt-6 flex justify-center md:hidden">
                <RatingDisplay />
              </div>
              <div className="mx-auto mt-8 w-fit md:ml-0">
                <Button size="lg" className="px-6">
                  Start now – completely free!
                </Button>
              </div>
            </div>
          </div>
          <div className="relative mx-auto h-[400px] w-full max-w-xl md:h-[540px] md:w-1/2">
            <div className="relative h-full">
              <TestimonialCard
                name="Sarah Johnson"
                title="Marketing Director"
                imageSrc="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/fabian-centeno-njeVb6E3XB8-unsplash.jpg"
                className="absolute hidden rounded-lg border md:flex"
                style={{
                  left: "0",
                  top: "40%",
                  width: "50%",
                  height: "auto",
                }}
              />
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                alt=""
                className="absolute hidden rounded-lg md:block"
                style={{
                  right: "0",
                  top: "0",
                  width: "45%",
                  height: "42%",
                  objectFit: "cover",
                }}
              />
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-2.svg"
                alt=""
                className="absolute rounded-lg shadow-md"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "min(100%, 235.625px)",
                  height: "min(90%, 355.945px)",
                  objectFit: "cover",
                }}
              />
              <RatingDisplay className="bg-background absolute bottom-4 left-1/2 hidden w-[90%] -translate-x-1/2 rounded-md border px-3 py-2 shadow-lg md:bottom-auto md:left-auto md:right-0 md:top-[54%] md:flex md:w-auto md:translate-x-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero64 };



Casestudies Block

"use client";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

type stat = {
  number: string;
  text: string;
};

interface CardData {
  title: string;
  link: string;
  background: string;
  stats: Array<stat>;
}

const LIST: Array<CardData> = [
  {
    title: "TechCorp's Quantum Leap in AI",
    link: "#",
    background: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-5oYbG-sEImY-unsplash.jpg",
    stats: [
      {
        number: "30%",
        text: "increase in processing speed",
      },
    ],
  },
  {
    title: "GreenTech's Path to Carbon Neutrality by 2025",
    link: "#",
    background: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-o9F8dRoSucM-unsplash.jpg",
    stats: [
      {
        number: "50%",
        text: "reduction in carbon emissions",
      },
    ],
  },
  {
    title: "FinServe's Blockchain Security Revolution",
    link: "#",
    background: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-K1W9OjEgacI-unsplash.jpg",
    stats: [
      {
        number: "60%",
        text: "decrease in fraud cases",
      },
    ],
  },
  {
    title: "EduWorld's VR Learning Transformation",
    link: "#",
    background: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-gDmVqxZt1hg-unsplash.jpg",
    stats: [
      {
        number: "80%",
        text: "increase in student engagement",
      },
    ],
  },
  {
    title: "HealthPlus's Telemedicine Innovation",
    link: "#",
    background: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-sutfgh5DNIU-unsplash.jpg",
    stats: [
      {
        number: "25%",
        text: "increase in patient satisfaction",
      },
    ],
  },
  {
    title: "Ecolands's Sustainable Land Development",
    link: "#",
    background: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-ZXLGP2Qh3Mo-unsplash.jpg",
    stats: [
      {
        number: "30%",
        text: "increase in land productivity",
      },
    ],
  },
];

const Card = ({ link, background, title, stats }: CardData) => {
  return (
    <a
      href={link}
      style={{ backgroundImage: `url(${background})` }}
      className="before:content-[] relative min-h-auto w-full overflow-hidden rounded-[.5rem] bg-black/80 bg-cover bg-center bg-no-repeat p-5 transition-all duration-300 before:absolute before:top-0 before:left-0 before:z-10 before:block before:size-full before:bg-black/50 before:transition-all before:duration-300 hover:before:bg-black/30 sm:aspect-square md:aspect-auto md:min-h-[30rem] md:max-w-[30rem]"
    >
      <div className="relative z-20 flex size-full flex-col justify-between gap-20 md:gap-16">
        <div className="text-2xl leading-[1.2] font-normal text-white md:text-3xl">
          {title}
        </div>
        <div className="flex w-full flex-col gap-8">
          <div className="flex gap-8 text-white">
            {stats.map((item, i) => (
              <div key={`${title}-${i}`} className="flex flex-col gap-1">
                <div className="text-[1.15rem] md:text-xl">{item.number}</div>
                <div className="text-sm opacity-80">{item.text}</div>
              </div>
            ))}
          </div>
          <Button variant="outline" size="sm" className="w-fit">
            Read Story
            <ArrowRight className="size-3.5" />
          </Button>
        </div>
      </div>
    </a>
  );
};

const Feature222 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {LIST.map((item, i) => (
            <Card key={`feature-222-${i}`} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature222 };



Testimonial Block

import { Handshake } from "lucide-react";
import React from "react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    logo: {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-wordmark.svg",
      alt: "Zerostatic logo",
      width: 96.75,
      height: 36,
    },
    quote:
      "Our team at Zerostatic relies heavily on automation, and this app takes it to another level. It&apos;s like having a virtual assistant built right into my workflow.",
    author: {
      name: "Abdulsalam Abdulsalam",
      role: "Product Designer, Zerostatic",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
    },
  },
  {
    logo: {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/figma-wordmark.svg",
      alt: "Notion logo",
      width: 90.75,
      height: 36,
    },
    quote:
      "I especially love the seamless calendar integrations and advanced task management features keep everyone aligned and organized.",
    author: {
      name: "Emma Lee",
      role: "Product Manager, Notion",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    },
  },
  {
    logo: {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/sketch-wordmark.svg",
      alt: "Slack logo",
      width: 100.75,
      height: 36,
    },
    quote:
      "We needed a productivity app that could grow with our team&apos;s evolving needs, this has been the perfect fit. The automation tools have saved us hours.",
    author: {
      name: "Ryan Chen",
      role: "Operations Lead, Slack",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
    },
  },
  {
    logo: {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/tailwind-wordmark.svg",
      alt: "GitHub logo",
      width: 110.75,
      height: 36,
    },
    quote:
      "This platform has been invaluable for managing projects across distributed teams. Its integration with our existing tools makes setup easy.",
    author: {
      name: "Ryan Patel",
      role: "Engineering Manager, GitHub",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
    },
  },
  {
    logo: {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vercel-wordmark.svg",
      alt: "Figma logo",
      width: 96.75,
      height: 36,
    },
    quote:
      "As a designer, I appreciate how intuitive and visually appealing this app is. It simplifies task management without sacrificing powerful features.",
    author: {
      name: "Carlos Diaz",
      role: "Design Lead, Figma",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
    },
  },
  {
    logo: {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/supabase-wordmark.svg",
      alt: "Loom logo",
      width: 96.75,
      height: 36,
    },
    quote:
      "The smart reminders and automated scheduling keep our team focused and on track. We&apos;ve also found the collaborative features to be very helpful.",
    author: {
      name: "Matthew Kim",
      role: "Content Strategist, Loom",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-6.webp",
    },
  },
];

const Testimonial21 = () => {
  return (
    <section className="py-32">
      <div className="border-y">
        <div className="container flex flex-col gap-6 border-x py-4 max-lg:border-x lg:py-8">
          <Badge
            variant="outline"
            className="w-fit gap-1 bg-card px-3 text-sm font-normal tracking-tight shadow-sm"
          >
            <Handshake className="size-4" />
            <span>lovin' it</span>
          </Badge>
          <h2 className="text-3xl leading-tight tracking-tight md:text-4xl lg:text-6xl">
            What industry experts are saying
          </h2>
          <p className="max-w-[600px] tracking-[-0.32px] text-muted-foreground">
            Trusted by Professionals from Leading Tech Companies
          </p>
        </div>
      </div>

      <div className="container mt-10 grid gap-8 sm:grid-cols-2 md:mt-14 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="flex flex-col gap-6 rounded-md bg-background p-6 shadow-sm"
          >
            <img
              src={testimonial.logo.src}
              alt={testimonial.logo.alt}
              width={testimonial.logo.width}
              height={testimonial.logo.height}
              className="object-contain dark:invert"
            />

            <blockquote className="text-muted-foreground-subtle text-lg font-normal italic">{`“${testimonial.quote}”`}</blockquote>

            <div className="mt-auto flex items-center gap-4">
              <img
                src={testimonial.author.image}
                alt={`${testimonial.author.name}'s profile picture`}
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
              <div>
                <p className="text-lg tracking-[-0.36px]">
                  {testimonial.author.name}
                </p>
                <p className="text-muted-foreground">
                  {testimonial.author.role}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-12 h-8 w-full border-y md:h-12 lg:h-[112px]">
        <div className="container h-full w-full border-x"></div>
      </div>
    </section>
  );
};

export { Testimonial21 };



Stats Block

import { BarChart3, TrendingDown, TrendingUp } from "lucide-react";

const Stats5 = () => {
  return (
    <section className="bg-background/50 py-20 md:py-32">
      <div className="container flex flex-col items-start text-left">
        <h2 className="mb-12 w-full max-w-[24rem] text-3xl font-bold text-pretty sm:text-4xl md:mb-20 md:max-w-[30rem] lg:max-w-[40rem] lg:text-5xl lg:leading-[4rem]">
          Platform Performance Insights
        </h2>
        <div className="flex w-full flex-col gap-x-8 gap-y-12 border-border md:flex-row md:border-b md:pb-10">
          <div className="group w-full">
            <div className="relative mb-4 text-6xl font-bold text-primary transition-transform duration-300 group-hover:scale-105 md:mb-6 lg:text-7xl">
              <span>95</span>
              <span className="text-4xl lg:text-5xl">%</span>
              <div className="absolute -bottom-2 left-0 h-1 w-12 rounded-full bg-primary"></div>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground md:text-lg">
              <TrendingUp className="h-5 w-5 text-green-500" />
              <span className="leading-7">Metric 1</span>
            </div>
          </div>

          <div className="group w-full">
            <div className="relative mb-4 text-6xl font-bold text-primary transition-transform duration-300 group-hover:scale-105 md:mb-6 lg:text-7xl">
              <span>95</span>
              <span className="text-4xl lg:text-5xl">%</span>
              <div className="absolute -bottom-2 left-0 h-1 w-12 rounded-full bg-primary"></div>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground md:text-lg">
              <TrendingDown className="h-5 w-5 text-red-500" />
              <span className="leading-7">Metric 2</span>
            </div>
          </div>

          <div className="group w-full">
            <div className="relative mb-4 text-6xl font-bold text-primary transition-transform duration-300 group-hover:scale-105 md:mb-6 lg:text-7xl">
              <span>95</span>
              <span className="text-4xl lg:text-5xl">%</span>
              <div className="absolute -bottom-2 left-0 h-1 w-12 rounded-full bg-primary"></div>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground md:text-lg">
              <BarChart3 className="h-5 w-5 text-blue-500" />
              <span className="leading-7">Metric 3</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Stats5 };



Cta Block

import { ArrowRight, Book, ChevronRight, File } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Cta3 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid grid-cols-1 flex-col gap-10 rounded-lg border p-6 shadow-sm lg:grid-cols-2 lg:px-20 lg:py-16">
          <div>
            <h4 className="mb-2 text-2xl font-bold lg:text-4xl">
              Call To Action
            </h4>
            <p className="text-muted-foreground">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto illo praesentium nisi, accusantium quae.
            </p>
            <div className="mt-8 flex flex-col items-center gap-2 sm:flex-row">
              <Button className="w-full sm:w-auto">
                Get Started
                <ArrowRight className="ml-2 size-4" />
              </Button>
              <Button variant="outline" className="w-full sm:w-auto">
                Contact Sales
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <a href="#">
              <Card className="flex flex-row items-center justify-between gap-2 px-6 py-4 shadow-none hover:bg-accent">
                <div className="flex items-start gap-2">
                  <File className="size-4" />
                  <div>
                    <h5 className="mb-2 leading-4 font-medium">
                      Documentation
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      Lorem ipsum dolor, sit amet consectetur.
                    </p>
                  </div>
                </div>
                <ChevronRight className="size-6" />
              </Card>
            </a>
            <a href="#">
              <Card className="flex flex-row items-center justify-between gap-2 px-6 py-4 shadow-none hover:bg-accent">
                <div className="flex items-start gap-2">
                  <Book className="size-4" />
                  <div>
                    <h5 className="mb-2 leading-4 font-medium">
                      Getting Started
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      Lorem ipsum dolor, sit amet consectetur.
                    </p>
                  </div>
                </div>
                <ChevronRight className="size-6" />
              </Card>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta3 };



📚 RESOURCES - Templates Page
Hero Block

"use client";

import { ArrowRight } from "lucide-react";
import React from "react";

import { Globe } from "@/components/magicui/globe";
import { Meteors } from "@/components/magicui/meteors";
import { Button } from "@/components/ui/button";

const Hero216 = () => {
  return (
    <section className="py-32">
      <div className="container flex flex-col items-center justify-center gap-4 overflow-hidden">
        <p className="text-muted-foreground">
          Bridging Developers, Building the Future
        </p>
        <h1 className="max-w-3xl text-center font-calSans text-6xl md:text-7xl">
          Connecting Developers Worldwide
        </h1>

        <Meteors number={30} />

        <Button
          variant="secondary"
          className="group text-md mt-10 flex w-fit items-center justify-center gap-2 rounded-full px-4 py-1 tracking-tight"
        >
          Get Started
          <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
        </Button>
        <div className="relative h-115 w-full overflow-y-clip">
          <Globe className="translate-y-40 scale-175" />
        </div>
      </div>
    </section>
  );
};

export { Hero216 };



Resource Block

"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Slash } from "lucide-react";
import { Fragment, useCallback, useMemo, useState } from "react";
import { ControllerRenderProps, useForm } from "react-hook-form";
import { z } from "zod";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface BreadcrumbItem {
  label: string;
  link: string;
}

interface Post {
  category: string;
  title: string;
  summary: string;
  link: string;
  cta: string;
  thumbnail: string;
}

interface Category {
  label: string;
  value: string;
}

interface FilterFormProps {
  categories: Array<Category>;
  onCategoryChange: (selectedCategories: string[]) => void;
}

interface BlogsResultProps {
  posts: Array<Post>;
  categories: Array<Category>;
}

interface BreadcrumbBlogProps {
  breadcrumb: Array<BreadcrumbItem>;
}

const POSTS_PER_PAGE = 6;

const BREADCRUMB: Array<BreadcrumbItem> = [
  {
    label: "Resources",
    link: "#",
  },
  {
    label: "Reports",
    link: "#",
  },
];

const CATEGORIES: Array<Category> = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Productivity",
    value: "productivity",
  },
  {
    label: "Accessibility",
    value: "accessibility",
  },
  {
    label: "Performance",
    value: "performance",
  },
];

const PRIMARY_POST: Post = {
  category: "Innovation Spotlight",
  title: "How AI is Transforming Frontend Development",
  summary:
    "Explore how tools like GitHub Copilot, AI design generators, and code assistants are changing the way developers build UIs and ship features faster.",
  link: "#",
  cta: "Discover the Future",
  thumbnail: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
};

const POSTS: Array<Post> = [
  {
    category: "Productivity",
    title: "5 VS Code Extensions That Will Save You Hours",
    summary:
      "Discover must-have extensions to boost your coding efficiency and streamline your workflow.",
    link: "#",
    cta: "Boost Your Editor",
    thumbnail: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  {
    category: "Productivity",
    title: "Time Management for Developers: What Really Works",
    summary:
      "Learn proven strategies to avoid burnout and stay on top of your tasks without stress.",
    link: "#",
    cta: "Manage Your Time",
    thumbnail: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  {
    category: "Productivity",
    title: "Automate Your Workflow with Task Runners",
    summary:
      "Use tools like Gulp, npm scripts, and GitHub Actions to automate repetitive development tasks.",
    link: "#",
    cta: "Automate Now",
    thumbnail: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  {
    category: "Productivity",
    title: "Effective Daily Routines for Developers",
    summary:
      "Discover routines that top developers follow to stay productive, creative, and focused.",
    link: "#",
    cta: "Find Your Flow",
    thumbnail: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  {
    category: "Productivity",
    title: "Master Git Like a Pro with These Shortcuts",
    summary:
      "Speed up your version control workflow with powerful Git aliases and tips.",
    link: "#",
    cta: "Speed Up Git",
    thumbnail: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  {
    category: "Productivity",
    title: "Reducing Context Switching as a Developer",
    summary:
      "Minimize distractions and deep-dive into your code with focused work practices.",
    link: "#",
    cta: "Stay Focused",
    thumbnail: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  {
    category: "Productivity",
    title: "Remote Work Setup: Tools for a Distraction-Free Environment",
    summary:
      "Set up your space and software stack for maximum productivity when working from home.",
    link: "#",
    cta: "Upgrade Your Setup",
    thumbnail: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  {
    category: "Productivity",
    title: "Pomodoro for Coders: Does It Really Work?",
    summary:
      "A practical review of the Pomodoro technique and its effectiveness for software development.",
    link: "#",
    cta: "Try the Method",
    thumbnail: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  {
    category: "Accessibility",
    title: "Why Accessibility Should Be Part of Your MVP",
    summary:
      "Making your product inclusive from day one improves usability and reach.",
    link: "#",
    cta: "Learn Why",
    thumbnail: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  {
    category: "Accessibility",
    title: "Using ARIA Roles Correctly in Your Web App",
    summary:
      "Understand how to enhance screen reader support using ARIA roles and landmarks.",
    link: "#",
    cta: "Improve Semantics",
    thumbnail: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  {
    category: "Accessibility",
    title: "Color Contrast Tips for Better Readability",
    summary:
      "Learn how to choose accessible color combinations that meet WCAG standards.",
    link: "#",
    cta: "Fix Your Colors",
    thumbnail: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  {
    category: "Accessibility",
    title: "Keyboard Navigation: The Overlooked User Experience",
    summary:
      "Ensure your website is fully usable with just a keyboard, for accessibility and speed.",
    link: "#",
    cta: "Test Navigation",
    thumbnail: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  {
    category: "Accessibility",
    title: "Accessible Forms: Labels, Errors & Feedback",
    summary:
      "Improve the usability of your forms by ensuring screen readers and users receive clear instructions.",
    link: "#",
    cta: "Fix Your Forms",
    thumbnail: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  {
    category: "Accessibility",
    title: "Screen Reader Testing: A Beginner's Guide",
    summary:
      "How to test your site with popular screen readers and what to listen for.",
    link: "#",
    cta: "Start Testing",
    thumbnail: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  {
    category: "Accessibility",
    title: "Inclusive Design Thinking in UI Development",
    summary:
      "Design interfaces that consider users of all abilities from the start.",
    link: "#",
    cta: "Design for All",
    thumbnail: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  {
    category: "Accessibility",
    title: "Accessibility Audits: Tools and Checklists",
    summary:
      "Perform thorough accessibility audits with tools like Axe, Lighthouse, and manual checklists.",
    link: "#",
    cta: "Audit Now",
    thumbnail: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  {
    category: "Performance",
    title: "Lazy Loading Images with Modern HTML",
    summary:
      "Improve load times by using native lazy-loading and fallback strategies for images.",
    link: "#",
    cta: "Optimize Images",
    thumbnail: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  {
    category: "Performance",
    title: "Minifying JavaScript Without Breaking Your App",
    summary:
      "Best practices for minifying and tree-shaking your JS bundles to boost speed.",
    link: "#",
    cta: "Shrink Your Code",
    thumbnail: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  {
    category: "Performance",
    title: "Web Vitals Explained: CLS, LCP, FID",
    summary:
      "Learn how to measure and improve Core Web Vitals for a better user experience.",
    link: "#",
    cta: "Improve Vitals",
    thumbnail: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  {
    category: "Performance",
    title: "Server-Side Rendering vs Client-Side: Which is Faster?",
    summary:
      "Compare SSR and CSR strategies and when to use each for better performance.",
    link: "#",
    cta: "Explore Options",
    thumbnail: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  {
    category: "Performance",
    title: "Optimizing Fonts for Faster Page Loads",
    summary:
      "Learn techniques for loading fonts without blocking rendering or causing layout shifts.",
    link: "#",
    cta: "Speed Up Fonts",
    thumbnail: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  {
    category: "Performance",
    title: "Reduce JavaScript Bundle Size with Code Splitting",
    summary:
      "Use dynamic imports and route-based chunking to reduce initial load time.",
    link: "#",
    cta: "Split It Up",
    thumbnail: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  {
    category: "Performance",
    title: "Caching Strategies for Modern Web Apps",
    summary:
      "Leverage HTTP caching, service workers, and CDNs to improve speed and offline support.",
    link: "#",
    cta: "Cache Smarter",
    thumbnail: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  {
    category: "Performance",
    title: "Analyzing Performance Bottlenecks with Chrome DevTools",
    summary:
      "Use the Performance tab in DevTools to track down and fix runtime issues in your app.",
    link: "#",
    cta: "Analyze Now",
    thumbnail: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
];

const FilterFormSchema = z.object({
  items: z.array(z.string()).refine((value) => value.length > 0, {
    message: "At least one category should be selected.",
  }),
});

const FilterForm = ({ categories, onCategoryChange }: FilterFormProps) => {
  const form = useForm<z.infer<typeof FilterFormSchema>>({
    resolver: zodResolver(FilterFormSchema),
    defaultValues: {
      items: [CATEGORIES[0].value],
    },
  });

  const handleCheckboxChange = useCallback(
    (
      checked: boolean | string,
      categoryValue: string,
      field: ControllerRenderProps<z.infer<typeof FilterFormSchema>, "items">,
    ) => {
      let updatedValues = checked
        ? [...field.value, categoryValue]
        : field.value.filter((value: string) => value !== categoryValue);

      // If no categories are checked, add "all"
      if (updatedValues.length === 0) {
        form.setValue("items", ["all"]);
        onCategoryChange(["all"]);
        return;
      }

      // Remove "all" if specific category is checked
      if (updatedValues.includes("all")) {
        updatedValues = updatedValues.filter((v: string) => v !== "all");
      }

      // Avoid unnecessary updates
      if (JSON.stringify(field.value) !== JSON.stringify(updatedValues)) {
        form.setValue("items", updatedValues);
        onCategoryChange(updatedValues);
      }
    },
    [form, onCategoryChange],
  );

  return (
    <Form {...form}>
      <form>
        <FormField
          control={form.control}
          name="items"
          render={({ field }) => (
            <FormItem className="flex w-full flex-wrap items-center gap-2.5">
              {categories.map((category) => {
                const isChecked = field.value?.includes(category.value);
                return (
                  <FormItem
                    key={category.value}
                    className="flex flex-row items-start space-x-3 space-y-0"
                  >
                    <FormControl>
                      <Label className="bg-muted flex cursor-pointer items-center gap-2.5 rounded-full px-2.5 py-1.5">
                        <div>{category.label}</div>
                        <Checkbox
                          checked={isChecked}
                          onCheckedChange={(checked) =>
                            handleCheckboxChange(checked, category.value, field)
                          }
                        />
                      </Label>
                    </FormControl>
                  </FormItem>
                );
              })}
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

const ResourcesResult = ({ posts, categories }: BlogsResultProps) => {
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    CATEGORIES[0].value,
  ]);
  const handleCategoryChange = useCallback((selected: string[]) => {
    setSelectedCategories(selected);
    setVisibleCount(POSTS_PER_PAGE);
  }, []);

  const handleLoadMore = useCallback(() => {
    setVisibleCount((prev) => prev + POSTS_PER_PAGE);
  }, []);
  const filteredPosts = useMemo(() => {
    return posts.filter(
      (post) =>
        selectedCategories.includes(post.category.toLowerCase()) ||
        selectedCategories.includes("all"),
    );
  }, [posts, selectedCategories]);

  const postsToDisplay = filteredPosts.length > 0 ? filteredPosts : posts;

  const hasMore = visibleCount < postsToDisplay.length;

  return (
    <div>
      <FilterForm
        categories={categories}
        onCategoryChange={handleCategoryChange}
      />
      <div className="flex w-full flex-col gap-4 py-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {postsToDisplay.slice(0, visibleCount).map((post) => (
            <ResourcesCard key={post.title} {...post} />
          ))}
        </div>
        {hasMore && (
          <Button
            className="w-full"
            variant="secondary"
            onClick={handleLoadMore}
          >
            Load More
          </Button>
        )}
      </div>
    </div>
  );
};

const BreadcrumbBlog = ({ breadcrumb }: BreadcrumbBlogProps) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumb.map((item, i) => {
          return (
            <Fragment key={`${item.label}`}>
              <BreadcrumbItem>
                <BreadcrumbLink href={item.link}>{item.label}</BreadcrumbLink>
              </BreadcrumbItem>
              {i < breadcrumb.length - 1 ? (
                <BreadcrumbSeparator>
                  <Slash />
                </BreadcrumbSeparator>
              ) : null}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

const EmailFormSchema = z
  .object({
    email: z.string().email({
      message: "Invalid email address",
    }),
  })
  .required({ email: true });

const EmailForm = () => {
  const form = useForm<z.infer<typeof EmailFormSchema>>({
    resolver: zodResolver(EmailFormSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof EmailFormSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="w-full">
                  <div className="relative flex w-full flex-col gap-2 lg:block">
                    <Input
                      {...field}
                      type="email"
                      id="emailInput"
                      placeholder="What's your work email?"
                      className="bg-background h-fit py-4 pl-5 pr-5 lg:pr-[13.75rem]"
                    />
                    <div className="right-2.5 top-1/2 lg:absolute lg:-translate-y-1/2">
                      <Button
                        type="submit"
                        className="w-full rounded-full lg:w-fit"
                      >
                        See Company in action
                        <ArrowRight />
                      </Button>
                    </div>
                  </div>
                  <FormMessage className="py-1" />
                </div>
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

const ResourcesCard = ({
  category,
  title,
  thumbnail,
  summary,
  link,
  cta,
}: Post) => {
  return (
    <a href={link} className="block h-full w-full">
      <Card className="size-full border py-0">
        <CardContent className="p-0">
          <div className="text-muted-foreground border-b p-2.5 text-sm font-medium leading-[1.2]">
            {category}
          </div>
          <AspectRatio ratio={1.520833333} className="overflow-hidden">
            <img
              src={thumbnail}
              alt={title}
              className="block size-full object-cover object-center"
            />
          </AspectRatio>
          <div className="flex w-full flex-col gap-5 p-5">
            <h2 className="text-lg font-bold leading-none md:text-2xl">
              {title}
            </h2>
            <div className="w-full max-w-[20rem]">
              <p className="text-foreground text-sm font-medium leading-[1.4]">
                {summary}
              </p>
            </div>
            <div>
              <Badge className="rounded-full">
                {cta}
                <ArrowRight />
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </a>
  );
};

const Resources1 = () => {
  return (
    <section className="pb-32">
      <div className="bg-muted bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/dot-pattern-2.svg')] bg-[length:3.125rem_3.125rem] bg-repeat">
        <div className="container flex flex-col items-start justify-start gap-16 py-20 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex w-full flex-col justify-between gap-12">
            <div className="flex w-full max-w-[36rem] flex-col gap-8">
              <BreadcrumbBlog breadcrumb={BREADCRUMB} />
              <div className="flex w-full flex-col gap-5">
                <h1 className="text-[2.5rem] font-semibold leading-[1.2] md:text-5xl lg:text-6xl">
                  Explore Reports
                </h1>
                <p className="text-foreground text-xl font-semibold leading-[1.4]">
                  The best Reports is one that captivates readers with engaging,
                  well-researched content presented in a clear and relatable
                  way.
                </p>
              </div>
              <div className="max-w-[30rem]">
                <EmailForm />
              </div>
            </div>
          </div>
          <div className="w-full max-w-[27.5rem]">
            <ResourcesCard {...PRIMARY_POST} />
          </div>
        </div>
      </div>
      <div className="py-20">
        <div className="container flex flex-col gap-8">
          <h2 className="text-[1.75rem] font-medium leading-none md:text-[2.25rem] lg:text-[2rem]">
            All Reports
          </h2>
          <div>
            <ResourcesResult posts={POSTS} categories={CATEGORIES} />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Resources1 };



Download Block

import { Download, Monitor, Shield, Users, Zap } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Download4Props {
  heading?: string;
  description?: string;
  version?: string;
  fileSize?: string;
  features?: string[];
  downloadButton?: {
    text: string;
    url: string;
  };
  learnMoreButton?: {
    text: string;
    url: string;
  };
}

const Download4 = ({
  heading = "Professional Desktop Suite",
  description = "Download our complete desktop application with enterprise-grade features and unlimited access.",
  version = "v3.2.1",
  fileSize = "230 MB",
  features = [
    "Advanced analytics and reporting",
    "Enterprise security and encryption",
    "Unlimited project management",
    "24/7 priority support access",
  ],
  downloadButton = {
    text: "Free Download",
    url: "#",
  },
  learnMoreButton = {
    text: "Documentation",
    url: "#",
  },
}: Download4Props) => {
  return (
    <section className="bg-muted/30 py-32">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <Badge variant="secondary" className="mb-4">
              Latest Release
            </Badge>
            <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {heading}
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              {description}
            </p>
          </div>

          {/* Main Download Card */}
          <Card className="bg-background border p-0 shadow-lg">
            <div className="grid gap-8 p-8 lg:grid-cols-2 lg:items-center">
              {/* Left Side - App Info */}
              <div>
                <div className="mb-6 flex items-center gap-4">
                  <div>
                    <h3 className="text-2xl font-bold">Desktop Application</h3>
                    <p className="text-muted-foreground">
                      Windows • macOS • Linux
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  {features.map((feature, index) => {
                    const icons = [Shield, Zap, Users, Monitor];
                    const Icon = icons[index % icons.length];
                    return (
                      <div key={index} className="flex items-center gap-3">
                        <div className="bg-muted flex h-8 w-8 items-center justify-center rounded-lg">
                          <Icon className="text-foreground h-4 w-4" />
                        </div>
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Side - Download */}
              <div className="lg:pl-8">
                <div className="bg-muted/50 rounded-2xl border p-6">
                  <div className="mb-6 text-center">
                    <div className="mb-2 flex items-center justify-center gap-4">
                      <span className="text-2xl font-bold">{version}</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-muted-foreground font-medium">
                        {fileSize}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Latest stable release
                    </p>
                  </div>

                  <div className="space-y-3">
                    <Button size="lg" className="w-full" asChild>
                      <a href={downloadButton.url}>
                        <Download className="mr-2 h-5 w-5" />
                        {downloadButton.text}
                      </a>
                    </Button>

                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full"
                      asChild
                    >
                      <a href={learnMoreButton.url}>{learnMoreButton.text}</a>
                    </Button>
                  </div>

                  <div className="mt-4 text-center">
                    <p className="text-muted-foreground text-xs">
                      No signup required • Instant download • 30-day trial
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Footer Info */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground text-sm">
              Join 100,000+ teams already using our desktop application
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Download4 };



Cta Block

import { ArrowRight, Book, ChevronRight, File } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Cta3 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid grid-cols-1 flex-col gap-10 rounded-lg border p-6 shadow-sm lg:grid-cols-2 lg:px-20 lg:py-16">
          <div>
            <h4 className="mb-2 text-2xl font-bold lg:text-4xl">
              Call To Action
            </h4>
            <p className="text-muted-foreground">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto illo praesentium nisi, accusantium quae.
            </p>
            <div className="mt-8 flex flex-col items-center gap-2 sm:flex-row">
              <Button className="w-full sm:w-auto">
                Get Started
                <ArrowRight className="ml-2 size-4" />
              </Button>
              <Button variant="outline" className="w-full sm:w-auto">
                Contact Sales
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <a href="#">
              <Card className="flex flex-row items-center justify-between gap-2 px-6 py-4 shadow-none hover:bg-accent">
                <div className="flex items-start gap-2">
                  <File className="size-4" />
                  <div>
                    <h5 className="mb-2 leading-4 font-medium">
                      Documentation
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      Lorem ipsum dolor, sit amet consectetur.
                    </p>
                  </div>
                </div>
                <ChevronRight className="size-6" />
              </Card>
            </a>
            <a href="#">
              <Card className="flex flex-row items-center justify-between gap-2 px-6 py-4 shadow-none hover:bg-accent">
                <div className="flex items-start gap-2">
                  <Book className="size-4" />
                  <div>
                    <h5 className="mb-2 leading-4 font-medium">
                      Getting Started
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      Lorem ipsum dolor, sit amet consectetur.
                    </p>
                  </div>
                </div>
                <ChevronRight className="size-6" />
              </Card>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta3 };




🏢 COMPANY - About Us Page
Hero Block

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const Hero38 = () => {
  return (
    <section>
      <div className="container">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center py-32 text-center lg:mx-auto lg:items-start lg:px-0 lg:text-left">
            <p>New Release</p>
            <h1 className="my-6 text-4xl font-bold text-pretty lg:text-6xl">
              Welcome to Our Website
            </h1>
            <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
              doloremque mollitia fugiat omnis! Porro facilis quo animi
              consequatur. Explicabo.
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <Button className="w-full sm:w-auto">
                <ArrowRight className="mr-2 size-4" />
                Primary
              </Button>
              <Button variant="outline" className="w-full sm:w-auto">
                Secondary
              </Button>
            </div>
          </div>
          <div className="relative aspect-3/4">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 800 800"
                className="h-full w-full text-muted-foreground opacity-20"
              >
                {Array.from(Array(720).keys()).map((dot, index, array) => {
                  const angle = 0.2 * index;
                  const scalar = 40 + index * (360 / array.length);
                  const x = Math.round(Math.cos(angle) * scalar);
                  const y = Math.round(Math.sin(angle) * scalar);

                  return (
                    <circle
                      key={index}
                      r={(3 * index) / array.length}
                      cx={400 + x}
                      cy={400 + y}
                      opacity={1 - Math.sin(angle)}
                    />
                  );
                })}
              </svg>
            </div>
            <div className="absolute top-[10%] left-[8%] flex aspect-5/6 w-[38%] justify-center rounded-lg border border-border bg-accent"></div>
            <div className="absolute top-[20%] right-[12%] flex aspect-square w-[20%] justify-center rounded-lg border border-border bg-accent"></div>
            <div className="absolute right-[24%] bottom-[24%] flex aspect-5/6 w-[38%] justify-center rounded-lg border border-border bg-accent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero38 };



About Block

import { CircleArrowRight, Files, Settings } from "lucide-react";

const About1 = () => {
  return (
    <section className="py-32">
      <div className="container flex flex-col gap-28">
        <div className="flex flex-col gap-7">
          <h1 className="text-4xl font-semibold lg:text-7xl">
            Bringing the power of software to everyone
          </h1>
          <p className="max-w-xl text-lg">
            Stacker makes it easy to build customer portals, CRMs, internal
            tools, and other business applications for your team. In minutes,
            not months.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
            alt="placeholder"
            className="size-full max-h-96 rounded-2xl object-cover"
          />
          <div className="flex flex-col justify-between gap-10 rounded-2xl bg-muted p-10">
            <p className="text-sm text-muted-foreground">OUR MISSION</p>
            <p className="text-lg font-medium">
              We believe that building software should be insanely easy. That
              everyone should have the freedom to create the tools they need,
              without any developers, designers or drama.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6 md:gap-20">
          <div className="max-w-xl">
            <h2 className="mb-2.5 text-3xl font-semibold md:text-5xl">
              We make creating software ridiculously easy
            </h2>
            <p className="text-muted-foreground">
              We aim to help empower 1,000,000 teams to create their own
              software. Here is how we plan on doing it.
            </p>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            <div className="flex flex-col">
              <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-accent">
                <Files className="size-5" />
              </div>
              <h3 className="mt-2 mb-3 text-lg font-semibold">
                Being radically open
              </h3>
              <p className="text-muted-foreground">
                We believe there’s no room for big egos and there’s always time
                to help each other. We strive to give and receive feedback,
                ideas, perspectives
              </p>
            </div>
            <div className="flex flex-col">
              <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-accent">
                <CircleArrowRight className="size-5" />
              </div>
              <h3 className="mt-2 mb-3 text-lg font-semibold">
                Moving the needle
              </h3>
              <p className="text-muted-foreground">
                Boldly, bravely and with clear aims. We seek out the big
                opportunities and double down on the most important things to
                work on.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-accent">
                <Settings className="size-5" />
              </div>
              <h3 className="mt-2 mb-3 text-lg font-semibold">
                Optimizing for empowerment
              </h3>
              <p className="text-muted-foreground">
                We believe that everyone should be empowered to do whatever they
                think is in the company&apos;s best interests.
              </p>
            </div>
          </div>
        </div>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="mb-10 text-sm font-medium text-muted-foreground">
              JOIN OUR TEAM
            </p>
            <h2 className="mb-2.5 text-3xl font-semibold md:text-5xl">
              We&apos;re changing how software is made
            </h2>
          </div>
          <div>
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
              alt="placeholder"
              className="mb-6 max-h-36 w-full rounded-xl object-cover"
            />
            <p className="text-muted-foreground">
              And we&apos;re looking for the right people to help us do it. If
              you&apos;re passionate about making change in the world, this
              might be the place for you
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { About1 };



Team Block

const team = [
  {
    name: "Dennis Bouvard",
    company: "Blackbird Ventures",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
  },
  {
    name: "Renatus Gerard",
    company: "Center Studies",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
  },
  {
    name: "Leslie Alexander",
    company: "TechNexus",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
  },
  {
    name: "Matthew Stephens",
    company: "Etymol Cap",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
  },
  {
    name: "Josephine Newman",
    company: "Vandenberg",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
  },
];

const Team7 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <h2 className="text-4xl font-medium tracking-wide text-primary">
          Our investors
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {team.map((investor) => (
            <div key={investor.name} className="">
              <img
                src={investor.image}
                alt={investor.name}
                width={120}
                height={120}
                className="rounded-full object-cover"
              />
              <h3 className="mt-3 font-semibold">{investor.name}</h3>
              <p className="text-muted-foreground">{investor.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Team7 };



Timeline Block

"use client";

import { Cloud, Sparkles, Users, XCircle } from "lucide-react";

interface DataItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const DATA: DataItem[] = [
  {
    icon: <Cloud strokeWidth={1.5} className="size-12" />,
    title: "AI-Driven Insights",
    description:
      "Leverage advanced AI algorithms to gain actionable insights and make data-driven decisions for your business.",
  },
  {
    icon: <XCircle strokeWidth={1.5} className="size-12" />,
    title: "Error-Free Automation",
    description:
      "Eliminate manual errors with intelligent automation tools that ensure accuracy and consistency across all processes.",
  },
  {
    icon: <Users strokeWidth={1.5} className="size-12" />,
    title: "Seamless Team Collaboration",
    description:
      "Enhance teamwork with AI-powered collaboration tools that enable real-time communication and shared workflows.",
  },
];

const Timeline5 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Fixed Content */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
                Unlock{" "}
                <span className="relative inline-block">
                  <span className="text-muted-foreground">AI</span>
                  <Sparkles className="absolute -top-2 -right-4 size-5 fill-yellow-500 stroke-none" />
                </span>
                <br />
                for your existing workflows
              </h2>
              <p className="mt-12 text-base text-muted-foreground">
                Seamlessly integrate AI into your workflows. Automate tasks,
                enhance efficiency, and stay ahead.
              </p>
            </div>
          </div>

          {/* Right Column - Scrollable Cards */}
          <div className="-mt-8 sm:-mt-12">
            {DATA.map((item, index) => (
              <div
                key={index}
                className="relative my-12 overflow-hidden rounded-lg bg-muted px-8 py-16 shadow-none sm:px-12 sm:py-24 lg:px-16 lg:py-32"
              >
                <div className="gap-4 sm:gap-6">
                  <div className="block shrink-0">{item.icon}</div>
                  <div className="absolute top-12 right-12 font-mono text-5xl">
                    0{index + 1}
                  </div>
                  <div className="mt-6">
                    <h4 className="mb-2 text-2xl font-semibold text-primary">
                      {item.title}
                    </h4>
                    <p className="mt-6 text-xs text-muted-foreground sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Timeline5 };



Cta Block

"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const Cta30 = () => {
  return (
    <section className="bg-background">
      <div className="container flex flex-col items-center justify-center py-32">
        <div className="flex">
          <Avatar className="relative -mr-4 size-14 overflow-hidden rounded-full border">
            <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp" alt="" />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <Avatar className="relative -mr-4 size-14 overflow-hidden rounded-full border">
            <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp" alt="" />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <Avatar className="relative -mr-4 size-14 overflow-hidden rounded-full border">
            <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp" alt="" />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <Avatar className="relative -mr-4 size-14 overflow-hidden rounded-full border">
            <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp" alt="" />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <Avatar className="relative -mr-4 size-14 overflow-hidden rounded-full border">
            <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp" alt="" />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <Avatar className="relative -mr-4 size-14 overflow-hidden rounded-full border">
            <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-6.webp" alt="" />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
        </div>
        <header>
          <h1 className="mt-6 text-center text-4xl font-semibold tracking-tighter lg:text-7xl">
            Where Strong teams start
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-muted-foreground md:text-2xl">
            Strong teams thrive on trust, collaboration, and shared vision.
            Together, we can turn ambitious goals into remarkable achievements
          </p>
        </header>
        <div className="group">
          <div className="relative flex items-center justify-center">
            <Button className="mt-6 h-12 rounded-2xl px-6 text-lg">
              Get Started Now
            </Button>
            <div className="absolute -right-25 -bottom-20 flex items-end md:-right-52">
              <Line />
              <p className="font-caveat text-xl tracking-tight text-foreground">
                No Signup Required Enjoy!!!!!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta30 };

const Line = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      width="77"
      height="80"
      viewBox="0 0 77 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M75.4725 60.0021C45.5073 65.1045 23.2825 43.9431 11.4282 18.1701C11.2238 17.7278 10.6987 17.5325 10.2564 17.7369C9.8141 17.9414 9.61882 18.4664 9.82326 18.9087C22.008 45.4042 44.9655 66.9889 75.7702 61.743C76.2503 61.6623 76.5733 61.2059 76.4919 60.7237C76.4111 60.2436 75.9547 59.9207 75.4725 60.0021Z"
        fill="black"
      />
      <path
        d="M10.846 19.02C12.1043 19.929 13.6707 21.0873 13.8523 21.2135C18.7735 24.635 23.9617 27.1097 29.6911 28.9119C30.156 29.0588 30.653 28.799 30.7998 28.3342C30.9467 27.8693 30.6869 27.3724 30.2221 27.2255C24.6657 25.4797 19.6334 23.0811 14.8601 19.7616C14.5818 19.5683 11.062 16.9624 10.3108 16.4889C10.0035 16.2933 9.76888 16.278 9.71317 16.2797C9.41708 16.2773 9.22434 16.3985 9.09505 16.5201C8.95011 16.6585 8.76658 16.9454 8.76869 17.3853C8.77276 17.8457 9.01473 18.7939 9.05649 19.0381C9.67624 22.7255 10.6892 26.7869 10.8614 30.7273C11.0258 34.485 10.4248 38.1371 7.83746 41.1938C7.52215 41.5656 7.56983 42.1244 7.94168 42.4397C8.31352 42.755 8.8723 42.7074 9.18761 42.3355C12.0796 38.9175 12.8109 34.8503 12.6274 30.6511C12.4558 26.734 11.4799 22.7004 10.846 19.02Z"
        fill="black"
      />
    </svg>
  );
};



🏢 COMPANY - Contact Page

Hero Block

import { Button } from "@/components/ui/button";

const Hero16 = () => {
  return (
    <section className="py-32">
      <div className="container flex flex-col items-center text-center">
        <h1 className="my-3 text-3xl font-bold text-pretty sm:text-4xl md:my-6 lg:text-6xl">
          Welcome to Our Website
        </h1>
        <p className="mb-6 max-w-xl text-muted-foreground lg:mb-12 lg:text-2xl">
          Elig doloremque mollitia fugiat omnis! Porro facilis quo animi
          consequatur.
        </p>
        <div className="mb-6 flex gap-2 lg:mb-12">
          <Button>Primary</Button>
          <Button variant="outline">Secondary</Button>
        </div>
      </div>
      <div className="container">
        <div className="aspect-video [mask-image:linear-gradient(#000_80%,transparent_100%)]">
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
            alt="placeholder hero"
            className="h-full w-full rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export { Hero16 };



Contact Block

import { Facebook, Linkedin, Twitter } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Contact10 = () => {
  return (
    <section className="relative mx-2.5 mt-2.5 rounded-t-2xl rounded-b-[36px] bg-linear-to-b from-amber-50 via-background to-background py-32 lg:mx-4 dark:from-amber-950">
      <div className="container max-w-2xl">
        <h1 className="text-center text-4xl font-semibold tracking-tight lg:text-5xl">
          Contact us
        </h1>
        <p className="mt-4 text-center leading-snug font-medium text-muted-foreground lg:mx-auto">
          Hopefully this form gets through our spam filters.
        </p>

        <div className="mt-10 flex justify-between gap-8 max-sm:flex-col md:mt-14 lg:mt-20 lg:gap-12">
          <div>
            <h2 className="font-semibold">Corporate office</h2>
            <p className="mt-3 text-muted-foreground">
              1 Carlsberg Close
              <br />
              1260 Hillview, Australia
            </p>
          </div>

          <div>
            <h2 className="font-semibold">Email us</h2>
            <div className="mt-3">
              <div>
                <p className="text-primary">Careers</p>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  support@example.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-semibold">Follow us</h2>
            <div className="mt-3 flex gap-6 lg:gap-10">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <Facebook className="size-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <Twitter className="size-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <Linkedin className="size-5" />
              </a>
            </div>
          </div>
        </div>

        <DashedLine className="my-12" />

        {/* Inquiry Form */}
        <div className="mx-auto">
          <h2 className="text-lg font-semibold">Inquiries</h2>
          <form className="mt-8 space-y-5">
            <div className="space-y-2">
              <Label>Full name</Label>
              <Input placeholder="First and last name" />
            </div>
            <div className="space-y-2">
              <Label>Work email address</Label>
              <Input placeholder="me@company.com" type="email" />
            </div>
            <div className="space-y-2">
              <Label>
                Company name{" "}
                <span className="text-muted-foreground">(optional)</span>
              </Label>
              <Input placeholder="Company name" />
            </div>
            <div className="space-y-2">
              <Label>
                Number of employees{" "}
                <span className="text-muted-foreground">(optional)</span>
              </Label>
              <Input placeholder="e.g. 10-50" />
            </div>
            <div className="space-y-2">
              <Label>Your message</Label>
              <Textarea
                placeholder="Write your message"
                className="min-h-[120px] resize-none"
              />
            </div>

            <div className="flex justify-end">
              <Button size="lg" type="submit" className="">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

interface DashedLineProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
}

const DashedLine = ({
  orientation = "horizontal",
  className,
}: DashedLineProps) => {
  const isHorizontal = orientation === "horizontal";

  return (
    <div
      className={cn(
        "relative text-muted-foreground",
        isHorizontal ? "h-px w-full" : "h-full w-px",
        className,
      )}
    >
      <div
        className={cn(
          isHorizontal
            ? [
                "h-px w-full",
                "bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)]",
                "[mask-image:linear-gradient(90deg,transparent,black_25%,black_75%,transparent)]",
              ]
            : [
                "h-full w-px",
                "bg-[repeating-linear-gradient(180deg,transparent,transparent_4px,currentColor_4px,currentColor_8px)]",
                "[mask-image:linear-gradient(180deg,transparent,black_25%,black_75%,transparent)]",
              ],
        )}
      />
    </div>
  );
};

export { Contact10 };



Team Block

import { Github, Twitter, Users } from "lucide-react";

import { Badge } from "@/components/ui/badge";

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "CEO & Founder",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",

    bio: "With a background in software development and a vision for productivity, Alex leads the team with passion on user-first innovation.",
    social: {
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Jamie Lee",
    role: "Chief Product Officer",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",

    bio: "Jamie brings years of experience in product design and strategy, ensuring each feature meets the highest standards of functionality and design. ",
    social: {
      twitter: "#",
    },
  },
  {
    name: "Taylor Smith",
    role: "Head of Engineering",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",

    bio: "Taylor drives the technical vision, overseeing development and ensuring the product is robust, secure, and scalable for users worldwide.",
    social: {
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Morgan Davis",
    role: "Marketing Lead",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",

    bio: "With a knack for storytelling and a deep understanding of the market, Morgan communicates our mission and product benefits to the world.",
    social: {
      twitter: "#",
    },
  },
];

const Team4 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col gap-6 py-4 lg:py-8">
          <Badge
            variant="outline"
            className="w-fit gap-1 bg-card px-3 text-sm font-normal tracking-tight shadow-sm"
          >
            <Users className="size-4" />
            <span>Team up!</span>
          </Badge>
          <h2 className="text-3xl leading-tight tracking-tight md:text-4xl lg:text-6xl">
            The Minds Behind the Mission
          </h2>
          <p className="max-w-[600px] tracking-[-0.32px] text-muted-foreground">
            A dedicated team passionate about shaping the future of
            productivity.
          </p>
        </div>

        <div className="mt-10 grid gap-x-12 gap-y-16 sm:grid-cols-2 md:mt-14 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div key={member.name} className="group flex flex-col">
              <img
                src={member.image}
                alt={member.name}
                width={80}
                height={80}
                className="rounded-full object-contain"
              />
              <div className="mt-6 flex flex-col tracking-[-0.32px]">
                <h3 className="text-lg">{member.name}</h3>
                <p className="text-muted-foreground-subtle">{member.role}</p>
                <p className="mt-4 text-sm tracking-[-0.36px] text-muted-foreground">
                  {member.bio}
                </p>
                <div className="mt-6 flex gap-2">
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      className="hover:text-foreground"
                    >
                      <Twitter />
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      className="hover:text-foreground"
                    >
                      <Github />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Team4 };



Cta Block

"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const Cta30 = () => {
  return (
    <section className="bg-background">
      <div className="container flex flex-col items-center justify-center py-32">
        <div className="flex">
          <Avatar className="relative -mr-4 size-14 overflow-hidden rounded-full border">
            <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp" alt="" />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <Avatar className="relative -mr-4 size-14 overflow-hidden rounded-full border">
            <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp" alt="" />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <Avatar className="relative -mr-4 size-14 overflow-hidden rounded-full border">
            <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp" alt="" />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <Avatar className="relative -mr-4 size-14 overflow-hidden rounded-full border">
            <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp" alt="" />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <Avatar className="relative -mr-4 size-14 overflow-hidden rounded-full border">
            <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp" alt="" />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <Avatar className="relative -mr-4 size-14 overflow-hidden rounded-full border">
            <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-6.webp" alt="" />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
        </div>
        <header>
          <h1 className="mt-6 text-center text-4xl font-semibold tracking-tighter lg:text-7xl">
            Where Strong teams start
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-muted-foreground md:text-2xl">
            Strong teams thrive on trust, collaboration, and shared vision.
            Together, we can turn ambitious goals into remarkable achievements
          </p>
        </header>
        <div className="group">
          <div className="relative flex items-center justify-center">
            <Button className="mt-6 h-12 rounded-2xl px-6 text-lg">
              Get Started Now
            </Button>
            <div className="absolute -right-25 -bottom-20 flex items-end md:-right-52">
              <Line />
              <p className="font-caveat text-xl tracking-tight text-foreground">
                No Signup Required Enjoy!!!!!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta30 };

const Line = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      width="77"
      height="80"
      viewBox="0 0 77 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M75.4725 60.0021C45.5073 65.1045 23.2825 43.9431 11.4282 18.1701C11.2238 17.7278 10.6987 17.5325 10.2564 17.7369C9.8141 17.9414 9.61882 18.4664 9.82326 18.9087C22.008 45.4042 44.9655 66.9889 75.7702 61.743C76.2503 61.6623 76.5733 61.2059 76.4919 60.7237C76.4111 60.2436 75.9547 59.9207 75.4725 60.0021Z"
        fill="black"
      />
      <path
        d="M10.846 19.02C12.1043 19.929 13.6707 21.0873 13.8523 21.2135C18.7735 24.635 23.9617 27.1097 29.6911 28.9119C30.156 29.0588 30.653 28.799 30.7998 28.3342C30.9467 27.8693 30.6869 27.3724 30.2221 27.2255C24.6657 25.4797 19.6334 23.0811 14.8601 19.7616C14.5818 19.5683 11.062 16.9624 10.3108 16.4889C10.0035 16.2933 9.76888 16.278 9.71317 16.2797C9.41708 16.2773 9.22434 16.3985 9.09505 16.5201C8.95011 16.6585 8.76658 16.9454 8.76869 17.3853C8.77276 17.8457 9.01473 18.7939 9.05649 19.0381C9.67624 22.7255 10.6892 26.7869 10.8614 30.7273C11.0258 34.485 10.4248 38.1371 7.83746 41.1938C7.52215 41.5656 7.56983 42.1244 7.94168 42.4397C8.31352 42.755 8.8723 42.7074 9.18761 42.3355C12.0796 38.9175 12.8109 34.8503 12.6274 30.6511C12.4558 26.734 11.4799 22.7004 10.846 19.02Z"
        fill="black"
      />
    </svg>
  );
};



🏢 COMPANY - Careers Page
Hero Block

import { MoveRight } from "lucide-react";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

const Hero158 = () => {
  return (
    <section className="bg-primary/5 py-12 font-sans md:py-20">
      <div className="container max-w-[87.5rem]">
        <div className="grid grid-cols-1 gap-[5.625rem] lg:grid-cols-2">
          <div>
            <div className="flex flex-col gap-12">
              <div>
                <h1 className="mb-3 text-4xl font-bold md:text-5xl lg:text-6xl">
                  Uncover our vision for a more innovative, better future
                </h1>
                <p className="text-lg text-muted-foreground">
                  Be part of our journey to innovate and develop solutions that
                  enrich lives and fuel progress.
                </p>
              </div>
              <Button
                asChild
                className="group flex h-fit w-fit items-center gap-2 rounded-full px-8 py-3"
              >
                <a href="#">
                  <div className="font-medium text-white">Started for free</div>
                  <div className="relative h-6 w-7 overflow-hidden">
                    <div className="absolute top-0 left-0 flex -translate-x-1/2 items-center transition-all duration-500 group-hover:translate-x-0">
                      <MoveRight className="h-6! w-6! fill-white px-1" />
                      <MoveRight className="h-6! w-6! fill-white px-1" />
                    </div>
                  </div>
                </a>
              </Button>
            </div>
          </div>
          <div>
            <AspectRatio ratio={1.390658174 / 1}>
              <div className="grid h-full w-full grid-cols-2 grid-rows-2 gap-5 lg:max-w-[38.9375rem] lg:gap-8">
                <div className="col-[1/2] row-[1/3]">
                  <div className="h-full w-full overflow-hidden rounded-xl sm:rounded-2xl xl:rounded-3xl">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
                      alt=""
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
                <div className="col-[2/3] row-[1/2]">
                  <div className="h-full w-full overflow-hidden rounded-xl sm:rounded-2xl xl:rounded-3xl">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-2.svg"
                      alt=""
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
                <div className="col-[2/3] row-[2/3]">
                  <div className="h-full w-full overflow-hidden rounded-xl sm:rounded-2xl xl:rounded-3xl">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-3.svg"
                      alt=""
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero158 };


Careers Block

import { Map } from "lucide-react";

const jobs = [
  {
    title: "Senior Software Engineer",
    category: "Engineering",
    description:
      "You will be responsible for the development of new and existing software products.",
    location: "Remote",
    type: "Full-time",
    salary: "$120k - $180k",
    link: "#",
  },
  {
    title: "Product Manager",
    category: "Engineering",
    description: "Help us build the next generation of Acme products.",
    location: "Remote",
    type: "Full-time",
    salary: "$100k - $150k",
    link: "#",
  },
  {
    title: "QA Engineer",
    category: "Engineering",
    description:
      "Ensure the quality of our software products through testing and automation.",
    location: "Remote",
    type: "Full-time",
    salary: "$80k - $120k",
    link: "#",
  },
  {
    title: "Technical Support Specialist",
    category: "Engineering",
    description:
      "Provide technical support to our customers and internal teams.",
    location: "Remote",
    type: "Full-time",
    salary: "$60k - $90k",
    link: "#",
  },
  {
    title: "Content Writer",
    category: "Marketing",
    description:
      "Create engaging content for our blog, website, and social media channels.",
    location: "Remote",
    type: "Full-time",
    salary: "$50k - $80k",
    link: "#",
  },
  {
    title: "Social Media Manager",
    category: "Marketing",
    description:
      "Manage our social media presence and engage with our followers.",
    location: "Remote",
    type: "Full-time",
    salary: "$45k - $75k",
    link: "#",
  },
];

const Careers5 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h1 className="mb-3 text-4xl font-semibold">Careers</h1>
          </div>
          <div>
            {jobs.map((job) => (
              <div key={job.title} className="border-t py-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <a
                      href={job.link}
                      className="mb-1 text-lg font-semibold hover:underline"
                    >
                      {job.title}
                    </a>
                    <p className="text-muted-foreground">{job.description}</p>
                  </div>
                  <div className="text-muted-foreground flex gap-4 text-sm">
                    <div className="flex gap-2">
                      <Map className="h-auto w-4" />
                      {job.location}
                    </div>
                    <div className="flex gap-2">{job.salary}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Careers5 };



Team Block

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const team = [
  {
    id: "person-1",
    name: "Sarah Chen",
    role: "CEO & Co-founder",
    department: "Leadership",
    description:
      "Former Google PM with 10+ years building products that millions use daily. Passionate about creating meaningful impact through technology.",
    expertise: ["Product Strategy", "Team Leadership", "Growth"],
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
  },
  {
    id: "person-2",
    name: "Marcus Rodriguez",
    role: "CTO & Co-founder",
    department: "Engineering",
    description:
      "Ex-Meta engineer who led teams building infrastructure that served billions of users. Loves solving complex technical challenges.",
    expertise: ["System Architecture", "AI/ML", "Scalability"],
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
  },
  {
    id: "person-3",
    name: "Priya Patel",
    role: "Head of Design",
    department: "Design",
    description:
      "Design leader with experience at Airbnb and Figma. Believes great design should be invisible and solve real user problems.",
    expertise: ["UX Design", "Design Systems", "User Research"],
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
  },
  {
    id: "person-4",
    name: "David Kim",
    role: "VP of Engineering",
    department: "Engineering",
    description:
      "Built and scaled engineering teams at Stripe and Uber. Focuses on creating high-performing teams and robust systems.",
    expertise: ["Team Building", "Backend Systems", "DevOps"],
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
  },
  {
    id: "person-5",
    name: "Emma Thompson",
    role: "Head of Marketing",
    department: "Marketing",
    description:
      "Marketing strategist who grew multiple startups from 0 to millions in revenue. Expert in growth marketing and brand building.",
    expertise: ["Growth Marketing", "Brand Strategy", "Content"],
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
  },
  {
    id: "person-6",
    name: "Alex Johnson",
    role: "Head of Sales",
    department: "Sales",
    description:
      "Sales leader with a track record of building high-performing teams and exceeding revenue targets in competitive markets.",
    expertise: ["Enterprise Sales", "Team Management", "Customer Success"],
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-6.webp",
  },
];

const Team5 = () => {
  return (
    <section className="from-background to-muted/20 bg-gradient-to-b py-24">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold tracking-tight lg:text-5xl">
            Team
          </h2>
          <p className="text-muted-foreground mx-auto max-w-3xl text-xl leading-relaxed">
            Our diverse team of experts brings together decades of experience in
            design, engineering, and product development.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <Card
              key={member.id}
              className="bg-card/50 group border-0 backdrop-blur-sm transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="p-6">
                {/* Avatar Placeholder */}
                <div className="relative mb-6">
                  <Avatar className="mx-auto h-20 w-20">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback className="from-primary/20 to-secondary/20 text-primary bg-gradient-to-br text-2xl font-bold">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                </div>

                {/* Member Info */}
                <div className="mb-4 text-center">
                  <h3 className="group-hover:text-primary mb-1 text-lg font-semibold transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-primary mb-2 text-sm font-medium">
                    {member.role}
                  </p>
                  <Badge variant="outline" className="text-xs">
                    {member.department}
                  </Badge>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {member.description}
                </p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-1">
                  {member.expertise.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-muted/50 px-2 py-1 text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 border-t pt-16 text-center">
          <h3 className="mb-4 text-2xl font-semibold">
            Ready to build the future with us?
          </h3>
          <p className="text-muted-foreground mx-auto mb-6 max-w-2xl">
            We're always looking for talented individuals who share our passion
            for innovation and making a difference. Check out our current
            openings.
          </p>
          <Button size="lg" className="px-8">
            Explore Careers
          </Button>
        </div>
      </div>
    </section>
  );
};

export { Team5 };



Cta Block

"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const Cta30 = () => {
  return (
    <section className="bg-background">
      <div className="container flex flex-col items-center justify-center py-32">
        <div className="flex">
          <Avatar className="relative -mr-4 size-14 overflow-hidden rounded-full border">
            <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp" alt="" />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <Avatar className="relative -mr-4 size-14 overflow-hidden rounded-full border">
            <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp" alt="" />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <Avatar className="relative -mr-4 size-14 overflow-hidden rounded-full border">
            <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp" alt="" />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <Avatar className="relative -mr-4 size-14 overflow-hidden rounded-full border">
            <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp" alt="" />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <Avatar className="relative -mr-4 size-14 overflow-hidden rounded-full border">
            <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp" alt="" />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <Avatar className="relative -mr-4 size-14 overflow-hidden rounded-full border">
            <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-6.webp" alt="" />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
        </div>
        <header>
          <h1 className="mt-6 text-center text-4xl font-semibold tracking-tighter lg:text-7xl">
            Where Strong teams start
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-muted-foreground md:text-2xl">
            Strong teams thrive on trust, collaboration, and shared vision.
            Together, we can turn ambitious goals into remarkable achievements
          </p>
        </header>
        <div className="group">
          <div className="relative flex items-center justify-center">
            <Button className="mt-6 h-12 rounded-2xl px-6 text-lg">
              Get Started Now
            </Button>
            <div className="absolute -right-25 -bottom-20 flex items-end md:-right-52">
              <Line />
              <p className="font-caveat text-xl tracking-tight text-foreground">
                No Signup Required Enjoy!!!!!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta30 };

const Line = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      width="77"
      height="80"
      viewBox="0 0 77 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M75.4725 60.0021C45.5073 65.1045 23.2825 43.9431 11.4282 18.1701C11.2238 17.7278 10.6987 17.5325 10.2564 17.7369C9.8141 17.9414 9.61882 18.4664 9.82326 18.9087C22.008 45.4042 44.9655 66.9889 75.7702 61.743C76.2503 61.6623 76.5733 61.2059 76.4919 60.7237C76.4111 60.2436 75.9547 59.9207 75.4725 60.0021Z"
        fill="black"
      />
      <path
        d="M10.846 19.02C12.1043 19.929 13.6707 21.0873 13.8523 21.2135C18.7735 24.635 23.9617 27.1097 29.6911 28.9119C30.156 29.0588 30.653 28.799 30.7998 28.3342C30.9467 27.8693 30.6869 27.3724 30.2221 27.2255C24.6657 25.4797 19.6334 23.0811 14.8601 19.7616C14.5818 19.5683 11.062 16.9624 10.3108 16.4889C10.0035 16.2933 9.76888 16.278 9.71317 16.2797C9.41708 16.2773 9.22434 16.3985 9.09505 16.5201C8.95011 16.6585 8.76658 16.9454 8.76869 17.3853C8.77276 17.8457 9.01473 18.7939 9.05649 19.0381C9.67624 22.7255 10.6892 26.7869 10.8614 30.7273C11.0258 34.485 10.4248 38.1371 7.83746 41.1938C7.52215 41.5656 7.56983 42.1244 7.94168 42.4397C8.31352 42.755 8.8723 42.7074 9.18761 42.3355C12.0796 38.9175 12.8109 34.8503 12.6274 30.6511C12.4558 26.734 11.4799 22.7004 10.846 19.02Z"
        fill="black"
      />
    </svg>
  );
};