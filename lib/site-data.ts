export const siteConfig = {
  name: "رزاگلم",
  tagline: "لوازم آرایشی و مراقبت پوست",
  description:
    "فروشگاه تخصصی لوازم آرایشی، مراقبت پوست و عطر با انتخاب دستی محصولات باکیفیت.",
  phone: "[شماره تماس]",
  email: "[ایمیل]",
  address: "[آدرس فروشگاه]",
  hours: "شنبه تا پنج‌شنبه، ۱۰ تا ۲۱",
};

export const navLinks = [
  { href: "/", label: "خانه" },
  { href: "/products", label: "محصولات" },
  { href: "/about", label: "درباره ما" },
  { href: "/contact", label: "تماس" },
] as const;

export type CategoryId = "face" | "eyes" | "lips" | "skin" | "fragrance" | "tools";

export const categories: {
  id: CategoryId;
  title: string;
  description: string;
  icon: "sparkles" | "eye" | "lip" | "droplets" | "flower2" | "brush";
  circleTint: string;
}[] = [
  {
    id: "face",
    title: "آرایش صورت",
    description: "کرم‌پودر، رژگونه و پرایمر",
    icon: "sparkles",
    circleTint: "bg-amber-100",
  },
  {
    id: "eyes",
    title: "چشم و ابرو",
    description: "ریمل، خط چشم و سایه",
    icon: "eye",
    circleTint: "bg-violet-100",
  },
  {
    id: "lips",
    title: "لب",
    description: "رژ لب، برق لب و مداد",
    icon: "lip",
    circleTint: "bg-rose-100",
  },
  {
    id: "skin",
    title: "مراقبت پوست",
    description: "سرم، ضدآفتاب و پاک‌کننده",
    icon: "droplets",
    circleTint: "bg-sky-100",
  },
  {
    id: "fragrance",
    title: "عطر و ادکلن",
    description: "رایحه‌های ملایم و ماندگار",
    icon: "flower2",
    circleTint: "bg-emerald-50",
  },
  {
    id: "tools",
    title: "ابزار آرایش",
    description: "براش، بیوتی بلندر و آینه",
    icon: "brush",
    circleTint: "bg-fuchsia-100",
  },
];

export const homeQuickFilters = [
  { label: "برندها", href: "/products" },
  { label: "محصولات ترند", href: "/products" },
  { label: "جدیدترین‌ها", href: "/products" },
] as const;

export const promoSlides = [
  {
    id: "face-collection",
    title: "کالکشن آرایش صورت",
    subtitle: "[پیشنهاد ویژه فروشگاه]",
    href: "/products?category=face",
    gradient: "from-rose-300/90 via-pink-200/80 to-amber-100/90",
  },
  {
    id: "skin-care",
    title: "مراقبت پوست روزانه",
    subtitle: "سرم، ضدآفتاب و پاک‌کننده",
    href: "/products?category=skin",
    gradient: "from-sky-200/90 via-cyan-100/80 to-white/90",
  },
  {
    id: "new-lips",
    title: "رژ و مراقبت لب",
    subtitle: "[متن تبلیغاتی]",
    href: "/products?category=lips",
    gradient: "from-fuchsia-200/90 via-rose-100/80 to-pink-50/90",
  },
] as const;

export type Product = {
  slug: string;
  name: string;
  category: CategoryId;
  note: string;
  description: string;
  highlights: string[];
  priceLabel: string;
  badge?: string;
  hue: string;
};

