"use client";

import React from "react";
import { cn } from "@/lib/utils";

/**
 * Section wrapper for full-width backgrounds with contained content
 * Inspired by Clerk.com and Stripe.com's clean section approach
 */
interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  background?: "default" | "muted" | "accent" | "gradient" | "radial" | "radial-footer" | "none";
  padding?: "sm" | "md" | "lg" | "xl" | "none";
  as?: "section" | "div" | "main" | "article";
}

const backgroundClasses = {
  default: "bg-background",
  muted: "bg-muted/30",
  accent: "bg-accent/20",
  gradient: "bg-gradient-to-br from-background via-muted/20 to-background",
  radial: "bg-background relative overflow-hidden",
  "radial-footer": "bg-background relative overflow-hidden",
  none: "",
};

const paddingClasses = {
  sm: "py-12 md:py-16",
  md: "py-16 md:py-20",
  lg: "py-20 md:py-24",
  xl: "py-24 md:py-32",
  none: "",
};

export function Section({
  children,
  className,
  containerClassName,
  background = "default",
  padding = "md",
  as: Component = "section",
}: SectionProps) {
  const isRadial = background === "radial";
  const isRadialFooter = background === "radial-footer";

  return (
    <Component className={cn(backgroundClasses[background], paddingClasses[padding], className)}>
      {(isRadial || isRadialFooter) && (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "var(--background)",
            backgroundImage: isRadialFooter
              ? `radial-gradient(125% 125% at 50% 10%, #fff 40%, oklch(from var(--primary-700) l c h / 0.15) 100%)`
              : `radial-gradient(circle at top center, oklch(from var(--primary-700) l c h / 0.08), transparent 70%)`,
          }}
        />
      )}
      <div className={cn("container mx-auto px-4 sm:px-6 lg:px-8 relative z-10", containerClassName)}>
        {children}
      </div>
    </Component>
  );
}

/**
 * Content wrapper for section content with proper spacing
 */
interface SectionContentProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "full";
  align?: "left" | "center" | "right";
}

const maxWidthClasses = {
  sm: "max-w-2xl",
  md: "max-w-4xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  "2xl": "max-w-screen-2xl",
  "3xl": "max-w-screen-3xl",
  "4xl": "max-w-screen-4xl",
  "5xl": "max-w-screen-5xl",
  "6xl": "max-w-screen-6xl",
  full: "max-w-full",
};

const alignClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

export function SectionContent({
  children,
  className,
  maxWidth = "xl",
  align = "left",
}: SectionContentProps) {
  return (
    <div className={cn(maxWidthClasses[maxWidth], alignClasses[align], className)}>
      {children}
    </div>
  );
}

/**
 * Section divider with subtle visual separation
 */
interface SectionDividerProps {
  className?: string;
  variant?: "subtle" | "medium" | "strong";
}

const dividerVariants = {
  subtle: "border-border/30",
  medium: "border-border/50",
  strong: "border-border/70",
};

export function SectionDivider({ className, variant = "subtle" }: SectionDividerProps) {
  return (
    <div className={cn("border-t", dividerVariants[variant], className)} />
  );
}

/**
 * Standalone radial background component
 * Perfect for full-page backgrounds or custom layouts
 */
interface RadialBackgroundProps {
  children: React.ReactNode;
  className?: string;
  intensity?: "subtle" | "medium" | "strong";
  position?: "top" | "center" | "bottom";
  color?: "primary" | "secondary" | "accent";
}

const intensityMap = {
  subtle: 0.05,
  medium: 0.08,
  strong: 0.12,
};

const positionMap = {
  top: "top center",
  center: "center center",
  bottom: "bottom center",
};

const colorMap = {
  primary: "var(--primary-700)",
  secondary: "var(--secondary-700)",
  accent: "var(--accent)",
};

