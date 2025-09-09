import Image from "next/image";

export function TilesThreeUpSection() {
  const tiles = [
    {
      title: "HACCP & Compliance",
      body: "Automated logs, reports, and audit prep to crush inspections.",
      icon: "/images/features/haccp-audit.svg",
    },
    {
      title: "Kitchen Ops",
      body: "Smart checklists, task routing, and incident workflows.",
      icon: "/images/features/temp-dashboard.svg",
    },
    {
      title: "Analytics",
      body: "Live KPIs and ROI metrics for every location.",
      icon: "/images/features/hero-dashboard.svg",
    },
  ];

  return (
    <section className="py-12">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiles.map((t) => (
          <div key={t.title} className="clerk-interactive-tile p-6 text-center">
            <div className="mx-auto mb-4 h-16 w-16 rounded-xl border bg-muted/40 grid place-items-center">
              <Image src={t.icon} alt="" width={40} height={40} />
            </div>
            <h3 className="text-display-sm mb-2">{t.title}</h3>
            <p className="enterprise-body">{t.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TilesThreeUpSection;
