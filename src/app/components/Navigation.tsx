"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

// Animation variants

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
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
    </>
  );
}
