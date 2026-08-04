import Image from "next/image";
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
      <section className="relative overflow-hidden bg-[#f7f2e7] px-6 py-24 sm:py-28">
        <div className="pointer-events-none absolute left-[3%] top-20 hidden -rotate-6 lg:block">
          <Image
            src="/products/solenka.jpg"
            alt=""
            width={110}
            height={110}
            className="rounded-2xl border-4 border-white object-cover shadow-xl"
          />
        </div>
        <div className="pointer-events-none absolute right-[4%] top-12 hidden rotate-6 lg:block">
          <Image
            src="/products/pizza-parche.jpg"
            alt=""
            width={130}
            height={130}
            className="rounded-full border-4 border-white object-cover shadow-xl"
          />
        </div>
        <div className="pointer-events-none absolute bottom-16 left-[10%] hidden rotate-3 xl:block">
          <Image
            src="/products/krenvirshka.jpg"
            alt=""
            width={120}
            height={90}
            className="rounded-2xl border-4 border-white object-cover shadow-xl"
          />
        </div>

        <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <span className="rounded-full border border-amber-950/20 px-4 py-1 text-sm font-medium text-amber-950/70">
            Закуски на едро и дребно
          </span>
          <h1 className="font-serif text-5xl font-semibold leading-[1.1] text-amber-950 sm:text-6xl">
            Прясно изпечено.
            <br />
            За вашата трапеза.
          </h1>
          <p className="max-w-lg text-lg text-amber-950/60">
            Домашни баници, соленки и пица, приготвени всеки ден с грижа.
            Купете на място или направете запитване за доставка на едро.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/catalog"
              className="rounded-full bg-amber-950 px-6 py-3 text-sm font-medium text-amber-50 transition-colors hover:bg-amber-900"
            >
              Разгледай продуктите
            </Link>
            <Link
              href="/wholesale"
              className="rounded-full border border-amber-950/30 px-6 py-3 text-sm font-medium text-amber-950 transition-colors hover:bg-amber-950/5"
            >
              Запитване за едро
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-20 flex max-w-4xl flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-amber-950/10 pt-8 text-sm text-amber-950/60">
          <span>🕐 Пон–Съб: 06:30–19:00</span>
          <span className="hidden sm:inline">·</span>
          <span>📦 Доставки на едро</span>
          <span className="hidden sm:inline">·</span>
          <span>🌾 Прясно всяка сутрин</span>
          <span className="hidden sm:inline">·</span>
          <span>📍 София</span>
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
