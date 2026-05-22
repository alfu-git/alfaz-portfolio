"use client";

import React from "react";
import { motion } from "framer-motion";
import SkillsProgressBar from "./SkillsProgressBar";
import SkillsMarquee from "./SkillsMarquee";
import dynamic from "next/dynamic";

const SkillsWorld = dynamic(() => import("./SkillsWorld"), {
  ssr: false,
});

const sectionVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.25, 0.8, 0.25, 1] },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="my-30 max-w-7xl w-full mx-auto px-5">
      {/* Heading FIRST (isolated animation) */}

      {/* WORLD */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="mb-15 sm:mb-25 lg:mb-10 text-5xl text-gradient font-bold text-center">
          My Skills
        </h2>
        <SkillsWorld />
      </motion.div>

      {/* MARQUEE (hidden until scroll reach) */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <SkillsMarquee />
      </motion.div>

      {/* PROGRESS (last reveal) */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <SkillsProgressBar />
      </motion.div>
    </section>
  );
};

export default Skills;
