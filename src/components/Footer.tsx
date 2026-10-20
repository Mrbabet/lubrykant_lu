import { withUtm } from '../data/products'
import logoSrc from '../assets/LU.webp'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[var(--color-bg-elevated)] pt-20 pb-28 md:pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-3 lg:gap-16">
          <div className="col-span-1">
            <div className="mb-6">
              <img src={logoSrc} alt="LU Logo" className="h-16 w-auto object-contain" />
            </div>
            <p className="text-white/60 leading-relaxed">
              Luksusowy lubrykant intymny premium. Stworzone z pasji do piękna i komfortu. Poczuj
              więcej, poczuj lepiej.
            </p>
          </div>

          <div>
            <h3 className="mb-6 font-bold text-white uppercase tracking-widest">Sklep</h3>
            <ul className="space-y-4 text-white/60">
              <li>
                <a href="/#kolekcja" className="transition-colors hover:text-[var(--color-gold)]">
                  Kolekcja
                </a>
              </li>
              <li>
                <a href="/lubrykant-wodny" className="transition-colors hover:text-[var(--color-gold)]">
                  LU Wodny
                </a>
              </li>
              <li>
                <a href="/lubrykant-silikonowy" className="transition-colors hover:text-[var(--color-gold)]">
                  LU Silikonowy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 font-bold text-white uppercase tracking-widest">Informacje</h3>
            <ul className="space-y-4 text-white/60">
              <li>
                <a href="/#historia" className="transition-colors hover:text-[var(--color-gold)]">
                  O nas
                </a>
              </li>
              <li>
                <a href="/#skladniki" className="transition-colors hover:text-[var(--color-gold)]">
                  Składniki
                </a>
              </li>
              <li>
                <a href="/#faq" className="transition-colors hover:text-[var(--color-gold)]">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/poradnik/lubrykant-wodny-czy-silikonowy" className="transition-colors hover:text-[var(--color-gold)]">
                  Wodny czy silikonowy?
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-white/40">
            &copy; 2026 LU — Lubrykant Premium. Wszelkie prawa zastrzeżone.
          </p>
          <p className="text-sm text-white/40">
            Sprzedaż prowadzi{' '}
            <a
              href={withUtm('https://drogeria.biz/', 'stopka')}
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition-colors hover:text-[var(--color-gold)]"
            >
              drogeria.biz
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
