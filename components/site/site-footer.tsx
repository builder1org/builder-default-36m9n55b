import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/site/logo";
import { navLinks, siteConfig } from "@/lib/site-data";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-border bg-card/50 mt-16 border-t">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr]">
        <div className="space-y-4">
          <Logo />
          <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
            {siteConfig.description}
          </p>
        </div>
        <div>
          <h2 className="mb-3 text-sm font-bold">صفحات</h2>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3">
          <h2 className="text-sm font-bold">ارتباط</h2>
          <ul className="text-muted-foreground space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 size-4 shrink-0" aria-hidden />
              <span>{siteConfig.phone}</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 size-4 shrink-0" aria-hidden />
              <span>{siteConfig.email}</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden />
              <span>{siteConfig.address}</span>
            </li>
          </ul>
          <p className="text-muted-foreground text-xs">{siteConfig.hours}</p>
        </div>
      </div>
      <div className="border-border border-t px-4 py-4 text-center sm:px-6">
        <p className="text-muted-foreground text-xs">
          © {year} {siteConfig.name}. محتوای تماس پس از تایید شما جایگزین placeholderها می‌شود.
        </p>
      </div>
    </footer>
  );
}
