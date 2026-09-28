"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { experiences } from "@/data/portfolio";
import { Maximize2, X } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

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

  return (
    <section id="experience" className="py-20 sm:py-28 border-t border-zinc-200/90 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header: Bersih & Selaras dengan Projects Section */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-200 pb-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest mb-1.5">
                <span>EXPERIENCE &amp; LEADERSHIP</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-950">
                Pengalaman &amp; Kontribusi
              </h2>
              <p className="text-zinc-600 text-xs sm:text-sm mt-1.5 max-w-2xl leading-relaxed">
                Rekam jejak kepemimpinan organisasi mahasiswa, peran mengajar sebagai mentor, instruksi praktikum laboratorium, hingga keterlibatan dalam pelatihan teknis dan kompetisi nasional.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-zinc-200/90 text-xs font-mono text-zinc-600 shadow-2xs self-start md:self-auto">
              <span>{experiences.length} Pengalaman</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Experience Cards List */}
        <div className="space-y-6">
          {experiences.map((exp, index) => {
            const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
              const card = e.currentTarget;
              const rect = card.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              card.style.setProperty("--mouse-x", `${x}px`);
              card.style.setProperty("--mouse-y", `${y}px`);
            };

            return (
              <ScrollReveal key={exp.id} delay={Math.min(index * 60, 200)}>
                <div
                  onMouseMove={handleCardMouseMove}
                  className="group relative p-6 sm:p-8 rounded-2xl bg-white border border-zinc-200/90 shadow-2xs hover:border-zinc-400/90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
                >
                {/* Dynamic Local Spotlight */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"
                  style={{
                    background:
                      "radial-gradient(600px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(16, 185, 129, 0.05), transparent 70%)",
                  }}
                />

                {/* Card Header */}
                <div className="relative z-10 flex flex-col sm:flex-row sm:items-start justify-between gap-2 pb-5 border-b border-zinc-100">
                  <div className="space-y-2 w-full">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-800 border border-zinc-200/80">
                          {exp.organization}
                        </span>
                      <span className="text-zinc-300">•</span>
                      <span className="text-xs text-zinc-500 font-medium">
                        {exp.badge}
                      </span>
                    </div>
                    <div className="text-xs font-mono font-bold text-zinc-400 sm:text-right shrink-0">
                      {exp.period}
                    </div>
                  </div>

                  {/* Mobile Only: Documentation Photo placed above role title */}
                  {exp.image && (
                    <div className="block md:hidden pt-2 pb-1">
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
                        className="group relative w-full aspect-video rounded-xl overflow-hidden border border-zinc-200/80 bg-zinc-100 shadow-2xs cursor-pointer active:scale-[0.99] transition-transform"
                      >
                        <Image
                          src={exp.image}
                          alt={`${exp.role} - ${exp.organization}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 360px"
                          className="object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 opacity-30" />
                        <div className="absolute bottom-2.5 right-2.5 flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-lg bg-white/95 text-zinc-900 shadow-sm backdrop-blur-xs">
                          <Maximize2 className="w-3.5 h-3.5 text-zinc-600" />
                          <span>Perbesar</span>
                        </div>
                      </div>
                      {exp.imageCaption && (
                        <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
                          {exp.imageCaption}
                        </p>
                      )}
                    </div>
                  )}

                  <h3 className="text-xl sm:text-2xl font-extrabold text-zinc-950 tracking-tight pt-0.5">
                    {exp.role}
                  </h3>
                </div>
              </div>

              {/* Card Body: Content & Photo */}
              <div className={`pt-5 ${exp.image ? "grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start" : ""}`}>
                {/* Left/Main Column */}
                <div className={exp.image ? "md:col-span-7 lg:col-span-8 flex flex-col justify-between" : ""}>
                  <div>
                    <p className="text-sm sm:text-base text-zinc-600 leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Achievements: Clean Editorial Bullet Points */}
                    <div className="space-y-2.5 mb-5">
                      {exp.achievements.map((ach, i) => (
                        <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-700 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 mt-2 shrink-0" />
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
                        className="text-xs font-medium px-2.5 py-1 rounded-md bg-zinc-100/80 text-zinc-700 border border-zinc-200/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column: Documentation Photo Preview (Desktop Only) */}
                {exp.image && (
                  <div className="hidden md:flex md:col-span-5 lg:col-span-4 flex-col">
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
                      className="group relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-zinc-200/80 bg-zinc-100 shadow-2xs cursor-pointer hover:border-zinc-400 hover:shadow-md transition-all"
                    >
                      <Image
                        src={exp.image}
                        alt={`${exp.role} - ${exp.organization}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 360px"
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Subtle Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 opacity-30 group-hover:opacity-50 transition-opacity" />

                      {/* Hover Zoom Icon & Hint */}
                      <div className="absolute bottom-2.5 right-2.5 flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-lg bg-white/95 text-zinc-900 shadow-sm opacity-90 group-hover:opacity-100 transition-opacity backdrop-blur-xs">
                        <Maximize2 className="w-3.5 h-3.5 text-zinc-600" />
                        <span>Perbesar</span>
                      </div>
                    </div>

                    {/* Caption */}
                    {exp.imageCaption && (
                      <p className="text-xs text-zinc-500 mt-2.5 leading-relaxed">
                        {exp.imageCaption}
                      </p>
                    )}
                  </div>
                )}
                </div>
              </div>
            </ScrollReveal>
          );
        })}
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
                <span className="text-xs font-semibold text-zinc-200 truncate">
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

            {/* Image Container */}
            <div className="relative w-full h-[65vh] sm:h-[70vh] bg-black flex items-center justify-center">
              <Image
                src={lightboxData.src}
                alt={lightboxData.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-contain"
                priority
              />
            </div>

            {/* Caption Footer */}
            {lightboxData.caption && (
              <div className="px-5 py-3 border-t border-zinc-800 bg-zinc-900/90 text-xs text-zinc-400 text-center shrink-0">
                {lightboxData.caption}
              </div>
            )}
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
