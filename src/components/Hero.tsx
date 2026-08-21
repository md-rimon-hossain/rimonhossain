"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Download } from "lucide-react";
import Image from "next/image";
import { PERSONAL_INFO, COLORS } from "../constants";

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-12">
      {/* Background Elements */}
      <div
        className="absolute top-20 left-10 w-72 h-72 rounded-full blur-[100px]"
        style={{ backgroundColor: "rgba(16, 185, 129, 0.1)" }}
      />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-[100px]"
        style={{ backgroundColor: "rgba(59, 130, 246, 0.1)" }}
      />

      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span
                className="font-mono text-lg mb-4 block"
                style={{ color: COLORS.primary }}
              >
                Hi, my name is
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold mb-4 tracking-tight"
              style={{ color: COLORS.text.heading }}
            >
              {PERSONAL_INFO.name}.
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
              style={{ color: COLORS.text.body }}
            >
              I build things for the web.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg md:text-xl max-w-xl mb-10 leading-relaxed mx-auto md:mx-0"
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
              <span className="font-mono" style={{ color: COLORS.primary }}>
                Next.js
              </span>{" "}
              and{" "}
              <span className="font-mono" style={{ color: COLORS.primary }}>
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
              <a
                href="#projects"
                className="group bg-transparent border hover:bg-primary/10 px-6 py-3 rounded-md font-mono flex items-center gap-2 transition-all"
                style={{ borderColor: COLORS.primary, color: COLORS.primary }}
              >
                Check out my work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={PERSONAL_INFO.resumeUrl}
                download
                className="hover:bg-slate-700 px-6 py-3 rounded-md font-mono flex items-center gap-2 transition-all border hover:border-primary/50"
                style={{
                  backgroundColor: COLORS.background.button,
                  color: COLORS.text.light,
                  borderColor: COLORS.background.card,
                }}
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>

              <a
                href="https://github.com/md-rimon-hossain"
                target="_blank"
                rel="noreferrer"
                className="hover:bg-slate-700 px-6 py-3 rounded-md font-mono flex items-center gap-2 transition-all"
                style={{
                  backgroundColor: COLORS.background.button,
                  color: COLORS.text.light,
                }}
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
              <div
                className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 shadow-2xl relative group"
                style={{ borderColor: COLORS.background.card }}
              >
                <div
                  className="absolute inset-0 group-hover:bg-transparent transition-all duration-300 z-10"
                  style={{ backgroundColor: "rgba(16, 185, 129, 0.2)" }}
                ></div>
                <Image
                  src={PERSONAL_INFO.profileImage}
                  alt={PERSONAL_INFO.name}
                  width={320}
                  height={320}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                />
              </div>

              {/* Decorative Box Behind */}
              <div
                className="absolute -inset-4 border-2 rounded-2xl z-[-1] translate-x-4 translate-y-4"
                style={{ borderColor: "rgba(16, 185, 129, 0.3)" }}
              ></div>
              <div
                className="absolute -inset-4 border-2 rounded-2xl z-[-1] -translate-x-4 -translate-y-4"
                style={{ borderColor: "rgba(59, 130, 246, 0.3)" }}
              ></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
