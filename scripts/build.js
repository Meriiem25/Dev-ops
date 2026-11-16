
const fs = require('fs');
const path = require('path');

// Source HTML
const source = path.join(__dirname, '..', 'index.html');

// Destination HTML
const distDir = path.join(__dirname, '..', 'dist');
const destination = path.join(distDir, 'index.html');

// Create dist directory if it does not exist
fs.mkdirSync(distDir, { recursive: true });

// Read source and write its content to destination
const content = fs.readFileSync(source);
fs.writeFileSync(destination, content);

console.log('Build completed successfully!');
