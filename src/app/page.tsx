import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const featured = products.filter((p) => p.featured);

const features = [
  {
    icon: "🌅",
    title: "Прясно всяка сутрин",
    text: "Печем от рано сутрин, за да получите винаги топли и хрупкави закуски.",
  },
  {
    icon: "📦",
    title: "Доставки на едро",
    text: "Редовни доставки за кафенета, офиси и магазини с изгодни цени за количество.",
  },
  {
    icon: "❤️",
    title: "Традиционни рецепти",
    text: "Домашни рецепти с качествени съставки, без изкуствени добавки.",
  },
];

export default function Home() {
  return (
    <div>
      <section className="bg-gradient-to-b from-amber-100 to-amber-50 px-6 py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
          <span className="rounded-full bg-amber-200 px-4 py-1 text-sm font-semibold text-amber-800">
            Закуски на едро и дребно
          </span>
          <h1 className="max-w-2xl font-serif text-4xl font-bold text-amber-950 sm:text-5xl">
            Пресни закуски от Пекарна Делиция
          </h1>
          <p className="max-w-xl text-lg text-amber-900/80">
            Баници, кроасани, сандвичи и сладки — приготвени всеки ден с грижа.
            Поръчвайте на дребно за вкъщи или на едро за вашия бизнес.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/catalog"
              className="rounded-full bg-amber-700 px-6 py-3 text-sm font-semibold text-amber-50 transition-colors hover:bg-amber-800"
            >
              Разгледай продуктите
            </Link>
            <Link
              href="/wholesale"
              className="rounded-full border border-amber-700 px-6 py-3 text-sm font-semibold text-amber-800 transition-colors hover:bg-amber-100"
            >
              Поръчки на едро
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 sm:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-amber-200 bg-white p-6 text-center shadow-sm"
            >
              <div className="text-4xl">{f.icon}</div>
              <h3 className="mt-4 font-serif text-lg font-bold text-amber-950">{f.title}</h3>
              <p className="mt-2 text-sm text-amber-900/70">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center gap-2 text-center">
            <h2 className="font-serif text-3xl font-bold text-amber-950">Любими продукти</h2>
            <p className="text-amber-900/70">Малка част от нашето разнообразие</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              href="/catalog"
              className="rounded-full bg-amber-700 px-6 py-3 text-sm font-semibold text-amber-50 transition-colors hover:bg-amber-800"
            >
              Виж целия каталог
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-amber-900 px-6 py-16 text-amber-50">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center">
          <h2 className="font-serif text-3xl font-bold">Имате бизнес?</h2>
          <p className="max-w-xl text-amber-100/90">
            Доставяме закуски на едро за кафенета, офиси, столове и магазини —
            с гъвкави количества и изгодни цени.
          </p>
          <Link
            href="/wholesale"
            className="rounded-full bg-amber-50 px-6 py-3 text-sm font-semibold text-amber-900 transition-colors hover:bg-amber-200"
          >
            Научи повече за доставки на едро
          </Link>
        </div>
      </section>
    </div>
  );
}
