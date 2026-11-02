"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { personalInfo } from "@/data/portfolio";
import { Mail, Menu, X, ArrowUpRight } from "lucide-react";
import { GithubIcon, InstagramIcon } from "@/components/Icons";
import Magnetic from "@/components/Magnetic";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sentinelRef.current || typeof IntersectionObserver === "undefined") return;

    // High-performance IntersectionObserver replaces heavy window scroll listener
    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "-15px 0px 0px 0px",
      }
    );

    observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
  ];

  return (
    <>
      {/* Zero-overhead scroll sentinel for compositor-driven navbar state */}
      <div
        ref={sentinelRef}
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 w-full h-[1px] opacity-0 -z-50"
      />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md border-b border-zinc-200 py-3 shadow-xs"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between relative">
          {/* Brand */}
          <Link
            href="/"
            className="flex items-center gap-2.5 text-zinc-950 font-mono font-bold tracking-tight text-sm sm:text-base group"
          >
            <span>alif</span>
            <span className="text-zinc-400 group-hover:text-zinc-600 transition-colors">
              apriansyah
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 bg-white/80 border border-zinc-200/90 backdrop-blur-md rounded-full px-4 py-1.5 shadow-2xs absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-semibold text-zinc-600 hover:text-zinc-950 px-3 py-1 rounded-full hover:bg-zinc-100/90 active:scale-95 transition-all duration-150 font-mono"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden sm:flex items-center gap-2">
            <Magnetic strength={0.35}>
              <a
                href={personalInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="p-2 rounded-lg text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 border border-transparent hover:border-zinc-200 active:scale-95 transition-all duration-150 inline-flex items-center justify-center"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </Magnetic>
            <Magnetic strength={0.35}>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2 rounded-lg text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 border border-transparent hover:border-zinc-200 active:scale-95 transition-all duration-150 inline-flex items-center justify-center"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </Magnetic>
            <Magnetic strength={0.25}>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold bg-zinc-950 hover:bg-zinc-800 text-white px-3.5 py-1.5 rounded-lg transition-all shadow-xs hover:shadow active:scale-95"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Hubungi Saya</span>
              </a>
            </Magnetic>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-zinc-700 hover:text-zinc-950 bg-white border border-zinc-200 shadow-2xs"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-zinc-200 bg-white/95 backdrop-blur-md px-4 py-4 space-y-3">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-zinc-700 hover:text-zinc-950 px-3 py-2 rounded-lg hover:bg-zinc-100 font-mono"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="pt-3 border-t border-zinc-200 flex items-center justify-between gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-zinc-600 hover:text-zinc-950"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub @Lieff246</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold bg-zinc-950 text-white px-3 py-1.5 rounded-lg"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
