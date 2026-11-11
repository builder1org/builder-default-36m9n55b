import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/site/contact-form";
import { SectionHeading } from "@/components/site/section-heading";
import { siteConfig } from "@/lib/site-data";

export const metadata = {
  title: "تماس",
  description: "اطلاعات تماس و فرم پیام فروشگاه لوازم آرایشی.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <SectionHeading
        title="تماس با ما"
        description="ساعات کاری، آدرس و فرم زیر را پس از تایید شما با اطلاعات واقعی به‌روز می‌کنیم."
        className="mb-10"
      />
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <aside className="border-border/80 bg-card space-y-5 rounded-3xl border p-6 shadow-sm sm:p-8">
          <h2 className="text-lg font-bold">اطلاعات فروشگاه</h2>
          <ul className="text-muted-foreground space-y-4 text-sm">
            <li className="flex gap-3">
              <Phone className="text-primary mt-0.5 size-4 shrink-0" aria-hidden />
              <span>{siteConfig.phone}</span>
            </li>
            <li className="flex gap-3">
              <Mail className="text-primary mt-0.5 size-4 shrink-0" aria-hidden />
              <span>{siteConfig.email}</span>
            </li>
            <li className="flex gap-3">
              <MapPin className="text-primary mt-0.5 size-4 shrink-0" aria-hidden />
              <span>{siteConfig.address}</span>
            </li>
            <li className="flex gap-3">
              <Clock className="text-primary mt-0.5 size-4 shrink-0" aria-hidden />
              <span>{siteConfig.hours}</span>
            </li>
          </ul>
        </aside>
        <div className="border-border/80 bg-card rounded-3xl border p-6 shadow-sm sm:p-8">
          <h2 className="mb-6 text-lg font-bold">فرم پیام</h2>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
