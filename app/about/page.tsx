import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/section-heading";
import { siteConfig, valueProps } from "@/lib/site-data";

export const metadata = {
  title: "درباره ما",
  description: "داستان و ارزش‌های فروشگاه لوازم آرایشی.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <SectionHeading
          eyebrow="داستان ما"
          title={`فروشگاهی برای زیبایی واقعی`}
          description={`${siteConfig.name} از یک نیاز ساده شروع شد: دسترسی آسان به لوازم آرایشی باکیفیت همراه با راهنمایی صادقانه. ما فضایی گرم برای امتحان رنگ، پرسش درباره پوست حساس و انتخاب هدیه مناسب فراهم کرده‌ایم.`}
        />
        <h1 className="sr-only">درباره {siteConfig.name}</h1>
        <article className="border-border/80 bg-card space-y-6 rounded-3xl border p-6 shadow-sm sm:p-8">
          <p className="leading-relaxed">
            در این نسخهٔ اولیهٔ وب‌سایت، متن و اطلاعات تماس به‌صورت placeholder هستند تا پس از
            گفت‌وگو با شما، با جزئیات واقعی فروشگاه پر شوند. تمرکز ما روی تجربهٔ خرید حضوری و
            مشاورهٔ رنگ است؛ سایت مسیر ورود مشتریان جدید و نمایش دسته‌بندی محصولات را هموار می‌کند.
          </p>
          <ul className="space-y-4">
            {valueProps.map((item) => (
              <li key={item.title} className="border-border border-s-2 border-primary ps-4">
                <h2 className="font-bold">{item.title}</h2>
                <p className="text-muted-foreground mt-1 text-sm leading-relaxed">{item.body}</p>
              </li>
            ))}
          </ul>
          <Button asChild>
            <Link href="/contact">هماهنگی بازدید</Link>
          </Button>
        </article>
      </div>
    </main>
  );
}
