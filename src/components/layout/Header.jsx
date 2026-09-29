import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';
import MobileNav from './MobileNav';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isGovContractingOpen, setIsGovContractingOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setIsGovContractingOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Core Capabilities', path: '/core-capabilities' },
    { name: 'Key Personnel', path: '/key-personnel' },
    { name: 'Contact', path: '/contact' }
  ];

  const govLinks = [
    { name: 'NAICS & PSC Codes', path: '/naics-psc-codes' },
    { name: 'Certifications & Registrations', path: '/certifications' },
    { name: 'Past Performance', path: '/past-performance' },
    { name: 'Capability Statement', path: '/capability-statement' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-navy/95 backdrop-blur-md py-4 shadow-lg' : 'bg-navy py-6'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="text-white text-2xl font-heading font-bold z-50 relative">
              OGlenn Enterprises
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.slice(0, 3).map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-white/90 hover:text-gold transition-colors font-medium font-body"
                >
                  {link.name}
                </Link>
              ))}

              {/* Gov Contracting Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsGovContractingOpen(true)}
                onMouseLeave={() => setIsGovContractingOpen(false)}
              >
                <Link 
                  to="/government-contracting"
                  className="flex items-center space-x-1 text-white/90 hover:text-gold transition-colors font-medium font-body py-2"
                >
                  <span>Government Contracting</span>
                  <ChevronDown className="w-4 h-4" />
                </Link>

                <AnimatePresence>
                  {isGovContractingOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-xl py-2 mt-1 border border-border overflow-hidden"
                    >
                      {govLinks.map((link) => (
                        <Link
                          key={link.name}
                          to={link.path}
                          className="block px-4 py-2 text-ink hover:bg-surface hover:text-navy font-medium text-sm transition-colors"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.slice(3).map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-white/90 hover:text-gold transition-colors font-medium font-body"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA & Mobile Toggle */}
            <div className="flex items-center space-x-4">
              <Button href="/capability-statement" variant="primary" className="hidden lg:flex px-4 py-2 text-sm">
                Capability Statement
              </Button>
              <button
                className="lg:hidden text-white hover:text-gold transition-colors"
                onClick={() => setIsMobileNavOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="w-8 h-8" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileNav 
        isOpen={isMobileNavOpen} 
        onClose={() => setIsMobileNavOpen(false)} 
        navLinks={navLinks}
        govLinks={govLinks}
      />
    </>
  );
};

export default Header;
