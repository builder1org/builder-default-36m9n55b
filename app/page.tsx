import { ContactCta } from "@/components/sections/contact-cta";
import { FeaturedProducts } from "@/components/sections/featured-products";
import { HomeStorefront } from "@/components/sections/home-storefront";

export default function Home() {
  return (
    <main>
      <HomeStorefront />
      <FeaturedProducts />
      <ContactCta />
    </main>
  );
}
