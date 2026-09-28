"use client";

import { useState } from "react";
import { projects } from "@/data/portfolio";
import { Project } from "@/types/portfolio";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import ScrollReveal from "./ScrollReveal";
import {
  Globe,
  Server,
  Smartphone,
  Brain,
  Layers,
  Gamepad2,
} from "lucide-react";

interface CategoryFilter {
  id: string;
  tabLabel: string;
  icon: typeof Globe;
  filterFn: (p: Project) => boolean;
}

const categories: CategoryFilter[] = [
  {
    id: "all",
    tabLabel: "Semua",
    icon: Layers,
    filterFn: () => true,
  },
  {
    id: "web",
    tabLabel: "Web",
    icon: Globe,
    filterFn: (p) =>
      (p.category === "Web" || p.category.includes("Web") || p.id === "smartstudy-ai") &&
      p.id !== "safe-game-lidm",
  },
  {
    id: "backend",
    tabLabel: "Backend",
    icon: Server,
    filterFn: (p) =>
      p.category === "Backend" ||
      p.id === "go-notes-api" ||
      p.id === "ewastehub",
  },
  {
    id: "mobile",
    tabLabel: "Mobile",
    icon: Smartphone,
    filterFn: (p) =>
      p.category === "Mobile" ||
      p.id === "moviex-flutter" ||
      p.id === "distroku-ecommerce",
  },
  {
    id: "ai",
    tabLabel: "AI",
    icon: Brain,
    filterFn: (p) =>
      p.category === "AI" ||
      p.category.includes("AI") ||
      p.id === "sifokus-iot" ||
      p.id === "smartstudy-ai",
  },
  {
    id: "game",
    tabLabel: "Game",
    icon: Gamepad2,
    filterFn: (p) => p.category === "Game" || p.id === "safe-game-lidm",
  },
];

export default function ProjectsSection() {
  const [activeCategoryId, setActiveCategoryId] = useState<string>("all");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const activeCategory =
    categories.find((c) => c.id === activeCategoryId) || categories[0];
  const filteredProjects = projects.filter(activeCategory.filterFn);

  const getCategoryCount = (cat: CategoryFilter) => {
    return projects.filter(cat.filterFn).length;
  };

  return (
    <section id="projects" className="py-20 sm:py-28 border-t border-zinc-200/90 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header: Bersih & Profesional */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-200 pb-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest mb-1.5">
                <span>PROJECT WORK</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-950">
                Project &amp; Karya Unggulan
              </h2>
              <p className="text-zinc-600 text-xs sm:text-sm mt-1.5 max-w-2xl leading-relaxed">
                Kumpulan proyek nyata yang dikembangkan mulai dari masa perkuliahan, magang kedinasan, kompetisi nasional LIDM, hingga riset mandiri yang berfokus pada web, backend, mobile, dan artificial intelligence.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-zinc-200/90 text-xs font-mono text-zinc-600 shadow-2xs self-start md:self-auto">
              <span>{projects.length} Total Karya</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Filter Bar: Horizontal swipeable pill buttons di mobile, clean pills di desktop */}
        <ScrollReveal delay={40}>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-8 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:overflow-visible scrollbar-none">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategoryId === cat.id;
              const count = getCategoryCount(cat);

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategoryId(cat.id)}
                  className={`shrink-0 whitespace-nowrap flex items-center gap-2 px-4 py-2 sm:px-4 sm:py-2.5 rounded-full border font-mono text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-zinc-950 text-white border-zinc-950 shadow-xs scale-102"
                      : "bg-white text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100/80 border-zinc-200/90 active:scale-95"
                  }`}
                  aria-selected={isActive}
                  role="tab"
                >
                  <Icon
                    className={`w-3.5 h-3.5 shrink-0 ${
                      isActive ? "text-emerald-400" : "text-zinc-400"
                    }`}
                  />
                  <span>{cat.tabLabel}</span>
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
        </ScrollReveal>

        {/* Subtitle Status */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-sm font-mono font-bold text-zinc-900 uppercase tracking-wider flex items-center gap-2">
            <span>Daftar Proyek [{activeCategory.tabLabel}]</span>
            <span className="text-xs font-normal text-zinc-400">
              ({filteredProjects.length} proyek)
            </span>
          </h3>
          <span className="text-xs font-mono text-zinc-500 hidden sm:inline">
            Klik kartu untuk membaca dokumentasi &amp; detail teknis
          </span>
        </div>

        {/* Langsung ke Bento Grid Proyek: Bersih, Cepat & Tanpa Bloat */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => {
            const isFeatured = activeCategoryId === "all" && (index === 0 || index === 1);
            return (
              <ScrollReveal
                key={project.id}
                delay={isFeatured ? 0 : (index % 2) * 120}
                className={isFeatured ? "md:col-span-2" : "col-span-1"}
              >
                <ProjectCard
                  project={project}
                  featured={isFeatured}
                  onOpenModal={setActiveModalProject}
                />
              </ScrollReveal>
            );
          })}
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
