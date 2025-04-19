import React, { useState, useEffect } from 'react';
import { Home, User, Code, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'portfolio', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a051c]/80 backdrop-blur-md shadow-lg' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <motion.a
          href="#"
          className="text-xl font-bold shine-effect"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Indrajith
        </motion.a>
        
        <div className="flex gap-8">
          {[
            { href: '#home', icon: Home, label: 'Home' },
            { href: '#about', icon: User, label: 'About' },
            { href: '#portfolio', icon: Code, label: 'Portfolio' },
            { href: '#contact', icon: Phone, label: 'Contact' }
          ].map(({ href, icon: Icon, label }) => (
            <motion.a
              key={label}
              href={href}
              className={`nav-link flex items-center gap-2 ${
                activeSection === href.slice(1) ? 'active' : ''
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="w-4 h-4" />
              {label}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};