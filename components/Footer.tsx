"use client";

import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";
import { Container } from "@mui/material";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white py-6">
      <Container maxWidth="lg" className="px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            &copy; {currentYear} Beverly Napal. All rights reserved.
          </p>
          <SocialLinks />
        </motion.div>
      </Container>
    </footer>
  );
};

export default Footer;