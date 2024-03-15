import Contact from "./components/Contact/Contact";
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
      <section id="home" style={{ scrollSnapAlign: 'none' }}>
        <Header />
      </section>
      <section id="about" style={{ scrollSnapAlign: 'none' }}>About</section>
      <section id="experiance" style={{ scrollSnapAlign: 'none' }}>Education</section>
      <Project />
      <section id="skills" style={{ scrollSnapAlign: 'none' }} className='bg-[#090909] z-0 '>
        <Skills />
      </section>
      <section id="contact" style={{ scrollSnapAlign: 'none' }} className='bg-[#090909] z-20'>
        <Contact />
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
