import { motion } from 'motion/react';
import { ArrowRight, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-pepper-maroon">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pepper-gold rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pepper-cream rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block bg-pepper-gold text-pepper-maroon px-4 py-1 rounded-full font-bold text-xs uppercase tracking-widest mb-6"
            >
              Always One of a Kind
            </motion.span>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-pepper-cream mb-6 leading-tight">
              TASTE THE <br />
              <span className="text-pepper-gold">23 FLAVORS</span>
            </h1>
            
            <p className="text-pepper-cream/80 text-lg md:text-xl mb-10 max-w-xl mx-auto lg:mx-0 font-medium">
              Since 1885, we've been crafting a unique blend that's impossible to replicate. Bold, refreshing, and unmistakably Dr Pepper.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href="#where-to-buy" 
                className="w-full sm:w-auto bg-pepper-gold text-pepper-maroon px-8 py-4 rounded-full font-display text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-xl"
              >
                <MapPin size={20} />
                Find Near Me
              </a>
              <a 
                href="#flavors" 
                className="w-full sm:w-auto border-2 border-pepper-cream text-pepper-cream px-8 py-4 rounded-full font-display text-lg hover:bg-pepper-cream hover:text-pepper-maroon transition-all flex items-center justify-center gap-2"
              >
                Explore Flavors
                <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-1 relative"
          >
            <div className="relative w-full max-w-md mx-auto aspect-[3/4]">
              {/* Floating Elements */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 w-24 h-24 bg-pepper-gold/20 rounded-full blur-xl"
              />
              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-10 -left-10 w-32 h-32 bg-pepper-cream/10 rounded-full blur-xl"
              />
              
              {/* Main Product Image Placeholder */}
              <div className="w-full h-full bg-gradient-to-br from-pepper-maroon to-pepper-black rounded-3xl shadow-2xl overflow-hidden border-4 border-white/10 flex items-center justify-center relative">
                <img 
                  src="https://picsum.photos/seed/drpepper/800/1200" 
                  alt="Dr Pepper Can" 
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="bg-white text-pepper-maroon font-display px-6 py-2 rounded-sm text-4xl transform -rotate-12 shadow-2xl border-2 border-pepper-maroon">
                    Dr Pepper
                  </div>
                </div>
              </div>

              {/* Badge */}
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
                className="absolute -bottom-6 -right-6 bg-pepper-gold text-pepper-maroon w-24 h-24 rounded-full flex items-center justify-center text-center font-display text-sm leading-tight p-2 shadow-2xl transform rotate-12"
              >
                EST. 1885
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-pepper-cream/50 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-pepper-cream/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-pepper-cream/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
