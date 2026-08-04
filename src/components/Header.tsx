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
    <header className="sticky top-0 z-50 border-b border-amber-900/10 bg-[#f7f2e7]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Пекарна Делиция"
            width={40}
            height={40}
            className="rounded-full"
            priority
          />
          <span className="font-serif text-xl font-semibold tracking-tight text-amber-950">
            Пекарна Делиция
          </span>
        </Link>
        <nav className="hidden gap-9 sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-amber-950/70 transition-colors hover:text-amber-950"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <a
          href="tel:+359888000000"
          className="hidden items-center gap-1.5 rounded-full bg-amber-950 px-5 py-2.5 text-sm font-medium text-amber-50 transition-colors hover:bg-amber-900 sm:inline-flex"
        >
          Обади се
        </a>
      </div>
      <nav className="flex justify-center gap-6 border-t border-amber-900/10 bg-[#f7f2e7] py-2 sm:hidden">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-xs font-medium text-amber-950/70 hover:text-amber-950"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
