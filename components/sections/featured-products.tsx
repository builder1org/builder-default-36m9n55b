import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ProductCard } from "@/components/site/product-card";
import { SectionHeading } from "@/components/site/section-heading";
import { products } from "@/lib/site-data";

export function FeaturedProducts() {
  const featured = products.slice(0, 6);

  return (
    <section className="border-border/60 border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading title="منتخب" description="نمونه نمایش؛ قیمت و تصویر پس از تایید شما." />
          <Link
            href="/products"
            className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 text-xs font-medium transition-colors"
          >
            مشاهده همه
            <ArrowLeft className="size-3.5" aria-hidden />
          </Link>
        </div>
        <ul className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => (
            <li key={product.slug}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
