#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { glob } from 'glob';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');

console.log('🔍 Checking image references...\n');

// Find all files that might contain image references
const sourceFiles = await glob('src/**/*.{ts,tsx,js,jsx}', { cwd: projectRoot });

let totalReferences = 0;
let missingImages = 0;
const missingList = [];

for (const file of sourceFiles) {
  const filePath = path.join(projectRoot, file);
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Look for image references starting with /images/
  const imageMatches = content.match(/['"`]\/images\/[^'"`\s]+\.(jpg|jpeg|png|webp|avif|svg)['"`]/g);
  
  if (imageMatches) {
    for (const match of imageMatches) {
      totalReferences++;
      const imagePath = match.slice(1, -1); // Remove quotes
      const fullPath = path.join(projectRoot, 'public', imagePath);
      
      if (!fs.existsSync(fullPath)) {
        missingImages++;
        missingList.push({
          file: file,
          imagePath: imagePath,
          fullPath: fullPath
        });
      }
    }
  }
}

console.log(`📊 Summary:`);
console.log(`   Total image references found: ${totalReferences}`);
console.log(`   Missing images: ${missingImages}`);

if (missingImages > 0) {
  console.log(`\n❌ Missing images:`);
  missingList.forEach(({ file, imagePath }) => {
    console.log(`   ${file}: ${imagePath}`);
  });
  process.exit(1);
} else {
  console.log(`\n✅ All image references are valid!`);
}