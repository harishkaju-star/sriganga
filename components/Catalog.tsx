
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CATALOG_DATA } from '../constants';
import { CatalogBrand } from '../types';

const Catalog: React.FC = () => {
  const [activeBrand, setActiveBrand] = useState<CatalogBrand>(CatalogBrand.METRO_SPUN);

  return (
    <div className="container mx-auto px-6 max-w-7xl">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
        <div className="max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center space-x-3 mb-4"
          >
            <span className="h-px w-12 bg-red-600"></span>
            <span className="text-red-600 font-extrabold text-xs uppercase tracking-[0.3em]">Technical Specifications</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight leading-none mb-6">
            The Thread <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600">Matrix</span>
          </h2>
          <p className="text-gray-500 text-lg md:text-xl leading-relaxed">
            Industrial-grade precision, engineered for the world's most demanding textile applications. Explore our high-performance catalog.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2 bg-gray-100/50 p-1.5 rounded-2xl border border-gray-200/50">
          {Object.values(CatalogBrand).map((brand) => (
            <button
              key={brand}
              onClick={() => setActiveBrand(brand)}
              className={`relative px-6 py-3 rounded-xl font-bold transition-all text-sm ${
                activeBrand === brand 
                  ? 'text-white' 
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              <span className="relative z-10">{brand}</span>
              {activeBrand === brand && (
                <motion.div
                  layoutId="activeBrandBg"
                  className="absolute inset-0 bg-gray-900 rounded-xl shadow-lg shadow-gray-900/20"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeBrand}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "circOut" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
          {/* Brand Identity Card */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 p-8 md:p-10 bg-gradient-to-br from-gray-900 to-gray-800 rounded-[2.5rem] text-white shadow-2xl overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/20 rounded-full blur-[80px] group-hover:bg-red-600/40 transition-colors" />
              
              <div className="relative z-10">
                <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-[10px] font-black uppercase tracking-widest mb-6">
                  {activeBrand.includes('Poly Poly') ? 'Filament Series' : activeBrand.includes('Spun') ? 'Core Series' : 'Spec Series'}
                </div>
                <h3 className="text-3xl font-black mb-6 leading-tight">{CATALOG_DATA[activeBrand].brandName}</h3>
                <p className="text-gray-400 leading-relaxed mb-8 text-lg italic">
                  "{CATALOG_DATA[activeBrand].description}"
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                      <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <span className="text-sm font-bold text-gray-200">ASTM Certified Strength</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <span className="text-sm font-bold text-gray-200">Eco-Friendly Dye Process</span>
                  </div>
                </div>

                <a 
                  href={`https://wa.me/919343456722?text=${encodeURIComponent('Hello Sri Ganga Trading Co, I would like to request the product catalog (Spec Sheet) for your premium threads.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-12 w-full py-4 bg-white text-gray-900 font-black rounded-2xl hover:bg-red-500 hover:text-white transition-all shadow-xl shadow-black/20 flex items-center justify-center space-x-2 group/btn"
                >
                  <span>REQUEST CATALOG</span>
                  <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Technical Matrix */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl shadow-gray-200/40 overflow-hidden">
              <div className="hidden md:grid grid-cols-12 bg-gray-50/50 border-b border-gray-100 px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
                <div className="col-span-4">Technical Name</div>
                <div className="col-span-2 text-center">Spec / Ply</div>
                <div className="col-span-2 text-center">Length</div>
                <div className="col-span-4 text-right">Primary Application</div>
              </div>

              <div className="divide-y divide-gray-50">
                {CATALOG_DATA[activeBrand].products.map((product, idx) => (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    key={product.id}
                    className="grid grid-cols-1 md:grid-cols-12 items-center px-8 py-7 hover:bg-red-50/30 transition-all group cursor-default"
                  >
                    {/* Mobile Header logic implicitly handled by grid stack */}
                    <div className="col-span-1 md:col-span-4 mb-4 md:mb-0">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div>
                          <h4 className="font-extrabold text-gray-900 text-lg group-hover:text-red-700 transition-colors leading-tight">
                            {product.name}
                          </h4>
                          <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-red-400">
                            ID: SKU-{product.id.toUpperCase()}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-1 md:col-span-2 text-center mb-2 md:mb-0">
                      <div className="inline-block px-3 py-1 rounded-lg bg-gray-100 group-hover:bg-white text-xs font-bold text-gray-700 border border-transparent group-hover:border-red-100 transition-all">
                        {product.count} / {product.ply}
                      </div>
                    </div>

                    <div className="col-span-1 md:col-span-2 text-center mb-4 md:mb-0">
                      <span className="text-sm font-medium text-gray-600">{product.length}</span>
                      <div className="text-[9px] font-bold text-gray-400 uppercase tracking-tighter">Precision Wound</div>
                    </div>

                    <div className="col-span-1 md:col-span-4 flex flex-col md:items-end">
                      <span className="text-xs font-bold text-gray-900 md:text-right leading-tight mb-2">
                        {product.useCase}
                      </span>
                      <div className="flex flex-wrap md:justify-end gap-1.5">
                        <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-600 text-[9px] font-black uppercase border border-emerald-100">
                          {product.type}
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-blue-50 text-blue-600 text-[9px] font-black uppercase border border-blue-100">
                          {product.packing}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-gray-50/50 p-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center space-x-2 text-xs font-bold text-gray-400 italic">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  <span>Custom counts and lengths available upon corporate request.</span>
                </div>
                <div className="flex space-x-2">
                  <div className="w-2 h-2 rounded-full bg-red-600"></div>
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  <div className="w-2 h-2 rounded-full bg-emerald-600"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Catalog;
