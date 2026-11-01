"use client";

import { useEffect, useState, useCallback } from "react";

interface Greeting {
  text: string;
  lang: string;
}

const greetings: Greeting[] = [
  { text: "Halo", lang: "Indonesia" },
  { text: "Hello", lang: "English" },
  { text: "Bonjour", lang: "Français" },
  { text: "Hola", lang: "Español" },
  { text: "Ciao", lang: "Italiano" },
  { text: "こんにちは", lang: "日本語 (Japanese)" },
  { text: "Tabe'", lang: "Kaili-Bugis · Palu" },
];

export default function Preloader() {
  const [index, setIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [mounted, setMounted] = useState(false);

  const handleFinish = useCallback(() => {
    setIsExiting(true);
    setTimeout(() => {
      setIsFinished(true);
      document.body.style.overflow = "";
      document.body.classList.remove("is-preloading");
      window.dispatchEvent(new Event("preloaderFinished"));
    }, 750);
  }, []);

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = "hidden";
    document.body.classList.add("is-preloading");

    // Cycle through greetings with crisp, rhythmic pacing (150ms)
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev < greetings.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          // Brief pause on regional identity (Tabe' · Palu) then silky curtain rise
          setTimeout(() => {
            handleFinish();
          }, 240);
          return prev;
        }
      });
    }, 150);

    // Keyboard escape to skip immediately
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
        handleFinish();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearInterval(interval);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      document.body.classList.remove("is-preloading");
    };
  }, [handleFinish]);

  if (!mounted || isFinished) return null;

  return (
    <aside
      aria-label="Welcome screen"
      onClick={handleFinish}
      style={{
        transform: isExiting ? "translateY(-100%)" : "translateY(0%)",
        transition: "transform 0.75s cubic-bezier(0.76, 0, 0.24, 1), border-radius 0.75s cubic-bezier(0.76, 0, 0.24, 1)",
      }}
      className={`fixed inset-0 z-[9999] bg-zinc-950 text-white flex flex-col justify-between p-6 sm:p-12 cursor-pointer select-none overflow-hidden ${
        isExiting ? "rounded-b-[50%_120px] sm:rounded-b-[50%_180px] pointer-events-none" : "rounded-none"
      }`}
    >
      {/* Top Header Information */}
      <div className="flex items-center justify-end w-full max-w-5xl mx-auto">
        <div className="text-[11px] font-mono text-zinc-500">
          [{String(index + 1).padStart(2, "0")} / {String(greetings.length).padStart(2, "0")}]
        </div>
      </div>

      {/* Cinematic Greeting Display */}
      <div className="flex flex-col items-center justify-center text-center my-auto">
        <p className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white transition-all duration-100 flex items-center justify-center">
          <span>{greetings[index].text}</span>
          <span className="text-zinc-600 ml-1">.</span>
        </p>

        <p className="text-xs sm:text-sm font-mono text-zinc-400 mt-3 transition-opacity duration-100">
          {greetings[index].lang}
        </p>
      </div>

      {/* Bottom Hint & Location */}
      <div className="flex items-center justify-between w-full max-w-5xl mx-auto text-[11px] font-mono text-zinc-500">
        <span className="hover:text-zinc-300 transition-colors ml-auto">
          Klik atau spasi untuk lewati ↵
        </span>
      </div>
    </aside>
  );
}
