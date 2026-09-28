export default function Newsletter() {
  return (
    <section className="bg-[var(--color-bg)] py-24 md:py-32" id="kontakt">
      <div className="reveal mx-auto max-w-2xl px-6 text-center">
        <span className="mb-4 inline-block text-xs font-semibold tracking-[0.25em] text-[var(--color-gold)] uppercase">
          Bądź na bieżąco
        </span>
        <h2 className="font-heading text-3xl leading-tight font-bold text-white md:text-5xl">
          Dołącz do świata LU.
        </h2>
        <p className="mt-6 mb-10 text-lg text-white/70">
          Zapisz się do naszego newslettera i otrzymaj 10% rabatu na pierwsze zamówienie oraz
          ekskluzywny dostęp do premier i limitowanych edycji.
        </p>

        <form
          className="flex w-full flex-col gap-4 sm:flex-row"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Twój adres e-mail"
            required
            className="flex-1 border border-white/20 bg-white/5 px-6 py-4 text-white placeholder-white/40 focus:border-[var(--color-gold)] focus:outline-none"
          />
          <button
            type="submit"
            className="bg-[var(--color-gold)] px-8 py-4 font-semibold tracking-widest text-black uppercase transition-colors hover:bg-[var(--color-gold-hover)]"
          >
            Zapisz się
          </button>
        </form>
      </div>
    </section>
  )
}
