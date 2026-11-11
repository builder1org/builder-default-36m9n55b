"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { promoSlides } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function HeroPromoSlider() {
  const [index, setIndex] = useState(0);
  const slide = promoSlides[index] ?? promoSlides[0];

  return (
    <div className="space-y-3">
      <article className="border-border/80 relative overflow-hidden rounded-2xl border">
        <p className="sr-only">اسلاید تبلیغاتی {index + 1}</p>
        <div
          className={cn("relative flex min-h-[9.5rem] flex-col justify-end bg-gradient-to-l p-4 sm:min-h-[11rem]", slide.gradient)}
        >
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,white_0%,transparent_55%)] opacity-70"
            aria-hidden
          />
          <div className="bg-primary/85 text-primary-foreground relative rounded-xl px-4 py-3 sm:px-5 sm:py-4">
            <p className="text-sm font-semibold leading-snug sm:text-base">{slide.title}</p>
            <p className="mt-0.5 text-xs opacity-95 sm:text-sm">{slide.subtitle}</p>
            <Link
              href={slide.href}
              className="mt-3 inline-flex items-center gap-1 text-xs font-medium underline-offset-4 hover:underline"
            >
              مشاهده
              <ChevronLeft className="size-3.5" aria-hidden />
            </Link>
          </div>
        </div>
      </article>
      <div className="flex justify-center gap-1.5" role="tablist" aria-label="اسلاید بنر">
        {promoSlides.map((s, i) => (
          <button
            key={s.id}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`اسلاید ${i + 1}`}
            onClick={() => setIndex(i)}
            className={cn(
              "size-1.5 rounded-full transition-colors",
              i === index ? "bg-primary w-4" : "bg-border",
            )}
          />
        ))}
      </div>
    </div>
  );
}
