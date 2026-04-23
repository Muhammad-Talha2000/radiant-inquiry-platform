const tools = [
  "Ahrefs", "SEMrush", "Google Search Console", "Google Analytics", "Screaming Frog",
  "ChatGPT", "Claude", "Surfer SEO", "Frase", "MarketMuse",
  "PageSpeed Insights", "GTmetrix", "Cloudflare", "Google Tag Manager", "Lighthouse",
];

export const LogoTicker = () => (
  <section className="py-14 border-y border-border/60 bg-secondary/10">
    <div className="container">
      <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
        Powered by industry-leading SEO + AI tools
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex animate-marquee gap-12 whitespace-nowrap">
          {[...tools, ...tools].map((b, idx) => (
            <span
              key={idx}
              className="font-display text-xl md:text-2xl font-semibold text-foreground/40 hover:text-foreground transition-colors duration-300"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);
