import React from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";

const experiences = [
  {
    id: 1,
    role: "Front-End Developer (Remote)",
    company: "Kodera IT Consulting, Inc. (Washington, DC)",
    duration: "1 Year",
    bullets: [
      "Engineered and maintained user-facing features for enterprise web applications using React.js, Next.js, and TypeScript.",
      "Collaborated remotely with cross-functional teams to build document management interfaces and custom client web solutions.",
      "Implemented state management architectures using Redux Toolkit and REST API integrations for real-time data handling.",
      "Optimized application performance, web vitals, and responsiveness across mobile and desktop environments.",
    ],
    skills: ["React.js", "Next.js", "TypeScript", "Redux Toolkit", "REST APIs"],
  },
  {
    id: 2,
    role: "Freelance Front-End Developer",
    company: "Self-Employed — Islamabad, Pakistan",
    duration: "Ongoing",
    bullets: [
      "Built custom React and Next.js applications for individual clients with end-to-end responsive design.",
      "Integrated authentication and real-time backend databases (Firebase) for interactive web solutions.",
    ],
    skills: [
      "React",
      "Next.js",
      "Firebase",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },
];

export default function Experience() {
  return (
    <AnimatedSection
      id="experience"
      className="py-20 px-6 bg-slate-900 text-white border-t border-slate-800"
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-3xl font-bold text-center text-cyan-400">
          Professional Experience
        </h2>

        <div className="relative ml-4 md:ml-32 space-y-10">
          {/* Timeline line that draws downward as it enters view */}
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-px bg-slate-700 origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          />

          {experiences.map((item, idx) => (
            <motion.div
              key={item.id}
              className="relative pl-6 md:pl-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Timeline Dot */}
              <motion.div
                className="absolute -left-[9px] top-1.5 w-4 h-4 bg-cyan-400 rounded-full border-4 border-slate-900 shadow-md"
                animate={{ boxShadow: ["0 0 0 0 rgba(34,211,238,0.4)", "0 0 0 8px rgba(34,211,238,0)"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              />

              {/* Duration badge */}
              <span className="inline-block bg-slate-800 text-cyan-400 text-xs font-semibold px-3 py-1 rounded-full mb-2">
                {item.duration}
              </span>

              <h3 className="text-xl font-bold text-slate-100">{item.role}</h3>
              <p className="text-cyan-500 font-medium text-sm mb-3">
                {item.company}
              </p>

              <ul className="list-disc list-inside text-slate-300 text-sm sm:text-base leading-relaxed mb-4 space-y-1">
                {item.bullets.map((bullet, idx2) => (
                  <li key={idx2} className="leading-relaxed">
                    <span className="-ml-1">{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-slate-950 text-slate-300 text-xs px-2.5 py-1 rounded border border-slate-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
