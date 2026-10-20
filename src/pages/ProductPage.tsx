import { CheckCircle2, Info } from 'lucide-react'
import { products, formatPrice, productJsonLd, withUtm, type Product } from '../data/products'

export default function ProductPage({ product: p }: { product: Product }) {
  const other = products.find((o) => o.slug !== p.slug)

  return (
    <>
      <section className="bg-[var(--color-bg)] pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <nav aria-label="Ścieżka" className="mb-10 text-xs tracking-widest text-white/50 uppercase">
            <a href="/" className="transition-colors hover:text-[var(--color-gold)]">LU</a>
            <span className="mx-2">/</span>
            <a href="/#kolekcja" className="transition-colors hover:text-[var(--color-gold)]">Kolekcja</a>
            <span className="mx-2">/</span>
            <span className="text-white/80">{p.name}</span>
          </nav>

          <div className="grid items-start gap-16 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl bg-black/50">
              <img
                src={p.image}
                alt={p.alt}
                width={1600}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <span className="mb-4 inline-block text-xs font-semibold tracking-[0.25em] text-[var(--color-gold)] uppercase">
                Lubrykant {p.shortName.toLowerCase()} · {p.volume}
              </span>
              <h1 className="font-heading text-4xl leading-tight font-bold text-white md:text-6xl">
                {p.name}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/70">{p.lead}</p>
              <p className="mt-8 font-heading text-3xl text-[var(--color-gold)]">{formatPrice(p.price)}</p>
              <a
                href={withUtm(p.shopUrl, 'strona-produktu')}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block bg-[var(--color-gold)] px-10 py-4 text-sm font-semibold tracking-widest text-black uppercase transition-all hover:-translate-y-0.5 hover:bg-[var(--color-gold-hover)]"
              >
                Kup w drogeria.biz
              </a>

              <h2 className="mt-14 mb-6 font-heading text-2xl font-bold text-white">Dlaczego {p.name}</h2>
              <ul className="space-y-4">
                {p.benefits.map((b) => (
                  <li key={b} className="flex gap-4 text-white/70">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-gold)]" />
                    {b}
                  </li>
                ))}
              </ul>

              <h2 className="mt-12 mb-4 font-heading text-2xl font-bold text-white">Kiedy stosować</h2>
              <p className="text-white/70">
                {p.name} sprawdzi się {p.usage.join(', ')}.
              </p>

              <h2 className="mt-12 mb-4 font-heading text-2xl font-bold text-white">Skład (INCI)</h2>
              <p className="text-white/70">{p.inci.join(', ')}.</p>

              <h2 className="mt-12 mb-4 font-heading text-2xl font-bold text-white">Ważne</h2>
              <ul className="space-y-3 text-white/70">
                {[
                  ...p.notes,
                  'Unikaj kontaktu z oczami, uszkodzoną skórą i ranami.',
                  'Produkt nie jest środkiem antykoncepcyjnym i nie zawiera substancji plemnikobójczych.',
                ].map((n) => (
                  <li key={n} className="flex gap-4">
                    <Info className="mt-0.5 h-5 w-5 shrink-0 text-white/40" />
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-bg-card)] py-20">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <h2 className="font-heading text-2xl font-bold text-white">Nie wiesz, którą wersję wybrać?</h2>
            <p className="mt-2 text-white/70">Porównaj lubrykant wodny i silikonowy w naszym poradniku.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/poradnik/lubrykant-wodny-czy-silikonowy"
              className="border border-[var(--color-gold)] px-6 py-3 text-xs font-semibold tracking-widest text-[var(--color-gold)] uppercase transition-all hover:bg-[var(--color-gold)] hover:text-black"
            >
              Poradnik
            </a>
            {other && (
              <a
                href={`/${other.slug}`}
                className="border border-white/30 px-6 py-3 text-xs font-semibold tracking-widest text-white uppercase transition-all hover:border-white hover:bg-white hover:text-black"
              >
                Zobacz {other.name}
              </a>
            )}
          </div>
        </div>
      </section>

      <script type="application/ld+json">{JSON.stringify(productJsonLd(p))}</script>
    </>
  )
}
