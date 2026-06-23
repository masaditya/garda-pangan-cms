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

/* ─── Merchandise Categories ─── */
const merchandiseCategories = [
  {
    key: 'kaos',
    id: { name: 'Kaos' },
    en: { name: 'T-Shirts' },
  },
  {
    key: 'pupuk-organik',
    id: { name: 'Pupuk Organik' },
    en: { name: 'Organic Fertilizer' },
  },
  {
    key: 'aksesori',
    id: { name: 'Aksesori' },
    en: { name: 'Accessories' },
  },
  {
    key: 'tumbler-botol',
    id: { name: 'Tumbler & Botol' },
    en: { name: 'Tumblers & Bottles' },
  },
];

/* ─── Merchandises ─── */
const merchandises = [
  {
    key: 'kaos-food-hero',
    categoryKey: 'kaos',
    releaseDate: '2024-06-01',
    storeLinks: [
      { platformName: 'Tokopedia', url: 'https://tokopedia.link/gardapangan-kaos-foodhero' },
      { platformName: 'Shopee', url: 'https://shopee.co.id/gardapangan-kaos-foodhero' },
    ],
    id: {
      title: 'Kaos Food Hero',
      description:
        'Kaos eksklusif Garda Pangan bertema Food Hero. Bahan katun combed 30s premium, nyaman digunakan sehari-hari sekaligus menyuarakan gerakan anti food waste.',
    },
    en: {
      title: 'Food Hero T-Shirt',
      description:
        'Exclusive Garda Pangan Food Hero tee. Premium combed cotton 30s, comfortable for everyday wear while spreading the anti-food-waste movement.',
    },
  },
  {
    key: 'kaos-zero-waste',
    categoryKey: 'kaos',
    releaseDate: '2024-08-15',
    storeLinks: [
      { platformName: 'Tokopedia', url: 'https://tokopedia.link/gardapangan-kaos-zerowaste' },
    ],
    id: {
      title: 'Kaos Zero Waste Lifestyle',
      description:
        'Desain eksklusif bertema Zero Waste Lifestyle. Bahan organik ramah lingkungan, pewarna non-toksik, cocok untuk para aktivis lingkungan.',
    },
    en: {
      title: 'Zero Waste Lifestyle T-Shirt',
      description:
        'Exclusive Zero Waste Lifestyle design. Eco-friendly organic fabric with non-toxic dyes, perfect for environmental advocates.',
    },
  },
  {
    key: 'pupuk-kompos-5kg',
    categoryKey: 'pupuk-organik',
    releaseDate: '2025-01-10',
    storeLinks: [
      { platformName: 'Tokopedia', url: 'https://tokopedia.link/gardapangan-kompos5kg' },
    ],
    id: {
      title: 'Pupuk Kompos Organik 5 Kg',
      description:
        'Pupuk kompos premium hasil pengolahan limbah makanan oleh Garda Pangan. Kaya nutrisi untuk tanaman hias dan sayuran, mendukung pertanian berkelanjutan.',
    },
    en: {
      title: 'Organic Compost Fertilizer 5 Kg',
      description:
        'Premium compost fertilizer made from food waste processed by Garda Pangan. Nutrient-rich for ornamental and vegetable plants, supporting sustainable farming.',
    },
  },
  {
    key: 'tote-bag-garda-pangan',
    categoryKey: 'aksesori',
    releaseDate: '2024-03-20',
    storeLinks: [
      { platformName: 'Shopee', url: 'https://shopee.co.id/gardapangan-totebag' },
    ],
    id: {
      title: 'Tote Bag Garda Pangan',
      description:
        'Tote bag kanvas tebal dengan desain khas Garda Pangan. Alternatif tas belanja ramah lingkungan, kuat, dan tahan lama.',
    },
    en: {
      title: 'Garda Pangan Tote Bag',
      description:
        'Heavy-duty canvas tote bag with Garda Pangan design. An eco-friendly shopping bag alternative that is strong and durable.',
    },
  },
  {
    key: 'tumbler-stainless-500ml',
    categoryKey: 'tumbler-botol',
    releaseDate: '2025-02-14',
    storeLinks: [
      { platformName: 'Tokopedia', url: 'https://tokopedia.link/gardapangan-tumbler' },
      { platformName: 'Shopee', url: 'https://shopee.co.id/gardapangan-tumbler' },
    ],
    id: {
      title: 'Tumbler Stainless 500ml',
      description:
        'Tumbler stainless steel 500ml edisi Garda Pangan. Tahan panas dan dingin hingga 12 jam, cocok untuk mengurangi penggunaan gelas sekali pakai.',
    },
    en: {
      title: 'Stainless Tumbler 500ml',
      description:
        'Garda Pangan edition 500ml stainless steel tumbler. Keeps drinks hot or cold for up to 12 hours, perfect for reducing single-use cup waste.',
    },
  },
  {
    key: 'pin-badge-set',
    categoryKey: 'aksesori',
    releaseDate: '2024-11-05',
    storeLinks: [
      { platformName: 'Tokopedia', url: 'https://tokopedia.link/gardapangan-pinbadge' },
    ],
    id: {
      title: 'Pin Badge Set Food Rescue',
      description:
        'Set 3 pin badge eksklusif bertema food rescue. Cocok untuk aksesori tas, jaket, atau topi. Tunjukkan dukunganmu terhadap gerakan anti food waste!',
    },
    en: {
      title: 'Food Rescue Pin Badge Set',
      description:
        'Set of 3 exclusive food rescue themed pin badges. Great for bags, jackets, or caps. Show your support for the anti-food-waste movement!',
    },
  },
];

