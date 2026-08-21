"use client";
import React from "react";
import { motion } from "framer-motion";
import { SKILLS, COLORS } from "../constants";
import { TechSkill } from "../types";

const categoryIcons: Record<string, string> = {
  Frontend: "🎨",
  Backend: "⚙️",
  Database: "🗄️",
  Tools: "🛠️",
};

const categoryGradients: Record<string, string> = {
  Frontend: "linear-gradient(135deg, rgba(6, 214, 160, 0.15), rgba(6, 214, 160, 0.05))",
  Backend: "linear-gradient(135deg, rgba(131, 56, 236, 0.15), rgba(131, 56, 236, 0.05))",
  Database: "linear-gradient(135deg, rgba(255, 0, 110, 0.15), rgba(255, 0, 110, 0.05))",
  Tools: "linear-gradient(135deg, rgba(251, 86, 7, 0.15), rgba(251, 86, 7, 0.05))",
};

const categoryColors: Record<string, string> = {
  Frontend: COLORS.primary,
  Backend: COLORS.secondary,
  Database: COLORS.tertiary,
  Tools: COLORS.warm,
};

const Skills: React.FC = () => {
  const categories = Array.from(new Set(SKILLS.map((s) => s.category)));

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-14"
        >
          <span className="text-2xl md:text-3xl font-bold flex items-center gap-3">
            <span className="font-mono-jb text-lg" style={{ color: COLORS.primary }}>
              02.
            </span>
            <span className="gradient-text-static">Tech Stack</span>
          </span>
          <div
            className="h-px grow max-w-xs"
            style={{
              background: "linear-gradient(90deg, rgba(131, 56, 236, 0.3), transparent)",
            }}
          />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, catIdx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1, duration: 0.5 }}
              className="glass-card p-6"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                  style={{
                    background: categoryGradients[category],
                    border: `1px solid ${categoryColors[category]}33`,
                  }}
                >
                  {categoryIcons[category]}
                </div>
                <h3
                  className="text-base font-bold"
                  style={{ color: categoryColors[category] }}
                >
                  {category}
                </h3>
              </div>

              {/* Skills List */}
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-3"
              >
                {SKILLS.filter((s) => s.category === category).map(
                  (skill: TechSkill) => (
                    <motion.div
                      key={skill.name}
                      variants={item}
                      className="glass p-3 group transition-all duration-300 hover:bg-white/[0.06]"
                      style={{ borderRadius: 10 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span
                          className="font-mono-jb text-xs font-medium group-hover:text-white transition-colors"
                          style={{ color: COLORS.text.subheading }}
                        >
                          {skill.name}
                        </span>
                        <span
                          className="text-[10px] font-mono-jb font-bold px-1.5 py-0.5 rounded"
                          style={{
                            color: categoryColors[category],
                            background: `${categoryColors[category]}15`,
                          }}
                        >
                          {skill.level}%
                        </span>
                      </div>
                      {/* Progress bar */}
                      <div
                        className="w-full h-1 rounded-full overflow-hidden"
                        style={{ background: "rgba(255, 255, 255, 0.05)" }}
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.2, ease: "easeOut" }}
                          viewport={{ once: true }}
                          className="h-full rounded-full"
                          style={{
                            background: `linear-gradient(90deg, ${categoryColors[category]}, ${categoryColors[category]}88)`,
                            boxShadow: `0 0 8px ${categoryColors[category]}40`,
                          }}
                        />
                      </div>
                    </motion.div>
                  )
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
