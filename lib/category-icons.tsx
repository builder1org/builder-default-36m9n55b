import {
  Brush,
  Droplets,
  Eye,
  Flower2,
  Heart,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import type { categories } from "@/lib/site-data";

type IconKey = (typeof categories)[number]["icon"];

const map: Record<IconKey, LucideIcon> = {
  sparkles: Sparkles,
  eye: Eye,
  lip: Heart,
  droplets: Droplets,
  flower2: Flower2,
  brush: Brush,
};

export function CategoryIcon({ name, className }: { name: IconKey; className?: string }) {
  const Icon = map[name];
  return <Icon className={className} aria-hidden />;
}
