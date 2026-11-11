import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-data";

export function ContactCta() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
      <div className="border-border bg-primary text-primary-foreground relative overflow-hidden rounded-3xl border px-6 py-10 sm:px-10 sm:py-12">
        <div
          className="pointer-events-none absolute -end-10 -top-10 size-48 rounded-full bg-white/10"
          aria-hidden
        />
        <div className="relative max-w-xl">
          <h2 className="text-2xl font-extrabold sm:text-3xl">آمادهٔ انتخاب رنگ و محصول مناسب؟</h2>
          <p className="mt-3 text-sm leading-relaxed text-primary-foreground/90 sm:text-base">
            برای موجودی، مشاوره رنگ و سفارش حضوری با شماره {siteConfig.phone} تماس بگیرید یا فرم
            تماس را پر کنید.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg" variant="secondary" className="gap-2">
              <Link href="/contact">
                <Phone className="size-4" aria-hidden />
                فرم تماس
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link href="/about">درباره فروشگاه</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
