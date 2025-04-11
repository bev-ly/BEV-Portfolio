"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { Container } from "@mui/material";

const projects = [
  {
    id: 1,
    title: "TechTopia",
    description:
      "A full-stack e-commerce platform with modern UI, cart functionality, and secure payments built with Next.js and TypeScript.",
      image: "/TechTopia.png?height=300&width=300",
    tags: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "https://github.com/bev-ly/TechTopia-ecommerce",
    status: "In Progress",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Productivity application with drag-and-drop task boards, user authentication, and real-time updates.",
    image: "/task-management.jpg",
    tags: ["React", "Redux", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    status: "Coming Soon",
  },
  {
    id: 3,
    title: "Real-time Chat Application",
    description: "Instant messaging platform with rooms, typing indicators, and message history.",
    image: "/chat-app.jpg",
    tags: ["React", "Socket.io", "Express", "Styled Components"],
    liveUrl: "#",
    githubUrl: "#",
    status: "Coming Soon",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "Responsive personal portfolio showcasing projects with clean animations and dark mode support.",
      image: "/potfolio-svg.PNG?height=300&width=300",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://bev-ly.github.io/PORTFOLIO-in-HTML/",
    githubUrl: "https://github.com/bev-ly/PORTFOLIO-in-HTML",
  },
];

const Projects = () => {
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
        damping: 10,
      },
    },
  };

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-900">
      <Container maxWidth="lg" className="px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Here are some of my featured projects. Each represents unique challenges and solutions.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 flex flex-col h-full"
            >
              {/* Status badge */}
              {project.status && (
                <div className={`absolute top-4 right-4 z-10 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg ${
                  project.status === "In Progress" ? "bg-yellow-500" : 
                  project.status === "Coming Soon" ? "bg-purple-500" : "bg-gray-500"
                }`}>
                  {project.status}
                </div>
              )}
              
              {/* Project image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                   src={project.image || "/potfolio-svg.PNG" || "TechTopia.png"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white text-sm md:text-base">{project.description}</p>
                </div>
              </div>

              {/* Project content */}
              <div className="p-6 flex-grow">
  <div className="flex justify-between items-start mb-3">
    <h3 className="text-xl font-bold dark:text-white">
      {project.title}
    </h3>
    <div className="flex space-x-3">
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`p-2 rounded-full transition-colors flex items-center ${
          project.status
            ? "text-gray-400 dark:text-gray-600 cursor-not-allowed"
            : "text-cyan-600 dark:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-gray-700"
        }`}
        aria-label="Live demo"
      >
        <ExternalLink size={18} className="mr-1" />
        <span className="text-xs">Live Demo</span>
      </a>
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`p-2 rounded-full transition-colors ${
          project.status
            ? "text-gray-400 dark:text-gray-600 cursor-not-allowed"
            : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
        }`}
        aria-label="View code"
      >
        <Github size={18} />
      </a>
    </div>
  </div>
  
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/bev-ly"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:from-cyan-700 hover:to-blue-700"
          >
            Explore More Projects on GitHub
            <Github size={18} className="ml-2" />
          </a>
        </motion.div>
      </Container>
    </section>
  );
};

export default Projects;