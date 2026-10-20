// Renders every route to static HTML in dist/ so search engines get full content
// without running JavaScript. Runs after `vite build` and the SSR build.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const ssrDir = path.join(root, 'dist-ssr')

const { render, routes, notFoundRoute } = await import(path.join(ssrDir, 'entry-server.js'))
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')

const escape = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

function page(route) {
  const title = escape(route.title)
  const description = escape(route.description)
  return template
    .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
    .replace(/(<meta name="description" content=")[^"]*/, `$1${description}`)
    .replace(/(<meta property="og:title" content=")[^"]*/, `$1${title}`)
    .replace(/(<meta property="og:description" content=")[^"]*/, `$1${description}`)
    .replace('<div id="root"></div>', `<div id="root">${render(route.path)}</div>`)
}

for (const route of routes) {
  const file = path.join(dist, route.path === '/' ? '' : route.path, 'index.html')
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, page(route))
  console.log(`prerendered ${route.path}`)
}
fs.writeFileSync(path.join(dist, '404.html'), page(notFoundRoute))
console.log('prerendered 404.html')

fs.rmSync(ssrDir, { recursive: true, force: true })
