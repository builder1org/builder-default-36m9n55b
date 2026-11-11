import Link from "next/link";
import { siteConfig } from "@/lib/site-data";

export function ContactCta() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
      <div className="border-border flex flex-col items-start justify-between gap-6 border px-6 py-10 sm:flex-row sm:items-center sm:px-10">
        <div className="max-w-md">
          <h2 className="text-lg font-semibold">مشاوره و سفارش</h2>
          <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
            {siteConfig.phone} · {siteConfig.hours}
          </p>
        </div>
        <Link
          href="/contact"
          className="border-foreground hover:bg-foreground hover:text-background rounded-full border px-6 py-2.5 text-xs font-medium transition-colors"
        >
          تماس با ما
        </Link>
      </div>
    </section>
  );
}
