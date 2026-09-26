"use client";

import { useState } from "react";
import { techTools } from "@/data/portfolio";
import { TechIcon } from "./TechIcons";
import { Terminal, Sparkles } from "lucide-react";

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    { name: "All", count: techTools.length },
    { name: "Frameworks & Web", count: techTools.filter((t) => t.category === "Frameworks & Web").length },
    { name: "Languages", count: techTools.filter((t) => t.category === "Languages").length },
    { name: "Geospatial", count: techTools.filter((t) => t.category === "Geospatial").length },
    { name: "AI & Hardware", count: techTools.filter((t) => t.category === "AI & Hardware").length },
    { name: "Tools & DevOps", count: techTools.filter((t) => t.category === "Tools & DevOps").length },
  ];

  const filteredTools =
    activeCategory === "All"
      ? techTools
      : techTools.filter((t) => t.category === activeCategory);

  return (
    <section id="skills" className="py-20 border-t border-zinc-200 bg-zinc-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-zinc-950 pb-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest">
              <Terminal className="w-3.5 h-3.5 text-zinc-700" />
              <span>[04] // DEVELOPER_TOOLBOX</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-zinc-950 mt-1">
              Teknologi &amp; Tools yang Dipakai
            </h2>
            <p className="text-zinc-600 text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
              Daftar teknologi, library, framework, dan peralatan rekayasa perangkat lunak yang aktif digunakan dalam siklus pengembangan.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-zinc-600 font-bold bg-white px-3 py-1.5 rounded-full border border-zinc-200 shadow-2xs">
              {techTools.length} VERIFIED STACK
            </span>
          </div>
        </div>

        {/* Clean Light Container */}
        <div className="rounded-3xl bg-white border border-zinc-200/90 p-5 sm:p-8 lg:p-10 shadow-2xs">
          {/* Category Filter Tabs Bar */}
          <div className="flex items-center justify-between gap-3 pb-6 mb-7 border-b border-zinc-100 overflow-x-auto scrollbar-none">
            <div className="flex items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`text-xs font-mono px-3.5 py-1.5 rounded-full transition-all shrink-0 flex items-center gap-2 ${
                    activeCategory === cat.name
                      ? "bg-zinc-950 text-white font-bold shadow-xs scale-102"
                      : "bg-zinc-50 text-zinc-600 hover:text-zinc-950 border border-zinc-200/90 hover:border-zinc-300 font-semibold"
                  }`}
                >
                  <span>{cat.name}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono font-semibold ${
                      activeCategory === cat.name
                        ? "bg-zinc-800 text-zinc-200"
                        : "bg-zinc-200/70 text-zinc-600"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-1.5 text-[11px] font-mono text-zinc-400">
              <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
              <span>ACTIVE TOOLSET</span>
            </div>
          </div>

          {/* Cards Grid: Light Architectural Layout */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4">
            {filteredTools.map((tool) => (
              <div
                key={tool.name}
                className="group relative flex flex-col items-center justify-center text-center p-4 sm:p-5 rounded-2xl bg-zinc-50/60 hover:bg-white border border-zinc-200/80 hover:border-zinc-400 transition-all duration-200 hover:-translate-y-1 hover:shadow-md cursor-default select-none"
              >
                {/* Square Icon Tile */}
                <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200/90 group-hover:border-zinc-300 flex items-center justify-center mb-3 shadow-2xs transition-all duration-200 group-hover:scale-105">
                  {tool.icon ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={tool.icon}
                      alt={tool.name}
                      className="w-6 h-6 object-contain shrink-0"
                    />
                  ) : (
                    <TechIcon name={tool.name} className="w-6 h-6 shrink-0" />
                  )}
                </div>

                {/* Tool Name */}
                <h4 className="text-sm font-bold text-zinc-900 tracking-tight group-hover:text-zinc-950 transition-colors truncate max-w-full">
                  {tool.name}
                </h4>

                {/* Subtitle / Role Tag */}
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider font-semibold mt-1 group-hover:text-zinc-600 transition-colors truncate max-w-full">
                  {tool.role}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom Footer Status */}
          <div className="mt-8 pt-5 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-500 gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>
                Total <strong className="text-zinc-900">{techTools.length} teknologi</strong> terkonfigurasi &amp; siap produksi
              </span>
            </div>
            <span className="text-zinc-400 text-[11px] font-semibold">
              UNTAD INFORMATICS // STACK DIRECTORY
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
