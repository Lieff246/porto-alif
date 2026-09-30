"use client";

import { useState } from "react";
import { techTools } from "@/data/portfolio";
import {
  Code2,
  Globe,
  Server,
  Smartphone,
  Brain,
  Layers,
  Database,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

type CategoryId = "all" | "web" | "backend" | "mobile" | "ai" | "tools";

interface CategoryMeta {
  id: CategoryId;
  label: string;
  icon: typeof Globe;
  description: string;
  activeBtnClass: string;
  dotClass: string;
  activeCardBorder: string;
  activeCardBg: string;
  topBarClass: string;
  spotlightRgba: string;
}

const categoryMetaMap: Record<CategoryId, CategoryMeta> = {
  all: {
    id: "all",
    label: "Semua",
    icon: Layers,
    description: "Koleksi teknologi yang aktif saya gunakan untuk membangun software",
    activeBtnClass: "bg-zinc-950 text-white shadow-xs",
    dotClass: "bg-zinc-400",
    activeCardBorder: "border-zinc-300",
    activeCardBg: "bg-white",
    topBarClass: "border-t-zinc-900",
    spotlightRgba: "rgba(24, 24, 27, 0.08)",
  },
  web: {
    id: "web",
    label: "Web",
    icon: Globe,
    description: "Fokus antarmuka web, dashboard interaktif, & WebGIS",
    activeBtnClass: "bg-blue-600 text-white shadow-xs shadow-blue-500/20",
    dotClass: "bg-blue-500",
    activeCardBorder: "border-blue-400/90 ring-1 ring-blue-500/20",
    activeCardBg: "bg-blue-50/30",
    topBarClass: "border-t-blue-500",
    spotlightRgba: "rgba(37, 99, 235, 0.14)",
  },
  backend: {
    id: "backend",
    label: "Backend",
    icon: Server,
    description: "Rancang REST API, arsitektur backend, & basis data",
    activeBtnClass: "bg-violet-600 text-white shadow-xs shadow-violet-500/20",
    dotClass: "bg-violet-500",
    activeCardBorder: "border-violet-400/90 ring-1 ring-violet-500/20",
    activeCardBg: "bg-violet-50/30",
    topBarClass: "border-t-violet-500",
    spotlightRgba: "rgba(124, 58, 237, 0.14)",
  },
  mobile: {
    id: "mobile",
    label: "Mobile",
    icon: Smartphone,
    description: "Aplikasi mobile lintas platform dengan Flutter & GetX",
    activeBtnClass: "bg-amber-600 text-white shadow-xs shadow-amber-500/20",
    dotClass: "bg-amber-500",
    activeCardBorder: "border-amber-400/90 ring-1 ring-amber-500/20",
    activeCardBg: "bg-amber-50/30",
    topBarClass: "border-t-amber-500",
    spotlightRgba: "rgba(217, 119, 6, 0.14)",
  },
  ai: {
    id: "ai",
    label: "AI",
    icon: Brain,
    description: "Eksplorasi Computer Vision, model Gemini AI, & IoT",
    activeBtnClass: "bg-rose-600 text-white shadow-xs shadow-rose-500/20",
    dotClass: "bg-rose-500",
    activeCardBorder: "border-rose-400/90 ring-1 ring-rose-500/20",
    activeCardBg: "bg-rose-50/30",
    topBarClass: "border-t-rose-500",
    spotlightRgba: "rgba(225, 29, 72, 0.14)",
  },
  tools: {
    id: "tools",
    label: "Tools & DB",
    icon: Database,
    description: "Git, cloud database, BaaS, & pengujian API",
    activeBtnClass: "bg-teal-600 text-white shadow-xs shadow-teal-500/20",
    dotClass: "bg-teal-500",
    activeCardBorder: "border-teal-400/90 ring-1 ring-teal-500/20",
    activeCardBg: "bg-teal-50/30",
    topBarClass: "border-t-teal-500",
    spotlightRgba: "rgba(13, 148, 136, 0.14)",
  },
};

const categoryTabs: CategoryId[] = ["all", "web", "backend", "mobile", "ai", "tools"];

const toolCategoryMap: Record<string, { primary: CategoryId; all: CategoryId[] }> = {
  // Web
  React: { primary: "web", all: ["web"] },
  "Next.js": { primary: "web", all: ["web"] },
  Laravel: { primary: "backend", all: ["backend", "web"] },
  Flutter: { primary: "mobile", all: ["mobile"] },
  "Tailwind CSS": { primary: "web", all: ["web"] },
  Vite: { primary: "web", all: ["web"] },
  "Node.js": { primary: "backend", all: ["backend", "web"] },

  // Languages
  "Go (Golang)": { primary: "backend", all: ["backend"] },
  TypeScript: { primary: "web", all: ["web", "backend"] },
  "PHP 8+": { primary: "backend", all: ["backend", "web"] },
  "Python 3": { primary: "ai", all: ["ai", "backend"] },
  JavaScript: { primary: "web", all: ["web"] },
  Dart: { primary: "mobile", all: ["mobile"] },
  SQL: { primary: "backend", all: ["backend", "tools"] },

  // Geospatial
  "Leaflet.js": { primary: "web", all: ["web"] },
  QGIS: { primary: "web", all: ["web", "tools"] },

  // AI
  "Google Gemini": { primary: "ai", all: ["ai", "tools", "web"] },
  MediaPipe: { primary: "ai", all: ["ai"] },
  OpenCV: { primary: "ai", all: ["ai"] },
  Arduino: { primary: "ai", all: ["ai"] },

  // Database & Tools
  MySQL: { primary: "tools", all: ["tools", "backend", "web"] },
  Supabase: { primary: "tools", all: ["tools", "backend", "web", "mobile"] },
  Firebase: { primary: "tools", all: ["tools", "mobile"] },
  SQLite: { primary: "tools", all: ["tools", "mobile"] },
  Git: { primary: "tools", all: ["tools"] },
  GitHub: { primary: "tools", all: ["tools"] },
  Postman: { primary: "tools", all: ["tools", "backend"] },

  // All Role
  "VS Code": { primary: "tools", all: ["tools", "mobile", "ai", "backend", "web"] },
};

export default function TechStack() {
  const [activeCategoryId, setActiveCategoryId] = useState<CategoryId>("all");

  const activeMeta = categoryMetaMap[activeCategoryId];

  const matchingCount =
    activeCategoryId === "all"
      ? techTools.length
      : techTools.filter((t) => {
          const map = toolCategoryMap[t.name];
          return map ? map.all.includes(activeCategoryId) : false;
        }).length;

  return (
    <section id="skills" className="py-20 sm:py-28 border-t border-zinc-200/90 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-200 pb-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest mb-1.5">
                <span>STACK &amp; ALAT KERJA</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-950">
                Teknologi yang Biasa Saya Gunakan
              </h2>
              <p className="text-zinc-600 text-xs sm:text-sm mt-1.5 max-w-2xl leading-relaxed">
                Kumpulan bahasa pemrograman, framework, dan tools yang saya gunakan sehari-hari untuk merancang aplikasi dari web, backend, mobile, hingga AI.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-zinc-200/90 text-xs font-mono text-zinc-600 shadow-2xs self-start md:self-auto">
              <span>{techTools.length} Pilihan Stack</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Single Unified Container */}
        <ScrollReveal delay={50}>
          <div className="rounded-2xl sm:rounded-3xl bg-white border border-zinc-200/90 p-4 sm:p-6 lg:p-8 shadow-2xs space-y-5 sm:space-y-6">
            
            {/* Top Bar: Clean Category Tabs (Matching Projects Section with Color Identity) */}
            <div className="flex flex-col gap-3 pb-4 sm:pb-5 border-b border-zinc-100">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 w-full sm:w-auto">
                  <span className="text-[11px] font-mono font-bold text-zinc-400 uppercase tracking-wider mr-1 hidden md:inline shrink-0">
                    Kategori:
                  </span>

                  {categoryTabs.map((catId) => {
                    const meta = categoryMetaMap[catId];
                    const IconComponent = meta.icon;
                    const isActive = activeCategoryId === catId;

                    return (
                      <button
                        key={catId}
                        onClick={() => setActiveCategoryId(catId)}
                        className={`shrink-0 inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs px-3 sm:px-3.5 py-1.5 rounded-full font-mono font-semibold transition-all cursor-pointer select-none active:scale-95 ${
                          isActive
                            ? meta.activeBtnClass
                            : "bg-zinc-100 text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200/80"
                        }`}
                      >
                        {!isActive && (
                          <span className={`w-1.5 h-1.5 rounded-full ${meta.dotClass}`} />
                        )}
                        <IconComponent className="w-3.5 h-3.5 shrink-0" />
                        <span>{meta.label}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="text-[11px] font-mono text-zinc-500 shrink-0 hidden sm:block">
                  <span className="font-semibold text-zinc-900">{matchingCount}</span> dari {techTools.length} tools
                </div>
              </div>

              {/* Informative Sub-Bar with Color Dot (No text truncation on mobile) */}
              <div className="flex items-center justify-between gap-2.5 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl bg-zinc-50/80 border border-zinc-200/70 text-[11px] sm:text-xs font-mono text-zinc-600">
                <div className="flex items-center gap-2 min-w-0">
                  <span className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full shrink-0 ${activeMeta.dotClass}`} />
                  <span className="text-zinc-700 leading-snug">{activeMeta.description}</span>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-[10px] sm:text-[11px] text-zinc-400 font-semibold sm:hidden">
                    {matchingCount}/{techTools.length}
                  </span>
                  {activeCategoryId !== "all" && (
                    <button
                      onClick={() => setActiveCategoryId("all")}
                      className="text-[10px] sm:text-[11px] text-zinc-500 hover:text-zinc-950 transition-colors underline cursor-pointer"
                    >
                      Reset
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Tools Grid: Color-Differentiated Highlighting */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 sm:gap-4">
              {techTools.map((tool) => {
                const iconPath = tool.icon
                  ? tool.icon.startsWith("/")
                    ? tool.icon
                    : `/${tool.icon}`
                  : null;

                const mapping = toolCategoryMap[tool.name] || {
                  primary: "tools" as CategoryId,
                  all: ["tools" as CategoryId],
                };
                const primaryMeta = categoryMetaMap[mapping.primary];

                const isMatch =
                  activeCategoryId === "all"
                    ? true
                    : mapping.all.includes(activeCategoryId);

                const currentMeta =
                  activeCategoryId === "all"
                    ? primaryMeta
                    : categoryMetaMap[activeCategoryId];

                const handleTileMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
                  const tile = e.currentTarget;
                  const rect = tile.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  tile.style.setProperty("--mouse-x", `${x}px`);
                  tile.style.setProperty("--mouse-y", `${y}px`);
                };

                return (
                  <div
                    key={tool.name}
                    onMouseMove={handleTileMouseMove}
                    className={`group relative flex flex-col items-center justify-center text-center p-3 sm:p-5 rounded-xl sm:rounded-2xl transition-all duration-300 select-none overflow-hidden ${
                      isMatch
                        ? activeCategoryId === "all"
                          ? "bg-white hover:bg-zinc-50/80 border border-zinc-200/90 hover:border-zinc-400 hover:shadow-md hover:-translate-y-1 active:scale-[0.98] opacity-100 cursor-default"
                          : `${currentMeta.activeCardBg} border-2 ${currentMeta.activeCardBorder} shadow-md -translate-y-0.5 sm:-translate-y-1 opacity-100 cursor-default`
                        : "bg-zinc-50/20 border border-zinc-100 opacity-20 grayscale hover:grayscale-0 hover:opacity-60 cursor-default"
                    }`}
                  >
                    {/* Dynamic Local Spotlight */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"
                      style={{
                        background: `radial-gradient(160px circle at var(--mouse-x, 0) var(--mouse-y, 0), ${
                          isMatch ? currentMeta.spotlightRgba : "rgba(24, 24, 27, 0.05)"
                        }, transparent 70%)`,
                      }}
                    />

                    {/* Top Accent Line for Active Category */}
                    {activeCategoryId !== "all" && isMatch && (
                      <div
                        className={`absolute top-0 left-0 right-0 h-1 ${currentMeta.dotClass}`}
                      />
                    )}

                    {/* Square Icon Tile */}
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white border border-zinc-200/90 group-hover:border-zinc-300 group-hover:shadow-xs flex items-center justify-center mb-2 sm:mb-3 shadow-2xs transition-all duration-300 ease-out group-hover:scale-105 relative z-10">
                      {iconPath ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={iconPath}
                          alt={tool.name}
                          className="w-5 h-5 sm:w-6 sm:h-6 object-contain shrink-0"
                        />
                      ) : (
                        <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-400 shrink-0" />
                      )}
                    </div>

                    {/* Tool Name */}
                    <h4 className="text-xs sm:text-sm font-bold text-zinc-950 tracking-tight group-hover:text-zinc-950 transition-colors duration-200 truncate max-w-full relative z-10">
                      {tool.name}
                    </h4>

                    {/* Subtitle / Role Tag with Distinct Domain Dot */}
                    <div className="flex items-center gap-1 sm:gap-1.5 mt-0.5 sm:mt-1 relative z-10 max-w-full justify-center">
                      <span
                        className={`w-1.5 h-1.5 rounded-full shrink-0 ${primaryMeta.dotClass}`}
                      />
                      <span className="text-[10px] sm:text-[11px] text-zinc-500 font-medium truncate">
                        {tool.role}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
