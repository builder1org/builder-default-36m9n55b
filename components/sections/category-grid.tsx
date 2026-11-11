import { CategoryCircle } from "@/components/site/category-circle";
import { categories } from "@/lib/site-data";

export function CategoryGrid() {
  return (
    <section aria-label="دسته‌بندی محصولات">
      <ul className="scrollbar-hide flex gap-4 overflow-x-auto px-4 pb-1 sm:gap-5 sm:px-6">
        {categories.map((cat) => (
          <li key={cat.id} className="shrink-0">
            <CategoryCircle
              href={`/products?category=${cat.id}`}
              icon={cat.icon}
              label={cat.title}
              tint={cat.circleTint}
              variant="store"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
