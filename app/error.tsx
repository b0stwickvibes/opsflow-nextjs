'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="container mx-auto max-w-xl p-6 space-y-3">
      <h2 className="text-xl font-semibold">Something went wrong</h2>
      <p className="text-sm text-muted-foreground">{error.message}</p>
      <div className="flex gap-3">
        <button className="rounded-md border px-4 py-2" onClick={() => reset()}>
          Try again
        </button>
      </div>
    </div>
  );
}