/* ─── Events ─── */
const events = [
  {
    key: 'food-rescue-run-2025',
    date: '2025-03-15',
    location: 'Taman Bungkul, Surabaya',
    eventTag: 'Food Rescue',
    id: {
      title: 'Food Rescue Run 2025',
      summary:
        'Lari santai 5K yang menggabungkan olahraga dan aksi sosial. Setiap peserta mendanai 10 porsi makanan untuk masyarakat pra-sejahtera.',
      content:
        'Food Rescue Run 2025 adalah acara lari santai sejauh 5K yang diadakan di Taman Bungkul, Surabaya. Acara ini bertujuan menggabungkan gaya hidup sehat dengan aksi sosial nyata.\n\nSetiap pendaftaran peserta secara langsung mendanai 10 porsi makanan yang akan didistribusikan kepada masyarakat pra-sejahtera di sekitar Surabaya. Selain lari, peserta juga akan mendapatkan edukasi singkat tentang food waste dan dampaknya terhadap lingkungan.',
    },
    en: {
      title: 'Food Rescue Run 2025',
      summary:
        'A 5K fun run combining fitness and social action. Each participant funds 10 meals for underprivileged communities.',
      content:
        'Food Rescue Run 2025 is a 5K fun run held at Taman Bungkul, Surabaya. This event aims to combine healthy living with tangible social action.\n\nEach registration directly funds 10 meals to be distributed to underprivileged communities around Surabaya. Beyond running, participants will also receive brief education about food waste and its environmental impact.',
    },
  },
  {
    key: 'workshop-zero-food-waste',
    date: '2025-04-22',
    location: 'Ciputra World, Surabaya',
    eventTag: 'Workshop',
    id: {
      title: 'Workshop Zero Food Waste di Rumah',
      summary:
        'Workshop interaktif tentang cara mengelola makanan di rumah agar tidak terbuang, mulai dari belanja cerdas hingga memasak kreatif.',
      content:
        'Workshop ini mengajarkan peserta teknik praktis untuk mengurangi food waste di tingkat rumah tangga. Materi mencakup perencanaan belanja, penyimpanan bahan makanan yang tepat, dan resep kreatif dari sisa makanan.\n\nPeserta akan mendapatkan kit Zero Waste starter pack dan sertifikat partisipasi. Acara ini diadakan dalam rangka memperingati Hari Bumi 2025.',
    },
    en: {
      title: 'Zero Food Waste at Home Workshop',
      summary:
        'An interactive workshop on managing food at home to prevent waste, from smart shopping to creative cooking.',
      content:
        'This workshop teaches participants practical techniques to reduce food waste at household level. Topics include shopping planning, proper food storage, and creative leftover recipes.\n\nParticipants will receive a Zero Waste starter kit and a certificate of participation. This event is held in celebration of Earth Day 2025.',
    },
  },
  {
    key: 'food-rescue-day-surabaya',
    date: '2025-06-17',
    location: 'Balai Kota Surabaya',
    eventTag: 'Kampanye',
    id: {
      title: 'Hari Food Rescue Surabaya 2025',
      summary:
        'Peringatan tahunan Hari Food Rescue Surabaya dengan pameran, talkshow, dan aksi distribusi makanan berskala besar.',
      content:
        'Hari Food Rescue Surabaya 2025 merupakan peringatan tahunan yang diadakan di Balai Kota Surabaya. Acara ini menampilkan pameran interaktif tentang perjalanan food rescue di Indonesia, talkshow bersama pemerhati pangan, serta aksi distribusi makanan ke 500 keluarga pra-sejahtera.\n\nAcara ini terbuka untuk umum dan gratis. Mari bersama-sama mewujudkan Surabaya bebas food waste!',
    },
    en: {
      title: 'Surabaya Food Rescue Day 2025',
      summary:
        'Annual Surabaya Food Rescue Day celebration with exhibitions, talkshows, and large-scale food distribution.',
      content:
        'Surabaya Food Rescue Day 2025 is an annual celebration held at Surabaya City Hall. The event features interactive exhibitions on the food rescue journey in Indonesia, talkshows with food sustainability experts, and food distribution to 500 underprivileged families.\n\nThe event is open to the public and free of charge. Join us in making Surabaya food-waste free!',
    },
  },
  {
    key: 'cooking-class-leftover',
    date: '2025-07-10',
    location: 'Garda Pangan HQ, Surabaya',
    eventTag: 'Edukasi',
    id: {
      title: 'Cooking Class: Kreasi dari Sisa Makanan',
      summary:
        'Kelas memasak kreatif yang mengubah sisa makanan menjadi hidangan lezat dan bergizi tinggi.',
      content:
        'Cooking Class ini mengajak peserta untuk belajar mengolah sisa makanan menjadi hidangan yang lezat dan bergizi. Dipandu oleh chef berpengalaman, peserta akan membuat minimal 3 menu dari bahan-bahan yang biasanya terbuang.\n\nSelain belajar memasak, peserta juga mendapatkan pengetahuan tentang food recovery hierarchy dan pentingnya mengurangi sampah makanan di tingkat rumah tangga.',
    },
    en: {
      title: 'Cooking Class: Leftover Creations',
      summary:
        'A creative cooking class that transforms leftovers into delicious, nutritious dishes.',
      content:
        'This Cooking Class invites participants to learn how to turn food leftovers into delicious and nutritious dishes. Led by an experienced chef, participants will create at least 3 menus from commonly wasted ingredients.\n\nBeyond cooking, participants also gain knowledge about the food recovery hierarchy and the importance of reducing food waste at household level.',
    },
  },
  {
    key: 'seminar-kebijakan-pangan',
    date: '2025-09-05',
    location: 'Hotel Majapahit, Surabaya',
    eventTag: 'Seminar',
    id: {
      title: 'Seminar Kebijakan Pangan Berkelanjutan',
      summary:
        'Seminar nasional membahas regulasi dan kebijakan terkait pengelolaan pangan berkelanjutan di Indonesia.',
      content:
        'Seminar Kebijakan Pangan Berkelanjutan menghadirkan pembicara dari Kementerian Pertanian, akademisi, dan praktisi food rescue untuk membahas tantangan dan peluang dalam membangun sistem pangan berkelanjutan di Indonesia.\n\nTopik yang dibahas meliputi regulasi food donation, standar keamanan pangan untuk makanan redistribusi, serta peran teknologi dalam mengurangi food loss di rantai pasok.',
    },
    en: {
      title: 'Sustainable Food Policy Seminar',
      summary:
        'A national seminar discussing regulations and policies on sustainable food management in Indonesia.',
      content:
        'The Sustainable Food Policy Seminar features speakers from the Ministry of Agriculture, academics, and food rescue practitioners to discuss challenges and opportunities in building a sustainable food system in Indonesia.\n\nTopics covered include food donation regulations, food safety standards for redistributed food, and the role of technology in reducing food loss in the supply chain.',
    },
  },
  {
    key: 'volunteer-gathering-2025',
    date: '2025-12-20',
    location: 'Garda Pangan HQ, Surabaya',
    eventTag: 'Komunitas',
    id: {
      title: 'Volunteer Gathering & Apresiasi 2025',
      summary:
        'Acara kumpul relawan tahunan sebagai bentuk apresiasi dan refleksi atas pencapaian gerakan food rescue sepanjang tahun.',
      content:
        'Volunteer Gathering & Apresiasi 2025 adalah acara tahunan yang mengundang seluruh relawan dan mitra Garda Pangan untuk berkumpul, bertukar cerita, dan merayakan pencapaian bersama selama setahun.\n\nAcara ini meliputi pemutaran video highlight, penghargaan untuk relawan terbaik, dan sesi sharing tentang rencana program tahun depan. Tersedia juga makan bersama dengan menu yang seluruhnya berasal dari food rescue.',
    },
    en: {
      title: 'Volunteer Gathering & Appreciation 2025',
      summary:
        'Annual volunteer meetup as a form of appreciation and reflection on the food rescue movement achievements throughout the year.',
      content:
        'Volunteer Gathering & Appreciation 2025 is an annual event inviting all Garda Pangan volunteers and partners to gather, share stories, and celebrate the year\'s achievements together.\n\nThe event includes highlight video screenings, awards for top volunteers, and sharing sessions about next year\'s program plans. A communal meal made entirely from rescued food is also provided.',
    },
  },
];

