
import React from 'react';
import { motion } from 'framer-motion';

// Using the high-quality thread images
import img1 from './Images/1.png';
import img2 from './Images/2 (2).png';
import img3 from './Images/3.png';
import thread1 from './Images/thread_1.png';
import thread2 from './Images/thread_2.png';
import thread3 from './Images/thread_3.png';
import thread4 from './Images/thread_4.png';
import thread5 from './Images/thread_5.png';
import thread6 from './Images/thread_6.png';

interface ProductsPageProps {
  onBack: () => void;
}

const ProductsPage: React.FC<ProductsPageProps> = ({ onBack }) => {
  const images = [
    { src: img1 }, { src: img2 }, { src: img3 },
    { src: thread1 }, { src: thread2 }, { src: thread3 },
    { src: thread4 }, { src: thread5 }, { src: thread6 },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <nav className="fixed top-0 left-0 w-full z-50 py-6 glass shadow-sm">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <button onClick={onBack} className="flex items-center gap-2 text-gray-900 font-bold hover:text-red-600 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </button>
          <span className="font-black text-xl tracking-tight uppercase">Product Library</span>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6 container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 italic underline decoration-red-600 decoration-8 underline-offset-8">Our Products</h1>
          <p className="text-gray-500 text-xl max-w-2xl mx-auto">A pure visual showcase of Sri Ganga's premium thread collection. No labels, just excellence.</p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="relative group overflow-hidden rounded-[2.5rem] bg-gray-50 shadow-lg"
            >
              <img 
                src={img.src} 
                alt={`Product Detail ${idx + 1}`} 
                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProductsPage;
