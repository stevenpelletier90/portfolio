import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";
import pngToIco from "png-to-ico";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = resolve(__dirname, "../public");
const logoSvg = readFileSync(resolve(publicDir, "logo-white.svg"), "utf-8");

// Add black circular background behind the white logo
const svgWithBg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
  <circle cx="500" cy="500" r="500" fill="#000"/>
  ${logoSvg
    .replace(/<\?xml[^?]*\?>/, "")
    .replace(/<svg[^>]*>/, "")
    .replace(/<\/svg>/, "")
    .replace(/<defs>[\s\S]*?<\/defs>/, "")}
</svg>`;

// Inline the fill so it works without the <defs> style
const svgFinal = svgWithBg.replace('class="cls-1"', 'fill="#fff"');

async function generate() {
  const svgBuffer = Buffer.from(svgFinal);

  // Generate PNGs at all needed sizes
  const sizes = [
    { name: "favicon-32x32.png", size: 32 },
    { name: "favicon-16x16.png", size: 16 },
    { name: "apple-touch-icon.png", size: 180 },
    { name: "android-chrome-192x192.png", size: 192 },
    { name: "android-chrome-512x512.png", size: 512 },
  ];

  for (const { name, size } of sizes) {
    await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(resolve(publicDir, name));
    console.log(`Generated ${name}`);
  }

  // Generate favicon.ico from 32x32 and 16x16 PNGs
  const ico = await pngToIco([
    resolve(publicDir, "favicon-32x32.png"),
    resolve(publicDir, "favicon-16x16.png"),
  ]);
  writeFileSync(resolve(publicDir, "favicon.ico"), ico);
  console.log("Generated favicon.ico");

  // Generate new favicon.svg with dark background
  writeFileSync(resolve(publicDir, "favicon.svg"), svgFinal);
  console.log("Updated favicon.svg");

  console.log("\nAll favicons generated!");
}

generate().catch(console.error);
