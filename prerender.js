import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')

// Check if SSR build exists
const ssrPath = toAbsolute('./dist/server/entry-server.js')
if (!fs.existsSync(ssrPath)) {
  console.error('SSR build not found. Run "npm run build:ssr" first.')
  process.exit(1)
}

const { render } = await import('./dist/server/entry-server.js')

// Define routes to prerender based on App.tsx routing configuration
const routesToPrerender = [
  '/',           // Index page
  '/about',      // About page
  '/services',   // Services page
  '/portfolio',  // Portfolio page
  '/contact',    // Contact page
  '/blog',       // Blog page
  '/blog/budgeting-tile-project-portland', // Budgeting blog post
  '/blog/fix-cracked-grout', // Grout repair blog post
  '/blog/waterproofing-before-tile', // Waterproofing blog post
  '/blog/tile-trends-portland', // Tile trends blog post
  '/blog/best-tile-stores-portland', // Best tile stores blog post
  '/blog/choosing-tile-contractor-portland', // Choosing contractor blog post
  '/tile-installation-portland', // Portland location page
  '/tile-contractor-beaverton', // Beaverton location page
  '/tile-contractor-tigard', // Tigard location page
  '/tile-contractor-gresham', // Gresham location page
  '/tile-contractor-lake-oswego', // Lake Oswego location page
  '/quote',      // Landing page for ads
  // Add new routes here when adding new pages
]

// Function to ensure directory exists
const ensureDirectoryExists = (filePath) => {
  const dir = path.dirname(filePath)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
}

;(async () => {
  for (const url of routesToPrerender) {
    try {
      const { appHtml, headHtml } = render(url);
      let html = template.replace(`<!--app-html-->`, appHtml)
      
      // Inject head elements if available
      if (headHtml) {
        if (headHtml.title) {
          html = html.replace(/<title>.*?<\/title>/, headHtml.title)
        }
        if (headHtml.meta) {
          html = html.replace('</head>', `${headHtml.meta}</head>`)
        }
        if (headHtml.link) {
          html = html.replace('</head>', `${headHtml.link}</head>`)
        }
        if (headHtml.script) {
          html = html.replace('</head>', `${headHtml.script}</head>`)
        }
      }

      const filePath = toAbsolute(`dist${url === '/' ? '/index' : url}.html`)
      
      // Ensure the directory exists before writing
      ensureDirectoryExists(filePath)
      
      fs.writeFileSync(filePath, html)
      console.log('pre-rendered:', filePath)
    } catch (error) {
      console.error(`Failed to prerender ${url}:`, error)
    }
  }
})()