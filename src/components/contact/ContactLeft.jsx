"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

const ContactLeft = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: false }}
      className="space-y-6"
    >
      <motion.div
        initial="rest"
        whileHover="hover"
        animate="rest"
        className="glass-1 p-6 rounded-2xl flex items-center gap-4 group cursor-pointer"
      >
        {/* icon */}
        <motion.div
          variants={{
            rest: { y: 0, color: "#00d4ff" },
            hover: {
              y: -8,
              color: "#00d4ff",
              transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
            },
          }}
          className="relative"
        >
          <Mail size={26} />

          {/* neon glow */}
          <motion.div
            variants={{
              rest: { opacity: 0 },
              hover: { opacity: 1 },
            }}
            className="absolute inset-0 rounded-full blur-xl bg-[#00d4ff]/40"
          />
        </motion.div>

        {/* text */}
        <div>
          <p className="text-gray-400 text-sm">Email</p>
          <Link
            href="mailto:mdalfaz.dev@gmail.com"
            className="text-white font-medium group-hover:text-[#00d4ff] transition-colors duration-300"
          >
            mdalfaz.dev@gmail.com
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial="rest"
        whileHover="hover"
        animate="rest"
        className="glass-1 p-6 rounded-2xl flex items-center gap-4 group cursor-pointer"
      >
        {/* icon */}
        <motion.div
          variants={{
            rest: { y: 0, color: "#00d4ff" },
            hover: {
              y: -8,
              color: "#00d4ff",
              transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
            },
          }}
          className="relative"
        >
          <Phone size={26} />

          {/* neon glow */}
          <motion.div
            variants={{
              rest: { opacity: 0 },
              hover: { opacity: 1 },
            }}
            className="absolute inset-0 rounded-full blur-xl bg-[#00d4ff]/40"
          />
        </motion.div>

        {/* text */}
        <div>
          <p className="text-gray-400 text-sm">Phone</p>
          <p className="text-white font-medium group-hover:text-[#00d4ff] transition-colors duration-300">
            +880 1819769176
          </p>
        </div>
      </motion.div>

      <motion.div
        initial="rest"
        whileHover="hover"
        animate="rest"
        className="glass-1 p-6 rounded-2xl flex items-center gap-4 group cursor-pointer"
      >
        {/* icon */}
        <motion.div
          variants={{
            rest: { y: 0, color: "#00d4ff" },
            hover: {
              y: -8,
              color: "#00d4ff",
              transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
            },
          }}
          className="relative"
        >
          <MapPin size={26} />

          {/* neon glow */}
          <motion.div
            variants={{
              rest: { opacity: 0 },
              hover: { opacity: 1 },
            }}
            className="absolute inset-0 rounded-full blur-xl bg-[#00d4ff]/40"
          />
        </motion.div>

        {/* text */}
        <div>
          <p className="text-gray-400 text-sm">Location</p>
          <address className="text-white font-medium group-hover:text-[#00d4ff] transition-colors duration-300">
            Khulna, Bangladesh
          </address>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactLeft;
