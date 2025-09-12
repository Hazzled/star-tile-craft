#!/usr/bin/env node

/**
 * Build script that runs Vite build and then prerenders all routes with Puppeteer
 * This ensures crawlers can access full HTML content for SEO
 */

import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

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

async function buildWithPrerender() {
  try {
    console.log('🏗️  Building with Vite...');
    await execAsync('npm run build:vite');
    
    console.log('🚀 Starting preview server...');
    const previewProcess = exec('npm run preview -- --port 4173');
    
    // Wait for preview server to start
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    console.log('🕸️  Starting prerender with Puppeteer...');
    await execAsync('node prerender-puppeteer.js');
    
    console.log('🔥 Stopping preview server...');
    previewProcess.kill();
    
    console.log('✅ Build and prerender completed successfully!');
    
  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  buildWithPrerender();
}

export default buildWithPrerender;