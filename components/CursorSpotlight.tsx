"use client";

import { useEffect, useRef } from "react";

export default function CursorSpotlight() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on non-touch desktop screens
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHovered = false;
    let isVisible = false;
    let rafId: number;

    // Check if preloader is active on initial load
    let isPreloading =
      typeof document !== "undefined" && document.body.classList.contains("is-preloading");

    const onPreloaderFinished = () => {
      isPreloading = false;
      // Once preloader finishes, reveal smoothly if mouse is already in viewport
      if (!isVisible && mouseX > 0 && mouseY > 0) {
        isVisible = true;
        if (dotRef.current) dotRef.current.style.opacity = "1";
        if (ringRef.current) ringRef.current.style.opacity = "1";
        if (spotlightRef.current) spotlightRef.current.style.opacity = "1";
      }
    };
    window.addEventListener("preloaderFinished", onPreloaderFinished);

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (isPreloading) return;

      if (!isVisible) {
        isVisible = true;
        if (dotRef.current) dotRef.current.style.opacity = "1";
        if (ringRef.current) ringRef.current.style.opacity = "1";
        if (spotlightRef.current) spotlightRef.current.style.opacity = "1";
      }

      // Check clickable targets efficiently without triggering re-renders
      const target = e.target as HTMLElement | null;
      isHovered = Boolean(
        target?.closest("a, button, [role='button'], input, textarea, select, .cursor-pointer")
      );
    };

    const onMouseLeave = () => {
      isVisible = false;
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
      if (spotlightRef.current) spotlightRef.current.style.opacity = "0";
    };

    const onMouseEnter = () => {
      if (isPreloading) return;
      isVisible = true;
      if (dotRef.current) dotRef.current.style.opacity = "1";
      if (ringRef.current) ringRef.current.style.opacity = "1";
      if (spotlightRef.current) spotlightRef.current.style.opacity = "1";
    };

    // 144Hz Hardware-accelerated fluid Lerp Loop (Zero React overhead)
    const loop = () => {
      // 0.11 Lerp coefficient = luxurious fluid trailing delay with silky settling
      ringX += (mouseX - ringX) * 0.11;
      ringY += (mouseY - ringY) * 0.11;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }

      if (ringRef.current) {
        const scale = isHovered ? "scale(1.45)" : "scale(1)";
        const borderColor = isHovered ? "rgba(16, 185, 129, 0.7)" : "rgba(24, 24, 27, 0.45)";
        const bg = isHovered ? "rgba(16, 185, 129, 0.08)" : "transparent";

        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) ${scale}`;
        ringRef.current.style.borderColor = borderColor;
        ringRef.current.style.backgroundColor = bg;
      }

      if (spotlightRef.current) {
        spotlightRef.current.style.background = `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(16, 185, 129, 0.04), transparent 70%)`;
      }

      rafId = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      window.removeEventListener("preloaderFinished", onPreloaderFinished);
      cancelAnimationFrame(rafId);
    };
  }, []); // Run once on mount

  return (
    <>
      {/* 1. Large Ambient Background Spotlight */}
      <div
        ref={spotlightRef}
        data-cursor-spotlight
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-30 opacity-0 transition-opacity duration-500 hidden md:block"
        style={{ willChange: "background" }}
      />

      {/* 2. Trailing Smooth Ring Follower */}
      <div
        ref={ringRef}
        data-cursor-spotlight
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[999999] w-8 h-8 rounded-full border border-zinc-900/40 opacity-0 hidden md:block"
        style={{
          willChange: "transform, border-color, background-color",
          transition: "opacity 300ms ease, border-color 200ms ease, background-color 200ms ease",
        }}
      />

      {/* 3. Center Micro Dot (Locked 1:1 to hardware cursor) */}
      <div
        ref={dotRef}
        data-cursor-spotlight
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[999999] w-2 h-2 rounded-full bg-zinc-900 opacity-0 hidden md:block"
        style={{
          willChange: "transform",
          transition: "opacity 300ms ease",
        }}
      />
    </>
  );
}
