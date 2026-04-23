import { ShoppingBag, MapPin, Cloud, TrendingUp } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const outcomes = [
  {
    i: ShoppingBag,
    t: "E-commerce",
    points: ["Increased organic revenue", "Higher product visibility", "More repeat customers"],
  },
  {
    i: MapPin,
    t: "Local businesses",
    points: ["More calls", "More bookings", "More walk-ins"],
  },
  {
    i: Cloud,
    t: "SaaS",
    points: ["More demo signups", "Higher quality leads", "Lower CAC"],
  },
];

export const OutcomesSection = () => (
  <section className="container py-20">
    <SectionHeading
      eyebrow="Business outcomes"
      title={<>Real results, mapped to your <span className="text-gradient-primary">business model</span></>}
      description="What changes when search visibility is engineered for revenue, not just rankings."
    />
    <div className="mt-14 grid md:grid-cols-3 gap-5">
      {outcomes.map((o, i) => (
        <Reveal key={o.t} delay={i * 80}>
          <div className="glass-card p-7 h-full hover:border-primary/40 hover:-translate-y-1 hover:shadow-glow transition-all duration-500">
            <div className="flex items-center justify-between">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary shadow-glow">
                <o.i className="h-5 w-5 text-primary-foreground" />
              </div>
              <TrendingUp className="h-5 w-5 text-primary/70" />
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold">{o.t}</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {o.points.map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {p}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);
