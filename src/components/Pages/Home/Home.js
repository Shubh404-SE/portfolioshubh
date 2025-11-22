import About from "../About/About";
import Services from "../Skill_Service/Services";
import Education from "../Education/Education";
import Skill from "../Skill_Service/Skill";
import ProjectDetail from "../Project/Projects";
import Contact from "../Contact/Contact";
import HeroSection from "../../HeroSection/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Skill />
      <Services />
      <ProjectDetail />
      <Education />
      <Contact />
    </>
  );
}
