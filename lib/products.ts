import { categories, products, type CategoryId, type Product } from "@/lib/site-data";

export function getAllProductSlugs(): string[] {
  return products.map((p) => p.slug);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getCategoryTitle(categoryId: CategoryId): string {
  return categories.find((c) => c.id === categoryId)?.title ?? categoryId;
}

export function filterProducts(options: {
  category?: CategoryId | null;
  query?: string | null;
}): Product[] {
  const q = options.query?.trim().toLowerCase();
  return products.filter((p) => {
    if (options.category && p.category !== options.category) return false;
    if (!q) return true;
    return (
      p.name.toLowerCase().includes(q) ||
      p.note.toLowerCase().includes(q) ||
      getCategoryTitle(p.category).toLowerCase().includes(q)
    );
  });
}
