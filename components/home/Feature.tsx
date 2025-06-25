"use client";
import { motion } from "framer-motion";

const features = [
  { title: "Instant Answers", desc: "Get fast, reliable AI-powered answers." },
  { title: "Smart Chat", desc: "Chat like you're talking to a human expert." },
  { title: "24/7 Support", desc: "Your AI is always awake." },
];

export default function FeaturesSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-20 bg-white/5 backdrop-blur-md">
      {features.map((feature, i) => (
        <motion.div
          key={i}
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: i * 0.2, duration: 0.7 }}
          className="bg-white/10 p-6 rounded-xl border border-white/10 backdrop-blur-md hover:scale-105 transition-transform"
        >
          <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-white/70">{feature.desc}</p>
        </motion.div>
      ))}
    </section>
  );
}
