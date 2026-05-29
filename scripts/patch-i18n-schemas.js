/**
 * One-off helper: enable i18n on all API content-type schemas.
 * Run: node scripts/patch-i18n-schemas.js
 */
const fs = require('fs');
const path = require('path');

const apiRoot = path.join(__dirname, '..', 'src', 'api');

function patchSchema(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const schema = JSON.parse(raw);

  schema.pluginOptions = schema.pluginOptions || {};
  if (!schema.pluginOptions.i18n) {
    schema.pluginOptions.i18n = { localized: true };
  }

  const relationTypes = new Set(['relation', 'media']);
  if (schema.attributes) {
    for (const [key, attr] of Object.entries(schema.attributes)) {
      if (relationTypes.has(attr.type)) {
        attr.pluginOptions = attr.pluginOptions || {};
        attr.pluginOptions.i18n = { localized: false };
      }
    }
  }

  fs.writeFileSync(filePath, JSON.stringify(schema, null, 2) + '\n');
  console.log('patched', path.relative(process.cwd(), filePath));
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name === 'schema.json') patchSchema(full);
  }
}

walk(apiRoot);
console.log('Done.');
