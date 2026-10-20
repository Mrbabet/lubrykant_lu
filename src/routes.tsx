import type { ReactNode } from 'react'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'
import GuideWaterVsSilicone from './pages/GuideWaterVsSilicone'
import { guideMeta } from './data/guides'
import NotFound from './pages/NotFound'
import { products } from './data/products'

export type Route = {
  path: string
  title: string
  description: string
  element: ReactNode
}

export const routes: Route[] = [
  {
    path: '/',
    title: 'LU — Poczuj Więcej | Luksusowy Lubrykant Intymny',
    description:
      'LU — polski lubrykant intymny premium na bazie wody lub silikonu. Przebadany dermatologicznie, hipoalergiczny, bezzapachowy. Poczuj więcej.',
    element: <Home />,
  },
  ...products.map((p) => ({
    path: `/${p.slug}`,
    title: `Lubrykant ${p.name} ${p.volume} — skład i cena | LU`,
    description: p.lead,
    element: <ProductPage product={p} />,
  })),
  {
    path: '/poradnik/lubrykant-wodny-czy-silikonowy',
    title: guideMeta.title,
    description: guideMeta.description,
    element: <GuideWaterVsSilicone />,
  },
]

export const notFoundRoute: Route = {
  path: '/404',
  title: 'Nie znaleziono strony | LU',
  description: 'Ta strona nie istnieje.',
  element: <NotFound />,
}

export function matchRoute(pathname: string): Route {
  const path = pathname.replace(/\/index\.html$/, '').replace(/\/+$/, '') || '/'
  return routes.find((r) => r.path === path) ?? notFoundRoute
}
