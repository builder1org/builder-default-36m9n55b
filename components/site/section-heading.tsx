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
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="text-primary mb-2 text-sm font-semibold tracking-wide">{eyebrow}</p>
      ) : null}
      <h2 className="text-2xl font-extrabold sm:text-3xl">{title}</h2>
      {description ? (
        <p className="text-muted-foreground mt-3 text-base leading-relaxed">{description}</p>
      ) : null}
    </div>
  );
}
