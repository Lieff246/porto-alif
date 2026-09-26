"use client";

import { focusAreas } from "@/data/portfolio";
import { Globe, Server, Brain, Cpu, ArrowUpRight, CheckCircle2, FolderGit2 } from "lucide-react";
import { TechIcon } from "./TechIcons";

export default function FocusAreas() {
  const iconMap: Record<string, React.ReactNode> = {
    Globe: <Globe className="w-5 h-5 text-zinc-900" />,
    Server: <Server className="w-5 h-5 text-zinc-900" />,
    Brain: <Brain className="w-5 h-5 text-zinc-900" />,
    Cpu: <Cpu className="w-5 h-5 text-zinc-900" />,
  };

  const domainIndexMap = ["01", "02", "03", "04"];

  return (
    <section id="focus" className="py-20 border-t border-zinc-200 bg-zinc-50/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b-2 border-zinc-950 pb-4 mb-10">
          <div>
            <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest font-semibold">
              [01] // ENGINEERING_DOMAINS
            </p>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-zinc-950 mt-1">
              Fokus Utama &amp; Keahlian Teknis
            </h2>
            <p className="text-zinc-600 text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
              Empat pilar rekayasa sistem yang dipelajari dan diterapkan secara konsisten melalui proyek riil dan riset terapan.
            </p>
          </div>
          <span className="hidden sm:inline-block text-xs font-mono text-zinc-400 font-semibold px-2 py-1">
            04 PILLARS
          </span>
        </div>

        {/* 2x2 Grid of Scannable Structured Focus Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {focusAreas.map((area, index) => (
            <div
              key={area.title}
              className="relative p-6 sm:p-7 rounded-2xl bg-white border border-zinc-200/90 hover:border-zinc-400/90 hover:shadow-[0_12px_28px_-6px_rgba(0,0,0,0.06),0_0_0_1px_rgba(24,24,27,0.05)] hover:-translate-y-1 transition-all duration-300 ease-out flex flex-col justify-between group overflow-hidden"
            >
              {/* Subtle Top Accent Glow on Hover */}
              <div
                aria-hidden="true"
                className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-500/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              />

              {/* Top Section */}
              <div>
                {/* Meta Top Bar */}
                <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-zinc-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-zinc-100/90 border border-zinc-200/90 group-hover:border-emerald-500/35 group-hover:bg-emerald-50/50 flex items-center justify-center shrink-0 transition-all duration-300 shadow-2xs">
                      <span className="text-zinc-800 group-hover:text-emerald-700 transition-colors duration-300">
                        {iconMap[area.icon]}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-zinc-400 tracking-wider block font-semibold">
                        DOMAIN // {domainIndexMap[index]}
                      </span>
                      <span className="text-xs font-mono font-bold text-zinc-700">
                        {area.code}
                      </span>
                    </div>
                  </div>

                  <span className="text-xs font-mono text-zinc-400 font-medium">
                    0{index + 1} / 04
                  </span>
                </div>

                {/* Title & Tagline */}
                <div className="space-y-1.5 mb-5">
                  <h3 className="text-xl font-black text-zinc-950 tracking-tight flex items-center justify-between">
                    <span>{area.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-zinc-300 group-hover:text-emerald-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0" />
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 font-medium leading-relaxed">
                    {area.tagline}
                  </p>
                </div>

                {/* Key Capabilities Breakdown (Scannable, No Walls of Text) */}
                <div className="space-y-2.5 mb-5 pt-3 border-t border-zinc-100">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-bold">
                    Kompetensi Inti:
                  </div>
                  <div className="space-y-2">
                    {area.capabilities.map((cap, capIdx) => (
                      <div
                        key={cap.label}
                        className="p-2.5 rounded-lg bg-zinc-50/80 border border-zinc-150 hover:bg-zinc-50 transition-colors"
                      >
                        <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-900 mb-0.5 font-mono">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{cap.label}</span>
                        </div>
                        <p className="text-xs text-zinc-600 leading-normal pl-5">
                          {cap.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Proven Implementation Box */}
                <div className="p-3 rounded-xl bg-zinc-100/70 border border-zinc-200/80 mb-5">
                  <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 mb-1">
                    <span className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-zinc-700">
                      <FolderGit2 className="w-3 h-3 text-zinc-700" />
                      Implementasi Riil:
                    </span>
                    <span className="text-emerald-700 font-bold text-[9px] bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                      TERVERIFIKASI
                    </span>
                  </div>
                  <div className="text-xs font-bold text-zinc-900">
                    {area.provenProject.title}
                  </div>
                  <div className="text-[11px] text-zinc-600 mt-0.5 leading-relaxed">
                    {area.provenProject.description}
                  </div>
                </div>
              </div>

              {/* Bottom Tags */}
              <div className="pt-3.5 border-t border-zinc-100">
                <div className="flex flex-wrap gap-1.5">
                  {area.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-1 rounded bg-zinc-100/90 text-zinc-800 border border-zinc-200/80 font-medium hover:border-zinc-300 transition-colors"
                    >
                      <TechIcon name={tag} className="w-3 h-3 shrink-0" />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
