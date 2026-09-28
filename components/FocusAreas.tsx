"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Globe,
  Server,
  Brain,
  Smartphone,
  ExternalLink,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
} from "lucide-react";
import { GithubIcon } from "./Icons";
import { TechIcon } from "./TechIcons";

interface RealProjectSpec {
  title: string;
  tagline: string;
  image: string;
  badge: string;
  metrics: string;
  role: string;
  period: string;
  liveUrl?: string | null;
  githubUrl?: string | null;
  projectAnchor: string;
}

interface DomainSpec {
  id: string;
  number: string;
  tabLabel: string;
  title: string;
  category: string;
  systemSummary: string;
  problemSolution: string;
  icon: typeof Globe;
  architecturalHighlights: {
    title: string;
    description: string;
  }[];
  techStack: {
    name: string;
    role: string;
  }[];
  realProject: RealProjectSpec;
}

const domains: DomainSpec[] = [
  {
    id: "webgis",
    number: "01",
    tabLabel: "WebGIS & Spasial",
    title: "Sistem Informasi Geospasial & Pemetaan Wilayah",
    category: "Geospatial Engineering",
    systemSummary:
      "Arsitektur decoupled modern yang memisahkan backend Laravel 11 sebagai RESTful spatial provider murni dari frontend React. Menangani visualisasi interaktif persebaran sekolah se-Sulawesi Tengah beserta 6 poligon batas cabang dinas secara mulus tanpa penurunan frame rate.",
    problemSolution:
      "Menggantikan pendataan manual yang tersebar menjadi sistem terpusat berbasis koordinat riil, mempermudah Dinas Pendidikan memetakan zonasi, sebaran akreditasi, dan kebutuhan sarana pendidikan provinsi.",
    icon: Globe,
    architecturalHighlights: [
      {
        title: "Arsitektur Decoupled (Headless API)",
        description:
          "Pemisahan backend REST API dan frontend React mandiri guna memastikan beban komputasi query spasial terisolasi.",
      },
      {
        title: "Rendering Poligon 6 Cabang Dinas",
        description:
          "Integrasi data GeoJSON batas wilayah cabang dinas se-Sulawesi Tengah dengan styling poligon dinamis.",
      },
      {
        title: "Marker Clustering & Filtering Spasial",
        description:
          "Pengelompokan otomatis ribuan titik koordinat sekolah (PAUD hingga SMA/SMK) dengan filter instan tanpa reload.",
      },
      {
        title: "Multi-Role Security & Proteksi Akses",
        description:
          "Manajemen hak akses bertingkat menggunakan Laravel Sanctum, Fortify, dan otorisasi Spatie Role/Permission.",
      },
    ],
    techStack: [
      { name: "React 19", role: "Spatial UI & State" },
      { name: "TypeScript", role: "Type-Safe GeoJSON" },
      { name: "Leaflet", role: "Interactive Map Engine" },
      { name: "Laravel 11", role: "Headless REST API" },
      { name: "GeoJSON", role: "Boundary Vectors" },
      { name: "MySQL", role: "Spatial Indexing" },
      { name: "Tailwind CSS", role: "Interface Styling" },
    ],
    realProject: {
      title: "Portal Pemetaan Sekolah Sulawesi Tengah",
      tagline: "WebGIS Pemetaan Sekolah PAUD-SMA/SMK Se-Provinsi Sulawesi Tengah",
      image: "/images/pemetaan.png",
      badge: "Produksi Nyata · Dinas Pendidikan Prov. Sulteng",
      metrics: "1,420+ Titik Sekolah · 6 Poligon Cabdis",
      role: "Fullstack Developer (Magang Dispen)",
      period: "2026",
      liveUrl: "https://pemetaan-disdik.sekolahkukeren.id/",
      githubUrl: "https://github.com/Lieff246/portal-disdik",
      projectAnchor: "#projects",
    },
  },
  {
    id: "backend",
    number: "02",
    tabLabel: "Backend & API Architecture",
    title: "Backend Engineering & Clean Architecture",
    category: "Distributed & Modular APIs",
    systemSummary:
      "Perancangan arsitektur backend berstandar industri dengan pemisahan lapisan tanggung jawab yang ketat (Clean Architecture). Menerapkan efisiensi konkurensi data pada Go, manajemen sesi stateless berbasis JWT, dan middleware multi-peran pada Laravel.",
    problemSolution:
      "Menghasilkan struktur basis kode yang mudah di-maintain, decoupled dari database driver luar, serta siap diuji (testable) dengan latensi respon sub-milidetik.",
    icon: Server,
    architecturalHighlights: [
      {
        title: "Pemisahan Lapisan Clean Architecture",
        description:
          "Modularisasi ketat antara Delivery (Handler/Controller), Usecase (Business Logic), dan Repository (Data Layer).",
      },
      {
        title: "Otentikasi Stateless Berkecepatan Tinggi",
        description:
          "Implementasi token JWT dan enkripsi password Bcrypt yang aman tanpa membebani penyimpanan sesi server.",
      },
      {
        title: "Efisiensi Konkurensi & Routing Ringan",
        description:
          "Pemanfaatan Chi Router dan rutinitas Go (Goroutine) untuk penanganan konkurensi request tinggi dengan jejak memori minimal.",
      },
      {
        title: "Normalisasi Skema & Keamanan Transaksi",
        description:
          "Integritas data relasional dengan cascading constraints, database migration terstruktur, dan validasi request ketat.",
      },
    ],
    techStack: [
      { name: "Go (Golang)", role: "Core Microservice Engine" },
      { name: "Chi Router", role: "Lightweight HTTP Router" },
      { name: "Laravel 11", role: "Modular Service Platform" },
      { name: "MySQL", role: "Relational Schema & Index" },
      { name: "JWT Auth", role: "Stateless Security" },
      { name: "Clean Architecture", role: "Design Pattern" },
      { name: "PHP 8+", role: "Backend Runtime" },
    ],
    realProject: {
      title: "Go Clean Architecture API & E-Waste Backend",
      tagline: "High-Performance RESTful Engine Berbasis Go 1.21 & Laravel 11",
      image: "/images/notesapp.png",
      badge: "Standar Industri · Testable Clean Architecture",
      metrics: "Sub-millisecond Latency · 6-Layer Separation",
      role: "Backend Developer",
      period: "2025 - 2026",
      liveUrl: null,
      githubUrl: "https://github.com/Lieff246/Submission_FE-BE",
      projectAnchor: "#projects",
    },
  },
  {
    id: "mobile",
    number: "03",
    tabLabel: "Mobile Development",
    title: "Mobile App Engineering & Reactive Cloud",
    category: "Cross-Platform Systems",
    systemSummary:
      "Pengembangan aplikasi mobile lintas platform berbasis Flutter & Dart 3.0. Mengedepankan arsitektur state management reaktif (GetX), integrasi sinkronisasi cloud real-time dengan Supabase & Firebase, serta persistensi cache lokal SQLite untuk penggunaan offline.",
    problemSolution:
      "Memberikan pengalaman pengguna yang konsisten di Android dan iOS dengan performa 60 FPS bebas jank, serta menjamin data pengguna tetap tersimpan saat kondisi jaringan seluler tidak stabil.",
    icon: Smartphone,
    architecturalHighlights: [
      {
        title: "State Management Reaktif (GetX)",
        description:
          "Manajemen alur data reaktif ultra-cepat dengan pemisahan Controller dan View yang hemat alokasi memori.",
      },
      {
        title: "Arsitektur Offline-First & Local Cache",
        description:
          "Persistensi data lokal menggunakan SQLite dan sinkronisasi otomatis dua arah ketika koneksi internet terhubung kembali.",
      },
      {
        title: "Sinkronisasi Realtime Cloud",
        description:
          "Integrasi database cloud Supabase/Firebase dengan stream realtime untuk notifikasi dan pembaruan data instan.",
      },
      {
        title: "Zero-Jank UI & Adaptasi Platform",
        description:
          "Komponen antarmuka modular yang mematuhi standar Material 3 dan Human Interface Guidelines dengan engine Flutter modern.",
      },
    ],
    techStack: [
      { name: "Flutter", role: "Cross-Platform Framework" },
      { name: "Dart", role: "Core Language" },
      { name: "GetX", role: "Reactive State & Routing" },
      { name: "Supabase", role: "Realtime Database & Auth" },
      { name: "Firebase", role: "Cloud Services & Storage" },
      { name: "SQLite", role: "Offline-First Persistence" },
    ],
    realProject: {
      title: "Mobile Client & Reactive App Architecture",
      tagline: "Aplikasi Mobile Flutter Lintas Platform dengan State Reaktif & Sinkronisasi Cloud",
      image: "/images/mobile-home.png",
      badge: "60 FPS · Android & iOS Ready",
      metrics: "Cross-Platform · Dual Persistence (Cloud & SQLite)",
      role: "Mobile Developer",
      period: "2025 - 2026",
      liveUrl: null,
      githubUrl: "https://github.com/Lieff246",
      projectAnchor: "#projects",
    },
  },
  {
    id: "ai-vision",
    number: "04",
    tabLabel: "AI & Computer Vision",
    title: "Computer Vision & Multi-Agent Intelligence",
    category: "Applied Vision & AI",
    systemSummary:
      "Penerapan teknologi visi komputer untuk kalkulasi biometrik waktu nyata menggunakan formulasi Eye Aspect Ratio (EAR) dan 468 titik landmark MediaPipe FaceMesh guna deteksi kelelahan, dipadukan dengan orkestrasi model AI (Google Gemini API) untuk sistem terapan.",
    problemSolution:
      "Mencegah kecelakaan berkendara dan penurunan konsentrasi belajar melalui pendeteksian gejala kantuk dan micro-sleep secara akurat pada level frame kamera lokal tanpa dependensi cloud latency.",
    icon: Brain,
    architecturalHighlights: [
      {
        title: "Formulasi Eye Aspect Ratio (EAR)",
        description:
          "Kalkulasi rasio jarak euclidean 6-titik mata per frame kamera guna menentukan ambang batas kantuk secara presisi matematis.",
      },
      {
        title: "Tracking 468-Titik 3D Facial Mesh",
        description:
          "Deteksi kontur wajah dan kedipan mata instan pada 60 FPS menggunakan MediaPipe FaceMesh dan OpenCV.",
      },
      {
        title: "Integrasi Mikrokontroler & Hardware IoT",
        description:
          "Penerapan modul ESP32-CAM dengan aktuator visual peringatan LED dan casing enclosure custom 3D Print.",
      },
      {
        title: "Orkestrasi Multi-Agent Google Gemini",
        description:
          "Pengembangan sistem cerdas dengan agent otonom (TaskLoadEstimator & StudyTimeRecommender) via Laravel AI SDK.",
      },
    ],
    techStack: [
      { name: "Python", role: "Computer Vision Pipeline" },
      { name: "OpenCV", role: "Image Processing & Stream" },
      { name: "MediaPipe FaceMesh", role: "468-Point Facial Tracking" },
      { name: "Google Gemini API", role: "Multi-Agent Intelligence" },
      { name: "Multi-Agent", role: "Autonomous System" },
      { name: "Laravel AI", role: "Agent SDK Integration" },
    ],
    realProject: {
      title: "SIFOKUS — Sensor Fokus & Deteksi Kantuk Siswa",
      tagline: "Inovasi IoT & Computer Vision Deteksi Kantuk LIDM 2025 Balmawa & Capstone FATEK",
      image: "/images/sifokus-device.png",
      badge: "Ketua Tim LIDM 2025 Puspresnas · Capstone FATEK Untad",
      metrics: "6-Point Euclidean EAR Algorithm · 468 FaceMesh Points",
      role: "Ketua Tim Pelaksana (Ordinary Squad)",
      period: "2025",
      liveUrl: null,
      githubUrl: "https://github.com/Lieff246/SmartStudy",
      projectAnchor: "#projects",
    },
  },
];

