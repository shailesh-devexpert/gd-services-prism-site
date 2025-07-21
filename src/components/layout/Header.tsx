import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'Web Development', path: '/services/web-development' },
    { name: 'SEO Services', path: '/services/seo' },
    { name: 'Digital Marketing', path: '/services/digital-marketing' },
    { name: 'WordPress Development', path: '/services/wordpress' },
    { name: 'Shopify Development', path: '/services/shopify' },
    { name: 'Software Development', path: '/services/software' },
    { name: 'Cyber Security', path: '/services/cybersecurity' },
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-primary text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone size={16} />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={16} />
              <span>info@gdservices.com</span>
            </div>
          </div>
          <div className="text-sm">
            Professional IT Solutions & Digital Services
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass shadow-material-md'
            : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">GD</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">GD Services</h1>
                <p className="text-xs text-muted-foreground">IT Solutions</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className={`font-medium transition-colors hover:text-primary ${
                  location.pathname === '/' ? 'text-primary' : 'text-foreground'
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`font-medium transition-colors hover:text-primary ${
                  location.pathname === '/about' ? 'text-primary' : 'text-foreground'
                }`}
              >
                About
              </Link>
              
              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button className="flex items-center space-x-1 font-medium text-foreground hover:text-primary transition-colors">
                  <span>Services</span>
                  <ChevronDown size={16} className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 modern-card animate-fade-in">
                    <div className="py-2">
                      {services.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-white/20 hover:text-primary transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/portfolio"
                className={`font-medium transition-colors hover:text-primary ${
                  location.pathname === '/portfolio' ? 'text-primary' : 'text-foreground'
                }`}
              >
                Portfolio
              </Link>
              <Link
                to="/contact"
                className={`font-medium transition-colors hover:text-primary ${
                  location.pathname === '/contact' ? 'text-primary' : 'text-foreground'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link
                to="/contact"
                className="modern-button bg-gradient-primary text-white hover:scale-105 transition-all duration-300"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden modern-card mt-2 animate-slide-up">
              <div className="py-4 space-y-2">
                <Link
                  to="/"
                  className="block px-4 py-2 text-foreground hover:bg-white/20 hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="block px-4 py-2 text-foreground hover:bg-white/20 hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                
                {/* Mobile Services Menu */}
                <div className="px-4 py-2">
                  <div className="text-foreground font-medium mb-2">Services</div>
                  <div className="pl-4 space-y-1">
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  to="/portfolio"
                  className="block px-4 py-2 text-foreground hover:bg-white/20 hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Portfolio
                </Link>
                <Link
                  to="/contact"
                  className="block px-4 py-2 text-foreground hover:bg-white/20 hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <div className="px-4 pt-4">
                  <Link
                    to="/contact"
                    className="modern-button bg-gradient-primary text-white w-full text-center block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;