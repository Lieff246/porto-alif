import { PersonalInfo, Project, Experience, SkillCategory, FocusArea, TechTool } from "@/types/portfolio";

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

export const focusAreas: FocusArea[] = [
  {
    code: "WEBGIS_SPATIAL",
    title: "Fullstack Web & WebGIS",
    tagline: "Sistem informasi spasial interaktif dengan arsitektur decoupled untuk visualisasi data skala provinsi.",
    description: "Membangun sistem pemetaan geografis dan antarmuka web modern dengan integrasi RESTful API terpisah.",
    capabilities: [
      {
        label: "Visualisasi Data Spasial",
        detail: "Clustering ribuan koordinat sekolah, kalkulasi buffer, dan polygon 6 batas cabang dinas menggunakan Leaflet & GeoJSON.",
      },
      {
        label: "Decoupled Frontend UI",
        detail: "Komponen antarmuka modular dan reaktif menggunakan React 19, TypeScript, dan Tailwind CSS.",
      },
      {
        label: "Headless RESTful API",
        detail: "Layanan data terpusat dan proteksi akses multi-role berbasis Laravel 11 Sanctum & Fortify.",
      },
    ],
    provenProject: {
      title: "Portal Pemetaan Sekolah Dinas Pendidikan Sulteng",
      description: "WebGIS terintegrasi untuk visualisasi ribuan data sekolah se-Provinsi Sulawesi Tengah.",
    },
    tags: ["React 19", "TypeScript", "Laravel 11", "Leaflet", "GeoJSON", "Tailwind CSS"],
    icon: "Globe",
  },
  {
    code: "CLEAN_BACKEND",
    title: "Backend Engineering",
    tagline: "Perancangan RESTful API terstruktur dengan prinsip Clean Architecture dan efisiensi konkurensi.",
    description: "Membangun fondasi server yang mudah dirawat, berkinerja tinggi, dan memiliki pemisahan tanggung jawab yang ketat.",
    capabilities: [
      {
        label: "High-Throughput Routing",
        detail: "Pemanfaatan concurrency goroutine dan router berbobot ringan di Go (Golang) menggunakan Chi Router.",
      },
      {
        label: "Clean Architecture Pattern",
        detail: "Pemisahan lapisan sistem yang ketat antara Handler (Transport), UseCase (Domain Logic), dan Repository (Storage).",
      },
      {
        label: "Autentikasi & Database",
        detail: "Implementasi stateless JWT authentication dan perancangan skema relasional terindeks di MySQL.",
      },
    ],
    provenProject: {
      title: "High-Performance Notes API & Backend Service",
      description: "Implementasi Clean Architecture di Go 1.21 dengan koneksi database MySQL dan proteksi JWT.",
    },
    tags: ["Go (Golang)", "Chi Router", "MySQL", "JWT Auth", "Clean Architecture", "PHP 8+"],
    icon: "Server",
  },
  {
    code: "VISION_AI_SYSTEMS",
    title: "AI & Computer Vision",
    tagline: "Penerapan visi komputer untuk analisis metrik biometrik dan integrasi agen kecerdasan buatan.",
    description: "Mengembangkan algoritma deteksi visual dan integrasi model Large Language Model untuk solusi terapan.",
    capabilities: [
      {
        label: "Deteksi Metrik Biometrik (EAR)",
        detail: "Tracking 468 titik FaceMesh untuk kalkulasi Eye Aspect Ratio (EAR) 6-titik euclidean dalam mendeteksi kelelahan.",
      },
      {
        label: "Multi-Agent AI Systems",
        detail: "Integrasi model penalaran Google Gemini API dengan pembagian peran terstruktur (Validator, Synthesizer, Analyst).",
      },
      {
        label: "Pipeline Pemrosesan Citra",
        detail: "Manipulasi frame video real-time, masking kontur, dan inferensi visual berbasis OpenCV & Python.",
      },
    ],
    provenProject: {
      title: "SIFOKUS & SmartStudy AI",
      description: "Riset deteksi kantuk LIDM Puspresnas 2025 serta sistem pembelajaran cerdas berbasis Gemini API.",
    },
    tags: ["Python", "OpenCV", "MediaPipe FaceMesh", "Google Gemini API", "Multi-Agent"],
    icon: "Brain",
  },
  {
    code: "EMBEDDED_HARDWARE",
    title: "IoT & Hardware Prototyping",
    tagline: "Integrasi modul mikrokontroler visual mandiri dengan perancangan enclosure mekanik 3D print.",
    description: "Menghubungkan komputasi perangkat keras dengan sensor visual dan perancangan fisik perangkat yang fungsional.",
    capabilities: [
      {
        label: "Visual Microcontroller",
        detail: "Pemrograman modul ESP32-CAM dengan sensor OV2640 untuk transmisi frame citra melalui protokol jaringan lokal.",
      },
      {
        label: "Perancangan Enclosure 3D CAD",
        detail: "Pemodelan wadah fisik perangkat (casing Swanky Turing) dengan toleransi presisi menggunakan format STL/CAD.",
      },
      {
        label: "Logika Sistem Tertanam (Embedded)",
        detail: "Kontrol sinyal GPIO, indikator alert LED, dan manajemen daya 3.3V menggunakan C/C++ pada Arduino IDE.",
      },
    ],
    provenProject: {
      title: "Perangkat Hardware Sensor SIFOKUS",
      description: "Prototipe perangkat monitoring siswa dengan casing 3D print custom untuk Capstone Design FATEK.",
    },
    tags: ["ESP32-CAM", "3D CAD / STL", "Embedded C++", "Arduino", "Hardware Prototyping"],
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
    description: "Platform WebGIS komprehensif untuk Dinas Pendidikan Provinsi Sulawesi Tengah yang memetakan persebaran ribuan sekolah PAUD-SMA/SMK/SLB beserta data spasial batas poligon 6 cabang dinas.",
    fullDescription: "Dikembangkan secara khusus sebagai project nyata (Magang Dispen) untuk Dinas Pendidikan Provinsi Sulawesi Tengah. Sistem mengadopsi arsitektur Decoupled (Headless API) di mana backend Laravel 11 murni bertindak sebagai REST API penyedia data geospasial dan autentikasi multi-role, sedangkan frontend React + TypeScript + Leaflet menyajikan visualisasi peta interaktif, cluster marker sekolah, polygon wilayah cabang dinas, serta analisis statistik pendidikan.",
    tags: ["Laravel 11", "React", "TypeScript", "Leaflet WebGIS", "Tailwind CSS", "MySQL", "Sanctum", "Fortify"],
    githubUrl: "https://github.com/Lieff246/portal-disdik",
    liveUrl: "https://pemetaan-disdik.sekolahkukeren.id/",
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
    featured: false,
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
    featured: false,
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
    id: "distroku-ecommerce",
    title: "DistroKu — Fashion & Streetwear Catalog Mobile App",
    tagline: "Aplikasi Mobile E-Commerce Distro Pakaian dengan Flutter, Supabase Auth & SQLite Offline Cache",
    category: "Mobile",
    role: "Mobile Developer (UAS Praktikum)",
    period: "2026",
    featured: false,
    image: "/images/distroku.png",
    description: "Aplikasi mobile e-commerce clothing distro dengan arsitektur autentikasi ganda (Supabase Cloud + SQLite Local), slider promo interaktif, dan switchable grid/list view.",
    fullDescription: "Dikembangkan sebagai proyek akhir komprehensif pada mata kuliah Praktikum Pemrograman Mobile Semester 4 di Universitas Tadulako. DistroKu mengintegrasikan Supabase Auth untuk manajemen akun cloud serta SQLite (via sqflite) untuk persistensi lokal dan kapabilitas offline. Dilengkapi antarmuka modular dengan navigasi multi-fragment (Home, Katalog, Akun), banner slider promosi, konsumsi REST API produk dengan FutureBuilder, serta fitur toggle tampilan grid/list interaktif.",
    tags: ["Flutter", "Dart", "Supabase Auth", "SQLite (sqflite)", "REST API", "Banner Slider", "Material 3"],
    githubUrl: null,
    liveUrl: null,
    metrics: "Dual Auth (Supabase + SQLite) & Dynamic Grid/List Toggle",
    highlights: [
      "Arsitektur autentikasi ganda: Cloud Auth berbasis Supabase dan penyimpanan lokal SQLite (sqflite)",
      "Pengambilan data produk asinkron dari REST API dengan manajemen loading & error state (FutureBuilder)",
      "Fitur interaktif switch tampilan dinamis antara Grid View dan List View pada katalog",
      "Komponen banner carousel promosi (BannerSlider) dan navigasi multi-fragment yang responsif",
      "Perancangan antarmuka rapi dengan Material Design, Splash Screen, dan manajemen sesi pengguna"
    ],
    techDetails: {
      frontend: "Flutter SDK, Dart, Material 3, Banner Slider, Cupertino Icons",
      backend: "Supabase Cloud Authentication & Database, REST API Endpoints",
      database: "Supabase PostgreSQL & SQLite Local Database (sqflite)",
    },
  },
  {
    id: "kuliner-nusantara",
    title: "Kuliner Nusantara — Showcase Web Tradisional",
    tagline: "Website Informasi Keanekaragaman Kuliner Tradisional Indonesia",
    category: "Frontend / Web",
    role: "Front-End Developer",
    period: "2025",
    featured: true,
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
  {
    id: "nongkis-palu",
    title: "NONGKIS — Web Direktori & Reservasi Tempat Nongkrong Kota Palu",
    tagline: "Platform Penemuan & Reservasi 32 Spot Nongkrong, Nugas, dan Kafe Terbaik di Kota Palu",
    category: "Fullstack / Web",
    role: "Fullstack Developer (RPL Kelompok 8)",
    period: "2025",
    featured: true,
    image: "/images/nongkis_rpl.png",
    description: "Aplikasi web direktori dan reservasi kafe/tempat nongkrong di Kota Palu dengan filter kebutuhan (nugas, santai, diskusi), integrasi Google Maps, dan dashboard booking admin.",
    fullDescription: "Dikembangkan sebagai proyek mata kuliah Rekayasa Perangkat Lunak (RPL) di Universitas Tadulako (Kelompok 8: Alif Apriansyah, Elika Khardalia, Achmad Aulia Irsyad). NONGKIS dirancang untuk membantu mahasiswa dan warga Kota Palu menemukan spot nongkrong ideal berdasarkan tujuan (nugas, diskusi kelompok, atau santai). Memuat kurasi 32 lokasi kafe dan ruang publik di Palu lengkap dengan fasilitas, jam operasional, tautan rute Google Maps, serta sistem reservasi tempat online yang terhubung ke dashboard manajemen admin.",
    tags: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "Google Maps Integration", "Role-Based Auth"],
    githubUrl: "https://github.com/Lieff246/NONGKIS_RPL",
    liveUrl: "https://nongkis.freedev.app/",
    metrics: "32 Spot Kafe di Palu · Sistem Booking & Google Maps",
    highlights: [
      "Kurasi 32 spot kafe dan ruang belajar publik populer di Kota Palu (Tanaris, Sin Cafe, Perpus Untad, dll.)",
      "Filter pintar berbasis kebutuhan pengguna: Nongkrong Santai, Nugas & Kerja, hingga Diskusi Kelompok",
      "Integrasi rute lokasi akurat terhubung ke Google Maps",
      "Sistem reservasi / booking tempat online lengkap dengan status konfirmasi (Pending, Confirmed, Cancelled)",
      "Dashboard administrasi untuk konfirmasi reservasi, kelola data tempat, dan rekap statistik"
    ],
    techDetails: {
      frontend: "HTML5, Modern CSS3, JavaScript ES6, LocalStorage Session",
      backend: "PHP Native / Apache Web Server, Role-Based Access Control (User & Admin)",
      database: "MySQL Relational Database Schema",
    },
  },
  {
    id: "safe-game-lidm",
    title: "S.A.F.E — Game Edukasi Mitigasi Gempa Bumi (Roblox)",
    tagline: "Inovasi Media Pembelajaran Berbasis Game 3D & Microlearning untuk Edukasi Mitigasi Gempa Bumi",
    category: "Game & Simulation",
    role: "Game Developer (Tim Pemuda Vimral)",
    period: "2026",
    featured: false,
    image: "/images/safe.png",
    description: "Game edukasi kebencanaan 3D berbasis platform Roblox untuk melatih kesiapsiagaan gempa bumi siswa SD-SMP melalui simulasi 14 logistik tas siaga, guncangan Drop-Cover-Hold On (DCH), dan evakuasi rute aman multiplayer.",
    fullDescription: "Diajukan pada Lomba Inovasi Digital Mahasiswa (LIDM) 2026 Divisi Inovasi Pembelajaran Digital Pendidikan (IPDP) oleh Tim Pemuda Vimral Universitas Tadulako (Ketua: Ahmad Mujahid; Anggota: Alif Apriansyah, Achmad Aulia Irsyad, Amalia Az Zahrah; Dosen Pembimbing: Fizar Syafa'at, S.Kom., M.Kom.). S.A.F.E mengadopsi model ADDIE dan MDA Framework (Mechanic, Dynamic, Aesthetic) yang terbagi dalam 3 stage terstruktur: Stage 1 (Misi pengumpulan 14 barang esensial Tas Siaga Bencana sebelum batas waktu habis), Stage 2 (Simulasi guncangan visual-audio realistik dan respons aksi Drop, Cover, Hold On dalam hitungan detik < 10 detik), serta Stage 3 (Simulasi evakuasi mandiri dan gotong royong multiplayer menuju Assembly Area sembari menghindari rintangan reruntuhan). Dilengkapi karakter instruktur virtual NPC 'Pak John' berbahasa Indonesia berstandar resmi BPBD dan Teacher Dashboard berbasis Roblox DataStore API untuk pemantauan learning analytics secara real-time.",
    tags: ["Roblox Studio", "Luau Scripting", "3D Simulation", "Game-Based Learning", "DataStore API", "Multiplayer", "Disaster Mitigation"],
    githubUrl: null,
    liveUrl: "https://youtu.be/0_yj7xjP1mI",
    metrics: "LIDM 2026 Divisi IPDP (Tim Pemuda Vimral) · 3 Stage Simulasi & NPC BPBD",
    highlights: [
      "Simulasi 3D imersif dan ringan berbasis Roblox Studio & scripting Luau yang multiplatform (PC, Android, iOS)",
      "Penerapan Game-Based Learning (GBL) dengan 3 stage sekuensial: Tas Siaga Bencana, aksi Drop-Cover-Hold On (DCH), dan evakuasi aman",
      "Fitur multiplayer kolaboratif untuk melatih refleks navigasi spasial menuju titik kumpul (Assembly Area)",
      "Karakter instruktur virtual NPC 'Pak John' (BPBD) dengan materi edukasi sesuai standar kebencanaan nasional",
      "Integrasi Teacher Dashboard berbasis Roblox DataStore API untuk learning analytics dan evaluasi respon siswa"
    ],
    techDetails: {
      frontend: "Roblox 3D Client Engine, Custom Player GUI, In-Game HUD, Audio & Camera Shake Simulation",
      backend: "Luau Scripting Language, Roblox Server Architecture, Multiplayer Networking",
      database: "Roblox DataStore API (Cloud Session & Learning Analytics Persistence)",
    },
  },
];


