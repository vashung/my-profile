import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/layout/AboutSection";
import ContactSection from "@/components/layout/ContactSection";
import ProjectSection from "@/components/layout/ProjectSection";
import NavBar from "@/components/NavBar";
import GoTopButton from "@/components/GoTopButton"
import Image from "next/image";
import { scroll } from "framer-motion";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <div className="absolute">
          <svg
            width="50"
            height="50"
            viewBox="0 0 100 100"
            className="progress-wheel"
          > 
            <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
            <circle
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              className="progress"
            />
          </svg>
        </div>
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <ContactSection />
        <GoTopButton />
      </div>

      {/* <section id="project" className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-3"> 
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl px-5">Project</h1> 
      </section>
           
      <section id="qualification">Education</section>
      <section id="Contact">Contacts</section> */}
    </main>
  );
}
