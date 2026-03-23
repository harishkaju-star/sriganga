
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  activeTab: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'showcase', label: 'Products' },
    { id: 'about', label: 'About' },
    { id: 'catalog', label: 'Catalog' },
    { id: 'quality', label: 'Quality' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 glass shadow-lg' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollTo('home')}>
          <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg border-2 border-white ring-1 ring-gray-100 flex-shrink-0 bg-gradient-to-tr from-blue-900 to-red-600">
            <svg className="w-6 h-6" viewBox="0 0 24 24" role="img" aria-label="Sri Ganga logo" xmlns="http://www.w3.org/2000/svg">
              <title>Sri Ganga</title>
              <rect width="24" height="24" rx="6" fill="transparent" />
              <text x="50%" y="50%" textAnchor="middle" dominantBaseline="central" fontFamily="Inter, ui-sans-serif, system-ui" fontWeight="700" fontSize="9" fill="#ffffff">SGTC</text>
            </svg>
          </div>
          <span className="font-bold text-xl tracking-tight hidden sm:flex items-center gap-1">
            <span className="text-blue-900">Sri Ganga</span>
            <span className="text-red-600">Trading Co</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-sm font-semibold transition-colors relative pb-1 ${
                activeTab === item.id ? 'text-red-600' : 'text-gray-600 hover:text-red-600'
              }`}
            >
              {item.label}
              {activeTab === item.id && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 rounded-full"
                />
              )}
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2 text-gray-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {mobileMenuOpen ? <path d="M18 6 6 18M6 18M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl shadow-2xl p-6 flex flex-col space-y-4"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-lg font-bold text-left px-4 py-3 rounded-xl transition-all ${
                  activeTab === item.id ? 'bg-red-50 text-red-600' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
