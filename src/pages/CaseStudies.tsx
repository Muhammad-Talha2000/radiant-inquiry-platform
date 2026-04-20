import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";

const cases = [
  {
    brand: "NovaSaaS",
    industry: "B2B SaaS",
    metric: "+412%",
    label: "Organic signups",
    summary: "Topical authority + AI Overviews strategy 5x'd qualified signups in 9 months.",
  },
  {
    brand: "Lumen Store",
    industry: "Ecommerce",
    metric: "+267%",
    label: "Organic revenue",
    summary: "Technical fixes + collection-page SEO turned organic into the #1 channel.",
  },
  {
    brand: "Quantra Health",
    industry: "Healthtech",
    metric: "Top 3",
    label: "ChatGPT citations",
    summary: "Entity & schema strategy made Quantra a default source in AI search.",
  },
  {
    brand: "Helio Finance",
    industry: "Fintech",
    metric: "+189%",
    label: "Pipeline from SEO",
    summary: "BoFu content and authority links shifted SEO into a real revenue channel.",
  },
];

const CaseStudies = () => (
  <>
    <Seo
      title="Case Studies — Rankly SEO & AI SEO Results"
      description="Real SEO and AI SEO case studies from Rankly. See how we've grown organic traffic, pipeline and AI search visibility."
      path="/case-studies"
    />

    <section className="container py-16 md:py-24 text-center">
      <span className="inline-flex items-center rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground">Case studies</span>
      <h1 className="mt-5 font-display text-4xl md:text-6xl font-bold text-gradient">
        Results that <span className="text-gradient-primary">compound</span>
      </h1>
      <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
        A look at how we've helped brands win in classic Google search and the new AI search landscape.
      </p>
    </section>

    <section className="container py-12">
      <div className="grid md:grid-cols-2 gap-5">
        {cases.map((c) => (
          <article key={c.brand} className="glass-card p-8 hover:border-primary/40 transition-all relative overflow-hidden">
            <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="font-display text-xl font-bold">{c.brand}</h2>
                <p className="text-xs text-muted-foreground">{c.industry}</p>
              </div>
              <span className="rounded-full bg-secondary border border-border px-3 py-1 text-xs">Coming soon</span>
            </div>
            <div className="mt-6 flex items-baseline gap-3">
              <span className="font-display text-4xl font-bold text-gradient-primary">{c.metric}</span>
              <span className="text-sm text-muted-foreground">{c.label}</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">{c.summary}</p>
            <button className="mt-6 inline-flex items-center gap-1 text-sm text-primary hover:gap-2 transition-all">
              Read case study <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </article>
        ))}
      </div>
    </section>

    <section className="container py-20">
      <div className="glass-card p-10 text-center">
        <TrendingUp className="h-8 w-8 mx-auto text-primary" />
        <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-gradient">Want results like these?</h2>
        <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Get a free SEO audit and see what's possible for your brand.</p>
        <div className="mt-6 flex justify-center gap-3">
          <Button asChild variant="hero" size="lg"><Link to="/contact">Get free audit <ArrowRight className="h-4 w-4" /></Link></Button>
        </div>
      </div>
    </section>
  </>
);

export default CaseStudies;
