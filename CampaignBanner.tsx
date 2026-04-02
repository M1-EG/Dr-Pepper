import { motion } from 'motion/react';
import { Trophy, ArrowRight } from 'lucide-react';

export default function CampaignBanner() {
  return (
    <section className="py-24 bg-pepper-gold relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="grid grid-cols-6 h-full w-full">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-r border-pepper-maroon/20 h-full" />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-pepper-maroon text-pepper-cream px-4 py-2 rounded-full font-bold text-sm uppercase mb-6 shadow-lg">
              <Trophy size={18} />
              College Football Season
            </div>
            
            <h2 className="text-5xl md:text-7xl text-pepper-maroon mb-6 leading-tight">
              WIN TICKETS TO <br />
              <span className="text-white text-shadow-sm">THE BIG GAME</span>
            </h2>
            
            <p className="text-pepper-maroon/80 text-lg md:text-xl mb-10 max-w-xl mx-auto lg:mx-0 font-medium">
              Grab a cold Dr Pepper, scan the code, and you could be heading to the championship. No purchase necessary.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="w-full sm:w-auto bg-pepper-maroon text-pepper-cream px-10 py-5 rounded-full font-display text-xl hover:scale-105 transition-transform shadow-2xl">
                Enter Now
              </button>
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 text-pepper-maroon font-bold text-lg hover:gap-4 transition-all">
                See Official Rules
                <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="relative w-full max-w-lg mx-auto aspect-video rounded-3xl overflow-hidden shadow-2xl border-8 border-white/20">
              <img 
                src="https://picsum.photos/seed/football/1200/800" 
                alt="Football Stadium" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pepper-maroon/80 to-transparent flex items-end p-8">
                <div className="text-white">
                  <p className="font-display text-2xl mb-2">Fansville is Calling</p>
                  <p className="text-white/80">Experience the game like never before.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
