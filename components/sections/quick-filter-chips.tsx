import Link from "next/link";
import { homeQuickFilters } from "@/lib/site-data";

export function QuickFilterChips() {
  return (
    <div className="scrollbar-hide flex gap-2 overflow-x-auto pb-0.5">
      {homeQuickFilters.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="border-border bg-card text-foreground hover:border-primary/40 shrink-0 rounded-full border px-4 py-2 text-xs font-medium transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}
