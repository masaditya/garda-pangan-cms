// import type { Core } from '@strapi/strapi';

export default {
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  async bootstrap({ strapi }) {
    // Seeder is disabled. Enable by uncommenting the block below and setting SEED_ON_BOOT=true.
    // if (process.env.SEED_ON_BOOT !== 'true') {
    //   return;
    // }
    //
    // console.log('Starting Auto-Seeder from bootstrap (id + en)...');
    // const { runSeed } = require('../scripts/run-seed-core');
    // await runSeed(strapi);
  },
};
