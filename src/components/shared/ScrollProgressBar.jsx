"use client";
import React, { useEffect, useRef } from "react";

const ScrollProgressBar = () => {
  const barRef = useRef(null);
  const glowRef = useRef(null);
  const progressRef = useRef(0);
  let ticking = false;

  useEffect(() => {
    const updateScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrollTop = document.documentElement.scrollTop;

      progressRef.current = (scrollTop / totalHeight) * 100;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const progress = progressRef.current / 100;

          if (barRef.current) {
            barRef.current.style.transform = `scaleX(${progress})`;
          }

          if (glowRef.current) {
            glowRef.current.style.transform = `scaleX(${progress})`;
            glowRef.current.style.opacity = progress > 0 ? 1 : 0;
          }

          ticking = false;
        });
      }
    };

    window.addEventListener("scroll", updateScroll, { passive: true });

    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-9999">
      {/* glow layer */}
      <div
        ref={glowRef}
        className="absolute top-0 left-0 w-full h-full origin-left blur-md"
        style={{
          transform: "scaleX(0)",
          background: "linear-gradient(90deg, #6366f1, #a855f7, #ec4899)",
          transition: "transform 0.15s ease-out, opacity 0.2s ease",
        }}
      />

      {/* main bar */}
      <div
        ref={barRef}
        className="relative w-full h-full origin-left rounded-full"
        style={{
          transform: "scaleX(0)",
          background: "linear-gradient(90deg, #6366f1, #a855f7, #ec4899)",
          boxShadow: "0 0 1px rgba(168, 85, 247, 0.6)",
          transition: "transform 0.15s ease-out",
        }}
      />

      {/* glass overlay line */}
      <div className="absolute top-0 left-0 w-full h-full bg-white/5 backdrop-blur-sm" />
    </div>
  );
};

export default ScrollProgressBar;
