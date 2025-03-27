"use client";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <>
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
            Hey, I am Duc
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
    </>
  );
}
