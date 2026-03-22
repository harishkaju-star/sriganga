
import React from 'react';
import { motion } from 'framer-motion';
import { ADVANTAGES } from '../constants';

const Advantages: React.FC = () => {
  return (
    <div className="py-20 bg-[#1a1a1a] text-white overflow-hidden relative">
      {/* Decorative Gradient Blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">The Sri Ganga Advantage</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Decades of textile expertise compressed into every spool.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ADVANTAGES.map((adv, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
            >
              <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-red-900/20 group-hover:scale-110 transition-transform">
                {adv.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{adv.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{adv.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Advantages;
