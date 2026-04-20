import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Seo } from "@/components/Seo";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Seo title="404 — Page not found | Rankly" description="The page you are looking for does not exist." path={location.pathname} />
      <section className="container py-32 text-center">
        <div className="font-display text-7xl md:text-9xl font-bold text-gradient-primary">404</div>
        <h1 className="mt-4 font-display text-2xl md:text-3xl font-bold">Page not found</h1>
        <p className="mt-3 text-muted-foreground max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild variant="hero" className="mt-8">
          <Link to="/"><ArrowLeft className="h-4 w-4" /> Back to home</Link>
        </Button>
      </section>
    </>
  );
};

export default NotFound;
