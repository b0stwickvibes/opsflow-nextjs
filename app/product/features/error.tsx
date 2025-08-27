"use client"

import { ErrorDisplay } from "@/components/shared/feedback"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <ErrorDisplay
      title="Oops! Something went wrong"
      description="We encountered an error while loading the features page. Please try again or go back to the homepage."
      onRetry={reset}
    />
  )
}
