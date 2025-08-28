'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <div className="container mx-auto max-w-xl p-6 space-y-3">
          <h2 className="text-xl font-semibold">Critical error</h2>
          <p className="text-sm text-muted-foreground">{error.message}</p>
          <button className="rounded-md border px-4 py-2" onClick={() => reset()}>
            Reload
          </button>
        </div>
      </body>
    </html>
  );
}
