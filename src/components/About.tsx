"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, GraduationCap, Calendar, Building } from "lucide-react";
import { EDUCATION, PERSONAL_INFO, COLORS } from "../constants";

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-14"
        >
          <span className="text-2xl md:text-3xl font-bold flex items-center gap-3">
            <span className="font-mono-jb text-lg" style={{ color: COLORS.primary }}>
              01.
            </span>
            <span className="gradient-text-static">About Me</span>
          </span>
          <div
            className="h-px grow max-w-xs"
            style={{
              background: "linear-gradient(90deg, rgba(6, 214, 160, 0.3), transparent)",
            }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-8 h-full">
              <div
                className="space-y-5 text-base leading-relaxed"
                style={{ color: COLORS.text.body }}
              >
                <p>
                  Hello! My name is <span className="font-semibold" style={{ color: COLORS.text.heading }}>Rimon</span> and I enjoy creating things that live on
                  the internet. My interest in web development started back in
                  2022 when I completed my SSC, and since then, I&apos;ve been
                  diving deep into the world of code.
                </p>
                <p>
                  Fast-forward to today, I have 2 years of hands-on experience. I
                  am currently pursuing my Diploma in{" "}
                  <span className="font-semibold" style={{ color: COLORS.secondary }}>
                    Computer Science & Technology
                  </span>{" "}
                  at Kushtia Polytechnic Institute.
                </p>
                <p>
                  I&apos;ve built several projects integrating cutting-edge tech
                  like{" "}
                  <span className="font-semibold gradient-text-static">Generative AI</span>{" "}
                  with robust backend systems. I thrive on learning new
                  technologies and adapting to modern development standards.
                </p>

                <div className="flex items-center gap-3 mt-6 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{
                      background: "rgba(6, 214, 160, 0.15)",
                      border: "1px solid rgba(6, 214, 160, 0.2)",
                    }}
                  >
                    <MapPin className="w-4 h-4" style={{ color: COLORS.primary }} />
                  </div>
                  <span className="text-sm" style={{ color: COLORS.text.subheading }}>
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-8 h-full">
              <h3
                className="text-xl font-bold mb-8 flex items-center gap-3"
                style={{ color: COLORS.text.heading }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, rgba(131, 56, 236, 0.2), rgba(255, 0, 110, 0.15))",
                    border: "1px solid rgba(131, 56, 236, 0.25)",
                  }}
                >
                  <GraduationCap className="w-4.5 h-4.5" style={{ color: COLORS.secondary }} />
                </div>
                Education
              </h3>

              <div className="space-y-6">
                {EDUCATION.map((edu, idx) => (
                  <div
                    key={idx}
                    className="relative pl-6"
                    style={{
                      borderLeft: `2px solid ${idx === 0 ? "rgba(6, 214, 160, 0.4)" : "rgba(255, 255, 255, 0.08)"}`,
                    }}
                  >
                    {/* Timeline dot */}
                    <div
                      className="absolute -left-[7px] top-1 w-3 h-3 rounded-full"
                      style={{
                        background: idx === 0
                          ? "linear-gradient(135deg, #06d6a0, #8338ec)"
                          : "rgba(255, 255, 255, 0.15)",
                        boxShadow: idx === 0 ? "0 0 12px rgba(6, 214, 160, 0.4)" : "none",
                      }}
                    />

                    <div className="glass p-4" style={{ borderRadius: 12 }}>
                      <div className="flex items-center gap-2 mb-1">
                        <Building className="w-3.5 h-3.5" style={{ color: COLORS.text.meta }} />
                        <h4
                          className="text-sm font-semibold"
                          style={{ color: COLORS.text.subheading }}
                        >
                          {edu.institution}
                        </h4>
                      </div>
                      <p
                        className="font-mono-jb text-xs mb-1.5"
                        style={{ color: COLORS.primary }}
                      >
                        {edu.degree}
                      </p>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3 h-3" style={{ color: COLORS.text.meta }} />
                        <p className="text-xs" style={{ color: COLORS.text.meta }}>
                          {edu.year} · {edu.location}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
