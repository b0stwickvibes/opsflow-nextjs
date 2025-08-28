import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/shared/layout"
import { Footer } from "@/components/shared/layout"
import { BackToTop } from "@/components/shared/feedback"
import { Toaster as ShadcnToaster } from "@/components/ui/toaster"
import { GlobalProvider } from "@/lib/context/GlobalContext"
import { ErrorBoundary } from "@/lib/errors/ErrorBoundary"
import { cn } from "@/lib/utils"
import { metadata, viewport } from "./metadata"

export { metadata, viewport }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Performance optimizations */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        
        {/* Security headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        
        {/* Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_title: document.title,
                    page_location: window.location.href
                  });
                `
              }}
            />
          </>
        )}
      </head>
      <body className={cn("min-h-screen font-sans bg-background text-foreground")} suppressHydrationWarning>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <GlobalProvider>
              <Navbar />
              <main className="container mx-auto px-6 py-12">{children}</main>
              <Footer />
              <BackToTop />
              <ShadcnToaster />
            </GlobalProvider>
          </ThemeProvider>
        {children}
      </body>
    </html>
  )
}