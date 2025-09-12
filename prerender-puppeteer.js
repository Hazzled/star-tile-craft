import puppeteer from 'puppeteer';
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

// All routes to prerender for SEO
const routes = [
  '/',
  '/about',
  '/services', 
  '/portfolio',
  '/contact',
  '/blog',
  '/blog/budgeting-tile-project-portland',
  '/blog/fix-cracked-grout',
  '/blog/waterproofing-before-tile',
  '/blog/choosing-tile-contractor-portland',
  '/blog/tile-trends-portland',
  '/blog/best-tile-stores-portland',
  '/tile-installation-portland',
  '/tile-contractor-beaverton',
  '/tile-contractor-tigard', 
  '/tile-contractor-gresham',
  '/tile-contractor-lake-oswego',
  '/quote'
];

const ensureDirectoryExists = (filePath) => {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

const prerender = async () => {
  console.log('Starting prerendering with Puppeteer...');
  
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    
    // Set viewport for consistent rendering
    await page.setViewport({ width: 1200, height: 800 });
    
    for (const route of routes) {
      try {
        console.log(`Prerendering ${route}...`);
        
        // Navigate to the route on localhost (assuming dev server is running)
        const url = `http://localhost:4173${route}`;
        await page.goto(url, { 
          waitUntil: 'networkidle0',
          timeout: 30000 
        });
        
        // Wait for React to fully render
        await page.waitForTimeout(2000);
        
        // Get the full HTML content
        const html = await page.content();
        
        // Determine file path
        let filePath;
        if (route === '/') {
          filePath = path.join(__dirname, 'dist', 'index.html');
        } else {
          filePath = path.join(__dirname, 'dist', `${route}.html`);
        }
        
        // Ensure directory exists
        ensureDirectoryExists(filePath);
        
        // Write the HTML file
        fs.writeFileSync(filePath, html);
        console.log(`✓ Generated: ${filePath}`);
        
      } catch (error) {
        console.error(`Failed to prerender ${route}:`, error.message);
      }
    }
    
  } finally {
    await browser.close();
  }
  
  console.log('Prerendering completed!');
};

prerender().catch(console.error);