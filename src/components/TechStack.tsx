
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/FadeIn";

const skillCategories = [
  { title: "Languages", skills: ["Python", "JavaScript", "TypeScript", "C", "Java", "HTML", "CSS", "BASIC"] },
  { title: "Web Frontend Development", skills: ["React.js", "Next.js", "Redux", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3"] },
  { title: "Web Backend Development", skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Authentication (JWT, OAuth)"] },
  { title: "Mobile Frontend Development", skills: ["React Native", "Expo", "TypeScript (Mobile)", "React Navigation", "Native Base", "React Native Paper"] },
  { title: "Mobile Backend & APIs", skills: ["Firebase (Auth, Firestore)", "REST APIs", "Expo APIs (Camera, FileSystem, Notifications)"] },
  { title: "AI / Machine Learning / Data Science", skills: ["scikit-learn", "pandas", "NumPy", "matplotlib", "seaborn", "plotly", "Deep Learning", "NLP", "spaCy"] },
  { title: "Cloud, DevOps & Tools", skills: ["AWS (Basics)", "MongoDB Atlas", "Git", "GitHub", "Postman", "VS Code (ESLint)", "Replit"] },
  { title: "Core CS Concepts", skills: ["Data Structures & Algorithms (DSA)", "Object-Oriented Programming (OOP)", "System Design (Intro)"] },
  { title: "Design & Productivity", skills: ["Figma", "Canva", "Markdown", "JSON", "Regex"] },
  { title: "Soft Skills", skills: ["Public Speaking", "Content Writing", "Teaching", "SEO & Blogging", "Event Hosting", "Team Collaboration"] },
];

export default function TechStack() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="skills" className="container mx-auto px-6 py-16 border-t border-white/10">
      <FadeIn>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-semibold mb-6 relative inline-block"
        >
          Tech Stack
          <motion.span
            className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ transformOrigin: "left" }}
          />
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={idx}
                layout
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className={`relative cursor-pointer rounded-2xl p-6 border border-white/20 
                  backdrop-blur-2xl bg-white/5 
                  bg-[url('/noise-texture.png')] bg-cover bg-center 
                  transition-all duration-500 group overflow-hidden
                  ${isOpen ? "shadow-lg shadow-cyan-500/50 scale-[1.02]" : "shadow-md shadow-black/30"}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Animated Neon Glow */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                    bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 blur-xl"
                  animate={isOpen ? { opacity: 1, scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                ></motion.div>

                <motion.h3
                  layout
                  className="relative text-xl font-semibold mb-2 text-white z-10"
                >
                  {category.title}
                </motion.h3>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0, scale: 0.98 }}
                      animate={{ opacity: 1, height: "auto", scale: 1 }}
                      exit={{ opacity: 0, height: 0, scale: 0.98 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden mt-4 relative z-10"
                    >
                      <motion.div
                        className="flex flex-wrap gap-3"
                        initial="hidden"
                        animate="visible"
                        variants={{
                          hidden: {},
                          visible: { transition: { staggerChildren: 0.05 } },
                        }}
                      >
                        {category.skills.map((skill, i) => (
                          <motion.span
                            key={i}
                            variants={{
                              hidden: { opacity: 0, y: 10 },
                              visible: { opacity: 1, y: 0 },
                            }}
                            className="px-3 py-1.5 rounded-full border border-white/20 text-sm text-white 
                              bg-white/10 backdrop-blur-sm 
                              hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-cyan-500 
                              hover:text-black hover:shadow-md hover:shadow-pink-500/50
                              transition-all duration-300"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </FadeIn>
    </section>
  );
}

