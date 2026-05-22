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

// 🔥 4 → 3 → 2 → 1 chunk logic
const createReverseRows = (arr) => {
  const rows = [];
  let index = 0;
  let rowSize = 5; // 👈 start from 4

  while (index < arr.length) {
    rows.push(arr.slice(index, index + rowSize));
    index += rowSize;
    rowSize = Math.max(1, rowSize - 1); // decrease each row
  }

  return rows;
};

const FloatingSkill = ({ skill, i }) => {
  return (
    <motion.div
      animate={{
        y: [0, -15, 0],
        x: [0, 10, -10, 0],
      }}
      transition={{
        duration: 5 + i,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="p-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_25px_rgba(0,212,255,0.25)] hover:scale-110 transition-all duration-500 ease-in-out cursor-pointer"
    >
      <Image
        src={skill.image}
        alt={skill.name}
        width={40}
        height={40}
        className="w-7 md:w-8 h-7 md:h-8"
      />
    </motion.div>
  );
};

const AnimatedSkills = () => {
  const rows = createReverseRows(skills);

  return (
    <div className="flex flex-col items-center gap-6 py-20">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-6 justify-center">
          {row.map((skill, i) => (
            <FloatingSkill key={skill.name} skill={skill} i={rowIndex + i} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedSkills;
