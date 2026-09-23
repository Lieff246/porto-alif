"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { personalInfo, projects } from "@/data/portfolio";
import { MapPin, Sparkles, Mail, ArrowDown, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function Hero() {
  const [timeString, setTimeString] = useState<string>("WITA --:--:--");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const wita = new Date(utc + 3600000 * 8);
      const h = String(wita.getHours()).padStart(2, "0");
      const m = String(wita.getMinutes()).padStart(2, "0");
      const s = String(wita.getSeconds()).padStart(2, "0");
      setTimeString(`WITA ${h}:${m}:${s}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="pt-32 pb-20 sm:pt-40 sm:pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top Status & Live Clock Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-zinc-200 text-zinc-700 text-xs font-mono shadow-2xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-medium">{personalInfo.status}</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-50 border border-zinc-200 text-xs font-mono text-zinc-700 shadow-2xs">
            <span className="font-bold text-zinc-950">{timeString}</span>
            <span className="text-zinc-300">|</span>
            <span>Palu, Sulawesi Tengah</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-3">
              <div className="inline-block px-2.5 py-0.5 rounded bg-zinc-100 border border-zinc-200 text-zinc-700 text-xs font-mono uppercase tracking-wider font-semibold">
                Informatics Student &amp; Builder
              </div>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-zinc-950 leading-none">
                ALIF<span className="text-zinc-400">.</span>
              </h1>
            </div>

            <p className="text-xl sm:text-2xl text-zinc-900 font-extrabold tracking-tight leading-snug">
              Building resilient backends, WebGIS, and spatial systems from Palu.
            </p>

            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal max-w-2xl">
              Software engineer focused on scalable web architecture, spatial data processing, and clean backend design. Experienced in crafting robust services with{" "}
              <span className="text-zinc-950 font-semibold underline decoration-zinc-300 underline-offset-4">
                Laravel &amp; Go
              </span>
              , while mentoring the next wave of builders at{" "}
              <span className="text-zinc-950 font-semibold">Tadulako</span>.
            </p>

            {/* Quick Metadata */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-600 pt-1">
              <div className="flex items-center gap-1.5 bg-white border border-zinc-200 px-3 py-1.5 rounded-lg shadow-2xs">
                <MapPin className="w-3.5 h-3.5 text-zinc-700" />
                <span>Palu, Indonesia</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white border border-zinc-200 px-3 py-1.5 rounded-lg shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Untad TI '24 · Semester 5</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white font-semibold text-sm transition-all shadow-sm hover:shadow"
              >
                <span>Lihat Project [{String(projects.length).padStart(2, "0")}]</span>
                <ArrowDown className="w-4 h-4" />
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
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-zinc-50 text-zinc-700 hover:text-zinc-950 border border-zinc-200 text-sm font-semibold transition-all shadow-2xs"
              >
                <Mail className="w-4 h-4" />
                <span>Kontak Email</span>
              </a>
            </div>
          </div>

          {/* Profile Photo Card */}
          <div className="lg:col-span-4 flex flex-col items-center sm:items-start lg:items-end">
            <div className="relative group w-full max-w-xs">
              <div className="relative rounded-2xl overflow-hidden border border-zinc-200 bg-white shadow-md">
                <div className="aspect-square relative w-full bg-zinc-100">
                  <Image
                    src="/alif.jpg"
                    alt={personalInfo.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 320px"
                    className="object-cover object-center filter grayscale contrast-105 group-hover:grayscale-0 transition-all duration-500"
                    priority
                  />
                </div>
                <div className="p-4 border-t border-zinc-100 bg-white">
                  <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 mb-1">
                    <span>STUDENT &amp; BUILDER</span>
                    <span className="text-emerald-700 font-bold">● ACTIVE</span>
                  </div>
                  <p className="text-base font-bold text-zinc-950">Alif Apriansyah</p>
                  <p className="text-xs text-zinc-600 mt-0.5">
                    Staff Penalaran Keilmuan HMTI &amp; Web Mentor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Stat Counters */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-14 pt-10 border-t border-zinc-200">
          <div className="p-5 rounded-xl bg-white border border-zinc-200 shadow-2xs">
            <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block mb-1">01 // STATUS</span>
            <span className="text-2xl font-black text-zinc-950">Semester 5</span>
            <span className="text-xs text-zinc-500 block mt-0.5">Teknik Informatika Untad</span>
          </div>
          <div className="p-5 rounded-xl bg-white border border-zinc-200 shadow-2xs">
            <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block mb-1">02 // PROJECTS</span>
            <span className="text-2xl font-black text-zinc-950">{projects.length}+ Karya</span>
            <span className="text-xs text-zinc-500 block mt-0.5">WebGIS, AI, IoT, Flutter, Go</span>
          </div>
          <div className="p-5 rounded-xl bg-white border border-zinc-200 shadow-2xs">
            <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block mb-1">03 // ORGANISASI</span>
            <span className="text-2xl font-black text-zinc-950">HMTI Untad</span>
            <span className="text-xs text-zinc-500 block mt-0.5">Divisi Penalaran Keilmuan</span>
          </div>
          <div className="p-5 rounded-xl bg-white border border-zinc-200 shadow-2xs">
            <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block mb-1">04 // RISET LOMBA</span>
            <span className="text-2xl font-black text-zinc-950">LIDM 2025</span>
            <span className="text-xs text-zinc-500 block mt-0.5">Ketua Tim SIFOKUS IoT</span>
          </div>
        </div>
      </div>
    </section>
  );
}
