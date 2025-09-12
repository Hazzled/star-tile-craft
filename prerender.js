import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

const routesToPrerender = [
  '/', '/about', '/services', '/portfolio', '/contact', '/blog',
  '/blog/budgeting-tile-project-portland',
  '/blog/fix-cracked-grout',
  '/blog/waterproofing-before-tile',
  '/blog/tile-trends-portland',
  '/blog/best-tile-stores-portland',
  '/blog/choosing-tile-contractor-portland',
  '/tile-installation-portland',
  '/tile-contractor-beaverton',
  '/tile-contractor-tigard',
  '/tile-contractor-gresham',
  '/tile-contractor-lake-oswego',
  '/quote',
  // Add new routes here as needed
]

const ensureDirectoryExists = (filePath) => {
  const dir = path.dirname(filePath)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
}

;(async () => {
  for (const url of routesToPrerender) {
    try {
      const { appHtml, headHtml } = render(url)

      let html = template
        .replace('<!--app-html-->', appHtml)
        .replace('<!--head-tags-->', headHtml) // ✅ Correct injection

      const filePath = toAbsolute(url === '/' ? 'dist/index.html' : `dist${url}/index.html`)
      ensureDirectoryExists(filePath)
      fs.writeFileSync(filePath, html)
      console.log('✅ Pre-rendered:', filePath)
    } catch (error) {
      console.error(`❌ Failed to prerender ${url}:`, error)
    }
  }
})()
