"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { personalInfo } from "@/data/portfolio";
import { Mail, Menu, X, ArrowUpRight } from "lucide-react";
import { GithubIcon, InstagramIcon } from "@/components/Icons";
import Magnetic from "@/components/Magnetic";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("about");
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

  // Precision Scrollspy: mendeteksi bagian aktif saat di-scroll
  useEffect(() => {
    if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") return;

    const sectionIds = ["about", "projects", "experience", "skills", "contact"];
    const sectionElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-25% 0px -65% 0px", // Membaca area pandang fokus tengah layar
        threshold: 0,
      }
    );

    sectionElements.forEach((el) => observer.observe(el));

    // Menangani batas atas (Hero) dan batas paling bawah halaman (Contact)
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollY + windowHeight >= documentHeight - 60) {
        setActiveSection("contact");
      } else if (scrollY < 120) {
        setActiveSection("about");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      sectionElements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "About", id: "about", href: "#about" },
    { name: "Projects", id: "projects", href: "#projects" },
    { name: "Experience", id: "experience", href: "#experience" },
    { name: "Skills", id: "skills", href: "#skills" },
    { name: "Contact", id: "contact", href: "#contact" },
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

          {/* Desktop Nav: Active Scrollspy Indicator */}
          <nav className="hidden md:flex items-center gap-1 bg-white/85 border border-zinc-200/90 backdrop-blur-md rounded-full p-1.5 shadow-2xs absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveSection(link.id)}
                  className={`text-xs font-mono font-semibold px-3.5 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-zinc-950 text-white shadow-xs"
                      : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100/90"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
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
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold bg-zinc-950 hover:bg-zinc-800 text-white px-3.5 py-1.5 rounded-lg transition-all shadow-xs hover:shadow active:scale-95"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Hubungi Saya</span>
              </a>
            </Magnetic>
          </div>

          {/* Mobile Status Pill & Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <span className="text-[11px] font-mono font-semibold text-zinc-700 bg-white border border-zinc-200/90 px-2.5 py-1 rounded-full shadow-2xs capitalize">
              {activeSection}
            </span>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-zinc-700 hover:text-zinc-950 bg-white border border-zinc-200 shadow-2xs"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-zinc-200 bg-white/95 backdrop-blur-md px-4 py-4 space-y-3">
            <nav className="flex flex-col space-y-1.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => {
                      setActiveSection(link.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`text-xs font-mono font-semibold px-3.5 py-2 rounded-xl transition-all ${
                      isActive
                        ? "bg-zinc-950 text-white shadow-xs"
                        : "text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
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
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold bg-zinc-950 text-white px-3 py-1.5 rounded-lg"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Kontak</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
