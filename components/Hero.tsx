"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { personalInfo, projects } from "@/data/portfolio";
import { ArrowDown, ExternalLink, Terminal, Mail, Check } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/Icons";
import Magnetic from "@/components/Magnetic";

const roles = [
  "Web & WebGIS Developer",
  "Backend Engineer",
  "Flutter Mobile Developer",
  "AI & Vision Explorer",
];

const cardRoles = [
  {
    title: "PJ Penalaran Keilmuan",
    org: "HMTI Untad",
    badge: "Pengurus",
    spec: "Laravel, Go, Next.js",
  },
  {
    title: "Web Programming Mentor",
    org: "Programming Tadulako",
    badge: "Mentor",
    spec: "HTML, CSS, JS, Go",
  },
];

export default function Hero() {
  const cardRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | null>(null);

  // Theatrical cascading entrance after preloader curtain lifts
  const [heroReady, setHeroReady] = useState(false);

  useEffect(() => {
    const isPreloading =
      typeof document !== "undefined" && document.body.classList.contains("is-preloading");

    if (!isPreloading) {
      setHeroReady(true);
      return;
    }

    const onFinish = () => {
      setTimeout(() => setHeroReady(true), 60);
    };

    window.addEventListener("preloaderFinished", onFinish);
    return () => window.removeEventListener("preloaderFinished", onFinish);
  }, []);

  // ID Card dynamic role switcher
  const [cardRoleIndex, setCardRoleIndex] = useState(0);
  const [isRoleFading, setIsRoleFading] = useState(false);

  // Copy email with tooltip feedback
  const [copiedEmail, setCopiedEmail] = useState(false);
  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(personalInfo.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } else {
      window.location.href = `mailto:${personalInfo.email}`;
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setIsRoleFading(true);
      setTimeout(() => {
        setCardRoleIndex((prev) => (prev + 1) % cardRoles.length);
        setIsRoleFading(false);
      }, 180);
    }, 3600);
    return () => clearInterval(timer);
  }, []);

  const handleCardClick = () => {
    setIsRoleFading(true);
    setTimeout(() => {
      setCardRoleIndex((prev) => (prev + 1) % cardRoles.length);
      setIsRoleFading(false);
    }, 120);
  };

  const currentCardRole = cardRoles[cardRoleIndex];

  // Dynamic Vertical Rolling Role Ticker
  const [roleIndex, setRoleIndex] = useState(0);
  const [isRoleChanging, setIsRoleChanging] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsRoleChanging(true);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setIsRoleChanging(false);
      }, 200);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  // Ultra-Smooth Hardware-Accelerated Pendulum Mouse Physics for ID card
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    if (rafId.current) cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(() => {
      if (cardRef.current) {
        const rotY = x * 8;
        const rotX = -y * 6;
        const rotZ = x * 2.5;
        cardRef.current.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) rotateZ(${rotZ}deg) translateY(-4px)`;
      }
    });
  };

  const handleMouseLeave = () => {
    if (rafId.current) cancelAnimationFrame(rafId.current);
    if (cardRef.current) {
      cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) rotateZ(2.5deg) translateY(0px)`;
    }
  };

  return (
    <section id="about" className="relative pt-16 pb-8 sm:pt-20 sm:pb-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Main Hero Narrative */}
          <div className="lg:col-span-7 space-y-4">
            <div className={`space-y-1.5 hero-cascade-1 ${heroReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-zinc-950 leading-[1.1]">
                Alif Apriansyah.
              </h1>

              {/* Dynamic Vertical Rolling Role */}
              <div className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 flex items-center gap-2.5 pt-1">
                <span className="text-zinc-400 font-normal">I'm a</span>
                <span className="text-zinc-950 font-black border-b-2 border-zinc-950 pb-0.5 inline-flex items-center min-h-[32px] overflow-hidden">
                  <span
                    className={`inline-block transition-all duration-200 transform ${
                      isRoleChanging
                        ? "opacity-0 -translate-y-2.5"
                        : "opacity-100 translate-y-0"
                    }`}
                  >
                    {roles[roleIndex]}
                  </span>
                </span>
              </div>
            </div>

            <p className={`text-sm sm:text-base text-zinc-600 leading-relaxed font-normal max-w-xl pt-1 hero-cascade-2 ${heroReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}>
              Informatics student at{" "}
              <span className="text-zinc-950 font-semibold">Universitas Tadulako</span> who loves building things for the screen. Passionate about software craftsmanship and mentoring fellow students in Palu, Indonesia.
            </p>

            {/* Quick Interactive Actions & Social Row with Magnetic Physics */}
            <div className={`flex flex-wrap items-center gap-2 sm:gap-3 pt-1 hero-cascade-3 ${heroReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}>
              <Magnetic strength={0.25}>
                <a
                  href="#projects"
                  className="group inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white font-semibold text-sm transition-all shadow-sm hover:shadow active:scale-95"
                >
                  <span>Lihat Project</span>
                  <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                </a>
              </Magnetic>

              <Magnetic strength={0.22}>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="inline-flex items-center justify-center gap-2 p-2.5 sm:px-4 sm:py-2.5 rounded-xl bg-white hover:bg-zinc-50 text-zinc-900 border border-zinc-200 text-sm font-semibold transition-all shadow-2xs active:scale-95"
                  title="GitHub @Lieff246"
                >
                  <GithubIcon className="w-4 h-4 shrink-0" />
                  <span className="hidden sm:inline">GitHub @Lieff246</span>
                  <ExternalLink className="hidden sm:inline w-3.5 h-3.5 text-zinc-400" />
                </a>
              </Magnetic>

              {/* Social Quick Connect */}
              <div className="flex items-center gap-2 sm:gap-1.5 sm:pl-2 sm:border-l sm:border-zinc-200">
                {personalInfo.linkedin && (
                  <Magnetic strength={0.35}>
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-white hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950 border border-zinc-200 transition-all shadow-2xs active:scale-95 inline-flex items-center justify-center"
                      title="LinkedIn Alif Apriansyah"
                    >
                      <LinkedinIcon className="w-4 h-4" />
                    </a>
                  </Magnetic>
                )}

                {personalInfo.instagram && (
                  <Magnetic strength={0.35}>
                    <a
                      href={personalInfo.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-white hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950 border border-zinc-200 transition-all shadow-2xs active:scale-95 inline-flex items-center justify-center"
                      title="Instagram @alifapriansyah02"
                    >
                      <InstagramIcon className="w-4 h-4" />
                    </a>
                  </Magnetic>
                )}

                <div className="relative inline-flex items-center">
                  <Magnetic strength={0.35}>
                    <button
                      onClick={handleCopyEmail}
                      className="p-2.5 rounded-xl bg-white hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950 border border-zinc-200 transition-all shadow-2xs cursor-pointer active:scale-95 inline-flex items-center justify-center"
                      title="Klik untuk salin alamat email"
                      aria-label="Salin email ke clipboard"
                    >
                      {copiedEmail ? (
                        <Check className="w-4 h-4 text-zinc-950 animate-fadeIn" />
                      ) : (
                        <Mail className="w-4 h-4" />
                      )}
                    </button>
                  </Magnetic>

                  {/* Tooltip feedback */}
                  {copiedEmail && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 bg-zinc-950 text-white text-[10px] font-mono font-medium rounded-md shadow-lg whitespace-nowrap z-50 pointer-events-none animate-fadeIn">
                      Email tersalin!
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* ID Card with subtle organic tilt and aligned lanyard */}
          <div className={`lg:col-span-5 flex justify-center lg:justify-end hero-cascade-card ${heroReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <div
              ref={cardRef}
              onClick={handleCardClick}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              title="Klik ID Card untuk beralih peran"
              style={{
                transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) rotateZ(2.5deg) translateY(0px)",
                transformOrigin: "top center",
                transition: "transform 450ms cubic-bezier(0.16, 1, 0.3, 1)",
                willChange: "transform",
                backfaceVisibility: "hidden",
              }}
              className="w-full max-w-[280px] sm:max-w-[290px] select-none cursor-pointer flex flex-col items-center"
            >
              {/* Lanyard Fabric Ribbon */}
              <div className="w-6 h-10 sm:h-12 bg-gradient-to-b from-zinc-800/0 via-zinc-900 to-zinc-950 border-x border-zinc-700/60 relative overflow-hidden shadow-xs shrink-0 flex items-center justify-center">
                <div className="absolute inset-y-0 left-0.5 w-[1px] border-r border-dashed border-zinc-500/40" />
                <div className="absolute inset-y-0 right-0.5 w-[1px] border-l border-dashed border-zinc-500/40" />
                <div className="w-1 h-full bg-zinc-800/60" />
              </div>

              {/* Metallic Crimp / End Clamp */}
              <div className="w-7 h-2.5 rounded-[2px] bg-gradient-to-r from-zinc-400 via-zinc-100 to-zinc-400 border border-zinc-400/80 shadow-xs z-30 -mt-0.5 shrink-0 flex items-center justify-center">
                <div className="w-4 h-[1px] bg-zinc-400/70" />
              </div>

              {/* Silver Swivel Ring & Clasp */}
              <div className="flex flex-col items-center -mt-0.5 z-30 shrink-0">
                <div className="w-3.5 h-3.5 rounded-full border-2 border-zinc-300 bg-transparent shadow-xs" />
                <div className="w-3 h-3 bg-gradient-to-b from-zinc-300 via-zinc-100 to-zinc-400 rounded-xs border border-zinc-400 shadow-xs -mt-1" />
                <div className="w-2.5 h-3.5 bg-gradient-to-b from-zinc-300 via-zinc-200 to-zinc-400 rounded-b-xs border-x border-b border-zinc-400/90 shadow-xs -mt-0.5" />
              </div>

              {/* ID Card Body */}
              <div className="w-full -mt-1.5 group relative rounded-2xl overflow-hidden border border-zinc-200/90 bg-white shadow-xl shadow-zinc-900/8 hover:shadow-2xl hover:shadow-zinc-900/12 transition-shadow duration-500">
                {/* ID Badge Top Header */}
                <div className="pt-3 pb-2.5 px-4 bg-zinc-50/90 border-b border-zinc-100 relative">
                  <div className="absolute left-3.5 top-1/2 -translate-y-1/2 flex items-center gap-1.5 text-[9px] font-mono text-zinc-500 font-medium">
                    <span>Informatika</span>
                  </div>

                  {/* Centered Slot Hole */}
                  <div className="flex items-center justify-center">
                    <div className="w-9 h-2 rounded-full bg-zinc-200/90 border border-zinc-300/90 shadow-inner relative flex items-center justify-center">
                      <div className="w-2 h-1.5 rounded-xs bg-gradient-to-b from-zinc-400 to-zinc-500 opacity-80" />
                    </div>
                  </div>

                  <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[9px] font-mono text-zinc-500 font-medium tracking-wider">
                    Untad 2024
                  </div>
                </div>

                {/* Photo Viewport - Natural Color Photo */}
                <div className="aspect-[4/4.3] relative w-full bg-zinc-100 overflow-hidden">
                  <Image
                    src="/alif.jpeg"
                    alt={personalInfo.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 320px"
                    className="object-cover object-center contrast-105 transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  {/* Subtle Corner Badge */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-white text-xs font-mono">
                    <span className="bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-[10px] border border-white/10">
                      Tadulako Univ
                    </span>
                  </div>
                </div>

                {/* Card Identity Footer */}
                <div className="p-3.5 bg-white border-t border-zinc-100">
                  <div className="flex items-start justify-between gap-2.5">
                    <div className="min-h-[46px] flex-1">
                      <p className="text-sm font-black text-zinc-950 tracking-tight leading-snug">
                        Alif Apriansyah
                      </p>
                      <div
                        className={`transition-all duration-200 transform ${
                          isRoleFading
                            ? "opacity-0 -translate-y-0.5"
                            : "opacity-100 translate-y-0"
                        }`}
                      >
                        <div className="text-[10px] text-zinc-500 font-mono mt-0.5 leading-snug">
                          <p className="text-zinc-500">{currentCardRole.title}</p>
                          <p className="text-zinc-800 font-semibold">{currentCardRole.org}</p>
                        </div>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-[9px] font-mono text-zinc-400 block uppercase font-semibold">
                        Peran
                      </span>
                      <div
                        className={`transition-all duration-200 transform ${
                          isRoleFading
                            ? "opacity-0 scale-95"
                            : "opacity-100 scale-100"
                        }`}
                      >
                        <span className="text-xs font-bold text-zinc-900 font-mono">
                          {currentCardRole.badge}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Clean Spec Strip */}
                  <div className="mt-2.5 pt-2 border-t border-zinc-100 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                    <span
                      className={`font-semibold text-zinc-600 transition-opacity duration-200 ${
                        isRoleFading ? "opacity-0" : "opacity-100"
                      }`}
                    >
                      {currentCardRole.spec}
                    </span>

                    {/* Dot indicator */}
                    <div
                      className="flex items-center gap-1.5"
                      title="Klik kartu untuk beralih peran"
                    >
                      {cardRoles.map((_, i) => (
                        <span
                          key={i}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            i === cardRoleIndex
                              ? "w-3.5 bg-zinc-900"
                              : "w-1.5 bg-zinc-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Editorial Overview: Asymmetric Focus Anchor & Proof Matrix */}
        <div className={`mt-10 sm:mt-12 pt-8 border-t border-zinc-200 hero-cascade-matrix ${heroReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 rounded-xl border border-zinc-200 bg-white overflow-hidden shadow-2xs divide-y lg:divide-y-0 lg:divide-x divide-zinc-200">
            {/* 5-col: Academic & Focus Anchor */}
            <div className="lg:col-span-5 p-5 sm:p-6 flex flex-col justify-between bg-zinc-50/40">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-zinc-950 tracking-tight">
                  Teknik Informatika · Angkatan 2024
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 mt-1.5 leading-relaxed">
                  Fokus pada rekayasa backend, arsitektur web modern, dan sistem WebGIS di Universitas Tadulako.
                </p>
              </div>
              <div className="pt-4 text-xs font-mono text-zinc-500">
                Palu, Sulawesi Tengah
              </div>
            </div>

            {/* 7-col: 3-cell Data Proof Matrix */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-zinc-200">
              <div className="p-4 sm:p-5 hover:bg-zinc-50/60 transition-colors">
                <span className="text-[11px] font-mono text-zinc-400 block mb-1">
                  PROJECTS
                </span>
                <p className="text-xl sm:text-2xl font-black text-zinc-950 tracking-tight">
                  {projects.length}+ Karya
                </p>
                <p className="text-xs text-zinc-500 mt-1">
                  Web, Mobile, Backend &amp; AI
                </p>
              </div>

              <div className="p-4 sm:p-5 hover:bg-zinc-50/60 transition-colors">
                <span className="text-[11px] font-mono text-zinc-400 block mb-1">
                  KONTRIBUSI
                </span>
                <p className="text-lg sm:text-xl font-bold text-zinc-950 tracking-tight">
                  Mentor &amp; Pengurus
                </p>
                <p className="text-xs text-zinc-500 mt-1">
                  HMTI Untad &amp; Programming Tadulako
                </p>
              </div>

              <div className="p-4 sm:p-5 hover:bg-zinc-50/60 transition-colors">
                <span className="text-[11px] font-mono text-zinc-400 block mb-1">
                  KOMPETISI
                </span>
                <p className="text-lg sm:text-xl font-bold text-zinc-950 tracking-tight">
                  LIDM &amp; Gemastik
                </p>
                <p className="text-xs text-zinc-500 mt-1">
                  SIFOKUS &amp; Pemuda Vimral
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
