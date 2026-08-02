"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const mailtoHref = `mailto:poruchki@pekarna-delicia.bg?subject=${encodeURIComponent(
    `Запитване от ${name || "сайта"}`
  )}&body=${encodeURIComponent(
    `${message}\n\n---\nИме: ${name}\nИмейл за връзка: ${email}`
  )}`;

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = mailtoHref;
      }}
    >
      <div>
        <label htmlFor="name" className="text-sm font-semibold text-amber-900">
          Име
        </label>
        <input
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 w-full rounded-lg border border-amber-300 bg-white px-4 py-2 text-amber-950 focus:border-amber-600 focus:outline-none"
          placeholder="Вашето име"
        />
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-semibold text-amber-900">
          Имейл
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 w-full rounded-lg border border-amber-300 bg-white px-4 py-2 text-amber-950 focus:border-amber-600 focus:outline-none"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-semibold text-amber-900">
          Съобщение
        </label>
        <textarea
          id="message"
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1 w-full rounded-lg border border-amber-300 bg-white px-4 py-2 text-amber-950 focus:border-amber-600 focus:outline-none"
          placeholder="Вашето запитване..."
        />
      </div>
      <button
        type="submit"
        className="rounded-full bg-amber-700 px-6 py-3 text-sm font-semibold text-amber-50 transition-colors hover:bg-amber-800"
      >
        Изпрати съобщение
      </button>
    </form>
  );
}
