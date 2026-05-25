"use client";

import React from "react";
import { motion } from "framer-motion";
import ContactLeft from "./ContactLeft";
import ContactForm from "./ContactForm";

const container = {
  hidden: { opacity: 0, y: 30, scale: 0.96, filter: "blur(10px)" },
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

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="relative py-20 px-6 md:px-16 overflow-hidden"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className="relative max-w-7xl mx-auto px-5">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: false }}
          className="text-center mb-15 sm:mb-25 lg:mb-20"
        >
          <h2 className="text-5xl text-gradient font-bold text-center">
            Get In Touch
          </h2>

          <p className="mt-4">Let’s build something amazing together 🚀</p>
        </motion.div>

        <div className="p-5 grid md:grid-cols-2 gap-10 glass-1 rounded-xl">
          {/* left info */}
          <ContactLeft />

          {/* form */}
          <ContactForm />
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
