export type Language = 'id' | 'en';

export type TranslationContent = {
  nav: {
    about: string;
    projects: string;
    skills: string;
    experience: string;
    contact: string;
    resume: string;
  };
  hero: {
    greeting: string;
    role: string;
    bio: string;
    contactBtn: string;
    downloadCvBtn: string;
    availableWork: string;
    availableFreelance: string;
  };
  about: {
    eyebrow: string;
    title: string;
    intro: string;
    stat1Value: string;
    stat1Label: string;
    stat2Value: string;
    stat2Label: string;
    aboutText: string;
    quickInfo: {
      location: string;
      education: string;
      role: string;
      interest: string;
    };
  };
  skills: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    subtitle: string;
    viewLive: string;
    viewGithub: string;
    durationLabel: {
      twoMonths: string;
      fiveDays: string;
      oneWeek: string;
      tenDays: string;
    };
    statusCompleted: string;
    statusInProgress: string;
    list: {
      slug: string;
      name: string;
      category: string;
      stack: string[];
      description: string;
      highlights: string[];
      duration: string;
      status: 'Completed' | 'In Progress';
      image: string;
      github?: string;
      demo?: string;
    }[];
  };
  currentProjects: {
    eyebrow: string;
    title: string;
    subtitle: string;
    inProgressBadge: string;
    list: {
      name: string;
      description: string;
      progress: number;
    }[];
  };
  gallery: {
    eyebrow: string;
    title: string;
    subtitle: string;
    viewProject: string;
  };
  experience: {
    eyebrow: string;
    title: string;
    list: {
      year: string;
      title: string;
      description: string;
    }[];
  };
  certificates: {
    eyebrow: string;
    title: string;
    viewCert: string;
    list: {
      name: string;
      institution: string;
      date: string;
    }[];
  };
  contact: {
    title: string;
    sendMessage: string;
  };
  footer: {
    copyright: string;
    builtWith: string;
  };
  cv: {
    downloadFileName: string;
    fileUrl: string;
    resumeFileName: string;
    resumeUrl: string;
  };
};

