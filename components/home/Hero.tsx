"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();
  return (
    <section className="flex flex-col items-center justify-center text-center py-24 px-4">
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold mb-6"
      >
       Nowhere AI
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="max-w-xl text-lg text-white/80 mb-10"
      >
         Your personal assistant born from nothing, designed to solve anything. Built with next-gen models, infinite ideas, and zero limitations.
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => router.push("/login")}
        className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-full text-lg font-medium shadow-xl cursor-pointer"
      >
        Get Started
      </motion.button>
    </section>
  );
}