/* ─── Programs ─── */
const programs = [
  {
    key: 'donasi-makanan',
    id: {
      title: 'Donasi Makanan',
      description:
        'Salurkan kelebihan makanan layak konsumsi Anda untuk mereka yang membutuhkan melalui sistem food rescue kami. Garda Pangan menjamin proses penjemputan, pengemasan, dan distribusi yang higienis serta bermartabat.',
      ctaLabel: 'Donasi Sekarang',
      ctaLink: '/contact',
    },
    en: {
      title: 'Food Donation',
      description:
        'Donate your surplus edible food to those in need through our food rescue system. Garda Pangan ensures hygienic and dignified pickup, packaging, and distribution processes.',
      ctaLabel: 'Donate Now',
      ctaLink: '/contact',
    },
  },
  {
    key: 'menjadi-relawan',
    id: {
      title: 'Menjadi Relawan',
      description:
        'Bergabunglah sebagai Food Heroes dan bantu kami mendistribusikan makanan ke titik-titik penerima manfaat. Relawan kami adalah tulang punggung gerakan food rescue yang bergerak di lapangan.',
      ctaLabel: 'Gabung Relawan',
      ctaLink: '/contact',
    },
    en: {
      title: 'Become a Volunteer',
      description:
        'Join as Food Heroes and help us distribute meals to beneficiary communities. Our volunteers are the backbone of the food rescue movement on the ground.',
      ctaLabel: 'Join as Volunteer',
      ctaLink: '/contact',
    },
  },
  {
    key: 'donasi-dana',
    id: {
      title: 'Donasi Dana',
      description:
        'Dukung operasional kami untuk menjangkau lebih banyak orang dan menyelamatkan lebih banyak makanan. Setiap rupiah yang Anda donasikan langsung dialokasikan untuk logistik, pengemasan, dan distribusi makanan.',
      ctaLabel: 'Donasi Dana',
      ctaLink: '/dukung-kami',
    },
    en: {
      title: 'Financial Donation',
      description:
        'Support our operations to reach more people and rescue more food. Every rupiah you donate is directly allocated to food logistics, packaging, and distribution.',
      ctaLabel: 'Donate Funds',
      ctaLink: '/dukung-kami',
    },
  },
  {
    key: 'edukasi-food-waste',
    id: {
      title: 'Edukasi & Kampanye Food Waste',
      description:
        'Ikuti program edukasi dan kampanye anti food waste dari Garda Pangan. Kami menyediakan materi interaktif, workshop, dan kunjungan edukasi untuk sekolah, universitas, dan perusahaan.',
      ctaLabel: 'Pelajari Lebih Lanjut',
      ctaLink: '/knowledge',
    },
    en: {
      title: 'Food Waste Education & Campaign',
      description:
        'Join Garda Pangan food waste education programs and campaigns. We provide interactive materials, workshops, and educational visits for schools, universities, and companies.',
      ctaLabel: 'Learn More',
      ctaLink: '/knowledge',
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
  merchandiseCategories,
  merchandises,
  events,
  programs,
  slugify,
  articleContent,
};
