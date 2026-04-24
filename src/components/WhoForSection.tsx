import { ShoppingBag, MapPin, Cloud, Building2 } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const items = [
  {
    i: ShoppingBag,
    t: "E-commerce stores",
    d: "Increase organic sales, product visibility and repeat customers from search.",
  },
  {
    i: MapPin,
    t: "Local businesses",
    d: "More calls, bookings and walk-ins from local intent searches in your area.",
  },
  {
    i: Cloud,
    t: "SaaS companies",
    d: "Generate more demos and high-intent signups from category and feature keywords.",
  },
  {
    i: Building2,
    t: "Agencies",
    d: "Scale predictable inbound client acquisition with productized SEO + AI SEO.",
  },
];

export const WhoForSection = () => (
  <section className="container py-24">
    <SectionHeading
      eyebrow="Who this is for"
      title={
        <>
          Built for businesses that want{" "}
          <span className="text-gradient-primary">more customers</span>, not just traffic
        </>
      }
      description="We work with growth-minded teams that measure SEO by revenue impact — not vanity metrics."
    />
    <div className="mt-14 grid md:grid-cols-2 gap-6">
      {items.map((it, i) => (
        <Reveal key={it.t} delay={i * 80}>
          <div className="glass-card p-8 h-full hover:border-primary/40 hover:-translate-y-1 hover:shadow-glow transition-all duration-500 cursor-grow">
            <div className="flex items-start gap-5">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary shadow-glow shrink-0">
                <it.i className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-semibold">{it.t}</h3>
                <p className="mt-3 text-base text-muted-foreground leading-relaxed">{it.d}</p>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);
