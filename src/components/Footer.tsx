
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const services = [
    'Commercial Construction',
    'Residential Construction', 
    'Industrial Projects',
    'Infrastructure Development',
    'Engineering Services',
    'Renovation & Remodeling'
  ];

  const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
    { label: 'Careers', href: '#careers' },
    { label: 'Safety', href: '#safety' }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Main Structures</h3>
                <p className="text-gray-400 text-sm">Engineering Excellence</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Building tomorrow's infrastructure with 25+ years of expertise. 
              We transform visions into reality through exceptional construction and engineering solutions.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                <Phone size={16} />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                <Mail size={16} />
                <span>info@mainstructures.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                <MapPin size={16} />
                <span>123 Construction Ave, Builder City, BC 12345</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a 
                    href="#services"
                    className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 opacity-60 group-hover:opacity-100 transition-opacity"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group"
                  >
                    <ExternalLink size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Connect With Us</h4>
            
            <div className="space-y-4 mb-6">
              <div className="bg-slate-800 rounded-lg p-4">
                <h5 className="font-semibold text-white mb-2">24/7 Emergency Service</h5>
                <p className="text-gray-300 text-sm mb-2">Construction emergencies? We're here to help.</p>
                <div className="flex items-center space-x-2 text-accent">
                  <Phone size={16} />
                  <span className="font-semibold">(555) 911-HELP</span>
                </div>
              </div>
              
              <div className="bg-slate-800 rounded-lg p-4">
                <h5 className="font-semibold text-white mb-2">Office Hours</h5>
                <p className="text-gray-300 text-sm">Mon - Fri: 8AM - 6PM</p>
                <p className="text-gray-300 text-sm">Emergency: 24/7</p>
              </div>
            </div>

            <div>
              <h5 className="font-semibold text-white mb-4">Follow Us</h5>
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, href: '#' },
                  { icon: Twitter, href: '#' },
                  { icon: Instagram, href: '#' },
                  { icon: Linkedin, href: '#' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition-colors"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Main Structures Engineering. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Sitemap</a>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Licensed & Insured</span>
              </div>
              <div className="text-gray-600">|</div>
              <span>ISO 9001 Certified</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
