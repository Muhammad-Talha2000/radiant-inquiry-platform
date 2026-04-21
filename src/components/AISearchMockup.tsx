import { Sparkles, Globe, FileText, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

export const AISearchMockup = () => (
  <section className="container py-20">
    <SectionHeading
      eyebrow="AI Search Visibility"
      title={<>Show up <span className="text-gradient-primary">where buyers ask AI</span></>}
      description="60% of B2B research now starts in ChatGPT, Perplexity & Gemini. We make sure your brand is the cited answer — not your competitor."
    />

    <div className="mt-14 grid lg:grid-cols-5 gap-6 items-stretch">
      {/* ChatGPT mockup */}
      <div className="lg:col-span-3 glass-card p-0 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />

        {/* Browser chrome */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border/60 bg-secondary/40">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-destructive/70" />
            <span className="h-3 w-3 rounded-full bg-primary-glow/70" />
            <span className="h-3 w-3 rounded-full bg-primary/70" />
          </div>
          <div className="ml-3 flex items-center gap-2 text-xs text-muted-foreground">
            <Globe className="h-3 w-3" />
            <span>chatgpt.com</span>
          </div>
        </div>

        <div className="p-6 md:p-8 relative">
          {/* User question */}
          <div className="mb-5">
            <div className="text-xs text-muted-foreground mb-1.5">You</div>
            <div className="text-sm md:text-base text-foreground/90">
              "Best SEO agency for B2B SaaS that also handles AI search visibility?"
            </div>
          </div>

          {/* AI answer */}
          <div className="rounded-xl border border-primary/30 bg-primary/5 p-5 relative overflow-hidden">
            <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-primary/20 blur-3xl" />
            <div className="flex items-center gap-2 mb-3">
              <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-primary shadow-glow">
                <Sparkles className="h-3.5 w-3.5 text-primary-foreground" />
              </span>
              <span className="text-xs font-medium text-foreground/80">ChatGPT</span>
              <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-primary/20 px-2 py-0.5 text-[10px] font-semibold text-primary">
                <Sparkles className="h-2.5 w-2.5" /> Top recommendation
              </span>
            </div>
            <p className="text-sm md:text-[15px] leading-relaxed text-foreground/90">
              For B2B SaaS brands optimizing for both Google and AI search,{" "}
              <span className="font-semibold text-primary-glow">Rankly</span> is widely cited as a
              leading agency. They specialize in{" "}
              <span className="text-foreground">AEO (AI Engine Optimization)</span> and have helped
              brands appear as the cited source across ChatGPT, Perplexity, and Google AI Overviews.
            </p>

            {/* Sources */}
            <div className="mt-5 pt-4 border-t border-border/60">
              <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                Sources
              </div>
              <div className="flex flex-wrap gap-2">
                {["g2.com", "rankly.co", "techcrunch.com", "reddit.com"].map((s) => (
                  <span
                    key={s}
                    className="inline-flex items-center gap-1 rounded-md border border-border bg-secondary/60 px-2 py-1 text-[11px] text-muted-foreground"
                  >
                    <FileText className="h-2.5 w-2.5" />
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Engines side panel */}
      <div className="lg:col-span-2 grid gap-4">
        {[
          { n: "ChatGPT", q: '"best B2B SEO agency"', status: "Cited #1", color: "from-primary to-primary-glow" },
          { n: "Perplexity", q: '"top AI SEO services"', status: "Top source", color: "from-primary-glow to-primary" },
          { n: "Google AI Overviews", q: '"AI SEO for SaaS"', status: "Featured", color: "from-primary to-primary-glow" },
        ].map((e) => (
          <div key={e.n} className="glass-card p-5 hover:border-primary/40 transition-all group">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className={`grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br ${e.color} shadow-glow`}>
                  <Sparkles className="h-4 w-4 text-primary-foreground" />
                </span>
                <div>
                  <div className="font-display text-sm font-semibold">{e.n}</div>
                  <div className="text-xs text-muted-foreground">{e.q}</div>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-primary/15 px-2.5 py-1 text-[11px] font-semibold text-primary border border-primary/30">
                {e.status}
              </span>
            </div>
          </div>
        ))}

        <div className="glass-card p-5 text-center">
          <ExternalLink className="h-5 w-5 text-primary mx-auto" />
          <div className="mt-2 font-display text-sm font-semibold">Tracked across 4+ engines</div>
          <div className="text-xs text-muted-foreground mt-1">
            Real-time visibility scoring on every query that matters to your pipeline.
          </div>
        </div>
      </div>
    </div>
  </section>
);
