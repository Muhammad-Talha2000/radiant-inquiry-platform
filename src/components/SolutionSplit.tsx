import { Search, Bot, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const seo = [
  "Keyword research",
  "On-page SEO",
  "Technical SEO",
  "Backlink strategy",
  "Content optimization",
];
const ai = [
  "AI keyword clustering",
  "Predictive ranking analysis",
  "AI content structuring",
  "Search intent modeling",
  "Content scaling systems",
];

export const SolutionSplit = () => (
  <section className="container py-20">
    <SectionHeading
      eyebrow="Our system"
      title={<>A modern SEO system <span className="text-gradient-primary">built for growth</span></>}
      description="A proven foundation paired with an AI layer that scales faster than any competitor."
    />

    <div className="mt-14 grid lg:grid-cols-2 gap-6">
      <article className="glass-card p-8 md:p-10 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
        <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary shadow-glow">
          <Search className="h-6 w-6 text-primary-foreground" />
        </div>
        <h3 className="mt-5 font-display text-2xl font-bold">SEO — core foundation</h3>
        <p className="mt-2 text-muted-foreground">Battle-tested SEO fundamentals that compound month over month.</p>
        <ul className="mt-6 space-y-2.5">
          {seo.map((b) => (
            <li key={b} className="flex items-start gap-2.5 text-sm">
              <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </article>

      <article className="glass-card p-8 md:p-10 relative overflow-hidden">
        <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-primary-glow/15 blur-3xl" />
        <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary shadow-glow">
          <Bot className="h-6 w-6 text-primary-foreground" />
        </div>
        <h3 className="mt-5 font-display text-2xl font-bold">AI SEO — advanced layer</h3>
        <p className="mt-2 text-muted-foreground">Predictive, AI-powered systems that scale visibility faster.</p>
        <ul className="mt-6 space-y-2.5">
          {ai.map((b) => (
            <li key={b} className="flex items-start gap-2.5 text-sm">
              <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </article>
    </div>
  </section>
);