export const experiences: Experience[] = [
  {
    id: "magang-dispen",
    role: "Fullstack Web & WebGIS Developer (Intern)",
    organization: "Dinas Pendidikan Provinsi Sulawesi Tengah",
    period: "2026",
    badge: "Government Internship",
    category: "Internship",
    description: "Melaksanakan magang kedinasan di Dinas Pendidikan Provinsi Sulawesi Tengah untuk merancang dan membangun sistem informasi geospasial (WebGIS) pemetaan profiling sekolah terintegrasi se-Provinsi Sulawesi Tengah.",
    achievements: [
      "Mengembangkan arsitektur Decoupled murni memisahkan Laravel dan frontend interaktif React + TypeScript + Vite",
      "Mengintegrasikan visualisasi peta Leaflet dengan cluster marker sekolah dan data spasial poligon 6 cabang dinas pendidikan",
      "Menerapkan sistem autentikasi multi-role aman berbasis Laravel Sanctum, Fortify, dan Spatie Role/Permission",
      "Membangun fitur profiling sekolah se-Sulawesi Tengah dengan data lengkap dan terintegrasi"
    ],
    tags: ["Laravel", "React", "TypeScript", "WebGIS & Leaflet", "GeoJSON", "MySQL", "Government System"],
    image: "/images/dispen.png",
    imageCaption: "Dokumentasi saat magang di Dinas Pendidikan Provinsi Sulawesi Tengah",
  },
  {
    id: "hmti-penalaran",
    role: "PJ Divisi Penalaran Keilmuan (Intelektual)",
    organization: "Himpunan Mahasiswa Teknik Informatika (HMTI) Untad",
    period: "2025 — Sekarang",
    badge: "Leadership & Academic",
    category: "Leadership",
    description: "Mengemban amanah di divisi intelektual HMTI Untad untuk mengorganisir program pengembangan kapabilitas akademik mahasiswa Informatika dan fasilitasi kompetisi.",
    achievements: [
      "Menginisiasi kelas belajar dan diskusi mingguan untuk mata kuliah inti (OOP, UI/UX, Pemrograman Web, Basis Data, Rekayasa API, dsb)",
      "Mendampingi dan menyiapkan delegasi mahasiswa Informatika untuk kompetisi teknologi tingkat regional dan nasional (LIDM, Gemastik, dsb)",
      "Menyusun modul serta bank materi pembelajaran untuk mendukung kelancaran studi mahasiswa"
    ],
    tags: ["Academic Mentoring", "Community Leadership", "Event Organizing", "Informatics Community"],
    image: "/images/pk.jpeg",
    imageCaption: "Dokumentasi Penalaran Mingguan",
  },
  {
    id: "lidm-2026-safe",
    role: "Game Developer & System Integrator (Anggota Tim)",
    organization: "LIDM 2026 — Tim Pemuda Vimral",
    period: "2026",
    badge: "National Competition",
    category: "Competition",
    description: "Mengembangkan karya inovasi media pembelajaran digital berbasis game 3D Roblox 'S.A.F.E' (Stay Alert, Find Escape) pada Lomba Inovasi Digital Mahasiswa (LIDM) 2026 Divisi IPDP.",
    achievements: [
      "Mengembangkan 3 stage skenario kebencanaan (Misi Tas Siaga, simulasi guncangan Drop-Cover-Hold On, dan evakuasi rute aman)",
      "Merancang integrasi NPC instruktur virtual 'Pak John' (BPBD) serta Teacher Dashboard berbasis Roblox DataStore API",
      "Menyusun proposal ilmiah dan materi pengujian edukasi mitigasi gempa bumi bersama Tim Pemuda Vimral dibimbing Fizar Syafa'at, S.Kom., M.Kom."
    ],
    tags: ["LIDM 2026", "Roblox Studio", "Luau", "Game-Based Learning", "Disaster Mitigation"],
    image: "/images/safe.png",
    imageCaption: "In-Game NPC 'Pak John' BPBD & Skenario Simulasi Game S.A.F.E (Roblox)",
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
    image: "/images/pt.jpg",
    imageCaption: "Submission Project Web Programming Tadulako Batch Orion",
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
    image: "/images/pengenalan.jpeg",
    imageCaption: "Dokumentasi Pengenalan Praktikum 2026",
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
    image: "/images/sifokus.jpg",
    imageCaption: "Tim Pelaksana SIFOKUS — Capstone Dies Natalis FATEK Untad",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    description: "Bahasa pemrograman utama yang digunakan untuk rekayasa sistem dan algoritma.",
    items: ["PHP 8+", "TypeScript", "JavaScript (ES6+)", "Go (Golang 1.21)", "Dart", "Python 3", "Kotlin", "C++", "SQL"],
  },
  {
    title: "Frameworks & Web",
    description: "Ekosistem framework modern untuk arsitektur web fullstack, mobile, dan API.",
    items: ["Laravel 11 & 13", "React 19", "Next.js", "Flutter SDK", "Chi Router", "Tailwind CSS", "Vite", "Node.js"],
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
    description: "Lingkungan kerja pengembangan perangkat lunak, cloud BaaS, dan basis data.",
    items: ["Git", "GitHub", "MySQL", "Supabase", "Firebase", "SQLite (sqflite)", "Postman", "Laragon", "VS Code", "Android Studio"],
  },
];

