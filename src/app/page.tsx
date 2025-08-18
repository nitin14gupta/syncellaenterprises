'use client'
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProductsSection from "@/components/sections/ProductsSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import TechnologySection from "@/components/sections/TechnologySection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <FeaturesSection />
        <TechnologySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
