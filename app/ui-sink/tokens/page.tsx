export default function TokensPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="section-padding-large">
        <div className="container space-y-8">
          <div className="clerk-inspired-badge"><span>Tokens</span></div>
          <h1 className="enterprise-headline">Layout & Typography Tokens</h1>
          <p className="enterprise-body">Quick reference for our enterprise text scales and utility classes.</p>

          <div className="grid gap-6">
            <div>
              <h2 className="text-display-sm mb-2">Headlines</h2>
              <div className="space-y-3">
                <div className="enterprise-headline">enterprise-headline (responsive)</div>
                <div className="text-display-2xl">text-display-2xl</div>
                <div className="text-display-md">text-display-md</div>
                <div className="text-display-sm">text-display-sm</div>
              </div>
            </div>
            <div>
              <h2 className="text-display-sm mb-2">Body</h2>
              <p className="enterprise-body">enterprise-body — used for copy paragraphs, matches Clerk-style tone.</p>
            </div>
            <div>
              <h2 className="text-display-sm mb-2">Surfaces</h2>
              <div className="grid md:grid-cols-3 gap-3">
                <div className="p-4 border rounded">Plain surface</div>
                <div className="p-4 border rounded bg-muted/20">Muted surface</div>
                <div className="p-4 border rounded clerk-interactive-tile">Interactive tile</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
