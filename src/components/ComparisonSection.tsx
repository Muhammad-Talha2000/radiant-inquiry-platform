import { Check, X, Sparkles, Search } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const rows = [
  { label: "Google rankings", trad: "yes", ai: "yes" },
  { label: "ChatGPT visibility", trad: "no", ai: "yes" },
  { label: "Perplexity & Gemini citations", trad: "no", ai: "yes" },
  { label: "Google AI Overviews", trad: "no", ai: "yes" },
  { label: "Structured data & schema", trad: "Rare", ai: "Core" },
  { label: "Conversational Q&A formatting", trad: "no", ai: "yes" },
  { label: "Knowledge graph inclusion", trad: "Rare", ai: "Active" },
  { label: "Time to results", trad: "6–12 months", ai: "3–4 weeks" },
];

const Cell = ({ value, type }: { value: "yes" | "no" | string; type: "trad" | "ai" }) => {
  if (value === "yes")
    return (
      <span
        className={`inline-flex h-9 w-9 items-center justify-center rounded-full ${
          type === "ai" ? "bg-primary text-primary-foreground shadow-glow" : "bg-primary/15 text-primary"
        }`}
      >
        <Check className="h-5 w-5" />
      </span>
    );
  if (value === "no")
    return (
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-destructive/15 text-destructive/80">
        <X className="h-5 w-5" />
      </span>
    );
  return (
    <span
      className={`text-sm md:text-base font-semibold ${
        type === "ai" ? "text-primary" : "text-muted-foreground"
      }`}
    >
      {value}
    </span>
  );
};

export const ComparisonSection = () => (
  <section className="container py-24">
    <SectionHeading
      eyebrow="Traditional SEO vs AI SEO"
      title={<>The architecture has <span className="text-gradient-primary">fundamentally changed</span></>}
      description="Old SEO playbooks weren't designed for generative engines. Here's how Orbit P1's AI-SEO stack compares."
    />

    <div className="mt-14 max-w-5xl mx-auto">
      {/* Header tiles */}
      <div className="grid grid-cols-3 gap-3 mb-3">
        <div className="rounded-2xl border border-border bg-card/60 backdrop-blur p-4 md:p-5">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
            What you need
          </span>
        </div>
        <div className="rounded-2xl border border-border bg-card/60 backdrop-blur p-4 md:p-5 text-center">
          <span className="inline-flex items-center gap-2 text-sm md:text-base font-semibold text-foreground/80">
            <Search className="h-4 w-4" />
            Traditional SEO
          </span>
        </div>
        <div className="rounded-2xl border-2 border-primary/50 bg-gradient-to-br from-primary/15 to-primary-glow/10 backdrop-blur p-4 md:p-5 text-center shadow-glow">
          <span className="inline-flex items-center gap-2 text-sm md:text-base font-bold text-primary">
            <Sparkles className="h-4 w-4" />
            AI-SEO by Orbit P1
          </span>
        </div>
      </div>

      {/* Rows */}
      <div className="rounded-2xl border border-border bg-card/40 backdrop-blur overflow-hidden divide-y divide-border/60">
        {rows.map((r, idx) => (
          <div
            key={r.label}
            className={`grid grid-cols-3 gap-3 px-5 md:px-7 py-5 items-center transition-colors hover:bg-secondary/30 ${
              idx % 2 === 0 ? "bg-secondary/10" : ""
            }`}
          >
            <div className="text-sm md:text-base font-semibold">{r.label}</div>
            <div className="flex justify-center">
              <Cell value={r.trad} type="trad" />
            </div>
            <div className="flex justify-center">
              <Cell value={r.ai} type="ai" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
