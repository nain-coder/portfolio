import React from "react";
import { motion } from "framer-motion";
import { AnimatedSection, staggerContainer, staggerItem } from "./AnimatedSection";

const educationData = [
  {
    id: 1,
    degree: "Bachelor of Science in Software Engineering (BSSE)",
    institution: "International Islamic University, Islamabad",
    duration: "2022 - Present",
    details:
      "Relevant Coursework: Web Engineering, Software Construction & Development, Data Structures & Algorithms, Database Systems, Formal Methods, Operating Systems.",
    type: "Degree",
  },
  {
    id: 2,
    degree: "React - The Complete Guide",
    institution: "Udemy / Maximilian Schwarzmüller",
    duration: "Completed",
    details:
      "Comprehensive training covering React Hooks, Redux Toolkit, React Router, Next.js, TanStack Query, and REST APIs integration.",
    type: "Certification",
  },
];

export default function Education() {
  return (
    <AnimatedSection
      id="education"
      className="py-20 px-6 bg-slate-950 text-white border-t border-slate-800"
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-3xl font-bold text-center text-cyan-400">
          Education & Certifications
        </h2>

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {educationData.map((item) => (
            <motion.div
              key={item.id}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              className="bg-slate-900 p-6 rounded-xl border border-slate-800 flex flex-col justify-between hover:border-cyan-500/50 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-start gap-2">
                  <span className="bg-cyan-500/10 text-cyan-400 text-xs font-semibold px-3 py-1 rounded-full border border-cyan-500/20">
                    {item.type}
                  </span>
                  <span className="text-slate-400 text-xs font-medium">
                    {item.duration}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-100 leading-snug">
                  {item.degree}
                </h3>

                <p className="text-cyan-400 font-medium text-sm">
                  {item.institution}
                </p>

                <p className="text-slate-300 text-sm leading-relaxed pt-2">
                  {item.details}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
