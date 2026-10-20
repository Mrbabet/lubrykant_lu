// Renders every route to static HTML in dist/ so search engines get full content
// without running JavaScript. Runs after `vite build` and the SSR build.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const ssrDir = path.join(root, 'dist-ssr')

const { render, routes, notFoundRoute, SITE_URL, DEFAULT_OG_IMAGE } = await import(path.join(ssrDir, 'entry-server.js'))
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')

const escape = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

function headTags(route, { indexable }) {
  const url = SITE_URL + route.path
  const image = SITE_URL + (route.image ?? DEFAULT_OG_IMAGE)
  return [
    indexable
      ? `<link rel="canonical" href="${url}" />`
      : '<meta name="robots" content="noindex" />',
    indexable && `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${image}" />`,
    '<meta property="og:image:width" content="1600" />',
    '<meta property="og:image:height" content="900" />',
    '<meta property="og:locale" content="pl_PL" />',
    '<meta property="og:site_name" content="LU" />',
    '<meta name="twitter:card" content="summary_large_image" />',
  ]
    .filter(Boolean)
    .map((tag) => `    ${tag}\n`)
    .join('')
}

function page(route, { indexable = true } = {}) {
  const title = escape(route.title)
  const description = escape(route.description)
  return template
    .replace('  </head>', `${headTags(route, { indexable })}  </head>`)
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
fs.writeFileSync(path.join(dist, '404.html'), page(notFoundRoute, { indexable: false }))
console.log('prerendered 404.html')

const lastmod = new Date().toISOString().slice(0, 10)
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((r) => `  <url><loc>${SITE_URL}${r.path}</loc><lastmod>${lastmod}</lastmod></url>`).join('\n')}
</urlset>
`
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap)
console.log('wrote sitemap.xml')

fs.rmSync(ssrDir, { recursive: true, force: true })
