"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Download, Sparkles } from "lucide-react";
import Image from "next/image";
import { PERSONAL_INFO, COLORS } from "../constants";

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-16">
      {/* Decorative orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20"
        style={{
          background: `radial-gradient(circle, ${COLORS.primary}, transparent)`,
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] opacity-15"
        style={{
          background: `radial-gradient(circle, ${COLORS.secondary}, transparent)`,
        }}
      />

      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 glass-btn px-4 py-2 text-sm font-mono-jb mb-6">
                <Sparkles className="w-3.5 h-3.5" style={{ color: COLORS.primary }} />
                <span style={{ color: COLORS.primary }}>Hi, my name is</span>
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold mb-4 tracking-tight"
            >
              <span className="gradient-text">{PERSONAL_INFO.name}.</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-5xl font-bold mb-8"
              style={{ color: COLORS.text.body }}
            >
              I build things for the web.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base md:text-lg max-w-xl mb-10 leading-relaxed mx-auto md:mx-0"
              style={{ color: COLORS.text.body }}
            >
              Engineer exceptional digital experiences using the{" "}
              <span
                className="font-semibold"
                style={{ color: COLORS.secondary }}
              >
                MERN Stack
              </span>
              . I specialize in building scalable, high-performance applications
              that fuse robust backend architecture with modern{" "}
              <span className="font-mono-jb" style={{ color: COLORS.primary }}>
                Next.js
              </span>{" "}
              and{" "}
              <span className="font-mono-jb" style={{ color: COLORS.primary }}>
                Generative AI
              </span>{" "}
              solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap justify-center md:justify-start gap-4"
            >
              {/* Primary CTA - Gradient border glass button */}
              <a
                href="#projects"
                className="group gradient-border px-6 py-3.5 font-mono-jb text-sm flex items-center gap-2.5 transition-all duration-300 hover:shadow-lg"
                style={{
                  color: COLORS.primary,
                  boxShadow: "0 4px 20px rgba(6, 214, 160, 0.1)",
                }}
              >
                Check out my work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Download CV */}
              <a
                href={PERSONAL_INFO.resumeUrl}
                download
                className="glass-btn px-6 py-3.5 font-mono-jb text-sm flex items-center gap-2.5"
                style={{ color: COLORS.text.light }}
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>

              {/* Github */}
              <a
                href="https://github.com/md-rimon-hossain"
                target="_blank"
                rel="noreferrer"
                className="glass-btn px-6 py-3.5 font-mono-jb text-sm flex items-center gap-2.5"
                style={{ color: COLORS.text.light }}
              >
                <Code2 className="w-4 h-4" />
                Github
              </a>
            </motion.div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center md:justify-end relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="relative z-10"
            >
              {/* Glow behind image */}
              <div
                className="absolute inset-0 rounded-2xl blur-[40px] opacity-40"
                style={{
                  background: "linear-gradient(135deg, rgba(6, 214, 160, 0.3), rgba(131, 56, 236, 0.3))",
                }}
              />

              {/* Glass frame */}
              <div className="relative gradient-border p-1.5 group" style={{ borderRadius: 20 }}>
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden relative">
                  <div
                    className="absolute inset-0 group-hover:opacity-0 transition-all duration-500 z-10"
                    style={{
                      background: "linear-gradient(135deg, rgba(6, 214, 160, 0.15), rgba(131, 56, 236, 0.15))",
                    }}
                  />
                  <Image
                    src={PERSONAL_INFO.profileImage}
                    alt={PERSONAL_INFO.name}
                    width={320}
                    height={320}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Floating decorative glass elements */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 glass-btn p-3 glow-cyan"
                style={{ borderRadius: 14 }}
              >
                <Code2 className="w-5 h-5" style={{ color: COLORS.primary }} />
              </motion.div>
              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-3 -left-3 glass-btn p-3 glow-violet"
                style={{ borderRadius: 14 }}
              >
                <Sparkles className="w-5 h-5" style={{ color: COLORS.secondary }} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
