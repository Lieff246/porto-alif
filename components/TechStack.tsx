"use client";

import { useState } from "react";
import { techTools } from "@/data/portfolio";
import { Code2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState<string>("Semua");

  const categories = [
    { name: "Semua", filterKey: "Semua", count: techTools.length },
    { name: "Frameworks & Web", filterKey: "Frameworks & Web", count: techTools.filter((t) => t.category === "Frameworks & Web").length },
    { name: "Languages", filterKey: "Languages", count: techTools.filter((t) => t.category === "Languages").length },
    { name: "Geospatial", filterKey: "Geospatial", count: techTools.filter((t) => t.category === "Geospatial").length },
    { name: "AI & Hardware", filterKey: "AI & Hardware", count: techTools.filter((t) => t.category === "AI & Hardware").length },
    { name: "Database & Tools", filterKey: "Database & Tools", count: techTools.filter((t) => t.category === "Database & Tools").length },
  ];

  const filteredTools =
    activeCategory === "Semua"
      ? techTools
      : techTools.filter((t) => t.category === activeCategory);

  return (
    <section id="skills" className="py-20 sm:py-28 border-t border-zinc-200/90 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header: Bersih & Selaras dengan Projects & Experience */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-200 pb-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest mb-1.5">
                <span>STACK &amp; TOOLKIT</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-950">
                Teknologi &amp; Tools yang Dipakai
              </h2>
              <p className="text-zinc-600 text-xs sm:text-sm mt-1.5 max-w-2xl leading-relaxed">
                Daftar teknologi, bahasa pemrograman, framework, pustaka geospasial, dan peralatan rekayasa perangkat lunak yang aktif saya gunakan dalam membangun sistem.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-zinc-200/90 text-xs font-mono text-zinc-600 shadow-2xs self-start md:self-auto">
              <span>{techTools.length} Teknologi Utama</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Clean Container */}
        <ScrollReveal delay={80}>
          <div className="rounded-3xl bg-white border border-zinc-200/90 p-5 sm:p-8 lg:p-10 shadow-2xs">
          {/* Category Filter Tabs Bar */}
          <div className="flex items-center gap-2 pb-5 mb-7 border-b border-zinc-100 overflow-x-auto scrollbar-none -mx-2 px-2 sm:mx-0 sm:px-0">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.filterKey)}
                className={`text-xs px-3.5 py-1.5 rounded-full transition-all shrink-0 flex items-center gap-2 cursor-pointer ${
                  activeCategory === cat.filterKey
                    ? "bg-zinc-950 text-white font-bold shadow-xs scale-102"
                    : "bg-zinc-50 text-zinc-600 hover:text-zinc-950 border border-zinc-200/80 hover:border-zinc-300 font-medium"
                }`}
              >
                <span>{cat.name}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono font-semibold ${
                    activeCategory === cat.filterKey
                      ? "bg-zinc-800 text-zinc-200"
                      : "bg-zinc-200/70 text-zinc-600"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Cards Grid: Clean Tiles Layout */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4">
            {filteredTools.map((tool) => {
              const iconPath = tool.icon
                ? tool.icon.startsWith("/")
                  ? tool.icon
                  : `/${tool.icon}`
                : null;

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
                  className="group relative flex flex-col items-center justify-center text-center p-4 sm:p-5 rounded-2xl bg-zinc-50/70 hover:bg-white border border-zinc-200/80 hover:border-zinc-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-1.5 active:scale-[0.97] cursor-default select-none overflow-hidden"
                >
                  {/* Dynamic Local Spotlight */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"
                    style={{
                      background:
                        "radial-gradient(160px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(16, 185, 129, 0.12), transparent 70%)",
                    }}
                  />

                  {/* Square Icon Tile */}
                  <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200/90 group-hover:border-emerald-500/30 group-hover:shadow-xs flex items-center justify-center mb-3 shadow-2xs transition-all duration-300 ease-out group-hover:scale-110 relative z-10">
                    {iconPath ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={iconPath}
                        alt={tool.name}
                        className="w-6 h-6 object-contain shrink-0"
                      />
                    ) : (
                      <Code2 className="w-6 h-6 text-zinc-400 shrink-0" />
                    )}
                  </div>

                  {/* Tool Name */}
                  <h4 className="text-sm font-bold text-zinc-900 tracking-tight group-hover:text-emerald-700 transition-colors duration-200 truncate max-w-full relative z-10">
                    {tool.name}
                  </h4>

                  {/* Subtitle / Role Tag */}
                  <span className="text-[11px] text-zinc-500 font-medium mt-1 group-hover:text-zinc-700 transition-colors truncate max-w-full relative z-10">
                    {tool.role}
                  </span>
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
