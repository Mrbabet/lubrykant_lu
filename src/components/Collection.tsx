
export default function Collection() {
  const products = [
    {
      name: 'LU Wodny',
      price: '30 ml — 39,99 zł',
      image: './images/LU/packshot-1.jpg',
      alt: 'LU Wodny — 30ml butelka na bazie wody',
      highlight: false,
    },
    {
      name: 'LU Silikonowy',
      price: '30 ml — 59,99 zł',
      image: './images/LU/packshot-2.jpg',
      alt: 'LU Silikonowy — 30ml butelka na bazie silikonu',
      highlight: true,
    },
  ]

  return (
    <section className="bg-[var(--color-bg)] py-24 md:py-32" id="kolekcja">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mb-16 text-center">
          <span className="mb-4 inline-block text-xs font-semibold tracking-[0.25em] text-[var(--color-gold)] uppercase">
            Kolekcja
          </span>
          <h2 className="font-heading text-3xl leading-tight font-bold text-white md:text-5xl">
            Wybierz swoją bazę
          </h2>
          <p className="mt-4 text-white/70">
            Naturalna lekkość formuły wodnej czy jedwabista gładkość silikonowej? LU dostosowuje się do Ciebie.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {products.map((p, i) => (
            <div
              key={p.name}
              className={`reveal reveal-delay-${i + 1} group flex flex-col rounded-2xl bg-[var(--color-bg-card)] overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-white/5`}
            >
              <div className="aspect-[3/4] overflow-hidden bg-black/50">
                <img
                  src={p.image}
                  alt={p.alt}
                  className="h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col items-center p-8 text-center">
                <h3 className="font-heading text-2xl font-bold text-white">{p.name}</h3>
                <p className="mt-2 mb-8 text-[var(--color-gold)]">{p.price}</p>
                <a
                  href="https://drogeria.biz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full px-6 py-3 text-xs font-semibold tracking-widest uppercase transition-all ${
                    p.highlight
                      ? 'bg-[var(--color-gold)] text-black hover:bg-[var(--color-gold-hover)]'
                      : 'border border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-black'
                  }`}
                >
                  Dodaj do koszyka
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
