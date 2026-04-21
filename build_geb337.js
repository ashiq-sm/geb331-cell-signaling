const fs = require('fs');

let html = fs.readFileSync('GEB335_FERMENTATION_TECH_INTERACTIVE.html', 'utf8');

// Replace standard terms
html = html.replace(/GEB335_FERMENTATION_TECH_INTERACTIVE/g, 'GEB337_RDNA_TECH_INTERACTIVE');
html = html.replace(/GEB 335 Fermentation Technology/g, 'GEB 337 Recombinant DNA Technology');
html = html.replace(/GEB 335 · Fermentation Technology/g, 'GEB 337 · Recombinant DNA Technology');
html = html.replace(/GEB 335 — Fermentation Technology/g, 'GEB 337 — Recombinant DNA Technology');
html = html.replace(/GEB 335 \| Fermentation Technology/g, 'GEB 337 | Recombinant DNA Technology');
html = html.replace(/GEB 335 · Fermentation Tech Study/g, 'GEB 337 · Recombinant DNA Tech Study');

html = html.replace(/geb335/g, 'geb337');
html = html.replace(/GEB335/g, 'GEB337');
html = html.replace(/GEB 335/g, 'GEB 337');

// Fix the dropdown option
html = html.replace(/<option value="GEB335_FERMENTATION_TECH_INTERACTIVE.html" selected>🔬 GEB 335: Fermentation Technology<\/option>/g, '<option value="GEB335_FERMENTATION_TECH_INTERACTIVE.html">🔬 GEB 335: Fermentation Technology</option>');
html = html.replace(/<option value="#">🧬 GEB 333: rDNA Technology \(Soon\)<\/option>/g, '<option value="GEB337_RDNA_TECH_INTERACTIVE.html" selected>🧬 GEB 337: Recombinant DNA Technology</option>');

fs.writeFileSync('GEB337_RDNA_TECH_INTERACTIVE.html', html);
console.log('Successfully created GEB337_RDNA_TECH_INTERACTIVE.html');
