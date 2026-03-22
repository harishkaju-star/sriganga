
import React from 'react';
import { motion } from 'framer-motion';

// Importing existing and new images
import img1 from '../img/Neha metro photo 1.png';
import img2 from '../img/Neha metro photo 2.png';
import img3 from '../img/Neha metro photo 3.png';
import thread1 from '../img/Sam Avis Photo 1.png';
import thread2 from '../img/Sam Avis Photo 2.png';
import thread3 from '../img/Sam Avis Photo 3.png';
import metroToy from '../img/Metro Toy.png';

const products = [
  { image: img1, color: "from-red-600 to-red-400" },
  { image: img2, color: "from-blue-600 to-blue-400" },
  { image: img3, color: "from-emerald-600 to-emerald-400" },
  { image: thread1, color: "from-blue-900 to-blue-700" },
  { image: thread2, color: "from-amber-600 to-amber-400" },
  { image: thread3, color: "from-purple-600 to-purple-400" }
];

const ProductShowcase: React.FC = () => {
  return (
    <section id="showcase" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-20 text-center">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full bg-red-50 text-red-600 text-xs font-black uppercase tracking-[0.3em] mb-6"
            >
              Product Spotlight
            </motion.div>
            <div className="relative block">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight leading-tight"
              >
                Crafted for <span className="thread-gradient-text">Perfection.</span>
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-gray-500 text-lg md:text-xl mt-4 max-w-2xl mx-auto"
            >
              Industrial-grade precision visualized. Every thread is engineered for flawless performance.
            </motion.p>
          </div>

          {/* Metro Toy Character - Significantly increased size */}
          <motion.img
            src={metroToy}
            alt="Metro Toy Character"
            initial={{ opacity: 0, scale: 0.5, rotate: 15, x: 20 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 12, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              delay: 0.4
            }}
            className="w-56 h-56 md:w-80 md:h-80 lg:w-48 lg:h-96 object-contain drop-shadow-2xl"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative"
            >
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-gray-50 shadow-lg transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-2 p-6 flex items-center justify-center">
                {/* Decorative Pattern Layer */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none group-hover:opacity-[0.07] transition-opacity">
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id={`pattern-${idx}`} width="30" height="30" patternUnits="userSpaceOnUse">
                        <path d="M0 30L30 0M-5 5L5 -5M25 35L35 25" stroke="currentColor" strokeWidth="1" fill="none" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#pattern-${idx})`} />
                  </svg>
                </div>

                {/* Product Image - Contain instead of Cover */}
                <img
                  src={product.image}
                  alt={`Product ${idx + 1}`}
                  className="max-w-full max-h-full object-contain transition-transform duration-1000 group-hover:scale-105"
                />

                {/* Subtle Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-t ${product.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                {/* Light reflection effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
              </div>

              {/* Minimalist Badge (No text) */}
              <div className="absolute -top-3 -right-3 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center z-10 border border-gray-50 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 rotate-12 group-hover:rotate-0">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
