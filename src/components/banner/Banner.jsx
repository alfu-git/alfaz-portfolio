import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { ImGithub, ImLinkedin } from "react-icons/im";

const Banner = () => {
  return (
    <section id="home" className="pt-12 pb-10 mb-10">
      <div className="max-w-7xl w-full mx-auto px-5">
        <div className="flex flex-col-reverse gap-y-15 lg:flex-row lg:justify-between lg:items-center">
          <div>
            <div className="flex flex-col-reverse lg:flex-row lg:items-center gap-10">
              <div className="flex gap-5 lg:flex-col">
                <Link href={"https://github.com/alfu-git"} target="_blank">
                  <Button className="w-13 h-13 glass-1 rounded-full hover:scale-110 transition-all duration-500">
                    <ImGithub className="w-8 h-8" />
                  </Button>
                </Link>

                <Link
                  href={"https://www.linkedin.com/in/md-alfaz-dev7/"}
                  target="_blank"
                >
                  <Button className="w-13 h-13 glass-1 rounded-full hover:scale-110 transition-all duration-500">
                    <ImLinkedin className="w-8.5 h-8.5 rounded-full" />
                  </Button>
                </Link>

                <Link href={"https://x.com/md_alfaz_dev"} target="_blank">
                  <Button className="w-13 h-13 glass-1 rounded-full hover:scale-110 transition-all duration-500">
                    <FaXTwitter className="w-7 h-7" />
                  </Button>
                </Link>

                <Link
                  href={"https://www.facebook.com/m.a.faz.495430"}
                  target="_blank"
                >
                  <Button className="w-13 h-13 glass-1 rounded-full hover:scale-110 transition-all duration-500">
                    <FaFacebook className="w-8.5 h-8.5" />
                  </Button>
                </Link>
              </div>

              <div>
                <p className="px-3 py-1 max-w-fit text-[#00D4FF] bg-[#00D4FF]/5 backdrop-blur-md border border-[#00D4FF]/10 shadow-2xl rounded-full">
                  Welcome to my coding universe
                </p>

                <div className="my-5 sm:my-10">
                  <h1 className="text-6xl font-bold text-gradient leading-tight">
                    Meet MD ALFAZ
                  </h1>

                  <p className="sm:mt-3 text-xl sm:text-2xl text-[#00D4FF] font-medium">
                    An Passionate MERN-Stack Developer
                  </p>
                </div>

                <p className="text-lg max-w-120">
                  I build modern, scalable web applications with clean UI &
                  powerful backend.
                </p>
              </div>
            </div>
          </div>

          <figure className="relative z-10 max-w-60 max-h-60 mx-auto sm:max-w-100 sm:max-h-100 p-2 glass-1 rounded-full flex items-center justify-center overflow-hidden">
            <div className="absolute w-72 h-72 rounded-full bg-linear-to-r from-[#6366f1]/50 via-[#a855f7]/50 to-[#ec4899]/50 blur-3xl opacity-20 animate-pulse" />
            <Image
              src="/assets/alfaz.png"
              alt="MD Alfaz"
              width={500}
              height={400}
              className="w-full h-full object-cover rounded-full z-5"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Banner;
