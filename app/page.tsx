import { CategoryGrid } from "@/components/sections/category-grid";
import { ContactCta } from "@/components/sections/contact-cta";
import { FeaturedProducts } from "@/components/sections/featured-products";
import { HomeHero } from "@/components/sections/home-hero";
import { ValueStrip } from "@/components/sections/value-strip";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <CategoryGrid />
      <FeaturedProducts />
      <ValueStrip />
      <ContactCta />
    </main>
  );
}
