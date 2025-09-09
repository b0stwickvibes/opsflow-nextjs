import NumberTicker from "@/components/shared/enhanced/NumberTicker";

export function MetricsRowSection() {
  const metrics = [
    { label: "Compliance", value: 99.8, suffix: "%" },
    { label: "Time Saved / wk", value: 15, suffix: " hrs" },
    { label: "Waste Reduction", value: 32, suffix: "%" },
    { label: "Restaurants", value: 500, suffix: "+" },
  ];
  return (
    <section className="py-12 border-y bg-muted/30">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {metrics.map((m) => (
          <div key={m.label} className="space-y-1">
            <NumberTicker value={m.value} suffix={m.suffix} className="text-primary font-bold text-3xl" />
            <div className="text-sm text-muted-foreground">{m.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MetricsRowSection;
