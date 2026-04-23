import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CAL_LINK } from "@/lib/cal";

export const FinalCtaBanner = () => (
  <section className="container py-20">
    <div className="relative glass-card p-10 md:p-16 text-center overflow-hidden">
      <div className="aurora-bg z-0" aria-hidden />
      <div className="relative z-10">
        <h2 className="font-display text-3xl md:text-5xl font-bold">
          <span className="text-gradient">Ready to turn Google into your </span>
          <span className="text-gradient-animated">#1 customer acquisition channel?</span>
        </h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          Get a free SEO + AI SEO growth plan tailored to your business goals.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild variant="hero" size="xl">
            <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">
              Book strategy call <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="glass" size="xl">
            <Link to="/contact">Get free audit</Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);
