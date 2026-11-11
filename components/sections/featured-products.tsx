import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/site/product-card";
import { SectionHeading } from "@/components/site/section-heading";
import { products } from "@/lib/site-data";

export function FeaturedProducts() {
  const featured = products.slice(0, 6);

  return (
    <section className="bg-secondary/40 py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="منتخب فروشگاه"
            title="محصولات پرتکرار"
            description="نمونه کارت محصول با برچسب و توضیح کوتاه — قیمت واقعی پس از تایید شما درج می‌شود."
          />
          <Button asChild variant="outline" className="shrink-0 gap-2 self-start sm:self-auto">
            <Link href="/products">
              همه محصولات
              <ArrowLeft className="size-4" aria-hidden />
            </Link>
          </Button>
        </div>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
