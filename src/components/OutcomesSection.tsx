import { ShoppingBag, MapPin, TrendingUp } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const outcomes = [
  {
    i: ShoppingBag,
    t: "E-commerce",
    points: [
      "Increased organic revenue from product & category pages",
      "Higher product visibility across Google + Shopping",
      "More repeat customers via SEO-driven content",
    ],
  },
  {
    i: MapPin,
    t: "Local businesses",
    points: [
      "More inbound calls from local search",
      "More bookings from Google Maps & service pages",
      "More walk-ins from high-intent local queries",
    ],
  },
];

export const OutcomesSection = () => (
  <section className="container py-24">
    <SectionHeading
      eyebrow="Business outcomes"
      title={<>Real results, mapped to your <span className="text-gradient-primary">business model</span></>}
      description="What changes when search visibility is engineered for revenue, not just rankings."
    />

    {/* Two stacked rows: E-commerce first, Local second */}
    <div className="mt-14 max-w-4xl mx-auto space-y-6">
      {outcomes.map((o, i) => (
        <Reveal key={o.t} delay={i * 100}>
          <div className="glass-card p-8 md:p-10 hover:border-primary/40 hover:shadow-glow transition-all duration-500 cursor-grow">
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
              <div className="flex items-center gap-4 md:min-w-[260px]">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary shadow-glow shrink-0">
                  <o.i className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold">{o.t}</h3>
                  <span className="inline-flex items-center gap-1.5 mt-1 text-sm text-primary">
                    <TrendingUp className="h-4 w-4" /> Growth outcomes
                  </span>
                </div>
              </div>

              <ul className="flex-1 grid sm:grid-cols-3 gap-3">
                {o.points.map((p) => (
                  <li
                    key={p}
                    className="rounded-xl border border-border/60 bg-secondary/30 p-4 text-sm text-foreground/90"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);
