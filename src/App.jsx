import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Education from "./components/Education";

export default function App() {
  return (
    <div className="bg-slate-950 font-sans antialiased selection:bg-cyan-500 selection:text-slate-950">
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <footer className="py-6 text-center text-slate-500 bg-slate-950 border-t border-slate-900 text-sm">
        © {new Date().getFullYear()} All rights reserved. Built with React &
        Tailwind CSS.
      </footer>
    </div>
  );
}
