"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { categories, products, type ProductCategory } from "@/data/products";

export default function CatalogClient() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "Всички">("Всички");

  const filtered =
    activeCategory === "Всички"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3">
        {(["Всички", ...categories] as const).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              activeCategory === category
                ? "bg-amber-700 text-amber-50"
                : "bg-white text-amber-800 hover:bg-amber-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
