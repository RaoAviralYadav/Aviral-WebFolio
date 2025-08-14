
"use client";

import { motion } from "framer-motion";

const skills = [
  "Full-Stack Web Development",
  "Mobile App Development",
  "Generative AI & AI Apps",
  "Email Campaigns & SEO",
  "Content Writing",
  "Sales & Marketing",
  "Graphic Design",
  "Video Editing",
];

export default function Hero() {
  return (
  <section className="relative w-full px-12 md:px-24 pt-28 pb-44 text-center bg-brandBlack text-brandWhite overflow-hidden">
      {/* Decorative blurred gradients */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tr from-pink-500/20 to-purple-500/20 blur-[100px] pointer-events-none" />

      {/* Welcome Text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-lg text-gray-300 mb-4 relative z-10 w-full"
      >
        Hello and Welcome to my Webfolio! <br className="hidden sm:inline" />
        I am 
      </motion.p>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 relative z-10 w-full"
      >
        Aviral Yadav
      </motion.h1>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.28, duration: 0.8 }}
        className="text-lg text-gray-300 mb-10 relative z-10 w-full"
      >
        I build impactful digital experiences — from websites and apps to<br className="hidden sm:inline" />
        AI-powered tools, creative campaigns, and more.
      </motion.p>

      {/* Skills Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="flex flex-wrap justify-center gap-4 w-full relative z-10"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 20px rgba(255,255,255,0.4), 0 0 50px rgba(255,0,255,0.3)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
            className="relative px-5 py-3 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md cursor-pointer group overflow-hidden"
          >
            {/* Neon Glow Overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 blur-xl"></div>
            {/* Animated Gradient Border */}
            <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition duration-300"></div>
            {/* Content */}
            <span className="relative z-10 text-gray-200 text-sm font-medium group-hover:text-white transition-colors duration-300">
              {skill}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
