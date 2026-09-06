import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const roles = [
  "Front-End Developer",
  "React Engineer",
  "Next.js Specialist",
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

function RoleCycler() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-block h-8 sm:h-9 overflow-hidden align-middle">
      {roles.map((role, i) => (
        <motion.span
          key={role}
          className="absolute left-0 right-0"
          initial={false}
          animate={
            i === index
              ? { y: 0, opacity: 1 }
              : { y: i < index ? -32 : 32, opacity: 0 }
          }
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {role}
        </motion.span>
      ))}
      {/* keeps the layout width stable to the longest role */}
      <span className="invisible">{roles.reduce((a, b) => (a.length > b.length ? a : b))}</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 px-6 bg-slate-900 text-white overflow-hidden"
    >
      {/* Ambient background glow — subtle, slow, non-distracting */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[560px] h-[560px] rounded-full bg-cyan-500/10 blur-3xl"
        animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative max-w-4xl text-center space-y-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Profile Picture */}
        <motion.div variants={item} className="flex justify-center mb-6">
          <motion.div
            className="relative"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 rounded-full bg-cyan-400/30 blur-xl scale-110" />
            <img
              src="/profile.jpg"
              alt="Muhammad Zulqarnain"
              className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full border-4 border-cyan-400 object-cover shadow-xl shadow-cyan-500/10"
            />
          </motion.div>
        </motion.div>

        <motion.h1
          variants={item}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight"
        >
          Hi, I'm <span className="text-cyan-400">Muhammad Zulqarnain</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="text-xl font-medium text-slate-400"
        >
          <RoleCycler />
        </motion.p>

        <motion.p
          variants={item}
          className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
        >
          I build performant, responsive web applications using React, Next.js,
          and modern CSS frameworks with clean architecture and efficient state
          management.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          variants={item}
          className="flex flex-wrap justify-center gap-4 pt-4"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            View Projects
          </motion.a>

          <motion.a
            href="https://drive.google.com/file/d/1LdnKCxK1DmZstuXdGepRgy27lkgPXMYU/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-slate-800 hover:bg-slate-700 text-cyan-400 border border-slate-700 font-semibold px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            View CV
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Social Icons */}
        <motion.div variants={item} className="flex justify-center gap-6 pt-6">
          <motion.a
            href="https://github.com/nain-coder"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, rotate: -6 }}
            className="text-slate-400 hover:text-cyan-400 transition-colors p-2"
            aria-label="GitHub Profile"
          >
            <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/muhammad-zulqarnain-dev"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, rotate: 6 }}
            className="text-slate-400 hover:text-cyan-400 transition-colors p-2"
            aria-label="LinkedIn Profile"
          >
            <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
}
