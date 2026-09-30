import { PersonalInfo, Project, Experience, SkillCategory, FocusArea, TechTool } from "@/types/portfolio";

export const personalInfo: PersonalInfo = {
  name: "Alif Apriansyah",
  github: "https://github.com/Lieff246",
  email: "alifapriansyahasgar@gmail.com",
  instagram: "https://www.instagram.com/alifapriansyah02/"
};

export const focusAreas: FocusArea[] = [
  {
    title: "Fullstack Web & WebGIS",
    description: "Pengembangan platform pemetaan geografis interaktif skala provinsi. Menerapkan visualisasi ribuan titik koordinat, polygon batas wilayah, serta arsitektur decoupled berbasis React dan REST API.",
    tags: ["React 19", "TypeScript", "Laravel 11", "Leaflet", "GeoJSON", "Tailwind CSS"],
    icon: "Globe",
  },
  {
    title: "Backend Engineering",
    description: "Membangun layanan backend dan RESTful API modular berbasis PHP (Laravel) dan Go. Menerapkan prinsip Clean Architecture, efisiensi konkurensi data, manajemen sesi stateless, serta skema basis data relasional yang kokoh.",
    tags: ["Go (Golang)", "Chi Router", "MySQL", "JWT Auth", "Clean Architecture", "PHP 8+"],
    icon: "Server",
  },
  {
    title: "Mobile App Development",
    description: "Pengembangan aplikasi mobile modern lintas platform menggunakan Flutter dan Dart. Menerapkan manajemen state reaktif, integrasi layanan cloud database (Firebase & Supabase), serta persistensi data lokal offline.",
    tags: ["Flutter", "Dart", "Firebase", "Supabase", "GetX", "SQLite"],
    icon: "Smartphone",
  },
  {
    title: "AI & Computer Vision",
    description: "Implementasi visi komputer untuk kalkulasi biometrik waktu nyata (Eye Aspect Ratio/FaceMesh) guna deteksi kelelahan, dipadukan dengan integrasi model kecerdasan buatan untuk sistem terapan.",
    tags: ["Python", "OpenCV", "MediaPipe FaceMesh", "Google Gemini API", "Multi-Agent"],
    icon: "Brain",
  },
];

