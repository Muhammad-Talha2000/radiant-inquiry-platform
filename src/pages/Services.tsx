import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { ComparisonSection } from "@/components/ComparisonSection";
import { FaqSection } from "@/components/FaqSection";
import { LogoTicker } from "@/components/LogoTicker";
import { FinalCtaBanner } from "@/components/FinalCtaBanner";
import { ResultsSection } from "@/components/ResultsSection";
import { Reveal } from "@/components/Reveal";
import { CAL_LINK } from "@/lib/cal";
import {
  Search, Bot, ArrowRight, CheckCircle2, Target, FileEdit, Wrench, FileText, Link2,
  Layers, LineChart, Brain, Sparkles, Zap,
} from "lucide-react";

const seoBlocks = [
  {
    i: Target,
    t: "Keyword research",
    points: ["High-intent business keywords", "Competitor keyword analysis", "Search volume + difficulty mapping"],
  },
  {
    i: FileEdit,
    t: "On-page SEO",
    points: ["Meta tags optimization", "Internal linking structure", "Content optimization"],
  },
  {
    i: Wrench,
    t: "Technical SEO",
    points: ["Site speed optimization", "Mobile optimization", "Crawlability & indexing fixes"],
  },
  {
    i: FileText,
    t: "Content SEO",
    points: ["SEO-optimized blog strategy", "Topic clustering", "Content gap analysis"],
  },
  {
    i: Link2,
    t: "Link building",
    points: ["High-authority backlinks", "Niche relevance strategy", "Editorial outreach"],
  },
];

const aiBlocks = [
  {
    i: Layers,
    t: "AI keyword clustering",
    points: ["Group keywords by search intent", "Build topic authority maps", "Prioritize by ranking probability"],
  },
  {
    i: LineChart,
    t: "Predictive ranking analysis",
    points: ["Identify ranking potential early", "Forecast traffic & ROI", "Beat competitors before they react"],
  },
  {
    i: Brain,
    t: "AI content structuring",
    points: ["Optimized content outlines", "Search intent alignment", "Entity & schema mapping"],
  },
  {
    i: Sparkles,
    t: "AI content scaling system",
    points: ["Scalable blog production", "Automated content planning", "Quality control workflows"],
  },
  {
    i: Bot,
    t: "AI search optimization",
    points: ["Optimize for SGE & ChatGPT", "Citation engineering", "Generative search analytics"],
  },
];

const process = [
  { n: "01", t: "SEO audit", d: "Full website + competitor analysis." },
  { n: "02", t: "Strategy build", d: "SEO + AI roadmap aligned to revenue." },
  { n: "03", t: "Implementation", d: "On-page, technical & content execution." },
  { n: "04", t: "Optimization", d: "Continuous ranking improvements." },
  { n: "05", t: "Scaling", d: "Expand keywords, content and traffic." },
];

const results = [
  "Higher Google rankings",
  "More organic traffic",
  "More qualified leads",
  "Better conversion rates",
];

const Services = () => (
  <>
    <Seo
      title="SEO & AI SEO Services for Business Growth — Orbit P1"
      description="Orbit P1's SEO & AI SEO services: technical SEO, content, link building, AI keyword clustering and visibility on ChatGPT, Perplexity & AI Overviews."
      path="/services"
    />

    {/* HERO */}
    <section className="relative overflow-hidden isolate">
      <div className="aurora-bg z-0" aria-hidden />
      <div className="container py-16 md:py-24 text-center relative z-10">
        <span className="inline-flex items-center rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground">Services</span>
        <h1 className="mt-5 font-display text-4xl md:text-6xl font-bold tracking-tight">
          <span className="text-gradient">SEO & AI SEO services designed for </span>
          <span className="text-gradient-animated">business growth</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
          We combine traditional SEO with AI-driven optimization systems to help businesses rank higher, attract more customers, and increase revenue.
        </p>
        <div className="mt-8 flex justify-center">
          <Button asChild variant="hero" size="xl">
            <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">
              Book a free consultation <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>

    {/* OVERVIEW */}
    <section className="container py-16">
      <div className="glass-card p-10 md:p-14 text-center">
        <SectionHeading
          eyebrow="Overview"
          title={<>A complete <span className="text-gradient-primary">search growth system</span></>}
          description="We don't just do SEO — we build a complete search visibility system that combines human expertise with AI intelligence."
        />
      </div>
    </section>

    {/* SEO SERVICES */}
    <section id="seo" className="container py-20">
      <SectionHeading
        eyebrow="SEO services"
        title={<>Search engine optimization that drives <span className="text-gradient-primary">rankings & revenue</span></>}
        description="We improve your website visibility on Google using proven SEO strategies focused on rankings, traffic, and conversions."
      />
      <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {seoBlocks.map((b, i) => (
          <Reveal key={b.t} delay={i * 70}>
            <div className="glass-card p-6 h-full hover:border-primary/40 hover:-translate-y-1 hover:shadow-glow transition-all duration-500">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary shadow-glow mb-4">
                <b.i className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold">{b.t}</h3>
              <ul className="mt-3 space-y-2">
                {b.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    {/* AI SEO SERVICES */}
    <section id="ai-seo" className="container py-20">
      <SectionHeading
        eyebrow="AI SEO services"
        title={<>AI-powered SEO — the <span className="text-gradient-primary">next generation</span> of search optimization</>}
        description="We use AI systems to improve SEO efficiency, accuracy, and scalability — helping businesses rank faster and more strategically."
      />
      <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {aiBlocks.map((b, i) => (
          <Reveal key={b.t} delay={i * 70}>
            <div className="glass-card p-6 h-full hover:border-primary/40 hover:-translate-y-1 hover:shadow-glow transition-all duration-500">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary shadow-glow mb-4">
                <b.i className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold">{b.t}</h3>
              <ul className="mt-3 space-y-2">
                {b.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    {/* COMPARISON */}
    <ComparisonSection />

    {/* PROCESS */}
    <section className="container py-20">
      <SectionHeading
        eyebrow="How we work"
        title="A 5-step process from audit to scale"
      />
      <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-5 gap-5">
        {process.map((p, i) => (
          <Reveal key={p.n} delay={i * 80}>
            <div className="glass-card p-6 h-full hover:border-primary/40 hover:-translate-y-1 transition-all duration-500">
              <span className="font-display text-sm text-primary">{p.n}</span>
              <h3 className="mt-2 font-display text-base font-semibold">{p.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    {/* TOOLS */}
    <LogoTicker />

    {/* RESULTS */}
    <section className="container py-20">
      <SectionHeading
        eyebrow="Results"
        title={<>What clients <span className="text-gradient-primary">achieve</span></>}
      />
      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
        {results.map((r) => (
          <div key={r} className="glass-card p-6 text-center hover:border-primary/40 transition-all duration-500">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary shadow-glow mx-auto mb-3">
              <Zap className="h-5 w-5 text-primary-foreground" />
            </div>
            <p className="font-display font-semibold">{r}</p>
          </div>
        ))}
      </div>
    </section>

    {/* CASE STUDY SNAPSHOT */}
    <ResultsSection />
    <div className="container -mt-8 mb-12 text-center">
      <Button asChild variant="outline" size="lg">
        <Link to="/case-studies">View full case studies <ArrowRight className="h-4 w-4" /></Link>
      </Button>
    </div>

    {/* FAQ */}
    <FaqSection />

    {/* FINAL CTA */}
    <FinalCtaBanner />
  </>
);

export default Services;
