"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { CartHeaderLink } from "@/components/site/cart-header-link";
import { Logo } from "@/components/site/logo";
import { Button } from "@/components/ui/button";
import { navLinks, siteConfig } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-background sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 pt-3 pb-2 sm:px-6 sm:pt-4">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
          <div className="justify-self-start">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="size-10 shrink-0"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "بستن منو" : "باز کردن منو"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-6" strokeWidth={1.5} /> : <Menu className="size-6" strokeWidth={1.5} />}
            </Button>
          </div>

          <Logo variant="wordmark" className="justify-self-center" />

          <div className="justify-self-end">
            <CartHeaderLink />
          </div>
        </div>

        <nav className="mt-3 hidden justify-center gap-6 border-t border-transparent pt-2 md:flex" aria-label="مسیرهای اصلی">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-xs font-medium transition-colors",
                  active ? "text-primary" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-border border-t px-4 pb-4 md:hidden">
          <nav className="flex flex-col gap-3 pt-4" aria-label="منوی موبایل">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "text-sm font-medium",
                    active ? "text-primary" : "text-muted-foreground",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="text-muted-foreground text-xs"
            >
              تماس · {siteConfig.phone}
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
