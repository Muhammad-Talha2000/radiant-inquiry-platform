import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { ComparisonSection } from "@/components/ComparisonSection";
import { FaqSection } from "@/components/FaqSection";
import { FinalCtaBanner } from "@/components/FinalCtaBanner";
import { HeroAnimatedBg } from "@/components/HeroAnimatedBg";
import { Roadmap } from "@/components/Roadmap";
import { Reveal } from "@/components/Reveal";
import { CAL_LINK } from "@/lib/cal";
import {
  Search, Bot, ArrowRight, CheckCircle2, Target, FileEdit, Wrench, FileText, Link2,
  Layers, LineChart, Brain, Sparkles,
} from "lucide-react";

const seoBlocks = [
  {
    i: Target,
    t: "Keyword research",
    d: "Map every keyword that drives qualified business — by intent and revenue potential.",
    points: ["High-intent business keywords", "Competitor keyword analysis", "Search volume + difficulty mapping"],
  },
  {
    i: FileEdit,
    t: "On-page SEO",
    d: "Optimize every page so search engines understand and rank you for what matters.",
    points: ["Meta tags optimization", "Internal linking structure", "Content optimization"],
  },
  {
    i: Wrench,
    t: "Technical SEO",
    d: "A fast, crawlable, mobile-perfect site is the foundation of every ranking.",
    points: ["Site speed optimization", "Mobile optimization", "Crawlability & indexing fixes"],
  },
  {
    i: FileText,
    t: "Content SEO",
    d: "Topic clusters and pillar content built around how your buyers actually search.",
    points: ["SEO-optimized blog strategy", "Topic clustering", "Content gap analysis"],
  },
  {
    i: Link2,
    t: "Link building",
    d: "Authority backlinks from sites your customers and Google already trust.",
    points: ["High-authority backlinks", "Niche relevance strategy", "Editorial outreach"],
  },
];

const aiBlocks = [
  {
    i: Layers,
    t: "AI keyword clustering",
    d: "Group thousands of keywords by intent automatically — and prioritize the winnable ones.",
    points: ["Group keywords by search intent", "Build topic authority maps", "Prioritize by ranking probability"],
  },
  {
    i: LineChart,
    t: "Predictive ranking analysis",
    d: "Forecast which pages and keywords will rank — before you invest.",
    points: ["Identify ranking potential early", "Forecast traffic & ROI", "Beat competitors before they react"],
  },
  {
    i: Brain,
    t: "AI content structuring",
    d: "AI-built outlines and entity maps that align perfectly with search intent.",
    points: ["Optimized content outlines", "Search intent alignment", "Entity & schema mapping"],
  },
  {
    i: Sparkles,
    t: "AI content scaling system",
    d: "Production system that scales high-quality SEO content without losing the brand voice.",
    points: ["Scalable blog production", "Automated content planning", "Quality control workflows"],
  },
  {
    i: Bot,
    t: "AI search optimization",
    d: "Engineer citations across ChatGPT, Perplexity, Gemini and Google AI Overviews.",
    points: ["Optimize for SGE & ChatGPT", "Citation engineering", "Generative search analytics"],
  },
];

const process = [
  { n: "01", t: "SEO audit", d: "Full website + competitor diagnosis to surface every growth gap." },
  { n: "02", t: "Strategy build", d: "A SEO + AI SEO roadmap aligned to your revenue goals." },
  { n: "03", t: "Implementation", d: "On-page, technical and content execution every single week." },
  { n: "04", t: "Optimization", d: "Continuous ranking improvements that compound month over month." },
  { n: "05", t: "Scaling", d: "Expand keywords, content and pipeline impact across channels." },
];

