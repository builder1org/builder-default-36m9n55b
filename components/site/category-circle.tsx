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
  className?: string;
};

export function CategoryCircle({ href, icon, label, active, className }: CategoryCircleProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex w-[5.25rem] flex-col items-center gap-2.5 text-center sm:w-[5.75rem]",
        className,
      )}
      aria-current={active ? "page" : undefined}
    >
      <span
        className={cn(
          "flex size-[4.25rem] items-center justify-center rounded-full border transition-colors sm:size-[4.75rem]",
          active
            ? "border-foreground bg-foreground text-background"
            : "border-border bg-background text-foreground group-hover:border-foreground/40",
        )}
      >
        <CategoryIcon
          name={icon}
          className={cn("size-5 stroke-[1.5]", active && "text-background")}
        />
      </span>
      <span
        className={cn(
          "text-[0.7rem] leading-snug font-medium sm:text-xs",
          active ? "text-foreground" : "text-muted-foreground group-hover:text-foreground",
        )}
      >
        {label}
      </span>
    </Link>
  );
}
