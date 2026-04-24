import { useState } from "react";
import { Search, Bot, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { cn } from "@/lib/utils";

const tabs = [
  {
    id: "seo",
    label: "SEO — Core foundation",
    icon: Search,
    intro: "Battle-tested SEO fundamentals that compound month over month.",
    points: [
      "Keyword research aligned to buyer intent",
      "On-page SEO (titles, meta, internal links)",
      "Technical SEO (speed, schema, crawlability)",
      "Backlink strategy & editorial outreach",
      "Content optimization for rankings",
    ],
  },
  {
    id: "ai",
    label: "AI SEO — Advanced layer",
    icon: Bot,
    intro: "Predictive, AI-powered systems that scale visibility faster.",
    points: [
      "AI keyword clustering by intent",
      "Predictive ranking analysis & forecasting",
      "AI content structuring & briefs",
      "Search intent modeling at scale",
      "AI search optimization (ChatGPT / Perplexity)",
    ],
  },
];

export const SolutionSplit = () => {
  const [active, setActive] = useState(tabs[0].id);
  const tab = tabs.find((t) => t.id === active)!;

  return (
    <section className="container py-24">
      <SectionHeading
        eyebrow="Our system"
        title={<>A modern SEO system <span className="text-gradient-primary">built for growth</span></>}
        description="A proven foundation paired with an AI layer that scales faster than any competitor."
      />

      {/* Tabs */}
      <div className="mt-12 flex justify-center">
        <div className="inline-flex p-1.5 rounded-2xl border border-border bg-card/60 backdrop-blur">
          {tabs.map((t) => {
            const isActive = t.id === active;
            return (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={cn(
                  "inline-flex items-center gap-2 px-5 md:px-7 py-3 rounded-xl text-sm md:text-base font-semibold transition-all duration-300 cursor-grow",
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
      <article
        key={tab.id}
        className="mt-12 glass-card border-2 border-primary/30 p-8 md:p-12 relative overflow-hidden animate-fade-in shadow-glow"
      >
        <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-primary-glow/10 blur-3xl" />

        <div className="relative grid lg:grid-cols-[auto,1fr] gap-8 items-start">
          <div className="grid h-20 w-20 place-items-center rounded-3xl bg-gradient-primary shadow-glow shrink-0">
            <tab.icon className="h-10 w-10 text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-display text-3xl md:text-4xl font-bold">{tab.label}</h3>
            <p className="mt-3 text-lg text-muted-foreground max-w-2xl">{tab.intro}</p>

            <ul className="mt-8 grid sm:grid-cols-2 gap-3">
              {tab.points.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 rounded-xl border border-border/60 bg-secondary/30 p-4 text-base hover:border-primary/40 hover:bg-secondary/50 transition-colors"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="font-medium">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </section>
  );
};
