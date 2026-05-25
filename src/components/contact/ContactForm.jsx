"use client";

import React from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const ContactForm = () => {
  return (
    <motion.form
      id="contact-form"
      action="https://formsubmit.co/mdalfaz.dev@gmail.com"
      method="POST"
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: false }}
      className="glass-1 p-8 rounded-2xl space-y-6"
    >
      <div>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full bg-transparent border border-white/10 focus:border-[#a855f7] outline-none px-4 py-3 rounded-lg transition"
        />
      </div>

      <div>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full bg-transparent border border-white/10 focus:border-[#a855f7] outline-none px-4 py-3 rounded-lg transition"
        />
      </div>

      <div>
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          required
          className="w-full bg-transparent border border-white/10 focus:border-[#a855f7] outline-none px-4 py-3 rounded-lg transition resize-none"
        />
      </div>

      <button
        type="submit"
        className="flex items-center justify-center gap-2 w-full bg-linear-to-r from-[#6366f1] via-[#a855f7] to-[#ec4899] py-3 rounded-lg text-white font-medium"
      >
        Send Message <Send size={18} />
      </button>
    </motion.form>
  );
};

export default ContactForm;
