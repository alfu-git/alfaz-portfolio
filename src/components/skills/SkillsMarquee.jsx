"use client";
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Link from "next/link";

const skills = [
  {
    name: "HTML",
    image: "/assets/skills/html.png",
    link: "https://www.w3schools.com/Html/",
  },
  {
    name: "CSS",
    image: "/assets/skills/css.png",
    link: "https://www.w3schools.com/css/",
  },
  {
    name: "Tailwind CSS",
    image: "/assets/skills/tailwind.png",
    link: "https://tailwindcss.com/",
  },
  {
    name: "JavaScript",
    image: "/assets/skills/javaScript.png",
    link: "https://www.w3schools.com/js/",
  },
  {
    name: "React",
    image: "/assets/skills/react.png",
    link: "https://react.dev/",
  },
  {
    name: "Next.Js",
    image: "/assets/skills/nextJs.png",
    link: "https://nextjs.org/docs",
  },
  {
    name: "Node.Js",
    image: "/assets/skills/nodeJs.png",
    link: "https://nodejs.org/en",
  },
  {
    name: "Express.Js",
    image: "/assets/skills/expressJs.png",
    link: "https://expressjs.com/",
  },
  {
    name: "MongoDB",
    image: "/assets/skills/mongodb.png",
    link: "https://www.mongodb.com/",
  },
  {
    name: "GitHub",
    image: "/assets/skills/github.png",
    link: "https://github.com/",
  },
  {
    name: "Figma",
    image: "/assets/skills/figma.png",
    link: "https://www.figma.com/",
  },
];

const SkillsMarquee = () => {
  return (
    <div className="my-10">
      <Marquee
        pauseOnHover
        style={{
          overflow: "hidden",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        {skills.map((skill) => {
          return (
            <Link
              key={skill.name}
              href={skill.link}
              target="_blank"
              className="block mx-4 px-6 py-2 rounded-full text-sm glass-1 hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <Image
                  src={skill.image}
                  alt={skill.name}
                  width={30}
                  height={30}
                  className="object-contain"
                />

                <span>{skill.name}</span>
              </div>
            </Link>
          );
        })}
      </Marquee>
    </div>
  );
};

export default SkillsMarquee;
