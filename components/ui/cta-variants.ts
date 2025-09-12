export const CTA = {
  // Primary brand CTA with shimmer and slight scale on hover
  primary:
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 rounded-md clerk-cta-primary cta-shimmer hover-scale-103 text-base px-8 py-3 h-auto cta-equal",
  // Neutral outline CTA
  outline:
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground rounded-md hover-scale-103 text-base px-8 py-3 h-auto cta-equal",
  // Small arrow CTA (used in info tiles)
  arrowSmall:
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs w-full group hover-scale-103",
  // Link-styled primaries used where <a> anchors are desired (can be applied to Button as well)
  linkPrimary:
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 rounded-md clerk-cta-primary text-base px-8 py-3 h-auto cta-equal",
  linkOutline:
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground rounded-md text-base px-8 py-3 h-auto border-2 cta-equal",
} as const;
