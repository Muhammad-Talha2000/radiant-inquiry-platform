import { AlertTriangle } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const problems = [
  { t: "Ranking without conversions", d: "Traffic that never turns into pipeline or revenue." },
  { t: "Outdated SEO strategies", d: "Playbooks built for the pre-AI search era." },
  { t: "No AI-driven optimization", d: "Missing visibility on ChatGPT, Perplexity, AI Overviews." },
  { t: "Weak content targeting", d: "Content written for keywords, not buyer intent." },
  { t: "No measurable ROI tracking", d: "Reports full of rankings, empty on revenue impact." },
  { t: "Slow execution", d: "Months of audits, weeks between deliverables." },
];

export const ProblemSection = () => (
  <section className="container py-20">
    <SectionHeading
      eyebrow="The problem"
      title={<>Why most businesses <span className="text-gradient-primary">fail with SEO</span></>}
      description="The SEO landscape changed. Most agencies haven't. These are the gaps we close."
    />
    <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {problems.map((p, i) => (
        <Reveal key={p.t} delay={i * 60}>
          <div className="glass-card p-6 h-full border-destructive/20 hover:border-destructive/50 transition-all duration-500">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-destructive/15 mb-4">
              <AlertTriangle className="h-5 w-5 text-destructive/80" />
            </div>
            <h3 className="font-display font-semibold">{p.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);
