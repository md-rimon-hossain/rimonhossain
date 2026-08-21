"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
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
      className="fixed w-full z-50 transition-all duration-300 py-4 md:py-6"
      style={{
        backgroundColor: scrolled ? "rgba(2, 6, 23, 0.9)" : "transparent",
        borderBottom: scrolled ? `1px solid ${COLORS.background.card}` : "none",
        backdropFilter: scrolled ? "blur(8px)" : "none",
      }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 text-2xl font-bold font-mono"
          style={{ color: COLORS.primary }}
        >
          <Terminal className="w-6 h-6" />
          <span>RIMON_DEV</span>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="hover:text-primary transition-colors font-medium"
              style={{ color: COLORS.text.subheading }}
            >
              <span style={{ color: COLORS.primary, marginRight: "0.25rem" }}>
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
            className="px-4 py-2 rounded hover:bg-primary/10 transition-colors font-mono text-sm"
            style={{
              color: COLORS.primary,
              borderColor: COLORS.primary,
              border: `1px solid ${COLORS.primary}`,
            }}
          >
            Resume
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="hover:text-white"
            style={{ color: COLORS.text.subheading }}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-b"
          style={{
            backgroundColor: COLORS.background.main,
            borderColor: COLORS.background.card,
          }}
        >
          <div className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-primary py-2 block"
                style={{
                  color: COLORS.text.subheading,
                  borderBottom: `1px solid rgba(15, 23, 42, 0.5)`,
                }}
              >
                {link.name}
              </a>
            ))}
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noreferrer"
              download
              className="border rounded px-4 py-2 text-center mt-2 hover:bg-primary/10 transition-colors font-mono"
              style={{ color: COLORS.primary, borderColor: COLORS.primary }}
            >
              Resume
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
