"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode } from "react-icons/fa6";
import { Server } from "lucide-react";
import { BsTools } from "react-icons/bs";

const SkillsProgressBar = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-5">
      {/* frontend progress */}
      <div className="p-4 glass-2 rounded-xl w-full">
        <h5 className="mb-4 text-2xl text-white flex gap-5 items-center">
          <span className="p-3 bg-[#6366f1]/5 rounded-md text-3xl text-[#6366f1]">
            <FaLaptopCode />
          </span>

          <span className="text-white font-medium">Frontend</span>
        </h5>

        <div className="space-y-4 font-medium">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>HTML/CSS/JS</span>
              <span className="">90%</span>
            </div>

            <div className="w-full h-2 glass-1 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `90%` }}
                transition={{ duration: 2 }}
                viewport={{ once: false }}
                className="h-full bg-linear-to-r from-[#6366F1] via-[#A855F7] to-[#EC4899]"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>React</span>
              <span className="">80%</span>
            </div>

            <div className="w-full h-2 glass-1 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `80%` }}
                transition={{ duration: 2 }}
                viewport={{ once: false }}
                className="h-full bg-linear-to-r from-[#6366F1] via-[#A855F7] to-[#EC4899]"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Next.Js</span>
              <span className="">85%</span>
            </div>

            <div className="w-full h-2 glass-1 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `85%` }}
                transition={{ duration: 2 }}
                viewport={{ once: false }}
                className="h-full bg-linear-to-r from-[#6366F1] via-[#A855F7] to-[#EC4899]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* backend progress */}
      <div className="p-4 glass-2 rounded-xl w-full">
        <h5 className="mb-4 text-2xl text-white flex gap-5 items-center">
          <span className="p-3 bg-[#a855f7]/5 rounded-md text-3xl text-[#a855f7]">
            <Server />
          </span>

          <span className="text-white font-medium">Backend</span>
        </h5>

        <div className="space-y-4  font-medium">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Node.Js</span>
              <span>65%</span>
            </div>

            <div className="w-full h-2 glass-1 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `65%` }}
                transition={{ duration: 2 }}
                viewport={{ once: false }}
                className="h-full bg-linear-to-r from-[#6366F1] via-[#A855F7] to-[#EC4899]"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Express.Js</span>
              <span>78%</span>
            </div>

            <div className="w-full h-2 glass-1 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `78%` }}
                transition={{ duration: 2 }}
                viewport={{ once: false }}
                className="h-full bg-linear-to-r from-[#6366F1] via-[#A855F7] to-[#EC4899]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* tools progress */}
      <div className="p-4 glass-2 rounded-xl w-full">
        <h5 className="mb-4 text-2xl text-white flex gap-5 items-center">
          <span className="p-3 bg-[#ec4899]/5 rounded-md text-[26px] text-[#ec4899]">
            <BsTools />
          </span>

          <span className="text-white font-medium">Tools</span>
        </h5>

        <div className="space-y-4 font-medium">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>VS Code</span>
              <span>95%</span>
            </div>

            <div className="w-full h-2 glass-1 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `95%` }}
                transition={{ duration: 2 }}
                viewport={{ once: false }}
                className="h-full bg-linear-to-r from-[#6366F1] via-[#A855F7] to-[#EC4899]"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>GitHub</span>
              <span>80%</span>
            </div>

            <div className="w-full h-2 glass-1 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `80%` }}
                transition={{ duration: 2 }}
                viewport={{ once: false }}
                className="h-full bg-linear-to-r from-[#6366F1] via-[#A855F7] to-[#EC4899]"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Figma</span>
              <span>60%</span>
            </div>

            <div className="w-full h-2 glass-1 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `60%` }}
                transition={{ duration: 2 }}
                viewport={{ once: false }}
                className="h-full bg-linear-to-r from-[#6366F1] via-[#A855F7] to-[#EC4899]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsProgressBar;
