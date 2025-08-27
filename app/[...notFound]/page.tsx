"use client"

import Link from "next/link"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { AlertTriangle } from "lucide-react"

export default function Custom404() {
  const { toast } = useToast()
  
  useEffect(() => {
    // Show a toast when the 404 page loads
    toast({
      title: "Page not found",
      description: "The page you're looking for doesn't exist or has been moved.",
      variant: "destructive",
    })
  }, [toast])
  
  return (
    <div className="flex flex-col items-center justify-center min-h-[500px] text-center p-6">
      <div className="flex items-center justify-center h-24 w-24 rounded-full bg-muted mb-6">
        <AlertTriangle className="h-12 w-12 text-muted-foreground" />
      </div>
      
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-medium mb-3">Page Not Found</h2>
      <p className="text-muted-foreground mb-8 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      
      <div className="flex flex-wrap gap-4 justify-center">
        <Button asChild>
          <Link href="/">
            Return Home
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/product/features">
            Explore Features
          </Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="/company/contact">
            Contact Support
          </Link>
        </Button>
      </div>
    </div>
  )
}
