import { Suspense } from "react";
import { ProductCatalog } from "@/components/sections/product-catalog";

export const metadata = {
  title: "محصولات",
  description: "مرور، جستجو و انتخاب محصولات لوازم آرایشی.",
};

export default function ProductsPage() {
  return (
    <main className="bg-muted/20 min-h-[70vh]">
      <div className="border-border/70 bg-background border-b px-4 py-6 sm:px-6">
        <h1 className="text-center text-lg font-semibold tracking-tight sm:text-xl">فروشگاه</h1>
        <p className="text-muted-foreground mt-1 text-center text-xs">انتخاب دسته یا جستجو، سپس مشاهده جزئیات محصول</p>
      </div>
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <Suspense fallback={<p className="text-muted-foreground text-sm">در حال بارگذاری…</p>}>
          <ProductCatalog />
        </Suspense>
      </div>
    </main>
  );
}
