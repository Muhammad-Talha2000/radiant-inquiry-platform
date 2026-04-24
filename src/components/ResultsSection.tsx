import { useState } from "react";
import { TrendingUp, ShoppingBag, MapPin, Cloud, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { CountUp } from "@/components/CountUp";
import { cn } from "@/lib/utils";

const tabs = [
  {
    id: "ecom",
    label: "E-commerce",
    icon: ShoppingBag,
    industry: "DTC e-commerce brand",
    before: "Stuck on page 2 for category & product keywords",
    after: "Page 1 across 120+ commercial keywords in 5 months",
    stats: [
      { value: 312, suffix: "%", label: "Organic revenue growth" },
      { value: 4.2, decimals: 1, suffix: "×", label: "Increase in qualified traffic" },
      { value: 87, suffix: "%", label: "More category page conversions" },
      { value: 24, suffix: "k", label: "New monthly organic visitors" },
    ],
  },
  {
    id: "local",
    label: "Local business",
    icon: MapPin,
    industry: "Multi-location service business",
    before: "Invisible on Google Maps for high-intent local queries",
    after: "Top 3 in the local pack across all 6 service areas",
    stats: [
      { value: 218, suffix: "%", label: "More inbound calls" },
      { value: 3.6, decimals: 1, suffix: "×", label: "More booking requests" },
      { value: 64, suffix: "%", label: "More walk-in customers" },
      { value: 142, suffix: "%", label: "Map pack visibility growth" },
    ],
  },
  {
    id: "ai",
    label: "AI search",
    icon: Cloud,
    industry: "Brands optimized for AI engines",
    before: "Zero presence in ChatGPT & Perplexity answers",
    after: "Cited #1 source across 4+ AI engines",
    stats: [
      { value: 65, suffix: "%", label: "ChatGPT response citation rate" },
      { value: 40, suffix: "%", label: "More inbound from AI search" },
      { value: 2.3, decimals: 1, suffix: "×", label: "AI-native visitor growth" },
      { value: 90, suffix: "%", label: "Perplexity top-source rate" },
    ],
  },
];

export const ResultsSection = () => {
  const [active, setActive] = useState(tabs[0].id);
  const tab = tabs.find((t) => t.id === active)!;

  return (
    <section className="container py-24">
      <SectionHeading
        eyebrow="Real Results"
        title={<>From invisible to <span className="text-gradient-primary">everywhere</span></>}
        description="Outcomes from real brands we've taken from underperforming SEO to category-defining authority."
      />

      {/* Tabs */}
      <div className="mt-12 flex justify-center">
        <div className="inline-flex flex-wrap p-1.5 rounded-2xl border border-border bg-card/60 backdrop-blur gap-1">
          {tabs.map((t) => {
            const isActive = t.id === active;
            return (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={cn(
                  "inline-flex items-center gap-2 px-5 md:px-6 py-3 rounded-xl text-sm md:text-base font-semibold transition-all duration-300 cursor-grow",
                  isActive
                    ? "bg-gradient-primary text-primary-foreground shadow-glow"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <t.icon className="h-4 w-4 md:h-5 md:w-5" />
                {t.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active panel */}
      <div
        key={tab.id}
        className="mt-12 glass-card p-8 md:p-12 relative overflow-hidden animate-fade-in border-2 border-primary/20"
      >
        <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />

        <div className="relative grid lg:grid-cols-2 gap-10 items-start">
          {/* Story */}
          <div>
            <span className="inline-flex items-center rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground">
              {tab.industry}
            </span>
            <div className="mt-6 space-y-5">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-destructive/80 mb-2">
                  Before
                </div>
                <p className="text-base md:text-lg text-muted-foreground">{tab.before}</p>
              </div>
              <div className="flex items-center gap-3 text-primary">
                <ArrowRight className="h-5 w-5" />
                <div className="h-px flex-1 bg-gradient-to-r from-primary to-transparent" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-primary mb-2">
                  After
                </div>
                <p className="text-lg md:text-xl text-foreground/95 font-medium leading-relaxed">
                  {tab.after}
                </p>
              </div>
            </div>
          </div>

          {/* Animated stats grid */}
          <div className="grid grid-cols-2 gap-3">
            {tab.stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-border/60 bg-secondary/30 p-6 hover:border-primary/40 hover:bg-secondary/50 transition-all duration-500"
              >
                <CountUp
                  end={s.value}
                  suffix={s.suffix}
                  decimals={s.decimals ?? 0}
                  className="stat-number text-4xl md:text-5xl"
                />
                <p className="mt-3 text-sm md:text-base text-muted-foreground leading-snug">
                  {s.label}
                </p>
                <TrendingUp className="h-5 w-5 text-primary/70 mt-3" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
