"use client";

import Image from "next/image";

import { motion } from "framer-motion";

const skillIcons = [
  {
    name: "React",
    icon: <Image src="/react.svg" width={60} height={60} alt="React Logo" />,
  },
  {
    name: "Next.js",
    icon: <Image src="/next.svg" width={60} height={60} alt="React Logo" />,
  },
  {
    name: "TypeScript",
    icon: (
      <Image src="/typescript.svg" width={60} height={60} alt="React Logo" />
    ),
  },
  {
    name: "JavaScript",
    icon: (
      <Image src="/javascript.svg" width={60} height={60} alt="React Logo" />
    ),
  },
  {
    name: "HTML5",
    icon: <Image src="/html.svg" width={60} height={60} alt="React Logo" />,
  },
  {
    name: "CSS3",
    icon: <Image src="/css.svg" width={60} height={60} alt="React Logo" />,
  },
  {
    name: "Tailwind CSS",
    icon: (
      <Image src="/tailwindcss.svg" width={60} height={60} alt="React Logo" />
    ),
  },
  {
    name: "Node.js",
    icon: <Image src="/node.svg" width={60} height={60} alt="React Logo" />,
  },
  {
    name: "Git",
    icon: <Image src="/git.svg" width={60} height={60} alt="React Logo" />,
  },
  {
    name: "Postgresql",
    icon: (
      <Image src="/postgresql.svg" width={60} height={60} alt="React Logo" />
    ),
  },
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
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
      id="skills"
      className="py-32 bg-gray-50/80 dark:bg-gray-950/80 backdrop-blur-[2px] relative z-10"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-5xl font-bold mb-6 text-center bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Frontend Skills
        </motion.h2>
        <motion.p
          className="text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto mb-20 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Technologies and tools I work with
        </motion.p>
        <motion.div
          className="max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex flex-wrap justify-center gap-16 md:gap-24">
            {skillIcons.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ scale: 1.2, y: -10 }}
                className="flex flex-col items-center transform transition-all duration-5"
                title={skill.name}
              >
                <div className="text-6xl mb-3 filter drop-shadow-md">
                  {skill.icon}
                </div>
                <div className="mt-2 text-2xl font-medium text-gray-700 dark:text-gray-200">
                  {skill.name}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Skills;
