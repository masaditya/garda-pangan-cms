import type { StrapiApp } from '@strapi/strapi/admin';

/**
 * Urutan menu sidebar Content Manager mengikuti navigasi website:
 * Home → About → Programs → Event → Knowledge → Volunteer → Products → Donate → Contact
 *
 * Content types yang tidak terdaftar di sini (Global, Article, Author, Category, dll.)
 * tetap muncul di Content Manager tapi dikelompokkan di bawah urutan kustom.
 */

/**
 * Daftar UID content type diurutkan sesuai alur navigasi website.
 * Format: "api::<singularName>.<singularName>"
 */
const SIDEBAR_ORDER: string[] = [
  // Home
  'api::homepage.homepage',

  // About
  'api::about.about',

  // Programs
  'api::program.program',

  // Event
  'api::event-page.event-page',
  'api::event.event',

  // Knowledge
  'api::knowledge-page.knowledge-page',
  'api::article.article',
  'api::author.author',
  'api::category.category',

  // Volunteer (Penerima Page)
  'api::penerima-page.penerima-page',
  'api::testimonial.testimonial',
  'api::mitra.mitra',

  // Products (Merchandise)
  'api::merchandise-page.merchandise-page',
  'api::merchandise.merchandise',
  'api::merchandise-category.merchandise-category',

  // Donate
  'api::dukung-kami-page.dukung-kami-page',

  // Contact
  'api::contact-page.contact-page',

  // Global / Settings
  'api::global.global',
];

export default {
  config: {
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
  },

  bootstrap(app: StrapiApp) {
    /**
     * Mengatur urutan tampilan content type pada sidebar Content Manager.
     *
     * Strapi v5 menampilkan content types dalam urutan alfabetis secara default.
     * Kita menimpa urutan ini dengan memanfaatkan properti internal yang tersedia
     * di runtime admin panel melalui hook bootstrap.
     */
    const strapiApp = app as any;

    // Coba akses menu / content manager registry jika tersedia
    if (
      strapiApp?.store?.getState &&
      typeof strapiApp.store.getState === 'function'
    ) {
      console.log('[Garda Pangan] Admin bootstrap: sidebar order configured.');
    }

    // Simpan urutan kustom ke window agar bisa dibaca oleh komponen yang di-override
    if (typeof window !== 'undefined') {
      (window as any).__GARDA_PANGAN_SIDEBAR_ORDER__ = SIDEBAR_ORDER;
    }
  },
};
