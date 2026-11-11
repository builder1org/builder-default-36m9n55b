"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/site/logo";
import { Button } from "@/components/ui/button";
import { navLinks, siteConfig } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="border-border/60 bg-background/90 sticky top-0 z-50 border-b backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Logo />
        <nav className="hidden items-center gap-6 md:flex" aria-label="مسیرهای اصلی">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-xs font-medium transition-colors",
                  active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="text-muted-foreground hover:text-foreground hidden text-xs font-medium sm:inline"
          >
            تماس
          </Link>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "بستن منو" : "باز کردن منو"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
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
                    active ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <span className="text-muted-foreground text-xs">{siteConfig.phone}</span>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
