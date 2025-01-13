function Hero() {
  const globeContainerRef = React.useRef(null);

  React.useEffect(() => {
    try {
      // Initialize Three.js after component is mounted
      if (globeContainerRef.current) {
        initThreeJS(globeContainerRef.current);
      }
      const title = document.querySelector('[data-name="hero-title"]');
      gsap.from(title, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out"
      });
    } catch (error) {
      reportError(error);
    }
  }, []);

  return (
    <section data-name="hero" className="min-h-screen relative overflow-hidden">
      <div ref={globeContainerRef} data-name="globe-container" className="absolute inset-0 z-0"></div>
      
      <div className="relative z-10 container mx-auto px-6 pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            data-name="hero-title"
            className="text-5xl md:text-7xl font-bold mb-8 text-white"
          >
            Innovating for <span className="text-[#4A90E2]">Tomorrow</span>
          </h1>
          
          <p data-name="hero-subtitle" className="text-xl md:text-2xl mb-12 text-gray-300">
            Cutting-edge tech consulting, R&D solutions, and global logistics services
          </p>
          
          <div data-name="hero-cta" className="flex flex-col sm:flex-row justify-center gap-4">
            <a className="button glow" href="#services">
              Explore Our Services
            </a>
            <a className="button" href="#contact">
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <div 
        data-name="hero-scroll-indicator" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce">
          <svg 
            className="w-6 h-6 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
