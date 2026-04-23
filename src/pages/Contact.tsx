import { Seo } from "@/components/Seo";
import { LeadForm } from "@/components/LeadForm";
import { Mail, MessageCircle, Clock, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CAL_LINK } from "@/lib/cal";

const Contact = () => (
  <>
    <Seo
      title="Contact Orbit P1 — Get a Free SEO Audit"
      description="Talk to Orbit P1 about SEO and AI SEO. Get a free audit, book a call, or message us on WhatsApp."
      path="/contact"
    />

    <section className="container py-16 md:py-24 text-center">
      <span className="inline-flex items-center rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground">Contact</span>
      <h1 className="mt-5 font-display text-4xl md:text-6xl font-bold text-gradient">
        Let's grow your <span className="text-gradient-primary">search presence</span>
      </h1>
      <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
        Tell us about your goals — we'll send back a free audit with quick wins and a 90-day roadmap.
      </p>
      <div className="mt-7">
        <Button asChild variant="hero" size="lg">
          <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">
            <Calendar className="h-4 w-4" /> Book a call on Cal.com
          </a>
        </Button>
      </div>
    </section>

    <section className="container py-12 grid lg:grid-cols-5 gap-8">
      <div className="lg:col-span-2 space-y-4">
        {[
          { i: Mail, t: "Email", d: "hello@orbitp1.com", href: "mailto:hello@orbitp1.com" },
          { i: MessageCircle, t: "WhatsApp", d: "+1 (555) 123-4567", href: "https://wa.me/15551234567" },
          { i: Clock, t: "Response time", d: "Within 24 hours, every weekday" },
          { i: MapPin, t: "Working globally", d: "Remote team across 6 timezones" },
        ].map((c) => (
          <a
            key={c.t}
            href={c.href ?? "#"}
            className="glass-card p-5 flex items-start gap-4 hover:border-primary/40 transition-colors"
          >
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary shadow-glow shrink-0">
              <c.i className="h-5 w-5 text-primary-foreground" />
            </span>
            <div>
              <div className="font-semibold">{c.t}</div>
              <div className="text-sm text-muted-foreground">{c.d}</div>
            </div>
          </a>
        ))}
      </div>

      <div className="lg:col-span-3">
        <LeadForm />
      </div>
    </section>
  </>
);

export default Contact;
