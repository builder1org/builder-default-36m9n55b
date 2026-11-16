import Link from "next/link";
import { siteConfig } from "@/lib/site-data";

export function ContactCta() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
      <div className="bg-primary text-primary-foreground flex flex-col items-start justify-between gap-6 rounded-2xl px-6 py-8 sm:flex-row sm:items-center sm:px-8">
        <div className="max-w-md">
          <h2 className="text-lg font-semibold">مشاوره و سفارش</h2>
          <p className="mt-2 text-sm leading-relaxed text-primary-foreground/90">
            {siteConfig.phone} · {siteConfig.hours}
          </p>
        </div>
        <Link
          href="/contact"
          className="bg-background text-primary hover:bg-background/95 rounded-full px-6 py-2.5 text-xs font-semibold transition-colors"
        >
          تماس با ما
        </Link>
      </div>
    </section>
  );
}