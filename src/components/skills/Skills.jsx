import React from "react";
import SkillsProgressBar from "./SkillsProgressBar";
import SkillsMarquee from "./SkillsMarquee";

const Skills = () => {
  return (
    <section id="skills" className="my-30 max-w-7xl w-full mx-auto px-5">
      <div>
        <div>
          <h2 className="mb-15 sm:mb-25 lg:mb-20 text-5xl text-gradient font-bold text-center">
            My Skills
          </h2>

          <div>
            <SkillsProgressBar />
          </div>

          <div>
            <SkillsMarquee />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
