import { PersonalInfo, Project, Experience, SkillCategory } from "@/types/portfolio";

export const personalInfo: PersonalInfo = {
  name: "Alif Apriansyah",
  nickname: "Alif",
  role: "Informatics Engineering Student & Software Builder",
  institution: "Universitas Tadulako",
  faculty: "Fakultas Teknik",
  semester: "Semester 5",
  location: "Palu, Sulawesi Tengah, Indonesia",
  bio: "Mahasiswa Teknik Informatika Universitas Tadulako yang aktif membangun sistem web fullstack, arsitektur backend berkinerja tinggi, WebGIS spasial, serta inovasi IoT & Computer Vision. Berpengalaman sebagai pengurus Divisi Penalaran Keilmuan HMTI Untad dan mentor pemrograman web.",
  status: "Open for collaboration & research projects",
  github: "https://github.com/Lieff246",
  email: "alifapriansyah246@gmail.com",
  linkedin: "https://www.linkedin.com/in/alif-apriansyah",
};

export const focusAreas = [
  {
    title: "Fullstack Web & WebGIS",
    description: "Membangun aplikasi web decoupled dengan Laravel 11, React, TypeScript, dan visualisasi pemetaan spasial berbasis Leaflet/GeoJSON.",
    tags: ["React", "TypeScript", "Laravel 11", "WebGIS", "Leaflet", "Tailwind CSS"],
    icon: "Globe",
  },
  {
    title: "Backend Engineering",
    description: "Merancang API berperforma tinggi dengan Clean Architecture di Go (Golang) dan RESTful backend berbasis PHP/Laravel yang aman.",
    tags: ["Go (Golang)", "Chi Router", "MySQL", "JWT Auth", "Clean Architecture"],
    icon: "Server",
  },
  {
    title: "AI & Computer Vision",
    description: "Menerapkan Computer Vision (MediaPipe, OpenCV, EAR metrics) serta arsitektur Multi-Agent cerdas dengan Gemini API.",
    tags: ["Python", "OpenCV", "MediaPipe", "Google Gemini API", "Multi-Agent"],
    icon: "Brain",
  },
  {
    title: "IoT & Hardware Prototyping",
    description: "Eksplorasi modul mikrokontroler ESP32-CAM, integrasi sensor visual, dan perancangan fisik enclosure/casing 3D print.",
    tags: ["ESP32-CAM", "3D CAD / STL", "Embedded Systems", "Arduino"],
    icon: "Cpu",
  },
];

