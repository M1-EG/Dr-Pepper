import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';
import { Flavor } from '../types';

const flavors: Flavor[] = [
  {
    id: 'classic',
    name: 'Classic Dr Pepper',
    description: 'The original 23-flavor blend that started it all.',
    color: '#711F25',
    image: 'https://picsum.photos/seed/dpclassic/600/800',
  },
  {
    id: 'cherry',
    name: 'Dr Pepper Cherry',
    description: 'A smooth cherry twist on the classic taste.',
    color: '#A51C30',
    image: 'https://picsum.photos/seed/dpcherry/600/800',
  },
  {
    id: 'cream-soda',
    name: 'Dr Pepper & Cream Soda',
    description: 'The perfect harmony of 23 flavors and creamy vanilla.',
    color: '#E6C200',
    image: 'https://picsum.photos/seed/dpcream/600/800',
    isNew: true,
  },
  {
    id: 'zero-sugar',
    name: 'Dr Pepper Zero Sugar',
    description: 'All 23 flavors, zero sugar. No compromises.',
    color: '#1A1A1A',
    image: 'https://picsum.photos/seed/dpzero/600/800',
  },
];

export default function FlavorCarousel() {
  return (
    <section id="flavors" className="py-24 bg-pepper-cream overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <div className="flex flex-col md:flex-row items-end justify-between gap-6">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-pepper-maroon font-bold text-sm uppercase tracking-widest mb-4 block"
            >
              The Full Lineup
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl text-pepper-maroon"
            >
              PICK YOUR <br />
              <span className="text-pepper-gold">ONE OF A KIND</span>
            </motion.h2>
          </div>
          <motion.a 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="#" 
            className="flex items-center gap-2 text-pepper-maroon font-bold border-b-2 border-pepper-gold pb-1 hover:gap-4 transition-all"
          >
            See All 23 Flavors
            <ArrowRight size={20} />
          </motion.a>
        </div>
      </div>

      {/* Carousel */}
      <div className="flex overflow-x-auto pb-12 px-4 md:px-[10%] gap-6 no-scrollbar snap-x snap-mandatory">
        {flavors.map((flavor, index) => (
          <motion.div 
            key={flavor.id}
            initial={{ opacity: 0, y: 50, rotate: 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="min-w-[280px] md:min-w-[350px] bg-white rounded-3xl p-6 shadow-xl snap-center group hover:scale-[1.02] transition-transform"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6">
              <img 
                src={flavor.image} 
                alt={flavor.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              {flavor.isNew && (
                <div className="absolute top-4 right-4 bg-pepper-gold text-pepper-maroon px-3 py-1 rounded-full font-bold text-xs uppercase flex items-center gap-1">
                  <Star size={12} fill="currentColor" />
                  New
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <button className="w-full bg-white text-pepper-maroon py-3 rounded-xl font-bold uppercase tracking-tighter">
                  Quick View
                </button>
              </div>
            </div>
            
            <h3 className="text-2xl text-pepper-maroon mb-2">{flavor.name}</h3>
            <p className="text-pepper-black/60 text-sm mb-6 line-clamp-2">
              {flavor.description}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={14} className="text-pepper-gold" fill="currentColor" />
                ))}
              </div>
              <a 
                href="#" 
                className="text-pepper-maroon font-bold text-sm uppercase tracking-widest hover:text-pepper-gold transition-colors"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
