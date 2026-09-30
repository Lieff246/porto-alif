"use client";

import Image from "next/image";
import { Project } from "@/types/portfolio";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
  featured?: boolean;
}

export default function ProjectCard({ project, onOpenModal, featured = false }: ProjectCardProps) {
  // Ultra-smooth 144Hz hardware-accelerated local spotlight tracking
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`group relative flex flex-col justify-between rounded-2xl bg-white border border-zinc-200/90 hover:border-zinc-400/90 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl overflow-hidden w-full h-full ${
        featured ? "md:col-span-2" : "col-span-1"
      }`}
    >
      {/* 1. Dynamic Local Mouse Spotlight (Zero-Jank CSS Variables) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"
        style={{
          background:
            "radial-gradient(550px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(16, 185, 129, 0.07), transparent 70%)",
        }}
      />

      <div>
        {/* Cinematic Visual Preview */}
        {project.image ? (
          <div
            onClick={() => onOpenModal(project)}
            className={`relative w-full bg-zinc-100 overflow-hidden cursor-pointer border-b border-zinc-100 ${
              featured ? "h-64 sm:h-80 md:h-96" : "h-56 sm:h-64"
            }`}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes={featured ? "(max-width: 768px) 100vw, 1200px" : "(max-width: 768px) 100vw, 600px"}
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/20 opacity-80 group-hover:opacity-50 transition-opacity duration-300" />

            {/* Subtle Glass Sheen Sweep on Hover */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent z-10"
            />

            {/* Top Category Badge */}
            <div className="absolute top-4 left-4 flex items-center gap-2 z-20">
              <span className="text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-zinc-950/90 backdrop-blur-md text-white shadow-xs">
                {project.category}
              </span>
              {project.featured && (
                <span className="text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-zinc-800/90 backdrop-blur-md text-white shadow-xs">
                  FEATURED WORK
                </span>
              )}
            </div>

            <div className="absolute bottom-3 right-3 text-xs font-mono font-bold text-zinc-800 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-md shadow-2xs z-20">
              {project.period}
            </div>
          </div>
        ) : (
          <div className="p-7 pb-0 flex items-center justify-between">
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-zinc-100 text-zinc-800 border border-zinc-200 font-bold">
              {project.category}
            </span>
            <span className="text-xs font-mono text-zinc-400 font-bold">{project.period}</span>
          </div>
        )}

        {/* Content Body */}
        <div className="p-7 relative z-20">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-1.5">
            <span className="text-zinc-600 font-bold">{project.role}</span>
          </div>

          <h3
            onClick={() => onOpenModal(project)}
            className="text-xl sm:text-2xl font-black text-zinc-950 tracking-tight group-hover:text-emerald-700 transition-colors duration-200 cursor-pointer flex items-center justify-between"
          >
            <span>{project.title}</span>
            <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200 shrink-0 ml-2" />
          </h3>

          <p className="text-xs sm:text-sm text-zinc-600 mt-2.5 leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>

      {/* Footer / Stack Tags & Actions */}
      <div className="p-7 pt-0 relative z-20">
        <div className="pt-4 border-t border-zinc-100 flex flex-wrap items-center justify-between gap-3">
          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-zinc-100/90 text-zinc-700 border border-zinc-200/60 font-medium hover:border-zinc-300 hover:bg-zinc-100 transition-colors"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-100 text-zinc-400">
                +{project.tags.length - 4}
              </span>
            )}
          </div>

          {/* External Links */}
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub repo untuk ${project.title}`}
                className="p-2 rounded-lg text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 border border-transparent hover:border-zinc-200 active:scale-95 transition-all"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
            <button
              onClick={() => onOpenModal(project)}
              className="group/btn inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold text-zinc-900 bg-zinc-100 hover:bg-zinc-950 hover:text-white active:scale-95 transition-all duration-200 cursor-pointer shadow-2xs"
              aria-label={`Lihat detail proyek ${project.title}`}
            >
              <span>Lihat Detail</span>
              <span className="inline-block transition-transform duration-200 ease-out group-hover/btn:translate-x-0.5">
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
