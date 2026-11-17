'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { defaultProjects } from '@/data/projects';

export default function Projects() {
  const project = defaultProjects[0];
  const images = project.images;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Auto-play slideshow every 4.5s, pause on hover
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(nextSlide, 4500);
    return () => clearInterval(interval);
  }, [isHovered, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const currentImage = images[currentIndex];

  return (
    <section id="projects" className="pt-20 px-4 sm:px-6 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight"
          >
            Selected Projects
          </motion.h2>
          <div className="w-10 h-1 bg-black mx-auto mt-3 rounded-full" />
        </div>

        {/* Clean Outer Showcase Card matching reference design */}
        <div className="rounded-[28px] sm:rounded-[32px] bg-[#eef5fc] border border-[#e1ecf6] p-6 sm:p-10 shadow-xs">
          {/* Top Section: Two-Column Clean Info */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
            {/* Left Column: Title, Description, Meta */}
            <div className="lg:col-span-7">
              <h3 className="text-2xl sm:text-[28px] font-bold text-[#0f172a] tracking-tight mb-2">
                {project.title}
              </h3>
              <p className="text-sm sm:text-[15px] text-[#475569] leading-relaxed mb-6 max-w-xl font-normal">
                {project.shortDescription}
              </p>

              {/* Meta details inline */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#64748b]">
                <div>
                  <span className="text-[#94a3b8]">Built for</span>{' '}
                  <span className="font-semibold text-[#1e293b]">Mythium Lifestyle</span>
                </div>
                <div>
                  <span className="text-[#94a3b8]">My role</span>{' '}
                  <span className="font-semibold text-[#1e293b]">{project.role}</span>
                </div>
              
                <div>
                  <span className="text-[#94a3b8]">Year</span>{' '}
                  <span className="font-semibold text-[#1e293b]">2026</span>
                </div>
              </div>

              {/* Clean Tech Stack Pills */}
              <div className="flex flex-wrap items-center gap-1.5 mt-4">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-white/90 border border-[#d6e3f0] text-[#334155] text-[11px] sm:text-xs font-semibold tracking-tight shadow-2xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Highlighted Live Link CTA + 3 Impact Checkmarks */}
            <div className="lg:col-span-5 pt-1 lg:pt-0 flex flex-col justify-between space-y-4">
              {/* Prominent Highlighted Live Site Button */}
              <div className="flex items-center justify-start lg:justify-end">
                <a
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-black hover:bg-gray-800 text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 group"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span>Visit Live Store</span>
                  <ExternalLink
                    size={14}
                    className="text-gray-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </a>
              </div>

              {/* 3 Clean Impact / Feature Checkmarks */}
              <ul className="space-y-3 text-xs sm:text-[13px] text-[#334155] leading-snug">
                <li className="flex items-start gap-2.5">
                  <span className="shrink-0 w-4 h-4 rounded-full bg-[#cbd5e1]/80 text-[#334155] flex items-center justify-center text-[10px] font-bold mt-0.5">
                    &#10003;
                  </span>
                  <span>
                    Full-featured online storefront replacing manual social media and phone registers
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="shrink-0 w-4 h-4 rounded-full bg-[#cbd5e1]/80 text-[#334155] flex items-center justify-center text-[10px] font-bold mt-0.5">
                    &#10003;
                  </span>
                  <span>
                    bKash payment &amp; Cash on Delivery with automated Steadfast courier delivery tracking
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="shrink-0 w-4 h-4 rounded-full bg-[#cbd5e1]/80 text-[#334155] flex items-center justify-center text-[10px] font-bold mt-0.5">
                    &#10003;
                  </span>
                  <span>
                    Live administrative dashboard to manage product catalog, pricing, and orders in one place
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section: Sleek Rounded Screen Frame with Slider */}
          <div
            className="relative w-full aspect-[16/10] sm:aspect-[16/9.5] rounded-2xl sm:rounded-[22px] overflow-hidden bg-[#0c0d0e] border border-black/10 shadow-md group select-none"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Sliding Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full"
              >
                <Image
                  src={currentImage.url}
                  alt={currentImage.title}
                  fill
                  priority
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-contain object-center"
                />
              </motion.div>
            </AnimatePresence>

            {/* Subtle Slide Title Tag (Top Left) */}
            <div className="absolute top-3.5 left-4 z-20 pointer-events-none">
              <div className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-white text-[11px] font-medium tracking-tight">
                {currentImage.title}
              </div>
            </div>

            {/* Top-Right Direct Live Site Link Pill */}
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-3.5 right-4 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 hover:bg-black/90 text-white text-[11px] font-semibold backdrop-blur-md border border-white/10 transition-all shadow-sm group/site"
              title="Open mythiumbd.com"
            >
              <span>mythiumbd.com</span>
              <ExternalLink size={11} className="group-hover/site:translate-x-0.5 group-hover/site:-translate-y-0.5 transition-transform" />
            </a>

            {/* Left / Right Arrow Navigation (Fades in on hover) */}
            <button
              onClick={prevSlide}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer shadow-sm"
              aria-label="Previous image"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer shadow-sm"
              aria-label="Next image"
            >
              <ChevronRight size={18} />
            </button>

            {/* Bottom Floating Pill & Dot Slider Indicators (Matches Reference Exactly) */}
            <div className="absolute bottom-3.5 left-1/2 -translate-x-1/2 z-20">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 shadow-lg">
                {images.map((_, idx) => {
                  const isActive = currentIndex === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className="group/dot relative py-1 px-0.5 flex items-center justify-center cursor-pointer focus:outline-none"
                      aria-label={`Go to slide ${idx + 1}`}
                    >
                      {isActive ? (
                        <motion.div
                          layoutId="activeSlideIndicatorPill"
                          className="w-5 h-1.5 rounded-full bg-white shadow-xs"
                          transition={{
                            type: 'spring',
                            stiffness: 450,
                            damping: 32,
                          }}
                        />
                      ) : (
                        <div className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover/dot:bg-white/80 transition-colors" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
