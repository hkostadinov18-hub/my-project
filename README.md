# Пекарна Делиция

Сайт на пекарна "Делиция" — закуски на едро и дребно. Изграден с Next.js (App Router), TypeScript и Tailwind CSS.

## Разработка

```bash
npm install
npm run dev
```

Отвори [http://localhost:3000](http://localhost:3000).

## Структура

- `src/app` — страници: начало, каталог (`/catalog`), на едро (`/wholesale`), контакти (`/contacts`)
- `src/components` — общи компоненти (Header, Footer, ProductCard)
- `src/data/products.ts` — статични данни за продуктите (име, категория, цена на дребно/едро)

Продуктите засега са статични данни в кода — лесно за редакция без нужда от база данни.

## Build

```bash
npm run build
npm run start
```
