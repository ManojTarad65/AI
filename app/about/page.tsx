"use client";

import { motion } from "framer-motion";
import { BrainCog, ShieldCheck, Sparkles } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen w-full bg-[#0a0a0a] px-6 py-20 flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Glowing background elements */}
      <motion.div
        className="absolute w-[800px] h-[800px] bg-purple-800 rounded-full blur-[200px] opacity-10 -top-40 -left-40"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] bg-cyan-500 rounded-full blur-[160px] opacity-10 bottom-10 right-10"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold text-white mb-6 text-center z-10"
      >
        Why Nowhere AI?
      </motion.h2>

      {/* Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-gray-400 text-center max-w-3xl mb-12 z-10"
      >
        Nowhere AI is the future-ready AI assistant platform, merging powerful large language models with beautiful interfaces and real-time intelligence. Build smarter, chat deeper, deploy faster.
      </motion.p>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-10 z-10 max-w-6xl w-full">
        {/* Feature 1 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-[#141414] border border-gray-700 rounded-2xl p-6 text-left shadow-xl"
        >
          <BrainCog className="text-blue-500 w-10 h-10 mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">AI Smart Engine</h3>
          <p className="text-gray-400">
            Chat with real-time intelligent AI powered by Gemini, OpenAI and advanced NLP logic.
          </p>
        </motion.div>

        {/* Feature 2 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-[#141414] border border-gray-700 rounded-2xl p-6 text-left shadow-xl"
        >
          <ShieldCheck className="text-purple-400 w-10 h-10 mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Secure & Performant</h3>
          <p className="text-gray-400">
            Built with secure OAuth, serverless functions, and blazing-fast UI for all devices.
          </p>
        </motion.div>

        {/* Feature 3 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-[#141414] border border-gray-700 rounded-2xl p-6 text-left shadow-xl"
        >
          <Sparkles className="text-cyan-400 w-10 h-10 mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Modern UI/UX</h3>
          <p className="text-gray-400">
            Made with Framer Motion, Tailwind magic, and aesthetic gradients for a futuristic feel.
          </p>
        </motion.div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-16 text-center z-10"
      >
        <p className="text-gray-300 text-lg mb-4">
          Dive into our docs to start building with Nowhere AI.
        </p>
        <a
          href="/docs"
          className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:opacity-90 transition shadow-lg"
        >
          Explore Docs 🚀
        </a>
      </motion.div>
    </section>
  );
}
