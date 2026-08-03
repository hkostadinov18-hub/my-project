export type ProductCategory = "Соленки" | "Баници" | "Пица" | "Хляб и геврек";

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
  image?: string;
  featured?: boolean;
}

export const categories: ProductCategory[] = [
  "Соленки",
  "Баници",
  "Пица",
  "Хляб и геврек",
];

export const products: Product[] = [
  {
    id: "solenka-sirene-kashkaval",
    name: "Соленка със сирене и кашкавал",
    category: "Соленки",
    description: "Нашият най-разпознаваем и най-продаван продукт — мека солена закуска с домашно сирене вътре и разтопен кашкавал отгоре.",
    retailPrice: 0.2,
    wholesalePrice: 0.15,
    wholesaleMinQty: 30,
    unit: "бр.",
    emoji: "🧀",
    image: "/products/solenka.jpg",
    featured: true,
  },
  {
    id: "postna-solenka-gaba",
    name: "Постна соленка с гъба",
    category: "Соленки",
    description: "Лека постна соленка с пълнеж от гъби, подходяща за дните на пост.",
    retailPrice: 0.2,
    wholesalePrice: 0.15,
    wholesaleMinQty: 30,
    unit: "бр.",
    emoji: "🍄",
    image: "/products/postna-solenka-gaba.jpg",
    featured: true,
  },
  {
    id: "krenvirshka",
    name: "Кренвиршка",
    category: "Соленки",
    description: "Мека солена закуска с кренвирш, изпечена до златисто.",
    retailPrice: 0.2,
    wholesalePrice: 0.15,
    wholesaleMinQty: 30,
    unit: "бр.",
    emoji: "🌭",
    image: "/products/krenvirshka.jpg",
  },
  {
    id: "pastarmalak",
    name: "Пастармалък",
    category: "Соленки",
    description: "Традиционна солена закуска със сиренен пълнеж по стара рецепта.",
    retailPrice: 1.4,
    wholesalePrice: 1.1,
    wholesaleMinQty: 20,
    unit: "бр.",
    emoji: "🥟",
  },
  {
    id: "banitsa-sirene",
    name: "Баница със сирене",
    category: "Баници",
    description: "Класическа баница с домашно сирене и разбити яйца, приготвена по традиционна рецепта.",
    retailPrice: 1.2,
    wholesalePrice: 0.9,
    wholesaleMinQty: 20,
    unit: "бр.",
    emoji: "🥧",
    featured: true,
  },
  {
    id: "pizza-parche",
    name: "Пица на парче",
    category: "Пица",
    description: "Домашна пица със салам, кашкавал и маслини, изпечена на фурна и продавана на парче.",
    retailPrice: 1.3,
    wholesalePrice: 1.0,
    wholesaleMinQty: 10,
    unit: "парче",
    emoji: "🍕",
    image: "/products/pizza-parche.jpg",
    featured: true,
  },
  {
    id: "pizza-zatvorena",
    name: "Затворена пица",
    category: "Пица",
    description: "Пица с кренвирш, кашкавал и гъби, приготвена по нашата рецепта.",
    retailPrice: 1.1,
    wholesalePrice: 0.85,
    wholesaleMinQty: 10,
    unit: "бр.",
    emoji: "🍕",
    image: "/products/pizza-zatvorena.jpg",
  },
  {
    id: "postna-kiflichka",
    name: "Постна кифличка",
    category: "Хляб и геврек",
    description: "Лека постна кифличка, подходяща за дните на пост.",
    retailPrice: 0.2,
    wholesalePrice: 0.15,
    wholesaleMinQty: 30,
    unit: "бр.",
    emoji: "🥖",
  },
  {
    id: "rogche",
    name: "Рогче",
    category: "Хляб и геврек",
    description: "Мека кифла, оформена на рогче, изпечена до златисто.",
    retailPrice: 1.0,
    wholesalePrice: 0.8,
    wholesaleMinQty: 20,
    unit: "бр.",
    emoji: "🥐",
  },
];
