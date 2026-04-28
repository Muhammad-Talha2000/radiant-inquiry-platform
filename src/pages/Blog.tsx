import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock3 } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
  return (
    <>
      <Seo
        title="SEO & AI SEO Insights — Orbit P1 Blog"
        description="Practical SEO and AI SEO playbooks, strategies, and case studies from the Orbit P1 team."
        path="/blog"
      />

      <section className="container py-16 md:py-24 text-center">
        <span className="inline-flex items-center rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground">
          Insights
        </span>
        <h1 className="mt-5 font-display text-4xl md:text-6xl font-bold text-gradient">
          Insights & <span className="text-gradient-primary">Resources</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
          Expert strategies on SEO, AI search, and business growth
        </p>
      </section>

      <section className="container py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogPosts.map((p) => (
            <article
              key={p.slug}
              className="glass-card p-6 flex flex-col group hover:border-primary/40 hover:-translate-y-1 hover:shadow-glow transition-all duration-500"
            >
              <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                <span className="rounded-full bg-secondary px-2.5 py-0.5 text-foreground">
                  {p.category}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-3 w-3" /> {p.date}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock3 className="h-3 w-3" /> {p.readTime}
                </span>
              </div>
              <h2 className="mt-4 font-display text-lg font-semibold leading-snug group-hover:text-gradient-primary transition-colors">
                {p.title}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground flex-1">{p.excerpt}</p>
              <Link to={`/blog/${p.slug}`} className="mt-5 inline-flex items-center gap-1 text-sm text-primary self-start">
                Read More <ArrowRight className="h-3.5 w-3.5" />
              </Link>
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
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">
                Subscribe & get free audit <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
