import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Project from "./components/Project/Project";
import Sidebar from "./components/Sidebar/Sidebar";

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
      <section id="home">
        <Header />
      </section>
      <section id="about">About</section>
      <section id="experiance" className="border-2">Education</section>
      <Project />
      <section id="contact">
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
