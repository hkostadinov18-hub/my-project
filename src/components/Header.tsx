import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Начало" },
  { href: "/catalog", label: "Продукти" },
  { href: "/wholesale", label: "На едро" },
  { href: "/contacts", label: "Контакти" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-amber-200 bg-amber-50/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Пекарна Делиция"
            width={44}
            height={44}
            className="rounded-full"
            priority
          />
          <span className="font-serif text-xl font-bold tracking-tight text-amber-900">
            Пекарна Делиция
          </span>
        </Link>
        <nav className="hidden gap-8 sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-amber-900/80 transition-colors hover:text-amber-700"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <a
          href="tel:+359888000000"
          className="hidden rounded-full bg-amber-700 px-4 py-2 text-sm font-semibold text-amber-50 transition-colors hover:bg-amber-800 sm:inline-block"
        >
          Обади се
        </a>
      </div>
      <nav className="flex justify-center gap-6 border-t border-amber-200 bg-amber-50 py-2 sm:hidden">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-xs font-medium text-amber-900/80 hover:text-amber-700"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
