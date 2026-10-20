import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'
import { routes, notFoundRoute } from './routes'

export { routes, notFoundRoute }

export function render(pathname: string) {
  return renderToString(
    <StrictMode>
      <App pathname={pathname} />
    </StrictMode>,
  )
}
