import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/site-data";
import { getCategoryTitle } from "@/lib/products";

type ProductCardProps = {
  product: Product;
  className?: string;
};

export function ProductCard({ product, className }: ProductCardProps) {
  const href = `/products/${product.slug}`;

  return (
    <article className={cn("group", className)}>
      <Link href={href} className="flex flex-col gap-3">
        <div className="border-border/70 bg-muted/20 relative aspect-[4/5] overflow-hidden rounded-2xl border transition group-hover:border-primary/25">
          <div
            className={cn("absolute inset-0 bg-gradient-to-b opacity-50", product.hue)}
            aria-hidden
          />
          {product.badge ? (
            <span className="bg-background/90 text-primary absolute start-3 top-3 rounded-full px-2 py-0.5 text-[10px] font-semibold">
              {product.badge}
            </span>
          ) : null}
        </div>
        <div className="space-y-1 px-0.5">
          <p className="text-muted-foreground text-[10px] font-medium">
            {getCategoryTitle(product.category)}
          </p>
          <h3 className="text-sm font-semibold leading-snug group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-muted-foreground line-clamp-2 text-xs leading-relaxed">{product.note}</p>
          <p className="text-foreground pt-0.5 text-sm font-semibold">{product.priceLabel}</p>
        </div>
      </Link>
    </article>
  );
}
