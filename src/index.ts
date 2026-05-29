// import type { Core } from '@strapi/strapi';

export default {
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  async bootstrap({ strapi }) {
    if (process.env.SEED_ON_BOOT !== 'true') {
      return;
    }

    console.log('Starting Auto-Seeder from bootstrap (id + en)...');
    const { runSeed } = require('../scripts/run-seed-core');
    await runSeed(strapi);
  },
};
