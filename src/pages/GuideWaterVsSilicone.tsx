import { products } from '../data/products'
import { guideMeta } from '../data/guides'
import { SITE_URL, DEFAULT_OG_IMAGE } from '../site'

const rows: [string, string, string][] = [
  ['Baza', 'woda', 'silikon'],
  ['Trwałość poślizgu', 'krótsza — czasem trzeba dołożyć', 'długa — zwykle wystarcza jedna aplikacja'],
  ['Zmywanie', 'samą wodą', 'wodą z mydłem'],
  ['Pod prysznicem i w wannie', 'szybko się zmywa', 'tak — woda go nie zmywa'],
  ['Prezerwatywy lateksowe', 'tak', 'tak'],
  ['Gadżety z silikonu', 'tak', 'nie'],
  ['Odczucie na skórze', 'lekkie, naturalne', 'jedwabiste, gładki film'],
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: guideMeta.headline,
  description: guideMeta.description,
  datePublished: guideMeta.datePublished,
  author: { '@type': 'Organization', name: 'LU' },
  publisher: { '@type': 'Organization', name: 'LU' },
  inLanguage: 'pl',
  image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
  mainEntityOfPage: `${SITE_URL}/poradnik/lubrykant-wodny-czy-silikonowy`,
}

export default function GuideWaterVsSilicone() {
  const [water, silicone] = products

  return (
    <article className="bg-[var(--color-bg)] pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-3xl px-6">
        <nav aria-label="Ścieżka" className="mb-10 text-xs tracking-widest text-white/50 uppercase">
          <a href="/" className="transition-colors hover:text-[var(--color-gold)]">LU</a>
          <span className="mx-2">/</span>
          <span className="text-white/80">Poradnik</span>
        </nav>

        <span className="mb-4 inline-block text-xs font-semibold tracking-[0.25em] text-[var(--color-gold)] uppercase">
          Poradnik
        </span>
        <h1 className="font-heading text-4xl leading-tight font-bold text-white md:text-6xl">
          {guideMeta.headline}
        </h1>
        <p className="mt-8 text-lg leading-relaxed text-white/70">
          Lubrykanty dzielą się przede wszystkim ze względu na bazę. Najpopularniejsze są wodne
          i silikonowe — każdy z nich sprawdza się w innych sytuacjach. Poniżej porównujemy je
          punkt po punkcie, żeby łatwiej było wybrać ten właściwy.
        </p>

        <h2 className="mt-14 mb-6 font-heading text-3xl font-bold text-white">Porównanie w skrócie</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm text-white/70 md:text-base">
            <thead>
              <tr className="border-b border-white/20 text-white">
                <th scope="col" className="py-3 pr-4 font-semibold"></th>
                <th scope="col" className="py-3 pr-4 font-semibold">Wodny</th>
                <th scope="col" className="py-3 font-semibold">Silikonowy</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([label, w, s]) => (
                <tr key={label} className="border-b border-[var(--color-border)]">
                  <th scope="row" className="py-3 pr-4 font-semibold text-white">{label}</th>
                  <td className="py-3 pr-4">{w}</td>
                  <td className="py-3">{s}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="mt-14 mb-4 font-heading text-3xl font-bold text-white">Kiedy wybrać lubrykant wodny</h2>
        <div className="space-y-4 text-lg leading-relaxed text-white/70">
          <p>
            Lubrykant na bazie wody to najbardziej uniwersalny wybór. Jest lekki, daje uczucie
            naturalnego nawilżenia i bez problemu zmywa się samą wodą — nie plami pościeli ani
            bielizny.
          </p>
          <p>
            To także bezpieczna opcja do gadżetów erotycznych, w tym silikonowych, oraz do
            prezerwatyw lateksowych. Sprawdzi się też na co dzień, np. przy uczuciu suchości czy
            podczas badania ginekologicznego.
          </p>
          <p>
            Jego jedyną wadą jest mniejsza trwałość — przy dłuższym kontakcie woda odparowuje
            i czasem trzeba nałożyć go ponownie.
          </p>
        </div>

        <h2 className="mt-14 mb-4 font-heading text-3xl font-bold text-white">Kiedy wybrać lubrykant silikonowy</h2>
        <div className="space-y-4 text-lg leading-relaxed text-white/70">
          <p>
            Lubrykant silikonowy jest wyraźnie bardziej śliski i działa znacznie dłużej. Wystarczy
            niewielka ilość, a poślizg utrzymuje się bez przerywania i ponownej aplikacji. Nie
            wchłania się i nie jest lepki — zostawia na skórze cienki, gładki film.
          </p>
          <p>
            Ponieważ woda go nie zmywa, to najlepszy wybór pod prysznic i do wanny. Ze względu na
            trwałość często wybiera się go też do seksu analnego, gdzie brakuje naturalnego
            nawilżenia. Można go stosować z prezerwatywami.
          </p>
          <p>
            Pamiętaj tylko, by nie używać go z gadżetami wykonanymi z silikonu, a do zmycia
            sięgnąć po wodę z mydłem.
          </p>
        </div>

        <h2 className="mt-14 mb-4 font-heading text-3xl font-bold text-white">Na co jeszcze zwrócić uwagę</h2>
        <ul className="list-disc space-y-3 pl-6 text-lg leading-relaxed text-white/70">
          <li>
            <strong className="text-white">Skład.</strong> Im krótszy i bardziej przejrzysty, tym
            lepiej — szczególnie przy wrażliwej skórze.
          </li>
          <li>
            <strong className="text-white">Zapach i smak.</strong> Lubrykanty bezzapachowe
            rzadziej podrażniają.
          </li>
          <li>
            <strong className="text-white">Badania.</strong> Wybieraj produkty przebadane
            dermatologicznie.
          </li>
          <li>
            <strong className="text-white">Antykoncepcja.</strong> Lubrykant nie chroni przed
            ciążą ani infekcjami — nie zastępuje prezerwatywy.
          </li>
        </ul>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {[water, silicone].map((p) => (
            <a
              key={p.slug}
              href={`/${p.slug}`}
              className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8 transition-all hover:-translate-y-1 hover:border-[var(--color-gold)]"
            >
              <span className="text-xs font-semibold tracking-[0.25em] text-[var(--color-gold)] uppercase">
                {p.volume}
              </span>
              <h3 className="mt-2 font-heading text-2xl font-bold text-white">{p.name}</h3>
              <p className="mt-3 text-white/60">{p.lead}</p>
              <span className="mt-6 inline-block text-xs tracking-widest text-[var(--color-gold)] uppercase group-hover:underline">
                Zobacz produkt →
              </span>
            </a>
          ))}
        </div>

        <p className="mt-16 border-t border-[var(--color-border)] pt-6 text-sm text-white/40">
          Tekst ma charakter informacyjny. Jeśli suchość, podrażnienie lub dyskomfort utrzymują
          się, skonsultuj się z lekarzem.
        </p>
      </div>

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </article>
  )
}
