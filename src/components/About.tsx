

"use client";

import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="container mx-auto px-6 py-20 border-t border-white/10 mt-10"
    >
      <FadeIn>
        {/* Title with animated underline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-semibold mb-6 relative inline-block"
        >
          About Me
          <motion.span
            className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ transformOrigin: "left" }}
          />
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-300 max-w-3xl leading-relaxed mb-8"
        >
          I’m a tech enthusiast currently pursuing{" "}
          <span className="font-semibold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            B.Sc in Data Science from IIT Madras
          </span>
          . My journey revolves around building scalable and intelligent digital products, exploring the depths of AI, and creating impactful solutions that blend creativity with technology.
          <br />
          <br />
          Whether it’s engineering seamless web/mobile apps, automating workflows, or experimenting with generative AI, I’m always excited to turn ideas into reality.
        </motion.p>

        {/* Work Preferences Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.02, rotateX: 2, rotateY: 2 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="relative rounded-2xl p-6 max-w-2xl cursor-pointer overflow-hidden"
        >
          {/* Gradient border */}
          <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500" />
          {/* Glass content */}
          <div className="relative rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 p-6">
            <h3 className="text-xl font-semibold mb-3">Work Preferences</h3>
            <p className="text-gray-300 leading-relaxed">
              Currently open to{" "}
              remote-first freelance projects, internships, and part-time roles
              {/* <span className="font-medium bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                remote-first freelance projects, internships, and part-time roles
              </span> */}
              , with a flexible approach to hybrid opportunities. Full-time roles are considered depending on the project scope and impact.
            </p>
          </div>
        </motion.div>

        {/* Closing paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-400 mt-8 max-w-3xl"
        >
          I value collaboration, learning, and pushing the boundaries of what’s possible in tech — always striving to craft experiences that leave a mark.
        </motion.p>
      </FadeIn>
    </section>
  );
}
