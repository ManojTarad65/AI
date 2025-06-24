// import { Assistant } from "./assistant";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Feature";


export default function Home() {
  return (
    <>
    <div className="py-20 px-6 bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />
      <Hero />
      <Features />

      {/* <Assistant /> */}
    </div>
    </>
  );
}
