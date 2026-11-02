"use client";

import { useEffect, ReactNode } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    // Inisialisasi Lenis dengan fisika inersia (momentum & glide coasting)
    const lenis = new Lenis({
      duration: 1.25, // Waktu deselerasi meluncur
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Kurva exponential ease-out seperti Apple / muhfarizzi.tech
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.2,
      infinite: false,
    });

    // RequestAnimationFrame Loop agar frame pergerakan sinkron dengan refresh rate monitor (60Hz / 120Hz / 144Hz)
    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Intersepsi navigasi anchor link (seperti #about, #projects, #experience, #skills, #contact)
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;
      const href = target.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          e.preventDefault();
          lenis.scrollTo(targetElement as HTMLElement, {
            offset: -40,
            duration: 1.3,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    // Deteksi jika modal terbuka (overflow: hidden pada body) untuk pause/resume Lenis
    const observer = new MutationObserver(() => {
      if (document.body.style.overflow === "hidden") {
        lenis.stop();
      } else {
        lenis.start();
      }
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["style"],
    });

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", handleAnchorClick);
      observer.disconnect();
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}

