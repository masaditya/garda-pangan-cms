// import type { Core } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    console.log('Starting Auto-Seeder from bootstrap...');

    // Data for Single Types
    const singleTypes = {
      'api::homepage.homepage': {
        heroTitle: "ONE STOP FOOD LOSS & WASTE SOLUTION",
        heroSubtitle: "Garda Pangan adalah food rescue...",
        heroCtaText: "Pelajari Selengkapnya",
        heroCtaLink: "/about",
        impactTitle: "Our Impact",
        statsPortionsRescued: "608311",
        statsCo2Reduced: "788500",
        statsFoodLossPotential: "143",
        statsFoodScrap: "272"
      },
      'api::about.about': {
        heroTitle: "Tentang Kami",
        heroSubtitle: "Garda Pangan merupakan kegiatan yang bertujuan mengurangi pembuangan makanan berlebih dari industri...",
        historyTitle: "Sejarah Kami",
        historyContent: "Kebiasaan tersebut diawali oleh ibu Dedhy yang sering membagi kelebihan makanan. Mereka mulai menyadari masalah pembuangan makanan.",
        visionContent: "Mewujudkan Indonesia Bebas Lapar Lewat Pendistribusian Makanan Berlebih",
        missionContent: "• Menyelamatkan potensi makanan terbuang.\n• Menyalurkan donasi makanan.\n• Mendorong industri makanan berdampak hijau",
        legalityContent: "Garda Pangan merupakan yayasan resmi yang terdaftar..."
      },
      'api::mitra.mitra': {
        heroTitle: "Jadi Mitra",
        heroInfoCards: [
          { content: "Membantu perusahaan mencapai Zero Waste to Landfill." },
          { content: "Memberikan dampak sosial terukur bagi masyarakat yang membutuhkan." },
          { content: "Sertifikat donasi dan impact report akan diberikan secara rutin setiap periode." }
        ],
        flowTitle: "Bagaimana alur donasi Garda Pangan",
        flowDescription: "Garda Pangan menjalin kerjasama dengan mitra (restoran, hotel, dll) untuk menyelamatkan sisa makanan layak konsumsi.",
        flowSteps: [
          { title: "Punya makanan berlebih?", description: "Donasikan ke Garda Pangan saja!" },
          { title: "Silahkan hubungi kami", description: "Melalui narahubung resmi Garda Pangan", button1Label: "WhatsApp", button1Link: "#", button2Label: "Email Lengkap", button2Link: "#" },
          { title: "Informasikan Keterangan", description: "Jenis makanan, jumlah dan lokasi penjemputan donasi." },
          { title: "Tim akan menjemput donasi", description: "Menuju target penerima yang sesuai kriteria." },
          { title: "Laporan Terkirim", description: "Akan ada pelaporan transparan atas distribusi ini." }
        ],
        partnerSectionTitle: "Current Partner"
      },
      'api::penerima-page.penerima-page': {
        heroTitle: "Penerima Bantuan",
        heroDescription: "Penerima manfaat utama (beneficiaries) dari distribusi makanan Garda Pangan adalah masyarakat pra-sejahtera di Surabaya...",
        testimonialButtonLabel: "Tonton Testimoni",
        testimonialButtonLink: "#testimoni"
      },
      'api::event-page.event-page': {
        heroTitle: "Our Events",
        heroDescription: "Garda Pangan bermula dari pergerakan komunitas kecil yang berkembang jadi sesuatu yang memberikan manfaat lebih."
      },
      'api::knowledge-page.knowledge-page': {
        heroTitle: "Knowledge & Insights"
      },
      'api::merchandise-page.merchandise-page': {
        heroTitle: "Merchandise",
        heroDescription: "Yuk jadi bagian dari gaya hidup bebas sampah! Pembelian merchandise juga menjadi sarana berdonasi langsung ke operasional kami."
      }
    };

    // Seed Single Types
    for (const [uid, data] of Object.entries(singleTypes)) {
      try {
        const existing = await strapi.entityService.findMany(uid);
        if (!existing) {
          await strapi.entityService.create(uid, { data });
          console.log(`✅ Seeded SingleType: ${uid}`);
        }
      } catch (e) {
        console.error(`❌ Failed to seed SingleType ${uid}:`, e.message);
      }
    }

    // Seed Collection Types: Testimonials
    const testimonials = [
      { name: "Siti Rahayu", location: "Semolowaru, Surabaya", quote: "Waktu suami saya kena PHK, kami benar-benar kesulitan makan..." },
      { name: "Dewi Wahyuni", location: "Tambak Rejo, Surabaya", quote: "Saya ibu tunggal dengan tiga anak. Bantuan sembako dari Garda Pangan menolong kami." },
      { name: "Bapak Ponimin", location: "Wonokromo, Surabaya", quote: "Saya lansia, hidup sendiri, dan tidak punya beras. Tiap jumat rutin dapat bingkisan." }
    ];

    for (const t of testimonials) {
      try {
        const existing = await strapi.entityService.findMany('api::testimonial.testimonial', { filters: { name: t.name } });
        if (existing.length === 0) {
          await strapi.entityService.create('api::testimonial.testimonial', { data: t });
          console.log(`✅ Seeded Testimonial: ${t.name}`);
        }
      } catch (e) {
        console.error(`❌ Failed Testimonial ${t.name}:`, e.message);
      }
    }

    // Seed Collection Types: Target Audience (Donatur and Penerima)
    const audiences = [
      { name: "Industri Hospitality", category: "Donatur" },
      { name: "Katering", category: "Donatur" },
      { name: "Pertanian", category: "Donatur" },
      { name: "Panti Asuhan", category: "Penerima" },
      { name: "Warga Difabel", category: "Penerima" },
      { name: "Panti Jompo", category: "Penerima" }
    ];

    for (const aud of audiences) {
      try {
        const existing = await strapi.entityService.findMany('api::target-audience.target-audience', { filters: { name: aud.name } });
        if (existing.length === 0) {
          await strapi.entityService.create('api::target-audience.target-audience', { data: aud });
          console.log(`✅ Seeded Target Audience: ${aud.name}`);
        }
      } catch (e) {
        console.error(`❌ Failed Target Audience ${aud.name}:`, e.message);
      }
    }

    console.log('🎉 Seeding check finished!');
  },
};
