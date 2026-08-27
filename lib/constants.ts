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
    slug: 'smart-poultry-coop',
    name: 'Smart Poultry Coop',
    category: 'Edge AI + IoT',
    stack: ['Next.js', 'Python', 'YOLOv8', 'ESP32', 'MQTT', 'Raspberry Pi'],
    description:
      'Sistem kandang ayam cerdas berbasis Edge AI yang mampu memonitor kondisi ayam secara real-time menggunakan Computer Vision, sensor lingkungan, dan dashboard monitoring untuk membantu peternak mengambil keputusan lebih cepat.',
    highlights: ['Edge AI', 'ESP32', 'Raspberry Pi', 'Dashboard'],
    duration: '3 bulan',
    status: 'Completed',
    image: '/projects/project-1.svg',
    github: 'https://github.com/',
    demo: 'https://example.com/',
  },
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
    image: '/projects/project-2.svg',
    github: 'https://github.com/',
    demo: 'https://example.com/',
  },
  {
    slug: 'wangi-kopi',
    name: 'Wangi Kopi',
    category: 'Product & Business Plan',
    stack: ['Business Model Canvas', 'SWOT Analysis', 'Market Research'],
    description:
      'Proyek kewirausahaan berupa pengharum ruangan alami dari ampas kopi dan minyak esensial, lengkap dengan analisis SWOT, Business Model Canvas, dan proyeksi keuangan untuk kelayakan usaha.',
    highlights: [
      'Natural Product',
      'SWOT Analysis',
      'Business Model Canvas',
      'Financial Plan',
    ],
    duration: '1 bulan',
    status: 'Completed',
    image: '/projects/project-3.svg',
    github: 'https://github.com/',
  },
];

export type CurrentProject = {
  name: string;
  description: string;
  progress: number;
};

export const CURRENT_PROJECTS: CurrentProject[] = [
  {
    name: 'Smart Bus Arrival Prediction',
    description:
      'Sedang mengembangkan sistem prediksi kedatangan bus menggunakan GPS, IoT, MQTT, dan Machine Learning.',
    progress: 65,
  },
  {
    name: 'AI Attendance System',
    description: 'Mengembangkan sistem absensi berbasis Face Recognition.',
    progress: 40,
  },
  {
    name: 'Personal AI Assistant',
    description:
      'Mengembangkan AI Assistant berbasis LLM menggunakan Next.js dan Python.',
    progress: 20,
  },
];

export type GalleryItem = {
  title: string;
  image: string;
};

export const GALLERY: GalleryItem[] = [
  { title: 'Smart Poultry Coop', image: '/projects/project-1.svg' },
  { title: 'Zie Chocolate', image: '/projects/project-2.svg' },
  { title: 'Wangi Kopi', image: '/projects/project-3.svg' },
  { title: 'Bus Arrival Prediction', image: '/projects/project-4.svg' },
  { title: 'AI Attendance System', image: '/projects/project-5.svg' },
  { title: 'Personal AI Assistant', image: '/projects/project-6.svg' },
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
    name: 'Belajar Dasar Pemrograman Web',
    institution: 'Dicoding Indonesia',
    date: '2025',
  },
  {
    name: 'Machine Learning Specialization',
    institution: 'Coursera',
    date: '2025',
  },
  {
    name: 'IoT Fundamentals',
    institution: 'Cisco Networking Academy',
    date: '2024',
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
