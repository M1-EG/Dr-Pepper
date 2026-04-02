import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShoppingCart, Search, MapPin } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Products', href: '#' },
    { label: 'Flavors', href: '#' },
    { label: 'Where to Buy', href: '#where-to-buy' },
    { label: 'Rewards', href: '#' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-pepper-maroon py-3 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="bg-white text-pepper-maroon font-display px-3 py-1 rounded-sm text-xl md:text-2xl transform -rotate-2 shadow-md">
            Dr Pepper
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className="text-pepper-cream font-medium hover:text-pepper-gold transition-colors text-sm uppercase tracking-widest"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="text-pepper-cream hover:text-pepper-gold transition-colors">
            <Search size={20} />
          </button>
          <a 
            href="#where-to-buy" 
            className="hidden sm:flex items-center gap-2 bg-pepper-gold text-pepper-maroon px-4 py-2 rounded-full font-bold text-xs uppercase tracking-tighter hover:scale-105 transition-transform"
          >
            <MapPin size={14} />
            Find in Store
          </a>
          <button 
            className="md:hidden text-pepper-cream"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-pepper-maroon border-t border-white/10 p-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href}
                  className="text-pepper-cream text-2xl font-display hover:text-pepper-gold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a 
                href="#where-to-buy" 
                className="flex items-center justify-center gap-2 bg-pepper-gold text-pepper-maroon px-6 py-4 rounded-full font-bold text-lg uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                <MapPin size={20} />
                Where to Buy
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
