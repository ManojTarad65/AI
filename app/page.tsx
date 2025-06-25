import HeroSection from "@/components/home/Hero";
import FeaturesSection from "@/components/home/Feature";

import Footer from "@/components/shared/Footer";
import AboutSection from "./about/page";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#110e30] to-[#575764] text-white overflow-x-hidden">
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <Footer />
    </main>
  );
}
