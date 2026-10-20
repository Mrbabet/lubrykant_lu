export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-[var(--color-bg)] px-6 pt-32 pb-24 text-center">
      <div>
        <span className="mb-4 inline-block text-xs font-semibold tracking-[0.25em] text-[var(--color-gold)] uppercase">
          Błąd 404
        </span>
        <h1 className="font-heading text-4xl font-bold text-white md:text-6xl">Nie ma takiej strony</h1>
        <p className="mt-6 text-lg text-white/70">Strona mogła zostać przeniesiona lub adres jest błędny.</p>
        <a
          href="/"
          className="mt-10 inline-block bg-[var(--color-gold)] px-8 py-4 text-sm font-semibold tracking-widest text-black uppercase transition-colors hover:bg-[var(--color-gold-hover)]"
        >
          Strona główna
        </a>
      </div>
    </section>
  )
}
