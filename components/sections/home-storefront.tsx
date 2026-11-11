import { CategoryGrid } from "@/components/sections/category-grid";
import { HeroPromoSlider } from "@/components/sections/hero-promo-slider";
import { QuickFilterChips } from "@/components/sections/quick-filter-chips";
import { SiteSearch } from "@/components/site/site-search";

export function HomeStorefront() {
  return (
    <div className="mx-auto max-w-6xl space-y-5 px-4 pb-6 sm:px-6 sm:pb-8">
      <SiteSearch />
      <QuickFilterChips />
      <HeroPromoSlider />
      <CategoryGrid />
    </div>
  );
}
