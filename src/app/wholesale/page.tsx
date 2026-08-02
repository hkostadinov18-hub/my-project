import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "На едро | Пекарна Делиция",
  description: "Доставки на закуски на едро за кафенета, офиси, столове и магазини.",
};

const steps = [
  {
    title: "1. Свържете се с нас",
    text: "Обадете се или изпратете имейл с желаните продукти и количества.",
  },
  {
    title: "2. Изготвяме оферта",
    text: "Получавате персонална оферта според количеството и честотата на доставки.",
  },
  {
    title: "3. Редовни доставки",
    text: "Доставяме пресни закуски по договорен график — дневно, седмично или по поръчка.",
  },
];

const benefits = [
  "Изгодни цени при количество над минималния праг за всеки продукт",
  "Гъвкав график за доставка — ежедневно или по договорка",
  "Възможност за индивидуална рецептура и опаковка при по-големи поръчки",
  "Приоритетно обслужване за постоянни партньори",
];

export default function WholesalePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="text-center">
        <span className="rounded-full bg-amber-200 px-4 py-1 text-sm font-semibold text-amber-800">
          За бизнеси
        </span>
        <h1 className="mt-4 font-serif text-4xl font-bold text-amber-950">
          Доставки на едро
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-amber-900/70">
          Работим с кафенета, офиси, столове и магазини, като предлагаме пресни
          закуски на изгодни цени за количество. Всеки продукт в{" "}
          <Link href="/catalog" className="font-semibold text-amber-700 underline">
            каталога
          </Link>{" "}
          има посочена цена на едро и минимално количество.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-3">
        {steps.map((step) => (
          <div key={step.title} className="rounded-2xl border border-amber-200 bg-white p-6">
            <h3 className="font-serif text-lg font-bold text-amber-950">{step.title}</h3>
            <p className="mt-2 text-sm text-amber-900/70">{step.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 rounded-2xl bg-amber-900 p-8 text-amber-50">
        <h2 className="font-serif text-2xl font-bold">Предимства за партньори</h2>
        <ul className="mt-4 space-y-2">
          {benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-2 text-amber-100/90">
              <span>🥐</span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-14 flex flex-col items-center gap-4 rounded-2xl border border-amber-200 bg-white p-10 text-center">
        <h2 className="font-serif text-2xl font-bold text-amber-950">
          Готови за поръчка на едро?
        </h2>
        <p className="max-w-xl text-amber-900/70">
          Свържете се с нас за индивидуална оферта — отговаряме в рамките на работния ден.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="tel:+359888000000"
            className="rounded-full bg-amber-700 px-6 py-3 text-sm font-semibold text-amber-50 transition-colors hover:bg-amber-800"
          >
            Обадете се: +359 888 000 000
          </a>
          <a
            href="mailto:poruchki@pekarna-delicia.bg?subject=Запитване за поръчка на едро"
            className="rounded-full border border-amber-700 px-6 py-3 text-sm font-semibold text-amber-800 transition-colors hover:bg-amber-100"
          >
            Изпрати имейл запитване
          </a>
        </div>
      </div>
    </div>
  );
}
