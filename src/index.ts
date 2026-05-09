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
        heroSubtitle: "Garda Pangan adalah food rescue organization yang berfokus pada isu food loss and waste.",
        heroCtaText: "Pelajari Selengkapnya",
        heroCtaLink: "/about",
        didYouKnow: [
          { content: "Did you know that 1/3 of all food produced for human consumption is lost or wasted globally?" },
          { content: "Food waste contributes to approximately 8-10% of total global greenhouse gas emissions." },
          { content: "Indonesia is the second largest food waster in the world after Saudi Arabia." }
        ],
        impactTitle: "Our Impact",
        impactStats: [
          { label: "Porsi Makanan Terselamatkan", value: "608.311+" },
          { label: "Potensi Gas CO2 Berkurang", value: "788.500 kg" },
          { label: "Potensi Kerugian Ekonomi Terselamatkan", value: "14.3 Miliar" },
          { label: "Sisa Makanan Terolah", value: "272 Ton" }
        ],
        featuredBy: {
          title: "Supporters & Collaborators",
          logos: []
        },
        agenPerubahanTitle: "Menjadi Agen Perubahan",
        agenPerubahanSubtitle: "Mari berkontribusi nyata dalam mengatasi masalah food waste di Indonesia",
        agenPerubahanCards: [
          { 
            title: "Donasi Makanan", 
            description: "Salurkan kelebihan makanan layak konsumsi Anda untuk mereka yang membutuhkan melalui sistem food rescue kami." 
          },
          { 
            title: "Menjadi Relawan", 
            description: "Bergabunglah sebagai food heroes dan bantu kami mendistribusikan makanan ke titik-titik penerima." 
          },
          { 
            title: "Donasi Dana", 
            description: "Dukung operasional kami untuk menjangkau lebih banyak orang dan menyelamatkan lebih banyak makanan." 
          }
        ],
        awardsSection: {
          title: "Awards & Recognition",
          images: []
        },
        instagramSection: {
          title: "Follow Our Journey",
          subtitle: "Dapatkan update terbaru kegiatan kami di Instagram",
          instagramHandle: "@gardapangan"
        }
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
        
        // Strapi v4 findMany on singleType returns the object, or null if it doesn't exist
        // If it's an array (sometimes happens in some configurations), we check length
        const isExisting = Array.isArray(existing) ? existing.length > 0 : !!existing;

        if (!isExisting) {
          await strapi.entityService.create(uid, { data });
          console.log(`✅ Seeded SingleType: ${uid}`);
        } else {
          const id = Array.isArray(existing) ? existing[0].id : existing.id;
          await strapi.entityService.update(uid, id, { data });
          console.log(`🔄 Updated SingleType: ${uid}`);
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
