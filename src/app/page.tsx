"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Head from "next/head";
import FooterWithDisclaimer from "./components/FooterWithDetails";
import CookieConsent from "react-cookie-consent";
import CookieBanner from "./components/CookieBanner";

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

const hoverEffect = {
  scale: 1.05,
  transition: { duration: 0.3 },
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false);
  const [isVisible, setIsVisible] = useState<Boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      <Head>
        <title>Vu Duc Lw | Web Developer - Frontend Dev - Web Designer</title>
        <meta
          name="description"
          content="Medieninformatik student and web developer specializing in Next.js and React"
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        {/* Navigation */}
        <nav className="fixed w-full bg-gray-900 bg-opacity-90 backdrop-blur-sm z-50 shadow-lg">
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-500"
              >
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-500"
                  href="#"
                >
                  Vu Duc Le
                </motion.a>
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-6 md:items-center">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  className="hover:text-emerald-400 transition-colors"
                  href="#about"
                >
                  About
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  className="hover:text-emerald-400 transition-colors"
                  href="#projects"
                >
                  Projects
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  className="hover:text-emerald-400 transition-colors"
                  href="#contact"
                >
                  Contact
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  className="btn btn-accent transition-colors"
                  href="/file/CV.pdf"
                >
                  Resume
                </motion.a>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={toggleMenu}
                  className="text-gray-300 hover:text-emerald-400 focus:outline-none"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {isMenuOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden mt-4 space-y-2"
              >
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  className="block py-2 hover:text-emerald-400 transition-colors"
                  href="#about"
                  onClick={toggleMenu}
                >
                  About
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  className="block py-2 hover:text-emerald-400 transition-colors"
                  href="#projects"
                  onClick={toggleMenu}
                >
                  Projects
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  className="block py-2 hover:text-emerald-400 transition-colors"
                  href="#contact"
                  onClick={toggleMenu}
                >
                  Contact
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  className="btn btn-accent transition-colors block py-2"
                  href="/file/CV.pdf"
                >
                  Resume
                </motion.a>
              </motion.div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 overflow-hidden z-0">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-gray-800/90 z-10"></div>

            {/* Animated grid pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyMCwgMTg0LCAxMzUsIDAuMDUpIj48L3JlY3Q+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIj48L3JlY3Q+PC9zdmc+')]"></div>

            {/* Floating animated circles */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ duration: 2 }}
              className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-emerald-500 filter blur-[80px] mix-blend-multiply"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ duration: 2, delay: 0.5 }}
              className="absolute bottom-1/4 -right-20 w-72 h-72 rounded-full bg-green-500 filter blur-[90px] mix-blend-multiply"
            ></motion.div>
          </div>

          {/* Content with higher z-index */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="container mx-auto px-6 py-20 text-center relative z-10"
          >
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-500"
            >
              Hey, I'm Duc
            </motion.h1>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-10"
            >
              International Media and Computer Science student & Web Developer
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.a
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(52, 211, 153, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold"
              >
                View My Work
              </motion.a>
            </motion.div>
          </motion.section>
        </section>

        {/* About Section */}
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
                pursuing my Bachelor’s in International Media and Computer
                Science at the Hochschule für Technik und Wirtschaft Berlin.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                With a background in responsive web design, JavaScript, React,
                and backend technologies like PHP and PostgreSQL, I specialize
                in crafting user-friendly, modern, and visually appealing web
                pages and applications.
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

        {/* Projects Section */}
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
                  An image filtering tool using JavaScript and the Canvas API..
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
                  A social platform for TWICE fans with user authentication,
                  post sharing, and a dynamic UI (Still in development).
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
                  members. Coded in HTML & JS. (Attention: A music will be
                  played in the background)
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
                  design and he for the coding (he 90%, I help out sometimes).
                  We made it for our older brother Toan. I’m only responsible
                  for the SEO.
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

        {/* Contact Section */}
        <motion.section
          id="contact"
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
            Get In Touch
          </motion.h2>
          <motion.div
            variants={item}
            className="max-w-2xl mx-auto bg-gray-800 rounded-xl p-8 shadow-2xl text-center"
          >
            <p className="text-lg text-gray-300 mb-8">
              I'm currently looking for internship opportunities. If you have
              any questions or would like to discuss potential collaborations,
              feel free to reach out!
            </p>
            <div className="flex justify-center space-x-6">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/vuducle"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center hover:bg-emerald-600 transition-colors"
                aria-label="Vu Duc Le - GitHub"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.linkedin.com/in/vuducle97/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center hover:bg-emerald-600 transition-colors"
                aria-label="Vu Duc Le - LinkedIn"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </motion.a>
            </div>

            <motion.a
              whileHover={{ scale: 1.02 }}
              href="mailto:vuducle97@gmail.com"
              className="inline-block mt-8 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              vuducle97@gmail.com
            </motion.a>
          </motion.div>
        </motion.section>

        {/* Footer */}
        <FooterWithDisclaimer />

        {/* Back to Top Button */}
        {isVisible && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-emerald-600 shadow-lg flex items-center justify-center text-white z-50"
            aria-label="Back to top"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </motion.button>
        )}
      </div>

      <CookieBanner />
    </>
  );
}
