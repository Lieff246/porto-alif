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
  return (
    <div
      className={`group relative flex flex-col justify-between rounded-2xl bg-white border border-zinc-200/90 hover:border-zinc-500/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden ${
        featured ? "md:col-span-2" : "col-span-1"
      }`}
    >
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
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/20 opacity-80 group-hover:opacity-60 transition-opacity" />

            {/* Top Category Badge */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-zinc-950 text-white backdrop-blur-md shadow-sm">
                {project.category}
              </span>
              {project.featured && (
                <span className="text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-emerald-600 text-white shadow-sm">
                  FEATURED WORK
                </span>
              )}
            </div>

            <div className="absolute bottom-3 right-3 text-xs font-mono font-bold text-zinc-800 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md shadow-2xs">
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
        <div className="p-7">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-1.5">
            <span className="text-zinc-600 font-bold">{project.role}</span>
            <span>Untad Portfolio</span>
          </div>

          <h3
            onClick={() => onOpenModal(project)}
            className="text-xl sm:text-2xl font-black text-zinc-950 tracking-tight group-hover:text-zinc-700 transition-colors cursor-pointer flex items-center justify-between"
          >
            <span>{project.title}</span>
            <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-zinc-950 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform shrink-0 ml-2" />
          </h3>

          <p className="text-xs sm:text-sm text-zinc-600 mt-2.5 leading-relaxed">
            {project.description}
          </p>

          {/* Key Metric Pill */}
          {project.metrics && (
            <div className="mt-4 px-3.5 py-1.5 rounded-lg bg-zinc-50 border border-zinc-200 text-xs font-mono text-zinc-800 font-medium">
              ⚡ {project.metrics}
            </div>
          )}
        </div>
      </div>

      {/* Footer / Stack Tags & Actions */}
      <div className="p-7 pt-0">
        <div className="pt-4 border-t border-zinc-100 flex flex-wrap items-center justify-between gap-3">
          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-zinc-100 text-zinc-700 border border-zinc-200/60 font-medium"
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
                className="p-2 rounded-lg text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 border border-transparent hover:border-zinc-200 transition-all"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
            <button
              onClick={() => onOpenModal(project)}
              className="text-xs font-mono font-bold text-zinc-950 hover:text-zinc-600 underline underline-offset-4"
            >
              Detail Kasus →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
