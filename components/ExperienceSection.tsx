"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { experiences } from "@/data/portfolio";
import { Users, BookOpen, Award, GraduationCap, CheckCircle, Camera, Maximize2, X } from "lucide-react";

interface LightboxData {
  src: string;
  alt: string;
  caption?: string;
  role: string;
  organization: string;
}

export default function ExperienceSection() {
  const [lightboxData, setLightboxData] = useState<LightboxData | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close lightbox on Escape key & prevent body scroll
  useEffect(() => {
    if (lightboxData) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setLightboxData(null);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [lightboxData]);

  const iconMap: Record<string, React.ReactNode> = {
    Leadership: <Users className="w-4 h-4 text-emerald-700" />,
    Mentoring: <BookOpen className="w-4 h-4 text-blue-700" />,
    Academic: <GraduationCap className="w-4 h-4 text-amber-700" />,
    Competition: <Award className="w-4 h-4 text-purple-700" />,
  };

  return (
    <section id="experience" className="py-24 border-t border-zinc-200 bg-zinc-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between border-b-2 border-zinc-950 pb-3 mb-10">
          <div>
            <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest font-semibold">
              [03] // LEADERSHIP_&amp;_COMMUNITY
            </p>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-zinc-950 mt-1">
              Pengalaman Organisasi &amp; Mentoring
            </h2>
          </div>
          <span className="hidden sm:inline-block text-xs font-mono text-zinc-400">
            EXPERIENCE
          </span>
        </div>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-zinc-200 shadow-2xs hover:border-zinc-400 transition-all"
            >
              {/* Full Width Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-zinc-100">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <div className="w-6 h-6 rounded-md bg-zinc-100 border border-zinc-200 flex items-center justify-center shrink-0">
                      {iconMap[exp.category]}
                    </div>
                    <span className="text-xs font-mono font-bold text-zinc-950">
                      {exp.organization}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 text-zinc-700 border border-zinc-200">
                      {exp.badge}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-950 tracking-tight">
                    {exp.role}
                  </h3>
                </div>
                <div className="text-xs font-mono font-bold text-zinc-500 sm:text-right shrink-0">
                  {exp.period}
                </div>
              </div>

              {/* Card Body: Content & Photo */}
              <div className={`pt-5 ${exp.image ? "grid grid-cols-1 md:grid-cols-12 gap-6 items-start" : ""}`}>
                {/* Left/Main Column */}
                <div className={exp.image ? "md:col-span-7 lg:col-span-8 flex flex-col justify-between" : ""}>
                  <div>
                    <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2 mb-5">
                      {exp.achievements.map((ach, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700">
                          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-100">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2.5 py-1 rounded bg-zinc-50 text-zinc-600 border border-zinc-200/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column: Documentation Photo Preview */}
                {exp.image && (
                  <div className="md:col-span-5 lg:col-span-4 flex flex-col">
                    <div
                      onClick={() =>
                        setLightboxData({
                          src: exp.image!,
                          alt: `${exp.role} - ${exp.organization}`,
                          caption: exp.imageCaption,
                          role: exp.role,
                          organization: exp.organization,
                        })
                      }
                      className="group relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-zinc-200 bg-zinc-100 shadow-2xs cursor-pointer hover:border-zinc-400 hover:shadow-md transition-all"
                    >
                      <Image
                        src={exp.image}
                        alt={`${exp.role} - ${exp.organization}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 360px"
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Subtle Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-40 group-hover:opacity-60 transition-opacity" />

                      {/* Top Documentation Badge */}
                      <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-zinc-950/80 text-white backdrop-blur-md shadow-xs">
                        <Camera className="w-3 h-3 text-emerald-400" />
                        <span>DOKUMENTASI</span>
                      </div>

                      {/* Hover Zoom Icon & Hint */}
                      <div className="absolute bottom-2.5 right-2.5 flex items-center gap-1.5 text-[10px] font-mono font-medium px-2 py-1 rounded-md bg-white/95 text-zinc-900 shadow-sm opacity-90 group-hover:opacity-100 transition-opacity">
                        <Maximize2 className="w-3 h-3 text-zinc-600" />
                        <span>Perbesar</span>
                      </div>
                    </div>

                    {/* Caption */}
                    {exp.imageCaption && (
                      <p className="text-[11px] font-mono text-zinc-500 mt-2 px-0.5 leading-snug">
                        ↳ {exp.imageCaption}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal rendered via Portal directly to body */}
      {mounted && lightboxData && createPortal(
        <div
          onClick={() => setLightboxData(null)}
          className="fixed inset-0 z-[99999] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-8 cursor-zoom-out animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full max-h-[90vh] bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col cursor-default"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-zinc-800 bg-zinc-900/90 backdrop-blur-sm shrink-0">
              <div className="flex items-center gap-2 overflow-hidden">
                <Camera className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs font-mono font-bold text-zinc-200 truncate">
                  {lightboxData.role} — {lightboxData.organization}
                </span>
              </div>
              <button
                onClick={() => setLightboxData(null)}
                aria-label="Tutup pratinjau"
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Large Image Preview with Natural Centering */}
            <div className="relative w-full flex-1 min-h-[280px] max-h-[70vh] bg-zinc-950/80 flex items-center justify-center p-3 sm:p-4">
              <div className="relative w-full h-[55vh] max-h-[560px]">
                <Image
                  src={lightboxData.src}
                  alt={lightboxData.alt}
                  fill
                  priority
                  sizes="(max-width: 1200px) 100vw, 1000px"
                  className="object-contain"
                />
              </div>
            </div>

            {/* Footer Caption */}
            {lightboxData.caption && (
              <div className="px-5 py-3 border-t border-zinc-800 bg-zinc-900/90 text-xs font-mono text-zinc-300 flex items-center justify-between shrink-0">
                <span className="truncate pr-4">{lightboxData.caption}</span>
                <span className="text-[10px] text-zinc-500 font-mono shrink-0">ESC untuk menutup</span>
              </div>
            )}
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
