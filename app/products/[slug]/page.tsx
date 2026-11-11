import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/sections/product-detail";
import { getAllProductSlugs, getProductBySlug } from "@/lib/products";
import { siteConfig } from "@/lib/site-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "محصول" };
  return {
    title: product.name,
    description: product.note,
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <main>
      <ProductDetail product={product} />
    </main>
  );
}
