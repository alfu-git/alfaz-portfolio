"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBg() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      particles: {
        number: {
          value: 100,
        },
        shape: {
          type: "circle",
        },
        color: {
          value: ["#ffffff", "#00ffff", "#ff00ff"],
        },
        shadow: {
          enable: true,
          color: "#00ffff",
          blur: 5,
        },
        move: {
          enable: true,
          speed: 0.2,
          direction: "none",
          random: true,
          straight: false,
          outModes: {
            default: "out",
          },
        },
        size: {
          value: { min: 0.5, max: 2 },
        },
        opacity: {
          value: { min: 0.2, max: 0.8 },
        },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "attract" },
          onClick: { enable: true, mode: "repulse" },
        },
        modes: {
          attract: {
            distance: 100,
            duration: 0.1,
          },
          repulse: {
            distance: 150,
            duration: 0.4,
          },
          parallax: {
            enable: true,
            force: 40,
            smooth: 10,
          },
        },
      },
    }),
    [],
  );

  if (!init) return null;

  return (
    <div className="fixed inset-0 -z-10">
      <Particles options={options} />
    </div>
  );
}
