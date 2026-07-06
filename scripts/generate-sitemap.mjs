// Regenerates public/sitemap.xml. Run manually when routes change: node scripts/generate-sitemap.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE_URL = 'https://startilellc.com';
const LASTMOD = new Date().toISOString().slice(0, 10);

const routes = [
  ['/', 'weekly', '1.0'],
  ['/services', 'monthly', '0.9'],
  ['/tile-installation-portland', 'monthly', '0.9'],
  ['/portfolio', 'weekly', '0.8'],
  ['/contact', 'monthly', '0.8'],
  ['/quote', 'monthly', '0.8'],
  ['/tile-contractor-beaverton', 'monthly', '0.8'],
  ['/tile-contractor-tigard', 'monthly', '0.8'],
  ['/tile-contractor-gresham', 'monthly', '0.8'],
  ['/tile-contractor-lake-oswego', 'monthly', '0.8'],
  ['/about', 'monthly', '0.7'],
  ['/blog', 'weekly', '0.7'],
  ['/tile-cost-calculator', 'monthly', '0.7'],
  ['/tile-pattern-comparison', 'monthly', '0.6'],
  ['/blog/budgeting-tile-project-portland', 'monthly', '0.6'],
  ['/blog/fix-cracked-grout', 'monthly', '0.6'],
  ['/blog/waterproofing-before-tile', 'monthly', '0.6'],
  ['/blog/choosing-tile-contractor-portland', 'monthly', '0.6'],
  ['/blog/tile-trends-portland-2025', 'monthly', '0.6'],
  ['/blog/best-tile-stores-portland', 'monthly', '0.6'],
  ['/blog/kitchen-backsplash-ideas-2025', 'monthly', '0.6'],
  ['/blog/tile-installation-mistakes-portland', 'monthly', '0.6'],
  ['/blog/best-tile-materials-portland-climate', 'monthly', '0.6'],
  ['/blog/tile-size-guide-portland', 'monthly', '0.6'],
  ['/privacy-policy', 'yearly', '0.3'],
];

const urls = routes
  .map(
    ([p, changefreq, priority]) => `  <url>
    <loc>${SITE_URL}${p === '/' ? '/' : p}</loc>
    <lastmod>${LASTMOD}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  )
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
fs.writeFileSync(path.join(root, 'public', 'sitemap.xml'), xml);
console.log(`sitemap.xml written with ${routes.length} URLs (lastmod ${LASTMOD})`);
