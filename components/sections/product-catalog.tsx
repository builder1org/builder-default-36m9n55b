"use client";

import { useSearchParams } from "next/navigation";
import { CategoryCircle } from "@/components/site/category-circle";
import { ProductCard } from "@/components/site/product-card";
import { categories, products, type CategoryId } from "@/lib/site-data";

const allId = "all" as const;

export function ProductCatalog() {
  const searchParams = useSearchParams();
  const raw = searchParams.get("category") as CategoryId | null;
  const validIds = new Set(categories.map((c) => c.id));
  const active = raw && validIds.has(raw) ? raw : allId;

  const filtered =
    active === allId ? products : products.filter((p) => p.category === active);

  return (
    <div className="space-y-12">
      <div>
        <p className="text-muted-foreground mb-5 text-center text-xs font-medium">فیلتر دسته</p>
        <ul
          className="flex justify-start gap-5 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center sm:gap-7"
          role="list"
          aria-label="دسته محصول"
        >
          <li className="shrink-0">
            <CategoryCircle href="/products" icon="all" label="همه" active={active === allId} />
          </li>
          {categories.map((cat) => (
            <li key={cat.id} className="shrink-0">
              <CategoryCircle
                href={`/products?category=${cat.id}`}
                icon={cat.icon}
                label={cat.title}
                active={active === cat.id}
              />
            </li>
          ))}
        </ul>
      </div>
      {filtered.length === 0 ? (
        <p className="text-muted-foreground text-center text-sm">در این دسته محصولی ثبت نشده است.</p>
      ) : (
        <ul className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
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
