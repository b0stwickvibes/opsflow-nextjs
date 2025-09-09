"use client";

export default function TemplateCatalogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="space-y-1">
            <h1 className="text-2xl font-bold">Template Catalog (Temporarily Disabled)</h1>
            <p className="text-sm text-muted-foreground">
              The live template catalog is temporarily disabled while we audit template code. Core pages continue to work.
            </p>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <p className="text-muted-foreground">
          Please continue working on solutions pages. We’ll restore this catalog after stabilizing the template set.
        </p>
      </main>
    </div>
  );
}
