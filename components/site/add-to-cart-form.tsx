"use client";

import { useState } from "react";
import { Check, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "@/components/site/cart-provider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type AddToCartFormProps = {
  slug: string;
  className?: string;
};

export function AddToCartForm({ slug, className }: AddToCartFormProps) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  function changeQuantity(delta: number) {
    setQuantity((q) => Math.min(99, Math.max(1, q + delta)));
  }

  function handleAdd() {
    addItem(slug, quantity);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex items-center gap-3">
        <span className="text-muted-foreground text-xs">تعداد</span>
        <div className="border-border flex items-center rounded-full border">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="size-9 rounded-full"
            aria-label="کاهش تعداد"
            onClick={() => changeQuantity(-1)}
          >
            <Minus className="size-4" />
          </Button>
          <span className="w-8 text-center text-sm font-medium tabular-nums" aria-live="polite">
            {quantity}
          </span>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="size-9 rounded-full"
            aria-label="افزایش تعداد"
            onClick={() => changeQuantity(1)}
          >
            <Plus className="size-4" />
          </Button>
        </div>
      </div>
      <Button
        type="button"
        size="lg"
        className="h-12 w-full rounded-full text-sm font-semibold sm:w-auto sm:min-w-52"
        onClick={handleAdd}
      >
        {added ? (
          <>
            <Check className="size-4" aria-hidden />
            به سبد اضافه شد
          </>
        ) : (
          <>
            <ShoppingBag className="size-4" aria-hidden />
            افزودن به سبد خرید
          </>
        )}
      </Button>
    </div>
  );
}
