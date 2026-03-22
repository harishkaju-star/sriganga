
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS } from '../constants';
import { ChevronDownIcon } from './Icons';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-gray-50 py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-8">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Everything you need to know about our sourcing, logistics, and technical specifications. Can't find an answer? 
              <span className="text-red-600 cursor-pointer font-bold hover:underline ml-1" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Contact our support team.</span>
            </p>
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-red-50">
              <h4 className="font-bold text-gray-800 mb-2">B2B Priority Support</h4>
              <p className="text-sm text-gray-500">We respond to technical and wholesale enquiries within 24-48 business hours.</p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {FAQS.map((faq, idx) => (
              <div 
                key={idx} 
                className={`rounded-2xl border transition-all duration-300 ${
                  openIndex === idx ? 'border-red-100 bg-white shadow-lg' : 'border-gray-100 bg-white/50 hover:bg-white'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full px-8 py-6 flex justify-between items-center text-left"
                >
                  <span className={`text-lg font-bold ${openIndex === idx ? 'text-red-600' : 'text-gray-800'}`}>
                    {faq.q}
                  </span>
                  <ChevronDownIcon className={`transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-red-600' : 'text-gray-400'}`} />
                </button>
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
