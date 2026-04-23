import { ShoppingBag, MapPin, Cloud, Building2 } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const items = [
  { i: ShoppingBag, t: "E-commerce stores", d: "Increase organic sales and product visibility." },
  { i: MapPin, t: "Local businesses", d: "More calls, bookings and walk-ins from local search." },
  { i: Cloud, t: "SaaS companies", d: "Generate more demos and high-intent signups." },
  { i: Building2, t: "Agencies", d: "Scale inbound client acquisition predictably." },
];

export const WhoForSection = () => (
  <section className="container py-20">
    <SectionHeading
      eyebrow="Who this is for"
      title={<>Built for businesses that want <span className="text-gradient-primary">more customers</span>, not just traffic</>}
      description="We work with growth-minded teams that measure SEO by revenue impact — not vanity metrics."
    />
    <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {items.map((it, i) => (
        <Reveal key={it.t} delay={i * 70}>
          <div className="glass-card p-6 h-full hover:border-primary/40 hover:-translate-y-1 hover:shadow-glow transition-all duration-500">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary shadow-glow mb-4">
              <it.i className="h-5 w-5 text-primary-foreground" />
            </div>
            <h3 className="font-display text-lg font-semibold">{it.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{it.d}</p>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);
