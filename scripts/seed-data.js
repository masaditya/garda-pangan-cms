'use strict';

/** Konten seed per locale: `id` (Indonesia) dan `en` (English). */

const sampleParagraph = {
  id: 'Garda Pangan terus memperkuat peran food rescue di Indonesia melalui jejaring donatur, distribusi aman, serta edukasi bermartabat agar makanan berlebih bermanfaat bagi masyarakat dan mengurangi dampak lingkungan.',
  en: 'Garda Pangan continues to strengthen its food rescue role in Indonesia through donor networks, safe distribution, and dignified education so surplus food benefits communities and reduces environmental impact.',
};

const sampleParagraphExtra = {
  id: 'Artikel ini disusun sebagai referensi bagi pembaca yang ingin memahami lebih dalam konteksnya.',
  en: 'This article is provided as a reference for readers who want to understand the topic in greater depth.',
};

const singleTypes = {
  'api::homepage.homepage': {
    id: {
      heroTitle: 'ONE STOP FOOD LOSS & WASTE SOLUTION',
      heroSubtitle:
        'Garda Pangan adalah food rescue organization yang berfokus pada isu food loss and waste.',
      heroCtaText: 'Pelajari Selengkapnya',
      heroCtaLink: '/about',
      didYouKnow: [
        { content: 'Tahukah kamu bahwa 1/3 makanan di dunia terbuang percuma?' },
        { content: 'Indonesia adalah pembuang makanan terbesar kedua di dunia.' },
        { content: 'Food waste menyumbang 8-10% emisi gas rumah kaca global.' },
      ],
      impactTitle: 'Dampak Kami',
      impactStats: [
        { label: 'Porsi Makanan Terselamatkan', value: '608.311+' },
        { label: 'Potensi Gas CO2 Berkurang', value: '788.500 kg' },
        { label: 'Potensi Kerugian Ekonomi Terselamatkan', value: '14.3 Miliar' },
        { label: 'Sisa Makanan Terolah', value: '272 Ton' },
      ],
      featuredBy: { title: 'Supporters & Collaborators', logos: [] },
      agenPerubahanTitle: 'Menjadi Agen Perubahan',
      agenPerubahanSubtitle:
        'Mari berkontribusi nyata dalam mengatasi masalah food waste di Indonesia',
      agenPerubahanCards: [
        {
          title: 'Donasi Makanan',
          description:
            'Salurkan kelebihan makanan layak konsumsi Anda untuk mereka yang membutuhkan melalui sistem food rescue kami.',
        },
        {
          title: 'Menjadi Relawan',
          description:
            'Bergabunglah sebagai food heroes dan bantu kami mendistribusikan makanan ke titik-titik penerima.',
        },
        {
          title: 'Donasi Dana',
          description:
            'Dukung operasional kami untuk menjangkau lebih banyak orang dan menyelamatkan lebih banyak makanan.',
        },
      ],
      awardTitle: 'Awards & Recognition',
      awardCards: [
        { title: 'Tokoh Penggerak Inovasi Sosial', year: '2026' },
        { title: 'Pejuang Pangan Berkelanjutan', year: '2024' },
        { title: 'Anugerah Komunitas Penggerak Terdepan', year: '2024' },
      ],
      instagramTitle: 'Follow Our Journey',
      instagramCards: [
        {
          title: 'Update Kegiatan',
          subtitle: 'Dapatkan update terbaru kegiatan kami di Instagram',
          instagramHandle: '@gardapangan',
        },
      ],
      supporterTitle: 'Our Supporters & Collaborators',
      supporterSubtitle: 'Terima kasih kepada mitra yang telah mendukung gerakan kami',
      supporterCards: [
        { title: 'Mitra Industri' },
        { title: 'Mitra Komunitas' },
        { title: 'Mitra Pemerintah' },
      ],
    },
    en: {
      heroTitle: 'ONE STOP FOOD LOSS & WASTE SOLUTION',
      heroSubtitle:
        'Garda Pangan is a food rescue organization focused on food loss and waste.',
      heroCtaText: 'Learn More',
      heroCtaLink: '/about',
      didYouKnow: [
        { content: 'Did you know that one-third of food in the world is wasted?' },
        { content: 'Indonesia is the second-largest food waster in the world.' },
        { content: 'Food waste contributes 8–10% of global greenhouse gas emissions.' },
      ],
      impactTitle: 'Our Impact',
      impactStats: [
        { label: 'Meals Rescued', value: '608,311+' },
        { label: 'Potential CO2 Reduced', value: '788,500 kg' },
        { label: 'Potential Economic Loss Prevented', value: '14.3 Billion' },
        { label: 'Surplus Food Processed', value: '272 Tons' },
      ],
      featuredBy: { title: 'Supporters & Collaborators', logos: [] },
      agenPerubahanTitle: 'Become a Change Agent',
      agenPerubahanSubtitle:
        'Make a real contribution to tackling food waste in Indonesia',
      agenPerubahanCards: [
        {
          title: 'Food Donation',
          description:
            'Donate your surplus edible food to those in need through our food rescue system.',
        },
        {
          title: 'Volunteer',
          description:
            'Join as food heroes and help us distribute meals to beneficiary communities.',
        },
        {
          title: 'Financial Donation',
          description:
            'Support our operations to reach more people and rescue more food.',
        },
      ],
      awardTitle: 'Awards & Recognition',
      awardCards: [
        { title: 'Social Innovation Catalyst', year: '2026' },
        { title: 'Sustainable Food Champion', year: '2024' },
        { title: 'Leading Community Movement Award', year: '2024' },
      ],
      instagramTitle: 'Follow Our Journey',
      instagramCards: [
        {
          title: 'Activity Updates',
          subtitle: 'Get the latest updates on our activities on Instagram',
          instagramHandle: '@gardapangan',
        },
      ],
      supporterTitle: 'Our Supporters & Collaborators',
      supporterSubtitle: 'Thank you to partners who support our movement',
      supporterCards: [
        { title: 'Industry Partners' },
        { title: 'Community Partners' },
        { title: 'Government Partners' },
      ],
    },
  },

  'api::about.about': {
    id: {
      heroTitle: 'Tentang Kami',
      heroSubtitle:
        'Garda Pangan bermula dari pengalaman salah seorang founder, Dedhy Trunoyudho yang berlatar belakang pengusaha katering pernikahan, yang seringkali menghadapi masalah pembuangan makanan tiap pekannya. Dari sudut pandang bisnis, membuang makanan menjadi pilihan ideal karena cepat, murah, dan praktis untuk dilakukan.',
      historyTitle: 'Sejarah Kami',
      historyContent1:
        'Bermula dari pengalaman salah seorang founder, Dedhy Trunoyudho yang berlatar belakang pengusaha katering pernikahan, yang seringkali menghadapi masalah pembuangan makanan tiap pekannya. Dari sudut pandang bisnis, membuang makanan menjadi pilihan ideal karena cepat, murah, dan praktis untuk dilakukan.',
      historyContent2:
        'Kebiasaan tersebut dicermati oleh Indah Audivtia, istri Dedhy yang melihat pembuangan makanan ini sebagai hal yang menyesakkan dan mengganggu. Kegelisahan itulah yang akhirnya menggerakkan mereka berdua untuk melakukan sesuatu, yaitu mendonasikan makanan berlebih.\n\nBersama Eva Bachtiar, seseorang yang juga mempunyai semangat yang sama untuk menyelesaikan isu pembuangan makanan, mereka bertiga menginisiasi gerakan food bank di Surabaya dengan nama Garda Pangan.',
      visionTitle: 'Visi',
      visionHighlight: 'Mewujudkan Indonesia Bebas Lapar Lewat Pendistribusian Makanan Berlebih',
      visionContent:
        'Kami mempunyai visi untuk mewujudkan pengelolaan makanan berlebih berpotensi terbuang untuk berbagai tujuan sosial, lingkungan, dan ekonomi sesuai dengan food recovery hierarchy.',
      missionTitle: 'Misi',
      missionContent:
        'Menyelamatkan potensi makanan terbuang.\nMenyalurkan donasi makanan kepada kalangan masyarakat pra-sejahtera.\nMendorong semakin banyak industri dan bisnis di bidang makanan untuk menjadi donatur yang peduli akan pembuangan makanan.\nMeningkatkan kesadaran masyarakat akan kerugian yang ditimbulkan dari pembuangan makanan, baik dari segi ekonomi, lingkungan, dan sosial, lewat kampanye dan edukasi kreatif.\nMendorong pemerintah kota untuk menciptakan iklim dan sistem yang kondusif untuk mendorong entitas di dalamnya ikut aktif terlibat mengurangi sampah makanan, yang selaras dengan komitmen Kota Surabaya dalam mewujudkan kota ramah lingkungan dan peduli sosial.',
      targetDonaturTitle: 'Target Donatur',
      targetPenerimaTitle: 'Target Penerima',
      legalitasTitle: 'Legalitas',
      legalityContent:
        'Garda Pangan secara resmi telah terdaftar dengan nama Yayasan Garda Pangan pada Maret 2018, sesuai dengan:\n\nAkta Notaris Tosin, S.H. Surabaya nomor 25-II-2018\n\nKeputusan Menteri Hukum dan HAM RI tanggal 6 Maret 2018 nomor AHU-0004107.AH.01.12. Tahun 2018.\n\nYayasan Garda Pangan berdiri sejak Juni 2017, dan bergerak di bidang sosial, lingkungan, dan penyelamatan makanan berlebih. Yayasan Garda Pangan tidak terafiliasi dengan instansi pemerintahan, golongan politik, serta agama tertentu.',
    },
    en: {
      heroTitle: 'About Us',
      heroSubtitle:
        'Garda Pangan began from the experience of founder Dedhy Trunoyudho, a wedding catering entrepreneur who often faced food disposal every week. From a business perspective, throwing food away was the fastest, cheapest, and most practical option.',
      historyTitle: 'Our History',
      historyContent1:
        'It started with founder Dedhy Trunoyudho, a wedding catering entrepreneur who regularly faced food waste every week. From a business standpoint, discarding food was the ideal choice because it was fast, cheap, and practical.',
      historyContent2:
        'This habit was observed by Indah Audivtia, Dedhy’s wife, who found food waste distressing. That concern moved them to act by donating surplus food.\n\nTogether with Eva Bachtiar, who shared the same passion to address food waste, they initiated a food bank movement in Surabaya called Garda Pangan.',
      visionTitle: 'Vision',
      visionHighlight:
        'Realizing a Hunger-Free Indonesia Through Redistribution of Surplus Food',
      visionContent:
        'We envision managing potentially wasted surplus food for social, environmental, and economic purposes in line with the food recovery hierarchy.',
      missionTitle: 'Mission',
      missionContent:
        'Rescue potentially wasted food.\nDistribute food donations to underprivileged communities.\nEncourage more food businesses to become donors who care about food waste.\nRaise public awareness of the economic, environmental, and social costs of food waste through creative campaigns and education.\nEncourage city governments to create conducive systems for reducing food waste, aligned with Surabaya’s commitment to an environmentally friendly and socially caring city.',
      targetDonaturTitle: 'Donor Targets',
      targetPenerimaTitle: 'Beneficiary Targets',
      legalitasTitle: 'Legal Status',
      legalityContent:
        'Garda Pangan is officially registered as Yayasan Garda Pangan in March 2018:\n\nNotarial deed Tosin, S.H. Surabaya number 25-II-2018\n\nDecree of the Minister of Law and Human Rights dated 6 March 2018 number AHU-0004107.AH.01.12. Year 2018.\n\nYayasan Garda Pangan has operated since June 2017 in social, environmental, and surplus food rescue work. The foundation is not affiliated with any government agency, political group, or specific religion.',
    },
  },

  'api::mitra.mitra': {
    id: {
      heroTitle: 'Jadi Mitra',
      heroInfoCards: [
        { content: 'Membantu perusahaan mencapai Zero Waste to Landfill.' },
        { content: 'Memberikan dampak sosial terukur bagi masyarakat yang membutuhkan.' },
        { content: 'Sertifikat donasi dan impact report akan diberikan secara rutin setiap periode.' },
      ],
      flowTitle: 'Bagaimana alur donasi Garda Pangan',
      flowDescription:
        'Garda Pangan menjalin kerjasama dengan mitra (restoran, hotel, dll) untuk menyelamatkan sisa makanan layak konsumsi.',
      flowSteps: [
        { title: 'Punya makanan berlebih?', description: 'Donasikan ke Garda Pangan saja!' },
        {
          title: 'Silahkan hubungi kami',
          description: 'Melalui narahubung resmi Garda Pangan',
          button1Label: 'WhatsApp',
          button1Link: '#',
          button2Label: 'Email Lengkap',
          button2Link: '#',
        },
        {
          title: 'Informasikan Keterangan',
          description: 'Jenis makanan, jumlah dan lokasi penjemputan donasi.',
        },
        {
          title: 'Tim akan menjemput donasi',
          description: 'Menuju target penerima yang sesuai kriteria.',
        },
        { title: 'Laporan Terkirim', description: 'Akan ada pelaporan transparan atas distribusi ini.' },
      ],
      partnerSectionTitle: 'Current Partner',
    },
    en: {
      heroTitle: 'Become a Partner',
      heroInfoCards: [
        { content: 'Help your company achieve Zero Waste to Landfill.' },
        { content: 'Deliver measurable social impact for communities in need.' },
        { content: 'Donation certificates and impact reports are provided regularly each period.' },
      ],
      flowTitle: 'How Garda Pangan donation works',
      flowDescription:
        'Garda Pangan partners with businesses (restaurants, hotels, etc.) to rescue edible surplus food.',
      flowSteps: [
        { title: 'Have surplus food?', description: 'Donate it to Garda Pangan!' },
        {
          title: 'Contact us',
          description: 'Through Garda Pangan official channels',
          button1Label: 'WhatsApp',
          button1Link: '#',
          button2Label: 'Full Email',
          button2Link: '#',
        },
        {
          title: 'Share details',
          description: 'Food type, quantity, and pickup location.',
        },
        {
          title: 'Our team picks up',
          description: 'Delivered to qualified beneficiaries.',
        },
        { title: 'Report delivered', description: 'Transparent reporting on distribution.' },
      ],
      partnerSectionTitle: 'Current Partners',
    },
  },

  'api::penerima-page.penerima-page': {
    id: {
      heroTitleLine1: 'Penerima',
      heroTitleLine2: 'Bantuan',
      heroDescription:
        'Penerima manfaat (beneficiaries) utama dari distribusi makanan Garda Pangan adalah masyarakat pra-sejahtera di Surabaya, yang telah dipilih dengan cermat serta disurvey, agar bantuan yang diberikan tepat sasaran. Kategori penerima diantaranya berasal dari kaum dhuafa, yatim piatu, janda, lansia, difabel, pengungsi, dan anak jalanan.',
      testimonialsTitle: 'Cerita mereka',
      testimonialsSubtitle:
        'Kutipan dari beberapa penerima manfaat Garda Pangan di Surabaya. Isi tautan video resmi Anda di Pengaturan konten untuk memutar testimoni lengkap dari YouTube.',
      testimonialButtonLabel: 'Tonton Testimoni',
    },
    en: {
      heroTitleLine1: 'Beneficiary',
      heroTitleLine2: 'Support',
      heroDescription:
        'The main beneficiaries of Garda Pangan food distribution are underprivileged communities in Surabaya, carefully selected and surveyed so assistance reaches the right people. Beneficiary groups include the poor, orphans, widows, elderly, people with disabilities, refugees, and street children.',
      testimonialsTitle: 'Their stories',
      testimonialsSubtitle:
        'Quotes from Garda Pangan beneficiaries in Surabaya. Add your official video URL in Content Manager to play the full testimonial from YouTube.',
      testimonialButtonLabel: 'Watch Testimonials',
    },
  },

  'api::event-page.event-page': {
    id: {
      heroTitle: 'Our Events',
      heroDescription:
        'Garda Pangan bermula dari pergerakan komunitas kecil yang berkembang jadi sesuatu yang memberikan manfaat lebih.',
    },
    en: {
      heroTitle: 'Our Events',
      heroDescription:
        'Garda Pangan started as a small community movement that grew into something with greater impact.',
    },
  },

  'api::knowledge-page.knowledge-page': {
    id: {
      heroTitle: 'Knowledge & Insights',
      heroSubtitle: 'Artikel, pemberitaan, dan wawasan dari Garda Pangan',
      searchPlaceholder: 'Cari Knowledge & Insights',
      categoryFilterLabel: 'Kategori',
      filterAllLabel: 'Tampilkan Semua',
      sortNewestLabel: 'Terbaru',
      searchSubmitLabel: 'Search',
      paginationPrevLabel: 'Previous',
      paginationNextLabel: 'Next',
      emptyListMessage: 'Tidak ada artikel yang cocok dengan filter Anda.',
    },
    en: {
      heroTitle: 'Knowledge & Insights',
      heroSubtitle: 'Articles, news, and insights from Garda Pangan',
      searchPlaceholder: 'Search Knowledge & Insights',
      categoryFilterLabel: 'Category',
      filterAllLabel: 'Show All',
      sortNewestLabel: 'Newest',
      searchSubmitLabel: 'Search',
      paginationPrevLabel: 'Previous',
      paginationNextLabel: 'Next',
      emptyListMessage: 'No articles match your filters.',
    },
  },

  'api::merchandise-page.merchandise-page': {
    id: {
      heroTitle: 'Merchandise',
      heroDescription:
        'Yuk jadi bagian dari gaya hidup bebas sampah! Pembelian merchandise juga menjadi sarana berdonasi langsung ke operasional kami.',
    },
    en: {
      heroTitle: 'Merchandise',
      heroDescription:
        'Join a zero-waste lifestyle! Merchandise purchases also directly support our operations.',
    },
  },

  'api::dukung-kami-page.dukung-kami-page': {
    id: {
      heroTitleLine1: 'Dukung',
      heroTitleLine2: 'Kami',
      heroIntro:
        'Dukung gerakan kami dengan berdonasi dana operasional, atau menjadi donatur rutin',
    },
    en: {
      heroTitleLine1: 'Support',
      heroTitleLine2: 'Us',
      heroIntro:
        'Support our movement with operational donations, or become a regular donor',
    },
  },
};

