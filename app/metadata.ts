import type { Metadata, Viewport } from "next"

// Common metadata used across all pages
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "OpsFlow AI | Restaurant Operations Platform",
    template: "%s | OpsFlow AI"
  },
  description: "Streamline food safety, compliance, and kitchen management for restaurants of all sizes.",
  keywords: ["restaurant operations", "food safety", "HACCP compliance", "kitchen management", "temperature monitoring"],
  authors: [{ name: "OpsFlow AI" }],
  creator: "OpsFlow AI",
  publisher: "OpsFlow AI",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://opsflow.ai",
    siteName: "OpsFlow AI",
    title: "OpsFlow AI | Restaurant Operations Platform",
    description: "Streamline food safety, compliance, and kitchen management for restaurants of all sizes.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "OpsFlow AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OpsFlow AI | Restaurant Operations Platform",
    description: "Streamline food safety, compliance, and kitchen management for restaurants of all sizes.",
    images: ["/images/twitter-image.png"],
    creator: "@OpsFlowAI",
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],
  },
  manifest: "/site.webmanifest",
}

// Viewport metadata
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}
