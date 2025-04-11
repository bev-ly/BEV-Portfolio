"use client";

import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";
import { ArrowDown } from "lucide-react";
import { Container } from "@mui/material";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-950"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-100 dark:bg-cyan-900/30 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 dark:bg-blue-900/30 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70"></div>
      </div>

      <Container maxWidth="lg" className="relative z-10">
        <motion.div
          className="text-center px-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent"
          >
            Beverly Napal
          </motion.h1>
          
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center mb-6"
          >
            <div className="h-[1px] w-8 sm:w-12 bg-gray-300 dark:bg-gray-700"></div>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 px-3 sm:px-4">
              Web Developer
            </p>
            <div className="h-[1px] w-8 sm:w-12 bg-gray-300 dark:bg-gray-700"></div>
          </motion.div>
          
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto"
          >
            I build modern, responsive web applications with cutting-edge
            technologies
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <a
              href="#projects"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold hover:shadow-lg hover:from-cyan-700 hover:to-blue-700 transition duration-300 inline-block"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="bg-transparent border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold hover:border-cyan-600 dark:hover:border-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition duration-300 inline-block"
            >
              Contact Me
            </a>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <SocialLinks className="justify-center" />
          </motion.div>
        </motion.div>
      </Container>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        variants={itemVariants}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ArrowDown className="text-gray-400 dark:text-gray-600 w-6 h-6" />
      </motion.div>
    </section>
  );
};

export default Hero;