"use client";

import React from "react";
import { motion } from "framer-motion";
import { MdBackpack, MdMyLocation } from "react-icons/md";
import { Separator } from "@heroui/react";
import { LuSchool } from "react-icons/lu";
import Link from "next/link";
import { FaGraduationCap } from "react-icons/fa6";

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

const Qualifications = () => {
  return (
    <motion.section
      id="qualifications"
      className="mb-40 max-w-7xl w-full mx-auto px-5"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.4 }}
    >
      <motion.h2
        variants={item}
        className="mb-15 sm:mb-25 lg:mb-20 text-5xl text-gradient font-bold text-center"
      >
        My Academic Journey
      </motion.h2>

      <motion.div
        variants={item}
        className="px-8 py-10 rounded-2xl glass-1 grid grid-cols-1 lg:grid-cols-3 gap-7"
      >
        {/* secondary */}
        <div className="group flex flex-col items-center gap-y-15 w-full h-full">
          <span
            className="relative p-3 glass-1 rounded-2xl text-3xl transition-all duration-500 group-hover:text-white group-hover:shadow-[0_0_40px_15px_rgba(255,255,255,0.25),0_0_80px_25px_rgba(255,255,255,0.15)] before:absolute before:inset-0 before:rounded-2xl before:bg-white/20 before:blur-xl before:opacity-0 before:transition-all before:duration-500
            group-hover:before:opacity-100"
          >
            <MdBackpack />
          </span>

          <div className="p-8 bg-white/5 border border-white/10 shadow-2xl rounded-4xl flex flex-col h-full transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] hover:-translate-y-3 hover:shadow-[0_25px_60px_-10px_rgba(0,212,255,0.25)]">
            <span className="text-[#00d4ff] font-medium">SECONDARY</span>

            <Link href={"https://belfuliaschool.edu.bd"} target="_blank">
              <h3 className="my-5 text-white text-2xl font-bold">
                Belfulia Islamia High School
              </h3>
            </Link>

            <div className="space-y-3">
              <div className="flex gap-2 items-center">
                <MdMyLocation className="text-[#00d4ff]" />
                <address>Rupsha, Khulna</address>
              </div>

              <span>2015-2020</span>
            </div>

            <div className="flex-1" />

            <Separator className="mt-15 mb-5 bg-linear-to-r from-[#6366f1] via-[#a855f7] to-[#ec4899]" />

            <span className="block max-w-fit px-3 py-1 text-sm bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl text-white">
              GPA: 5.00
            </span>
          </div>
        </div>

        {/* intermediate */}
        <div className="group flex flex-col items-center gap-y-15 w-full h-full">
          <span
            className="relative p-3 glass-1 rounded-2xl text-3xl transition-all duration-500 group-hover:text-white group-hover:shadow-[0_0_40px_15px_rgba(255,255,255,0.25),0_0_80px_25px_rgba(255,255,255,0.15)] before:absolute before:inset-0 before:rounded-2xl before:bg-white/20 before:blur-xl before:opacity-0 before:transition-all before:duration-500
            group-hover:before:opacity-100"
          >
            <LuSchool />
          </span>

          <div className="p-8 bg-white/5 border border-white/10 shadow-2xl rounded-4xl flex flex-col h-full transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] hover:-translate-y-3 hover:shadow-[0_25px_60px_-10px_rgba(0,212,255,0.25)]">
            <span className="text-[#00d4ff] font-medium">INTERMEDIATE</span>

            <Link href={"https://rgckhulna.edu.bd"} target="_blank">
              <h3 className="my-5 text-white text-2xl font-bold">
                Govt Rupsha Collage
              </h3>
            </Link>

            <div className="space-y-3">
              <div className="flex gap-2 items-center">
                <MdMyLocation className="text-[#00d4ff]" />
                <address>Rupsha, Khulna</address>
              </div>

              <span>2020-2022</span>
            </div>

            <div className="flex-1" />

            <Separator className="mt-15 mb-5 bg-linear-to-r from-[#6366f1] via-[#a855f7] to-[#ec4899]" />

            <span className="block max-w-fit px-3 py-1 text-sm bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl text-white">
              GPA: 5.00
            </span>
          </div>
        </div>

        {/* honours */}
        <div className="group flex flex-col items-center gap-y-15 w-full h-full">
          <span
            className="relative p-3 glass-1 rounded-2xl text-3xl transition-all duration-500 group-hover:text-white group-hover:shadow-[0_0_40px_15px_rgba(255,255,255,0.25),0_0_80px_25px_rgba(255,255,255,0.15)] before:absolute before:inset-0 before:rounded-2xl before:bg-white/20 before:blur-xl before:opacity-0 before:transition-all before:duration-500
            group-hover:before:opacity-100"
          >
            <FaGraduationCap />
          </span>

          <div className="p-8 bg-linear-to-br from-[#00d4ff]/3 via-[#00d4ff]/2 to-[#00d4ff]/1 backdrop-blur-sm rounded-4xl flex flex-col h-full transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] hover:-translate-y-3 hover:shadow-[0_25px_60px_-10px_rgba(0,212,255,0.25)]">
            <p className="flex justify-between items-center">
              <span className="text-[#00d4ff] font-medium">HONORS</span>

              <span className="px-3 py-1 text-[#00d4ff] text-sm bg-[#00d4ff]/10 shadow-2xl border-[#00d4ff] rounded-full">
                Current
              </span>
            </p>

            <Link href={"https://www.blcollege.edu.bd"} target="_blank">
              <h3 className="my-5 text-white text-2xl font-bold">
                Govt Brajalal College
              </h3>
            </Link>

            <div className="space-y-3">
              <div className="flex gap-2 items-center">
                <MdMyLocation className="text-[#00d4ff]" />
                <address>Daulatpur, Khulna</address>
              </div>

              <span>2022-Present</span>
            </div>

            <div className="flex-1" />

            <Separator className="mt-15 mb-5 bg-linear-to-r from-[#6366f1] via-[#a855f7] to-[#ec4899]" />

            <span className="block max-w-fit px-3 py-1 text-sm bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl text-white">
              CGPA: <span className="opacity-80">Pending</span>
            </span>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Qualifications;
