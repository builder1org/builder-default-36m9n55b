import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-data";

export function HomeHero() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-16 pb-12 sm:px-6 sm:pt-20 sm:pb-14">
      <div className="max-w-2xl">
        <p className="text-muted-foreground text-xs font-medium tracking-wide">
          {siteConfig.tagline}
        </p>
        <h1 className="text-balance mt-4 text-3xl font-semibold leading-[1.2] tracking-tight sm:text-4xl lg:text-[2.75rem]">
          لوازم آرایشی انتخاب‌شده،
          <br />
          <span className="text-muted-foreground">با ظاهری حرفه‌ای</span>
        </h1>
        <p className="text-muted-foreground mt-6 max-w-lg text-sm leading-relaxed sm:text-base">
          {siteConfig.name} مرجع آرایش روزمره و مراقبت پوست است. برای مشاوره رنگ یا موجودی با ما
          تماس بگیرید.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button asChild variant="default" size="default" className="rounded-full px-6">
            <Link href="/products" className="gap-2">
              محصولات
              <ArrowLeft className="size-3.5" aria-hidden />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="default" className="rounded-full">
            <Link href="/contact">تماس</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
