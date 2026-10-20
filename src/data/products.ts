import { SITE_URL } from '../site'

// Product facts come from the drogeria.biz product pages — keep them in sync.

export type Product = {
  slug: string
  name: string
  shortName: string
  volume: string
  price: number
  image: string
  alt: string
  shopUrl: string
  highlight: boolean
  lead: string
  inci: string[]
  benefits: string[]
  usage: string[]
  notes: string[]
}

export const products: Product[] = [
  {
    slug: 'lubrykant-wodny',
    name: 'LU Wodny',
    shortName: 'Wodny',
    volume: '30 ml',
    price: 39.99,
    image: '/images/LU/packshot-1.jpg',
    alt: 'LU Wodny — 30 ml butelka lubrykantu na bazie wody',
    shopUrl: 'https://drogeria.biz/pl/p/LUBRYKANT-LU-WODNY-ZEL-INTYMNY-LU-W-30-ML/76',
    highlight: false,
    lead: 'Lekki, bezzapachowy żel intymny na bazie wody. Daje naturalne nawilżenie, łatwo się zmywa i nie zostawia śladów na bieliźnie.',
    inci: ['Aqua', 'Propanediol', 'Polyquaternium-10', 'Sodium Benzoate', 'Potassium Sorbate'],
    benefits: [
      'Bezzapachowy, bez substancji oleistych',
      'Można stosować z prezerwatywami lateksowymi',
      'Łatwo zmywa się wodą, nie plami',
      'Przebadany dermatologicznie i hipoalergiczny',
      'Poręczna butelka 30 ml z precyzyjnym dozownikiem — zmieści się w torebce',
    ],
    usage: [
      'podczas stosunku',
      'przy badaniach ginekologicznych',
      'na co dzień — przy uczuciu suchości, otarciach w podróży czy podczas jazdy na rowerze',
    ],
    notes: [],
  },
  {
    slug: 'lubrykant-silikonowy',
    name: 'LU Silikonowy',
    shortName: 'Silikonowy',
    volume: '30 ml',
    price: 59.99,
    image: '/images/LU/packshot-2.jpg',
    alt: 'LU Silikonowy — 30 ml butelka lubrykantu na bazie silikonu',
    shopUrl: 'https://drogeria.biz/pl/p/LUBRYKANT-LU-SILIKONOWY-ZEL-INTYMNY-LU-S-30-ML/75',
    highlight: true,
    lead: 'Jedwabisty żel na bazie silikonu — bardziej śliski i dużo trwalszy niż lubrykanty wodne. Wystarczy niewielka ilość, bez potrzeby ponownej aplikacji.',
    inci: ['Cyclopentasiloxane', 'Dimethiconol', 'Dimethicone'],
    benefits: [
      'Długotrwały poślizg — nie trzeba przerywać, by nałożyć ponownie',
      'Nie zmywa się wodą — sprawdza się pod prysznicem i w wannie',
      'Nie zostawia lepkiej ani mokrej skóry, tylko cienki, gładki film',
      'Można stosować z prezerwatywami',
      'Przebadany dermatologicznie i hipoalergiczny',
    ],
    usage: [
      'podczas stosunku, także analnego',
      'przy uczuciu suchości',
      'jako baza do masażu',
      'przy otarciach ud',
    ],
    notes: [
      'Nie stosuj z gadżetami wykonanymi z silikonu — do nich wybierz LU Wodny.',
      'Do zmycia użyj wody z mydłem.',
    ],
  },
]

/**
 * Adds UTM tags so drogeria.biz analytics can attribute orders to this site.
 * `placement` says which button was clicked (shows up as utm_content).
 */
export const withUtm = (url: string, placement: string) => {
  const u = new URL(url)
  u.searchParams.set('utm_source', 'lubrykantlu')
  u.searchParams.set('utm_medium', 'referral')
  u.searchParams.set('utm_campaign', 'strona-marki')
  u.searchParams.set('utm_content', placement)
  return u.toString()
}

export const formatPrice = (price: number) =>
  `${price.toFixed(2).replace('.', ',')} zł`

export const productJsonLd = (p: Product) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: `Lubrykant ${p.name} ${p.volume}`,
  brand: { '@type': 'Brand', name: 'LU' },
  image: `${SITE_URL}${p.image}`,
  url: `${SITE_URL}/${p.slug}`,
  description: p.lead,
  countryOfOrigin: 'PL',
  offers: {
    '@type': 'Offer',
    url: p.shopUrl,
    price: p.price.toFixed(2),
    priceCurrency: 'PLN',
    availability: 'https://schema.org/InStock',
    seller: { '@type': 'Organization', name: 'drogeria.biz' },
  },
})
