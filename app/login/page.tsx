// "use client";
// import { useRouter } from "next/navigation";
// import { useState } from "react";

// export default function LoginPage() {
//   const router = useRouter();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     // Save login info to localStorage
//     localStorage.setItem("ai-user", JSON.stringify({ name, email }));

//     // Redirect to chat
//     router.push("/assistant");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[var(--background)] text-[var(--foreground)] px-4">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-8 w-full max-w-md space-y-4"
//       >
//         <h2 className="text-2xl font-semibold text-center">Log In</h2>
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="w-full p-3 rounded bg-[var(--input)] border border-[var(--border)] text-sm"
//           required
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full p-3 rounded bg-[var(--input)] border border-[var(--border)] text-sm"
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full p-3 rounded bg-[var(--input)] border border-[var(--border)] text-sm"
//         />
//         <button
//           type="submit"
//           className="w-full bg-[var(--primary)] text-[var(--primary-foreground)] py-3 rounded-md font-medium hover:opacity-90"
//         >
//           Continue to Chat
//         </button>
//       </form>
//     </div>
//   );
// }
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md border border-white/30"
      >
        <div className="flex flex-col items-center space-y-4">
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 flex items-center justify-center shadow-lg">
            <span className="text-white text-2xl font-bold">AI</span>
          </div>

          <h2 className="text-white text-3xl font-bold">Welcome Back</h2>
          <p className="text-white/70 text-sm text-center">
            Sign in to continue to your AI assistant dashboard
          </p>
        </div>

        <form className="mt-6 space-y-4">
            <label htmlFor="Name">Name</label>
          <input
            type="text"
            id="Name"
            placeholder="Name"
            className="w-full p-3 rounded-md bg-white/10 placeholder-white/70 text-white border border-white/30 outline-none focus:ring-2 focus:ring-purple-500"
          />
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            id="Email"
            placeholder="Email"
            className="w-full p-3 rounded-md bg-white/10 placeholder-white/70 text-white border border-white/30 outline-none focus:ring-2 focus:ring-purple-500"
          />
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            id="Password"
            placeholder="Password"
            className="w-full p-3 rounded-md bg-white/10 placeholder-white/70 text-white border border-white/30 outline-none focus:ring-2 focus:ring-purple-500"
          />
          <Link href="/assistant">
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Continue to Chat
          </button>
          </Link>
        </form>

     

        <div className="mt-4 text-center">
          <Link
            href="/assistant"
            className="text-blue-400 text-sm underline hover:text-blue-500"
          >
            Continue without login
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
