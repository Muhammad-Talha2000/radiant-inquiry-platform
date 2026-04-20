import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const posts = [
  {
    slug: "ai-seo-vs-traditional-seo",
    t: "AI SEO vs Traditional SEO: What actually changes in 2026",
    d: "How generative search engines like ChatGPT and Perplexity reshape SEO strategy — and what stays the same.",
    date: "Apr 12, 2026",
    tag: "AI SEO",
  },
  {
    slug: "rank-in-ai-overviews",
    t: "How to rank in Google AI Overviews",
    d: "A practical playbook for getting cited in Google's AI Overviews using entity SEO and structured content.",
    date: "Apr 02, 2026",
    tag: "Strategy",
  },
  {
    slug: "technical-seo-checklist-2026",
    t: "The 2026 technical SEO checklist",
    d: "Core Web Vitals, crawl budget, schema, and the modern technical foundations that matter.",
    date: "Mar 22, 2026",
    tag: "Technical",
  },
  {
    slug: "content-engine-that-converts",
    t: "Building a content engine that converts",
    d: "A system for shipping conversion-focused SEO content every week — without burning out.",
    date: "Mar 10, 2026",
    tag: "Content",
  },
  {
    slug: "linkbuilding-without-spam",
    t: "Modern link building without the spam",
    d: "Editorial outreach, digital PR and the strategies that earn real authority.",
    date: "Feb 28, 2026",
    tag: "Authority",
  },
  {
    slug: "saas-seo-playbook",
    t: "The SaaS SEO playbook for 2026",
    d: "From bottom-of-funnel keywords to product-led content — what works for modern SaaS.",
    date: "Feb 14, 2026",
    tag: "SaaS",
  },
];

const Blog = () => (
  <>
    <Seo
      title="SEO & AI SEO Insights — Rankly Blog"
      description="Practical SEO and AI SEO playbooks, strategies, and case studies from the Rankly team."
      path="/blog"
    />

    <section className="container py-16 md:py-24 text-center">
      <span className="inline-flex items-center rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground">Insights</span>
      <h1 className="mt-5 font-display text-4xl md:text-6xl font-bold text-gradient">
        SEO & AI SEO <span className="text-gradient-primary">playbooks</span>
      </h1>
      <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
        No fluff. Just the strategies, frameworks and breakdowns we use to grow brands in modern search.
      </p>
    </section>

    <section className="container py-12">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((p) => (
          <article key={p.slug} className="glass-card p-6 flex flex-col group hover:border-primary/40 transition-all">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="rounded-full bg-secondary px-2.5 py-0.5 text-foreground">{p.tag}</span>
              <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" /> {p.date}</span>
            </div>
            <h2 className="mt-4 font-display text-lg font-semibold leading-snug group-hover:text-gradient-primary transition-colors">
              {p.t}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground flex-1">{p.d}</p>
            <button className="mt-5 inline-flex items-center gap-1 text-sm text-primary self-start hover:gap-2 transition-all">
              Read article <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </article>
        ))}
      </div>
    </section>

    <section className="container py-20">
      <div className="glass-card p-10 text-center">
        <SectionHeading
          eyebrow="Newsletter"
          title="Get our SEO playbooks in your inbox"
          description="One actionable SEO breakdown every other week. No fluff."
        />
        <div className="mt-6">
          <Button asChild variant="hero" size="lg"><Link to="/contact">Subscribe & get free audit <ArrowRight className="h-4 w-4" /></Link></Button>
        </div>
      </div>
    </section>
  </>
);

export default Blog;
