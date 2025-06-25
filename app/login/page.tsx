
"use client";

import { motion } from "framer-motion";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-tr from-[#0f0c29] via-[#302b63] to-[#24243e] overflow-hidden px-4">
      {/* === Animated Gradient Blobs === */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.15, scale: 2 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
        className="absolute w-[500px] h-[500px] bg-pink-500 rounded-full top-[-200px] left-[-150px] blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.15, scale: 2 }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
        className="absolute w-[400px] h-[400px] bg-blue-500 rounded-full bottom-[-150px] right-[-100px] blur-3xl"
      />

      {/* === Login Form Card === */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 w-full max-w-lg bg-white/10 backdrop-blur-xl text-white p-10 rounded-3xl shadow-2xl border border-white/20"
      >
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            >
            <img src="/logo.png" alt="Logo" className="w-24 h-24 rounded-full mb-6 shadow-lg" />
            </motion.div>          

          <h2 className="text-4xl font-bold mb-4">Welcome to Nowhere AI</h2>
          <p className="text-white/70 mb-8 text-center max-w-xs">
            Sign in or create your account to experience the power of AI chat.
          </p>

          <div className="w-full space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 rounded-md bg-white/20 text-white placeholder-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md bg-white/20 text-white placeholder-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md bg-white/20 text-white placeholder-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />

            <Link href="/assistant">
              <button className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-md hover:scale-105 transition-transform text-white font-semibold">
                Continue to Chat
              </button>
            </Link>
          </div>

          <div className="mt-8 text-sm text-white/80">or continue with</div>

          <div className="flex gap-4 mt-4">
            <button
              onClick={() => signIn("google")}
              className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-md shadow hover:scale-105 transition-transform"
            >
              <FcGoogle size={20} /> Google
            </button>
            <button
              onClick={() => signIn("github")}
              className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-md shadow hover:scale-105 transition-transform"
            >
              <FaGithub size={20} /> GitHub
            </button>
          </div>

          <Link href="/assistant">
            <p className="mt-6 text-sm text-white/70 hover:underline cursor-pointer">
              Or skip login and Go to Chat
            </p>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
