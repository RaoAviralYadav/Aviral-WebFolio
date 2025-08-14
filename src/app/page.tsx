// "use client";

// import { useState, useEffect } from "react";
// import "./globals.css";
// import Sidebar from "@/components/Sidebar";
// import Hero from "@/components/Hero";
// import About from "@/components/About";
// import TechStack from "@/components/TechStack";
// import Projects from "@/components/Projects";
// import Experience from "@/components/Experience";
// import Reviews from "@/components/Reviews";
// import Contact from "@/components/Contact";
// import Footer from "@/components/Footer";
// import { motion } from "framer-motion";

// export default function Home() {
//   const [scrollProgress, setScrollProgress] = useState(0);

//   useEffect(() => {
//     const updateScrollProgress = () => {
//       const scrollTop = window.scrollY;
//       const docHeight =
//         document.documentElement.scrollHeight - window.innerHeight;
//       const scrolled = (scrollTop / docHeight) * 100;
//       setScrollProgress(scrolled);
//     };

//     window.addEventListener("scroll", updateScrollProgress);
//     return () => window.removeEventListener("scroll", updateScrollProgress);
//   }, []);

//   return (
//     <main className="relative flex bg-gradient-to-b from-black via-brandBlack to-brandBlack text-brandWhite min-h-screen overflow-hidden">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Scrollable Content */}
//       <div className="flex-1 ml-52 md:ml-52 overflow-x-hidden relative">
//         {/* Scroll Progress Bar */}
//         <div className="fixed top-0 left-0 w-full h-[3px] bg-transparent z-50">
//           <motion.div
//             className="h-full w-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 shadow-[0_0_12px_rgba(255,255,255,0.6)] rounded-full scroll-progress-bar"
//             initial={{ scaleX: 0 }}
//             animate={{ scaleX: scrollProgress / 100 }}
//             transition={{ duration: 0.075, ease: "easeInOut" }}
//           />
//         </div>

//         {/* Animated Background Layer */}
//         <div className="absolute inset-0 -z-10 overflow-hidden">
//           {/* Floating light blobs */}
//           <motion.div
//             className="absolute w-[40rem] h-[40rem] bg-cyan-500/10 rounded-full blur-[200px] blob-top-left"
//             animate={{ x: [0, 100, -100, 0], y: [0, -80, 80, 0] }}
//             transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
//           />
//           <motion.div
//             className="absolute w-[35rem] h-[35rem] bg-purple-500/10 rounded-full blur-[180px] blob-bottom-right"
//             animate={{ x: [0, -120, 120, 0], y: [0, 100, -100, 0] }}
//             transition={{ repeat: Infinity, duration: 30, ease: "easeInOut" }}
//           />
//         </div>

//         {/* Decorative Radial Highlights */}
//         <div className="absolute w-full h-full opacity-20 pointer-events-none radial-highlights" />

//         {/* Sections with entrance animations */}
//         <motion.section
//           id="hero"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <Hero />
//         </motion.section>

//         <motion.section
//           id="about"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <About />
//         </motion.section>

//         <motion.section
//           id="techstack"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <TechStack />
//         </motion.section>

//         <motion.section
//           id="projects"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <Projects />
//         </motion.section>

//         <motion.section
//           id="experience"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <Experience />
//         </motion.section>

//         <motion.section
//           id="reviews"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <Reviews />
//         </motion.section>

//         <motion.section
//           id="contact"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <Contact />
//         </motion.section>

//         <Footer />
//       </div>
//     </main>
//   );
// }


"use client";

import { useState, useEffect } from "react";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const checkWidth = () => setShowSidebar(window.innerWidth >= 1024); // show only from lg breakpoint
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <main className="relative flex bg-gradient-to-b from-black via-brandBlack to-brandBlack text-brandWhite min-h-screen overflow-hidden w-full">
      {/* Sidebar (only for large screens) */}
      {/* Sidebar (only for large screens) */}
      {showSidebar && (
        <div className="hidden lg:block fixed left-0 top-0 h-full z-40 w-52">
          <Sidebar />
        </div>
      )}

      {/* Scrollable Content */}
      <div
        className={`relative flex-1 w-full max-w-none overflow-x-hidden transition-all duration-300 ${
          showSidebar ? "lg:ml-52" : "ml-0"
        }`}
      >
        {/* Scroll Progress Bar */}
        <div className="fixed top-0 left-0 w-full h-[3px] bg-transparent z-50">
          <motion.div
            className="h-full w-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 shadow-[0_0_12px_rgba(255,255,255,0.6)] rounded-full scroll-progress-bar origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: scrollProgress / 100 }}
            transition={{ duration: 0.075, ease: "easeInOut" }}
          />
        </div>

        {/* Animated Background Layer */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            className="absolute w-[40rem] h-[40rem] bg-cyan-500/10 rounded-full blur-[200px] blob-top-left"
            animate={{ x: [0, 100, -100, 0], y: [0, -80, 80, 0] }}
            transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-[35rem] h-[35rem] bg-purple-500/10 rounded-full blur-[180px] blob-bottom-right"
            animate={{ x: [0, -120, 120, 0], y: [0, 100, -100, 0] }}
            transition={{ repeat: Infinity, duration: 30, ease: "easeInOut" }}
          />
        </div>

        {/* Decorative Radial Highlights */}
        <div className="absolute w-full h-full opacity-20 pointer-events-none radial-highlights" />

        {/* Sections with animations */}
        {[
          { id: "hero", Component: Hero },
          { id: "about", Component: About },
          { id: "techstack", Component: TechStack },
          { id: "projects", Component: Projects },
          { id: "experience", Component: Experience },
          { id: "reviews", Component: Reviews },
          { id: "contact", Component: Contact },
        ].map(({ id, Component }) => (
          <motion.section
            key={id}
            id={id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Component />
          </motion.section>
        ))}

        <Footer />
      </div>
    </main>
  );
}
