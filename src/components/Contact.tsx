
"use client";

import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="container mx-auto px-6 py-16 border-t border-white/10"
    >
      <FadeIn>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-semibold mb-6 relative inline-block"
        >
          Contact
          <motion.span
            className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ transformOrigin: "left" }}
          />
        </motion.h2>
        <p className="text-gray-400 mb-8">
          I’m always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision. Feel free to reach out!
        </p>


        <form
          action="https://formspree.io/f/xjkolrav"
          method="POST"
          className="grid gap-4 max-w-lg"
        >
          <input
            aria-label="Your name"
            name="name"
            type="text"
            placeholder="Your Name"
            required
            className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-white/30"
          />
          <input
            aria-label="Your email"
            name="email"
            type="email"
            placeholder="Your Email"
            required
            className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-white/30"
          />
          <textarea
            aria-label="Your message"
            name="message"
            placeholder="Your Message"
            rows={4}
            required
            className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-white/30"
          />
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 bg-gradient-to-r from-white to-gray-400 text-black font-semibold rounded-lg hover:opacity-90 transition"
            type="submit"
          >
            Send Message
          </motion.button>
        </form>
      </FadeIn>
    </section>
  );
}
