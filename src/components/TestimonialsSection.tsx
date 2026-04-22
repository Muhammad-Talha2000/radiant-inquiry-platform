import { Star, Quote } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const testimonials = [
  {
    quote:
      "Rankly didn't just grow our traffic — they rebuilt our entire pipeline. We're now cited in ChatGPT answers for our top buyer questions.",
    name: "Priya Sharma",
    role: "Head of Growth, FinPilot",
    initial: "P",
  },
  {
    quote:
      "Within 4 months we 3x'd organic demos. Their AI SEO playbook is light years ahead of every other agency we tested.",
    name: "Marcus Lee",
    role: "VP Marketing, NexCloud",
    initial: "M",
  },
  {
    quote:
      "Senior team, zero fluff, weekly shipping. Rankly feels like an in-house growth squad — not an agency.",
    name: "Elena Rossi",
    role: "CMO, Vaultline",
    initial: "E",
  },
  {
    quote:
      "We went from invisible in AI Overviews to being the default cited source for our category. Game changing.",
    name: "Daniel Okafor",
    role: "Founder, Stackshift",
    initial: "D",
  },
  {
    quote:
      "Reporting tied directly to pipeline. Finally an SEO partner that speaks the language of revenue.",
    name: "Sara Bennett",
    role: "Director of Demand, Loophub",
    initial: "S",
  },
  {
    quote:
      "Their technical audit alone uncovered $1.2M of recoverable organic revenue. Then they actually executed it.",
    name: "Hiroshi Tanaka",
    role: "Head of SEO, Brightline",
    initial: "H",
  },
];

export const TestimonialsSection = () => (
  <section className="container py-20">
    <SectionHeading
      eyebrow="Testimonials"
      title={<>Loved by growth teams at <span className="text-gradient-primary">scaling brands</span></>}
      description="Real results from operators who trusted us with their organic and AI search growth."
    />

    <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {testimonials.map((t, i) => (
        <Reveal key={t.name} delay={i * 80}>
          <article className="group relative h-full glass-card p-6 transition-all duration-500 hover:border-primary/50 hover:-translate-y-1 hover:shadow-glow">
            <Quote className="absolute right-5 top-5 h-8 w-8 text-primary/15 group-hover:text-primary/30 transition-colors" />
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={idx} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-sm md:text-[15px] leading-relaxed text-foreground/90">"{t.quote}"</p>
            <div className="mt-6 flex items-center gap-3 pt-5 border-t border-border/60">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-primary text-primary-foreground font-display font-semibold shadow-glow">
                {t.initial}
              </div>
              <div>
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  </section>
);
