"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FileText } from "lucide-react";

const About = () => {
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
      id="about"
      className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      <div className="absolute -top-40 right-0 w-80 h-80 bg-cyan-100 dark:bg-cyan-900/30 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-100 dark:bg-cyan-900/30 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row items-center max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            variants={itemVariants}
            className="md:w-1/2 mb-12 md:mb-0 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-200 dark:bg-cyan-700 rounded-full transform translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6"></div>
              <Image
                src="/profile.jpg"
                alt="Beverly Napal"
                width={400}
                height={400}
                className="rounded-full shadow-lg relative z-10 border-4 border-white dark:border-gray-800"
              />
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="md:w-1/2 md:pl-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
              I&lsquo;m Beverly Napal, a passionate Web Developer with 2+ years
              of experience building web applications. I specialize in creating
              responsive, user-friendly websites and applications using modern
              technologies.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
              My journey in web development started when I built my first
              website in college. Since then, I&lsquo;ve worked with startups and
              established companies to deliver high-quality digital solutions
              that solve real-world problems.

              
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3 dark:text-white">
                Work Experience
              </h3>
              <div className="space-y-4">
                <div>
                <div>
                <p className="font-medium dark:text-white">
                    Junior Web Developer at WYLog Inc. - Intern
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                  07/2020 -08/2020
                  </p>
                </div>
                  <p className="font-medium dark:text-white">
                    Junior Web Developer at WYLog Inc. - Part timer
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                  01/2023 - 01/2024
                  </p>
                </div>
                <div>
                  <p className="font-medium dark:text-white">
                    Web Developer at WYLog Inc. - Full time
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                  01/2024- 03/2025
                  </p>
                </div>
              </div>
            </div>
            <motion.a
              href="Beverly_Z_Napal.pdf.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition duration-300"
            >
              <FileText className="mr-2" size={18} /> Download Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
