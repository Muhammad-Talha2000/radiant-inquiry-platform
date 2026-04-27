import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CAL_LINK } from "@/lib/cal";
import logoOrbit from "@/assets/logo-orbit.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  // { to: "/case-studies", label: "Case Studies" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="container">
        <div className="mt-4 flex h-16 items-center justify-between rounded-full border border-border/70 bg-background/70 px-4 backdrop-blur-xl shadow-soft">
          <Link to="/" className="flex items-center gap-2" aria-label="Orbit P1 home">
            <img
              src={logoOrbit}
              alt="Orbit P1"
              className="h-12 md:h-14 w-auto object-contain"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "px-3 py-2 text-sm rounded-full transition-colors",
                    isActive ? "text-foreground bg-secondary" : "text-muted-foreground hover:text-foreground"
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button asChild variant="hero" size="sm">
              <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">Book a call</a>
            </Button>
          </div>

          <button
            className="md:hidden p-2 rounded-md text-foreground"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 rounded-2xl border border-border bg-background/95 backdrop-blur-xl p-4 animate-fade-in">
            <nav className="flex flex-col gap-1">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "px-3 py-2.5 text-sm rounded-lg",
                      isActive ? "text-foreground bg-secondary" : "text-muted-foreground"
                    )
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <Button asChild variant="hero" className="mt-2" onClick={() => setOpen(false)}>
                <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">Book a call</a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
