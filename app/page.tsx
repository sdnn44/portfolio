import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Experiance from "./components/Experience/Experience";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Project from "./components/Project/Project";
import Sidebar from "./components/Sidebar/Sidebar";
import Skills from "./components/Skills/Skills";

export default function Home() {
  return (
    <div className="">
      <section id="#" style={{ scrollSnapAlign: 'none' }} className="bg-gradient-to-t from-[#0c0c1d] from-50% to-[#5a21b665] overflow-hidden">
        <Header />
        <Hero />
      </section>
      <section id="about" style={{ scrollSnapAlign: 'none' }} className="bg-gradient-to-t from-[#0c0c1d] from-50% to-[#5a21b665]">
        <About />
      </section>
      <section id="experiance" style={{ scrollSnapAlign: 'none' }} className="experiance-section">
        <Experiance />
      </section>
      <Project />
      <section id="skills" style={{ scrollSnapAlign: 'none' }} className='skill-section z-0'>
        <Skills />
      </section>
      <section id="contact" style={{ scrollSnapAlign: 'none' }} className='bg-[#090909] z-20 bg-dot-[#5a21b6]/[0.5]'>
        <div className="relative">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <Contact />
        </div>
      </section>
    </div>
  );
}
