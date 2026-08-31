export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const QUICK_INFO = [
  { icon: 'MapPin', label: 'Indonesia' },
  { icon: 'GraduationCap', label: 'Informatics Student' },
  { icon: 'Briefcase', label: 'Freelance Developer' },
  { icon: 'Rocket', label: 'AI Enthusiast' },
];

export const ABOUT_TEXT =
  'Saya adalah mahasiswa Teknik Informatika yang memiliki ketertarikan pada Full Stack Development, Artificial Intelligence, Machine Learning, dan Internet of Things. Saya senang membangun solusi digital yang sederhana namun bermanfaat untuk menyelesaikan permasalahan nyata.';

export type SkillGroup = {
  category: string;
  icon: string;
  items: string[];
};

export const SKILLS: SkillGroup[] = [
  {
    category: 'Frontend',
    icon: 'MonitorSmartphone',
    items: ['HTML', 'CSS', 'Tailwind', 'React', 'Next.js'],
  },
  {
    category: 'Backend',
    icon: 'Server',
    items: ['Node.js', 'Express', 'Laravel'],
  },
  {
    category: 'Database',
    icon: 'Database',
    items: ['MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    category: 'Artificial Intelligence',
    icon: 'BrainCircuit',
    items: ['Python', 'TensorFlow', 'Scikit Learn', 'OpenCV'],
  },
  {
    category: 'Internet of Things',
    icon: 'Cpu',
    items: ['Arduino', 'ESP32', 'Raspberry Pi', 'MQTT'],
  },
  {
    category: 'Tools',
    icon: 'Wrench',
    items: ['Git', 'Docker', 'Figma', 'VS Code'],
  },
];

export type FeaturedProject = {
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
};

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    slug: 'zie-chocolate',
    name: 'Zie Chocolate',
    category: 'Full Stack E-Commerce',
    stack: ['Laravel 11', 'Alpine.js', 'Tailwind CSS', 'Chart.js', 'MySQL'],
    description:
      'Platform e-commerce coklat dengan role-based access control untuk customer, admin, dan owner, lengkap dengan manajemen produk, kategori, pesanan, serta dashboard analitik penjualan berbasis Chart.js.',
    highlights: [
      'Role-Based Access',
      'Order Management',
      'Cart Service',
      'Sales Dashboard',
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
      'Calming & Modern UI Design',
      'Online Counseling Integration',
      'Personality Test & Resources',
      'Responsive Web Design',
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
      'Character Showcase',
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
      'Recipe Discovery',
      'Food Categories',
      'Step-by-Step Recipes',
      'Modern Responsive UI',
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
      'Automatic Plant Watering',
      'Soil Moisture Monitoring',
      'ESP32-Based Control',
      'Sensor-Based Automation',
      'Real-Time Environmental Monitoring',
      'Blynk IoT Integration',
    ],
    duration: '10 hari',
    status: 'Completed',
    image: '/projects/Iot_Porto.jpg',
    github: 'https://github.com/',
    demo: 'https://example.com/',
  },
];

export type CurrentProject = {
  name: string;
  description: string;
  progress: number;
};

export const CURRENT_PROJECTS: CurrentProject[] = [
  {
    name: 'Mergix Freelance Website',
    description:
      'Mengembangkan platform freelance yang menyediakan layanan web, mobile app, dan IoT untuk kebutuhan tugas kuliah, skripsi, dan proyek komersial.',
    progress: 80,
  },
  {
    name: 'TinyDesk Robot',
    description:
      'Mengembangkan robot mini interaktif berbasis ESP32 dengan ekspresi mata OLED dan kontrol pergerakan motor.',
    progress: 10,
  },
];

export type GalleryItem = {
  title: string;
  image: string;
};

export const GALLERY: GalleryItem[] = [
  { title: 'Zie Chocolate', image: '/projects/Zie_Porto.jpg' },
  { title: 'Dungeon & Dragons', image: '/projects/DND_Portoo.jpg' },
  { title: 'RecipeSphere', image: '/projects/RecipeSphere_Porto.jpg' },
  { title: 'Sobat Siko', image: '/projects/SobatSiko_Porto.jpg' },
  {
    title: 'Automatic Plant Watering System',
    image: '/projects/Iot_Porto.jpg',
  },
];

export type ExperienceItem = {
  year: string;
  title: string;
  description: string;
};

export const EXPERIENCE: ExperienceItem[] = [
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
    title: 'Started Learning Programming',
    description:
      'Memulai perjalanan belajar pemrograman, dari dasar logika hingga membangun proyek pertama.',
  },
];

export type Certificate = {
  name: string;
  institution: string;
  date: string;
};

export const CERTIFICATES: Certificate[] = [
  {
    name: 'Belajar Dasar Artificial Intelligence',
    institution: 'Dicoding Indonesia',
    date: '2025',
  },
  {
    name: 'Web Design Competition',
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
];

export const SOCIALS = [
  { label: 'Email', href: 'mailto:syahrinalfin105@gmail.com', icon: 'Mail' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/alfin-syahrin-305462280/',
    icon: 'Linkedin',
  },
  { label: 'Github', href: 'https://github.com/alfinsyahr', icon: 'Github' },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/alfin_syahrin_09/?hl=en',
    icon: 'Instagram',
  },
];
