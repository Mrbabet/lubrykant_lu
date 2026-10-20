import { useEffect, useState } from 'react'
import { products, formatPrice, withUtm } from '../data/products'

const buttonBase =
  'flex-1 whitespace-nowrap px-2 py-3 text-center text-xs font-semibold tracking-wider uppercase transition-colors'
const primary = `${buttonBase} bg-[var(--color-gold)] text-black hover:bg-[var(--color-gold-hover)]`
const secondary = `${buttonBase} border border-[var(--color-gold)] text-[var(--color-gold)]`

/** Buy bar pinned to the bottom of the screen on phones, shown once the visitor scrolls past the hero. */
export default function MobileBuyBar({ pathname }: { pathname: string }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const path = pathname.replace(/\/+$/, '') || '/'
  const product = products.find((p) => `/${p.slug}` === path)

  let content
  if (product) {
    content = (
      <a href={withUtm(product.shopUrl, 'pasek-mobilny')} target="_blank" rel="noopener noreferrer" className={primary}>
        Kup {product.name} — {formatPrice(product.price)}
      </a>
    )
  } else if (path === '/') {
    content = products.map((p) => (
      <a
        key={p.slug}
        href={withUtm(p.shopUrl, 'pasek-mobilny')}
        target="_blank"
        rel="noopener noreferrer"
        className={p.highlight ? primary : secondary}
      >
        {p.shortName} · {formatPrice(p.price)}
      </a>
    ))
  } else if (path.startsWith('/poradnik/')) {
    content = (
      <a href="/#kolekcja" className={primary}>
        Wybierz swój LU
      </a>
    )
  } else {
    return null
  }

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-30 border-t border-white/10 bg-[var(--color-bg)]/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md transition-transform duration-300 md:hidden ${
        visible ? 'translate-y-0' : 'pointer-events-none translate-y-full'
      }`}
      aria-hidden={!visible}
    >
      <div className="flex gap-3">{content}</div>
    </div>
  )
}
