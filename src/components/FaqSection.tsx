import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/SectionHeading";

const faqs = [
  {
    q: "Will AI SEO hurt my Google rankings?",
    a: "No. Our AI SEO includes traditional SEO best practices — we optimize for Google AND AI engines simultaneously. You don't lose anything; you gain visibility in new high-intent channels.",
  },
  {
    q: "How do you actually track rankings inside ChatGPT or Perplexity?",
    a: "We run hundreds of buyer-intent queries across each AI engine on a recurring schedule, then track whether your brand appears, the position you hold, the context you're cited in, and which sources the engine pulled from. You see it all in a live dashboard.",
  },
  {
    q: "How long until I see results?",
    a: "Most clients see initial AI search visibility within 3–4 weeks. Google rankings take longer (8–12 weeks), but the AI search lift comes much faster because engines update in near real-time.",
  },
  {
    q: "What if my company is highly technical or niche?",
    a: "Even better. AI engines excel at synthesizing complex, technical topics — so B2B SaaS, fintech, data infrastructure, DevTools and cybersecurity brands typically see outsized results from AI SEO.",
  },
  {
    q: "Do I need to rip and replace my existing SEO?",
    a: "No. We layer AI SEO on top of your current foundations — improving structure, schema, citations and authority signals so the same content compounds across both Google and AI engines.",
  },
  {
    q: "What's included in the free audit?",
    a: "A 20-keyword AI visibility analysis across ChatGPT, Perplexity, Gemini and Google, competitor benchmarking, a gap report, and a 30-minute strategy call — at zero cost.",
  },
];

export const FaqSection = () => (
  <section className="container py-20">
    <SectionHeading
      eyebrow="FAQ"
      title="Common questions about AI SEO"
      description="Everything founders and marketing leaders ask before working with us."
    />

    <div className="mt-12 max-w-3xl mx-auto glass-card p-2 md:p-4">
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border-border/50 last:border-0">
            <AccordionTrigger className="text-left text-base md:text-lg font-display font-semibold hover:text-primary px-3 md:px-4">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm md:text-[15px] leading-relaxed text-muted-foreground px-3 md:px-4">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);
