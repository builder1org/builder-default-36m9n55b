import { Suspense } from "react";
import { ProductCatalog } from "@/components/sections/product-catalog";
import { SectionHeading } from "@/components/site/section-heading";

export const metadata = {
  title: "محصولات",
  description: "مرور دسته‌ها و نمونه محصولات فروشگاه لوازم آرایشی.",
};

export default function ProductsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <SectionHeading
        title="محصولات"
        description="فیلتر دایره‌ای دسته‌ها؛ جزئیات پس از تایید شما به‌روز می‌شود."
        className="mb-12"
      />
      <Suspense fallback={<p className="text-muted-foreground text-sm">در حال بارگذاری…</p>}>
        <ProductCatalog />
      </Suspense>
    </main>
  );
}
