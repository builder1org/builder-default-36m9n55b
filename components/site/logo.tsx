import Link from "next/link";
import { Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-2.5 text-foreground transition-opacity hover:opacity-90",
        className,
      )}
    >
      <span className="bg-primary text-primary-foreground flex size-9 items-center justify-center rounded-full shadow-sm">
        <Sparkles className="size-4" aria-hidden />
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-base font-extrabold">{siteConfig.name}</span>
        <span className="text-muted-foreground text-[0.65rem] font-medium">{siteConfig.tagline}</span>
      </span>
    </Link>
  );
}
