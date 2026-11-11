"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ProductCard } from "@/components/site/product-card";
import { categories, products, type CategoryId } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const allId = "all" as const;

export function ProductCatalog() {
  const searchParams = useSearchParams();
  const active = (searchParams.get("category") as CategoryId | null) ?? allId;

  const filtered =
    active === allId ? products : products.filter((p) => p.category === active);

  return (
    <div className="space-y-8">
      <div
        className="flex flex-wrap gap-2"
        role="tablist"
        aria-label="فیلتر دسته محصول"
      >
        <FilterChip href="/products" active={active === allId}>
          همه
        </FilterChip>
        {categories.map((cat) => (
          <FilterChip
            key={cat.id}
            href={`/products?category=${cat.id}`}
            active={active === cat.id}
          >
            {cat.title}
          </FilterChip>
        ))}
      </div>
      {filtered.length === 0 ? (
        <p className="text-muted-foreground text-sm">در این دسته محصولی ثبت نشده است.</p>
      ) : (
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <li key={product.slug}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function FilterChip({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      role="tab"
      aria-selected={active}
      className={cn(
        "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-card text-muted-foreground hover:text-foreground",
      )}
    >
      {children}
    </Link>
  );
}
