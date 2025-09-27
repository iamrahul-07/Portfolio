import React from "react";
import Navbar from "../Pages/Navbar/Navbar";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Skills from "../Components/Skills/Skills";
import Projects from "../Components/Projects/Projects";
import Contact from "../Components/Contact/Contact";

const Layout = () => {
  return (
    <>
      <Navbar />

      {/* Main content */}
      <main className="scroll-smooth">
        <section id="home" className="min-h-screen pt-20 sm:pt-24 md:pt-28">
          <Home />
        </section>

        <section id="about" className="min-h-screen pt-20 sm:pt-24 md:pt-28">
          <About />
        </section>

        <section id="skills" className="min-h-screen pt-20 sm:pt-24 md:pt-28">
          <Skills />
        </section>

        <section id="projects" className="min-h-screen pt-20 sm:pt-24 md:pt-28">
          <Projects />
        </section>

        <section id="contact" className="min-h-screen pt-20 sm:pt-24 md:pt-28">
          <Contact />
        </section>
      </main>
    </>
  );
};

export default Layout;