export const techTools: TechTool[] = [
  // Web & Frameworks
  { name: "React", category: "Frameworks & Web", role: "FRONTEND LIB", icon: "icons/react.svg" },
  { name: "Tailwind CSS", category: "Frameworks & Web", role: "CSS FRAMEWORK", icon: "icons/tailwindcss.svg" },
  { name: "Next.js", category: "Frameworks & Web", role: "WEB FRAMEWORK", icon: "icons/nextdotjs.svg" },
  { name: "Laravel", category: "Frameworks & Web", role: "BACKEND API", icon: "icons/laravel.svg" },
  { name: "Flutter", category: "Frameworks & Web", role: "MOBILE SDK", icon: "icons/flutter.svg" },
  { name: "Vite", category: "Frameworks & Web", role: "BUILD TOOL", icon: "icons/vite.svg"},
  { name: "Node.js", category: "Frameworks & Web", role: "JS RUNTIME", icon: "icons/nodedotjs.svg" },

  // Languages
  { name: "TypeScript", category: "Languages", role: "TYPED SCRIPT", icon: "icons/typescript.svg" },
  { name: "JavaScript", category: "Languages", role: "CLIENT SCRIPT", icon: "icons/javascript.svg" },
  { name: "Go (Golang)", category: "Languages", role: "SYSTEMS LANG", icon: "icons/go.svg" },
  { name: "PHP 8+", category: "Languages", role: "SERVER SCRIPT", icon: "icons/php.svg" },
  { name: "Python 3", category: "Languages", role: "AI & DATA LANG", icon: "icons/python.svg" },
  { name: "Dart", category: "Languages", role: "CROSS-PLATFORM", icon: "icons/dart.svg" },
  { name: "Kotlin", category: "Languages", role: "ANDROID LANG", icon: "icons/kotlin.svg" },
  { name: "C++", category: "Languages", role: "EMBEDDED LANG", icon: "icons/cplusplus.svg" },
  { name: "SQL", category: "Languages", role: "QUERY LANG", icon: "icons/mysql.svg"},

  // Geospatial & Spatial Data
  { name: "Leaflet.js", category: "Geospatial", role: "WEB MAPPING", icon: "icons/leaflet.svg" },
  { name: "QGIS", category: "Geospatial", role: "DESKTOP GIS", icon: "icons/qgis.svg"  },
  { name: "ArcGIS", category: "Geospatial", role: "ESRI SPATIAL", icon: "icons/arcgis.svg" },

  // AI, Vision & Embedded
  { name: "Google Gemini", category: "AI & Hardware", role: "LLM MULTI-AGENT", icon: "icons/googlegemini.svg" },
  { name: "Claude", category: "AI & Hardware", role: "LLM MULTI-AGENT", icon: "icons/claude.svg" },
  { name: "MediaPipe", category: "AI & Hardware", role: "FACEMESH VISION", icon: "icons/mediapipe.svg" },
  { name: "OpenCV", category: "AI & Hardware", role: "IMAGE PROCESSING", icon: "icons/opencv.svg" },
  { name: "Arduino", category: "AI & Hardware", role: "EMBEDDED PLATFORM", icon: "icons/arduino.svg" },

  // Tools & DevOps
  { name: "VS Code", category: "Tools & DevOps", role: "CODE EDITOR", icon: "icons/visualstudiocode.svg" },
  { name: "Antigravity", category: "Tools & DevOps", role: "CODE EDITOR", icon: "icons/antigravity.svg" },
  { name: "Git", category: "Tools & DevOps", role: "VERSION CONTROL", icon: "icons/git.svg" },
  { name: "GitHub", category: "Tools & DevOps", role: "CODE REPO", icon: "icons/github.svg" },
  { name: "MySQL", category: "Tools & DevOps", role: "RELATIONAL DB", icon: "icons/mysql.svg" },
  { name: "PhpMyAdmin", category: "Tools & DevOps", role: "RELATIONAL DB", icon: "icons/phpmyadmin.svg" },
  { name: "Supabase", category: "Tools & DevOps", role: "POSTGRES BAAS", icon: "icons/supabase.svg" },
  { name: "Firebase", category: "Tools & DevOps", role: "BACKEND SERVICE", icon: "icons/firebase.svg" },
  { name: "SQLite", category: "Tools & DevOps", role: "LOCAL DATABASE", icon: "icons/sqlite.svg" },
  { name: "Postman", category: "Tools & DevOps", role: "API TESTING", icon: "icons/postman.svg" },
  { name: "Laragon", category: "Tools & DevOps", role: "LOCAL SERVER", icon: "icons/laragon.svg" },
  { name: "Android Studio", category: "Tools & DevOps", role: "MOBILE IDE", icon: "icons/android.svg" },
];
