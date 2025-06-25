"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Brain, Cog, Code, Rocket } from "lucide-react";

export default function DocsPage() {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  const isVisible = (text: string) =>
    text.toLowerCase().includes(search.toLowerCase());

  return (
    <main className="flex flex-col md:flex-row bg-[#0b0b0b] min-h-screen text-white">
      {/* Mobile Header with Toggle */}
      <div className="md:hidden flex justify-between items-center px-6 pt-6">
        <h2 className="text-xl font-bold">Docs</h2>
        <button onClick={() => setOpen(!open)} className="text-white text-2xl">
          {open ? "✖️" : "☰"}
        </button>
      </div>

      {/* Mobile Sidebar */}
      {open && (
        <aside className="md:hidden bg-[#121212] border-t border-gray-800 p-4 space-y-3">
          <Link href="#overview" className="block text-gray-300">Overview</Link>
          <Link href="#getting-started" className="block text-gray-300">Getting Started</Link>
          <Link href="#api" className="block text-gray-300">API</Link>
          <Link href="#examples" className="block text-gray-300">Examples</Link>
        </aside>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-full max-w-[250px] bg-[#121212] border-r border-gray-800 p-6 sticky top-0 h-screen">
        <h2 className="text-2xl font-bold mb-6">📚 Docs</h2>
        <nav className="space-y-3 text-sm">
          <Link href="#overview" className="hover:text-cyan-400 transition">Overview</Link>
          <Link href="#getting-started" className="hover:text-cyan-400 transition">Getting Started</Link>
          <Link href="#api" className="hover:text-cyan-400 transition">API Reference</Link>
          <Link href="#examples" className="hover:text-cyan-400 transition">Examples</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <section className="flex-1 w-full px-6 md:px-12 py-12 md:py-20">
        {/* Page Header */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-center md:text-left"
        >
          Nowhere AI Docs
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 mb-12 text-center md:text-left"
        >
          The complete guide to building with the Nowhere AI Platform.
        </motion.p>

        {/* Search */}
        <div className="mb-12">
          <input
            type="text"
            placeholder="Search Docs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-[400px] px-4 py-2 bg-[#141414] text-white rounded-lg border border-gray-700 focus:outline-none focus:ring focus:border-cyan-500"
          />
        </div>

        {/* Docs Sections */}
        <div className="space-y-24">
          {isVisible("overview") && (
            <section id="overview">
              <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
                <Brain className="text-cyan-500" /> Overview
              </h2>
              <p className="text-gray-400">
                Nowhere AI is your futuristic AI interface, built with modern technologies like Next.js, Tailwind, Framer Motion and OpenAI/Gemini integrations. It gives developers full control with stunning UI components.
              </p>
            </section>
          )}

          {isVisible("getting started") && (
            <section id="getting-started">
              <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4 mt-10">
                <Cog className="text-purple-500" /> Getting Started
              </h2>
              <ol className="list-decimal list-inside text-gray-400 space-y-2">
                <li>Clone the GitHub repository</li>
                <li>Install dependencies using `npm install`</li>
                <li>Add `.env` file with API keys</li>
                <li>Run the app with `npm run dev`</li>
              </ol>
            </section>
          )}

          {isVisible("api") && (
            <section id="api">
              <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4 mt-10">
                <Code className="text-green-400" /> API Reference
              </h2>
              <p className="text-gray-400 mb-4">
                Send a POST request to your API route:
              </p>
              <pre className="bg-[#141414] text-sm rounded-lg p-4 text-gray-300 overflow-auto">
{`POST /api/chat
Content-Type: application/json

{
  "message": "Hello world",
  "sessionId": "user_123"
}`}
              </pre>
            </section>
          )}

          {isVisible("examples") && (
            <section id="examples">
              <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4 mt-10">
                <Rocket className="text-pink-500" /> Examples
              </h2>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Real-time Chat Assistant</li>
                <li>Resume Builder + AI</li>
                <li>Story/Content Generator</li>
                <li>Prompt Art Bot with DALL·E</li>
              </ul>
            </section>
          )}
        </div>
      </section>
    </main>
  );
}
