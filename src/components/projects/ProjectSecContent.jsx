"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Button } from "@heroui/react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const container = {
  hidden: { opacity: 0, y: 10, scale: 0.96, filter: "blur(10px)" },
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

const ProjectSecContent = ({ projects }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.section
      ref={ref}
      id="projects"
      className="my-20 max-w-7xl w-full mx-auto px-5 overflow-x-hidden"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      suppressHydrationWarning
    >
      <motion.h2 className="mb-15 sm:mb-25 lg:mb-20 text-5xl text-gradient font-bold text-center">
        Featured Work
      </motion.h2>

      <div className="py-5 space-y-15 overflow-hidden relative">
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className="grid grid-cols lg:grid-rows gap-y-5 lg:grid-cols-7 items-center"
            >
              {/* left card */}
              <motion.div
                initial={{ opacity: 0, x: -80, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: false, amount: 0.3 }}
                className="lg:col-span-3 p-4 relative overflow-hidden rounded-2xl glass-1 w-full h-full"
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  width={600}
                  height={400}
                  className="rounded-2xl object-cover w-full h-full border border-white/10 transition-transform duration-700 hover:scale-[1.05]"
                />
              </motion.div>

              {/* center scroll bar */}
              <div className="hidden lg:block col-span-1">
                <div className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 h-full w-1 bg-white/10">
                  <motion.div
                    style={{ scaleY }}
                    className="origin-top w-full h-full bg-[#00d4ff] rounded-full shadow-[0_0_2px_#00d4ff,0_0_40px_#00d4ff]"
                  />
                </div>
              </div>

              {/* right card */}
              <motion.div
                initial={{ opacity: 0, x: 80, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: false, amount: 0.3 }}
                className="lg:col-span-3 p-5 bg-white/5 backdrop-blur-3xl border border-white/10 shadow-3xl rounded-2xl h-full"
              >
                <h3 className="text-3xl font-bold text-white mb-4">
                  {project?.name}
                </h3>

                <p className="leading-relaxed line-clamp-2 text-base">
                  {project?.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  {project.skills.map((skill, index) => (
                    <div
                      key={index}
                      className="px-3 py-1 glass-1 rounded-full flex gap-2 items-center"
                    >
                      <Image
                        src={skill?.skillImage}
                        alt={skill?.skillName}
                        width={20}
                        height={20}
                      />

                      <span className="text-white text-sm">
                        {skill?.skillName}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex justify-end">
                  <Link href={`/project-details/${project?.name}`}>
                    <Button className="h-auto px-6 py-2 bg-[#00d4ff]/10 border border-[#00d4ff] text-[#00d4ff] text-md">
                      View More <ArrowUpRight size={18} />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default ProjectSecContent;
