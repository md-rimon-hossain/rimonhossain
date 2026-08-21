"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, GraduationCap } from "lucide-react";
import { EDUCATION, PERSONAL_INFO, COLORS } from "../constants";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20"
      style={{ backgroundColor: "rgba(15, 23, 42, 0.3)" }}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12"
        >
          <span
            className="text-2xl md:text-3xl font-bold flex gap-2"
            style={{ color: COLORS.text.heading }}
          >
            <span className="font-mono" style={{ color: COLORS.primary }}>
              01.
            </span>{" "}
            About Me
          </span>
          <div
            className="h-px grow max-w-xs"
            style={{ backgroundColor: COLORS.background.card }}
          ></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div
              className="space-y-4 text-lg leading-relaxed"
              style={{ color: COLORS.text.body }}
            >
              <p>
                Hello! My name is Rimon and I enjoy creating things that live on
                the internet. My interest in web development started back in
                2022 when I completed my SSC, and since then, I&apos;ve been
                diving deep into the world of code.
              </p>
              <p>
                Fast-forward to today, I have 2 years of hands-on experience. I
                am currently pursuing my Diploma in{" "}
                <span style={{ color: COLORS.secondary }}>
                  Computer Science & Technology
                </span>{" "}
                at Kushtia Polytechnic Institute.
              </p>
              <p>
                I&apos;ve built several projects integrating cutting-edge tech
                like{" "}
                <span style={{ color: COLORS.primary }}>Generative AI</span>{" "}
                with robust backend systems. I thrive on learning new
                technologies and adapting to modern development standards.
              </p>

              <div
                className="flex items-center gap-2 mt-4"
                style={{ color: COLORS.text.subheading }}
              >
                <MapPin className="w-5 h-5" style={{ color: COLORS.primary }} />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-lg border"
            style={{
              backgroundColor: "rgba(30, 41, 59, 0.5)",
              borderColor: COLORS.background.card,
            }}
          >
            <h3
              className="text-xl font-bold mb-6 flex items-center gap-2"
              style={{ color: COLORS.text.heading }}
            >
              <GraduationCap style={{ color: COLORS.primary }} /> Education
            </h3>
            <div className="space-y-8">
              {EDUCATION.map((edu, idx) => (
                <div
                  key={idx}
                  className="relative pl-6 border-l"
                  style={{ borderColor: COLORS.background.card }}
                >
                  <div
                    className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: COLORS.secondary }}
                  ></div>
                  <h4
                    className="text-lg font-semibold"
                    style={{ color: COLORS.text.subheading }}
                  >
                    {edu.institution}
                  </h4>
                  <p
                    className="font-mono text-sm"
                    style={{ color: COLORS.primary }}
                  >
                    {edu.degree}
                  </p>
                  <p className="text-sm" style={{ color: COLORS.text.meta }}>
                    {edu.year} | {edu.location}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
