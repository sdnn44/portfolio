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
      {/* <div className="fixed inset-y-0 left-0 top-0 w-64 backdrop-blur-md">
        <Sidebar />
      </div>
      <div className="w-full">
        <div className="flex flex-col">
          <section id="hero" className="h-screen bg-[url('/bg-2.jpg')]">
            <div className="bg-transparent text-white">
              <Header />
            </div>
            <Hero />
          </section>
          <section id="about" className="h-screen">
          </section>
          <section id="projects" className="h-screen">
          </section>
        </div>
      </div> */}
      {/* <section id="home" style={{ scrollSnapAlign: 'none' }}>
        <Header />
      </section> */}
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
    // SIDEBAR
    // HEADER
    // HERO
    // framer-motion follow cursor
    // ABOUT
    // EXPERIANCE / STUDY
    // PROJECTS
    // SKILLS
    // CONTACT ME
    // FOOTER
  );
}
