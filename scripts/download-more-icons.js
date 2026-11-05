import fs from 'fs';
import path from 'path';
import https from 'https';

const outDir = path.resolve('public/assets/stickers');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const icons = [
  { name: 'react', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/react.svg' },
  { name: 'supabase', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/supabase.svg' },
  { name: 'netlify', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/netlify.svg' },
  { name: 'vscode', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/visualstudiocode.svg' },
];

function fetchSvg(item) {
  return new Promise((resolve, reject) => {
    https.get(item.url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (data.includes('<svg')) {
          fs.writeFileSync(path.join(outDir, `${item.name}.svg`), data);
          resolve({ name: item.name, length: data.length });
        } else {
          resolve({ name: item.name, error: 'Not SVG: ' + data.substring(0, 50) });
        }
      });
    }).on('error', reject);
  });
}

Promise.all(icons.map(fetchSvg))
  .then(console.log)
  .catch(console.error);

