import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "start" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "start",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="text-muted-foreground mb-2 text-xs font-medium tracking-wide">{eyebrow}</p>
      ) : null}
      <h2 className="text-lg font-semibold tracking-tight sm:text-xl">{title}</h2>
      {description ? (
        <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{description}</p>
      ) : null}
    </div>
  );
}