export const projects: Project[] = [
  {
    id: "disdik-pemetaan",
    title: "Portal Pemetaan Sekolah Sulawesi Tengah",
    tagline: "Sistem Informasi Geografis & WebGIS Pemetaan Sekolah Se-Provinsi Sulawesi Tengah",
    category: "Fullstack / WebGIS",
    role: "Fullstack Developer (Magang Dispen)",
    period: "2026",
    featured: true,
    image: "/images/pemetaan.png",
    description: "Platform WebGIS komprehensif untuk Dinas Pendidikan Provinsi Sulawesi Tengah yang memetakan persebaran ribuan sekolah PAUD–SMA/SMK/SLB beserta data spasial batas poligon 6 cabang dinas.",
    fullDescription: "Dikembangkan secara khusus sebagai project nyata (Magang Dispen) untuk Dinas Pendidikan Provinsi Sulawesi Tengah. Sistem mengadopsi arsitektur Decoupled (Headless API) di mana backend Laravel 11 murni bertindak sebagai REST API penyedia data geospasial dan autentikasi multi-role, sedangkan frontend React + TypeScript + Leaflet menyajikan visualisasi peta interaktif, cluster marker sekolah, polygon wilayah cabang dinas, serta analisis statistik pendidikan.",
    tags: ["Laravel 11", "React", "TypeScript", "Leaflet WebGIS", "Tailwind CSS", "MySQL", "Sanctum", "Fortify"],
    githubUrl: "https://github.com/Lieff246/portal-disdik",
    liveUrl: null,
    metrics: "Ribuan titik koordinat sekolah se-Sulteng & 6 Poligon Cabang Dinas",
    highlights: [
      "Arsitektur Decoupled murni (Laravel REST API terpisah dari React frontend)",
      "Visualisasi peta interaktif dengan poligon cabang dinas & clustering sekolah",
      "Sistem otentikasi ketat dengan Laravel Sanctum, Fortify, dan Spatie Role/Permission",
      "Fitur export laporan rekapitulasi data sekolah ke format PDF/Excel"
    ],
    techDetails: {
      frontend: "React 18, TypeScript, Vite, Tailwind CSS, Leaflet, React-Leaflet-Cluster, Recharts",
      backend: "Laravel 11, PHP 8.3+, Sanctum, Fortify, Spatie Permission",
      database: "MySQL Relational Spatial Indexing",
    },
  },
  {
    id: "sifokus-iot",
    title: "SIFOKUS — Sensor Fokus & Deteksi Kantuk Siswa",
    tagline: "Inovasi Perangkat IoT & Computer Vision untuk Monitoring Konsentrasi Belajar Siswa",
    category: "IoT & Vision",
    role: "Ketua Tim Pelaksana (Ordinary Squad)",
    period: "2025",
    featured: true,
    image: "/images/sifokus-device.png",
    description: "Perangkat cerdas berbasis ESP32-CAM dan algoritma MediaPipe FaceMesh untuk mendeteksi kantuk serta penurunan fokus siswa di ruang kelas secara real-time.",
    fullDescription: "SIFOKUS (Sistem Fokus Siswa) adalah inovasi teknologi pendidikan yang diajukan pada Lomba Inovasi Digital Mahasiswa (LIDM) 2025 Balmawa/Puspresnas dan Capstone Design Dies Natalis FATEK Untad. Perangkat ini menggabungkan modul mikrokontroler ESP32-CAM dengan pemrosesan Computer Vision di Python menggunakan metrik Eye Aspect Ratio (EAR) 6-titik euclidean. Ketika siswa terpejam melebihi batas ambang batas (>= 2 detik), sistem memicu indikator peringatan visual LED dan mencatat histori fokus ke basis data.",
    tags: ["Python", "OpenCV", "MediaPipe FaceMesh", "EAR Algorithm", "ESP32-CAM", "3D CAD / STL"],
    githubUrl: null,
    liveUrl: null,
    metrics: "Ketua Tim LIDM 2025 Divisi IPDP & Capstone Design FATEK",
    highlights: [
      "Kalkulasi Eye Aspect Ratio (EAR) 6 titik euclidean real-time untuk deteksi kelelahan",
      "Pemodelan dan perancangan fisik casing enclosure 3D print (Swanky Turing STL/OBJ)",
      "Integrasi mikrokontroler ESP32-CAM dengan indikator visual LED",
      "Penulisan proposal riset komprehensif dibimbing dosen Ryfial Azhar, S.Kom., M.Kom."
    ],
    techDetails: {
      hardware: "ESP32-CAM, LED Visual Alerts, Custom 3D Printed Casing (STL)",
      backend: "Python 3, OpenCV, MediaPipe FaceMesh, SciPy Spatial Distance",
    },
  },
  {
    id: "smartstudy-ai",
    title: "SmartStudy — AI-Powered Task Management",
    tagline: "Platform Manajemen Beban Kuliah Cerdas dengan 3 Multi-Agent Google Gemini",
    category: "AI & Systems",
    role: "Lead Fullstack & AI Engineer",
    period: "2026",
    featured: true,
    image: "/images/smartstudy.png",
    description: "Sistem manajemen produktivitas mahasiswa yang mengintegrasikan Google Gemini API untuk mengestimasi waktu pengerjaan tugas, menyusun prioritas cerdas, dan mencegah beban berlebih.",
    fullDescription: "SmartStudy dirancang untuk mengatasi fenomena academic burnout di kalangan mahasiswa. Aplikasi ini memanfaatkan ekosistem Laravel AI SDK terbaru yang terhubung dengan Google Gemini API melalui 3 Agent otonom khusus: TaskLoadEstimator (memperkirakan jam pengerjaan berdasarkan kompleksitas tugas), SmartReminderGenerator (membuat pesan pengingat kontekstual), dan StudyTimeRecommender (mendeteksi jadwal bentrok dan memberi rekomendasi waktu belajar ideal).",
    tags: ["Laravel 13", "Google Gemini API", "Laravel AI SDK", "Tailwind CSS 4", "MySQL", "Blade"],
    githubUrl: "https://github.com/Lieff246/SmartStudy",
    liveUrl: null,
    metrics: "3 AI Agents terintegrasi (TaskLoad, Reminder, StudyTime)",
    highlights: [
      "Integrasi resmi Google Gemini API melalui Laravel AI SDK (laravel/ai)",
      "Multi-Agent system untuk estimasi durasi dan matriks prioritas tugas Eisenhower",
      "Algoritma cerdas deteksi konflik jadwal perkuliahan secara otomatis",
      "UI modern dan responsif dengan Tailwind CSS v4"
    ],
    techDetails: {
      frontend: "Blade Components, Tailwind CSS v4, Vite",
      backend: "Laravel 13, PHP 8.3+",
      database: "MySQL",
    },
  },
  {
    id: "go-notes-api",
    title: "High-Performance Notes API (Go Clean Architecture)",
    tagline: "RESTful Backend Berperforma Tinggi dengan Go 1.21, Chi Router, MySQL & JWT",
    category: "Backend",
    role: "Backend Developer",
    period: "2025",
    featured: true,
    image: "/images/notesapp.png",
    description: "Backend API catatan dan tagging berkecepatan tinggi dengan menerapkan pola Clean Architecture standar industri pada bahasa pemrograman Go.",
    fullDescription: "Menerapkan standar Clean Architecture pada Go dengan pemisahan lapisan cmd, internal/handlers, internal/middleware, internal/models, internal/database, dan internal/utils. Dilengkapi dengan otentikasi stateless menggunakan JSON Web Token (JWT), password hashing dengan Bcrypt, serta endpoint CRUD untuk folders, notes, dan tags dengan efisiensi memori tinggi.",
    tags: ["Go 1.21", "Chi Router", "MySQL", "JWT Auth", "Bcrypt", "Clean Architecture"],
    githubUrl: "https://github.com/Lieff246/Submission_FE-BE",
    liveUrl: null,
    metrics: "Sub-millisecond API response time & Clean separation of concerns",
    highlights: [
      "Struktur kode modular standar ekosistem Go (cmd & internal directory structure)",
      "Keamanan otentikasi dengan JWT middleware dan enkripsi password Bcrypt",
      "Desain skema basis data relasional dengan indeks relasi note-tag yang efisien",
      "Pengelolaan environment variables aman dan migrations SQL terstruktur"
    ],
    techDetails: {
      backend: "Go (Golang 1.21), Chi Router (go-chi/chi/v5), JWT (golang-jwt)",
      database: "MySQL, Relational Schema Migrations",
    },
  },
  {
    id: "moviex-flutter",
    title: "MOVIEX — Movie Catalog & Streaming App",
    tagline: "Aplikasi Mobile Katalog & Streaming Film Modern dengan Flutter, Firebase Auth, Cloud Firestore & GetX",
    category: "Mobile",
    role: "Mobile App Developer",
    period: "2026",
    featured: true,
    image: "/images/moviex.png",
    description: "Aplikasi mobile modern bertema dark-teal untuk penjelajahan katalog film, pemutaran trailer YouTube, otentikasi akun Firebase, dan sinkronisasi koleksi film favorit secara real-time.",
    fullDescription: "Dikembangkan sebagai proyek komprehensif mata kuliah Pemrograman Mobile. MOVIEX menerapkan arsitektur reaktif modern menggunakan GetX State Management, sistem otentikasi akun pengguna berbasis Firebase Authentication, penyimpanan cloud Cloud Firestore, serta pemutar trailer video YouTube langsung di dalam aplikasi (in-app player). Aplikasi ini dilengkapi fitur pencarian dinamis, filter kategori film populer, dan manajemen daftar favorit pengguna.",
    tags: ["Flutter", "Dart", "Firebase Auth", "Cloud Firestore", "GetX", "REST API", "YouTube Player", "Dark UI"],
    githubUrl: "https://github.com/Lieff246/AppFilm_UASmobile",
    liveUrl: null,
    metrics: "Arsitektur Reaktif GetX + Firebase Auth & Cloud Firestore",
    highlights: [
      "Autentikasi akun pengguna (Login & Registrasi) menggunakan Firebase Auth",
      "Penyimpanan database cloud real-time dengan Cloud Firestore & SharedPreferences",
      "Integrasi in-app trailer video player berbasis YouTube Player IFrame",
      "Manajemen state terpusat dan perutean reaktif berbasis GetX Controller",
      "Desain antarmuka modern bertema dark-mode dengan palet Teal & Charcoal"
    ],
    techDetails: {
      frontend: "Flutter SDK, Dart, GetX State Management, YouTube Player IFrame, Cupertino Icons",
      backend: "Firebase Authentication, Cloud Firestore, MockAPI REST Endpoints",
      database: "Cloud Firestore NoSQL & SharedPreferences Local Cache",
    },
  },
  {
    id: "kuliner-nusantara",
    title: "Kuliner Nusantara — Showcase Web Tradisional",
    tagline: "Website Informasi Keanekaragaman Kuliner Tradisional Indonesia",
    category: "Frontend / Web",
    role: "Front-End Developer",
    period: "2025",
    featured: false,
    image: "/images/kulinernusantara.png",
    description: "Website responsif dan interaktif yang memamerkan warisan cita rasa masakan tradisional khas berbagai daerah di Indonesia.",
    fullDescription: "Project submission resmi untuk Programming Tadulako (Soyuz) yang dibangun dengan standar HTML5 Semantik, navigasi mobile-responsive, katalog hidangan khas nusantara, serta panduan lokasi kuliner. Di-deploy langsung secara publik pada GitHub Pages.",
    tags: ["HTML5", "CSS3", "JavaScript", "GitHub Pages", "Responsive UI"],
    githubUrl: "https://github.com/Lieff246/Submission-Soyuz",
    liveUrl: "https://lieff246.github.io/Submission-Soyuz/",
    metrics: "Live di GitHub Pages",
    highlights: [
      "Desain antarmuka responsif tanpa framework eksternal yang berat",
      "Katalog kuliner interaktif dengan struktur kode semantik yang bersih",
      "Di-deploy dan aktif secara publik di GitHub Pages"
    ],
  },
];


