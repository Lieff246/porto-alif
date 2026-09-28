"use client";

import { useState } from "react";
import { projects } from "@/data/portfolio";
import { Project } from "@/types/portfolio";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { TechIcon } from "./TechIcons";
import {
  Globe,
  Server,
  Smartphone,
  Brain,
  Layers,
  Gamepad2,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  Sparkles,
} from "lucide-react";

interface DomainSpec {
  id: string;
  name: string;
  tabLabel: string;
  icon: typeof Globe;
  categoryBadge: string;
  architectureTitle: string;
  architectureSummary: string;
  problemRationale: string;
  highlights: string[];
  techStack: { name: string; role: string }[];
  filterFn: (p: Project) => boolean;
}

const domains: DomainSpec[] = [
  {
    id: "all",
    name: "Semua Karya",
    tabLabel: "Semua",
    icon: Layers,
    categoryBadge: "Koleksi Lengkap (Web, Backend, Mobile, AI, Game)",
    architectureTitle: "Koleksi Rekayasa Sistem, Aplikasi & Simulasi",
    architectureSummary:
      "Kompilasi proyek terverifikasi yang mencakup aplikasi Web modern, backend modular performa tinggi, aplikasi Mobile lintas platform, kecerdasan buatan (AI), serta simulasi 3D dan game interaktif.",
    problemRationale:
      "Setiap karya dirancang dengan pendekatan arsitektur teruji, memecahkan masalah riil di pemerintahan, kampus, hingga kompetisi riset nasional.",
    highlights: [
      "Web: Arsitektur Decoupled & visualisasi spasial skala provinsi",
      "Backend: Clean Architecture Go & Laravel service dengan konkurensi efisien",
      "Mobile: Flutter reaktif dengan sinkronisasi cloud Supabase & offline SQLite",
      "AI: Kalkulasi biometrik visi komputer real-time & orkestrasi Gemini Multi-Agent",
      "Game: Simulasi 3D interaktif mitigasi bencana gempa bumi LIDM Puspresnas",
    ],
    techStack: [
      { name: "React 19", role: "Web UI" },
      { name: "Laravel 11", role: "Backend Framework" },
      { name: "Go (Golang)", role: "High-Perf API" },
      { name: "Flutter", role: "Mobile App" },
      { name: "Python", role: "Computer Vision" },
      { name: "Google Gemini API", role: "AI Multi-Agent" },
    ],
    filterFn: () => true,
  },
  {
    id: "web",
    name: "Web Development",
    tabLabel: "Web",
    icon: Globe,
    categoryBadge: "Kategori: Web & WebGIS",
    architectureTitle: "Platform Web Modern & Sistem Informasi Geospasial",
    architectureSummary:
      "Pengembangan aplikasi web decoupled dan platform pemetaan spasial skala provinsi. Memisahkan REST API backend murni dari antarmuka React + Leaflet guna menangani ribuan koordinat dan poligon wilayah tanpa lagging.",
    problemRationale:
      "Menggantikan pendataan manual yang terfragmentasi menjadi satu portal terpusat berbasis peta koordinat riil, memudahkan publik dan dinas mengakses informasi secara interaktif.",
    highlights: [
      "Arsitektur Headless REST API dengan filter multi-parameter instan",
      "Visualisasi interaktif 6 Poligon Cabang Dinas Se-Sulawesi Tengah",
      "Marker Clustering pintar untuk ribuan koordinat sekolah",
      "Sistem multi-peran (Masyarakat, Mitra, Admin) dengan proteksi middleware",
    ],
    techStack: [
      { name: "React 19", role: "Spatial Frontend" },
      { name: "TypeScript", role: "Type-Safe GeoJSON" },
      { name: "Leaflet", role: "Interactive Map" },
      { name: "Laravel 11", role: "RESTful Service" },
      { name: "GeoJSON", role: "Polygon Vectors" },
      { name: "Tailwind CSS", role: "Design System" },
      { name: "MySQL", role: "Spatial Indexing" },
    ],
    filterFn: (p) =>
      (p.category === "Web" || p.category.includes("Web") || p.id === "smartstudy-ai") &&
      p.id !== "safe-game-lidm",
  },
  {
    id: "backend",
    name: "Backend Engineering",
    tabLabel: "Backend",
    icon: Server,
    categoryBadge: "Kategori: Backend & API",
    architectureTitle: "Clean Architecture & High-Performance RESTful APIs",
    architectureSummary:
      "Perancangan backend berstandar industri dengan pemisahan lapisan tanggung jawab ketat (Clean Architecture). Menerapkan efisiensi konkurensi goroutine pada Go, autentikasi stateless JWT, dan optimasi skema basis data relasional.",
    problemRationale:
      "Menghasilkan basis kode modular yang mudah di-maintain, decoupled dari database driver luar, siap diuji (testable), serta memiliki latensi respon sub-milidetik.",
    highlights: [
      "Pemisahan lapisan modular (Handler, Service, Repository)",
      "Otentikasi stateless aman via JWT & Laravel Fortify",
      "Konkurensi Go routine & routing ringan Chi Router",
      "Desain skema basis data relasional dengan indeks performa tinggi",
    ],
    techStack: [
      { name: "Go (Golang)", role: "Core Microservice Engine" },
      { name: "Chi Router", role: "Lightweight Router" },
      { name: "Laravel 11", role: "Modular Service Platform" },
      { name: "MySQL", role: "Relational Database" },
      { name: "JWT Auth", role: "Stateless Security" },
      { name: "Clean Architecture", role: "Design Pattern" },
      { name: "PHP 8+", role: "Backend Runtime" },
    ],
    filterFn: (p) =>
      p.category === "Backend" ||
      p.id === "go-notes-api" ||
      p.id === "ewastehub",
  },
  {
    id: "mobile",
    name: "Mobile App Development",
    tabLabel: "Mobile",
    icon: Smartphone,
    categoryBadge: "Kategori: Mobile Apps",
    architectureTitle: "Aplikasi Mobile Lintas Platform Flutter & Reactive Cloud",
    architectureSummary:
      "Pengembangan aplikasi mobile modern berbasis Flutter & Dart 3.0. Mengedepankan arsitektur state management reaktif (GetX), sinkronisasi cloud real-time (Supabase/Firebase), serta arsitektur offline-first dengan persistensi lokal SQLite.",
    problemRationale:
      "Menghadirkan antarmuka responsif 60 FPS bebas jank di Android dan iOS, sekaligus menjamin integritas data pengguna tetap tersimpan meski berada di jaringan nir-koneksi.",
    highlights: [
      "State management reaktif ultra-cepat dengan GetX Controller",
      "Arsitektur offline-first via SQLite local storage",
      "Sinkronisasi database realtime Supabase & Firebase Firestore",
      "Desain antarmuka modular Material 3 & dark mode modern",
    ],
    techStack: [
      { name: "Flutter", role: "Cross-Platform Framework" },
      { name: "Dart", role: "Core Language" },
      { name: "GetX", role: "Reactive State & Routing" },
      { name: "Supabase", role: "Realtime Database & Auth" },
      { name: "Firebase", role: "Cloud Services" },
      { name: "SQLite", role: "Offline Local Cache" },
    ],
    filterFn: (p) =>
      p.category === "Mobile" ||
      p.id === "moviex-flutter" ||
      p.id === "distroku-ecommerce",
  },
  {
    id: "ai",
    name: "AI & Computer Vision",
    tabLabel: "AI",
    icon: Brain,
    categoryBadge: "Kategori: Artificial Intelligence & Vision",
    architectureTitle: "Computer Vision Biometrik & Multi-Agent Intelligence",
    architectureSummary:
      "Implementasi visi komputer untuk kalkulasi biometrik waktu nyata menggunakan formulasi matematis Eye Aspect Ratio (EAR) dan 468 titik landmark MediaPipe FaceMesh guna deteksi kantuk, dipadukan orkestrasi 3 Multi-Agent Google Gemini.",
    problemRationale:
      "Mencegah kecelakaan dan kelelahan belajar melalui deteksi micro-sleep seketika pada level komputasi lokal tanpa dependensi latensi cloud, serta otomasi produktivitas via LLM.",
    highlights: [
      "Kalkulasi deterministik Eye Aspect Ratio (EAR) 6-titik euclidean",
      "Tracking 468-point 3D Facial Mesh via MediaPipe FaceMesh",
      "Integrasi mikrokontroler ESP32-CAM & casing enclosure 3D print",
      "Orkestrasi Multi-Agent via Google Gemini API & Laravel AI SDK",
    ],
    techStack: [
      { name: "Python", role: "Computer Vision Pipeline" },
      { name: "OpenCV", role: "Stream Processing" },
      { name: "MediaPipe FaceMesh", role: "468-Point Facial Tracking" },
      { name: "Google Gemini API", role: "Multi-Agent AI" },
      { name: "Multi-Agent", role: "Autonomous System" },
      { name: "ESP32-CAM", role: "Hardware Module" },
    ],
    filterFn: (p) =>
      p.category === "AI" ||
      p.id === "sifokus-iot" ||
      p.id === "smartstudy-ai",
  },
  {
    id: "game",
    name: "Game & 3D Simulation",
    tabLabel: "Game",
    icon: Gamepad2,
    categoryBadge: "Kategori: Game & 3D Simulation",
    architectureTitle: "Game-Based Learning & 3D Disaster Simulation",
    architectureSummary:
      "Pengembangan game simulasi 3D edukatif berbasis Roblox Studio dan Luau scripting. Menerapkan model pembelajaran ADDIE dan MDA Framework (Mechanic, Dynamic, Aesthetic) untuk simulasi mitigasi bencana gempa bumi berstandar BPBD dengan kapabilitas multiplayer.",
    problemRationale:
      "Meningkatkan kesiapsiagaan dan refleks spasial siswa dalam menghadapi bencana gempa bumi melalui media simulasi interaktif yang aman, menyenangkan, dan dapat dimainkan bersama secara kolaboratif.",
    highlights: [
      "Simulasi 3D imersif berbasis Roblox Studio & Luau scripting multiplatform",
      "Penerapan Game-Based Learning (GBL) 3 stage: Tas Siaga, Drop-Cover-Hold On, dan Evakuasi",
      "Fitur kolaboratif multiplayer menuju Assembly Area aman",
      "Integrasi Teacher Dashboard berbasis Roblox DataStore API untuk analitik belajar",
    ],
    techStack: [
      { name: "Roblox Studio", role: "3D Game Engine" },
      { name: "Luau", role: "Scripting Language" },
      { name: "3D Simulation", role: "Physics & Environment" },
      { name: "DataStore API", role: "Cloud Session & Analytics" },
      { name: "Multiplayer", role: "Network Replication" },
    ],
    filterFn: (p) => p.category === "Game" || p.id === "safe-game-lidm",
  },
];

