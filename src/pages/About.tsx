import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { ArrowRight, Compass, HeartHandshake, Rocket, Shield } from "lucide-react";

const values = [
  { icon: Compass, t: "Strategy first", d: "We start with your revenue goals and work backwards into SEO." },
  { icon: HeartHandshake, t: "Real partnership", d: "Senior operators in your channel, not faceless reports." },
  { icon: Rocket, t: "Bias to ship", d: "Weekly progress over quarterly slide decks." },
  { icon: Shield, t: "Sustainable", d: "White-hat tactics that compound for years." },
];

const team = [
  { n: "Aman Patel", r: "Founder & SEO Lead", i: "AP" },
  { n: "Sara Khan", r: "Head of Content", i: "SK" },
  { n: "Liam Chen", r: "AI SEO Engineer", i: "LC" },
  { n: "Maya Rossi", r: "Outreach Lead", i: "MR" },
];

const About = () => (
  <>
    <Seo
      title="About Orbit P1 — SEO & AI SEO Experts"
      description="Meet the team behind Orbit P1. We help modern brands win search with strategy-led SEO and AI search optimization."
      path="/about"
    />

    <section className="container py-16 md:py-24 text-center">
      <span className="inline-flex items-center rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground">About us</span>
      <h1 className="mt-5 font-display text-4xl md:text-6xl font-bold text-gradient">
        We help brands <span className="text-gradient-primary">win search</span>
      </h1>
      <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
        Orbit P1 is a modern SEO agency for the AI era. We blend technical depth, creative content, and AI search optimization to grow brands sustainably.
      </p>
    </section>

    <section className="container py-12">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div className="glass-card p-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold">Our story</h2>
          <p className="mt-4 text-muted-foreground">
            We started Orbit P1 because most SEO agencies optimize for impressions — not pipeline. Our team has helped 150+ brands rank, convert and scale with measurable revenue impact.
          </p>
          <p className="mt-4 text-muted-foreground">
            Today we help SaaS, ecommerce and service brands compete in both classic Google search and the new AI-driven search landscape (ChatGPT, Perplexity, Google AI Overviews).
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {values.map((v) => (
            <div key={v.t} className="glass-card p-6">
              <v.icon className="h-6 w-6 text-primary" />
              <h3 className="mt-3 font-display font-semibold">{v.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="container py-20">
      <SectionHeading eyebrow="The team" title="Senior operators, no juniors" />
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {team.map((m) => (
          <div key={m.n} className="glass-card p-6 text-center">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gradient-primary text-primary-foreground font-display font-bold text-xl shadow-glow">
              {m.i}
            </div>
            <h3 className="mt-4 font-display font-semibold">{m.n}</h3>
            <p className="text-sm text-muted-foreground">{m.r}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="container py-20">
      <div className="glass-card p-10 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-gradient">Let's grow your search presence</h2>
        <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Get a free SEO audit and see exactly where your biggest growth opportunities are.</p>
        <div className="mt-6 flex justify-center gap-3">
          <Button asChild variant="hero" size="lg"><Link to="/contact">Get free audit <ArrowRight className="h-4 w-4" /></Link></Button>
          <Button asChild variant="outline" size="lg"><Link to="/services">View services</Link></Button>
        </div>
      </div>
    </section>
  </>
);

export default About;
