import {
  BarChart3,
  Search,
  LineChart,
  Bot,
  Sparkles,
  Gauge,
  Cloud,
  Tag,
  Activity,
  Zap,
  FileSearch,
  Globe,
  Database,
  Shield,
  Wand2,
} from "lucide-react";

const tools = [
  { name: "Ahrefs", icon: BarChart3 },
  { name: "SEMrush", icon: LineChart },
  { name: "Search Console", icon: Search },
  { name: "Google Analytics", icon: Activity },
  { name: "Screaming Frog", icon: FileSearch },
  { name: "ChatGPT", icon: Sparkles },
  { name: "Claude", icon: Bot },
  { name: "Surfer SEO", icon: Wand2 },
  { name: "Frase", icon: Tag },
  { name: "MarketMuse", icon: Database },
  { name: "PageSpeed", icon: Gauge },
  { name: "GTmetrix", icon: Zap },
  { name: "Cloudflare", icon: Cloud },
  { name: "GTM", icon: Globe },
  { name: "Lighthouse", icon: Shield },
];

export const LogoTicker = () => (
  <section className="py-12 border-y border-border/60 bg-secondary/10">
    <div className="container">
      <p className="text-center text-xs uppercase tracking-[0.25em] text-muted-foreground mb-7">
        Powered by industry-leading SEO + AI tools
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex animate-marquee gap-4 whitespace-nowrap w-max">
          {[...tools, ...tools].map((t, idx) => (
            <span key={idx} className="ticker-pill">
              <t.icon className="h-4 w-4 text-primary" />
              {t.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);
