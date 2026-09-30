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

    let prevMouseX = -100;
    let prevMouseY = -100;
    let prevRingX = -100;
    let prevRingY = -100;

    let isHovered = false;
    let lastHovered = false;
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

    // 144Hz Hardware-accelerated fluid Lerp Loop (Zero Repaints & Zero Style Thrashing)
    const loop = () => {
      // Fluid trailing delay with silky settling
      ringX += (mouseX - ringX) * 0.14;
      ringY += (mouseY - ringY) * 0.14;

      const mouseDelta = Math.abs(mouseX - prevMouseX) + Math.abs(mouseY - prevMouseY);
      const ringDelta = Math.abs(ringX - prevRingX) + Math.abs(ringY - prevRingY);

      // Only perform DOM updates when there is actual movement or hover state change
      if (mouseDelta > 0.05 || ringDelta > 0.05 || isHovered !== lastHovered) {
        prevMouseX = mouseX;
        prevMouseY = mouseY;
        prevRingX = ringX;
        prevRingY = ringY;

        if (dotRef.current) {
          dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
        }

        if (ringRef.current) {
          const scale = isHovered ? "scale(1.45)" : "scale(1)";
          ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) ${scale}`;

          if (isHovered !== lastHovered) {
            ringRef.current.style.borderColor = isHovered ? "rgba(16, 185, 129, 0.7)" : "rgba(24, 24, 27, 0.45)";
            ringRef.current.style.backgroundColor = isHovered ? "rgba(16, 185, 129, 0.08)" : "transparent";
            lastHovered = isHovered;
          }
        }

        // Spotlight is moved purely via GPU transform (0ms CPU raster time, no repaint during scroll)
        if (spotlightRef.current) {
          spotlightRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
        }
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
  }, []);

  return (
    <>
      {/* 1. Large Ambient Background Spotlight (100% GPU-Composited Layer) */}
      <div
        ref={spotlightRef}
        data-cursor-spotlight
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-30 w-[600px] h-[600px] rounded-full opacity-0 transition-opacity duration-500 hidden md:block"
        style={{
          background:
            "radial-gradient(circle, rgba(16, 185, 129, 0.045) 0%, rgba(16, 185, 129, 0.015) 45%, transparent 70%)",
          willChange: "transform",
        }}
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
