
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-[#f0f2f5]">
      {/* Background Animated Gradients */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          style={{ willChange: 'transform, opacity' }}
          className="absolute top-[-20%] left-[-10%] w-[60%] h-[80%] bg-red-100 rounded-full blur-[80px]" 
        />
        <motion.div 
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          style={{ willChange: 'transform, opacity' }}
          className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[70%] bg-blue-100 rounded-full blur-[80px]" 
        />
        <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-emerald-50 rounded-full blur-[60px]" />
      </div>

      {/* Ribbon Lines Overlay */}
      <svg className="absolute inset-0 w-full h-full z-1 pointer-events-none opacity-40" preserveAspectRatio="none">
        <motion.path 
          d="M-100,200 Q400,100 800,400 T1600,200"
          fill="none" stroke="#ef4444" strokeWidth="2" 
          className="thread-flow"
        />
        <motion.path 
          d="M-100,500 Q600,300 1000,600 T1800,400"
          fill="none" stroke="#3b82f6" strokeWidth="2" 
          className="thread-flow"
          style={{ animationDelay: '-5s' }}
        />
        <motion.path 
          d="M-100,800 Q300,600 700,900 T1400,700"
          fill="none" stroke="#10b981" strokeWidth="2" 
          className="thread-flow"
          style={{ animationDelay: '-10s' }}
        />
      </svg>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-20 lg:pt-0">
        <div className="lg:col-span-7 text-center lg:text-left">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-[1.1]"
          >
            <span className="text-blue-900">Precision Threads,</span> <br />
            <span className="thread-gradient-text">Powered by Color.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
          >
            Sri Ganga Trading Co supplies premium sewing threads engineered for high-performance stitching across apparel, upholstery, leather goods, and industrial applications.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center lg:justify-start"
          >
            <button 
              onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-full font-bold text-lg shadow-xl shadow-red-200 hover:scale-105 transition-transform active:scale-95 group relative overflow-hidden"
            >
              <span className="relative z-10">Explore Product Catalog</span>
              <motion.div 
                animate={{ scale: [1, 1.5, 1], opacity: [0, 0.2, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-white"
              />
            </button>
            <a 
              href={`https://wa.me/919343456722?text=${encodeURIComponent('Hello Sri Ganga Trading Co, I would like to request a quote for your premium threads.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 glass text-gray-800 rounded-full font-bold text-lg hover:bg-white hover:shadow-xl transition-all active:scale-95 border border-white/50 flex items-center justify-center sm:w-auto"
            >
              Request a Quote
            </a>
          </motion.div>
        </div>

        <div className="lg:col-span-5 relative h-[450px] lg:h-[600px] flex items-center justify-center">
          {/* Video Visual Composition */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            style={{ willChange: 'transform, opacity' }}
            className="relative w-full max-w-md aspect-[4/5] rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] overflow-hidden border-4 border-white floating-anim"
          >
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="Vid/Metro.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10 pointer-events-none" />
            
            {/* Branding Badge */}
            <div className="absolute bottom-8 left-0 w-full text-center">
              <span className="text-[12px] font-black text-white tracking-[0.5em] drop-shadow-lg uppercase">Premium Quality</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bouncing Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50 cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-xs font-bold uppercase tracking-widest mb-2 text-gray-500">Scroll</span>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-gray-400 rounded-full" />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
