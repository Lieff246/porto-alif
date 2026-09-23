"use client";

import { useEffect, useState } from "react";

export default function CursorSpotlight() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [trailPos, setTrailPos] = useState({ x: -1000, y: -1000 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      setMousePos({ x: e.clientX, y: e.clientY });

      // Check if hovering over clickable elements
      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable = Boolean(
          target.closest("a, button, [role='button'], input, textarea, select")
        );
        setIsPointer(isClickable);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Smooth lerp trailing cursor follower (like bc.sultengprov.go.id)
    let currentX = -1000;
    let currentY = -1000;

    const render = () => {
      currentX += (mousePos.x - currentX) * 0.15;
      currentY += (mousePos.y - currentY) * 0.15;
      setTrailPos({ x: currentX, y: currentY });
      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePos.x, mousePos.y]);

  if (!isVisible) return null;

  return (
    <>
      {/* 1. Large Ambient Background Spotlight that follows mouse */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden md:block"
        style={{
          background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(14, 116, 144, 0.07), rgba(16, 185, 129, 0.04) 35%, transparent 75%)`,
        }}
      />

      {/* 2. Trailing Smooth Cursor Circle (like bc.sultengprov.go.id) */}
      <div
        className={`pointer-events-none fixed z-50 rounded-full border border-zinc-800/60 hidden md:block transition-transform duration-75 ${
          isPointer
            ? "w-12 h-12 bg-emerald-500/10 border-emerald-600 scale-125"
            : "w-8 h-8 scale-100"
        }`}
        style={{
          left: `${trailPos.x}px`,
          top: `${trailPos.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* 3. Sharp Center Micro Dot */}
      <div
        className="pointer-events-none fixed z-50 w-2 h-2 rounded-full bg-zinc-900 hidden md:block"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      />
    </>
  );
}
