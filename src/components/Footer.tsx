import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-amber-200 bg-amber-900 text-amber-100">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Пекарна Делиция"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-serif text-lg font-bold">Пекарна Делиция</span>
          </div>
          <p className="mt-3 text-sm text-amber-200/80">
            Пресни закуски всеки ден — на дребно за клиенти и на едро за бизнеси.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-amber-300">
            Контакти
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-amber-200/80">
            <li>
              <a href="tel:+359888000000" className="hover:text-amber-50">
                +359 888 000 000
              </a>
            </li>
            <li>
              <a href="mailto:poruchki@pekarna-delicia.bg" className="hover:text-amber-50">
                poruchki@pekarna-delicia.bg
              </a>
            </li>
            <li>ул. „Розова долина“ 12, София</li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-amber-300">
            Работно време
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-amber-200/80">
            <li>Понеделник – Петък: 06:30 – 19:00</li>
            <li>Събота: 07:00 – 18:00</li>
            <li>Неделя: 07:00 – 14:00</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-amber-800 py-4 text-center text-xs text-amber-300/70">
        © {new Date().getFullYear()} Пекарна Делиция. Всички права запазени.
      </div>
    </footer>
  );
}
