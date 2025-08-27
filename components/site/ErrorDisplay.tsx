'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCw, Home, ArrowLeft } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { registerComponentLayout } from '@/lib/style-system/layout-differentiation';
import { trackInteraction } from '@/lib/analytics';

interface ErrorDisplayProps {
  title?: string;
  description?: string;
  onRetry?: () => void;
  showHomeButton?: boolean;
  showBackButton?: boolean;
  error?: Error & { digest?: string };
}

export function ErrorDisplay({
  title = "Something went wrong",
  description = "We encountered an unexpected error. Please try again or contact support if the problem persists.",
  onRetry,
  showHomeButton = true,
  showBackButton = false,
  error
}: ErrorDisplayProps) {
  // Register component layout
  useEffect(() => {
    registerComponentLayout('ErrorDisplay', 'site');
  }, []);

  // Track error display
  useEffect(() => {
    trackInteraction('error_displayed', {
      error_title: title,
      error_digest: error?.digest,
      has_retry: !!onRetry,
      show_home_button: showHomeButton,
      show_back_button: showBackButton
    });
  }, [title, error?.digest, onRetry, showHomeButton, showBackButton]);

  const handleRetry = () => {
    trackInteraction('error_retry_clicked', { error_title: title });
    onRetry?.();
  };

  const handleHomeClick = () => {
    trackInteraction('error_home_clicked', { error_title: title });
    window.location.href = '/';
  };

  const handleBackClick = () => {
    trackInteraction('error_back_clicked', { error_title: title });
    window.history.back();
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <Card className="w-full max-w-lg">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-destructive/10 flex items-center justify-center">
            <AlertTriangle className="h-6 w-6 text-destructive" />
          </div>
          <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        </CardHeader>
        
        <CardContent className="text-center space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>

          {/* Error details for debugging (only in development) */}
          {process.env.NODE_ENV === 'development' && error && (
            <details className="text-left bg-muted p-4 rounded-lg">
              <summary className="cursor-pointer font-medium mb-2">
                Error Details (Development Only)
              </summary>
              <pre className="text-xs overflow-x-auto whitespace-pre-wrap break-words">
                {error.message}
                {error.digest && `\nDigest: ${error.digest}`}
                {error.stack && `\n\nStack:\n${error.stack}`}
              </pre>
            </details>
          )}

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {onRetry && (
              <Button onClick={handleRetry} className="flex items-center gap-2">
                <RefreshCw className="h-4 w-4" />
                Try Again
              </Button>
            )}
            
            {showBackButton && (
              <Button variant="outline" onClick={handleBackClick} className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Go Back
              </Button>
            )}
            
            {showHomeButton && (
              <Button variant="outline" onClick={handleHomeClick} className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                Go Home
              </Button>
            )}
          </div>

          {/* Help text */}
          <div className="text-sm text-muted-foreground border-t pt-4">
            <p>
              If this error persists, please contact our support team at{' '}
              <a 
                href="mailto:support@opsflow.ai" 
                className="text-primary hover:underline"
                onClick={() => trackInteraction('error_support_email_clicked', { error_title: title })}
              >
                support@opsflow.ai
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}