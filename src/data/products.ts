export type ProductCategory =
  | "Баници"
  | "Кроасани"
  | "Сандвичи"
  | "Сладки"
  | "Хляб и геврек";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  retailPrice: number;
  wholesalePrice: number;
  wholesaleMinQty: number;
  unit: string;
  emoji: string;
  featured?: boolean;
}

export const categories: ProductCategory[] = [
  "Баници",
  "Кроасани",
  "Сандвичи",
  "Сладки",
  "Хляб и геврек",
];

export const products: Product[] = [
  {
    id: "banitsa-sirene",
    name: "Баница със сирене",
    category: "Баници",
    description: "Класическа баница с домашно сирене и разбити яйца, приготвена по традиционна рецепта.",
    retailPrice: 2.5,
    wholesalePrice: 1.9,
    wholesaleMinQty: 20,
    unit: "бр.",
    emoji: "🥧",
    featured: true,
  },
  {
    id: "banitsa-spanak",
    name: "Баница със спанак",
    category: "Баници",
    description: "Тънки кори, пълнени със спанак, сирене и подправки.",
    retailPrice: 2.7,
    wholesalePrice: 2.1,
    wholesaleMinQty: 20,
    unit: "бр.",
    emoji: "🥬",
  },
  {
    id: "banitsa-tikva",
    name: "Тиквеник",
    category: "Баници",
    description: "Сладка баница с тиква, орехи и канела.",
    retailPrice: 2.7,
    wholesalePrice: 2.1,
    wholesaleMinQty: 20,
    unit: "бр.",
    emoji: "🎃",
  },
  {
    id: "croissant-classic",
    name: "Класически кроасан",
    category: "Кроасани",
    description: "Маслен кроасан с хрупкава коричка и мека сърцевина.",
    retailPrice: 2.2,
    wholesalePrice: 1.7,
    wholesaleMinQty: 24,
    unit: "бр.",
    emoji: "🥐",
    featured: true,
  },
  {
    id: "croissant-choco",
    name: "Шоколадов кроасан",
    category: "Кроасани",
    description: "Кроасан с богат пълнеж от топъл шоколад.",
    retailPrice: 2.6,
    wholesalePrice: 2.0,
    wholesaleMinQty: 24,
    unit: "бр.",
    emoji: "🍫",
  },
  {
    id: "sandwich-shunka",
    name: "Сандвич шунка и кашкавал",
    category: "Сандвичи",
    description: "Прясна франзела с шунка, кашкавал и зеленчуци.",
    retailPrice: 3.5,
    wholesalePrice: 2.8,
    wholesaleMinQty: 15,
    unit: "бр.",
    emoji: "🥪",
    featured: true,
  },
  {
    id: "sandwich-vege",
    name: "Вегетариански сандвич",
    category: "Сандвичи",
    description: "Пълнозърнест хляб с крема сирене, краставица и рукола.",
    retailPrice: 3.3,
    wholesalePrice: 2.6,
    wholesaleMinQty: 15,
    unit: "бр.",
    emoji: "🥗",
  },
  {
    id: "kozunak",
    name: "Козунак",
    category: "Сладки",
    description: "Пухкав козунак с розова вода и стафиди, печен по домашному.",
    retailPrice: 8.0,
    wholesalePrice: 6.5,
    wholesaleMinQty: 10,
    unit: "бр.",
    emoji: "🍞",
  },
  {
    id: "mufin-borovinka",
    name: "Мъфин с боровинки",
    category: "Сладки",
    description: "Домашен мъфин с истински боровинки.",
    retailPrice: 2.4,
    wholesalePrice: 1.9,
    wholesaleMinQty: 20,
    unit: "бр.",
    emoji: "🧁",
  },
  {
    id: "gevrek",
    name: "Геврек със сусам",
    category: "Хляб и геврек",
    description: "Хрупкав геврек, обилно поръсен със сусам.",
    retailPrice: 1.2,
    wholesalePrice: 0.9,
    wholesaleMinQty: 30,
    unit: "бр.",
    emoji: "🥯",
    featured: true,
  },
  {
    id: "hlyab-selski",
    name: "Селски хляб",
    category: "Хляб и геврек",
    description: "Домашен хляб на квас, печен всяка сутрин.",
    retailPrice: 3.8,
    wholesalePrice: 3.0,
    wholesaleMinQty: 10,
    unit: "бр.",
    emoji: "🍞",
  },
];
