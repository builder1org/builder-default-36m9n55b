"use client";

import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/components/site/cart-provider";
import { Button } from "@/components/ui/button";
import { getCategoryTitle, getProductBySlug } from "@/lib/products";
import type { Product } from "@/lib/site-data";
import { siteConfig } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function CartView() {
  const { items, setQuantity, removeItem, clearCart } = useCart();

  const lines = items
    .map((line) => {
      const product = getProductBySlug(line.slug);
      return product ? { ...line, product } : null;
    })
    .filter((row): row is { slug: string; quantity: number; product: Product } => row !== null);

  if (lines.length === 0) {
    return (
      <div className="border-border rounded-2xl border px-6 py-16 text-center">
        <p className="text-muted-foreground text-sm">سبد خرید شما خالی است.</p>
        <Button asChild className="mt-6 rounded-full" variant="default">
          <Link href="/products">مشاهده محصولات</Link>
        </Button>
      </div>
    );
  }

  const itemCount = lines.reduce((s, l) => s + l.quantity, 0);

  return (
    <div className="space-y-6">
      <ul className="divide-border divide-y rounded-2xl border">
        {lines.map(({ slug, quantity, product }) => (
          <li key={slug} className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:gap-6">
            <Link
              href={`/products/${slug}`}
              className="bg-muted/40 relative size-24 shrink-0 overflow-hidden rounded-xl border"
            >
              <div className={cn("absolute inset-0 bg-gradient-to-br opacity-70", product.hue)} />
            </Link>
            <div className="min-w-0 flex-1">
              <p className="text-muted-foreground text-[10px]">{getCategoryTitle(product.category)}</p>
              <Link
                href={`/products/${slug}`}
                className="hover:text-primary mt-0.5 block text-sm font-semibold"
              >
                {product.name}
              </Link>
              <p className="text-muted-foreground mt-1 text-xs">{product.priceLabel}</p>
            </div>
            <div className="flex items-center justify-between gap-3 sm:flex-col sm:items-end">
              <div className="border-border flex items-center rounded-full border">
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="size-8"
                  onClick={() => setQuantity(slug, quantity - 1)}
                  aria-label="کاهش"
                >
                  <Minus className="size-3.5" />
                </Button>
                <span className="w-7 text-center text-xs font-medium tabular-nums">{quantity}</span>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="size-8"
                  onClick={() => setQuantity(slug, quantity + 1)}
                  aria-label="افزایش"
                >
                  <Plus className="size-3.5" />
                </Button>
              </div>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="text-destructive h-8 gap-1 text-xs"
                onClick={() => removeItem(slug)}
              >
                <Trash2 className="size-3.5" />
                حذف
              </Button>
            </div>
          </li>
        ))}
      </ul>

      <div className="border-border space-y-4 rounded-2xl border p-6">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium">جمع اقلام: {itemCount}</span>
          <button
            type="button"
            className="text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline"
            onClick={clearCart}
          >
            خالی کردن سبد
          </button>
        </div>
        <Button asChild size="lg" className="h-12 w-full rounded-full">
          <Link href="/contact">تکمیل سفارش (تماس با فروشگاه)</Link>
        </Button>
        <p className="text-muted-foreground text-center text-[11px] leading-relaxed">
          پرداخت آنلاین بعداً فعال می‌شود. برای ثبت نهایی سفارش با {siteConfig.phone} هماهنگ کنید.
        </p>
      </div>
    </div>
  );
}
