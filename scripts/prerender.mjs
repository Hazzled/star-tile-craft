// Prerenders every route to a static HTML file in dist/ after `vite build`.
// GitHub Pages resolves /services to dist/services.html, so each page gets a
// real 200 response with its meta tags present before any JavaScript runs.
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const serverDir = path.join(dist, 'server');

const routes = [
  '/',
  '/about',
  '/services',
  '/portfolio',
  '/contact',
  '/quote',
  '/blog',
  '/blog/budgeting-tile-project-portland',
  '/blog/fix-cracked-grout',
  '/blog/waterproofing-before-tile',
  '/blog/choosing-tile-contractor-portland',
  '/blog/tile-trends-portland-2025',
  '/blog/best-tile-stores-portland',
  '/blog/kitchen-backsplash-ideas-2025',
  '/blog/tile-installation-mistakes-portland',
  '/blog/best-tile-materials-portland-climate',
  '/blog/tile-size-guide-portland',
  '/tile-installation-portland',
  '/tile-cost-calculator',
  '/tile-pattern-comparison',
  '/tile-contractor-beaverton',
  '/tile-contractor-tigard',
  '/tile-contractor-gresham',
  '/tile-contractor-lake-oswego',
  '/privacy-policy',
];

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8');
if (!template.includes('<!--app-html-->') || !/<!--seo-start-->[\s\S]*?<!--seo-end-->/.test(template)) {
  throw new Error('dist/index.html is missing the <!--app-html--> or <!--seo-start/end--> markers');
}

// Unknown routes fall back to the plain SPA shell (GitHub Pages serves 404.html).
fs.writeFileSync(path.join(dist, '404.html'), template);

const { render } = await import(pathToFileURL(path.join(serverDir, 'entry-server.js')).href);

for (const url of routes) {
  const { html, helmet } = render(url);

  if (!html || html.length < 500) {
    throw new Error(`Prerender of ${url} produced suspiciously little HTML (${html?.length ?? 0} chars)`);
  }
  if (!helmet || !helmet.title.toString().includes('<title')) {
    throw new Error(`Prerender of ${url} produced no <title> — is the page missing its <SEO /> component?`);
  }

  const head = [
    helmet.title.toString(),
    helmet.priority.toString(),
    helmet.meta.toString(),
    helmet.link.toString(),
    helmet.script.toString(),
  ]
    .filter(Boolean)
    .join('\n    ');

  const page = template
    .replace(/<!--seo-start-->[\s\S]*?<!--seo-end-->/, head)
    .replace('<!--app-html-->', html);

  const filePath = url === '/' ? 'index.html' : `${url.slice(1)}.html`;
  const outFile = path.join(dist, filePath);
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, page);
  console.log(`prerendered ${url} -> ${path.relative(root, outFile)}`);
}

// The SSR bundle must not be deployed.
fs.rmSync(serverDir, { recursive: true, force: true });
console.log(`\nPrerendered ${routes.length} routes.`);
