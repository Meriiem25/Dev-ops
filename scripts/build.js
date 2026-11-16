const fs = require('node:fs');
const path = require('node:path');

const outputDir = path.join(__dirname, '..', 'dist');

fs.mkdirSync(outputDir, { recursive: true });

fs.copyFileSync(
    path.join(__dirname, '..', 'index.html'),
    path.join(outputDir, 'index.html')
);

console.log('Build completed successfully!');
