import { Check, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { CAL_LINK } from "@/lib/cal";

const tiers = [
  {
    name: "Starter",
    price: "$999",
    cadence: "/mo",
    description: "For early-stage brands ready to build organic momentum.",
    features: [
      "Technical SEO audit + fixes",
      "10 keywords tracked",
      "4 SEO articles / month",
      "On-page optimization",
      "Monthly performance report",
    ],
    cta: "Start with Starter",
    featured: false,
  },
  {
    name: "Growth",
    price: "$2,499",
    cadence: "/mo",
    description: "For scaling brands ready to dominate search & AI Overviews.",
    features: [
      "Everything in Starter",
      "50 keywords + AI search tracking",
      "10 SEO articles / month",
      "Editorial link building (4/mo)",
      "AI SEO (ChatGPT, Perplexity)",
      "Bi-weekly strategy calls",
    ],
    cta: "Choose Growth",
    featured: true,
  },
  {
    name: "Scale",
    price: "$4,999",
    cadence: "/mo",
    description: "For market leaders compounding pipeline at scale.",
    features: [
      "Everything in Growth",
      "Unlimited keyword tracking",
      "20+ SEO articles / month",
      "Editorial link building (10/mo)",
      "International / multi-region SEO",
      "Dedicated SEO strategist",
      "Custom dashboards",
    ],
    cta: "Talk to sales",
    featured: false,
  },
];

export const PricingSection = () => (
  <section id="pricing" className="container py-20">
    <SectionHeading
      eyebrow="Pricing"
      title={<>Simple, transparent <span className="text-gradient-primary">SEO pricing</span></>}
      description="Flat monthly engagements. No long-term contracts. Cancel anytime after 90 days."
    />

    <div className="mt-14 grid md:grid-cols-3 gap-5">
      {tiers.map((tier) => (
        <div
          key={tier.name}
          className={`relative glass-card p-8 flex flex-col ${
            tier.featured
              ? "border-primary/60 shadow-glow scale-[1.02]"
              : "hover:border-primary/40 transition-all"
          }`}
        >
          {tier.featured && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1 rounded-full bg-gradient-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-glow">
                <Sparkles className="h-3 w-3" /> Most popular
              </span>
            </div>
          )}

          <div>
            <h3 className="font-display text-xl font-bold">{tier.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{tier.description}</p>
          </div>

          <div className="mt-6">
            <span className="font-display text-4xl md:text-5xl font-bold text-gradient-primary">
              {tier.price}
            </span>
            <span className="text-muted-foreground">{tier.cadence}</span>
          </div>

          <ul className="mt-6 space-y-3 flex-1">
            {tier.features.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm">
                <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <Button
            asChild
            variant={tier.featured ? "hero" : "outline"}
            className="mt-8 w-full"
          >
            <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">
              {tier.cta} <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      ))}
    </div>

    <p className="mt-8 text-center text-sm text-muted-foreground">
      All plans include a free SEO audit. Need something custom?{" "}
      <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
        Book a call
      </a>
      .
    </p>
  </section>
);
