
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services', hasDropdown: true },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white shadow-lg'
    }`}>
      {/* Enhanced Top bar */}
      <div className="bg-slate-800 text-white py-3">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 hover:text-orange-400 transition-colors">
              <Phone size={14} />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-orange-400 transition-colors">
              <Mail size={14} />
              <span>info@mainstructures.com</span>
            </div>
          </div>
          <div className="hidden lg:flex items-center space-x-6">
            <span>Licensed & Insured • 24/7 Emergency Service</span>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400">Available Now</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3 group">
            <div className="w-12 h-12 construction-gradient rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                Main Structures
              </h1>
              <p className="text-sm text-slate-600">Engineering Excellence</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <a
                  href={item.href}
                  className="flex items-center space-x-1 text-slate-700 hover:text-blue-600 font-medium transition-colors py-2"
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />}
                </a>
                {/* Dropdown could be added here */}
              </div>
            ))}
            <Button className="construction-gradient text-white hover:scale-105 transition-transform">
              Get Free Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t animate-fade-in-up">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-slate-700 hover:text-blue-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2 border-t">
                <Button className="construction-gradient text-white w-full">
                  Get Free Quote
                </Button>
                <div className="flex items-center justify-center space-x-4 mt-3 text-sm text-gray-600">
                  <span>(555) 123-4567</span>
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <span>Available 24/7</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
