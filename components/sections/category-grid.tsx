import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CategoryIcon } from "@/lib/category-icons";
import { categories } from "@/lib/site-data";
import { SectionHeading } from "@/components/site/section-heading";

export function CategoryGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <SectionHeading
        eyebrow="دسته‌بندی"
        title="هر آنچه برای آرایش و مراقبت نیاز دارید"
        description="از آرایش روزانه تا مراقبت پوست؛ دسته‌ها را مرور کنید و در صفحه محصولات جزئیات ببینید."
        className="mb-10"
      />
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat, index) => (
          <li
            key={cat.id}
            className={index === 0 ? "sm:col-span-2 lg:row-span-1" : undefined}
          >
            <Link
              href={`/products?category=${cat.id}`}
              className="border-border/80 bg-card group flex h-full flex-col justify-between rounded-2xl border p-5 shadow-sm transition hover:border-primary/30 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="bg-secondary text-primary flex size-11 items-center justify-center rounded-xl">
                  <CategoryIcon name={cat.icon} className="size-5" />
                </span>
                <ArrowLeft
                  className="text-muted-foreground size-4 opacity-0 transition group-hover:opacity-100"
                  aria-hidden
                />
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-bold">{cat.title}</h3>
                <p className="text-muted-foreground mt-1 text-sm">{cat.description}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
