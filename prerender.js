import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')

// Check if SSR build exists
const ssrPath = toAbsolute('./dist/server/entry-server.js')
if (!fs.existsSync(ssrPath)) {
  console.error('❌ SSR build not found. Run "npm run build:ssr" first.')
  process.exit(1)
}

const { render } = await import('./dist/server/entry-server.js')

// Define all routes to prerender
const routesToPrerender = [
  '/', '/about', '/services', '/portfolio', '/contact',
  '/blog', '/blog/budgeting-tile-project-portland', '/blog/fix-cracked-grout',
  '/blog/waterproofing-before-tile', '/blog/tile-trends-portland',
  '/blog/best-tile-stores-portland', '/blog/choosing-tile-contractor-portland',
  '/tile-installation-portland', '/tile-contractor-beaverton',
  '/tile-contractor-tigard', '/tile-contractor-gresham',
  '/tile-contractor-lake-oswego', '/quote'
]

// Helper to ensure folder path exists
const ensureDirectoryExists = (filePath) => {
  const dir = path.dirname(filePath)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
}

;(async () => {
  for (const route of routesToPrerender) {
    try {
      const { appHtml, headHtml } = render(route)

      // Inject both content and head into template
      let html = template
        .replace(`<!--app-html-->`, appHtml)
        .replace('</head>', `${headHtml}</head>`)

      // Create file path: e.g., dist/about/index.html
      const filePath = toAbsolute(`dist${route === '/' ? '/index' : `${route}/index`}.html`)
      ensureDirectoryExists(filePath)

      fs.writeFileSync(filePath, html)
      console.log('✅ Pre-rendered:', filePath)
    } catch (error) {
      console.error(`❌ Failed to prerender ${route}:`, error)
    }
  }
})()