export default function FocusAreas() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const currentDomain = domains[activeTab];

  return (
    <section id="focus" className="py-16 sm:py-24 border-t border-zinc-200/80 bg-zinc-50/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header: Stripe/GitHub Clean Developer Aesthetic */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 mb-8 border-b border-zinc-200">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-zinc-600 font-bold uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>CORE ARCHITECTURAL DOMAINS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-zinc-950">
              Fokus &amp; Spesialisasi Rekayasa
            </h2>
            <p className="text-zinc-600 text-xs sm:text-sm mt-1.5 max-w-2xl leading-relaxed">
              Arsitektur sistem, pendekatan rekayasa perangkat lunak, dan bukti implementasi nyata pada proyek produksi.
            </p>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-zinc-200/90 text-xs font-mono text-zinc-600 shadow-2xs self-start md:self-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>4 Specialized Disciplines</span>
          </div>
        </div>

        {/* Tab Bar: Horizontal Swipeable Pill Buttons on Mobile, Clean Responsive Grid on Desktop */}
        <div className="relative mb-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-4 sm:overflow-visible scrollbar-none">
            {domains.map((domain, idx) => {
              const Icon = domain.icon;
              const isActive = activeTab === idx;

              return (
                <button
                  key={domain.id}
                  onClick={() => setActiveTab(idx)}
                  className={`shrink-0 whitespace-nowrap sm:whitespace-normal sm:shrink flex items-center justify-center sm:justify-start gap-2.5 px-4 py-2.5 sm:p-3.5 rounded-full sm:rounded-xl border font-mono text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-zinc-950 text-white border-zinc-950 shadow-xs"
                      : "bg-white text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100/80 border-zinc-200/90"
                  }`}
                  aria-selected={isActive}
                  role="tab"
                >
                  <Icon
                    className={`w-3.5 h-3.5 shrink-0 ${
                      isActive ? "text-emerald-400" : "text-zinc-500"
                    }`}
                  />
                  <span className="truncate">{domain.tabLabel}</span>
                  <span
                    className={`hidden sm:inline-block ml-auto text-[10px] font-mono px-1.5 py-0.5 rounded ${
                      isActive ? "bg-zinc-800 text-zinc-300" : "bg-zinc-100 text-zinc-500"
                    }`}
                  >
                    0{idx + 1}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Preview Surface: Clean, Professional White Container (Stripe/GitHub Style) */}
        <div
          key={activeTab}
          className="bg-white border border-zinc-200/90 rounded-2xl p-5 sm:p-8 lg:p-10 shadow-xs animate-fade-in"
        >
          {/* Top Metadata Strip */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-6 sm:mb-8 border-b border-zinc-100">
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-zinc-100 text-zinc-900 border border-zinc-200/70">
                DOMAIN 0{activeTab + 1} / 04
              </span>
              <span className="text-xs font-mono font-semibold text-zinc-500">
                {currentDomain.category}
              </span>
            </div>

            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-1 rounded-full font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>{currentDomain.realProject.badge}</span>
            </div>
          </div>

          {/* 2-Column Responsive Layout: System Overview on Left, Real Implementation Card on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* LEFT COLUMN: System Overview & Architecture Dossier (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Title & System Summary */}
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-zinc-950 tracking-tight leading-tight">
                  {currentDomain.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 mt-3 leading-relaxed">
                  {currentDomain.systemSummary}
                </p>
              </div>

              {/* Problem Solved & Production Rationale */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-zinc-50 border border-zinc-200/70">
                <p className="text-[11px] font-mono uppercase font-bold text-zinc-500 tracking-wider mb-1 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-zinc-700" />
                  <span>Problem Solved &amp; Rationale:</span>
                </p>
                <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                  {currentDomain.problemSolution}
                </p>
              </div>

              {/* Key Architectural Highlights */}
              <div className="space-y-3 pt-2">
                <p className="text-xs font-mono uppercase font-bold text-zinc-950 tracking-wider flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-zinc-800" />
                  <span>Karakteristik &amp; Pondasi Arsitektur:</span>
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentDomain.architecturalHighlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl border border-zinc-150 bg-white hover:border-zinc-300 transition-colors shadow-2xs"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <h4 className="text-xs font-bold text-zinc-900 line-clamp-1">
                          {highlight.title}
                        </h4>
                      </div>
                      <p className="text-[11px] sm:text-xs text-zinc-500 leading-relaxed pl-5.5">
                        {highlight.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Technologies Matrix */}
              <div className="pt-2">
                <p className="text-xs font-mono uppercase font-bold text-zinc-950 tracking-wider mb-2.5 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-zinc-800" />
                  <span>Tech Stack Terverifikasi:</span>
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {currentDomain.techStack.map((tech) => (
                    <div
                      key={tech.name}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-50 text-zinc-800 border border-zinc-200 text-xs font-mono font-medium hover:bg-zinc-100 transition-colors"
                    >
                      <TechIcon name={tech.name} className="w-3.5 h-3.5 shrink-0" />
                      <span className="font-semibold text-zinc-900">{tech.name}</span>
                      <span className="text-[10px] text-zinc-400 font-sans border-l border-zinc-200 pl-1.5">
                        {tech.role}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Real Project Verification & Action Card (5 cols) */}
            <div className="lg:col-span-5 bg-zinc-50/80 border border-zinc-200/90 rounded-2xl p-5 sm:p-6 flex flex-col justify-between space-y-5">
              <div>
                {/* Header Label */}
                <div className="flex items-center justify-between text-xs font-mono mb-3">
                  <span className="text-zinc-500 font-semibold uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Implementasi Proyek Riil</span>
                  </span>
                  <span className="text-zinc-400">{currentDomain.realProject.period}</span>
                </div>

                {/* Real Project Image with Crisp Frame */}
                <div className="relative rounded-xl overflow-hidden border border-zinc-200 bg-zinc-100 mb-4 group shadow-2xs">
                  <Image
                    src={currentDomain.realProject.image}
                    alt={currentDomain.realProject.title}
                    width={600}
                    height={340}
                    className="w-full h-44 sm:h-48 object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-zinc-950/80 text-white backdrop-blur-md border border-white/10">
                      {currentDomain.realProject.role}
                    </span>
                  </div>
                </div>

                {/* Real Project Title & Metrics */}
                <h4 className="text-base sm:text-lg font-bold text-zinc-950 tracking-tight leading-snug">
                  {currentDomain.realProject.title}
                </h4>
                <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
                  {currentDomain.realProject.tagline}
                </p>

                {/* Concrete Production Metrics */}
                <div className="mt-3.5 p-3 rounded-lg bg-white border border-zinc-200/80 text-xs font-mono">
                  <p className="text-[10px] text-zinc-400 uppercase font-semibold">Skala &amp; Metrik:</p>
                  <p className="text-xs font-bold text-zinc-900 mt-0.5">
                    {currentDomain.realProject.metrics}
                  </p>
                </div>
              </div>

              {/* Direct Action Links (Clean GitHub & Live Demo) */}
              <div className="space-y-2 pt-2 border-t border-zinc-200/70">
                <div className="flex items-center gap-2">
                  {currentDomain.realProject.liveUrl && (
                    <a
                      href={currentDomain.realProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-semibold font-mono transition-colors shadow-xs"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>Live Production</span>
                      <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                    </a>
                  )}

                  {currentDomain.realProject.githubUrl && (
                    <a
                      href={currentDomain.realProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-white hover:bg-zinc-100 text-zinc-800 border border-zinc-200 text-xs font-semibold font-mono transition-colors shadow-2xs ${
                        !currentDomain.realProject.liveUrl ? "flex-1" : ""
                      }`}
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Repository</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                </div>

                <a
                  href={currentDomain.realProject.projectAnchor}
                  className="w-full inline-flex items-center justify-center gap-1 py-1.5 text-[11px] font-mono text-zinc-500 hover:text-zinc-950 transition-colors"
                >
                  <span>Lihat Detail Lengkap di Galeri Proyek</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
