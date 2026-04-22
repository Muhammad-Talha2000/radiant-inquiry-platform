import { ReactNode } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article" | "li";
  y?: number;
}

export const Reveal = ({ children, className, delay = 0, as = "div", y = 24 }: RevealProps) => {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  const Tag = as as any;
  return (
    <Tag
      ref={ref as any}
      style={{
        transitionDelay: `${delay}ms`,
        transform: visible ? "translateY(0)" : `translateY(${y}px)`,
        opacity: visible ? 1 : 0,
      }}
      className={cn("transition-all duration-700 ease-out will-change-transform", className)}
    >
      {children}
    </Tag>
  );
};
