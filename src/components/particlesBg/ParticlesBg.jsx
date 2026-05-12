"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function ParticlesBg() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      detectRetina: true,

      particles: {
        number: {
          value: 50,
        },

        shape: {
          type: "image",
          options: {
            image: [
              {
                src: "/assets/code.png",
                width: 8,
                height: 8,
              },
              {
                src: "/assets/brackets-curly.png",
                width: 8,
                height: 8,
              },
              {
                src: "/assets/bracket-1.png",
                width: 8,
                height: 8,
              },
              {
                src: "/assets/bracket-2.png",
                width: 8,
                height: 8,
              },
            ],
          },
        },

        move: {
          enable: true,
          speed: 0.2,
          direction: "none",
          outModes: {
            default: "out",
          },
        },

        

        rotate: {
          value: { min: 0, max: 360 },
          direction: "random",
          animation: {
            enable: true,
            speed: 3,
          },
        },

        size: {
          value: { min: 2, max: 8 },
        },

        opacity: {
          value: { min: 0.4, max: 0.9 },
          animation: {
            enable: true,
            speed: 0.8,
            sync: false,
          },
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab", // or "grab"
          },
        },
        modes: {
          grab: {
            distance: 100,
            links: {
              opacity: 0.5,
            },
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
