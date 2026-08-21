"use client";
import React from "react";
import { motion } from "framer-motion";
import { SKILLS, COLORS } from "../constants";
import { TechSkill } from "../types";

const Skills: React.FC = () => {
  const categories = Array.from(new Set(SKILLS.map((s) => s.category)));

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="skills"
      className="py-20"
      style={{ backgroundColor: COLORS.background.main }}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12"
        >
          <span
            className="text-2xl md:text-3xl font-bold flex gap-2"
            style={{ color: COLORS.text.heading }}
          >
            <span className="font-mono" style={{ color: COLORS.primary }}>
              02.
            </span>{" "}
            Tech Stack
          </span>
          <div
            className="h-px grow max-w-xs"
            style={{ backgroundColor: COLORS.background.card }}
          ></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div key={category} className="space-y-4">
              <h3
                className="text-xl font-semibold border-b pb-2 mb-4"
                style={{
                  color: COLORS.secondary,
                  borderColor: COLORS.background.card,
                }}
              >
                {category}
              </h3>
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
                      className="p-3 rounded hover:border-primary/50 transition-colors group"
                      style={{
                        backgroundColor: "rgba(30, 41, 59, 0.4)",
                        borderColor: "rgba(51, 65, 85, 0.5)",
                        border: "1px solid rgba(51, 65, 85, 0.5)",
                      }}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span
                          className="font-mono text-sm group-hover:text-primary transition-colors"
                          style={{ color: COLORS.text.subheading }}
                        >
                          {skill.name}
                        </span>
                        <span
                          className="text-xs"
                          style={{ color: COLORS.text.meta }}
                        >
                          {skill.level}%
                        </span>
                      </div>
                      <div
                        className="w-full h-1 rounded-full overflow-hidden"
                        style={{ backgroundColor: COLORS.background.card }}
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: COLORS.primary }}
                        />
                      </div>
                    </motion.div>
                  )
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
