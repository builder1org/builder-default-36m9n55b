"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { Search } from "lucide-react";
import { siteConfig } from "@/lib/site-data";

export function SiteSearch() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const q = query.trim();
    router.push(q ? `/products?q=${encodeURIComponent(q)}` : "/products");
  }

  return (
    <form onSubmit={onSubmit} className="relative w-full">
      <label htmlFor="site-search" className="sr-only">
        جستجو
      </label>
      <Search
        className="text-muted-foreground pointer-events-none absolute start-4 top-1/2 size-5 -translate-y-1/2"
        strokeWidth={1.5}
        aria-hidden
      />
      <input
        id="site-search"
        name="q"
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={`جستجو در ${siteConfig.name}`}
        className="border-input bg-muted/40 text-foreground placeholder:text-muted-foreground h-12 w-full rounded-full border pe-4 ps-11 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
        autoComplete="off"
      />
    </form>
  );
}
