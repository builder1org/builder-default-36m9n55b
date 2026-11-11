import { CategoryCircle } from "@/components/site/category-circle";
import { categories } from "@/lib/site-data";

export function CategoryGrid() {
  return (
    <section className="border-border/60 border-t">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-10 flex flex-col items-center text-center">
          <p className="text-muted-foreground text-xs font-medium tracking-wide">دسته‌بندی</p>
          <h2 className="mt-2 text-xl font-semibold sm:text-2xl">مرور بر اساس نیاز</h2>
        </div>
        <ul className="flex gap-6 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center sm:gap-8 sm:overflow-visible">
          {categories.map((cat) => (
            <li key={cat.id} className="shrink-0 sm:shrink">
              <CategoryCircle
                href={`/products?category=${cat.id}`}
                icon={cat.icon}
                label={cat.title}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
