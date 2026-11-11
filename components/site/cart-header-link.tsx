"use client";

import Link from "next/link";
import { ShoppingCart, UserRound } from "lucide-react";
import { useCart } from "@/components/site/cart-provider";

export function CartHeaderLink() {
  const { itemCount } = useCart();

  return (
    <Link
      href="/cart"
      className="text-foreground hover:text-primary relative inline-flex items-center gap-1.5 text-[11px] font-medium"
    >
      <span className="relative inline-flex items-center gap-0.5">
        <ShoppingCart className="size-[1.35rem]" strokeWidth={1.5} aria-hidden />
        <UserRound className="-ms-1 size-4" strokeWidth={1.5} aria-hidden />
        {itemCount > 0 ? (
          <span className="bg-primary text-primary-foreground absolute -top-1.5 -end-2 flex min-w-4 justify-center rounded-full px-1 text-[9px] font-bold leading-4">
            {itemCount > 99 ? "۹۹+" : itemCount}
          </span>
        ) : null}
      </span>
      <span className="hidden min-[380px]:inline">سبد · ورود</span>
    </Link>
  );
}
