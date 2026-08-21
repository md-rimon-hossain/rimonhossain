"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, ArrowUpRight, Heart } from "lucide-react";
import { SOCIAL_LINKS, PERSONAL_INFO, COLORS } from "@/constants";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative">
      {/* Decorative glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[150px] opacity-10 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, #06d6a0, #8338ec)",
        }}
      />

      <div className="container mx-auto px-6 text-center max-w-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="font-mono-jb text-sm mb-5" style={{ color: COLORS.primary }}>
            04. What&apos;s Next?
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p
            className="text-base md:text-lg mb-10 leading-relaxed"
            style={{ color: COLORS.text.body }}
          >
            I am currently open to new opportunities and collaborations. Whether
            you have a question about MERN stack, Next.js, or just want to say
            hi, I&apos;ll try my best to get back to you!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-14">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="gradient-border px-8 py-4 font-mono-jb text-sm flex items-center gap-2.5 transition-all duration-300 hover:shadow-lg group"
              style={{
                color: COLORS.primary,
                borderRadius: 16,
                boxShadow: "0 4px 30px rgba(6, 214, 160, 0.1)",
              }}
            >
              <Mail size={18} />
              Say Hello
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="glass-btn px-8 py-4 font-mono-jb text-sm flex items-center gap-2.5"
              style={{ color: COLORS.text.subheading }}
            >
              <Phone size={18} />
              {PERSONAL_INFO.phone}
            </a>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex justify-center gap-4 mb-14"
        >
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="glass-btn p-3.5 transition-all duration-300 hover:glow-cyan group"
              style={{ borderRadius: 14 }}
              title={link.name}
            >
              <link.icon
                size={22}
                className="transition-colors duration-300"
                style={{ color: COLORS.text.body }}
              />
            </a>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="glass p-6"
          style={{ borderRadius: 16 }}
        >
          <p
            className="font-mono-jb text-xs flex items-center justify-center gap-1.5"
            style={{ color: COLORS.text.meta }}
          >
            Designed & Built with{" "}
            <Heart className="w-3.5 h-3.5 inline" style={{ color: COLORS.tertiary }} />{" "}
            by{" "}
            <span className="gradient-text-static font-semibold">
              {PERSONAL_INFO.name}
            </span>
          </p>
          <p
            className="mt-2 font-mono-jb text-[10px]"
            style={{ color: COLORS.text.meta }}
          >
            © {new Date().getFullYear()} — All rights reserved.
          </p>
        </motion.footer>
      </div>
    </section>
  );
};

export default Contact;
