import { ChevronRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export interface RoadmapStep {
  n: string;
  t: string;
  d: string;
}

interface RoadmapProps {
  steps: RoadmapStep[];
}

/**
 * Horizontal roadmap with numbered circles, animated connecting line and
 * arrows between steps. Wraps gracefully on smaller screens.
 */
export const Roadmap = ({ steps }: RoadmapProps) => (
  <div className="relative mt-14">
    {/* connecting line, only on lg+ */}
    <div className="roadmap-line hidden lg:block" />

    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-3 relative">
      {steps.map((s, i) => (
        <Reveal key={s.n} delay={i * 90}>
          <div className="relative flex flex-col items-center text-center px-2 group cursor-grow">
            {/* arrow between steps */}
            {i < steps.length - 1 && (
              <ChevronRight
                aria-hidden
                className="hidden lg:block absolute top-4 -right-3 h-7 w-7 text-primary/70 group-hover:text-primary transition-colors"
              />
            )}
            <div className="roadmap-step-dot text-lg">{s.n}</div>
            <h3 className="mt-5 font-display text-lg md:text-xl font-semibold">{s.t}</h3>
            <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed max-w-[18rem]">
              {s.d}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  </div>
);
