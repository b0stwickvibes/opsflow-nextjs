"use client"

import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="relative overflow-hidden bg-background">
      {/* Radial Gradient Background from Top with White Exposure */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "var(--background)",
          backgroundImage: `
            radial-gradient(125% 125% at 50% 10%, #fff 40%, oklch(from var(--primary-700) l c h / 0.15) 100%)
          `,
        }}
      />
      
      <div className="container mx-auto px-6 py-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <h3 className="font-semibold mb-3 text-foreground">OpsFlow</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Intelligent restaurant operations platform for food safety, compliance, and efficiency.
            </p>
          </div>
          
          {/* Products */}
          <div>
            <h3 className="font-semibold mb-3 text-foreground">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/product/features" className="text-muted-foreground hover:text-primary transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-muted-foreground hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="font-semibold mb-3 text-foreground">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/company/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/company/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-3 text-foreground">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-border/20 mt-10 pt-6 text-sm text-muted-foreground flex flex-wrap justify-between">
          <p>&copy; {currentYear} OpsFlow AI. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">Twitter</a>
            <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
