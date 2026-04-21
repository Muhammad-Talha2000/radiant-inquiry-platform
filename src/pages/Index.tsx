import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Seo } from "@/components/Seo";
import { SectionHeading } from "@/components/SectionHeading";
import { LeadForm } from "@/components/LeadForm";
import { PricingSection } from "@/components/PricingSection";
import { AISearchMockup } from "@/components/AISearchMockup";
import { ResultsSection } from "@/components/ResultsSection";
import { ComparisonSection } from "@/components/ComparisonSection";
import { FaqSection } from "@/components/FaqSection";
import { IndustriesStrip } from "@/components/IndustriesStrip";
import { CAL_LINK } from "@/lib/cal";
import heroGlow from "@/assets/hero-glow.jpg";
import {
  TrendingUp, Search, Bot, BarChart3, Globe, Zap, Target, FileText, CheckCircle2,
} from "lucide-react";

const stats = [
  { k: "+312%", v: "Avg. organic traffic growth" },
  { k: "150+", v: "Brands ranked on page 1" },
  { k: "8 yrs", v: "SEO & AI search expertise" },
  { k: "24h", v: "Response time guarantee" },
];

const services = [
  { icon: Search, title: "Technical SEO", desc: "Core Web Vitals, crawlability, schema, and site architecture done right." },
  { icon: Bot, title: "AI SEO", desc: "Get cited by ChatGPT, Perplexity, Gemini and Google AI Overviews." },
  { icon: FileText, title: "Content & E-E-A-T", desc: "Topical authority, expert content, and entity-driven SEO content." },
  { icon: TrendingUp, title: "Link Building", desc: "Editorial backlinks from real, relevant publications — zero spam." },
  { icon: Globe, title: "Local & International", desc: "Multi-region, multi-language SEO that converts where you sell." },
  { icon: BarChart3, title: "SEO Analytics", desc: "Dashboards that show pipeline impact, not just rankings." },
];

const process = [
  { n: "01", t: "Free SEO audit", d: "We diagnose technical, content and authority gaps holding your site back." },
  { n: "02", t: "Growth roadmap", d: "A 90-day prioritized plan tied to revenue, not vanity metrics." },
  { n: "03", t: "Execution", d: "Our team ships fixes, content, and links weekly with full transparency." },
  { n: "04", t: "Scale & report", d: "Monthly reporting + AI search visibility tracking as you grow." },
];

const logos = ["NOVA", "Lumen", "Quantra", "Helio", "Stack9", "Orbit", "Vega", "Pulse"];

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Rankly",
    url: typeof window !== "undefined" ? window.location.origin : "/",
    description: "SEO and AI SEO agency for modern brands.",
    sameAs: [],
  };

  return (
    <>
      <Seo
        title="Rankly — SEO & AI SEO Agency that Drives Real Growth"
        description="Modern SEO and AI SEO agency. Rank on Google and get cited in ChatGPT, Perplexity, and AI Overviews. Get a free SEO audit."
        path="/"
        jsonLd={jsonLd}
      />

      {/* HERO */}
      <section className="relative">
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-70"
          style={{
            backgroundImage: `url(${heroGlow})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            maskImage: "radial-gradient(ellipse 60% 60% at 50% 40%, black 30%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 40%, black 30%, transparent 80%)",
          }}
          aria-hidden
        />

        <div className="container pt-12 md:pt-20 pb-24 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs backdrop-blur-md animate-fade-in">
            <span className="grid h-5 w-5 place-items-center rounded-full bg-gradient-primary">
              <Sparkles className="h-3 w-3 text-primary-foreground" />
            </span>
            <span className="text-muted-foreground">New — AI SEO for ChatGPT & Perplexity</span>
          </div>

          <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gradient animate-fade-in">
            SEO & AI SEO that<br />
            <span className="text-gradient-primary">drives real growth.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-muted-foreground animate-fade-in">
            We help ambitious brands rank on Google and get cited by AI search engines like ChatGPT, Perplexity, and Google AI Overviews — with measurable pipeline impact.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center animate-fade-in">
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Get a free SEO audit <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="glass" size="xl">
              <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">Book a call</a>
            </Button>
          </div>

          <p className="mt-6 text-xs text-muted-foreground">Trusted by 150+ brands worldwide</p>
        </div>

      </section>

      {/* INDUSTRIES strip */}
      <IndustriesStrip />

      {/* STATS */}
      <section className="container py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {stats.map((s) => (
            <div key={s.v} className="bg-card p-6 md:p-8 text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-gradient-primary">{s.k}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* AI SEARCH MOCKUP */}
      <AISearchMockup />
      <section id="services" className="container py-20">
        <SectionHeading
          eyebrow="Our Services"
          title={<>SEO solutions built for the <span className="text-gradient-primary">AI era</span></>}
          description="A full-stack SEO offering — from technical foundations to AI search visibility — designed to compound growth."
        />

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div key={s.title} className="glass-card p-6 hover:border-primary/40 transition-all duration-300 group">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary shadow-glow mb-4 group-hover:scale-110 transition-transform">
                <s.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/services">Explore all services <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      {/* PROCESS */}
      <section className="container py-20">
        <SectionHeading
          eyebrow="How we work"
          title="A clear path from audit to compounding growth"
        />
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {process.map((p) => (
            <div key={p.n} className="glass-card p-6">
              <span className="font-display text-sm text-primary">{p.n}</span>
              <h3 className="mt-2 font-display text-lg font-semibold">{p.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RESULTS */}
      <ResultsSection />

      {/* COMPARISON */}
      <ComparisonSection />

      {/* WHY US */}
      <section className="container py-20">
        <div className="glass-card p-8 md:p-12 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Why Rankly"
              title={<>Built for <span className="text-gradient-primary">pipeline</span>, not vanity rankings</>}
            />
            <ul className="mt-6 space-y-3">
              {[
                "Strategy tied to revenue, not just keyword positions",
                "Hands-on senior team — no junior account managers",
                "AI search optimization built into every engagement",
                "Transparent reporting & weekly progress",
                "Performance-driven content engine",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button asChild variant="hero">
                <Link to="/contact">Book a strategy call <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { i: Zap, t: "Fast execution" },
              { i: Target, t: "Revenue focus" },
              { i: Bot, t: "AI-native" },
              { i: BarChart3, t: "Transparent" },
            ].map(({ i: Icon, t }) => (
              <div key={t} className="rounded-2xl border border-border bg-background/40 p-6 text-center">
                <Icon className="h-6 w-6 mx-auto text-primary" />
                <div className="mt-3 text-sm font-medium">{t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <PricingSection />

      {/* FAQ */}
      <FaqSection />

      {/* CTA / LEAD */}
      <section className="container py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <SectionHeading
            align="left"
            eyebrow="Free SEO audit"
            title={<>Find out what's holding your <span className="text-gradient-primary">rankings</span> back</>}
            description="Tell us about your site and goals. We'll send back a personalized audit with quick wins and a 90-day growth plan."
          />
          <LeadForm />
        </div>
      </section>
    </>
  );
};

export default Index;
