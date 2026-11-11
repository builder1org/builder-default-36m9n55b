import { cn } from "@/lib/utils";
import type { Product } from "@/lib/site-data";

type ProductCardProps = {
  product: Product;
  className?: string;
};

export function ProductCard({ product, className }: ProductCardProps) {
  return (
    <article className={cn("group flex flex-col gap-3", className)}>
      <div className="border-border/70 bg-muted/30 relative aspect-[4/5] overflow-hidden border">
        <div
          className={cn("absolute inset-0 bg-gradient-to-b opacity-40", product.hue)}
          aria-hidden
        />
        {product.badge ? (
          <span className="text-muted-foreground absolute start-3 top-3 text-[10px] font-medium tracking-wide">
            {product.badge}
          </span>
        ) : null}
      </div>
      <div className="space-y-1">
        <h3 className="text-sm font-medium">{product.name}</h3>
        <p className="text-muted-foreground text-xs leading-relaxed">{product.note}</p>
        <p className="text-foreground pt-0.5 text-xs font-medium">{product.priceLabel}</p>
      </div>
    </article>
  );
}
