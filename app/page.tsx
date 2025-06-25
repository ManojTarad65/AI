
"use client";

import { motion } from "framer-motion";
import Lottie from "lottie-react";
import AiAnimation from "@/public/ai.json"; // your Lottie JSON path
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen overflow-hidden bg-[#0f0f0f] relative flex items-center justify-center">
      {/* Background Effects */}
      <motion.div
        className="absolute w-[700px] h-[700px] bg-purple-600 rounded-full blur-[200px] opacity-20 z-0"
        animate={{ x: [0, 100, -100, 0], y: [0, -100, 100, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] bg-cyan-400 rounded-full blur-[180px] opacity-10 top-0 right-0 z-0"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main Container */}
      <motion.div
        className="relative z-10 w-[90vw] max-w-[1200px] h-[90vh] rounded-3xl border-[3px] border-[#333] bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] shadow-2xl px-6 py-8 flex flex-col"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Navbar */}
        <div className="flex justify-between items-center border-b border-gray-700 pb-4">
          <h1 className="text-white text-xl md:text-2xl font-bold">Nowhere AI</h1>
          <nav className="space-x-6 text-sm text-gray-300">
            <Link href="/" className="hover:text-white">Home</Link>
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/docs" className="hover:text-white">Docs</Link>
            <Link href="/login" className="hover:text-white  cursor-pointer">Get Started</Link>
          </nav>
        </div>

        {/* Hero Content */}
        <div className="flex flex-1 items-center justify-between px-6 py-6 gap-8">
          {/* Left Text Section */}
          <div className="max-w-[60%]">
            <motion.h2
              className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              Nowhere AI
            </motion.h2>

            <p className="text-gray-400 mt-4 text-lg">
              A futuristic AI ecosystem made to power your imagination.
            </p>
            <p className="text-gray-500 mt-2 max-w-xl">
              Unlock creativity with real-time tools, neural intelligence, and deeply integrated developer tools for building future-proof solutions with AI.
            </p>



            {/* Get Started Button */}
            <Link href="/login">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-xl text-white font-semibold text-lg shadow-lg hover:opacity-90 transition cursor-pointer"
            >
              Get Started
            </motion.button>
            </Link>
          </div>

          {/* Right Side Animation */}
          <div className="hidden md:block">
            <Lottie animationData={AiAnimation} loop={true} className="w-[300px] h-[300px]" />
          </div>
        </div>
      </motion.div>
    </main>
  );
}
