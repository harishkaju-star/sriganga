
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-gray-900 leading-tight">
            Let's Build a <br /><span className="text-red-600">Durable Partnership.</span>
          </h2>
          <p className="text-gray-500 text-lg mb-12 max-w-md">
            Reach out to Sri Ganga Trading Co for bulk pricing, shade cards, or technical consultations.
          </p>

          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-500 flex-shrink-0 border border-red-100">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div>
                <p className="text-gray-400 font-medium">+91 93434 56722</p>
                <p className="text-gray-400 text-sm">Mon - Sat: 10:00 AM - 7:00 PM</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-500 flex-shrink-0 border border-blue-100">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div>
                <p className="text-gray-400 font-medium">ganga.tradingco@yahoo.com</p>
                <p className="text-gray-400 text-sm">Industrial & Bulk Enquiries</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-500 flex-shrink-0 border border-emerald-100">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <p className="text-gray-400 font-medium leading-relaxed">39/2 6th cross, Magadi Rd, <br />Cholourpalya, Bengaluru</p>
                <p className="text-gray-400 text-sm">Karnataka 560023</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-gray-200/50 border border-gray-100"
          >
            {submitted ? (
              <div className="py-20 text-center">
                <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg width="40" height="40" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Enquiry Received!</h3>
                <p className="text-gray-500">Our team will get back to you within 1-2 business days. Thank you for choosing Sri Ganga Trading Co.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Full Name</label>
                  <input required type="text" className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl px-6 py-4 text-gray-900 focus:outline-none focus:border-red-500 focus:bg-white transition-all placeholder:text-gray-300" placeholder="Your Name" />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Company</label>
                  <input type="text" className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl px-6 py-4 text-gray-900 focus:outline-none focus:border-red-500 focus:bg-white transition-all placeholder:text-gray-300" placeholder="Company Name" />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Email Address</label>
                  <input required type="email" className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl px-6 py-4 text-gray-900 focus:outline-none focus:border-red-500 focus:bg-white transition-all placeholder:text-gray-300" placeholder="email@example.com" />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Phone Number</label>
                  <input required type="tel" className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl px-6 py-4 text-gray-900 focus:outline-none focus:border-red-500 focus:bg-white transition-all placeholder:text-gray-300" placeholder="+91 XXXX-XXXXXX" />
                </div>
                <div className="md:col-span-2 space-y-4">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Product Interest</label>
                  <div className="relative">
                    <select className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl px-6 py-4 text-gray-900 focus:outline-none focus:border-red-500 focus:bg-white transition-all appearance-none cursor-pointer">
                      <option>Metro Poly - Spun Polyester</option>
                      <option>Metro Poly - Poly Poly</option>
                      <option>Om Shiv Ram - Invisible Thread</option>
                      <option>Custom Dye Matching</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2 space-y-4">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Your Message</label>
                  <textarea rows={4} className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl px-6 py-4 text-gray-900 focus:outline-none focus:border-red-500 focus:bg-white transition-all placeholder:text-gray-300" placeholder="Tell us about your thread requirements..."></textarea>
                </div>
                <div className="md:col-span-2 pt-4">
                  <button type="submit" className="w-full py-5 bg-red-600 hover:bg-red-700 text-white font-black rounded-2xl shadow-xl shadow-red-500/20 transition-all hover:scale-[1.01] active:scale-95 uppercase tracking-widest text-sm">
                    Submit Enquiry
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