export const experiences: Experience[] = [
  {
    id: "hmti-penalaran",
    role: "Staff Divisi Penalaran Keilmuan (Intelektual)",
    organization: "Himpunan Mahasiswa Teknik Informatika (HMTI) Untad",
    period: "2025 — Sekarang",
    badge: "Leadership & Academic",
    category: "Leadership",
    description: "Mengemban amanah di divisi intelektual HMTI Untad untuk mengorganisir program pengembangan kapabilitas akademik mahasiswa Informatika dan fasilitasi kompetisi.",
    achievements: [
      "Menginisiasi kelas belajar dan diskusi mingguan untuk mata kuliah inti (OOP, Struktur Data, Pemrograman Web, Basis Data)",
      "Mendampingi dan menyiapkan delegasi mahasiswa Informatika untuk kompetisi teknologi tingkat regional dan nasional (LIDM, Gemastik, dsb)",
      "Menyusun modul serta bank materi pembelajaran untuk mendukung kelancaran studi mahasiswa"
    ],
    tags: ["Academic Mentoring", "Community Leadership", "Event Organizing", "Informatics Community"],
  },
  {
    id: "mentor-pt",
    role: "Front-End Web Development Mentor",
    organization: "Programming Tadulako",
    period: "2025 — 2026",
    badge: "Mentorship & Teaching",
    category: "Mentoring",
    description: "Berperan sebagai mentor pengajar kelas Web Dasar di komunitas Programming Tadulako untuk membimbing mahasiswa dalam membangun fondasi web modern.",
    achievements: [
      "Menyusun kurikulum 6 hari pembelajaran intensif (Semantic HTML5, CSS Layouting, JavaScript DOM, dan Git/GitHub)",
      "Membimbing langsung sesi live coding dan membantu troubleshooting error/bug para peserta",
      "Mengarahkan peserta hingga berhasil menyelesaikan dan men-deploy project akhir submission web masing-masing"
    ],
    tags: ["Teaching", "HTML5/CSS3", "JavaScript", "Git & GitHub Workflow", "Peer Review"],
  },
  {
    id: "asisten-lab",
    role: "Asisten Praktikum Laboratorium Komputer",
    organization: "Prodi Teknik Informatika Universitas Tadulako",
    period: "2026",
    badge: "Academic Instruction",
    category: "Academic",
    description: "Mengampu dan mendampingi sesi praktikum komputer di lingkungan laboratorium Teknik Informatika Universitas Tadulako.",
    achievements: [
      "Mengikuti program Training of Trainer (TOT) Asisten Praktikum Lab Komputer 2026",
      "Membimbing mahasiswa selama sesi praktikum dalam memahami algoritma dan implementasi kode",
      "Melakukan evaluasi berkala dan penilaian laporan praktikum mingguan mahasiswa"
    ],
    tags: ["Lab Assistant", "Code Review", "Problem Solving", "Curriculum Delivery"],
  },
  {
    id: "lead-lidm",
    role: "Ketua Tim Pelaksana (Team Leader) — Ordinary Squad",
    organization: "LIDM 2025 & Capstone Design FATEK",
    period: "2025",
    badge: "National Competition",
    category: "Competition",
    description: "Memimpin tim Ordinary Squad dalam perancangan produk inovasi teknologi pendidikan 'SIFOKUS' (Sistem Fokus Siswa) berbasis IoT dan Computer Vision.",
    achievements: [
      "Mengoordinasikan perancangan proposal riset Divisi Inovasi Teknologi Digital Pendidikan (LIDM 2025 Balmawa)",
      "Mengintegrasikan prototipe ESP32-CAM dengan pemrosesan citra MediaPipe FaceMesh di Python",
      "Memimpin presentasi teknis dan demonstrasi purwarupa perangkat pada Lomba Capstone Design Dies Natalis FATEK Untad"
    ],
    tags: ["Team Leadership", "IoT & Vision", "Research Paper", "Puspresnas / Balmawa"],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    description: "Bahasa pemrograman utama yang digunakan untuk rekayasa sistem dan algoritma.",
    items: ["PHP 8+", "TypeScript", "JavaScript (ES6+)", "Go (Golang 1.21)", "Python 3", "Kotlin", "C++", "SQL"],
  },
  {
    title: "Frameworks & Web",
    description: "Ekosistem framework modern untuk arsitektur web fullstack dan API.",
    items: ["Laravel 11 & 13", "React 19", "Next.js", "Chi Router", "Tailwind CSS", "Vite", "Node.js"],
  },
  {
    title: "Geospatial & Spatial Data",
    description: "Perangkat dan library pengolahan sistem informasi geografis dan pemetaan.",
    items: ["Leaflet.js", "React-Leaflet", "GeoJSON", "QGIS", "ArcGIS", "Multi-Ring Buffer Analysis"],
  },
  {
    title: "AI, Vision & Embedded",
    description: "Tooling untuk kecerdasan buatan, pemrosesan citra, dan perangkat keras terapan.",
    items: ["Google Gemini API", "MediaPipe FaceMesh", "OpenCV", "ESP32-CAM", "Arduino", "3D CAD / STL"],
  },
  {
    title: "Tools & DevOps",
    description: "Lingkungan kerja pengembangan perangkat lunak dan manajemen kode.",
    items: ["Git", "GitHub", "MySQL", "Postman", "Laragon", "VS Code", "Android Studio"],
  },
];
