"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, Button } from "@heroui/react";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const activeLink = (id) => {
    return `
    px-4 py-1 text-base font-secondary text-[#a5adba] hover:text-white ${
      activeSection === id
        ? "text-white bg-white/5 backdrop-blur-md border border-white/10 rounded-full"
        : ""
    }
    `;
  };

  const navLinks = (
    <>
      <li>
        <Link href="#home" className={activeLink("home")}>
          Home
        </Link>
      </li>

      <li>
        <Link href="#about" className={activeLink("about")}>
          About
        </Link>
      </li>

      <li>
        <Link href="#skills" className={activeLink("skills")}>
          Skills
        </Link>
      </li>

      <li>
        <Link href="#qualifications" className={activeLink("qualifications")}>
          Qualifications
        </Link>
      </li>

      <li>
        <Link href="#project" className={activeLink("project")}>
          Project
        </Link>
      </li>

      <li>
        <Link href="#contact" className={activeLink("contact")}>
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <nav id="home" className="mt-5 mb-7 sticky top-0 z-40 w-full">
      <header className="max-w-7xl mx-auto px-5">
        <section id="home" className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button
              className="lg:hidden bg-transparent h-auto"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="sr-only">Menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </Button>

            <div
              className="w-15 h-15"
              style={{
                background:
                  "linear-gradient(to right, #6366f1, #a855f7, #ec4899)",
                WebkitMaskImage: "url(/assets/name_logo.png)",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskSize: "contain",
                WebkitMaskPosition: "center",
                maskImage: "url(/assets/name_logo.png)",
                maskRepeat: "no-repeat",
                maskSize: "contain",
                maskPosition: "center",
              }}
            />
          </div>

          <ul className="hidden items-center lg:flex px-1 py-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-2xl">
            {navLinks}
          </ul>

          <div>
            <Button
              className={
                "px-5 h-10 text-base  font-secondary bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl"
              }
            >
              <span className="text-gradient">Resume</span>
            </Button>
          </div>
        </section>
      </header>

      {isMenuOpen && (
        <div className="border-t border-separator lg:hidden">
          <ul className="flex flex-col gap-2 p-4 bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl">
            {navLinks}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
