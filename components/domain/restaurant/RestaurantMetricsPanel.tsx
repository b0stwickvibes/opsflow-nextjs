import { ShieldCheck, Timer, BarChart3, Users } from 'lucide-react';

const metrics = [
  { label: 'Health Inspection Pass Rate', value: '98%', icon: ShieldCheck },
  { label: 'Daily Time Saved', value: '2.5hrs', icon: Timer },
  { label: 'Average Cost Reduction', value: '23%', icon: BarChart3 },
  { label: 'Restaurants Trust Us', value: '500+', icon: Users },
];

export function RestaurantMetricsPanel() {
  return (
    <section className="py-8 md:py-10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="rounded-2xl border bg-muted/40 p-6 shadow-sm">
          <div className="grid gap-6 md:grid-cols-4">
            {metrics.map((m) => (
              <div key={m.label} className="text-center md:text-left">
                <div className="mb-2 flex items-center justify-center md:justify-start gap-2 text-muted-foreground">
                  <m.icon className="h-4 w-4" />
                  <span className="text-xs uppercase tracking-wide">{m.label}</span>
                </div>
                <div className="text-3xl font-bold">{m.value}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 h-64 w-full rounded-xl border bg-background grid place-items-center text-muted-foreground">
            {/* Replace with screenshot/video later */}
            <span>Product preview</span>
          </div>
        </div>
      </div>
    </section>
  );
}

