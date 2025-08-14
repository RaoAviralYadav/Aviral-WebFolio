"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface ExperienceItem {
  logo?: string;
  title: string;
  company: string;
  type: string;
  date: string;
  location: string;
  description?: string[];
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Full Stack Developer Intern",
    company: "Academor",
    type: "Internship",
    date: "Jan 2025 – May 2025 · 5 mos",
    location: "Remote",
    description: [
      "Built a weather forecasting web app using React & Next.js.",
      "Implemented authentication with NextAuth.js.",
      "Applied TypeScript for maintainability.",
    ],
    skills: ["Web Development", "Node.js", "Vue.js", "JavaScript", "CSS", "HTML5", "REST APIs"],
  },
  {
    title: "Machine Learning Engineer Intern",
    company: "Wipro",
    type: "Internship",
    date: "Nov 2024 – Jan 2025 · 3 mos",
    location: "Remote",
    description: [
      "Built ML models for health & pricing predictions.",
      "Developed heart attack risk prediction using SVM, KNN, and ensemble models.",
      "Led laptop price prediction and lung cancer detection projects.",
    ],
    skills: [
      "KNN",
      "Decision Trees",
      "Seaborn",
      "Scikit-Learn",
      "Machine Learning",
      "Matplotlib",
      "RNN",
      "Pandas",
      "CNN",
      "XGBoost",
      "NumPy",
    ],
  },
  {
    title: "Business Development (Sales)",
    company: "She Can Foundation",
    type: "Internship",
    date: "May 2025 – Jun 2025 · 2 mos",
    location: "Remote",
    description: [
      "Initiated and managed WhatsApp groups to engage potential donors and promote NGO campaigns.",
      "Conducted outreach to individuals through personalized messaging and follow-ups to encourage donations.",
      "Successfully converted leads into donors, directly contributing to the organization's fundraising goals.",
    ],
    skills: ["Sales", "Digital Marketing", "Social Media Marketing", "SEO"],
  },
  {
    title: "Campus Ambassador",
    company: "Internshala Trainings",
    type: "Internship",
    date: "Apr 2025 – Aug 2025 · 5 mos",
    location: "Hybrid",
    skills: ["CRM", "Sales"],
  },
  {
    title: "Multimedia Assistant",
    company: "Heighers eSports IIT Madras",
    type: "Part-time",
    date: "Feb 2025 – Present · 7 mos",
    location: "Remote",
    skills: ["Content Development", "Public Speaking"],
  },
  {
    title: "Operation Logistics & Outreach Partnership / Event Host / Course Instructor",
    company: "STEMONEF COMMUNITY",
    type: "Part-time",
    date: "Jan 2025 – Aug 2025",
    location: "Remote",
    skills: [
      "Artificial Intelligence (AI)",
      "Web Development",
      "CSS",
      "HTML5",
      "Public Speaking",
      "Git",
      "JSON",
      "Vue.js",
      "JavaScript",
    ],
  },
  {
    title: "Event Host & Editor",
    company: "The Gir Literary Club",
    type: "Part-time",
    date: "Mar 2025 – Jun 2025 · 4 mos",
    location: "Remote",
    description: [
      "Designed and optimized weekly newsletters with SEO-integrated strategies, boosting engagement by 20%.",
      "Led social media promotions, achieving over 30% growth in reach during campaigns.",
    ],
    skills: ["Email Marketing", "Graphic Design", "Newsletter Design", "Public Speaking"],
  },
];

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section
      id="experience"
      className="relative px-6 py-16 text-brandWhite overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,0,255,0.15),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(0,255,255,0.15),_transparent_40%)] animate-pulse" />

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative text-4xl font-semibold mb-12 text-center"
      >
        Experience
        <motion.span
          className="block mt-2 h-[3px] w-32 mx-auto bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          style={{ transformOrigin: "center" }}
        />
      </motion.h2>

      {/* Timeline */}
      <div className="relative border-l border-gray-700 max-w-4xl mx-auto">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 ml-8 relative"
          >
            {/* Timeline Dot */}
            <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full ring-4 ring-[#0f0c29] animate-ping" />
            <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full ring-4 ring-[#0f0c29]" />

            {/* Card */}
            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
              <h3 className="text-2xl font-bold">{exp.title}</h3>
              <p className="text-gray-300 text-sm">
                {exp.company} · {exp.type}
              </p>
              <p className="text-gray-400 text-sm mb-2">
                {exp.date} | {exp.location}
              </p>

              {/* Toggle Button */}
              {exp.description && (
                <button
                  onClick={() =>
                    setExpandedIndex(expandedIndex === i ? null : i)
                  }
                  className="text-cyan-400 hover:underline text-sm mt-2"
                >
                  {expandedIndex === i ? "Hide Details" : "Show Details"}
                </button>
              )}

              {/* Animated Description */}
              <AnimatePresence>
                {expandedIndex === i && exp.description && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                      {exp.description.map((desc, idx) => (
                        <li key={idx}>{desc}</li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.skills.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px #a855f7" }}
                    className="bg-gray-800/60 text-gray-200 px-3 py-1 text-xs rounded-full border border-gray-600 hover:border-purple-500 transition-all duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
