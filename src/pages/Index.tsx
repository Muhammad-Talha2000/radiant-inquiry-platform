import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Seo } from "@/components/Seo";
import { SectionHeading } from "@/components/SectionHeading";
import { LeadForm } from "@/components/LeadForm";
import { AISearchMockup } from "@/components/AISearchMockup";
import { ResultsSection } from "@/components/ResultsSection";
import { FaqSection } from "@/components/FaqSection";
import { IndustriesStrip } from "@/components/IndustriesStrip";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { LogoTicker } from "@/components/LogoTicker";
import { WhoForSection } from "@/components/WhoForSection";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSplit } from "@/components/SolutionSplit";
import { OutcomesSection } from "@/components/OutcomesSection";
import { FinalCtaBanner } from "@/components/FinalCtaBanner";
import { HeroAnimatedBg } from "@/components/HeroAnimatedBg";
import { Roadmap } from "@/components/Roadmap";
import { Reveal } from "@/components/Reveal";
import { CAL_LINK } from "@/lib/cal";
import {
  Search, Bot, FileText, MapPin, ClipboardCheck, Wrench,
} from "lucide-react";

const services = [
  { icon: Search, title: "SEO Optimization", desc: "Rankings, traffic and conversions across Google." },
  { icon: Bot, title: "AI SEO Strategy", desc: "Visibility on ChatGPT, Perplexity and AI Overviews." },
  { icon: Wrench, title: "Technical SEO", desc: "Site speed, crawlability, schema, Core Web Vitals." },
  { icon: FileText, title: "Content SEO", desc: "Topic clusters and content built around buyer intent." },
  { icon: MapPin, title: "Local SEO", desc: "Get found by nearby customers ready to buy." },
  { icon: ClipboardCheck, title: "SEO Audit", desc: "Diagnose every gap holding your rankings back." },
];

const process = [
  { n: "01", t: "SEO audit & analysis", d: "Full website + competitor diagnosis to find growth gaps." },
  { n: "02", t: "Strategy development", d: "A SEO + AI roadmap aligned to your revenue goals." },
  { n: "03", t: "Implementation", d: "Technical, on-page and content execution every week." },
  { n: "04", t: "Optimization & growth", d: "Continuous improvements that compound month over month." },
  { n: "05", t: "Scaling & tracking", d: "Expand keywords, content and pipeline impact." },
];

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Orbit P1",
    url: typeof window !== "undefined" ? window.location.origin : "/",
    description: "SEO and AI SEO agency turning search visibility into real customers and revenue.",
    sameAs: [],
  };

  return (
    <>
      <Seo
        title="Orbit P1 — SEO & AI SEO Agency for Business Growth"
        description="Turn search visibility into real customers. Orbit P1 combines proven SEO with AI-powered search optimization to drive rankings, leads and revenue."
        path="/"
        jsonLd={jsonLd}
      />

      {/* HERO */}
      <section className="relative overflow-hidden isolate">
        <HeroAnimatedBg />

        <div className="container pt-16 md:pt-24 pb-28 text-center relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs backdrop-blur-md animate-fade-in">
            <span className="grid h-5 w-5 place-items-center rounded-full bg-gradient-primary animate-glow-pulse">
              <Sparkles className="h-3 w-3 text-primary-foreground" />
            </span>
            <span className="text-muted-foreground">SEO + AI SEO built for business growth</span>
          </div>

          <h1 className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[0.95] animate-fade-in">
            <span className="text-gradient">Turn search visibility into</span><br />
            <span className="text-gradient-animated">real business growth.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg md:text-xl text-muted-foreground animate-fade-in">
            We help businesses generate more customers through advanced SEO and AI-powered search optimization that improves rankings, traffic, and conversions.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center animate-fade-in">
            <Button asChild variant="hero" size="xl">
              <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">
                Book a free strategy call <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="glass" size="xl">
              <Link to="/contact">Get free SEO audit</Link>
            </Button>
          </div>

          <p className="mt-7 text-sm text-muted-foreground">Trusted by growing brands across 4 continents</p>
        </div>
      </section>

      {/* TOOL STACK TICKER (text + icon pills) */}
      <LogoTicker />

      {/* INDUSTRIES strip */}
      <IndustriesStrip />

      {/* WHO IT'S FOR (2 per row) */}
      <WhoForSection />

      {/* PROBLEM (animated infographic cards) */}
      <ProblemSection />

      {/* SOLUTION SPLIT — tabs, borders, larger fonts */}
      <SolutionSplit />

      {/* AI SEARCH MOCKUP — businesses + e-commerce */}
      <AISearchMockup />

      {/* SERVICES PREVIEW (bigger text) */}
      <section id="services" className="container py-24">
        <SectionHeading
          eyebrow="Services preview"
          title={<>A full <span className="text-gradient-primary">search growth system</span></>}
          description="Pick a single service or combine them into a complete SEO + AI SEO engine."
        />

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <Link to="/services" className="block h-full cursor-grow">
                <div className="glass-card p-8 hover:border-primary/50 hover:-translate-y-1 hover:shadow-glow transition-all duration-500 group h-full">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary shadow-glow mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    <s.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-2xl font-bold">{s.title}</h3>
                  <p className="mt-3 text-base text-muted-foreground leading-relaxed">{s.desc}</p>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/services">Explore all services <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      {/* HOW IT WORKS — roadmap with arrows */}
      <section className="container py-24">
        <SectionHeading
          eyebrow="How it works"
          title={<>From audit to compounding growth in <span className="text-gradient-primary">5 steps</span></>}
        />
        <Roadmap steps={process} />
      </section>

      {/* BUSINESS OUTCOMES — E-com row + Local row, no SaaS */}
      <OutcomesSection />

      {/* CASE STUDY PREVIEW (RESULTS) — bigger, animated stats + tabs */}
      <ResultsSection />
      <div className="container -mt-8 mb-16 text-center">
        <Button asChild variant="outline" size="lg">
          <Link to="/case-studies">View case studies <ArrowRight className="h-4 w-4" /></Link>
        </Button>
      </div>

      {/* TESTIMONIALS */}
      <TestimonialsSection />

      {/* FAQ */}
      <FaqSection />

      {/* LEAD GENERATION (bigger text) */}
      <section className="container py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <SectionHeading
            align="left"
            eyebrow="Free growth plan"
            title={<>Get a free SEO growth plan for <span className="text-gradient-primary">your business</span></>}
            description="Tell us about your goals. We'll send back a personalized SEO + AI SEO plan with quick wins and a 90-day roadmap."
          />
          <LeadForm />
        </div>
      </section>

      {/* FINAL CTA BANNER */}
      <FinalCtaBanner />
    </>
  );
};

export default Index;
