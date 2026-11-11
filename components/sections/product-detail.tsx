import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { AddToCartForm } from "@/components/site/add-to-cart-form";
import { getCategoryTitle } from "@/lib/products";
import type { Product } from "@/lib/site-data";
import { siteConfig } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type ProductDetailProps = {
  product: Product;
};

export function ProductDetail({ product }: ProductDetailProps) {
  const categoryTitle = getCategoryTitle(product.category);

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-10">
      <nav className="text-muted-foreground mb-6 flex flex-wrap items-center gap-1 text-xs">
        <Link href="/" className="hover:text-foreground transition-colors">
          خانه
        </Link>
        <ChevronRight className="size-3 rotate-180 opacity-50" aria-hidden />
        <Link href="/products" className="hover:text-foreground transition-colors">
          محصولات
        </Link>
        <ChevronRight className="size-3 rotate-180 opacity-50" aria-hidden />
        <span className="text-foreground font-medium">{product.name}</span>
      </nav>

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="border-border/80 relative aspect-[4/5] overflow-hidden rounded-3xl border bg-white lg:aspect-square lg:max-h-[32rem]">
          <div
            className={cn("absolute inset-0 bg-gradient-to-br opacity-60", product.hue)}
            aria-hidden
          />
          <div className="absolute inset-0 flex items-center justify-center p-8" aria-hidden>
            <span className="border-border/60 h-40 w-28 rounded-2xl border-2 border-dashed bg-white/50 backdrop-blur-sm" />
          </div>
          {product.badge ? (
            <span className="bg-primary text-primary-foreground absolute start-4 top-4 rounded-full px-3 py-1 text-xs font-semibold">
              {product.badge}
            </span>
          ) : null}
        </div>

        <div className="flex flex-col">
          <Link
            href={`/products?category=${product.category}`}
            className="text-primary mb-2 text-xs font-medium hover:underline"
          >
            {categoryTitle}
          </Link>
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">{product.name}</h1>
          <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{product.note}</p>
          <p className="mt-4 text-xl font-bold">{product.priceLabel}</p>
          <p className="text-muted-foreground mt-1 text-xs">موجودی: با تماس تأیید می‌شود</p>

          <div className="border-border mt-6 border-t pt-6">
            <AddToCartForm slug={product.slug} />
          </div>

          <div className="border-border mt-8 space-y-4 border-t pt-8">
            <h2 className="text-sm font-semibold">توضیحات</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">{product.description}</p>
            <h2 className="text-sm font-semibold">ویژگی‌ها</h2>
            <ul className="text-muted-foreground list-inside list-disc space-y-1.5 text-sm">
              {product.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <p className="text-muted-foreground mt-8 text-xs leading-relaxed">
            برای انتخاب دقیق رنگ یا مشاوره پوست با {siteConfig.name} تماس بگیرید: {siteConfig.phone}
          </p>
        </div>
      </div>
    </div>
  );
}
