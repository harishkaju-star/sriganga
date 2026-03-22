
import React from 'react';
import { motion } from 'framer-motion';
import { QUALITY_PROCESS } from '../constants';

const QualityProcess: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      {/* Technical Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
        <div className="max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center space-x-3 mb-4"
          >
            <span className="h-px w-12 bg-blue-600"></span>
            <span className="text-blue-600 font-extrabold text-xs uppercase tracking-[0.3em]">Operational Protocol</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight leading-none">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">Quality Journey</span>
          </h2>
          <p className="mt-6 text-gray-500 text-lg leading-relaxed">
            From raw fiber selection to final precision winding, our multi-stage production protocol 
            ensures every millimeter of thread meets global industrial standards.
          </p>
        </div>
        
        <div className="hidden lg:block">
          <div className="flex items-center space-x-4 bg-gray-100 px-6 py-3 rounded-2xl border border-gray-200">
             <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-blue-600" />
                  </div>
                ))}
             </div>
             <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">ISO 9001 Certified Flow</span>
          </div>
        </div>
      </div>

      {/* Professional Technical Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {QUALITY_PROCESS.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="group relative"
          >
            <div className="h-full p-8 bg-white border border-gray-100 rounded-[2rem] shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500 group-hover:translate-y-[-5px] overflow-hidden">
              {/* Card Header */}
              <div className="flex justify-between items-start mb-6">
                <span className="text-5xl font-black text-gray-50 group-hover:text-blue-50 transition-colors leading-none tracking-tighter">
                  {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                </span>
                <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <svg className="w-4 h-4 text-gray-300 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>

              {/* Card Title & Content */}
              <h3 className="text-xl font-black text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                {step.description}
              </p>

              {/* Technical Specifications Overlay */}
              <div className="pt-6 border-t border-gray-50 grid grid-cols-2 gap-4">
                <div>
                  <span className="block text-[9px] font-black uppercase tracking-widest text-gray-400 mb-1">Standard</span>
                  <span className="text-xs font-bold text-gray-800 truncate block">{step.spec}</span>
                </div>
                <div>
                  <span className="block text-[9px] font-black uppercase tracking-widest text-gray-400 mb-1">Tolerance</span>
                  <span className="text-xs font-bold text-blue-600 truncate block">{step.metric}</span>
                </div>
              </div>

              {/* Decorative Accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600/0 via-blue-600/20 to-blue-600/0 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </motion.div>
        ))}

        {/* Closing Achievement Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="lg:col-span-1 xl:col-span-1"
        >
          <div className="h-full p-8 bg-gray-900 rounded-[2rem] flex flex-col items-center justify-center text-center shadow-xl shadow-gray-200">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-900/40">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Global Standards</h4>
            <p className="text-gray-400 text-xs">Ready for high-speed industrial performance worldwide.</p>
          </div>
        </motion.div>
      </div>

      {/* Trust Footer */}
      <div className="mt-16 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-gray-400 border-t border-gray-100 pt-12">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
          <span className="text-[10px] font-black uppercase tracking-widest">ISO 9001:2015</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
          <span className="text-[10px] font-black uppercase tracking-widest">Oeko-Tex Standard</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-red-500"></div>
          <span className="text-[10px] font-black uppercase tracking-widest">Reach Compliant</span>
        </div>
      </div>
    </div>
  );
};

export default QualityProcess;
