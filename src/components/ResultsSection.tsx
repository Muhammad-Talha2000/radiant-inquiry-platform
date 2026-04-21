import { TrendingUp, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const cases = [
  {
    industry: "Fintech SaaS",
    before: '0% visibility in ChatGPT for "payment automation"',
    after: "Top 3 ChatGPT recommendation in 3 weeks",
    metric: "+40%",
    metricLabel: "demo requests from AI search",
  },
  {
    industry: "DevTools Company",
    before: "Ranked #8 in Google, invisible in Perplexity",
    after: "#1 cited source in Perplexity, kept Google rank",
    metric: "2.3×",
    metricLabel: "organic traffic from AI-native users",
  },
  {
    industry: "B2B Data Platform",
    before: "Competitors mentioned in 80% of ChatGPT queries",
    after: "Cited in 65% of relevant ChatGPT responses",
    metric: "+312%",
    metricLabel: "captured pipeline (no website visit)",
  },
];

export const ResultsSection = () => (
  <section className="container py-20">
    <SectionHeading
      eyebrow="Real Results"
      title={<>From invisible to <span className="text-gradient-primary">everywhere</span></>}
      description="Outcomes from B2B brands we've taken from zero AI search presence to category-defining authority."
    />

    <div className="mt-14 grid md:grid-cols-3 gap-5">
      {cases.map((c) => (
        <article
          key={c.industry}
          className="glass-card p-7 relative overflow-hidden group hover:border-primary/40 transition-all"
        >
          <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl group-hover:bg-primary/20 transition-colors" />

          <span className="inline-flex items-center rounded-full border border-border bg-secondary/60 px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
            {c.industry}
          </span>

          <div className="mt-5 space-y-4">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-wider text-destructive/80 mb-1">
                Before
              </div>
              <p className="text-sm text-muted-foreground">{c.before}</p>
            </div>

            <div className="flex items-center gap-2 text-primary">
              <ArrowRight className="h-4 w-4" />
              <div className="h-px flex-1 bg-gradient-to-r from-primary/60 to-transparent" />
            </div>

            <div>
              <div className="text-[10px] font-semibold uppercase tracking-wider text-primary mb-1">
                After
              </div>
              <p className="text-sm text-foreground/90">{c.after}</p>
            </div>
          </div>

          <div className="mt-7 pt-5 border-t border-border/60 flex items-end justify-between">
            <div>
              <div className="font-display text-4xl font-bold text-gradient-primary leading-none">
                {c.metric}
              </div>
              <div className="mt-1.5 text-xs text-muted-foreground max-w-[16ch]">
                {c.metricLabel}
              </div>
            </div>
            <TrendingUp className="h-6 w-6 text-primary/70" />
          </div>
        </article>
      ))}
    </div>
  </section>
);
