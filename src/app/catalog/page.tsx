import type { Metadata } from "next";
import CatalogClient from "./CatalogClient";

export const metadata: Metadata = {
  title: "Продукти | Пекарна Делиция",
  description: "Разгледайте пълния каталог с баници, кроасани, сандвичи и сладки на дребно и на едро.",
};

export default function CatalogPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="text-center">
        <h1 className="font-serif text-4xl font-bold text-amber-950">Нашите продукти</h1>
        <p className="mt-3 text-amber-900/70">
          Цените на едро важат при поръчка на минималното посочено количество.
        </p>
      </div>
      <div className="mt-10">
        <CatalogClient />
      </div>
    </div>
  );
}