export function RadialBackground({
  children,
  className,
  intensity = "medium",
  position = "top",
  color = "primary",
}: RadialBackgroundProps) {
  return (
    <div className={cn("min-h-screen w-full bg-background relative overflow-hidden", className)}>
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "var(--background)",
          backgroundImage: `
            radial-gradient(circle at ${positionMap[position]}, oklch(from ${colorMap[color]} l c h / ${intensityMap[intensity]}), transparent 70%)
          `,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

/**
 * Section System Usage Examples
 *
 * This demonstrates how to achieve Clerk.com/Stripe.com style layouts
 * with full-width backgrounds and clean content containers.
 */

/* Section System Usage Examples:

1. Basic Section with Default Background:
<Section background="default" padding="lg">
  <SectionContent maxWidth="4xl">
    <h2>Your content here</h2>
    <p>Content goes here...</p>
  </SectionContent>
</Section>

2. Alternating Background Sections:
<Section background="default" padding="xl">
  <SectionContent maxWidth="6xl">
    <HeroContent />
  </SectionContent>
</Section>

<Section background="muted" padding="lg">
  <SectionContent maxWidth="5xl">
    <FeaturesContent />
  </SectionContent>
</Section>

<Section background="accent" padding="lg">
  <SectionContent maxWidth="4xl">
    <TestimonialsContent />
  </SectionContent>
</Section>

3. Gradient Background for CTAs:
<Section background="gradient" padding="xl">
  <SectionContent maxWidth="3xl" align="center">
    <MarketingCTA {...props} />
  </SectionContent>
</Section>

4. Full-width with Custom Styling:
<Section
  background="none"
  padding="lg"
  className="bg-gradient-to-r from-blue-50 to-purple-50"
>
  <SectionContent maxWidth="7xl">
    <CustomContent />
  </SectionContent>
</Section>

5. Section Dividers for Visual Separation:
<Section background="default" padding="lg">
  <Content />
</Section>

<SectionDivider variant="medium" />

<Section background="muted" padding="lg">
  <Content />
</Section>
*/

/*
Updated Usage Examples with Radial Background:

1. Full Page with Radial Background:
<RadialBackground intensity="subtle" position="top" color="primary">
  <YourPageContent />
</RadialBackground>

2. Section with Radial Background:
<Section background="radial" padding="xl">
  <SectionContent maxWidth="4xl">
    <YourContent />
  </SectionContent>
</Section>

3. Footer with Strong Radial Background:
<Section background="radial-footer" padding="lg">
  <SectionContent maxWidth="6xl">
    <FooterContent />
  </SectionContent>
</Section>

4. Custom Radial Background:
<RadialBackground 
  intensity="strong" 
  position="center" 
  color="secondary"
  className="min-h-[80vh]"
>
  <YourContent />
</RadialBackground>

5. Using CSS Classes Directly:
<div className="bg-radial-medium bg-radial-top">
  <YourContent />
</div>
<div className="footer-radial">
  <FooterContent />
</div>

Benefits of this approach:
• Uses your primary color system (--primary-700)
• Subtle, professional gradient like Clerk.com/Stripe.com
• Configurable intensity and position
• Works with existing Section system
• CSS utilities for quick implementation
• Responsive and performant
• Footer now exposes white at the top for organic blending
*/

/**
 * Footer Radial Background Examples
 * 
 * The footer now uses a radial gradient that exposes white at the top for a more organic look.
 * The gradient starts from the top center (50% 10%) and transitions from white to the primary color,
 * creating a natural blend with the page background.
 */

/*
// 1. Using the Section component with radial-footer
<Section background="radial-footer" padding="lg">
  <SectionContent maxWidth="6xl">
    <FooterContent />
  </SectionContent>
</Section>

// 2. Using the CSS utility class directly
<footer className="footer-radial relative overflow-hidden">
  <div className="container mx-auto px-6 py-10 relative z-10">
    <FooterContent />
  </div>
</footer>
*/

/*
// 3. Using the bg-radial-footer utility:
<footer className="bg-radial-footer relative overflow-hidden bg-background">
  <div className="container mx-auto px-6 py-10 relative z-10">
    <FooterContent />
  </div>
</footer>

// 4. Custom footer with different intensity:
<footer className="relative overflow-hidden bg-background">
  <div className="absolute inset-0 z-0" style={{
    backgroundImage: 'radial-gradient(125% 125% at 50% 10%, #fff 40%, oklch(from var(--primary-700) l c h / 0.20) 100%)'
  }} />
  <div className="container mx-auto px-6 py-10 relative z-10">
    <FooterContent />
  </div>
</footer>
*/