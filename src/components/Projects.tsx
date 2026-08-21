"use client";
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code2, Server, ArrowUpRight } from "lucide-react";
import { PROJECTS, COLORS } from "../constants";
import Image from "next/image";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="text-2xl md:text-3xl font-bold flex items-center gap-3">
            <span className="font-mono-jb text-lg" style={{ color: COLORS.primary }}>
              03.
            </span>
            <span className="gradient-text-static">Featured Projects</span>
          </span>
          <div
            className="h-px grow max-w-xs"
            style={{
              background: "linear-gradient(90deg, rgba(255, 0, 110, 0.3), transparent)",
            }}
          />
        </motion.div>

        <div className="space-y-20">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-0 overflow-hidden"
              style={{ borderRadius: 24 }}
            >
              <div className={`grid md:grid-cols-12 gap-0 ${index % 2 === 1 ? "direction-rtl" : ""}`}>
                {/* Image Side */}
                <div
                  className={`md:col-span-5 relative group overflow-hidden ${
                    index % 2 === 1 ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <div className="relative h-full min-h-[280px]">
                    {/* Gradient overlay */}
                    <div
                      className="absolute inset-0 z-10 transition-all duration-500 group-hover:opacity-0"
                      style={{
                        background: index % 2 === 0
                          ? "linear-gradient(135deg, rgba(6, 214, 160, 0.25), rgba(131, 56, 236, 0.2))"
                          : "linear-gradient(135deg, rgba(131, 56, 236, 0.25), rgba(255, 0, 110, 0.2))",
                      }}
                    />
                    <a href={project.links.live} target="_blank" rel="noreferrer">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transform group-hover:scale-105 transition-all duration-700"
                      />
                    </a>

                    {/* Live badge */}
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noreferrer"
                      className="absolute top-4 right-4 z-20 glass-btn px-3 py-1.5 text-xs font-mono-jb flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ color: COLORS.primary }}
                    >
                      Live <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Content Side */}
                <div
                  className={`md:col-span-7 p-8 md:p-10 ${
                    index % 2 === 1 ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="font-mono-jb text-xs px-3 py-1 rounded-full"
                      style={{
                        color: COLORS.primary,
                        background: "rgba(6, 214, 160, 0.1)",
                        border: "1px solid rgba(6, 214, 160, 0.2)",
                      }}
                    >
                      {project.type}
                    </span>
                    <span
                      className="font-mono-jb text-xs"
                      style={{ color: COLORS.text.meta }}
                    >
                      Featured Project
                    </span>
                  </div>

                  <h3
                    className="text-2xl md:text-3xl font-bold mb-4"
                    style={{ color: COLORS.text.heading }}
                  >
                    {project.title}
                  </h3>

                  <p
                    className="text-sm leading-relaxed mb-6"
                    style={{ color: COLORS.text.body }}
                  >
                    {project.fullDescription}
                  </p>

                  {/* Challenges */}
                  <div
                    className="glass p-5 mb-6"
                    style={{ borderRadius: 14 }}
                  >
                    <h4
                      className="text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2"
                      style={{ color: COLORS.text.subheading }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: COLORS.primary }}
                      />
                      Key Challenges Solved
                    </h4>
                    <ul className="space-y-2.5">
                      {project.challenges.map(
                        (c: { title: string; description: string }, i: number) => (
                          <li
                            key={i}
                            className="flex items-start gap-2.5 text-xs"
                          >
                            <span
                              className="mt-0.5 shrink-0 text-sm"
                              style={{ color: COLORS.primary }}
                            >
                              ▹
                            </span>
                            <span style={{ color: COLORS.text.body }}>
                              <strong style={{ color: COLORS.text.subheading }}>
                                {c.title}:
                              </strong>{" "}
                              {c.description}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech: string) => (
                      <span
                        key={tech}
                        className="glass px-3 py-1.5 font-mono-jb text-[11px] font-medium"
                        style={{
                          color: COLORS.text.subheading,
                          borderRadius: 8,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-3">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="glass-btn px-4 py-2 flex items-center gap-2 text-xs font-medium transition-all duration-300"
                        style={{ color: COLORS.text.subheading }}
                        title="GitHub Repo"
                      >
                        <Github size={15} /> Code
                      </a>
                    )}
                    {project.links.githubFrontend && (
                      <a
                        href={project.links.githubFrontend}
                        target="_blank"
                        rel="noreferrer"
                        className="glass-btn px-4 py-2 flex items-center gap-2 text-xs font-medium transition-all duration-300"
                        style={{ color: COLORS.text.subheading }}
                        title="Frontend Code"
                      >
                        <Code2 size={15} /> Frontend
                      </a>
                    )}
                    {project.links.githubBackend && (
                      <a
                        href={project.links.githubBackend}
                        target="_blank"
                        rel="noreferrer"
                        className="glass-btn px-4 py-2 flex items-center gap-2 text-xs font-medium transition-all duration-300"
                        style={{ color: COLORS.text.subheading }}
                        title="Backend Code"
                      >
                        <Server size={15} /> Backend
                      </a>
                    )}
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noreferrer"
                      className="gradient-border px-4 py-2 flex items-center gap-2 text-xs font-bold transition-all duration-300"
                      style={{
                        color: COLORS.primary,
                        borderRadius: 12,
                      }}
                      title="Live Demo"
                    >
                      <ExternalLink size={15} /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
