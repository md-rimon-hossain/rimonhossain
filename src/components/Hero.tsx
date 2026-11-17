"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import Image from "next/image";
import { ArrowDown, FileText, Github, Linkedin } from "lucide-react";

const rotatingPhrases = [
  { prefix: "I make it ", pill: "work." },
  { prefix: "I build ", pill: "reliable", suffix: " systems." },
  { prefix: "I turn ideas into ", pill: "real products." },
  { prefix: "I ship ", pill: "experiences." },
];

const mantras = [
  { id: "building", label: "BUILDING", dotColor: "bg-amber-400" },
  { id: "engineering", label: "ENGINEERING", dotColor: "bg-blue-400" },
  { id: "shipping", label: "SHIPPING", dotColor: "bg-emerald-400" },
];

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % rotatingPhrases.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  // Mantra active tab state
  const [activeMantra, setActiveMantra] = useState(0);
  const [isMantraHovered, setIsMantraHovered] = useState(false);

  // Auto-cycle the BUILDING • ENGINEERING • SHIPPING ribbon
  useEffect(() => {
    if (isMantraHovered) return;
    const interval = setInterval(() => {
      setActiveMantra((prev) => (prev + 1) % mantras.length);
    }, 2200);
    return () => clearInterval(interval);
  }, [isMantraHovered]);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const current = rotatingPhrases[phraseIndex];

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="relative mb-5"
        >
          <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full p-1 bg-linear-to-b from-gray-300 via-gray-100 to-gray-300 shadow-sm">
            <div className="w-full h-full rounded-full overflow-hidden relative border-2 border-white bg-gray-100">
              <Image
                src="/profile.jpg"
                alt="Rimon Hossain"
                fill
                priority
                sizes="(max-width: 768px) 128px, 144px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </motion.div>

        {/* BUILDING • ENGINEERING • SHIPPING Interactive Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          onMouseEnter={() => setIsMantraHovered(true)}
          onMouseLeave={() => setIsMantraHovered(false)}
          className="relative inline-flex items-center p-1 sm:p-1.5 rounded-full bg-white/95 border border-gray-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.04)] backdrop-blur-md mb-4 select-none"
        >
          {mantras.map((mantra, idx) => {
            const isActive = activeMantra === idx;
            return (
              <div key={mantra.id} className="flex items-center">
                <button
                  type="button"
                  onClick={() => setActiveMantra(idx)}
                  className={`relative px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold tracking-[0.16em] transition-colors duration-200 flex items-center gap-1.5 cursor-pointer ${
                    isActive ? "text-white" : "text-gray-500 hover:text-black"
                  }`}
                >
                  {/* Sliding spring background pill */}
                  {isActive && (
                    <motion.div
                      layoutId="activeMantraPill"
                      className="absolute inset-0 rounded-full bg-black shadow-sm z-0"
                      transition={{
                        type: "spring",
                        stiffness: 450,
                        damping: 35,
                      }}
                    />
                  )}

                  {/* Text & live glowing pulse dot */}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {isActive && (
                      <span className="relative flex h-1.5 w-1.5">
                        <span
                          className={`animate-ping absolute inline-flex h-full w-full rounded-full ${mantra.dotColor} opacity-75`}
                        />
                        <span
                          className={`relative inline-flex rounded-full h-1.5 w-1.5 ${mantra.dotColor}`}
                        />
                      </span>
                    )}
                    {mantra.label}
                  </span>
                </button>

                {/* Dot separator */}
                {idx < mantras.length - 1 && (
                  <span className="text-gray-300 text-[10px] px-1 select-none font-bold">
                    &bull;
                  </span>
                )}
              </div>
            );
          })}
        </motion.div>

        {/* Morphing Text — Vertical Cascade & Character Stagger */}
        <LayoutGroup id="hero-morphing-headline">
          <div className="min-h-[56px] sm:min-h-[76px] lg:min-h-[88px] flex items-center justify-center  select-none">
            <motion.h1
              layout
              // transition={{
              //   layout: { type: "spring", stiffness: 200, damping: 30 },
              // }}
              className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] flex items-center justify-center flex-wrap"
            >
              {/* Prefix — flip */}
              <motion.span
                layout
                // transition={{
                //   layout: { type: "spring",  },
                // }}
                className="relative inline-flex items-center"
                style={{ perspective: "600px" }}
              >
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.span
                    key={current.prefix}
                    initial={{ opacity: 0, rotateX: 90 }}
                    animate={{ opacity: 1, rotateX: 0 }}
                    // exit={{ opacity: 0, rotateX: -90 }}
                    transition={{
                      mass: 0.8,
                    }}
                    className="inline-block whitespace-pre"
                    style={{ transformOrigin: "center center" }}
                  >
                    {current.prefix}
                  </motion.span>
                </AnimatePresence>
              </motion.span>

              {/* Pill — typewriter write effect */}
              <motion.span
                layout
                transition={{
                  layout: { type: "spring" },
                }}
                className="relative inline-flex items-center justify-center px-4 sm:px-6 py-1 sm:py-1.5 mx-1.5 sm:mx-2 rounded-full bg-[#f2f2f4] text-[#111111] shadow-[0_1px_2px_rgba(0,0,0,0.04)] border border-gray-200/50"
              >
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.span
                    key={current.pill}
                    className="inline-flex whitespace-nowrap font-bold"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={{
                      hidden: {},
                      visible: {
                        transition: {
                          staggerChildren: 0.055,
                          delayChildren: 0.15,
                        },
                      },
                      exit: {
                        opacity: 0,
                        filter: "blur(6px)",
                        transition: { duration: 0.2, ease: "easeIn" },
                      },
                    }}
                  >
                    {current.pill.split("").map((char, i) => (
                      <motion.span
                        key={`${current.pill}-${i}`}
                        variants={{
                          hidden: { opacity: 0 },
                          visible: { opacity: 1 },
                        }}
                        transition={{ duration: 0.02 }}
                        className="inline-block"
                        style={{
                          whiteSpace: char === " " ? "pre" : "normal",
                        }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </motion.span>
                </AnimatePresence>
              </motion.span>

              {/* Suffix — flip */}
              <motion.span
                layout
                className="relative inline-flex items-center"
                // style={{ perspective: '600px' }}
              >
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.span
                    key={current.suffix}
                    initial={{ opacity: 0, rotateX: 90 }}
                    animate={{ opacity: 1, rotateX: 0 }}
                    transition={{
                      mass: 0.8,
                    }}
                    className="inline-block whitespace-pre"
                    // style={{ transformOrigin: 'center center' }}
                  >
                    {current.suffix}
                  </motion.span>
                </AnimatePresence>
              </motion.span>
            </motion.h1>
          </div>
        </LayoutGroup>

        {/* Clean, Friendly & Authentic Value Proposition */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-4 text-[16px] sm:text-[18px] leading-relaxed text-[#374151] max-w-xl mx-auto font-normal"
        >
          Full-stack developer with a can-do mindset. I love writing clean,
          testable backend code, crafting smooth frontends, and learning
          whatever tools it takes to solve real problems.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <button
            onClick={() => handleScroll("#projects")}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white text-xs font-semibold rounded-lg hover:bg-gray-800 transition-colors shadow-xs"
          >
            View Projects
            <ArrowDown size={14} />
          </button>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 bg-white text-gray-800 text-xs font-semibold rounded-lg hover:border-black hover:text-black transition-colors"
          >
            <FileText size={14} />
            Resume
          </a>
          <div className="flex items-center gap-2 pl-1">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-lg border border-gray-200 text-gray-600 hover:text-black hover:border-black bg-white transition-colors"
            >
              <Github size={16} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-lg border border-gray-200 text-gray-600 hover:text-black hover:border-black bg-white transition-colors"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Hero bottom gradient blend */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-[#fafafa] to-transparent z-10"
        aria-hidden="true"
      />
    </section>
  );
}