export default function ProjectsSection() {
  const [activeDomainId, setActiveDomainId] = useState<string>("all");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const activeDomain = domains.find((d) => d.id === activeDomainId) || domains[0];
  const filteredProjects = projects.filter(activeDomain.filterFn);

  const getDomainCount = (domain: DomainSpec) => {
    return projects.filter(domain.filterFn).length;
  };

  return (
    <section id="projects" className="py-20 sm:py-28 border-t border-zinc-200/90 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header: Stripe/GitHub Clean Developer Aesthetic */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-200 pb-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest mb-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>[02] // SELECTED_WORKS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-950">
              Project &amp; Karya Unggulan
            </h2>
            <p className="text-zinc-600 text-xs sm:text-sm mt-1.5 max-w-2xl leading-relaxed">
              Eksplorasi portofolio berdasarkan kategori spesialisasi: Web, Backend, Mobile, AI, dan Game.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-zinc-200/90 text-xs font-mono text-zinc-600 shadow-2xs self-start md:self-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>{projects.length} Total Karya</span>
          </div>
        </div>

        {/* Category Navigation Pills: Clear [Semua] [Web] [Backend] [Mobile] [AI] [Game] */}
        <div className="relative mb-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:overflow-visible scrollbar-none">
            {domains.map((domain) => {
              const Icon = domain.icon;
              const isActive = activeDomainId === domain.id;
              const count = getDomainCount(domain);

              return (
                <button
                  key={domain.id}
                  onClick={() => setActiveDomainId(domain.id)}
                  className={`shrink-0 whitespace-nowrap flex items-center gap-2 px-4 py-2 sm:px-4 sm:py-2.5 rounded-full border font-mono text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-zinc-950 text-white border-zinc-950 shadow-xs scale-102"
                      : "bg-white text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100/80 border-zinc-200/90"
                  }`}
                  aria-selected={isActive}
                  role="tab"
                >
                  <Icon
                    className={`w-3.5 h-3.5 shrink-0 ${
                      isActive ? "text-emerald-400" : "text-zinc-400"
                    }`}
                  />
                  <span>{domain.tabLabel}</span>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                      isActive ? "bg-zinc-800 text-zinc-200" : "bg-zinc-100 text-zinc-500"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Architecture & Methodology Dossier for Active Category */}
        <div
          key={activeDomainId}
          className="bg-white border border-zinc-200/90 rounded-2xl p-5 sm:p-7 shadow-xs mb-10 animate-fade-in"
        >
          {/* Dossier Header Strip */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-zinc-100">
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-zinc-100 text-zinc-900 border border-zinc-200/70">
                ARSITEKTUR &amp; METODOLOGI
              </span>
              <span className="text-xs font-mono font-semibold text-zinc-500">
                {activeDomain.categoryBadge}
              </span>
            </div>

            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-1 rounded-full font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Pola Sistem Terverifikasi</span>
            </div>
          </div>

          {/* 2-Column Architectural Dossier */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* Left: System Summary & Problem Rationale (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div>
                <h3 className="text-lg sm:text-xl font-black text-zinc-950 tracking-tight">
                  {activeDomain.architectureTitle}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 mt-2 leading-relaxed">
                  {activeDomain.architectureSummary}
                </p>
              </div>

              <div className="p-3 sm:p-3.5 rounded-xl bg-zinc-50 border border-zinc-200/70">
                <p className="text-[11px] font-mono uppercase font-bold text-zinc-500 tracking-wider mb-1 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-zinc-700" />
                  <span>Problem Solved &amp; Rationale:</span>
                </p>
                <p className="text-xs text-zinc-700 leading-relaxed">
                  {activeDomain.problemRationale}
                </p>
              </div>

              {/* Highlights */}
              <div className="pt-1">
                <p className="text-[11px] font-mono uppercase font-bold text-zinc-950 tracking-wider mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Pondasi &amp; Karakteristik Kunci:</span>
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeDomain.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-xs text-zinc-700 p-2 rounded-lg bg-zinc-50/60 border border-zinc-150"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-snug text-[11px] sm:text-xs">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Core Tech Stack with Icons (5 cols) */}
            <div className="lg:col-span-5 bg-zinc-50/80 border border-zinc-200/80 rounded-xl p-4 sm:p-5 flex flex-col justify-between space-y-4">
              <div>
                <p className="text-xs font-mono uppercase font-bold text-zinc-950 tracking-wider mb-3 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-zinc-800" />
                  <span>Tech Stack Terverifikasi:</span>
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {activeDomain.techStack.map((tech) => (
                    <div
                      key={tech.name}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white text-zinc-800 border border-zinc-200 text-xs font-mono font-medium hover:border-zinc-300 transition-colors shadow-2xs"
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

              <div className="pt-3 border-t border-zinc-200/80 text-[11px] font-mono text-zinc-500 flex items-center justify-between">
                <span>Daftar Karya Kategori Ini:</span>
                <span className="font-bold text-zinc-800">
                  {filteredProjects.length} Proyek
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section Subtitle for Project Cards */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-sm font-mono font-bold text-zinc-900 uppercase tracking-wider flex items-center gap-2">
            <span>Daftar Proyek [{activeDomain.tabLabel}]</span>
            <span className="text-xs font-normal text-zinc-400">
              ({filteredProjects.length} proyek)
            </span>
          </h3>
          <span className="text-xs font-mono text-zinc-500 hidden sm:inline">
            Klik kartu untuk membaca dokumentasi &amp; detail teknis
          </span>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              featured={activeDomainId === "all" && (index === 0 || index === 1)}
              onOpenModal={setActiveModalProject}
            />
          ))}
        </div>

        {/* Modal Case Study */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      </div>
    </section>
  );
}
