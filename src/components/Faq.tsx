import { Plus } from 'lucide-react'

// Answers are based on the product descriptions at drogeria.biz — keep them in sync.
const faqs = [
  {
    q: 'Czym różni się LU Wodny od LU Silikonowego?',
    a: 'LU Wodny to lekki, bezzapachowy żel na bazie wody — łatwo się zmywa, nie plami i nie zostawia śladów na bieliźnie. LU Silikonowy jest bardziej śliski i znacznie trwalszy: wystarczy niewielka ilość, nie trzeba go ponownie nakładać, a woda go nie zmywa.',
  },
  {
    q: 'Czy LU można stosować z prezerwatywami?',
    a: 'Tak. Obie wersje LU można stosować z prezerwatywami lateksowymi.',
  },
  {
    q: 'Czy LU nadaje się do gadżetów erotycznych?',
    a: 'Do gadżetów wykonanych z silikonu wybierz LU Wodny. Lubrykantów na bazie silikonu, w tym LU Silikonowego, nie stosuje się z silikonowymi gadżetami.',
  },
  {
    q: 'Czy mogę używać LU pod prysznicem lub w wannie?',
    a: 'Tak — LU Silikonowy nie zmywa się szybko wodą, dlatego świetnie sprawdza się pod prysznicem i w wannie.',
  },
  {
    q: 'Jak zmyć LU?',
    a: 'LU Wodny zmyjesz samą wodą. LU Silikonowy jest odporny na wodę — do jego usunięcia użyj wody z mydłem.',
  },
  {
    q: 'Czy LU jest odpowiedni dla wrażliwej skóry?',
    a: 'LU jest przebadany dermatologicznie i hipoalergiczny. Unikaj kontaktu żelu z oczami, uszkodzoną skórą i ranami.',
  },
  {
    q: 'Jaki jest skład LU?',
    a: 'LU Wodny: Aqua, Propanediol, Polyquaternium-10, Sodium Benzoate, Potassium Sorbate. LU Silikonowy: Cyclopentasiloxane, Dimethiconol, Dimethicone.',
  },
  {
    q: 'Czy LU działa antykoncepcyjnie?',
    a: 'Nie. LU nie jest środkiem antykoncepcyjnym i nie zawiera substancji plemnikobójczych.',
  },
  {
    q: 'Gdzie mogę kupić LU?',
    a: 'LU to produkt polski. Zamówienia realizuje sklep drogeria.biz — przejdź do sekcji Kolekcja i wybierz swoją wersję.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function Faq() {
  return (
    <section className="bg-[var(--color-bg)] py-24 md:py-32" id="faq">
      <div className="mx-auto max-w-3xl px-6">
        <div className="reveal mb-16 text-center">
          <span className="mb-4 inline-block text-xs font-semibold tracking-[0.25em] text-[var(--color-gold)] uppercase">
            FAQ
          </span>
          <h2 className="font-heading text-3xl leading-tight font-bold text-white md:text-5xl">
            Najczęstsze pytania
          </h2>
        </div>

        <div className="reveal divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
          {faqs.map((f) => (
            <details key={f.q} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left font-heading text-xl font-bold text-white transition-colors hover:text-[var(--color-gold)] [&::-webkit-details-marker]:hidden">
                {f.q}
                <Plus className="h-5 w-5 shrink-0 text-[var(--color-gold)] transition-transform duration-300 group-open:rotate-45" />
              </summary>
              <p className="mt-4 leading-relaxed text-white/70">{f.a}</p>
            </details>
          ))}
        </div>
      </div>

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </section>
  )
}
