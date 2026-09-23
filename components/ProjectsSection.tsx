"use client";

import { useState } from "react";
import { projects } from "@/data/portfolio";
import { Project } from "@/types/portfolio";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  // Dynamic unique categories from actual projects
  const availableCategories = Array.from(new Set(projects.map((p) => p.category)));
  const categories = ["All", ...availableCategories];

  const getCategoryCount = (cat: string) => {
    if (cat === "All") return projects.length;
    return projects.filter((p) => p.category === cat).length;
  };

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 border-t border-zinc-200 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-zinc-950 pb-4 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>[02] // SELECTED_WORKS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-950 mt-1">
              Project &amp; Karya Unggulan
            </h2>
            <p className="text-zinc-600 text-sm mt-1 max-w-xl">
              Kompilasi project nyata dari perkuliahan, magang dinas pendidikan, kompetisi nasional LIDM, hingga riset mandiri.
            </p>
          </div>

          {/* Dynamic Filter Tabs with Item Count */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-mono px-3.5 py-1.5 rounded-full transition-all shrink-0 flex items-center gap-1.5 ${
                  selectedCategory === cat
                    ? "bg-zinc-950 text-white font-bold shadow-xs scale-102"
                    : "bg-white text-zinc-600 hover:text-zinc-950 border border-zinc-200 font-semibold hover:border-zinc-300"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    selectedCategory === cat
                      ? "bg-zinc-800 text-zinc-200"
                      : "bg-zinc-100 text-zinc-500"
                  }`}
                >
                  {getCategoryCount(cat)}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              featured={selectedCategory === "All" && (index === 0 || index === 1)}
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
