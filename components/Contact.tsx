"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import type React from "react";
import { Container } from "@mui/material";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/myzelaoe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        console.error("Form submission error:", response.statusText);
      }
    } catch (error) {
      console.error("Form submission failed:", error);
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } },
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      text: "napalbeverly68@gmail.com",
      label: "Email",
    },
    { icon: <Phone size={24} />, text: "+639198503235", label: "Phone" },
    {
      icon: <MapPin size={24} />,
      text: "Purok Buenavista, Tubo-tubo, Cagwait, Surigao Del Sur 8304",
      label: "Location",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-gray-50 dark:bg-gray-950 relative overflow-hidden"
    >
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-cyan-100 dark:bg-cyan-900/30 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-cyan-100 dark:bg-cyan-900/30 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70"></div>

      <Container maxWidth="lg" className="px-6">
        <div className="relative z-10">
          <motion.h2
            className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get In Touch
          </motion.h2>
          <motion.p
            className="text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Have a project in mind or want to discuss a potential collaboration?
            I&lsquo;d love to hear from you!
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="lg:col-span-1">
              <motion.div
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-semibold mb-6 dark:text-white">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-cyan-100 dark:bg-cyan-900/50 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                        {item.icon}
                      </div>
                      <div className="ml-4">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {item.label}
                        </p>
                        <p className="font-medium dark:text-white">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-2">
              <motion.form
                variants={formVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                onSubmit={handleSubmit}
                className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700"
              >
                <motion.div variants={inputVariants} whileFocus="focus">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200"
                    placeholder="Your name"
                  />
                </motion.div>
                <motion.div variants={inputVariants} whileFocus="focus">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </motion.div>
                <motion.div variants={inputVariants} whileFocus="focus">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white dark:bg-gray-700 text-white-900 dark:text-white transition-all duration-200"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </motion.div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:shadow-lg transition duration-300"
                >
                  Send Message
                </motion.button>
              </motion.form>

              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-lg border border-green-100 dark:border-green-900/30 shadow-md"
                  >
                    Thank you for your message! I&apos;ll get back to you soon.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;