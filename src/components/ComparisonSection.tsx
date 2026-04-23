import { Check, X, Sparkles } from "lucide-react";
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

const Cell = ({ value }: { value: "yes" | "no" | string }) => {
  if (value === "yes")
    return (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/15 text-primary">
        <Check className="h-4 w-4" />
      </span>
    );
  if (value === "no")
    return (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-destructive/15 text-destructive/80">
        <X className="h-4 w-4" />
      </span>
    );
  return <span className="text-sm text-foreground/90">{value}</span>;
};

export const ComparisonSection = () => (
  <section className="container py-20">
    <SectionHeading
      eyebrow="Traditional SEO vs AI SEO"
      title={<>The architecture has <span className="text-gradient-primary">fundamentally changed</span></>}
      description="Old SEO playbooks weren't designed for generative engines. Here's how Orbit P1's AI-SEO stack compares."
    />

    <div className="mt-12 glass-card overflow-hidden">
      {/* Header */}
      <div className="grid grid-cols-3 gap-4 px-6 py-5 border-b border-border/60 bg-secondary/30">
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          What you need
        </div>
        <div className="text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Traditional SEO
        </div>
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-primary px-3 py-1 text-[11px] font-semibold text-primary-foreground shadow-glow">
            <Sparkles className="h-3 w-3" /> AI-SEO by Orbit P1
          </span>
        </div>
      </div>

      {/* Rows */}
      <div className="divide-y divide-border/50">
        {rows.map((r) => (
          <div
            key={r.label}
            className="grid grid-cols-3 gap-4 px-6 py-4 items-center hover:bg-secondary/20 transition-colors"
          >
            <div className="text-sm font-medium">{r.label}</div>
            <div className="flex justify-center">
              <Cell value={r.trad} />
            </div>
            <div className="flex justify-center">
              <Cell value={r.ai} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
