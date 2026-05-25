import About from "@/components/about/About";
import Banner from "@/components/banner/Banner";
import Navbar from "@/components/navbar/Navbar";
import Projects from "@/components/projects/Projects";
import Qualifications from "@/components/qualifications/Qualifications";
import Skills from "@/components/skills/Skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Qualifications />
    </>
  );
}
