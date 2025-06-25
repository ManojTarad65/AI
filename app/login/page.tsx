
// "use client";

// import { motion } from "framer-motion";
// import { signIn } from "next-auth/react";
// import { FcGoogle } from "react-icons/fc";
// import { FaGithub } from "react-icons/fa";

// export default function LoginPage() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-[#0f0c29] via-[#302b63] to-[#24243e] p-4">
//       <motion.div
//         initial={{ y: 60, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="w-full max-w-md bg-white/10 backdrop-blur-md text-white p-8 rounded-2xl shadow-xl border border-white/20"
//       >
//         <div className="flex flex-col items-center">
//           <div className="w-20 h-20 bg-gradient-to-tr from-purple-400 to-pink-500 rounded-full mb-4 shadow-lg" />
//           <h2 className="text-3xl font-semibold mb-6">Sign in</h2>

//           <div className="w-full space-y-4">
//             <input
//               type="text"
//               placeholder="Username"
//               className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400"
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400"
//             />
//             <button className="w-full py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-md hover:scale-105 transition-transform text-white font-medium">
//               Continue to Chat
//             </button>
//           </div>

//           <div className="mt-6 text-sm text-white/80">or continue with</div>

//           <div className="flex gap-4 mt-4">
//             <button
//               onClick={() => signIn("google")}
//               className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-md shadow hover:scale-105 transition-transform"
//             >
//               <FcGoogle size={20} /> Google
//             </button>
//             <button
//               onClick={() => signIn("github")}
//               className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-md shadow hover:scale-105 transition-transform"
//             >
//               <FaGithub size={20} /> GitHub
//             </button>
//           </div>

//           <p className="mt-6 text-sm text-white/70">
//             Don’t have an account? <span className="underline cursor-pointer">Register</span>
//           </p>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-tr from-[#0f0c29] via-[#302b63] to-[#24243e] overflow-hidden">
      {/* === Animated Background Circles === */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.2, scale: 1.8 }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
        className="absolute w-96 h-96 bg-pink-500 rounded-full top-[-100px] left-[-100px] blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.2, scale: 2 }}
        transition={{ duration: 7, repeat: Infinity, repeatType: "mirror" }}
        className="absolute w-80 h-80 bg-blue-500 rounded-full bottom-[-80px] right-[-80px] blur-3xl"
      />

      {/* === Login Card === */}
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-md bg-white/10 backdrop-blur-lg text-white p-8 rounded-2xl shadow-xl border border-white/20 z-10"
      >
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 bg-gradient-to-tr from-purple-400 to-pink-500 rounded-full mb-4 shadow-lg" />
          <h2 className="text-3xl font-semibold mb-6">Create Account</h2>

          <div className="w-full space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <Link href="/assistant">
            <button className="w-full py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-md hover:scale-105 transition-transform text-white font-medium">
              Continue to Chat
            </button>
            </Link>
          </div>

          <div className="mt-6 text-sm text-white/80">or continue with</div>

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
          <p className="mt-6 text-sm text-white/70">
        
            <span className="underline cursor-pointer">Go without sign up</span> 
         
          </p>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

