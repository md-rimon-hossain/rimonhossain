"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { SOCIAL_LINKS, PERSONAL_INFO, COLORS } from "@/constants";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-20 relative"
      style={{ backgroundColor: COLORS.background.main }}
    >
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="font-mono mb-4" style={{ color: COLORS.primary }}>
            04. What&apos;s Next?
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: COLORS.text.heading }}
          >
            Get In Touch
          </h2>
          <p className="text-lg mb-8" style={{ color: COLORS.text.body }}>
            I am currently open to new opportunities and collaborations. Whether
            you have a question about MERN stack, Next.js, or just want to say
            hi, I&apos;ll try my best to get back to you!
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="px-8 py-4 border rounded hover:bg-primary/10 transition-colors font-mono flex items-center gap-2"
              style={{ borderColor: COLORS.primary, color: COLORS.primary }}
            >
              <Mail size={18} />
              Say Hello
            </a>
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="px-8 py-4 border rounded hover:bg-slate-800 transition-colors font-mono flex items-center gap-2"
              style={{
                borderColor: COLORS.background.card,
                color: COLORS.text.subheading,
              }}
            >
              <Phone size={18} />
              {PERSONAL_INFO.phone}
            </a>
          </div>
        </motion.div>

        <div className="flex justify-center gap-8 mb-12">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className={`transition-colors ${link.color}`}
              title={link.name}
              style={{ color: COLORS.text.body }}
            >
              <link.icon size={28} />
            </a>
          ))}
        </div>

        <footer
          className="font-mono text-sm"
          style={{ color: COLORS.text.meta }}
        >
          <p>Designed & Built by {PERSONAL_INFO.name}</p>
          <p className="mt-2">
            © {new Date().getFullYear()} - All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
