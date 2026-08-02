import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Пекарна Делиция | Закуски на едро и дребно",
  description:
    "Пекарна Делиция предлага пресни закуски, баници, кроасани, сандвичи и сладки — на дребно за клиенти и на едро за бизнеси в София.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bg" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-amber-50 font-sans text-amber-950">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