const Services = () => (
  <>
    <Seo
      title="SEO & AI SEO Services for Business Growth — Orbit P1"
      description="Orbit P1's SEO & AI SEO services: technical SEO, content, link building, AI keyword clustering and visibility on ChatGPT, Perplexity & AI Overviews."
      path="/services"
    />

    {/* HERO — animated grid + glow background */}
    <section className="relative overflow-hidden isolate">
      <HeroAnimatedBg />

      <div className="container py-20 md:py-28 text-center relative z-10">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
          <Sparkles className="h-3 w-3 text-primary" />
          Services
        </span>
        <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95]">
          <span className="text-gradient">SEO & AI SEO services designed for </span>
          <span className="text-gradient-animated">business growth</span>
        </h1>
        <p className="mx-auto mt-7 max-w-2xl text-lg md:text-xl text-muted-foreground">
          We combine traditional SEO with AI-driven optimization systems to help businesses rank higher, attract more customers, and increase revenue.
        </p>
        <div className="mt-10 flex justify-center">
          <Button asChild variant="hero" size="xl">
            <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">
              Book a free consultation <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>

    {/* SEO SERVICES — alternating split rows (distinct from home) */}
    <section id="seo" className="container py-24">
      <SectionHeading
        eyebrow="SEO services"
        title={<>Search engine optimization that drives <span className="text-gradient-primary">rankings & revenue</span></>}
        description="We improve your website's visibility on Google with proven SEO strategies focused on rankings, traffic, and conversions."
      />

      <div className="mt-16 space-y-6">
        {seoBlocks.map((b, i) => {
          const reverse = i % 2 === 1;
          return (
            <Reveal key={b.t} delay={i * 60}>
              <article
                className={`glass-card overflow-hidden border-l-4 border-l-primary/60 hover:border-l-primary hover:shadow-glow transition-all duration-500 cursor-grow grid lg:grid-cols-[1fr,1.4fr] gap-0 ${
                  reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Left visual side */}
                <div className="relative bg-gradient-to-br from-primary/10 to-primary-glow/5 p-8 md:p-10 flex items-center justify-center min-h-[220px]">
                  <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-primary/20 blur-3xl" />
                  <div className="relative grid h-24 w-24 place-items-center rounded-3xl bg-gradient-primary shadow-glow">
                    <b.i className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <span className="absolute top-5 left-6 font-display text-sm font-bold uppercase tracking-[0.2em] text-primary">
                    0{i + 1} / SEO
                  </span>
                </div>
                {/* Right content */}
                <div className="p-8 md:p-10">
                  <h3 className="font-display text-2xl md:text-3xl font-bold">{b.t}</h3>
                  <p className="mt-3 text-base md:text-lg text-muted-foreground leading-relaxed">{b.d}</p>
                  <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                    {b.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-2.5 rounded-lg border border-border/60 bg-secondary/30 p-3 text-sm font-medium"
                      >
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>

    {/* AI SEO SERVICES — dark "engine" cards with gradient accent */}
    <section id="ai-seo" className="container py-24 relative">
      <div className="pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,black,transparent)]">
        <div className="hero-grid-move" />
      </div>

      <div className="relative">
        <SectionHeading
          eyebrow="AI SEO services"
          title={<>AI-powered SEO — the <span className="text-gradient-primary">next generation</span> of search</>}
          description="We use AI systems to improve SEO efficiency, accuracy, and scalability — helping businesses rank faster and more strategically."
        />

        <div className="mt-16 grid md:grid-cols-2 gap-5">
          {aiBlocks.map((b, i) => (
            <Reveal key={b.t} delay={i * 80}>
              <article
                className={`relative h-full rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-card via-card to-secondary/40 p-8 md:p-10 hover:border-primary/60 hover:shadow-glow transition-all duration-500 overflow-hidden group cursor-grow ${
                  i === 0 ? "md:col-span-2" : ""
                }`}
              >
                <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/15 blur-3xl group-hover:bg-primary/25 transition-colors" />
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative flex items-start gap-5">
                  <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-primary shadow-glow shrink-0">
                    <b.i className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                      0{i + 1} / AI SEO
                    </span>
                    <h3 className="mt-1 font-display text-2xl md:text-3xl font-bold">{b.t}</h3>
                    <p className="mt-2 text-base md:text-lg text-muted-foreground leading-relaxed">{b.d}</p>
                    <ul className="mt-5 grid sm:grid-cols-2 gap-2.5">
                      {b.points.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* COMPARISON (Services page keeps it) */}
    <ComparisonSection />

    {/* PROCESS — redesigned roadmap with arrows */}
    <section className="container py-24">
      <SectionHeading
        eyebrow="How we work"
        title={<>A <span className="text-gradient-primary">5-step process</span> from audit to scale</>}
      />
      <Roadmap steps={process} />
    </section>

    {/* FAQ */}
    <FaqSection />

    {/* FINAL CTA */}
    <FinalCtaBanner />

    {/* Tail link to case studies (kept for navigation) */}
    <div className="container pb-16 text-center">
      <Button asChild variant="outline" size="lg">
        <Link to="/case-studies">View full case studies <ArrowRight className="h-4 w-4" /></Link>
      </Button>
    </div>
  </>
);

export default Services;
