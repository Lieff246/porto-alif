"use client";

import {
  Globe,
  Server,
  Smartphone,
  Brain,
  Wrench,
  Code2,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface TechItem {
  name: string;
  role: string;
  icon: string;
}

interface TechDomain {
  id: string;
  title: string;
  eyebrow: string;
  icon: typeof Globe;
  description: string;
  tools: TechItem[];
}

const techDomains: TechDomain[] = [
  {
    id: "frontend",
    title: "Frontend & Web Architecture",
    eyebrow: "Antarmuka & Reaktivitas",
    icon: Globe,
    description: "Membangun antarmuka modern yang cepat, terstruktur kuat, dan mengedepankan pengalaman visual bersih.",
    tools: [
      { name: "Next.js", role: "React Framework", icon: "/icons/nextdotjs.svg" },
      { name: "React", role: "UI Library", icon: "/icons/react.svg" },
      { name: "TypeScript", role: "Type-Safe JavaScript", icon: "/icons/typescript.svg" },
      { name: "Tailwind CSS", role: "Utility Styling", icon: "/icons/tailwindcss.svg" },
      { name: "Vite", role: "Frontend Tooling", icon: "/icons/vite.svg" },
      { name: "JavaScript", role: "Modern ES6+ Core", icon: "/icons/javascript.svg" },
    ],
  },
  {
    id: "backend",
    title: "Backend Engineering & Data",
    eyebrow: "Arsitektur & Basis Data",
    icon: Server,
    description: "Perancangan REST API modular, arsitektur bersih, efisiensi konkurensi, dan basis data relasional.",
    tools: [
      { name: "Go (Golang)", role: "Backend & Systems", icon: "/icons/go.svg" },
      { name: "Laravel", role: "Backend Framework", icon: "/icons/laravel.svg" },
      { name: "PHP 8+", role: "Server Scripting", icon: "/icons/php.svg" },
      { name: "Node.js", role: "JavaScript Runtime", icon: "/icons/nodedotjs.svg" },
      { name: "MySQL", role: "Relational Database", icon: "/icons/mysql.svg" },
      { name: "Supabase", role: "Postgres BaaS", icon: "/icons/supabase.svg" },
    ],
  },
  {
    id: "mobile-geo",
    title: "Mobile App & WebGIS Spasial",
    eyebrow: "Lintas Platform & Pemetaan",
    icon: Smartphone,
    description: "Aplikasi mobile lintas platform dengan state reaktif serta pemetaan wilayah interaktif berbasis spasial.",
    tools: [
      { name: "Flutter", role: "Cross-Platform Mobile", icon: "/icons/flutter.svg" },
      { name: "Dart", role: "Flutter Core Language", icon: "/icons/dart.svg" },
      { name: "Leaflet.js", role: "WebGIS Mapping", icon: "/icons/leaflet.svg" },
      { name: "QGIS", role: "Spatial Analysis", icon: "/icons/qgis.svg" },
      { name: "Firebase", role: "Cloud Firestore & Auth", icon: "/icons/firebase.svg" },
      { name: "SQLite", role: "Local Offline Cache", icon: "/icons/sqlite.svg" },
    ],
  },
  {
    id: "ai-iot",
    title: "AI, Computer Vision & Hardware",
    eyebrow: "Kecerdasan Buatan & Terapan",
    icon: Brain,
    description: "Eksplorasi visi komputer untuk kalkulasi biometrik waktu nyata dan integrasi model LLM terapan.",
    tools: [
      { name: "Python 3", role: "Vision & Automation", icon: "/icons/python.svg" },
      { name: "MediaPipe", role: "FaceMesh & Biometrics", icon: "/icons/mediapipe.svg" },
      { name: "OpenCV", role: "Image Processing", icon: "/icons/opencv.svg" },
      { name: "Google Gemini", role: "LLM & Agent Logic", icon: "/icons/googlegemini.svg" },
      { name: "Arduino", role: "Embedded IoT Hardware", icon: "/icons/arduino.svg" },
    ],
  },
];

const workflowTools: TechItem[] = [
  { name: "Git", role: "Version Control", icon: "/icons/git.svg" },
  { name: "GitHub", role: "Collaboration & CI/CD", icon: "/icons/github.svg" },
  { name: "Postman", role: "API Testing & Docs", icon: "/icons/postman.svg" },
  { name: "VS Code", role: "Primary Code Editor", icon: "/icons/visualstudiocode.svg" },
];

export default function TechStack() {
  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section id="skills" className="py-20 sm:py-28 border-t border-zinc-200/90 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-200 pb-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-zinc-500 mb-1.5">
                <span>Stack &amp; Peralatan Kerja</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-950">
                Teknologi yang Biasa Saya Gunakan
              </h2>
              <p className="text-zinc-600 text-xs sm:text-sm mt-1.5 max-w-2xl leading-relaxed">
                Dikelompokkan berdasarkan domain keahlian rekayasa perangkat lunak yang aktif saya pelajari dan terapkan dalam berbagai proyek nyata.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-zinc-200/90 text-xs font-mono text-zinc-600 shadow-2xs self-start md:self-auto">
              <span>4 Domain Keahlian</span>
            </div>
          </div>
        </ScrollReveal>

        {/* 4 Domain Grouped Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {techDomains.map((domain, index) => {
            const IconComponent = domain.icon;

            return (
              <ScrollReveal key={domain.id} delay={index * 80}>
                <div
                  onMouseMove={handleCardMouseMove}
                  className="group relative h-full flex flex-col justify-between rounded-2xl bg-white border border-zinc-200/90 hover:border-zinc-400/90 p-6 sm:p-7 shadow-2xs hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  {/* Dynamic Local Spotlight */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"
                    style={{
                      background:
                        "radial-gradient(450px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(24, 24, 27, 0.04), transparent 70%)",
                    }}
                  />

                  {/* Domain Header */}
                  <div className="relative z-20">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="inline-flex items-center gap-2 text-[11px] font-mono text-zinc-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-900" />
                        <span>{domain.eyebrow}</span>
                      </div>
                      <div className="w-8 h-8 rounded-lg bg-zinc-100 border border-zinc-200/80 flex items-center justify-center shrink-0">
                        <IconComponent className="w-4 h-4 text-zinc-800" />
                      </div>
                    </div>

                    <h3 className="text-xl font-black text-zinc-950 tracking-tight">
                      {domain.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 mt-1.5 leading-relaxed">
                      {domain.description}
                    </p>
                  </div>

                  {/* Micro-Grid of Tools Inside Domain */}
                  <div className="relative z-20 mt-6 pt-5 border-t border-zinc-100 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {domain.tools.map((tool) => (
                      <div
                        key={tool.name}
                        className="flex items-center gap-3 p-2.5 rounded-xl bg-zinc-50/70 hover:bg-white border border-zinc-200/60 hover:border-zinc-300 hover:shadow-xs transition-all duration-200"
                      >
                        <div className="w-8 h-8 rounded-lg bg-white border border-zinc-200/80 flex items-center justify-center shrink-0 shadow-2xs">
                          {tool.icon ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={tool.icon}
                              alt={tool.name}
                              className="w-4 h-4 object-contain shrink-0"
                            />
                          ) : (
                            <Code2 className="w-4 h-4 text-zinc-400 shrink-0" />
                          )}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-xs font-bold text-zinc-950 tracking-tight leading-tight truncate">
                            {tool.name}
                          </div>
                          <div className="text-[10px] font-mono text-zinc-500 leading-tight mt-0.5 truncate">
                            {tool.role}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Workflow & Supporting Tools (Slim Horizontal Strip) */}
        <ScrollReveal delay={200}>
          <div className="mt-6 rounded-2xl bg-zinc-50/70 border border-zinc-200/80 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2.5 shrink-0">
              <div className="w-7 h-7 rounded-lg bg-white border border-zinc-200/80 flex items-center justify-center shrink-0">
                <Wrench className="w-3.5 h-3.5 text-zinc-700" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-zinc-950 tracking-tight">
                  Alat Kerja &amp; Kolaborasi
                </h4>
                <p className="text-[11px] font-mono text-zinc-500">
                  Lingkungan pengembangan harian untuk kontrol versi &amp; pengujian
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2">
              {workflowTools.map((tool) => (
                <div
                  key={tool.name}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-zinc-200/80 text-xs shadow-2xs hover:border-zinc-300 transition-colors"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    className="w-3.5 h-3.5 object-contain shrink-0"
                  />
                  <span className="font-bold text-zinc-900 text-xs">{tool.name}</span>
                  <span className="text-[10px] font-mono text-zinc-400 hidden md:inline">
                    · {tool.role}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