export const TRANSLATIONS: Record<Language, TranslationContent> = {
  id: {
    nav: {
      about: 'Tentang',
      projects: 'Proyek',
      skills: 'Keahlian',
      experience: 'Pengalaman',
      contact: 'Kontak',
      resume: 'Resume',
    },
    hero: {
      greeting: 'Halo, Saya',
      role: 'Full Stack Developer & AI Enthusiast',
      bio: 'Saya membangun Website dan Mobile App modern, AI application, dan IoT project.',
      contactBtn: 'Hubungi Saya',
      downloadCvBtn: 'Download CV',
      availableWork: 'Tersedia untuk Pekerjaan',
      availableFreelance: 'Tersedia untuk Freelance',
    },
    about: {
      eyebrow: 'Kenali Saya',
      title: 'Tentang Saya',
      intro:
        'Mahasiswa Informatika yang senang mengubah ide menjadi produk digital nyata, mulai dari Website, Mobile App, Artificial Intelligence, sampai Internet of Things.',
      stat1Value: '3+',
      stat1Label: 'Tahun belajar coding',
      stat2Value: '5+',
      stat2Label: 'Project selesai',
      aboutText:
        'Saya adalah mahasiswa Teknik Informatika yang memiliki ketertarikan pada Full Stack Development, Artificial Intelligence, Machine Learning, dan Internet of Things. Saya senang membangun solusi digital yang sederhana namun bermanfaat untuk menyelesaikan permasalahan nyata.',
      quickInfo: {
        location: 'Indonesia',
        education: 'Mahasiswa Informatika',
        role: 'Freelance Developer',
        interest: 'AI Enthusiast',
      },
    },
    skills: {
      eyebrow: 'Keahlian Saya',
      title: 'Skills',
      subtitle: 'Teknologi dan tools yang saya gunakan untuk membangun produk digital.',
    },
    projects: {
      eyebrow: 'Studi Kasus',
      title: 'Featured Projects',
      subtitle: 'Beberapa project yang telah saya selesaikan.',
      viewLive: 'Live Demo',
      viewGithub: 'Github',
      durationLabel: {
        twoMonths: '2 bulan',
        fiveDays: '5 hari',
        oneWeek: '1 minggu',
        tenDays: '10 hari',
      },
      statusCompleted: 'Selesai',
      statusInProgress: 'Dalam Pengerjaan',
      list: [
        {
          slug: 'zie-chocolate',
          name: 'Zie Chocolate',
          category: 'Full Stack E-Commerce',
          stack: ['Laravel 11', 'Alpine.js', 'Tailwind CSS', 'Chart.js', 'MySQL'],
          description:
            'Platform e-commerce coklat dengan role-based access control untuk customer, admin, dan owner, lengkap dengan manajemen produk, kategori, pesanan, serta dashboard analitik penjualan berbasis Chart.js.',
          highlights: [
            'Role-Based Access Control',
            'Order Management System',
            'Cart & Checkout Service',
            'Sales Dashboard Analytics',
          ],
          duration: '2 bulan',
          status: 'Completed',
          image: '/projects/Zie_Porto.jpg',
          github: 'https://github.com/alfinsyahr/zie_chocolate',
          demo: 'https://example.com/',
        },
        {
          slug: 'sobat-siko',
          name: 'Sobat Siko',
          category: 'Mental Health Service Platform',
          stack: [
            'Next.js',
            'TypeScript',
            'Tailwind CSS',
            'Collaboration',
            'Web Design',
          ],
          description:
            'Platform digital kesehatan mental modern yang dirancang untuk memberikan dukungan psikologis yang mudah diakses. Menghadirkan layanan komprehensif mulai dari sesi curhat online, terapi keluarga, konsultasi karier, hingga pendampingan remaja dan anak demi menciptakan kehidupan yang lebih tenang dan bermakna.',
          highlights: [
            'Desain UI Menenangkan & Modern',
            'Integrasi Konseling Online',
            'Tes Kepribadian & Edukasi',
            'Desain Web Responsif',
          ],
          duration: '5 hari',
          status: 'Completed',
          image: '/projects/SobatSiko_Porto.jpg',
          github: 'https://github.com/agastiaaa/techsoft-psikologi-maafpemula',
          demo: 'https://techsoft-psikologi-maafpemula.vercel.app/',
        },
        {
          slug: 'dungeon-and-dragons',
          name: 'Dungeon & Dragons',
          category: 'Interactive Gaming Landing Page',
          stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
          description:
            'Landing page bertema fantasy untuk game Dungeon & Dragons yang menghadirkan pengalaman imersif melalui animasi sinematik, eksplorasi karakter, dunia petualangan, serta call-to-action untuk mulai bermain dan bergabung dengan komunitas.',
          highlights: [
            'Fantasy UI Design',
            'Interactive Animations',
            'Showcase Karakter & Hero',
            'Responsive Landing Page',
          ],
          duration: '1 minggu',
          status: 'Completed',
          image: '/projects/DND_Portoo.jpg',
          github: 'https://github.com/',
          demo: 'https://example.com/',
        },
        {
          slug: 'recipesphere',
          name: 'RecipeSphere',
          category: 'Recipe & Food Landing Page',
          stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
          description:
            'Landing page modern untuk platform resep masakan yang membantu pengguna menemukan inspirasi hidangan, mengikuti langkah memasak yang mudah dipahami, serta mengeksplorasi berbagai kategori makanan yang dapat dipraktikkan di rumah.',
          highlights: [
            'Discovery Resep Makanan',
            'Kategori Kuliner Variatif',
            'Panduan Resep Step-by-Step',
            'UI Responsif Modern',
          ],
          duration: '1 minggu',
          status: 'Completed',
          image: '/projects/RecipeSphere_Porto.jpg',
          github: 'https://github.com/alfinsyahr/food_recipe',
          demo: 'https://example.com/',
        },
        {
          slug: 'automatic-plant-watering',
          name: 'Automatic Plant Watering System',
          category: 'IoT & Smart Agriculture',
          stack: [
            'ESP32 CH340',
            'Soil Moisture Sensor',
            'DHT22',
            'Relay Module',
            'Mini Water Pump',
          ],
          description:
            'Sistem penyiraman tanaman otomatis berbasis IoT yang dirancang untuk memantau kondisi kelembapan tanah dan melakukan penyiraman secara otomatis. Sistem ini menggunakan ESP32 CH340 sebagai mikrokontroler untuk membaca sensor dan mengontrol pompa air.',
          highlights: [
            'Penyiraman Otomatis Cerdas',
            'Monitoring Kelembapan Tanah',
            'Kontrol Berbasis ESP32',
            'Otomasi Sensorik',
            'Real-Time Environmental Monitoring',
            'Integrasi Blynk IoT',
          ],
          duration: '10 hari',
          status: 'Completed',
          image: '/projects/Iot_Porto.jpg',
          github: 'https://github.com/',
          demo: 'https://example.com/',
        },
      ],
    },
    currentProjects: {
      eyebrow: 'Saat Ini',
      title: 'Sedang Dikerjakan',
      subtitle: 'Project yang sedang saya kerjakan saat ini.',
      inProgressBadge: 'Sedang Berjalan',
      list: [
        {
          name: 'Mergix Freelance Website',
          description:
            'Mengembangkan platform freelance yang menyediakan layanan web, mobile app, dan IoT untuk kebutuhan tugas kuliah, skripsi, dan proyek komersial.',
          progress: 80,
        },
        {
          name: 'TinyDesk Robot',
          description:
            'Mengembangkan robot mini interaktif berbasis ESP32 C3 dengan ekspresi mata OLED dan kontrol pergerakan motor.',
          progress: 10,
        },
      ],
    },
    gallery: {
      eyebrow: 'Sekilas Visual',
      title: 'Galeri Proyek',
      subtitle: 'Cuplikan visual dari berbagai project yang pernah saya kerjakan.',
      viewProject: 'Lihat Proyek',
    },
    experience: {
      eyebrow: 'Perjalanan Saya',
      title: 'Pengalaman',
      list: [
        {
          year: '2026',
          title: 'Freelance Developer',
          description:
            'Mengerjakan berbagai proyek Full Stack dan AI untuk klien, mulai dari platform e-commerce hingga sistem berbasis IoT.',
        },
        {
          year: '2025',
          title: 'Full Stack Projects',
          description:
            'Membangun berbagai proyek Full Stack menggunakan Laravel, Next.js, dan berbagai teknologi database modern.',
        },
        {
          year: '2024',
          title: 'Memulai Belajar Pemrograman',
          description:
            'Memulai perjalanan belajar pemrograman, dari dasar logika hingga membangun proyek pertama.',
        },
      ],
    },
    certificates: {
      eyebrow: 'Penghargaan',
      title: 'Sertifikat',
      viewCert: 'Lihat Sertifikat',
      list: [
        {
          name: 'Belajar Dasar Artificial Intelligence',
          institution: 'Dicoding Indonesia',
          date: '2025',
        },
        {
          name: 'Juara Web Design Competition',
          institution: 'Techsoft - HIMA RPL Polindra',
          date: '2026',
        },
        {
          name: 'Memulai Pemrograman dengan Python',
          institution: 'Dicoding Indonesia',
          date: '2026',
        },
        {
          name: 'Cyber Security Penetration Testing',
          institution: 'ID-Networkers',
          date: '2026',
        },
      ],
    },
    contact: {
      title: 'Mari Bangun Sesuatu Bersama.',
      sendMessage: 'Kirim Pesan',
    },
    footer: {
      copyright: '© 2026 Alfin Syahrin. Hak cipta dilindungi.',
      builtWith: 'Didesain & Dibuat menggunakan Next.js',
    },
    cv: {
      downloadFileName: 'Alfin_Syahrin.CV.pdf',
      fileUrl: '/Alfin_Syahrin.CV.pdf',
      resumeFileName: 'Alfin_Syahrin.CV.pdf',
      resumeUrl: '/Alfin_Syahrin.CV.pdf',
    },
  },
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      experience: 'Experience',
      contact: 'Contact',
      resume: 'Resume',
    },
    hero: {
      greeting: "Hello, I'm",
      role: 'Full Stack Developer & AI Enthusiast',
      bio: 'I build modern Web and Mobile Apps, AI applications, and IoT projects.',
      contactBtn: 'Contact Me',
      downloadCvBtn: 'Download CV',
      availableWork: 'Available for Work',
      availableFreelance: 'Available for Freelance',
    },
    about: {
      eyebrow: 'Get to know me',
      title: 'About Me',
      intro:
        'Informatics student who loves transforming ideas into real digital products, ranging from Web, Mobile Apps, Artificial Intelligence, to Internet of Things.',
      stat1Value: '3+',
      stat1Label: 'Years learning coding',
      stat2Value: '5+',
      stat2Label: 'Completed projects',
      aboutText:
        'I am an Informatics Engineering student with a strong passion for Full Stack Development, Artificial Intelligence, Machine Learning, and Internet of Things. I enjoy building simple yet impactful digital solutions to solve real-world problems.',
      quickInfo: {
        location: 'Indonesia',
        education: 'Informatics Student',
        role: 'Freelance Developer',
        interest: 'AI Enthusiast',
      },
    },
    skills: {
      eyebrow: 'What I work with',
      title: 'Skills',
      subtitle: 'Technologies and tools I use to craft modern digital products.',
    },
    projects: {
      eyebrow: 'Case studies',
      title: 'Featured Projects',
      subtitle: 'Selected projects I have built and delivered.',
      viewLive: 'Live Demo',
      viewGithub: 'Github',
      durationLabel: {
        twoMonths: '2 months',
        fiveDays: '5 days',
        oneWeek: '1 week',
        tenDays: '10 days',
      },
      statusCompleted: 'Completed',
      statusInProgress: 'In Progress',
      list: [
        {
          slug: 'zie-chocolate',
          name: 'Zie Chocolate',
          category: 'Full Stack E-Commerce',
          stack: ['Laravel 11', 'Alpine.js', 'Tailwind CSS', 'Chart.js', 'MySQL'],
          description:
            'A chocolate e-commerce platform with role-based access control for customers, admins, and business owners, featuring complete product/order management and sales analytics powered by Chart.js.',
          highlights: [
            'Role-Based Access Control',
            'Order Management System',
            'Cart & Checkout Service',
            'Sales Analytics Dashboard',
          ],
          duration: '2 months',
          status: 'Completed',
          image: '/projects/Zie_Porto.jpg',
          github: 'https://github.com/alfinsyahr/zie_chocolate',
          demo: 'https://example.com/',
        },
        {
          slug: 'sobat-siko',
          name: 'Sobat Siko',
          category: 'Mental Health Service Platform',
          stack: [
            'Next.js',
            'TypeScript',
            'Tailwind CSS',
            'Collaboration',
            'Web Design',
          ],
          description:
            'A modern digital mental health platform designed to provide accessible psychological support. Featuring comprehensive services from online counseling, family therapy, career guidance, to youth support.',
          highlights: [
            'Calming & Modern UI Design',
            'Online Counseling Integration',
            'Personality Test & Resources',
            'Responsive Web Design',
          ],
          duration: '5 days',
          status: 'Completed',
          image: '/projects/SobatSiko_Porto.jpg',
          github: 'https://github.com/agastiaaa/techsoft-psikologi-maafpemula',
          demo: 'https://techsoft-psikologi-maafpemula.vercel.app/',
        },
        {
          slug: 'dungeon-and-dragons',
          name: 'Dungeon & Dragons',
          category: 'Interactive Gaming Landing Page',
          stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
          description:
            'A fantasy-themed gaming landing page for Dungeon & Dragons offering an immersive experience with cinematic animations, character showcases, quest lore, and calls to join the adventure.',
          highlights: [
            'Fantasy UI Design',
            'Interactive Animations',
            'Character Showcase',
            'Responsive Landing Page',
          ],
          duration: '1 week',
          status: 'Completed',
          image: '/projects/DND_Portoo.jpg',
          github: 'https://github.com/',
          demo: 'https://example.com/',
        },
        {
          slug: 'recipesphere',
          name: 'RecipeSphere',
          category: 'Recipe & Food Landing Page',
          stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
          description:
            'A modern culinary landing page helping home cooks discover inspiring recipes, follow clear step-by-step instructions, and explore rich culinary categories.',
          highlights: [
            'Recipe Discovery',
            'Food Categories',
            'Step-by-Step Guides',
            'Modern Responsive UI',
          ],
          duration: '1 week',
          status: 'Completed',
          image: '/projects/RecipeSphere_Porto.jpg',
          github: 'https://github.com/alfinsyahr/food_recipe',
          demo: 'https://example.com/',
        },
        {
          slug: 'automatic-plant-watering',
          name: 'Automatic Plant Watering System',
          category: 'IoT & Smart Agriculture',
          stack: [
            'ESP32 CH340',
            'Soil Moisture Sensor',
            'DHT22',
            'Relay Module',
            'Mini Water Pump',
          ],
          description:
            'An IoT-powered automatic plant irrigation system engineered to monitor soil moisture and automate watering. Powered by ESP32 CH340 microcontroller for sensor telemetry and pump regulation.',
          highlights: [
            'Automatic Plant Watering',
            'Soil Moisture Monitoring',
            'ESP32-Based Control',
            'Sensor-Driven Automation',
            'Real-Time Environmental Monitoring',
            'Blynk IoT Integration',
          ],
          duration: '10 days',
          status: 'Completed',
          image: '/projects/Iot_Porto.jpg',
          github: 'https://github.com/',
          demo: 'https://example.com/',
        },
      ],
    },
    currentProjects: {
      eyebrow: 'Right now',
      title: 'Currently Building',
      subtitle: 'Projects I am actively working on.',
      inProgressBadge: 'In Progress',
      list: [
        {
          name: 'Mergix Freelance Website',
          description:
            'Developing a freelance platform offering web, mobile app, and IoT services for university projects, final theses, and commercial business solutions.',
          progress: 80,
        },
        {
          name: 'TinyDesk Robot',
          description:
            'Developing an interactive mini desktop companion robot powered by ESP32 C3 with animated OLED expressions and motorized movement.',
          progress: 10,
        },
      ],
    },
    gallery: {
      eyebrow: 'A closer look',
      title: 'Project Gallery',
      subtitle: 'Visual highlights from various projects I have crafted.',
      viewProject: 'View Project',
    },
    experience: {
      eyebrow: 'Journey so far',
      title: 'Experience',
      list: [
        {
          year: '2026',
          title: 'Freelance Developer',
          description:
            'Working on various Full Stack and AI client projects, ranging from e-commerce platforms to smart IoT systems.',
        },
        {
          year: '2025',
          title: 'Full Stack Projects',
          description:
            'Developing versatile Full Stack applications with Laravel, Next.js, and modern database architectures.',
        },
        {
          year: '2024',
          title: 'Started Learning Programming',
          description:
            'Embarked on my coding journey, mastering core programming principles and launching my first applications.',
        },
      ],
    },
    certificates: {
      eyebrow: 'Recognitions',
      title: 'Certificates',
      viewCert: 'View Certificate',
      list: [
        {
          name: 'Basic Artificial Intelligence Certification',
          institution: 'Dicoding Indonesia',
          date: '2025',
        },
        {
          name: 'Web Design Competition Winner',
          institution: 'Techsoft - HIMA RPL Polindra',
          date: '2026',
        },
        {
          name: 'Programming with Python',
          institution: 'Dicoding Indonesia',
          date: '2026',
        },
        {
          name: 'Cyber Security Penetration Testing',
          institution: 'ID-Networkers',
          date: '2026',
        },
      ],
    },
    contact: {
      title: "Let's Build Something Together.",
      sendMessage: 'Send Message',
    },
    footer: {
      copyright: '© 2026 Alfin Syahrin. All rights reserved.',
      builtWith: 'Designed & Built using Next.js',
    },
    cv: {
      downloadFileName: 'Alfin_Syahrin.CV.pdf',
      fileUrl: '/Alfin_Syahrin.CV.pdf',
      resumeFileName: 'Alfin_Syahrin.CV.pdf',
      resumeUrl: '/Alfin_Syahrin.CV.pdf',
    },
  },
};
