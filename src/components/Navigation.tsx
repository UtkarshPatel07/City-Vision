import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { Button } from './ui/button';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Why Nashik', href: '#why-nashik' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-[var(--navy)] to-[var(--vine-green)] rounded-xl flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className={`transition-colors ${isScrolled ? 'text-[var(--navy)]' : 'text-white'}`}>
                City Vision
              </h1>
              <p className={`text-sm transition-colors ${isScrolled ? 'text-[var(--medium-gray)]' : 'text-white/80'}`}>
                Real Estate
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`transition-colors hover:text-[var(--vine-green)] ${
                  isScrolled ? 'text-[var(--navy)]' : 'text-white'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm"
              className={`transition-all ${
                isScrolled 
                  ? 'border-[var(--navy)] text-[var(--navy)] hover:bg-[var(--navy)] hover:text-white' 
                  : 'border-white hover:bg-white hover:text-[var(--navy)]'
              }`}
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
           
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden transition-colors ${
              isScrolled ? 'text-[var(--navy)]' : 'text-white'
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="lg:hidden overflow-hidden bg-white border-t"
      >
        <div className="px-4 py-4 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block text-[var(--navy)] hover:text-[var(--vine-green)] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <div className="pt-4 space-y-2">
            <Button variant="outline" className="w-full">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
            <Button className="w-full bg-[var(--warm-gold)] hover:bg-[var(--warm-gold)]/90 text-[var(--navy)]">
              WhatsApp
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
}