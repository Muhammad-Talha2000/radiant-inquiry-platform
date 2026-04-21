const industries = [
  "Fintech",
  "B2B SaaS",
  "DevTools",
  "Cybersecurity",
  "Data Infrastructure",
  "Cloud Platforms",
  "AI Infrastructure",
  "Enterprise Tech",
  "E-commerce",
  "HealthTech",
  "EdTech",
  "Marketplaces",
];

export const IndustriesStrip = () => (
  <section className="py-12 border-y border-border/60 bg-secondary/20 backdrop-blur-sm">
    <div className="container">
      <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
        Trusted by ambitious teams in
      </p>
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee gap-3 whitespace-nowrap">
          {[...industries, ...industries, ...industries].map((i, idx) => (
            <span
              key={idx}
              className="inline-flex items-center rounded-full border border-border bg-card/60 px-4 py-2 text-sm font-medium text-foreground/80"
            >
              {i}
            </span>
          ))}
        </div>
        {/* Edge fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
      </div>
    </div>
  </section>
);
