
"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";

export default function Reviews() {
  return (
    <section
      id="reviews"
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
          Reviews
          <motion.span
            className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ transformOrigin: "left" }}
          />
        </motion.h2>


        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition"
          >
            <p className="text-gray-400 italic">
              “Testimonials will be added soon as I complete more collaborations
              and projects.”
            </p>

            {/* <span className="block mt-4 text-sm text-gray-400">– Client</span> */}
          </motion.div>
        </div>
      </FadeIn>
    </section>
  );
}
