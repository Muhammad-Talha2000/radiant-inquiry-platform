import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) => {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <span className="inline-flex items-center rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs md:text-sm font-medium text-muted-foreground mb-5 uppercase tracking-[0.18em]">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gradient leading-[1.05]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-lg md:text-xl text-muted-foreground leading-relaxed">{description}</p>
      )}
    </div>
  );
};
