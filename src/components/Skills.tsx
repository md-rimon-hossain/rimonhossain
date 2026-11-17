'use client';

import { motion } from 'framer-motion';
import { 
  Code, 
  Server, 
  Database, 
  Wrench, 
  Sparkles,
} from 'lucide-react';

interface SkillGroup {
  title: string;
  icon: React.ElementType;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend Development',
    icon: Code,
    skills: [
      'HTML',
      'CSS',
      'Tailwind CSS',
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Redux',
      'Redux Toolkit',
    ],
  },
  {
    title: 'Backend Development',
    icon: Server,
    skills: [
      'Node.js',
      'Express',
      'NestJS',
      'REST APIs',
      'OOP Architecture',
    ],
  },
  {
    title: 'Database & ORM',
    icon: Database,
    skills: [
      'MongoDB',
      'Mongoose',
      'PostgreSQL',
      'Prisma',
      'SQL',
    ],
  },
  {
    title: 'Testing & DevOps',
    icon: Wrench,
    skills: [
      'Jest',
      'Git',
      'GitHub',
      'Docker',
      'CI/CD',
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="pt-20 px-6 bg-[#fafafa] ">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight"
          >
            Tech Stack
          </motion.h2>
          
          <div className="w-10 h-1 bg-black mx-auto mt-3 rounded-full" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {skillGroups.map((group, idx) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                className="bg-white rounded-2xl p-6 border border-gray-200/90 shadow-2xs hover:border-gray-300 transition-colors"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-gray-100 text-black flex items-center justify-center">
                    <Icon size={16} />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900">
                    {group.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-50 text-gray-800 border border-gray-200 hover:bg-black hover:text-white hover:border-black transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Clean "Willing to Learn" Callout */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="mt-6 p-5 rounded-2xl bg-black text-white flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
              <Sparkles size={18} className="text-emerald-400" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                Always Ready to Learn
              </h4>
              <p className="text-xs text-gray-300 mt-0.5 max-w-xl">
                If your project or team requires any new technology I am eager to learn whatever is needed to deliver results.
              </p>
            </div>
          </div>
          <span className="shrink-0 text-xs font-semibold px-3 py-1.5 rounded-lg bg-white/10 text-white border border-white/20">
            Fast Learner
          </span>
        </motion.div>
      </div>
    </section>
  );
}
