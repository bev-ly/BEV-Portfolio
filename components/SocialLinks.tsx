"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import type React from "react";

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => {
  const isEmail = label === "Email";
  
  return (
    <motion.a
      href={isEmail ? `mailto:${href}` : href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.2, y: -3 }}
      whileTap={{ scale: 0.9 }}
      className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
    >
      <span className="sr-only">{label}</span>
      {icon}
    </motion.a>
  );
};

const SocialLinks: React.FC<{ className?: string }> = ({ className }) => {
  const socialLinks = [
    {
      href: "https://github.com/bev-ly",
      icon: <Github size={24} />,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/beverly-napal-30759225b/",
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
    },
    {
      href: "napalbeverly68@gmail.com",
      icon: <Mail size={24} />,
      label: "Email",
    },
  ];

  return (
    <div className={`flex space-x-4 ${className}`}>
      {socialLinks.map((link) => (
        <SocialLink key={link.href} {...link} />
      ))}
    </div>
  );
};

export default SocialLinks;