const contactActionCards = {
  id: [
    {
      title: 'DUKUNG KAMI DENGAN DONASI DANA',
      description:
        'Dukung gerakan kami dengan berdonasi dana operasional, atau menjadi donatur rutin dan dapatkan gift menarik dari kami.',
      ctaLabel: 'Hubungi Kami',
      ctaLink: 'mailto:hello@gardapangan.org',
    },
    {
      title: 'BERGABUNG MENJADI KLIEN PENGOLAHAN SAMPAH ORGANIK',
      description:
        'Kelola sampah organik yang dihasilkan bisnis dan perusahaan Anda secara bertanggung jawab dan berkelanjutan, dan dapatkan laporan pengolahan sampah setiap bulannya.',
      ctaLabel: 'Hubungi Kami',
      ctaLink: 'mailto:hello@gardapangan.org',
    },
    {
      title: 'KUNJUNGAN',
      description:
        'Jadwalkan kunjungan untuk menyaksikan secara langsung fasilitas dan kegiatan Garda Pangan, serta belajar tentang aktivitas pencegahan dan pengurangan susut, sisa, dan sampah makanan.',
      ctaLabel: 'Hubungi Kami',
      ctaLink: 'mailto:hello@gardapangan.org',
    },
    {
      title: 'BOOK JADWAL FOOD RESCUE',
      description:
        'Booking jadwal food rescue untuk individu, kelompok, sekolah, atau community service; dan dapatkan pengalaman berharga menjadi relawan Garda Pangan tanpa antri.',
      ctaLabel: 'Hubungi Kami',
      ctaLink: 'mailto:hello@gardapangan.org',
    },
    {
      title: 'KOLABORASI CSR',
      description:
        'Bangun kemitraan Corporate Social Responsibility bersama Garda Pangan untuk program sosial dan lingkungan yang terukur dan berkelanjutan.',
      ctaLabel: 'Hubungi Kami',
      ctaLink: 'mailto:hello@gardapangan.org',
    },
    {
      title: 'PERMINTAAN SPEAKER / JURI / NARASUMBER / KULIAH TAMU',
      description:
        'Dapatkan wawasan mendalam tentang materi susut, sisa, dan sampah makanan; social enterprise; kerelawanan; serta gerakan lingkungan; dari narasumber berpengalaman.',
      ctaLabel: 'Hubungi Kami',
      ctaLink: 'mailto:hello@gardapangan.org',
    },
    {
      title: 'PERMINTAAN LIPUTAN MEDIA',
      description:
        'Sebarluaskan gerakan kami agar semakin berdampak luas dengan liputan media massa, media cetak, dan media elektronik.',
      ctaLabel: 'Hubungi Kami',
      ctaLink: 'mailto:hello@gardapangan.org',
    },
    {
      title: 'PERMINTAAN SKRIPSI / TESIS / RISET',
      description: 'Tertarik menjadikan Garda Pangan sebagai obyek skripsi, tesis, atau riset yang Anda susun?',
      ctaLabel: 'Hubungi Kami',
      ctaLink: 'mailto:hello@gardapangan.org',
    },
    {
      title: 'PERMOHONAN MAGANG',
      description:
        'Tertarik mengaplikasikan ilmu Anda agar berdampak luas dengan magang di Garda Pangan?',
      ctaLabel: 'Hubungi Kami',
      ctaLink: 'mailto:hello@gardapangan.org',
    },
    {
      title: 'PERMINTAAN PERHITUNGAN SUSUT, SISA, DAN SAMPAH MAKANAN',
      description:
        'Ingin mengetahui jumlah susut, sisa, dan sampah makanan yang dihasilkan oleh bisnis dan perusahaan Anda? Kami siap melakukan perhitungan dengan metode standar nasional.',
      ctaLabel: 'Hubungi Kami',
      ctaLink: 'mailto:hello@gardapangan.org',
    },
    {
      title: 'PERMINTAAN KEBUTUHAN LAINNYA',
      description: 'Bicarakan apapun kebutuhan Anda dengan kami.',
      ctaLabel: 'Hubungi Kami',
      ctaLink: 'mailto:hello@gardapangan.org',
    },
  ],
  en: [
    {
      title: 'SUPPORT US WITH FINANCIAL DONATIONS',
      description:
        'Support our movement with operational donations, or become a regular donor and receive gifts from us.',
      ctaLabel: 'Contact Us',
      ctaLink: 'mailto:hello@gardapangan.org',
    },
    {
      title: 'BECOME AN ORGANIC WASTE PROCESSING CLIENT',
      description:
        'Manage your business organic waste responsibly and sustainably, with monthly processing reports.',
      ctaLabel: 'Contact Us',
      ctaLink: 'mailto:hello@gardapangan.org',
    },
    {
      title: 'VISIT',
      description:
        'Schedule a visit to see Garda Pangan facilities and activities, and learn about preventing and reducing food loss, waste, and surplus.',
      ctaLabel: 'Contact Us',
      ctaLink: 'mailto:hello@gardapangan.org',
    },
    {
      title: 'BOOK A FOOD RESCUE SCHEDULE',
      description:
        'Book food rescue sessions for individuals, groups, schools, or community service and gain valuable volunteer experience with Garda Pangan.',
      ctaLabel: 'Contact Us',
      ctaLink: 'mailto:hello@gardapangan.org',
    },
    {
      title: 'CSR COLLABORATION',
      description:
        'Build Corporate Social Responsibility partnerships with Garda Pangan for measurable, sustainable social and environmental programs.',
      ctaLabel: 'Contact Us',
      ctaLink: 'mailto:hello@gardapangan.org',
    },
    {
      title: 'SPEAKER / JUDGE / GUEST LECTURER REQUEST',
      description:
        'Gain insights on food loss, waste, and surplus; social enterprise; volunteering; and environmental movements from experienced speakers.',
      ctaLabel: 'Contact Us',
      ctaLink: 'mailto:hello@gardapangan.org',
    },
    {
      title: 'MEDIA COVERAGE REQUEST',
      description:
        'Help spread our movement through mass media, print, and electronic media coverage.',
      ctaLabel: 'Contact Us',
      ctaLink: 'mailto:hello@gardapangan.org',
    },
    {
      title: 'THESIS / RESEARCH REQUEST',
      description: 'Interested in using Garda Pangan as the subject of your thesis or research?',
      ctaLabel: 'Contact Us',
      ctaLink: 'mailto:hello@gardapangan.org',
    },
    {
      title: 'INTERNSHIP APPLICATION',
      description: 'Interested in applying your knowledge through an internship at Garda Pangan?',
      ctaLabel: 'Contact Us',
      ctaLink: 'mailto:hello@gardapangan.org',
    },
    {
      title: 'FOOD LOSS, WASTE & SURPLUS CALCULATION REQUEST',
      description:
        'Want to know how much food loss, waste, and surplus your business generates? We can calculate it using national standard methods.',
      ctaLabel: 'Contact Us',
      ctaLink: 'mailto:hello@gardapangan.org',
    },
    {
      title: 'OTHER REQUESTS',
      description: 'Discuss any needs you have with us.',
      ctaLabel: 'Contact Us',
      ctaLink: 'mailto:hello@gardapangan.org',
    },
  ],
};

