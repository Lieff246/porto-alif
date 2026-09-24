"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { personalInfo, projects } from "@/data/portfolio";
import { ArrowDown, ExternalLink, Copy, Check, Terminal } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function Hero() {
  const [copied, setCopied] = useState<boolean>(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  // Ultra-Smooth 60/120fps Hardware-Accelerated Pendulum Mouse Physics
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5

    if (rafId.current) cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(() => {
      if (cardRef.current) {
        // Damped, subtle physical sway anchored at the lanyard top
        const rotY = x * 8;
        const rotX = -y * 6;
        const rotZ = x * 2.5; // gentle natural pendulum sway
        cardRef.current.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) rotateZ(${rotZ}deg) translateY(-4px)`;
      }
    });
  };

  const handleMouseLeave = () => {
    if (rafId.current) cancelAnimationFrame(rafId.current);
    if (cardRef.current) {
      // Silky smooth return to resting tilt
      cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) rotateZ(2.5deg) translateY(0px)`;
    }
  };

  return (
    <section id="about" className="relative pt-16 pb-8 sm:pt-20 sm:pb-12 overflow-hidden">
      {/* Soft Ambient Radial Light for Breathing Room */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-emerald-100/40 via-zinc-100/60 to-transparent rounded-full blur-3xl -z-10" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Main Hero Narrative */}
          <div className="lg:col-span-7 space-y-5">
            <div className="space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest">
                <Terminal className="w-3.5 h-3.5 text-zinc-700" />
                <span>INFORMATICS STUDENT &amp; BUILDER</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-zinc-950 leading-[1.1]">
                Alif Apriansyah<span className="text-emerald-500">.</span>
              </h1>

              <p className="text-lg sm:text-xl font-bold tracking-tight text-zinc-800 leading-snug">
                Crafting resilient systems &amp; spatial tools. Explore my selected work below.
              </p>
            </div>

            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal max-w-xl">
              Software engineer focused on scalable web architecture, spatial data processing, and clean backend design. Experienced in crafting robust services with{" "}
              <span className="text-zinc-950 font-semibold underline decoration-zinc-300 underline-offset-4">
                Laravel &amp; Go
              </span>
              , while mentoring the next wave of builders at{" "}
              <span className="text-zinc-950 font-semibold">Tadulako</span>.
            </p>

            {/* Quick Interactive Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white font-semibold text-sm transition-all shadow-sm hover:shadow"
              >
                <span>Lihat Project [{String(projects.length).padStart(2, "0")}]</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-zinc-50 text-zinc-900 border border-zinc-200 text-sm font-semibold transition-all shadow-2xs"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub @Lieff246</span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
              </a>

              {/* 1-Click Interactive Copy Email Button */}
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-zinc-50 text-zinc-700 hover:text-zinc-950 border border-zinc-200 text-sm font-semibold transition-all shadow-2xs cursor-pointer active:scale-95"
                title="Salin alamat email ke clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600 animate-in zoom-in-75 duration-150" />
                    <span className="text-emerald-700 font-mono text-xs font-bold">Email Tersalin! ✓</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-zinc-500" />
                    <span className="text-xs">Salin Email</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* ID Card with subtle organic tilt and aligned lanyard */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) rotateZ(2.5deg) translateY(0px)",
                transformOrigin: "top center",
                transition: "transform 450ms cubic-bezier(0.16, 1, 0.3, 1)",
                willChange: "transform",
                backfaceVisibility: "hidden",
              }}
              className="w-full max-w-[280px] sm:max-w-[290px] select-none cursor-pointer flex flex-col items-center"
            >
              
              {/* Lanyard Fabric Ribbon (Tali) */}
              <div className="w-6 h-10 sm:h-12 bg-gradient-to-b from-zinc-800/0 via-zinc-900 to-zinc-950 border-x border-zinc-700/60 relative overflow-hidden shadow-xs shrink-0 flex items-center justify-center">
                {/* Fine Stitched Borders */}
                <div className="absolute inset-y-0 left-0.5 w-[1px] border-r border-dashed border-zinc-500/40" />
                <div className="absolute inset-y-0 right-0.5 w-[1px] border-l border-dashed border-zinc-500/40" />
                {/* Subtle Woven Center Spine */}
                <div className="w-1 h-full bg-zinc-800/60" />
              </div>

              {/* Metallic Crimp / End Clamp (Penjepit Besi Tali) */}
              <div className="w-7 h-2.5 rounded-[2px] bg-gradient-to-r from-zinc-400 via-zinc-100 to-zinc-400 border border-zinc-400/80 shadow-xs z-30 -mt-0.5 shrink-0 flex items-center justify-center">
                <div className="w-4 h-[1px] bg-zinc-400/70" />
              </div>

              {/* Silver Swivel Ring & Clasp (Ring Putar & Pengait) */}
              <div className="flex flex-col items-center -mt-0.5 z-30 shrink-0">
                {/* Circular Swivel Ring */}
                <div className="w-3.5 h-3.5 rounded-full border-2 border-zinc-300 bg-transparent shadow-xs" />
                
                {/* Clasp Body */}
                <div className="w-3 h-3 bg-gradient-to-b from-zinc-300 via-zinc-100 to-zinc-400 rounded-xs border border-zinc-400 shadow-xs -mt-1" />
                
                {/* Metallic Clip Hook looping into the hole */}
                <div className="w-2.5 h-3.5 bg-gradient-to-b from-zinc-300 via-zinc-200 to-zinc-400 rounded-b-xs border-x border-b border-zinc-400/90 shadow-xs -mt-0.5" />
              </div>

              {/* ID Card Body - slightly overlapping hook */}
              <div className="w-full -mt-1.5 group relative rounded-2xl overflow-hidden border border-zinc-200/90 bg-white shadow-xl shadow-zinc-900/8 hover:shadow-2xl hover:shadow-zinc-900/12 transition-shadow duration-500">
                {/* ID Badge Top Header with Mathematically Centered Slot Hole */}
                <div className="pt-3 pb-2.5 px-4 bg-zinc-50/90 border-b border-zinc-100 relative">
                  {/* Absolute Left Status */}
                  <div className="absolute left-3.5 top-1/2 -translate-y-1/2 flex items-center gap-1.5 text-[9px] font-mono text-zinc-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>ID</span>
                  </div>

                  {/* Centered Lanyard Punch Hole with Hook Loop */}
                  <div className="flex items-center justify-center">
                    <div className="w-9 h-2 rounded-full bg-zinc-200/90 border border-zinc-300/90 shadow-inner relative flex items-center justify-center">
                      {/* Inner metallic clip loop showing through the hole */}
                      <div className="w-2 h-1.5 rounded-xs bg-gradient-to-b from-zinc-400 to-zinc-500 opacity-80" />
                    </div>
                  </div>

                  {/* Absolute Right Code */}
                  <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[9px] font-mono text-zinc-400 font-medium tracking-wider">
                    UNTAD.TI.24
                  </div>
                </div>

                {/* Photo Viewport */}
                <div className="aspect-[4/4.3] relative w-full bg-zinc-100 overflow-hidden">
                  <Image
                    src="/alif.jpeg"
                    alt={personalInfo.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 320px"
                    className="object-cover object-center filter grayscale contrast-105 group-hover:grayscale-0 transition-all duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]"
                    priority
                  />
                  {/* Subtle Inset Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />

                  {/* Corner Badges on Photo */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-white text-xs font-mono">
                    <span className="bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-[10px] border border-white/10">
                      Tadulako Univ
                    </span>
                    <span className="flex items-center gap-1.5 bg-emerald-950/80 text-emerald-300 backdrop-blur-md px-2 py-0.5 rounded border border-emerald-500/30 text-[10px] font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      ACTIVE
                    </span>
                  </div>
                </div>

                {/* Card Identity Footer */}
                <div className="p-3.5 bg-white border-t border-zinc-100">
                  <div className="flex items-start justify-between gap-2.5">
                    <div>
                      <p className="text-sm font-black text-zinc-950 tracking-tight leading-snug">Alif Apriansyah</p>
                      <p className="text-[10.5px] text-zinc-500 font-mono mt-0.5 leading-snug">
                        Staff Penalaran Keilmuan <span className="text-zinc-700 font-semibold">HMTI Untad</span>
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-[9px] font-mono text-zinc-400 block uppercase font-semibold">ROLE</span>
                      <span className="text-xs font-bold text-zinc-900 font-mono">Web Mentor</span>
                    </div>
                  </div>

                  {/* Clean Monospaced Spec Strip (No emojis) */}
                  <div className="mt-2.5 pt-2 border-t border-zinc-100 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                    <span className="text-zinc-600 font-semibold">[LARAVEL · GO]</span>
                    <span className="text-zinc-400">PALU, ID</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Stat Counters */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 sm:mt-12 pt-8 border-t border-zinc-200">
          <div className="p-5 rounded-xl bg-white border border-zinc-200 hover:border-zinc-400 transition-all shadow-2xs group">
            <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block mb-1 group-hover:text-zinc-600 transition-colors">01 // STATUS</span>
            <span className="text-2xl font-black text-zinc-950">Semester 5</span>
            <span className="text-xs text-zinc-500 block mt-0.5">Teknik Informatika Untad</span>
          </div>
          <div className="p-5 rounded-xl bg-white border border-zinc-200 hover:border-zinc-400 transition-all shadow-2xs group">
            <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block mb-1 group-hover:text-zinc-600 transition-colors">02 // PROJECTS</span>
            <span className="text-2xl font-black text-zinc-950">{projects.length}+ Karya</span>
            <span className="text-xs text-zinc-500 block mt-0.5">WebGIS, AI, IoT, Flutter, Go</span>
          </div>
          <div className="p-5 rounded-xl bg-white border border-zinc-200 hover:border-zinc-400 transition-all shadow-2xs group">
            <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block mb-1 group-hover:text-zinc-600 transition-colors">03 // ORGANISASI</span>
            <span className="text-2xl font-black text-zinc-950">HMTI Untad</span>
            <span className="text-xs text-zinc-500 block mt-0.5">Divisi Penalaran Keilmuan</span>
          </div>
          <div className="p-5 rounded-xl bg-white border border-zinc-200 hover:border-zinc-400 transition-all shadow-2xs group">
            <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block mb-1 group-hover:text-zinc-600 transition-colors">04 // RISET LOMBA</span>
            <span className="text-2xl font-black text-zinc-950">LIDM 2025</span>
            <span className="text-xs text-zinc-500 block mt-0.5">Ketua Tim SIFOKUS IoT</span>
          </div>
        </div>
      </div>
    </section>
  );
}