export const products: Product[] = [
  {
    slug: "velvet-foundation",
    name: "کرم‌پودر مخملی",
    category: "face",
    note: "پوشش سبک، مخصوص پوست معمولی",
    description:
      "فرمول سبک با پوشش قابل تنظیم برای استفاده روزانه. مناسب تست رنگ در فروشگاه قبل از خرید نهایی.",
    highlights: ["بافت مخملی", "پوشش لایه‌ای", "مناسب آرایش روزمره"],
    priceLabel: "[قیمت]",
    badge: "پرفروش",
    hue: "from-rose-200/80 to-rose-100",
  },
  {
    slug: "rose-blush",
    name: "رژگونه رز",
    category: "face",
    note: "رنگ طبیعی، ماندگاری بالا",
    description: "رنگ‌دهی ملایم با امکان ترکیب برای گونه و استخوان گونه. برای انتخاب شید با ما تماس بگیرید.",
    highlights: ["رنگ طبیعی", "بدون چربی اضافه", "ماندگاری مناسب"],
    priceLabel: "[قیمت]",
    hue: "from-pink-200/80 to-amber-50",
  },
  {
    slug: "volume-mascara",
    name: "ریمل حجم‌دهنده",
    category: "eyes",
    note: "بدون گلوله شدن",
    description: "برس جداکننده مژه برای حجم و طول ظاهری. قبل از استفاده، نمونه در فروشگاه قابل تست است.",
    highlights: ["حجم‌دهی", "فرمول ضد گلوله", "پاک‌کنندگی آسان"],
    priceLabel: "[قیمت]",
    hue: "from-stone-300/70 to-stone-100",
  },
  {
    slug: "nude-palette",
    name: "پالت سایه خنثی",
    category: "eyes",
    note: "۱۲ رنگ روزمره و مجلسی",
    description: "طیف خنثی برای آرایش روز و شب. شامل مات و شاین ملایم؛ مشاوره ترکیب رنگ در فروشگاه.",
    highlights: ["۱۲ رنگ", "روز و مجلس", "قابل ترکیب"],
    priceLabel: "[قیمت]",
    badge: "جدید",
    hue: "from-amber-200/70 to-orange-50",
  },
  {
    slug: "satin-lipstick",
    name: "رژ لب ساتن",
    category: "lips",
    note: "بافت نرم، رنگ‌دهی یکنواخت",
    description: "بافت نرم با براقیت کنترل‌شده. برای هماهنگی با رنگ پوست، سویچ رنگ در فروشگاه انجام می‌شود.",
    highlights: ["فینیش ساتن", "راحتی در لب", "رنگ‌دهی یکنواخت"],
    priceLabel: "[قیمت]",
    hue: "from-red-200/60 to-rose-50",
  },
  {
    slug: "hydrating-serum",
    name: "سرم آبرسان",
    category: "skin",
    note: "هیالورونیک اسید و ویتامین B5",
    description: "مرحله آبرسانی قبل از کرم روزانه. مناسب انواع پوست؛ برای روتین شخصی با ما مشورت کنید.",
    highlights: ["آبرسان", "جذب سریع", "زیر آرایش"],
    priceLabel: "[قیمت]",
    badge: "مراقبت",
    hue: "from-sky-200/60 to-cyan-50",
  },
  {
    slug: "daily-sunscreen",
    name: "ضدآفتاب سبک",
    category: "skin",
    note: "SPF ۵۰، بدون چربی اضافه",
    description: "محافظت روزانه با بافت سبک و بدون وایت‌کست شدید. اطلاعات دقیق برچسب در بستهٔ فیزیکی.",
    highlights: ["SPF ۵۰", "بافت سبک", "روزانه"],
    priceLabel: "[قیمت]",
    hue: "from-yellow-100/80 to-white",
  },
  {
    slug: "floral-mist",
    name: "اسپری بدن گلی",
    category: "fragrance",
    note: "رایحه گل‌های بهاری",
    description: "ریزپاشی ملایم با نت گلی. تست رایحه در فروشگاه پیشنهاد می‌شود.",
    highlights: ["رایحه گلی", "اسپری یکنواخت", "هدیه مناسب"],
    priceLabel: "[قیمت]",
    hue: "from-violet-200/50 to-pink-50",
  },
  {
    slug: "pro-brush-set",
    name: "ست براش حرفه‌ای",
    category: "tools",
    note: "۸ عدد، مو مصنوعی نرم",
    description: "ست کامل برای صورت و چشم با نگهداری آسان. شست‌وشو و نگهداری در راهنمای بسته.",
    highlights: ["۸ عدد براش", "مو نرم", "کیف همراه"],
    priceLabel: "[قیمت]",
    hue: "from-stone-200/80 to-amber-50",
  },
];

export const valueProps = [
  {
    title: "انتخاب دستی",
    body: "محصولات با دقت برای پوست و سلیقهٔ متنوع انتخاب می‌شوند.",
  },
  {
    title: "اصالت کالا",
    body: "خرید از کانال‌های معتبر؛ جزئیات بسته‌بندی در فروشگاه قابل بررسی است.",
  },
  {
    title: "مشاوره حضوری",
    body: "برای انتخاب رنگ و نوع محصول، در فروشگاه راهنمایی دریافت کنید.",
  },
] as const;
