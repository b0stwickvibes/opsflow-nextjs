import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/shared/layout"
import { Footer } from "@/components/shared/layout"
import { BackToTop } from "@/components/shared/feedback"
import { Toaster as ShadcnToaster } from "@/components/ui/toaster"
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
      <body className={cn("min-h-screen font-sans bg-background text-foreground")} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navbar />
          <main className="container mx-auto px-6 py-12">{children}</main>
          <Footer />
          <BackToTop />
          <ShadcnToaster />
        </ThemeProvider>
      </body>
    </html>
  )
}