#!/usr/bin/env node
/**
 * generate-placeholders.js
 * Run: node generate-placeholders.js
 *
 * Creates simple SVG placeholder images in /public/ so the site
 * renders correctly before you add real project photos.
 * Delete this script once you have real images.
 */

const fs = require("fs");
const path = require("path");

const placeholders = [
  {
    name: "project_photos_1.jpg",
    color1: "#1a1a2e",
    color2: "#0f3460",
    label: "Project 01",
  },
  {
    name: "project_photos_2.jpg",
    color1: "#1a0a00",
    color2: "#3d1a00",
    label: "Project 02",
  },
  {
    name: "project_photos_3.jpg",
    color1: "#0a1628",
    color2: "#2c3e50",
    label: "Project 03",
  },
  {
    name: "project_photos_4.jpg",
    color1: "#0a2818",
    color2: "#1a4a28",
    label: "Project 04",
  },
  {
    name: "project_photos_5.jpg",
    color1: "#280a10",
    color2: "#4a1a20",
    label: "Project 05",
  },
];

const publicDir = path.join(__dirname, "public");
if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir);

placeholders.forEach(({ name, color1, color2, label }) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color1}" />
      <stop offset="100%" style="stop-color:${color2}" />
    </linearGradient>
  </defs>
  <rect width="1200" height="800" fill="url(#g)" />
  <text x="600" y="380" font-family="Georgia,serif" font-size="48" fill="#C8A96E" text-anchor="middle" opacity="0.6">AL Wasel Engineering</text>
  <text x="600" y="440" font-family="Georgia,serif" font-size="24" fill="#C8A96E" text-anchor="middle" opacity="0.4">${label}</text>
</svg>`;

  // Save as .svg with the .jpg extension name so it works as a placeholder
  // Real images should replace these files
  fs.writeFileSync(path.join(publicDir, name.replace(".jpg", ".svg")), svg);
  console.log(`Created placeholder: ${name.replace(".jpg", ".svg")}`);
});

console.log("\n✅ Placeholder images created in /public/");
console.log("📸 Replace them with your real project photos.");
console.log("   In Hero.js and ProjectShowcase.js, uncomment the <Image> tags");
console.log("   and remove the gradient div placeholders.\n");
