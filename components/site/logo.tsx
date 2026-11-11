import Link from "next/link";
import { siteConfig } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "text-foreground inline-flex items-baseline gap-2 transition-opacity hover:opacity-80",
        className,
      )}
    >
      <span className="text-sm font-semibold tracking-tight">{siteConfig.name}</span>
      <span className="text-muted-foreground hidden text-[10px] font-normal sm:inline">
        {siteConfig.tagline}
      </span>
    </Link>
  );
}
