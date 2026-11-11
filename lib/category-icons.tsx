import {
  Brush,
  Droplets,
  Eye,
  Flower2,
  Grid2x2,
  Heart,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import type { categories } from "@/lib/site-data";

type IconKey = (typeof categories)[number]["icon"];

export type CategoryIconKey = IconKey | "all";

const map: Record<CategoryIconKey, LucideIcon> = {
  all: Grid2x2,
  sparkles: Sparkles,
  eye: Eye,
  lip: Heart,
  droplets: Droplets,
  flower2: Flower2,
  brush: Brush,
};

export function CategoryIcon({ name, className }: { name: CategoryIconKey; className?: string }) {
  const Icon = map[name];
  return <Icon className={className} aria-hidden />;
}
