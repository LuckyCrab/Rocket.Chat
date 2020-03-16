
const { execSync } = require('child_process');

console.log('Running npm-postinstall.js');

execSync('cp node_modules/katex/dist/katex.min.css app/katex/');

execSync('mkdir -p public/fonts/');
execSync('cp node_modules/katex/dist/fonts/* public/fonts/');

execSync('cp node_modules/pdfjs-dist/build/pdf.worker.min.js public/');

execSync('cd node_modules/@rocket.chat/apps-engine && npm install && npm run compile');
execSync('cp -r node_modules/@rocket.chat/apps-engine/src/* node_modules/@rocket.chat/apps-engine');
