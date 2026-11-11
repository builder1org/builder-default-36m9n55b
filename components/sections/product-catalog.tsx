"use client";

import { useSearchParams } from "next/navigation";
import { CategoryCircle } from "@/components/site/category-circle";
import { ProductCard } from "@/components/site/product-card";
import { SiteSearch } from "@/components/site/site-search";
import { filterProducts } from "@/lib/products";
import { categories, type CategoryId } from "@/lib/site-data";

const allId = "all" as const;

export function ProductCatalog() {
  const searchParams = useSearchParams();
  const raw = searchParams.get("category") as CategoryId | null;
  const query = searchParams.get("q");
  const validIds = new Set(categories.map((c) => c.id));
  const active = raw && validIds.has(raw) ? raw : allId;

  const filtered = filterProducts({
    category: active === allId ? null : active,
    query,
  });

  return (
    <div className="space-y-10">
      <SiteSearch />
      <div>
        <p className="text-muted-foreground mb-4 text-xs font-medium">دسته‌ها</p>
        <ul
          className="scrollbar-hide flex gap-4 overflow-x-auto pb-1"
          role="list"
          aria-label="دسته محصول"
        >
          <li className="shrink-0">
            <CategoryCircle
              href="/products"
              icon="all"
              label="همه"
              active={active === allId}
              variant="store"
              tint="bg-white"
            />
          </li>
          {categories.map((cat) => (
            <li key={cat.id} className="shrink-0">
              <CategoryCircle
                href={`/products?category=${cat.id}`}
                icon={cat.icon}
                label={cat.title}
                active={active === cat.id}
                variant="store"
                tint={cat.circleTint}
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-between gap-2 text-xs">
        <p className="text-muted-foreground">
          {filtered.length} محصول
          {query?.trim() ? ` · جستجو: «${query.trim()}»` : ""}
        </p>
      </div>

      {filtered.length === 0 ? (
        <p className="text-muted-foreground border-border rounded-2xl border py-12 text-center text-sm">
          محصولی یافت نشد. دسته یا عبارت جستجو را تغییر دهید.
        </p>
      ) : (
        <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 lg:grid-cols-3">
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
