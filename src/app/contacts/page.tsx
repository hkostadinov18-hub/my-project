import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Контакти | Пекарна Делиция",
  description: "Свържете се с Пекарна Делиция за поръчки на дребно и на едро.",
};

const info = [
  { icon: "📍", label: "Адрес", value: "ул. „Розова долина“ 12, София" },
  { icon: "📞", label: "Телефон", value: "+359 89 5022742" },
  { icon: "✉️", label: "Имейл", value: "poruchki@pekarna-delicia.bg" },
];

const hours = [
  { day: "Понеделник – Петък", time: "06:30 – 19:00" },
  { day: "Събота", time: "07:00 – 18:00" },
  { day: "Неделя", time: "07:00 – 14:00" },
];

export default function ContactsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="text-center">
        <h1 className="font-serif text-4xl font-bold text-amber-950">Свържете се с нас</h1>
        <p className="mt-3 text-amber-900/70">
          Отговаряме бързо на запитвания за поръчки на дребно и на едро.
        </p>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col gap-8">
          <div className="rounded-2xl border border-amber-200 bg-white p-6">
            <h2 className="font-serif text-xl font-bold text-amber-950">Информация за контакт</h2>
            <ul className="mt-4 space-y-3">
              {info.map((item) => (
                <li key={item.value} className="flex items-center gap-3 text-amber-900/80">
                  <span className="text-xl">{item.icon}</span>
                  <span>
                    <span className="font-semibold text-amber-950">{item.label}: </span>
                    {item.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-amber-200 bg-white p-6">
            <h2 className="font-serif text-xl font-bold text-amber-950">Работно време</h2>
            <ul className="mt-4 space-y-2">
              {hours.map((h) => (
                <li key={h.day} className="flex justify-between text-amber-900/80">
                  <span>{h.day}</span>
                  <span className="font-semibold text-amber-950">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-2xl border border-amber-200 bg-white p-6">
          <h2 className="font-serif text-xl font-bold text-amber-950">Изпратете запитване</h2>
          <p className="mt-1 text-sm text-amber-900/70">
            Попълнете формата и ще отворим имейл с попълнените данни към нас.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
