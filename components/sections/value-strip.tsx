import { SectionHeading } from "@/components/site/section-heading";
import { siteConfig, valueProps } from "@/lib/site-data";

export function ValueStrip() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <SectionHeading
        eyebrow={`چرا ${siteConfig.name}`}
        title="خرید آرایشی با خیال راحت"
        align="center"
        className="mb-10"
      />
      <ul className="grid gap-5 md:grid-cols-3">
        {valueProps.map((item, i) => (
          <li
            key={item.title}
            className="border-border/80 bg-card relative rounded-2xl border p-6 shadow-sm"
          >
            <span
              className="text-primary/20 absolute end-4 top-3 text-5xl font-extrabold leading-none"
              aria-hidden
            >
              {i + 1}
            </span>
            <h3 className="relative text-lg font-bold">{item.title}</h3>
            <p className="text-muted-foreground relative mt-2 text-sm leading-relaxed">{item.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
