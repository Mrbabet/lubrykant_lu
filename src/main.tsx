import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import '@fontsource/pragati-narrow/400.css'
import '@fontsource/pragati-narrow/700.css'
import './index.css'
import App from './App'
import { matchRoute } from './routes'

const container = document.getElementById('root')!
const app = (
  <StrictMode>
    <App pathname={location.pathname} />
  </StrictMode>
)

// Production pages are prerendered (scripts/prerender.mjs); the dev server is not.
if (container.hasChildNodes()) {
  hydrateRoot(container, app)
} else {
  document.title = matchRoute(location.pathname).title
  createRoot(container).render(app)
}
