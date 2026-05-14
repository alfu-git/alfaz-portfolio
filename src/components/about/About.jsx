import React from "react";
import AboutLeft from "./AboutLeft";

const About = () => {
  return (
    <section id="about" className="my-30 max-w-7xl w-full mx-auto px-5">
      <div>
        <div>
          <h2 className="mb-15 sm:mb-25 lg:mb-20 text-5xl text-gradient font-bold text-center">
            About Me
          </h2>

          <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-y-15 sm:gap-y-20 lg:gap-15">
            <div className="w-2/3">
              <AboutLeft />
            </div>

            <div className="p-3 glass-1 rounded-xl text-lg">
              <div className="space-y-4">
                <p>
                  I&apos;m currently a first-year Chemistry student and an
                  passionate{" "}
                  <strong className="text-[#00D4FF]">
                    MERN-Stack Wev Developer
                  </strong>{" "}
                  focused on building modern, scalable web applications with
                  clean UI and powerful backend systems.
                </p>

                <p>
                  When I&apos;m not building things, I&apos;m exploring new
                  technologies, contributing to open source, or sharpening my
                  problem-solving skills.
                </p>

                <p>
                  I believe in shipping work over perfection and improving
                  through real experience. Outside coding, I stay disciplined
                  with football and gym, which keeps me balanced and focused.
                </p>

                <p>
                  My long-term vision is to{" "}
                  <strong className="text-[#00D4FF]">
                    master AI and build intelligent web applications
                  </strong>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
