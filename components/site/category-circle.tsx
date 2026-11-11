import Link from "next/link";
import { CategoryIcon } from "@/lib/category-icons";
import type { CategoryIconKey } from "@/lib/category-icons";
import type { categories } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type CategoryCircleProps = {
  href: string;
  icon: CategoryIconKey | (typeof categories)[number]["icon"];
  label: string;
  active?: boolean;
  tint?: string;
  variant?: "minimal" | "store";
  className?: string;
};

export function CategoryCircle({
  href,
  icon,
  label,
  active,
  tint,
  variant = "store",
  className,
}: CategoryCircleProps) {
  const isStore = variant === "store";

  return (
    <Link
      href={href}
      className={cn(
        "group flex w-[4.75rem] flex-col items-center gap-2 text-center sm:w-[5.25rem]",
        className,
      )}
      aria-current={active ? "page" : undefined}
    >
      <span
        className={cn(
          "relative flex items-center justify-center overflow-hidden rounded-full border transition-colors",
          isStore ? "size-[4.5rem] sm:size-[4.75rem]" : "size-[4.25rem] sm:size-[4.75rem]",
          isStore
            ? cn("border-border/80", tint ?? "bg-muted/50", active && "ring-primary ring-2 ring-offset-2")
            : active
              ? "border-foreground bg-foreground text-background"
              : "border-border bg-background text-foreground group-hover:border-primary/30",
        )}
      >
        {isStore ? (
          <>
            <ProductThumbDecor />
            <CategoryIcon
              name={icon}
              className="text-foreground/70 relative z-10 size-7 stroke-[1.25]"
            />
          </>
        ) : (
          <CategoryIcon
            name={icon}
            className={cn("size-5 stroke-[1.5]", active && "text-background")}
          />
        )}
      </span>
      <span
        className={cn(
          "text-[0.68rem] leading-snug font-normal text-foreground sm:text-xs",
          !isStore && !active && "text-muted-foreground",
        )}
      >
        {label}
      </span>
    </Link>
  );
}

function ProductThumbDecor() {
  return (
  <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden>
      <span className="absolute bottom-2 start-3 h-8 w-3.5 rotate-[-8deg] rounded-sm bg-white/80 shadow-sm" />
      <span className="absolute bottom-2 start-8 h-9 w-4 rotate-6 rounded-sm bg-white/70 shadow-sm" />
      <span className="absolute top-3 end-3 h-6 w-6 rounded-full bg-white/60 shadow-sm" />
    </div>
  );
}
