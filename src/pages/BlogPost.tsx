import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, Clock3 } from "lucide-react";
import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { blogPostsBySlug } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? blogPostsBySlug[slug] : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <>
      <Seo
        title={`${post.title} | Orbit P1 Blog`}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
      />

      <section className="container py-10 md:py-14">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>
      </section>

      <article className="container pb-20 md:pb-24">
        <div className="mx-auto max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground">
            {post.category}
          </span>

          <h1 className="mt-5 font-display text-4xl md:text-5xl font-bold leading-tight text-gradient">
            {post.title}
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-4 w-4" /> {post.date}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock3 className="h-4 w-4" /> {post.readTime}
            </span>
          </div>

          <div className="mt-10 rounded-3xl border border-white/10 bg-card/35 backdrop-blur-xl p-7 md:p-10 shadow-soft">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {post.intro}
            </p>
          </div>

          <div className="mt-12 space-y-10">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-gradient">
                  {section.heading}
                </h2>

                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}

                {section.orderedItems && (
                  <ol className="mt-5 list-decimal pl-6 space-y-3 text-base md:text-lg text-muted-foreground leading-relaxed marker:text-primary marker:font-semibold">
                    {section.orderedItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ol>
                )}

                {section.bulletItems && (
                  <ul className="mt-5 list-disc pl-6 space-y-3 text-base md:text-lg text-muted-foreground leading-relaxed marker:text-primary">
                    {section.bulletItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <section className="relative overflow-hidden mt-16 md:mt-20">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-secondary/10 via-secondary/30 to-secondary/10" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[20rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative z-10 rounded-3xl border border-white/10 bg-card/45 backdrop-blur-xl p-8 md:p-10 text-center shadow-elevated">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gradient">
                Ready to Grow Your Business?
              </h2>
              <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
                Get a free strategy session and see how we can help.
              </p>
              <div className="mt-6 flex justify-center">
                <Button asChild variant="hero" size="lg">
                  <Link to="/contact">
                    Get a Free Strategy Call <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
};

export default BlogPost;
