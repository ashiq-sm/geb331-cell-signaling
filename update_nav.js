const fs = require('fs');

const files = [
    'GEB341_AQUACULTURE_INTERACTIVE.html',
    'GEB334_ONCOLOGY_VIROLOGY_INTERACTIVE.html',
    'GEB331_MASTER_EXAM_PREP_INTERACTIVE_v4_FINAL.html',
    'GEB343_BIOPROCESS_INTERACTIVE_v1.html',
    'GEB335_FERMENTATION_TECH_INTERACTIVE.html'
];

files.forEach(file => {
    let html = fs.readFileSync(file, 'utf8');
    html = html.replace(/<option value="#">🧬 GEB 333: rDNA Technology \(Soon\)<\/option>/g, '<option value="GEB337_RDNA_TECH_INTERACTIVE.html">🧬 GEB 337: Recombinant DNA Technology</option>');
    fs.writeFileSync(file, html);
    console.log('Updated ' + file);
});
