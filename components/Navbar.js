function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav data-name="navbar" className="fixed w-full bg-[#1A1A1A]/90 backdrop-blur-md z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div data-name="logo" className="text-2xl font-bold text-white">
            Syncella
          </div>
          
          <div data-name="desktop-menu" className="hidden md:flex space-x-8">
            <a href="#about" className="nav-link">About</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#products" className="nav-link">Products</a>
            <a href="#case-studies" className="nav-link">Case Studies</a>
            <a href="#team" className="nav-link">Team</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>

          <button 
            data-name="mobile-menu-button"
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div data-name="mobile-menu" className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#about" className="nav-link">About</a>
              <a href="#services" className="nav-link">Services</a>
              <a href="#products" className="nav-link">Products</a>
              <a href="#case-studies" className="nav-link">Case Studies</a>
              <a href="#team" className="nav-link">Team</a>
              <a href="#contact" className="nav-link">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