singleTypes['api::contact-page.contact-page'] = {
  id: {
    heroTitleLine1: 'Hubungi',
    heroTitleLine2: 'Kami',
    heroIntro:
      'Donasikan secara rutin makanan surplus yang masih layak konsumsi dari bisnis makanan Anda, agar dapat memberi manfaat untuk masyarakat yang paling membutuhkan.',
    actionCards: contactActionCards.id,
  },
  en: {
    heroTitleLine1: 'Contact',
    heroTitleLine2: 'Us',
    heroIntro:
      'Regularly donate edible surplus food from your food business so it benefits those who need it most.',
    actionCards: contactActionCards.en,
  },
};

const testimonials = [
  {
    key: 'siti-rahayu',
    id: {
      name: 'Siti Rahayu',
      location: 'Benowo, Surabaya',
      quote:
        'Waktu suami saya kena PHK, kami benar-benar kesulitan makan. Garda Pangan datang dengan paket makanan yang cukup untuk seminggu. Anak-anak saya bisa makan dengan layak. Terima kasih dari lubuk hati kami.',
    },
    en: {
      name: 'Siti Rahayu',
      location: 'Benowo, Surabaya',
      quote:
        'When my husband was laid off, we really struggled to eat. Garda Pangan came with enough food for a week. My children could eat properly. Thank you from the bottom of our hearts.',
    },
  },
  {
    key: 'dewi-wahyuni',
    id: {
      name: 'Dewi Wahyuni',
      location: 'Tambak Rejo, Surabaya',
      quote:
        'Saya ibu tunggal dengan tiga anak. Garda Pangan bantu kami saat beras di rumah habis dan gajian masih lama. Prosesnya cepat dan petugasnya sangat ramah. Tidak ada yang bikin malu, mereka sangat menghormati kami.',
    },
    en: {
      name: 'Dewi Wahyuni',
      location: 'Tambak Rejo, Surabaya',
      quote:
        'I am a single mother with three children. Garda Pangan helped when we ran out of rice before payday. The process was fast and staff were very kind. They treated us with respect.',
    },
  },
  {
    key: 'bapak-ponimin',
    id: {
      name: 'Bapak Ponimin',
      location: 'Wonokromo, Surabaya',
      quote:
        'Saya lansia, hidup sendiri, dan tidak punya penghasilan tetap. Tiap minggu relawan Garda Pangan antar makanan ke rumah. Mereka tidak hanya bawa makanan, tapi juga ngobrol dan peduli sama saya.',
    },
    en: {
      name: 'Bapak Ponimin',
      location: 'Wonokromo, Surabaya',
      quote:
        'I am elderly, live alone, and have no fixed income. Every week Garda Pangan volunteers deliver food to my home. They not only bring food but also chat and care for me.',
    },
  },
];

