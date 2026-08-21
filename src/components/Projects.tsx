"use client";
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code2, Server } from "lucide-react";
import { PROJECTS, COLORS } from "../constants";
import Image from "next/image";

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-20"
      style={{ backgroundColor: "rgba(15, 23, 42, 0.3)" }}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <span
            className="text-2xl md:text-3xl font-bold flex gap-2"
            style={{ color: COLORS.text.heading }}
          >
            <span className="font-mono" style={{ color: COLORS.primary }}>
              03.
            </span>{" "}
            Featured Projects
          </span>
          <div
            className="h-px grow max-w-xs"
            style={{ backgroundColor: COLORS.background.card }}
          ></div>
        </motion.div>

        <div className="space-y-24">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`relative grid md:grid-cols-12 gap-8 items-center ${
                index % 2 === 1 ? "text-right" : "text-left"
              }`}
            >
              {/* Content Side */}
              <div
                className={`md:col-span-7 ${
                  index % 2 === 1
                    ? "md:col-start-6 md:order-2"
                    : "md:col-start-1 md:order-1"
                } z-10`}
              >
                <p
                  className="font-mono text-sm mb-2"
                  style={{ color: COLORS.primary }}
                >
                  Featured Project
                </p>
                <h3
                  className="text-3xl font-bold mb-4 hover:text-primary transition-colors cursor-pointer"
                  style={{ color: COLORS.text.heading }}
                >
                  {project.title}
                </h3>

                {/* Description Box - Always Text Left for Readability */}
                <div
                  className="p-6 rounded-lg shadow-xl mb-6 text-sm leading-relaxed border text-left"
                  style={{
                    backgroundColor: COLORS.background.card,
                    color: COLORS.text.body,
                    borderColor: COLORS.background.card,
                  }}
                >
                  <p className="mb-4">{project.fullDescription}</p>
                  <div className="mt-4">
                    <h4
                      className="font-bold mb-2 border-b pb-1 inline-block"
                      style={{
                        color: COLORS.text.subheading,
                        borderColor: COLORS.background.card,
                      }}
                    >
                      Key Challenges Solved
                    </h4>
                    <ul className="space-y-2 mt-2">
                      {project.challenges.map(
                        (
                          c: { title: string; description: string },
                          i: number
                        ) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-xs justify-start text-left"
                          >
                            <span
                              className="mt-0.5 shrink-0"
                              style={{ color: COLORS.primary }}
                            >
                              ▹
                            </span>
                            <span className="w-full">
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
                </div>

                <ul
                  className={`flex flex-wrap gap-4 font-mono text-sm mb-8 ${
                    index % 2 === 1 ? "justify-end" : "justify-start"
                  }`}
                  style={{ color: COLORS.text.body }}
                >
                  {project.techStack.map((tech: string) => (
                    <li
                      key={tech}
                      className="px-2 py-1 rounded"
                      style={{ backgroundColor: "rgba(30, 41, 59, 0.5)" }}
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div
                  className={`flex flex-wrap gap-4 ${
                    index % 2 === 1 ? "justify-end" : "justify-start"
                  }`}
                >
                  {/* Github Link Logic */}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-primary transition-colors flex items-center gap-2 text-sm"
                      title="GitHub Repo"
                      style={{ color: COLORS.text.subheading }}
                    >
                      <Github size={20} /> Code
                    </a>
                  )}

                  {/* Split Frontend/Backend Links */}
                  {project.links.githubFrontend && (
                    <a
                      href={project.links.githubFrontend}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-primary transition-colors flex items-center gap-2 text-sm"
                      title="Frontend Code"
                      style={{ color: COLORS.text.subheading }}
                    >
                      <Code2 size={20} /> Frontend
                    </a>
                  )}
                  {project.links.githubBackend && (
                    <a
                      href={project.links.githubBackend}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-primary transition-colors flex items-center gap-2 text-sm"
                      title="Backend Code"
                      style={{ color: COLORS.text.subheading }}
                    >
                      <Server size={20} /> Backend
                    </a>
                  )}

                  {/* Live Link */}
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-primary transition-colors flex items-center gap-2 text-sm font-bold"
                    title="Live Demo"
                    style={{ color: COLORS.text.subheading }}
                  >
                    <ExternalLink size={20} /> Live Demo
                  </a>
                </div>
              </div>

              {/* Visual Side (Image) */}
              <div
                className={`md:col-span-5 ${
                  index % 2 === 1
                    ? "md:col-start-1 md:order-1"
                    : "md:col-start-8 md:order-2"
                } relative group`}
              >
                <div
                  className="relative rounded-lg overflow-hidden border shadow-2xl"
                  style={{ borderColor: COLORS.background.card }}
                >
                  <div
                    className="absolute inset-0 group-hover:bg-transparent transition-all duration-300 z-10 cursor-pointer"
                    style={{ backgroundColor: "rgba(16, 185, 129, 0.2)" }}
                  ></div>
                  <a href={project.links.live} target="_blank" rel="noreferrer">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={500}
                      className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transform group-hover:scale-105 transition-all duration-500"
                    />
                  </a>
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
