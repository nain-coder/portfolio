import React from "react";
import { projectsData } from "../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-slate-900 text-white border-t border-slate-800"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-3xl font-bold text-center text-cyan-400">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-slate-950 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-100">
                  {project.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-cyan-950 text-cyan-400 text-xs px-3 py-1 rounded-full border border-cyan-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex space-x-4 pt-6 mt-4 border-t border-slate-900">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-300 hover:text-cyan-400 text-sm font-semibold"
                >
                  GitHub Code →
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-300 hover:text-cyan-400 text-sm font-semibold"
                >
                  Live Demo →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
