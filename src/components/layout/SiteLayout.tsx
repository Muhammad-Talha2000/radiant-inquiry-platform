import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";

interface SiteLayoutProps {
  children: React.ReactNode;
}

export const SiteLayout = ({ children }: SiteLayoutProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-clip">
      {/* Global background fx */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 starfield opacity-60" />
        <div className="absolute inset-0 grid-bg opacity-30" />
      </div>

      <Navbar />
      <main className="pt-24">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};
