"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// Animation variants
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

export default function ProjectsSection() {
  return (
    <>
      <motion.section
        id="projects"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
        className="container mx-auto px-6 py-20"
      >
        <motion.h2
          variants={item}
          className="text-3xl font-bold mb-10 text-center"
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* <motion.div
              variants={item}
              whileHover={{ y: -10 }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl hover:shadow-emerald-500/20 transition-shadow"
            >
              <div className="relative h-48 w-full">
                <Image
                  src="/images/portfolio.jpg"
                  alt="Portfolio"
                  layout="fill"
                  objectFit="cover"
                  className="hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Portfolio Website</h3>
                <p className="text-gray-300 mb-4">
                  My personal portfolio built with Next.js and Tailwind CSS,
                  featuring modern animations and responsive design.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 bg-emerald-900 text-emerald-300 rounded-full">
                    Next.js
                  </span>
                  <span className="text-xs px-2 py-1 bg-emerald-900 text-emerald-300 rounded-full">
                    Tailwind
                  </span>
                  <span className="text-xs px-2 py-1 bg-emerald-900 text-emerald-300 rounded-full">
                    Framer Motion
                  </span>
                </div>
              </div>
            </motion.div> */}

          <motion.div
            variants={item}
            whileHover={{ y: -10 }}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl hover:shadow-emerald-500/20 transition-shadow"
          >
            <div className="relative h-48 w-full">
              <Image
                src="/images/proof-of-training.jpg"
                alt="Proof of training"
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Proof of training</h3>
              <p className="text-gray-300 mb-4">
                A web app for apprentices to fill their training progress.
              </p>
              <Link
                href={"https://ausbildungsnachweis.netlify.app/"}
                className="btn btn-accent mb-4"
                title="Vu Duc Le - App"
              >
                To the app
              </Link>
              <Link
                href={"https://github.com/vuducle/ausbildungsnachweis"}
                className="btn btn-accent mb-4 ml-4"
                title="Vu Duc Le - GitHub"
              >
                GitHub
              </Link>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 bg-emerald-900 text-emerald-300 rounded-full">
                  React
                </span>
                <span className="text-xs px-2 py-1 bg-emerald-900 text-emerald-300 rounded-full">
                  TailwindCSS
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            whileHover={{ y: -10 }}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl hover:shadow-emerald-500/20 transition-shadow"
          >
            <div className="relative h-48 w-full">
              <Image
                src="/images/image-filter.jpg"
                alt="Proof of training"
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Filter-App</h3>
              <p className="text-gray-300 mb-4">
                An image filtering tool using JavaScript and the Canvas API.
              </p>
              <div className="flex">
                <Link
                  href={"https://twice-image-filter.netlify.app/"}
                  className="btn btn-accent mb-4"
                  title="Vu Duc Le - Filter-App"
                >
                  To the app
                </Link>
                <Link
                  href={"https://github.com/vuducle/twice-image-filter"}
                  className="btn btn-accent mb-4 ml-4"
                  title="Vu Duc Le - Filter-App"
                >
                  GitHub
                </Link>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 bg-emerald-900 text-emerald-300 rounded-full">
                  React
                </span>
                <span className="text-xs px-2 py-1 bg-emerald-900 text-emerald-300 rounded-full">
                  Canvas API
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            whileHover={{ y: -10 }}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl hover:shadow-emerald-500/20 transition-shadow"
          >
            <div className="relative h-48 w-full">
              <Image
                src="/images/onceverse.jpg"
                alt="OnceVerse"
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">OnceVerse</h3>
              <p className="text-gray-300 mb-4">
                A social platform for TWICE fans with user authentication, post
                sharing, and a dynamic UI (Still in development).
              </p>
              <div className="flex">
                <Link
                  href={"https://github.com/vuducle/org.student.htw"}
                  className="btn btn-accent mb-4"
                  title="Vu Duc Le - OnceVerse"
                >
                  GitHub(Backend)
                </Link>
                <Link
                  href={"https://github.com/vuducle/twice-nextjs"}
                  className="btn btn-accent mb-4 ml-4"
                  title="Vu Duc Le - OnceVerse"
                >
                  GitHub(Frontend)
                </Link>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 bg-emerald-900 text-emerald-300 rounded-full">
                  Next.js
                </span>
                <span className="text-xs px-2 py-1 bg-emerald-900 text-emerald-300 rounded-full">
                  Spring Boot
                </span>
                <span className="text-xs px-2 py-1 bg-emerald-900 text-emerald-300 rounded-full">
                  PostgreSQL
                </span>
                <span className="text-xs px-2 py-1 bg-emerald-900 text-emerald-300 rounded-full">
                  TailwindCSS
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            whileHover={{ y: -10 }}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl hover:shadow-emerald-500/20 transition-shadow"
          >
            <div className="relative h-48 w-full">
              <Image
                src="/images/woa-2.jpg"
                alt="OnceVerse"
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">
                World of Adventures (not World of Warcraft)
              </h3>
              <p className="text-gray-300 mb-4">
                A fullstack app, created with my fellow students, Coded in
                Django - © Taha Aktürk, Homam Mousa, Vu Duc Le
              </p>
              <div className="flex">
                <Link
                  href={"https://github.com/info2-giga/woa"}
                  className="btn btn-accent mb-4"
                  title="Vu Duc Le - OnceVerse"
                >
                  GitHub
                </Link>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 bg-emerald-900 text-emerald-300 rounded-full">
                  Django
                </span>
                <span className="text-xs px-2 py-1 bg-emerald-900 text-emerald-300 rounded-full">
                  SQLite
                </span>
                <span className="text-xs px-2 py-1 bg-emerald-900 text-emerald-300 rounded-full">
                  TailwindCSS
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            whileHover={{ y: -10 }}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl hover:shadow-emerald-500/20 transition-shadow"
          >
            <div className="relative h-48 w-full">
              <Image
                src="/images/memory-game.jpg"
                alt="Memory Game"
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Memory Game</h3>
              <p className="text-gray-300 mb-4">
                A small university projects, the cards reflect the TWICE
                members. Coded in HTML & JS. (Attention: A music will be played
                in the background)
              </p>
              <Link
                href={
                  "https://twice-image-filter.netlify.app/twice-memory.html"
                }
                className="btn btn-accent mb-4"
                title="Vu Duc Le - Memory Game"
              >
                To the app
              </Link>

              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 bg-emerald-900 text-emerald-300 rounded-full">
                  JavaScript
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            whileHover={{ y: -10 }}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl hover:shadow-emerald-500/20 transition-shadow"
          >
            <div className="relative h-48 w-full">
              <Image
                src="/images/restaurant.jpg"
                alt="Vu Duc Le - Walhalla Restaurant"
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Walhalla Restaurant</h3>
              <p className="text-gray-300 mb-4">
                I did it during my training, a colleague did the design and I
                did the coding. We were nominated as designers of the month.
              </p>
              <Link
                href={"https://www.walhalla-wikingerrestaurant.de/"}
                className="btn btn-accent mb-4"
                title="Walhalla Restaurant"
              >
                To the website
              </Link>

              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 bg-emerald-900 text-emerald-300 rounded-full">
                  JavaScript
                </span>
                <span className="text-xs px-2 py-1 bg-emerald-900 text-emerald-300 rounded-full">
                  PHP - custom CMS Engine
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            whileHover={{ y: -10 }}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl hover:shadow-emerald-500/20 transition-shadow"
          >
            <div className="relative h-48 w-full">
              <Image
                src="/images/toan.jpg"
                alt="Vu Duc Le - Funky Monkeys"
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Funky Monkeys</h3>
              <p className="text-gray-300 mb-4">
                I made it with my twin brother Minh, I was responsible for the
                design and he for the coding (he 90%, I help out sometimes). We
                made it for our older brother Toan. I’m only responsible for the
                SEO.
              </p>
              <Link
                href={"https://funky-monkeys.show/"}
                className="btn btn-accent mb-4"
                title="Funky Monkeys"
              >
                To the website
              </Link>

              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 bg-emerald-900 text-emerald-300 rounded-full">
                  Next.js
                </span>
                <span className="text-xs px-2 py-1 bg-emerald-900 text-emerald-300 rounded-full">
                  Strapi
                </span>
                <span className="text-xs px-2 py-1 bg-emerald-900 text-emerald-300 rounded-full">
                  PostgreSQL
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
