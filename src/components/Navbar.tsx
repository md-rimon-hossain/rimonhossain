"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, Sparkles } from "lucide-react";
import { PERSONAL_INFO, COLORS } from "../constants";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? "glass-nav py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2.5 text-xl font-bold font-mono-jb group"
        >
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:shadow-lg"
            style={{
              background: "linear-gradient(135deg, rgba(6, 214, 160, 0.2), rgba(131, 56, 236, 0.2))",
              border: "1px solid rgba(6, 214, 160, 0.3)",
              boxShadow: "0 0 15px rgba(6, 214, 160, 0.1)",
            }}
          >
            <Terminal className="w-4 h-4" style={{ color: COLORS.primary }} />
          </div>
          <span className="gradient-text-static">RIMON_DEV</span>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-1 items-center">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-white/5"
              style={{ color: COLORS.text.subheading }}
            >
              <span
                className="font-mono-jb text-xs mr-1.5"
                style={{ color: COLORS.primary }}
              >
                0{index + 1}.
              </span>
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noreferrer"
            download
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="ml-3 glass-btn px-5 py-2.5 text-sm font-mono-jb flex items-center gap-2"
            style={{ color: COLORS.primary }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Resume
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="glass-btn p-2.5"
            style={{ color: COLORS.text.subheading }}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden mx-4 mt-3 overflow-hidden glass"
            style={{ borderRadius: 16 }}
          >
            <div className="flex flex-col px-5 py-4 gap-1">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 rounded-xl transition-all duration-300 hover:bg-white/5 text-sm"
                  style={{ color: COLORS.text.subheading }}
                >
                  <span
                    className="font-mono-jb text-xs mr-2"
                    style={{ color: COLORS.primary }}
                  >
                    0{index + 1}.
                  </span>
                  {link.name}
                </a>
              ))}
              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noreferrer"
                download
                className="glass-btn px-4 py-3 text-center mt-2 font-mono-jb text-sm flex items-center justify-center gap-2"
                style={{ color: COLORS.primary }}
              >
                <Sparkles className="w-3.5 h-3.5" />
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
