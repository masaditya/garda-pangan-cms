const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const crypto = require('crypto');

function ensureEnv(key, fallback) {
  if (!process.env[key]) process.env[key] = fallback();
}

const rnd = () => crypto.randomBytes(32).toString('hex');
ensureEnv('ADMIN_JWT_SECRET', rnd);
ensureEnv('API_TOKEN_SALT', rnd);
ensureEnv('TRANSFER_TOKEN_SALT', rnd);
ensureEnv('JWT_SECRET', rnd);
ensureEnv('ENCRYPTION_KEY', rnd);
ensureEnv('APP_KEYS', () => `${rnd()},${rnd()}`);

const { createStrapi } = require('@strapi/strapi');
const { runSeed } = require('./run-seed-core');

async function seed() {
  console.log('Starting Strapi Seeder...');

  const strapi = await createStrapi().load();
  strapi.server.mount();

  try {
    await runSeed(strapi);
  } finally {
    await strapi.destroy();
  }

  process.exit(0);
}

seed().catch((err) => {
  console.error('General Error:', err);
  process.exit(1);
});
