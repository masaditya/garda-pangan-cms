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

async function seed() {
  console.log('Starting Strapi Seeder...');
  
  // Initialize Strapi application without starting the full HTTP server,
  // but enough to interact with the database via Entity Service.
  const strapi = await createStrapi().load();
  strapi.server.mount();

  // Data for Single Types
  const singleTypes = {
    'api::homepage.homepage': {
      heroTitle: "ONE STOP FOOD LOSS & WASTE SOLUTION",
      heroSubtitle: "Garda Pangan adalah food rescue organization yang berfokus pada isu food loss and waste.",
      heroCtaText: "Pelajari Selengkapnya",
      heroCtaLink: "/about",
      didYouKnow: [
        { content: "Tahukah kamu bahwa 1/3 makanan di dunia terbuang percuma?" },
        { content: "Indonesia adalah pembuang makanan terbesar kedua di dunia." },
        { content: "Food waste menyumbang 8-10% emisi gas rumah kaca global." }
      ],
      impactTitle: "Dampak Kami",
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
      awardTitle: "Awards & Recognition",
      awardCards: [
        { title: "Tokoh Penggerak Inovasi Sosial", year: "2026" },
        { title: "Pejuang Pangan Berkelanjutan", year: "2024" },
        { title: "Anugerah Komunitas Penggerak Terdepan", year: "2024" }
      ],
      instagramTitle: "Follow Our Journey",
      instagramCards: [
        { 
          title: "Update Kegiatan", 
          subtitle: "Dapatkan update terbaru kegiatan kami di Instagram", 
          instagramHandle: "@gardapangan" 
        }
      ],
      supporterTitle: "Our Supporters & Collaborators",
      supporterSubtitle: "Terima kasih kepada mitra yang telah mendukung gerakan kami",
      supporterCards: [
        { title: "Mitra Industri" },
        { title: "Mitra Komunitas" },
        { title: "Mitra Pemerintah" }
      ]
    },
    'api::about.about': {
      heroTitle: "Tentang Kami",
      heroSubtitle:
        "Garda Pangan bermula dari pengalaman salah seorang founder, Dedhy Trunoyudho yang berlatar belakang pengusaha katering pernikahan, yang seringkali menghadapi masalah pembuangan makanan tiap pekannya. Dari sudut pandang bisnis, membuang makanan menjadi pilihan ideal karena cepat, murah, dan praktis untuk dilakukan.",
      historyTitle: "Sejarah Kami",
      historyContent1:
        "Bermula dari pengalaman salah seorang founder, Dedhy Trunoyudho yang berlatar belakang pengusaha katering pernikahan, yang seringkali menghadapi masalah pembuangan makanan tiap pekannya. Dari sudut pandang bisnis, membuang makanan menjadi pilihan ideal karena cepat, murah, dan praktis untuk dilakukan.",
      historyContent2:
        "Kebiasaan tersebut dicermati oleh Indah Audivtia, istri Dedhy yang melihat pembuangan makanan ini sebagai hal yang menyesakkan dan mengganggu. Kegelisahan itulah yang akhirnya menggerakkan mereka berdua untuk melakukan sesuatu, yaitu mendonasikan makanan berlebih.\n\nBersama Eva Bachtiar, seseorang yang juga mempunyai semangat yang sama untuk menyelesaikan isu pembuangan makanan, mereka bertiga menginisiasi gerakan food bank di Surabaya dengan nama Garda Pangan.",
      visionTitle: "Visi",
      visionHighlight: "Mewujudkan Indonesia Bebas Lapar Lewat Pendistribusian Makanan Berlebih",
      visionContent:
        "Kami mempunyai visi untuk mewujudkan pengelolaan makanan berlebih berpotensi terbuang untuk berbagai tujuan sosial, lingkungan, dan ekonomi sesuai dengan food recovery hierarchy.",
      missionTitle: "Misi",
      missionContent:
        "Menyelamatkan potensi makanan terbuang.\nMenyalurkan donasi makanan kepada kalangan masyarakat pra-sejahtera.\nMendorong semakin banyak industri dan bisnis di bidang makanan untuk menjadi donatur yang peduli akan pembuangan makanan.\nMeningkatkan kesadaran masyarakat akan kerugian yang ditimbulkan dari pembuangan makanan, baik dari segi ekonomi, lingkungan, dan sosial, lewat kampanye dan edukasi kreatif.\nMendorong pemerintah kota untuk menciptakan iklim dan sistem yang kondusif untuk mendorong entitas di dalamnya ikut aktif terlibat mengurangi sampah makanan, yang selaras dengan komitmen Kota Surabaya dalam mewujudkan kota ramah lingkungan dan peduli sosial.",
      targetDonaturTitle: "Target Donatur",
      targetPenerimaTitle: "Target Penerima",
      legalitasTitle: "Legalitas",
      legalityContent:
        "Garda Pangan secara resmi telah terdaftar dengan nama Yayasan Garda Pangan pada Maret 2018, sesuai dengan:\n\nAkta Notaris Tosin, S.H. Surabaya nomor 25-II-2018\n\nKeputusan Menteri Hukum dan HAM RI tanggal 6 Maret 2018 nomor AHU-0004107.AH.01.12. Tahun 2018.\n\nYayasan Garda Pangan berdiri sejak Juni 2017, dan bergerak di bidang sosial, lingkungan, dan penyelamatan makanan berlebih. Yayasan Garda Pangan tidak terafiliasi dengan instansi pemerintahan, golongan politik, serta agama tertentu."
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
      heroTitleLine1: "Penerima",
      heroTitleLine2: "Bantuan",
      heroDescription:
        "Penerima manfaat (beneficiaries) utama dari distribusi makanan Garda Pangan adalah masyarakat pra-sejahtera di Surabaya, yang telah dipilih dengan cermat serta disurvey, agar bantuan yang diberikan tepat sasaran. Kategori penerima diantaranya berasal dari kaum dhuafa, yatim piatu, janda, lansia, difabel, pengungsi, dan anak jalanan.",
      testimonialsTitle: "Cerita mereka",
      testimonialsSubtitle:
        "Kutipan dari beberapa penerima manfaat Garda Pangan di Surabaya. Isi tautan video resmi Anda di Pengaturan konten untuk memutar testimoni lengkap dari YouTube.",
      testimonialButtonLabel: "Tonton Testimoni"
    },
    'api::event-page.event-page': {
      heroTitle: "Our Events",
      heroDescription: "Garda Pangan bermula dari pergerakan komunitas kecil yang berkembang jadi sesuatu yang memberikan manfaat lebih."
    },
    'api::knowledge-page.knowledge-page': {
      heroTitle: "Knowledge & Insights",
      heroSubtitle: "Artikel, pemberitaan, dan wawasan dari Garda Pangan",
      searchPlaceholder: "Cari Knowledge & Insights",
      categoryFilterLabel: "Kategori",
      filterAllLabel: "Tampilkan Semua",
      sortNewestLabel: "Terbaru",
      searchSubmitLabel: "Search",
      paginationPrevLabel: "Previous",
      paginationNextLabel: "Next",
      emptyListMessage: "Tidak ada artikel yang cocok dengan filter Anda."
    },
    'api::merchandise-page.merchandise-page': {
      heroTitle: "Merchandise",
      heroDescription: "Yuk jadi bagian dari gaya hidup bebas sampah! Pembelian merchandise juga menjadi sarana berdonasi langsung ke operasional kami."
    },
    'api::contact-page.contact-page': {
      heroTitleLine1: "Hubungi",
      heroTitleLine2: "Kami",
      heroIntro:
        "Donasikan secara rutin makanan surplus yang masih layak konsumsi dari bisnis makanan Anda, agar dapat memberi manfaat untuk masyarakat yang paling membutuhkan.",
      actionCards: [
        {
          title: "DUKUNG KAMI DENGAN DONASI DANA",
          description:
            "Dukung gerakan kami dengan berdonasi dana operasional, atau menjadi donatur rutin dan dapatkan gift menarik dari kami.",
          ctaLabel: "Hubungi Kami",
          ctaLink: "mailto:hello@gardapangan.org"
        },
        {
          title: "BERGABUNG MENJADI KLIEN PENGOLAHAN SAMPAH ORGANIK",
          description:
            "Kelola sampah organik yang dihasilkan bisnis dan perusahaan Anda secara bertanggung jawab dan berkelanjutan, dan dapatkan laporan pengolahan sampah setiap bulannya.",
          ctaLabel: "Hubungi Kami",
          ctaLink: "mailto:hello@gardapangan.org"
        },
        {
          title: "KUNJUNGAN",
          description:
            "Jadwalkan kunjungan untuk menyaksikan secara langsung fasilitas dan kegiatan Garda Pangan, serta belajar tentang aktivitas pencegahan dan pengurangan susut, sisa, dan sampah makanan.",
          ctaLabel: "Hubungi Kami",
          ctaLink: "mailto:hello@gardapangan.org"
        },
        {
          title: "BOOK JADWAL FOOD RESCUE",
          description:
            "Booking jadwal food rescue untuk individu, kelompok, sekolah, atau community service; dan dapatkan pengalaman berharga menjadi relawan Garda Pangan tanpa antri.",
          ctaLabel: "Hubungi Kami",
          ctaLink: "mailto:hello@gardapangan.org"
        },
        {
          title: "KOLABORASI CSR",
          description:
            "Bangun kemitraan Corporate Social Responsibility bersama Garda Pangan untuk program sosial dan lingkungan yang terukur dan berkelanjutan.",
          ctaLabel: "Hubungi Kami",
          ctaLink: "mailto:hello@gardapangan.org"
        },
        {
          title: "PERMINTAAN SPEAKER / JURI / NARASUMBER / KULIAH TAMU",
          description:
            "Dapatkan wawasan mendalam tentang materi susut, sisa, dan sampah makanan; social enterprise; kerelawanan; serta gerakan lingkungan; dari narasumber berpengalaman.",
          ctaLabel: "Hubungi Kami",
          ctaLink: "mailto:hello@gardapangan.org"
        },
        {
          title: "PERMINTAAN LIPUTAN MEDIA",
          description:
            "Sebarluaskan gerakan kami agar semakin berdampak luas dengan liputan media massa, media cetak, dan media elektronik.",
          ctaLabel: "Hubungi Kami",
          ctaLink: "mailto:hello@gardapangan.org"
        },
        {
          title: "PERMINTAAN SKRIPSI / TESIS / RISET",
          description: "Tertarik menjadikan Garda Pangan sebagai obyek skripsi, tesis, atau riset yang Anda susun?",
          ctaLabel: "Hubungi Kami",
          ctaLink: "mailto:hello@gardapangan.org"
        },
        {
          title: "PERMOHONAN MAGANG",
          description:
            "Tertarik mengaplikasikan ilmu Anda agar berdampak luas dengan magang di Garda Pangan?",
          ctaLabel: "Hubungi Kami",
          ctaLink: "mailto:hello@gardapangan.org"
        },
        {
          title: "PERMINTAAN PERHITUNGAN SUSUT, SISA, DAN SAMPAH MAKANAN",
          description:
            "Ingin mengetahui jumlah susut, sisa, dan sampah makanan yang dihasilkan oleh bisnis dan perusahaan Anda? Kami siap melakukan perhitungan dengan metode standar nasional.",
          ctaLabel: "Hubungi Kami",
          ctaLink: "mailto:hello@gardapangan.org"
        },
        {
          title: "PERMINTAAN KEBUTUHAN LAINNYA",
          description: "Bicarakan apapun kebutuhan Anda dengan kami.",
          ctaLabel: "Hubungi Kami",
          ctaLink: "mailto:hello@gardapangan.org"
        }
      ]
    },
    'api::dukung-kami-page.dukung-kami-page': {
      heroTitleLine1: "Dukung",
      heroTitleLine2: "Kami",
      heroIntro:
        "Dukung gerakan kami dengan berdonasi dana operasional, atau menjadi donatur rutin"
    }
  };

  // Hapus konten Knowledge template (artikel, kategori blog lama, dan penulis) sebelum seed baru
  async function wipeKnowledgeCollections() {
    await strapi.db.query('api::article.article').deleteMany({ where: {} });
    console.log('🗑 Cleared all Articles');
    await strapi.db.query('api::category.category').deleteMany({ where: {} });
    console.log('🗑 Cleared all Categories');
    await strapi.db.query('api::author.author').deleteMany({ where: {} });
    console.log('🗑 Cleared all Authors');
  }

  await wipeKnowledgeCollections();

  for (const [uid, data] of Object.entries(singleTypes)) {
    try {
      const existing = await strapi.entityService.findMany(uid);
      
      const isExisting = Array.isArray(existing) ? existing.length > 0 : !!existing;
      const id = Array.isArray(existing) ? existing[0]?.id : existing?.id;

      if (!isExisting) {
        await strapi.entityService.create(uid, { data });
        console.log(`✅ Seeded SingleType: ${uid}`);
      } else {
        await strapi.entityService.update(uid, id, { data });
        console.log(`🔄 Updated SingleType: ${uid}`);
      }
    } catch (e) {
      console.error(`❌ Failed to seed SingleType ${uid}:`, e.message);
    }
  }

  // Seed Collection Types: Testimonials (teks lengkap seperti referensi Penerima Bantuan.pdf)
  const testimonials = [
    {
      name: "Siti Rahayu",
      location: "Benowo, Surabaya",
      quote:
        "Waktu suami saya kena PHK, kami benar-benar kesulitan makan. Garda Pangan datang dengan paket makanan yang cukup untuk seminggu. Anak-anak saya bisa makan dengan layak. Terima kasih dari lubuk hati kami.",
    },
    {
      name: "Dewi Wahyuni",
      location: "Tambak Rejo, Surabaya",
      quote:
        "Saya ibu tunggal dengan tiga anak. Garda Pangan bantu kami saat beras di rumah habis dan gajian masih lama. Prosesnya cepat dan petugasnya sangat ramah. Tidak ada yang bikin malu, mereka sangat menghormati kami.",
    },
    {
      name: "Bapak Ponimin",
      location: "Wonokromo, Surabaya",
      quote:
        "Saya lansia, hidup sendiri, dan tidak punya penghasilan tetap. Tiap minggu relawan Garda Pangan antar makanan ke rumah. Mereka tidak hanya bawa makanan, tapi juga ngobrol dan peduli sama saya.",
    },
  ];

  for (const t of testimonials) {
    try {
      const existing = await strapi.entityService.findMany("api::testimonial.testimonial", {
        filters: { name: t.name },
      });
      const testimonialPublished = {
        quote: t.quote,
        location: t.location,
        publishedAt: new Date(),
      };
      if (!existing?.length) {
        await strapi.entityService.create("api::testimonial.testimonial", {
          data: { name: t.name, ...testimonialPublished },
        });
        console.log(`✅ Seeded Testimonial: ${t.name}`);
      } else {
        await strapi.entityService.update("api::testimonial.testimonial", existing[0].id, {
          data: testimonialPublished,
        });
        console.log(`🔄 Updated Testimonial: ${t.name}`);
      }
    } catch (e) {
      console.error(`❌ Failed Testimonial ${t.name}:`, e.message);
    }
  }
  
  // Seed Collection Types: Target Audience (Donatur and Penerima)
  const audiences = [
    { name: "Industri Makanan", category: "Donatur" },
    { name: "Distributor Makanan", category: "Donatur" },
    { name: "Industri Hospitality", category: "Donatur" },
    { name: "Katering", category: "Donatur" },
    { name: "Festival Kuliner", category: "Donatur" },
    { name: "Sekolah", category: "Donatur" },
    { name: "Pertanian", category: "Donatur" },
    { name: "Individu", category: "Donatur" },
    { name: "Pemukiman Masyarakat Pra-Sejahtera", category: "Penerima" },
    { name: "Panti Asuhan", category: "Penerima" },
    { name: "Panti Jompo", category: "Penerima" },
    { name: "Shelter Anak Jalanan", category: "Penerima" },
    { name: "Liponsos", category: "Penerima" },
    { name: "Rumah Singgah Pasien", category: "Penerima" },
    { name: "Warga Difabel", category: "Penerima" }
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

  // Knowledge: kategori, penulis, artikel (database sudah dikosongkan oleh wipe di atas)
  const categoryDefs = [
    {
      name: 'Kategori A',
      sortOrder: 1,
      description: 'Berita penghargaan, jejaring internasional, dan kebijakan penyelamatan pangan.',
    },
    {
      name: 'Kategori B',
      sortOrder: 2,
      description: 'Program komunitas dan literasi food waste.',
    },
    {
      name: 'Kategori C',
      sortOrder: 3,
      description: 'Kemitraan industri dan layanan food rescue.',
    },
    {
      name: 'Kategori D',
      sortOrder: 4,
      description: 'Riset, data, dan perkembangan lapangan.',
    },
  ];

  for (const c of categoryDefs) {
    try {
      await strapi.entityService.create('api::category.category', { data: c });
      console.log(`✅ Seeded Category: ${c.name}`);
    } catch (e) {
      console.error(`❌ Failed Category ${c.name}:`, e.message);
    }
  }

  const cats = await strapi.entityService.findMany('api::category.category', {
    fields: ['id', 'name'],
  });
  const categoryIdByName = Object.fromEntries((cats || []).map((x) => [x.name, x.id]));

  const authorDefs = [
    {
      name: 'Tim Komunikasi Yayasan Garda Pangan',
      email: 'media@gardapangan.org',
      bio: 'Mengelola publikasi resmi dan penyampaian cerita dampak Garda Pangan.',
    },
    {
      name: 'Redaksi Knowledge Garda Pangan',
      email: 'knowledge@gardapangan.org',
      bio: 'Mengkurasi artikel wawasan tentang food waste, kebijakan, dan praktik penyelamatan pangan.',
    },
  ];

  for (const a of authorDefs) {
    try {
      await strapi.entityService.create('api::author.author', { data: a });
      console.log(`✅ Seeded Author: ${a.name}`);
    } catch (e) {
      console.error(`❌ Failed Author ${a.name}:`, e.message);
    }
  }

  const authors = await strapi.entityService.findMany('api::author.author', {
    fields: ['id', 'email'],
  });
  const authorIdByEmail = Object.fromEntries((authors || []).map((x) => [x.email, x.id]));

  const sampleParagraph =
    'Garda Pangan terus memperkuat peran food rescue di Indonesia melalui jejaring donatur, distribusi aman, serta edukasi bermartabat agar makanan berlebih bermanfaat bagi masyarakat dan mengurangi dampak lingkungan.';

  function slugify(title) {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/gi, '')
      .trim()
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  }

  const articleDefs = [
    {
      title: 'Apresiasi Satu Indonesia Awards',
      description:
        'Penghargaan untuk kontribusi sosial dan inovasi penyelamatan pangan yang konsisten di tingkat nasional.',
      categoryName: 'Kategori A',
      authorEmail: 'media@gardapangan.org',
      isFeatured: true,
    },
    {
      title: 'Garda Pangan dalam One Planet Network Forum',
      description:
        'Partisipasi Garda Pangan dalam dialog global keberlanjutan pangan dan food waste di One Planet Network.',
      categoryName: 'Kategori A',
      authorEmail: 'knowledge@gardapangan.org',
      isFeatured: true,
    },
    {
      title: 'Apresiasi untuk Garda Pangan dalam IDAFLW 2024',
      description:
        'Pengakuan atas upaya mengurangi pemborosan pangan di peringatan International Day of Awareness of Food Loss and Waste.',
      categoryName: 'Kategori A',
      authorEmail: 'media@gardapangan.org',
      isFeatured: false,
    },
    {
      title: 'Peluncuran Metode Baku Perhitungan Susut dan Sisa Pangan',
      description:
        'Metodologi standar untuk mengukur dan melaporkan susut dan sisa pangan di jalur distribusi dan penyaluran.',
      categoryName: 'Kategori A',
      authorEmail: 'knowledge@gardapangan.org',
      isFeatured: false,
    },
    {
      title: 'Kampanye Food Waste untuk Generasi Muda di Sekolah',
      description:
        'Literasi food waste dan kebiasaan ramah pangan melalui materi interaktif bagi pelajar dan guru.',
      categoryName: 'Kategori B',
      authorEmail: 'knowledge@gardapangan.org',
      isFeatured: false,
    },
    {
      title: 'Kolaborasi Hotel dan Layanan Food Rescue Perkotaan',
      description:
        'Potret kemitraan hotel dan katering dengan sistem penjemputan makanan surplus yang aman dan terukur.',
      categoryName: 'Kategori C',
      authorEmail: 'media@gardapangan.org',
      isFeatured: false,
    },
    {
      title: 'Edukasi Ketahanan Pangan di Lingkungan Pemukiman Pra-Sejahtera',
      description:
        'Pendekatan komunitas dalam memanfaatkan bantuan makanan serta mencegah pemborosan di tingkat rumah tangga.',
      categoryName: 'Kategori D',
      authorEmail: 'knowledge@gardapangan.org',
      isFeatured: false,
    },
    {
      title: 'Praktik Lapangan Pengurangan Food Loss bagi Distributor Makanan',
      description:
        'Pengalaman mitra distributor dalam mengalihkan stok layak konsumsi kepada penerima manfaat bersama Garda Pangan.',
      categoryName: 'Kategori B',
      authorEmail: 'media@gardapangan.org',
      isFeatured: false,
    },
  ];

  for (const art of articleDefs) {
    try {
      await strapi.entityService.create('api::article.article', {
        data: {
          title: art.title,
          slug: slugify(art.title),
          description: art.description,
          content:
            `${sampleParagraph}\n\nArtikel ini disusun sebagai referensi bagi pembaca yang ingin memahami lebih dalam konteksnya.`,
          category: categoryIdByName[art.categoryName],
          author: authorIdByEmail[art.authorEmail],
          isFeatured: Boolean(art.isFeatured),
          publishedAt: new Date(),
        },
      });
      console.log(`✅ Seeded Article: ${art.title}`);
    } catch (e) {
      console.error(`❌ Failed Article ${art.title}:`, e.message);
    }
  }

  console.log('🎉 Seeding completely finished!');
  process.exit(0);
}

seed().catch(err => {
  console.error("General Error:", err);
  process.exit(1);
});
