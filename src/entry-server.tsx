// SSR-only entry used by scripts/prerender.mjs; never hot-reloaded, so the
// fast-refresh export rule does not apply.
/* oxlint-disable react/only-export-components */
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'
import { routes, notFoundRoute } from './routes'
import { SITE_URL, DEFAULT_OG_IMAGE } from './site'

export { routes, notFoundRoute, SITE_URL, DEFAULT_OG_IMAGE }

export function render(pathname: string) {
  return renderToString(
    <StrictMode>
      <App pathname={pathname} />
    </StrictMode>,
  )
}