const targetAudiences = [
  { key: 'industri-makanan', category: 'Donatur', id: { name: 'Industri Makanan' }, en: { name: 'Food Industry' } },
  { key: 'distributor-makanan', category: 'Donatur', id: { name: 'Distributor Makanan' }, en: { name: 'Food Distributor' } },
  { key: 'industri-hospitality', category: 'Donatur', id: { name: 'Industri Hospitality' }, en: { name: 'Hospitality Industry' } },
  { key: 'katering', category: 'Donatur', id: { name: 'Katering' }, en: { name: 'Catering' } },
  { key: 'festival-kuliner', category: 'Donatur', id: { name: 'Festival Kuliner' }, en: { name: 'Culinary Festival' } },
  { key: 'sekolah', category: 'Donatur', id: { name: 'Sekolah' }, en: { name: 'School' } },
  { key: 'pertanian', category: 'Donatur', id: { name: 'Pertanian' }, en: { name: 'Agriculture' } },
  { key: 'individu', category: 'Donatur', id: { name: 'Individu' }, en: { name: 'Individual' } },
  {
    key: 'pemukiman-pra-sejahtera',
    category: 'Penerima',
    id: { name: 'Pemukiman Masyarakat Pra-Sejahtera' },
    en: { name: 'Underprivileged Communities' },
  },
  { key: 'panti-asuhan', category: 'Penerima', id: { name: 'Panti Asuhan' }, en: { name: 'Orphanage' } },
  { key: 'panti-jompo', category: 'Penerima', id: { name: 'Panti Jompo' }, en: { name: 'Nursing Home' } },
  {
    key: 'shelter-anak-jalanan',
    category: 'Penerima',
    id: { name: 'Shelter Anak Jalanan' },
    en: { name: 'Street Children Shelter' },
  },
  { key: 'liponsos', category: 'Penerima', id: { name: 'Liponsos' }, en: { name: 'Liponsos' } },
  {
    key: 'rumah-singgah-pasien',
    category: 'Penerima',
    id: { name: 'Rumah Singgah Pasien' },
    en: { name: 'Patient Guest House' },
  },
  { key: 'warga-difabel', category: 'Penerima', id: { name: 'Warga Difabel' }, en: { name: 'People with Disabilities' } },
];

