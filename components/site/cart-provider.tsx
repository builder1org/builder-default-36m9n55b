"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getProductBySlug } from "@/lib/products";

export type CartItem = {
  slug: string;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  addItem: (slug: string, quantity?: number) => void;
  removeItem: (slug: string) => void;
  setQuantity: (slug: string, quantity: number) => void;
  clearCart: () => void;
};

const STORAGE_KEY = "rozaglam-cart";

const CartContext = createContext<CartContextValue | null>(null);

function readStorage(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as CartItem[];
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (line) =>
        typeof line.slug === "string" &&
        typeof line.quantity === "number" &&
        line.quantity > 0 &&
        getProductBySlug(line.slug),
    );
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setItems(readStorage());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, hydrated]);

  const addItem = useCallback((slug: string, quantity = 1) => {
    if (!getProductBySlug(slug)) return;
    const delta = Math.max(1, Math.floor(quantity));
    setItems((prev) => {
      const existing = prev.find((i) => i.slug === slug);
      if (existing) {
        return prev.map((i) =>
          i.slug === slug ? { ...i, quantity: i.quantity + delta } : i,
        );
      }
      return [...prev, { slug, quantity: delta }];
    });
  }, []);

  const removeItem = useCallback((slug: string) => {
    setItems((prev) => prev.filter((i) => i.slug !== slug));
  }, []);

  const setQuantity = useCallback((slug: string, quantity: number) => {
    const q = Math.floor(quantity);
    if (q < 1) {
      setItems((prev) => prev.filter((i) => i.slug !== slug));
      return;
    }
    setItems((prev) => prev.map((i) => (i.slug === slug ? { ...i, quantity: q } : i)));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const itemCount = useMemo(
    () => items.reduce((sum, line) => sum + line.quantity, 0),
    [items],
  );

  const value = useMemo(
    () => ({ items, itemCount, addItem, removeItem, setQuantity, clearCart }),
    [items, itemCount, addItem, removeItem, setQuantity, clearCart],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within CartProvider");
  }
  return ctx;
}
