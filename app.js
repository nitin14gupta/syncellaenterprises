function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    try {
      initLocomotive();
      initParallaxMouseMove();
      setIsLoading(false);
    } catch (error) {
      reportError(error);
    }
  }, []);

  if (isLoading) {
    return (
      <div data-name="loading" className="h-screen w-screen flex items-center justify-center bg-[#1A1A1A]">
        <div className="text-white text-2xl">Loading...</div>
      </div>
    );
  }

  return (
    <div data-name="app-container" className="relative" data-scroll-container>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <CaseStudies />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