const categories = [
  {
    key: 'kategori-a',
    sortOrder: 1,
    id: {
      name: 'Kategori A',
      description: 'Berita penghargaan, jejaring internasional, dan kebijakan penyelamatan pangan.',
    },
    en: {
      name: 'Category A',
      description: 'Awards, international networks, and food rescue policy news.',
    },
  },
  {
    key: 'kategori-b',
    sortOrder: 2,
    id: { name: 'Kategori B', description: 'Program komunitas dan literasi food waste.' },
    en: { name: 'Category B', description: 'Community programs and food waste literacy.' },
  },
  {
    key: 'kategori-c',
    sortOrder: 3,
    id: { name: 'Kategori C', description: 'Kemitraan industri dan layanan food rescue.' },
    en: { name: 'Category C', description: 'Industry partnerships and food rescue services.' },
  },
  {
    key: 'kategori-d',
    sortOrder: 4,
    id: { name: 'Kategori D', description: 'Riset, data, dan perkembangan lapangan.' },
    en: { name: 'Category D', description: 'Research, data, and field developments.' },
  },
];

const authors = [
  {
    key: 'media',
    email: 'media@gardapangan.org',
    id: {
      name: 'Tim Komunikasi Yayasan Garda Pangan',
      bio: 'Mengelola publikasi resmi dan penyampaian cerita dampak Garda Pangan.',
    },
    en: {
      name: 'Garda Pangan Foundation Communications Team',
      bio: 'Manages official publications and impact storytelling for Garda Pangan.',
    },
  },
  {
    key: 'knowledge',
    email: 'knowledge@gardapangan.org',
    id: {
      name: 'Redaksi Knowledge Garda Pangan',
      bio: 'Mengkurasi artikel wawasan tentang food waste, kebijakan, dan praktik penyelamatan pangan.',
    },
    en: {
      name: 'Garda Pangan Knowledge Editorial',
      bio: 'Curates insight articles on food waste, policy, and food rescue practices.',
    },
  },
];

