import About from "@/components/about/About";
import Banner from "@/components/banner/Banner";
import Navbar from "@/components/navbar/Navbar";
import Skills from "@/components/skills/Skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Skills />
    </>
  );
}
