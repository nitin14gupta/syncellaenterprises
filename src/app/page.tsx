'use client'
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ScrollProgressIndicator from "@/components/layout/ScrollProgressIndicator";
import ParticleBackground from "@/components/3d/ParticleBackground";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProductsSection from "@/components/sections/ProductsSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import TechnologySection from "@/components/sections/TechnologySection";
import ContactSection from "@/components/sections/ContactSection";
import Enhanced3DGlobe from "@/components/3d/Enhanced3DGlobe";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen relative">
      {/* 3D Particle Background */}
      <ParticleBackground />

      {/* Scroll Progress Indicator */}
      <ScrollProgressIndicator />

      <Header />

      <main className="relative z-10 overflow-x-hidden">
        {/* Hero Section with regular layout */}
        <section className="min-h-screen py-16">
          <HeroSection />
        </section>

        {/* About Section with diagonal scroll effect */}
        <div className="px-6 md:px-16 lg:px-24">
          <AboutSection />
        </div>
        {/* </DiagonalScroll> */}

        {/* Enhanced 3D Globe Section */}
        <section className="py-24 my-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center">Global Sensor Network</h2>
            <Enhanced3DGlobe className="my-12" />
          </div>
        </section>

        {/* Products Section with horizontal scroll */}
        <div className="flex">
          <div className="flex items-center justify-center p-12">
            <ProductsSection />
          </div>

        </div>

        <div className="min-w-screen h-full flex items-center justify-center p-12">
          <div className="w-[80vw]">
            <FeaturesSection />
          </div>
        </div>

        <div className="min-w-screen h-full flex items-center justify-center p-12">
          <div className="w-[80vw]">
            <TechnologySection />
          </div>
        </div>

        {/* Contact Section with diagonal scroll in opposite direction */}
        <div className="px-6 md:px-16 lg:px-24">
          <ContactSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}
