export default function Lifestyle() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/couple-lifestyle.jpg"
          alt="Intymna chwila bliskości — dłonie splecione na jedwabnej pościeli"
          className="h-full w-full object-cover opacity-60"
          width={1400}
          height={788}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="reveal relative z-10 mx-auto max-w-2xl px-6 text-center">
        <span className="mb-4 inline-block text-xs font-semibold tracking-[0.25em] text-[var(--color-gold)] uppercase">
          Poczuj różnicę
        </span>
        <h2 className="font-heading text-4xl leading-tight font-bold text-white md:text-5xl">
          Komfort, który zmienia
          <br />
          wszystko.
        </h2>
        <p className="mt-6 mb-10 text-lg leading-relaxed text-white/90">
          Jedwabista konsystencja LU sprawia, że każdy dotyk staje się przyjemnością. Bez lepkości,
          bez nieprzyjemnych pozostałości — tylko naturalne odczucia wzmocnione o luksusową
          gładkość.
        </p>
        <a
          href="#kolekcja"
          className="border border-white/50 px-8 py-4 text-sm font-semibold tracking-widest text-white uppercase transition-all hover:border-white hover:bg-white hover:text-black"
        >
          Zobacz produkty
        </a>
      </div>
    </section>
  )
}