export const projects: Project[] = [
  {
    id: "disdik-pemetaan",
    title: "Portal Pemetaan Sekolah Sulawesi Tengah",
    tagline: "WebGIS Pemetaan Persebaran dan Profiling Sekolah Beserta Batas Wilayah Cabang Dinas Se-Sulawesi Tengah",
    category: "Web",
    role: "Fullstack WebGIS Developer (Magang Dinas Pendidikan Sulawesi Tengah)",
    period: "2026",
    featured: true,
    image: "/images/pemetaan.png",
    description: "Platform pemetaan interaktif untuk mendata persebaran dan profiling seluruh sekolah (PAUD-SMA) di Sulawesi Tengah dan visualisasi batas wilayah 6 cabang dinas pendidikan di Sulawesi Tengah.",
    fullDescription: "Proyek yang saya bangun saat magang di Dinas Pendidikan Provinsi Sulawesi Tengah untuk mendigitalkan dan merapikan pendataan sekolah yang sebelumnya terpecah-pecah. Sistem ini memisahkan backend Laravel 11 sebagai REST API data spasial dan frontend React + Leaflet di sisi antarmuka, sehingga visualisasi titik persebaran sekolah tetap ringan dengan teknik clustering dan batas poligon wilayah cabang dinas terlihat jelas.",
    tags: ["Laravel 11", "React", "TypeScript", "Leaflet WebGIS", "Tailwind CSS", "MySQL", "GeoJSON", "Sanctum"],
    githubUrl: "https://github.com/Lieff246/portal-disdik",
    liveUrl: "https://pemetaan-disdik.sekolahkukeren.id/",
    highlights: [
      "Visualisasi peta interaktif dengan clustering titik persebaran sekolah dan batas poligon 6 cabang dinas",
      "Pemetaan persebaran dan profiling sekolah tingkat PAUD, TK, SD, SMP, SMA/SMK di seluruh Sulawesi Tengah",
      "Pemisahan backend Laravel REST API dan frontend React untuk performa peta yang cepat dan responsif",
      "Manajemen akses multi-role (Admin Provinsi, Cabang Dinas, Sekolah) dengan Spatie Permission & Sanctum",
    ],
    techDetails: {
      frontend: "React 18, TypeScript, Vite, Tailwind CSS, Leaflet, React-Leaflet-Cluster, Recharts",
      backend: "Laravel 11, PHP 8.3+, Sanctum, Fortify, Spatie Permission",
      database: "MySQL Relational Spatial Indexing",
    },
  },
  {
    id: "ewastehub",
    title: "E-Waste Hub — Pengelolaan Sampah Elektronik",
    tagline: "Platform Penjemputan Sampah Elektronik Rumah Tangga Berbasis Poin Reward",
    category: "Web",
    role: "Fullstack Developer (Tugas Akhir Mata Kuliah Pemrograman Web)",
    period: "2026",
    featured: true,
    image: "/images/ewaste.png",
    description: "Aplikasi web yang menghubungkan warga dengan mitra pengepul lokal untuk penjemputan sampah elektronik rumah tangga, reward poin, dan verifikasi kelayakan mitra.",
    fullDescription: "Proyek tugas akhir mata kuliah Pemrograman Web di Universitas Tadulako. E-Waste Hub dibuat agar masyarakat tidak membuang limbah elektronik sembarangan, melainkan dapat meminta penjemputan langsung dari pengepul terdekat. Aplikasi ini memisahkan alur untuk 3 peran pengguna (Warga, Mitra Pengepul, dan Admin), mencakup pelacakan status jemput barang, sistem poin yang dapat dicairkan, serta algoritma penilaian otomatis untuk memverifikasi kesiapan lapak mitra baru.",
    tags: ["Laravel 11", "PHP 8.2+", "Blade", "Tailwind CSS", "MySQL", "Rule-Based System",],
    githubUrl: "https://github.com/DarkPhantom24/UAS-web",
    liveUrl: null,
    highlights: [
      "Alur penjemputan bertahap mulai dari pengajuan warga, konfirmasi mitra, hingga penimbangan di lokasi",
      "Gamifikasi poin daur ulang (100 poin/kg) yang bisa dikonversi menjadi saldo tunai otomatis",
      "Sistem verifikasi lapak mitra berbasis aturan heuristik untuk menilai kelayakan gudang & izin usaha",
      "Terdapat algoritma penilaian otomatis untuk memverifikasi kesiapan lapak mitra baru",
      "Dashboard admin terpusat untuk memantau sirkulasi transaksi limbah dan statistik wilayah"
    ],
    techDetails: {
      frontend: "Blade Components, Tailwind CSS, Phosphor Icons, Responsive Layout",
      backend: "Laravel 11.x, PHP 8.2+, Custom RoleMiddleware, Service Architecture",
      database: "MySQL Relational Schema, Foreign Key Cascades & Status Indexing",
    },
  },
  {
    id: "sifokus-iot",
    title: "SIFOKUS — Pendeteksi Kantuk Siswa (IoT & Vision)",
    tagline: "Prototipe Pendeteksi Kantuk & Pengukur Fokus Belajar Berbasis Kamera ESP32",
    category: "AI",
    role: "Ketua Tim (LIDM 2025 & Capstone Design FATEK Untad 2025)",
    period: "2025",
    featured: false,
    image: "/images/sifokus-device.png",
    description: "Alat pemantau fokus di kelas yang menghitung kedipan mata secara real-time dari kamera ESP32 dan memicu alarm visual jika siswa terpejam lebih dari 2 detik.",
    fullDescription: "Karya tim saya (Ordinary Squad) untuk Lomba Inovasi Digital Mahasiswa (LIDM) 2025 Divisi Inovasi Teknologi Digital Pendidikan serta Capstone Design FATEK Untad. Kami merancang alat pemantau konsentrasi menggunakan mikrokontroler ESP32-CAM yang mengirimkan feed gambar ke program Python. Memanfaatkan MediaPipe FaceMesh untuk melacak koordinat mata dan menghitung Eye Aspect Ratio (EAR) guna membedakan kedipan normal dengan kantuk (micro-sleep), lengkap dengan lampu indikator peringatan dan casing custom hasil 3D printing.",
    tags: ["Python", "OpenCV", "MediaPipe FaceMesh", "EAR Algorithm", "ESP32-CAM", "3D Printing"],
    githubUrl: null,
    liveUrl: null,
    highlights: [
      "Deteksi kantuk real-time menggunakan kalkulasi matematis Eye Aspect Ratio (EAR) 6-titik",
      "Integrasi modul ESP32-CAM dengan lampu indikator LED sebagai alarm pengingat di meja belajar",
      "Perancangan fisik casing enclosure menggunakan software 3D CAD dan dicetak dengan 3D printer",
      "Dipresentasikan pada Capstone Design Dies Natalis FATEK Untad dan diajukan ke LIDM 2025"
    ],
    techDetails: {
      hardware: "ESP32-CAM, LED Visual Alerts, Custom 3D Printed Casing (STL)",
      backend: "Python 3, OpenCV, MediaPipe FaceMesh, SciPy Spatial Distance",
    },
  },
  {
    id: "smartstudy-ai",
    title: "SmartStudy — Web Manajemen Tugas Kuliah Berbasis AI",
    tagline: "Aplikasi Manajemen Tugas Kuliah Terintegrasi Google Gemini AI",
    category: "Web & AI",
    role: "Fullstack & AI Developer (Tugas Akhir Praktikum Pemrograman Web)",
    period: "2026",
    featured: true,
    image: "/images/smartstudy.png",
    description: "Aplikasi web untuk membantu mahasiswa mengatur deadline tugas kuliah dengan bantuan AI yang mengestimasi durasi kerja dan mengatur prioritas agar tidak burnout.",
    fullDescription: "Dibangun menggunakan Laravel 13 dan Laravel AI SDK untuk mengatasi kendala mahasiswa yang sering kewalahan mengatur jadwal kuliah dan tugas praktikum. Aplikasi ini memanfaatkan Google Gemini API yang dibagi ke dalam 3 fungsi spesifik: membedah deskripsi tugas untuk memperkirakan estimasi durasi pengerjaan, menyusun matriks prioritas agar mahasiswa tahu mana yang harus dikerjakan duluan, serta memberikan pengingat waktu belajar yang realistis di sela-sela jadwal kuliah.",
    tags: ["Laravel 13", "Google Gemini API", "Laravel AI SDK", "Tailwind CSS v4", "MySQL", "Blade"],
    githubUrl: "https://github.com/Lieff246/SmartStudy",
    liveUrl: null,
    highlights: [
      "Integrasi Google Gemini API via official Laravel AI SDK untuk estimasi beban tugas",
      "Estimasi otomatis lama pengerjaan tugas berdasarkan deskripsi instruksi dan tingkat kerumitan",
      "Penyusunan prioritas berbasis matriks penting-mendesak untuk mencegah deadline menumpuk",
      "Antarmuka modern dan ringan dibangun dengan Tailwind CSS v4"
    ],
    techDetails: {
      frontend: "Blade Components, Tailwind CSS v4, Vite",
      backend: "Laravel 13, PHP 8.3+",
      database: "MySQL",
    },
  },
  {
    id: "go-notes-api",
    title: "Go Notes API — Backend Clean Architecture",
    tagline: "REST API Manajemen Catatan & Tagging dengan Clean Architecture Golang",
    category: "Backend",
    role: "Backend Developer (Submission Hammercode Backend)",
    period: "2025",
    featured: false,
    image: "/images/notesapp.png",
    description: "Backend API cepat dan hemat memori untuk manajemen catatan dan tag, menerapkan Clean Architecture pada Go dengan router Chi dan autentikasi JWT.",
    fullDescription: "Proyek eksplorasi mandiri serta submission Hammercode Backend untuk mendalami cara merancang arsitektur backend yang rapi dan terukur menggunakan bahasa Go (Golang). Struktur kode memisahkan lapisan handler, middleware, repository database, dan domain bisnis secara tegas. Menyediakan endpoint lengkap untuk manajemen folder, catatan, relasi multi-tag, hashing password Bcrypt yang aman, dan validasi sesi menggunakan token JWT.",
    tags: ["Go (Golang)", "Chi Router", "MySQL", "JWT Auth", "Bcrypt", "Clean Architecture"],
    githubUrl: "https://github.com/Lieff246/Submission_FE-BE",
    liveUrl: null,
    highlights: [
      "Penerapan Clean Architecture dengan pemisahan folder modular (cmd, handlers, middleware, repository)",
      "Sistem keamanan stateless berbasis token JSON Web Token (JWT) dan enkripsi password Bcrypt",
      "Pengolahan query relasional database MySQL yang efisien untuk fitur multi-tagging catatan",
      "Performa tinggi khas bahasa Go dengan konsumsi memori yang sangat rendah"
    ],
    techDetails: {
      backend: "Go (Golang 1.21), Chi Router (go-chi/chi/v5), JWT (golang-jwt)",
      database: "MySQL, Relational Schema Migrations",
    },
  },
  {
    id: "moviex-flutter",
    title: "MOVIEX — Katalog & Trailer Film Flutter",
    tagline: "Aplikasi Mobile Penjelajah Film & Pemutar Trailer Berbasis Flutter dan Firebase",
    category: "Mobile",
    role: "Mobile App Developer (Tugas Akhir Mata Kuliah Pemrograman Mobile)",
    period: "2026",
    featured: true,
    image: "/images/moviex.png",
    description: "Aplikasi Android untuk mencari katalog film terbaru, memutar trailer langsung di dalam aplikasi, dan menyimpan koleksi film favorit ke akun cloud.",
    fullDescription: "Dikembangkan sebagai tugas akhir mata kuliah Pemrograman Mobile. MOVIEX dirancang dengan tampilan modern bertema gelap (dark mode). Menggunakan Flutter dengan GetX untuk manajemen state dan navigasi yang responsif, Firebase Authentication untuk login pengguna, Cloud Firestore untuk sinkronisasi daftar film favorit secara online, serta pemutar video YouTube terintegrasi agar pengguna bisa langsung menonton trailer tanpa keluar aplikasi.",
    tags: ["Flutter", "Dart", "Firebase Auth", "Cloud Firestore", "GetX", "YouTube Player", "Dark UI"],
    githubUrl: "https://github.com/Lieff246/AppFilm_UASmobile",
    liveUrl: null,
    highlights: [
      "Autentikasi akun pengguna (Login & Registrasi) terhubung ke Firebase Authentication",
      "Penyimpanan daftar film favorit secara real-time di Cloud Firestore dan sinkronisasi lokal",
      "Pemutar trailer video YouTube langsung di dalam aplikasi tanpa membuka browser",
      "Manajemen state dan perpindahan layar yang mulus menggunakan GetX Controller",
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
    title: "DistroKu — Katalog & Belanja Distro Mobile",
    tagline: "Aplikasi Katalog Pakaian Distro dengan Supabase Auth & Cache Offline SQLite",
    category: "Mobile",
    role: "Mobile Developer (Tugas Akhir Praktikum Pemrograman Mobile)",
    period: "2026",
    featured: false,
    image: "/images/distroku.png",
    description: "Aplikasi mobile katalog produk pakaian distro dengan login Supabase dan penyimpanan lokal SQLite agar produk tetap bisa dilihat saat koneksi internet terputus.",
    fullDescription: "Proyek akhir praktikum Pemrograman Mobile. DistroKu dibangun untuk toko pakaian distro lokal. Menggabungkan backend cloud Supabase untuk otentikasi data akun dengan database lokal SQLite sebagai tempat penyimpanan sementara (cache). Hasilnya, pengguna tetap bisa menelusuri katalog pakaian favorit saat offline, beralih antara tampilan grid atau list sesuai kenyamanan, dan melihat banner promo terbaru.",
    tags: ["Flutter", "Dart", "Supabase Auth", "SQLite", "REST API", "Banner Slider", "Material 3"],
    githubUrl: null,
    liveUrl: null,
    highlights: [
      "Dukungan mode offline menggunakan database lokal SQLite untuk menyimpan katalog produk",
      "Autentikasi akun pengguna berbasis cloud menggunakan Supabase Auth",
      "Fitur switch tampilan katalog interaktif antara Grid View dan List View",
      "Konsumsi data produk dari REST API dengan indikator loading dan penanganan error yang baik",
      "Perancangan antarmuka rapi dengan Material Design 3 dan manajemen sesi pengguna"
    ],
    techDetails: {
      frontend: "Flutter SDK, Dart, Material 3, Banner Slider, Cupertino Icons",
      backend: "Supabase Cloud Authentication & Database, REST API Endpoints",
      database: "Supabase PostgreSQL & SQLite Local Database (sqflite)",
    },
  },
  {
    id: "kuliner-nusantara",
    title: "Kuliner Nusantara — Direktori Masakan Tradisional",
    tagline: "Website Panduan & Ragam Resep Masakan Tradisional Khas Nusantara",
    category: "Web",
    role: "Frontend Developer (Submission Programming Tadulako Soyuz)",
    period: "2024",
    featured: true,
    image: "/images/kulinernusantara.png",
    description: "Website responsif yang menyajikan informasi keanekaragaman makanan tradisional dari berbagai daerah di Indonesia dengan struktur web semantik yang bersih.",
    fullDescription: "Proyek web awal saat mengikuti kegiatan komunitas Programming Tadulako (Soyuz). Website ini saya bangun murni menggunakan HTML5, CSS3, dan JavaScript tanpa framework tambahan untuk memperdalam pemahaman dasar seputar tata letak responsif, flexbox/grid, serta manipulasi DOM. Dihosting langsung secara publik menggunakan GitHub Pages.",
    tags: ["HTML5", "CSS3", "JavaScript", "GitHub Pages", "Responsive Design"],
    githubUrl: "https://github.com/Lieff246/Submission-Soyuz",
    liveUrl: "https://lieff246.github.io/Submission-Soyuz/",
    highlights: [
      "Struktur kode HTML5 semantik yang ramah pembaca layar dan mudah dipelihara",
      "Tampilan responsif yang menyesuaikan ukuran layar ponsel hingga monitor desktop",
      "Dibangun murni dengan JavaScript dan CSS native tanpa dependensi pihak ketiga",
      "Dipublikasikan langsung ke GitHub Pages sebagai proyek terbuka"
    ],
  },
  {
    id: "nongkis-palu",
    title: "NONGKIS — Direktori & Reservasi Kafe Kota Palu",
    tagline: "Platform Pencarian & Reservasi Tempat Nugas dan Nongkrong di Kota Palu",
    category: "Web",
    role: "Fullstack Developer (Tugas Mata Kuliah Rekayasa Perangkat Lunak)",
    period: "2025",
    featured: true,
    image: "/images/nongkis_rpl.png",
    description: "Website direktori untuk mencari kafe dan tempat nugas di Palu berdasarkan suasana dan fasilitas, lengkap dengan rute Google Maps dan form reservasi meja.",
    fullDescription: "Proyek tugas besar mata kuliah Rekayasa Perangkat Lunak. NONGKIS dibuat untuk menjawab kebingungan mahasiswa Palu saat mencari tempat nugas yang punya colokan dan Wi-Fi cepat, atau sekadar nongkrong santai. Memuat direktori 32 kafe lokal dengan filter suasana, tautan navigasi langsung ke Google Maps, serta sistem booking meja online dengan dashboard admin untuk verifikasi pemesanan.",
    tags: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "Google Maps Integration"],
    githubUrl: "https://github.com/Lieff246/NONGKIS_RPL",
    liveUrl: "https://nongkis.freedev.app/",
    highlights: [
      "Direktori 32 titik kafe dan ruang belajar di Kota Palu lengkap dengan fasilitas dan jam operasional",
      "Filter pencarian sesuai kebutuhan: tempat nugas/kerja, santai, atau diskusi kelompok",
      "Navigasi rute terintegrasi langsung dengan titik koordinat Google Maps",
      "Sistem booking tempat online dengan konfirmasi status pemesanan dan panel admin",
      "Pengelolaan basis data MySQL relasional untuk pencatatan riwayat reservasi"
    ],
    techDetails: {
      frontend: "HTML5, Modern CSS3, JavaScript ES6, LocalStorage Session",
      backend: "PHP Native / Apache Web Server, Role-Based Access Control (User & Admin)",
      database: "MySQL Relational Database Schema",
    },
  },
  {
    id: "safe-game-lidm",
    title: "S.A.F.E — Game 3D Edukasi Mitigasi Gempa (Roblox)",
    tagline: "Simulasi 3D Kesiapsiagaan & Mitigasi Gempa Bumi untuk Siswa Sekolah",
    category: "Game",
    role: "Game Developer (LIDM 2026)",
    period: "2026",
    featured: false,
    image: "/images/safe.png",
    description: "Game simulasi 3D di platform Roblox untuk melatih siswa merespons gempa bumi, mulai dari menyiapkan tas siaga, latihan Drop-Cover-Hold On, hingga evakuasi rute aman.",
    fullDescription: "Karya tim kami (Tim Pemuda Vimral Untad) untuk ajang Lomba Inovasi Digital Mahasiswa (LIDM) 2026 Divisi Inovasi Pembelajaran Digital. Mengingat Sulawesi Tengah merupakan daerah rawan bencana khususnya gempa bumi, kami merancang game interaktif di Roblox Studio menggunakan bahasa Luau. Game ini memandu anak sekolah melalui 3 misi: mengumpulkan barang penting tas siaga bencana sebelum waktu habis, merespons guncangan gempa dengan gerakan Drop-Cover-Hold On di bawah meja, dan evakuasi bersama teman menuju titik kumpul aman dipandu instruktur virtual BPBD.",
    tags: ["Roblox Studio", "Luau Scripting", "3D Simulation", "Game-Based Learning", "Multiplayer", "Mitigasi Bencana"],
    githubUrl: null,
    liveUrl: "https://youtu.be/0_yj7xjP1mI",
    highlights: [
      "Simulasi 3D interaktif di Roblox yang ringan dan bisa dimainkan di PC maupun smartphone Android",
      "Skenario edukasi 3 babak: Misi Tas Siaga, aksi penyelamatan diri saat guncangan, dan evakuasi lapangan",
      "Karakter instruktur virtual 'Pak John' dengan materi mitigasi bencana berstandar resmi BPBD",
      "Fitur multiplayer kooperatif untuk melatih anak-anak saling bekerja sama saat evakuasi darurat",
      "Integrasi Teacher Dashboard berbasis Roblox DataStore API untuk melihat rekap respon siswa"
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
      "Membangun arsitektur terpisah antara backend Laravel REST API dan antarmuka web interaktif React + TypeScript",
      "Mengintegrasikan visualisasi peta Leaflet dengan clustering ribuan titik sekolah dan batas wilayah 6 cabang dinas",
      "Menerapkan sistem autentikasi dan manajemen hak akses multi-role (Admin Provinsi, Cabang Dinas, Sekolah) dengan Spatie & Sanctum",
      "Membangun profiling data sekolah se-Sulawesi Tengah untuk rekapitulasi fasilitas dan akreditasi sekolah"
    ],
    tags: ["Laravel", "React", "TypeScript", "WebGIS & Leaflet", "GeoJSON", "MySQL", "Experience"],
    image: "/images/dispen.png",
    imageCaption: "Dokumentasi saat magang di Dinas Pendidikan Provinsi Sulawesi Tengah",
  },
  {
    id: "hmti-penalaran",
    role: "PJ Divisi Penalaran Keilmuan (Intelektual)",
    organization: "Himpunan Mahasiswa Teknik Informatika (HMTI) Untad",
    period: "2025 — 2026",
    badge: "Teaching, Mentoring & Academic",
    category: "Organization",
    description: "Mengemban amanah di divisi intelektual HMTI Untad untuk mengorganisir program pengembangan kapabilitas akademik mahasiswa Informatika dan fasilitasi kompetisi.",
    achievements: [
      "Menginisiasi kelas belajar dan diskusi mingguan untuk mata kuliah inti (OOP, UI/UX, Pemrograman Web, Basis Data, Rekayasa API, dsb)",
      "Mendampingi dan menyiapkan delegasi mahasiswa Informatika untuk kompetisi teknologi tingkat regional dan nasional (LIDM, Gemastik, dsb)",
      "Menyusun modul serta bank materi pembelajaran untuk mendukung kelancaran studi mahasiswa"
    ],
    tags: ["Academic Mentoring", "Event Organizing", "Informatics Community"],
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
      "Menyusun proposal ilmiah dan memvisualisasikan edukasi mitigasi gempa bumi bersama Tim Pemuda Vimral, dengan bimbingan Dosen Fizar Syafa'at, S.Kom., M.Kom."
    ],
    tags: ["LIDM 2026", "Roblox Studio", "Luau", "Game-Based Learning", "Disaster Mitigation", "Reasearch Paper"],
    image: "/images/safe.png",
    imageCaption: "In-Game NPC 'Pak John' BPBD & Skenario Simulasi Game S.A.F.E (Roblox)",
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
    id: "mentor-pt",
    role: "Front-End Web Development Mentor (Batch Orion)",
    organization: "Programming Tadulako",
    period: "2025 — 2026",
    badge: "Mentorship & Teaching",
    category: "Mentoring",
    description: "Berperan sebagai mentor pengajar kelas Web Dasar di komunitas Programming Tadulako untuk membimbing mahasiswa dalam membangun fondasi web modern.",
    achievements: [
      "Menyusun kurikulum 6 hari pembelajaran intensif (Semantic HTML5, CSS Layouting, JavaScript DOM, dan Version Control Git/GitHub)",
      "Membimbing langsung sesi live coding dan membantu troubleshooting error/bug para peserta",
      "Mengarahkan peserta hingga berhasil menyelesaikan dan men-deploy project akhir submission web masing-masing"
    ],
    tags: ["Teaching", "HTML5/CSS3", "JavaScript", "Git & GitHub Workflow", "Peer Review"],
    image: "/images/pt.jpg",
    imageCaption: "Submission Project Web Programming Tadulako Batch Orion",
  },
  {
    id: "hammercode-backend",
    role: "Peserta Kelas Backend (Golang)",
    organization: "Hammercode",
    period: "2025",
    badge: "Community & Training",
    category: "Training",
    description: "Mengikuti program kelas intensif di komunitas Hammercode pada peminatan Backend, mendalami arsitektur backend modern dengan bahasa Go (Golang), perancangan REST API terstruktur, autentikasi stateless JWT, dan basis data relasional MySQL.",
    achievements: [
      "Merancang dan menyelesaikan submission akhir berupa RESTful API catatan & tagging (Go Notes API) menerapkan Clean Architecture",
      "Mengimplementasikan sistem keamanan otentikasi JWT, password hashing Bcrypt, serta routing modular Chi",
      "Mengikuti rangkaian sesi live learning, bimbingan teknis best practice software engineering, dan code review bersama mentor"
    ],
    tags: ["Golang", "Clean Architecture", "REST API", "JWT Auth", "MySQL", "Hammercode"],
    image: "/images/submissionbe.jpg",
    imageCaption: "Dokumentasi bersama peserta dan mentor kelas Backend Hammercode",
  },
  {
    id: "lead-lidm",
    role: "Ketua Tim Pelaksana (Team Leader) — Ordinary Squad",
    organization: "LIDM 2025 & Capstone Design FATEK",
    period: "2025",
    badge: "National Competition & Team Leadership",
    category: "Competition",
    description: "Memimpin tim Ordinary Squad dalam perancangan produk inovasi teknologi pendidikan 'SIFOKUS' (Sistem Fokus Siswa) berbasis IoT dan Computer Vision.",
    achievements: [
      "Mengoordinasikan perancangan proposal riset Divisi Inovasi Teknologi Digital Pendidikan (LIDM 2025 Balmawa)",
      "Mengintegrasikan prototipe ESP32-CAM dengan pemrosesan citra MediaPipe FaceMesh di Python",
      "Memimpin presentasi teknis dan demonstrasi purwarupa perangkat pada Lomba Capstone Design Dies Natalis FATEK Untad"
    ],
    tags: ["LIDM 2025", "Capstone Design FATEK Untad", "Team Leadership", "IoT & Vision", "Research Paper"],
    image: "/images/sifokus.jpg",
    imageCaption: "Tim Pelaksana SIFOKUS — Capstone Dies Natalis FATEK Untad",
  },
  {
    id: "peserta-pt-soyuz",
    role: "Peserta Web Development (Batch Soyuz)",
    organization: "Programming Tadulako",
    period: "2024",
    badge: "Community & Training",
    category: "Training",
    description: "Mengikuti program pelatihan web development dasar intensif di komunitas Programming Tadulako (Batch Soyuz) yang menjadi langkah awal mendalami rekayasa perangkat lunak dan pemrograman web modern.",
    achievements: [
      "Merancang dan menyelesaikan project submission web 'Kuliner Nusantara' menggunakan HTML5 semantik, CSS responsif, dan JavaScript murni",
      "Mempelajari dasar version control dengan Git dan mempublikasikan karya ke GitHub Pages",
      "Menjadi fondasi awal perjalanan sebelum dipercaya menjadi Mentor Front-End di Batch Orion dan mendalami Backend di Hammercode"
    ],
    tags: ["HTML5/CSS3", "JavaScript", "Git & GitHub", "GitHub Pages", "Programming Tadulako"],
    image: "/images/submissionsoyuz.jpg",
    imageCaption: "Dokumentasi bersama peserta dan mentor Programming Tadulako Batch Soyuz",
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
  { name: "React", category: "Frameworks & Web", role: "Frontend UI", icon: "icons/react.svg" },
  { name: "Next.js", category: "Frameworks & Web", role: "React Framework", icon: "icons/nextdotjs.svg" },
  { name: "Laravel", category: "Frameworks & Web", role: "Backend Framework", icon: "icons/laravel.svg" },
  { name: "Flutter", category: "Frameworks & Web", role: "Cross-Platform Mobile", icon: "icons/flutter.svg" },
  { name: "Tailwind CSS", category: "Frameworks & Web", role: "Styling Framework", icon: "icons/tailwindcss.svg" },
  { name: "Vite", category: "Frameworks & Web", role: "Frontend Tooling", icon: "icons/vite.svg" },
  { name: "Node.js", category: "Frameworks & Web", role: "JavaScript Runtime", icon: "icons/nodedotjs.svg" },

  // Languages
  { name: "Go (Golang)", category: "Languages", role: "Backend & Systems", icon: "icons/go.svg" },
  { name: "TypeScript", category: "Languages", role: "Type-Safe JS", icon: "icons/typescript.svg" },
  { name: "PHP 8+", category: "Languages", role: "Server Scripting", icon: "icons/php.svg" },
  { name: "Python 3", category: "Languages", role: "Vision & Scripting", icon: "icons/python.svg" },
  { name: "JavaScript", category: "Languages", role: "Web Scripting", icon: "icons/javascript.svg" },
  { name: "Dart", category: "Languages", role: "Flutter Language", icon: "icons/dart.svg" },

  // Geospatial & Spatial Data
  { name: "Leaflet.js", category: "Geospatial", role: "WebGIS Mapping", icon: "icons/leaflet.svg" },
  { name: "QGIS", category: "Geospatial", role: "Spatial Analysis", icon: "icons/qgis.svg" },

  // AI, Vision & Hardware
  { name: "Google Gemini", category: "AI & Hardware", role: "LLM & Multi-Agent", icon: "icons/googlegemini.svg" },
  { name: "MediaPipe", category: "AI & Hardware", role: "FaceMesh Tracking", icon: "icons/mediapipe.svg" },
  { name: "OpenCV", category: "AI & Hardware", role: "Computer Vision", icon: "icons/opencv.svg" },
  { name: "Arduino", category: "AI & Hardware", role: "Embedded IoT", icon: "icons/arduino.svg" },

  // Database, Cloud & Tools
  { name: "MySQL", category: "Database & Tools", role: "Relational Database", icon: "icons/mysql.svg" },
  { name: "Supabase", category: "Database & Tools", role: "Cloud Postgres BaaS", icon: "icons/supabase.svg" },
  { name: "Firebase", category: "Database & Tools", role: "Cloud Firestore & Auth", icon: "icons/firebase.svg" },
  { name: "SQLite", category: "Database & Tools", role: "Local Offline Cache", icon: "icons/sqlite.svg" },
  { name: "Git", category: "Database & Tools", role: "Version Control", icon: "icons/git.svg" },
  { name: "GitHub", category: "Database & Tools", role: "Code Repository", icon: "icons/github.svg" },
  { name: "Postman", category: "Database & Tools", role: "API Testing", icon: "icons/postman.svg" },
  { name: "VS Code", category: "Database & Tools", role: "Code Editor", icon: "icons/visualstudiocode.svg" },
];
