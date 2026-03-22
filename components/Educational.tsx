
import React from 'react';
import { motion } from 'framer-motion';

const Educational: React.FC = () => {
  const types = [
    {
      title: "Spun Polyester",
      desc: "Soft matte, staple fibers, for apparel and home textiles. High sewability and cost-effective.",
      color: "bg-red-50 text-red-600",
      icon: "✨"
    },
    {
      title: "Poly Poly",
      desc: "Smooth lustrous filament. High-speed industrial strength with superior abrasion and colorfastness.",
      color: "bg-blue-50 text-blue-600",
      icon: "⚡"
    },
    {
      title: "Invisible Thread",
      desc: "Ultra-fine transparent Mono-filament. Perfect for quilting and decorative hemming where stitches must vanish.",
      color: "bg-emerald-50 text-emerald-600",
      icon: "👁️"
    }
  ];

  const scrollToCatalog = () => {
    const el = document.getElementById('showcase');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Understanding Our Threads</h2>
          <p className="text-gray-600">Choosing the right thread is critical for the durability and finish of your product.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {types.map((type, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 group cursor-pointer"
              onClick={scrollToCatalog}
            >
              <div className={`w-14 h-14 rounded-2xl ${type.color} flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform`}>
                {type.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{type.title}</h3>
              <p className="text-gray-600 leading-relaxed">{type.desc}</p>
              <div className="mt-8 pt-6 border-t border-gray-50 flex items-center justify-between group/link">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-red-500 transition-colors">
                  Learn More
                </span>
                <span className="text-gray-300 group-hover:text-red-500 group-hover:translate-x-1 transition-all duration-300">
                  →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Educational;
