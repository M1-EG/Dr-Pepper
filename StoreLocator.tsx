import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Search, Navigation, Store } from 'lucide-react';

export default function StoreLocator() {
  const [zipCode, setZipCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <section id="where-to-buy" className="py-24 bg-pepper-cream relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-pepper-maroon/5 -skew-x-12 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-pepper-maroon font-bold text-sm uppercase tracking-widest mb-4 block"
            >
              Find Your Flavor
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl text-pepper-maroon mb-6"
            >
              WHERE TO <br />
              <span className="text-pepper-gold">GRAB A COLD ONE</span>
            </motion.h2>
            <p className="text-pepper-black/60 text-lg mb-10 max-w-xl mx-auto lg:mx-0">
              Enter your zip code to find the nearest retailer stocking your favorite Dr Pepper flavors.
            </p>

            <form onSubmit={handleSearch} className="relative max-w-md mx-auto lg:mx-0">
              <input 
                type="text" 
                placeholder="Enter Zip Code" 
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                className="w-full bg-white border-2 border-pepper-maroon/10 rounded-full px-8 py-5 pr-36 focus:outline-none focus:border-pepper-maroon transition-colors text-lg font-bold text-pepper-maroon placeholder:text-pepper-maroon/30 shadow-xl"
              />
              <button 
                type="submit"
                disabled={isLoading}
                className="absolute right-2 top-2 bottom-2 bg-pepper-maroon text-pepper-cream px-8 rounded-full font-bold uppercase tracking-tighter hover:bg-pepper-gold hover:text-pepper-maroon transition-colors flex items-center gap-2 disabled:opacity-50"
              >
                {isLoading ? (
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Search size={20} />
                  </motion.div>
                ) : (
                  <>
                    <Search size={20} />
                    Find
                  </>
                )}
              </button>
            </form>

            <button className="mt-6 flex items-center gap-2 text-pepper-maroon font-bold text-sm uppercase tracking-widest hover:text-pepper-gold transition-colors mx-auto lg:mx-0">
              <Navigation size={16} />
              Use My Current Location
            </button>
          </div>

          {/* Retailer Grid */}
          <div className="flex-1 w-full max-w-2xl">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { name: 'Walmart', logo: 'https://picsum.photos/seed/walmart/200/100' },
                { name: 'Target', logo: 'https://picsum.photos/seed/target/200/100' },
                { name: 'Kroger', logo: 'https://picsum.photos/seed/kroger/200/100' },
                { name: 'Publix', logo: 'https://picsum.photos/seed/publix/200/100' },
                { name: '7-Eleven', logo: 'https://picsum.photos/seed/7eleven/200/100' },
                { name: 'Walgreens', logo: 'https://picsum.photos/seed/walgreens/200/100' },
              ].map((retailer, index) => (
                <motion.div 
                  key={retailer.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center justify-center gap-4 hover:shadow-xl transition-shadow border border-pepper-maroon/5 group"
                >
                  <div className="w-full aspect-video bg-pepper-cream/50 rounded-lg flex items-center justify-center overflow-hidden">
                    <img 
                      src={retailer.logo} 
                      alt={retailer.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="font-bold text-xs uppercase tracking-widest text-pepper-maroon/50 group-hover:text-pepper-maroon transition-colors">
                    {retailer.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
