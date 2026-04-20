import { Link } from "react-router-dom";
import { Sparkles, Linkedin, Twitter, Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative border-t border-border mt-32">
      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2 font-display font-bold">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-primary shadow-glow">
                <Sparkles className="h-4 w-4 text-primary-foreground" />
              </span>
              <span>Rankly</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm">
              Modern SEO and AI SEO agency helping ambitious brands rank, convert and scale with measurable growth.
            </p>
            <div className="flex gap-3 pt-2">
              {[Linkedin, Twitter, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                  aria-label="social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground">About</Link></li>
              <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
              <li><Link to="/case-studies" className="hover:text-foreground">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-foreground">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Get started</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/contact" className="hover:text-foreground">Free SEO audit</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Book a call</Link></li>
              <li><a href="mailto:hello@rankly.co" className="hover:text-foreground">hello@rankly.co</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Rankly. All rights reserved.</p>
          <p>Crafted for growth.</p>
        </div>
      </div>
    </footer>
  );
};
