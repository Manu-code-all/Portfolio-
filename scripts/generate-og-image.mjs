#!/usr/bin/env node
/**
 * Generate OG image and favicon from design tokens.
 * Uses sharp to render SVG → PNG buffer.
 * Writes to: public/og-image.png, app/icon.png
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');

// Design tokens from globals.css
const colors = {
  bg: '#18160F',        // Warm Graphite
  surface: '#211E17',   // Raised Graphite
  border: '#3A352A',    // Seam
  text: '#F2EEE3',      // Bone
  textMuted: '#9B9484', // Worn Steel
  accent: '#C4692E',    // Signal Rust
};

/**
 * Generate OG Image SVG (1200×630px)
 * Content: Name + role + blueprint-schematic graphic
 */
function generateOGImageSVG() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="1200" height="630" fill="${colors.bg}"/>

  <!-- Left side: Name + role -->
  <text x="60" y="280" font-size="72" font-weight="800" font-family="Arial, sans-serif" fill="${colors.text}" letter-spacing="-1.44">Manu Gupta</text>
  <text x="60" y="360" font-size="36" font-weight="500" font-family="Arial, sans-serif" fill="${colors.accent}" letter-spacing="0.72">Software Developer</text>

  <!-- Right side: Blueprint-schematic graphic -->
  <g transform="translate(900, 315)">
    <!-- Blueprint grid background -->
    <defs>
      <pattern id="grid-og" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="0.8" fill="${colors.border}" opacity="0.3"/>
      </pattern>
    </defs>
    <rect x="-190" y="-190" width="380" height="380" fill="${colors.bg}"/>
    <rect x="-190" y="-190" width="380" height="380" fill="url(#grid-og)"/>

    <!-- Boxes — abstract schematic -->
    <rect x="-170" y="-170" width="110" height="60" fill="none" stroke="${colors.border}" stroke-width="1.5"/>
    <rect x="-10" y="-155" width="80" height="50" fill="none" stroke="${colors.border}" stroke-width="1.5"/>
    <rect x="-150" y="-60" width="140" height="65" fill="none" stroke="${colors.border}" stroke-width="1.5"/>
    <rect x="60" y="-75" width="50" height="120" fill="none" stroke="${colors.border}" stroke-width="1.5"/>
    <rect x="-170" y="45" width="90" height="50" fill="none" stroke="${colors.border}" stroke-width="1.5"/>
    <rect x="-60" y="50" width="70" height="40" fill="none" stroke="${colors.border}" stroke-width="1.5"/>

    <!-- Connection lines -->
    <line x1="-60" y1="-140" x2="-10" y2="-140" stroke="${colors.textMuted}" stroke-width="1.5"/>
    <line x1="-105" y1="-110" x2="-105" y2="-60" stroke="${colors.border}" stroke-width="1.5"/>
    <line x1="50" y1="-65" x2="50" y2="0" stroke="${colors.textMuted}" stroke-width="1.5"/>
    <line x1="50" y1="0" x2="60" y2="0" stroke="${colors.textMuted}" stroke-width="1.5"/>
    <line x1="-125" y1="25" x2="-125" y2="45" stroke="${colors.border}" stroke-width="1.5"/>
    <line x1="-25" y1="25" x2="-25" y2="50" stroke="${colors.border}" stroke-width="1.5"/>

    <!-- Junction dots -->
    <circle cx="-60" cy="-140" r="4" fill="${colors.accent}"/>
    <circle cx="50" cy="0" r="4" fill="${colors.accent}"/>
    <circle cx="-105" cy="-60" r="2.5" fill="${colors.textMuted}"/>
    <circle cx="60" cy="0" r="2.5" fill="${colors.textMuted}"/>
    <circle cx="-125" cy="45" r="2" fill="${colors.textMuted}"/>
    <circle cx="-25" cy="50" r="2" fill="${colors.textMuted}"/>
  </g>
</svg>`;
}

/**
 * Generate Favicon SVG (512×512px)
 * Content: Simple monochrome mark — geometric "M" shape
 */
function generateFaviconSVG() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="512" height="512" fill="${colors.bg}"/>

  <!-- Geometric "M" mark — two vertical bars + diagonal connectors -->
  <!-- Left vertical bar -->
  <rect x="100" y="120" width="45" height="280" fill="${colors.accent}"/>

  <!-- Right vertical bar -->
  <rect x="267" y="120" width="45" height="280" fill="${colors.accent}"/>

  <!-- Left diagonal — from left-top to center-bottom -->
  <line x1="145" y1="120" x2="212.5" y2="280" stroke="${colors.accent}" stroke-width="40" stroke-linecap="round"/>

  <!-- Right diagonal — from center-bottom to right-top -->
  <line x1="212.5" y1="280" x2="267" y2="120" stroke="${colors.accent}" stroke-width="40" stroke-linecap="round"/>
</svg>`;
}

/**
 * Main — generate both images and write to disk
 */
async function main() {
  try {
    console.log('Generating brand assets...\n');

    // Generate OG image
    console.log('Generating OG image (1200×630)...');
    const ogSvg = generateOGImageSVG();
    const ogBuffer = await sharp(Buffer.from(ogSvg))
      .png()
      .toBuffer();
    const ogPath = path.join(projectRoot, 'public', 'og-image.png');
    fs.writeFileSync(ogPath, ogBuffer);
    console.log(`✓ Written to ${ogPath} (${ogBuffer.byteLength} bytes)\n`);

    // Generate favicon
    console.log('Generating favicon (512×512)...');
    const faviconSvg = generateFaviconSVG();
    const faviconBuffer = await sharp(Buffer.from(faviconSvg))
      .png()
      .toBuffer();
    const faviconPath = path.join(projectRoot, 'app', 'icon.png');
    fs.writeFileSync(faviconPath, faviconBuffer);
    console.log(`✓ Written to ${faviconPath} (${faviconBuffer.byteLength} bytes)\n`);

    console.log('✓ All assets generated successfully!');
    console.log(`\nColors used:`);
    console.log(`  Background: ${colors.bg}`);
    console.log(`  Accent: ${colors.accent}`);
    console.log(`  Text: ${colors.text}`);
    console.log(`Font: Red Hat Display (weights 500, 600, 700, 800)\n`);
  } catch (error) {
    console.error('Error generating assets:', error);
    process.exit(1);
  }
}

main();
