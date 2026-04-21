import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import {
  Search, Bot, FileText, TrendingUp, Globe, BarChart3, Zap, Target, ArrowRight, CheckCircle2,
} from "lucide-react";

const seoIncludes = [
  "Full technical SEO audit",
  "On-page optimization at scale",
  "Keyword & topic clustering",
  "Editorial backlink building",
  "Content production & refresh",
  "Monthly performance reporting",
];

const aiSeoIncludes = [
  "AI Overviews visibility tracking",
  "Citation engineering for ChatGPT & Perplexity",
  "Entity & schema strategy",
  "LLM-friendly content structuring",
  "Brand authority signals",
  "Generative search analytics",
];

const addons = [
  { i: FileText, t: "SEO Content", d: "Conversion-focused content built around topical authority." },
  { i: TrendingUp, t: "Link Building", d: "Editorial backlinks from relevant, real publications." },
  { i: Globe, t: "International SEO", d: "Hreflang, multi-region strategy and localization." },
  { i: BarChart3, t: "SEO Analytics", d: "GA4, GSC, dashboards focused on pipeline." },
  { i: Zap, t: "Core Web Vitals", d: "Performance fixes that move rankings and conversions." },
  { i: Target, t: "CRO + SEO", d: "Turn organic traffic into qualified pipeline." },
];

const Services = () => (
  <>
    <Seo
      title="SEO & AI SEO Services — Rankly"
      description="Explore Rankly's SEO and AI SEO services: technical SEO, content, link building, and visibility in ChatGPT, Perplexity, and Google AI Overviews."
      path="/services"
    />

    <section className="container py-16 md:py-24 text-center">
      <span className="inline-flex items-center rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground">Services</span>
      <h1 className="mt-5 font-display text-4xl md:text-6xl font-bold text-gradient">
        Built for the <span className="text-gradient-primary">AI search era</span>
      </h1>
      <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
        Rank on Google and show up where buyers ask AI. Two flagship services, one connected growth engine.
      </p>
    </section>

    <section className="container py-12 grid lg:grid-cols-2 gap-6">
      {/* SEO */}
      <article id="seo" className="glass-card p-8 md:p-10 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary shadow-glow">
          <Search className="h-6 w-6 text-primary-foreground" />
        </div>
        <h2 className="mt-5 font-display text-2xl md:text-3xl font-bold">SEO Services</h2>
        <p className="mt-3 text-muted-foreground">
          Technical, content and authority strategies that compound month over month — built around your pipeline goals.
        </p>
        <ul className="mt-6 space-y-2.5">
          {seoIncludes.map((b) => (
            <li key={b} className="flex items-start gap-2.5 text-sm">
              <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <Button asChild variant="hero" className="mt-8">
          <Link to="/contact">Start with SEO <ArrowRight className="h-4 w-4" /></Link>
        </Button>
      </article>

      {/* AI SEO */}
      <article id="ai-seo" className="glass-card p-8 md:p-10 relative overflow-hidden">
        <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-primary-glow/20 blur-3xl" />
        <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary shadow-glow">
          <Bot className="h-6 w-6 text-primary-foreground" />
        </div>
        <h2 className="mt-5 font-display text-2xl md:text-3xl font-bold">AI SEO Services</h2>
        <p className="mt-3 text-muted-foreground">
          Get cited by ChatGPT, Perplexity, Gemini and Google AI Overviews. Own the new generative search surface.
        </p>
        <ul className="mt-6 space-y-2.5">
          {aiSeoIncludes.map((b) => (
            <li key={b} className="flex items-start gap-2.5 text-sm">
              <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <Button asChild variant="hero" className="mt-8">
          <Link to="/contact">Start with AI SEO <ArrowRight className="h-4 w-4" /></Link>
        </Button>
      </article>
    </section>

    <section className="container py-20">
      <SectionHeading eyebrow="Add-ons" title="Mix and match what you need" />
      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {addons.map((a) => (
          <div key={a.t} className="glass-card p-6 hover:border-primary/40 transition-all">
            <a.i className="h-6 w-6 text-primary" />
            <h3 className="mt-3 font-display font-semibold">{a.t}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{a.d}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="container py-20">
      <div className="glass-card p-10 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-gradient">Not sure where to start?</h2>
        <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Book a 30-min call. We'll recommend the right mix for your goals — no pressure.</p>
        <div className="mt-6 flex justify-center gap-3">
          <Button asChild variant="hero" size="lg">
            <a href="https://cal.com/rankly" target="_blank" rel="noopener noreferrer">
              Book a free call <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  </>
);

export default Services;
