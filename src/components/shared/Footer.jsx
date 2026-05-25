"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { ArrowUpRight, Heart } from "lucide-react";
import Link from "next/link";
import { IoRocket } from "react-icons/io5";

const Footer = () => {
  const links = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socials = [
    { icon: FaGithub, href: "https://github.com/alfu-git" },
    { icon: BsLinkedin, href: "https://www.linkedin.com/in/md-alfaz-dev7/" },
    { icon: IoMdMail, href: "mailto:mdalfaz.dev@email.com" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 10 }} //
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: false, amount: 0.25 }}
      className="relative w-full glass-1 overflow-hidden"
    >
      {/* glow bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-30 -right-20 w-87.5 h-87.5 bg-[#00d4ff]/20 blur-[140px] rounded-full animate-pulse" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 pt-12">
        {/* top section */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* brand */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
          >
            <h2 className="text-2xl text-white font-bold tracking-wide">
              MD Alfaz
              <span className="text-[#00d4ff]">.</span>
            </h2>

            <p className="mt-4 leading-relaxed">
              A passionate Full Stack Developer focused on building AI-powered
              modern web experiences with clean UI & smooth UX.
            </p>
          </motion.div>

          {/* quick links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: false, amount: 0.25 }}
          >
            <h3 className="text-lg text-white font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {links.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 hover:text-[#00d4ff] transition"
                  >
                    {link.name}
                    <ArrowUpRight size={16} />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* social */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: false, amount: 0.25 }}
          >
            <h3 className="text-lg text-white font-semibold mb-4">Connect</h3>

            <div className="flex gap-4">
              {socials.map((s, i) => {
                const Icon = s.icon;
                return (
                  <Link
                    key={i}
                    href={s.href}
                    target="_blank"
                    className="group p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl hover:bg-[#00d4ff]/10 hover:border-[#00d4ff]/40 transition-all"
                  >
                    <Icon
                      size={18}
                      className="text-white transition-all duration-300 group-hover:drop-shadow-[0_0_10px_#ffffff] group-hover:scale-110"
                    />
                  </Link>
                );
              })}
            </div>

            <p className="text-sm mt-6 flex gap-2 items-center">
              <span>Let’s build something amazing together</span>{" "}
              <IoRocket className="text-[#00d4ff]" />
            </p>
          </motion.div>
        </div>

        {/* divider */}
        <div className="my-10 border-t border-white/10" />

        {/* bottom */}
        <div className="mb-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p className="flex items-center gap-2">
            © {new Date().getFullYear()} MD Alfaz. Made with
            <Heart size={14} className="text-[#00d4ff]" /> in Bangladesh
          </p>

          <p className="opacity-70">
            Built with Next.js • Tailwind CSS • Framer Motion
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
