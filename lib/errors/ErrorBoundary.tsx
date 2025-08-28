
'use client';

import React from 'react';

type Props = {
  children: React.ReactNode;
  onError?: (error: Error, info: React.ErrorInfo) => void;
  Fallback?: React.ComponentType<{ error: Error; reset: () => void }>;
};

type State = { hasError: boolean; error: Error | null };

class ErrorBoundaryImpl extends React.Component<Props, State> {
  state: State = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    this.props.onError?.(error, info);
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.error('ErrorBoundary caught an error', error, info);
    }
  }

  private reset = () => this.setState({ hasError: false, error: null });

  render() {
    const { hasError, error } = this.state;
    const { children, Fallback } = this.props;

    if (hasError) {
      if (Fallback && error) return <Fallback error={error} reset={this.reset} />;
      return (
        <div className="container mx-auto max-w-xl p-6 space-y-3">
          <h2 className="text-xl font-semibold">Something went wrong</h2>
          <p className="text-sm text-muted-foreground">{error?.message}</p>
          <button className="rounded-md border px-4 py-2" onClick={this.reset}>
            Try again
          </button>
        </div>
      );
    }

    return children;
  }
}

// Export BOTH ways so existing imports won't break.
export { ErrorBoundaryImpl as ErrorBoundary };
export default ErrorBoundaryImpl;