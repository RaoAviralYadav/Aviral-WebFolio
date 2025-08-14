"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";

export default function Projects() {
  const projects = [
    {
      title: "Mantra Counter App (Mobile)",
      description: "A simple mobile app to count mantras efficiently.",
      link: "https://github.com/RaoAviralYadav/Mantra-Counter",
    },
    {
      title: "Fund Raising (Full Stack Website)",
      description: "A full stack app to manage and track fundraising campaigns.",
      link: "https://github.com/RaoAviralYadav/Fund-Raising-App",
    },
    {
      title: "AI Auto Book Publisher App",
      description: "AI-powered Streamlit app for automated book publishing.",
      link: "https://github.com/RaoAviralYadav/book-ai-project",
    },
    {
      title: "Task Board App (Web)",
      description: "A Kanban-style task management board for web.",
      link: "https://github.com/RaoAviralYadav/Task-Board",
    },
    {
      title: "Fake Data Generator (Web App)",
      description: "Generates realistic fake data for testing.",
      link: "https://github.com/RaoAviralYadav/Fake-Data-Generator",
    },
    {
      title: "Todo Delulu (Full Stack Web App)",
      description: "A feature-rich to-do list application.",
      link: "https://github.com/RaoAviralYadav/todo-delulu",
    },
    {
      title: "Prediction Projects (ML)",
      description: "Collection of machine learning prediction models.",
      link: "https://github.com/RaoAviralYadav/ML-Projects",
    },
    {
      title: "Chat Bot (NLP + DL)",
      description: "AI chatbot built with NLP and deep learning.",
      link: "https://github.com/RaoAviralYadav/Chat-Bot",
    },
  ];

  return (
    <section
      id="projects"
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
          Projects
          <motion.span
            className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ transformOrigin: "left" }}
          />
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="block bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition backdrop-blur-sm cursor-pointer"
            >
              <div className="h-40 bg-gradient-to-br from-brandGray to-brandBlack rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm">{project.description}</p>
            </motion.a>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
