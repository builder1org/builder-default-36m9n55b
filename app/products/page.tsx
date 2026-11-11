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
        description="لیست نمونه برای چیدمان فروشگاه؛ پس از تایید شما نام، قیمت و عکس واقعی جایگزین می‌شود."
        className="mb-10"
      />
      <Suspense fallback={<p className="text-muted-foreground text-sm">در حال بارگذاری…</p>}>
        <ProductCatalog />
      </Suspense>
    </main>
  );
}
