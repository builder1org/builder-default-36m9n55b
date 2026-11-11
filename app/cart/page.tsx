import { CartView } from "@/components/sections/cart-view";
import { SectionHeading } from "@/components/site/section-heading";

export const metadata = {
  title: "سبد خرید",
  description: "مرور اقلام انتخاب‌شده و تکمیل سفارش.",
};

export default function CartPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
      <SectionHeading title="سبد خرید" description="اقلام را بررسی کنید و برای ثبت سفارش تماس بگیرید." className="mb-8" />
      <CartView />
    </main>
  );
}
