import About from "@/components/about/About";
import Banner from "@/components/banner/Banner";
import Projects from "@/components/projects/Projects";
import Qualifications from "@/components/qualifications/Qualifications";
import Skills from "@/components/skills/Skills";

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Qualifications />
    </>
  );
}
