import logoSrc from '../assets/LU.webp'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[var(--color-bg-elevated)] pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-4 lg:gap-16">
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
            <h4 className="mb-6 font-bold text-white uppercase tracking-widest">Sklep</h4>
            <ul className="space-y-4 text-white/60">
              <li>
                <a href="#kolekcja" className="transition-colors hover:text-[var(--color-gold)]">
                  Kolekcja
                </a>
              </li>
              <li>
                <a href="#kolekcja" className="transition-colors hover:text-[var(--color-gold)]">
                  LU Wodny
                </a>
              </li>
              <li>
                <a href="#kolekcja" className="transition-colors hover:text-[var(--color-gold)]">
                  LU Silikonowy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-bold text-white uppercase tracking-widest">Informacje</h4>
            <ul className="space-y-4 text-white/60">
              <li>
                <a href="#historia" className="transition-colors hover:text-[var(--color-gold)]">
                  O nas
                </a>
              </li>
              <li>
                <a href="#skladniki" className="transition-colors hover:text-[var(--color-gold)]">
                  Składniki
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-[var(--color-gold)]">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-[var(--color-gold)]">
                  Wysyłka i zwroty
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-bold text-white uppercase tracking-widest">Kontakt</h4>
            <ul className="space-y-4 text-white/60">
              <li>
                <a href="mailto:kontakt@lubrykant-lu.pl" className="transition-colors hover:text-[var(--color-gold)]">
                  kontakt@lubrykant-lu.pl
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-[var(--color-gold)]">
                  Polityka prywatności
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-[var(--color-gold)]">
                  Regulamin
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-white/40">
            &copy; 2026 LU — Lubrykant Premium. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-white/40 transition-colors hover:text-[var(--color-gold)]" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="#" className="text-white/40 transition-colors hover:text-[var(--color-gold)]" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" className="text-white/40 transition-colors hover:text-[var(--color-gold)]" aria-label="TikTok">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
