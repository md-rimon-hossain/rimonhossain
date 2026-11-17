'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Code2, Sparkles } from 'lucide-react';

const values = [
  {
    icon: Code2,
    title: 'Clean Code & OOP',
    description:
      'Writing readable, maintainable, and type-safe code following SOLID principles, design patterns, and automated testing with Jest.',
  },
  {
    icon: ShieldCheck,
    title: 'Security & Reliability',
    description:
      'Implementing secure authentication, role-based authorization (RBAC), input validation, and protected database operations.',
  },
  {
    icon: Sparkles,
    title: 'Willing to Learn Anything',
    description:
      'Stacks change, but problem-solving remains. If a project requires a new framework, language, or tool, I learn it fast and build what is needed.',
  },
];

export default function About() {
  return (
    <section id="about" className="pt-20 px-6  bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight"
          >
            About Me
          </motion.h2>
          <div className="w-10 h-1 bg-black mx-auto mt-3 rounded-full" />
        </div>

        {/* Concise Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base max-w-2xl mx-auto text-center"
        >
          <p>
            I am a <span className="font-semibold text-black">Full Stack Developer</span> focused on building reliable, production-ready web applications. I take pride in writing clean, well-structured code that is easy to maintain, thoroughly tested, and secure.
          </p>
          <p>
            From creating fast, responsive frontends with <span className="font-semibold text-black">React &amp; Next.js</span> to building robust backend APIs with <span className="font-semibold text-black">Node.js, Express, and NestJS</span>, I connect every layer—including databases (<span className="font-semibold text-black">MongoDB, PostgreSQL</span>) and deployment with <span className="font-semibold text-black">Docker &amp; CI/CD</span>.
          </p>
        </motion.div>

        {/* 3 Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-gray-200/90 bg-[#fafafa] flex flex-col items-center text-center hover:border-gray-400 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center mb-3">
                  <Icon size={18} />
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-1.5">
                  {v.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {v.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
