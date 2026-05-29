'use strict';

const {
  ensureLocales,
  wipeCollection,
  seedLocalizedSingleType,
  seedLocalizedCollectionEntry,
} = require('./seed-helpers');
const {
  singleTypes,
  testimonials,
  targetAudiences,
  categories,
  authors,
  articles,
  slugify,
  articleContent,
} = require('./seed-data');

async function runSeed(strapi, options = {}) {
  const { wipe = true } = options;
  console.log('Starting localized seeder (id + en)...');

  await ensureLocales(strapi);

  if (!wipe) {
    console.log('ℹ️ Skipping collection wipe (wipe=false)');
  }

  const wipeTargets = wipe
    ? [
    'api::article.article',
    'api::category.category',
    'api::author.author',
    'api::testimonial.testimonial',
    'api::target-audience.target-audience',
      ]
    : [];

  for (const uid of wipeTargets) {
    await wipeCollection(strapi, uid);
  }

  for (const [uid, dataByLocale] of Object.entries(singleTypes)) {
    try {
      await seedLocalizedSingleType(strapi, uid, dataByLocale);
    } catch (e) {
      console.error(`❌ Failed single type ${uid}:`, e.message);
    }
  }

  const authorDocIdByEmail = {};
  for (const author of authors) {
    try {
      const documentId = await seedLocalizedCollectionEntry(strapi, 'api::author.author', {
        id: { ...author.id, email: author.email },
        en: { ...author.en, email: author.email },
      });
      authorDocIdByEmail[author.email] = documentId;
    } catch (e) {
      console.error(`❌ Failed author ${author.email}:`, e.message);
    }
  }

  const categoryDocIdByKey = {};
  for (const cat of categories) {
    try {
      const documentId = await seedLocalizedCollectionEntry(strapi, 'api::category.category', {
        id: { ...cat.id, sortOrder: cat.sortOrder },
        en: { ...cat.en, sortOrder: cat.sortOrder },
      });
      categoryDocIdByKey[cat.key] = documentId;
    } catch (e) {
      console.error(`❌ Failed category ${cat.key}:`, e.message);
    }
  }

  for (const t of testimonials) {
    try {
      await seedLocalizedCollectionEntry(strapi, 'api::testimonial.testimonial', {
        id: t.id,
        en: t.en,
      }, { status: 'published' });
    } catch (e) {
      console.error(`❌ Failed testimonial ${t.key}:`, e.message);
    }
  }

  for (const aud of targetAudiences) {
    try {
      await seedLocalizedCollectionEntry(strapi, 'api::target-audience.target-audience', {
        id: { ...aud.id, category: aud.category },
        en: { ...aud.en, category: aud.category },
      });
    } catch (e) {
      console.error(`❌ Failed target audience ${aud.key}:`, e.message);
    }
  }

  for (const art of articles) {
    try {
      const categoryDocId = categoryDocIdByKey[art.categoryKey];
      const authorDocId = authorDocIdByEmail[art.authorEmail];
      if (!categoryDocId || !authorDocId) {
        throw new Error(`Missing relation for ${art.key}`);
      }

      const idPayload = {
        title: art.id.title,
        slug: slugify(art.id.title),
        description: art.id.description,
        content: articleContent('id'),
        category: categoryDocId,
        author: authorDocId,
        isFeatured: Boolean(art.isFeatured),
      };
      const enPayload = {
        title: art.en.title,
        slug: slugify(art.en.title),
        description: art.en.description,
        content: articleContent('en'),
        category: categoryDocId,
        author: authorDocId,
        isFeatured: Boolean(art.isFeatured),
      };

      await seedLocalizedCollectionEntry(
        strapi,
        'api::article.article',
        { id: idPayload, en: enPayload },
        { status: 'published' }
      );
    } catch (e) {
      console.error(`❌ Failed article ${art.key}:`, e.message);
    }
  }

  console.log('🎉 Localized seeding finished (id + en).');
}

module.exports = { runSeed };
