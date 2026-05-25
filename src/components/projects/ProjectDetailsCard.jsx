"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@heroui/react";
import { Code, ExternalLink } from "lucide-react";
import Link from "next/link";
import { FaRoadBarrier } from "react-icons/fa6";
import { IoIosRocket } from "react-icons/io";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";

const ProjectDetailsCard = ({ expectedProject }) => {
  const project = expectedProject;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex flex-col gap-y-10"
    >
      {/* image */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative group mx-auto"
      >
        <Image
          src={project.image}
          alt={project.name}
          width={1000}
          height={500}
          className="rounded-3xl object-cover w-full h-full border border-white/10 transition duration-700 group-hover:scale-[1.03]"
        />
      </motion.div>

      {/* details */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="p-6 rounded-3xl glass-1 border border-white/10"
      >
        {/* title */}
        <h2 className="text-4xl font-bold text-white mb-4">{project.name}</h2>

        {/* description */}
        <p className="text-white/70 leading-relaxed mb-6">
          {project.description}
        </p>

        {/* tech stack */}
        <div className="mb-6">
          <h4 className="mb-3 text-lg flex gap-3 items-center">
            <HiMiniWrenchScrewdriver className="text-[#6366f1]" />{" "}
            <span className="font-semibold text-white">Tech Stack</span>
          </h4>

          <div className="flex flex-wrap gap-3">
            {project.skills.map((skill, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-3 py-1 glass-1 rounded-full"
              >
                <Image
                  src={skill.skillImage}
                  alt={skill.skillName}
                  width={18}
                  height={18}
                />

                <span className="text-sm text-white">{skill.skillName}</span>
              </div>
            ))}
          </div>
        </div>

        {/* repo link */}
        <div className="flex flex-wrap gap-4 mb-8">
          <Link href={project?.liveLink} target="_blank">
            <Button className="bg-[#00d4ff]/10 border border-[#00d4ff] text-[#00d4ff]">
              Live Preview <ExternalLink size={18} />
            </Button>
          </Link>

          <Link href={project?.repoLink} target="_blank">
            <Button className="bg-[#a855f7]/10 border border-[#a855f7] text-[#a855f7]">
              Code <Code size={18} />
            </Button>
          </Link>
        </div>

        {/* challenges */}
        <div className="mb-6">
          <h4 className="mb-2 text-lg flex gap-3 items-center">
            <FaRoadBarrier className="text-red-500" />{" "}
            <span className=" font-semibold text-white">Challenges</span>
          </h4>

          <ul className="list-disc list-inside text-white/70 space-y-1">
            {project.challenges?.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* future plans */}
        <div>
          <h4 className="mb-2 text-lg flex gap-3 items-center">
            <IoIosRocket className="text-green-500" />{" "}
            <span className="font-semibold text-white">
              Future Improvements
            </span>
          </h4>

          <ul className="list-disc list-inside text-white/70 space-y-1">
            {project.futurePlans?.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetailsCard;
