import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileQuestion } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-center p-6">
      <FileQuestion className="h-16 w-16 text-muted-foreground mb-6" />
      <h1 className="text-4xl font-bold mb-3">Page Not Found</h1>
      <p className="text-muted-foreground mb-8 max-w-md">
        Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
      </p>
      <div className="flex gap-4">
        <Button variant="outline" asChild>
          <Link href="/product/features">
            View Features
          </Link>
        </Button>
        <Button asChild>
          <Link href="/">
            Go Home
          </Link>
        </Button>
      </div>
    </div>
  )
}
