"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiExpress } from "react-icons/si";

const float = (duration = 3) => ({
  animate: {
    y: [0, -15, 0],
    transition: {
      duration,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
});

export default function AboutLeft() {
  return (
    <div className="relative flex justify-center items-center w-full">
      {/* glow bg */}
      <div className="absolute w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 blur-3xl opacity-30 animate-pulse" />

      {/* floating icons */}
      <motion.div
        {...float(3)}
        className="absolute -top-3 left-2 md:top-0 md:left-20 lg:-top-1 lg:left-5 text-cyan-400 text-3xl"
      >
        <FaReact />
      </motion.div>

      <motion.div
        {...float(4)}
        className="absolute -bottom-6 left-2 md:bottom-0 md:left-20 lg:-bottom-6 lg:left-5 text-black text-xl"
      >
        <span className="p-1.5 flex justify-center items-center rounded-full bg-white">
          <SiExpress />
        </span>
      </motion.div>

      <motion.div
        {...float(5)}
        className="absolute -top-3 right-2 md:top-0 md:right-20 lg:-top-1 lg:right-5 text-black text-3xl"
      >
        <span className="inline-flex w-fit h-fit bg-white rounded-full">
          <SiNextdotjs />
        </span>
      </motion.div>

      <motion.div
        {...float(3.5)}
        className="absolute -bottom-5 right-2 md:bottom-0 md:right-20 lg:-bottom-5 lg:right-6 text-green-500 text-3xl"
      >
        <SiMongodb />
      </motion.div>

      {/* 🧑 Avatar */}
      <div className="relative z-10">
        <div className="max-w-60 max-h-60 mx-auto sm:max-w-100 sm:max-h-100 p-2 glass-1 rounded-full flex items-center justify-center overflow-hidden">
          <Image
            src="/assets/alfaz.png"
            alt="Alfaz"
            width={300}
            height={300}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
