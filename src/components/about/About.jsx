"use client";

import React from "react";
import { motion } from "framer-motion";
import AboutLeft from "./AboutLeft";

const container = {
  hidden: { opacity: 0, y: 80, scale: 0.96, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.25, 0.8, 0.25, 1],
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const About = () => {
  return (
    <motion.section
      id="about"
      className="mb-40 max-w-7xl w-full mx-auto px-5"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.4 }} // 👈 40% trigger (your requirement)
    >
      <motion.h2
        variants={item}
        className="mb-15 sm:mb-25 lg:mb-20 text-5xl text-gradient font-bold text-center"
      >
        About Me
      </motion.h2>

      <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-y-15 sm:gap-y-20 lg:gap-15">
        <motion.div variants={item} className="w-2/3">
          <AboutLeft />
        </motion.div>

        <motion.div variants={item} className="p-3 glass-1 rounded-xl text-lg">
          <div className="space-y-4">
            <p>
              I&apos;m currently a first-year Chemistry student and a passionate{" "}
              <strong className="text-[#00D4FF]">
                MERN-Stack Web Developer
              </strong>{" "}
              focused on building modern, scalable web applications with clean
              UI and powerful backend systems.
            </p>

            <p>
              When I&apos;m not building things, I&apos;m exploring new
              technologies, contributing to open source, or sharpening my
              problem-solving skills.
            </p>

            <p>
              I believe in shipping work over perfection and improving through
              real experience. Outside coding, I stay disciplined with football
              and gym, which keeps me balanced and focused.
            </p>

            <p>
              My long-term vision is to{" "}
              <strong className="text-[#00D4FF]">
                master AI and build intelligent web applications
              </strong>
              .
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
