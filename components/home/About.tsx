"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-12 py-20 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex-1"
      >
        <h2 className="text-4xl font-bold mb-4">Why This AI?</h2>
        <p className="text-white/80 text-lg">
          Designed to help you brainstorm, summarize, write, or just have fun chatting. 
          Built with cutting-edge models for an intuitive experience.
        </p>
      </motion.div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex-1"
      >
        <div className="w-full h-64 bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl shadow-2xl blur-2xl opacity-40" />
      </motion.div>
    </section>
  );
}
