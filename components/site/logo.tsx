import Link from "next/link";
import { siteConfig } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  variant?: "full" | "wordmark";
};

export function Logo({ className, variant = "full" }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("inline-block transition-opacity hover:opacity-85", className)}
    >
      <span
        className={cn(
          "text-primary font-semibold tracking-[0.2em]",
          variant === "wordmark" ? "text-lg sm:text-xl" : "text-base",
        )}
      >
        {siteConfig.name}
      </span>
      {variant === "full" ? (
        <span className="text-muted-foreground mt-0.5 block text-[10px] font-normal tracking-normal">
          {siteConfig.tagline}
        </span>
      ) : null}
    </Link>
  );
}
