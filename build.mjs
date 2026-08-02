import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const templatePath = path.join(root, 'template-swiss.html');
const slidesPath = path.join(root, 'slides.html');
const outputPath = path.join(root, 'index.html');
const lucidePath = path.join(root, 'assets', 'lucide.min.js');

let template = fs.readFileSync(templatePath, 'utf8');
const slides = fs.readFileSync(slidesPath, 'utf8').trim();
const lucide = fs.readFileSync(lucidePath, 'utf8');

template = template
  .replace(/<title>[\s\S]*?<\/title>/, '<title>两套免费商店模板 · 使用与发布指南</title>')
  .replace(/<link[^>]+(?:fonts\.googleapis\.com|fonts\.gstatic\.com)[^>]*>\s*/g, '')
  .replace(
    '<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>',
    () => `<script>${lucide}</script>`,
  );

const deckStart = template.indexOf('<div id="deck">');
const navStart = template.indexOf('<div id="nav"></div>', deckStart);

if (deckStart === -1 || navStart === -1) {
  throw new Error('Could not locate the deck markers in template-swiss.html');
}

template = template
  .slice(0, deckStart)
  .concat('<div id="deck">\n', slides, '\n</div>\n', template.slice(navStart));

template = template.replace(/src="assets\/([^"]+)"/g, (_match, filename) => {
  const assetPath = path.join(root, 'assets', filename);
  const extension = path.extname(filename).slice(1).toLowerCase();
  const mime = extension === 'jpg' || extension === 'jpeg' ? 'image/jpeg' : `image/${extension}`;
  const encoded = fs.readFileSync(assetPath).toString('base64');
  return `src="data:${mime};base64,${encoded}"`;
});

fs.writeFileSync(outputPath, template);
console.log(`Built ${outputPath}`);
