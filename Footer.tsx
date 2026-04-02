import { motion } from 'motion/react';
import { Facebook, Twitter, Instagram, Youtube, ArrowRight, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-pepper-maroon text-pepper-cream pt-24 pb-12 overflow-hidden relative">
      {/* Background Logo */}
      <div className="absolute -bottom-20 -right-20 text-[20rem] font-display text-white/5 pointer-events-none select-none">
        DP
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2">
            <div className="bg-white text-pepper-maroon font-display px-4 py-2 rounded-sm text-3xl transform -rotate-2 shadow-xl inline-block mb-8">
              Dr Pepper
            </div>
            <h3 className="text-3xl md:text-4xl mb-6">JOIN THE <br /> <span className="text-pepper-gold">PEPPER PERKS</span></h3>
            <p className="text-pepper-cream/60 text-lg mb-8 max-w-md">
              Sign up for exclusive rewards, early access to new flavors, and a chance to win one-of-a-kind prizes.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-4 focus:outline-none focus:border-pepper-gold transition-colors"
              />
              <button className="bg-pepper-gold text-pepper-maroon px-8 py-4 rounded-full font-bold uppercase tracking-tighter hover:scale-105 transition-transform flex items-center justify-center gap-2">
                Join
                <ArrowRight size={18} />
              </button>
            </form>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-pepper-gold font-bold uppercase tracking-widest text-sm mb-8">Explore</h4>
            <ul className="flex flex-col gap-4">
              {['Products', 'Flavors', 'Where to Buy', 'Promotions', 'Recipes', 'Pepper Perks'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-pepper-cream/60 hover:text-pepper-gold transition-colors text-lg">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-pepper-gold font-bold uppercase tracking-widest text-sm mb-8">Company</h4>
            <ul className="flex flex-col gap-4">
              {['Our Story', 'Sustainability', 'Careers', 'Contact Us', 'FAQ', 'Privacy Policy'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-pepper-cream/60 hover:text-pepper-gold transition-colors text-lg">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
              <a 
                key={i} 
                href="#" 
                className="text-pepper-cream/60 hover:text-pepper-gold transition-colors hover:scale-110 transform transition-transform"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
          
          <div className="text-pepper-cream/40 text-sm text-center md:text-right">
            <p className="mb-2">© 2026 Dr Pepper/Seven Up, Inc. All rights reserved.</p>
            <p>DR PEPPER is a registered trademark of Dr Pepper/Seven Up, Inc.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
