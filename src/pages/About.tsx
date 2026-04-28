import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Building2, Search, Sparkles, Store, Target, Workflow } from "lucide-react";

const pillars = [
  {
    icon: Search,
    title: "Search Engine SEO",
    description: "Ranking your business on Google for high-intent keywords",
  },
  {
    icon: Bot,
    title: "AI SEO Optimization",
    description: "Making your brand visible across AI tools and platforms",
  },
  {
    icon: Target,
    title: "Conversion Strategy",
    description: "Turning traffic into leads and paying customers",
  },
  {
    icon: Workflow,
    title: "Data & Automation",
    description: "Using AI systems to scale and optimize results",
  },
];

const About = () => (
  <>
    <Seo
      title="About Orbit P1 — SEO & AI SEO Experts"
      description="Learn how Orbit P1 turns search visibility into real customers through SEO, AI SEO optimization, and conversion-focused growth systems."
      path="/about"
    />

    {/* SECTION 1 — Opening / Positioning */}
    <section className="relative overflow-hidden">
      <div className="container py-24 md:py-32 text-center relative z-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur-md animate-fade-in [animation-delay:50ms] [animation-fill-mode:both]">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          <span>About us</span>
        </div>

        <h1 className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[0.95] tracking-tight animate-fade-in [animation-delay:130ms] [animation-fill-mode:both]">
          We Turn <span className="text-gradient-primary">Visibility</span> Into Real Customers
        </h1>

        <p className="mx-auto mt-7 max-w-3xl text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-in [animation-delay:220ms] [animation-fill-mode:both]">
          We are an SEO and AI-driven growth agency helping businesses turn visibility into real customers. Our focus isn't just rankings—it's revenue. We combine traditional SEO with AI-powered discovery strategies to ensure your business gets found, trusted, and chosen across both search engines and emerging AI platforms.
        </p>
      </div>
      <div className="container pb-2">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/70 to-transparent shadow-glow" />
      </div>
    </section>

    {/* SECTION 2 — The Problem We Solve */}
    <section className="relative py-24 md:py-32 bg-secondary/20">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-20" />
      <div className="container relative z-10">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-card/40 backdrop-blur-xl p-8 md:p-12 shadow-soft">
          <span className="pointer-events-none absolute -top-8 right-4 font-display text-[8rem] leading-none text-primary/10">
            "
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient leading-tight">
            Ranking on Google Alone Isn't <span className="text-gradient-primary">Enough</span> Anymore
          </h2>
          <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-4xl">
            Customers now search through AI tools, voice assistants, and recommendation engines. Most businesses are still
            stuck using outdated SEO strategies that fail to capture these new opportunities—resulting in lost traffic,
            missed leads, and stagnant growth.
          </p>
        </div>
      </div>
    </section>

    {/* SECTION 3 — Our Approach (4 Pillars) */}
    <section className="relative py-24 md:py-32">
      <div className="container relative z-10">
        <SectionHeading title="Our Approach" />
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {pillars.map((pillar, index) => (
            <div key={pillar.title} className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-7 md:p-8 transition-all duration-500 hover:scale-[1.03] hover:shadow-glow">
              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-primary" />
              <div className="grid h-12 w-12 place-items-center rounded-xl border border-border bg-secondary/70">
                <pillar.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold">{pillar.title}</h3>
              <p className="mt-3 text-base text-muted-foreground leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* SECTION 4 — What Makes Us Different */}
    <section className="py-24 md:py-32 bg-secondary/20">
      <div className="container">
        <div className="rounded-3xl border border-white/10 bg-card/35 backdrop-blur-xl p-8 md:p-12 shadow-soft">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient leading-tight text-center md:text-left">
            Unlike Traditional Agencies
          </h2>
          <div className="mt-8 border-l-4 border-primary/80 pl-6 md:pl-8">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              We don't focus on vanity metrics like rankings alone. We build systems designed to attract qualified traffic,
              capture leads, and convert visitors into revenue.
            </p>
          </div>
          <p className="mt-10 text-center font-display text-2xl md:text-3xl font-bold text-gradient-primary">
            Our goal is simple: measurable business growth.
          </p>
        </div>
      </div>
    </section>

    {/* SECTION 5 — Mission & Vision */}
    <section className="relative py-24 md:py-32">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 md:p-10 h-full shadow-soft">
            <div className="pointer-events-none absolute -top-16 -right-16 h-52 w-52 rounded-full bg-primary/20 blur-3xl" />
            <span className="inline-flex items-center rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              Mission
            </span>
            <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed relative">
              To help businesses thrive in the new era of search — where AI and traditional SEO work together.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 md:p-10 h-full shadow-soft">
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-52 w-52 rounded-full bg-primary/20 blur-3xl" />
            <span className="inline-flex items-center rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              Vision
            </span>
            <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed relative">
              To redefine SEO from a ranking-focused service into a complete growth engine.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* SECTION 6 — Who We Work With */}
    <section className="py-24 md:py-32 bg-secondary/20">
      <div className="container text-center">
        <SectionHeading
          title="Who We Work With"
          description="We work with startups, local businesses, and growing brands that want more than just traffic — they want real results."
        />
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-4 py-2 text-sm text-foreground/90">
            <Sparkles className="h-4 w-4 text-primary" />
            <span>Startups</span>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-4 py-2 text-sm text-foreground/90">
            <Store className="h-4 w-4 text-primary" />
            <span>Local Businesses</span>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-4 py-2 text-sm text-foreground/90">
            <Building2 className="h-4 w-4 text-primary" />
            <span>Growing Brands</span>
          </div>
        </div>
      </div>
    </section>

    {/* SECTION 7 — Closing CTA */}
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-secondary/10 via-secondary/30 to-secondary/10" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />
      <div className="container relative z-10">
        <div className="rounded-3xl border border-white/10 bg-card/45 backdrop-blur-xl p-10 md:p-14 text-center shadow-elevated">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient">Ready to Grow Smarter?</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-base md:text-lg leading-relaxed">
            If you're ready to grow your business with a smarter, future-ready SEO strategy, we're here to help.
          </p>
          <div className="mt-8 flex justify-center">
            <Button asChild variant="hero" className="h-14 px-8 text-base animate-glow-pulse">
              <Link to="/contact">
                Get a Free Strategy Call <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default About;
