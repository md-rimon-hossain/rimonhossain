'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Copy, Check, FileText, Send } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'rimon.dev.contact@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 px-6 bg-[#fafafa] border-t border-gray-100">
      <div className="max-w-2xl mx-auto text-center">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight"
        >
          Get In Touch
        </motion.h2>
        <div className="w-10 h-1 bg-black mx-auto mt-3 rounded-full" />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-gray-700 text-sm sm:text-base leading-relaxed mt-5 mb-8 max-w-lg mx-auto"
        >
          I am actively looking for <span className="font-semibold text-black">Full Stack Developer</span> opportunities. If you need a developer who writes clean code, prioritizes security, and learns fast—reach out anytime.
        </motion.p>

        {/* Contact Action Card */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-white rounded-2xl p-6 border border-gray-200 shadow-2xs max-w-md mx-auto flex flex-col items-center"
        >
          <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full">
            <a
              href={`mailto:${email}`}
              className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-black text-white text-xs font-semibold rounded-xl hover:bg-gray-800 transition-colors shadow-xs"
            >
              <Send size={14} />
              Send Email
            </a>

            <button
              onClick={handleCopyEmail}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3 border border-gray-200 text-gray-800 text-xs font-semibold rounded-xl hover:bg-gray-50 transition-colors"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-emerald-600" />
                  <span className="text-emerald-700">Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-gray-200 bg-white text-gray-700 hover:text-black hover:border-black text-xs font-semibold transition-colors"
          >
            <Github size={14} />
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-gray-200 bg-white text-gray-700 hover:text-black hover:border-black text-xs font-semibold transition-colors"
          >
            <Linkedin size={14} />
            LinkedIn
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-gray-200 bg-white text-gray-700 hover:text-black hover:border-black text-xs font-semibold transition-colors"
          >
            <FileText size={14} />
            Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
