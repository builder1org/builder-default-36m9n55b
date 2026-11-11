import { siteConfig, valueProps } from "@/lib/site-data";

export function ValueStrip() {
  return (
    <section className="border-border/60 border-t">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:grid-cols-3 sm:px-6 sm:gap-6">
        {valueProps.map((item) => (
          <div key={item.title} className="space-y-2">
            <h3 className="text-sm font-medium">{item.title}</h3>
            <p className="text-muted-foreground text-xs leading-relaxed">{item.body}</p>
          </div>
        ))}
        <p className="text-muted-foreground col-span-full mt-2 text-center text-[11px] sm:mt-0 sm:col-span-3">
          {siteConfig.name} — فروش حضوری با اولویت مشاوره
        </p>
      </div>
    </section>
  );
}
