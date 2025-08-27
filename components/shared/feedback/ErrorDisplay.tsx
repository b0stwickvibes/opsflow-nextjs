"use client"

import { Button } from "@/components/ui/button"
import { AlertCircle, RefreshCw } from "lucide-react"
import Link from "next/link"

interface ErrorDisplayProps {
  title?: string
  description?: string
  actionText?: string
  actionLink?: string
  onRetry?: () => void
}

export function ErrorDisplay({
  title = "Something went wrong",
  description = "We encountered an error while processing your request.",
  actionText = "Go back home",
  actionLink = "/",
  onRetry
}: ErrorDisplayProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-center p-6">
      <AlertCircle className="h-12 w-12 text-destructive mb-4" />
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-muted-foreground mb-6 max-w-md">
        {description}
      </p>
      <div className="flex gap-4">
        {onRetry && (
          <Button variant="outline" onClick={onRetry}>
            <RefreshCw className="mr-2 h-4 w-4" />
            Try again
          </Button>
        )}
        <Button asChild>
          <Link href={actionLink}>
            {actionText}
          </Link>
        </Button>
      </div>
    </div>
  )
}
