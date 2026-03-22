
import React from 'react';
import { motion } from 'framer-motion';

// Importing gallery images directly for Vite processing
import gallery1 from '../img/1.png';
import gallery2 from '../img/2.png';
import gallery3 from '../img/factory.png';
import gallery4 from '../img/scene 7.png';
import gallery5 from '../img/Scene 4.png';
import gallery6 from '../img/metro 1.png';

const Gallery: React.FC = () => {
  const images = [
    { src: gallery1, title: 'Metro' },
    { src: gallery2, title: 'Avis' },
    { src: gallery3, title: 'Textile garments' },
    { src: gallery4, title: 'Metro' },
    { src: gallery5, title: "Everyone's Choice" },
    { src: gallery6, title: 'Premium colors' },
  ];

  return (
    <div id="gallery" className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">Inspiration & Applications</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Visualizing the strength and versatility that Sri Ganga threads bring to the global textile market.</p>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="relative group overflow-hidden rounded-3xl cursor-pointer shadow-md"
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
              <span className="text-xs font-bold text-red-500 uppercase tracking-widest mb-2">Sri Ganga Trading</span>
              <h4 className="text-xl font-bold text-white">{img.title}</h4>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
