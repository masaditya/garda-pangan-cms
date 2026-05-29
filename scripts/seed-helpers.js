'use strict';

const LOCALES = ['id', 'en'];
const DEFAULT_LOCALE = 'id';

async function ensureLocales(strapi) {
  const localesService = strapi.plugin('i18n')?.service('locales');
  if (!localesService) {
    console.warn('⚠ i18n plugin not available; skipping locale setup');
    return;
  }

  const defs = [
    { code: 'id', name: 'Indonesian (id)', isDefault: true },
    { code: 'en', name: 'English (en)', isDefault: false },
  ];

  for (const def of defs) {
    const existing = await localesService.findByCode(def.code);
    if (!existing) {
      await localesService.create(def);
      console.log(`✅ Created locale: ${def.code}`);
    } else if (def.isDefault && !existing.isDefault) {
      await localesService.update(existing.id, { isDefault: true });
      console.log(`✅ Set default locale: ${def.code}`);
    }
  }
}

async function wipeCollection(strapi, uid) {
  try {
    await strapi.db.query(uid).deleteMany({ where: {} });
    console.log(`🗑 Cleared ${uid}`);
  } catch (e) {
    console.warn(`⚠ Could not wipe ${uid}:`, e.message);
  }
}

/**
 * Create or update a single-type entry for each locale (id + en).
 * @param {object} dataByLocale - { id: {...}, en: {...} }
 */
async function seedLocalizedSingleType(strapi, uid, dataByLocale) {
  const docs = strapi.documents(uid);

  for (const locale of LOCALES) {
    const data = dataByLocale[locale];
    if (!data) continue;

    const existing = await docs.findFirst({ locale });
    if (existing?.documentId) {
      await docs.update({
        documentId: existing.documentId,
        locale,
        data,
      });
      console.log(`🔄 Updated ${uid} [${locale}]`);
    } else {
      await docs.create({ locale, data });
      console.log(`✅ Created ${uid} [${locale}]`);
    }
  }
}

/**
 * Create collection entry in `id`, then add linked `en` localization (same documentId).
 * @returns {Promise<string|undefined>} documentId
 */
async function seedLocalizedCollectionEntry(strapi, uid, dataByLocale, options = {}) {
  const docs = strapi.documents(uid);
  const { status, matchDocumentId } = options;

  const idData = dataByLocale.id;
  const enData = dataByLocale.en;
  if (!idData || !enData) {
    throw new Error(`seedLocalizedCollectionEntry requires id and en data for ${uid}`);
  }

  let documentId = matchDocumentId;

  if (!documentId) {
    const created = await docs.create({
      locale: 'id',
      data: idData,
      ...(status ? { status } : {}),
    });
    documentId = created.documentId;
    console.log(`✅ Created ${uid} [id] documentId=${documentId}`);
  } else {
    await docs.update({
      documentId,
      locale: 'id',
      data: idData,
      ...(status ? { status } : {}),
    });
    console.log(`🔄 Updated ${uid} [id] documentId=${documentId}`);
  }

  const enExists = await docs.findOne({ documentId, locale: 'en' });
  if (enExists) {
    await docs.update({
      documentId,
      locale: 'en',
      data: enData,
      ...(status ? { status } : {}),
    });
    console.log(`🔄 Updated ${uid} [en] documentId=${documentId}`);
  } else {
    await docs.update({
      documentId,
      locale: 'en',
      data: enData,
      ...(status ? { status } : {}),
    });
    console.log(`✅ Created ${uid} [en] documentId=${documentId}`);
  }

  return documentId;
}

module.exports = {
  LOCALES,
  DEFAULT_LOCALE,
  ensureLocales,
  wipeCollection,
  seedLocalizedSingleType,
  seedLocalizedCollectionEntry,
};
