"use client";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const hoverEffect = {
  scale: 1.05,
  transition: { duration: 0.3 },
};

export default function AboutSection() {
  return (
    <>
      <motion.section
        id="about"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
        className="container mx-auto px-6 py-20"
      >
        <motion.h2
          variants={item}
          className="text-3xl font-bold mb-10 text-center"
        >
          About Me
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={item}
            className="bg-gray-800 rounded-xl p-8 shadow-2xl"
          >
            <p className="text-lg text-gray-300 mb-6">
              A passionate frontend developer and web designer and currently
              pursuing my Bachelor’s in International Media and Computer Science
              at the Hochschule für Technik und Wirtschaft Berlin.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              With a background in responsive web design, JavaScript, React, and
              backend technologies like PHP and PostgreSQL, I specialize in
              crafting user-friendly, modern, and visually appealing web pages
              and applications.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <motion.div
                whileHover={hoverEffect}
                className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-emerald-600 transition-colors"
              >
                Next.js
              </motion.div>
              <motion.div
                whileHover={hoverEffect}
                className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-emerald-600 transition-colors"
              >
                React
              </motion.div>
              <motion.div
                whileHover={hoverEffect}
                className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-emerald-600 transition-colors"
              >
                Tailwind CSS
              </motion.div>
              <motion.div
                whileHover={hoverEffect}
                className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-emerald-600 transition-colors"
              >
                TypeScript
              </motion.div>
              <motion.div
                whileHover={hoverEffect}
                className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-emerald-600 transition-colors"
              >
                Node.js
              </motion.div>
              <motion.div
                whileHover={hoverEffect}
                className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-emerald-600 transition-colors"
              >
                Java
              </motion.div>
              <motion.div
                whileHover={hoverEffect}
                className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-emerald-600 transition-colors"
              >
                Spring Boot
              </motion.div>
              <motion.div
                whileHover={hoverEffect}
                className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-emerald-600 transition-colors"
              >
                PHP
              </motion.div>
              <motion.div
                whileHover={hoverEffect}
                className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-emerald-600 transition-colors"
              >
                Python
              </motion.div>
              <motion.div
                whileHover={hoverEffect}
                className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-emerald-600 transition-colors"
              >
                SQL
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
