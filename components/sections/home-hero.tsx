import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-data";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="hero-blob pointer-events-none absolute inset-0 -z-10" aria-hidden />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
        <div>
          <p className="text-primary mb-4 inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-semibold">
            <ShieldCheck className="size-3.5" aria-hidden />
            آرایش امن و باکیفیت
          </p>
          <h1 className="text-balance text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            زیبایی روزمره با انتخاب‌های{" "}
            <span className="text-primary">دقیق و حرفه‌ای</span>
          </h1>
          <p className="text-muted-foreground mt-5 max-w-xl text-base leading-relaxed sm:text-lg">
            در {siteConfig.name} مجموعه‌ای از لوازم آرایشی، مراقبت پوست و عطر را برای سبک زندگی
            متنوع شما گردآوری کرده‌ایم. برای رنگ و مدل مناسب، به فروشگاه سر بزنید یا تماس بگیرید.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="gap-2">
              <Link href="/products">
                مشاهده محصولات
                <ArrowLeft className="size-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">رزرو مشاوره</Link>
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="border-border/60 bg-card/80 aspect-[4/5] overflow-hidden rounded-3xl border shadow-lg">
            <div className="from-primary/15 via-accent/30 to-background flex h-full flex-col justify-between bg-gradient-to-br p-6 sm:p-8">
              <HeroCardLabel>مجموعه پاییز</HeroCardLabel>
              <HeroCardPanel />
            </div>
          </div>
          <div
            className="bg-accent/40 border-border/50 absolute -bottom-4 -start-4 -z-10 size-full rounded-3xl border"
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
}

function HeroCardLabel({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <p className="text-muted-foreground text-sm font-medium">کالکشن فصلی</p>
      <p className="mt-1 text-2xl font-extrabold">{children}</p>
    </div>
  );
}

function HeroCardPanel() {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-3 gap-2">
        {["رژگونه", "ریمل", "سرم"].map((label) => (
          <div
            key={label}
            className="bg-background/70 text-center rounded-2xl px-2 py-6 text-xs font-semibold backdrop-blur-sm"
          >
            {label}
          </div>
        ))}
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed">
        نمونه‌چین برای نمایش؛ تصاویر واقعی محصولات شما جایگزین می‌شود.
      </p>
    </div>
  );
}
