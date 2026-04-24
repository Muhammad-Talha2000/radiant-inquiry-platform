import {
  AlertTriangle,
  TrendingDown,
  Bot,
  Target,
  BarChart3,
  Clock,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const problems = [
  { i: TrendingDown, t: "Ranking without conversions", d: "Traffic that never turns into pipeline or revenue." },
  { i: AlertTriangle, t: "Outdated SEO strategies", d: "Playbooks built for the pre-AI search era." },
  { i: Bot, t: "No AI-driven optimization", d: "Missing visibility on ChatGPT, Perplexity & AI Overviews." },
  { i: Target, t: "Weak content targeting", d: "Content written for keywords, not buyer intent." },
  { i: BarChart3, t: "No measurable ROI tracking", d: "Reports full of rankings, empty on revenue impact." },
  { i: Clock, t: "Slow execution", d: "Months of audits, weeks between deliverables." },
];

export const ProblemSection = () => (
  <section className="container py-24 relative">
    {/* subtle decorative grid */}
    <div className="pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]">
      <div className="hero-grid-move" />
    </div>

    <div className="relative">
      <SectionHeading
        eyebrow="The problem"
        title={<>Why most businesses <span className="text-gradient-primary">fail with SEO</span></>}
        description="The SEO landscape changed. Most agencies haven't. These are the gaps we close."
      />

      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {problems.map((p, i) => (
          <Reveal key={p.t} delay={i * 80}>
            <div className="group relative glass-card p-7 h-full border-destructive/15 hover:border-destructive/50 transition-all duration-500 overflow-hidden cursor-grow">
              {/* animated red pulse */}
              <span
                aria-hidden
                className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-destructive/15 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              />
              {/* number */}
              <span className="absolute top-5 right-6 font-display text-5xl font-bold text-destructive/10 group-hover:text-destructive/25 transition-colors">
                0{i + 1}
              </span>

              <div className="relative grid h-12 w-12 place-items-center rounded-xl bg-destructive/15 mb-5 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500">
                <p.i className="h-6 w-6 text-destructive/80" />
                <span className="absolute inset-0 rounded-xl border border-destructive/40 animate-ping opacity-0 group-hover:opacity-100" />
              </div>

              <h3 className="relative font-display text-lg font-semibold">{p.t}</h3>
              <p className="relative mt-2 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
