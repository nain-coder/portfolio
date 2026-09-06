import React from "react";
import { motion } from "framer-motion";
import { AnimatedSection, staggerContainer, staggerItem } from "./AnimatedSection";

export default function TechStack() {
  const skills = [
    "React.js",
    "Next.js",
    "JavaScript (ES6+)",
    "TypeScript",
    "Redux Toolkit",
    "Tailwind CSS",
    "HTML5 & CSS3",
    "REST APIs",
    "Git & GitHub",
    "Firebase Hosting",
  ];

  return (
    <AnimatedSection
      id="skills"
      className="py-20 px-6 bg-slate-950 text-white border-t border-slate-800"
    >
      <div className="max-w-4xl mx-auto space-y-10">
        <h2 className="text-3xl font-bold text-center text-cyan-400">
          Technical Skills
        </h2>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill}
              variants={staggerItem}
              whileHover={{ y: -4, scale: 1.03 }}
              className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-center font-medium hover:border-cyan-500 hover:text-cyan-400 transition-colors cursor-default"
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
