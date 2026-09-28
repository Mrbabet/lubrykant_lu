import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import logoSrc from '../assets/LU.webp'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#o-produkcie', label: 'O produkcie' },
    { href: '#kolekcja', label: 'Kolekcja' },
    { href: '#skladniki', label: 'Składniki' },
    { href: '#opinie', label: 'Opinie' },
    { href: '#historia', label: 'O nas' },
  ]

  const closeMobile = () => setMobileOpen(false)

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[var(--color-bg)]/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
        }`}
        role="navigation"
        aria-label="Nawigacja główna"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <a href="#" className="flex items-center" aria-label="Strona główna">
            <img src={logoSrc} alt="LU Logo" className="h-12 w-auto object-contain" />
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm tracking-widest text-white/70 uppercase transition-colors hover:text-[var(--color-gold)]"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#kontakt"
                className="border border-[var(--color-gold)] px-5 py-2 text-xs font-semibold tracking-widest text-[var(--color-gold)] uppercase transition-all hover:bg-[var(--color-gold)] hover:text-black"
              >
                Kup teraz
              </a>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            className="text-white md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Zamknij menu' : 'Otwórz menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 bg-[var(--color-bg)]/98 backdrop-blur-lg md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={closeMobile}
              className="font-heading text-2xl tracking-widest text-white uppercase transition-colors hover:text-[var(--color-gold)]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={closeMobile}
            className="mt-4 bg-[var(--color-gold)] px-8 py-3 text-sm font-semibold tracking-widest text-black uppercase transition-colors hover:bg-[var(--color-gold-hover)]"
          >
            Kup teraz
          </a>
        </div>
      )}
    </>
  )
}
