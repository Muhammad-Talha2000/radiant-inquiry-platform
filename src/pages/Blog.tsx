import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Seo } from "@/components/Seo";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { sanityClient, urlFor, POSTS_QUERY, type SanityPost } from "@/lib/sanity";

const fallbackPosts: Array<{
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}> = [
  {
    slug: "ai-seo-vs-traditional-seo",
    title: "AI SEO vs Traditional SEO: What actually changes in 2026",
    excerpt:
      "How generative search engines like ChatGPT and Perplexity reshape SEO strategy — and what stays the same.",
    date: "Apr 12, 2026",
    category: "AI SEO",
  },
  {
    slug: "rank-in-ai-overviews",
    title: "How to rank in Google AI Overviews",
    excerpt:
      "A practical playbook for getting cited in Google's AI Overviews using entity SEO and structured content.",
    date: "Apr 02, 2026",
    category: "Strategy",
  },
  {
    slug: "technical-seo-checklist-2026",
    title: "The 2026 technical SEO checklist",
    excerpt: "Core Web Vitals, crawl budget, schema, and the modern technical foundations that matter.",
    date: "Mar 22, 2026",
    category: "Technical",
  },
  {
    slug: "content-engine-that-converts",
    title: "Building a content engine that converts",
    excerpt: "A system for shipping conversion-focused SEO content every week — without burning out.",
    date: "Mar 10, 2026",
    category: "Content",
  },
  {
    slug: "linkbuilding-without-spam",
    title: "Modern link building without the spam",
    excerpt: "Editorial outreach, digital PR and the strategies that earn real authority.",
    date: "Feb 28, 2026",
    category: "Authority",
  },
  {
    slug: "saas-seo-playbook",
    title: "The SaaS SEO playbook for 2026",
    excerpt: "From bottom-of-funnel keywords to product-led content — what works for modern SaaS.",
    date: "Feb 14, 2026",
    category: "SaaS",
  },
];

const formatDate = (iso?: string) => {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
};

const Blog = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["sanity-posts"],
    queryFn: () => sanityClient.fetch<SanityPost[]>(POSTS_QUERY),
    staleTime: 60_000,
  });

  const cmsPosts = data ?? [];
  const showCms = cmsPosts.length > 0;

  return (
    <>
      <Seo
        title="SEO & AI SEO Insights — Rankly Blog"
        description="Practical SEO and AI SEO playbooks, strategies, and case studies from the Rankly team."
        path="/blog"
      />

      <section className="container py-16 md:py-24 text-center">
        <span className="inline-flex items-center rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground">
          Insights
        </span>
        <h1 className="mt-5 font-display text-4xl md:text-6xl font-bold text-gradient">
          SEO & AI SEO <span className="text-gradient-primary">playbooks</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
          No fluff. Just the strategies, frameworks and breakdowns we use to grow brands in modern search.
        </p>
      </section>

      <section className="container py-12">
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="glass-card p-6 h-56 animate-pulse" />
            ))}
          </div>
        ) : showCms ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {cmsPosts.map((p) => (
              <article
                key={p._id}
                className="glass-card p-6 flex flex-col group hover:border-primary/40 transition-all overflow-hidden"
              >
                {p.mainImage && (
                  <img
                    src={urlFor(p.mainImage).width(640).height(360).url()}
                    alt={p.title}
                    loading="lazy"
                    className="-mx-6 -mt-6 mb-4 h-40 w-[calc(100%+3rem)] object-cover"
                  />
                )}
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  {p.category && (
                    <span className="rounded-full bg-secondary px-2.5 py-0.5 text-foreground">{p.category}</span>
                  )}
                  {p.publishedAt && (
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3 w-3" /> {formatDate(p.publishedAt)}
                    </span>
                  )}
                </div>
                <h2 className="mt-4 font-display text-lg font-semibold leading-snug group-hover:text-gradient-primary transition-colors">
                  {p.title}
                </h2>
                {p.excerpt && <p className="mt-2 text-sm text-muted-foreground flex-1">{p.excerpt}</p>}
                <span className="mt-5 inline-flex items-center gap-1 text-sm text-primary self-start">
                  Read article <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </article>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {fallbackPosts.map((p) => (
              <article
                key={p.slug}
                className="glass-card p-6 flex flex-col group hover:border-primary/40 transition-all"
              >
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="rounded-full bg-secondary px-2.5 py-0.5 text-foreground">{p.category}</span>
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> {p.date}
                  </span>
                </div>
                <h2 className="mt-4 font-display text-lg font-semibold leading-snug group-hover:text-gradient-primary transition-colors">
                  {p.title}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground flex-1">{p.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm text-primary self-start">
                  Read article <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </article>
            ))}
          </div>
        )}
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
