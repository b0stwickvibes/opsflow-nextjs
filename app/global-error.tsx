"use client";

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global Error:', error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
          <div className="max-w-lg w-full text-center space-y-6">
            <div className="flex justify-center">
              <AlertTriangle className="h-20 w-20 text-destructive" />
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl font-bold text-foreground">
                Oops! Something went wrong
              </h1>
              <p className="text-muted-foreground text-lg">
                We're experiencing technical difficulties. Our team has been notified and is working to fix this issue.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={reset} size="lg" className="flex items-center gap-2">
                <RefreshCw className="h-5 w-5" />
                Try again
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.location.href = '/'}
                className="flex items-center gap-2"
              >
                <Home className="h-5 w-5" />
                Go to homepage
              </Button>
            </div>

            <div className="pt-6 border-t">
              <p className="text-sm text-muted-foreground">
                If the problem persists, please contact our support team.
              </p>
            </div>

            {process.env.NODE_ENV === 'development' && (
              <details className="mt-6 text-left">
                <summary className="cursor-pointer text-sm text-muted-foreground hover:text-foreground">
                  Error details (development only)
                </summary>
                <pre className="mt-2 text-xs bg-muted p-4 rounded overflow-auto max-h-40">
                  {error.message}
                  {error.digest && `\n\nDigest: ${error.digest}`}
                  {error.stack && `\n\n${error.stack}`}
                </pre>
              </details>
            )}
          </div>
        </div>
      </body>
    </html>
  );
}