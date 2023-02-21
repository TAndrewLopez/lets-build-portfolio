import About from "@/components/Content/About";
import Contact from "@/components/Content/Contact";
import MainContent from "@/components/Content/Main";
import Projects from "@/components/Content/Projects";
import Skills from "@/components/Content/Skills";

const HomePage = () => {
  return (
    <>
      <MainContent />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default HomePage;
