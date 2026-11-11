import Link from "next/link";
import { Logo } from "@/components/site/logo";
import { navLinks, siteConfig } from "@/lib/site-data";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-border/60 mt-8 border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:flex-row sm:justify-between sm:px-6">
        <div>
          <Logo />
          <p className="text-muted-foreground mt-3 max-w-xs text-xs leading-relaxed">
            {siteConfig.description}
          </p>
        </div>
        <nav aria-label="پاورقی">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground text-xs transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-border/60 border-t px-4 py-4 text-center sm:px-6">
        <p className="text-muted-foreground text-[11px]">
          © {year} {siteConfig.name} · {siteConfig.phone}
        </p>
      </div>
    </footer>
  );
}