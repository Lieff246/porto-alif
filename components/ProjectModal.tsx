"use client";

import Image from "next/image";
import { Project } from "@/types/portfolio";
import { X, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project || !mounted) return null;

  return createPortal(
    <div
      onClick={onClose}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-zinc-950/60 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white border border-zinc-200 shadow-2xl p-6 sm:p-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
          aria-label="Tutup modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="pr-10">
          <div className="flex flex-wrap items-center gap-2 mb-2.5">
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-700 border border-zinc-200/80">
              {project.category}
            </span>
            <span className="text-xs text-zinc-400">•</span>
            <span className="text-xs text-zinc-500 font-medium">{project.period}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight leading-tight">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-zinc-500 font-medium mt-1">
            {project.role}
          </p>
        </div>

        {/* Screenshot Image Preview */}
        {project.image && (
          <div className="mt-5 relative w-full aspect-video rounded-xl overflow-hidden border border-zinc-200/80 bg-zinc-50 shadow-xs">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 720px"
              className="object-cover object-center"
            />
          </div>
        )}

        {/* Tagline / Subtitle */}
        {project.tagline && (
          <p className="mt-4 text-xs sm:text-sm text-zinc-600 font-medium italic border-l-2 border-zinc-300 pl-3 py-0.5">
            {project.tagline}
          </p>
        )}

        {/* Main Body */}
        <div className="mt-6 pt-6 border-t border-zinc-100 space-y-6">
          {/* Story / Full Description */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
              Konteks &amp; Implementasi
            </h4>
            <p className="text-sm sm:text-base text-zinc-700 leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">
                Hal Utama yang Dikerjakan
              </h4>
              <ul className="space-y-2">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-700 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 mt-2 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies & Stack */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2.5">
              Teknologi &amp; Alat
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-2.5 py-1 rounded-md bg-zinc-100 text-zinc-800 border border-zinc-200/70"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Subtle Tech Breakdown if available */}
            {project.techDetails && (
              <div className="mt-3.5 pt-3.5 border-t border-zinc-100 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-600">
                {project.techDetails.frontend && (
                  <div>
                    <span className="text-zinc-400 font-medium">Frontend: </span>
                    <span className="text-zinc-800 font-medium">{project.techDetails.frontend}</span>
                  </div>
                )}
                {project.techDetails.backend && (
                  <div>
                    <span className="text-zinc-400 font-medium">Backend: </span>
                    <span className="text-zinc-800 font-medium">{project.techDetails.backend}</span>
                  </div>
                )}
                {project.techDetails.database && (
                  <div>
                    <span className="text-zinc-400 font-medium">Database: </span>
                    <span className="text-zinc-800 font-medium">{project.techDetails.database}</span>
                  </div>
                )}
                {project.techDetails.hardware && (
                  <div>
                    <span className="text-zinc-400 font-medium">Hardware: </span>
                    <span className="text-zinc-800 font-medium">{project.techDetails.hardware}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="mt-8 pt-5 border-t border-zinc-200 flex items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2.5">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-semibold transition-all shadow-xs"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Kunjungi Website</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-zinc-50 text-zinc-900 border border-zinc-200 text-xs font-semibold transition-all shadow-2xs"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Lihat di GitHub</span>
              </a>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-xs text-zinc-400 hover:text-zinc-700 font-medium transition-colors ml-auto"
          >
            Tutup [Esc]
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