const articles = [
  {
    key: 'apresiasi-satu-indonesia-awards',
    categoryKey: 'kategori-a',
    authorEmail: 'media@gardapangan.org',
    isFeatured: true,
    id: {
      title: 'Apresiasi Satu Indonesia Awards',
      description:
        'Penghargaan untuk kontribusi sosial dan inovasi penyelamatan pangan yang konsisten di tingkat nasional.',
    },
    en: {
      title: 'Satu Indonesia Awards Recognition',
      description:
        'Recognition for consistent national-level social contribution and food rescue innovation.',
    },
  },
  {
    key: 'one-planet-network-forum',
    categoryKey: 'kategori-a',
    authorEmail: 'knowledge@gardapangan.org',
    isFeatured: true,
    id: {
      title: 'Garda Pangan dalam One Planet Network Forum',
      description:
        'Partisipasi Garda Pangan dalam dialog global keberlanjutan pangan dan food waste di One Planet Network.',
    },
    en: {
      title: 'Garda Pangan at the One Planet Network Forum',
      description:
        'Garda Pangan participation in global food sustainability and food waste dialogue at One Planet Network.',
    },
  },
  {
    key: 'idaflw-2024',
    categoryKey: 'kategori-a',
    authorEmail: 'media@gardapangan.org',
    isFeatured: false,
    id: {
      title: 'Apresiasi untuk Garda Pangan dalam IDAFLW 2024',
      description:
        'Pengakuan atas upaya mengurangi pemborosan pangan di peringatan International Day of Awareness of Food Loss and Waste.',
    },
    en: {
      title: 'Recognition for Garda Pangan at IDAFLW 2024',
      description:
        'Acknowledgment of efforts to reduce food waste on International Day of Awareness of Food Loss and Waste.',
    },
  },
  {
    key: 'metode-baku-susut-sisa',
    categoryKey: 'kategori-a',
    authorEmail: 'knowledge@gardapangan.org',
    isFeatured: false,
    id: {
      title: 'Peluncuran Metode Baku Perhitungan Susut dan Sisa Pangan',
      description:
        'Metodologi standar untuk mengukur dan melaporkan susut dan sisa pangan di jalur distribusi dan penyaluran.',
    },
    en: {
      title: 'Launch of Standard Food Loss and Waste Calculation Method',
      description:
        'Standard methodology to measure and report food loss and waste across distribution channels.',
    },
  },
  {
    key: 'kampanye-food-waste-sekolah',
    categoryKey: 'kategori-b',
    authorEmail: 'knowledge@gardapangan.org',
    isFeatured: false,
    id: {
      title: 'Kampanye Food Waste untuk Generasi Muda di Sekolah',
      description:
        'Literasi food waste dan kebiasaan ramah pangan melalui materi interaktif bagi pelajar dan guru.',
    },
    en: {
      title: 'Food Waste Campaign for Young Generations in Schools',
      description:
        'Food waste literacy and sustainable eating habits through interactive materials for students and teachers.',
    },
  },
  {
    key: 'kolaborasi-hotel-food-rescue',
    categoryKey: 'kategori-c',
    authorEmail: 'media@gardapangan.org',
    isFeatured: false,
    id: {
      title: 'Kolaborasi Hotel dan Layanan Food Rescue Perkotaan',
      description:
        'Potret kemitraan hotel dan katering dengan sistem penjemputan makanan surplus yang aman dan terukur.',
    },
    en: {
      title: 'Hotel Collaboration and Urban Food Rescue Services',
      description:
        'Partnerships between hotels and catering with safe, measurable surplus food pickup systems.',
    },
  },
  {
    key: 'edukasi-ketahanan-pangan',
    categoryKey: 'kategori-d',
    authorEmail: 'knowledge@gardapangan.org',
    isFeatured: false,
    id: {
      title: 'Edukasi Ketahanan Pangan di Lingkungan Pemukiman Pra-Sejahtera',
      description:
        'Pendekatan komunitas dalam memanfaatkan bantuan makanan serta mencegah pemborosan di tingkat rumah tangga.',
    },
    en: {
      title: 'Food Security Education in Underprivileged Communities',
      description:
        'Community approaches to using food assistance and preventing household-level waste.',
    },
  },
  {
    key: 'food-loss-distributor',
    categoryKey: 'kategori-b',
    authorEmail: 'media@gardapangan.org',
    isFeatured: false,
    id: {
      title: 'Praktik Lapangan Pengurangan Food Loss bagi Distributor Makanan',
      description:
        'Pengalaman mitra distributor dalam mengalihkan stok layak konsumsi kepada penerima manfaat bersama Garda Pangan.',
    },
    en: {
      title: 'Field Practices to Reduce Food Loss for Food Distributors',
      description:
        'Distributor partners redirecting edible stock to beneficiaries together with Garda Pangan.',
    },
  },
];

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/gi, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function articleContent(locale) {
  return `${sampleParagraph[locale]}\n\n${sampleParagraphExtra[locale]}`;
}

module.exports = {
  singleTypes,
  testimonials,
  targetAudiences,
  categories,
  authors,
  articles,
  slugify,
  articleContent,
};
