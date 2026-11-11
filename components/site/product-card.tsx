import { cn } from "@/lib/utils";
import type { Product } from "@/lib/site-data";
import { Package } from "lucide-react";

type ProductCardProps = {
  product: Product;
  className?: string;
};

export function ProductCard({ product, className }: ProductCardProps) {
  return (
    <article
      className={cn(
        "group border-border/80 bg-card flex flex-col overflow-hidden rounded-2xl border shadow-sm transition-shadow hover:shadow-md",
        className,
      )}
    >
      <div
        className={cn(
          "relative flex aspect-[4/3] items-center justify-center bg-gradient-to-br",
          product.hue,
        )}
      >
        {product.badge ? (
          <span className="bg-primary text-primary-foreground absolute start-3 top-3 rounded-full px-2.5 py-0.5 text-xs font-semibold">
            {product.badge}
          </span>
        ) : null}
        <Package
          className="text-foreground/25 size-14 transition-transform group-hover:scale-105"
          strokeWidth={1.25}
          aria-hidden
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4 sm:p-5">
        <h3 className="text-lg font-bold">{product.name}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{product.note}</p>
        <div className="mt-auto flex items-center justify-between gap-2 pt-2">
          <span className="text-sm font-semibold">{product.priceLabel}</span>
          <span className="text-muted-foreground text-xs">موجودی: تماس بگیرید</span>
        </div>
      </div>
    </article>
  );
}
