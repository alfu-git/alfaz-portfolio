"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
  { name: "HTML", image: "/assets/skills/html.png" },
  { name: "CSS", image: "/assets/skills/css.png" },
  { name: "Tailwind CSS", image: "/assets/skills/tailwind.png" },
  { name: "JavaScript", image: "/assets/skills/javaScript.png" },
  { name: "React", image: "/assets/skills/react.png" },
  { name: "Next.Js", image: "/assets/skills/nextJs.png" },
  { name: "Node.Js", image: "/assets/skills/nodeJs.png" },
  { name: "Express.Js", image: "/assets/skills/expressJs.png" },
  { name: "MongoDB", image: "/assets/skills/mongodb.png" },
  { name: "GitHub", image: "/assets/skills/github.png" },
  { name: "Figma", image: "/assets/skills/figma.png" },
];

const SkillsWorld = () => {
  const radius = 200;

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative w-95 h-95" style={{ perspective: "1200px" }}>
        {/* CORE */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-45 h-45 lg:w-70 lg:h-70 rounded-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 blur-[10px] opacity-70"
            animate={{ scale: [1, 1.1, 1], rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* SPHERE ROTATION */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotateY: 360, rotateX: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {skills.map((skill, i) => {
            const phi = Math.acos(-1 + (2 * i) / skills.length);
            const theta = Math.sqrt(skills.length * Math.PI) * phi;

            const x = radius * Math.cos(theta) * Math.sin(phi);
            const y = radius * Math.sin(theta) * Math.sin(phi);
            const z = radius * Math.cos(phi);

            return (
              <div
                key={skill.name}
                className="absolute top-1/2 left-1/2"
                style={{
                  transform: `translate3d(${x}px, ${y}px, ${z}px)`,
                }}
              >
                <Image
                  src={skill.image}
                  width={42}
                  height={42}
                  alt={skill.name}
                />
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsWorld;
