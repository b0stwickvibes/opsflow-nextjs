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
        {/* No-flash: apply saved dark/light + palette before hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => { try {
              var d = document.documentElement;
              var theme = localStorage.getItem('theme') || 'system';
              var palette = localStorage.getItem('opsflow:palette') || 'default';
              var isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
              if (isDark) { d.classList.add('dark'); } else { d.classList.remove('dark'); }
              d.classList.remove('theme-plasma','theme-figma','theme-styleglide-nebula');
              if (palette === 'plasma') d.classList.add('theme-plasma');
              else if (palette === 'figma') d.classList.add('theme-figma');
              else if (palette === 'styleglide-nebula') d.classList.add('theme-styleglide-nebula');
            } catch(_) {} })();`
          }}
        />
        {/* Performance optimizations */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        
        {/* Security headers are set via next.config.js headers() */}
        
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
        <ErrorBoundary>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            storageKey="theme"
            disableTransitionOnChange
          >
            <GlobalProvider>
              <Navbar />
              <main className="container mx-auto px-6 py-12">{children}</main>
              <Footer />
              <BackToTop />
              <ShadcnToaster />
            </GlobalProvider>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}
