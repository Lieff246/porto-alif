"use client";

import Image from "next/image";
import { Project } from "@/types/portfolio";
import { X, ExternalLink, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { useEffect } from "react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
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

  if (!project) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-zinc-950/60 backdrop-blur-sm animate-in fade-in duration-150"
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white border border-zinc-200 shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-zinc-500 hover:text-zinc-950 hover:bg-zinc-100 border border-zinc-200 transition-colors"
          aria-label="Tutup modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="pr-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-zinc-100 text-zinc-800 border border-zinc-200 font-semibold">
              {project.category}
            </span>
            <span className="text-xs font-mono text-zinc-500">
              {project.period} · {project.role}
            </span>
          </div>
          <h3 className="text-2xl font-black text-zinc-950 tracking-tight">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-zinc-600 mt-1 font-medium">
            {project.tagline}
          </p>
        </div>

        {/* Screenshot Image Preview inside Modal */}
        {project.image && (
          <div
            className={`mt-5 relative w-full rounded-xl overflow-hidden border border-zinc-200 bg-zinc-100 ${
              project.category === "Mobile"
                ? "h-80 sm:h-96 flex items-center justify-center p-2 bg-zinc-900/5"
                : "aspect-video"
            }`}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 700px"
              className={project.category === "Mobile" ? "object-contain" : "object-cover object-top"}
            />
          </div>
        )}


        {/* Full Description */}
        <div className="mt-6 pt-6 border-t border-zinc-100 space-y-5">
          <div>
            <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-wider font-bold mb-2">
              TENTANG PROJECT &amp; STUDI KASUS
            </h4>
            <p className="text-sm text-zinc-700 leading-relaxed whitespace-pre-line">
              {project.fullDescription}
            </p>
          </div>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-wider font-bold mb-2.5">
                SOROTAN TEKNIS &amp; FITUR UTAMA
              </h4>
              <ul className="space-y-2">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Breakdown */}
          {project.techDetails && (
            <div>
              <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-wider font-bold mb-2">
                ARSITEKTUR &amp; SPESIFIKASI STACK
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-zinc-50 p-4 rounded-xl border border-zinc-200">
                {project.techDetails.frontend && (
                  <div>
                    <span className="text-zinc-500 block">Frontend:</span>
                    <span className="text-zinc-900 font-semibold">{project.techDetails.frontend}</span>
                  </div>
                )}
                {project.techDetails.backend && (
                  <div>
                    <span className="text-zinc-500 block">Backend API:</span>
                    <span className="text-zinc-900 font-semibold">{project.techDetails.backend}</span>
                  </div>
                )}
                {project.techDetails.database && (
                  <div>
                    <span className="text-zinc-500 block">Database:</span>
                    <span className="text-zinc-900 font-semibold">{project.techDetails.database}</span>
                  </div>
                )}
                {project.techDetails.hardware && (
                  <div>
                    <span className="text-zinc-500 block">Hardware / Embedded:</span>
                    <span className="text-zinc-900 font-semibold">{project.techDetails.hardware}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Tags */}
          <div>
            <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-wider font-bold mb-2">
              TAGS TEKNOLOGI
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-2.5 py-1 rounded bg-zinc-100 text-zinc-800 border border-zinc-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="mt-8 pt-5 border-t border-zinc-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-zinc-50 text-zinc-900 border border-zinc-200 text-xs font-bold transition-all shadow-2xs"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Buka GitHub</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-bold transition-all shadow-xs"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Kunjungi Website</span>
              </a>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-xs font-mono text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            Tutup [Esc]
          </button>
        </div>
      </div>
    </div>
  );
}
